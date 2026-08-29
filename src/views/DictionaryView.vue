<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";
import { useSpeech } from "../composables/useSpeech";
import { vocabulary as vocabId } from "../data/vocabulary";
import { vocabularyRu as vocabRu } from "../data/vocabularyRu";
import type { Category, DictionaryWord } from "../utils/types";

const progressStore = useProgressStore();
const langStore = useLanguageStore();
const { speak } = useSpeech();

const vocabulary = computed(() =>
  langStore.targetLang === "id" ? vocabId : vocabRu,
);

const viewMode = ref<"list" | "flashcards">("list");
const searchQuery = ref("");
const selectedCategory = ref<Category | "all">("all");
const sortBy = ref<"frequency" | "alphabetical">("frequency");

// Flashcards state
const flashcardFilter = ref<"all" | "unlearned" | "favorite">("all");
const flashcardIndex = ref(0);
const isCardFlipped = ref(false);
const shuffledDeck = ref<DictionaryWord[]>([]);

const filteredDictionary = computed(() => {
  let result = [...vocabulary.value];

  // Поиск
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (word) =>
        word.word.toLowerCase().includes(query) ||
        word.translation.toLowerCase().includes(query),
    );
  }

  // Фильтр по категории
  if (selectedCategory.value !== "all") {
    result = result.filter((word) => word.category === selectedCategory.value);
  }

  // Сортировка
  if (sortBy.value === "frequency") {
    result.sort((a, b) => a.frequency - b.frequency);
  } else {
    result.sort((a, b) => a.word.localeCompare(b.word));
  }

  return result;
});

// Карточки для флеш-тренировки
const flashcardDeck = computed(() => {
  if (shuffledDeck.value.length > 0) {
    return shuffledDeck.value;
  }
  let deck = [...vocabulary.value];
  if (selectedCategory.value !== "all") {
    deck = deck.filter((w) => w.category === selectedCategory.value);
  }
  if (flashcardFilter.value === "unlearned") {
    deck = deck.filter((w) => !isWordLearned(w.id));
  } else if (flashcardFilter.value === "favorite") {
    deck = deck.filter((w) => isWordFavorite(w.id));
  }
  return deck;
});

const currentFlashcard = computed<DictionaryWord | null>(() => {
  if (flashcardDeck.value.length === 0) return null;
  return flashcardDeck.value[flashcardIndex.value] || null;
});

function flipCard() {
  isCardFlipped.value = !isCardFlipped.value;
}

function nextCard() {
  isCardFlipped.value = false;
  if (flashcardIndex.value < flashcardDeck.value.length - 1) {
    flashcardIndex.value++;
  } else {
    flashcardIndex.value = 0;
  }
}

function prevCard() {
  isCardFlipped.value = false;
  if (flashcardIndex.value > 0) {
    flashcardIndex.value--;
  } else {
    flashcardIndex.value = flashcardDeck.value.length - 1;
  }
}

function handleCardKnow() {
  if (currentFlashcard.value) {
    progressStore.markWordAsLearned(currentFlashcard.value.id);
  }
  nextCard();
}

function handleCardRepeat() {
  nextCard();
}

function shuffleFlashcards() {
  const current = [...flashcardDeck.value];
  for (let i = current.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [current[i], current[j]] = [current[j], current[i]];
  }
  shuffledDeck.value = current;
  flashcardIndex.value = 0;
  isCardFlipped.value = false;
}

function resetFlashcards() {
  shuffledDeck.value = [];
  flashcardIndex.value = 0;
  isCardFlipped.value = false;
}

watch([selectedCategory, flashcardFilter], () => {
  resetFlashcards();
});

const categories = [
  { value: "all", labelKey: "dictionary.category.all" },
  { value: "pronoun", labelKey: "dictionary.category.pronoun" },
  { value: "verb", labelKey: "dictionary.category.verb" },
  { value: "noun", labelKey: "dictionary.category.noun" },
  { value: "adjective", labelKey: "dictionary.category.adjective" },
  { value: "preposition", labelKey: "dictionary.category.preposition" },
  { value: "adverb", labelKey: "dictionary.category.adverb" },
  { value: "conjunction", labelKey: "dictionary.category.conjunction" },
  { value: "number", labelKey: "dictionary.category.number" },
  { value: "interjection", labelKey: "dictionary.category.interjection" },
];

