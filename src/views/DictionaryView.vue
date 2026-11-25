<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";
import { useSpeech } from "../composables/useSpeech";
import { vocabulary as vocabId } from "../data/vocabulary";
import { vocabularyRu as vocabRu } from "../data/vocabularyRu";
import type { Category, DictionaryWord } from "../utils/types";

const route = useRoute();
const progressStore = useProgressStore();
const langStore = useLanguageStore();
const { speak } = useSpeech();

const vocabulary = computed(() =>
  langStore.targetLang === "id" ? vocabId : vocabRu,
);

const viewMode = ref<"list" | "flashcards">(
  route.query.mode === "flashcards" ? "flashcards" : "list",
);
const searchQuery = ref("");
const selectedCategory = ref<Category | "all">("all");
const selectedLesson = ref<number | "all">("all");
const statusFilter = ref<"all" | "unlearned" | "learned" | "favorite">("all");
const sortBy = ref<"frequency" | "alphabetical">("frequency");
const visibleLimit = ref(60);

// Flashcards session state
const flashcardFilter = ref<"all" | "unlearned" | "favorite">("unlearned");
const sessionQueue = ref<DictionaryWord[]>([]);
const flashcardIndex = ref(0);
const isCardFlipped = ref(false);
const sessionKnownCount = ref(0);
const sessionRepeatCount = ref(0);
const sessionFinished = ref(false);

const lessonNumbers = Array.from({ length: 16 }, (_, i) => i + 1);

const filteredDictionary = computed(() => {
  let result = [...vocabulary.value];

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim();
    result = result.filter(
      (word) =>
        word.word.toLowerCase().includes(query) ||
        word.translation.toLowerCase().includes(query),
    );
  }

  if (selectedCategory.value !== "all") {
    result = result.filter((word) => word.category === selectedCategory.value);
  }

  if (selectedLesson.value !== "all") {
    const lId = selectedLesson.value;
    result = result.filter((word) => word.lessonIds?.includes(lId));
  }

  if (statusFilter.value === "learned") {
    result = result.filter((w) => isWordLearned(w.id));
  } else if (statusFilter.value === "unlearned") {
    result = result.filter((w) => !isWordLearned(w.id));
  } else if (statusFilter.value === "favorite") {
    result = result.filter((w) => isWordFavorite(w.id));
  }

  if (sortBy.value === "frequency") {
    result.sort((a, b) => a.frequency - b.frequency);
  } else {
    result.sort((a, b) => a.word.localeCompare(b.word));
  }

  return result;
});

const displayedDictionary = computed(() =>
  filteredDictionary.value.slice(0, visibleLimit.value),
);

watch([searchQuery, selectedCategory, selectedLesson, statusFilter, sortBy], () => {
  visibleLimit.value = 60;
});

// Build flashcard session deck from current filters
function buildFlashcardSession(shuffle = false) {
  let deck = [...vocabulary.value];
  if (selectedCategory.value !== "all") {
    deck = deck.filter((w) => w.category === selectedCategory.value);
  }
  if (selectedLesson.value !== "all") {
    const lId = selectedLesson.value;
    deck = deck.filter((w) => w.lessonIds?.includes(lId));
  }
  if (flashcardFilter.value === "unlearned") {
    deck = deck.filter((w) => !isWordLearned(w.id));
  } else if (flashcardFilter.value === "favorite") {
    deck = deck.filter((w) => isWordFavorite(w.id));
  }

  if (shuffle) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  sessionQueue.value = deck;
  flashcardIndex.value = 0;
  isCardFlipped.value = false;
  sessionKnownCount.value = 0;
  sessionRepeatCount.value = 0;
  sessionFinished.value = false;
}

watch(
  [vocabulary, selectedCategory, selectedLesson, flashcardFilter],
  () => {
    buildFlashcardSession(false);
  },
  { immediate: true },
);

const currentFlashcard = computed<DictionaryWord | null>(() => {
  if (sessionFinished.value || sessionQueue.value.length === 0) return null;
  return sessionQueue.value[flashcardIndex.value] || null;
});

function flipCard() {
  isCardFlipped.value = !isCardFlipped.value;
}

