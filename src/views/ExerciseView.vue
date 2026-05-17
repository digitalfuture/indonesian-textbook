<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";
import { useExerciseData } from "../composables/useExercises";
import type { Exercise } from "../utils/types";

const router = useRouter();
const route = useRoute();
const progressStore = useProgressStore();
const langStore = useLanguageStore();
const { allExercises, getByLesson } = useExerciseData();

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

const currentExerciseIndex = ref(0);
const userAnswer = ref("");
const selectedOption = ref("");
const showFeedback = ref(false);
const isCorrect = ref(false);
const isStage2 = ref(false);
const completedExercises = ref<number[]>(
  (lessonId.value != null
    ? progressStore
        .lessonProgress(lessonId.value)
        ?.completedExercises?.slice?.()
    : []) || [],
);

const currentExercise = computed(
  () => exercises.value[currentExerciseIndex.value],
);

// Auto-complete lesson when all exercises are done
watch(completedExercises, (newVal) => {
  if (
    lessonId.value &&
    newVal.length === exercises.value.length &&
    exercises.value.length > 0
  ) {
    progressStore.completeLesson(lessonId.value, 100);
    progressStore.checkAchievements();
  }
});

function normalizeText(s: string) {
  if (!s) return "";
  const v = s.normalize ? s.normalize("NFKC") : s;
  try {
    // Remove punctuation using Unicode property escapes when available
    return v
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .replace(/\s+/g, " ")
      .trim();
  } catch {
    // Fallback for environments without Unicode property escapes
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
    const answerNormalized =
      typeof answer2 === "string" ? normalizeText(answer2) : "";
    correct = userNormalized === answerNormalized;
  } else {
    const userNormalized = normalizeText(userAnswer.value);
    const answerNormalized =
      typeof answer === "string" ? normalizeText(answer) : "";
    correct = userNormalized === answerNormalized;
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
  if (currentExerciseIndex.value < exercises.value.length - 1) {
    currentExerciseIndex.value++;
    resetExercise();
  }
}

function prevExercise() {
  if (currentExerciseIndex.value > 0) {
    currentExerciseIndex.value--;
    resetExercise();
  }
}

function resetExercise() {
  userAnswer.value = "";
  selectedOption.value = "";
  showFeedback.value = false;
  isCorrect.value = false;
  isStage2.value = false;
}

const progress = computed(() => {
  if (exercises.value.length === 0) return 0;
  return (completedExercises.value.length / exercises.value.length) * 100;
});
</script>

<template>
  <div class="exercise-view">
    <header class="exercise-header">
      <h1>{{ $t('exercise.title') }}</h1>
      <p class="exercise-description" v-if="!lessonId">
        {{ $t('exercise.description.' + langStore.targetLang) }}
      </p>
      <p class="exercise-description" v-else-if="currentExercise">
        {{ $t('exercise.forLesson', { title: $t('lesson.title.' + currentExercise.lessonId) }) }}
      </p>

      <div class="progress-container" v-if="exercises.length > 0">
        <div class="progress-info">
          <span>{{ $t('exercise.progress', { completed: completedExercises.length, total: exercises.length }) }}</span>
          <span>{{ Math.round(progress) }}%</span>
        </div>
        <div class="progress">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </header>

    <main class="exercise-content" v-if="exercises.length > 0">
      <div class="exercise-card">
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
            <span
              v-if="currentExercise.type === 'translation'"
              class="type-badge"
              >{{ $t('exercise.type.translation') }}</span
            >
            <span
              v-else-if="currentExercise.type === 'fillBlank'"
              class="type-badge"
              >{{ $t('exercise.type.fillBlank') }}</span
            >
            <span
              v-else-if="currentExercise.type === 'multipleChoice'"
              class="type-badge"
              >{{ $t('exercise.type.multipleChoice') }}</span
            >
            <span
              v-else-if="currentExercise.type === 'twoStage'"
              class="type-badge"
              >{{ $t('exercise.type.twoStage', { stage: isStage2 ? $t('exercise.twoStage.input') : $t('exercise.twoStage.choice') }) }}</span
            >
          </div>

          <h2 class="question">
            {{
              isStage2 && currentExercise.stage2Question
                ? currentExercise.stage2Question
                : currentExercise.question
            }}
          </h2>

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
                correct:
                  showFeedback && option === currentExercise.correctAnswer,
                wrong:
                  showFeedback &&
                  selectedOption === option &&
                  option !== currentExercise.correctAnswer,
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
              v-else-if="
                showFeedback &&
                isCorrect &&
                currentExercise.type === 'twoStage' &&
                !isStage2
              "
              class="btn btn-primary"
              @click="nextStage"
            >
              {{ $t('exercise.nextStage') }}
            </button>
            <button v-else class="btn btn-outline" @click="resetExercise">
              {{ $t('exercise.retry') }}
            </button>
          </div>

          <div
            v-if="showFeedback"
            class="feedback"
            :class="{ correct: isCorrect, wrong: !isCorrect }"
          >
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

          <div
            class="exercise-nav exercise-nav-bottom"
            v-if="completedExercises.length < exercises.length"
          >
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

      <div
        v-if="completedExercises.length === exercises.length"
        class="completion-card"
      >
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

.progress-container {
  max-width: 400px;
  margin: 0 auto;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.exercise-content {
  margin-bottom: 2rem;
}

.exercise-card {
  background: var(--bg);
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border);
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--text-h);
  background: var(--bg);
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
}

.form-input:disabled {
  opacity: 0.6;
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

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--border);
  color: var(--text);
}

.btn-outline:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
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
  background: var(--bg);
  border-radius: 0.75rem;
  box-shadow: var(--shadow);
  margin-top: 2rem;
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

  .completion-actions {
    flex-direction: column;
  }
}
</style>
