<script setup lang="ts">
import { computed, ref, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLesson } from "../composables/useLesson";
import { useLanguageStore } from "../stores/language";
import { useProgressStore } from "../stores/progress";
import { useSpeech } from "../composables/useSpeech";
import { useTranscription } from "../composables/useTranscription";
import { useExerciseData } from "../composables/useExercises";
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

const lessonId = computed(() => parseInt(route.params.id as string));
const {
  lesson,
  lessonProgress,
  isCompleted,
  currentStep,
  nextLesson,
  prevLesson,
} = useLesson(lessonId);

const lessonExercises = computed(() => {
  return allExercises.value
    .filter((e) => e.lessonId === lessonId.value)
    .sort((a, b) => a.id - b.id);
});

function renderTheory(text: string): string {
  return text
    .split("\n")
    .map((line) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return "<br>";

      // 1. If line is a section heading (ends with : or starts with digits.)
      if (/^([А-ЯЁA-Z\d][^:\n\r]*:)$/.test(trimmedLine) && !trimmedLine.includes("/") && !trimmedLine.includes("[")) {
        return `<div class="theory-heading">${trimmedLine}</div>`;
      }

      let processed = line;

      // 2. Find phonetic notation: /.../ or [...]
      const phonRegex = /^(.*?)(\/[^\s/]+(?:\s+[^\s/]+)*\/|\[[^\]]+\])(.*)$/;
      const match = processed.match(phonRegex);

      if (match) {
        let beforePhon = match[1];
        const phon = match[2];
        let afterPhon = match[3];

        const prefixMatch = beforePhon.match(/^(\s*(?:\d+[\.)]\s*|[-–—•]\s*))(.+)$/);
        let prefix = "";
        let term = beforePhon.trim();

        if (prefixMatch) {
          prefix = prefixMatch[1];
          term = prefixMatch[2].trim();
        }

        const safeSpeak = term.replace(/'/g, "\\'");
        let termHtml = `<strong class="theory-term">${term}</strong>`;
        let phonHtml = `<span class="theory-phonetic">${phon}</span> <button class="audio-btn-inline" data-word="${safeSpeak}" title="Прослушать">🔊</button>`;

        let afterHtml = afterPhon;
        // Wrap notes in parentheses
        afterHtml = afterHtml.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');

        // Wrap translation after dash
        afterHtml = afterHtml.replace(
          /^(\s*[-–—:]\s*)([^(<]+)/,
          '$1<span class="theory-translation">$2</span>'
        );

        processed = `${prefix}${termHtml} ${phonHtml}${afterHtml}`;
      } else {
        // Markdown bold
        processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="theory-term">$1</strong>');

        // Match list items: "- term - translation"
        if (/^\s*[-–—•]\s*[A-Za-zА-Яа-яЁё]/.test(processed)) {
          processed = processed.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');
          processed = processed.replace(
            /^(\s*[-–—•]\s*)([A-Za-zА-Яа-яЁёÀ-ÿ0-9\s.'"-]+?)(\s*[-–—:]\s*)(.+)$/,
            '$1<strong class="theory-term">$2</strong>$3<span class="theory-translation">$4</span>'
          );
        } else {
          processed = processed.replace(/(\([^)]+\))/g, '<span class="theory-note">$1</span>');
        }
      }

      return processed;
    })
    .join("<br>");
}

