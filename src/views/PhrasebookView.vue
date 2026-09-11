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
import {
  dialoguesId,
  dialoguesRu,
  type DialogueItem,
  type DialogueLine,
} from "../data/dialogues";

const langStore = useLanguageStore();
const { speak } = useSpeech();

// Active section: 'phrases' | 'dialogues'
const activeSection = ref<"phrases" | "dialogues">("phrases");

const selectedCategory = ref<string>("all");
const searchQuery = ref<string>("");
const favoritesOnly = ref<boolean>(false);
const favoriteIds = ref<number[]>([]);

// Dialogues playback state
const playingDialogueId = ref<string | null>(null);
const currentPlayingLineIndex = ref<number>(-1);
let dialogueTimeout: any = null;

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

const currentDialogues = computed<DialogueItem[]>(() => {
  return langStore.targetLang === "id" ? dialoguesId : dialoguesRu;
});

const filteredDialogues = computed<DialogueItem[]>(() => {
  let list = currentDialogues.value;

  if (selectedCategory.value !== "all") {
    list = list.filter((d) => d.category === selectedCategory.value);
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim();
    list = list.filter(
      (d) =>
        d.titleRu.toLowerCase().includes(q) ||
        d.titleId.toLowerCase().includes(q) ||
        d.descriptionRu.toLowerCase().includes(q) ||
        d.descriptionId.toLowerCase().includes(q) ||
        d.lines.some(
          (l) =>
            l.text.toLowerCase().includes(q) ||
            l.translation.toLowerCase().includes(q),
        ),
    );
  }

  return list;
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
  stopDialogueAudio();
  speak(phrase);
}

function stopDialogueAudio() {
  if (dialogueTimeout) {
    clearTimeout(dialogueTimeout);
    dialogueTimeout = null;
  }
  playingDialogueId.value = null;
  currentPlayingLineIndex.value = -1;
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function playWholeDialogue(dialogue: DialogueItem) {
  if (playingDialogueId.value === dialogue.id) {
    stopDialogueAudio();
    return;
  }

  stopDialogueAudio();
  playingDialogueId.value = dialogue.id;
  currentPlayingLineIndex.value = 0;

  function step(index: number) {
    if (playingDialogueId.value !== dialogue.id || index >= dialogue.lines.length) {
      stopDialogueAudio();
      return;
    }
    currentPlayingLineIndex.value = index;
    const line = dialogue.lines[index];
    speak(line.text);

    // Approximate duration from length of line text, minimum 2.5s
    const wordCount = line.text.split(/\s+/).length;
    const estimatedMs = Math.max(2600, wordCount * 550);

    dialogueTimeout = setTimeout(() => {
      step(index + 1);
    }, estimatedMs);
  }

  step(0);
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
          <span class="stat-number">{{ currentDialogues.length }}</span>
          <span class="stat-name">{{ $t('phrasebook.tabs.dialogues') }}</span>
        </div>
        <div class="stat-box">
          <span class="stat-number">{{ favoriteIds.length }}</span>
          <span class="stat-name">{{ $t('phrasebook.stats.favorites') }}</span>
        </div>
      </div>
    </header>

    <!-- Main Section Switcher: Phrases vs Dialogues -->
    <div class="section-switch-wrap">
      <div class="section-switch">
        <button
          class="section-btn"
          :class="{ active: activeSection === 'phrases' }"
          @click="activeSection = 'phrases'; stopDialogueAudio()"
        >
          <span>💬</span>
          <span>{{ $t('phrasebook.tabs.phrases') }}</span>
          <span class="count-pill">{{ currentPhrases.length }}</span>
        </button>
        <button
          class="section-btn"
          :class="{ active: activeSection === 'dialogues' }"
          @click="activeSection = 'dialogues'"
        >
          <span>🎭</span>
          <span>{{ $t('phrasebook.tabs.dialogues') }}</span>
          <span class="count-pill">{{ currentDialogues.length }}</span>
        </button>
      </div>
    </div>

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
        v-if="activeSection === 'phrases'"
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
    <div class="category-tabs-wrap">
      <div class="category-tabs">
        <button
          v-for="cat in phraseCategories"
          :key="cat.id"
          class="cat-tab-btn"
          :class="{ active: selectedCategory === cat.id }"
          @click="selectedCategory = cat.id; stopDialogueAudio()"
        >
          <span class="cat-icon">{{ cat.icon }}</span>
          <span class="cat-label">{{ langStore.interfaceLang === 'ru' ? cat.titleRu : cat.titleId }}</span>
        </button>
      </div>
    </div>

    <!-- ================= SECTION 1: PHRASES ================= -->
    <div v-if="activeSection === 'phrases'">
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

    <!-- ================= SECTION 2: DIALOGUES ================= -->
    <div v-else-if="activeSection === 'dialogues'" class="dialogues-section fade-in">
      <div v-if="filteredDialogues.length > 0" class="dialogues-stack">
        <div
          v-for="d in filteredDialogues"
          :key="d.id"
          class="dialogue-card"
          :class="{ 'dialogue-playing': playingDialogueId === d.id }"
        >
          <div class="dialogue-header">
            <div class="dialogue-meta-left">
              <div class="dialogue-icon">{{ d.icon }}</div>
              <div>
                <h3 class="dialogue-title">
                  {{ langStore.interfaceLang === 'ru' ? d.titleRu : d.titleId }}
                </h3>
                <p class="dialogue-desc">
                  {{ langStore.interfaceLang === 'ru' ? d.descriptionRu : d.descriptionId }}
                </p>
              </div>
            </div>

            <div class="dialogue-header-actions">
              <span class="dialogue-lines-badge">
                {{ $t('phrasebook.dialogue.linesCount', { count: d.lines.length }) }}
              </span>
              <button
                class="dialogue-play-all-btn"
                :class="{ active: playingDialogueId === d.id }"
                @click="playWholeDialogue(d)"
                :title="playingDialogueId === d.id ? $t('phrasebook.dialogue.stopAudio') : $t('phrasebook.dialogue.playAll')"
              >
                <span>{{ playingDialogueId === d.id ? '⏹️' : '▶️' }}</span>
                <span>{{ playingDialogueId === d.id ? $t('phrasebook.dialogue.stopAudio') : $t('phrasebook.dialogue.playAll') }}</span>
              </button>
            </div>
          </div>

          <!-- Chat-style lines in the dialogue -->
          <div class="dialogue-chat">
            <div
              v-for="(line, lidx) in d.lines"
              :key="lidx"
              class="chat-bubble-row"
              :class="[
                line.speaker === 'A' ? 'speaker-a' : 'speaker-b',
                { 'active-speech-line': playingDialogueId === d.id && currentPlayingLineIndex === lidx }
              ]"
            >
              <div class="speaker-avatar" :title="langStore.interfaceLang === 'ru' ? (line.speakerRoleRu || line.speaker) : (line.speakerRoleId || line.speaker)">
                {{ line.avatar || (line.speaker === 'A' ? '👤' : '👥') }}
              </div>

              <div class="chat-bubble">
                <div class="bubble-speaker-name">
                  {{ langStore.interfaceLang === 'ru' ? (line.speakerRoleRu || line.speaker) : (line.speakerRoleId || line.speaker) }}
                </div>

                <div class="bubble-target-text">
                  <span>{{ line.text }}</span>
                  <button
                    class="bubble-speak-btn"
                    @click.stop="stopDialogueAudio(); speak(line.text)"
                    title="Прослушать реплику"
                  >
                    🔊
                  </button>
                </div>

                <div v-if="line.pronunciation" class="bubble-pron">
                  {{ line.pronunciation }}
                </div>

                <div class="bubble-translation">
                  {{ line.translation }}
                </div>

                <div v-if="line.note" class="bubble-note">
                  💡 {{ line.note }}
                </div>
              </div>
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
          @click="searchQuery = ''; selectedCategory = 'all'"
        >
          {{ $t('phrasebook.resetFilters') }}
        </button>
      </div>
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
.category-tabs-wrap {
  margin-bottom: 1.75rem;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cat-tab-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.5rem 0.95rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1;
}

.cat-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  line-height: 1;
  transform: translateY(-0.5px);
}

.cat-label {
  display: inline-flex;
  align-items: center;
  line-height: 1.2;
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

/* Section Switcher */
.section-switch-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.section-switch {
  display: inline-flex;
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0.35rem;
  gap: 0.4rem;
}

.section-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.section-btn:hover {
  color: var(--text-h);
}

.section-btn.active {
  background: var(--bg);
  color: var(--primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.count-pill {
  font-size: 0.8rem;
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
  background: var(--border);
  color: var(--text);
  font-weight: 700;
}

.section-btn.active .count-pill {
  background: rgba(34, 197, 94, 0.15);
  color: var(--primary);
}

/* Dialogues Section */
.dialogues-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.dialogue-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
}

.dialogue-card.dialogue-playing {
  border-color: var(--primary);
  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.15);
}

.dialogue-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}

.dialogue-meta-left {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  max-width: 650px;
}

.dialogue-icon {
  font-size: 2rem;
  line-height: 1;
  background: var(--code-bg);
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dialogue-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-h);
  margin-bottom: 0.25rem;
}

