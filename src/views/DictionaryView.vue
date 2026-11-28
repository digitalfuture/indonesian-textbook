<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useProgressStore } from "../stores/progress";
import { useLanguageStore } from "../stores/language";
import { useSpeech } from "../composables/useSpeech";
import { vocabulary as vocabId } from "../data/vocabulary";
import { vocabularyRu as vocabRu } from "../data/vocabularyRu";
import {
  thematicDictionariesId,
  thematicDictionariesRu,
  type ThematicWord,
} from "../data/thematicVocabulary";
import type { Category, DictionaryWord } from "../utils/types";

const baseUrl = import.meta.env.BASE_URL;
function resolveAsset(path?: string): string {
  if (!path) return "";
  return `${baseUrl}${path.replace(/^\/+/, "")}`;
}

const route = useRoute();
const progressStore = useProgressStore();
const langStore = useLanguageStore();
const { speak, speakSlow } = useSpeech();

const vocabulary = computed(() =>
  langStore.targetLang === "id" ? vocabId : vocabRu,
);

const thematicDictionaries = computed(() =>
  langStore.targetLang === "id" ? thematicDictionariesId : thematicDictionariesRu,
);

const allThematicWords = computed(() =>
  thematicDictionaries.value.flatMap((theme) =>
    theme.words.map((w) => ({
      ...w,
      themeId: theme.id,
      themeIcon: theme.icon,
      themeTitle: langStore.interfaceLang === "ru" ? theme.titleRu : theme.titleId,
    })),
  ),
);

const coreWordSet = computed(
  () => new Set(vocabulary.value.map((w) => w.word.toLowerCase())),
);

const viewMode = ref<"list" | "flashcards" | "thematic">(
  route.query.mode === "flashcards"
    ? "flashcards"
    : route.query.mode === "thematic"
      ? "thematic"
      : "list",
);

// Thematic Dictionaries state
const selectedThemeId = ref<string | null>(
  typeof route.query.theme === "string" ? route.query.theme : null,
);
const thematicSubMode = ref<"list" | "flashcards">("list");
const thematicGlobalSearch = ref("");
const thematicSearch = ref("");
const thematicStatusFilter = ref<"all" | "unlearned" | "learned">("all");
const thematicCardFilter = ref<"unlearned" | "all">("unlearned");
const thematicCardDirection = ref<"targetToNative" | "nativeToTarget" | "mixed">("targetToNative");
const thematicDeck = ref<ThematicWord[]>([]);
const thematicCardIndex = ref(0);
const thematicCardFlipped = ref(false);
const thematicKnownCount = ref(0);
const thematicRepeatCount = ref(0);
const thematicSessionFinished = ref(false);
const previewPhotoWord = ref<ThematicWord | null>(null);

const activeTheme = computed(
  () => thematicDictionaries.value.find((t) => t.id === selectedThemeId.value) || null,
);

const totalThematicStats = computed(() => ({
  total: allThematicWords.value.length,
  learned: allThematicWords.value.filter((w) => progressStore.isThematicWordLearned(w.key)).length,
}));

function getThemeLearnedCount(themeId: string): number {
  const theme = thematicDictionaries.value.find((t) => t.id === themeId);
  if (!theme) return 0;
  return theme.words.filter((w) => progressStore.isThematicWordLearned(w.key)).length;
}

const thematicGlobalMatches = computed(() => {
  const q = thematicGlobalSearch.value.trim().toLowerCase();
  if (!q) return [];
  return allThematicWords.value.filter(
    (w) =>
      w.word.toLowerCase().includes(q) ||
      w.translation.toLowerCase().includes(q),
  );
});

const filteredThemeWords = computed(() => {
  if (!activeTheme.value) return [];
  let list = [...activeTheme.value.words];
  const q = thematicSearch.value.trim().toLowerCase();
  if (q) {
    list = list.filter(
      (w) =>
        w.word.toLowerCase().includes(q) ||
        w.translation.toLowerCase().includes(q),
    );
  }
  if (thematicStatusFilter.value === "learned") {
    list = list.filter((w) => progressStore.isThematicWordLearned(w.key));
  } else if (thematicStatusFilter.value === "unlearned") {
    list = list.filter((w) => !progressStore.isThematicWordLearned(w.key));
  }
  return list;
});

function buildThematicDeck(shuffle = false) {
  if (!activeTheme.value) {
    thematicDeck.value = [];
    return;
  }
  let deck = [...activeTheme.value.words];
  if (thematicCardFilter.value === "unlearned") {
    const unlearned = deck.filter((w) => !progressStore.isThematicWordLearned(w.key));
    if (unlearned.length > 0) deck = unlearned;
  }
  if (shuffle) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
  thematicDeck.value = deck;
  thematicCardIndex.value = 0;
  thematicCardFlipped.value = false;
  thematicKnownCount.value = 0;
  thematicRepeatCount.value = 0;
  thematicSessionFinished.value = false;
}

function openTheme(themeId: string) {
  selectedThemeId.value = themeId;
  thematicSubMode.value = "list";
  thematicSearch.value = "";
  thematicStatusFilter.value = "all";
  buildThematicDeck(false);
}

