<script setup lang="ts">
import { computed, ref, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLesson, type LessonStep } from "../composables/useLesson";
import { useLanguageStore } from "../stores/language";
import { useProgressStore } from "../stores/progress";
import { useSpeech } from "../composables/useSpeech";
import { useTranscription } from "../composables/useTranscription";
import { useExerciseData } from "../composables/useExercises";
import { useVocabulary } from "../composables/useVocabulary";
import LessonHeader from "../components/lesson/LessonHeader.vue";
import LessonTabs from "../components/lesson/LessonTabs.vue";
import ExercisePlayer from "../components/exercise/ExercisePlayer.vue";
import AIChatView from "./AIChatView.vue";

const route = useRoute();
const router = useRouter();
const langStore = useLanguageStore();
const progressStore = useProgressStore();
const { speak } = useSpeech();
const { transcribe } = useTranscription();
const { allExercises } = useExerciseData();
const { vocabulary } = useVocabulary();

const lessonId = computed(() => parseInt(route.params.id as string));
const {
  lesson,
  lessonProgress,
  isCompleted,
  hasVocabulary,
  currentStep,
  nextLesson,
  prevLesson,
} = useLesson(lessonId);

const lessonExercises = computed(() => {
  return allExercises.value
    .filter((e) => e.lessonId === lessonId.value)
    .sort((a, b) => a.id - b.id);
});

const lessonWords = computed(() => {
  const ids = lesson.value?.vocabulary || [];
  if (ids.length === 0) return [];
  const byId = new Map(vocabulary.value.map((w) => [w.id, w]));
  return ids.map((id) => byId.get(id)).filter((w): w is NonNullable<typeof w> => Boolean(w));
});

const learnedLessonWordsCount = computed(
  () => lessonWords.value.filter((w) => progressStore.isWordLearned(w.id)).length,
);

// Self-check / active recall mode in Vocabulary & Examples
const hideVocabTranslations = ref(false);
const revealedWordIds = ref<number[]>([]);
const hideExampleTranslations = ref(false);
const revealedExampleIndexes = ref<number[]>([]);

watch(lessonId, () => {
  hideVocabTranslations.value = false;
  revealedWordIds.value = [];
  hideExampleTranslations.value = false;
  revealedExampleIndexes.value = [];
});

function toggleRevealWord(wordId: number) {
  if (!hideVocabTranslations.value) return;
  const idx = revealedWordIds.value.indexOf(wordId);
  if (idx >= 0) revealedWordIds.value.splice(idx, 1);
  else revealedWordIds.value.push(wordId);
}

function toggleRevealExample(index: number) {
  if (!hideExampleTranslations.value) return;
  const idx = revealedExampleIndexes.value.indexOf(index);
  if (idx >= 0) revealedExampleIndexes.value.splice(idx, 1);
  else revealedExampleIndexes.value.push(index);
}

function markAllLessonWordsLearned() {
  progressStore.markMultipleWordsAsLearned(lessonWords.value.map((w) => w.id));
}

