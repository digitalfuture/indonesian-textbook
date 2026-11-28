<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import { useProgressStore } from "../../stores/progress";
import { useSound } from "../../composables/useSound";
import { useSpeech } from "../../composables/useSpeech";
import { useVocabulary } from "../../composables/useVocabulary";
import { evaluateTextAnswer } from "../../utils/textMatch";
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
const { isSoundEnabled, toggleSound } = useSound();
const { speak } = useSpeech();
const { vocabulary } = useVocabulary();

function getSpokenQuestionText(text: string): string {
  const quoteMatch = text.match(/["«]([^"»]+)["»]/);
  if (quoteMatch) {
    return quoteMatch[1];
  }
  return text;
}

const playerRef = ref<HTMLElement | null>(null);
const feedbackRef = ref<HTMLElement | null>(null);

const currentExerciseIndex = ref(0);
const userAnswer = ref("");
const selectedOption = ref("");
const showFeedback = ref(false);
const isCorrect = ref(false);
const isTypoAccepted = ref(false);
const isStage2 = ref(false);
const showHint = ref(false);

const completedExercises = ref<number[]>([]);
const initialQueueLength = ref(0);

function scrollToTop() {
  nextTick(() => {
    if (playerRef.value) {
      const headerOffset = 80;
      const elementPosition = playerRef.value.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  });
}

function scrollToFeedback() {
  nextTick(() => {
    if (feedbackRef.value) {
      const headerOffset = 80;
      const elementPosition = feedbackRef.value.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  });
}

watch(currentExerciseIndex, () => {
  showHint.value = false;
  scrollToTop();
});

function getIndonesianStemCandidates(token: string): string[] {
  const candidates: string[] = [];
  if (token === "sopir") candidates.push("supir");

  // Reduplication (e.g. apa-apa -> apa)
  const parts = token.split("-");
  if (parts.length === 2 && parts[0] === parts[1]) {
    candidates.push(parts[0]);
  }

  // Possessive / definiteness suffixes (-nya, -ku, -mu)
  const baseForms = [token];
  for (const suf of ["nya", "ku", "mu"]) {
    if (token.length > suf.length + 2 && token.endsWith(suf)) {
      const stripped = token.slice(0, -suf.length);
      candidates.push(stripped);
      baseForms.push(stripped);
    }
  }

  // Common Indonesian verb/noun prefixes (se-, ber-/be-, di-, meN- including K-P-S-T)
  for (const form of baseForms) {
    if (form.startsWith("se") && form.length > 4) candidates.push(form.slice(2));
    if (form.startsWith("ber") && form.length > 5) candidates.push(form.slice(3));
    if (form.startsWith("be") && form.length > 5) candidates.push(form.slice(2));
    if (form.startsWith("di") && form.length > 4) candidates.push(form.slice(2));
    if (form.startsWith("meny") && form.length > 5) candidates.push("s" + form.slice(4));
    if (form.startsWith("meng") && form.length > 5) {
      candidates.push(form.slice(4));
      candidates.push("k" + form.slice(4));
    }
    if (form.startsWith("mem") && form.length > 5) {
      candidates.push(form.slice(3));
      candidates.push("p" + form.slice(3));
    }
    if (form.startsWith("men") && form.length > 5) {
      candidates.push(form.slice(3));
      candidates.push("t" + form.slice(3));
    }
    if (form.startsWith("me") && form.length > 4) candidates.push(form.slice(2));
  }

  return candidates;
}

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
  const sortedVocab = [...vocabulary.value].sort((a, b) => b.word.length - a.word.length);
  const vocabByWord = new Map(vocabulary.value.map((w) => [w.word.toLowerCase(), w]));
  const matched: typeof vocabulary.value = [];
  const matchedIds = new Set<number>();

  const addMatch = (item: (typeof vocabulary.value)[number]) => {
    if (!matchedIds.has(item.id)) {
      matched.push(item);
      matchedIds.add(item.id);
    }
  };

  // 1. Direct exact phrase / word match (longest first)
  for (const item of sortedVocab) {
    const word = item.word.toLowerCase();
    const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`(?:^|\\s)${escapedWord}(?:$|\\s)`, "i");
    if (regex.test(cleanText)) {
      addMatch(item);
    }
  }

  // 2. Match wordFamily forms and Indonesian affixed / reduplicated roots
  const tokens = cleanText.split(/\s+/).filter(Boolean);
  for (const token of tokens) {
    if (vocabByWord.has(token)) continue;

    // Try Indonesian affix / reduplication stem candidates
    let foundRoot = false;
    for (const cand of getIndonesianStemCandidates(token)) {
      const hit = vocabByWord.get(cand);
      if (hit) {
        addMatch(hit);
        foundRoot = true;
        break;
      }
    }
    if (foundRoot) continue;

    // Fallback: check wordFamily entries (e.g. tetapi -> tapi)
    for (const item of vocabulary.value) {
      if (item.wordFamily?.some((f) => f.word.toLowerCase() === token)) {
        addMatch(item);
        break;
      }
    }
  }

  return matched.sort((a, b) => a.id - b.id);
});

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
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
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
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(164.81, ctx.currentTime + 0.18);
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

