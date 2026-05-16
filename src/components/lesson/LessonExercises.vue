<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "../../utils/types";

const props = defineProps({
  lesson: { type: Object as PropType<Lesson | null>, required: true },
  lessonProgress: { type: Object as PropType<any>, required: false },
});

const emit = defineEmits<{
  (e: "start"): void;
}>();

function start() {
  emit("start");
}
</script>

<template>
  <section class="exercises-section fade-in">
    <div class="content-card">
      <h2>{{ $t('lesson.exercises.title') }}</h2>
      <p class="exercises-intro">{{ $t('lesson.exercises.description') }}</p>

      <div class="exercises-list">
        <div
          v-for="exerciseId in lesson?.exercises || []"
          :key="exerciseId"
          class="exercise-item"
        >
          <div class="exercise-info">
            <span class="exercise-number">{{ $t('lesson.exercises.item', { id: exerciseId }) }}</span>
            <span
              v-if="lessonProgress?.completedExercises?.includes(exerciseId)"
              class="exercise-status"
              >✅</span
            >
          </div>
        </div>
      </div>

      <div class="exercises-actions">
        <button class="btn btn-primary btn-lg" @click="start">
          {{ $t('lesson.exercises.startButton') }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exercises-list {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 2rem;
}
.exercise-item {
  background: var(--code-bg);
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--border);
}
.exercise-number {
  font-weight: 500;
  color: var(--text-h);
}
.exercise-status {
  font-size: 1.2rem;
}
.exercises-actions {
  display: flex;
  justify-content: center;
}
</style>