function formatPhoneticInline(body: string): string {
  // 1. Replace every `<term> /phon/` or `<term> [phon]` pair strictly in the target language script
  const phonPairRegex =
    langStore.targetLang === "id"
      ? /(^|[,;(:\s])([A-Za-z0-9-]+(?:[A-Za-z0-9\s.'"!?-]*?[A-Za-z0-9.'"!?])?)\s+(\/[^\s/]+(?:\s+[^\s/]+)*\/)/g
      : /(^|[,;(:\s])([А-Яа-яЁё]+(?:[А-Яа-яЁё0-9\s.'"!?-]*?[А-Яа-яЁё0-9.'"!?])?)\s+(\[[^\]]+\])/g;

  let res = body.replace(phonPairRegex, (_m, sep, rawTerm, phon) => {
    const term = rawTerm.trim();
    const safeSpeak = term.replace(/"/g, "&quot;");
    return `${sep}<strong class="theory-term">${term}</strong> <span class="theory-phonetic">${phon}</span> <button class="audio-btn-inline" data-word="${safeSpeak}" title="🔊">🔊</button>`;
  });

  // 2. Wrap parenthetical notes `(...)`
  res = res.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');

  // 3. Wrap translations following `</button>` (optionally after a note) + dash
  res = res.replace(
    /(<\/button>(?:\s*<span class="theory-note">.*?<\/span>)?\s*[-–—]\s*)((?:(?!<strong class="theory-term">).)+)/g,
    (_m, before, trans) => {
      const trimmedTrans = trans.replace(/[,;]\s*$/, "");
      const trailing = trans.slice(trimmedTrans.length);
      return `${before}<span class="theory-translation">${trimmedTrans}</span>${trailing}`;
    },
  );

  return res;
}

function renderTheory(text: string): string {
  const blocks: string[] = [];

  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const isIndented = /^\s{2,}/.test(line);
    const hasPhon = /(\/[^\s/]+(?:\s+[^\s/]+)*\/|\[[^\]]+\])/.test(trimmed);
    const bulletMatch = trimmed.match(/^[-–—•]\s+(.*)$/);
    const numberedRuleMatch = trimmed.match(/^(\d+\.)\s+(.*)$/);

    // Category 1: Section heading (non-bullet, non-indented, ends with ':', not multi-sentence)
    const isHeading =
      !bulletMatch &&
      !isIndented &&
      trimmed.endsWith(":") &&
      !/[А-Яа-яЁёA-Za-z]\.\s+[А-ЯЁA-Z]/.test(trimmed);

    if (isHeading) {
      const content = hasPhon
        ? formatPhoneticInline(trimmed)
        : trimmed.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');
      blocks.push(`<div class="theory-heading">${content}</div>`);
      continue;
    }

    // Category 2: Vocabulary / example bullet with phonetics
    if (bulletMatch && hasPhon) {
      const subClass = isIndented ? " theory-subitem" : "";
      blocks.push(
        `<div class="theory-item${subClass}"><span class="theory-bullet">•</span><span class="theory-item-body">${formatPhoneticInline(bulletMatch[1])}</span></div>`,
      );
      continue;
    }

    // Category 3a: Rule / schema bullet without phonetics
    if (bulletMatch) {
      const subClass = isIndented ? " theory-subitem" : "";
      let body = bulletMatch[1].replace(/\*\*(.*?)\*\*/g, '<strong class="theory-term">$1</strong>');
      body = body.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');
      body = body.replace(
        /^([A-Za-zА-Яа-яЁёÀ-ÿ0-9\s.'"-]+?)(\s*(?::|\s[-–—])\s*)(.+)$/,
        '<strong class="theory-term">$1</strong>$2<span class="theory-translation">$3</span>',
      );
      blocks.push(
        `<div class="theory-item theory-rule-item${subClass}"><span class="theory-bullet">•</span><span class="theory-item-body">${body}</span></div>`,
      );
      continue;
    }

    // Category 3b: Numbered rule / instruction (not ending in ':')
    if (numberedRuleMatch) {
      const num = numberedRuleMatch[1];
      let body = hasPhon
        ? formatPhoneticInline(numberedRuleMatch[2])
        : numberedRuleMatch[2]
            .replace(/\*\*(.*?)\*\*/g, '<strong class="theory-term">$1</strong>')
            .replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');
      blocks.push(
        `<div class="theory-numbered-rule"><span class="theory-num">${num}</span><span class="theory-item-body">${body}</span></div>`,
      );
      continue;
    }

    // Category 4: Prose / explanatory paragraph
    const prose = hasPhon
      ? formatPhoneticInline(trimmed)
      : trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong class="theory-term">$1</strong>')
          .replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');
    blocks.push(`<p class="theory-prose">${prose}</p>`);
  }

  return blocks.join("");
}

function findTopLevelDash(str: string): { index: number; length: number } | null {
  let depth = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === "(") depth++;
    else if (ch === ")" && depth > 0) depth--;
    else if (depth === 0) {
      const rest = str.slice(i);
      const m = rest.match(/^\s+[—–-]\s+/);
      if (m) return { index: i, length: m[0].length };
    }
  }
  return null;
}

function isSpeakableTargetTerm(term: string): boolean {
  const clean = term.replace(/\([^)]*\)/g, "").trim();
  if (!clean || /\bvs\b/i.test(clean)) return false;
  if (langStore.targetLang === "id") {
    return /[A-Za-z]/.test(clean) && !/[А-Яа-яЁё]/.test(clean);
  }
  return /[А-Яа-яЁё]/.test(clean);
}

function renderKeyPoint(point: string): string {
  const dash = findTopLevelDash(point);

  // Category KP-3: Plain statement without top-level dash
  if (!dash) {
    return point.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');
  }

  const term = point.slice(0, dash.index).trim();
  const rest = point.slice(dash.index + dash.length).trim();
  const speakableTerm = isSpeakableTargetTerm(term);
  const speakBtn = speakableTerm
    ? ` <button class="audio-btn-inline" data-word="${term.replace(/\([^)]*\)/g, "").trim().replace(/"/g, "&quot;")}" title="🔊">🔊</button>`
    : "";

  const exampleMatch = rest.match(/\(([^()]+)\)$/);
  if (exampleMatch) {
    const desc = rest.slice(0, exampleMatch.index).trim();
    const rawExamples = exampleMatch[1];

    // Category KP-1: Rule with `Phrase — translation` example chips in parentheses
    if (/\s+[—–-]\s+/.test(rawExamples)) {
      const formattedExamples = rawExamples
        .split(/;\s*|,\s*(?=[A-ZА-Яa-zа-я])/g)
        .map((ex) => {
          const parts = ex.split(/\s+[—–-]\s+/);
          if (parts.length >= 2) {
            const phrase = parts[0].trim();
            const tr = parts.slice(1).join(" — ").trim();
            const safePhrase = phrase.replace(/"/g, "&quot;");
            return `<span class="kp-ex-item"><span class="kp-ex-phrase">${phrase}</span> <button class="audio-btn-inline" data-word="${safePhrase}" title="🔊">🔊</button> <span class="kp-ex-sep">—</span> <span class="kp-ex-tr">${tr}</span></span>`;
          }
          return `<span class="kp-ex-item">${ex}</span>`;
        })
        .join('<span class="kp-ex-delim">; </span>');

      const descHtml = desc
        ? `<span class="kp-desc">${desc.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>')}</span> `
        : "";
      return `<strong class="kp-term">${term}</strong>${speakBtn} <span class="kp-sep">—</span> ${descHtml}<span class="kp-examples">(${formattedExamples})</span>`;
    }

    // Category KP-2a: Phrase/term + translation + parenthetical note
    const restClass = speakableTerm ? "kp-trans" : "kp-desc";
    const descHtml = desc
      ? `<span class="${restClass}">${desc.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>')}</span> `
      : "";
    return `<strong class="kp-term">${term}</strong>${speakBtn} <span class="kp-sep">—</span> ${descHtml}<span class="theory-note">(${rawExamples})</span>`;
  }

  // Category KP-2b: Phrase/term + translation or rule + description
  const restClass = speakableTerm ? "kp-trans" : "kp-desc";
  const formattedRest = rest.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');
  return `<strong class="kp-term">${term}</strong>${speakBtn} <span class="kp-sep">—</span> <span class="${restClass}">${formattedRest}</span>`;
}

function onTheoryClick(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target.classList.contains("audio-btn-inline")) {
    const word = target.getAttribute("data-word");
    if (word) speak(word);
  }
}

function navigateLesson(id: number) {
  router.push(`/${langStore.interfaceLang}/${langStore.targetLang}/lesson/${id}`);
}

function backToCourse() {
  router.push(`/${langStore.interfaceLang}/${langStore.targetLang}`);
}

const exercisePlayerRef = ref<any>(null);

function goToStep(step: LessonStep) {
  currentStep.value = step;
  nextTick(() => {
    const targetElement =
      document.querySelector(".lesson-stepper") || document.querySelector(".lesson-content");
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  });
}

function resetLessonProgress() {
  progressStore.resetLessonProgress(lessonId.value);
  if (exercisePlayerRef.value) {
    exercisePlayerRef.value.resetAll();
  }
}
</script>

<template>
  <div class="lesson-view" v-if="lesson">
    <LessonHeader
      :lesson="lesson"
      :prevLesson="prevLesson"
      :nextLesson="nextLesson"
      :isCompleted="isCompleted"
      :wordCount="lessonWords.length"
      :exerciseCount="lessonExercises.length"
      @navigate="navigateLesson"
      @back-to-course="backToCourse"
    />

    <LessonTabs
      :currentStep="currentStep"
      :hasVocabulary="hasVocabulary"
      :wordCount="lessonWords.length"
      :examplesCount="lesson.content.examples.length"
      :completedExercisesCount="lessonProgress?.completedExercises?.length || 0"
      :totalExercisesCount="lessonExercises.length"
      :isCompleted="isCompleted"
      @update:currentStep="goToStep"
    />

    <main class="lesson-content">
      <!-- STEP 1: THEORY -->
      <section v-if="currentStep === 'theory'" class="theory-section fade-in">
        <div class="content-card">
          <div class="step-card-header">
            <h2>{{ $t('lesson.stepShort.theory') }}</h2>
            <span class="step-hint">{{ $t('lesson.hints.theory') }}</span>
          </div>

          <div
            class="theory-text"
            @click="onTheoryClick"
            v-html="renderTheory(lesson?.content?.theory || '')"
          ></div>

          <div v-if="lesson.content.keyPoints?.length" class="key-points">
            <h3>{{ $t('lesson.keyPoints') }}</h3>
            <ul class="key-points-list" @click="onTheoryClick">
              <li
                v-for="(point, index) in lesson.content.keyPoints"
                :key="index"
                class="key-point-item"
                v-html="renderKeyPoint(point)"
              ></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- STEP 2: VOCABULARY OF THIS LESSON -->
      <section v-if="currentStep === 'vocabulary'" class="vocabulary-section fade-in">
        <div class="content-card">
          <div class="vocab-header-bar">
            <div>
              <h2>{{ $t('lesson.vocab.title') }}</h2>
              <p class="vocab-subtitle">
                {{ $t('lesson.vocab.progress', { learned: learnedLessonWordsCount, total: lessonWords.length }) }}
              </p>
            </div>

            <div class="vocab-toolbar">
              <button
                class="btn btn-sm"
                :class="hideVocabTranslations ? 'btn-primary' : 'btn-outline'"
                @click="hideVocabTranslations = !hideVocabTranslations; revealedWordIds = []"
                type="button"
              >
                <i :class="hideVocabTranslations ? 'pi pi-eye' : 'pi pi-eye-slash'"></i>
                <span>{{ $t(hideVocabTranslations ? 'lesson.vocab.showAll' : 'lesson.vocab.selfCheck') }}</span>
              </button>

              <button
                v-if="learnedLessonWordsCount < lessonWords.length"
                class="btn btn-secondary btn-sm"
                @click="markAllLessonWordsLearned"
                type="button"
              >
                <i class="pi pi-check-square"></i>
                <span>{{ $t('lesson.vocab.markAllLearned') }}</span>
              </button>
            </div>
          </div>

          <div class="lesson-vocab-grid">
            <div
              v-for="word in lessonWords"
              :key="word.id"
              class="lesson-word-card"
              :class="{
                learned: progressStore.isWordLearned(word.id),
                interactive: hideVocabTranslations,
              }"
              @click="toggleRevealWord(word.id)"
            >
              <div class="lw-top">
                <div class="lw-word-group">
                  <span class="lw-word">{{ word.word }}</span>
                  <button
                    class="audio-btn-sm"
                    @click.stop="speak(word.word)"
                    :title="$t('sound.toggle')"
                    type="button"
                  >
                    🔊
                  </button>
                </div>

                <div class="lw-actions" @click.stop>
                  <button
                    class="lw-icon-btn"
                    :class="{ active: progressStore.isFavoriteWord(word.id) }"
                    @click="progressStore.toggleFavoriteWord(word.id)"
                    :title="$t('dictionary.addToFavorites')"
                    type="button"
                  >
                    <i :class="progressStore.isFavoriteWord(word.id) ? 'pi pi-star-fill' : 'pi pi-star'"></i>
                  </button>
                  <button
                    class="lw-icon-btn learned-btn"
                    :class="{ active: progressStore.isWordLearned(word.id) }"
                    @click="progressStore.toggleWordLearned(word.id)"
                    :title="$t('dictionary.markAsLearned')"
                    type="button"
                  >
                    <i :class="progressStore.isWordLearned(word.id) ? 'pi pi-check-circle' : 'pi pi-circle'"></i>
                  </button>
                </div>
              </div>

              <div v-if="word.pronunciation" class="lw-pron">{{ word.pronunciation }}</div>

              <div
                class="lw-translation"
                :class="{ blurred: hideVocabTranslations && !revealedWordIds.includes(word.id) }"
              >
                {{ word.translation }}
              </div>
              <div
                v-if="hideVocabTranslations && !revealedWordIds.includes(word.id)"
                class="reveal-hint"
              >
                {{ $t('lesson.vocab.tapToReveal') }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STEP 3: EXAMPLES -->
      <section v-if="currentStep === 'examples'" class="examples-section fade-in">
        <div class="content-card">
          <div class="vocab-header-bar">
            <div>
              <h2>{{ $t('lesson.stepShort.examples') }}</h2>
              <p class="vocab-subtitle">{{ $t('lesson.hints.examples') }}</p>
            </div>
            <button
              class="btn btn-sm"
              :class="hideExampleTranslations ? 'btn-primary' : 'btn-outline'"
              @click="hideExampleTranslations = !hideExampleTranslations; revealedExampleIndexes = []"
              type="button"
            >
              <i :class="hideExampleTranslations ? 'pi pi-eye' : 'pi pi-eye-slash'"></i>
              <span>{{ $t(hideExampleTranslations ? 'lesson.vocab.showAll' : 'lesson.vocab.selfCheck') }}</span>
            </button>
          </div>

          <div class="examples-grid">
            <div
              v-for="(example, index) in lesson.content.examples"
              :key="index"
              class="example-card"
              :class="{ interactive: hideExampleTranslations }"
              @click="toggleRevealExample(index)"
            >
              <div class="example-indonesian">
                <span class="example-term">{{ example.indonesian }}</span>
                <button
                  class="audio-btn-sm"
                  @click.stop="speak(example.indonesian)"
                  :title="$t('sound.toggle')"
                  type="button"
                >
                  🔊
                </button>
                <span class="example-phonetic" v-if="example.indonesian">
                  {{ transcribe(example.indonesian, langStore.targetLang === 'id' ? 'id' : 'ru') }}
                </span>
              </div>
              <div
                class="example-russian"
                :class="{ blurred: hideExampleTranslations && !revealedExampleIndexes.includes(index) }"
              >
                {{ example.russian }}
              </div>
              <div
                v-if="hideExampleTranslations && !revealedExampleIndexes.includes(index)"
                class="reveal-hint"
              >
                {{ $t('lesson.vocab.tapToReveal') }}
              </div>
              <div v-if="example.notes" class="example-notes">
                {{ example.notes }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STEP 4: EXERCISES -->
      <section v-if="currentStep === 'exercises'" class="exercises-section fade-in">
        <div v-if="lesson.id === 17 && isCompleted" class="completion-card fade-in">
          <div class="completion-badge"><i class="pi pi-trophy"></i></div>
          <h2>{{ $t('exercise.completion.title') }}</h2>
          <p>{{ $t('lesson.successMessage') }}</p>
          <div class="completion-actions">
            <button class="btn btn-primary" @click="backToCourse">
              {{ $t('lesson.backToCourse') }}
            </button>
            <button class="btn btn-outline" @click="resetLessonProgress">
              {{ $t('lesson.resetLessonProgress') }}
            </button>
          </div>
        </div>

        <AIChatView v-else-if="lesson.id === 17" :lessonMode="true" />

        <ExercisePlayer
          v-else
          ref="exercisePlayerRef"
          :exercises="lessonExercises"
          :lessonId="lesson.id"
        >
          <template #completion>
            <div class="completion-card fade-in">
              <div class="completion-badge"><i class="pi pi-check-circle"></i></div>
              <h2>{{ $t('exercise.completion.title') }}</h2>
              <p>{{ $t('lesson.successMessage') }}</p>

              <div v-if="lessonWords.length > 0" class="completion-summary-pill">
                <i class="pi pi-book"></i>
                <span>{{ $t('lesson.completionWordsUnlocked', { count: lessonWords.length }) }}</span>
              </div>

              <div class="completion-actions">
                <button
                  v-if="nextLesson"
                  class="btn btn-primary btn-lg"
                  @click="navigateLesson(nextLesson.id)"
                >
                  <span>{{ $t('exercise.completion.nextLesson') }}</span>
                </button>
                <button
                  v-else
                  class="btn btn-primary btn-lg"
                  @click="router.push(`/${langStore.interfaceLang}/${langStore.targetLang}/progress`)"
                >
                  {{ $t('exercise.completion.viewProgress') }}
                </button>
                <button class="btn btn-outline" @click="resetLessonProgress">
                  {{ $t('lesson.resetLessonProgress') }}
                </button>
              </div>
            </div>
          </template>
        </ExercisePlayer>
      </section>
    </main>

    <!-- STEP NAVIGATION FOOTER -->
    <footer class="lesson-footer">
      <div class="step-navigation-buttons">
        <!-- Under Theory -->
        <div v-if="currentStep === 'theory'" class="single-next">
          <button
            class="btn btn-primary btn-lg"
            @click="goToStep(hasVocabulary ? 'vocabulary' : 'examples')"
          >
            {{ hasVocabulary ? $t('lesson.continueToVocabulary') : $t('lesson.continueToExamples') }}
          </button>
        </div>

        <!-- Under Vocabulary -->
        <div v-else-if="currentStep === 'vocabulary'" class="split-buttons">
          <button class="btn btn-outline" @click="goToStep('theory')">
            {{ $t('lesson.backToTheory') }}
          </button>
          <button class="btn btn-primary btn-lg" @click="goToStep('examples')">
            {{ $t('lesson.continueToExamples') }}
          </button>
        </div>

        <!-- Under Examples -->
        <div v-else-if="currentStep === 'examples'" class="split-buttons">
          <button
            class="btn btn-outline"
            @click="goToStep(hasVocabulary ? 'vocabulary' : 'theory')"
          >
            {{ hasVocabulary ? $t('lesson.backToVocabulary') : $t('lesson.backToTheory') }}
          </button>
          <button class="btn btn-primary btn-lg" @click="goToStep('exercises')">
            {{ $t('lesson.continueToExercises') }}
          </button>
        </div>

        <!-- Under Exercises -->
        <div v-else-if="currentStep === 'exercises' && !isCompleted" class="split-buttons">
          <button class="btn btn-outline" @click="goToStep('examples')">
            {{ $t('lesson.backToExamples') }}
          </button>
        </div>
      </div>
    </footer>
  </div>

  <div v-else class="not-found content-card">
    <h2>{{ $t('lesson.notFound.title') }}</h2>
    <p>{{ $t('lesson.notFound.message', { id: lessonId }) }}</p>
    <button class="btn btn-primary" @click="backToCourse">
      {{ $t('lesson.notFound.goHome') }}
    </button>
  </div>
</template>

<style scoped>
.lesson-view {
  max-width: 920px;
  margin: 0 auto;
}

.step-card-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.step-card-header h2 {
  margin-bottom: 0;
}

.step-hint {
  font-size: 0.85rem;
  color: var(--muted);
}

.theory-text {
  line-height: 1.75;
  color: var(--text);
  margin-bottom: 2rem;
  font-size: 1.03rem;
}

.theory-text :deep(.theory-prose) {
  margin: 0 0 0.85rem 0;
  color: var(--text);
}

.theory-text :deep(.theory-item),
.theory-text :deep(.theory-numbered-rule) {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.32rem;
}

.theory-text :deep(.theory-subitem) {
  padding-left: 1.15rem;
}

.theory-text :deep(.theory-bullet) {
  color: var(--primary);
  font-weight: 700;
  flex-shrink: 0;
}

.theory-text :deep(.theory-num) {
  color: var(--primary);
  font-weight: 700;
  flex-shrink: 0;
  min-width: 1.3rem;
}

.theory-text :deep(.theory-item-body) {
  flex: 1;
}

.theory-text :deep(.theory-term) {
  color: var(--text-h);
  font-weight: 600;
}

.theory-text :deep(.theory-phonetic) {
  color: var(--muted);
  font-style: italic;
  font-size: 0.94em;
}

.theory-text :deep(.theory-translation) {
  color: var(--translation-color);
  font-weight: 500;
}

.theory-text :deep(.theory-note) {
  color: var(--muted);
  font-style: italic;
  font-size: 0.94em;
}

.theory-text :deep(.theory-heading) {
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-h);
  margin-top: 1.35rem;
  margin-bottom: 0.5rem;
  border-left: 3px solid var(--primary);
  padding-left: 0.65rem;
  display: block;
}

.theory-text :deep(.theory-heading:first-child) {
  margin-top: 0;
}

.theory-text :deep(.theory-heading .theory-translation) {
  font-weight: 500;
}

.key-points {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.key-points h3 {
  font-size: 1.18rem;
  margin-bottom: 1rem;
}

.key-points-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.key-point-item {
  font-size: 0.98rem;
  padding: 0.65rem 0.9rem;
  background: var(--bg-subtle);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.key-point-item :deep(.kp-term) { color: var(--text-h); font-weight: 600; }
.key-point-item :deep(.kp-sep) { color: var(--muted); }
.key-point-item :deep(.kp-desc) { color: var(--text); }
.key-point-item :deep(.kp-examples) { color: var(--muted); font-size: 0.95em; }
.key-point-item :deep(.kp-ex-item) {
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  padding: 0.12rem 0.45rem;
  background: var(--bg-card);
  border-radius: 6px;
  border: 1px solid var(--border);
}
.key-point-item :deep(.kp-ex-phrase) { color: var(--text-h); font-weight: 600; font-style: italic; }
.key-point-item :deep(.kp-ex-sep) { color: var(--muted); font-size: 0.85em; }
.key-point-item :deep(.kp-ex-tr),
.key-point-item :deep(.kp-trans) { color: var(--translation-color); font-weight: 500; }
.key-point-item :deep(.kp-ex-delim) { color: var(--muted); margin-right: 0.2rem; }

/* Vocabulary Step */
.vocab-header-bar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.4rem;
}

.vocab-header-bar h2 {
  margin-bottom: 0.2rem;
}

.vocab-subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: var(--muted);
}

.vocab-toolbar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.lesson-vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.85rem;
}

.lesson-word-card {
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1.5px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition: border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
}

.lesson-word-card.interactive {
  cursor: pointer;
}

.lesson-word-card.interactive:hover {
  border-color: var(--primary);
  transform: translateY(-1px);
}

.lesson-word-card.learned {
  border-color: rgba(22, 163, 74, 0.35);
}

.lw-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}

.lw-word-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.lw-word {
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-h);
}

.lw-actions {
  display: flex;
  gap: 0.2rem;
  flex-shrink: 0;
}

.lw-icon-btn {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: none;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.88rem;
  transition: all 0.15s ease;
}

.lw-icon-btn:hover {
  background: var(--bg-card);
  color: var(--text-h);
}

.lw-icon-btn.active {
  color: var(--warning);
}

.lw-icon-btn.learned-btn.active {
  color: var(--success);
}

.lw-pron {
  font-size: 0.84rem;
  color: var(--muted);
  font-style: italic;
}

.lw-translation {
  font-size: 0.96rem;
  color: var(--translation-color);
  font-weight: 500;
  transition: filter 0.2s ease, opacity 0.2s ease;
}

.blurred {
  filter: blur(7px);
  opacity: 0.35;
  user-select: none;
}

.reveal-hint {
  font-size: 0.76rem;
  color: var(--muted);
}

/* Examples Step */
.examples-grid {
  display: grid;
  gap: 0.85rem;
}

.example-card {
  background: var(--bg-subtle);
  border-radius: var(--radius-md);
  padding: 1.15rem 1.35rem;
  border: 1px solid var(--border);
  border-left: 3.5px solid var(--primary);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.example-card.interactive {
  cursor: pointer;
}

.example-card:hover {
  transform: translateX(2px);
  box-shadow: var(--shadow-xs);
}

.example-indonesian {
  font-size: 1.12rem;
  font-weight: 600;
  color: var(--text-h);
  margin-bottom: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.example-term {
  color: var(--text-h);
  font-weight: 600;
}

.example-phonetic {
  font-size: 0.9rem;
  color: var(--muted);
  font-style: italic;
  font-weight: 400;
}

.example-russian {
  font-size: 1.02rem;
  color: var(--translation-color);
  font-weight: 500;
  margin-bottom: 0.25rem;
  transition: filter 0.2s ease, opacity 0.2s ease;
}

.example-notes {
  font-size: 0.9rem;
  color: var(--muted);
  font-style: italic;
}

/* Footer navigation */
.lesson-footer {
  margin-top: 1.75rem;
}

.step-navigation-buttons {
  width: 100%;
}

.single-next {
  display: flex;
  justify-content: flex-end;
}

.split-buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

/* Completion card */
.completion-card {
  text-align: center;
  padding: 2.5rem 2rem;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
}

.completion-badge {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: var(--success-soft);
  color: var(--success);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.completion-card h2 {
  font-size: 1.75rem;
  margin: 0;
}

.completion-card p {
  font-size: 1rem;
  color: var(--text);
  margin: 0;
  max-width: 480px;
}

.completion-summary-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.88rem;
  font-weight: 600;
}

.completion-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.not-found {
  text-align: center;
  padding: 3rem 2rem;
}

@media (max-width: 768px) {
  .single-next .btn,
  .split-buttons .btn {
    width: 100%;
  }

  .split-buttons {
    flex-direction: column-reverse;
  }

  .completion-actions {
    flex-direction: column;
    width: 100%;
  }

  .completion-actions .btn {
    width: 100%;
  }
}
</style>
