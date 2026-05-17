import TelegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

if (!token) {
  console.error("TELEGRAM_BOT_TOKEN not set");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

// MCP server: reads stdin, writes stdout (JSON-RPC style)
// Tools: telegram_send_message, telegram_get_updates

process.stdin.on("data", async (chunk: Buffer) => {
  try {
    const lines = chunk.toString().trim().split("\n");
    for (const line of lines) {
      if (!line.trim()) continue;
      const req = JSON.parse(line);
      await handleRequest(req);
    }
  } catch (e: any) {
    console.error("Parse error:", e.message);
  }
});

async function handleRequest(req: any) {
  const { id, method, params } = req;

  if (method === "tools/list") {
    const response = {
      id,
      result: {
        tools: [
          {
            name: "telegram_send_message",
            description: "Send a message to the user via Telegram",
            inputSchema: {
              type: "object",
              properties: {
                text: { type: "string", description: "Message text" },
              },
              required: ["text"],
            },
          },
          {
            name: "telegram_get_updates",
            description: "Get recent unread messages from Telegram",
            inputSchema: {
              type: "object",
              properties: {
                limit: { type: "number", description: "Max messages (default 10)" },
              },
            },
          },
        ],
      },
    };
    writeResponse(response);
    return;
  }

  if (method === "tools/call") {
    const toolName = params?.name;
    const args = params?.arguments || {};

    if (toolName === "telegram_send_message") {
      try {
        if (chatId) {
          await bot.sendMessage(chatId, args.text);
          writeResponse({ id, result: { content: [{ type: "text", text: "Message sent" }] } });
        } else {
          writeResponse({ id, result: { content: [{ type: "text", text: "TELEGRAM_CHAT_ID not set" }] } });
        }
      } catch (e: any) {
        writeResponse({ id, error: { message: e.message } });
      }
      return;
    }

    if (toolName === "telegram_get_updates") {
      try {
        const updates = await bot.getUpdates({ timeout: 5, limit: args.limit || 10, offset: -1 });
        // Filter to only messages from our chat
        const messages = updates
          .filter((u) => u.message && chatId && String(u.message.chat.id) === chatId)
          .map((u) => ({
            from: u.message!.from?.first_name || "Unknown",
            text: u.message!.text || "(media)",
            date: new Date(u.message!.date * 1000).toISOString(),
          }));
        writeResponse({
          id,
          result: { content: [{ type: "text", text: JSON.stringify(messages, null, 2) }] },
        });
      } catch (e: any) {
        writeResponse({ id, error: { message: e.message } });
      }
      return;
    }

    writeResponse({ id, error: { message: `Unknown tool: ${toolName}` } });
    return;
  }

  // Notify the MCP host that we're ready
  if (method === "initialize") {
    writeResponse({ id, result: { serverInfo: { name: "telegram-mcp" } } });
    return;
  }
}

function writeResponse(obj: any) {
  process.stdout.write(JSON.stringify(obj) + "\n");
}
