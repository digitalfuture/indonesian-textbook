<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";
import { useAIStore } from "../stores/ai";
import { useExerciseData } from "../composables/useExercises";
import { lessons as lessonsId } from "../data/lessons";
import { lessonsRu } from "../data/lessonsRu";
import CountryFlag from "../components/common/CountryFlag.vue";

const router = useRouter();
const route = useRoute();
const progressStore = useProgressStore();
const langStore = useLanguageStore();
const aiStore = useAIStore();
const { allExercises } = useExerciseData();

const showRestartDialog = ref(false);

onMounted(async () => {
  await aiStore.initialize();
});

const base = computed(() => `/${langStore.interfaceLang}/${langStore.targetLang}`);
const showHero = computed(() => !route.meta?.hideHero);
const showQuickLinks = computed(() => !route.meta?.hideQuickLinks);

const currentLessons = computed(() =>
  langStore.targetLang === "id" ? lessonsId : lessonsRu,
);

const visibleLessons = computed(() => {
  const isAISupported = aiStore.isSupported;
  return currentLessons.value
    .filter((lesson) => lesson.id !== 17 || isAISupported)
    .map((lesson) => {
      const lp = progressStore.lessonProgress(lesson.id);
      const totalExercises = allExercises.value.filter(
        (e) => e.lessonId === lesson.id,
      ).length;
      const doneExercises = lp?.completedExercises?.length || 0;
      const isCompleted = progressStore.isLessonCompleted(lesson.id);
      const isInProgress = !isCompleted && (doneExercises > 0 || !!lp?.currentStep);

      return {
        ...lesson,
        isCompleted,
        isInProgress,
        doneExercises,
        totalExercises,
        wordCount: lesson.vocabulary?.length || 0,
        currentStep: lp?.currentStep || "theory",
      };
    });
});

const activeLesson = computed(() => {
  const inProgress = visibleLessons.value.find((l) => l.isInProgress);
  if (inProgress) return inProgress;
  const firstUncompleted = visibleLessons.value.find((l) => !l.isCompleted);
  return firstUncompleted || visibleLessons.value[0];
});

const nextLessonId = computed(() => activeLesson.value?.id || 1);

const stats = computed(() => progressStore.getLearningStats());
const dueWordsCount = computed(() => progressStore.dueWordIds.length);
const mistakesCount = computed(() => progressStore.mistakeExerciseIds.length);

const completedCount = computed(
  () => visibleLessons.value.filter((l) => l.isCompleted).length,
);

const hasStartedLearning = computed(() => {
  const anyCompleted = completedCount.value > 0;
  const anyInProgress = visibleLessons.value.some((l) => l.isInProgress);
  const anyProgress =
    progressStore.totalPoints > 0 ||
    progressStore.exercisesCompleted > 0 ||
    progressStore.wordsLearned > 0;
  return anyCompleted || anyInProgress || anyProgress;
});

interface CourseModule {
  id: number;
  titleKey: string;
  descKey: string;
  lessonIds: number[];
}

const modulesDef: CourseModule[] = [
  {
    id: 1,
    titleKey: "home.modules.m1.title",
    descKey: "home.modules.m1.desc",
    lessonIds: [1, 2, 3, 4],
  },
  {
    id: 2,
    titleKey: "home.modules.m2.title",
    descKey: "home.modules.m2.desc",
    lessonIds: [5, 6, 7, 8],
  },
  {
    id: 3,
    titleKey: "home.modules.m3.title",
    descKey: "home.modules.m3.desc",
    lessonIds: [9, 10, 11, 12],
  },
  {
    id: 4,
    titleKey: "home.modules.m4.title",
    descKey: "home.modules.m4.desc",
    lessonIds: [13, 14, 15, 16, 17],
  },
];

