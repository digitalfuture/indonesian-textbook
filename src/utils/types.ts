// Основные типы и интерфейсы приложения

export type Category =
  | "pronoun"
  | "verb"
  | "noun"
  | "adjective"
  | "adverb"
  | "preposition"
  | "conjunction"
  | "number"
  | "interjection";

export type ExerciseType =
  | "translation"
  | "fillBlank"
  | "multipleChoice"
  | "matching"
  | "sentenceBuilder";

export type DifficultyLevel = 1 | 2 | 3; // 1-легкий, 2-средний, 3-сложный

export interface Example {
  indonesian: string;
  russian: string;
  notes?: string;
}

export interface WordExample {
  sentence: string;
  translation: string;
}

// Интерфейс слова в словаре
export interface DictionaryWord {
  id: number;
  word: string;
  translation: string;
  category: Category;
  frequency: number; // 1-500, где 1 - самое частое
  examples: WordExample[];
  relatedWords?: number[]; // ID связанных слов
  lessonIds: number[]; // В каких уроках встречается
  isLearned?: boolean;
  isFavorite?: boolean;
}

// Интерфейс упражнения
export interface Exercise {
  id: number;
  type: ExerciseType;
  lessonId: number;
  question: string;
  options?: string[]; // Для multiple choice
  correctAnswer: string | string[];
  explanation: string;
  difficulty: DifficultyLevel;
  points: number;
}

// Интерфейс урока
export interface Lesson {
  id: number;
  title: string;
  description: string;
  objectives: string[];
  content: {
    theory: string;
    examples: Example[];
    keyPoints: string[];
    grammarNotes?: string[];
  };
  exercises: number[]; // IDs упражнений
  vocabulary: number[]; // IDs слов из словаря
  estimatedTime: number; // минут
  isCompleted?: boolean;
  completedExercises?: number[];
}

// Интерфейс грамматической таблицы
export interface GrammarTable {
  id: number;
  title: string;
  description: string;
  category:
    | "tenses"
    | "pronouns"
    | "verbs"
    | "adjectives"
    | "particles"
    | "other";
  headers: string[];
  rows: {
    label: string;
    cells: string[];
    notes?: string;
  }[];
}

// Интерфейс прогресса пользователя
export interface UserProgress {
  // Прогресс по урокам
  lessons: {
    [lessonId: number]: {
      isCompleted: boolean;
      completedAt?: string;
      completedExercises: number[];
      score: number;
    };
  };

  // Прогресс по словам
  vocabulary: {
    [wordId: number]: {
      isLearned: boolean;
      learnedAt?: string;
      timesPracticed: number;
      lastPracticed?: string;
    };
  };

  // Общая статистика
  statistics: {
    totalPoints: number;
    exercisesCompleted: number;
    wordsLearned: number;
    lessonsCompleted: number;
    timeSpent: number; // в минутах
    streakDays: number;
    lastActivity?: string;
  };

  // Избранные слова
  favoriteWords: number[];

  // Настройки
  settings: {
    dailyGoal: number; // слов в день
    remindersEnabled: boolean;
    darkMode: boolean;
  };

  // Достижения
  achievements: {
    id: string;
    name: string;
    description: string;
    unlockedAt?: string;
  }[];
}

// Интерфейс для экспорта/импорта прогресса
export interface ProgressExport {
  version: string;
  exportedAt: string;
  progress: UserProgress;
}

// Интерфейс для состояния приложения
export interface AppState {
  currentLesson: number | null;
  currentView: string;
  isLoading: boolean;
  error: string | null;
}

// Интерфейс для компонента упражнения
export interface ExerciseComponentProps {
  exercise: Exercise;
  onAnswer: (answer: string | string[]) => void;
  showFeedback: boolean;
  isCorrect?: boolean;
}

// Интерфейс для компонента слова
export interface WordCardProps {
  word: DictionaryWord;
  isLearned: boolean;
  isFavorite: boolean;
  onToggleFavorite: (wordId: number) => void;
  onMarkAsLearned: (wordId: number) => void;
}

// Интерфейс для фильтра словаря
export interface DictionaryFilter {
  category?: Category;
  isLearned?: boolean;
  isFavorite?: boolean;
  search?: string;
  sortBy?: "frequency" | "alphabetical" | "learned";
}

// Интерфейс для настроек приложения
export interface AppSettings {
  language: "ru" | "en" | "id";
  theme: "light" | "dark" | "system";
  fontSize: "small" | "medium" | "large";
  showTranslations: boolean;
  autoPlayAudio: boolean;
}
