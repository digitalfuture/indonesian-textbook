<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";
import { useLanguageStore } from "../../stores/language";
import LanguageSwitcher from "./LanguageSwitcher.vue";

defineProps<{
  drawerVisible: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle-drawer"): void;
}>();

const router = useRouter();
const route = useRoute();
const { theme, toggleTheme } = useTheme();
const langStore = useLanguageStore();

const navItems = [
  { labelKey: "nav.home", icon: "pi pi-home", path: "" },
  { labelKey: "nav.lessons", icon: "pi pi-book", path: "/lessons" },
  { labelKey: "nav.grammar", icon: "pi pi-table", path: "/grammar" },
  { labelKey: "nav.dictionary", icon: "pi pi-list", path: "/dictionary" },
  { labelKey: "nav.exercises", icon: "pi pi-pencil", path: "/exercises" },
  { labelKey: "nav.progress", icon: "pi pi-chart-bar", path: "/progress" },
];

function isActive(path: string): boolean {
  const prefix = `/${langStore.interfaceLang}/${langStore.targetLang}${path}`;
  return route.path === prefix || route.path.startsWith(prefix + "/");
}

function navigate(path: string) {
  const to = `/${langStore.interfaceLang}/${langStore.targetLang}${path}`;
  router.push(to);
}
</script>

<template>
  <header class="app-header">
    <PToolbar class="header-toolbar">
      <template #start>
        <PButton
          class="hamburger-btn"
          icon="pi pi-bars"
          severity="secondary"
          text
          rounded
          :aria-label="$t('header.menu')"
          @click="emit('toggle-drawer')"
        />
        <div class="logo" @click="navigate('')">
          <span class="logo-flag">{{ langStore.targetLang === 'id' ? '🇮🇩' : '🇷🇺' }}</span>
          <span class="logo-text">{{ $t('header.logo.' + langStore.targetLang) }}</span>
        </div>
      </template>

      <template #center>
        <nav class="desktop-nav">
            <button
              v-for="item in navItems"
              :key="item.path"
              class="nav-link"
              :class="{ active: isActive(item.path) }"
              @click="navigate(item.path)"
            >
              <i :class="item.icon"></i>
              <span>{{ $t(item.labelKey) }}</span>
            </button>
        </nav>
      </template>

      <template #end>
        <div class="header-end">
          <LanguageSwitcher />
          <PButton
            :icon="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
            severity="secondary"
            text
            rounded
            :aria-label="$t(theme === 'dark' ? 'theme.light' : 'theme.dark')"
            v-tooltip.top="$t(theme === 'dark' ? 'theme.light' : 'theme.dark')"
            @click="toggleTheme"
          />
        </div>
      </template>
    </PToolbar>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-toolbar {
  border-radius: 0;
  padding: 0.5rem 1rem;
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.logo-flag {
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.1rem;
  font-weight: 700;
  white-space: nowrap;
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  border: none;
  background: transparent;
  color: var(--p-text-muted-color);
  font-size: 0.9rem;
  border-radius: var(--p-border-radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background: var(--p-content-hover-background);
  color: var(--p-text-color);
}

.nav-link.active {
  background: var(--p-primary-color);
  color: var(--p-primary-contrast-color);
  font-weight: 500;
}

.nav-link i {
  font-size: 1rem;
}

/* Show desktop nav on larger screens */
@media (min-width: 768px) {
  .hamburger-btn {
    display: none;
  }

  .desktop-nav {
    display: flex;
  }

  .header-toolbar :deep(.p-toolbar-center) {
    flex: 1;
    display: flex;
    justify-content: center;
  }
}

.header-end {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 1024px) {
  .logo-text {
    font-size: 1rem;
  }

  .logo {
    margin-top: -5px;
  }
}

@media (max-width: 480px) {
  .logo-text {
    display: none;
  }

  .header-toolbar {
    padding: 0.5rem;
  }

  .logo {
    margin-top: -9px;
  }
}
</style>
