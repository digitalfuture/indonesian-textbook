import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { copyFileSync } from "fs";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: "copy-index-as-404",
      closeBundle() {
        // Copy index.html to 404.html for GitHub Pages SPA support
        copyFileSync(
          resolve(__dirname, "dist", "index.html"),
          resolve(__dirname, "dist", "404.html"),
        );
        console.log("✓ 404.html created for GitHub Pages SPA routing");
      },
    },
  ],
  base: "/indonesian-textbook/", // Путь для GitHub Pages с именем репозитория
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
