<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "../../utils/types";

defineProps({
  lesson: { type: Object as PropType<Lesson | null>, required: true },
  prevLesson: { type: Object as PropType<Lesson | null>, required: false },
  nextLesson: { type: Object as PropType<Lesson | null>, required: false },
  isCompleted: { type: Boolean, default: false },
  wordCount: { type: Number, default: 0 },
  exerciseCount: { type: Number, default: 0 },
});

const emit = defineEmits<{
  (e: "navigate", id: number): void;
  (e: "back-to-course"): void;
}>();

function goToLesson(id?: number) {
  if (id) emit("navigate", id);
}
</script>

<template>
  <header class="lesson-header" v-if="lesson">
    <div class="lesson-topbar">
      <button class="back-link" @click="emit('back-to-course')" type="button">
        <i class="pi pi-arrow-left"></i>
        <span>{{ $t('lesson.backToCourse') }}</span>
      </button>

      <div class="lesson-nav-arrows">
        <button
          v-if="prevLesson"
          class="btn btn-outline btn-sm"
          @click="goToLesson(prevLesson.id)"
          type="button"
        >
          {{ $t('lesson.header.previous', { id: prevLesson.id }) }}
        </button>
        <button
          v-if="nextLesson"
          class="btn btn-outline btn-sm"
          @click="goToLesson(nextLesson.id)"
          type="button"
        >
          {{ $t('lesson.header.next', { id: nextLesson.id }) }}
        </button>
      </div>
    </div>

    <div class="lesson-hero-card">
      <div class="lesson-badges">
        <span class="lesson-pill">
          {{ $t('lesson.header.number', { id: lesson.id }) }}
        </span>
        <span v-if="isCompleted" class="completed-pill">
          <i class="pi pi-check-circle"></i>
          {{ $t('common.completed') }}
        </span>
      </div>

      <h1>{{ lesson.title }}</h1>
      <p class="lesson-description">{{ lesson.description }}</p>

      <div class="lesson-meta-row">
        <span class="meta-chip">
          <i class="pi pi-clock"></i>
          {{ $t('home.lessonMeta.minutes', { count: lesson.estimatedTime }) }}
        </span>
        <span v-if="wordCount > 0" class="meta-chip">
          <i class="pi pi-book"></i>
          {{ $t('home.lessonMeta.words', { count: wordCount }) }}
        </span>
        <span v-if="exerciseCount > 0" class="meta-chip">
          <i class="pi pi-check-square"></i>
          {{ $t('home.lessonMeta.exercises', { count: exerciseCount }) }}
        </span>
      </div>

      <div v-if="lesson.objectives && lesson.objectives.length > 0" class="objectives-box">
        <span class="objectives-label">{{ $t('lesson.objectivesTitle') }}</span>
        <div class="objectives-list">
          <span v-for="(obj, i) in lesson.objectives" :key="i" class="objective-chip">
            <i class="pi pi-check"></i>
            {{ obj }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.lesson-header {
  margin-bottom: 1.5rem;
}

.lesson-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: none;
  border: none;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.35rem 0.5rem;
  border-radius: var(--radius-sm);
  transition: color 0.16s ease, background 0.16s ease;
}

.back-link:hover {
  color: var(--primary);
  background: var(--primary-soft);
}

.lesson-nav-arrows {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lesson-hero-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 1.6rem 1.75rem;
  box-shadow: var(--shadow-sm);
}

.lesson-badges {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.lesson-pill {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
}

.completed-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: var(--success-soft);
  color: var(--success);
  font-size: 0.8rem;
  font-weight: 600;
}

.lesson-hero-card h1 {
  font-size: 1.85rem;
  margin-bottom: 0.45rem;
}

.lesson-description {
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 1rem;
}

.lesson-meta-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  font-size: 0.85rem;
  color: var(--muted);
  font-weight: 500;
}

.meta-chip i {
  font-size: 0.84rem;
  color: var(--primary);
}

.objectives-box {
  margin-top: 1.15rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.objectives-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
}

.objectives-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.objective-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.28rem 0.7rem;
  border-radius: 999px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-h);
}

.objective-chip i {
  font-size: 0.72rem;
  color: var(--translation-color);
}

@media (max-width: 768px) {
  .lesson-hero-card {
    padding: 1.25rem;
  }

  .lesson-hero-card h1 {
    font-size: 1.45rem;
  }
}
</style>
