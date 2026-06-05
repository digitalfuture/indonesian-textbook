<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useLanguageStore } from "../stores/language";
import { useExerciseData } from "../composables/useExercises";
import ExercisePlayer from "../components/exercise/ExercisePlayer.vue";

const router = useRouter();
const route = useRoute();
const langStore = useLanguageStore();
const { allExercises } = useExerciseData();

// Get lessonId from route params (if navigating from a lesson)
const lessonId = computed(() => {
  const id = route.params.lessonId;
  return id ? parseInt(id as string) : null;
});

// Filter exercises by lesson if lessonId is provided
const exercises = computed(() => {
  const data = allExercises.value;
  if (lessonId.value) {
    return data
      .filter((e) => e.lessonId === lessonId.value)
      .sort((a, b) => a.id - b.id);
  }
  return data;
});
</script>

<template>
  <div class="exercise-view">
    <header class="exercise-header">
      <h1>{{ $t('exercise.title') }}</h1>
      <p class="exercise-description" v-if="!lessonId">
        {{ $t('exercise.description.' + langStore.targetLang) }}
      </p>
      <p class="exercise-description" v-else-if="exercises.length > 0">
        {{ $t('exercise.forLesson', { title: $t('lesson.title.' + lessonId) }) }}
      </p>
    </header>

    <main class="exercise-content" v-if="exercises.length > 0">
      <ExercisePlayer :exercises="exercises" :lessonId="lessonId">
        <template #completion>
          <div class="completion-card">
            <h2>{{ $t('exercise.completion.title') }}</h2>
            <p>{{ $t('exercise.completion.message') }}</p>
            <div class="completion-actions">
              <button class="btn btn-primary" @click="router.push('/' + langStore.interfaceLang + '/' + langStore.targetLang + '/progress')">
                {{ $t('exercise.completion.viewProgress') }}
              </button>
              <button
                v-if="lessonId && lessonId < 16"
                class="btn btn-outline"
                @click="router.push('/' + langStore.interfaceLang + '/' + langStore.targetLang + '/lesson/' + (lessonId! + 1))"
              >
                {{ $t('exercise.completion.nextLesson') }}
              </button>
            </div>
          </div>
        </template>
      </ExercisePlayer>
    </main>

    <div v-else class="empty-state">
      <h2>{{ $t('exercise.empty.title') }}</h2>
      <p v-if="lessonId">{{ $t('exercise.empty.message') }}</p>
      <button class="btn btn-primary" @click="router.push('/' + langStore.interfaceLang + '/' + langStore.targetLang)">
        {{ $t('exercise.empty.goToLessons') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.exercise-view {
  max-width: 800px;
  margin: 0 auto;
}

.exercise-header {
  margin-bottom: 2rem;
  text-align: center;
}

.exercise-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.exercise-description {
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 1.5rem;
}

.exercise-content {
  margin-bottom: 2rem;
}

.completion-card {
  text-align: center;
  padding: 3rem;
  background: var(--bg-card);
  border-radius: 0.75rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

.completion-card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.completion-card p {
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 2rem;
}

.completion-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text);
}

.empty-state h2 {
  margin-bottom: 1rem;
}

.empty-state p {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .completion-actions {
    flex-direction: column;
  }
}
</style>
