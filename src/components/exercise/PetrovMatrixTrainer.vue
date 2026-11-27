<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useSpeech } from "../../composables/useSpeech";
import { useProgressStore } from "../../stores/progress";
import { evaluateTextAnswer } from "../../utils/textMatch";

const { speak, speakSlow } = useSpeech();
const progressStore = useProgressStore();

interface SubjectItem {
  id: string;
  ru: string;
  ruPerson: "1s" | "2s" | "2p" | "3s" | "1p" | "3p";
  note?: string;
}

interface ActionItem {
  id: string;
  ruInf: string;
  ruPres: Record<SubjectItem["ruPerson"], string>;
  ruPast: Record<SubjectItem["ruPerson"], string>;
  ruObj: string;
}

interface MatrixPrompt {
  promptRu: string;
  expectedId: string;
  tokens: string[];
  tiles: string[];
  formula: string;
  tip: string;
}

const subjects: SubjectItem[] = [
  { id: "Saya", ru: "Я", ruPerson: "1s" },
  { id: "Kamu", ru: "Ты", ruPerson: "2s" },
  { id: "Anda", ru: "Вы", ruPerson: "2p", note: "Anda — вежливое «Вы»" },
  { id: "Dia", ru: "Он", ruPerson: "3s" },
  { id: "Kita", ru: "Мы (вместе с вами)", ruPerson: "1p", note: "Kita включает собеседника" },
  { id: "Kami", ru: "Мы (без вас)", ruPerson: "1p", note: "Kami исключает собеседника" },
  { id: "Mereka", ru: "Они", ruPerson: "3p" },
];

const actions: ActionItem[] = [
  {
    id: "makan nasi",
    ruInf: "есть",
    ruPres: { "1s": "ем", "2s": "ешь", "2p": "едите", "3s": "ест", "1p": "едим", "3p": "едят" },
    ruPast: { "1s": "поел", "2s": "поел", "2p": "поели", "3s": "поел", "1p": "поели", "3p": "поели" },
    ruObj: "рис",
  },
  {
    id: "minum kopi",
    ruInf: "пить",
    ruPres: { "1s": "пью", "2s": "пьёшь", "2p": "пьёте", "3s": "пьёт", "1p": "пьём", "3p": "пьют" },
    ruPast: { "1s": "выпил", "2s": "выпил", "2p": "выпили", "3s": "выпил", "1p": "выпили", "3p": "выпили" },
    ruObj: "кофе",
  },
  {
    id: "minum air",
    ruInf: "пить",
    ruPres: { "1s": "пью", "2s": "пьёшь", "2p": "пьёте", "3s": "пьёт", "1p": "пьём", "3p": "пьют" },
    ruPast: { "1s": "выпил", "2s": "выпил", "2p": "выпили", "3s": "выпил", "1p": "выпили", "3p": "выпили" },
    ruObj: "воду",
  },
  {
    id: "pergi ke pasar",
    ruInf: "идти",
    ruPres: { "1s": "иду", "2s": "идёшь", "2p": "идёте", "3s": "идёт", "1p": "идём", "3p": "идут" },
    ruPast: { "1s": "пошёл", "2s": "пошёл", "2p": "пошли", "3s": "пошёл", "1p": "пошли", "3p": "пошли" },
    ruObj: "на рынок",
  },
  {
    id: "bekerja di kantor",
    ruInf: "работать",
    ruPres: { "1s": "работаю", "2s": "работаешь", "2p": "работаете", "3s": "работает", "1p": "работаем", "3p": "работают" },
    ruPast: { "1s": "работал", "2s": "работал", "2p": "работали", "3s": "работал", "1p": "работали", "3p": "работали" },
    ruObj: "в офисе",
  },
  {
    id: "belajar bahasa Indonesia",
    ruInf: "учить",
    ruPres: { "1s": "учу", "2s": "учишь", "2p": "учите", "3s": "учит", "1p": "учим", "3p": "учат" },
    ruPast: { "1s": "учил", "2s": "учил", "2p": "учили", "3s": "учил", "1p": "учили", "3p": "учили" },
    ruObj: "индонезийский язык",
  },
  {
    id: "membaca buku",
    ruInf: "читать",
    ruPres: { "1s": "читаю", "2s": "читаешь", "2p": "читаете", "3s": "читает", "1p": "читаем", "3p": "читают" },
    ruPast: { "1s": "прочитал", "2s": "прочитал", "2p": "прочитали", "3s": "прочитал", "1p": "прочитали", "3p": "прочитали" },
    ruObj: "книгу",
  },
  {
    id: "membeli buah",
    ruInf: "покупать",
    ruPres: { "1s": "покупаю", "2s": "покупаешь", "2p": "покупаете", "3s": "покупает", "1p": "покупаем", "3p": "покупают" },
    ruPast: { "1s": "купил", "2s": "купил", "2p": "купили", "3s": "купил", "1p": "купили", "3p": "купили" },
    ruObj: "фрукты",
  },
  {
    id: "tidur di rumah",
    ruInf: "спать",
    ruPres: { "1s": "сплю", "2s": "спишь", "2p": "спите", "3s": "спит", "1p": "спим", "3p": "спят" },
    ruPast: { "1s": "спал", "2s": "спал", "2p": "спали", "3s": "спал", "1p": "спали", "3p": "спали" },
    ruObj: "дома",
  },
];

