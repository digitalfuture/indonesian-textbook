<template>
  <button class="lang-toggle" @click="toggle" :title="$t('lang.switch.interface') + ' / ' + $t('lang.switch.target')">
    {{ langStore.interfaceLang.toUpperCase() }} → {{ langStore.targetLang.toUpperCase() }}
  </button>
</template>

<script setup lang="ts">
import { useLanguageStore } from "../../stores/language";

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
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.4;
  display: flex;
  align-items: center;
}

.lang-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>
