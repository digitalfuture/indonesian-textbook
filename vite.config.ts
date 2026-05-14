import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/indonesian-textbook/", // Путь для GitHub Pages с именем репозитория
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
