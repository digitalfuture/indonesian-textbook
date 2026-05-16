<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";

defineProps<{
  drawerVisible: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle-drawer"): void;
}>();

const router = useRouter();
const route = useRoute();
const { theme, toggleTheme } = useTheme();

const navItems = [
  { label: "Главная", icon: "pi pi-home", to: "/" },
  { label: "Уроки", icon: "pi pi-book", to: "/lessons" },
  { label: "Грамматика", icon: "pi pi-table", to: "/grammar" },
  { label: "Словарь", icon: "pi pi-list", to: "/dictionary" },
  { label: "Упражнения", icon: "pi pi-pencil", to: "/exercises" },
  { label: "Прогресс", icon: "pi pi-chart-bar", to: "/progress" },
];

function isActive(path: string): boolean {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
}

function navigate(to: string) {
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
          aria-label="Меню"
          @click="emit('toggle-drawer')"
        />
        <div class="logo" @click="navigate('/')">
          <span class="logo-flag">🇮🇩</span>
          <span class="logo-text">Индонезийский за 16 уроков</span>
        </div>
      </template>

      <template #center>
        <nav class="desktop-nav">
          <button
            v-for="item in navItems"
            :key="item.to"
            class="nav-link"
            :class="{ active: isActive(item.to) }"
            @click="navigate(item.to)"
          >
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </button>
        </nav>
      </template>

      <template #end>
        <PButton
          :icon="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
          severity="secondary"
          text
          rounded
          :aria-label="theme === 'dark' ? 'Светлая тема' : 'Темная тема'"
          v-tooltip.top="theme === 'dark' ? 'Светлая тема' : 'Темная тема'"
          @click="toggleTheme"
        />
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
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.logo-flag {
  font-size: 1.5rem;
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

@media (max-width: 1024px) {
  .logo-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .logo-text {
    display: none;
  }

  .header-toolbar {
    padding: 0.5rem;
  }
}
</style>
