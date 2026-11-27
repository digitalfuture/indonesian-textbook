<script setup lang="ts">
import { computed, ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useLanguageStore } from "../stores/language";
import { useProgressStore } from "../stores/progress";
import { useExerciseData } from "../composables/useExercises";
import { useLessonData } from "../composables/useLessons";
import ExercisePlayer from "../components/exercise/ExercisePlayer.vue";
import PetrovMatrixTrainer from "../components/exercise/PetrovMatrixTrainer.vue";
import ListeningTrainer from "../components/exercise/ListeningTrainer.vue";
import type { Exercise } from "../utils/types";

const router = useRouter();
const route = useRoute();
const langStore = useLanguageStore();
const progressStore = useProgressStore();
const { allExercises } = useExerciseData();
const { lessons } = useLessonData();

const base = computed(() => `/${langStore.interfaceLang}/${langStore.targetLang}`);

const routeLessonId = computed(() => {
  const id = route.params.lessonId;
  return id ? parseInt(id as string) : null;
});

type PracticeMode = "hub" | "smart" | "blitz" | "mistakes" | "matrix" | "listening" | "lesson";
const activeMode = ref<PracticeMode>(routeLessonId.value ? "lesson" : "hub");
const selectedLessonId = ref<number | null>(routeLessonId.value);
const customExercises = ref<Exercise[]>([]);

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const practiceLessons = computed(() => {
  return lessons.value
    .filter((l) => l.id !== 17)
    .map((lesson) => {
      const exList = allExercises.value.filter((e) => e.lessonId === lesson.id);
      const done = progressStore.lessonProgress(lesson.id)?.completedExercises?.length || 0;
      const completed = progressStore.isLessonCompleted(lesson.id);
      return {
        ...lesson,
        totalExercises: exList.length,
        doneExercises: Math.min(done, exList.length),
        isCompleted: completed,
      };
    })
    .filter((l) => l.totalExercises > 0);
});

const completedLessonIds = computed(() =>
  practiceLessons.value
    .filter((l) => l.isCompleted || l.doneExercises > 0)
    .map((l) => l.id),
);

const mistakeExercises = computed(() => {
  const mistakeIds = progressStore.mistakeExerciseIds;
  if (mistakeIds.length === 0) return [];
  const byId = new Map(allExercises.value.map((e) => [e.id, e]));
  return mistakeIds
    .map((id) => byId.get(id))
    .filter((e): e is Exercise => Boolean(e));
});

const dueWordsCount = computed(() => progressStore.dueWordIds.length);

function startSmartReview() {
  // Prioritize past mistakes + exercises from completed/in-progress lessons
  const mistakePool = mistakeExercises.value.slice(0, 4);
  const mistakeSet = new Set(mistakePool.map((e) => e.id));
  const poolLessonIds =
    completedLessonIds.value.length > 0 ? completedLessonIds.value : [1, 2];
  const restPool = shuffleArray(
    allExercises.value.filter(
      (e) => poolLessonIds.includes(e.lessonId) && !mistakeSet.has(e.id),
    ),
  );
  customExercises.value = [...mistakePool, ...restPool].slice(0, 10);
  selectedLessonId.value = null;
  activeMode.value = "smart";
}

function startMistakesReview() {
  if (mistakeExercises.value.length === 0) return;
  customExercises.value = mistakeExercises.value.slice(0, 12);
  selectedLessonId.value = null;
  activeMode.value = "mistakes";
}

function startBlitz() {
  customExercises.value = shuffleArray(allExercises.value).slice(0, 10);
  selectedLessonId.value = null;
  activeMode.value = "blitz";
}

function startMatrix() {
  selectedLessonId.value = null;
  activeMode.value = "matrix";
}

function startListening() {
  selectedLessonId.value = null;
  activeMode.value = "listening";
}

function startLessonPractice(lessonId: number) {
  selectedLessonId.value = lessonId;
  activeMode.value = "lesson";
}

function backToHub() {
  if (routeLessonId.value || route.query.mode) {
    router.push(`${base.value}/exercises`);
  }
  activeMode.value = "hub";
  selectedLessonId.value = null;
  customExercises.value = [];
}

function applyQueryMode() {
  const qMode = route.query.mode as string | undefined;
  if (qMode === "matrix") startMatrix();
  else if (qMode === "listening") startListening();
  else if (qMode === "mistakes" && mistakeExercises.value.length > 0) startMistakesReview();
  else if (qMode === "smart" || qMode === "daily") startSmartReview();
}

