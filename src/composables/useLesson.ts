import { computed, ref, watch, type Ref, type ComputedRef } from "vue";
import { lessons as lessonsId } from "../data/lessons";
import { lessonsRu } from "../data/lessonsRu";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";
import { useAIStore } from "../stores/ai";

export type LessonStep = "theory" | "vocabulary" | "examples" | "exercises";

export function useLesson(lessonId: number | Ref<number> | ComputedRef<number>) {
  const progressStore = useProgressStore();
  const langStore = useLanguageStore();
  const aiStore = useAIStore();

  const id = computed(() => {
    if (typeof lessonId === "number") return lessonId;
    return lessonId.value;
  });

  const lessons = computed(() => {
    const raw = langStore.targetLang === "id" ? lessonsId : lessonsRu;
    return raw.filter((l) => l.id !== 17 || aiStore.isSupported);
  });

  const lesson = computed(
    () =>
      (langStore.targetLang === "id" ? lessonsId : lessonsRu).find(
        (l) => l.id === id.value,
      ) || null,
  );
  const lessonProgress = computed(() => progressStore.lessonProgress(id.value));
  const isCompleted = computed(() => progressStore.isLessonCompleted(id.value));

  const hasVocabulary = computed(() => (lesson.value?.vocabulary?.length || 0) > 0);

  function getResumeStep(): LessonStep {
    const lp = progressStore.lessonProgress(id.value);
    if (!lp) return "theory";
    if (lp.isCompleted) return "theory";
    if (lp.currentStep) {
      if (lp.currentStep === "vocabulary" && !hasVocabulary.value) {
        return "examples";
      }
      return lp.currentStep;
    }
    if (lp.completedExercises && lp.completedExercises.length > 0) return "exercises";
    return "theory";
  }

  const currentStep = ref<LessonStep>(getResumeStep());

  // Watch for lesson change to resume the correct step
  watch(
    () => id.value,
    () => {
      currentStep.value = getResumeStep();
    },
  );

  // Persist current step when user switches tabs
  watch(currentStep, (newStep) => {
    if (id.value) {
      progressStore.setLessonStep(id.value, newStep);
    }
  });

  function completeLesson(score = 100) {
    progressStore.completeLesson(id.value, score);
  }

  function uncompleteLesson() {
    progressStore.uncompleteLesson(id.value);
  }

  function goToExercises(router: any) {
    router.push(
      `/${langStore.interfaceLang}/${langStore.targetLang}/exercises/lesson/${id.value}`,
    );
  }

  const nextLesson = computed(() => {
    if (!lesson.value) return null;
    const idx = lessons.value.findIndex((l) => l.id === lesson.value!.id);
    if (idx >= 0 && idx < lessons.value.length - 1) {
      return lessons.value[idx + 1];
    }
    return null;
  });

  const prevLesson = computed(() => {
    if (!lesson.value) return null;
    const idx = lessons.value.findIndex((l) => l.id === lesson.value!.id);
    if (idx > 0) {
      return lessons.value[idx - 1];
    }
    return null;
  });

  return {
    lesson,
    lessonProgress,
    isCompleted,
    hasVocabulary,
    currentStep,
    completeLesson,
    uncompleteLesson,
    goToExercises,
    nextLesson,
    prevLesson,
  };
}
