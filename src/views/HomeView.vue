<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useProgressStore } from "../stores/progress";
import { lessons } from "../data/lessons";

const router = useRouter();
const progressStore = useProgressStore();

const completedLessons = computed(() =>
  lessons.map((lesson) => ({
    ...lesson,
    isCompleted: progressStore.isLessonCompleted(lesson.id),
    progress: progressStore.lessonProgress(lesson.id),
  })),
);

function goToLesson(id: number) {
  router.push(`/lesson/${id}`);
}

function goToGrammar() {
  router.push("/grammar");
}

function goToDictionary() {
  router.push("/dictionary");
}
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Индонезийский язык за 16 уроков</h1>
        <p class="hero-subtitle">
          Интерактивный учебник по методу Дмитрия Петрова
        </p>
        <p class="hero-description">
          Освойте базовый индонезийский язык всего за 16 уроков! Метод основан
          на понимании основных принципов языка и их практическом применении.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="goToLesson(1)">
            Начать обучение
          </button>
          <button class="btn btn-secondary" @click="goToDictionary">
            Словарь
          </button>
        </div>
      </div>
      <div class="hero-illustration">
        <div class="flag">🇮🇩</div>
      </div>
    </section>

    <!-- Метод Петрова -->
    <section class="method-section">
      <h2>Метод Дмитрия Петрова</h2>
      <div class="method-grid">
        <div class="method-card">
          <div class="method-icon">🎯</div>
          <h3>16 уроков</h3>
          <p>Структурированная программа, охватывающая все основы языка</p>
        </div>
        <div class="method-card">
          <div class="method-icon">📚</div>
          <h3>500 слов</h3>
          <p>Самые частотные слова, покрывающие 80% повседневной речи</p>
        </div>
        <div class="method-card">
          <div class="method-icon">🏗️</div>
          <h3>Система</h3>
          <p>Понимание структуры языка вместо заучивания правил</p>
        </div>
        <div class="method-card">
          <div class="method-icon">💪</div>
          <h3>Практика</h3>
          <p>Много упражнений для закрепления материала</p>
        </div>
      </div>
    </section>

    <!-- Список уроков -->
    <section class="lessons-section">
      <h2>Программа обучения</h2>
      <div class="lessons-grid">
        <div
          v-for="lesson in completedLessons"
          :key="lesson.id"
          class="lesson-card"
          :class="{ completed: lesson.isCompleted }"
          @click="goToLesson(lesson.id)"
        >
          <div class="lesson-number">
            {{ lesson.id }}
          </div>
          <div class="lesson-content">
            <h3>{{ lesson.title }}</h3>
            <p>{{ lesson.description }}</p>
            <div class="lesson-meta">
              <span class="lesson-time">⏱️ {{ lesson.estimatedTime }} мин</span>
              <span v-if="lesson.isCompleted" class="lesson-status"
                >✅ Завершено</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Быстрые ссылки -->
    <section class="quick-links">
      <h2>Быстрый доступ</h2>
      <div class="quick-links-grid">
        <div class="quick-link-card" @click="goToGrammar">
          <div class="quick-link-icon">📊</div>
          <h3>Таблица грамматики</h3>
          <p>Все времена, местоимения и грамматические конструкции</p>
        </div>
        <div class="quick-link-card" @click="goToDictionary">
          <div class="quick-link-icon">📖</div>
          <h3>Частотный словарь</h3>
          <p>500 самых важных слов с примерами</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 3rem 0;
  margin-bottom: 3rem;
}

.hero-content {
  flex: 1;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #667eea;
  margin-bottom: 1rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

.hero-illustration {
  flex-shrink: 0;
}

.flag {
  font-size: 8rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

.method-section {
  margin-bottom: 3rem;
}

.method-section h2 {
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.method-card:hover {
  transform: translateY(-4px);
}

.method-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.method-card h3 {
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.method-card p {
  color: #4a5568;
  line-height: 1.5;
}

.lessons-section {
  margin-bottom: 3rem;
}

.lessons-section h2 {
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.lesson-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
}

.lesson-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.lesson-card.completed {
  border-left: 4px solid #48bb78;
}

.lesson-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  flex-shrink: 0;
}

.lesson-content {
  flex: 1;
}

.lesson-content h3 {
  font-size: 1.1rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.lesson-content p {
  font-size: 0.9rem;
  color: #4a5568;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.lesson-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
}

.lesson-time {
  color: #718096;
}

.lesson-status {
  color: #48bb78;
  font-weight: 500;
}

.quick-links {
  margin-bottom: 3rem;
}

.quick-links h2 {
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.quick-link-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
}

.quick-link-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.quick-link-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.quick-link-card h3 {
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.quick-link-card p {
  color: #4a5568;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .flag {
    font-size: 6rem;
  }

  .lessons-grid {
    grid-template-columns: 1fr;
  }
}
</style>
