import { computed } from "vue";
import { useLanguageStore } from "../stores/language";
import { lessons as lessonsId } from "../data/lessons";
import type { Lesson } from "../utils/types";
import type { DifficultyLevel } from "../utils/types";

// Temporary stub for Russian lessons - will be expanded
const lessonsRu: Lesson[] = Array.from({ length: 16 }, (_, i) => {
  const id = i + 1;
  return {
    id,
    title: `Pelajaran ${id}`,
    description: "Kursus bahasa Rusia untuk penutur bahasa Indonesia",
    objectives: [],
    content: {
      theory: "Konten sedang dikembangkan...",
      examples: [
        { indonesian: "Пример", russian: "Contoh" },
      ],
      keyPoints: ["Materi akan segera tersedia"],
    },
    exercises: [],
    vocabulary: [],
    estimatedTime: 30,
  };
});

export function useLessonData() {
  const langStore = useLanguageStore();

  const lessons = computed(() => {
    return langStore.targetLang === "id" ? lessonsId : lessonsRu;
  });

  function getById(id: number) {
    return lessons.value.find((l) => l.id === id) || null;
  }

  return { lessons, getById };
}
