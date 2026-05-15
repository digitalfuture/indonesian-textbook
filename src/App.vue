<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useProgressStore } from "./stores/progress";
import { computed, onMounted, onUnmounted } from "vue";
import { useTheme } from "./composables/useTheme";

const progressStore = useProgressStore();
const { theme, toggleTheme } = useTheme();

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

const stats = computed(() => progressStore.getLearningStats());
</script>

<template>
  <div class="app">
    <header class="app-header">
      <div class="header-container">
        <RouterLink to="/" class="logo">
          <span class="logo-icon">🇮🇩</span>
          <span class="logo-text">Индонезийский за 16 уроков</span>
        </RouterLink>

        <nav class="main-nav">
          <RouterLink to="/lessons" class="nav-link">
            <span class="nav-icon">📚</span>
            <span>Уроки</span>
          </RouterLink>
          <RouterLink to="/grammar" class="nav-link">
            <span class="nav-icon">📊</span>
            <span>Грамматика</span>
          </RouterLink>
          <RouterLink to="/dictionary" class="nav-link">
            <span class="nav-icon">📖</span>
            <span>Словарь</span>
          </RouterLink>
          <RouterLink to="/exercises" class="nav-link">
            <span class="nav-icon">✍️</span>
            <span>Упражнения</span>
          </RouterLink>
          <RouterLink to="/progress" class="nav-link">
            <span class="nav-icon">📈</span>
            <span>Прогресс</span>
          </RouterLink>
          <button
            @click="toggleTheme"
            class="theme-toggle"
            :title="theme === 'dark' ? 'Светлая тема' : 'Темная тема'"
          >
            <span class="nav-icon">{{ theme === "dark" ? "☀️" : "🌙" }}</span>
          </button>
        </nav>
      </div>
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      <div class="footer-container">
        <div class="footer-stats">
          <div class="stat-item">
            <span class="stat-value"
              >{{ Math.round(stats.wordProgress) }}%</span
            >
            <span class="stat-label">Слов</span>
          </div>
          <div class="stat-item">
            <span class="stat-value"
              >{{ Math.round(stats.lessonProgress) }}%</span
            >
            <span class="stat-label">Уроков</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ stats.exerciseProgress }}</span>
            <span class="stat-label">Упражнений</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ stats.totalPoints }}</span>
            <span class="stat-label">Баллов</span>
          </div>
        </div>

        <div class="footer-info">
          <p>
            Метод Дмитрия Петрова • Интерактивный учебник индонезийского языка
          </p>
          <p class="copyright">
            © 2024 Indonesian Textbook. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--text);
}

.app-header {
  background: var(--primary-gradient);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
}

.logo-icon {
  font-size: 1.5rem;
}

.main-nav {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 500;
}

.nav-icon {
  font-size: 1.1rem;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.9);
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.app-main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
}

.app-footer {
  background: var(--footer-bg);
  color: var(--footer-text);
  padding: 2rem 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--stat-color);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--footer-text);
}

.footer-info {
  text-align: right;
}

.footer-info p {
  margin: 0.25rem 0;
  font-size: 0.875rem;
}

.copyright {
  font-size: 0.75rem;
  color: var(--muted);
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 1rem;
  }

  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }

  .footer-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-stats {
    gap: 1rem;
  }

  .footer-info {
    text-align: center;
  }
}
</style>
