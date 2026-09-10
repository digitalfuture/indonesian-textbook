<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useProgressStore } from "./stores/progress";
import { useLoadingBar } from "./composables/useLoadingBar";
import AppHeader from "./components/Layout/AppHeader.vue";
import AppSidebar from "./components/Layout/AppSidebar.vue";
import AppFooter from "./components/Layout/AppFooter.vue";

const progressStore = useProgressStore();
const { isLoading } = useLoadingBar();

const drawerVisible = ref(false);

let timeInterval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  progressStore.init();
  // Track time spent every 30 seconds
  timeInterval = setInterval(() => {
    progressStore.addTimeSpent(0.5);
  }, 30000);
});

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval);
    timeInterval = null;
  }
});

function toggleDrawer() {
  drawerVisible.value = !drawerVisible.value;
}
</script>

<template>
  <div class="app-layout">
    <div v-if="isLoading" class="global-loading-bar"></div>
    <AppHeader :drawer-visible="drawerVisible" @toggle-drawer="toggleDrawer" />
    <AppSidebar v-model:visible="drawerVisible" />

    <main class="app-main">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.global-loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary) 0%, #38bdf8 50%, #a855f7 100%);
  z-index: 9999;
  animation: loadingBarAnim 1.2s infinite ease-in-out;
  pointer-events: none;
}

@keyframes loadingBarAnim {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--text);
}

.app-main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .app-main {
    padding: 1.25rem 0.75rem;
  }
}
</style>
