<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAIStore } from "../stores/ai";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";
import { vocabulary } from "../data/vocabulary";

const props = defineProps<{
  lessonMode?: boolean;
}>();

const aiStore = useAIStore();
const progressStore = useProgressStore();
const langStore = useLanguageStore();
const route = useRoute();
const router = useRouter();

const messageInput = ref("");
const messagesContainer = ref<HTMLElement | null>(null);
const activeTooltipWord = ref<string | null>(null);

const goalTurnCount = 6;

// Подсчет количества реплик пользователя для прогресса урока
const userTurnCount = computed(() => {
  return aiStore.messages.filter((m) => m.role === "user").length;
});

const isGoalMet = computed(() => {
  return userTurnCount.value >= goalTurnCount;
});

// Инициализация
onMounted(async () => {
  await aiStore.initialize();
  if (aiStore.isSupported) {
    await aiStore.startNewSession();
    // Если история пуста, пусть ИИ поздоровается первым
    if (aiStore.messages.length === 0) {
      aiStore.messages.push({
        role: "model",
        content: "Halo! Selamat datang. Siapa nama Anda? / Привет! Добро пожаловать. Как вас зовут?",
        recommendedWords: ["nama", "saya", "selamat", "datang"],
        corrections: [],
      });
    }
  }
});

// Автоскролл чата при новых сообщениях
watch(
  () => aiStore.messages.length,
  () => {
    scrollToBottom();
  },
  { deep: true }
);

async function scrollToBottom() {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
}

// Отправка сообщения
async function handleSend() {
  const text = messageInput.value.trim();
  if (!text || aiStore.isGenerating) return;

  messageInput.value = "";
  await aiStore.sendMessage(text);
  scrollToBottom();
}

// Сброс чата
async function handleReset() {
  await aiStore.resetChat();
  aiStore.messages.push({
    role: "model",
    content: "Halo! Mari kita mulai lagi. Siapa nama Anda?",
    recommendedWords: ["nama", "saya", "selamat"],
    corrections: [],
  });
}

// Получить перевод слова из словаря для всплывающей подсказки
function getWordTranslation(word: string): string {
  const clean = word.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "").trim();
  const found = vocabulary.find((v) => v.word.toLowerCase().trim() === clean);
  return found ? found.translation : "Перевод не найден";
}

// Вычислить прозрачность чипса на базе уровня mastery (0-5)
function getWordOpacity(word: string): number {
  const clean = word.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "").trim();
  const mastery = progressStore.getWordMastery(clean);
  // Чем выше mastery, тем более прозрачное слово (минимум 0.15, чтобы было слегка заметно)
  return Math.max(0.15, 1 - mastery / 5);
}

// Клик по подсказке вставляет слово в поле ввода
function insertWord(word: string) {
  const clean = word.replace(/[^\p{L}\p{N}\s-]/gu, "").trim();
  if (messageInput.value) {
    messageInput.value += " " + clean;
  } else {
    messageInput.value = clean;
  }
}

// Завершить урок (доступно только в Lesson Mode)
function handleCompleteLesson() {
  if (props.lessonMode && isGoalMet.value) {
    progressStore.completeLesson(17, 100);
    // Перенаправление на страницу прогресса или главную
    router.push(`/${langStore.interfaceLang}/${langStore.targetLang}/progress`);
  }
}
</script>