const activeQueue = ref<Exercise[]>([]);

function syncCompletedFromStore(lessonId: number | null) {
  if (lessonId != null) {
    const validIds = new Set((props.exercises || []).map((e) => e.id));
    const saved = progressStore.lessonProgress(lessonId)?.completedExercises || [];
    completedExercises.value = validIds.size > 0 ? saved.filter((id) => validIds.has(id)) : saved.slice();
  } else {
    completedExercises.value = [];
  }
}

function initQueue() {
  const baseExercises = props.exercises ? [...props.exercises] : [];
  if (baseExercises.length === 0) {
    activeQueue.value = [];
    initialQueueLength.value = 0;
    currentExerciseIndex.value = 0;
    return;
  }
  const uncompleted = baseExercises.filter((e) => !completedExercises.value.includes(e.id));
  activeQueue.value = uncompleted.length > 0 ? uncompleted : [...baseExercises];
  initialQueueLength.value = activeQueue.value.length;
  currentExerciseIndex.value = 0;
  resetExerciseState();
}

watch(
  [() => props.lessonId, () => progressStore.isInitialized],
  ([newLessonId]) => {
    syncCompletedFromStore(newLessonId);
    initQueue();
  },
  { immediate: true },
);

watch(
  () =>
    props.lessonId != null
      ? progressStore.lessonProgress(props.lessonId)?.completedExercises?.length ?? 0
      : -1,
  (storeCount) => {
    if (props.lessonId != null && storeCount === 0 && completedExercises.value.length > 0) {
      completedExercises.value = [];
      initQueue();
    }
  },
);

watch(
  () => props.exercises,
  () => {
    syncCompletedFromStore(props.lessonId);
    initQueue();
  },
  { deep: true },
);

const currentExercise = computed(() => activeQueue.value[currentExerciseIndex.value]);
const isRetryRound = computed(() => currentExerciseIndex.value >= initialQueueLength.value);
const remainingCount = computed(() => Math.max(0, props.exercises.length - completedExercises.value.length));

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
    } else if (newVal.length === props.exercises.length && props.exercises.length > 0) {
      playSound("complete");
      emit("completed");
    }
  },
  { deep: true },
);