type AspectKey = "present" | "sudah" | "sedang" | "akan" | "tidak" | "belum" | "mau" | "bisa" | "harus";

const aspectList: AspectKey[] = [
  "present",
  "sudah",
  "sedang",
  "akan",
  "tidak",
  "belum",
  "mau",
  "bisa",
  "harus",
];

const aspectFilter = ref<"all" | "tenses" | "modals">("all");
const inputMode = ref<"tiles" | "typing">("tiles");
const currentPrompt = ref<MatrixPrompt | null>(null);
const selectedTiles = ref<number[]>([]);
const typedAnswer = ref("");
const checked = ref(false);
const isCorrect = ref(false);
const isTypoAccepted = ref(false);
const streak = ref(0);
const solvedCount = ref(0);

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function generatePrompt() {
  const subj = pickRandom(subjects);
  const act = pickRandom(actions);
  const pool: AspectKey[] =
    aspectFilter.value === "tenses"
      ? ["present", "sudah", "sedang", "akan", "tidak", "belum"]
      : aspectFilter.value === "modals"
        ? ["mau", "bisa", "harus", "tidak"]
        : aspectList;
  const aspect = pickRandom(pool);

  const p = subj.ruPerson;
  let idMarker = "";
  let ruSentence = "";
  let formula = "Подлежащее + глагол";
  let tip = subj.note || "В индонезийском глагол не меняется по лицам и временам.";

  const willMap: Record<SubjectItem["ruPerson"], string> = {
    "1s": "буду", "2s": "будешь", "2p": "будете", "3s": "будет", "1p": "будем", "3p": "будут",
  };
  const wantMap: Record<SubjectItem["ruPerson"], string> = {
    "1s": "хочу", "2s": "хочешь", "2p": "хотите", "3s": "хочет", "1p": "хотим", "3p": "хотят",
  };
  const canMap: Record<SubjectItem["ruPerson"], string> = {
    "1s": "могу", "2s": "можешь", "2p": "можете", "3s": "может", "1p": "можем", "3p": "могут",
  };
  const mustMap: Record<SubjectItem["ruPerson"], string> = {
    "1s": "должен", "2s": "должен", "2p": "должны", "3s": "должен", "1p": "должны", "3p": "должны",
  };

  switch (aspect) {
    case "present":
      ruSentence = `${subj.ru} ${act.ruPres[p]} ${act.ruObj}`;
      formula = `${subj.id} + ${act.id}`;
      break;
    case "sudah":
      idMarker = "sudah";
      ruSentence = `${subj.ru} уже ${act.ruPast[p]} ${act.ruObj}`;
      formula = `${subj.id} + sudah (уже) + глагол`;
      tip = "sudah ставится перед глаголом и показывает завершённое действие в прошлом.";
      break;
    case "sedang":
      idMarker = "sedang";
      ruSentence = `${subj.ru} сейчас ${act.ruPres[p]} ${act.ruObj}`;
      formula = `${subj.id} + sedang (в процессе) + глагол`;
      tip = "sedang указывает, что действие происходит прямо сейчас.";
      break;
    case "akan":
      idMarker = "akan";
      ruSentence = `${subj.ru} ${willMap[p]} ${act.ruInf} ${act.ruObj}`;
      formula = `${subj.id} + akan (будущее) + глагол`;
      tip = "akan выражает будущее время и всегда стоит перед глаголом.";
      break;
    case "tidak":
      idMarker = "tidak";
      ruSentence = `${subj.ru} не ${act.ruPres[p]} ${act.ruObj}`;
      formula = `${subj.id} + tidak (не) + глагол`;
      tip = "Для отрицания глаголов используется tidak (не bukan).";
      break;
    case "belum":
      idMarker = "belum";
      ruSentence = `${subj.ru} ещё не ${act.ruPast[p]} ${act.ruObj}`;
      formula = `${subj.id} + belum (ещё не) + глагол`;
      tip = "belum означает «ещё не» (действие не завершено, но ожидается).";
      break;
    case "mau":
      idMarker = "mau";
      ruSentence = `${subj.ru} ${wantMap[p]} ${act.ruInf} ${act.ruObj}`;
      formula = `${subj.id} + mau (хотеть) + глагол`;
      tip = "mau = хотеть / собираться сделать что-то.";
      break;
    case "bisa":
      idMarker = "bisa";
      ruSentence = `${subj.ru} ${canMap[p]} ${act.ruInf} ${act.ruObj}`;
      formula = `${subj.id} + bisa (мочь) + глагол`;
      tip = "bisa = мочь, уметь.";
      break;
    case "harus":
      idMarker = "harus";
      ruSentence = `${subj.ru} ${mustMap[p]} ${act.ruInf} ${act.ruObj}`;
      formula = `${subj.id} + harus (должен) + глагол`;
      tip = "harus = должен, обязан, нужно.";
      break;
  }

  const expectedId = [subj.id, idMarker, act.id].filter(Boolean).join(" ");
  const tokens = expectedId.split(" ");

  // Add 2-3 smart distractors (e.g. kita/kami, belum/tidak, sudah/akan)
  const distractors: string[] = [];
  if (subj.id === "Kita") distractors.push("Kami");
  else if (subj.id === "Kami") distractors.push("Kita");
  else distractors.push(pickRandom(subjects.filter((s) => s.id !== subj.id)).id);

  const markerDistractors = ["sudah", "sedang", "akan", "tidak", "belum", "mau", "bisa", "harus"].filter(
    (m) => m !== idMarker,
  );
  distractors.push(pickRandom(markerDistractors));
  if (tokens.length <= 4) {
    distractors.push(pickRandom(markerDistractors.filter((m) => !distractors.includes(m))));
  }

  currentPrompt.value = {
    promptRu: ruSentence,
    expectedId,
    tokens,
    tiles: shuffle([...tokens, ...distractors]),
    formula,
    tip: subj.note ? `${subj.note}. ${tip}` : tip,
  };

  selectedTiles.value = [];
  typedAnswer.value = "";
  checked.value = false;
  isCorrect.value = false;
  isTypoAccepted.value = false;
}

