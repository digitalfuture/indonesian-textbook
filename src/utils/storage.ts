import type { UserProgress, ProgressExport } from "./types";

const STORAGE_KEY = "indonesian_textbook_progress";
const EXPORT_VERSION = "1.0.0";

// Получить прогресс из localStorage
export function loadProgress(): UserProgress | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as UserProgress;
    return validateProgress(parsed) ? parsed : null;
  } catch (error) {
    console.error("Error loading progress from localStorage:", error);
    return null;
  }
}

// Сохранить прогресс в localStorage
export function saveProgress(progress: UserProgress): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (error) {
    console.error("Error saving progress to localStorage:", error);
    return false;
  }
}

// Экспорт прогресса в JSON файл
export function exportProgress(progress: UserProgress): string {
  const exportData: ProgressExport = {
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    progress: progress,
  };

  return JSON.stringify(exportData, null, 2);
}

// Импорт прогресса из JSON строки
export function importProgress(jsonString: string): UserProgress | null {
  try {
    const parsed = JSON.parse(jsonString) as ProgressExport;

    // Проверка версии
    if (parsed.version !== EXPORT_VERSION) {
      console.warn(
        `Incompatible version: expected ${EXPORT_VERSION}, got ${parsed.version}`,
      );
      return null;
    }

    // Проверка структуры
    if (!validateProgress(parsed.progress)) {
      console.error("Invalid progress structure in imported data");
      return null;
    }

    return parsed.progress;
  } catch (error) {
    console.error("Error importing progress:", error);
    return null;
  }
}

// Скачать прогресс как файл
export function downloadProgressFile(progress: UserProgress): void {
  const jsonData = exportProgress(progress);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `indonesian-progress-${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Очистить весь прогресс
export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing progress:", error);
  }
}

// Валидация структуры прогресса
function validateProgress(progress: any): boolean {
  if (!progress || typeof progress !== "object") return false;

  // Проверка обязательных полей
  const requiredFields = [
    "lessons",
    "vocabulary",
    "statistics",
    "favoriteWords",
    "settings",
    "achievements",
  ];
  for (const field of requiredFields) {
    if (!(field in progress)) return false;
  }

  // Проверка типов
  if (typeof progress.lessons !== "object") return false;
  if (typeof progress.vocabulary !== "object") return false;
  if (typeof progress.statistics !== "object") return false;
  if (!Array.isArray(progress.favoriteWords)) return false;
  if (typeof progress.settings !== "object") return false;
  if (!Array.isArray(progress.achievements)) return false;

  // Проверка статистики
  const requiredStats = [
    "totalPoints",
    "exercisesCompleted",
    "wordsLearned",
    "lessonsCompleted",
    "timeSpent",
    "streakDays",
  ];
  for (const stat of requiredStats) {
    if (
      !(stat in progress.statistics) ||
      typeof progress.statistics[stat] !== "number"
    )
      return false;
  }

  // Проверка настроек
  const requiredSettings = ["dailyGoal", "remindersEnabled", "darkMode"];
  for (const setting of requiredSettings) {
    if (!(setting in progress.settings)) return false;
  }

  return true;
}

// Создать прогресс по умолчанию
export function createDefaultProgress(): UserProgress {
  return {
    lessons: {},
    vocabulary: {},
    statistics: {
      totalPoints: 0,
      exercisesCompleted: 0,
      wordsLearned: 0,
      lessonsCompleted: 0,
      timeSpent: 0,
      streakDays: 0,
      lastActivity: undefined,
    },
    favoriteWords: [],
    settings: {
      dailyGoal: 10,
      remindersEnabled: false,
      darkMode: false,
    },
    achievements: [],
    wordMastery: {},
  };
}

// Получить или создать прогресс
export function getOrCreateProgress(): UserProgress {
  const existing = loadProgress();
  if (existing) return existing;

  const defaultProgress = createDefaultProgress();
  saveProgress(defaultProgress);
  return defaultProgress;
}

// Обновить статистику
export function updateStatistics(
  progress: UserProgress,
  updates: Partial<UserProgress["statistics"]>,
): UserProgress {
  return {
    ...progress,
    statistics: {
      ...progress.statistics,
      ...updates,
    },
  };
}

// Проверить и обновить серию (streak)
export function updateStreak(progress: UserProgress): UserProgress {
  const today = new Date().toDateString();
  const lastActivity = progress.statistics.lastActivity
    ? new Date(progress.statistics.lastActivity).toDateString()
    : null;

  let streakDays = progress.statistics.streakDays;

  if (lastActivity) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastActivity === yesterday.toDateString()) {
      // Продолжаем серию
      streakDays++;
    } else if (lastActivity !== today) {
      // Серия прервана
      streakDays = 1;
    }
    // Если lastActivity === today, ничего не меняем
  } else {
    // Первая активность
    streakDays = 1;
  }

  return updateStatistics(progress, {
    streakDays,
    lastActivity: new Date().toISOString(),
  });
}
