<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useLanguageStore } from "../../stores/language";

const router = useRouter();
const route = useRoute();
const langStore = useLanguageStore();

const tabs = [
  { labelKey: "nav.course", icon: "pi pi-compass", path: "", matchPrefix: ["/lessons", "/lesson"] },
  { labelKey: "nav.exercises", icon: "pi pi-bolt", path: "/exercises", matchPrefix: ["/exercises"] },
  { labelKey: "nav.dictionary", icon: "pi pi-book", path: "/dictionary", matchPrefix: ["/dictionary"] },
  { labelKey: "nav.phrasebook", icon: "pi pi-comments", path: "/phrasebook", matchPrefix: ["/phrasebook"] },
  { labelKey: "nav.progress", icon: "pi pi-chart-line", path: "/progress", matchPrefix: ["/progress"] },
];

function isActive(tab: { path: string; matchPrefix: string[] }): boolean {
  const base = `/${langStore.interfaceLang}/${langStore.targetLang}`;
  const current = route.path;
  if (tab.path === "") {
    if (current === base || current === base + "/") return true;
    return tab.matchPrefix.some((p) => current === base + p || current.startsWith(base + p + "/"));
  }
  return current === base + tab.path || current.startsWith(base + tab.path + "/");
}

function navigate(path: string) {
  router.push(`/${langStore.interfaceLang}/${langStore.targetLang}${path}`);
}
</script>

<template>
  <nav class="mobile-bottom-nav" aria-label="Mobile navigation">
    <button
      v-for="tab in tabs"
      :key="tab.path"
      class="bottom-tab"
      :class="{ active: isActive(tab) }"
      @click="navigate(tab.path)"
      type="button"
    >
      <i :class="tab.icon"></i>
      <span>{{ $t(tab.labelKey) }}</span>
    </button>
  </nav>
</template>

<style scoped>
.mobile-bottom-nav {
  display: none;
}

@media (max-width: 768px) {
  .mobile-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 95;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background: var(--bg-glass);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-top: 1px solid var(--border);
    padding: 0.35rem 0.25rem calc(0.35rem + env(safe-area-inset-bottom, 0px));
  }

  .bottom-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.18rem;
    padding: 0.35rem 0.2rem;
    background: transparent;
    border: none;
    color: var(--muted);
    font-size: 0.68rem;
    font-weight: 500;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: color 0.16s ease;
    min-width: 0;
  }

  .bottom-tab i {
    font-size: 1.12rem;
  }

  .bottom-tab span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }

  .bottom-tab.active {
    color: var(--primary);
    font-weight: 700;
  }
}
</style>
