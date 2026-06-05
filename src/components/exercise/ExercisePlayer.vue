<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useProgressStore } from "../../stores/progress";
import { useLanguageStore } from "../../stores/language";
import type { PropType } from "vue";
import type { Exercise } from "../../utils/types";

const props = defineProps({
  exercises: {
    type: Array as PropType<Exercise[]>,
    required: true,
  },
  lessonId: {
    type: Number as PropType<number | null>,
    default: null,
  },
});

const emit = defineEmits<{
  (e: "completed"): void;
}>();

const progressStore = useProgressStore();
const langStore = useLanguageStore();

const currentExerciseIndex = ref(0);
const userAnswer = ref("");
const selectedOption = ref("");
const showFeedback = ref(false);
const isCorrect = ref(false);
const isStage2 = ref(false);

const completedExercises = ref<number[]>([]);

// Initialize completed exercises
watch(
  [() => props.lessonId, () => progressStore.isInitialized],
  ([newLessonId]) => {
    if (newLessonId != null) {
      completedExercises.value =
        progressStore.lessonProgress(newLessonId)?.completedExercises?.slice() || [];
    } else {
      completedExercises.value = [];
    }
  },
  { immediate: true },
);

// Watch for initial load to skip completed exercises
watch(
  [() => props.exercises, completedExercises],
  ([newExercises, newCompleted], [oldExercises, oldCompleted]) => {
    if (newExercises && newExercises.length > 0) {
      const hasCompletedChanged = !oldCompleted || oldCompleted.length === 0;
      const hasExercisesChanged = !oldExercises || oldExercises.length === 0;
      
      if (hasCompletedChanged || hasExercisesChanged) {
        const firstUncompleted = newExercises.findIndex(
          (e) => !newCompleted.includes(e.id)
        );
        if (firstUncompleted !== -1) {
          currentExerciseIndex.value = firstUncompleted;
        }
      }
    }
  },
  { immediate: true }
);

const currentExercise = computed(
  () => props.exercises[currentExerciseIndex.value],
);

// Auto-complete lesson when all exercises are done
watch(
  completedExercises,
  (newVal) => {
    if (
      props.lessonId &&
      newVal.length === props.exercises.length &&
      props.exercises.length > 0
    ) {
      progressStore.completeLesson(props.lessonId, 100);
      progressStore.checkAchievements();
      emit("completed");
    } else if (
      newVal.length === props.exercises.length &&
      props.exercises.length > 0
    ) {
      emit("completed");
    }
  },
  { deep: true },
);

