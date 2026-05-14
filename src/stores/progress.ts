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

export const useProgressStore = defineStore("progress", () => {
  // Состояние
  const progress = ref<UserProgress>(createDefaultProgress());
  const isInitialized = ref(false);

  // Инициализация
  function init() {
    progress.value = getOrCreateProgress();
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

    // Обновляем статистику
    progress.value = updateStatistics(progress.value, {
      lessonsCompleted: Object.values(progress.value.lessons).filter(
        (l) => l.isCompleted,
      ).length,
      totalPoints: progress.value.statistics.totalPoints + score,
    });

    // Обновляем серию
    progress.value = updateStreak(progress.value);

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

    if (!lesson.completedExercises.includes(exerciseId)) {
      lesson.completedExercises.push(exerciseId);
    }

    progress.value.lessons[lessonId] = {
      ...lesson,
      score: lesson.score + score,
    };

    // Обновляем статистику
    progress.value = updateStatistics(progress.value, {
      exercisesCompleted: progress.value.statistics.exercisesCompleted + 1,
      totalPoints: progress.value.statistics.totalPoints + score,
    });

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
      progress.value.vocabulary[wordId] = {
        ...word,
        isLearned: true,
        learnedAt: new Date().toISOString(),
      };

      // Обновляем статистику
      progress.value = updateStatistics(progress.value, {
        wordsLearned: Object.values(progress.value.vocabulary).filter(
          (w) => w.isLearned,
        ).length,
      });

      saveProgress(progress.value);
    }
  }

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
    const totalLessons = 16;
    const totalWords = 500;

    return {
      lessonProgress: (lessonsCompleted.value / totalLessons) * 100,
      wordProgress: (wordsLearned.value / totalWords) * 100,
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

    // Методы
    init,
    completeLesson,
    completeExercise,
    markWordAsLearned,
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
    getLearningStats,
  };
});
