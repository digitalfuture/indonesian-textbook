import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { copyFileSync, mkdirSync, readFileSync } from "fs";
import { resolve } from "path";

const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "package.json"), "utf-8"),
);
const appVersion: string = pkg.version || "0.0.0";
const buildTime: string = new Date().toISOString();

const spaStaticRoutes = [
  "ru/id",
  "id/ru",
  "ru/id/lessons",
  "ru/id/grammar",
  "ru/id/dictionary",
  "ru/id/phrasebook",
  "ru/id/exercises",
  "ru/id/progress",
  "ru/id/ai-chat",
  "id/ru/lessons",
  "id/ru/grammar",
  "id/ru/dictionary",
  "id/ru/phrasebook",
  "id/ru/exercises",
  "id/ru/progress",
  "id/ru/ai-chat",
];

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
    __BUILD_TIME__: JSON.stringify(buildTime),
  },
  plugins: [
    vue(),
    {
      name: "copy-spa-entry-points",
      closeBundle() {
        const indexHtml = resolve(__dirname, "dist", "index.html");
        // Copy index.html to 404.html for GitHub Pages SPA fallback
        copyFileSync(indexHtml, resolve(__dirname, "dist", "404.html"));
        // Also generate 200 OK entry points for primary SPA routes to avoid 404 console noise
        for (const route of spaStaticRoutes) {
          const dir = resolve(__dirname, "dist", route);
          mkdirSync(dir, { recursive: true });
          copyFileSync(indexHtml, resolve(dir, "index.html"));
        }
        console.log("✓ 404.html and SPA route entry points created for GitHub Pages");
      },
    },
  ],
  base: "/indonesian-textbook/", // Путь для GitHub Pages с именем репозитория
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("primevue") ||
              id.includes("primeicons") ||
              id.includes("@primevue") ||
              id.includes("@primeuix")
            ) {
              return "primevue";
            }
            return "vendor";
          }
          if (
            id.includes("src/data/vocabulary") ||
            id.includes("src/data/vocabularyRu")
          ) {
            return "vocabulary-data";
          }
          if (
            id.includes("src/data/lessons") ||
            id.includes("src/data/lessonsRu") ||
            id.includes("src/data/exercises") ||
            id.includes("src/data/exercisesRu")
          ) {
            return "course-data";
          }
        },
      },
    },
  },
});
