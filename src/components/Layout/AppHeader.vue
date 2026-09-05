<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";
import { useSound } from "../../composables/useSound";
import { useLanguageStore } from "../../stores/language";
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
const aiStore = useAIStore();

const isVisible = ref(true);
let lastScrollY = 0;
const SCROLL_THRESHOLD = 10;

const navItems = ref([
  { labelKey: "nav.home", icon: "pi pi-home", path: "" },
  { labelKey: "nav.lessons", icon: "pi pi-book", path: "/lessons" },
  { labelKey: "nav.grammar", icon: "pi pi-table", path: "/grammar" },
  { labelKey: "nav.dictionary", icon: "pi pi-list", path: "/dictionary" },
  { labelKey: "nav.exercises", icon: "pi pi-pencil", path: "/exercises" },
  { labelKey: "nav.progress", icon: "pi pi-chart-bar", path: "/progress" },
]);

function handleScroll() {
  const currentScrollY = window.scrollY;

  // Always show near top
  if (currentScrollY <= 60) {
    isVisible.value = true;
    lastScrollY = currentScrollY;
    return;
  }

  // Check scroll direction with threshold to prevent jitter
  if (Math.abs(currentScrollY - lastScrollY) < SCROLL_THRESHOLD) {
    return;
  }

  if (currentScrollY > lastScrollY) {
    // Scrolling down -> hide
    isVisible.value = false;
  } else {
    // Scrolling up -> show
    isVisible.value = true;
  }

  lastScrollY = currentScrollY;
}

onMounted(async () => {
  lastScrollY = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });

  await aiStore.initialize();
  if (aiStore.isSupported) {
    navItems.value.push({ labelKey: "nav.aiChat", icon: "pi pi-comments", path: "/ai-chat" });
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function isActive(path: string): boolean {
  const prefix = `/${langStore.interfaceLang}/${langStore.targetLang}${path}`;
  if (!path) {
    return route.path === prefix;
  }
  return route.path.startsWith(prefix + "/") || route.path === prefix;
}

function navigate(path: string) {
  const to = `/${langStore.interfaceLang}/${langStore.targetLang}${path}`;
  router.push(to);
}
</script>

<template>
  <header class="app-header" :class="{ 'header-hidden': !isVisible }">
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
          <CountryFlag :lang="langStore.targetLang" size="sm" />
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
            :icon="isSoundEnabled ? 'pi pi-volume-up' : 'pi pi-volume-off'"
            severity="secondary"
            text
            rounded
            :aria-label="$t(isSoundEnabled ? 'sound.mute' : 'sound.unmute')"
            v-tooltip.top="$t(isSoundEnabled ? 'sound.mute' : 'sound.unmute')"
            @click="toggleSound"
          />
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
  transition: transform 0.3s ease;
  will-change: transform;
}

.app-header.header-hidden {
  transform: translateY(-100%);
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
