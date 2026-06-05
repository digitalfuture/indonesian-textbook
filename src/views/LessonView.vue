<script setup lang="ts">
import { computed, ref, watch } from "vue";
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
      if (!line.trim()) return "<br>";

      // Find phonetic notation: /.../ or [...] and add audio button for the preceding text
      let processed = line;

      // Match: phrase /IPA/ or phrase [IPA] — everything before / or [ is the phrase to speak
      processed = processed.replace(
        /(.+?)\s*(\/[^\s/]+(?:\s+[^\s/]+)*\/|\[[^\]]+\])\s*/g,
        (_match, phrase, _phon) => {
          const trimmed = phrase.trim().replace(/^[-–—]\s*/, "").replace(/[–—].*$/, "").trim();
          if (!trimmed || /^\d/.test(trimmed)) return _match;
          const safe = trimmed.replace(/'/g, "\\'");
          return `${trimmed} ${_phon} <button class="audio-btn-inline" data-word="${safe}">🔊</button> `;
        },
      );

      return processed;
    })
    .join("<br>");
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

function resetLessonProgress() {
  progressStore.resetLessonProgress(lessonId.value);
  if (exercisePlayerRef.value) {
    exercisePlayerRef.value.resetAll();
  }
}

// Reset step to theory when lesson ID changes
watch(
  () => route.params.id,
  () => {
    currentStep.value = "theory";
  }
);
</script>

<template>
  <div class="lesson-view" v-if="lesson">
    <LessonHeader
      :lesson="lesson"
      :prevLesson="prevLesson"
      :nextLesson="nextLesson"
      @navigate="navigateLesson"
    />

    <LessonTabs v-model:currentStep="currentStep" />

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
            <ul>
              <li
                v-for="(point, index) in lesson.content.keyPoints"
                :key="index"
              >
                {{ point }}
              </li>
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
                {{ example.indonesian }}
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
          @click="currentStep = 'examples'"
        >
          {{ $t('lesson.continueToExamples') }}
        </button>

        <!-- Under Examples Step -->
        <div v-else-if="currentStep === 'examples'" class="split-buttons">
          <button
            class="btn btn-outline"
            @click="currentStep = 'theory'"
          >
            {{ $t('lesson.backToTheory') }}
          </button>
          <button
            class="btn btn-primary"
            @click="currentStep = 'exercises'"
          >
            {{ $t('lesson.continueToExercises') }}
          </button>
        </div>

        <!-- Under Exercises Step (only show if not completed) -->
        <div v-else-if="currentStep === 'exercises' && !isCompleted" class="split-buttons">
          <button
            class="btn btn-outline"
            @click="currentStep = 'examples'"
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
  white-space: pre-line;
}
.examples-grid {
  display: grid;
  gap: 1rem;
}
.example-card {
  background: var(--code-bg);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border-left: 4px solid var(--primary);
}
.example-indonesian {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-h);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.audio-btn-sm {
  background: none;
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0 0.2rem;
  opacity: 0.5;
  transition: opacity 0.2s;
  vertical-align: middle;
}

.audio-btn-sm:hover {
  opacity: 1;
}

.audio-btn-inline {
  background: none;
  border: none;
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0 0.15rem;
  opacity: 0.5;
  transition: opacity 0.2s;
  vertical-align: middle;
}

.audio-btn-inline:hover {
  opacity: 1;
}

.example-phonetic {
  font-size: 0.78rem;
  color: var(--text);
  opacity: 0.45;
  font-style: italic;
}

.example-russian {
  color: var(--text);
  margin-bottom: 0.5rem;
}
.example-notes {
  font-size: 0.85rem;
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
}
</style>
