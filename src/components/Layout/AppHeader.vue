<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";
import { useSound } from "../../composables/useSound";
import { useLanguageStore } from "../../stores/language";
import { useProgressStore } from "../../stores/progress";
import { useAIStore } from "../../stores/ai";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import CountryFlag from "../common/CountryFlag.vue";

defineProps<{
  drawerVisible: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle-drawer"): void;
}>();

const router = useRouter();
const route = useRoute();
const { theme, toggleTheme } = useTheme();
const { isSoundEnabled, toggleSound } = useSound();
const langStore = useLanguageStore();
const progressStore = useProgressStore();
const aiStore = useAIStore();

const navItems = computed(() => {
  const items = [
    { labelKey: "nav.course", icon: "pi pi-compass", path: "", matchPrefix: ["/lessons", "/lesson"] },
    { labelKey: "nav.exercises", icon: "pi pi-bolt", path: "/exercises", matchPrefix: ["/exercises"] },
    { labelKey: "nav.dictionary", icon: "pi pi-book", path: "/dictionary", matchPrefix: ["/dictionary"] },
    { labelKey: "nav.grammar", icon: "pi pi-table", path: "/grammar", matchPrefix: ["/grammar"] },
    { labelKey: "nav.phrasebook", icon: "pi pi-comments", path: "/phrasebook", matchPrefix: ["/phrasebook"] },
    { labelKey: "nav.progress", icon: "pi pi-chart-line", path: "/progress", matchPrefix: ["/progress"] },
  ];
  if (aiStore.isSupported) {
    items.push({ labelKey: "nav.aiChat", icon: "pi pi-sparkles", path: "/ai-chat", matchPrefix: ["/ai-chat"] });
  }
  return items;
});

onMounted(async () => {
  await aiStore.initialize();
});

function isActive(item: { path: string; matchPrefix: string[] }): boolean {
  const base = `/${langStore.interfaceLang}/${langStore.targetLang}`;
  const current = route.path;
  if (item.path === "") {
    if (current === base || current === base + "/") return true;
    return item.matchPrefix.some((p) => current === base + p || current.startsWith(base + p + "/"));
  }
  return current === base + item.path || current.startsWith(base + item.path + "/");
}

function navigate(path: string) {
  router.push(`/${langStore.interfaceLang}/${langStore.targetLang}${path}`);
}
</script>

<template>
  <header class="app-header">
    <div class="header-inner">
      <div class="header-left">
        <button
          class="icon-btn hamburger-btn"
          :aria-label="$t('header.menu')"
          @click="emit('toggle-drawer')"
        >
          <i class="pi pi-bars"></i>
        </button>

        <button class="logo" @click="navigate('')" type="button">
          <CountryFlag :lang="langStore.targetLang" size="sm" />
          <span class="logo-text">{{ $t('header.logo.' + langStore.targetLang) }}</span>
        </button>
      </div>

      <nav class="desktop-nav" aria-label="Main navigation">
        <button
          v-for="item in navItems"
          :key="item.path"
          class="nav-link"
          :class="{ active: isActive(item) }"
          @click="navigate(item.path)"
          type="button"
        >
          <i :class="item.icon"></i>
          <span>{{ $t(item.labelKey) }}</span>
        </button>
      </nav>

      <div class="header-end">
        <button
          v-if="progressStore.streakDays > 0"
          class="streak-pill"
          @click="navigate('/progress')"
          :title="$t('progress.stats.streakDays')"
          type="button"
        >
          <span class="streak-flame">🔥</span>
          <span>{{ progressStore.streakDays }}</span>
        </button>

        <LanguageSwitcher />

        <button
          class="icon-btn"
          :aria-label="$t(isSoundEnabled ? 'sound.mute' : 'sound.unmute')"
          v-tooltip.bottom="$t(isSoundEnabled ? 'sound.mute' : 'sound.unmute')"
          @click="toggleSound"
          type="button"
        >
          <i :class="isSoundEnabled ? 'pi pi-volume-up' : 'pi pi-volume-off'"></i>
        </button>

        <button
          class="icon-btn"
          :aria-label="$t(theme === 'dark' ? 'theme.light' : 'theme.dark')"
          v-tooltip.bottom="$t(theme === 'dark' ? 'theme.light' : 'theme.dark')"
          @click="toggleTheme"
          type="button"
        >
          <i :class="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-glass);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  flex-shrink: 1;
  overflow: hidden;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0.3rem;
  border-radius: var(--radius-sm);
  color: var(--text-h);
  transition: opacity 0.18s ease;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
}

.logo:hover {
  opacity: 0.85;
}

.logo-text {
  font-family: var(--font-display);
  font-size: 0.94rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.02em;
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 0.15rem;
  padding: 0.2rem;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 999px;
  flex-shrink: 0;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.38rem 0.7rem;
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 0.84rem;
  font-weight: 500;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.18s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--text-h);
  background: var(--bg-card);
}

.nav-link.active {
  background: var(--primary);
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.28);
}

.nav-link i {
  font-size: 0.84rem;
}

.header-end {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
}

.streak-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.28rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(217, 119, 6, 0.3);
  background: var(--warning-soft);
  color: var(--warning);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.streak-pill:hover {
  transform: translateY(-1px);
}

.streak-flame {
  font-size: 0.85rem;
  line-height: 1;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: all 0.18s ease;
  font-size: 0.98rem;
}

.icon-btn:hover {
  background: var(--bg-subtle);
  color: var(--text-h);
  border-color: var(--border);
}

@media (min-width: 1120px) {
  .hamburger-btn {
    display: none;
  }

  .desktop-nav {
    display: flex;
  }
}

@media (max-width: 1220px) and (min-width: 1120px) {
  .nav-link {
    padding: 0.36rem 0.58rem;
    font-size: 0.81rem;
  }

  .nav-link i {
    display: none;
  }
}

@media (max-width: 520px) {
  .logo-text {
    display: none;
  }

  .header-inner {
    padding: 0.55rem 0.75rem;
  }
}
</style>
