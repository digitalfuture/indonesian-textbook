import { computed } from "vue";
import { useLanguageStore } from "../stores/language";
import { exercises as exercisesId } from "../data/exercises";
import { exercisesRu } from "../data/exercisesRu";
import type { Exercise } from "../utils/types";

export function useExerciseData() {
  const langStore = useLanguageStore();

  const allExercises = computed<Exercise[]>(() => {
    return langStore.targetLang === "id" ? exercisesId : exercisesRu;
  });

  function getByLesson(lessonId: number) {
    return allExercises.value
      .filter((e) => e.lessonId === lessonId)
      .sort((a, b) => a.id - b.id);
  }

  return { allExercises, getByLesson };
}
