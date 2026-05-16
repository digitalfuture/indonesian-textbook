<template>
  <div class="language-switcher">
    <div class="lang-row">
      <span class="lang-label">{{ $t("lang.switch.interface") }}</span>
      <div class="lang-buttons">
        <button
          v-for="lang in interfaceOptions"
          :key="'i-' + lang.code"
          :class="['lang-btn', { active: langStore.interfaceLang === lang.code }]"
          @click="switchInterface(lang.code)"
        >
          {{ lang.flag }} {{ lang.label[locale] }}
        </button>
      </div>
    </div>
    <div class="lang-row">
      <span class="lang-label">{{ $t("lang.switch.target") }}</span>
      <div class="lang-buttons">
        <button
          v-for="lang in targetOptions"
          :key="'t-' + lang.code"
          :class="['lang-btn', { active: langStore.targetLang === lang.code }]"
          @click="switchTarget(lang.code)"
        >
          {{ lang.flag }} {{ lang.label[locale] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from "../../stores/language";
import { useI18n } from "vue-i18n";

type LangCode = "ru" | "id";

const langStore = useLanguageStore();
const { locale } = useI18n();

interface LangOption {
  code: LangCode;
  flag: string;
  label: Record<string, string>;
}

const interfaceOptions: LangOption[] = [
  { code: "ru", flag: "🇷🇺", label: { ru: "Русский", id: "Rusia" } },
  { code: "id", flag: "🇮🇩", label: { ru: "Индонезийский", id: "Indonesia" } },
];

const targetOptions: LangOption[] = [
  { code: "id", flag: "🇮🇩", label: { ru: "Индонезийский", id: "Bahasa Indonesia" } },
  { code: "ru", flag: "🇷🇺", label: { ru: "Русский", id: "Bahasa Rusia" } },
];

function switchInterface(lang: "ru" | "id") {
  langStore.setInterface(lang);
}

function switchTarget(lang: "ru" | "id") {
  langStore.setTarget(lang);
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.5rem 0;
}

.lang-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.lang-label {
  font-size: 0.75rem;
  color: var(--text);
  opacity: 0.7;
  white-space: nowrap;
}

.lang-buttons {
  display: flex;
  gap: 0.25rem;
}

.lang-btn {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.lang-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.lang-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
</style>
