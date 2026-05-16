<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "../../utils/types";

const props = defineProps({
  lesson: { type: Object as PropType<Lesson | null>, required: true },
  prevLesson: { type: Object as PropType<Lesson | null>, required: false },
  nextLesson: { type: Object as PropType<Lesson | null>, required: false },
});

const emit = defineEmits<{
  (e: "navigate", id: number): void;
}>();

function goToLesson(id?: number) {
  if (id) emit("navigate", id);
}
</script>

<template>
  <header class="lesson-header">
    <div class="lesson-nav">
      <button
        v-if="prevLesson"
        class="btn btn-outline btn-sm"
        @click="goToLesson(prevLesson!.id)"
      >
        {{ $t('lesson.header.previous', { id: prevLesson!.id }) }}
      </button>
      <span class="lesson-number">{{ $t('lesson.header.number', { id: lesson?.id }) }}</span>
      <button
        v-if="nextLesson"
        class="btn btn-outline btn-sm"
        @click="goToLesson(nextLesson!.id)"
      >
        {{ $t('lesson.header.next', { id: nextLesson!.id }) }}
      </button>
    </div>

    <h1>{{ lesson?.title }}</h1>
    <p class="lesson-description">{{ lesson?.description }}</p>

    <div class="lesson-meta">
      <span class="meta-item">⏱️ {{ lesson?.estimatedTime }} мин</span>
    </div>
  </header>
</template>

<style scoped>
.lesson-header {
  margin-bottom: 2rem;
}
.lesson-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.lesson-number {
  font-weight: 600;
  color: var(--primary);
  font-size: 1.1rem;
}
.lesson-description {
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 1rem;
}
</style>
