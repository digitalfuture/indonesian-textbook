<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import { useProgressStore } from "../../stores/progress";
import { useLanguageStore } from "../../stores/language";
import { useSound } from "../../composables/useSound";
import type { PropType } from "vue";
import type { Exercise } from "../../utils/types";
import { vocabulary } from "../../data/vocabulary";

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
const { isSoundEnabled, toggleSound } = useSound();

const playerRef = ref<HTMLElement | null>(null);

const currentExerciseIndex = ref(0);
const userAnswer = ref("");
const selectedOption = ref("");
const showFeedback = ref(false);
const isCorrect = ref(false);
const isStage2 = ref(false);
const showHint = ref(false);

const completedExercises = ref<number[]>([]);

function scrollToTop() {
  nextTick(() => {
    if (playerRef.value) {
      const headerOffset = 75;
      const elementPosition = playerRef.value.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  });
}

// Reset hint and scroll to top on exercise change
watch(currentExerciseIndex, () => {
  showHint.value = false;
  scrollToTop();
});

// Extract vocabulary words from dictionary relevant to the current exercise
const exerciseVocabulary = computed(() => {
  if (!currentExercise.value) return [];

  const textToScan = [
    currentExercise.value.question,
    currentExercise.value.correctAnswer,
    currentExercise.value.stage2Answer,
  ]
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const cleanText = textToScan.replace(/[^\p{L}\p{N}\s-]/gu, " ");

  const sortedVocab = [...vocabulary].sort((a, b) => b.word.length - a.word.length);
  const matched: typeof vocabulary = [];
  const foundWords = new Set<string>();

  for (const item of sortedVocab) {
    const word = item.word.toLowerCase();
    if (foundWords.has(word)) continue;

    const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedWord}\\b`, 'i');

    if (regex.test(cleanText)) {
      matched.push(item);
      foundWords.add(word);
    }
  }

  return matched.sort((a, b) => a.id - b.id);
});

// Web Audio sound effects synthesizer
function playSound(type: "success" | "error" | "complete") {
  if (!isSoundEnabled.value) return;
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === "success") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === "error") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
      osc.frequency.exponentialRampToValueAtTime(164.81, ctx.currentTime + 0.18); // E3
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } else if (type === "complete") {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        const startTime = ctx.currentTime + i * 0.09;
        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.3);
      });
    }
  } catch {
    // Ignore audio policy restrictions
  }
}

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
      playSound("complete");
      emit("completed");
    } else if (
      newVal.length === props.exercises.length &&
      props.exercises.length > 0
    ) {
      playSound("complete");
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

  if (correct) {
    playSound("success");
    if (!completedExercises.value.includes(currentExercise.value.id)) {
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
  } else {
    playSound("error");
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
    scrollToTop();
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

// Keyboard shortcuts support
function handleKeydown(e: KeyboardEvent) {
  const isInputFocused = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;

  if (e.key === "Enter") {
    e.preventDefault();
    if (!showFeedback.value) {
      if (
        (currentExercise.value?.type === "multipleChoice" || (currentExercise.value?.type === "twoStage" && !isStage2.value)) &&
        selectedOption.value
      ) {
        checkAnswer();
      } else if (userAnswer.value) {
        checkAnswer();
      }
    } else {
      if (isCorrect.value && currentExercise.value?.type === "twoStage" && !isStage2.value) {
        nextStage();
      } else if (isCorrect.value && currentExerciseIndex.value < props.exercises.length - 1) {
        nextExercise();
      } else if (!isCorrect.value) {
        resetExerciseState();
      }
    }
    return;
  }

  if (isInputFocused) return;

  // Number keys 1-4 for option selection
  if (!showFeedback.value && currentExercise.value?.options) {
    const num = parseInt(e.key);
    if (!isNaN(num) && num >= 1 && num <= currentExercise.value.options.length) {
      e.preventDefault();
      selectedOption.value = currentExercise.value.options[num - 1];
    }
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
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
  <div class="exercise-player" ref="playerRef" v-if="exercises.length > 0">
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
          class="sound-toggle-btn"
          :title="$t(isSoundEnabled ? 'sound.mute' : 'sound.unmute')"
          :aria-label="$t(isSoundEnabled ? 'sound.mute' : 'sound.unmute')"
          @click="toggleSound"
        >
          <i :class="isSoundEnabled ? 'pi pi-volume-up' : 'pi pi-volume-off'"></i>
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

        <!-- Кнопка подсказки из словаря -->
        <div v-if="exerciseVocabulary.length > 0" class="hint-container">
          <button class="btn-hint" @click="showHint = !showHint">
            💡 {{ showHint ? $t('exercise.hint.hide') : $t('exercise.hint.show') }}
          </button>
          
          <div v-if="showHint" class="vocab-hint-card fade-in">
            <ul class="vocab-list">
              <li v-for="word in exerciseVocabulary" :key="word.id" class="vocab-item">
                <span class="vocab-word">{{ word.word }}</span>
                <span class="vocab-pron" v-if="word.pronunciation"> {{ word.pronunciation }}</span>
                <span class="vocab-trans"> — {{ word.translation }}</span>
              </li>
            </ul>
          </div>
        </div>

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
            autofocus
            @keyup.enter="!showFeedback && userAnswer && checkAnswer()"
          />
        </div>

        <div v-else-if="
            currentExercise.type === 'multipleChoice' ||
            (currentExercise.type === 'twoStage' && !isStage2)
          "
          class="options-section"
        >
          <div
            v-for="(option, idx) in currentExercise.options"
            :key="option"
            class="option"
            :class="{
              selected: selectedOption === option,
              correct: showFeedback && option === currentExercise.correctAnswer,
              wrong: showFeedback && selectedOption === option && option !== currentExercise.correctAnswer,
            }"
            @click="!showFeedback && (selectedOption = option)"
          >
            <span class="option-key-badge">{{ idx + 1 }}</span>
            <span class="option-text">{{ option }}</span>
          </div>
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

            <!-- Выписка из словаря в ответах -->
            <div v-if="exerciseVocabulary.length > 0" class="vocab-explanation">
              <div class="vocab-title">{{ $t('exercise.vocab.title') }}</div>
              <ul class="vocab-list">
                <li v-for="word in exerciseVocabulary" :key="word.id" class="vocab-item">
                  <span class="vocab-word">{{ word.word }}</span>
                  <span class="vocab-pron" v-if="word.pronunciation"> {{ word.pronunciation }}</span>
                  <span class="vocab-trans"> — {{ word.translation }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <button
            v-if="!showFeedback"
            class="btn btn-primary btn-lg"
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
            class="btn btn-primary btn-lg"
            @click="nextStage"
          >
            {{ $t('exercise.continue') }}
          </button>
          <button
            v-else-if="showFeedback && isCorrect && currentExerciseIndex < exercises.length - 1"
            class="btn btn-primary btn-lg"
            @click="nextExercise"
          >
            {{ $t('exercise.continue') }}
          </button>
          <button v-else-if="showFeedback && !isCorrect" class="btn btn-outline btn-lg" @click="resetExerciseState">
            {{ $t('exercise.retry') }}
          </button>
        </div>
      </div>
    </div>

    <slot name="completion" v-else></slot>
  </div>
</template>

<style scoped>
.exercise-player {
  width: 100%;
  scroll-margin-top: 80px;
}

.progress-container {
  margin-bottom: 2rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: var(--text);
}

.progress {
  width: 100%;
  height: 8px;
  background: var(--code-bg);
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
  scroll-margin-top: 80px;
}

.exercise-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: var(--code-bg);
  border-bottom: 1px solid var(--border);
}

.exercise-nav-center {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sound-toggle-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0.4rem;
  border-radius: 4px;
  color: var(--muted);
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.sound-toggle-btn:hover {
  color: var(--text-h);
  background: var(--accent-bg);
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
  font-size: 0.95rem;
  font-weight: 500;
}

.question {
  font-size: 1.25rem;
  font-weight: 600;
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
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: var(--code-bg);
  border: 2px solid var(--border);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1.05rem;
  color: var(--text-h);
}

.option-key-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--border);
  color: var(--text);
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
}

.option:hover:not(.selected):not(.correct):not(.wrong) {
  border-color: var(--accent);
  background: var(--accent-bg);
}

.option.selected {
  border-color: var(--primary);
  background: var(--accent-bg);
}

.option.selected .option-key-badge {
  background: var(--primary);
  color: white;
}

.option.correct {
  border-color: #22c55e;
  background: var(--option-correct-bg);
}

.option.wrong {
  border-color: #ef4444;
  background: var(--option-wrong-bg);
}

.action-buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-start;
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
  font-size: 1.05rem;
  color: var(--text);
}

.feedback-text p strong {
  color: var(--translation-color);
}

.explanation {
  font-style: italic;
  margin-top: 0.5rem;
  border-top: 1px solid var(--border);
  padding-top: 0.5rem;
}

.hint-container {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn-hint {
  background: none;
  border: 1px dashed var(--primary);
  color: var(--primary);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: all 0.2s ease;
  font-weight: 500;
}

.btn-hint:hover {
  background: var(--accent-bg);
  border-color: var(--accent);
  color: var(--accent);
}

.vocab-hint-card {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
  width: 100%;
  box-sizing: border-box;
}

.vocab-explanation {
  margin-top: 0.75rem;
  border-top: 1px dashed var(--border);
  padding-top: 0.75rem;
  width: 100%;
}

.vocab-title {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text-h);
  margin-bottom: 0.4rem;
}

.vocab-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.vocab-item {
  font-size: 1.05rem;
  line-height: 1.4;
  color: var(--text);
}

.vocab-word {
  font-weight: 600;
  color: var(--text-h);
}

.vocab-pron {
  color: var(--muted);
  font-style: italic;
  font-size: 0.95rem;
}

.vocab-trans {
  color: var(--translation-color);
  font-weight: 500;
}

@media (max-width: 768px) {
  .exercise-nav {
    flex-direction: column;
    gap: 0.5rem;
  }

  .exercise-body {
    padding: 1.25rem;
  }

  .question {
    font-size: 1.15rem;
  }

  .option-key-badge {
    display: none;
  }
}
</style>
