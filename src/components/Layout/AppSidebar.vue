<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "update:visible", value: boolean): void;
}>();

const router = useRouter();
const route = useRoute();
const { theme, toggleTheme } = useTheme();
const activeKey = ref<string>("0");

// Sync drawer visibility
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
  {
    key: "0",
    label: "Главная",
    icon: "pi pi-home",
    route: "/",
  },
  {
    key: "1",
    label: "Уроки",
    icon: "pi pi-book",
    route: "/lessons",
  },
  {
    key: "2",
    label: "Грамматика",
    icon: "pi pi-table",
    route: "/grammar",
  },
  {
    key: "3",
    label: "Словарь",
    icon: "pi pi-list",
    route: "/dictionary",
  },
  {
    key: "4",
    label: "Упражнения",
    icon: "pi pi-pencil",
    route: "/exercises",
  },
  {
    key: "5",
    label: "Прогресс",
    icon: "pi pi-chart-bar",
    route: "/progress",
  },
]);

// Update active key based on current route
watch(
  () => route.path,
  (path) => {
    const item = menuItems.value.find(
      (m) => (m.route === "/" && path === "/") || (m.route !== "/" && path.startsWith(m.route)),
    );
    if (item) {
      activeKey.value = item.key;
    }
  },
  { immediate: true },
);

function onMenuClick(item: any) {
  if (item.route) {
    router.push(item.route);
    drawerVisible.value = false;
  }
}
</script>

<template>
  <PDrawer
    v-model:visible="drawerVisible"
    header="Индонезийский учебник"
    position="left"
    :dismissable="true"
    :show-close-icon="true"
    class="app-drawer"
  >
    <template #header>
      <div class="drawer-header">
        <span class="drawer-flag">🇮🇩</span>
        <span class="drawer-title">Индонезийский учебник</span>
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
          <span>{{ item.label }}</span>
        </div>
      </div>

      <div class="drawer-footer-section">
        <div class="drawer-theme-toggle" @click="toggleTheme">
          <i :class="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"></i>
          <span>{{ theme === "dark" ? "Светлая тема" : "Темная тема" }}</span>
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