function normalizeText(s: string) {
  if (!s) return "";
  const v = s.normalize ? s.normalize("NFKC") : s;
  try {
    return v
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .replace(/\s+/g, " ")
      .trim();
  } catch {
    return v
      .toLowerCase()
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
}

function checkAnswer() {
  if (!currentExercise.value) return;

  let correct = false;
  const answer = currentExercise.value.correctAnswer;

  if (currentExercise.value.type === "multipleChoice") {
    correct = selectedOption.value === answer;
  } else if (currentExercise.value.type === "twoStage" && !isStage2.value) {
    correct = selectedOption.value === answer;
  } else if (currentExercise.value.type === "twoStage" && isStage2.value) {
    const userNormalized = normalizeText(userAnswer.value);
    const answer2 =
      currentExercise.value.stage2Answer || currentExercise.value.correctAnswer;
    if (typeof answer2 === "string") {
      const acceptableAnswers = answer2.split(/[|/;]/).map(ans => normalizeText(ans));
      correct = acceptableAnswers.some(ans => ans === userNormalized);
    } else {
      correct = false;
    }
  } else {
    const userNormalized = normalizeText(userAnswer.value);
    if (typeof answer === "string") {
      const acceptableAnswers = answer.split(/[|/;]/).map(ans => normalizeText(ans));
      correct = acceptableAnswers.some(ans => ans === userNormalized);
    } else {
      correct = false;
    }
  }

  isCorrect.value = correct;
  showFeedback.value = true;

  if (correct && !completedExercises.value.includes(currentExercise.value.id)) {
    if (currentExercise.value.type === "twoStage" && !isStage2.value) {
      // Just wait for stage 2
    } else {
      completedExercises.value.push(currentExercise.value.id);
      progressStore.completeExercise(
        currentExercise.value.lessonId,
        currentExercise.value.id,
        currentExercise.value.points,
      );
    }
  }
}

function nextStage() {
  if (
    currentExercise.value.type === "twoStage" &&
    !isStage2.value &&
    isCorrect.value
  ) {
    isStage2.value = true;
    showFeedback.value = false;
    isCorrect.value = false;
    selectedOption.value = "";
  }
}

function nextExercise() {
  if (currentExerciseIndex.value < props.exercises.length - 1) {
    currentExerciseIndex.value++;
    resetExerciseState();
  }
}

function prevExercise() {
  if (currentExerciseIndex.value > 0) {
    currentExerciseIndex.value--;
    resetExerciseState();
  }
}

function resetExerciseState() {
  userAnswer.value = "";
  selectedOption.value = "";
  showFeedback.value = false;
  isCorrect.value = false;
  isStage2.value = false;
}

const progress = computed(() => {
  if (props.exercises.length === 0) return 0;
  return (completedExercises.value.length / props.exercises.length) * 100;
});

defineExpose({
  resetAll() {
    completedExercises.value = [];
    currentExerciseIndex.value = 0;
    resetExerciseState();
  }
});
</script>

<template>
  <div class="exercise-player" v-if="exercises.length > 0">
    <div class="progress-container">
      <div class="progress-info">
        <span>{{ $t('exercise.progress', { completed: completedExercises.length, total: exercises.length }) }}</span>
        <span>{{ Math.round(progress) }}%</span>
      </div>
      <div class="progress">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>

    <div v-if="completedExercises.length < exercises.length" class="exercise-card fade-in">
      <div class="exercise-nav">
        <button
          class="btn btn-sm btn-outline"
          @click="prevExercise"
          :disabled="currentExerciseIndex === 0"
        >
          {{ $t('exercise.previous') }}
        </button>
        <span class="exercise-number">
          {{ $t('exercise.number', { current: currentExerciseIndex + 1, total: exercises.length }) }}
        </span>
        <button
          class="btn btn-sm btn-outline"
          @click="nextExercise"
          :disabled="currentExerciseIndex === exercises.length - 1"
        >
          {{ $t('exercise.next') }}
        </button>
      </div>

      <div class="exercise-body">
        <div class="exercise-type">
          <span v-if="currentExercise.type === 'translation'" class="type-badge">
            {{ $t('exercise.type.translation') }}
          </span>
          <span v-else-if="currentExercise.type === 'fillBlank'" class="type-badge">
            {{ $t('exercise.type.fillBlank') }}
          </span>
          <span v-else-if="currentExercise.type === 'multipleChoice'" class="type-badge">
            {{ $t('exercise.type.multipleChoice') }}
          </span>
          <span v-else-if="currentExercise.type === 'twoStage'" class="type-badge">
            {{ $t('exercise.type.twoStage', { stage: isStage2 ? $t('exercise.twoStage.input') : $t('exercise.twoStage.choice') }) }}
          </span>
        </div>

        <h2 class="question">
          {{
            isStage2 && currentExercise.stage2Question
              ? currentExercise.stage2Question
              : currentExercise.question
          }}
        </h2>

        <p v-if="currentExercise.type === 'twoStage' && isStage2" class="exercise-context">
          {{ currentExercise.question }}
        </p>

        <div
          v-if="
            currentExercise.type === 'translation' ||
            currentExercise.type === 'fillBlank' ||
            (currentExercise.type === 'twoStage' && isStage2)
          "
          class="answer-section"
        >
          <input
            v-model="userAnswer"
            type="text"
            :placeholder="$t('exercise.answerPlaceholder')"
            class="form-input"
            :disabled="showFeedback"
            @keyup.enter="!showFeedback && userAnswer && checkAnswer()"
          />
        </div>

        <div
          v-else-if="
            currentExercise.type === 'multipleChoice' ||
            (currentExercise.type === 'twoStage' && !isStage2)
          "
          class="options-section"
        >
          <div
            v-for="option in currentExercise.options"
            :key="option"
            class="option"
            :class="{
              selected: selectedOption === option,
              correct: showFeedback && option === currentExercise.correctAnswer,
              wrong: showFeedback && selectedOption === option && option !== currentExercise.correctAnswer,
            }"
            @click="!showFeedback && (selectedOption = option)"
          >
            {{ option }}
          </div>
        </div>

        <div class="action-buttons">
          <button
            v-if="!showFeedback"
            class="btn btn-primary"
            @click="checkAnswer"
            :disabled="
              currentExercise.type === 'multipleChoice' ||
              (currentExercise.type === 'twoStage' && !isStage2)
                ? !selectedOption
                : !userAnswer
            "
          >
            {{ $t('exercise.check') }}
          </button>
          <button
            v-else-if="showFeedback && isCorrect && currentExercise.type === 'twoStage' && !isStage2"
            class="btn btn-primary"
            @click="nextStage"
          >
            {{ $t('exercise.nextStage') }}
          </button>
          <button
            v-else-if="showFeedback && isCorrect && currentExerciseIndex < exercises.length - 1"
            class="btn btn-primary"
            @click="nextExercise"
          >
            {{ $t('exercise.next') }}
          </button>
          <button v-else-if="showFeedback && !isCorrect" class="btn btn-outline" @click="resetExerciseState">
            {{ $t('exercise.retry') }}
          </button>
        </div>

        <div v-if="showFeedback" class="feedback" :class="{ correct: isCorrect, wrong: !isCorrect }">
          <div class="feedback-icon">{{ isCorrect ? "✅" : "❌" }}</div>
          <div class="feedback-text">
            <strong>{{ isCorrect ? $t('exercise.feedback.correct') : $t('exercise.feedback.wrong') }}</strong>
            <p v-if="!isCorrect">
              {{ $t('exercise.feedback.correctAnswer') }}
              <strong>{{
                isStage2 && currentExercise.stage2Answer
                  ? currentExercise.stage2Answer
                  : currentExercise.correctAnswer
              }}</strong>
            </p>
            <p class="explanation">{{ currentExercise.explanation }}</p>
          </div>
        </div>

        <div class="exercise-nav exercise-nav-bottom">
          <button
            class="btn btn-sm btn-outline"
            @click="prevExercise"
            :disabled="currentExerciseIndex === 0"
          >
            {{ $t('exercise.previous') }}
          </button>
          <span class="exercise-number">
            {{ $t('exercise.number', { current: currentExerciseIndex + 1, total: exercises.length }) }}
          </span>
          <button
            class="btn btn-sm btn-outline"
            @click="nextExercise"
            :disabled="currentExerciseIndex === exercises.length - 1"
          >
            {{ $t('exercise.next') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Slot for completion card to be customized by parents, otherwise default UI -->
    <div v-else class="completion-container fade-in">
      <slot name="completion">
        <div class="completion-card">
          <h2>{{ $t('exercise.completion.title') }}</h2>
          <p>{{ $t('exercise.completion.message') }}</p>
        </div>
      </slot>
    </div>
  </div>
  <div v-else class="empty-state">
    <h2>{{ $t('exercise.empty.title') }}</h2>
    <p v-if="lessonId">{{ $t('exercise.empty.message') }}</p>
  </div>
</template>

<style scoped>
.progress-container {
  max-width: 400px;
  margin: 0 auto 2rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text);
}

.progress {
  width: 100%;
  height: 8px;
  background: var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.exercise-card {
  background: var(--bg-card);
  border-radius: 0.75rem;
  box-shadow: var(--shadow);
  overflow: hidden;
  border: 1px solid var(--border);
}

.exercise-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: var(--code-bg);
  border-bottom: 1px solid var(--border);
}

.exercise-number {
  font-weight: 500;
  color: var(--text);
}

.exercise-body {
  padding: 2rem;
}

.exercise-type {
  margin-bottom: 1rem;
}

.type-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--primary-gradient);
  color: white;
  border-radius: 0.25rem;
  font-size: 0.85rem;
  font-weight: 500;
}

