<script setup lang="ts">
import { ref, computed } from "vue";
import { useProgressStore } from "../stores/progress";
import type { Category } from "../utils/types";

const progressStore = useProgressStore();

// Пример словаря (первые 50 слов для демонстрации)
const dictionary = [
  {
    id: 1,
    word: "saya",
    translation: "я",
    category: "pronoun" as Category,
    frequency: 1,
  },
  {
    id: 2,
    word: "aku",
    translation: "я (неформ.)",
    category: "pronoun" as Category,
    frequency: 2,
  },
  {
    id: 3,
    word: "kamu",
    translation: "ты",
    category: "pronoun" as Category,
    frequency: 3,
  },
  {
    id: 4,
    word: "dia",
    translation: "он/она",
    category: "pronoun" as Category,
    frequency: 4,
  },
  {
    id: 5,
    word: "kami",
    translation: "мы (без тебя)",
    category: "pronoun" as Category,
    frequency: 5,
  },
  {
    id: 6,
    word: "kita",
    translation: "мы (с тобой)",
    category: "pronoun" as Category,
    frequency: 6,
  },
  {
    id: 7,
    word: "mereka",
    translation: "они",
    category: "pronoun" as Category,
    frequency: 7,
  },
  {
    id: 8,
    word: "Anda",
    translation: "Вы",
    category: "pronoun" as Category,
    frequency: 8,
  },
  {
    id: 9,
    word: "ini",
    translation: "это",
    category: "pronoun" as Category,
    frequency: 9,
  },
  {
    id: 10,
    word: "itu",
    translation: "то",
    category: "pronoun" as Category,
    frequency: 10,
  },
  {
    id: 11,
    word: "makan",
    translation: "есть (кушать)",
    category: "verb" as Category,
    frequency: 11,
  },
  {
    id: 12,
    word: "minum",
    translation: "пить",
    category: "verb" as Category,
    frequency: 12,
  },
  {
    id: 13,
    word: "pergi",
    translation: "идти",
    category: "verb" as Category,
    frequency: 13,
  },
  {
    id: 14,
    word: "datang",
    translation: "приходить",
    category: "verb" as Category,
    frequency: 14,
  },
  {
    id: 15,
    word: "lihat",
    translation: "видеть",
    category: "verb" as Category,
    frequency: 15,
  },
  {
    id: 16,
    word: "bicara",
    translation: "говорить",
    category: "verb" as Category,
    frequency: 16,
  },
  {
    id: 17,
    word: "belajar",
    translation: "учиться",
    category: "verb" as Category,
    frequency: 17,
  },
  {
    id: 18,
    word: "bekerja",
    translation: "работать",
    category: "verb" as Category,
    frequency: 18,
  },
  {
    id: 19,
    word: "tidur",
    translation: "спать",
    category: "verb" as Category,
    frequency: 19,
  },
  {
    id: 20,
    word: "buka",
    translation: "открывать",
    category: "verb" as Category,
    frequency: 20,
  },
  {
    id: 21,
    word: "rumah",
    translation: "дом",
    category: "noun" as Category,
    frequency: 21,
  },
  {
    id: 22,
    word: "buku",
    translation: "книга",
    category: "noun" as Category,
    frequency: 22,
  },
  {
    id: 23,
    word: "air",
    translation: "вода",
    category: "noun" as Category,
    frequency: 23,
  },
  {
    id: 24,
    word: "makanan",
    translation: "еда",
    category: "noun" as Category,
    frequency: 24,
  },
  {
    id: 25,
    word: "orang",
    translation: "человек",
    category: "noun" as Category,
    frequency: 25,
  },
  {
    id: 26,
    word: "hari",
    translation: "день",
    category: "noun" as Category,
    frequency: 26,
  },
  {
    id: 27,
    word: "waktu",
    translation: "время",
    category: "noun" as Category,
    frequency: 27,
  },
  {
    id: 28,
    word: "uang",
    translation: "деньги",
    category: "noun" as Category,
    frequency: 28,
  },
  {
    id: 29,
    word: "sekolah",
    translation: "школа",
    category: "noun" as Category,
    frequency: 29,
  },
  {
    id: 30,
    word: "kantor",
    translation: "офис",
    category: "noun" as Category,
    frequency: 30,
  },
  {
    id: 31,
    word: "besar",
    translation: "большой",
    category: "adjective" as Category,
    frequency: 31,
  },
  {
    id: 32,
    word: "kecil",
    translation: "маленький",
    category: "adjective" as Category,
    frequency: 32,
  },
  {
    id: 33,
    word: "baik",
    translation: "хороший",
    category: "adjective" as Category,
    frequency: 33,
  },
  {
    id: 34,
    word: "baru",
    translation: "новый",
    category: "adjective" as Category,
    frequency: 34,
  },
  {
    id: 35,
    word: "lama",
    translation: "старый",
    category: "adjective" as Category,
    frequency: 35,
  },
  {
    id: 36,
    word: "panas",
    translation: "горячий",
    category: "adjective" as Category,
    frequency: 36,
  },
  {
    id: 37,
    word: "dingin",
    translation: "холодный",
    category: "adjective" as Category,
    frequency: 37,
  },
  {
    id: 38,
    word: "cepat",
    translation: "быстрый",
    category: "adjective" as Category,
    frequency: 38,
  },
  {
    id: 39,
    word: "lambat",
    translation: "медленный",
    category: "adjective" as Category,
    frequency: 39,
  },
  {
    id: 40,
    word: "indah",
    translation: "красивый",
    category: "adjective" as Category,
    frequency: 40,
  },
  {
    id: 41,
    word: "di",
    translation: "в/на",
    category: "preposition" as Category,
    frequency: 41,
  },
  {
    id: 42,
    word: "ke",
    translation: "в/на (напр.)",
    category: "preposition" as Category,
    frequency: 42,
  },
  {
    id: 43,
    word: "dari",
    translation: "из/от",
    category: "preposition" as Category,
    frequency: 43,
  },
  {
    id: 44,
    word: "dengan",
    translation: "с",
    category: "preposition" as Category,
    frequency: 44,
  },
  {
    id: 45,
    word: "untuk",
    translation: "для",
    category: "preposition" as Category,
    frequency: 45,
  },
  {
    id: 46,
    word: "pada",
    translation: "в (время)",
    category: "preposition" as Category,
    frequency: 46,
  },
  {
    id: 47,
    word: "dan",
    translation: "и",
    category: "adverb" as Category,
    frequency: 47,
  },
  {
    id: 48,
    word: "atau",
    translation: "или",
    category: "adverb" as Category,
    frequency: 48,
  },
  {
    id: 49,
    word: "tapi",
    translation: "но",
    category: "adverb" as Category,
    frequency: 49,
  },
  {
    id: 50,
    word: "karena",
    translation: "потому что",
    category: "adverb" as Category,
    frequency: 50,
  },
];

