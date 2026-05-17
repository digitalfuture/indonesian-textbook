<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLanguageStore } from "../stores/language";
import { useSpeech } from "../composables/useSpeech";
import { useTranscription } from "../composables/useTranscription";

const route = useRoute();
const router = useRouter();
const langStore = useLanguageStore();
const { speak } = useSpeech();
const { transcribe } = useTranscription();

function getPhonetic(label: string): string {
  const lang = langStore.targetLang === "id" ? "id" : "ru";
  const clean = label.replace(/\s*\[.*?\]/g, "").trim();
  if (!clean) return "";
  return transcribe(clean, lang);
}

function renderCell(text: string): string {
  // Find word with phonetic [word phon] or just [phon] and add audio button
  return text.replace(
    /([А-Яа-яЁёA-Za-zÀ-ÿ]+(?:\s+[А-Яа-яЁёA-Za-zÀ-ÿ]+)*)\s*(\[[^\]]+\])/g,
    (_match, word, phon) => {
      const safe = word.replace(/'/g, "\\'");
      return `${word} ${phon} <button class="audio-btn-inline" data-word="${safe}">🔊</button>`;
    },
  );
  // Also handle simple words without phonetic (add audio button based on context)
}

function onTableClick(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target.classList.contains("audio-btn-inline")) {
    const word = target.getAttribute("data-word");
    if (word) speak(word);
  }
}

