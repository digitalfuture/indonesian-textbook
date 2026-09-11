<script setup lang="ts">
import { ref, computed } from "vue";
import { useLanguageStore } from "../stores/language";
import { useSpeech } from "../composables/useSpeech";
import {
  phraseCategories,
  phrasesId,
  phrasesRu,
  type PhraseItem,
} from "../data/phrases";

const langStore = useLanguageStore();
const { speak } = useSpeech();

const selectedCategory = ref<string>("all");
const searchQuery = ref<string>("");
const favoritesOnly = ref<boolean>(false);
const favoriteIds = ref<number[]>([]);

// Load favorites from localStorage
const STORAGE_KEY = "phrasebook_favorites";
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    favoriteIds.value = JSON.parse(saved);
  }
} catch (_e) {
  favoriteIds.value = [];
}

function toggleFavorite(id: number) {
  const idx = favoriteIds.value.indexOf(id);
  if (idx >= 0) {
    favoriteIds.value.splice(idx, 1);
  } else {
    favoriteIds.value.push(id);
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds.value));
  } catch (_e) {
    // Ignore quota errors
  }
}

function isFavorite(id: number): boolean {
  return favoriteIds.value.includes(id);
}

const currentPhrases = computed<PhraseItem[]>(() => {
  return langStore.targetLang === "id" ? phrasesId : phrasesRu;
});

const filteredPhrases = computed<PhraseItem[]>(() => {
  let list = currentPhrases.value;

  if (selectedCategory.value !== "all") {
    list = list.filter((p) => p.category === selectedCategory.value);
  }

  if (favoritesOnly.value) {
    list = list.filter((p) => isFavorite(p.id));
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim();
    list = list.filter(
      (p) =>
        p.phrase.toLowerCase().includes(q) ||
        p.translation.toLowerCase().includes(q) ||
        (p.literal && p.literal.toLowerCase().includes(q)) ||
        (p.context && p.context.toLowerCase().includes(q)),
    );
  }

  return list;
});

function getCategoryTitle(catId: string): string {
  const cat = phraseCategories.find((c) => c.id === catId);
  if (!cat) return catId;
  return langStore.interfaceLang === "ru" ? cat.titleRu : cat.titleId;
}

function playPhrase(phrase: string) {
  speak(phrase);
}
</script>