watch(routeLessonId, (val) => {
  if (val) {
    selectedLessonId.value = val;
    activeMode.value = "lesson";
  } else if (activeMode.value === "lesson") {
    activeMode.value = "hub";
    selectedLessonId.value = null;
  }
});

onMounted(() => {
  if (!routeLessonId.value) {
    applyQueryMode();
  }
});

const activeExercises = computed<Exercise[]>(() => {
  if (activeMode.value === "lesson" && selectedLessonId.value) {
    return allExercises.value
      .filter((e) => e.lessonId === selectedLessonId.value)
      .sort((a, b) => a.id - b.id);
  }
  if (
    activeMode.value === "smart" ||
    activeMode.value === "blitz" ||
    activeMode.value === "mistakes"
  ) {
    return customExercises.value;
  }
  return [];
});

function restartCurrentSession() {
  if (activeMode.value === "smart") startSmartReview();
  else if (activeMode.value === "blitz") startBlitz();
  else if (activeMode.value === "mistakes") {
    if (mistakeExercises.value.length > 0) startMistakesReview();
    else backToHub();
  } else if (selectedLessonId.value) {
    progressStore.resetLessonProgress(selectedLessonId.value);
  }
}
</script>

<template>
  <div class="exercise-view fade-in">
    <!-- PRACTICE HUB -->
    <template v-if="activeMode === 'hub'">
      <header class="hub-header">
        <h1>{{ $t('practice.hubTitle') }}</h1>
        <p class="hub-subtitle">{{ $t('exercise.description.' + langStore.targetLang) }}</p>
      </header>

      <!-- Primary Interactive Trainers -->
      <section class="quick-modes-grid">
        <!-- Daily / Smart Mix -->
        <button class="mode-card featured" @click="startSmartReview" type="button">
          <div class="mode-icon indigo"><i class="pi pi-sparkles"></i></div>
          <div class="mode-body">
            <span class="mode-tag">{{ $t('practice.smartTag') }}</span>
            <h3>{{ $t('practice.smartTitle') }}</h3>
            <p>{{ $t('practice.smartDesc') }}</p>
          </div>
          <span class="mode-cta">
            {{ $t('practice.start10') }} <i class="pi pi-arrow-right"></i>
          </span>
        </button>

        <!-- Petrov Matrix Infinite Trainer (Indonesian) -->
        <button
          v-if="langStore.targetLang === 'id'"
          class="mode-card"
          @click="startMatrix"
          type="button"
        >
          <div class="mode-icon violet"><i class="pi pi-th-large"></i></div>
          <div class="mode-body">
            <span class="mode-tag">{{ $t('matrix.tag') }}</span>
            <h3>{{ $t('matrix.title') }}</h3>
            <p>{{ $t('matrix.desc') }}</p>
          </div>
          <span class="mode-cta">
            {{ $t('matrix.start') }} <i class="pi pi-arrow-right"></i>
          </span>
        </button>

        <!-- Listening & Dictation Trainer -->
        <button class="mode-card" @click="startListening" type="button">
          <div class="mode-icon sky"><i class="pi pi-headphones"></i></div>
          <div class="mode-body">
            <span class="mode-tag">{{ $t('listening.tag') }}</span>
            <h3>{{ $t('listening.title') }}</h3>
            <p>{{ $t('listening.desc') }}</p>
          </div>
          <span class="mode-cta">
            {{ $t('listening.start') }} <i class="pi pi-arrow-right"></i>
          </span>
        </button>

        <!-- Mistake Review -->
        <button
          class="mode-card"
          :class="{ disabled: mistakeExercises.length === 0 }"
          :disabled="mistakeExercises.length === 0"
          @click="startMistakesReview"
          type="button"
        >
          <div class="mode-top-row">
            <div class="mode-icon danger"><i class="pi pi-exclamation-circle"></i></div>
            <span v-if="mistakeExercises.length > 0" class="count-badge danger">
              {{ mistakeExercises.length }}
            </span>
          </div>
          <div class="mode-body">
            <span class="mode-tag">{{ $t('practice.mistakesTag') }}</span>
            <h3>{{ $t('practice.mistakesTitle') }}</h3>
            <p>
              {{
                mistakeExercises.length > 0
                  ? $t('practice.mistakesDesc', { count: mistakeExercises.length })
                  : $t('practice.mistakesEmpty')
              }}
            </p>
          </div>
          <span class="mode-cta" v-if="mistakeExercises.length > 0">
            {{ $t('practice.startMistakes') }} <i class="pi pi-arrow-right"></i>
          </span>
        </button>

        <!-- SRS Flashcards -->
        <button
          class="mode-card"
          @click="router.push({ path: `${base}/dictionary`, query: { mode: 'flashcards', filter: dueWordsCount > 0 ? 'due' : 'unlearned' } })"
          type="button"
        >
          <div class="mode-top-row">
            <div class="mode-icon teal"><i class="pi pi-clone"></i></div>
            <span v-if="dueWordsCount > 0" class="count-badge teal">
              {{ dueWordsCount }}
            </span>
          </div>
          <div class="mode-body">
            <span class="mode-tag">{{ $t('practice.flashcardsTag') }}</span>
            <h3>{{ $t('practice.flashcardsTitle') }}</h3>
            <p>{{ $t('practice.flashcardsDesc') }}</p>
          </div>
          <span class="mode-cta">
            {{ $t('practice.openFlashcards') }} <i class="pi pi-arrow-right"></i>
          </span>
        </button>

        <!-- Blitz Mix -->
        <button class="mode-card" @click="startBlitz" type="button">
          <div class="mode-icon amber"><i class="pi pi-bolt"></i></div>
          <div class="mode-body">
            <span class="mode-tag">{{ $t('practice.blitzTag') }}</span>
            <h3>{{ $t('practice.blitzTitle') }}</h3>
            <p>{{ $t('practice.blitzDesc') }}</p>
          </div>
          <span class="mode-cta">
            {{ $t('practice.start10') }} <i class="pi pi-arrow-right"></i>
          </span>
        </button>
      </section>

      <!-- Practice by Lesson -->
      <section class="by-lesson-section">
        <div class="section-top">
          <h2>{{ $t('practice.byLessonTitle') }}</h2>
          <p class="section-desc">{{ $t('practice.byLessonDesc') }}</p>
        </div>

        <div class="lesson-practice-grid">
          <button
            v-for="lesson in practiceLessons"
            :key="lesson.id"
            class="lp-card"
            :class="{ done: lesson.isCompleted }"
            @click="startLessonPractice(lesson.id)"
            type="button"
          >
            <div class="lp-top">
              <span class="lp-num">{{ lesson.id }}</span>
              <span class="lp-count" :class="{ done: lesson.doneExercises === lesson.totalExercises }">
                {{ lesson.doneExercises }}/{{ lesson.totalExercises }}
              </span>
            </div>
            <div class="lp-title">{{ $t('lesson.title.' + lesson.id) }}</div>
            <div class="lp-bar">
              <div
                class="lp-bar-fill"
                :style="{ width: Math.round((lesson.doneExercises / lesson.totalExercises) * 100) + '%' }"
              ></div>
            </div>
          </button>
        </div>
      </section>
    </template>

    <!-- ACTIVE PRACTICE SESSION -->
    <template v-else>
      <div class="session-topbar">
        <button class="back-btn" @click="backToHub" type="button">
          <i class="pi pi-arrow-left"></i>
          <span>{{ $t('practice.backToHub') }}</span>
        </button>

        <span class="session-pill">
          <template v-if="activeMode === 'lesson' && selectedLessonId">
            {{ $t('lesson.header.number', { id: selectedLessonId }) }}: {{ $t('lesson.title.' + selectedLessonId) }}
          </template>
          <template v-else-if="activeMode === 'smart'">
            {{ $t('practice.smartTitle') }}
          </template>
          <template v-else-if="activeMode === 'mistakes'">
            {{ $t('practice.mistakesTitle') }}
          </template>
          <template v-else-if="activeMode === 'matrix'">
            {{ $t('matrix.title') }}
          </template>
          <template v-else-if="activeMode === 'listening'">
            {{ $t('listening.title') }}
          </template>
          <template v-else>
            {{ $t('practice.blitzTitle') }}
          </template>
        </span>
      </div>

      <PetrovMatrixTrainer v-if="activeMode === 'matrix'" />
      <ListeningTrainer v-else-if="activeMode === 'listening'" />

      <main class="exercise-content" v-else-if="activeExercises.length > 0">
        <ExercisePlayer :exercises="activeExercises" :lessonId="selectedLessonId">
          <template #completion>
            <div class="completion-card fade-in">
              <div class="completion-icon"><i class="pi pi-trophy"></i></div>
              <h2>{{ $t('exercise.completion.title') }}</h2>
              <p>{{ $t('exercise.completion.message') }}</p>
              <div class="completion-actions">
                <button class="btn btn-primary" @click="restartCurrentSession" type="button">
                  <i class="pi pi-refresh"></i>
                  <span>{{ $t('practice.anotherRound') }}</span>
                </button>
                <button class="btn btn-outline" @click="backToHub" type="button">
                  {{ $t('practice.backToHub') }}
                </button>
                <button
                  v-if="selectedLessonId && selectedLessonId < 16"
                  class="btn btn-secondary"
                  @click="router.push(`${base}/lesson/${selectedLessonId + 1}`)"
                  type="button"
                >
                  {{ $t('exercise.completion.nextLesson') }}
                </button>
              </div>
            </div>
          </template>
        </ExercisePlayer>
      </main>

      <div v-else class="empty-state content-card">
        <h2>{{ $t('exercise.empty.title') }}</h2>
        <p>{{ $t('exercise.empty.message') }}</p>
        <button class="btn btn-primary" @click="backToHub" type="button">
          {{ $t('practice.backToHub') }}
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.exercise-view {
  max-width: 980px;
  margin: 0 auto;
}

