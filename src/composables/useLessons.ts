import { computed } from "vue";
import { useLanguageStore } from "../stores/language";
import { lessons as lessonsId } from "../data/lessons";
import { lessonsRu } from "../data/lessonsRu";

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