const searchQuery = ref("");
const selectedCategory = ref<Category | "all">("all");
const sortBy = ref<"frequency" | "alphabetical">("frequency");

const filteredDictionary = computed(() => {
  let result = [...dictionary];

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

const stats = computed(() => ({
  total: dictionary.length,
  learned: dictionary.filter((w) => isWordLearned(w.id)).length,
  favorite: dictionary.filter((w) => isWordFavorite(w.id)).length,
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
        class="word-card"
        :class="{ learned: isWordLearned(word.id) }"
      >
        <div class="word-main">
          <h3 class="word-indonesian">{{ word.word }}</h3>
          <p class="word-russian">{{ word.translation }}</p>
          <span class="word-category">{{
            categories.find((c) => c.value === word.category)?.label
          }}</span>
        </div>

        <div class="word-actions">
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
    </div>

    <div v-if="filteredDictionary.length === 0" class="no-results">
      <p>Слова не найдены</p>
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
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.dictionary-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
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
  color: #718096;
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
  background: white;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.word-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.word-card.learned {
  border-left: 4px solid #48bb78;
}

.word-main {
  flex: 1;
}

.word-indonesian {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.word-russian {
  font-size: 0.95rem;
  color: #4a5568;
  margin-bottom: 0.25rem;
}

.word-category {
  font-size: 0.75rem;
  color: #718096;
  background: #f7fafc;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.word-actions {
  display: flex;
  gap: 0.5rem;
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

.action-btn.active {
  opacity: 1;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: #718096;
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
}
</style>