function checkAnswer() {
  if (!currentExercise.value) return;

  let correct = false;
  let typoAccepted = false;
  const answer = currentExercise.value.correctAnswer;

  if (currentExercise.value.type === "multipleChoice") {
    correct = selectedOption.value === answer;
  } else if (currentExercise.value.type === "twoStage" && !isStage2.value) {
    correct = selectedOption.value === answer;
  } else if (currentExercise.value.type === "twoStage" && isStage2.value) {
    const answer2 = currentExercise.value.stage2Answer || currentExercise.value.correctAnswer;
    if (typeof answer2 === "string") {
      const res = evaluateTextAnswer(userAnswer.value, answer2);
      correct = res.isCorrect;
      typoAccepted = res.isTypoAccepted;
    }
  } else if (typeof answer === "string") {
    const res = evaluateTextAnswer(userAnswer.value, answer);
    correct = res.isCorrect;
    typoAccepted = res.isTypoAccepted;
  }

  isCorrect.value = correct;
  isTypoAccepted.value = typoAccepted;
  showFeedback.value = true;
  scrollToFeedback();

  if (correct) {
    playSound("success");
    if (currentExercise.value.type === "twoStage" && !isStage2.value) {
      // Wait for stage 2
    } else {
      progressStore.resolveExerciseMistake(currentExercise.value.id);
      if (!completedExercises.value.includes(currentExercise.value.id)) {
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
    progressStore.recordExerciseMistake(currentExercise.value.id);
    if (currentExercise.value) {
      activeQueue.value.push({ ...currentExercise.value });
    }
  }
}

function nextStage() {
  if (
    currentExercise.value?.type === "twoStage" &&
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

function continueAfterWrong() {
  if (currentExerciseIndex.value < activeQueue.value.length - 1) {
    currentExerciseIndex.value++;
  }
  resetExerciseState();
}

function nextExercise() {
  if (currentExerciseIndex.value < activeQueue.value.length - 1) {
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
  isTypoAccepted.value = false;
  isStage2.value = false;
}

const progress = computed(() => {
  if (props.exercises.length === 0) return 0;
  return (completedExercises.value.length / props.exercises.length) * 100;
});

function handleKeydown(e: KeyboardEvent) {
  const isInputFocused =
    e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;

  if (e.key === "Enter") {
    e.preventDefault();
    if (!showFeedback.value) {
      if (
        (currentExercise.value?.type === "multipleChoice" ||
          (currentExercise.value?.type === "twoStage" && !isStage2.value)) &&
        selectedOption.value
      ) {
        checkAnswer();
      } else if (userAnswer.value) {
        checkAnswer();
      }
    } else {
      if (isCorrect.value && currentExercise.value?.type === "twoStage" && !isStage2.value) {
        nextStage();
      } else if (isCorrect.value && currentExerciseIndex.value < activeQueue.value.length - 1) {
        nextExercise();
      } else if (!isCorrect.value) {
        continueAfterWrong();
      }
    }
    return;
  }

  if (isInputFocused) return;

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
    initQueue();
  },
});
</script>

<template>
  <div class="exercise-player" ref="playerRef" v-if="exercises.length > 0">
    <div class="progress-container">
      <div class="progress-info">
        <span>{{ $t('exercise.progress', { completed: completedExercises.length, total: exercises.length }) }}</span>
        <strong>{{ Math.round(progress) }}%</strong>
      </div>
      <div class="progress">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>

    <div
      v-if="completedExercises.length < exercises.length && currentExercise"
      class="exercise-card fade-in"
    >
      <div class="exercise-nav">
        <button
          class="btn btn-sm btn-outline"
          @click="prevExercise"
          :disabled="currentExerciseIndex === 0"
          type="button"
        >
          {{ $t('exercise.previous') }}
        </button>

        <div class="exercise-nav-center">
          <span v-if="isRetryRound" class="retry-pill">
            <i class="pi pi-replay"></i>
            {{ $t('exercise.retryRound') }}
          </span>
          <span v-else class="exercise-number">
            {{ $t('exercise.remaining', { count: remainingCount }) }}
          </span>
        </div>

        <button
          class="sound-toggle-btn"
          :title="$t(isSoundEnabled ? 'sound.mute' : 'sound.unmute')"
          :aria-label="$t(isSoundEnabled ? 'sound.mute' : 'sound.unmute')"
          @click="toggleSound"
          type="button"
        >
          <i :class="isSoundEnabled ? 'pi pi-volume-up' : 'pi pi-volume-off'"></i>
        </button>
      </div>

      <div class="exercise-body">
        <div class="exercise-type-row">
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

          <span v-if="currentExercise.type === 'twoStage'" class="stage-dots">
            <span class="stage-dot active"></span>
            <span class="stage-dot" :class="{ active: isStage2 }"></span>
          </span>
        </div>

        <h2 class="question">
          <span>{{
            isStage2 && currentExercise.stage2Question
              ? currentExercise.stage2Question
              : currentExercise.question
          }}</span>
          <button
            class="audio-btn"
            @click.stop="speak(getSpokenQuestionText(isStage2 && currentExercise.stage2Question ? currentExercise.stage2Question : currentExercise.question))"
            title="🔊"
            type="button"
          >
            🔊
          </button>
        </h2>

        <!-- Vocabulary hint -->
        <div v-if="exerciseVocabulary.length > 0" class="hint-container">
          <button class="btn-hint" @click="showHint = !showHint" type="button">
            <i class="pi pi-lightbulb"></i>
            <span>{{ showHint ? $t('exercise.hint.hide') : $t('exercise.hint.show') }}</span>
          </button>

          <div v-if="showHint" class="vocab-hint-card fade-in">
            <ul class="vocab-list">
              <li v-for="word in exerciseVocabulary" :key="word.id" class="vocab-item">
                <span class="vocab-word">{{ word.word }}</span>
                <button
                  class="audio-btn-inline"
                  @click.stop="speak(word.word)"
                  title="🔊"
                  type="button"
                >
                  🔊
                </button>
                <span class="vocab-pron" v-if="word.pronunciation"> {{ word.pronunciation }}</span>
                <span class="vocab-trans"> — {{ word.translation }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Text input -->
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
            class="form-input answer-input"
            :disabled="showFeedback"
            autofocus
            @keyup.enter="!showFeedback && userAnswer && checkAnswer()"
          />
        </div>

        <!-- Multiple choice options -->
        <div
          v-else-if="
            currentExercise.type === 'multipleChoice' ||
            (currentExercise.type === 'twoStage' && !isStage2)
          "
          class="options-section"
        >
          <button
            v-for="(option, idx) in currentExercise.options"
            :key="option"
            class="option"
            :class="{
              selected: selectedOption === option,
              correct: showFeedback && option === currentExercise.correctAnswer,
              wrong: showFeedback && selectedOption === option && option !== currentExercise.correctAnswer,
            }"
            @click="!showFeedback && (selectedOption = option)"
            type="button"
          >
            <span class="option-key-badge">{{ idx + 1 }}</span>
            <span class="option-text">{{ option }}</span>
            <span
              class="audio-btn option-audio-btn"
              role="button"
              @click.stop="speak(option)"
              title="🔊"
            >
              🔊
            </span>
          </button>
        </div>

        <!-- Feedback box -->
        <div
          v-if="showFeedback"
          ref="feedbackRef"
          class="feedback fade-in"
          :class="{ correct: isCorrect, wrong: !isCorrect }"
        >
          <div class="feedback-icon">
            <i :class="isCorrect ? 'pi pi-check-circle' : 'pi pi-times-circle'"></i>
          </div>
          <div class="feedback-text">
            <strong>{{
              isCorrect
                ? isTypoAccepted
                  ? $t('exercise.feedback.typoAccepted')
                  : $t('exercise.feedback.correct')
                : $t('exercise.feedback.wrong')
            }}</strong>
            <p v-if="!isCorrect || isTypoAccepted" class="correct-answer-line">
              {{ $t('exercise.feedback.correctAnswer') }}
              <strong>{{
                isStage2 && currentExercise.stage2Answer
                  ? currentExercise.stage2Answer
                  : currentExercise.correctAnswer
              }}</strong>
              <button
                class="audio-btn-inline"
                @click.stop="speak(String(isStage2 && currentExercise.stage2Answer ? currentExercise.stage2Answer : currentExercise.correctAnswer).split('|')[0])"
                title="🔊"
                type="button"
              >
                🔊
              </button>
            </p>
            <p class="explanation">{{ currentExercise.explanation }}</p>

            <div v-if="exerciseVocabulary.length > 0" class="vocab-explanation">
              <div class="vocab-title">{{ $t('exercise.vocab.title') }}</div>
              <ul class="vocab-list">
                <li v-for="word in exerciseVocabulary" :key="word.id" class="vocab-item">
                  <span class="vocab-word">{{ word.word }}</span>
                  <button
                    class="audio-btn-inline"
                    @click.stop="speak(word.word)"
                    title="🔊"
                    type="button"
                  >
                    🔊
                  </button>
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
            class="btn btn-primary btn-lg action-cta"
            @click="checkAnswer"
            :disabled="
              currentExercise.type === 'multipleChoice' ||
              (currentExercise.type === 'twoStage' && !isStage2)
                ? !selectedOption
                : !userAnswer
            "
            type="button"
          >
            {{ $t('exercise.check') }}
          </button>
          <button
            v-else-if="showFeedback && isCorrect && currentExercise.type === 'twoStage' && !isStage2"
            class="btn btn-primary btn-lg action-cta"
            @click="nextStage"
            type="button"
          >
            {{ $t('exercise.nextStage') }}
          </button>
          <button
            v-else-if="showFeedback && isCorrect && currentExerciseIndex < activeQueue.length - 1"
            class="btn btn-primary btn-lg action-cta"
            @click="nextExercise"
            type="button"
          >
            {{ $t('exercise.continue') }}
          </button>
          <button
            v-else-if="showFeedback && !isCorrect"
            class="btn btn-primary btn-lg action-cta"
            @click="continueAfterWrong"
            type="button"
          >
            {{ $t('exercise.retryLater') }}
          </button>
        </div>
      </div>
    </div>

    <slot
      name="completion"
      v-else-if="completedExercises.length >= exercises.length && exercises.length > 0"
    ></slot>
  </div>
</template>

<style scoped>
.exercise-player {
  width: 100%;
  scroll-margin-top: 84px;
}

.progress-container {
  margin-bottom: 1.25rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.45rem;
  font-size: 0.9rem;
  color: var(--muted);
}

.progress-info strong {
  color: var(--primary);
}

.exercise-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
  overflow: hidden;
  border: 1px solid var(--border);
}

.exercise-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.35rem;
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border);
  gap: 0.75rem;
}