const courseModules = computed(() => {
  return modulesDef
    .map((m) => {
      const items = visibleLessons.value.filter((l) => m.lessonIds.includes(l.id));
      const completed = items.filter((l) => l.isCompleted).length;
      return {
        ...m,
        lessons: items,
        completed,
        total: items.length,
        percent: items.length > 0 ? Math.round((completed / items.length) * 100) : 0,
      };
    })
    .filter((m) => m.lessons.length > 0);
});

const stepLabels: Record<string, string> = {
  theory: "lesson.stepShort.theory",
  vocabulary: "lesson.stepShort.vocabulary",
  examples: "lesson.stepShort.examples",
  exercises: "lesson.stepShort.exercises",
};

function goToLesson(id: number) {
  router.push(`${base.value}/lesson/${id}`);
}

function confirmRestartLearning() {
  showRestartDialog.value = false;
  progressStore.resetProgress();
  goToLesson(1);
}

function navigateTo(path: string) {
  router.push(`${base.value}${path}`);
}
</script>

<template>
  <div class="home fade-in">
    <!-- Hero / Personal Dashboard -->
    <section v-if="showHero" class="dashboard-hero">
      <div class="hero-main">
        <div class="hero-badge-row">
          <span class="hero-pill">
            <CountryFlag :lang="langStore.targetLang" size="xs" />
            <span>{{ $t('home.hero.subtitle.' + langStore.targetLang) }}</span>
          </span>
        </div>

        <h1>{{ $t('home.hero.title.' + langStore.targetLang) }}</h1>
        <p class="hero-description">
          {{ $t('home.hero.description.' + langStore.targetLang) }}
        </p>

        <!-- 4-step learning cycle explainer for clarity -->
        <div class="cycle-strip">
          <div class="cycle-step">
            <span class="cycle-num">1</span>
            <span>{{ $t('home.cycle.theory') }}</span>
          </div>
          <i class="pi pi-arrow-right cycle-arrow"></i>
          <div class="cycle-step">
            <span class="cycle-num">2</span>
            <span>{{ $t('home.cycle.words') }}</span>
          </div>
          <i class="pi pi-arrow-right cycle-arrow"></i>
          <div class="cycle-step">
            <span class="cycle-num">3</span>
            <span>{{ $t('home.cycle.examples') }}</span>
          </div>
          <i class="pi pi-arrow-right cycle-arrow"></i>
          <div class="cycle-step">
            <span class="cycle-num">4</span>
            <span>{{ $t('home.cycle.practice') }}</span>
          </div>
        </div>
      </div>

      <!-- Right Action Card: Next Lesson / Continue Learning -->
      <div class="next-step-card">
        <div class="next-step-header">
          <span class="next-step-label">
            {{ hasStartedLearning ? $t('home.dashboard.upNext') : $t('home.dashboard.firstStep') }}
          </span>
          <span class="next-step-num">
            {{ $t('lesson.header.number', { id: nextLessonId }) }}
          </span>
        </div>

        <h2 class="next-step-title">
          {{ $t('lesson.title.' + nextLessonId) }}
        </h2>
        <p v-if="activeLesson" class="next-step-desc">
          {{ activeLesson.description }}
        </p>

        <div v-if="activeLesson && (activeLesson.totalExercises > 0 || activeLesson.wordCount > 0)" class="next-step-meta">
          <span v-if="activeLesson.wordCount > 0">
            <i class="pi pi-book"></i> {{ $t('home.lessonMeta.words', { count: activeLesson.wordCount }) }}
          </span>
          <span v-if="activeLesson.totalExercises > 0">
            <i class="pi pi-check-square"></i> {{ activeLesson.doneExercises }}/{{ activeLesson.totalExercises }}
          </span>
          <span>
            <i class="pi pi-clock"></i> {{ $t('home.lessonMeta.minutes', { count: activeLesson.estimatedTime }) }}
          </span>
        </div>

        <div v-if="hasStartedLearning" class="course-progress-box">
          <div class="course-progress-row">
            <span>{{ $t('home.dashboard.courseProgress') }}</span>
            <strong>{{ completedCount }} / {{ visibleLessons.length }}</strong>
          </div>
          <div class="progress">
            <div class="progress-bar" :style="{ width: Math.min(100, (completedCount / visibleLessons.length) * 100) + '%' }"></div>
          </div>
        </div>

        <div class="next-step-actions">
          <button class="btn btn-primary btn-lg full-btn" @click="goToLesson(nextLessonId)">
            <i class="pi pi-play"></i>
            <span>{{ hasStartedLearning ? $t('home.hero.continueLearning') : $t('home.hero.startLearning') }}</span>
          </button>

          <div class="secondary-actions">
            <button class="btn btn-secondary btn-sm" @click="navigateTo('/exercises')">
              <i class="pi pi-bolt"></i>
              <span>{{ $t('home.dashboard.quickPractice') }}</span>
            </button>
            <button
              v-if="hasStartedLearning"
              class="btn btn-outline btn-sm"
              @click="showRestartDialog = true"
            >
              <i class="pi pi-refresh"></i>
              <span>{{ $t('home.hero.restartLearning') }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Daily Focus & Quick Drills Bar -->
    <section v-if="showHero" class="daily-focus-bar">
      <button
        class="focus-action primary-focus"
        @click="router.push({ path: `${base}/exercises`, query: { mode: 'daily' } })"
        type="button"
      >
        <span class="fa-icon indigo"><i class="pi pi-sparkles"></i></span>
        <div class="fa-text">
          <strong>{{ $t('home.daily.mixTitle') }}</strong>
          <span>{{ $t('home.daily.mixSub') }}</span>
        </div>
        <i class="pi pi-arrow-right fa-arrow"></i>
      </button>

      <button
        class="focus-action"
        @click="router.push({ path: `${base}/dictionary`, query: { mode: 'flashcards', filter: dueWordsCount > 0 ? 'due' : 'unlearned' } })"
        type="button"
      >
        <span class="fa-icon teal"><i class="pi pi-clock"></i></span>
        <div class="fa-text">
          <strong>{{ $t('home.daily.srsTitle') }}</strong>
          <span>
            {{
              dueWordsCount > 0
                ? $t('home.daily.srsDue', { count: dueWordsCount })
                : $t('home.daily.srsAllClear')
            }}
          </span>
        </div>
        <span v-if="dueWordsCount > 0" class="fa-badge teal">{{ dueWordsCount }}</span>
        <i v-else class="pi pi-arrow-right fa-arrow"></i>
      </button>

      <button
        v-if="mistakesCount > 0"
        class="focus-action"
        @click="router.push({ path: `${base}/exercises`, query: { mode: 'mistakes' } })"
        type="button"
      >
        <span class="fa-icon danger"><i class="pi pi-exclamation-circle"></i></span>
        <div class="fa-text">
          <strong>{{ $t('practice.mistakesTitle') }}</strong>
          <span>{{ $t('home.daily.mistakesSub', { count: mistakesCount }) }}</span>
        </div>
        <span class="fa-badge danger">{{ mistakesCount }}</span>
      </button>

      <button
        v-else-if="langStore.targetLang === 'id'"
        class="focus-action"
        @click="router.push({ path: `${base}/exercises`, query: { mode: 'matrix' } })"
        type="button"
      >
        <span class="fa-icon violet"><i class="pi pi-th-large"></i></span>
        <div class="fa-text">
          <strong>{{ $t('matrix.title') }}</strong>
          <span>{{ $t('home.daily.matrixSub') }}</span>
        </div>
        <i class="pi pi-arrow-right fa-arrow"></i>
      </button>

      <button
        class="focus-action"
        @click="router.push({ path: `${base}/exercises`, query: { mode: 'listening' } })"
        type="button"
      >
        <span class="fa-icon sky"><i class="pi pi-headphones"></i></span>
        <div class="fa-text">
          <strong>{{ $t('listening.title') }}</strong>
          <span>{{ $t('home.daily.listeningSub') }}</span>
        </div>
        <i class="pi pi-arrow-right fa-arrow"></i>
      </button>
    </section>

    <!-- Compact Stats Strip when user has started -->
    <section v-if="showHero && hasStartedLearning" class="stats-strip">
      <div class="mini-stat" @click="navigateTo('/progress')">
        <span class="mini-stat-icon indigo"><i class="pi pi-check-circle"></i></span>
        <div>
          <div class="mini-stat-val">{{ completedCount }}/{{ visibleLessons.length }}</div>
          <div class="mini-stat-lbl">{{ $t('progress.stats.lessonsCompleted') }}</div>
        </div>
      </div>
      <div class="mini-stat" @click="navigateTo('/dictionary')">
        <span class="mini-stat-icon teal"><i class="pi pi-book"></i></span>
        <div>
          <div class="mini-stat-val">{{ progressStore.wordsLearned }}</div>
          <div class="mini-stat-lbl">{{ $t('progress.stats.wordsLearned') }}</div>
        </div>
      </div>
      <div class="mini-stat" @click="navigateTo('/exercises')">
        <span class="mini-stat-icon violet"><i class="pi pi-bolt"></i></span>
        <div>
          <div class="mini-stat-val">{{ stats.exerciseProgress }}</div>
          <div class="mini-stat-lbl">{{ $t('progress.stats.exercisesCompleted') }}</div>
        </div>
      </div>
      <div class="mini-stat" @click="navigateTo('/progress')">
        <span class="mini-stat-icon amber"><i class="pi pi-star"></i></span>
        <div>
          <div class="mini-stat-val">{{ stats.totalPoints }}</div>
          <div class="mini-stat-lbl">{{ $t('progress.stats.pointsEarned') }}</div>
        </div>
      </div>
    </section>

    <!-- Structured 4-Module Course Path -->
    <section class="curriculum-section">
      <div class="section-heading">
        <div>
          <h2>{{ $t('home.lessons.title') }}</h2>
          <p class="section-subtitle">{{ $t('home.lessons.subtitle') }}</p>
        </div>
      </div>

      <div class="modules-stack">
        <div v-for="mod in courseModules" :key="mod.id" class="module-block">
          <div class="module-header">
            <div class="module-title-group">
              <span class="module-badge">{{ $t('home.modules.badge', { n: mod.id }) }}</span>
              <div>
                <h3>{{ $t(mod.titleKey) }}</h3>
                <p class="module-desc">{{ $t(mod.descKey) }}</p>
              </div>
            </div>
            <div class="module-progress-pill">
              <span>{{ mod.completed }}/{{ mod.total }}</span>
              <div class="mini-bar">
                <div class="mini-bar-fill" :style="{ width: mod.percent + '%' }"></div>
              </div>
            </div>
          </div>

          <div class="lessons-grid">
            <article
              v-for="lesson in mod.lessons"
              :key="lesson.id"
              class="lesson-card"
              :class="{
                completed: lesson.isCompleted,
                current: lesson.id === nextLessonId && !lesson.isCompleted,
              }"
              @click="goToLesson(lesson.id)"
            >
              <div class="lesson-card-top">
                <div class="lesson-num" :class="{ done: lesson.isCompleted }">
                  <i v-if="lesson.isCompleted" class="pi pi-check"></i>
                  <span v-else>{{ lesson.id }}</span>
                </div>

                <div class="lesson-status-badges">
                  <span v-if="lesson.isCompleted" class="status-pill success">
                    {{ $t('common.completed') }}
                  </span>
                  <span v-else-if="lesson.id === nextLessonId" class="status-pill active">
                    {{ lesson.isInProgress ? $t(stepLabels[lesson.currentStep] || 'home.dashboard.inProgress') : $t('home.dashboard.recommended') }}
                  </span>
                  <span v-else-if="lesson.isInProgress" class="status-pill neutral">
                    {{ $t('home.dashboard.inProgress') }}
                  </span>
                </div>
              </div>

              <div class="lesson-body">
                <h4>{{ $t('lesson.title.' + lesson.id) }}</h4>
                <p>{{ lesson.description }}</p>
              </div>

              <div class="lesson-footer-meta">
                <span class="meta-chip">
                  <i class="pi pi-clock"></i> {{ $t('home.lessonMeta.minutes', { count: lesson.estimatedTime }) }}
                </span>
                <span v-if="lesson.wordCount > 0" class="meta-chip">
                  <i class="pi pi-book"></i> {{ lesson.wordCount }}
                </span>
                <span v-if="lesson.totalExercises > 0" class="meta-chip">
                  <i class="pi pi-check-square"></i> {{ lesson.doneExercises }}/{{ lesson.totalExercises }}
                </span>
              </div>

              <div v-if="lesson.totalExercises > 0 && (lesson.doneExercises > 0 || lesson.isCompleted)" class="lesson-bar">
                <div
                  class="lesson-bar-fill"
                  :class="{ done: lesson.isCompleted }"
                  :style="{ width: lesson.isCompleted ? '100%' : Math.round((lesson.doneExercises / lesson.totalExercises) * 100) + '%' }"
                ></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Supporting Study Tools (non-redundant, compact) -->
    <section v-if="showQuickLinks" class="tools-section">
      <h2>{{ $t('home.quickLinks.title') }}</h2>
      <div class="tools-grid">
        <button class="tool-card" @click="navigateTo('/dictionary')" type="button">
          <div class="tool-icon teal"><i class="pi pi-book"></i></div>
          <div class="tool-info">
            <h3>{{ $t('home.quickLinks.dictionary') }}</h3>
            <p>{{ $t('home.quickLinks.dictionaryDescription') }}</p>
          </div>
          <i class="pi pi-arrow-right tool-arrow"></i>
        </button>

        <button class="tool-card" @click="navigateTo('/grammar')" type="button">
          <div class="tool-icon indigo"><i class="pi pi-table"></i></div>
          <div class="tool-info">
            <h3>{{ $t('home.quickLinks.grammarTable') }}</h3>
            <p>{{ $t('home.quickLinks.grammarTableDescription') }}</p>
          </div>
          <i class="pi pi-arrow-right tool-arrow"></i>
        </button>

        <button class="tool-card" @click="navigateTo('/phrasebook')" type="button">
          <div class="tool-icon amber"><i class="pi pi-comments"></i></div>
          <div class="tool-info">
            <h3>{{ $t('phrasebook.title') }}</h3>
            <p>{{ $t('phrasebook.description.' + langStore.targetLang) }}</p>
          </div>
          <i class="pi pi-arrow-right tool-arrow"></i>
        </button>

        <button
          v-if="aiStore.isSupported"
          class="tool-card ai-tool"
          @click="navigateTo('/ai-chat')"
          type="button"
        >
          <div class="tool-icon violet"><i class="pi pi-sparkles"></i></div>
          <div class="tool-info">
            <h3>{{ $t('home.quickLinks.aiChat') }}</h3>
            <p>{{ $t('home.quickLinks.aiChatDescription') }}</p>
          </div>
          <i class="pi pi-arrow-right tool-arrow"></i>
        </button>
      </div>
    </section>

    <!-- Restart Confirmation Dialog -->
    <PDialog
      v-model:visible="showRestartDialog"
      modal
      :header="$t('home.hero.restartLearning')"
      :style="{ width: '440px', maxWidth: '92vw' }"
    >
      <p class="dialog-message">{{ $t('home.hero.restartConfirm') }}</p>
      <template #footer>
        <div class="dialog-actions">
          <button class="btn btn-outline btn-sm" @click="showRestartDialog = false">
            {{ $t('common.cancel') }}
          </button>
          <button class="btn btn-primary btn-sm" @click="confirmRestartLearning">
            {{ $t('home.hero.restartLearning') }}
          </button>
        </div>
      </template>
    </PDialog>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Dashboard Hero */
