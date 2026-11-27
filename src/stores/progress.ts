import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { UserProgress } from "../utils/types";
import {
  saveProgress,
  getOrCreateProgress,
  updateStreak,
  updateStatistics,
  downloadProgressFile,
  importProgress,
  clearProgress,
  createDefaultProgress,
  exportProgress,
} from "../utils/storage";
import { lessons as lessonsId } from "../data/lessons";
import { lessonsRu } from "../data/lessonsRu";
import { useLanguageStore } from "./language";

export const useProgressStore = defineStore("progress", () => {
  // Состояние
  const progress = ref<UserProgress>(createDefaultProgress());
  const isInitialized = ref(false);

  // Инициализация
  function init() {
    progress.value = getOrCreateProgress();
    syncLearnedWordsFromLessons();
    checkAchievements();
    isInitialized.value = true;
  }

  // Вычисляемые свойства
  const totalPoints = computed(() => progress.value.statistics.totalPoints);
  const exercisesCompleted = computed(
    () => progress.value.statistics.exercisesCompleted,
  );
  const wordsLearned = computed(() => progress.value.statistics.wordsLearned);
  const lessonsCompleted = computed(
    () => progress.value.statistics.lessonsCompleted,
  );
  const timeSpent = computed(() => progress.value.statistics.timeSpent);
  const streakDays = computed(() => progress.value.statistics.streakDays);
  const favoriteWords = computed(() => progress.value.favoriteWords);
  const achievements = computed(() => progress.value.achievements);
  const settings = computed(() => progress.value.settings);

  // Прогресс по урокам
  const lessonProgress = computed(() => {
    return (lessonId: number) => progress.value.lessons[lessonId];
  });

  const isLessonCompleted = computed(() => {
    return (lessonId: number) => {
      const lesson = progress.value.lessons[lessonId];
      return lesson?.isCompleted || false;
    };
  });

  // Прогресс по словам
  const wordProgress = computed(() => {
    return (wordId: number) => progress.value.vocabulary[wordId];
  });

  const isWordLearned = computed(() => {
    return (wordId: number) => {
      const word = progress.value.vocabulary[wordId];
      return word?.isLearned || false;
    };
  });

  // Вспомогательные функции для синхронизации слов из уроков
  function getLessonWords(lessonId: number): number[] {
    const langStore = useLanguageStore();
    const allLessons = langStore.targetLang === "id" ? lessonsId : lessonsRu;
    const lesson = allLessons.find((l) => l.id === lessonId);
    return lesson?.vocabulary || [];
  }

  function syncLearnedWordsFromLessons() {
    let updated = false;
    const langStore = useLanguageStore();
    const allLessons = langStore.targetLang === "id" ? lessonsId : lessonsRu;

    for (const [lessonIdStr, lProgress] of Object.entries(progress.value.lessons)) {
      if (lProgress.isCompleted) {
        const lId = parseInt(lessonIdStr);
        const lesson = allLessons.find((l) => l.id === lId);
        if (lesson?.vocabulary) {
          for (const wordId of lesson.vocabulary) {
            const currentWord = progress.value.vocabulary[wordId];
            if (!currentWord?.isLearned) {
              progress.value.vocabulary[wordId] = {
                isLearned: true,
                learnedAt: lProgress.completedAt || new Date().toISOString(),
                timesPracticed: currentWord?.timesPracticed || 1,
              };
              updated = true;
            }
          }
        }
      }
    }

    const currentLearnedCount = Object.values(progress.value.vocabulary).filter(
      (w) => w.isLearned,
    ).length;

    if (progress.value.statistics.wordsLearned !== currentLearnedCount) {
      progress.value = updateStatistics(progress.value, {
        wordsLearned: currentLearnedCount,
      });
      updated = true;
    }

    if (updated) {
      saveProgress(progress.value);
    }
  }

  // Методы для работы с уроками
  function completeLesson(lessonId: number, score: number = 0) {
    const lesson = progress.value.lessons[lessonId] || {
      isCompleted: false,
      completedExercises: [],
      score: 0,
    };

    progress.value.lessons[lessonId] = {
      ...lesson,
      isCompleted: true,
      completedAt: new Date().toISOString(),
      score: Math.max(lesson.score, score),
    };

    // Автоматически помечаем словарный запас этого урока как изученный
    const lessonWords = getLessonWords(lessonId);
    for (const wordId of lessonWords) {
      const currentWord = progress.value.vocabulary[wordId];
      if (!currentWord?.isLearned) {
        progress.value.vocabulary[wordId] = {
          isLearned: true,
          learnedAt: new Date().toISOString(),
          timesPracticed: currentWord?.timesPracticed || 1,
        };
      }
    }

    const totalWordsLearned = Object.values(progress.value.vocabulary).filter(
      (w) => w.isLearned,
    ).length;

    // Обновляем статистику
    progress.value = updateStatistics(progress.value, {
      lessonsCompleted: Object.values(progress.value.lessons).filter(
        (l) => l.isCompleted,
      ).length,
      totalPoints: progress.value.statistics.totalPoints + score,
      wordsLearned: totalWordsLearned,
    });

    // Обновляем серию
    progress.value = updateStreak(progress.value);

    // Проверяем достижения
    checkAchievements();

    saveProgress(progress.value);
  }

  function uncompleteLesson(lessonId: number) {
    const lesson = progress.value.lessons[lessonId];
    if (!lesson) return;

    // Only mark as not completed while preserving completedExercises and score.
    // This allows retrying the lesson without losing progress counts.
    progress.value.lessons[lessonId] = {
      ...lesson,
      isCompleted: false,
      completedAt: undefined,
    };

    // Update only lessonsCompleted count; keep exercisesCompleted and totalPoints unchanged.
    progress.value = updateStatistics(progress.value, {
      lessonsCompleted: Object.values(progress.value.lessons).filter(
        (l) => l.isCompleted,
      ).length,
    });

    saveProgress(progress.value);
  }

  function resetLessonProgress(lessonId: number) {
    const lesson = progress.value.lessons[lessonId];
    if (!lesson) return;

    progress.value.lessons[lessonId] = {
      isCompleted: false,
      completedExercises: [],
      score: 0,
    };

    // Update lessonsCompleted count
    progress.value = updateStatistics(progress.value, {
      lessonsCompleted: Object.values(progress.value.lessons).filter(
        (l) => l.isCompleted,
      ).length,
    });

    saveProgress(progress.value);
  }

  function setLessonStep(
    lessonId: number,
    step: "theory" | "vocabulary" | "examples" | "exercises",
  ) {
    const lesson = progress.value.lessons[lessonId] || {
      isCompleted: false,
      completedExercises: [],
      score: 0,
    };

    progress.value.lessons[lessonId] = {
      ...lesson,
      currentStep: step,
    };

    saveProgress(progress.value);
  }

  function completeExercise(
    lessonId: number,
    exerciseId: number,
    score: number = 10,
  ) {
    const lesson = progress.value.lessons[lessonId] || {
      isCompleted: false,
      completedExercises: [],
      score: 0,
    };

    const isNewCompletion = !lesson.completedExercises.includes(exerciseId);
    if (isNewCompletion) {
      lesson.completedExercises.push(exerciseId);
    }

    progress.value.lessons[lessonId] = {
      ...lesson,
      score: isNewCompletion ? lesson.score + score : lesson.score,
    };

    // Обновляем статистику только для новых выполненных упражнений
    if (isNewCompletion) {
      progress.value = updateStatistics(progress.value, {
        exercisesCompleted: progress.value.statistics.exercisesCompleted + 1,
        totalPoints: progress.value.statistics.totalPoints + score,
      });
    }

    // Обновляем серию
    progress.value = updateStreak(progress.value);

    saveProgress(progress.value);
  }

  // Методы для работы со словами
  function markWordAsLearned(wordId: number) {
    const word = progress.value.vocabulary[wordId] || {
      isLearned: false,
      timesPracticed: 0,
    };

    if (!word.isLearned) {
      const nextReview = new Date();
      nextReview.setDate(nextReview.getDate() + 1);
      progress.value.vocabulary[wordId] = {
        ...word,
        isLearned: true,
        learnedAt: new Date().toISOString(),
        intervalDays: word.intervalDays || 1,
        ease: word.ease || 2.5,
        nextReviewAt: word.nextReviewAt || nextReview.toISOString(),
      };

      // Обновляем статистику
      progress.value = updateStatistics(progress.value, {
        wordsLearned: Object.values(progress.value.vocabulary).filter(
          (w) => w.isLearned,
        ).length,
      });

      checkAchievements();
      saveProgress(progress.value);
    }
  }

  function toggleWordLearned(wordId: number) {
    const word = progress.value.vocabulary[wordId] || {
      isLearned: false,
      timesPracticed: 0,
    };

    const nextLearned = !word.isLearned;
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + 1);
    progress.value.vocabulary[wordId] = {
      ...word,
      isLearned: nextLearned,
      learnedAt: nextLearned ? new Date().toISOString() : undefined,
      intervalDays: nextLearned ? word.intervalDays || 1 : undefined,
      nextReviewAt: nextLearned ? nextReview.toISOString() : undefined,
    };

    progress.value = updateStatistics(progress.value, {
      wordsLearned: Object.values(progress.value.vocabulary).filter(
        (w) => w.isLearned,
      ).length,
    });

    if (nextLearned) {
      checkAchievements();
    }
    saveProgress(progress.value);
  }

  // SRS: интервальное повторение слова (again / hard / good / easy)
  function reviewWordSRS(
    wordId: number,
    quality: "again" | "hard" | "good" | "easy",
  ): number {
    const prev = progress.value.vocabulary[wordId] || {
      isLearned: false,
      timesPracticed: 0,
    };

    const currentInterval = prev.intervalDays || 0;
    let ease = prev.ease || 2.5;
    let lapses = prev.lapses || 0;
    let nextInterval = 1;

    if (quality === "again") {
      nextInterval = 0;
      ease = Math.max(1.3, ease - 0.2);
      lapses += 1;
    } else if (quality === "hard") {
      nextInterval = currentInterval <= 1 ? 1 : Math.max(2, Math.round(currentInterval * 1.2));
      ease = Math.max(1.3, ease - 0.1);
    } else if (quality === "good") {
      if (currentInterval === 0) nextInterval = 1;
      else if (currentInterval === 1) nextInterval = 3;
      else if (currentInterval <= 3) nextInterval = 7;
      else nextInterval = Math.min(60, Math.round(currentInterval * ease));
    } else {
      // easy
      if (currentInterval === 0) nextInterval = 4;
      else if (currentInterval <= 3) nextInterval = 10;
      else nextInterval = Math.min(90, Math.round(currentInterval * ease * 1.3));
      ease = Math.min(3.0, ease + 0.15);
    }

    const nextDate = new Date();
    if (nextInterval > 0) {
      nextDate.setDate(nextDate.getDate() + nextInterval);
    }

    const nowLearned = quality !== "again" ? true : prev.isLearned;

    progress.value.vocabulary[wordId] = {
      ...prev,
      isLearned: nowLearned,
      learnedAt: prev.learnedAt || (nowLearned ? new Date().toISOString() : undefined),
      timesPracticed: (prev.timesPracticed || 0) + 1,
      lastPracticed: new Date().toISOString(),
      intervalDays: nextInterval,
      ease,
      lapses,
      nextReviewAt: nextDate.toISOString(),
    };

    progress.value = updateStatistics(progress.value, {
      wordsLearned: Object.values(progress.value.vocabulary).filter(
        (w) => w.isLearned,
      ).length,
    });
    progress.value = updateStreak(progress.value);
    checkAchievements();
    saveProgress(progress.value);

    return nextInterval;
  }

  function getNextReviewIntervalPreview(
    wordId: number,
    quality: "hard" | "good" | "easy",
  ): number {
    const prev = progress.value.vocabulary[wordId];
    const currentInterval = prev?.intervalDays || 0;
    const ease = prev?.ease || 2.5;
    if (quality === "hard") {
      return currentInterval <= 1 ? 1 : Math.max(2, Math.round(currentInterval * 1.2));
    }
    if (quality === "good") {
      if (currentInterval === 0) return 1;
      if (currentInterval === 1) return 3;
      if (currentInterval <= 3) return 7;
      return Math.min(60, Math.round(currentInterval * ease));
    }
    if (currentInterval === 0) return 4;
    if (currentInterval <= 3) return 10;
    return Math.min(90, Math.round(currentInterval * ease * 1.3));
  }

  const dueWordIds = computed<number[]>(() => {
    const now = Date.now();
    const oneDayMs = 24 * 60 * 60 * 1000;
    const ids: number[] = [];
    for (const [idStr, entry] of Object.entries(progress.value.vocabulary)) {
      if (!entry) continue;
      if (entry.nextReviewAt) {
        if (new Date(entry.nextReviewAt).getTime() <= now) {
          ids.push(Number(idStr));
        }
      } else if (entry.isLearned) {
        // Legacy learned words without nextReviewAt: due if learned > 1 day ago (or no date)
        const learnedTs = entry.learnedAt ? new Date(entry.learnedAt).getTime() : 0;
        if (!learnedTs || now - learnedTs >= oneDayMs) {
          ids.push(Number(idStr));
        }
      }
    }
    return ids;
  });

  // Журнал ошибок по упражнениям
  function recordExerciseMistake(exerciseId: number) {
    if (!progress.value.exerciseMistakes) {
      progress.value.exerciseMistakes = {};
    }
    const prev = progress.value.exerciseMistakes[exerciseId];
    progress.value.exerciseMistakes[exerciseId] = {
      count: (prev?.count || 0) + 1,
      lastMistakeAt: new Date().toISOString(),
    };
    saveProgress(progress.value);
  }

  function resolveExerciseMistake(exerciseId: number) {
    if (!progress.value.exerciseMistakes || !progress.value.exerciseMistakes[exerciseId]) {
      return;
    }
    const current = progress.value.exerciseMistakes[exerciseId];
    if (current.count <= 1) {
      delete progress.value.exerciseMistakes[exerciseId];
    } else {
      progress.value.exerciseMistakes[exerciseId] = {
        ...current,
        count: current.count - 1,
      };
    }
    saveProgress(progress.value);
  }

  const mistakeExerciseIds = computed<number[]>(() => {
    const map = progress.value.exerciseMistakes || {};
    return Object.entries(map)
      .filter(([, v]) => v && v.count > 0)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([idStr]) => Number(idStr));
  });

  function practiceWord(wordId: number) {
    const word = progress.value.vocabulary[wordId] || {
      isLearned: false,
      timesPracticed: 0,
    };

    progress.value.vocabulary[wordId] = {
      ...word,
      timesPracticed: word.timesPracticed + 1,
      lastPracticed: new Date().toISOString(),
    };

    saveProgress(progress.value);
  }

  // Избранные слова
  function toggleFavoriteWord(wordId: number) {
    const index = progress.value.favoriteWords.indexOf(wordId);

    if (index === -1) {
      progress.value.favoriteWords.push(wordId);
    } else {
      progress.value.favoriteWords.splice(index, 1);
    }

    saveProgress(progress.value);
  }

  function isFavoriteWord(wordId: number): boolean {
    return progress.value.favoriteWords.includes(wordId);
  }

  // Освоение слов для ИИ-чата
  const wordMastery = computed(() => {
    return progress.value.wordMastery || {};
  });

  function getWordMastery(word: string): number {
    const key = word.toLowerCase().trim();
    return wordMastery.value[key] || 0;
  }

  function incrementWordMastery(word: string) {
    if (!progress.value.wordMastery) {
      progress.value.wordMastery = {};
    }
    const key = word.toLowerCase().trim();
    const current = progress.value.wordMastery[key] || 0;
    progress.value.wordMastery[key] = Math.min(5, current + 1);
    saveProgress(progress.value);
  }

  function resetWordMastery(word: string) {
    if (!progress.value.wordMastery) {
      progress.value.wordMastery = {};
    }
    const key = word.toLowerCase().trim();
    progress.value.wordMastery[key] = 0;
    saveProgress(progress.value);
  }

  // Настройки
  function updateSettings(newSettings: Partial<UserProgress["settings"]>) {
    progress.value.settings = {
      ...progress.value.settings,
      ...newSettings,
    };

    saveProgress(progress.value);
  }

  // Достижения
  function unlockAchievement(id: string, name: string, description: string) {
    const exists = progress.value.achievements.find((a) => a.id === id);

    if (!exists) {
      progress.value.achievements.push({
        id,
        name,
        description,
        unlockedAt: new Date().toISOString(),
      });

      saveProgress(progress.value);
    }
  }

  function hasAchievement(id: string): boolean {
    return progress.value.achievements.some((a) => a.id === id);
  }

  // Проверка достижений
  function checkAchievements() {
    // Пример достижений
    if (lessonsCompleted.value >= 1 && !hasAchievement("first_lesson")) {
      unlockAchievement("first_lesson", "Первый урок", "Завершите первый урок");
    }

    if (wordsLearned.value >= 50 && !hasAchievement("vocabulary_50")) {
      unlockAchievement("vocabulary_50", "Любитель слов", "Изучите 50 слов");
    }

    if (wordsLearned.value >= 100 && !hasAchievement("vocabulary_100")) {
      unlockAchievement(
        "vocabulary_100",
        "Словарный запас",
        "Изучите 100 слов",
      );
    }

    if (streakDays.value >= 7 && !hasAchievement("week_streak")) {
      unlockAchievement(
        "week_streak",
        "Недельная серия",
        "Занимайтесь 7 дней подряд",
      );
    }

    if (exercisesCompleted.value >= 50 && !hasAchievement("exercise_50")) {
      unlockAchievement("exercise_50", "Трудяга", "Выполните 50 упражнений");
    }
  }

  // Экспорт/Импорт
  function exportProgressDataInner(): string {
    return exportProgress(progress.value);
  }

  function downloadProgress() {
    downloadProgressFile(progress.value);
  }

  function importProgressData(jsonString: string): boolean {
    const imported = importProgress(jsonString);
    if (imported) {
      progress.value = imported;
      saveProgress(progress.value);
      return true;
    }
    return false;
  }

  function resetProgress() {
    clearProgress();
    progress.value = createDefaultProgress();
  }

  // Обновление времени
  function addTimeSpent(minutes: number) {
    progress.value = updateStatistics(progress.value, {
      timeSpent: progress.value.statistics.timeSpent + minutes,
    });

    saveProgress(progress.value);
  }

  // Массовые операции
  function markMultipleWordsAsLearned(wordIds: number[]) {
    wordIds.forEach((id) => markWordAsLearned(id));
  }

  function getLearningStats() {
    const langStore = useLanguageStore();
    const totalLessons = 16;
    const totalWords = langStore.targetLang === "id" ? 500 : 405;

    return {
      lessonProgress: Math.min(100, (lessonsCompleted.value / totalLessons) * 100),
      wordProgress: Math.min(100, (wordsLearned.value / totalWords) * 100),
      exerciseProgress: exercisesCompleted.value,
      totalPoints: totalPoints.value,
      streakDays: streakDays.value,
      timeSpent: timeSpent.value,
    };
  }

  return {
    // Состояние
    progress,
    isInitialized,

    // Вычисляемые свойства
    totalPoints,
    exercisesCompleted,
    wordsLearned,
    lessonsCompleted,
    timeSpent,
    streakDays,
    favoriteWords,
    achievements,
    settings,
    lessonProgress,
    isLessonCompleted,
    wordProgress,
    isWordLearned,
    wordMastery,
    dueWordIds,
    mistakeExerciseIds,

    // Методы
    init,
    getWordMastery,
    incrementWordMastery,
    resetWordMastery,
    completeLesson,
    uncompleteLesson,
    resetLessonProgress,
    setLessonStep,
    completeExercise,
    markWordAsLearned,
    toggleWordLearned,
    reviewWordSRS,
    getNextReviewIntervalPreview,
    recordExerciseMistake,
    resolveExerciseMistake,
    practiceWord,
    toggleFavoriteWord,
    isFavoriteWord,
    updateSettings,
    unlockAchievement,
    hasAchievement,
    checkAchievements,
    exportProgressDataInner,
    downloadProgress,
    importProgressData,
    resetProgress,
    addTimeSpent,
    markMultipleWordsAsLearned,
    syncLearnedWordsFromLessons,
    getLearningStats,
  };
});
