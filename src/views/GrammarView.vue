<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLanguageStore } from "../stores/language";

const route = useRoute();
const router = useRouter();
const langStore = useLanguageStore();

const tableId = computed(() => route.params.tableId as string | undefined);

// Грамматические таблицы для ID (RU->ID mode)
const grammarTablesId = [
  {
    id: "pronouns",
    title: "Личные местоимения",
    description: "Все личные местоимения индонезийского языка",
    icon: "👤",
    headers: ["Местоимение", "Значение", "Использование"],
    rows: [
      {
        label: "saya",
        cells: ["я", "Официально/нейтрально", "Saya dari Rusia (Я из России)"],
      },
      {
        label: "aku",
        cells: [
          "я",
          "Неформально, с друзьями",
          "Aku cinta kamu (Я люблю тебя)",
        ],
      },
      {
        label: "kamu",
        cells: ["ты", "Неформально", "Kamu cantik (Ты красивая)"],
      },
      {
        label: "Anda",
        cells: ["Вы", "Официально, уважительно", "Anda guru? (Вы учитель?)"],
      },
      {
        label: "dia",
        cells: ["он/она", "Третье лицо", "Dia teman saya (Он/она мой друг)"],
      },
      {
        label: "kami",
        cells: [
          "мы (без вас)",
          "Исключает собеседника",
          "Kami pergi (Мы уходим, а вы остаётесь)",
        ],
      },
      {
        label: "kita",
        cells: [
          "мы (с вами)",
          "Включает собеседника",
          "Kita makan bersama (Мы едим вместе)",
        ],
      },
      {
        label: "mereka",
        cells: ["они", "Третье лицо мн.ч.", "Mereka siswa (Они ученики)"],
      },
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
        cells: [
          "уже (завершённое действие)",
          "Saya sudah makan (Я уже поел)",
          "Sudah selesai? (Уже закончил?)",
        ],
      },
      {
        label: "telah",
        cells: [
          "уже (формально/книжно)",
          "Dia telah selesai (Он уже закончил)",
          "Используется в письменной речи",
        ],
      },
      {
        label: "sedang",
        cells: [
          "в процессе (сейчас)",
          "Saya sedang bekerja (Я работаю сейчас)",
          "Действие происходит в данный момент",
        ],
      },
      {
        label: "lagi",
        cells: [
          "в процессе (разговорное)",
          "Dia lagi tidur (Он спит сейчас)",
          "Употребляется в повседневной речи",
        ],
      },
      {
        label: "masih",
        cells: [
          "всё ещё",
          "Saya masih di rumah (Я всё ещё дома)",
          "Подчёркивает, что действие продолжается",
        ],
      },
      {
        label: "akan",
        cells: [
          "будущее время (нейтр.)",
          "Saya akan pergi (Я пойду)",
          "Нейтральное выражение будущего",
        ],
      },
      {
        label: "mau",
        cells: [
          "собираться / хотеть",
          "Saya mau tidur (Я собираюсь спать)",
          "Разговорный вариант будущего",
        ],
      },
      {
        label: "pernah",
        cells: [
          "когда-либо (опыт)",
          "Saya pernah ke Bali (Я бывал на Бали)",
          "Для вопросов об опыте: Pernah ke Bali?",
        ],
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
        cells: [
          "С глаголами и прилагательными",
          "Saya tidak tahu (Я не знаю)",
          "Самое распространённое отрицание",
        ],
      },
      {
        label: "bukan",
        cells: [
          "С существительными",
          "Ini bukan buku (Это не книга)",
          "Отрицает принадлежность к категории",
        ],
      },
      {
        label: "belum",
        cells: [
          "Ещё не (незавершённость)",
          "Saya belum makan (Я ещё не ел)",
          "Отрицает завершённость, ждёт в будущем",
        ],
      },
      {
        label: "jangan",
        cells: [
          "Запрет (повелительное)",
          "Jangan pergi! (Не уходи!)",
          "Команда/просьба не делать",
        ],
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
      {
        label: "di",
        cells: [
          "в/на (место)",
          "di rumah (дома)",
          "Saya di kantor (Я в офисе)",
        ],
      },
      {
        label: "ke",
        cells: [
          "в/на (направление)",
          "ke kantor (в офис)",
          "Dia pergi ke pasar (Он идёт на рынок)",
        ],
      },
      {
        label: "dari",
        cells: [
          "из/от (исходная точка)",
          "dari Rusia (из России)",
          "Saya dari Jakarta (Я из Джакарты)",
        ],
      },
      {
        label: "pada",
        cells: [
          "в/при (время)",
          "pada jam 5 (в 5 часов)",
          "Pada hari Senin (в понедельник)",
        ],
      },
      {
        label: "dengan",
        cells: [
          "с (совместность)",
          "dengan saya (со мной)",
          "Makan dengan teman (Есть с другом)",
        ],
      },
      {
        label: "untuk",
        cells: ["для", "untuk kamu (для тебя)", "Ini untuk ibu (Это для мамы)"],
      },
      {
        label: "di atas",
        cells: [
          "на/над (сверху)",
          "di atas meja (на столе)",
          "Buku di atas meja (Книга на столе)",
        ],
      },
      {
        label: "di bawah",
        cells: [
          "под (внизу)",
          "di bawah kursi (под стулом)",
          "Kucing di bawah meja (Кот под столом)",
        ],
      },
    ],
  },
  {
    id: "question-words",
    title: "Вопросительные слова",
    description: "Слова для построения вопросов",
    icon: "❓",
    headers: ["Слово", "Значение", "Пример"],
    rows: [
      {
        label: "apa",
        cells: [
          "что",
          "Apa ini? (Что это?)",
          "Apa yang kamu lakukan? (Что ты делаешь?)",
        ],
      },
      {
        label: "siapa",
        cells: [
          "кто",
          "Siapa nama kamu? (Как тебя зовут?)",
          "Siapa dia? (Кто он/она?)",
        ],
      },
      {
        label: "di mana",
        cells: [
          "где (место)",
          "Di mana rumah kamu? (Где твой дом?)",
          "Di mana kamu tinggal? (Где ты живёшь?)",
        ],
      },
      {
        label: "ke mana",
        cells: [
          "куда (направление)",
          "Ke mana kamu pergi? (Куда ты идёшь?)",
          "Ke mana liburan? (Куда на каникулы?)",
        ],
      },
      {
        label: "dari mana",
        cells: [
          "откуда (происхождение)",
          "Dari mana kamu? (Откуда ты?)",
          "Dari mana asalnya? (Откуда родом?)",
        ],
      },
      {
        label: "kapan",
        cells: [
          "когда (время)",
          "Kapan kamu datang? (Когда ты придёшь?)",
          "Kapan ulang tahunmu? (Когда твой день рождения?)",
        ],
      },
      {
        label: "mengapa / kenapa",
        cells: [
          "почему / зачем",
          "Mengapa kamu sedih? (Почему ты грустишь?)",
          "Kenapa tidak datang? (Почему не пришёл?)",
        ],
      },
      {
        label: "bagaimana",
        cells: [
          "как / каким образом",
          "Bagaimana kabar kamu? (Как твои дела?)",
          "Bagaimana caranya? (Как это сделать?)",
        ],
      },
      {
        label: "berapa",
        cells: [
          "сколько (цена/количество)",
          "Berapa harganya? (Сколько это стоит?)",
          "Berapa umur kamu? (Сколько тебе лет?)",
        ],
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
      {
        label: "dan",
        cells: [
          "и",
          "Saya makan dan minum (Я ем и пью)",
          "Соединяет однородные члены",
        ],
      },
      {
        label: "atau",
        cells: [
          "или",
          "Teh atau kopi? (Чай или кофе?)",
          "Для выбора между вариантами",
        ],
      },
      {
        label: "tapi",
        cells: [
          "но / однако",
          "Pintar tapi malas (Умный, но ленивый)",
          "Выражает противопоставление",
        ],
      },
      {
        label: "karena",
        cells: [
          "потому что",
          "Tidak datang karena sakit (Не пришёл, потому что заболел)",
          "Указывает причину",
        ],
      },
      {
        label: "jadi",
        cells: [
          "поэтому / так что",
          "Sakit jadi tidak datang (Заболел, поэтому не пришёл)",
          "Указывает следствие",
        ],
      },
      {
        label: "yang",
        cells: [
          "который / что",
          "Orang yang baik (Хороший человек)",
          "Определительное слово, заменяет 'который'",
        ],
      },
      {
        label: "jika / kalau",
        cells: [
          "если / когда",
          "Jika hujan, saya tidak pergi (Если дождь, я не пойду)",
          "Условный союз",
        ],
      },
      {
        label: "ketika",
        cells: [
          "когда (в то время как)",
          "Ketika saya tidur (Когда я спал)",
          "Одновременность действий",
        ],
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
        cells: [
          "мочь / уметь",
          "Saya bisa berenang (Я умею плавать)",
          "Bisa bantu saya? (Можете помочь?)",
        ],
      },
      {
        label: "harus",
        cells: [
          "должен / обязан",
          "Kamu harus belajar (Ты должен учиться)",
          "Выражает необходимость",
        ],
      },
      {
        label: "mau",
        cells: [
          "хотеть (разговорное)",
          "Saya mau kopi (Я хочу кофе)",
          "Mau ke mana? (Куда хочешь пойти?)",
        ],
      },
      {
        label: "ingin",
        cells: [
          "хотеть / желать (формально)",
          "Saya ingin belajar (Я хочу учиться)",
          "Более вежливо, чем mau",
        ],
      },
      {
        label: "perlu",
        cells: [
          "нуждаться / нужно",
          "Saya perlu bantuan (Мне нужна помощь)",
          "Tidak perlu (Не нужно)",
        ],
      },
      {
        label: "boleh",
        cells: [
          "можно / разрешено",
          "Boleh masuk? (Можно войти?)",
          "Boleh saya pinjam? (Можно одолжить?)",
        ],
      },
      {
        label: "suka",
        cells: [
          "любить / нравиться",
          "Saya suka kopi (Я люблю кофе)",
          "Suka atau tidak? (Нравится или нет?)",
        ],
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
      {
        label: "0",
        cells: ["nol", "Заимствовано из голландского", "null/nul"],
      },
      { label: "1", cells: ["satu", "Основа", "satu orang (один человек)"] },
      { label: "2", cells: ["dua", "Основа", "dua buku (две книги)"] },
      { label: "3", cells: ["tiga", "Основа", "tiga rumah (три дома)"] },
      {
        label: "10",
        cells: [
          "sepuluh",
          "Префикс se- + puluh",
          "sepuluh siswa (10 учеников)",
        ],
      },
      {
        label: "20",
        cells: ["dua puluh", "Число + puluh", "dua puluh orang (20 человек)"],
      },
      {
        label: "100",
        cells: ["seratus", "Префикс se- + ratus", "seratus rupiah (100 рупий)"],
      },
      {
        label: "1000",
        cells: ["seribu", "Префикс se- + ribu", "seribu dolar (1000 долларов)"],
      },
      {
        label: "orang",
        cells: [
          "Классификатор для людей",
          "dua orang (два человека)",
          "Обязателен при счёте людей",
        ],
      },
      {
        label: "buah",
        cells: [
          "Классификатор для предметов",
          "dua buah rumah (два дома)",
          "Общий классификатор для вещей",
        ],
      },
    ],
  },
];

// Грамматические таблицы для RU (ID->RU mode) — русский для индонезийцев
const grammarTablesRu = [
  {
    id: "pronouns",
    title: "Kata Ganti Orang Rusia",
    description: "Semua kata ganti orang dalam bahasa Rusia",
    icon: "👤",
    headers: ["Kata Ganti", "Arti", "Contoh"],
    rows: [
      { label: "Я [ya]", cells: ["saya", "Я студент (Saya mahasiswa)"] },
      { label: "Ты [ty]", cells: ["kamu (informal)", "Ты красивая (Kamu cantik)"] },
      { label: "Вы [vy]", cells: ["Anda (formal) / kalian", "Вы говорите (Anda bicara)"] },
      { label: "Он [on]", cells: ["dia (laki-laki)", "Он дома (Dia di rumah)"] },
      { label: "Она [a-NA]", cells: ["dia (perempuan)", "Она учитель (Dia guru)"] },
      { label: "Мы [my]", cells: ["kami/kita", "Мы вместе (Kita bersama)"] },
      { label: "Они [a-NI]", cells: ["mereka", "Они пришли (Mereka datang)"] },
    ],
  },
  {
    id: "tenses",
    title: "Waktu dalam Bahasa Rusia",
    description: "Pengekspresian waktu dalam bahasa Rusia",
    icon: "⏰",
    headers: ["Bentuk", "Arti", "Contoh"],
    rows: [
      { label: "Sekarang", cells: ["kata kerja + akhiran", "Я читаю (Saya membaca)"] },
      { label: "Lampau", cells: ["akhiran -л/-ла/-ли", "Я читал (Saya membaca)"] },
      { label: "Masa Depan", cells: ["буду + infintif", "Я буду читать (Saya akan membaca)"] },
      { label: "Perfektif", cells: ["telah selesai", "Я прочитал (Saya selesai membaca)"] },
    ],
  },
  {
    id: "negation",
    title: "Negasi dalam Bahasa Rusia",
    description: "Cara mengekspresikan negasi dalam bahasa Rusia",
    icon: "❌",
    headers: ["Kata", "Arti", "Contoh"],
    rows: [
      { label: "НЕ [nye]", cells: ["tidak (sebelum kata)", "Я не знаю (Saya tidak tahu)"] },
      { label: "НЕТ [nyet]", cells: ["tidak (jawaban)", "Нет, спасибо (Tidak, trims)"] },
      { label: "НЕЛЬЗЯ [nyel-ZYA]", cells: ["tidak boleh", "Нельзя курить (Dilarang merokok)"] },
      { label: "НИ [nee]", cells: ["tidak satu pun", "Никто не пришёл (Tak seorang pun datang)"] },
    ],
  },
  {
    id: "prepositions",
    title: "Preposisi Rusia",
    description: "Preposisi tempat, arah dan waktu dalam bahasa Rusia",
    icon: "📍",
    headers: ["Preposisi", "Arti", "Contoh"],
    rows: [
      { label: "В [v]", cells: ["di, ke (dalam)", "Я в школе (Saya di sekolah)"] },
      { label: "НА [na]", cells: ["di, ke (atas)", "На столе (Di atas meja)"] },
      { label: "ИЗ [iz]", cells: ["dari (dalam)", "Я из России (Saya dari Rusia)"] },
      { label: "С [s]", cells: ["dari (atas), dengan", "С работы (Dari kerja)"] },
      { label: "У [oo]", cells: ["di dekat, punya", "У меня есть (Saya punya)"] },
      { label: "ДЛЯ [dlya]", cells: ["untuk", "Это для тебя (Ini untukmu)"] },
      { label: "БЕЗ [byez]", cells: ["tanpa", "Без сахара (Tanpa gula)"] },
      { label: "ПОСЛЕ [POS-lye]", cells: ["setelah", "После работы (Setelah kerja)"] },
    ],
  },
  {
    id: "question-words",
    title: "Kata Tanya Rusia",
    description: "Kata tanya dalam bahasa Rusia",
    icon: "❓",
    headers: ["Kata", "Arti", "Contoh"],
    rows: [
      { label: "Кто? [kto]", cells: ["Siapa?", "Кто это? (Siapa ini?)"] },
      { label: "Что? [shto]", cells: ["Apa?", "Что это? (Apa ini?)"] },
      { label: "Где? [gdye]", cells: ["Di mana?", "Где туалет? (Di mana toilet?)"] },
      { label: "Куда? [koo-DA]", cells: ["Ke mana?", "Куда ты идёшь? (Ke mana?)"] },
      { label: "Откуда? [at-KOO-da]", cells: ["Dari mana?", "Откуда ты? (Dari mana?)"] },
      { label: "Когда? [kag-DA]", cells: ["Kapan?", "Когда придёшь? (Kapan datang?)"] },
      { label: "Почему? [pa-chee-MOO]", cells: ["Mengapa?", "Почему нет? (Kenapa tidak?)"] },
      { label: "Сколько? [SKOL-ka]", cells: ["Berapa?", "Сколько стоит? (Berapa harganya?)"] },
    ],
  },
  {
    id: "conjunctions",
    title: "Konjungsi Rusia",
    description: "Kata sambung dalam bahasa Rusia",
    icon: "🔗",
    headers: ["Konjungsi", "Arti", "Contoh"],
    rows: [
      { label: "И [ee]", cells: ["dan", "Я и ты (Saya dan kamu)"] },
      { label: "ИЛИ [EE-lee]", cells: ["atau", "Чай или кофе? (Teh atau kopi?)"] },
      { label: "НО [no]", cells: ["tetapi", "Хорошо, но дорого (Baik tapi mahal)"] },
      { label: "А [a]", cells: ["sedangkan", "Я здесь, а ты там (Saya di sini, kamu di sana)"] },
      { label: "ЧТО [shto]", cells: ["bahwa", "Я знаю, что ты прав (Saya tahu kamu benar)"] },
      { label: "ЧТОБЫ [shto-BY]", cells: ["agar, supaya", "Я хочу, чтобы ты помог (Saya ingin kamu bantu)"] },
      { label: "ПОТОМУ ЧТО [pa-TO-moo shto]", cells: ["karena", "Он не пришёл, потому что занят (Dia tidak datang karena sibuk)"] },
      { label: "ЕСЛИ [YES-lee]", cells: ["jika", "Если будет время (Jika ada waktu)"] },
    ],
  },
  {
    id: "modals",
    title: "Kata Modal Rusia",
    description: "Ekspresi kemungkinan, keharusan dan keinginan dalam bahasa Rusia",
    icon: "💭",
    headers: ["Kata", "Arti", "Contoh"],
    rows: [
      { label: "МОЖНО [MOZH-na]", cells: ["boleh, bisa", "Можно войти? (Boleh masuk?)"] },
      { label: "НУЖНО [NOOZH-na]", cells: ["perlu, harus", "Нужно учиться (Harus belajar)"] },
      { label: "НЕЛЬЗЯ [nyel-ZYA]", cells: ["tidak boleh", "Нельзя курить (Dilarang merokok)"] },
      { label: "ДОЛЖЕН [DOL-zhen]", cells: ["harus (kewajiban)", "Я должен работать (Saya harus kerja)"] },
      { label: "МОЧЬ [moch]", cells: ["bisa (mampu)", "Я могу помочь (Saya bisa bantu)"] },
      { label: "ХОТЕТЬ [kha-TYET]", cells: ["mau, ingin", "Я хочу есть (Saya mau makan)"] },
    ],
  },
  {
    id: "numbers",
    title: "Angka Rusia",
    description: "Angka dan berhitung dalam bahasa Rusia",
    icon: "🔢",
    headers: ["Angka", "Rusia", "Contoh"],
    rows: [
      { label: "1", cells: ["один [a-DEEN]", "один билет (satu tiket)"] },
      { label: "2", cells: ["два [dva]", "два билета (dua tiket)"] },
      { label: "3", cells: ["три [tree]", "три рубля (tiga rubel)"] },
      { label: "5", cells: ["пять [pyat]", "пять минут (lima menit)"] },
      { label: "10", cells: ["десять [DYE-syat]", "десять рублей (sepuluh rubel)"] },
      { label: "20", cells: ["двадцать [DVAd-tsat]", "двадцать лет (dua puluh tahun)"] },
      { label: "100", cells: ["сто [sto]", "сто рублей (seratus rubel)"] },
      { label: "1000", cells: ["тысяча [TY-sya-cha]", "тысяча долларов (seribu dolar)"] },
    ],
  },
];

const grammarTables = computed(() =>
  langStore.targetLang === "id" ? grammarTablesId : grammarTablesRu,
);

const selectedTable = computed(() => {
  if (!tableId.value) return null;
  return grammarTables.value.find((t) => t.id === tableId.value);
});

function goToTable(tableId: string) {
  router.push(`/${langStore.interfaceLang}/${langStore.targetLang}/grammar/${tableId}`);
}

function goBack() {
  router.push(`/${langStore.interfaceLang}/${langStore.targetLang}/grammar`);
}
</script>

<template>
  <div class="grammar-view">
    <header class="grammar-header">
      <h1>{{ $t('grammar.title') }}</h1>
      <p class="grammar-description">{{ $t('grammar.description.' + langStore.targetLang) }}</p>
    </header>

    <!-- Просмотр одной таблицы -->
    <div v-if="selectedTable" class="table-detail fade-in">
      <button class="btn btn-outline btn-sm mb-3" @click="goBack">
        {{ $t('grammar.backToList') }}
      </button>

      <div class="table-card">
        <h2>{{ selectedTable.icon }} {{ selectedTable.title }}</h2>
        <p class="table-description">{{ selectedTable.description }}</p>

        <div class="table-container">
          <table class="grammar-table">
            <thead>
              <tr>
                <th>{{ $t('grammar.table.termColumn') }}</th>
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
          <h3>{{ table.icon }} {{ table.title }}</h3>
          <p>{{ table.description }}</p>
          <div class="table-meta">
            <span>{{ $t('grammar.table.entryCount', { count: table.rows.length }) }}</span>
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
  color: var(--text);
}

.tables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.table-card {
  background: var(--bg-card);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--border);
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
  color: var(--text-h);
  margin-bottom: 0.5rem;
}

.table-description {
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.table-meta {
  font-size: 0.85rem;
  color: var(--muted);
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
  color: var(--text);
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
  border-bottom: 1px solid var(--border);
}

.grammar-table th {
  background: var(--code-bg);
  font-weight: 600;
  color: var(--text-h);
  white-space: nowrap;
}

.grammar-table tr:hover td {
  background: var(--code-bg);
}

.term-cell {
  font-weight: 600;
  color: var(--primary);
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