.dashboard-hero {
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 2rem;
  align-items: stretch;
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: var(--bg-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.dashboard-hero::before {
  content: "";
  position: absolute;
  top: -100px;
  right: -80px;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, var(--primary-soft-strong) 0%, transparent 70%);
  pointer-events: none;
}

.hero-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.hero-badge-row {
  margin-bottom: 1rem;
}

.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.84rem;
  font-weight: 600;
}

.hero-main h1 {
  font-size: 2.3rem;
  line-height: 1.15;
  margin-bottom: 0.9rem;
}

.hero-description {
  font-size: 1.02rem;
  color: var(--text);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  max-width: 560px;
}

/* 4-step Cycle Strip */
.cycle-strip {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
}

.cycle-step {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--text-h);
}

.cycle-num {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: var(--primary-solid);
  color: var(--primary-on-solid);
  font-size: 0.74rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.cycle-arrow {
  font-size: 0.72rem;
  color: var(--muted);
}

/* Next-Step Action Card */
.next-step-card {
  position: relative;
  z-index: 1;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.next-step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.next-step-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--primary);
}

.next-step-num {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-h);
}

.next-step-title {
  font-size: 1.35rem;
  margin: 0;
}

.next-step-desc {
  font-size: 0.92rem;
  color: var(--text);
  margin: 0;
}

