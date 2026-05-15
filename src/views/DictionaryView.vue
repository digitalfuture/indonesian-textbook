<script setup lang="ts">
import { ref, computed } from "vue";
import { useProgressStore } from "../stores/progress";
import { vocabulary } from "../data/vocabulary";
import type { Category } from "../utils/types";

const progressStore = useProgressStore();

const searchQuery = ref("");
const selectedCategory = ref<Category | "all">("all");
const sortBy = ref<"frequency" | "alphabetical">("frequency");

const filteredDictionary = computed(() => {
  let result = [...vocabulary];

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

const categories = [
  { value: "all", label: "Все" },
  { value: "pronoun", label: "Местоимения" },
  { value: "verb", label: "Глаголы" },
  { value: "noun", label: "Существительные" },
  { value: "adjective", label: "Прилагательные" },
  { value: "preposition", label: "Предлоги" },
  { value: "adverb", label: "Наречия" },
  { value: "conjunction", label: "Союзы" },
  { value: "number", label: "Числа" },
  { value: "interjection", label: "Междометия" },
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
  return cat ? cat.label : category;
}

function showExamples(wordId: number) {
  const word = vocabulary.find((w) => w.id === wordId);
  if (word?.examples && word.examples.length > 0) {
    selectedWord.value = word;
    showExamplesModal.value = true;
  }
}

const showExamplesModal = ref(false);
const selectedWord = ref<(typeof vocabulary)[0] | null>(null);
const expandedWordId = ref<number | null>(null);

function toggleExpand(wordId: number) {
  if (expandedWordId.value === wordId) {
    expandedWordId.value = null;
  } else {
    expandedWordId.value = wordId;
  }
}

function getRelatedWords(word: (typeof vocabulary)[0]) {
  if (!word.relatedWords) return [];
  return vocabulary.filter((w) => word.relatedWords?.includes(w.id));
}

const stats = computed(() => ({
  total: vocabulary.length,
  learned: vocabulary.filter((w) => isWordLearned(w.id)).length,
  favorite: vocabulary.filter((w) => isWordFavorite(w.id)).length,
}));
</script>

<template>
  <div class="dictionary-view">
    <header class="dictionary-header">
      <h1>📖 Частотный словарь</h1>
      <p class="dictionary-description">
        500 самых важных слов индонезийского языка
      </p>

      <div class="dictionary-stats">
        <div class="stat">
          <span class="stat-value">{{ stats.total }}</span>
          <span class="stat-label">Всего слов</span>
        </div>
        <div class="stat">
          <span class="stat-value">{{ stats.learned }}</span>
          <span class="stat-label">Изучено</span>
        </div>
        <div class="stat">
          <span class="stat-value">{{ stats.favorite }}</span>
          <span class="stat-label">В избранном</span>
        </div>
      </div>
    </header>

    <!-- Фильтры и поиск -->
    <div class="controls">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Поиск слова..."
          class="form-input"
        />
      </div>

      <div class="filters">
        <select v-model="selectedCategory" class="form-input">
          <option v-for="cat in categories" :key="cat.value" :value="cat.value">
            {{ cat.label }}
          </option>
        </select>

        <select v-model="sortBy" class="form-input">
          <option value="frequency">По частоте</option>
          <option value="alphabetical">По алфавиту</option>
        </select>
      </div>
    </div>

    <!-- Список слов -->
    <div class="dictionary-list">
      <div
        v-for="word in filteredDictionary"
        :key="word.id"
        class="word-card-wrapper"
      >
        <div
          class="word-card"
          :class="{
            learned: isWordLearned(word.id),
            expanded: expandedWordId === word.id,
          }"
          @click="toggleExpand(word.id)"
        >
          <div class="word-main">
            <h3 class="word-indonesian">{{ word.word }}</h3>
            <p class="word-russian">{{ word.translation }}</p>
            <div class="word-meta">
              <span class="word-category">{{
                getCategoryLabel(word.category)
              }}</span>
              <span class="word-frequency">№{{ word.frequency }}</span>
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
              title="Примеры"
            >
              💬
            </button>
            <button
              class="action-btn"
              :class="{ active: isWordFavorite(word.id) }"
              @click="toggleFavorite(word.id)"
              title="В избранное"
            >
              {{ isWordFavorite(word.id) ? "⭐" : "☆" }}
            </button>
            <button
              class="action-btn"
              :class="{ active: isWordLearned(word.id) }"
              @click="markAsLearned(word.id)"
              title="Отметить как изученное"
            >
              {{ isWordLearned(word.id) ? "✅" : "⬜" }}
            </button>
          </div>
        </div>

        <!-- Разворачиваемый блок с однокоренными словами -->
        <div v-if="expandedWordId === word.id" class="word-expanded-content">
          <div
            v-if="word.relatedWords && word.relatedWords.length > 0"
            class="related-words-section"
          >
            <h4>Однокоренные слова:</h4>
            <div class="related-words-list">
              <div
                v-for="related in getRelatedWords(word)"
                :key="related.id"
                class="related-word-item"
                @click="toggleExpand(related.id)"
              >
                <span class="related-word">{{ related.word }}</span>
                <span class="related-translation"
                  >— {{ related.translation }}</span
                >
              </div>
            </div>
          </div>
          <div v-else class="no-related">
            <p>Для этого слова пока не добавлены однокоренные слова.</p>
          </div>

          <div
            v-if="word.examples && word.examples.length > 0"
            class="quick-examples"
          >
            <h4>Примеры:</h4>
            <div
              v-for="(ex, i) in word.examples.slice(0, 2)"
              :key="i"
              class="quick-example"
            >
              <p>
                <strong>🇮🇩 {{ ex.sentence }}</strong>
              </p>
              <p>🇷🇺 {{ ex.translation }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredDictionary.length === 0" class="no-results">
      <p>Слова не найдены</p>
    </div>

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
          <h3>Примеры:</h3>
          <div
            v-for="(example, i) in selectedWord.examples"
            :key="i"
            class="modal-example"
          >
            <p class="example-indo">🇮🇩 {{ example.sentence }}</p>
            <p class="example-ru">🇷🇺 {{ example.translation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dictionary-view {
  max-width: 1000px;
  margin: 0 auto;
}

.dictionary-header {
  margin-bottom: 2rem;
  text-align: center;
}

.dictionary-header h1 {
  font-size: 2rem;
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
  color: #667eea;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text);
}

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
  border-left: 4px solid #48bb78;
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

.related-words-section h4,
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
  font-size: 0.9rem;
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
  color: var(--text);
}

.related-badge {
  font-size: 0.75rem;
  color: var(--text);
  background: var(--code-bg);
  padding: 0.1rem 0.4rem;
  border-radius: 1rem;
}

.quick-example {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  border-left: 2px solid var(--border);
}

.no-related {
  font-size: 0.85rem;
  color: var(--text-light);
  font-style: italic;
  margin-bottom: 1rem;
}

.word-main {
  flex: 1;
}

.word-indonesian {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-h);
  margin-bottom: 0.25rem;
}

.word-russian {
  font-size: 0.95rem;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.word-meta {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.word-category {
  font-size: 0.75rem;
  color: #667eea;
  background: var(--accent-bg);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.word-frequency {
  font-size: 0.75rem;
  color: var(--text);
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
  color: var(--accent);
}

.modal-translation {
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.modal-examples h3 {
  font-size: 1rem;
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
}

.example-ru {
  color: var(--text);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .controls {
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
}
</style>