function playWord(label: string) {
  const word = label.split(/\[|\{/)[0].trim();
  if (word) speak(word);
}

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
      { label: "0", cells: ["nol", "Заимствование", "nomor nol (номер ноль)"] },
      { label: "1", cells: ["satu", "Основа", "satu orang (один человек)"] },
      { label: "2", cells: ["dua", "Основа", "dua buku (две книги)"] },
      { label: "3", cells: ["tiga", "Основа", "tiga rumah (три дома)"] },
      { label: "4", cells: ["empat", "Основа", "empat kursi (четыре стула)"] },
      { label: "5", cells: ["lima", "Основа", "lima jari (пять пальцев)"] },
      { label: "10", cells: ["sepuluh", "se- + puluh", "sepuluh siswa (10 учеников)"] },
      { label: "11", cells: ["sebelas", "se- + belas", "sebelas orang (11 человек)"] },
      { label: "12", cells: ["dua belas", "dua + belas", "dua belas jam (12 часов)"] },
      { label: "20", cells: ["dua puluh", "dua + puluh", "dua puluh orang (20 человек)"] },
      { label: "21", cells: ["dua puluh satu", "puluhan + satuan", "dua puluh satu buku (21 книга)"] },
      { label: "100", cells: ["seratus", "se- + ratus", "seratus rupiah (100 рупий)"] },
      { label: "101", cells: ["seratus satu", "ratus + satuan", "seratus satu orang (101 человек)"] },
      { label: "1000", cells: ["seribu", "se- + ribu", "seribu dolar (1000 долларов)"] },
      {
        label: "orang",
        cells: ["Классификатор людей", "dua orang (два человека)", "Обязателен при счёте людей"],
      },
      {
        label: "buah",
        cells: ["Классификатор предметов", "dua buah rumah (два дома)", "Общий для вещей"],
      },
      {
        label: "ekor",
        cells: ["Классификатор животных", "tiga ekor kucing (три кошки)", "Для животных"],
      },
      {
        label: "Правила",
        cells: [
          "11-19: + belas\n20+: puluh\n100+: ratus\n1000+: ribu",
          "11 = se-belas, 12 = dua belas\n20 = dua puluh, 21 = dua puluh satu",
          "Порядок: angka + классификатор + benda",
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
      { label: "1", cells: ["один [aˈdʲin]", "один билет (satu tiket)"] },
      { label: "2", cells: ["два [dva]", "два билета (dua tiket)"] },
      { label: "3", cells: ["три [trʲi]", "три рубля (tiga rubel)"] },
      { label: "4", cells: ["четыре [tɕiˈtɨrʲe]", "четыре рубля (empat rubel)"] },
      { label: "5", cells: ["пять [pʲætʲ]", "пять минут (lima menit)"] },
      { label: "6", cells: ["шесть [ʂɛsʲtʲ]", "шесть рублей (enam rubel)"] },
      { label: "7", cells: ["семь [sʲemʲ]", "семь дней (tujuh hari)"] },
      { label: "8", cells: ["восемь [ˈvo.sʲɪmʲ]", "восемь часов (delapan jam)"] },
      { label: "9", cells: ["девять [ˈdʲe.vʲɪtʲ]", "девять рублей (sembilan rubel)"] },
      { label: "10", cells: ["десять [ˈdʲe.sʲɪtʲ]", "десять рублей (sepuluh rubel)"] },
      { label: "11", cells: ["одиннадцать [ɐˈdʲi.nət͡sətʲ]", "одиннадцать рублей (sebelas rubel)"] },
      { label: "12", cells: ["двенадцать [dvʲɪˈnat͡sətʲ]", "двенадцать часов (dua belas jam)"] },
      { label: "13", cells: ["тринадцать [trʲɪˈnat͡sətʲ]", "тринадцать рублей (tiga belas rubel)"] },
      { label: "14", cells: ["четырнадцать [tɕɪˈtɨr.nət͡sətʲ]", "четырнадцать дней (empat belas hari)"] },
      { label: "15", cells: ["пятнадцать [pʲɪtˈnat͡sətʲ]", "пятнадцать минут (lima belas menit)"] },
      { label: "20", cells: ["двадцать [ˈdva.t͡sətʲ]", "двадцать лет (dua puluh tahun)"] },
      { label: "21", cells: ["двадцать один [ˈdva.t͡sətʲ ɐˈdʲin]", "двадцать один рубль (dua puluh satu rubel)"] },
      { label: "30", cells: ["тридцать [ˈtrʲi.t͡sətʲ]", "тридцать минут (tiga puluh menit)"] },
      { label: "40", cells: ["сорок [ˈso.rək]", "сорок рублей (empat puluh rubel)"] },
      { label: "50", cells: ["пятьдесят [pʲɪ.dʲɪˈsʲat]", "пятьдесят рублей (lima puluh rubel)"] },
      { label: "100", cells: ["сто [sto]", "сто рублей (seratus rubel)"] },
      { label: "1000", cells: ["тысяча [ˈtɨ.sʲɪ.tɕə]", "тысяча долларов (seribu dolar)"] },
      {
        label: "Aturan",
        cells: [
          "1: один/одна/одно (m/f/n)\n2-4: + bentuk gen. tunggal\n5-20: + bentuk gen. jamak\n21+: angka + puluh + aturan 1-20",
          "1 rubel, 2 rubel-ya, 5 rubel-yey",
          "Setelah 2,3,4 — genitif tunggal\nSetelah 5+ — genitif jamak",
        ],
      },
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

        <div class="table-container" @click="onTableClick">
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
                <td class="term-cell">
                  <span class="term-word">{{ row.label }}</span>
                </td>
                <td v-for="cell in row.cells" :key="cell">
                  <span v-html="renderCell(cell)"></span>
                </td>
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
  font-weight: 700;
  color: var(--text-h);
  white-space: nowrap;
  opacity: 0.85;
}

.grammar-table td {
  color: var(--text-h);
  font-weight: 400;
}

.grammar-table tr:hover td {
  background: var(--code-bg);
}

.term-cell {
  white-space: nowrap;
}

.term-cell-inner {
  display: inline-flex;
  align-items: baseline;
  gap: 0.4rem;
}

.term-word {
  font-weight: 600;
  color: var(--primary);
}

.term-phonetic {
  font-size: 0.8rem;
  color: var(--text);
  opacity: 0.5;
  font-style: italic;
}

.term-cell .audio-btn {
  background: none;
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0 0.2rem;
  opacity: 0.45;
  transition: opacity 0.2s;
  vertical-align: middle;
  line-height: 1;
}

.term-cell .audio-btn:hover {
  opacity: 1;
}

.audio-btn-inline {
  background: none;
  border: none;
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0 0.15rem;
  opacity: 0.45;
  transition: opacity 0.2s;
  vertical-align: middle;
}

.audio-btn-inline:hover {
  opacity: 1;
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