.next-step-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  font-size: 0.84rem;
  color: var(--muted);
}

.next-step-meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.course-progress-box {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-top: 0.25rem;
}

.course-progress-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  color: var(--muted);
}

.course-progress-row strong {
  color: var(--text-h);
}

.next-step-actions {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-top: 0.35rem;
}

.full-btn {
  width: 100%;
}

.secondary-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.secondary-actions .btn {
  flex: 1;
}

/* Daily Focus & Quick Drills Bar */
.daily-focus-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.85rem;
}

.focus-action {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.95rem 1.05rem;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1.5px solid var(--border);
  box-shadow: var(--shadow-xs);
  cursor: pointer;
  text-align: left;
  transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
}

.focus-action:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.focus-action.primary-focus {
  border-color: var(--primary);
  background: linear-gradient(135deg, var(--primary-soft) 0%, var(--bg-card) 100%);
}

.fa-icon {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.08rem;
  flex-shrink: 0;
}

.fa-icon.indigo { background: var(--primary-soft); color: var(--primary); }
.fa-icon.teal { background: rgba(13, 148, 136, 0.14); color: var(--translation-color); }
.fa-icon.violet { background: var(--accent-bg); color: var(--accent); }
.fa-icon.danger { background: var(--danger-soft); color: var(--danger); }
.fa-icon.sky { background: rgba(14, 165, 233, 0.14); color: #0ea5e9; }

.fa-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}

