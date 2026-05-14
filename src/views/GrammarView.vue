<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const tableId = computed(() => route.params.tableId as string | undefined);

// Грамматические таблицы
const grammarTables = [
  {
    id: "pronouns",
    title: "Личные местоимения",
    description: "Все личные местоимения индонезийского языка",
    icon: "👤",
    headers: ["Местоимение", "Значение", "Использование"],
    rows: [
      { label: "saya", cells: ["я", "Официально/нейтрально"] },
      { label: "aku", cells: ["я", "Неформально, с друзьями"] },
      { label: "kamu", cells: ["ты", "Неформально"] },
      { label: "Anda", cells: ["Вы", "Официально, уважительно"] },
      { label: "dia", cells: ["он/она", "Третий лицо"] },
      { label: "kami", cells: ["мы", "Без собеседника"] },
      { label: "kita", cells: ["мы", "Включая собеседника"] },
      { label: "mereka", cells: ["они", "Третье лицо множественное"] },
    ],
  },
  {
    id: "tenses",
    title: "Времена и аспекты",
    description: "Выражение времени в индонезийском языке",
    icon: "⏰",
    headers: ["Частица", "Значение", "Пример"],
    rows: [
      {
        label: "sudah",
        cells: ["уже (завершённое)", "Saya sudah makan (Я уже поел)"],
      },
      {
        label: "telah",
        cells: ["уже (формально)", "Dia telah selesai (Он уже закончил)"],
      },
      {
        label: "sedang",
        cells: ["в процессе", "Saya sedang bekerja (Я работаю сейчас)"],
      },
      {
        label: "lagi",
        cells: ["в процессе (разг.)", "Dia lagi tidur (Он спит сейчас)"],
      },
      {
        label: "masih",
        cells: ["всё ещё", "Saya masih di rumah (Я всё ещё дома)"],
      },
      { label: "akan", cells: ["буду (нейтр.)", "Saya akan pergi (Я пойду)"] },
      {
        label: "mau",
        cells: ["собираюсь/хочу", "Saya mau tidur (Я собираюсь спать)"],
      },
      {
        label: "pernah",
        cells: ["когда-либо", "Saya pernah ke Bali (Я бывал на Бали)"],
      },
    ],
  },
  {
    id: "negation",
    title: "Отрицания",
    description: "Способы выражения отрицания",
    icon: "❌",
    headers: ["Отрицание", "Использование", "Пример"],
    rows: [
      {
        label: "tidak",
        cells: ["С глаголами и прилагательными", "Saya tidak tahu (Я не знаю)"],
      },
      {
        label: "bukan",
        cells: ["С существительными", "Ini bukan buku (Это не книга)"],
      },
      { label: "belum", cells: ["Ещё не", "Saya belum makan (Я ещё не ел)"] },
      {
        label: "jangan",
        cells: ["Запрет (не делай!)", "Jangan pergi! (Не уходи!)"],
      },
    ],
  },
  {
    id: "prepositions",
    title: "Предлоги",
    description: "Основные предлоги места, направления и времени",
    icon: "📍",
    headers: ["Предлог", "Значение", "Пример"],
    rows: [
      { label: "di", cells: ["в/на (место)", "di rumah (дома)"] },
      { label: "ke", cells: ["в/на (направление)", "ke kantor (в офис)"] },
      { label: "dari", cells: ["из/от", "dari Rusia (из России)"] },
      { label: "pada", cells: ["в (время)", "pada jam 5 (в 5 часов)"] },
      { label: "dengan", cells: ["с", "dengan saya (со мной)"] },
      { label: "untuk", cells: ["для", "untuk kamu (для тебя)"] },
      { label: "dari", cells: ["от/из", "dari pagi (с утра)"] },
      { label: "sampai", cells: ["до", "sampai besok (до завтра)"] },
    ],
  },
  {
    id: "question-words",
    title: "Вопросительные слова",
    description: "Слова для построения вопросов",
    icon: "❓",
    headers: ["Слово", "Значение", "Пример"],
    rows: [
      { label: "apa", cells: ["что", "Apa ini? (Что это?)"] },
      { label: "siapa", cells: ["кто", "Siapa nama kamu? (Как тебя зовут?)"] },
      {
        label: "di mana",
        cells: ["где", "Di mana rumah kamu? (Где твой дом?)"],
      },
      {
        label: "ke mana",
        cells: ["куда", "Ke mana kamu pergi? (Куда ты идёшь?)"],
      },
      { label: "dari mana", cells: ["откуда", "Dari mana kamu? (Откуда ты?)"] },
      {
        label: "kapan",
        cells: ["когда", "Kapan kamu datang? (Когда ты придёшь?)"],
      },
      {
        label: "mengapa",
        cells: ["почему", "Mengapa kamu sedih? (Почему ты грустишь?)"],
      },
      {
        label: "bagaimana",
        cells: ["как", "Bagaimana kabar kamu? (Как твои дела?)"],
      },
      {
        label: "berapa",
        cells: ["сколько", "Berapa harganya? (Сколько это стоит?)"],
      },
    ],
  },
  {
    id: "conjunctions",
    title: "Союзы",
    description: "Слова для соединения предложений",
    icon: "🔗",
    headers: ["Союз", "Значение", "Пример"],
    rows: [
      { label: "dan", cells: ["и", "Saya makan dan minum (Я ем и пью)"] },
      { label: "atau", cells: ["или", "Teh atau kopi? (Чай или кофе?)"] },
      { label: "tapi", cells: ["но", "Pintar tapi malas (Умный, но ленивый)"] },
      {
        label: "karena",
        cells: [
          "потому что",
          "Tidak datang karena sakit (Не пришёл, потому что заболел)",
        ],
      },
      {
        label: "jadi",
        cells: [
          "поэтому",
          "Sakit jadi tidak datang (Заболел, поэтому не пришёл)",
        ],
      },
      {
        label: "yang",
        cells: ["который", "Orang yang baik (Хороший человек)"],
      },
      {
        label: "jika",
        cells: [
          "если",
          "Jika hujan, saya tidak pergi (Если дождь, я не пойду)",
        ],
      },
      {
        label: "ketika",
        cells: ["когда (в то время как)", "Ketika saya tidur (Когда я спал)"],
      },
    ],
  },
  {
    id: "modals",
    title: "Модальные глаголы",
    description: "Выражение возможности, необходимости и желания",
    icon: "💭",
    headers: ["Глагол", "Значение", "Пример"],
    rows: [
      {
        label: "bisa",
        cells: ["мочь/уметь", "Saya bisa berenang (Я умею плавать)"],
      },
      {
        label: "harus",
        cells: ["должен", "Kamu harus belajar (Ты должен учиться)"],
      },
      {
        label: "mau",
        cells: ["хотеть (разг.)", "Saya mau kopi (Я хочу кофе)"],
      },
      {
        label: "ingin",
        cells: ["хотеть (форм.)", "Saya ingin belajar (Я хочу учиться)"],
      },
      {
        label: "perlu",
        cells: ["нуждаться", "Saya perlu bantuan (Мне нужна помощь)"],
      },
      {
        label: "boleh",
        cells: ["можно/разрешено", "Boleh masuk (Можно войти)"],
      },
      { label: "ingin", cells: ["желать", "Dia ingin pergi (Он хочет уйти)"] },
      {
        label: "suka",
        cells: ["любить/нравиться", "Saya suka kopi (Я люблю кофе)"],
      },
    ],
  },
  {
    id: "numbers",
    title: "Числа и счёт",
    description: "Числительные и классификаторы",
    icon: "🔢",
    headers: ["Число", "Индонезийский", "Примечание"],
    rows: [
      { label: "1", cells: ["satu", "основа"] },
      { label: "2", cells: ["dua", "основа"] },
      { label: "3", cells: ["tiga", "основа"] },
      { label: "10", cells: ["sepuluh", "основа"] },
      { label: "20", cells: ["dua puluh", "число + puluh"] },
      { label: "100", cells: ["seratus", "особая форма"] },
      { label: "1000", cells: ["seribu", "особая форма"] },
      {
        label: "orang",
        cells: ["классификатор для людей", "dua orang (два человека)"],
      },
      {
        label: "buah",
        cells: ["классификатор для предметов", "dua buah rumah (два дома)"],
      },
    ],
  },
];

