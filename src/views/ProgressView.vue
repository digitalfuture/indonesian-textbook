<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useProgressStore } from "../stores/progress";
import { lessons } from "../data/lessons";

const router = useRouter();
const progressStore = useProgressStore();

const stats = computed(() => progressStore.getLearningStats());
const wordsLearnedCount = computed(
  () =>
    Object.values(progressStore.progress.vocabulary).filter((v) => v.isLearned)
      .length,
);
const lessonsCompletedCount = computed(
  () =>
    Object.values(progressStore.progress.lessons).filter((l) => l.isCompleted)
      .length,
);

const showExportModal = ref(false);
const showImportModal = ref(false);
const importData = ref("");

function goToLesson(id: number) {
  router.push(`/lesson/${id}`);
}

function exportProgress() {
  progressStore.downloadProgress();
}

function importProgress() {
  if (importData.value) {
    const success = progressStore.importProgressData(importData.value);
    if (success) {
      showImportModal.value = false;
      importData.value = "";
    } else {
      alert("Ошибка импорта. Проверьте данные.");
    }
  }
}

function resetProgress() {
  if (confirm("Вы уверены? Весь прогресс будет удалён.")) {
    progressStore.resetProgress();
  }
}

const achievementList = [
  {
    id: "first_lesson",
    name: "Первый урок",
    description: "Завершите первый урок",
    icon: "🎯",
  },
  {
    id: "vocabulary_50",
    name: "Любитель слов",
    description: "Изучите 50 слов",
    icon: "📚",
  },
  {
    id: "vocabulary_100",
    name: "Словарный запас",
    description: "Изучите 100 слов",
    icon: "📖",
  },
  {
    id: "week_streak",
    name: "Недельная серия",
    description: "Занимайтесь 7 дней подряд",
    icon: "🔥",
  },
  {
    id: "exercise_50",
    name: "Трудяга",
    description: "Выполните 50 упражнений",
    icon: "💪",
  },
];
</script>

<template>
  <div class="progress-view">
    <header class="progress-header">
      <h1>📈 Ваш прогресс</h1>
      <p class="progress-description">
        Отслеживайте свои достижения в изучении индонезийского языка
      </p>
    </header>

    <!-- Общая статистика -->
    <section class="stats-section">
      <h2>Общая статистика</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">📚</div>
          <div class="stat-info">
            <span class="stat-value">{{ wordsLearnedCount }}</span>
            <span class="stat-label">Слов изучено</span>
          </div>
          <div class="stat-progress">
            <div class="progress">
              <div
                class="progress-bar"
                :style="{ width: stats.wordProgress + '%' }"
              ></div>
            </div>
            <span class="progress-text"
              >{{ Math.round(stats.wordProgress) }}%</span
            >
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">📖</div>
          <div class="stat-info">
            <span class="stat-value">{{ lessonsCompletedCount }}</span>
            <span class="stat-label">Уроков завершено</span>
          </div>
          <div class="stat-progress">
            <div class="progress">
              <div
                class="progress-bar"
                :style="{ width: stats.lessonProgress + '%' }"
              ></div>
            </div>
            <span class="progress-text"
              >{{ Math.round(stats.lessonProgress) }}%</span
            >
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">✍️</div>
          <div class="stat-info">
            <span class="stat-value">{{ stats.exerciseProgress }}</span>
            <span class="stat-label">Упражнений выполнено</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">⭐</div>
          <div class="stat-info">
            <span class="stat-value">{{ stats.totalPoints }}</span>
            <span class="stat-label">Баллов набрано</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">🔥</div>
          <div class="stat-info">
            <span class="stat-value">{{ stats.streakDays }}</span>
            <span class="stat-label">Дней подряд</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">⏱️</div>
          <div class="stat-info">
            <span class="stat-value"
              >{{ Math.floor(stats.timeSpent / 60) }}ч
              {{ Math.floor(stats.timeSpent % 60) }}мин</span
            >
            <span class="stat-label">Времени потрачено</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Прогресс по урокам -->
    <section class="lessons-progress">
      <h2>Прогресс по урокам</h2>
      <div class="lessons-list">
        <div
          v-for="lesson in lessons"
          :key="lesson.id"
          class="lesson-progress-item"
          :class="{ completed: progressStore.isLessonCompleted(lesson.id) }"
          @click="goToLesson(lesson.id)"
        >
          <div class="lesson-number">
            {{ lesson.id }}
          </div>
          <div class="lesson-info">
            <h3>{{ lesson.title }}</h3>
            <p>{{ lesson.description }}</p>
          </div>
          <div class="lesson-status">
            <span
              v-if="progressStore.isLessonCompleted(lesson.id)"
              class="status-completed"
            >
              ✅ Завершено
            </span>
            <span v-else class="status-pending"> ⬜ Не начато </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Достижения -->
    <section class="achievements-section">
      <h2>Достижения</h2>
      <div class="achievements-grid">
        <div
          v-for="achievement in achievementList"
          :key="achievement.id"
          class="achievement-card"
          :class="{ unlocked: progressStore.hasAchievement(achievement.id) }"
        >
          <div class="achievement-icon">
            {{ achievement.icon }}
          </div>
          <div class="achievement-info">
            <h3>{{ achievement.name }}</h3>
            <p>{{ achievement.description }}</p>
          </div>
          <div class="achievement-status">
            {{ progressStore.hasAchievement(achievement.id) ? "🏆" : "🔒" }}
          </div>
        </div>
      </div>
    </section>

    <!-- Управление прогрессом -->
    <section class="settings-section">
      <h2>Управление прогрессом</h2>
      <div class="settings-grid">
        <button class="btn btn-primary" @click="showExportModal = true">
          📥 Экспорт прогресса
        </button>
        <button class="btn btn-secondary" @click="showImportModal = true">
          📤 Импорт прогресса
        </button>
        <button class="btn btn-outline" @click="resetProgress">
          🗑️ Сбросить прогресс
        </button>
      </div>
    </section>

    <!-- Модальное окно экспорта -->
    <div
      v-if="showExportModal"
      class="modal-overlay"
      @click="showExportModal = false"
    >
      <div class="modal" @click.stop>
        <h3>Экспорт прогресса</h3>
        <p>Ваш прогресс будет сохранён в файл JSON.</p>
        <textarea
          :value="progressStore.exportProgressDataInner()"
          readonly
          class="export-textarea"
        ></textarea>
        <div class="modal-actions">
          <button class="btn btn-primary" @click="exportProgress">
            Скачать файл
          </button>
          <button class="btn btn-outline" @click="showExportModal = false">
            Закрыть
          </button>
        </div>
      </div>
    </div>

    <!-- Модальное окно импорта -->
    <div
      v-if="showImportModal"
      class="modal-overlay"
      @click="showImportModal = false"
    >
      <div class="modal" @click.stop>
        <h3>Импорт прогресса</h3>
        <p>Вставьте данные JSON для импорта прогресса.</p>
        <textarea
          v-model="importData"
          placeholder="Вставьте JSON данные здесь..."
          class="import-textarea"
        ></textarea>
        <div class="modal-actions">
          <button class="btn btn-primary" @click="importProgress">
            Импортировать
          </button>
          <button class="btn btn-outline" @click="showImportModal = false">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-view {
  max-width: 1000px;
  margin: 0 auto;
}