<template>
  <div class="ai-chat-view" :class="{ 'lesson-mode': lessonMode }">
    <div class="chat-header" v-if="!lessonMode">
      <h2><i class="pi pi-comments"></i> {{ $t('aiChat.title') }}</h2>
      <p class="subtitle">Практика разговорной речи с Gemini Nano</p>
    </div>

    <!-- Заглушка: встроенный ИИ не поддерживается -->
    <div v-if="aiStore.status === 'unsupported'" class="unsupported-container fade-in">
      <div class="unsupported-card">
        <i class="pi pi-exclamation-triangle warning-icon"></i>
        <h3>{{ $t('aiChat.unsupported') }}</h3>
        <p class="description">
          Для работы этой функции требуется браузер Google Chrome со встроенным искусственным интеллектом Gemini Nano.
        </p>

        <div class="guide-box">
          <h4>{{ $t('aiChat.setupGuideTitle') }}</h4>
          <ul>
            <li v-html="$t('aiChat.setupGuideStep1')"></li>
            <li v-html="$t('aiChat.setupGuideStep2')"></li>
            <li v-html="$t('aiChat.setupGuideStep3')"></li>
            <li v-html="$t('aiChat.setupGuideStep4')"></li>
          </ul>
        </div>

        <PButton
          v-if="!lessonMode"
          label="Вернуться на главную"
          icon="pi pi-arrow-left"
          severity="secondary"
          @click="router.push(`/${langStore.interfaceLang}/${langStore.targetLang}`)"
          class="mt-4"
        />
      </div>
    </div>

    <!-- Загрузка / скачивание модели -->
    <div v-else-if="aiStore.status === 'checking' || aiStore.status === 'downloading'" class="loading-container fade-in">
      <div class="loading-card">
        <i class="pi pi-spin pi-spinner spinner-icon"></i>
        <h3 v-if="aiStore.status === 'checking'">{{ $t('aiChat.connecting') }}</h3>
        <h3 v-else>{{ $t('aiChat.downloading') }}</h3>
        <p class="text-muted">Это может занять некоторое время при первом запуске модели.</p>
        <PProgressBar v-if="aiStore.status === 'downloading'" mode="indeterminate" class="mt-4" style="height: 6px" />
      </div>
    </div>

    <!-- Готовый интерфейс чата -->
    <div v-else class="chat-main fade-in">
      <!-- Цель урока в режиме урока -->
      <div v-if="lessonMode" class="lesson-goal-banner">
        <div class="goal-info">
          <span class="badge"><i class="pi pi-flag"></i></span>
          <div class="goal-text">
            <h5>{{ $t('aiChat.lessonGoal', { count: goalTurnCount }) }}</h5>
            <p>{{ $t('aiChat.lessonGoalProgress', { current: userTurnCount, target: goalTurnCount }) }}</p>
          </div>
        </div>
        <div class="goal-action">
          <PButton
            v-if="isGoalMet"
            :label="$t('aiChat.completeLesson')"
            icon="pi pi-check-circle"
            severity="success"
            @click="handleCompleteLesson"
            class="goal-btn animate-pulse"
          />
        </div>
      </div>

      <!-- Контейнер с сообщениями -->
      <div ref="messagesContainer" class="messages-scroll-area">
        <div
          v-for="(msg, idx) in aiStore.messages"
          :key="idx"
          class="message-wrapper"
          :class="msg.role"
        >
          <div class="message-bubble" :class="{ 'error-bubble': msg.error }">
            <span class="avatar-tag">{{ msg.role === 'user' ? 'Я' : 'AI' }}</span>
            <div class="message-content" v-html="msg.content"></div>
          </div>

          <!-- Исправление ошибок (показывается под сообщением ИИ, если ИИ нашел ошибку в предыдущем шаге пользователя) -->
          <div
            v-if="msg.role === 'model' && msg.corrections && msg.corrections.length > 0"
            class="corrections-wrapper fade-in"
          >
            <div class="corrections-header">
              <i class="pi pi-info-circle"></i> {{ $t('aiChat.corrections') }}
            </div>
            <div
              v-for="(corr, cidx) in msg.corrections"
              :key="cidx"
              class="correction-item"
            >
              <span class="wrong-phrase">«{{ corr.word }}»</span>
              <i class="pi pi-arrow-right"></i>
              <span class="right-phrase">{{ corr.correctForm }}</span>
              <p class="correction-explain">{{ corr.explanation }}</p>
            </div>
          </div>
        </div>

        <!-- Анимация печати -->
        <div v-if="aiStore.isGenerating" class="message-wrapper model typing">
          <div class="message-bubble">
            <span class="avatar-tag">AI</span>
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Панель инновационных подсказок с переменной прозрачностью -->
      <div class="hints-and-input-section">
        <!-- Пояснение как это работает (только в автономном режиме, чтобы не загромождать) -->
        <div v-if="!lessonMode && aiStore.messages.length <= 2" class="how-it-works-info fade-in">
          <i class="pi pi-question-circle"></i>
          <div>
            <strong>{{ $t('aiChat.howItWorksTitle') }}</strong>
            <p>{{ $t('aiChat.howItWorksDesc') }}</p>
          </div>
        </div>

        <!-- Список рекомендованных слов -->
        <div
          v-if="aiStore.messages[aiStore.messages.length - 1]?.recommendedWords?.length"
          class="recommended-words-panel"
        >
          <span class="panel-label">{{ $t('aiChat.recommendedWords') }}</span>
          <div class="chips-container">
            <div
              v-for="word in aiStore.messages[aiStore.messages.length - 1].recommendedWords"
              :key="word"
              class="word-chip"
              :style="{ opacity: getWordOpacity(word) }"
              v-tooltip.top="getWordTranslation(word)"
              @click="insertWord(word)"
            >
              <span class="chip-word">{{ word }}</span>
              <span class="chip-mastery-dot" :class="'level-' + progressStore.getWordMastery(word)"></span>
            </div>
          </div>
        </div>

        <!-- Поле ввода -->
        <div class="input-bar">
          <PButton
            icon="pi pi-refresh"
            severity="secondary"
            text
            rounded
            v-tooltip.top="$t('aiChat.reset')"
            @click="handleReset"
            :disabled="aiStore.isGenerating"
          />
          <PInputText
            v-model="messageInput"
            :placeholder="$t('aiChat.inputPlaceholder')"
            class="chat-input"
            @keyup.enter="handleSend"
            :disabled="aiStore.isGenerating"
          />
          <PButton
            icon="pi pi-send"
            severity="primary"
            rounded
            @click="handleSend"
            :disabled="!messageInput.trim() || aiStore.isGenerating"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ai-chat-view {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

.lesson-mode {
  height: 600px;
  padding: 0;
}

.chat-header {
  margin-bottom: 1rem;
}

.chat-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
}

