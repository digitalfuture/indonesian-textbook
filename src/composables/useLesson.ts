import { computed, ref, watch, type Ref, type ComputedRef } from "vue";
import { lessons as lessonsId } from "../data/lessons";
import { lessonsRu } from "../data/lessonsRu";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";

export function useLesson(lessonId: number | Ref<number> | ComputedRef<number>) {
  const progressStore = useProgressStore();
  const langStore = useLanguageStore();

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

  function getResumeStep(): "theory" | "examples" | "exercises" {
    const lp = progressStore.lessonProgress(id.value);
    if (!lp) return "theory";
    if (lp.isCompleted) return "theory";
    if (lp.currentStep) return lp.currentStep;
    if (lp.completedExercises && lp.completedExercises.length > 0) return "exercises";
    return "theory";
  }

  const currentStep = ref<"theory" | "examples" | "exercises">(getResumeStep());

  // Watch for lesson change to resume the correct step
  watch(
    () => id.value,
    () => {
      currentStep.value = getResumeStep();
    }
  );

  // Persist current step when user switches tabs
  watch(
    currentStep,
    (newStep) => {
      if (id.value) {
        progressStore.setLessonStep(id.value, newStep);
      }
    }
  );

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