const currentThematicCard = computed<ThematicWord | null>(() => {
  if (thematicSessionFinished.value || thematicDeck.value.length === 0) return null;
  return thematicDeck.value[thematicCardIndex.value] || null;
});

const isThematicCardReversed = computed(() => {
  if (thematicCardDirection.value === "nativeToTarget") return true;
  if (thematicCardDirection.value === "targetToNative") return false;
  return thematicCardIndex.value % 2 === 1;
});

function rateThematicCard(know: boolean) {
  if (!currentThematicCard.value) return;
  const card = currentThematicCard.value;
  if (know) {
    progressStore.markThematicWordLearned(card.key);
    thematicKnownCount.value++;
  } else {
    thematicRepeatCount.value++;
    const insertAt = Math.min(thematicDeck.value.length, thematicCardIndex.value + 3);
    thematicDeck.value.splice(insertAt, 0, card);
  }
  thematicCardFlipped.value = false;
  if (thematicCardIndex.value < thematicDeck.value.length - 1) {
    thematicCardIndex.value++;
  } else {
    thematicSessionFinished.value = true;
  }
}

watch([selectedThemeId, thematicCardFilter], () => {
  buildThematicDeck(false);
});

watch(
  () => langStore.targetLang,
  () => {
    selectedThemeId.value = null;
    thematicGlobalSearch.value = "";
  },
);
const searchQuery = ref("");
const selectedCategory = ref<Category | "all">("all");
const selectedLesson = ref<number | "all">("all");
const statusFilter = ref<"all" | "unlearned" | "learned" | "favorite">("all");
const sortBy = ref<"frequency" | "alphabetical">("frequency");
const visibleLimit = ref(60);

// Flashcards session state (with SRS & direction)
const initialFilter = route.query.filter as string | undefined;
const flashcardFilter = ref<"due" | "unlearned" | "all" | "favorite">(
  initialFilter === "due" || initialFilter === "all" || initialFilter === "favorite"
    ? initialFilter
    : progressStore.dueWordIds.length > 0
      ? "due"
      : "unlearned",
);
const cardDirection = ref<"targetToNative" | "nativeToTarget" | "mixed">("targetToNative");
const sessionQueue = ref<DictionaryWord[]>([]);
const flashcardIndex = ref(0);
const isCardFlipped = ref(false);
const sessionKnownCount = ref(0);
const sessionRepeatCount = ref(0);
const sessionFinished = ref(false);

const dueCount = computed(() => {
  const validIds = new Set(vocabulary.value.map((w) => w.id));
  return progressStore.dueWordIds.filter((id) => validIds.has(id)).length;
});

