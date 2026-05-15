import { computed, ref } from "vue";
import { lessons } from "../data/lessons";
import { useProgressStore } from "../stores/progress";

export function useLesson(lessonId: number) {
  const progressStore = useProgressStore();
  const currentStep = ref<"theory" | "examples" | "exercises">("theory");

  const lesson = computed(() => lessons.find((l) => l.id === lessonId) || null);
  const lessonProgress = computed(() => progressStore.lessonProgress(lessonId));
  const isCompleted = computed(() => progressStore.isLessonCompleted(lessonId));

  function completeLesson(score = 100) {
    progressStore.completeLesson(lessonId, score);
  }

  function uncompleteLesson() {
    progressStore.uncompleteLesson(lessonId);
  }

  function goToExercises(router: any) {
    router.push(`/exercises/lesson/${lessonId}`);
  }

  const nextLesson = computed(() => {
    if (!lesson.value) return null;
    if (lesson.value.id < 16)
      return lessons.find((l) => l.id === lesson.value!.id + 1) || null;
    return null;
  });

  const prevLesson = computed(() => {
    if (!lesson.value) return null;
    if (lesson.value.id > 1)
      return lessons.find((l) => l.id === lesson.value!.id - 1) || null;
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