.question {
  font-size: 1.25rem;
  color: var(--text-h);
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.answer-section {
  margin-bottom: 1.5rem;
}

.options-section {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.option {
  padding: 1rem 1.5rem;
  background: var(--code-bg);
  border: 2px solid var(--border);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  color: var(--text-h);
}

.option:hover:not(.selected):not(.correct):not(.wrong) {
  border-color: var(--accent);
  background: var(--accent-bg);
}

.option.selected {
  border-color: var(--accent);
  background: var(--accent-bg);
}

.option.correct {
  border-color: #48bb78;
  background: var(--option-correct-bg);
}

.option.wrong {
  border-color: #f56565;
  background: var(--option-wrong-bg);
}

.action-buttons {
  margin-bottom: 1.5rem;
}

.feedback {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
}

.feedback.correct {
  background: var(--feedback-correct-bg);
  border: 1px solid var(--feedback-correct-border);
}

.feedback.wrong {
  background: var(--feedback-wrong-bg);
  border: 1px solid var(--feedback-wrong-border);
}

.feedback-icon {
  font-size: 1.5rem;
}

.feedback-text {
  flex: 1;
}

.feedback-text strong {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--text-h);
}

.feedback-text p {
  margin: 0.25rem 0;
  font-size: 0.95rem;
  color: var(--text);
}

.explanation {
  font-style: italic;
  margin-top: 0.5rem;
  border-top: 1px solid var(--border);
  padding-top: 0.5rem;
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

.exercise-nav-bottom {
  margin-top: 1.5rem;
  border-top: 1px solid var(--border);
  border-bottom: none;
  padding-bottom: 0;
  background: transparent;
}

@media (max-width: 768px) {
  .exercise-nav {
    flex-direction: column;
    gap: 0.5rem;
  }

  .exercise-body {
    padding: 1.5rem;
  }

  .question {
    font-size: 1.1rem;
  }
}

.exercise-context {
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  font-style: italic;
  color: var(--muted);
  font-size: 1.05rem;
}
</style>