.subtitle {
  color: var(--p-text-muted-color);
  font-size: 0.9rem;
  margin: 0.25rem 0 0 0;
}

/* Состояния неподдерживаемости и загрузки */
.unsupported-container,
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.unsupported-card,
.loading-card {
  background: var(--p-content-background);
  border: 1px solid var(--p-content-border-color);
  border-radius: var(--p-border-radius-xl);
  padding: 2rem;
  text-align: center;
  max-width: 550px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
}

.warning-icon {
  font-size: 3rem;
  color: var(--p-orange-500);
  margin-bottom: 1rem;
}

.spinner-icon {
  font-size: 3rem;
  color: var(--p-primary-color);
  margin-bottom: 1rem;
}

.guide-box {
  background: var(--p-content-hover-background);
  border-radius: var(--p-border-radius-md);
  padding: 1.25rem;
  text-align: left;
  margin-top: 1.5rem;
}

.guide-box h4 {
  font-weight: 600;
  margin: 0 0 0.75rem 0;
}

.guide-box ul {
  padding-left: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.guide-box code {
  background: rgba(0, 0, 0, 0.08);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-size: 0.85rem;
}

/* Главный интерфейс чата */
.chat-main {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: var(--p-content-background);
  border: 1px solid var(--p-content-border-color);
  border-radius: var(--p-border-radius-xl);
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.03);
}