function advanceCard() {
  isCardFlipped.value = false;
  if (flashcardIndex.value < sessionQueue.value.length - 1) {
    flashcardIndex.value++;
  } else {
    sessionFinished.value = true;
  }
}

function prevCard() {
  isCardFlipped.value = false;
  if (flashcardIndex.value > 0) {
    flashcardIndex.value--;
  }
}

function handleCardKnow() {
  if (currentFlashcard.value) {
    progressStore.markWordAsLearned(currentFlashcard.value.id);
    progressStore.practiceWord(currentFlashcard.value.id);
    sessionKnownCount.value++;
  }
  advanceCard();
}

function handleCardRepeat() {
  if (currentFlashcard.value) {
    progressStore.practiceWord(currentFlashcard.value.id);
    sessionRepeatCount.value++;
    // Re-insert the card a few positions ahead so the user actively recalls it again
    const insertAt = Math.min(sessionQueue.value.length, flashcardIndex.value + 4);
    sessionQueue.value.splice(insertAt, 0, currentFlashcard.value);
  }
  advanceCard();
}

function shuffleFlashcards() {
  buildFlashcardSession(true);
}

function resetFlashcards() {
  buildFlashcardSession(false);
}

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

function toggleLearned(wordId: number) {
  progressStore.toggleWordLearned(wordId);
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

const showExamplesModal = ref(false);
const selectedWord = ref<(typeof vocabulary.value)[0] | null>(null);
const expandedWordId = ref<number | null>(null);

function showExamples(wordId: number) {
  const word = vocabulary.value.find((w) => w.id === wordId);
  if (word?.examples && word.examples.length > 0) {
    selectedWord.value = word;
    showExamplesModal.value = true;
  }
}

function toggleExpand(wordId: number) {
  expandedWordId.value = expandedWordId.value === wordId ? null : wordId;
}

function navigateToWord(wordId: number) {
  viewMode.value = "list";
  searchQuery.value = "";
  selectedCategory.value = "all";
  selectedLesson.value = "all";
  statusFilter.value = "all";
  visibleLimit.value = vocabulary.value.length;
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

function resetListFilters() {
  searchQuery.value = "";
  selectedCategory.value = "all";
  selectedLesson.value = "all";
  statusFilter.value = "all";
}

const stats = computed(() => ({
  total: vocabulary.value.length,
  learned: vocabulary.value.filter((w) => isWordLearned(w.id)).length,
  favorite: vocabulary.value.filter((w) => isWordFavorite(w.id)).length,
}));

function handleKeyDown(e: KeyboardEvent) {
  if (viewMode.value !== "flashcards" || !currentFlashcard.value) return;
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    flipCard();
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    handleCardKnow();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    handleCardRepeat();
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
  <div class="dictionary-view fade-in">
    <header class="dictionary-header">
      <h1>{{ $t('dictionary.title') }}</h1>
      <p class="dictionary-description">
        {{ $t('dictionary.description.' + langStore.targetLang) }}
      </p>

      <div class="dictionary-stats">
        <div class="stat-pill-box">
          <span class="stat-value">{{ stats.total }}</span>
          <span class="stat-label">{{ $t('dictionary.stats.total') }}</span>
        </div>
        <div class="stat-pill-box">
          <span class="stat-value teal">{{ stats.learned }}</span>
          <span class="stat-label">{{ $t('dictionary.stats.learned') }}</span>
        </div>
        <div class="stat-pill-box">
          <span class="stat-value amber">{{ stats.favorite }}</span>
          <span class="stat-label">{{ $t('dictionary.stats.favorite') }}</span>
        </div>
      </div>
    </header>

    <!-- Mode Switcher -->
    <div class="view-mode-toggle">
      <button
        class="mode-btn"
        :class="{ active: viewMode === 'list' }"
        @click="viewMode = 'list'"
        type="button"
      >
        <i class="pi pi-list"></i>
        <span>{{ $t('dictionary.modes.listShort') }}</span>
      </button>
      <button
        class="mode-btn"
        :class="{ active: viewMode === 'flashcards' }"
        @click="viewMode = 'flashcards'"
        type="button"
      >
        <i class="pi pi-clone"></i>
        <span>{{ $t('dictionary.modes.flashcardsShort') }}</span>
      </button>
    </div>

    <!-- ================= FLASHCARDS MODE ================= -->
    <section v-if="viewMode === 'flashcards'" class="flashcards-section fade-in">
      <div class="flashcards-controls">
        <div class="flashcard-filters">
          <select v-model="selectedLesson" class="form-input">
            <option value="all">{{ $t('dictionary.allLessons') }}</option>
            <option v-for="n in lessonNumbers" :key="n" :value="n">
              {{ $t('lesson.header.number', { id: n }) }}
            </option>
          </select>

          <select v-model="selectedCategory" class="form-input">
            <option v-for="cat in categories" :key="cat.value" :value="cat.value">
              {{ $t(cat.labelKey) }}
            </option>
          </select>

          <select v-model="flashcardFilter" class="form-input">
            <option value="unlearned">{{ $t('dictionary.flashcards.filterUnlearned') }}</option>
            <option value="all">{{ $t('dictionary.flashcards.filterAll') }}</option>
            <option value="favorite">{{ $t('dictionary.flashcards.filterFavorites') }}</option>
          </select>
        </div>

        <button class="btn btn-outline btn-sm" @click="shuffleFlashcards" type="button">
          <i class="pi pi-sync"></i>
          <span>{{ $t('dictionary.flashcards.shuffle') }}</span>
        </button>
      </div>

      <!-- Active Flashcard -->
      <div v-if="currentFlashcard" class="flashcard-container">
        <div class="flashcard-meta-top">
          <span class="flashcard-counter">
            {{ $t('dictionary.flashcards.progress', { current: flashcardIndex + 1, total: sessionQueue.length }) }}
          </span>
          <div class="session-counters">
            <span class="session-chip known">✓ {{ sessionKnownCount }}</span>
            <span class="session-chip repeat">↻ {{ sessionRepeatCount }}</span>
          </div>
        </div>

        <div
          class="flashcard"
          :class="{ flipped: isCardFlipped, learned: isWordLearned(currentFlashcard.id) }"
          @click="flipCard"
        >
          <div class="flashcard-inner">
            <!-- Front -->
            <div class="flashcard-front">
              <div class="card-corner-top">
                <span class="word-category">{{ $t(getCategoryLabel(currentFlashcard.category)) }}</span>
                <button
                  class="icon-action-btn"
                  :class="{ fav: isWordFavorite(currentFlashcard.id) }"
                  @click.stop="toggleFavorite(currentFlashcard.id)"
                  :title="$t('dictionary.addToFavorites')"
                  type="button"
                >
                  <i :class="isWordFavorite(currentFlashcard.id) ? 'pi pi-star-fill' : 'pi pi-star'"></i>
                </button>
              </div>

              <div class="card-main-content">
                <h2 class="card-word">
                  <span>{{ currentFlashcard.word }}</span>
                  <button
                    class="audio-btn"
                    @click.stop="speak(currentFlashcard.word)"
                    title="🔊"
                    type="button"
                  >
                    🔊
                  </button>
                </h2>
                <p class="word-pronunciation" v-if="currentFlashcard.pronunciation">
                  {{ currentFlashcard.pronunciation }}
                </p>
                <span class="tap-hint">{{ $t('dictionary.flashcards.flip') }}</span>
              </div>
            </div>

            <!-- Back -->
            <div class="flashcard-back">
              <div class="card-corner-top">
                <span class="word-category">{{ $t(getCategoryLabel(currentFlashcard.category)) }}</span>
                <button
                  class="icon-action-btn"
                  :class="{ fav: isWordFavorite(currentFlashcard.id) }"
                  @click.stop="toggleFavorite(currentFlashcard.id)"
                  type="button"
                >
                  <i :class="isWordFavorite(currentFlashcard.id) ? 'pi pi-star-fill' : 'pi pi-star'"></i>
                </button>
              </div>

              <div class="card-main-content">
                <h3 class="card-word-small">
                  <span>{{ currentFlashcard.word }}</span>
                  <button
                    class="audio-btn"
                    @click.stop="speak(currentFlashcard.word)"
                    title="🔊"
                    type="button"
                  >
                    🔊
                  </button>
                </h3>
                <p class="card-translation">{{ currentFlashcard.translation }}</p>

                <div
                  v-if="currentFlashcard.examples && currentFlashcard.examples.length > 0"
                  class="card-example"
                >
                  <p class="ex-target">
                    <strong>{{ currentFlashcard.examples[0].sentence }}</strong>
                    <button
                      class="audio-btn"
                      @click.stop="speak(currentFlashcard.examples[0].sentence)"
                      title="🔊"
                      type="button"
                    >
                      🔊
                    </button>
                  </p>
                  <p class="ex-trans">{{ currentFlashcard.examples[0].translation }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Flashcard Actions -->
        <div class="flashcard-actions">
          <button
            class="btn btn-outline btn-sm"
            @click="prevCard"
            :disabled="flashcardIndex === 0"
            type="button"
          >
            <i class="pi pi-arrow-left"></i>
          </button>
          <button class="btn btn-repeat" @click="handleCardRepeat" type="button">
            <i class="pi pi-replay"></i>
            <span>{{ $t('dictionary.flashcards.repeat') }}</span>
          </button>
          <button class="btn btn-know" @click="handleCardKnow" type="button">
            <i class="pi pi-check"></i>
            <span>{{ $t('dictionary.flashcards.know') }}</span>
          </button>
        </div>

        <p class="keyboard-hint">{{ $t('dictionary.flashcards.keyboardHint') }}</p>
      </div>

      <!-- Session Finished -->
      <div v-else-if="sessionFinished" class="empty-flashcards content-card fade-in">
        <div class="finished-icon"><i class="pi pi-trophy"></i></div>
        <h3>{{ $t('dictionary.flashcards.finished') }}</h3>
        <p class="finished-stats">
          {{ $t('dictionary.flashcards.sessionSummary', { known: sessionKnownCount, repeated: sessionRepeatCount }) }}
        </p>
        <button class="btn btn-primary" @click="resetFlashcards" type="button">
          {{ $t('dictionary.flashcards.restart') }}
        </button>
      </div>

      <!-- Empty Filter State -->
      <div v-else class="empty-flashcards content-card">
        <p>{{ $t('dictionary.flashcards.empty') }}</p>
        <button
          class="btn btn-primary"
          @click="flashcardFilter = 'all'; selectedCategory = 'all'; selectedLesson = 'all'"
          type="button"
        >
          {{ $t('phrasebook.resetFilters') }}
        </button>
      </div>
    </section>

    <!-- ================= LIST MODE ================= -->
    <section v-else class="list-section fade-in">
      <div class="controls-card">
        <div class="search-box">
          <i class="pi pi-search search-icon"></i>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="$t('dictionary.search')"
            class="form-input search-with-icon"
          />
        </div>

        <div class="filters-row">
          <select v-model="selectedLesson" class="form-input">
            <option value="all">{{ $t('dictionary.allLessons') }}</option>
            <option v-for="n in lessonNumbers" :key="n" :value="n">
              {{ $t('lesson.header.number', { id: n }) }}
            </option>
          </select>

          <select v-model="selectedCategory" class="form-input">
            <option v-for="cat in categories" :key="cat.value" :value="cat.value">
              {{ $t(cat.labelKey) }}
            </option>
          </select>

          <select v-model="statusFilter" class="form-input">
            <option value="all">{{ $t('dictionary.status.all') }}</option>
            <option value="unlearned">{{ $t('dictionary.status.unlearned') }}</option>
            <option value="learned">{{ $t('dictionary.status.learned') }}</option>
            <option value="favorite">{{ $t('dictionary.status.favorite') }}</option>
          </select>

          <select v-model="sortBy" class="form-input">
            <option value="frequency">{{ $t('dictionary.sort.frequency') }}</option>
            <option value="alphabetical">{{ $t('dictionary.sort.alphabetical') }}</option>
          </select>
        </div>
      </div>

      <div class="results-bar">
        <span>{{ $t('dictionary.showingCount', { shown: displayedDictionary.length, total: filteredDictionary.length }) }}</span>
        <button
          v-if="searchQuery || selectedCategory !== 'all' || selectedLesson !== 'all' || statusFilter !== 'all'"
          class="clear-filters-btn"
          @click="resetListFilters"
          type="button"
        >
          {{ $t('phrasebook.resetFilters') }}
        </button>
      </div>

      <div class="dictionary-list">
        <div
          v-for="word in displayedDictionary"
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
            <div class="word-rank">#{{ word.frequency }}</div>

            <div class="word-main">
              <div class="word-top-line">
                <h3 class="word-indonesian">{{ word.word }}</h3>
                <button
                  class="audio-btn-sm"
                  @click.stop="speak(word.word)"
                  title="🔊"
                  type="button"
                >
                  🔊
                </button>
                <span class="word-pronunciation" v-if="word.pronunciation">
                  {{ word.pronunciation }}
                </span>
              </div>

              <p class="word-russian">{{ word.translation }}</p>

              <div class="word-meta">
                <span class="word-category">{{ $t(getCategoryLabel(word.category)) }}</span>
                <span v-if="word.word.trim().includes(' ')" class="meta-pill">
                  {{ $t('dictionary.phrase') }}
                </span>
                <span v-if="word.lessonIds?.length" class="meta-pill">
                  {{ $t('lesson.header.number', { id: word.lessonIds[0] }) }}
                </span>
                <span v-if="word.relatedWords && word.relatedWords.length > 0" class="meta-pill">
                  <i class="pi pi-link"></i> {{ word.relatedWords.length }}
                </span>
              </div>
            </div>

            <div class="word-actions" @click.stop>
              <button
                v-if="word.examples && word.examples.length > 0"
                class="icon-action-btn"
                @click="showExamples(word.id)"
                :title="$t('dictionary.examples')"
                type="button"
              >
                <i class="pi pi-comment"></i>
              </button>
              <button
                class="icon-action-btn"
                :class="{ fav: isWordFavorite(word.id) }"
                @click="toggleFavorite(word.id)"
                :title="$t('dictionary.addToFavorites')"
                type="button"
              >
                <i :class="isWordFavorite(word.id) ? 'pi pi-star-fill' : 'pi pi-star'"></i>
              </button>
              <button
                class="icon-action-btn"
                :class="{ done: isWordLearned(word.id) }"
                @click="toggleLearned(word.id)"
                :title="$t('dictionary.markAsLearned')"
                type="button"
              >
                <i :class="isWordLearned(word.id) ? 'pi pi-check-circle' : 'pi pi-circle'"></i>
              </button>
            </div>
          </div>

          <!-- Expanded details -->
          <div v-if="expandedWordId === word.id" class="word-expanded-content fade-in">
            <div v-if="word.relatedWords && word.relatedWords.length > 0" class="expanded-section">
              <h4>{{ $t('dictionary.relatedWords') }}</h4>
              <div class="related-words-list">
                <button
                  v-for="related in getRelatedWords(word)"
                  :key="related.id"
                  class="related-chip"
                  @click.stop="navigateToWord(related.id)"
                  type="button"
                >
                  <strong>{{ related.word }}</strong>
                  <span class="related-translation">— {{ related.translation }}</span>
                </button>
              </div>
            </div>

            <div v-if="word.wordFamily && word.wordFamily.length > 0" class="expanded-section">
              <h4>{{ $t('dictionary.wordFamily') }}</h4>
              <div class="related-words-list">
                <span v-for="fw in word.wordFamily" :key="fw.word" class="related-chip static">
                  <strong>{{ fw.word }}</strong>
                  <button class="audio-btn-inline" @click.stop="speak(fw.word)" type="button">🔊</button>
                  <span class="related-translation">— {{ fw.translation }}</span>
                </span>
              </div>
            </div>

            <div v-if="word.examples && word.examples.length > 0" class="expanded-section">
              <h4>{{ $t('dictionary.examples') }}</h4>
              <div v-for="(ex, i) in word.examples.slice(0, 2)" :key="i" class="quick-example">
                <div class="ex-line">
                  <strong>{{ ex.sentence }}</strong>
                  <button class="audio-btn-inline" @click.stop="speak(ex.sentence)" type="button">🔊</button>
                </div>
                <p class="example-ru">{{ ex.translation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="displayedDictionary.length < filteredDictionary.length" class="load-more-wrap">
        <button class="btn btn-outline" @click="visibleLimit += 60" type="button">
          {{ $t('dictionary.loadMore', { count: filteredDictionary.length - displayedDictionary.length }) }}
        </button>
      </div>

      <div v-if="filteredDictionary.length === 0" class="no-results content-card">
        <p>{{ $t('dictionary.noResults') }}</p>
        <button class="btn btn-outline btn-sm" @click="resetListFilters" type="button">
          {{ $t('phrasebook.resetFilters') }}
        </button>
      </div>
    </section>

    <!-- Examples Dialog -->
    <PDialog
      v-model:visible="showExamplesModal"
      modal
      :header="selectedWord?.word || ''"
      :style="{ width: '500px', maxWidth: '94vw' }"
    >
      <div v-if="selectedWord" class="modal-examples-body">
        <div class="modal-word-row">
          <span class="modal-translation">{{ selectedWord.translation }}</span>
          <button class="audio-btn" @click="speak(selectedWord.word)" type="button">🔊</button>
        </div>
        <div class="modal-examples-list">
          <div v-for="(example, i) in selectedWord.examples" :key="i" class="modal-example">
            <div class="ex-line">
              <strong>{{ example.sentence }}</strong>
              <button class="audio-btn-inline" @click="speak(example.sentence)" type="button">🔊</button>
            </div>
            <p class="example-ru">{{ example.translation }}</p>
          </div>
        </div>
      </div>
    </PDialog>
  </div>
</template>

<style scoped>
.dictionary-view {
  max-width: 960px;
  margin: 0 auto;
}

.dictionary-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.dictionary-description {
  color: var(--muted);
  margin-bottom: 1.25rem;
}

.dictionary-stats {
  display: inline-flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stat-pill-box {
  display: inline-flex;
  align-items: baseline;
  gap: 0.45rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xs);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-value.teal { color: var(--translation-color); }
.stat-value.amber { color: var(--warning); }

.stat-label {
  font-size: 0.82rem;
  color: var(--muted);
}

.view-mode-toggle {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.3rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 999px;
  width: fit-content;
  margin: 0 auto 1.75rem;
  box-shadow: var(--shadow-xs);
}

.mode-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1.25rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.18s ease;
}

.mode-btn.active {
  background: var(--primary);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);
}

/* Controls */
.controls-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: var(--shadow-xs);
}

.search-box {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 0.95rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  pointer-events: none;
}

.search-with-icon {
  padding-left: 2.5rem;
}

.filters-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.65rem;
}

.results-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 0.85rem;
  padding: 0 0.25rem;
}

.clear-filters-btn {
  background: none;
  border: none;
  color: var(--primary);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
}

.clear-filters-btn:hover {
  text-decoration: underline;
}

/* Word list */
.dictionary-list {
  display: grid;
  gap: 0.65rem;
}

.word-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
  cursor: pointer;
  transition: border-color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease;
}

.word-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.word-card.learned {
  border-left: 3.5px solid var(--success);
}

.word-rank {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--muted);
  min-width: 34px;
  text-align: center;
  padding: 0.25rem 0.4rem;
  border-radius: 6px;
  background: var(--bg-subtle);
}

