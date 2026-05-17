<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useLesson } from "../composables/useLesson";
import { useLanguageStore } from "../stores/language";
import { useSpeech } from "../composables/useSpeech";
import { useTranscription } from "../composables/useTranscription";
import LessonHeader from "../components/lesson/LessonHeader.vue";
import LessonTabs from "../components/lesson/LessonTabs.vue";
import LessonExercises from "../components/lesson/LessonExercises.vue";
import LessonCompletion from "../components/lesson/LessonCompletion.vue";

const route = useRoute();
const router = useRouter();
const langStore = useLanguageStore();
const { speak } = useSpeech();
const { transcribe } = useTranscription();
const lessonId = parseInt(route.params.id as string);
const {
  lesson,
  lessonProgress,
  isCompleted,
  currentStep,
  completeLesson,
  uncompleteLesson,
  goToExercises,
  nextLesson,
  prevLesson,
} = useLesson(lessonId);

function navigateLesson(id: number) {
  router.push(`/${langStore.interfaceLang}/${langStore.targetLang}/lesson/${id}`);
}
function startExercises() {
  goToExercises(router);
}
function handleComplete() {
  completeLesson(100);
}
function handleUncomplete() {
  uncompleteLesson();
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

    <LessonTabs v-model:currentStep="currentStep" />

    <main class="lesson-content">
      <section v-if="currentStep === 'theory'" class="theory-section fade-in">
        <div class="content-card">
          <h2>
            {{ $t('lesson.tabs.theory') }}
            <button
              class="audio-btn-sm"
              @click.stop="speak(lesson?.content?.theory || '')"
              title="Прослушать теорию"
            >🔊</button>
          </h2>
          <div
            class="theory-text"
            v-html="lesson.content.theory.replace(/\n/g, '<br>')"
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

      <LessonExercises
        v-if="currentStep === 'exercises'"
        :lesson="lesson"
        :lessonProgress="lessonProgress"
        @start="startExercises"
      />

      <LessonCompletion
        :isCompleted="isCompleted"
        @complete="handleComplete"
        @uncomplete="handleUncomplete"
      />
    </main>

    <footer class="lesson-footer">
      <button
        v-if="prevLesson"
        class="btn btn-outline"
        @click="navigateLesson(prevLesson.id)"
      >
        {{ $t('lesson.previous') }}
      </button>
      <button
        v-if="nextLesson"
        class="btn btn-primary"
        @click="navigateLesson(nextLesson.id)"
      >
        {{ $t('lesson.next') }}
      </button>
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
/* keep existing lesson-view styles (trimmed) */
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
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
}
.not-found {
  text-align: center;
  padding: 4rem 2rem;
}
</style>
