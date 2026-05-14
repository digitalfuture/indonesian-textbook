<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useProgressStore } from "../stores/progress";

const router = useRouter();
const progressStore = useProgressStore();

// Примеры упражнений
const exercises = [
  {
    id: 1,
    type: "translation",
    question: 'Переведите: "Selamat pagi, nama saya Ivan"',
    answer: "Доброе утро, меня зовут Иван",
    hint: "selamat pagi = доброе утро, nama = имя, saya = я",
  },
  {
    id: 2,
    type: "fillblank",
    question: 'Вставьте пропущенное слово: "Saya ... dari Rusia"',
    answer: "berasal",
    hint: 'глагол "происходить"',
  },
  {
    id: 3,
    type: "multiplechoice",
    question: 'Что означает "Terima kasih"?',
    options: ["Спасибо", "До свидания", "Привет", "Пока"],
    answer: "Спасибо",
  },
  {
    id: 4,
    type: "translation",
    question: 'Переведите: "Saya belajar bahasa Indonesia"',
    answer: "Я изучаю индонезийский язык",
    hint: "belajar = учиться/изучать, bahasa = язык",
  },
  {
    id: 5,
    type: "multiplechoice",
    question: 'Какое местоимение означает "мы" (включая собеседника)?',
    options: ["kami", "kita", "mereka", "kamu"],
    answer: "kita",
  },
];

const currentExerciseIndex = ref(0);
const userAnswer = ref("");
const selectedOption = ref("");
const showFeedback = ref(false);
const isCorrect = ref(false);
const completedExercises = ref<number[]>([]);

const currentExercise = computed(() => exercises[currentExerciseIndex.value]);

function checkAnswer() {
  let correct = false;

  if (currentExercise.value.type === "multiplechoice") {
    correct = selectedOption.value === currentExercise.value.answer;
  } else {
    correct =
      userAnswer.value.toLowerCase().trim() ===
      currentExercise.value.answer.toLowerCase();
  }

  isCorrect.value = correct;
  showFeedback.value = true;

  if (correct && !completedExercises.value.includes(currentExercise.value.id)) {
    completedExercises.value.push(currentExercise.value.id);
    progressStore.completeExercise(1, currentExercise.value.id, 10);
  }
}

function nextExercise() {
  if (currentExerciseIndex.value < exercises.length - 1) {
    currentExerciseIndex.value++;
    userAnswer.value = "";
    selectedOption.value = "";
    showFeedback.value = false;
    isCorrect.value = false;
  }
}

function prevExercise() {
  if (currentExerciseIndex.value > 0) {
    currentExerciseIndex.value--;
    userAnswer.value = "";
    selectedOption.value = "";
    showFeedback.value = false;
    isCorrect.value = false;
  }
}

function resetExercise() {
  userAnswer.value = "";
  selectedOption.value = "";
  showFeedback.value = false;
  isCorrect.value = false;
}

const progress = computed(() => {
  return (completedExercises.value.length / exercises.length) * 100;
});
</script>

