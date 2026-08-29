<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";
import { useLanguageStore } from "../../stores/language";
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
const langStore = useLanguageStore();
const aiStore = useAIStore();
const activeKey = ref<string>("0");

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

const menuItems = ref([
  { key: "0", labelKey: "nav.home", icon: "pi pi-home", path: "" },
  { key: "1", labelKey: "nav.lessons", icon: "pi pi-book", path: "/lessons" },
  { key: "2", labelKey: "nav.grammar", icon: "pi pi-table", path: "/grammar" },
  { key: "3", labelKey: "nav.dictionary", icon: "pi pi-list", path: "/dictionary" },
  { key: "4", labelKey: "nav.exercises", icon: "pi pi-pencil", path: "/exercises" },
  { key: "5", labelKey: "nav.progress", icon: "pi pi-chart-bar", path: "/progress" },
]);

onMounted(async () => {
  await aiStore.initialize();
  if (aiStore.isSupported) {
    menuItems.value.push({ key: "6", labelKey: "nav.aiChat", icon: "pi pi-comments", path: "/ai-chat" });
  }
});

watch(
  () => route.path,
  (path) => {
    const prefix = `/${langStore.interfaceLang}/${langStore.targetLang}`;
    const item = menuItems.value.find((m) => {
      const fullPath = prefix + m.path;
      return path === fullPath || path.startsWith(fullPath + "/");
    });
    if (item) {
      activeKey.value = item.key;
    }
  },
  { immediate: true },
);

function onMenuClick(item: any) {
  if (item.path !== undefined) {
    const to = `/${langStore.interfaceLang}/${langStore.targetLang}${item.path}`;
    router.push(to);
    drawerVisible.value = false;
  }
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
      <div class="menu-section">
        <div
          v-for="item in menuItems"
          :key="item.key"
          class="drawer-menu-item"
          :class="{ active: activeKey === item.key }"
          @click="onMenuClick(item)"
        >
          <i :class="item.icon"></i>
          <span>{{ $t(item.labelKey) }}</span>
        </div>
      </div>

      <div class="drawer-footer-section">
        <div class="drawer-theme-toggle" @click="toggleTheme">
          <i :class="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"></i>
          <span>{{ $t(theme === 'dark' ? 'theme.light' : 'theme.dark') }}</span>
        </div>
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
  gap: 0.5rem;
  padding: 0.5rem 0;
}

.drawer-flag {
  font-size: 1.5rem;
}

.drawer-title {
  font-size: 1rem;
  font-weight: 700;
}

.drawer-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 0.5rem;
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
  padding: 0.75rem 1rem;
  border-radius: var(--p-border-radius-md);
  cursor: pointer;
  transition: all 0.15s ease;
  color: var(--p-text-muted-color);
  font-size: 0.95rem;
}

.drawer-menu-item:hover {
  background: var(--p-content-hover-background);
  color: var(--p-text-color);
}

.drawer-menu-item.active {
  background: var(--p-primary-color);
  color: var(--p-primary-contrast-color);
  font-weight: 500;
}

.drawer-menu-item i {
  font-size: 1.15rem;
  width: 1.5rem;
  text-align: center;
}

.drawer-footer-section {
  border-top: 1px solid var(--p-content-border-color);
  padding-top: 0.75rem;
  margin-top: auto;
}

.drawer-theme-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--p-border-radius-md);
  cursor: pointer;
  transition: all 0.15s ease;
  color: var(--p-text-muted-color);
  font-size: 0.95rem;
}

.drawer-theme-toggle:hover {
  background: var(--p-content-hover-background);
  color: var(--p-text-color);
}

.drawer-theme-toggle i {
  font-size: 1.15rem;
  width: 1.5rem;
  text-align: center;
}
</style>
