import { computed, ref, type Ref, type ComputedRef } from "vue";
import { lessons as lessonsId } from "../data/lessons";
import { lessonsRu } from "../data/lessonsRu";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";

export function useLesson(lessonId: number | Ref<number> | ComputedRef<number>) {
  const progressStore = useProgressStore();
  const langStore = useLanguageStore();
  const currentStep = ref<"theory" | "examples" | "exercises">("theory");

  const id = computed(() => {
    if (typeof lessonId === "number") return lessonId;
    return lessonId.value;
  });

  const lessons = computed(() =>
    langStore.targetLang === "id" ? lessonsId : lessonsRu,
  );

  const lesson = computed(() => lessons.value.find((l) => l.id === id.value) || null);
  const lessonProgress = computed(() => progressStore.lessonProgress(id.value));
  const isCompleted = computed(() => progressStore.isLessonCompleted(id.value));

  function completeLesson(score = 100) {
    progressStore.completeLesson(id.value, score);
  }

  function uncompleteLesson() {
    progressStore.uncompleteLesson(id.value);
  }

  function goToExercises(router: any) {
    router.push(`/${langStore.interfaceLang}/${langStore.targetLang}/exercises/lesson/${id.value}`);
  }

  const nextLesson = computed(() => {
    if (!lesson.value) return null;
    if (lesson.value.id < 16)
      return lessons.value.find((l) => l.id === lesson.value!.id + 1) || null;
    return null;
  });

  const prevLesson = computed(() => {
    if (!lesson.value) return null;
    if (lesson.value.id > 1)
      return lessons.value.find((l) => l.id === lesson.value!.id - 1) || null;
    return null;
  });

  return {
    lesson,
    lessonProgress,
    isCompleted,
    currentStep,
    completeLesson,
    uncompleteLesson,
    goToExercises,
    nextLesson,
    prevLesson,
  };
}
