<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useLanguageStore } from "../../stores/language";
import { useSpeech } from "../../composables/useSpeech";
import { useProgressStore } from "../../stores/progress";
import { phrasesId, phrasesRu, type PhraseItem } from "../../data/phrases";
import { evaluateTextAnswer } from "../../utils/textMatch";

const langStore = useLanguageStore();
const { speak, speakSlow, stop: stopSpeech } = useSpeech();
const progressStore = useProgressStore();

const mode = ref<"quiz" | "dictation">("quiz");
const pool = computed<PhraseItem[]>(() =>
  langStore.targetLang === "id" ? phrasesId : phrasesRu,
);

const currentItem = ref<PhraseItem | null>(null);
const options = ref<PhraseItem[]>([]);
const selectedOptionId = ref<number | null>(null);
const dictationInput = ref("");
const checked = ref(false);
const isCorrect = ref(false);
const isTypoAccepted = ref(false);
const score = ref(0);
const totalAnswered = ref(0);

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function nextQuestion(autoPlay = true) {
  const all = pool.value;
  if (all.length < 4) return;
  const target = all[Math.floor(Math.random() * all.length)];
  const distractors = shuffle(all.filter((p) => p.id !== target.id)).slice(0, 3);
  currentItem.value = target;
  options.value = shuffle([target, ...distractors]);
  selectedOptionId.value = null;
  dictationInput.value = "";
  checked.value = false;
  isCorrect.value = false;
  isTypoAccepted.value = false;

  if (autoPlay) {
    setTimeout(() => {
      if (currentItem.value?.id === target.id) {
        speak(target.phrase);
      }
    }, 150);
  }
}

function checkQuiz(option: PhraseItem) {
  if (checked.value || !currentItem.value) return;
  selectedOptionId.value = option.id;
  checked.value = true;
  totalAnswered.value++;
  isCorrect.value = option.id === currentItem.value.id;
  isTypoAccepted.value = false;
  if (isCorrect.value) {
    score.value++;
    progressStore.addTimeSpent(0.2);
  }
}

function checkDictation() {
  if (checked.value || !currentItem.value || !dictationInput.value.trim()) return;
  const result = evaluateTextAnswer(dictationInput.value, currentItem.value.phrase);
  checked.value = true;
  totalAnswered.value++;
  isCorrect.value = result.isCorrect;
  isTypoAccepted.value = result.isTypoAccepted;
  if (result.isCorrect) {
    score.value++;
    progressStore.addTimeSpent(0.2);
  }
}

onMounted(() => {
  nextQuestion(false);
});

onBeforeUnmount(() => {
  stopSpeech();
});
</script>