.dialogue-desc {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.35;
}

.dialogue-header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.dialogue-lines-badge {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--muted);
  background: var(--code-bg);
  padding: 0.35rem 0.65rem;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.dialogue-play-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1rem;
  background: var(--primary-gradient);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dialogue-play-all-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.dialogue-play-all-btn.active {
  background: #ef4444;
}

/* Chat Bubbles in Dialogue */
.dialogue-chat {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
}

.chat-bubble-row {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  transition: all 0.25s ease;
}

.chat-bubble-row.speaker-a {
  align-self: flex-start;
  max-width: 88%;
}

.chat-bubble-row.speaker-b {
  align-self: flex-end;
  flex-direction: row-reverse;
  max-width: 88%;
}

.speaker-avatar {
  font-size: 1.4rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--code-bg);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chat-bubble {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.85rem 1.1rem;
  position: relative;
  transition: all 0.2s ease;
}

.speaker-a .chat-bubble {
  border-top-left-radius: 2px;
}

.speaker-b .chat-bubble {
  border-top-right-radius: 2px;
  background: rgba(34, 197, 94, 0.08);
  border-color: rgba(34, 197, 94, 0.25);
}

.active-speech-line .chat-bubble {
  border-color: var(--primary);
  background: rgba(34, 197, 94, 0.16);
  transform: scale(1.02);
  box-shadow: 0 4px 14px rgba(34, 197, 94, 0.2);
}

