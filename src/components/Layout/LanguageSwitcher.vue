<template>
  <button
    class="lang-toggle"
    @click="toggle"
    :title="$t('lang.switch.interface') + ' / ' + $t('lang.switch.target')"
  >
    <CountryFlag :lang="langStore.interfaceLang" size="xs" />
    <span class="lang-code">{{ langStore.interfaceLang.toUpperCase() }}</span>
    <span class="lang-arrow">⇄</span>
    <CountryFlag :lang="langStore.targetLang" size="xs" />
    <span class="lang-code highlight">{{ langStore.targetLang.toUpperCase() }}</span>
  </button>
</template>

<script setup lang="ts">
import { useLanguageStore } from "../../stores/language";
import CountryFlag from "../common/CountryFlag.vue";

const langStore = useLanguageStore();

function toggle() {
  if (langStore.interfaceLang === "ru") {
    langStore.setInterface("id");
    langStore.setTarget("ru");
  } else {
    langStore.setInterface("ru");
    langStore.setTarget("id");
  }
}
</script>

<style scoped>
.lang-toggle {
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
  border: 1px solid var(--border);
  background: var(--code-bg);
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.lang-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-bg);
  transform: translateY(-1px);
}

.lang-arrow {
  opacity: 0.6;
  font-size: 0.85rem;
}

.lang-code {
  font-size: 0.75rem;
}

.lang-code.highlight {
  color: var(--primary);
}
</style>
