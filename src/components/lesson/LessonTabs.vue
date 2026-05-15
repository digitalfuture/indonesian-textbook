<script setup lang="ts">
const props = defineProps({
  currentStep: {
    type: String as () => "theory" | "examples" | "exercises",
    required: true,
  },
});

const emit = defineEmits<{
  (e: "update:currentStep", step: "theory" | "examples" | "exercises"): void;
}>();

function setStep(step: "theory" | "examples" | "exercises") {
  emit("update:currentStep", step);
}
</script>

<template>
  <nav class="lesson-tabs">
    <button
      :class="['tab', { active: currentStep === 'theory' }]"
      @click="setStep('theory')"
    >
      📖 Теория
    </button>
    <button
      :class="['tab', { active: currentStep === 'examples' }]"
      @click="setStep('examples')"
    >
      💡 Примеры
    </button>
    <button
      :class="['tab', { active: currentStep === 'exercises' }]"
      @click="setStep('exercises')"
    >
      ✍️ Упражнения
    </button>
  </nav>
</template>

<style scoped>
.lesson-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--border);
}
.tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: var(--muted);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.3s ease;
}
.tab:hover {
  color: var(--primary);
}
.tab.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  font-weight: 500;
}
</style>