const selectedTable = computed(() => {
  if (!tableId.value) return null;
  return grammarTables.find((t) => t.id === tableId.value);
});

function goToTable(tableId: string) {
  router.push(`/grammar/${tableId}`);
}

function goBack() {
  router.push("/grammar");
}
</script>

<template>
  <div class="grammar-view">
    <header class="grammar-header">
      <h1>📊 Грамматические таблицы</h1>
      <p class="grammar-description">
        Все основные грамматические конструкции индонезийского языка в удобных
        таблицах
      </p>
    </header>

    <!-- Просмотр одной таблицы -->
    <div v-if="selectedTable" class="table-detail fade-in">
      <button class="btn btn-outline btn-sm mb-3" @click="goBack">
        ← Назад к таблицам
      </button>

      <div class="table-card">
        <h2>{{ selectedTable.icon }} {{ selectedTable.title }}</h2>
        <p class="table-description">{{ selectedTable.description }}</p>

        <div class="table-container">
          <table class="grammar-table">
            <thead>
              <tr>
                <th>Термин</th>
                <th v-for="header in selectedTable.headers" :key="header">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in selectedTable.rows" :key="row.label">
                <td class="term-cell">{{ row.label }}</td>
                <td v-for="cell in row.cells" :key="cell">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Список всех таблиц -->
    <div v-else class="tables-list">
      <div class="tables-grid">
        <div
          v-for="table in grammarTables"
          :key="table.id"
          class="table-card clickable"
          @click="goToTable(table.id)"
        >
          <div class="table-icon">{{ table.icon }}</div>
          <h3>{{ table.title }}</h3>
          <p>{{ table.description }}</p>
          <div class="table-meta">
            <span>{{ table.rows.length }} записей</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grammar-view {
  max-width: 1000px;
  margin: 0 auto;
}

.grammar-header {
  margin-bottom: 2rem;
  text-align: center;
}

.grammar-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.grammar-description {
  font-size: 1.1rem;
  color: #4a5568;
}

.tables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.table-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.table-card.clickable {
  cursor: pointer;
}

.table-card.clickable:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.table-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.table-card h3 {
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.table-description {
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.table-meta {
  font-size: 0.85rem;
  color: #718096;
}

.table-detail {
  margin-bottom: 2rem;
}

.table-detail .table-card {
  padding: 2rem;
}

.table-detail h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.table-description {
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.table-container {
  overflow-x: auto;
  margin-top: 1.5rem;
}

.grammar-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.grammar-table th,
.grammar-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.grammar-table th {
  background: #f7fafc;
  font-weight: 600;
  color: #2d3748;
  white-space: nowrap;
}

.grammar-table tr:hover td {
  background: #f7fafc;
}

.term-cell {
  font-weight: 600;
  color: #667eea;
  white-space: nowrap;
}

.mb-3 {
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .tables-grid {
    grid-template-columns: 1fr;
  }

  .grammar-table {
    font-size: 0.85rem;
  }

  .grammar-table th,
  .grammar-table td {
    padding: 0.5rem 0.75rem;
  }
}
</style>