.word-main {
  flex: 1;
  min-width: 0;
}

.word-top-line {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.word-indonesian {
  font-size: 1.12rem;
  margin: 0;
  color: var(--text-h);
}

.word-russian {
  margin: 0.2rem 0 0.45rem;
  font-size: 0.98rem;
}

.word-meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.word-category,
.meta-pill {
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.16rem 0.55rem;
  border-radius: 999px;
  background: var(--bg-subtle);
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.word-category {
  background: var(--primary-soft);
  color: var(--primary);
}

.word-actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
}

.icon-action-btn {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: none;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.15s ease;
}

.icon-action-btn:hover {
  background: var(--bg-subtle);
  color: var(--text-h);
}

.icon-action-btn.fav { color: var(--warning); }
.icon-action-btn.done { color: var(--success); }

/* Expanded details */
.word-expanded-content {
  margin-top: 0.35rem;
  padding: 1rem 1.25rem;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.expanded-section h4 {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
  margin-bottom: 0.5rem;
}

.related-words-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.related-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.7rem;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--border);
  font-size: 0.86rem;
  color: var(--text-h);
  cursor: pointer;
  transition: border-color 0.15s ease;
}

.related-chip:not(.static):hover {
  border-color: var(--primary);
}

.related-chip.static {
  cursor: default;
}