.exercise-nav-center {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.retry-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  background: var(--warning-soft);
  color: var(--warning);
  font-size: 0.82rem;
  font-weight: 700;
}

.exercise-number {
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--muted);
}

.sound-toggle-btn {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--muted);
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.18s ease;
}

.sound-toggle-btn:hover {
  color: var(--text-h);
  background: var(--bg-card);
  border-color: var(--border);
}

.exercise-body {
  padding: 1.75rem 2rem;
}

.exercise-type-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.type-badge {
  display: inline-block;
  padding: 0.24rem 0.72rem;
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
}

.stage-dots {
  display: inline-flex;
  gap: 0.35rem;
}

.stage-dot {
  width: 24px;
  height: 6px;
  border-radius: 999px;
  background: var(--border);
  transition: background 0.2s ease;
}

.stage-dot.active {
  background: var(--primary);
}

.question {
  font-size: 1.32rem;
  font-weight: 700;
  color: var(--text-h);
  margin-bottom: 1.25rem;
  line-height: 1.4;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.hint-container {
  margin-bottom: 1.25rem;
}

.btn-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--bg-subtle);
  color: var(--text);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.16s ease;
}

.btn-hint:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.vocab-hint-card {
  margin-top: 0.65rem;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
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
  font-size: 0.92rem;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.vocab-word {
  font-weight: 600;
  color: var(--text-h);
}

.answer-section {
  margin-bottom: 1.25rem;
}

.answer-input {
  font-size: 1.08rem;
  padding: 0.85rem 1.1rem;
}

.options-section {
  display: grid;
  gap: 0.65rem;
  margin-bottom: 1.35rem;
}

.option {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.95rem 1.2rem;
  background: var(--bg-subtle);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.16s ease;
  font-size: 1.02rem;
  color: var(--text-h);
  text-align: left;
  width: 100%;
}

.option-key-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  color: var(--muted);
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;
}