.fa-text strong {
  font-size: 0.9rem;
  color: var(--text-h);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fa-text span {
  font-size: 0.78rem;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fa-badge {
  font-size: 0.76rem;
  font-weight: 700;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  flex-shrink: 0;
}

.fa-badge.teal { background: rgba(13, 148, 136, 0.16); color: var(--translation-color); }
.fa-badge.danger { background: var(--danger-soft); color: var(--danger); }

.fa-arrow {
  color: var(--muted);
  font-size: 0.82rem;
  flex-shrink: 0;
}

/* Stats Strip */
.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.mini-stat {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1rem 1.2rem;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xs);
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.mini-stat:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.mini-stat-icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.mini-stat-icon.indigo,
.tool-icon.indigo {
  background: var(--primary-soft);
  color: var(--primary);
}
.mini-stat-icon.teal,
.tool-icon.teal {
  background: rgba(13, 148, 136, 0.12);
  color: var(--translation-color);
}
.mini-stat-icon.violet,
.tool-icon.violet {
  background: var(--accent-bg);
  color: var(--accent);
}
.mini-stat-icon.amber,
.tool-icon.amber {
  background: var(--warning-soft);
  color: var(--warning);
}

.mini-stat-val {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-h);
  line-height: 1.15;
}

.mini-stat-lbl {
  font-size: 0.8rem;
  color: var(--muted);
}

/* Curriculum Modules */
.section-heading {
  margin-bottom: 1.25rem;
}

.section-heading h2 {
  margin-bottom: 0.25rem;
}

.section-subtitle {
  color: var(--muted);
  margin: 0;
  font-size: 0.96rem;
}

.modules-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.module-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.module-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--border);
}