const isCurrentCardReversed = computed(() => {
  if (cardDirection.value === "nativeToTarget") return true;
  if (cardDirection.value === "targetToNative") return false;
  // Mixed: deterministic alternate based on index
  return flashcardIndex.value % 2 === 1;
});

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
  if (flashcardFilter.value === "due") {
    const dueSet = new Set(progressStore.dueWordIds);
    deck = deck.filter((w) => dueSet.has(w.id));
  } else if (flashcardFilter.value === "unlearned") {
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

function handleCardRate(quality: "again" | "hard" | "good" | "easy") {
  if (!currentFlashcard.value) return;
  const word = currentFlashcard.value;
  progressStore.reviewWordSRS(word.id, quality);

  if (quality === "again") {
    sessionRepeatCount.value++;
    const insertAt = Math.min(sessionQueue.value.length, flashcardIndex.value + 3);
    sessionQueue.value.splice(insertAt, 0, word);
  } else {
    sessionKnownCount.value++;
  }
  advanceCard();
}

function getPreviewDays(quality: "hard" | "good" | "easy"): number {
  if (!currentFlashcard.value) return 1;
  return progressStore.getNextReviewIntervalPreview(currentFlashcard.value.id, quality);
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
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;

  if (
    viewMode.value === "thematic" &&
    thematicSubMode.value === "flashcards" &&
    currentThematicCard.value
  ) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      thematicCardFlipped.value = !thematicCardFlipped.value;
    } else if (e.key === "1" || e.key === "ArrowLeft") {
      e.preventDefault();
      rateThematicCard(false);
    } else if (e.key === "2" || e.key === "ArrowRight") {
      e.preventDefault();
      rateThematicCard(true);
    }
    return;
  }

  if (viewMode.value !== "flashcards" || !currentFlashcard.value) return;
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    flipCard();
  } else if (e.key === "1" || e.key === "ArrowLeft") {
    e.preventDefault();
    handleCardRate("again");
  } else if (e.key === "2") {
    e.preventDefault();
    handleCardRate("hard");
  } else if (e.key === "3" || e.key === "ArrowRight") {
    e.preventDefault();
    handleCardRate("good");
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
      <button
        class="mode-btn"
        :class="{ active: viewMode === 'thematic' }"
        @click="viewMode = 'thematic'"
        type="button"
      >
        <i class="pi pi-th-large"></i>
        <span>{{ $t('dictionary.modes.thematicShort') }}</span>
        <span class="mode-count-pill">{{ thematicDictionaries.length }}</span>
      </button>
    </div>

    <!-- ================= THEMATIC DICTIONARIES MODE ================= -->
    <section
      v-if="viewMode === 'thematic'"
      class="thematic-section fade-in"
    >
      <!-- Overview of all 9 thematic dictionaries -->
      <template v-if="!activeTheme">
        <div class="thematic-intro-bar">
          <div>
            <p class="thematic-subtitle">{{ $t('dictionary.thematic.subtitle') }}</p>
            <span class="thematic-total-pill">
              {{ $t('dictionary.thematic.allThemesTotal', totalThematicStats) }}
            </span>
          </div>
          <div class="search-box thematic-search-box">
            <i class="pi pi-search search-icon"></i>
            <input
              v-model="thematicGlobalSearch"
              type="text"
              class="form-input search-input"
              :placeholder="$t('dictionary.thematic.searchAll')"
            />
            <button
              v-if="thematicGlobalSearch"
              class="clear-btn"
              @click="thematicGlobalSearch = ''"
              type="button"
            >
              <i class="pi pi-times"></i>
            </button>
          </div>
        </div>

        <!-- Global search matches across themes -->
        <div v-if="thematicGlobalSearch.trim()" class="thematic-search-results">
          <div v-if="thematicGlobalMatches.length === 0" class="no-results content-card">
            <p>{{ $t('dictionary.noResults') }}</p>
          </div>
          <div v-else class="thematic-words-grid">
            <div
              v-for="item in thematicGlobalMatches"
              :key="item.key"
              class="thematic-word-card"
              :class="{ learned: progressStore.isThematicWordLearned(item.key), 'has-photo': Boolean(item.image) }"
            >
              <div
                v-if="item.image"
                class="tw-photo-wrap"
                @click="previewPhotoWord = item"
              >
                <img :src="resolveAsset(item.image)" :alt="item.word" loading="lazy" class="tw-photo" />
              </div>
              <div class="tw-top">
                <div class="tw-title-row">
                  <strong class="tw-word">{{ item.word }}</strong>
                  <button class="audio-btn-sm" @click="speak(item.word)" type="button">🔊</button>
                  <button class="audio-btn-sm" @click="speakSlow(item.word)" :title="$t('sound.slow')" type="button">🐢</button>
                  <span class="tw-pron">{{ item.pronunciation }}</span>
                </div>
                <button
                  class="icon-action-btn"
                  :class="{ done: progressStore.isThematicWordLearned(item.key) }"
                  @click="progressStore.toggleThematicWordLearned(item.key)"
                  :title="$t('dictionary.markAsLearned')"
                  type="button"
                >
                  <i :class="progressStore.isThematicWordLearned(item.key) ? 'pi pi-check-circle' : 'pi pi-circle'"></i>
                </button>
              </div>
              <p class="tw-translation">{{ item.translation }}</p>
              <div class="tw-badges">
                <button class="theme-origin-pill" @click="openTheme(item.themeId)" type="button">
                  {{ item.themeIcon }} {{ item.themeTitle }}
                </button>
                <span v-if="coreWordSet.has(item.word.toLowerCase())" class="core-badge">
                  {{ $t('dictionary.thematic.coreBadge') }}
                </span>
              </div>
              <div v-if="item.example" class="tw-example">
                <span class="tw-ex-id">{{ item.example.sentence }}</span>
                <button class="audio-btn-inline" @click="speak(item.example.sentence)" type="button">🔊</button>
                <span class="tw-ex-ru">— {{ item.example.translation }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Theme cards grid -->
        <div v-else class="themes-grid">
          <button
            v-for="theme in thematicDictionaries"
            :key="theme.id"
            class="theme-card"
            @click="openTheme(theme.id)"
            type="button"
          >
            <div class="theme-card-top">
              <span class="theme-icon" :class="theme.color">{{ theme.icon }}</span>
              <div class="theme-top-badges">
                <span v-if="theme.hasImages" class="photo-chip">
                  <i class="pi pi-image"></i> {{ $t('dictionary.thematic.photoBadge') }}
                </span>
                <span class="theme-count-chip">
                  {{ $t('dictionary.thematic.wordsCount', { count: theme.words.length }) }}
                </span>
              </div>
            </div>
            <h3>{{ langStore.interfaceLang === 'ru' ? theme.titleRu : theme.titleId }}</h3>
            <p class="theme-desc">
              {{ langStore.interfaceLang === 'ru' ? theme.descriptionRu : theme.descriptionId }}
            </p>
            <div class="theme-progress-wrap">
              <div class="theme-progress-label">
                <span>{{
                  $t('dictionary.thematic.learnedProgress', {
                    learned: getThemeLearnedCount(theme.id),
                    total: theme.words.length,
                  })
                }}</span>
                <strong>{{ Math.round((getThemeLearnedCount(theme.id) / theme.words.length) * 100) }}%</strong>
              </div>
              <div class="theme-progress-bar">
                <div
                  class="theme-progress-fill"
                  :style="{ width: Math.round((getThemeLearnedCount(theme.id) / theme.words.length) * 100) + '%' }"
                ></div>
              </div>
            </div>
          </button>
        </div>
      </template>

      <!-- Active Theme Detail -->
      <template v-else>
        <div class="theme-detail-nav">
          <button class="btn btn-outline btn-sm" @click="selectedThemeId = null" type="button">
            <i class="pi pi-arrow-left"></i>
            <span>{{ $t('dictionary.thematic.backToThemes') }}</span>
          </button>

          <div class="theme-pills">
            <button
              v-for="t in thematicDictionaries"
              :key="t.id"
              class="theme-pill"
              :class="{ active: t.id === activeTheme.id }"
              @click="openTheme(t.id)"
              type="button"
            >
              <span>{{ t.icon }}</span>
              <span>{{ langStore.interfaceLang === 'ru' ? t.titleRu : t.titleId }}</span>
            </button>
          </div>
        </div>

        <div class="theme-detail-header content-card">
          <div class="tdh-left">
            <span class="theme-icon lg" :class="activeTheme.color">{{ activeTheme.icon }}</span>
            <div>
              <h2>{{ langStore.interfaceLang === 'ru' ? activeTheme.titleRu : activeTheme.titleId }}</h2>
              <p class="tdh-desc">
                {{ langStore.interfaceLang === 'ru' ? activeTheme.descriptionRu : activeTheme.descriptionId }}
              </p>
              <span class="tdh-progress-pill">
                {{
                  $t('dictionary.thematic.learnedProgress', {
                    learned: getThemeLearnedCount(activeTheme.id),
                    total: activeTheme.words.length,
                  })
                }}
              </span>
            </div>
          </div>

          <div class="tdh-mode-toggle">
            <button
              class="mode-btn"
              :class="{ active: thematicSubMode === 'list' }"
              @click="thematicSubMode = 'list'"
              type="button"
            >
              <i class="pi pi-list"></i>
              <span>{{ $t('dictionary.modes.listShort') }}</span>
            </button>
            <button
              class="mode-btn"
              :class="{ active: thematicSubMode === 'flashcards' }"
              @click="thematicSubMode = 'flashcards'; buildThematicDeck(false)"
              type="button"
            >
              <i class="pi pi-clone"></i>
              <span>{{ $t('dictionary.modes.flashcardsShort') }}</span>
            </button>
          </div>
        </div>

        <!-- Theme Words List -->
        <div v-if="thematicSubMode === 'list'" class="theme-list-body">
          <div class="theme-list-controls">
            <div class="search-box">
              <i class="pi pi-search search-icon"></i>
              <input
                v-model="thematicSearch"
                type="text"
                class="form-input search-input"
                :placeholder="$t('dictionary.thematic.searchTheme')"
              />
              <button
                v-if="thematicSearch"
                class="clear-btn"
                @click="thematicSearch = ''"
                type="button"
              >
                <i class="pi pi-times"></i>
              </button>
            </div>

            <select v-model="thematicStatusFilter" class="form-input theme-status-select">
              <option value="all">{{ $t('dictionary.status.all') }}</option>
              <option value="unlearned">{{ $t('dictionary.status.unlearned') }}</option>
              <option value="learned">{{ $t('dictionary.status.learned') }}</option>
            </select>
          </div>

          <div v-if="filteredThemeWords.length === 0" class="no-results content-card">
            <p>{{ $t('dictionary.noResults') }}</p>
          </div>

          <div v-else class="thematic-words-grid">
            <div
              v-for="item in filteredThemeWords"
              :key="item.key"
              class="thematic-word-card"
              :class="{ learned: progressStore.isThematicWordLearned(item.key), 'has-photo': Boolean(item.image) }"
            >
              <div
                v-if="item.image"
                class="tw-photo-wrap"
                @click="previewPhotoWord = item"
              >
                <img :src="resolveAsset(item.image)" :alt="item.word" loading="lazy" class="tw-photo" />
              </div>
              <div class="tw-top">
                <div class="tw-title-row">
                  <strong class="tw-word">{{ item.word }}</strong>
                  <button class="audio-btn-sm" @click="speak(item.word)" type="button">🔊</button>
                  <button class="audio-btn-sm" @click="speakSlow(item.word)" :title="$t('sound.slow')" type="button">🐢</button>
                  <span class="tw-pron">{{ item.pronunciation }}</span>
                </div>
                <button
                  class="icon-action-btn"
                  :class="{ done: progressStore.isThematicWordLearned(item.key) }"
                  @click="progressStore.toggleThematicWordLearned(item.key)"
                  :title="$t('dictionary.markAsLearned')"
                  type="button"
                >
                  <i :class="progressStore.isThematicWordLearned(item.key) ? 'pi pi-check-circle' : 'pi pi-circle'"></i>
                </button>
              </div>
              <p class="tw-translation">{{ item.translation }}</p>
              <div v-if="coreWordSet.has(item.word.toLowerCase())" class="tw-badges">
                <span class="core-badge">{{ $t('dictionary.thematic.coreBadge') }}</span>
              </div>
              <p v-if="item.note" class="tw-note">{{ item.note }}</p>
              <div v-if="item.example" class="tw-example">
                <span class="tw-ex-id">{{ item.example.sentence }}</span>
                <button class="audio-btn-inline" @click="speak(item.example.sentence)" type="button">🔊</button>
                <span class="tw-ex-ru">— {{ item.example.translation }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Theme Flashcards -->
        <div v-else class="flashcards-section fade-in">
          <div class="flashcards-controls">
            <div class="flashcard-filters">
              <select v-model="thematicCardFilter" class="form-input">
                <option value="unlearned">{{ $t('dictionary.flashcards.filterUnlearned') }}</option>
                <option value="all">{{ $t('dictionary.flashcards.filterAll') }}</option>
              </select>
            </div>

            <div class="direction-bar">
              <div class="direction-pills">
                <button
                  class="dir-pill"
                  :class="{ active: thematicCardDirection === 'targetToNative' }"
                  @click="thematicCardDirection = 'targetToNative'; thematicCardFlipped = false"
                  type="button"
                >
                  {{ langStore.targetLang.toUpperCase() }} → {{ langStore.interfaceLang.toUpperCase() }}
                </button>
                <button
                  class="dir-pill"
                  :class="{ active: thematicCardDirection === 'nativeToTarget' }"
                  @click="thematicCardDirection = 'nativeToTarget'; thematicCardFlipped = false"
                  type="button"
                >
                  {{ langStore.interfaceLang.toUpperCase() }} → {{ langStore.targetLang.toUpperCase() }}
                </button>
                <button
                  class="dir-pill"
                  :class="{ active: thematicCardDirection === 'mixed' }"
                  @click="thematicCardDirection = 'mixed'; thematicCardFlipped = false"
                  type="button"
                >
                  {{ $t('dictionary.flashcards.directionMixed') }}
                </button>
              </div>

              <button class="btn btn-outline btn-sm" @click="buildThematicDeck(true)" type="button">
                <i class="pi pi-sync"></i>
                <span>{{ $t('dictionary.flashcards.shuffle') }}</span>
              </button>
            </div>
          </div>

          <div v-if="currentThematicCard" class="flashcard-stage">
            <div class="flashcard-meta-bar">
              <span>
                {{
                  $t('dictionary.flashcards.progress', {
                    current: thematicCardIndex + 1,
                    total: thematicDeck.length,
                  })
                }}
              </span>
              <span class="session-tally">
                <span class="tally-good">✓ {{ thematicKnownCount }}</span>
                <span v-if="thematicRepeatCount > 0" class="tally-repeat">↻ {{ thematicRepeatCount }}</span>
              </span>
            </div>

            <div class="flashcard-progress">
              <div
                class="flashcard-progress-fill"
                :style="{ width: ((thematicCardIndex + 1) / thematicDeck.length) * 100 + '%' }"
              ></div>
            </div>

            <div
              class="flashcard-card"
              :class="{ flipped: thematicCardFlipped }"
              @click="thematicCardFlipped = !thematicCardFlipped"
            >
              <div class="flashcard-inner">
                <div class="flashcard-face flashcard-front">
                  <span class="card-cat-badge">
                    {{ activeTheme.icon }} {{ langStore.interfaceLang === 'ru' ? activeTheme.titleRu : activeTheme.titleId }}
                  </span>

                  <img
                    v-if="currentThematicCard.image"
                    :src="resolveAsset(currentThematicCard.image)"
                    :alt="currentThematicCard.word"
                    class="fc-dish-photo"
                  />

                  <template v-if="!isThematicCardReversed">
                    <div class="card-word">{{ currentThematicCard.word }}</div>
                    <div class="card-pronunciation">{{ currentThematicCard.pronunciation }}</div>
                    <div class="card-audio-row">
                      <button
                        class="audio-btn card-audio"
                        @click.stop="speak(currentThematicCard.word)"
                        type="button"
                      >
                        🔊
                      </button>
                      <button
                        class="audio-btn card-audio"
                        @click.stop="speakSlow(currentThematicCard.word)"
                        :title="$t('sound.slow')"
                        type="button"
                      >
                        🐢
                      </button>
                    </div>
                  </template>

                  <template v-else>
                    <span class="card-recall-label">{{ $t('dictionary.flashcards.recallPrompt') }}</span>
                    <div class="card-word">{{ currentThematicCard.translation }}</div>
                  </template>

                  <span class="flip-hint">{{ $t('dictionary.flashcards.flip') }}</span>
                </div>

                <div class="flashcard-face flashcard-back">
                  <template v-if="!isThematicCardReversed">
                    <div class="card-translation">{{ currentThematicCard.translation }}</div>
                  </template>
                  <template v-else>
                    <div class="card-translation">{{ currentThematicCard.word }}</div>
                    <div class="card-pronunciation">{{ currentThematicCard.pronunciation }}</div>
                    <div class="card-audio-row">
                      <button
                        class="audio-btn card-audio"
                        @click.stop="speak(currentThematicCard.word)"
                        type="button"
                      >
                        🔊
                      </button>
                      <button
                        class="audio-btn card-audio"
                        @click.stop="speakSlow(currentThematicCard.word)"
                        :title="$t('sound.slow')"
                        type="button"
                      >
                        🐢
                      </button>
                    </div>
                  </template>

                  <p v-if="currentThematicCard.note" class="tw-note">{{ currentThematicCard.note }}</p>

                  <div v-if="currentThematicCard.example" class="card-example-box" @click.stop>
                    <div class="card-example-line">
                      <strong>{{ currentThematicCard.example.sentence }}</strong>
                      <button
                        class="audio-btn-inline"
                        @click="speak(currentThematicCard.example.sentence)"
                        type="button"
                      >
                        🔊
                      </button>
                    </div>
                    <div class="card-example-tr">{{ currentThematicCard.example.translation }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flashcard-actions">
              <button class="btn-repeat" @click="rateThematicCard(false)" type="button">
                <i class="pi pi-replay"></i>
                <span>{{ $t('dictionary.flashcards.repeat') }}</span>
              </button>
              <button class="btn-know" @click="rateThematicCard(true)" type="button">
                <i class="pi pi-check"></i>
                <span>{{ $t('dictionary.flashcards.know') }}</span>
              </button>
            </div>

            <p class="keyboard-hint">{{ $t('dictionary.flashcards.keyboardHint') }}</p>
          </div>

          <div v-else-if="thematicSessionFinished" class="empty-flashcards content-card">
            <div class="finished-icon"><i class="pi pi-trophy"></i></div>
            <h3>{{ $t('dictionary.flashcards.finished') }}</h3>
            <p class="finished-stats">
              {{
                $t('dictionary.flashcards.sessionSummary', {
                  known: thematicKnownCount,
                  repeated: thematicRepeatCount,
                })
              }}
            </p>
            <button class="btn btn-primary" @click="buildThematicDeck(true)" type="button">
              {{ $t('dictionary.flashcards.restart') }}
            </button>
          </div>
        </div>
      </template>
    </section>

    <!-- ================= FLASHCARDS MODE ================= -->
    <section v-else-if="viewMode === 'flashcards'" class="flashcards-section fade-in">
      <div class="flashcards-controls">
        <div class="flashcard-filters">
          <select v-model="flashcardFilter" class="form-input">
            <option value="due">{{ $t('dictionary.flashcards.filterDue', { count: dueCount }) }}</option>
            <option value="unlearned">{{ $t('dictionary.flashcards.filterUnlearned') }}</option>
            <option value="all">{{ $t('dictionary.flashcards.filterAll') }}</option>
            <option value="favorite">{{ $t('dictionary.flashcards.filterFavorites') }}</option>
          </select>

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
        </div>

        <div class="direction-bar">
          <div class="direction-pills">
            <button
              class="dir-pill"
              :class="{ active: cardDirection === 'targetToNative' }"
              @click="cardDirection = 'targetToNative'; isCardFlipped = false"
              type="button"
            >
              {{ langStore.targetLang.toUpperCase() }} → {{ langStore.interfaceLang.toUpperCase() }}
            </button>
            <button
              class="dir-pill"
              :class="{ active: cardDirection === 'nativeToTarget' }"
              @click="cardDirection = 'nativeToTarget'; isCardFlipped = false"
              type="button"
            >
              {{ langStore.interfaceLang.toUpperCase() }} → {{ langStore.targetLang.toUpperCase() }}
            </button>
            <button
              class="dir-pill"
              :class="{ active: cardDirection === 'mixed' }"
              @click="cardDirection = 'mixed'; isCardFlipped = false"
              type="button"
            >
              {{ $t('dictionary.flashcards.directionMixed') }}
            </button>
          </div>

          <button class="btn btn-outline btn-sm" @click="shuffleFlashcards" type="button">
            <i class="pi pi-sync"></i>
            <span>{{ $t('dictionary.flashcards.shuffle') }}</span>
          </button>
        </div>
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
                <template v-if="!isCurrentCardReversed">
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
                    <button
                      class="audio-btn slow-btn"
                      @click.stop="speakSlow(currentFlashcard.word)"
                      :title="$t('sound.slow')"
                      type="button"
                    >
                      🐢
                    </button>
                  </h2>
                  <p class="word-pronunciation" v-if="currentFlashcard.pronunciation">
                    {{ currentFlashcard.pronunciation }}
                  </p>
                </template>
                <template v-else>
                  <span class="recall-badge">{{ $t('dictionary.flashcards.recallPrompt') }}</span>
                  <h2 class="card-word card-word-native">{{ currentFlashcard.translation }}</h2>
                </template>
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
                <h3 class="card-word-small" :class="{ 'card-word-highlight': isCurrentCardReversed }">
                  <span>{{ currentFlashcard.word }}</span>
                  <button
                    class="audio-btn"
                    @click.stop="speak(currentFlashcard.word)"
                    title="🔊"
                    type="button"
                  >
                    🔊
                  </button>
                  <button
                    class="audio-btn slow-btn"
                    @click.stop="speakSlow(currentFlashcard.word)"
                    :title="$t('sound.slow')"
                    type="button"
                  >
                    🐢
                  </button>
                </h3>
                <p v-if="isCurrentCardReversed && currentFlashcard.pronunciation" class="word-pronunciation">
                  {{ currentFlashcard.pronunciation }}
                </p>
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

        <!-- SRS Rating Actions -->
        <div class="flashcard-actions srs-actions">
          <button
            class="btn btn-outline btn-sm prev-btn"
            @click="prevCard"
            :disabled="flashcardIndex === 0"
            type="button"
          >
            <i class="pi pi-arrow-left"></i>
          </button>

          <button class="btn srs-btn btn-repeat" @click="handleCardRate('again')" type="button">
            <span class="srs-btn-label">{{ $t('dictionary.flashcards.srsAgain') }}</span>
            <span class="srs-btn-sub">{{ $t('dictionary.flashcards.srsNow') }}</span>
          </button>

          <button class="btn srs-btn btn-hard" @click="handleCardRate('hard')" type="button">
            <span class="srs-btn-label">{{ $t('dictionary.flashcards.srsHard') }}</span>
            <span class="srs-btn-sub">{{ $t('dictionary.flashcards.srsDays', { n: getPreviewDays('hard') }) }}</span>
          </button>

          <button class="btn srs-btn btn-know" @click="handleCardRate('good')" type="button">
            <span class="srs-btn-label">{{ $t('dictionary.flashcards.srsGood') }}</span>
            <span class="srs-btn-sub">{{ $t('dictionary.flashcards.srsDays', { n: getPreviewDays('good') }) }}</span>
          </button>
        </div>

        <p class="keyboard-hint">{{ $t('dictionary.flashcards.srsKeyboardHint') }}</p>
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

    <!-- Photo Lightbox Dialog -->
    <PDialog
      :visible="Boolean(previewPhotoWord)"
      @update:visible="(v: boolean) => { if (!v) previewPhotoWord = null; }"
      modal
      :header="previewPhotoWord?.word || ''"
      :style="{ width: '560px', maxWidth: '94vw' }"
    >
      <div v-if="previewPhotoWord" class="photo-lightbox-body">
        <img
          v-if="previewPhotoWord.image"
          :src="resolveAsset(previewPhotoWord.image)"
          :alt="previewPhotoWord.word"
          class="lightbox-photo"
        />
        <div class="lightbox-meta">
          <div class="tw-title-row">
            <strong class="tw-word">{{ previewPhotoWord.word }}</strong>
            <button class="audio-btn-sm" @click="speak(previewPhotoWord.word)" type="button">🔊</button>
            <button class="audio-btn-sm" @click="speakSlow(previewPhotoWord.word)" :title="$t('sound.slow')" type="button">🐢</button>
            <span class="tw-pron">{{ previewPhotoWord.pronunciation }}</span>
          </div>
          <p class="tw-translation">{{ previewPhotoWord.translation }}</p>
          <p v-if="previewPhotoWord.note" class="tw-note">{{ previewPhotoWord.note }}</p>
          <div v-if="previewPhotoWord.example" class="tw-example">
            <span class="tw-ex-id">{{ previewPhotoWord.example.sentence }}</span>
            <button class="audio-btn-inline" @click="speak(previewPhotoWord.example.sentence)" type="button">🔊</button>
            <span class="tw-ex-ru">— {{ previewPhotoWord.example.translation }}</span>
          </div>
        </div>
      </div>
    </PDialog>

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
  background: var(--primary-solid);
  color: var(--primary-on-solid);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.28);
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
  flex-direction: column;
  gap: 0.75rem;
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

.direction-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.direction-pills {
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.22rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.dir-pill {
  padding: 0.34rem 0.85rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.16s ease;
}

.dir-pill.active {
  background: var(--primary-solid);
  color: var(--primary-on-solid);
}

.recall-badge {
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
  background: var(--primary-soft);
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
}

.card-word-native {
  color: var(--translation-color);
  font-size: 1.65rem;
}

.card-word-highlight {
  font-size: 1.75rem !important;
  color: var(--text-h) !important;
}

.srs-actions {
  align-items: stretch;
}

.srs-btn {
  flex: 1;
  flex-direction: column;
  gap: 0.12rem;
  padding: 0.6rem 0.75rem;
}

.srs-btn-label {
  font-size: 0.92rem;
  font-weight: 700;
}

.srs-btn-sub {
  font-size: 0.72rem;
  opacity: 0.82;
  font-weight: 500;
}

.btn-hard {
  background: var(--primary-soft);
  color: var(--primary);
  border-color: var(--primary-soft-strong);
}

.btn-hard:hover {
  background: var(--primary-solid);
  color: var(--primary-on-solid);
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
  background: var(--warning-solid);
  color: #ffffff;
}

.btn-know {
  flex: 1;
  background: var(--success-soft);
  color: var(--success);
  border-color: rgba(22, 163, 74, 0.3);
}

.btn-know:hover {
  background: var(--success-solid);
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

/* Thematic Dictionaries */
.mode-count-pill {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.08rem 0.45rem;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary);
}

.mode-btn.active .mode-count-pill {
  background: rgba(255, 255, 255, 0.22);
  color: var(--primary-on-solid);
}

.thematic-intro-bar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.thematic-subtitle {
  margin: 0 0 0.45rem;
  font-size: 0.94rem;
  color: var(--muted);
  max-width: 560px;
}

.thematic-total-pill {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.22rem 0.7rem;
  border-radius: 999px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-h);
}

.thematic-search-box {
  min-width: 260px;
  flex: 1;
  max-width: 340px;
}

.themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 1rem;
}

.theme-card {
  text-align: left;
  background: var(--bg-card);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  cursor: pointer;
  transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
  box-shadow: var(--shadow-xs);
}

.theme-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.theme-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.theme-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.45rem;
  background: var(--primary-soft);
  flex-shrink: 0;
}

.theme-icon.lg {
  width: 54px;
  height: 54px;
  font-size: 1.8rem;
}

.theme-icon.amber { background: rgba(245, 158, 11, 0.15); }
.theme-icon.emerald { background: rgba(16, 185, 129, 0.15); }
.theme-icon.sky { background: rgba(14, 165, 233, 0.15); }
.theme-icon.orange { background: rgba(249, 115, 22, 0.15); }
.theme-icon.rose { background: rgba(244, 63, 94, 0.15); }
.theme-icon.indigo { background: rgba(99, 102, 241, 0.15); }
.theme-icon.teal { background: rgba(20, 184, 166, 0.15); }
.theme-icon.violet { background: rgba(139, 92, 246, 0.15); }
.theme-icon.pink { background: rgba(236, 72, 153, 0.15); }

.theme-count-chip {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
}

.theme-card h3 {
  margin: 0.15rem 0 0;
  font-size: 1.08rem;
  color: var(--text-h);
}

.theme-desc {
  margin: 0;
  font-size: 0.86rem;
  color: var(--muted);
  line-height: 1.45;
  flex: 1;
}

.theme-progress-wrap {
  margin-top: 0.35rem;
}

.theme-progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 0.3rem;
}