function toggleFavorite(wordId: number) {
  progressStore.toggleFavoriteWord(wordId);
}

function markAsLearned(wordId: number) {
  progressStore.markWordAsLearned(wordId);
}

function isWordLearned(wordId: number): boolean {
  return progressStore.isWordLearned(wordId);
}

function isWordFavorite(wordId: number): boolean {
  return progressStore.isFavoriteWord(wordId);
}

function getCategoryLabel(category: string): string {
  const cat = categories.find((c) => c.value === category);
  return cat ? cat.labelKey : "dictionary.category." + category;
}

function showExamples(wordId: number) {
  const word = vocabulary.value.find((w) => w.id === wordId);
  if (word?.examples && word.examples.length > 0) {
    selectedWord.value = word;
    showExamplesModal.value = true;
  }
}

const showExamplesModal = ref(false);
const selectedWord = ref<(typeof vocabulary.value)[0] | null>(null);
const expandedWordId = ref<number | null>(null);

function toggleExpand(wordId: number) {
  if (expandedWordId.value === wordId) {
    expandedWordId.value = null;
  } else {
    expandedWordId.value = wordId;
  }
}

function navigateToWord(wordId: number) {
  viewMode.value = "list";
  searchQuery.value = "";
  selectedCategory.value = "all";
  expandedWordId.value = wordId;
  
  setTimeout(() => {
    const el = document.querySelector(`[data-word-id="${wordId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 100);
}

function getRelatedWords(word: (typeof vocabulary.value)[0]) {
  if (!word.relatedWords) return [];
  return vocabulary.value.filter((w) => word.relatedWords?.includes(w.id));
}

const stats = computed(() => ({
  total: vocabulary.value.length,
  learned: vocabulary.value.filter((w) => isWordLearned(w.id)).length,
  favorite: vocabulary.value.filter((w) => isWordFavorite(w.id)).length,
}));

// Keyboard support for flashcards
function handleKeyDown(e: KeyboardEvent) {
  if (viewMode.value !== "flashcards") return;
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    flipCard();
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    nextCard();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prevCard();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <div class="dictionary-view">
    <header class="dictionary-header">
      <h1>{{ $t('dictionary.title') }}</h1>
      <p class="dictionary-description">{{ $t('dictionary.description.' + langStore.targetLang) }}</p>

      <div class="dictionary-stats">
        <div class="stat">
          <span class="stat-value">{{ stats.total }}</span>
          <span class="stat-label">{{ $t('dictionary.stats.total') }}</span>
        </div>
        <div class="stat">
          <span class="stat-value">{{ stats.learned }}</span>
          <span class="stat-label">{{ $t('dictionary.stats.learned') }}</span>
        </div>
        <div class="stat">
          <span class="stat-value">{{ stats.favorite }}</span>
          <span class="stat-label">{{ $t('dictionary.stats.favorite') }}</span>
        </div>
      </div>
    </header>

    <!-- Переключатель режимов: Список / Карточки -->
    <div class="view-mode-toggle">
      <button
        class="mode-btn"
        :class="{ active: viewMode === 'list' }"
        @click="viewMode = 'list'"
      >
        {{ $t('dictionary.modes.list') }}
      </button>
      <button
        class="mode-btn"
        :class="{ active: viewMode === 'flashcards' }"
        @click="viewMode = 'flashcards'"
      >
        {{ $t('dictionary.modes.flashcards') }}
      </button>
    </div>

    <!-- ================= FLASHCARDS MODE ================= -->
    <section v-if="viewMode === 'flashcards'" class="flashcards-section fade-in">
      <div class="flashcards-controls">
        <div class="flashcard-filters">
          <select v-model="selectedCategory" class="form-input">
            <option v-for="cat in categories" :key="cat.value" :value="cat.value">
              {{ $t(cat.labelKey) }}
            </option>
          </select>

          <select v-model="flashcardFilter" class="form-input">
            <option value="all">{{ $t('dictionary.flashcards.filterAll') }}</option>
            <option value="unlearned">{{ $t('dictionary.flashcards.filterUnlearned') }}</option>
            <option value="favorite">{{ $t('dictionary.flashcards.filterFavorites') }}</option>
          </select>
        </div>

        <button class="btn btn-outline btn-sm" @click="shuffleFlashcards">
          🔀 {{ $t('dictionary.flashcards.shuffle') }}
        </button>
      </div>

      <div v-if="currentFlashcard" class="flashcard-container">
        <div class="flashcard-meta-top">
          <span class="flashcard-counter">
            {{ $t('dictionary.flashcards.progress', { current: flashcardIndex + 1, total: flashcardDeck.length }) }}
          </span>
          <span class="word-category">{{ $t(getCategoryLabel(currentFlashcard.category)) }}</span>
        </div>

        <div
          class="flashcard"
          :class="{ flipped: isCardFlipped, learned: isWordLearned(currentFlashcard.id) }"
          @click="flipCard"
        >
          <div class="flashcard-inner">
            <!-- Лицевая сторона (слово) -->
            <div class="flashcard-front">
              <div class="card-corner-actions" @click.stop>
                <button
                  class="action-btn"
                  :class="{ active: isWordFavorite(currentFlashcard.id) }"
                  @click="toggleFavorite(currentFlashcard.id)"
                  :title="$t('dictionary.addToFavorites')"
                >
                  {{ isWordFavorite(currentFlashcard.id) ? "⭐" : "☆" }}
                </button>
              </div>

              <div class="card-main-content">
                <h2 class="card-word">
                  {{ currentFlashcard.word }}
                  <button
                    class="audio-btn"
                    @click.stop="speak(currentFlashcard.word)"
                    title="Прослушать"
                  >🔊</button>
                </h2>
                <p class="word-pronunciation" v-if="currentFlashcard.pronunciation">
                  {{ currentFlashcard.pronunciation }}
                </p>
                <span class="tap-hint">👆 {{ $t('dictionary.flashcards.flip') }}</span>
              </div>
            </div>

            <!-- Обратная сторона (перевод и примеры) -->
            <div class="flashcard-back">
              <div class="card-corner-actions" @click.stop>
                <button
                  class="action-btn"
                  :class="{ active: isWordFavorite(currentFlashcard.id) }"
                  @click="toggleFavorite(currentFlashcard.id)"
                >
                  {{ isWordFavorite(currentFlashcard.id) ? "⭐" : "☆" }}
                </button>
              </div>

              <div class="card-main-content">
                <h2 class="card-word-small">{{ currentFlashcard.word }}</h2>
                <p class="card-translation">{{ currentFlashcard.translation }}</p>

                <div v-if="currentFlashcard.examples && currentFlashcard.examples.length > 0" class="card-example">
                  <p class="ex-target"><strong>{{ currentFlashcard.examples[0].sentence }}</strong></p>
                  <p class="ex-trans">{{ currentFlashcard.examples[0].translation }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопки управления карточкой -->
        <div class="flashcard-actions">
          <button class="btn btn-outline" @click="prevCard">
            ⬅️
          </button>
          <button class="btn btn-learning" @click="handleCardRepeat">
            ❌ {{ $t('dictionary.flashcards.repeat') }}
          </button>
          <button class="btn btn-know" @click="handleCardKnow">
            ✅ {{ $t('dictionary.flashcards.know') }}
          </button>
          <button class="btn btn-outline" @click="nextCard">
            ➡️
          </button>
        </div>
      </div>

      <div v-else class="empty-flashcards">
        <p>{{ $t('dictionary.flashcards.empty') }}</p>
        <button class="btn btn-primary" @click="resetFlashcards">
          {{ $t('dictionary.flashcards.restart') }}
        </button>
      </div>
    </section>

    <!-- ================= LIST MODE ================= -->
    <section v-else class="list-section fade-in">
      <!-- Фильтры и поиск -->
      <div class="controls">
        <div class="search-box">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="$t('dictionary.search')"
            class="form-input"
          />
        </div>

        <div class="filters">
          <select v-model="selectedCategory" class="form-input">
            <option v-for="cat in categories" :key="cat.value" :value="cat.value">
              {{ $t(cat.labelKey) }}
            </option>
          </select>

          <select v-model="sortBy" class="form-input">
            <option value="frequency">{{ $t('dictionary.sort.frequency') }}</option>
            <option value="alphabetical">{{ $t('dictionary.sort.alphabetical') }}</option>
          </select>
        </div>
      </div>

      <!-- Список слов -->
      <div class="dictionary-list">
        <div
          v-for="word in filteredDictionary"
          :key="word.id"
          class="word-card-wrapper"
          :data-word-id="word.id"
        >
          <div
            class="word-card"
            :class="{
              learned: isWordLearned(word.id),
              expanded: expandedWordId === word.id,
            }"
            @click="toggleExpand(word.id)"
          >
            <div class="word-card-corner">
              <span class="word-frequency">{{ word.frequency }}</span>
              <span
                v-if="word.relatedWords && word.relatedWords.length > 0"
                class="related-badge"
              >
                🔗 {{ word.relatedWords.length }}
              </span>
            </div>
            <div class="word-main">
              <h3 class="word-indonesian">
                {{ word.word }}
                <button
                  class="audio-btn"
                  @click.stop="speak(word.word)"
                  title="Прослушать"
                >🔊</button>
                <span class="word-pronunciation" v-if="word.pronunciation">{{
                  word.pronunciation
                }}</span>
              </h3>
              <p class="word-russian">{{ word.translation }}</p>
              <div class="word-meta">
                <span class="word-category">{{
                  $t(getCategoryLabel(word.category))
                }}</span>
                <span
                  v-if="word.relatedWords && word.relatedWords.length > 0"
                  class="related-badge"
                >
                  🔗 {{ word.relatedWords.length }}
                </span>
              </div>
            </div>

            <div class="word-actions" @click.stop>
              <button
                class="action-btn examples-btn"
                @click="showExamples(word.id)"
                v-if="word.examples && word.examples.length > 0"
                :title="$t('dictionary.examples')"
              >
                💬
              </button>
              <button
                class="action-btn"
                :class="{ active: isWordFavorite(word.id) }"
                @click="toggleFavorite(word.id)"
                :title="$t('dictionary.addToFavorites')"
              >
                {{ isWordFavorite(word.id) ? "⭐" : "☆" }}
              </button>
              <button
                class="action-btn"
                :class="{ active: isWordLearned(word.id) }"
                @click="markAsLearned(word.id)"
                :title="$t('dictionary.markAsLearned')"
              >
                {{ isWordLearned(word.id) ? "✅" : "⬜" }}
              </button>
            </div>
          </div>

          <!-- Разворачиваемый блок -->
          <div v-if="expandedWordId === word.id" class="word-expanded-content">
            <!-- Однокоренные из словаря -->
            <div
              v-if="word.relatedWords && word.relatedWords.length > 0"
              class="expanded-section"
            >
              <h4>{{ $t('dictionary.relatedWords') }}</h4>
              <div class="related-words-list">
                <div
                  v-for="related in getRelatedWords(word)"
                  :key="related.id"
                  class="related-word-item"
                  @click.stop="navigateToWord(related.id)"
                >
                  <span class="related-word">{{ related.word }}</span>
                  <span class="related-translation"
                    >— {{ related.translation }}</span
                  >
                </div>
              </div>
            </div>

            <!-- Внешние однокоренные -->
            <div
              v-if="word.wordFamily && word.wordFamily.length > 0"
              class="expanded-section family-section"
            >
              <h4>{{ $t('dictionary.wordFamily') }}</h4>
              <div class="family-list">
                <div
                  v-for="fw in word.wordFamily"
                  :key="fw.word"
                  class="family-item"
                >
                  <span class="family-word">{{ fw.word }}</span>
                  <span class="family-translation">— {{ fw.translation }}</span>
                </div>
              </div>
            </div>

            <div
              v-if="word.examples && word.examples.length > 0"
              class="quick-examples"
            >
              <h4>{{ $t('dictionary.examples') }}:</h4>
              <div
                v-for="(ex, i) in word.examples.slice(0, 2)"
                :key="i"
                class="quick-example"
              >
                <p>
                  <strong>{{ ex.sentence }}</strong>
                </p>
                <p>{{ ex.translation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredDictionary.length === 0" class="no-results">
        <p>{{ $t('dictionary.noResults') }}</p>
      </div>
    </section>

    <!-- Модальное окно с примерами -->
    <div
      v-if="showExamplesModal && selectedWord"
      class="modal-overlay"
      @click="showExamplesModal = false"
    >
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="showExamplesModal = false">
          ✕
        </button>
        <h2>{{ selectedWord.word }}</h2>
        <p class="modal-translation">{{ selectedWord.translation }}</p>
        <div class="modal-examples">
          <h3>{{ $t('dictionary.examples') }}:</h3>
          <div
            v-for="(example, i) in selectedWord.examples"
            :key="i"
            class="modal-example"
          >
            <p class="example-indo">{{ example.sentence }}</p>
            <p class="example-ru">{{ example.translation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dictionary-view {
  max-width: 900px;
  margin: 0 auto;
}

.dictionary-header {
  margin-bottom: 1.5rem;
  text-align: center;
}

.dictionary-header h1 {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}

.dictionary-description {
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 1.5rem;
}

.dictionary-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text);
}

/* Переключатель режимов */
.view-mode-toggle {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.mode-btn {
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--code-bg);
  color: var(--text);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mode-btn.active {
  background: var(--primary-gradient);
  color: white;
  border-color: transparent;
  box-shadow: var(--shadow);
}

/* Flashcards styles */
.flashcards-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}

.flashcards-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.flashcard-filters {
  display: flex;
  gap: 0.75rem;
  flex: 1;
}

.flashcard-filters .form-input {
  min-width: 140px;
}

.flashcard-container {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flashcard-meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75rem;
}

.flashcard-counter {
  font-weight: 600;
  color: var(--muted);
  font-size: 0.95rem;
}

.flashcard {
  width: 100%;
  height: 320px;
  perspective: 1000px;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.flashcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.flashcard.flipped .flashcard-inner {
  transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 2rem;
  background: var(--bg-card);
  border: 2px solid var(--border);
  box-shadow: var(--shadow);
  transition: border-color 0.2s;
}

.flashcard:hover .flashcard-front,
.flashcard:hover .flashcard-back {
  border-color: var(--primary);
}

.flashcard.learned .flashcard-front,
.flashcard.learned .flashcard-back {
  border-left: 6px solid #22c55e;
}

.flashcard-back {
  transform: rotateY(180deg);
  background: var(--code-bg);
}

.card-corner-actions {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.card-main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.card-word {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-h);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-word-small {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-h);
  opacity: 0.7;
}

.card-translation {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--translation-color);
  margin-bottom: 0.5rem;
}

.tap-hint {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: var(--muted);
  font-style: italic;
}

.card-example {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: var(--bg);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  max-width: 480px;
}

.ex-target {
  font-size: 1.05rem;
  color: var(--text-h);
  margin-bottom: 0.25rem;
}

.ex-trans {
  font-size: 0.95rem;
  color: var(--translation-color);
  font-weight: 500;
}

.flashcard-actions {
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
}

.btn-know {
  background: #22c55e;
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-know:hover {
  background: #16a34a;
  transform: translateY(-2px);
}

.btn-learning {
  background: var(--border);
  color: var(--text-h);
  border: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-learning:hover {
  background: var(--muted);
  color: white;
  transform: translateY(-2px);
}

.empty-flashcards {
  text-align: center;
  padding: 3rem;
  color: var(--text);
}

.empty-flashcards p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

/* List mode controls */
.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.search-box {
  flex: 1;
  min-width: 200px;
}

.filters {
  display: flex;
  gap: 1rem;
}

.filters .form-input {
  min-width: 150px;
}

.dictionary-list {
  display: grid;
  gap: 0.75rem;
}

.word-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg);
  position: relative;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid var(--border);
  cursor: pointer;
}

.word-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-border);
}

.word-card.expanded {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: var(--accent-bg);
  border-color: var(--accent);
}

.word-card.learned {
  border-left: 4px solid #22c55e;
}

.word-expanded-content {
  background: var(--bg);
  border: 1px solid var(--accent);
  border-top: none;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding: 1rem 1.5rem;
  margin-bottom: 0.5rem;
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.expanded-section h4,
.quick-examples h4 {
  font-size: 0.9rem;
  color: var(--text-h);
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.25rem;
}

.related-words-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.related-word-item {
  display: flex;
  gap: 0.5rem;
  font-size: 1.05rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  transition: background 0.2s;
}

.related-word-item:hover {
  background: var(--accent-bg);
}

.related-word {
  font-weight: 600;
  color: var(--accent);
}

.related-translation {
  color: var(--translation-color);
  font-weight: 500;
}

.related-badge {
  font-size: 0.85rem;
  color: var(--text);
  background: var(--code-bg);
  padding: 0.1rem 0.4rem;
  border-radius: 1rem;
}

.family-section {
  margin-top: 0.5rem;
}

.audio-btn {
  background: none;
  border: none;
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0.1rem 0.3rem;
  border-radius: 0.3rem;
  transition: all 0.2s;
  opacity: 0.6;
  vertical-align: middle;
  margin-left: 0.4rem;
}

.audio-btn:hover {
  opacity: 1;
  background: var(--accent-bg);
}

.family-list {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1rem;
}

.family-item {
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.15rem 0.5rem;
}

.family-word {
  font-weight: 600;
  color: var(--accent);
  opacity: 0.85;
}

.family-translation {
  color: var(--translation-color);
  opacity: 0.9;
  font-weight: 500;
}

.quick-example {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  border-left: 2px solid var(--border);
}

.quick-example p:nth-child(2) {
  color: var(--translation-color);
  font-weight: 500;
}

.word-main {
  flex: 1;
}

.word-indonesian {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-h);
  margin-bottom: 0.25rem;
}

.word-russian {
  font-size: 1.15rem;
  color: var(--translation-color);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.word-pronunciation {
  font-size: 0.95rem;
  color: var(--muted);
  font-style: italic;
  margin-left: 0.3rem;
}

.word-card-corner {
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.word-meta {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.word-category {
  font-size: 0.9rem;
  color: var(--primary);
  background: var(--code-bg);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
}

.word-frequency {
  font-size: 0.9rem;
  color: var(--text);
  opacity: 0.7;
}

.word-actions {
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;
}

.action-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem;
  transition: transform 0.2s ease;
}

.action-btn:hover {
  transform: scale(1.2);
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: var(--text);
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bg);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid var(--border);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text);
}

.modal-content h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-h);
}

.modal-translation {
  font-size: 1.3rem;
  color: var(--translation-color);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.modal-examples h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--text-h);
}

.modal-example {
  padding: 0.75rem;
  background: var(--code-bg);
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.example-indo {
  font-weight: 500;
  color: var(--text-h);
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.example-ru {
  color: var(--translation-color);
  font-size: 1.05rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .controls,
  .flashcard-filters {
    flex-direction: column;
  }

  .filters {
    flex-direction: column;
  }

  .dictionary-stats {
    gap: 1rem;
  }

  .word-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .word-actions {
    margin-left: 0;
    align-self: flex-end;
  }

  .flashcard {
    height: 360px;
  }

  .flashcard-actions {
    flex-wrap: wrap;
  }
}
</style>
