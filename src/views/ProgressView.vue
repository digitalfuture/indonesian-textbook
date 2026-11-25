<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";
import { useAIStore } from "../stores/ai";
import { useExerciseData } from "../composables/useExercises";
import { useI18n } from "vue-i18n";
import { lessons as lessonsId } from "../data/lessons";
import { lessonsRu } from "../data/lessonsRu";
import CountryFlag from "../components/common/CountryFlag.vue";

const router = useRouter();
const toast = useToast();
const progressStore = useProgressStore();
const langStore = useLanguageStore();
const aiStore = useAIStore();
const { allExercises } = useExerciseData();
const { t } = useI18n();

const lessons = computed(() => {
  const raw = langStore.targetLang === "id" ? lessonsId : lessonsRu;
  return raw
    .filter((l) => l.id !== 17 || aiStore.isSupported)
    .map((lesson) => {
      const totalExercises = allExercises.value.filter(
        (e) => e.lessonId === lesson.id,
      ).length;
      const doneExercises =
        progressStore.lessonProgress(lesson.id)?.completedExercises?.length || 0;
      return {
        ...lesson,
        isCompleted: progressStore.isLessonCompleted(lesson.id),
        doneExercises: Math.min(doneExercises, totalExercises),
        totalExercises,
      };
    });
});

const stats = computed(() => progressStore.getLearningStats());
const wordsLearnedCount = computed(
  () =>
    Object.values(progressStore.progress.vocabulary).filter((v) => v.isLearned)
      .length,
);
const lessonsCompletedCount = computed(
  () => lessons.value.filter((l) => l.isCompleted).length,
);

const formattedTime = computed(() => {
  const hours = Math.floor(stats.value.timeSpent / 60);
  const mins = Math.floor(stats.value.timeSpent % 60);
  if (hours > 0) {
    return t("progress.timeHoursMins", { h: hours, m: mins });
  }
  return t("progress.timeMins", { m: mins });
});

const showExportModal = ref(false);
const showImportModal = ref(false);
const showResetModal = ref(false);
const importData = ref("");

function goToLesson(id: number) {
  router.push(`/${langStore.interfaceLang}/${langStore.targetLang}/lesson/${id}`);
}

function exportProgress() {
  progressStore.downloadProgress();
  toast.add({
    severity: "success",
    summary: t("progress.exportModal.title"),
    detail: t("progress.exportModal.downloaded"),
    life: 2500,
  });
}

async function copyExportJson() {
  try {
    await navigator.clipboard.writeText(progressStore.exportProgressDataInner());
    toast.add({
      severity: "success",
      summary: t("common.copied"),
      life: 2000,
    });
  } catch {
    // ignore clipboard errors
  }
}

function importProgress() {
  if (!importData.value.trim()) return;
  const success = progressStore.importProgressData(importData.value);
  if (success) {
    showImportModal.value = false;
    importData.value = "";
    toast.add({
      severity: "success",
      summary: t("progress.importModal.title"),
      detail: t("progress.importModal.success"),
      life: 2500,
    });
  } else {
    toast.add({
      severity: "error",
      summary: t("progress.importModal.title"),
      detail: t("progress.importModal.error"),
      life: 3500,
    });
  }
}

function confirmResetProgress() {
  progressStore.resetProgress();
  showResetModal.value = false;
  toast.add({
    severity: "info",
    summary: t("progress.settings.reset"),
    detail: t("progress.settings.resetDone"),
    life: 2500,
  });
}

const achievementList = [
  { id: "first_lesson", icon: "pi pi-flag" },
  { id: "vocabulary_50", icon: "pi pi-book" },
  { id: "vocabulary_100", icon: "pi pi-bookmark" },
  { id: "week_streak", icon: "pi pi-bolt" },
  { id: "exercise_50", icon: "pi pi-star" },
];
</script>