<template>
  <div class="exercise-view">
    <header class="exercise-header">
      <h1>✍️ Упражнения</h1>
      <p class="exercise-description">
        Практикуйте индонезийский язык с помощью интерактивных упражнений
      </p>

      <div class="progress-container">
        <div class="progress-info">
          <span
            >Прогресс: {{ completedExercises.length }}/{{
              exercises.length
            }}</span
          >
          <span>{{ Math.round(progress) }}%</span>
        </div>
        <div class="progress">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </header>

    <main class="exercise-content">
      <div class="exercise-card">
        <div class="exercise-nav">
          <button
            class="btn btn-sm btn-outline"
            @click="prevExercise"
            :disabled="currentExerciseIndex === 0"
          >
            ← Назад
          </button>
          <span class="exercise-number">
            Упражнение {{ currentExerciseIndex + 1 }} из {{ exercises.length }}
          </span>
          <button
            class="btn btn-sm btn-outline"
            @click="nextExercise"
            :disabled="currentExerciseIndex === exercises.length - 1"
          >
            Вперёд →
          </button>
        </div>

        <div class="exercise-body">
          <div class="exercise-type">
            <span
              v-if="currentExercise.type === 'translation'"
              class="type-badge"
              >Перевод</span
            >
            <span
              v-else-if="currentExercise.type === 'fillblank'"
              class="type-badge"
              >Заполните пропуск</span
            >
            <span
              v-else-if="currentExercise.type === 'multiplechoice'"
              class="type-badge"
              >Выбор ответа</span
            >
          </div>

          <h2 class="question">{{ currentExercise.question }}</h2>

          <!-- Ввод ответа для перевода и заполнения пропуска -->
          <div
            v-if="currentExercise.type !== 'multiplechoice'"
            class="answer-section"
          >
            <input
              v-model="userAnswer"
              type="text"
              placeholder="Введите ваш ответ..."
              class="form-input"
              :disabled="showFeedback"
            />
          </div>

          <!-- Варианты ответов для multiple choice -->
          <div v-else class="options-section">
            <div
              v-for="option in currentExercise.options"
              :key="option"
              class="option"
              :class="{
                selected: selectedOption === option,
                correct: showFeedback && option === currentExercise.answer,
                wrong:
                  showFeedback &&
                  selectedOption === option &&
                  option !== currentExercise.answer,
              }"
              @click="!showFeedback && (selectedOption = option)"
            >
              {{ option }}
            </div>
          </div>

          <!-- Кнопки действий -->
          <div class="action-buttons">
            <button
              v-if="!showFeedback"
              class="btn btn-primary"
              @click="checkAnswer"
              :disabled="
                currentExercise.type === 'multiplechoice'
                  ? !selectedOption
                  : !userAnswer
              "
            >
              Проверить
            </button>
            <button v-else class="btn btn-outline" @click="resetExercise">
              Попробовать снова
            </button>
          </div>

          <!-- Обратная связь -->
          <div
            v-if="showFeedback"
            class="feedback"
            :class="{ correct: isCorrect, wrong: !isCorrect }"
          >
            <div class="feedback-icon">{{ isCorrect ? "✅" : "❌" }}</div>
            <div class="feedback-text">
              <strong>{{ isCorrect ? "Правильно!" : "Неправильно" }}</strong>
              <p v-if="!isCorrect">
                Правильный ответ: <strong>{{ currentExercise.answer }}</strong>
              </p>
            </div>
            <div v-if="currentExercise.hint" class="feedback-hint">
              💡 {{ currentExercise.hint }}
            </div>
          </div>
        </div>
      </div>

      <!-- Завершение -->
      <div
        v-if="completedExercises.length === exercises.length"
        class="completion-card"
      >
        <h2>🎉 Поздравляем!</h2>
        <p>Вы完成了所有 упражнения!</p>
        <button
          class="btn btn-primary btn-lg"
          @click="router.push('/progress')"
        >
          Посмотреть прогресс
        </button>
      </div>
    </main>
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
  color: #4a5568;
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
  color: #718096;
}

.exercise-content {
  margin-bottom: 2rem;
}

.exercise-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.exercise-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: #f7fafc;
  border-bottom: 1px solid #e2e8f0;
}

.exercise-number {
  font-weight: 500;
  color: #4a5568;
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
  color: #2d3748;
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
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.option:hover:not(.selected):not(.correct):not(.wrong) {
  border-color: #667eea;
  background: #edf2f7;
}

.option.selected {
  border-color: #667eea;
  background: #ebf4ff;
}

.option.correct {
  border-color: #48bb78;
  background: #f0fff4;
}

.option.wrong {
  border-color: #f56565;
  background: #fff5f5;
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
  background: #f0fff4;
  border: 1px solid #c6f6d5;
}

.feedback.wrong {
  background: #fff5f5;
  border: 1px solid #feb2b2;
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
}

.feedback-text p {
  margin: 0;
  font-size: 0.95rem;
  color: #4a5568;
}

.feedback-hint {
  font-size: 0.9rem;
  color: #718096;
  margin-top: 0.5rem;
}

.completion-card {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
}

.completion-card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.completion-card p {
  font-size: 1.1rem;
  color: #4a5568;
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
}
</style>
