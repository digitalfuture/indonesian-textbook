<script setup lang="ts">
import { computed } from "vue";
import type { LessonStep } from "../../composables/useLesson";

const props = defineProps<{
  currentStep: LessonStep;
  hasVocabulary?: boolean;
  wordCount?: number;
  examplesCount?: number;
  completedExercisesCount?: number;
  totalExercisesCount?: number;
  isCompleted?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:currentStep", step: LessonStep): void;
}>();

const steps = computed(() => {
  const list: { id: LessonStep; labelKey: string; badge?: string }[] = [
    { id: "theory", labelKey: "lesson.stepShort.theory" },
  ];

  if (props.hasVocabulary) {
    list.push({
      id: "vocabulary",
      labelKey: "lesson.stepShort.vocabulary",
      badge: props.wordCount ? String(props.wordCount) : undefined,
    });
  }

  list.push({
    id: "examples",
    labelKey: "lesson.stepShort.examples",
    badge: props.examplesCount ? String(props.examplesCount) : undefined,
  });

  list.push({
    id: "exercises",
    labelKey: "lesson.stepShort.exercises",
    badge:
      props.totalExercisesCount && props.totalExercisesCount > 0
        ? `${props.completedExercisesCount || 0}/${props.totalExercisesCount}`
        : undefined,
  });

  return list;
});

const activeIndex = computed(() =>
  steps.value.findIndex((s) => s.id === props.currentStep),
);

function setStep(step: LessonStep) {
  emit("update:currentStep", step);
}
</script>

<template>
  <nav class="lesson-stepper" aria-label="Lesson steps">
    <button
      v-for="(step, idx) in steps"
      :key="step.id"
      class="step-btn"
      :class="{
        active: currentStep === step.id,
        passed: idx < activeIndex || (step.id === 'exercises' && isCompleted),
      }"
      @click="setStep(step.id)"
      type="button"
    >
      <span class="step-index">
        <i v-if="idx < activeIndex || (step.id === 'exercises' && isCompleted)" class="pi pi-check"></i>
        <span v-else>{{ idx + 1 }}</span>
      </span>
      <span class="step-label">{{ $t(step.labelKey) }}</span>
      <span v-if="step.badge" class="step-badge">{{ step.badge }}</span>
    </button>
  </nav>
</template>

<style scoped>
.lesson-stepper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.4rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
}

.step-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 0.85rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.18s ease;
}

.step-btn:hover {
  color: var(--text-h);
  background: var(--bg-subtle);
}

.step-btn.active {
  background: var(--primary-solid);
  color: var(--primary-on-solid);
  box-shadow: 0 3px 10px rgba(79, 70, 229, 0.28);
}

.step-btn.passed:not(.active) {
  color: var(--text-h);
  background: var(--bg-subtle);
}

.step-index {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  background: var(--bg-subtle);
  color: var(--muted);
  flex-shrink: 0;
}

.step-btn.active .step-index {
  background: rgba(255, 255, 255, 0.22);
  color: #ffffff;
}

.step-btn.passed:not(.active) .step-index {
  background: var(--success-soft);
  color: var(--success);
}

.step-badge {
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  background: var(--bg-subtle);
  color: var(--muted);
}

.step-btn.active .step-badge {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

@media (max-width: 640px) {
  .lesson-stepper {
    grid-template-columns: repeat(2, 1fr);
  }

  .step-btn {
    padding: 0.55rem 0.65rem;
    font-size: 0.84rem;
  }
}
</style>