<template>
  <div class="progress-view fade-in">
    <header class="progress-header">
      <h1 class="progress-title-flex">
        <CountryFlag :lang="langStore.targetLang" size="md" />
        <span>{{ $t('progress.title') }}</span>
      </h1>
      <p class="progress-description">
        {{ $t('progress.description.' + langStore.targetLang) }}
      </p>
    </header>

    <!-- Stats Grid -->
    <section class="stats-section">
      <h2>{{ $t('progress.stats.title') }}</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon teal"><i class="pi pi-book"></i></div>
          <div class="stat-info">
            <span class="stat-value">{{ wordsLearnedCount }}</span>
            <span class="stat-label">{{ $t('progress.stats.wordsLearned') }}</span>
          </div>
          <div class="stat-progress">
            <div class="progress">
              <div class="progress-bar" :style="{ width: stats.wordProgress + '%' }"></div>
            </div>
            <span class="progress-text">{{ Math.round(stats.wordProgress) }}%</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon indigo"><i class="pi pi-compass"></i></div>
          <div class="stat-info">
            <span class="stat-value">{{ lessonsCompletedCount }}/{{ lessons.length }}</span>
            <span class="stat-label">{{ $t('progress.stats.lessonsCompleted') }}</span>
          </div>
          <div class="stat-progress">
            <div class="progress">
              <div class="progress-bar" :style="{ width: stats.lessonProgress + '%' }"></div>
            </div>
            <span class="progress-text">{{ Math.round(stats.lessonProgress) }}%</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon violet"><i class="pi pi-check-square"></i></div>
          <div class="stat-info">
            <span class="stat-value">{{ stats.exerciseProgress }}</span>
            <span class="stat-label">{{ $t('progress.stats.exercisesCompleted') }}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon amber"><i class="pi pi-star"></i></div>
          <div class="stat-info">
            <span class="stat-value">{{ stats.totalPoints }}</span>
            <span class="stat-label">{{ $t('progress.stats.pointsEarned') }}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon orange"><i class="pi pi-bolt"></i></div>
          <div class="stat-info">
            <span class="stat-value">{{ stats.streakDays }}</span>
            <span class="stat-label">{{ $t('progress.stats.streakDays') }}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon sky"><i class="pi pi-clock"></i></div>
          <div class="stat-info">
            <span class="stat-value">{{ formattedTime }}</span>
            <span class="stat-label">{{ $t('progress.stats.timeSpent') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements -->
    <section class="achievements-section">
      <h2>{{ $t('progress.achievements.title') }}</h2>
      <div class="achievements-grid">
        <div
          v-for="achievement in achievementList"
          :key="achievement.id"
          class="achievement-card"
          :class="{ unlocked: progressStore.hasAchievement(achievement.id) }"
        >
          <div class="achievement-icon">
            <i :class="achievement.icon"></i>
          </div>
          <div class="achievement-info">
            <h3>{{ $t('progress.achievement.' + achievement.id + '.name') }}</h3>
            <p>{{ $t('progress.achievement.' + achievement.id + '.description') }}</p>
          </div>
          <div class="achievement-status">
            <i
              :class="
                progressStore.hasAchievement(achievement.id)
                  ? 'pi pi-trophy unlocked-trophy'
                  : 'pi pi-lock'
              "
            ></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Lessons Progress -->
    <section class="lessons-progress">
      <h2>{{ $t('progress.lessons.title') }}</h2>
      <div class="lessons-list">
        <div
          v-for="lesson in lessons"
          :key="lesson.id"
          class="lesson-progress-item"
          :class="{ completed: lesson.isCompleted }"
          @click="goToLesson(lesson.id)"
        >
          <div class="lesson-number" :class="{ done: lesson.isCompleted }">
            <i v-if="lesson.isCompleted" class="pi pi-check"></i>
            <span v-else>{{ lesson.id }}</span>
          </div>
          <div class="lesson-info">
            <h3>{{ $t('lesson.title.' + lesson.id) }}</h3>
            <p>{{ lesson.description }}</p>
          </div>
          <div class="lesson-status">
            <span v-if="lesson.totalExercises > 0" class="lesson-ex-count">
              {{ lesson.doneExercises }}/{{ lesson.totalExercises }}
            </span>
            <span v-if="lesson.isCompleted" class="status-pill success">
              {{ $t('common.completed') }}
            </span>
            <span v-else-if="lesson.doneExercises > 0" class="status-pill active">
              {{ $t('home.dashboard.inProgress') }}
            </span>
            <span v-else class="status-pill neutral">
              {{ $t('progress.lessons.notStartedShort') }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Management -->
    <section class="settings-section content-card">
      <h2>{{ $t('progress.settings.title') }}</h2>
      <div class="settings-grid">
        <button class="btn btn-primary" @click="showExportModal = true" type="button">
          <i class="pi pi-download"></i>
          <span>{{ $t('progress.settings.export') }}</span>
        </button>
        <button class="btn btn-secondary" @click="showImportModal = true" type="button">
          <i class="pi pi-upload"></i>
          <span>{{ $t('progress.settings.import') }}</span>
        </button>
        <button class="btn btn-danger-outline" @click="showResetModal = true" type="button">
          <i class="pi pi-trash"></i>
          <span>{{ $t('progress.settings.reset') }}</span>
        </button>
      </div>
    </section>

    <!-- Export Dialog -->
    <PDialog
      v-model:visible="showExportModal"
      modal
      :header="$t('progress.exportModal.title')"
      :style="{ width: '520px', maxWidth: '94vw' }"
    >
      <p class="modal-desc">{{ $t('progress.exportModal.message') }}</p>
      <textarea
        :value="progressStore.exportProgressDataInner()"
        readonly
        class="form-input json-textarea"
      ></textarea>
      <template #footer>
        <div class="modal-actions">
          <button class="btn btn-outline btn-sm" @click="copyExportJson" type="button">
            <i class="pi pi-copy"></i>
            <span>{{ $t('common.copy') }}</span>
          </button>
          <button class="btn btn-primary btn-sm" @click="exportProgress" type="button">
            <i class="pi pi-download"></i>
            <span>{{ $t('progress.exportModal.download') }}</span>
          </button>
        </div>
      </template>
    </PDialog>

    <!-- Import Dialog -->
    <PDialog
      v-model:visible="showImportModal"
      modal
      :header="$t('progress.importModal.title')"
      :style="{ width: '520px', maxWidth: '94vw' }"
    >
      <p class="modal-desc">{{ $t('progress.importModal.message') }}</p>
      <textarea
        v-model="importData"
        :placeholder="$t('progress.importModal.placeholder')"
        class="form-input json-textarea"
      ></textarea>
      <template #footer>
        <div class="modal-actions">
          <button class="btn btn-outline btn-sm" @click="showImportModal = false" type="button">
            {{ $t('common.cancel') }}
          </button>
          <button class="btn btn-primary btn-sm" @click="importProgress" type="button">
            {{ $t('progress.importModal.import') }}
          </button>
        </div>
      </template>
    </PDialog>

    <!-- Reset Confirmation Dialog -->
    <PDialog
      v-model:visible="showResetModal"
      modal
      :header="$t('progress.settings.reset')"
      :style="{ width: '440px', maxWidth: '94vw' }"
    >
      <p class="modal-desc">{{ $t('progress.settings.resetConfirm') }}</p>
      <template #footer>
        <div class="modal-actions">
          <button class="btn btn-outline btn-sm" @click="showResetModal = false" type="button">
            {{ $t('common.cancel') }}
          </button>
          <button class="btn btn-danger-outline btn-sm" @click="confirmResetProgress" type="button">
            {{ $t('progress.settings.reset') }}
          </button>
        </div>
      </template>
    </PDialog>
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

.progress-title-flex {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 0.45rem;
}

.progress-description {
  font-size: 1rem;
  color: var(--muted);
  margin: 0;
}

section {
  margin-bottom: 2.5rem;
}

section h2 {
  font-size: 1.35rem;
  margin-bottom: 1.1rem;
  color: var(--text-h);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  box-shadow: var(--shadow-xs);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--border);
}

.stat-icon {
  width: 46px;
  height: 46px;
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.stat-icon.indigo { background: var(--primary-soft); color: var(--primary); }
.stat-icon.teal { background: rgba(13, 148, 136, 0.12); color: var(--translation-color); }
.stat-icon.violet { background: var(--accent-bg); color: var(--accent); }
.stat-icon.amber { background: var(--warning-soft); color: var(--warning); }
.stat-icon.orange { background: rgba(234, 88, 12, 0.12); color: #ea580c; }
.stat-icon.sky { background: rgba(14, 165, 233, 0.12); color: #0ea5e9; }

.stat-info {
  flex: 1;
  min-width: 0;
}

.stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-h);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--muted);
}

.stat-progress {
  width: 84px;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.progress-text {
  font-size: 0.82rem;
  color: var(--primary);
  font-weight: 700;
}

/* Achievements */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.9rem;
}

.achievement-card {
  display: flex;
  align-items: center;
  gap: 0.95rem;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 1rem 1.2rem;
  box-shadow: var(--shadow-xs);
  border: 1px solid var(--border);
  opacity: 0.62;
  transition: opacity 0.2s ease, border-color 0.2s ease;
}

.achievement-card.unlocked {
  opacity: 1;
  border-color: rgba(217, 119, 6, 0.4);
}

.achievement-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.achievement-card.unlocked .achievement-icon {
  background: var(--warning-soft);
  color: var(--warning);
}

.achievement-info {
  flex: 1;
  min-width: 0;
}

.achievement-info h3 {
  font-size: 0.98rem;
  color: var(--text-h);
  margin-bottom: 0.15rem;
}

.achievement-info p {
  font-size: 0.84rem;
  color: var(--muted);
  margin: 0;
}

.achievement-status {
  color: var(--muted);
  font-size: 1.1rem;
}

.unlocked-trophy {
  color: var(--warning);
}

/* Lessons list */
.lessons-list {
  display: grid;
  gap: 0.65rem;
}

.lesson-progress-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg-card);
  border-radius: var(--radius-md);
  padding: 0.95rem 1.25rem;
  box-shadow: var(--shadow-xs);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
}