const assembledSentence = computed(() => {
  if (!currentPrompt.value) return "";
  return selectedTiles.value.map((idx) => currentPrompt.value!.tiles[idx]).join(" ");
});

function toggleTile(idx: number) {
  if (checked.value) return;
  const pos = selectedTiles.value.indexOf(idx);
  if (pos >= 0) {
    selectedTiles.value.splice(pos, 1);
  } else {
    selectedTiles.value.push(idx);
  }
}

function removeSelectedAt(pos: number) {
  if (checked.value) return;
  selectedTiles.value.splice(pos, 1);
}

function checkAnswer() {
  if (!currentPrompt.value) return;
  const answer = inputMode.value === "tiles" ? assembledSentence.value : typedAnswer.value;
  if (!answer.trim()) return;

  const result = evaluateTextAnswer(answer, currentPrompt.value.expectedId);
  isCorrect.value = result.isCorrect;
  isTypoAccepted.value = result.isTypoAccepted;
  checked.value = true;

  if (result.isCorrect) {
    streak.value++;
    solvedCount.value++;
    progressStore.addTimeSpent(0.2);
    speak(currentPrompt.value.expectedId);
  } else {
    streak.value = 0;
  }
}

onMounted(() => {
  generatePrompt();
});
</script>

<template>
  <div class="matrix-trainer fade-in" v-if="currentPrompt">
    <div class="matrix-toolbar">
      <div class="pill-group">
        <button
          class="pill-btn"
          :class="{ active: aspectFilter === 'all' }"
          @click="aspectFilter = 'all'; generatePrompt()"
          type="button"
        >
          {{ $t('matrix.filterAll') }}
        </button>
        <button
          class="pill-btn"
          :class="{ active: aspectFilter === 'tenses' }"
          @click="aspectFilter = 'tenses'; generatePrompt()"
          type="button"
        >
          {{ $t('matrix.filterTenses') }}
        </button>
        <button
          class="pill-btn"
          :class="{ active: aspectFilter === 'modals' }"
          @click="aspectFilter = 'modals'; generatePrompt()"
          type="button"
        >
          {{ $t('matrix.filterModals') }}
        </button>
      </div>

      <div class="pill-group">
        <button
          class="pill-btn"
          :class="{ active: inputMode === 'tiles' }"
          @click="inputMode = 'tiles'"
          type="button"
        >
          <i class="pi pi-th-large"></i>
          <span>{{ $t('matrix.modeTiles') }}</span>
        </button>
        <button
          class="pill-btn"
          :class="{ active: inputMode === 'typing' }"
          @click="inputMode = 'typing'"
          type="button"
        >
          <i class="pi pi-pencil"></i>
          <span>{{ $t('matrix.modeTyping') }}</span>
        </button>
      </div>
    </div>

    <div class="matrix-card">
      <div class="matrix-card-top">
        <span class="matrix-tag">{{ $t('matrix.badge') }}</span>
        <div class="matrix-stats">
          <span class="stat-badge">🔥 {{ streak }}</span>
          <span class="stat-badge">✓ {{ solvedCount }}</span>
        </div>
      </div>

      <p class="prompt-label">{{ $t('matrix.translatePrompt') }}</p>
      <h2 class="prompt-text">{{ currentPrompt.promptRu }}</h2>

      <!-- Word Tiles Mode -->
      <div v-if="inputMode === 'tiles'" class="tiles-workspace">
        <div class="answer-tray" :class="{ empty: selectedTiles.length === 0 }">
          <span v-if="selectedTiles.length === 0" class="tray-placeholder">
            {{ $t('matrix.tapWordsHint') }}
          </span>
          <button
            v-for="(tileIdx, pos) in selectedTiles"
            :key="`sel-${tileIdx}`"
            class="word-tile selected"
            @click="removeSelectedAt(pos)"
            :disabled="checked"
            type="button"
          >
            {{ currentPrompt.tiles[tileIdx] }}
          </button>
        </div>

        <div class="tiles-bank">
          <button
            v-for="(word, idx) in currentPrompt.tiles"
            :key="`bank-${idx}`"
            class="word-tile"
            :class="{ used: selectedTiles.includes(idx) }"
            :disabled="checked || selectedTiles.includes(idx)"
            @click="toggleTile(idx)"
            type="button"
          >
            {{ word }}
          </button>
        </div>
      </div>

      <!-- Typing Mode -->
      <div v-else class="typing-workspace">
        <input
          v-model="typedAnswer"
          type="text"
          class="form-input typing-input"
          :placeholder="$t('exercise.answerPlaceholder')"
          :disabled="checked"
          @keyup.enter="!checked ? checkAnswer() : generatePrompt()"
        />
      </div>

      <!-- Feedback -->
      <div
        v-if="checked"
        class="matrix-feedback fade-in"
        :class="{ correct: isCorrect, wrong: !isCorrect }"
      >
        <div class="fb-header">
          <strong>
            {{
              isCorrect
                ? isTypoAccepted
                  ? $t('exercise.feedback.typoAccepted')
                  : $t('exercise.feedback.correct')
                : $t('exercise.feedback.wrong')
            }}
          </strong>
          <div class="fb-audio">
            <button class="audio-btn" @click="speak(currentPrompt.expectedId)" type="button">🔊</button>
            <button class="audio-btn" @click="speakSlow(currentPrompt.expectedId)" :title="$t('sound.slow')" type="button">🐢</button>
          </div>
        </div>
        <p class="fb-expected">{{ currentPrompt.expectedId }}</p>
        <p class="fb-formula"><code>{{ currentPrompt.formula }}</code></p>
        <p class="fb-tip">{{ currentPrompt.tip }}</p>
      </div>

      <div class="matrix-actions">
        <button
          v-if="!checked"
          class="btn btn-primary btn-lg"
          :disabled="inputMode === 'tiles' ? selectedTiles.length === 0 : !typedAnswer.trim()"
          @click="checkAnswer"
          type="button"
        >
          {{ $t('exercise.check') }}
        </button>
        <button
          v-else
          class="btn btn-primary btn-lg"
          @click="generatePrompt"
          type="button"
        >
          {{ $t('matrix.nextPhrase') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.matrix-trainer {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.matrix-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.pill-group {
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.24rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.38rem 0.85rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.16s ease;
}

.pill-btn.active {
  background: var(--primary-solid);
  color: var(--primary-on-solid);
}

.matrix-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 1.75rem 2rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.matrix-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.matrix-tag {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.24rem 0.7rem;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary);
}

.matrix-stats {
  display: flex;
  gap: 0.45rem;
}

.stat-badge {
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.22rem 0.65rem;
  border-radius: 999px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  color: var(--text-h);
}

.prompt-label {
  margin: 0;
  font-size: 0.84rem;
  color: var(--muted);
}

.prompt-text {
  font-size: 1.5rem;
  margin: 0;
  color: var(--text-h);
}

.answer-tray {
  min-height: 60px;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1.5px dashed var(--border-strong);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tray-placeholder {
  color: var(--muted);
  font-size: 0.9rem;
}

.tiles-bank {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.word-tile {
  padding: 0.52rem 0.95rem;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--border-strong);
  background: var(--bg-card);
  color: var(--text-h);
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  box-shadow: var(--shadow-xs);
}

.word-tile:hover:not(:disabled) {
  border-color: var(--primary);
  background: var(--primary-soft);
  transform: translateY(-1px);
}

.word-tile.selected {
  background: var(--primary-solid);
  border-color: var(--primary-solid);
  color: var(--primary-on-solid);
}

.word-tile.used {
  opacity: 0.28;
  cursor: default;
  box-shadow: none;
}

.typing-input {
  font-size: 1.08rem;
  padding: 0.85rem 1.1rem;
}

.matrix-feedback {
  padding: 1.1rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1.5px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.matrix-feedback.correct {
  background: var(--feedback-correct-bg);
  border-color: var(--feedback-correct-border);
}

.matrix-feedback.wrong {
  background: var(--feedback-wrong-bg);
  border-color: var(--feedback-wrong-border);
}

.fb-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fb-audio {
  display: flex;
  gap: 0.35rem;
}

.fb-expected {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-h);
  margin: 0;
}

.fb-formula {
  margin: 0;
  font-size: 0.86rem;
}

.fb-formula code {
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--primary);
  font-weight: 600;
}

.fb-tip {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text);
}

.matrix-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.25rem;
}

@media (max-width: 640px) {
  .matrix-card {
    padding: 1.25rem;
  }

  .prompt-text {
    font-size: 1.25rem;
  }

  .matrix-actions .btn {
    width: 100%;
  }
}
</style>
