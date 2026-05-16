<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isCompleted: { type: Boolean, required: true },
});

const emit = defineEmits<{
  (e: "complete"): void;
  (e: "uncomplete"): void;
}>();

function onComplete() {
  emit("complete");
}
function onUncomplete() {
  emit("uncomplete");
}
</script>

<template>
  <section class="complete-section">
    <div class="content-card complete-card">
      <h2>{{ $t('lesson.completion.title') }}</h2>
      <p class="exercises-intro">{{ $t('lesson.completion.description') }}</p>
      <div class="exercises-actions">
        <button
          v-if="!isCompleted"
          class="btn btn-primary btn-lg"
          @click="onComplete"
        >
          {{ $t('lesson.completion.completeButton') }}
        </button>
        <div v-else class="completed-badge">
          <span style="font-size: 1.2rem; color: #48bb78; font-weight: 500">{{
            $t('lesson.completion.completedLabel')
          }}</span>
          <button class="btn btn-outline btn-sm" @click="onUncomplete">
            {{ $t('lesson.completion.uncompleteButton') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.complete-card {
  text-align: center;
  margin-top: 2rem;
}
.completed-badge {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background: rgba(72, 187, 120, 0.1);
  border: 2px solid #48bb78;
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
</style>