.hub-header {
  text-align: center;
  margin-bottom: 2rem;
}

.hub-header h1 {
  margin-bottom: 0.4rem;
}

.hub-subtitle {
  color: var(--muted);
  font-size: 1rem;
  margin: 0;
}

.quick-modes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.mode-card {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.3rem;
  border-radius: var(--radius-xl);
  background: var(--bg-card);
  border: 1.5px solid var(--border);
  box-shadow: var(--shadow-xs);
  cursor: pointer;
  text-align: left;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.mode-card:hover:not(:disabled) {
  transform: translateY(-3px);
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.mode-card.featured {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-soft), var(--shadow-sm);
}

.mode-card.disabled {
  opacity: 0.58;
  cursor: default;
}

.mode-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.count-badge {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.count-badge.danger { background: var(--danger-soft); color: var(--danger); }
.count-badge.teal { background: rgba(13, 148, 136, 0.14); color: var(--translation-color); }

.mode-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.mode-icon.indigo { background: var(--primary-soft); color: var(--primary); }
.mode-icon.violet { background: var(--accent-bg); color: var(--accent); }
.mode-icon.sky { background: rgba(14, 165, 233, 0.14); color: #0ea5e9; }
.mode-icon.danger { background: var(--danger-soft); color: var(--danger); }
.mode-icon.amber { background: var(--warning-soft); color: var(--warning); }
.mode-icon.teal { background: rgba(13, 148, 136, 0.14); color: var(--translation-color); }

.mode-body {
  flex: 1;
}

.mode-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
  margin-bottom: 0.3rem;
}

.mode-body h3 {
  font-size: 1.08rem;
  margin-bottom: 0.3rem;
}

.mode-body p {
  font-size: 0.86rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.45;
}

.mode-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--primary);
}