.theme-progress-label strong {
  color: var(--primary);
}

.theme-progress-bar {
  height: 6px;
  border-radius: 999px;
  background: var(--bg-subtle);
  overflow: hidden;
}

.theme-progress-fill {
  height: 100%;
  border-radius: 999px;
  background: var(--primary-solid);
  transition: width 0.25s ease;
}

.theme-detail-nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.theme-pills {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  flex: 1;
}

.theme-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.32rem 0.68rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.theme-pill:hover {
  border-color: var(--primary);
}

.theme-pill.active {
  background: var(--primary-solid);
  border-color: var(--primary-solid);
  color: var(--primary-on-solid);
}

.theme-detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.15rem;
}

.tdh-left {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.tdh-left h2 {
  margin: 0 0 0.2rem;
  font-size: 1.35rem;
}

.tdh-desc {
  margin: 0 0 0.4rem;
  font-size: 0.9rem;
  color: var(--muted);
}

.tdh-progress-pill {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.18rem 0.6rem;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary);
}

.tdh-mode-toggle {
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.24rem;
  border-radius: 999px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
}

.theme-list-controls {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.theme-list-controls .search-box {
  flex: 1;
  min-width: 220px;
}

.theme-status-select {
  width: auto;
  min-width: 170px;
}

.thematic-words-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 0.85rem;
}