<template>
  <div class="listening-trainer fade-in" v-if="currentItem">
    <div class="listening-toolbar">
      <div class="pill-group">
        <button
          class="pill-btn"
          :class="{ active: mode === 'quiz' }"
          @click="mode = 'quiz'; nextQuestion(false)"
          type="button"
        >
          <i class="pi pi-list-check"></i>
          <span>{{ $t('listening.modeQuiz') }}</span>
        </button>
        <button
          class="pill-btn"
          :class="{ active: mode === 'dictation' }"
          @click="mode = 'dictation'; nextQuestion(false)"
          type="button"
        >
          <i class="pi pi-pencil"></i>
          <span>{{ $t('listening.modeDictation') }}</span>
        </button>
      </div>

      <span class="score-pill">✓ {{ score }} / {{ totalAnswered }}</span>
    </div>

    <div class="listening-card">
      <div class="audio-stage">
        <p class="stage-hint">{{ $t('listening.listenPrompt') }}</p>
        <div class="play-buttons">
          <button
            class="big-play-btn"
            @click="speak(currentItem.phrase)"
            type="button"
          >
            <i class="pi pi-volume-up"></i>
            <span>{{ $t('listening.playNormal') }}</span>
          </button>
          <button
            class="slow-play-btn"
            @click="speakSlow(currentItem.phrase)"
            type="button"
          >
            <span>🐢</span>
            <span>{{ $t('listening.playSlow') }}</span>
          </button>
        </div>
      </div>

      <!-- Quiz Options -->
      <div v-if="mode === 'quiz'" class="quiz-options">
        <button
          v-for="opt in options"
          :key="opt.id"
          class="quiz-opt"
          :class="{
            correct: checked && opt.id === currentItem.id,
            wrong: checked && selectedOptionId === opt.id && opt.id !== currentItem.id,
          }"
          :disabled="checked"
          @click="checkQuiz(opt)"
          type="button"
        >
          {{ opt.translation }}
        </button>
      </div>

      <!-- Dictation Input -->
      <div v-else class="dictation-area">
        <input
          v-model="dictationInput"
          type="text"
          class="form-input dictation-input"
          :placeholder="$t('listening.dictationPlaceholder')"
          :disabled="checked"
          @keyup.enter="!checked ? checkDictation() : nextQuestion(true)"
        />
        <button
          v-if="!checked"
          class="btn btn-primary btn-lg"
          :disabled="!dictationInput.trim()"
          @click="checkDictation"
          type="button"
        >
          {{ $t('exercise.check') }}
        </button>
      </div>

      <!-- Transcript & Feedback -->
      <div
        v-if="checked"
        class="listening-feedback fade-in"
        :class="{ correct: isCorrect, wrong: !isCorrect }"
      >
        <div class="fb-top">
          <strong>
            {{
              isCorrect
                ? isTypoAccepted
                  ? $t('exercise.feedback.typoAccepted')
                  : $t('exercise.feedback.correct')
                : $t('exercise.feedback.wrong')
            }}
          </strong>
          <button class="audio-btn" @click="speak(currentItem.phrase)" type="button">🔊</button>
        </div>
        <div class="reveal-phrase">{{ currentItem.phrase }}</div>
        <div v-if="currentItem.pronunciation" class="reveal-pron">{{ currentItem.pronunciation }}</div>
        <div class="reveal-trans">{{ currentItem.translation }}</div>
        <div v-if="currentItem.context" class="reveal-context">{{ currentItem.context }}</div>

        <div class="next-wrap">
          <button class="btn btn-primary" @click="nextQuestion(true)" type="button">
            {{ $t('listening.nextAudio') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.listening-trainer {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.listening-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.pill-group {
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.24rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
}

.pill-btn.active {
  background: var(--primary-solid);
  color: var(--primary-on-solid);
}

.score-pill {
  font-size: 0.86rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-h);
}

.listening-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 1.75rem 2rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.audio-stage {
  text-align: center;
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
}

.stage-hint {
  margin: 0 0 1rem;
  color: var(--muted);
  font-size: 0.92rem;
}

.play-buttons {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.big-play-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  border: none;
  background: var(--primary-solid);
  color: var(--primary-on-solid);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);
  transition: transform 0.16s ease, background 0.16s ease;
}

.big-play-btn:hover {
  background: var(--primary-solid-hover);
  transform: translateY(-1px);
}

.slow-play-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  border: 1.5px solid var(--border-strong);
  background: var(--bg-card);
  color: var(--text-h);
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.16s ease, color 0.16s ease;
}

.slow-play-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.quiz-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.quiz-opt {
  padding: 1rem 1.15rem;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--border);
  background: var(--bg-subtle);
  color: var(--text-h);
  font-size: 0.98rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: all 0.16s ease;
}

.quiz-opt:hover:not(:disabled) {
  border-color: var(--primary);
  background: var(--primary-soft);
}

.quiz-opt.correct {
  border-color: var(--option-correct-border);
  background: var(--option-correct-bg);
}

.quiz-opt.wrong {
  border-color: var(--option-wrong-border);
  background: var(--option-wrong-bg);
}

.dictation-area {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.dictation-input {
  font-size: 1.08rem;
  padding: 0.85rem 1.1rem;
}

.listening-feedback {
  padding: 1.2rem 1.35rem;
  border-radius: var(--radius-md);
  border: 1.5px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.listening-feedback.correct {
  background: var(--feedback-correct-bg);
  border-color: var(--feedback-correct-border);
}

.listening-feedback.wrong {
  background: var(--feedback-wrong-bg);
  border-color: var(--feedback-wrong-border);
}

.fb-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reveal-phrase {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-h);
}

.reveal-pron {
  font-size: 0.88rem;
  font-style: italic;
  color: var(--muted);
}

.reveal-trans {
  font-size: 1rem;
  font-weight: 600;
  color: var(--translation-color);
}

.reveal-context {
  font-size: 0.86rem;
  color: var(--muted);
}

.next-wrap {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

@media (max-width: 640px) {
  .listening-card {
    padding: 1.25rem;
  }

  .quiz-options {
    grid-template-columns: 1fr;
  }

  .next-wrap .btn {
    width: 100%;
  }
}
</style>