.module-title-group {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.module-badge {
  padding: 0.3rem 0.7rem;
  border-radius: var(--radius-sm);
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
}

.module-title-group h3 {
  margin: 0;
  font-size: 1.18rem;
}

.module-desc {
  margin: 0.1rem 0 0;
  font-size: 0.88rem;
  color: var(--muted);
}

.module-progress-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--muted);
}

.mini-bar {
  width: 72px;
  height: 6px;
  border-radius: 999px;
  background: var(--bg-subtle);
  overflow: hidden;
  border: 1px solid var(--border);
}

.mini-bar-fill {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 999px;
  transition: width 0.3s ease;
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.lesson-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  background: var(--bg-card);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  overflow: hidden;
}

.lesson-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: var(--primary);
}

.lesson-card.current {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-soft), var(--shadow-sm);
}

.lesson-card.completed {
  border-color: rgba(22, 163, 74, 0.35);
}

.lesson-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.lesson-num {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--primary-soft);
  color: var(--primary);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.98rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.lesson-card.current .lesson-num {
  background: var(--primary-solid);
  color: var(--primary-on-solid);
}

.lesson-num.done {
  background: var(--success-soft);
  color: var(--success);
}

.status-pill {
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.status-pill.success {
  background: var(--success-soft);
  color: var(--success);
}

.status-pill.active {
  background: var(--primary-soft);
  color: var(--primary);
}

.status-pill.neutral {
  background: var(--bg-subtle);
  color: var(--muted);
}

.lesson-body h4 {
  font-size: 1.05rem;
  margin-bottom: 0.3rem;
}

.lesson-body p {
  font-size: 0.88rem;
  color: var(--text);
  margin: 0;
  line-height: 1.45;
}

.lesson-footer-meta {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: auto;
  padding-top: 0.25rem;
}

.meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: var(--muted);
}

