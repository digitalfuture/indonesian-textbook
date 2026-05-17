<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";
import { lessons } from "../data/lessons";
import { useI18n } from "vue-i18n";

const router = useRouter();
const progressStore = useProgressStore();
const langStore = useLanguageStore();
const { t } = useI18n();

const base = computed(() => `/${langStore.interfaceLang}/${langStore.targetLang}`);

const completedLessons = computed(() =>
  lessons.map((lesson) => ({
    ...lesson,
    isCompleted: progressStore.isLessonCompleted(lesson.id),
  }))
);

function goToLesson(id: number) {
  router.push(`${base.value}/lesson/${id}`);
}

function goToGrammar() {
  router.push(`${base.value}/grammar`);
}

function goToDictionary() {
  router.push(`${base.value}/dictionary`);
}

function goToExercises() {
  router.push(`${base.value}/exercises`);
}
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('home.hero.title.' + langStore.targetLang) }}</h1>
        <p class="hero-subtitle">{{ $t('home.hero.subtitle.' + langStore.targetLang) }}</p>
        <p class="hero-description">{{ $t('home.hero.description.' + langStore.targetLang) }}</p>
        <div class="hero-buttons">
          <PButton :label="$t('home.hero.startLearning')" icon="pi pi-play" @click="goToLesson(1)" />
          <PButton :label="$t('home.hero.dictionary')" icon="pi pi-book" severity="secondary" @click="goToDictionary" />
        </div>
      </div>
      <div class="hero-illustration">
        <div class="flag">🇮🇩</div>
      </div>
    </section>

    <!-- Метод Петрова -->
    <section class="method-section">
      <h2>{{ $t('home.method.title') }}</h2>
      <div class="method-grid">
        <div class="method-card" @click="goToLesson(1)">
          <div class="method-icon">🎯</div>
          <h3>{{ $t('home.method.cards.lessons.title') }}</h3>
          <p>{{ $t('home.method.cards.lessons.description') }}</p>
        </div>
        <div class="method-card" @click="goToDictionary()">
          <div class="method-icon">📚</div>
          <h3>{{ $t('home.method.cards.words.title') }}</h3>
          <p>{{ $t('home.method.cards.words.description') }}</p>
        </div>
        <div class="method-card" @click="goToGrammar()">
          <div class="method-icon">🏗️</div>
          <h3>{{ $t('home.method.cards.system.title') }}</h3>
          <p>{{ $t('home.method.cards.system.description') }}</p>
        </div>
        <div class="method-card" @click="goToExercises()">
          <div class="method-icon">💪</div>
          <h3>{{ $t('home.method.cards.practice.title') }}</h3>
          <p>{{ $t('home.method.cards.practice.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Список уроков -->
    <section class="lessons-section">
      <h2>{{ $t('home.lessons.title') }}</h2>
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
            <h3>{{ $t('lesson.title.' + lesson.id) }}</h3>
            <p>{{ lesson.description }}</p>
            <div class="lesson-meta">
              <span class="lesson-time"><i class="pi pi-clock"></i> {{ lesson.estimatedTime }} мин</span>
              <PBadge
                v-if="lesson.isCompleted"
                :value="$t('common.completed')"
                severity="success"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Быстрые ссылки -->
    <section class="quick-links">
      <h2>{{ $t('home.quickLinks.title') }}</h2>
      <div class="quick-links-grid">
        <PCard class="quick-link-card" @click="goToGrammar">
          <template #header>
            <div class="quick-link-icon">📊</div>
          </template>
          <template #title>{{ $t('home.quickLinks.grammarTable') }}</template>
          <template #content>
            <p>{{ $t('home.quickLinks.grammarTableDescription') }}</p>
          </template>
        </PCard>
        <PCard class="quick-link-card" @click="goToDictionary">
          <template #header>
            <div class="quick-link-icon">📖</div>
          </template>
          <template #title>{{ $t('home.quickLinks.dictionary') }}</template>
          <template #content>
            <p>{{ $t('home.quickLinks.dictionaryDescription') }}</p>
          </template>
        </PCard>
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
  color: var(--text-h);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text);
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
  color: var(--text-h);
  margin-bottom: 1.5rem;
  text-align: center;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  cursor: pointer;
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
  color: var(--text-h);
  margin-bottom: 0.5rem;
}

.method-card p {
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.5;
}

.lessons-section h2 {
  font-size: 2rem;
  color: var(--text-h);
  margin-bottom: 1.5rem;
  text-align: center;
}

.lessons-section {
  margin-bottom: 3rem;
}

.lessons-section h2 {
  font-size: 2rem;
  color: var(--text-h);
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
  background: var(--bg-card);
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
  background: var(--primary-gradient);
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
  color: var(--text-h);
  margin-bottom: 0.5rem;
}

.lesson-content p {
  font-size: 0.9rem;
  color: var(--text);
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.lesson-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
}

.lesson-time {
  color: var(--muted);
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
  color: var(--text-h);
  margin-bottom: 1.5rem;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.quick-link-card {
  background: var(--bg-card);
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
  color: var(--text-h);
  margin-bottom: 0.5rem;
}

.quick-link-card p {
  color: var(--text);
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