.thematic-word-card {
  background: var(--bg-card);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
  transition: border-color 0.16s ease;
}

.thematic-word-card.learned {
  border-color: rgba(22, 163, 74, 0.4);
}

.tw-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}

.tw-title-row {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.tw-word {
  font-family: var(--font-display);
  font-size: 1.08rem;
  color: var(--text-h);
}

.tw-pron {
  font-size: 0.82rem;
  color: var(--muted);
  font-style: italic;
}

.tw-translation {
  margin: 0;
  font-size: 0.96rem;
  color: var(--translation-color);
  font-weight: 500;
}

.tw-badges {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.theme-origin-pill {
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--bg-subtle);
  color: var(--text);
  cursor: pointer;
}

.theme-origin-pill:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.core-badge {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.14rem 0.5rem;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary);
}

.tw-note {
  margin: 0;
  font-size: 0.82rem;
  color: var(--muted);
  font-style: italic;
}

.tw-example {
  margin-top: 0.2rem;
  padding-top: 0.45rem;
  border-top: 1px dashed var(--border);
  font-size: 0.84rem;
  line-height: 1.45;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.3rem;
}

.tw-ex-id {
  color: var(--text-h);
  font-weight: 600;
}

.tw-ex-ru {
  color: var(--muted);
}

.theme-top-badges {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.photo-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--primary);
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: var(--primary-soft);
}

.tw-photo-wrap {
  margin: -1rem -1.1rem 0.55rem -1.1rem;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: calc(var(--radius-md) - 2px) calc(var(--radius-md) - 2px) 0 0;
  background: var(--bg-subtle);
  cursor: zoom-in;
}

.tw-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.28s ease;
}

.tw-photo-wrap:hover .tw-photo {
  transform: scale(1.04);
}

.fc-dish-photo {
  width: 190px;
  height: 128px;
  object-fit: cover;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--border);
  box-shadow: var(--shadow-xs);
  margin-bottom: 0.25rem;
}

.photo-lightbox-body {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.lightbox-photo {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-md);
  display: block;
}

.lightbox-meta {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
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