.lesson-progress-item:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}

.lesson-progress-item.completed {
  border-left: 3.5px solid var(--success);
}

.lesson-number {
  width: 36px;
  height: 36px;
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.lesson-number.done {
  background: var(--success-soft);
  color: var(--success);
}

.lesson-info {
  flex: 1;
  min-width: 0;
}

.lesson-info h3 {
  font-size: 0.98rem;
  color: var(--text-h);
  margin-bottom: 0.15rem;
}

.lesson-info p {
  font-size: 0.85rem;
  color: var(--muted);
  margin: 0;
}

.lesson-status {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
}

.lesson-ex-count {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--muted);
}

.status-pill {
  font-size: 0.76rem;
  font-weight: 600;
  padding: 0.22rem 0.65rem;
  border-radius: 999px;
}

.status-pill.success { background: var(--success-soft); color: var(--success); }
.status-pill.active { background: var(--primary-soft); color: var(--primary); }
.status-pill.neutral { background: var(--bg-subtle); color: var(--muted); }

/* Settings */
.settings-section h2 {
  margin-bottom: 1rem;
}

.settings-grid {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.modal-desc {
  color: var(--text);
  margin-bottom: 0.85rem;
}

.json-textarea {
  height: 160px;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 0.86rem;
  resize: vertical;
}

.modal-actions {
  display: flex;
  gap: 0.6rem;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .stats-grid,
  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .lesson-progress-item {
    flex-wrap: wrap;
  }

  .settings-grid {
    flex-direction: column;
  }
}
</style>