.bubble-speaker-name {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.25rem;
}

.speaker-b .bubble-speaker-name {
  color: var(--primary);
  text-align: right;
}

.bubble-target-text {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-h);
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
  line-height: 1.35;
  margin-bottom: 0.25rem;
}

.bubble-speak-btn {
  background: none;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.1rem 0.2rem;
  opacity: 0.55;
  transition: all 0.2s;
  line-height: 1;
}

.bubble-speak-btn:hover {
  opacity: 1;
  transform: scale(1.2);
}

.bubble-pron {
  font-size: 0.85rem;
  color: var(--muted);
  font-style: italic;
  margin-bottom: 0.35rem;
}

.bubble-translation {
  font-size: 0.95rem;
  color: var(--translation-color, var(--text));
  font-weight: 500;
  line-height: 1.35;
}

.bubble-note {
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.35rem;
  padding-top: 0.35rem;
  border-top: 1px dashed var(--border);
  font-style: italic;
}

@media (max-width: 640px) {
  .phrasebook-header h1 {
    font-size: 1.75rem;
  }
  .phrases-grid {
    grid-template-columns: 1fr;
  }
  .dialogue-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .chat-bubble-row.speaker-a,
  .chat-bubble-row.speaker-b {
    max-width: 100%;
  }
}
</style>