function renderKeyPoint(point: string): string {
  const parts = point.split(/\s*[-–—]\s*/);
  if (parts.length >= 2) {
    const term = parts[0];
    const trans = parts.slice(1).join(" — ");
    return `<strong class="kp-term">${term}</strong> <span class="kp-sep">—</span> <span class="kp-trans">${trans}</span>`;
  }
  return point;
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

const exercisePlayerRef = ref<any>(null);

function goToStep(step: "theory" | "examples" | "exercises") {
  currentStep.value = step;
  nextTick(() => {
    const targetElement =
      step === "exercises"
        ? (document.querySelector(".exercises-section") || document.querySelector(".lesson-tabs"))
        : step === "examples"
        ? (document.querySelector(".examples-section") || document.querySelector(".lesson-tabs"))
        : (document.querySelector(".theory-section") || document.querySelector(".lesson-tabs"));

    if (targetElement) {
      const headerOffset = 75;
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
      @navigate="navigateLesson"
    />

    <LessonTabs :currentStep="currentStep" @update:currentStep="goToStep" />

    <main class="lesson-content">
      <!-- THEORY STEP -->
      <section v-if="currentStep === 'theory'" class="theory-section fade-in">
        <div class="content-card">
          <h2>{{ $t('lesson.tabs.theory') }}</h2>
          <div
            class="theory-text"
            @click="onTheoryClick"
            v-html="renderTheory(lesson?.content?.theory || '')"
          ></div>

          <div class="key-points">
            <h3>{{ $t('lesson.keyPoints') }}</h3>
            <ul class="key-points-list">
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

      <!-- EXAMPLES STEP -->
      <section
        v-if="currentStep === 'examples'"
        class="examples-section fade-in"
      >
        <div class="content-card">
          <h2>{{ $t('lesson.tabs.examples') }}</h2>
          <div class="examples-grid">
            <div
              v-for="(example, index) in lesson.content.examples"
              :key="index"
              class="example-card"
            >
              <div class="example-indonesian">
                <span class="example-term">{{ example.indonesian }}</span>
                <button
                  class="audio-btn-sm"
                  @click.stop="speak(example.indonesian)"
                  title="Прослушать"
                >🔊</button>
                <span class="example-phonetic" v-if="example.indonesian">
                  {{ transcribe(example.indonesian, langStore.targetLang === 'id' ? 'id' : 'ru') }}
                </span>
              </div>
              <div class="example-russian">{{ example.russian }}</div>
              <div v-if="example.notes" class="example-notes">
                {{ example.notes }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- EXERCISES STEP -->
      <section
        v-if="currentStep === 'exercises'"
        class="exercises-section fade-in"
      >
        <div v-if="lesson.id === 17 && isCompleted" class="completion-card-wrapper fade-in">
          <div class="completion-card">
            <h2>{{ $t('exercise.completion.title') }}</h2>
            <p>{{ $t('lesson.successMessage') }}</p>
            
            <div class="completion-actions">
              <button
                class="btn btn-outline"
                @click="resetLessonProgress"
              >
                {{ $t('lesson.resetLessonProgress') }}
              </button>
            </div>
          </div>
        </div>
        <AIChatView
          v-else-if="lesson.id === 17"
          :lessonMode="true"
        />
        <ExercisePlayer
          v-else
          ref="exercisePlayerRef"
          :exercises="lessonExercises"
          :lessonId="lesson.id"
        >
          <template #completion>
            <div class="completion-card">
              <h2>{{ $t('exercise.completion.title') }}</h2>
              <p>{{ $t('lesson.successMessage') }}</p>
              
              <div class="completion-actions">
                <button
                  v-if="nextLesson"
                  class="btn btn-primary btn-lg"
                  @click="navigateLesson(nextLesson.id)"
                >
                  {{ $t('exercise.completion.nextLesson') }}
                </button>
                <button
                  class="btn btn-outline"
                  @click="resetLessonProgress"
                >
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
        <!-- Under Theory Step -->
        <button
          v-if="currentStep === 'theory'"
          class="btn btn-primary"
          @click="goToStep('examples')"
        >
          {{ $t('lesson.continueToExamples') }}
        </button>

        <!-- Under Examples Step -->
        <div v-else-if="currentStep === 'examples'" class="split-buttons">
          <button
            class="btn btn-outline"
            @click="goToStep('theory')"
          >
            {{ $t('lesson.backToTheory') }}
          </button>
          <button
            class="btn btn-primary"
            @click="goToStep('exercises')"
          >
            {{ $t('lesson.continueToExercises') }}
          </button>
        </div>

        <!-- Under Exercises Step (only show if not completed) -->
        <div v-else-if="currentStep === 'exercises' && !isCompleted" class="split-buttons">
          <button
            class="btn btn-outline"
            @click="goToStep('examples')"
          >
            {{ $t('lesson.backToExamples') }}
          </button>
        </div>
      </div>
    </footer>
  </div>

  <div v-else class="not-found">
    <h2>{{ $t('lesson.notFound.title') }}</h2>
    <p>{{ $t('lesson.notFound.message', { id: lessonId }) }}</p>
    <button class="btn btn-primary" @click="router.push('/' + langStore.interfaceLang + '/' + langStore.targetLang)">
      {{ $t('lesson.notFound.goHome') }}
    </button>
  </div>
</template>

<style scoped>
.lesson-view {
  max-width: 900px;
  margin: 0 auto;
}

.theory-text {
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 2rem;
  font-size: 1.05rem;
  white-space: pre-line;
}

.theory-text :deep(.theory-term) {
  color: var(--text-h);
  font-weight: 600;
}

.theory-text :deep(.theory-phonetic) {
  color: var(--muted);
  font-style: italic;
  font-size: 0.95em;
}

.theory-text :deep(.theory-translation) {
  color: var(--translation-color);
  font-weight: 500;
}

.theory-text :deep(.theory-note) {
  color: var(--muted);
  font-style: italic;
  font-size: 0.95em;
}

.theory-text :deep(.theory-heading) {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-h);
  margin-top: 1.25rem;
  margin-bottom: 0.4rem;
  border-left: 3px solid var(--primary);
  padding-left: 0.6rem;
  display: block;
}

.key-points {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.key-points h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-h);
}

.key-points-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.key-point-item {
  font-size: 1.05rem;
  padding: 0.4rem 0.75rem;
  background: var(--code-bg);
  border-radius: 0.35rem;
  border-left: 3px solid var(--primary);
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.key-point-item :deep(.kp-term) {
  color: var(--text-h);
  font-weight: 600;
}

.key-point-item :deep(.kp-sep) {
  color: var(--muted);
}

.key-point-item :deep(.kp-trans) {
  color: var(--translation-color);
  font-weight: 500;
}

.examples-grid {
  display: grid;
  gap: 1rem;
}

.example-card {
  background: var(--code-bg);
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.example-card:hover {
  transform: translateX(3px);
  box-shadow: var(--shadow);
}

.example-indonesian {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-h);
  margin-bottom: 0.35rem;
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.example-term {
  color: var(--text-h);
  font-weight: 600;
}

.example-phonetic {
  font-size: 0.95rem;
  color: var(--muted);
  font-style: italic;
  font-weight: 400;
}

.example-russian {
  font-size: 1.1rem;
  color: var(--translation-color);
  font-weight: 500;
  margin-bottom: 0.35rem;
}

.example-notes {
  font-size: 0.95rem;
  color: var(--muted);
  font-style: italic;
}

.lesson-footer {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.step-navigation-buttons {
  width: 100%;
}

.split-buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.completion-card {
  text-align: center;
  padding: 3rem;
  background: var(--bg-card);
  border-radius: 0.75rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  margin-top: 2rem;
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

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

@media (max-width: 768px) {
  .completion-actions {
    flex-direction: column;
  }
  .split-buttons {
    flex-direction: column;
  }
}
</style>