.related-translation {
  color: var(--translation-color);
}

.quick-example {
  padding: 0.6rem 0.85rem;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--border);
  margin-bottom: 0.5rem;
}

.ex-line {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.quick-example p {
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
}

.load-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.no-results {
  text-align: center;
  padding: 2.5rem;
}

/* Flashcards Mode */
.flashcards-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.flashcard-filters {
  display: flex;
  gap: 0.6rem;
  flex: 1;
  flex-wrap: wrap;
}

.flashcard-filters .form-input {
  width: auto;
  min-width: 150px;
  flex: 1;
}

.flashcard-container {
  max-width: 560px;
  margin: 0 auto;
}

.flashcard-meta-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.flashcard-counter {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--muted);
}

.session-counters {
  display: flex;
  gap: 0.45rem;
}

.session-chip {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.session-chip.known { background: var(--success-soft); color: var(--success); }
.session-chip.repeat { background: var(--warning-soft); color: var(--warning); }

.flashcard {
  perspective: 1000px;
  height: 310px;
  cursor: pointer;
  margin-bottom: 1.25rem;
}

.flashcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.52s cubic-bezier(0.22, 1, 0.36, 1);
  transform-style: preserve-3d;
}

.flashcard.flipped .flashcard-inner {
  transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  background: var(--bg-card);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
  padding: 1.4rem 1.6rem;
  display: flex;
  flex-direction: column;
}