.lesson-goal-banner {
  background: linear-gradient(135deg, var(--p-primary-50) 0%, var(--p-primary-100) 100%);
  border-bottom: 1px solid var(--p-primary-200);
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-dark .lesson-goal-banner {
  background: linear-gradient(135deg, rgba(var(--p-primary-950-rgb), 0.3) 0%, rgba(var(--p-primary-900-rgb), 0.5) 100%);
  border-bottom: 1px solid var(--p-primary-900);
}

.goal-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.goal-info .badge {
  background: var(--p-primary-color);
  color: var(--p-primary-contrast-color);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.goal-text h5 {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
}

.goal-text p {
  font-size: 0.8rem;
  color: var(--p-text-muted-color);
  margin: 0.15rem 0 0 0;
}

/* Сообщения */
.messages-scroll-area {
  flex: 1;
  overflow-y: auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 75%;
}

.message-wrapper.user {
  align-self: flex-end;
}

.message-wrapper.model {
  align-self: flex-start;
}

.message-bubble {
  border-radius: var(--p-border-radius-lg);
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  line-height: 1.4;
  position: relative;
}

.user .message-bubble {
  background: var(--p-primary-color);
  color: var(--p-primary-contrast-color);
  border-bottom-right-radius: 2px;
}

.model .message-bubble {
  background: var(--p-content-hover-background);
  color: var(--p-text-color);
  border-bottom-left-radius: 2px;
}

.error-bubble {
  background: var(--p-red-50) !important;
  color: var(--p-red-700) !important;
  border: 1px solid var(--p-red-200);
}

.app-dark .error-bubble {
  background: rgba(var(--p-red-950-rgb), 0.2) !important;
  color: var(--p-red-400) !important;
  border-color: rgba(var(--p-red-900-rgb), 0.4);
}

.avatar-tag {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--p-text-muted-color);
  display: block;
  margin-bottom: 0.25rem;
}

.user .avatar-tag {
  color: rgba(255, 255, 255, 0.7);
  text-align: right;
}

/* Исправление ошибок */
.corrections-wrapper {
  margin-top: 0.5rem;
  background: rgba(var(--p-red-500-rgb), 0.05);
  border-left: 3px solid var(--p-red-500);
  padding: 0.5rem 0.75rem;
  border-radius: var(--p-border-radius-sm);
  font-size: 0.85rem;
}

.corrections-header {
  color: var(--p-red-600);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.correction-item {
  margin-top: 0.25rem;
}

.wrong-phrase {
  text-decoration: line-through;
  color: var(--p-red-500);
  font-weight: 500;
}

.right-phrase {
  color: var(--p-green-600);
  font-weight: 600;
  margin-left: 0.25rem;
}

.correction-explain {
  margin: 0.1rem 0 0 0;
  color: var(--p-text-muted-color);
}

/* Анимация набора текста */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0;
}

.typing-indicator span {
  width: 6px;
  height: 6px;
  background: var(--p-text-muted-color);
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
.typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
}

/* Секция ввода и подсказок */
.hints-and-input-section {
  border-top: 1px solid var(--p-content-border-color);
  background: var(--p-content-background);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.how-it-works-info {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  background: var(--p-content-hover-background);
  padding: 0.5rem 0.75rem;
  border-radius: var(--p-border-radius-md);
  font-size: 0.8rem;
  color: var(--p-text-muted-color);
}

.how-it-works-info i {
  color: var(--p-primary-color);
  font-size: 1rem;
  margin-top: 0.1rem;
}

.how-it-works-info p {
  margin: 0.15rem 0 0 0;
}

.recommended-words-panel {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.panel-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--p-text-muted-color);
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.word-chip {
  background: var(--p-content-hover-background);
  border: 1px solid var(--p-content-border-color);
  border-radius: 20px;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  user-select: none;
}

.word-chip:hover {
  background: var(--p-primary-50);
  border-color: var(--p-primary-300);
  transform: translateY(-1px);
}

.app-dark .word-chip:hover {
  background: rgba(var(--p-primary-500-rgb), 0.15);
  border-color: var(--p-primary-700);
}

.chip-word {
  font-weight: 500;
}

.chip-mastery-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--p-content-border-color);
}

/* Цвета точек освоения */
.chip-mastery-dot.level-0 { background: var(--p-red-500); }
.chip-mastery-dot.level-1 { background: var(--p-orange-400); }
.chip-mastery-dot.level-2 { background: var(--p-yellow-400); }
.chip-mastery-dot.level-3 { background: var(--p-green-400); }
.chip-mastery-dot.level-4 { background: var(--p-green-500); }
.chip-mastery-dot.level-5 { background: var(--p-primary-color); }

.input-bar {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.chat-input {
  flex: 1;
  border-radius: 24px;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); box-shadow: 0 0 10px rgba(var(--p-success-500-rgb), 0.5); }
  100% { transform: scale(1); }
}
</style>
