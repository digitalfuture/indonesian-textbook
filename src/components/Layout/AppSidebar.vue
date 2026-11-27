<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";
import { useSound } from "../../composables/useSound";
import { useLanguageStore } from "../../stores/language";
import { useProgressStore } from "../../stores/progress";
import { useAIStore } from "../../stores/ai";
import CountryFlag from "../common/CountryFlag.vue";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "update:visible", value: boolean): void;
}>();

const router = useRouter();
const route = useRoute();
const { theme, toggleTheme } = useTheme();
const { isSoundEnabled, toggleSound } = useSound();
const langStore = useLanguageStore();
const progressStore = useProgressStore();
const aiStore = useAIStore();

const drawerVisible = ref(false);

watch(
  () => props.visible,
  (val) => {
    drawerVisible.value = val;
  },
  { immediate: true },
);

watch(drawerVisible, (val) => {
  emit("update:visible", val);
});

const menuItems = computed(() => {
  const items = [
    { key: "course", labelKey: "nav.course", icon: "pi pi-compass", path: "", matchPrefix: ["/lessons", "/lesson"] },
    { key: "exercises", labelKey: "nav.exercises", icon: "pi pi-bolt", path: "/exercises", matchPrefix: ["/exercises"] },
    { key: "dictionary", labelKey: "nav.dictionary", icon: "pi pi-book", path: "/dictionary", matchPrefix: ["/dictionary"] },
    { key: "grammar", labelKey: "nav.grammar", icon: "pi pi-table", path: "/grammar", matchPrefix: ["/grammar"] },
    { key: "phrasebook", labelKey: "nav.phrasebook", icon: "pi pi-comments", path: "/phrasebook", matchPrefix: ["/phrasebook"] },
    { key: "progress", labelKey: "nav.progress", icon: "pi pi-chart-line", path: "/progress", matchPrefix: ["/progress"] },
  ];
  if (aiStore.isSupported) {
    items.push({ key: "ai-chat", labelKey: "nav.aiChat", icon: "pi pi-sparkles", path: "/ai-chat", matchPrefix: ["/ai-chat"] });
  }
  return items;
});

const stats = computed(() => progressStore.getLearningStats());

onMounted(async () => {
  await aiStore.initialize();
});

function isItemActive(item: { path: string; matchPrefix: string[] }): boolean {
  const base = `/${langStore.interfaceLang}/${langStore.targetLang}`;
  const current = route.path;
  if (item.path === "") {
    if (current === base || current === base + "/") return true;
    return item.matchPrefix.some((p) => current === base + p || current.startsWith(base + p + "/"));
  }
  return current === base + item.path || current.startsWith(base + item.path + "/");
}

function onMenuClick(path: string) {
  router.push(`/${langStore.interfaceLang}/${langStore.targetLang}${path}`);
  drawerVisible.value = false;
}
</script>

<template>
  <PDrawer
    v-model:visible="drawerVisible"
    header=" "
    position="left"
    :dismissable="true"
    :show-close-icon="true"
    class="app-drawer"
  >
    <template #header>
      <div class="drawer-header">
        <CountryFlag :lang="langStore.targetLang" size="sm" />
        <span class="drawer-title">{{ $t('sidebar.title.' + langStore.targetLang) }}</span>
      </div>
    </template>

    <div class="drawer-body">
      <div class="drawer-progress-card">
        <div class="drawer-progress-top">
          <span>{{ $t('home.dashboard.courseProgress') }}</span>
          <strong>{{ Math.round(stats.lessonProgress) }}%</strong>
        </div>
        <div class="progress">
          <div class="progress-bar" :style="{ width: Math.min(100, stats.lessonProgress) + '%' }"></div>
        </div>
        <div class="drawer-progress-meta">
          <span>🔥 {{ stats.streakDays }}</span>
          <span>⭐ {{ stats.totalPoints }}</span>
        </div>
      </div>

      <nav class="menu-section">
        <button
          v-for="item in menuItems"
          :key="item.key"
          class="drawer-menu-item"
          :class="{ active: isItemActive(item) }"
          @click="onMenuClick(item.path)"
          type="button"
        >
          <i :class="item.icon"></i>
          <span>{{ $t(item.labelKey) }}</span>
        </button>
      </nav>

      <div class="drawer-footer-section">
        <button class="drawer-action-toggle" @click="toggleSound" type="button">
          <i :class="isSoundEnabled ? 'pi pi-volume-up' : 'pi pi-volume-off'"></i>
          <span>{{ $t(isSoundEnabled ? 'sound.enabled' : 'sound.disabled') }}</span>
        </button>
        <button class="drawer-action-toggle" @click="toggleTheme" type="button">
          <i :class="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"></i>
          <span>{{ $t(theme === 'dark' ? 'theme.light' : 'theme.dark') }}</span>
        </button>
      </div>
    </div>
  </PDrawer>
</template>

<style scoped>
.app-drawer :deep(.p-drawer) {
  width: 300px;
  max-width: 85vw;
}

.drawer-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.drawer-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-h);
}

.drawer-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
}

.drawer-progress-card {
  padding: 0.9rem 1rem;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.drawer-progress-top {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text);
}

.drawer-progress-top strong {
  color: var(--primary);
}

.drawer-progress-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  color: var(--muted);
  font-weight: 600;
}

.menu-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.drawer-menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.72rem 0.95rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.16s ease;
  color: var(--text);
  background: transparent;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: left;
  width: 100%;
}

.drawer-menu-item:hover {
  background: var(--bg-subtle);
  color: var(--text-h);
}

.drawer-menu-item.active {
  background: var(--primary-solid);
  color: var(--primary-on-solid);
  font-weight: 600;
}

.drawer-menu-item i {
  font-size: 1.05rem;
  width: 1.3rem;
  text-align: center;
}

.drawer-footer-section {
  border-top: 1px solid var(--border);
  padding-top: 0.75rem;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.drawer-action-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 0.95rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.15s ease;
  color: var(--text);
  background: transparent;
  border: none;
  font-size: 0.92rem;
  width: 100%;
  text-align: left;
}

.drawer-action-toggle:hover {
  background: var(--bg-subtle);
  color: var(--text-h);
}

.drawer-action-toggle i {
  font-size: 1.05rem;
  width: 1.3rem;
  text-align: center;
}
</style>