.section-top {
  margin-bottom: 1.15rem;
}

.section-top h2 {
  margin-bottom: 0.2rem;
}

.section-desc {
  color: var(--muted);
  font-size: 0.92rem;
  margin: 0;
}

.lesson-practice-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.85rem;
}

.lp-card {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1.5px solid var(--border);
  text-align: left;
  cursor: pointer;
  transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
}

.lp-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.lp-card.done {
  border-color: rgba(22, 163, 74, 0.35);
}

.lp-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lp-num {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--primary-soft);
  color: var(--primary);
  font-weight: 700;
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.lp-card.done .lp-num {
  background: var(--success-soft);
  color: var(--success);
}

.lp-count {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
}

.lp-count.done {
  color: var(--success);
}

.lp-title {
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--text-h);
  line-height: 1.35;
}

.lp-bar {
  height: 4px;
  border-radius: 999px;
  background: var(--bg-subtle);
  overflow: hidden;
  margin-top: auto;
}

.lp-bar-fill {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 999px;
}

.session-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: none;
  border: none;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.35rem 0.6rem;
  border-radius: var(--radius-sm);
  transition: color 0.16s ease, background 0.16s ease;
}

.back-btn:hover {
  color: var(--primary);
  background: var(--primary-soft);
}

.session-pill {
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
}

.completion-card {
  text-align: center;
  padding: 2.5rem 2rem;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
}

.completion-icon {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: var(--warning-soft);
  color: var(--warning);
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.completion-card h2 { margin: 0; }
.completion-card p { margin: 0; color: var(--text); }

.completion-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.empty-state {
  text-align: center;
  padding: 3rem 2rem;
}

@media (max-width: 900px) {
  .quick-modes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .quick-modes-grid {
    grid-template-columns: 1fr;
  }

  .completion-actions {
    flex-direction: column;
    width: 100%;
  }

  .completion-actions .btn {
    width: 100%;
  }
}
</style>