.progress-header {
  margin-bottom: 2rem;
  text-align: center;
}

.progress-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.progress-description {
  font-size: 1.1rem;
  color: #4a5568;
}

section {
  margin-bottom: 3rem;
}

section h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #2d3748;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: var(--bg);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--border);
}

.stat-icon {
  font-size: 2rem;
}

.stat-info {
  flex: 1;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
}

.stat-label {
  font-size: 0.85rem;
  color: #718096;
}

.stat-progress {
  width: 100px;
  text-align: right;
}

.progress-text {
  font-size: 0.85rem;
  color: #667eea;
  font-weight: 500;
}

.lessons-list {
  display: grid;
  gap: 0.75rem;
}

.lesson-progress-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg);
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.3s ease;
}

.lesson-progress-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.lesson-progress-item.completed {
  border-left: 4px solid #48bb78;
}

.lesson-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.lesson-info {
  flex: 1;
}

.lesson-info h3 {
  font-size: 1rem;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.lesson-info p {
  font-size: 0.85rem;
  color: #718096;
  margin: 0;
}

.lesson-status {
  flex-shrink: 0;
}

.status-completed {
  color: #48bb78;
  font-weight: 500;
}

.status-pending {
  color: #a0aec0;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.achievement-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg);
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  opacity: 0.6;
}

.achievement-card.unlocked {
  opacity: 1;
  border-left: 4px solid #ecc94b;
}

.achievement-icon {
  font-size: 1.5rem;
}

.achievement-info {
  flex: 1;
}

.achievement-info h3 {
  font-size: 0.95rem;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.achievement-info p {
  font-size: 0.8rem;
  color: #718096;
  margin: 0;
}

.achievement-status {
  font-size: 1.25rem;
}

.settings-section h2 {
  margin-bottom: 1rem;
}

.settings-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: var(--bg);
  border-radius: 0.75rem;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.modal h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.modal p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.export-textarea,
.import-textarea {
  width: 100%;
  height: 150px;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-family: monospace;
  font-size: 0.85rem;
  resize: vertical;
  margin-bottom: 1rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .settings-grid {
    flex-direction: column;
  }
}
</style>