.meta-chip i {
  font-size: 0.78rem;
}

.lesson-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--bg-subtle);
}

.lesson-bar-fill {
  height: 100%;
  background: var(--primary);
  transition: width 0.3s ease;
}

.lesson-bar-fill.done {
  background: var(--success);
}

/* Supporting Study Tools */
.tools-section h2 {
  margin-bottom: 1rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.tool-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.15rem 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xs);
  cursor: pointer;
  text-align: left;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.tool-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.tool-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.tool-info {
  flex: 1;
  min-width: 0;
}

.tool-info h3 {
  font-size: 1rem;
  margin-bottom: 0.2rem;
}

.tool-info p {
  font-size: 0.84rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.4;
}

.tool-arrow {
  color: var(--muted);
  font-size: 0.9rem;
  transition: transform 0.18s ease, color 0.18s ease;
}

.tool-card:hover .tool-arrow {
  transform: translateX(3px);
  color: var(--primary);
}

.dialog-message {
  margin: 0;
  color: var(--text);
  line-height: 1.55;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
}

@media (max-width: 960px) {
  .dashboard-hero {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .daily-focus-bar,
  .stats-strip {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .daily-focus-bar {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-main h1 {
    font-size: 1.75rem;
  }

  .lessons-grid {
    grid-template-columns: 1fr;
  }

  .stats-strip {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
}
</style>