<template>
  <div class="phrasebook-view">
    <header class="phrasebook-header">
      <div class="header-icon-badge">🗣️</div>
      <h1>{{ $t('phrasebook.title') }}</h1>
      <p class="phrasebook-subtitle">
        {{ $t('phrasebook.description.' + langStore.targetLang) }}
      </p>

      <div class="stats-row">
        <div class="stat-box">
          <span class="stat-number">{{ currentPhrases.length }}</span>
          <span class="stat-name">{{ $t('phrasebook.stats.total') }}</span>
        </div>
        <div class="stat-box">
          <span class="stat-number">{{ phraseCategories.length - 1 }}</span>
          <span class="stat-name">{{ $t('phrasebook.stats.categories') }}</span>
        </div>
        <div class="stat-box">
          <span class="stat-number">{{ favoriteIds.length }}</span>
          <span class="stat-name">{{ $t('phrasebook.stats.favorites') }}</span>
        </div>
      </div>
    </header>

    <!-- Search and Quick Filter bar -->
    <div class="search-bar-wrap">
      <div class="search-input-group">
        <span class="search-icon">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="$t('phrasebook.searchPlaceholder')"
          class="search-input"
        />
        <button
          v-if="searchQuery"
          class="clear-search-btn"
          @click="searchQuery = ''"
          title="Clear"
        >
          ✕
        </button>
      </div>

      <button
        class="fav-filter-btn"
        :class="{ active: favoritesOnly }"
        @click="favoritesOnly = !favoritesOnly"
        :title="$t('phrasebook.favoritesOnly')"
      >
        <span>{{ favoritesOnly ? '★' : '☆' }}</span>
        <span>{{ $t('phrasebook.favoritesOnly') }}</span>
      </button>
    </div>

    <!-- Category Tabs -->
    <div class="category-tabs-scroll">
      <div class="category-tabs">
        <button
          v-for="cat in phraseCategories"
          :key="cat.id"
          class="cat-tab-btn"
          :class="{ active: selectedCategory === cat.id }"
          @click="selectedCategory = cat.id"
        >
          <span class="cat-icon">{{ cat.icon }}</span>
          <span class="cat-label">{{ langStore.interfaceLang === 'ru' ? cat.titleRu : cat.titleId }}</span>
        </button>
      </div>
    </div>

    <!-- Phrase Cards List -->
    <div v-if="filteredPhrases.length > 0" class="phrases-grid">
      <div
        v-for="item in filteredPhrases"
        :key="item.id"
        class="phrase-card"
        :class="{ favorited: isFavorite(item.id) }"
      >
        <div class="phrase-card-top">
          <span class="phrase-cat-pill">
            {{ getCategoryTitle(item.category) }}
          </span>

          <button
            class="phrase-fav-btn"
            :class="{ active: isFavorite(item.id) }"
            @click="toggleFavorite(item.id)"
            :title="$t('phrasebook.toggleFavorite')"
          >
            {{ isFavorite(item.id) ? '★' : '☆' }}
          </button>
        </div>

        <div class="phrase-main-body">
          <div class="phrase-target-row">
            <span class="phrase-target-text">{{ item.phrase }}</span>
            <button
              class="phrase-audio-btn"
              @click="playPhrase(item.phrase)"
              title="Прослушать"
            >
              🔊
            </button>
          </div>

          <div v-if="item.pronunciation" class="phrase-pronunciation">
            {{ item.pronunciation }}
          </div>

          <div class="phrase-translation-row">
            <span class="phrase-translation-text">{{ item.translation }}</span>
          </div>

          <div v-if="item.literal" class="phrase-literal-row">
            <span class="literal-prefix">{{ $t('phrasebook.literalPrefix') }}:</span>
            <span class="literal-text">{{ item.literal }}</span>
          </div>

          <div v-if="item.context" class="phrase-context-row">
            <span class="context-icon">💡</span>
            <span class="context-text">{{ item.context }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-else class="empty-state">
      <div class="empty-icon">🔎</div>
      <h3>{{ $t('phrasebook.emptyTitle') }}</h3>
      <p>{{ $t('phrasebook.emptyDesc') }}</p>
      <button
        class="btn btn-outline"
        @click="searchQuery = ''; selectedCategory = 'all'; favoritesOnly = false"
      >
        {{ $t('phrasebook.resetFilters') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.phrasebook-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0.5rem 3rem 0.5rem;
}

.phrasebook-header {
  text-align: center;
  margin-bottom: 2rem;
}

.header-icon-badge {
  font-size: 2.75rem;
  line-height: 1;
  margin-bottom: 0.5rem;
  display: inline-block;
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}

.phrasebook-header h1 {
  font-size: 2.2rem;
  color: var(--text-h);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.phrasebook-subtitle {
  font-size: 1.1rem;
  color: var(--text);
  opacity: 0.85;
  max-width: 650px;
  margin: 0 auto 1.5rem auto;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.6rem 1.4rem;
  min-width: 100px;
}

.stat-number {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-name {
  font-size: 0.8rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Search bar */
.search-bar-wrap {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.search-input-group {
  position: relative;
  flex: 1;
  min-width: 260px;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 1rem;
  color: var(--muted);
  font-size: 1rem;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.2rem 0.75rem 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 1rem;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
}

.clear-search-btn {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: var(--muted);
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.25rem;
}

.fav-filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.fav-filter-btn:hover {
  border-color: #eab308;
}

.fav-filter-btn.active {
  background: rgba(234, 179, 8, 0.12);
  border-color: #eab308;
  color: #ca8a04;
}

/* Category Tabs */
.category-tabs-scroll {
  overflow-x: auto;
  margin-bottom: 1.75rem;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;
}

.category-tabs {
  display: flex;
  gap: 0.5rem;
  white-space: nowrap;
}

.cat-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cat-tab-btn:hover {
  border-color: var(--primary);
}

.cat-tab-btn.active {
  background: var(--primary-gradient);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Grid of Cards */
.phrases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 1rem;
}

.phrase-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.phrase-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  border-color: var(--accent-border, var(--primary));
}

.phrase-card.favorited {
  border-left: 4px solid #eab308;
}

.phrase-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.phrase-cat-pill {
  font-size: 0.75rem;
  background: var(--code-bg);
  color: var(--primary);
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  font-weight: 600;
}

.phrase-fav-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: var(--muted);
  cursor: pointer;
  transition: color 0.15s ease, transform 0.15s ease;
  padding: 0.1rem;
  line-height: 1;
}

.phrase-fav-btn:hover {
  transform: scale(1.15);
  color: #eab308;
}

.phrase-fav-btn.active {
  color: #eab308;
}

.phrase-target-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
}

.phrase-target-text {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-h);
  line-height: 1.3;
}

.phrase-audio-btn {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.phrase-audio-btn:hover {
  background: var(--primary);
  color: white;
  border-color: transparent;
  transform: scale(1.08);
}

.phrase-pronunciation {
  font-size: 0.9rem;
  color: var(--muted);
  font-style: italic;
  margin-bottom: 0.45rem;
}

.phrase-translation-row {
  margin-bottom: 0.4rem;
}

.phrase-translation-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--translation-color, var(--text));
  line-height: 1.35;
}

.phrase-literal-row {
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 0.35rem;
  line-height: 1.3;
}

.literal-prefix {
  font-style: italic;
  margin-right: 0.25rem;
}

.literal-text {
  opacity: 0.9;
}

.phrase-context-row {
  font-size: 0.82rem;
  background: var(--code-bg);
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  margin-top: 0.4rem;
  display: flex;
  gap: 0.4rem;
  align-items: flex-start;
  color: var(--text);
  line-height: 1.3;
}

.context-icon {
  flex-shrink: 0;
  font-size: 0.85rem;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 3.5rem 1rem;
  background: var(--code-bg);
  border: 1px dashed var(--border);
  border-radius: 16px;
  margin-top: 1rem;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 0.75rem;
}

.empty-state h3 {
  font-size: 1.3rem;
  color: var(--text-h);
  margin-bottom: 0.4rem;
}

.empty-state p {
  color: var(--muted);
  margin-bottom: 1.25rem;
}

@media (max-width: 640px) {
  .phrasebook-header h1 {
    font-size: 1.75rem;
  }
  .phrases-grid {
    grid-template-columns: 1fr;
  }
}
</style>
