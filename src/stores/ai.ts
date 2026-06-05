import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useProgressStore } from "./progress";

// Декларация типов для window.ai (Prompt API в Google Chrome)
declare global {
  interface Window {
    ai?: {
      languageModel?: {
        capabilities: () => Promise<{ available: "no" | "readily" | "after-download" }>;
        create: (options: { systemPrompt: string }) => Promise<any>;
      };
      assistant?: {
        capabilities: () => Promise<{ available: "no" | "readily" | "after-download" }>;
        create: (options: { systemPrompt: string }) => Promise<any>;
      };
    };
  }
}

export interface ChatMessage {
  role: "user" | "model";
  content: string;
  rawContent?: string;
  recommendedWords?: string[];
  corrections?: {
    word: string;
    correctForm: string;
    explanation: string;
  }[];
  error?: boolean;
}

export const useAIStore = defineStore("ai", () => {
  const isSupported = ref(false);
  const status = ref<"checking" | "ready" | "downloading" | "unsupported">("checking");
  const messages = ref<ChatMessage[]>([]);
  const isGenerating = ref(false);
  
  let session: any = null;

  let initPromise: Promise<boolean> | null = null;

  // Инициализация и проверка поддержки Prompt API
  async function initialize() {
    if (initPromise) return initPromise;

    initPromise = (async () => {
      status.value = "checking";
      if (typeof window === "undefined" || !window.ai) {
        isSupported.value = false;
        status.value = "unsupported";
        return false;
      }

      try {
        const lm = window.ai.languageModel || window.ai.assistant;
        if (!lm) {
          isSupported.value = false;
          status.value = "unsupported";
          return false;
        }

        const capabilities = await lm.capabilities();
        if (capabilities.available === "no") {
          isSupported.value = false;
          status.value = "unsupported";
          return false;
        }

        isSupported.value = true;
        
        if (capabilities.available === "after-download") {
          status.value = "downloading";
          // В реальном API загрузка происходит при вызове create()
        } else {
          status.value = "ready";
        }

        return true;
      } catch (e) {
        console.error("Error checking built-in AI capabilities:", e);
        isSupported.value = false;
        status.value = "unsupported";
        return false;
      }
    })();

    return initPromise;
  }


  // Создание новой сессии с системным промптом
  async function startNewSession() {
    if (session) {
      try {
        await session.destroy();
      } catch (e) {
        // Игнорируем ошибки при очистке
      }
      session = null;
    }

    const systemPrompt = `You are a helpful Indonesian language tutor. You are practicing conversation with a beginner student.
Respond ONLY with a JSON object. Do not include markdown code block formatting (like \`\`\`json), just raw JSON.

JSON Structure:
{
  "reply": "your conversational reply in Indonesian. Keep it simple and friendly.",
  "recommendedWords": ["word1", "word2", "word3"], // 3-4 basic Indonesian words the student can use to respond. Choose simple words relevant to the dialog.
  "corrections": [
    {
      "word": "incorrect_word_or_phrase",
      "correctForm": "correct_form",
      "explanation": "short explanation in Russian why it was incorrect and how to fix it"
    }
  ]
}

Instructions:
1. Keep the "reply" short, friendly, and easy to understand (using basic Indonesian vocabulary from lessons 1-16).
2. Ask one simple question in your reply to keep the dialogue going.
3. If the user makes an error in vocabulary, grammar, or word order, list it in "corrections". If their sentence is correct, leave "corrections" as an empty array.
4. "recommendedWords" must be simple Indonesian words (e.g. saya, kamu, nama, dari, tinggal, makan, minum, pagi, kabar, baik, etc.) that will help the user formulate their next response.
5. Speak primarily Indonesian. Do not use English. Make sure explanations in corrections are in Russian.`;

    try {
      const lm = window.ai?.languageModel || window.ai?.assistant;
      if (!lm) throw new Error("Prompt API is not supported in this browser");

      session = await lm.create({ systemPrompt });
      status.value = "ready";
    } catch (e) {
      console.error("Error creating AI session:", e);
      status.value = "unsupported";
      throw e;
    }
  }

  // Отправка сообщения и стриминг ответа
  async function sendMessage(text: string) {
    if (isGenerating.value) return;

    if (!session) {
      await startNewSession();
    }

    isGenerating.value = true;
    
    // Добавляем сообщение пользователя
    messages.value.push({
      role: "user",
      content: text,
    });

    // Вставляем временное сообщение ИИ для стриминга
    const modelMsgIndex = messages.value.push({
      role: "model",
      content: "...",
      rawContent: "",
    }) - 1;

    try {
      const promptText = `User message: "${text}"\nRespond in JSON format as specified in the system prompt.`;
      let rawResponse = "";

      if (session.promptStreaming) {
        const stream = session.promptStreaming(promptText);
        for await (const chunk of stream) {
          rawResponse = chunk;
          messages.value[modelMsgIndex].rawContent = rawResponse;
        }
      } else {
        rawResponse = await session.prompt(promptText);
        messages.value[modelMsgIndex].rawContent = rawResponse;
      }

      // Парсим JSON
      const parsed = cleanAndParseJSON(rawResponse);
      messages.value[modelMsgIndex].content = parsed.reply;
      messages.value[modelMsgIndex].recommendedWords = parsed.recommendedWords || [];
      messages.value[modelMsgIndex].corrections = parsed.corrections || [];

      // Интеграция с progressStore для подсчета освоения слов
      const progressStore = useProgressStore();

      // Сбрасываем уровень освоения слов при ошибках
      if (parsed.corrections && parsed.corrections.length > 0) {
        parsed.corrections.forEach((c: any) => {
          if (c.word) {
            // Очищаем слово от пунктуации и пробелов
            const cleanedWord = c.word.replace(/[^\p{L}\p{N}\s]/gu, "").trim();
            progressStore.resetWordMastery(cleanedWord);
          }
        });
      }

      // Проверяем, использовал ли пользователь слова из предыдущей рекомендации ИИ
      const previousMsg = messages.value[messages.value.length - 3]; // user = -2, model = -1 (current), model previous = -3
      if (previousMsg && previousMsg.recommendedWords) {
        previousMsg.recommendedWords.forEach((word: string) => {
          const normalizedUserText = text.toLowerCase();
          const normalizedWord = word.toLowerCase().trim();

          if (normalizedUserText.includes(normalizedWord)) {
            // Проверяем, не было ли это слово помечено как ошибочное в текущем ответе
            const wasCorrected = parsed.corrections?.some(
              (c: any) => c.word && c.word.toLowerCase().trim() === normalizedWord
            );
            if (!wasCorrected) {
              progressStore.incrementWordMastery(word);
            }
          }
        });
      }

    } catch (e) {
      console.error("AI prompt error:", e);
      messages.value[modelMsgIndex].content = "Ошибка при получении ответа от встроенного ИИ Chrome.";
      messages.value[modelMsgIndex].error = true;
    } finally {
      isGenerating.value = false;
    }
  }

  // Сброс диалога
  async function resetChat() {
    messages.value = [];
    isGenerating.value = false;
    await startNewSession();
  }

  // Парсинг JSON-ответа
  function cleanAndParseJSON(text: string): { reply: string; recommendedWords: string[]; corrections: any[] } {
    let cleaned = text.trim();
    
    // Удаляем markdown разметку
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```(?:json)?/, "").replace(/```$/, "").trim();
    }

    try {
      return JSON.parse(cleaned);
    } catch (e) {
      // Пытаемся извлечь JSON регулярным выражением
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          return JSON.parse(match[0]);
        } catch (inner) {
          // Игнорируем
        }
      }
      
      // Возвращаем дефолтную структуру при ошибке
      return {
        reply: text,
        recommendedWords: [],
        corrections: [],
      };
    }
  }

  return {
    isSupported,
    status,
    messages,
    isGenerating,
    initialize,
    startNewSession,
    sendMessage,
    resetChat,
  };
});
