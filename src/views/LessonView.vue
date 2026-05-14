<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProgressStore } from "../stores/progress";
import { lessons } from "../data/lessons";

const route = useRoute();
const router = useRouter();
const progressStore = useProgressStore();

const lessonId = computed(() => parseInt(route.params.id as string));

const lesson = computed(() => lessons.find((l) => l.id === lessonId.value));
const lessonProgress = computed(() =>
  progressStore.lessonProgress(lessonId.value),
);
const isCompleted = computed(() =>
  progressStore.isLessonCompleted(lessonId.value),
);

const currentStep = ref<"theory" | "examples" | "exercises">("theory");

const nextLesson = computed(() => {
  if (lessonId.value < 16) {
    return lessons.find((l) => l.id === lessonId.value + 1);
  }
  return null;
});

const prevLesson = computed(() => {
  if (lessonId.value > 1) {
    return lessons.find((l) => l.id === lessonId.value - 1);
  }
  return null;
});

function goToLesson(id: number) {
  router.push(`/lesson/${id}`);
}

function goToExercises() {
  router.push(`/exercises/lesson/${lessonId.value}`);
}

function completeLesson() {
  progressStore.completeLesson(lessonId.value, 100);
}
</script>

<template>
  <div class="lesson-view" v-if="lesson">
    <!-- Заголовок урока -->
    <header class="lesson-header">
      <div class="lesson-nav">
        <button
          v-if="prevLesson"
          class="btn btn-outline btn-sm"
          @click="goToLesson(prevLesson.id)"
        >
          ← Урок {{ prevLesson.id }}
        </button>
        <span class="lesson-number">Урок {{ lesson.id }}</span>
        <button
          v-if="nextLesson"
          class="btn btn-outline btn-sm"
          @click="goToLesson(nextLesson.id)"
        >
          Урок {{ nextLesson.id }} →
        </button>
      </div>

      <h1>{{ lesson.title }}</h1>
      <p class="lesson-description">{{ lesson.description }}</p>

      <div class="lesson-meta">
        <span class="meta-item">⏱️ {{ lesson.estimatedTime }} мин</span>
        <span v-if="isCompleted" class="meta-item completed">✅ Завершено</span>
        <span class="meta-item"
          >{{ lessonProgress?.completedExercises?.length || 0 }}/{{
            lesson.exercises.length
          }}
          упражнений</span
        >
      </div>
    </header>

    <!-- Навигация по шагам -->
    <nav class="lesson-tabs">
      <button
        :class="['tab', { active: currentStep === 'theory' }]"
        @click="currentStep = 'theory'"
      >
        📖 Теория
      </button>
      <button
        :class="['tab', { active: currentStep === 'examples' }]"
        @click="currentStep = 'examples'"
      >
        💡 Примеры
      </button>
      <button
        :class="['tab', { active: currentStep === 'exercises' }]"
        @click="currentStep = 'exercises'"
      >
        ✍️ Упражнения
      </button>
    </nav>

    <!-- Контент -->
    <main class="lesson-content">
      <!-- Теория -->
      <section v-if="currentStep === 'theory'" class="theory-section fade-in">
        <div class="content-card">
          <h2>Теория</h2>
          <div
            class="theory-text"
            v-html="lesson.content.theory.replace(/\n/g, '<br>')"
          ></div>

          <div class="key-points">
            <h3>Ключевые моменты</h3>
            <ul>
              <li
                v-for="(point, index) in lesson.content.keyPoints"
                :key="index"
              >
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Примеры -->
      <section
        v-if="currentStep === 'examples'"
        class="examples-section fade-in"
      >
        <div class="content-card">
          <h2>Примеры</h2>
          <div class="examples-grid">
            <div
              v-for="(example, index) in lesson.content.examples"
              :key="index"
              class="example-card"
            >
              <div class="example-indonesian">{{ example.indonesian }}</div>
              <div class="example-russian">{{ example.russian }}</div>
              <div v-if="example.notes" class="example-notes">
                {{ example.notes }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Упражнения -->
      <section
        v-if="currentStep === 'exercises'"
        class="exercises-section fade-in"
      >
        <div class="content-card">
          <h2>Упражнения</h2>
          <p class="exercises-intro">
            Выполните упражнения для закрепления материала. После завершения
            всех упражнений урок будет считаться пройденным.
          </p>

          <div class="exercises-list">
            <div
              v-for="exerciseId in lesson.exercises"
              :key="exerciseId"
              class="exercise-item"
            >
              <div class="exercise-info">
                <span class="exercise-number">Упражнение {{ exerciseId }}</span>
                <span
                  v-if="
                    lessonProgress?.completedExercises?.includes(exerciseId)
                  "
                  class="exercise-status"
                  >✅</span
                >
              </div>
            </div>
          </div>

          <div class="exercises-actions">
            <button class="btn btn-primary btn-lg" @click="goToExercises">
              ✍️ Начать упражнения
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- Навигация внизу -->
    <footer class="lesson-footer">
      <button
        v-if="prevLesson"
        class="btn btn-outline"
        @click="goToLesson(prevLesson.id)"
      >
        ← Предыдущий урок
      </button>
      <button
        v-if="nextLesson"
        class="btn btn-primary"
        @click="goToLesson(nextLesson.id)"
      >
        Следующий урок →
      </button>
    </footer>
  </div>

  <div v-else class="not-found">
    <h2>Урок не найден</h2>
    <p>Урок с номером {{ lessonId }} не существует.</p>
    <button class="btn btn-primary" @click="router.push('/')">
      На главную
    </button>
  </div>
</template>

<style scoped>
.lesson-view {
  max-width: 900px;
  margin: 0 auto;
}

.lesson-header {
  margin-bottom: 2rem;
}

.lesson-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.lesson-number {
  font-weight: 600;
  color: var(--primary);
  font-size: 1.1rem;
}

.lesson-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.lesson-description {
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 1rem;
}

.lesson-meta {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.meta-item {
  font-size: 0.9rem;
  color: var(--muted);
}

.meta-item.completed {
  color: #48bb78;
  font-weight: 500;
}

.lesson-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--border);
}

.tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: var(--muted);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.3s ease;
}

.tab:hover {
  color: var(--primary);
}

.tab.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  font-weight: 500;
}

.lesson-content {
  margin-bottom: 2rem;
}

.theory-text {
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 2rem;
  white-space: pre-line;
}

.key-points {
  background: var(--code-bg);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border-left: 4px solid var(--primary);
}

.key-points h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--text-h);
}

.key-points ul {
  list-style: none;
  padding: 0;
}

.key-points li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text);
}

.key-points li::before {
  content: "•";
  color: var(--primary);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.examples-grid {
  display: grid;
  gap: 1rem;
}

.example-card {
  background: var(--code-bg);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border-left: 4px solid var(--primary);
}

.example-indonesian {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-h);
  margin-bottom: 0.5rem;
}

.example-russian {
  color: var(--text);
  margin-bottom: 0.5rem;
}

.example-notes {
  font-size: 0.85rem;
  color: var(--muted);
  font-style: italic;
}

.exercises-intro {
  color: var(--text);
  margin-bottom: 1.5rem;
}

.exercises-list {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.exercise-item {
  background: var(--code-bg);
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--border);
}

.exercise-number {
  font-weight: 500;
  color: var(--text-h);
}

.exercise-status {
  font-size: 1.2rem;
}

.exercises-actions {
  display: flex;
  justify-content: center;
}

.lesson-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found h2 {
  margin-bottom: 1rem;
}

.not-found p {
  color: var(--text);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .lesson-nav {
    flex-direction: column;
    gap: 0.5rem;
  }

  .lesson-header h1 {
    font-size: 1.5rem;
  }

  .lesson-tabs {
    overflow-x: auto;
  }

  .tab {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .lesson-footer {
    flex-direction: column;
  }
}
</style>