.option-text {
  flex: 1;
  font-weight: 500;
}

.option-audio-btn {
  margin-left: auto;
}

.option:hover:not(.selected):not(.correct):not(.wrong) {
  border-color: var(--primary);
  background: var(--primary-soft);
}

.option.selected {
  border-color: var(--primary);
  background: var(--primary-soft);
  box-shadow: 0 0 0 2px var(--primary-soft);
}

.option.selected .option-key-badge {
  background: var(--primary-solid);
  color: var(--primary-on-solid);
  border-color: var(--primary-solid);
}

.option.correct {
  border-color: var(--option-correct-border);
  background: var(--option-correct-bg);
}

.option.wrong {
  border-color: var(--option-wrong-border);
  background: var(--option-wrong-bg);
}

.feedback {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1.15rem 1.25rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.35rem;
  border: 1.5px solid transparent;
}

.feedback.correct {
  background: var(--feedback-correct-bg);
  border-color: var(--feedback-correct-border);
}

.feedback.wrong {
  background: var(--feedback-wrong-bg);
  border-color: var(--feedback-wrong-border);
}

.feedback-icon {
  font-size: 1.45rem;
  line-height: 1;
  padding-top: 0.1rem;
}

.feedback.correct .feedback-icon {
  color: var(--success);
}

.feedback.wrong .feedback-icon {
  color: var(--danger);
}

.feedback-text {
  flex: 1;
}

.feedback-text > strong {
  font-size: 1.05rem;
  display: block;
  margin-bottom: 0.3rem;
}

.correct-answer-line {
  margin-bottom: 0.45rem;
}

.explanation {
  margin-bottom: 0;
  font-size: 0.94rem;
}

.vocab-explanation {
  margin-top: 0.85rem;
  padding-top: 0.75rem;
  border-top: 1px dashed var(--border-strong);
}

.vocab-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.4rem;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
}

.action-cta {
  min-width: 190px;
}

@media (max-width: 640px) {
  .exercise-body {
    padding: 1.25rem;
  }

  .exercise-nav {
    padding: 0.75rem 1rem;
  }

  .question {
    font-size: 1.15rem;
  }

  .action-cta {
    width: 100%;
  }
}
</style>