.flashcard-back {
  transform: rotateY(180deg);
  border-color: var(--primary);
}

.card-corner-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
}

.card-word {
  font-size: 2rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-word-small {
  font-size: 1.25rem;
  margin: 0;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.card-translation {
  font-family: var(--font-display);
  font-size: 1.65rem;
  font-weight: 700;
  color: var(--translation-color);
  margin: 0.2rem 0;
}

.card-example {
  margin-top: 0.65rem;
  padding: 0.7rem 1rem;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  width: 100%;
}

.ex-target {
  margin: 0 0 0.25rem;
  font-size: 0.94rem;
}

.ex-trans {
  margin: 0;
  font-size: 0.88rem;
  color: var(--muted);
}

.tap-hint {
  margin-top: 0.75rem;
  font-size: 0.82rem;
  color: var(--muted);
}

.flashcard-actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.btn-repeat {
  flex: 1;
  background: var(--warning-soft);
  color: var(--warning);
  border-color: rgba(217, 119, 6, 0.3);
}

.btn-repeat:hover {
  background: var(--warning);
  color: #ffffff;
}

.btn-know {
  flex: 1;
  background: var(--success-soft);
  color: var(--success);
  border-color: rgba(22, 163, 74, 0.3);
}

.btn-know:hover {
  background: var(--success);
  color: #ffffff;
}

.keyboard-hint {
  text-align: center;
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.9rem;
}

.empty-flashcards {
  text-align: center;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.finished-icon {
  width: 58px;
  height: 58px;
  border-radius: 999px;
  background: var(--warning-soft);
  color: var(--warning);
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.finished-stats {
  color: var(--muted);
  margin: 0;
}

/* Modal examples */
.modal-word-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.modal-examples-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.modal-example {
  padding: 0.8rem 1rem;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
}

.modal-example p {
  margin: 0.25rem 0 0;
}

@media (max-width: 768px) {
  .filters-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .word-card {
    padding: 0.85rem 0.95rem;
    gap: 0.75rem;
  }

  .word-rank {
    display: none;
  }

  .card-word {
    font-size: 1.55rem;
  }
}
</style>
