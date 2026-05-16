import type { DictionaryWord } from "../utils/types";

export const vocabularyRu: DictionaryWord[] = [
  {
    id: 1,
    word: "здравствуйте",
    pronunciation: "/zdravstvujtje/",
    translation: "selamat",
    category: "interjection",
    frequency: 1,
    examples: [
      { sentence: "Доброе утро!", translation: "Selamat pagi!" },
      { sentence: "Добро пожаловать", translation: "Selamat datang" },
    ],
    wordFamily: [
      { word: "здороваться", translation: "bersalaman" },
      { word: "поздороваться", translation: "memberi salam" },
      { word: "приветствие", translation: "salam, ucapan salam" },
    ],
    lessonIds: [1],
  },

  {
    id: 2,
    word: "утро",
    pronunciation: "/utro/",
    translation: "pagi",
    category: "noun",
    frequency: 2,
    examples: [
      { sentence: "Доброе утро", translation: "Selamat pagi" },
      { sentence: "Я просыпаюсь утром", translation: "Saya bangun pagi" },
    ],
    wordFamily: [
      { word: "утренний", translation: "pagi" },
      { word: "поутру", translation: "pagi-pagi" },
    ],
    lessonIds: [1, 8],
  },

  {
    id: 3,
    word: "спасибо",
    pronunciation: "/spasibo/",
    translation: "terima kasih",
    category: "interjection",
    frequency: 3,
    examples: [
      { sentence: "Большое спасибо", translation: "Terima kasih banyak" },
    ],
    wordFamily: [
      { word: "благодарить", translation: "berterima kasih" },
      { word: "благодарность", translation: "terima kasih, ucapan terima kasih" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 4,
    word: "пожалуйста",
    pronunciation: "/poʐalujsta/",
    translation: "sama-sama",
    category: "interjection",
    frequency: 4,
    examples: [
      { sentence: "Пример с \"пожалуйста\"", translation: "sama-sama" },
    ],
    wordFamily: [
      { word: "пожалуйста (в ответ)", translation: "sama-sama" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 5,
    word: "извините",
    pronunciation: "/izvinitje/",
    translation: "maaf",
    category: "interjection",
    frequency: 5,
    examples: [
      { sentence: "Извините, я опоздал", translation: "Maaf, saya terlambat" },
      { sentence: "Извините, я не знаю", translation: "Maaf, saya tidak tahu" },
    ],
    wordFamily: [
      { word: "извиняться", translation: "minta maaf" },
      { word: "прощение", translation: "maaf, permintaan maaf" },
      { word: "извинить", translation: "memaafkan" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 6,
    word: "пожалуйста",
    pronunciation: "/poʐalujsta/",
    translation: "tolong",
    category: "interjection",
    frequency: 6,
    examples: [
      { sentence: "Пожалуйста, помогите мне", translation: "Tolong bantu saya" },
    ],
    wordFamily: [
      { word: "пожалуйста (в ответ)", translation: "sama-sama" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 7,
    word: "до свидания",
    pronunciation: "/do svidanija/",
    translation: "sampai jumpa",
    category: "interjection",
    frequency: 7,
    examples: [
      { sentence: "До новой встречи", translation: "Sampai jumpa lagi" },
      { sentence: "До завтра", translation: "Sampai jumpa besok" },
    ],
    wordFamily: [
      { word: "свидание", translation: "pertemuan, kencan" },
      { word: "встреча", translation: "pertemuan" },
    ],
    lessonIds: [1],
  },

  {
    id: 8,
    word: "да",
    pronunciation: "/da/",
    translation: "ya",
    category: "adverb",
    frequency: 8,
    examples: [
      { sentence: "Да, я понимаю", translation: "Ya, saya mengerti" },
      { sentence: "Да, верно", translation: "Ya, benar" },
    ],
    wordFamily: [
      { word: "согласие", translation: "persetujuan" },
    ],
    lessonIds: [1],
  },

  {
    id: 9,
    word: "нет",
    pronunciation: "/njet/",
    translation: "tidak",
    category: "adverb",
    frequency: 9,
    examples: [
      { sentence: "Нет, я не хочу", translation: "Tidak, saya tidak mau" },
      { sentence: "Я не знаю", translation: "Saya tidak tahu" },
    ],
    wordFamily: [
      { word: "отрицание", translation: "negasi, sangkalan" },
    ],
    lessonIds: [1, 3, 5],
  },

  {
    id: 10,
    word: "что",
    pronunciation: "/tɕto/",
    translation: "apa",
    category: "adverb",
    frequency: 10,
    examples: [
      { sentence: "Что это?", translation: "Apa ini?" },
      { sentence: "Как дела?", translation: "Apa kabar?" },
    ],
    wordFamily: [
      { word: "чтобы", translation: "bahwa, supaya" },
      { word: "что-то", translation: "sesuatu" },
      { word: "ничто", translation: "tidak ada apa-apa" },
    ],
    lessonIds: [1, 4],
  },

  {
    id: 11,
    word: "кто",
    pronunciation: "/kto/",
    translation: "siapa",
    category: "adverb",
    frequency: 11,
    examples: [
      { sentence: "Как тебя зовут?", translation: "Siapa nama kamu?" },
      { sentence: "Кто он/она?", translation: "Siapa dia?" },
    ],
    wordFamily: [
      { word: "кто-то", translation: "seseorang" },
      { word: "никто", translation: "tidak seorang pun" },
    ],
    lessonIds: [1, 4],
  },

  {
    id: 12,
    word: "имя",
    pronunciation: "/imja/",
    translation: "nama",
    category: "noun",
    frequency: 12,
    examples: [
      { sentence: "Меня зовут Анди", translation: "Nama saya Andi" },
      { sentence: "Как тебя зовут?", translation: "Siapa namamu?" },
    ],
    wordFamily: [
      { word: "именной", translation: "nominal" },
      { word: "называть", translation: "menamai, memanggil" },
      { word: "название", translation: "nama, sebutan" },
    ],
    lessonIds: [1],
  },

  {
    id: 13,
    word: "новости",
    pronunciation: "/novosti/",
    translation: "kabar",
    category: "noun",
    frequency: 13,
    examples: [
      { sentence: "Как дела?", translation: "Apa kabar?" },
      { sentence: "Дела хорошие", translation: "Kabar baik" },
    ],
    wordFamily: [
      { word: "новость", translation: "berita, kabar" },
      { word: "новостной", translation: "berita" },
    ],
    lessonIds: [1],
  },

  {
    id: 14,
    word: "хороший",
    pronunciation: "/xoroʂij/",
    translation: "baik",
    category: "adjective",
    frequency: 14,
    examples: [
      { sentence: "Дела хорошие", translation: "Kabar baik" },
      { sentence: "Хороший человек", translation: "Orang baik" },
    ],
    wordFamily: [
      { word: "хорошо", translation: "baik" },
      { word: "лучший", translation: "terbaik" },
      { word: "улучшать", translation: "memperbaiki" },
      { word: "улучшение", translation: "perbaikan" },
    ],
    lessonIds: [1, 13],
  },

  {
    id: 15,
    word: "из",
    pronunciation: "/iz/",
    translation: "dari",
    category: "preposition",
    frequency: 15,
    examples: [
      { sentence: "Я из России", translation: "Saya dari Rusia" },
      { sentence: "Откуда?", translation: "Dari mana?" },
    ],
    wordFamily: [
      { word: "изо", translation: "dari" },
      { word: "от", translation: "dari, daripada" },
    ],
    lessonIds: [1, 14],
  },

  {
    id: 16,
    word: "я",
    pronunciation: "/ja/",
    translation: "saya",
    category: "pronoun",
    frequency: 16,
    examples: [
      { sentence: "Я ученик", translation: "Saya siswa" },
      { sentence: "Моя книга", translation: "Buku saya" },
    ],
    wordFamily: [
      { word: "меня", translation: "saya, aku" },
      { word: "мне", translation: "saya, aku" },
      { word: "мой", translation: "saya, aku" },
    ],
    lessonIds: [1, 2],
  },

  {
    id: 17,
    word: "ты",
    pronunciation: "/tɨ/",
    translation: "kamu",
    category: "pronoun",
    frequency: 17,
    examples: [
      { sentence: "Ты хороший", translation: "Kamu baik" },
      { sentence: "Кто ты?", translation: "Siapa kamu?" },
    ],
    wordFamily: [
      { word: "тебя", translation: "kamu, engkau" },
      { word: "твой", translation: "kamu, engkau" },
    ],
    lessonIds: [2],
  },

  {
    id: 18,
    word: "он",
    pronunciation: "/on/",
    translation: "dia",
    category: "pronoun",
    frequency: 18,
    examples: [
      { sentence: "Он/она учитель", translation: "Dia guru" },
      { sentence: "Его/её дом", translation: "Rumah dia" },
    ],
    wordFamily: [
      { word: "она", translation: "dia (perempuan)" },
      { word: "его", translation: "dia, miliknya" },
      { word: "её", translation: "dia, miliknya" },
    ],
    lessonIds: [2],
  },

  {
    id: 19,
    word: "мы",
    pronunciation: "/mɨ/",
    translation: "kita",
    category: "pronoun",
    frequency: 19,
    examples: [
      { sentence: "Мы идём (все вместе)", translation: "Kita pergi" },
      { sentence: "Мы учимся", translation: "Kita belajar" },
    ],
    wordFamily: [
      { word: "нас", translation: "kami, kita" },
      { word: "наш", translation: "kami, kita" },
    ],
    lessonIds: [2],
  },

  {
    id: 20,
    word: "они",
    pronunciation: "/oni/",
    translation: "mereka",
    category: "pronoun",
    frequency: 20,
    examples: [
      { sentence: "Они мои друзья", translation: "Mereka teman saya" },
      { sentence: "Они приходят", translation: "Mereka datang" },
    ],
    wordFamily: [
      { word: "их", translation: "mereka, milik mereka" },
    ],
    lessonIds: [2],
  },

  {
    id: 21,
    word: "мы",
    pronunciation: "/mɨ/",
    translation: "kami",
    category: "pronoun",
    frequency: 21,
    examples: [
      { sentence: "Мы из Индонезии", translation: "Kami dari Indonesia" },
      { sentence: "Мы едем на Бали", translation: "Kami pergi ke Bali" },
    ],
    wordFamily: [
      { word: "нас", translation: "kami, kita" },
      { word: "наш", translation: "kami, kita" },
    ],
    lessonIds: [2],
  },

  {
    id: 22,
    word: "вы",
    pronunciation: "/vɨ/",
    translation: "Anda",
    category: "pronoun",
    frequency: 22,
    examples: [
      { sentence: "Вы учитель", translation: "Anda guru" },
      { sentence: "Доброе утро, Вы", translation: "Selamat pagi, Anda" },
    ],
    lessonIds: [2],
  },

  {
    id: 23,
    word: "я",
    pronunciation: "/ja/",
    translation: "aku",
    category: "pronoun",
    frequency: 23,
    examples: [
      { sentence: "Я люблю тебя", translation: "Aku cinta kamu" },
      { sentence: "Я хочу есть", translation: "Aku mau makan" },
    ],
    wordFamily: [
      { word: "меня", translation: "saya, aku" },
      { word: "мне", translation: "saya, aku" },
      { word: "мой", translation: "saya, aku" },
    ],
    lessonIds: [2],
  },

  {
    id: 24,
    word: "это",
    pronunciation: "/ɛto/",
    translation: "ini",
    category: "adverb",
    frequency: 24,
    examples: [
      { sentence: "Это моя книга", translation: "Ini buku saya" },
      { sentence: "Этот дом большой", translation: "Rumah ini besar" },
    ],
    wordFamily: [
      { word: "этот", translation: "ini" },
      { word: "эта", translation: "ini" },
      { word: "эти", translation: "ini (jamak)" },
    ],
    lessonIds: [2, 6],
  },

  {
    id: 25,
    word: "то",
    pronunciation: "/to/",
    translation: "itu",
    category: "adverb",
    frequency: 25,
    examples: [
      { sentence: "То его/её дом", translation: "Itu rumah dia" },
      { sentence: "Та книга", translation: "Buku itu" },
    ],
    wordFamily: [
      { word: "тот", translation: "itu" },
      { word: "та", translation: "itu" },
      { word: "те", translation: "itu (jamak)" },
    ],
    lessonIds: [2, 6],
  },

  {
    id: 26,
    word: "он/она",
    pronunciation: "/on/ona/",
    translation: "beliau",
    category: "pronoun",
    frequency: 26,
    examples: [
      { sentence: "Он уважаемый профессор", translation: "Beliau guru besar" },
    ],
    lessonIds: [2],
  },

  {
    id: 27,
    word: "ты",
    pronunciation: "/tɨ/",
    translation: "engkau",
    category: "pronoun",
    frequency: 27,
    examples: [
      { sentence: "Ты красивая", translation: "Engkau cantik" },
      { sentence: "Кто ты?", translation: "Engkau siapa?" },
    ],
    wordFamily: [
      { word: "тебя", translation: "kamu, engkau" },
      { word: "твой", translation: "kamu, engkau" },
    ],
    lessonIds: [2],
  },

  {
    id: 28,
    word: "знакомиться",
    pronunciation: "/znakomitjsja/",
    translation: "kenalan",
    category: "verb",
    frequency: 28,
    examples: [
      { sentence: "Давайте познакомимся", translation: "Mari berkenalan" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 29,
    word: "жить",
    pronunciation: "/ʐitj/",
    translation: "tinggal",
    category: "verb",
    frequency: 29,
    examples: [
      { sentence: "Я живу в Москве", translation: "Saya tinggal di Moskow" },
      { sentence: "Где живёшь?", translation: "Tinggal di mana?" },
    ],
    wordFamily: [
      { word: "проживать", translation: "tinggal, mendiami" },
      { word: "жизнь", translation: "kehidupan, hidup" },
      { word: "житель", translation: "penduduk" },
    ],
    lessonIds: [1, 14],
  },

  {
    id: 30,
    word: "происхождение",
    pronunciation: "/proisxoʐdjenije/",
    translation: "asal",
    category: "noun",
    frequency: 30,
    examples: [
      { sentence: "Откуда он родом?", translation: "Dari mana asalnya?" },
      { sentence: "Я родом из России", translation: "Asal saya dari Rusia" },
    ],
    wordFamily: [
      { word: "происходить", translation: "berasal, terjadi" },
      { word: "родом", translation: "berasal dari" },
      { word: "родной", translation: "asal, asli" },
    ],
    lessonIds: [1, 4],
  },

  {
    id: 31,
    word: "почему",
    pronunciation: "/potɕjemu/",
    translation: "kenapa",
    category: "adverb",
    frequency: 31,
    examples: [
      { sentence: "Почему ты уходишь?", translation: "Kenapa kamu pergi?" },
      { sentence: "Почему нет?", translation: "Kenapa tidak?" },
    ],
    wordFamily: [
      { word: "почему-то", translation: "entah kenapa" },
    ],
    lessonIds: [4],
  },

  {
    id: 32,
    word: "как",
    pronunciation: "/kak/",
    translation: "bagaimana",
    category: "adverb",
    frequency: 32,
    examples: [
      { sentence: "Как твои дела?", translation: "Bagaimana kabarmu?" },
      { sentence: "Как это сделать?", translation: "Bagaimana caranya?" },
    ],
    wordFamily: [
      { word: "какой", translation: "yang mana, bagaimana" },
      { word: "как-то", translation: "entah bagaimana" },
    ],
    lessonIds: [4],
  },

  {
    id: 33,
    word: "счастливого пути",
    pronunciation: "/stɕastlivoɡo puti/",
    translation: "selamat jalan",
    category: "interjection",
    frequency: 33,
    examples: [
      { sentence: "Пример с \"счастливого пути\"", translation: "selamat jalan" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 34,
    word: "представление",
    pronunciation: "/prjedstavljenije/",
    translation: "perkenalan",
    category: "noun",
    frequency: 34,
    examples: [
      { sentence: "Первое знакомство", translation: "Perkenalan pertama" },
    ],
    lessonIds: [1],
  },

  {
    id: 35,
    word: "знакомиться друг с другом",
    pronunciation: "/znakomitjsja druɡ s druɡom/",
    translation: "berkenalan",
    category: "verb",
    frequency: 35,
    examples: [
      { sentence: "Они знакомятся", translation: "Mereka sedang berkenalan" },
      { sentence: "Приятно познакомиться", translation: "Senang berkenalan" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 36,
    word: "рад",
    pronunciation: "/rad/",
    translation: "senang",
    category: "adjective",
    frequency: 36,
    examples: [
      { sentence: "Рад встрече с Вами", translation: "Senang bertemu Anda" },
      { sentence: "Я очень рад", translation: "Saya senang sekali" },
    ],
    lessonIds: [1, 13, 16],
  },

  {
    id: 37,
    word: "встречать",
    pronunciation: "/vstrjetɕatj/",
    translation: "bertemu",
    category: "verb",
    frequency: 37,
    examples: [
      { sentence: "Мы снова встретились", translation: "Kita bertemu lagi" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 38,
    word: "соблаговолить",
    pronunciation: "/soblaɡovolitj/",
    translation: "berkenan",
    category: "verb",
    frequency: 38,
    examples: [
      { sentence: "Садитесь, пожалуйста", translation: "Silakan duduk" },
      { sentence: "Соблаговолите прийти", translation: "Berkenan datang" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 39,
    word: "пожалуйста",
    pronunciation: "/poʐalujsta/",
    translation: "silakan",
    category: "interjection",
    frequency: 39,
    examples: [
      { sentence: "Пожалуйста, входите", translation: "Silakan masuk" },
      { sentence: "Садитесь, пожалуйста", translation: "Silakan duduk" },
    ],
    wordFamily: [
      { word: "пожалуйста (в ответ)", translation: "sama-sama" },
    ],
    lessonIds: [1, 16],
  },

  {
    id: 40,
    word: "принимать",
    pronunciation: "/prinimatj/",
    translation: "terima",
    category: "verb",
    frequency: 40,
    examples: [
      { sentence: "Принять приглашение", translation: "Terima undangan" },
      { sentence: "Я принимаю", translation: "Saya terima" },
    ],
    lessonIds: [1],
  },

  {
    id: 41,
    word: "есть",
    pronunciation: "/jestj/",
    translation: "makan",
    category: "verb",
    frequency: 41,
    examples: [
      { sentence: "Я ем рис", translation: "Saya makan nasi" },
      { sentence: "Хочешь есть?", translation: "Mau makan?" },
    ],
    wordFamily: [
      { word: "иметься", translation: "tersedia, ada" },
      { word: "быть", translation: "ada, adalah" },
      { word: "существовать", translation: "ada, wujud" },
    ],
    lessonIds: [3, 12],
  },

  {
    id: 42,
    word: "пить",
    pronunciation: "/pitj/",
    translation: "minum",
    category: "verb",
    frequency: 42,
    examples: [
      { sentence: "Я пью воду", translation: "Saya minum air" },
      { sentence: "Хочешь пить?", translation: "Mau minum?" },
    ],
    lessonIds: [3],
  },

  {
    id: 43,
    word: "идти",
    pronunciation: "/idti/",
    translation: "pergi",
    category: "verb",
    frequency: 43,
    examples: [
      { sentence: "Я иду на рынок", translation: "Saya pergi ke pasar" },
      { sentence: "Он уходит сейчас", translation: "Dia pergi sekarang" },
    ],
    lessonIds: [3, 14],
  },

  {
    id: 44,
    word: "приходить",
    pronunciation: "/prixoditj/",
    translation: "datang",
    category: "verb",
    frequency: 44,
    examples: [
      { sentence: "Он придёт завтра", translation: "Dia datang besok" },
      { sentence: "Добро пожаловать!", translation: "Selamat datang!" },
    ],
    lessonIds: [3, 11],
  },

  {
    id: 45,
    word: "видеть",
    pronunciation: "/vidjetj/",
    translation: "lihat",
    category: "verb",
    frequency: 45,
    examples: [
      { sentence: "Я вижу дом", translation: "Saya lihat rumah" },
      { sentence: "Смотри туда!", translation: "Lihat itu!" },
    ],
    lessonIds: [3, 15],
  },

  {
    id: 46,
    word: "держать",
    pronunciation: "/djerʐatj/",
    translation: "pegang",
    category: "verb",
    frequency: 46,
    examples: [
      { sentence: "Держи эту книгу", translation: "Pegang buku ini" },
      { sentence: "Не трогай!", translation: "Jangan pegang!" },
    ],
    lessonIds: [3, 5],
  },

  {
    id: 47,
    word: "бросать",
    pronunciation: "/brosatj/",
    translation: "lempar",
    category: "verb",
    frequency: 47,
    examples: [
      { sentence: "Бросить мяч", translation: "Lempar bola" },
      { sentence: "Не бросай камни", translation: "Jangan lempar batu" },
    ],
    lessonIds: [3, 5],
  },

  {
    id: 48,
    word: "бить",
    pronunciation: "/bitj/",
    translation: "pukul",
    category: "verb",
    frequency: 48,
    examples: [
      { sentence: "Не бей его", translation: "Jangan pukul dia" },
      { sentence: "Постучать в дверь", translation: "Pukul pintu" },
    ],
    lessonIds: [3, 5],
  },

  {
    id: 49,
    word: "класть",
    pronunciation: "/klastj/",
    translation: "taruh",
    category: "verb",
    frequency: 49,
    examples: [
      { sentence: "Положи книгу на стол", translation: "Taruh buku di meja" },
      { sentence: "Положи здесь", translation: "Taruh di sini" },
    ],
    lessonIds: [3, 14],
  },

  {
    id: 50,
    word: "пробовать",
    pronunciation: "/probovatj/",
    translation: "coba",
    category: "verb",
    frequency: 50,
    examples: [
      { sentence: "Попробуй снова", translation: "Coba lagi" },
      { sentence: "Я попробую", translation: "Saya coba" },
    ],
    lessonIds: [3],
  },

  {
    id: 51,
    word: "петь",
    pronunciation: "/pjetj/",
    translation: "nyanyi",
    category: "verb",
    frequency: 51,
    examples: [
      { sentence: "Он любит петь", translation: "Dia suka menyanyi" },
      { sentence: "Петь песню", translation: "Nyanyi lagu" },
    ],
    lessonIds: [3],
  },

  {
    id: 52,
    word: "играть",
    pronunciation: "/iɡratj/",
    translation: "main",
    category: "verb",
    frequency: 52,
    examples: [
      { sentence: "Дети играют в мяч", translation: "Anak-anak main bola" },
      { sentence: "Хочешь поиграть?", translation: "Mau main?" },
    ],
    lessonIds: [3, 12],
  },

  {
    id: 53,
    word: "бежать",
    pronunciation: "/bjeʐatj/",
    translation: "lari",
    category: "verb",
    frequency: 53,
    examples: [
      { sentence: "Он бежит быстро", translation: "Dia lari cepat" },
      { sentence: "Не беги!", translation: "Jangan lari!" },
    ],
    wordFamily: [
      { word: "бегать", translation: "berlari, berlari-lari" },
      { word: "бег", translation: "lari, pelarian" },
      { word: "бегун", translation: "pelari" },
    ],
    lessonIds: [3],
  },

  {
    id: 54,
    word: "гулять",
    pronunciation: "/ɡuljatj/",
    translation: "jalan-jalan",
    category: "verb",
    frequency: 54,
    examples: [
      { sentence: "Давай погуляем", translation: "Mari jalan-jalan" },
      { sentence: "Я люблю гулять", translation: "Saya suka jalan-jalan" },
    ],
    lessonIds: [3, 14],
  },

  {
    id: 55,
    word: "думать",
    pronunciation: "/dumatj/",
    translation: "pikir",
    category: "verb",
    frequency: 55,
    examples: [
      { sentence: "Я так думаю", translation: "Saya pikir begitu" },
      { sentence: "Подумай сначала", translation: "Pikir dulu" },
    ],
    lessonIds: [3],
  },

  {
    id: 56,
    word: "помнить",
    pronunciation: "/pomnitj/",
    translation: "ingat",
    category: "verb",
    frequency: 56,
    examples: [
      { sentence: "Я помню тебя", translation: "Saya ingat kamu" },
      { sentence: "Помнишь или нет?", translation: "Ingat tidak?" },
    ],
    lessonIds: [3],
  },

  {
    id: 57,
    word: "забывать",
    pronunciation: "/zabɨvatj/",
    translation: "lupa",
    category: "verb",
    frequency: 57,
    examples: [
      { sentence: "Я забыл", translation: "Saya lupa" },
      { sentence: "Не забудь!", translation: "Jangan lupa!" },
    ],
    lessonIds: [3, 5],
  },

  {
    id: 58,
    word: "посылать",
    pronunciation: "/posɨlatj/",
    translation: "kirim",
    category: "verb",
    frequency: 58,
    examples: [
      { sentence: "Отправить письмо", translation: "Kirim surat" },
      { sentence: "Я отправляю сообщение", translation: "Saya kirim pesan" },
    ],
    lessonIds: [3],
  },

  {
    id: 59,
    word: "летать",
    pronunciation: "/ljetatj/",
    translation: "terbang",
    category: "verb",
    frequency: 59,
    examples: [
      { sentence: "Птица летит", translation: "Burung terbang" },
      { sentence: "Самолёт летит", translation: "Pesawat terbang" },
    ],
    lessonIds: [3],
  },

  {
    id: 60,
    word: "учить",
    pronunciation: "/utɕitj/",
    translation: "ajar",
    category: "verb",
    frequency: 60,
    examples: [
      { sentence: "Учитель учит", translation: "Guru mengajar" },
      { sentence: "Научи меня", translation: "Ajar saya" },
    ],
    lessonIds: [3],
  },

  {
    id: 61,
    word: "дом",
    pronunciation: "/dom/",
    translation: "rumah",
    category: "noun",
    frequency: 61,
    examples: [
      { sentence: "Мой дом большой", translation: "Rumah saya besar" },
      { sentence: "Дома", translation: "Di rumah" },
    ],
    wordFamily: [
      { word: "домашний", translation: "rumah" },
      { word: "домик", translation: "rumah kecil" },
      { word: "жильё", translation: "perumahan" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 62,
    word: "книга",
    pronunciation: "/kniɡa/",
    translation: "buku",
    category: "noun",
    frequency: 62,
    examples: [
      { sentence: "Это моя книга", translation: "Ini buku saya" },
      { sentence: "Читать книгу", translation: "Baca buku" },
    ],
    lessonIds: [2, 6, 10],
  },

  {
    id: 63,
    word: "машина",
    pronunciation: "/maʂina/",
    translation: "mobil",
    category: "noun",
    frequency: 63,
    examples: [
      { sentence: "Новая машина", translation: "Mobil baru" },
      { sentence: "Моя машина красная", translation: "Mobil saya merah" },
    ],
    lessonIds: [6, 13],
  },

  {
    id: 64,
    word: "человек",
    pronunciation: "/tɕjelovjek/",
    translation: "orang",
    category: "noun",
    frequency: 64,
    examples: [
      { sentence: "Один человек", translation: "Satu orang" },
      { sentence: "Индонезиец", translation: "Orang Indonesia" },
    ],
    wordFamily: [
      { word: "люди", translation: "orang, manusia" },
      { word: "человеческий", translation: "manusiawi" },
    ],
    lessonIds: [7, 15],
  },

  {
    id: 65,
    word: "друг",
    pronunciation: "/druɡ/",
    translation: "teman",
    category: "noun",
    frequency: 65,
    examples: [
      { sentence: "Мой друг", translation: "Teman saya" },
      { sentence: "Хороший друг", translation: "Teman baik" },
    ],
    wordFamily: [
      { word: "дружба", translation: "persahabatan, pertemanan" },
      { word: "дружить", translation: "berteman, bersahabat" },
    ],
    lessonIds: [2, 6, 13],
  },

  {
    id: 66,
    word: "ночь",
    pronunciation: "/notɕj/",
    translation: "malam",
    category: "noun",
    frequency: 66,
    examples: [
      { sentence: "Доброй ночи", translation: "Selamat malam" },
      { sentence: "Сегодня вечером", translation: "Malam ini" },
    ],
    lessonIds: [1, 8],
  },

  {
    id: 67,
    word: "день",
    pronunciation: "/djenj/",
    translation: "siang",
    category: "noun",
    frequency: 67,
    examples: [
      { sentence: "Добрый день", translation: "Selamat siang" },
      { sentence: "Обед", translation: "Makan siang" },
    ],
    lessonIds: [1, 8],
  },

  {
    id: 68,
    word: "вечер",
    pronunciation: "/vjetɕjer/",
    translation: "sore",
    category: "noun",
    frequency: 68,
    examples: [
      { sentence: "Добрый вечер", translation: "Selamat sore" },
      { sentence: "Сегодня вечером", translation: "Sore ini" },
    ],
    lessonIds: [1, 8],
  },

  {
    id: 69,
    word: "я хочу",
    pronunciation: "/ja xotɕu/",
    translation: "saya mau",
    category: "verb",
    frequency: 69,
    examples: [
      { sentence: "Я хочу есть", translation: "Saya mau makan" },
      { sentence: "Я хочу пойти", translation: "Saya mau pergi" },
    ],
    lessonIds: [3, 11, 12],
  },

  {
    id: 70,
    word: "есть",
    pronunciation: "/jestj/",
    translation: "ada",
    category: "verb",
    frequency: 70,
    examples: [
      { sentence: "На столе есть книга", translation: "Ada buku di meja" },
      { sentence: "Что случилось?", translation: "Ada apa?" },
    ],
    wordFamily: [
      { word: "иметься", translation: "tersedia, ada" },
      { word: "быть", translation: "ada, adalah" },
      { word: "существовать", translation: "ada, wujud" },
    ],
    lessonIds: [3, 6],
  },

  {
    id: 71,
    word: "нет",
    pronunciation: "/njet/",
    translation: "tiada",
    category: "verb",
    frequency: 71,
    examples: [
      { sentence: "Нет проблем", translation: "Tiada masalah" },
      { sentence: "Никого нет", translation: "Tiada seorang pun" },
    ],
    wordFamily: [
      { word: "отрицание", translation: "negasi, sangkalan" },
    ],
    lessonIds: [5],
  },

  {
    id: 72,
    word: "читать",
    pronunciation: "/tɕitatj/",
    translation: "membaca",
    category: "verb",
    frequency: 72,
    examples: [
      { sentence: "Я читаю книгу", translation: "Saya membaca buku" },
      { sentence: "Он читает письмо", translation: "Dia membaca surat" },
    ],
    wordFamily: [
      { word: "прочитать", translation: "membaca" },
      { word: "прочтение", translation: "pembacaan" },
      { word: "читатель", translation: "pembaca" },
      { word: "чтение", translation: "bacaan" },
    ],
    lessonIds: [3, 10],
  },

  {
    id: 73,
    word: "писать",
    pronunciation: "/pisatj/",
    translation: "menulis",
    category: "verb",
    frequency: 73,
    examples: [
      { sentence: "Я пишу письмо", translation: "Saya menulis surat" },
      { sentence: "Написать имя", translation: "Menulis nama" },
    ],
    wordFamily: [
      { word: "написать", translation: "menulis" },
      { word: "письмо", translation: "surat, tulisan" },
      { word: "писатель", translation: "penulis" },
      { word: "запись", translation: "catatan, tulisan" },
    ],
    lessonIds: [3],
  },

  {
    id: 74,
    word: "слушать",
    pronunciation: "/sluʂatj/",
    translation: "dengar",
    category: "verb",
    frequency: 74,
    examples: [
      { sentence: "Я слушаю музыку", translation: "Saya dengar musik" },
      { sentence: "Слушай!", translation: "Dengar!" },
    ],
    wordFamily: [
      { word: "слышать", translation: "mendengar" },
      { word: "послушать", translation: "mendengarkan" },
      { word: "слушатель", translation: "pendengar" },
      { word: "слух", translation: "pendengaran" },
    ],
    lessonIds: [3],
  },

  {
    id: 75,
    word: "знать",
    pronunciation: "/znatj/",
    translation: "tahu",
    category: "verb",
    frequency: 75,
    examples: [
      { sentence: "Я не знаю", translation: "Saya tidak tahu" },
      { sentence: "Ты знаешь?", translation: "Apa kamu tahu?" },
    ],
    wordFamily: [
      { word: "знание", translation: "pengetahuan" },
      { word: "известный", translation: "terkenal, diketahui" },
      { word: "узнавать", translation: "mengetahui, mengenali" },
    ],
    lessonIds: [3, 5],
  },

  {
    id: 76,
    word: "говорить",
    pronunciation: "/ɡovoritj/",
    translation: "bicara",
    category: "verb",
    frequency: 76,
    examples: [
      { sentence: "Они разговаривают", translation: "Mereka bicara" },
    ],
    wordFamily: [
      { word: "разговаривать", translation: "berbicara, bercakap" },
      { word: "разговор", translation: "pembicaraan, percakapan" },
      { word: "сказать", translation: "berkata, mengatakan" },
      { word: "говорун", translation: "pembicara" },
    ],
    lessonIds: [3],
  },

  {
    id: 77,
    word: "понимать",
    pronunciation: "/ponimatj/",
    translation: "mengerti",
    category: "verb",
    frequency: 77,
    examples: [
      { sentence: "Я понимаю", translation: "Saya mengerti" },
      { sentence: "Я не понимаю", translation: "Saya tidak mengerti" },
    ],
    wordFamily: [
      { word: "понять", translation: "mengerti, memahami" },
      { word: "понимание", translation: "pengertian, pemahaman" },
    ],
    lessonIds: [3, 5],
  },

  {
    id: 78,
    word: "нести",
    pronunciation: "/njesti/",
    translation: "bawa",
    category: "verb",
    frequency: 78,
    examples: [
      { sentence: "Принеси эту книгу", translation: "Bawa buku ini" },
      { sentence: "Я привёл машину", translation: "Saya bawa mobil" },
    ],
    wordFamily: [
      { word: "приносить", translation: "membawa, mendatangkan" },
      { word: "носить", translation: "memakai, membawa" },
    ],
    lessonIds: [3],
  },

  {
    id: 79,
    word: "делать",
    pronunciation: "/djelatj/",
    translation: "buat",
    category: "verb",
    frequency: 79,
    examples: [
      { sentence: "Я делаю кофе", translation: "Saya buat kopi" },
      { sentence: "Зачем? (букв. 'делать что?')", translation: "Buat apa?" },
    ],
    wordFamily: [
      { word: "сделать", translation: "membuat, mengerjakan" },
      { word: "дело", translation: "urusan, pekerjaan" },
      { word: "создатель", translation: "pembuat, pencipta" },
    ],
    lessonIds: [3],
  },

  {
    id: 80,
    word: "давать",
    pronunciation: "/davatj/",
    translation: "beri",
    category: "verb",
    frequency: 80,
    examples: [
      { sentence: "Дай мне книгу", translation: "Beri saya buku" },
      { sentence: "Он даёт подарок", translation: "Dia beri hadiah" },
    ],
    wordFamily: [
      { word: "дать", translation: "memberi, memberikan" },
      { word: "подарок", translation: "hadiah, pemberian" },
    ],
    lessonIds: [3],
  },

  {
    id: 81,
    word: "искать",
    pronunciation: "/iskatj/",
    translation: "cari",
    category: "verb",
    frequency: 81,
    examples: [
      { sentence: "Искать книгу", translation: "Cari buku" },
      { sentence: "Я ищу дом", translation: "Saya cari rumah" },
    ],
    wordFamily: [
      { word: "поиск", translation: "pencarian, cari" },
      { word: "поисковый", translation: "pencarian" },
    ],
    lessonIds: [3],
  },

  {
    id: 82,
    word: "ждать",
    pronunciation: "/ʐdatj/",
    translation: "tunggu",
    category: "verb",
    frequency: 82,
    examples: [
      { sentence: "Подожди меня!", translation: "Tunggu saya!" },
      { sentence: "Я жду", translation: "Saya tunggu" },
    ],
    wordFamily: [
      { word: "подождать", translation: "menunggu" },
      { word: "ожидание", translation: "penantian, tungguan" },
    ],
    lessonIds: [3],
  },

  {
    id: 83,
    word: "брать",
    pronunciation: "/bratj/",
    translation: "ambil",
    category: "verb",
    frequency: 83,
    examples: [
      { sentence: "Возьми книгу", translation: "Ambil buku" },
      { sentence: "Пожалуйста, подай", translation: "Tolong ambilkan" },
    ],
    wordFamily: [
      { word: "взять", translation: "mengambil, ambil" },
      { word: "взятие", translation: "pengambilan" },
    ],
    lessonIds: [3, 16],
  },

  {
    id: 84,
    word: "входить",
    pronunciation: "/vxoditj/",
    translation: "masuk",
    category: "verb",
    frequency: 84,
    examples: [
      { sentence: "Пожалуйста, входите", translation: "Silakan masuk" },
      { sentence: "Войти в дом", translation: "Masuk ke rumah" },
    ],
    wordFamily: [
      { word: "заходить", translation: "masuk, mampir" },
      { word: "вход", translation: "jalan masuk, pintu masuk" },
    ],
    lessonIds: [3, 14, 16],
  },

  {
    id: 85,
    word: "выходить",
    pronunciation: "/vɨxoditj/",
    translation: "keluar",
    category: "verb",
    frequency: 85,
    examples: [
      { sentence: "Выйти из дома", translation: "Keluar dari rumah" },
      { sentence: "Он вышел", translation: "Dia keluar" },
    ],
    wordFamily: [
      { word: "выйти", translation: "keluar" },
      { word: "выход", translation: "keluar, jalan keluar" },
    ],
    lessonIds: [3, 14],
  },

  {
    id: 86,
    word: "подниматься",
    pronunciation: "/podnimatjsja/",
    translation: "naik",
    category: "verb",
    frequency: 86,
    examples: [
      { sentence: "Сесть в машину", translation: "Naik mobil" },
      { sentence: "Лететь самолётом", translation: "Naik pesawat" },
    ],
    wordFamily: [
      { word: "поднять", translation: "menaikkan, mengangkat" },
      { word: "подъём", translation: "kenaikan, tanjakan" },
    ],
    lessonIds: [3, 14],
  },

  {
    id: 87,
    word: "спускаться",
    pronunciation: "/spuskatjsja/",
    translation: "turun",
    category: "verb",
    frequency: 87,
    examples: [
      { sentence: "Выйти из машины", translation: "Turun dari mobil" },
      { sentence: "Выхожу здесь", translation: "Turun di sini" },
    ],
    wordFamily: [
      { word: "спуститься", translation: "turun" },
      { word: "спуск", translation: "turunan, penurunan" },
    ],
    lessonIds: [3, 14],
  },

  {
    id: 88,
    word: "покупать",
    pronunciation: "/pokupatj/",
    translation: "beli",
    category: "verb",
    frequency: 88,
    examples: [
      { sentence: "Я покупаю книгу", translation: "Saya beli buku" },
      { sentence: "Что хочешь купить?", translation: "Mau beli apa?" },
    ],
    wordFamily: [
      { word: "купить", translation: "membeli, beli" },
      { word: "покупка", translation: "pembelian, belanja" },
      { word: "покупатель", translation: "pembeli" },
    ],
    lessonIds: [3],
  },

  {
    id: 89,
    word: "продавать",
    pronunciation: "/prodavatj/",
    translation: "jual",
    category: "verb",
    frequency: 89,
    examples: [
      { sentence: "Он продаёт дом", translation: "Dia jual rumah" },
      { sentence: "Продать машину", translation: "Jual mobil" },
    ],
    wordFamily: [
      { word: "продать", translation: "menjual, jual" },
      { word: "продажа", translation: "penjualan" },
      { word: "продавец", translation: "penjual" },
    ],
    lessonIds: [3],
  },

  {
    id: 90,
    word: "плавать",
    pronunciation: "/plavatj/",
    translation: "berenang",
    category: "verb",
    frequency: 90,
    examples: [
      { sentence: "Я умею плавать", translation: "Saya bisa berenang" },
      { sentence: "Плавать в море", translation: "Berenang di laut" },
    ],
    wordFamily: [
      { word: "плавание", translation: "renang, pelayaran" },
      { word: "пловец", translation: "perenang" },
    ],
    lessonIds: [3, 12],
  },

  {
    id: 91,
    word: "бегать",
    pronunciation: "/bjeɡatj/",
    translation: "berlari",
    category: "verb",
    frequency: 91,
    examples: [
      { sentence: "Он бежит быстро", translation: "Dia berlari cepat" },
      { sentence: "Бегать в парке", translation: "Berlari di taman" },
    ],
    lessonIds: [3, 13],
  },

  {
    id: 92,
    word: "сидеть",
    pronunciation: "/sidjetj/",
    translation: "duduk",
    category: "verb",
    frequency: 92,
    examples: [
      { sentence: "Садитесь, пожалуйста", translation: "Silakan duduk" },
      { sentence: "Сидеть на стуле", translation: "Duduk di kursi" },
    ],
    wordFamily: [
      { word: "сесть", translation: "duduk" },
      { word: "сиденье", translation: "tempat duduk, kursi" },
    ],
    lessonIds: [3, 14],
  },

  {
    id: 93,
    word: "стоять",
    pronunciation: "/stojatj/",
    translation: "berdiri",
    category: "verb",
    frequency: 93,
    examples: [
      { sentence: "Стой здесь", translation: "Berdiri di sini" },
      { sentence: "Он стоит", translation: "Dia berdiri" },
    ],
    wordFamily: [
      { word: "встать", translation: "berdiri, bangun" },
      { word: "стойка", translation: "sikap berdiri" },
    ],
    lessonIds: [3],
  },

  {
    id: 94,
    word: "открывать",
    pronunciation: "/otkrɨvatj/",
    translation: "buka",
    category: "verb",
    frequency: 94,
    examples: [
      { sentence: "Открой дверь", translation: "Buka pintu" },
      { sentence: "Магазин открывается в 8", translation: "Toko buka jam 8" },
    ],
    wordFamily: [
      { word: "открыть", translation: "membuka, buka" },
      { word: "открытый", translation: "terbuka, buka" },
      { word: "открытие", translation: "pembukaan" },
    ],
    lessonIds: [3],
  },

  {
    id: 95,
    word: "закрывать",
    pronunciation: "/zakrɨvatj/",
    translation: "tutup",
    category: "verb",
    frequency: 95,
    examples: [
      { sentence: "Закрой дверь", translation: "Tutup pintu" },
      { sentence: "Магазин закрывается в 9", translation: "Toko tutup jam 9" },
    ],
    wordFamily: [
      { word: "закрыть", translation: "menutup, tutup" },
      { word: "закрытый", translation: "tertutup, tutup" },
      { word: "закрытие", translation: "penutupan" },
    ],
    lessonIds: [3],
  },

  {
    id: 96,
    word: "просить",
    pronunciation: "/prositj/",
    translation: "minta",
    category: "verb",
    frequency: 96,
    examples: [
      { sentence: "Я прошу помощи", translation: "Saya minta tolong" },
      { sentence: "Просить прощения", translation: "Minta maaf" },
    ],
    wordFamily: [
      { word: "попросить", translation: "meminta, minta" },
      { word: "просьба", translation: "permintaan, mohon" },
    ],
    lessonIds: [3, 16],
  },

  {
    id: 97,
    word: "хранить",
    pronunciation: "/xranitj/",
    translation: "simpan",
    category: "verb",
    frequency: 97,
    examples: [
      { sentence: "Сохрани эту книгу", translation: "Simpan buku ini" },
      { sentence: "Хранить деньги", translation: "Simpan uang" },
    ],
    wordFamily: [
      { word: "сохранять", translation: "menyimpan, memelihara" },
      { word: "сохранение", translation: "penyimpanan, simpanan" },
    ],
    lessonIds: [3],
  },

  {
    id: 98,
    word: "кончаться",
    pronunciation: "/kontɕatjsja/",
    translation: "habis",
    category: "verb",
    frequency: 98,
    examples: [
      { sentence: "Еда закончилась", translation: "Makanan habis" },
      { sentence: "Деньги уже кончились", translation: "Uang sudah habis" },
    ],
    wordFamily: [
      { word: "кончить", translation: "menghabiskan, menyudahi" },
      { word: "конец", translation: "akhir, habis" },
    ],
    lessonIds: [3, 9],
  },

  {
    id: 99,
    word: "заканчивать",
    pronunciation: "/zakantɕivatj/",
    translation: "selesai",
    category: "verb",
    frequency: 99,
    examples: [
      { sentence: "Я уже закончил", translation: "Saya sudah selesai" },
      { sentence: "Закончить работу", translation: "Selesai kerja" },
    ],
    wordFamily: [
      { word: "закончить", translation: "menyelesaikan, selesai" },
      { word: "завершение", translation: "penyelesaian" },
    ],
    lessonIds: [3, 9],
  },

  {
    id: 100,
    word: "начинать",
    pronunciation: "/natɕinatj/",
    translation: "mulai",
    category: "verb",
    frequency: 100,
    examples: [
      { sentence: "Начать учиться", translation: "Mulai belajar" },
      { sentence: "Начать с сейчас", translation: "Mulai dari sekarang" },
    ],
    wordFamily: [
      { word: "начать", translation: "memulai" },
      { word: "начало", translation: "permulaan" },
    ],
    lessonIds: [3],
  },

  {
    id: 101,
    word: "когда",
    pronunciation: "/koɡda/",
    translation: "kapan",
    category: "adverb",
    frequency: 101,
    examples: [
      { sentence: "Когда ты придёшь?", translation: "Kapan kamu datang?" },
      { sentence: "Когда мы идём?", translation: "Kapan kita pergi?" },
    ],
    lessonIds: [4],
  },

  {
    id: 102,
    word: "где",
    pronunciation: "/ɡdje/",
    translation: "di mana",
    category: "adverb",
    frequency: 102,
    examples: [
      { sentence: "Где твой дом?", translation: "Di mana rumah kamu?" },
      { sentence: "Где ты?", translation: "Di mana kamu?" },
    ],
    lessonIds: [4, 14],
  },

  {
    id: 103,
    word: "куда",
    pronunciation: "/kuda/",
    translation: "ke mana",
    category: "adverb",
    frequency: 103,
    examples: [
      { sentence: "Куда идёшь?", translation: "Mau ke mana?" },
      { sentence: "Куда он пошёл?", translation: "Ke mana dia pergi?" },
    ],
    lessonIds: [4, 14],
  },

  {
    id: 104,
    word: "откуда",
    pronunciation: "/otkuda/",
    translation: "dari mana",
    category: "adverb",
    frequency: 104,
    examples: [
      { sentence: "Откуда ты?", translation: "Dari mana kamu?" },
      { sentence: "Откуда родом?", translation: "Dari mana asalnya?" },
    ],
    lessonIds: [4],
  },

  {
    id: 105,
    word: "сколько",
    pronunciation: "/skoljko/",
    translation: "berapa",
    category: "adverb",
    frequency: 105,
    examples: [
      { sentence: "Сколько стоит?", translation: "Berapa harganya?" },
      { sentence: "Сколько тебе лет?", translation: "Berapa umurmu?" },
    ],
    lessonIds: [4, 7, 8],
  },

  {
    id: 106,
    word: "который",
    pronunciation: "/kotorɨj/",
    translation: "yang mana",
    category: "adverb",
    frequency: 106,
    examples: [
      { sentence: "Который твой дом?", translation: "Yang mana rumahmu?" },
      { sentence: "Который?", translation: "Yang mana?" },
    ],
    lessonIds: [4],
  },

  {
    id: 107,
    word: "почему",
    pronunciation: "/potɕjemu/",
    translation: "mengapa",
    category: "adverb",
    frequency: 107,
    examples: [
      { sentence: "Почему ты уходишь?", translation: "Mengapa kamu pergi?" },
      { sentence: "Я не знаю почему", translation: "Saya tidak tahu mengapa" },
    ],
    wordFamily: [
      { word: "почему-то", translation: "entah kenapa" },
    ],
    lessonIds: [4],
  },

  {
    id: 108,
    word: "как",
    pronunciation: "/kak/",
    translation: "bagaimana cara",
    category: "adverb",
    frequency: 108,
    examples: [
      { sentence: "Пример с \"как\"", translation: "bagaimana cara" },
    ],
    wordFamily: [
      { word: "какой", translation: "yang mana, bagaimana" },
      { word: "как-то", translation: "entah bagaimana" },
    ],
    lessonIds: [4],
  },

  {
    id: 109,
    word: "насколько",
    pronunciation: "/naskoljko/",
    translation: "seberapa",
    category: "adverb",
    frequency: 109,
    examples: [
      { sentence: "Насколько далеко?", translation: "Seberapa jauh?" },
      { sentence: "Насколько большой?", translation: "Seberapa besar?" },
    ],
    lessonIds: [4],
  },

  {
    id: 110,
    word: "ли",
    pronunciation: "/li/",
    translation: "apakah",
    category: "adverb",
    frequency: 110,
    examples: [
      { sentence: "Понимаешь ли ты?", translation: "Apakah kamu mengerti?" },
      { sentence: "Это правда?", translation: "Apakah ini benar?" },
    ],
    lessonIds: [4],
  },

  {
    id: 111,
    word: "кто",
    pronunciation: "/kto/",
    translation: "siapa-siapa",
    category: "adverb",
    frequency: 111,
    examples: [
      { sentence: "Кто именно?", translation: "Siapa saja?" },
    ],
    wordFamily: [
      { word: "кто-то", translation: "seseorang" },
      { word: "никто", translation: "tidak seorang pun" },
    ],
    lessonIds: [4],
  },

  {
    id: 112,
    word: "когда-нибудь",
    pronunciation: "/koɡda-nibudj/",
    translation: "kapan-kapan",
    category: "adverb",
    frequency: 112,
    examples: [
      { sentence: "Приходи как-нибудь", translation: "Datanglah kapan-kapan" },
    ],
    lessonIds: [4, 11],
  },

  {
    id: 113,
    word: "так",
    pronunciation: "/tak/",
    translation: "begitu",
    category: "adverb",
    frequency: 113,
    examples: [
      { sentence: "Такой большой", translation: "Begitu besar" },
      { sentence: "Просто так", translation: "Begitu saja" },
    ],
    lessonIds: [4, 15],
  },

  {
    id: 114,
    word: "вид",
    pronunciation: "/vid/",
    translation: "macam",
    category: "noun",
    frequency: 114,
    examples: [
      { sentence: "Что это за вид?", translation: "Macam apa ini?" },
      { sentence: "Разные виды", translation: "Macam-macam" },
    ],
    lessonIds: [4],
  },

  {
    id: 115,
    word: "тип",
    pronunciation: "/tip/",
    translation: "jenis",
    category: "noun",
    frequency: 115,
    examples: [
      { sentence: "Какого типа?", translation: "Jenis apa?" },
      { sentence: "Тип еды", translation: "Jenis makanan" },
    ],
    lessonIds: [4],
  },

  {
    id: 116,
    word: "неизвестно",
    pronunciation: "/njeizvjestno/",
    translation: "entah",
    category: "adverb",
    frequency: 116,
    examples: [
      { sentence: "Неизвестно кто", translation: "Entah siapa" },
      { sentence: "Неизвестно почему", translation: "Entah kenapa" },
    ],
    lessonIds: [4],
  },

  {
    id: 117,
    word: "или же",
    pronunciation: "/ili ʐje/",
    translation: "ataukah",
    category: "conjunction",
    frequency: 117,
    examples: [
      { sentence: "Это или же то?", translation: "Ini ataukah itu?" },
    ],
    lessonIds: [4, 15],
  },

  {
    id: 118,
    word: "который же",
    pronunciation: "/kotorɨj ʐje/",
    translation: "manakah",
    category: "adverb",
    frequency: 118,
    examples: [
      { sentence: "Которое же верно?", translation: "Manakah yang benar?" },
      { sentence: "Которое твой выбор?", translation: "Manakah pilihanmu?" },
    ],
    lessonIds: [4],
  },

  {
    id: 119,
    word: "когда же",
    pronunciation: "/koɡda ʐje/",
    translation: "bilakah",
    category: "adverb",
    frequency: 119,
    examples: [
      { sentence: "Когда же он придёт?", translation: "Bilakah dia datang?" },
      { sentence: "Когда же мы начнём?", translation: "Bilakah kita mulai?" },
    ],
    lessonIds: [4],
  },

  {
    id: 120,
    word: "как же",
    pronunciation: "/kak ʐje/",
    translation: "bagaimanakah",
    category: "adverb",
    frequency: 120,
    examples: [
      { sentence: "Каким же образом?", translation: "Bagaimanakah caranya?" },
      { sentence: "Как же твои дела?", translation: "Bagaimanakah keadaanmu?" },
    ],
    lessonIds: [4],
  },

  {
    id: 121,
    word: "не",
    pronunciation: "/nje/",
    translation: "bukan",
    category: "adverb",
    frequency: 121,
    examples: [
      { sentence: "Это не моя книга", translation: "Ini bukan buku saya" },
      { sentence: "Он не учитель", translation: "Dia bukan guru" },
    ],
    lessonIds: [5],
  },

  {
    id: 122,
    word: "ещё не",
    pronunciation: "/jeɕːjo nje/",
    translation: "belum",
    category: "adverb",
    frequency: 122,
    examples: [
      { sentence: "Я ещё не готов", translation: "Saya belum siap" },
      { sentence: "Ещё не ел", translation: "Belum makan" },
    ],
    lessonIds: [5],
  },

  {
    id: 123,
    word: "не",
    pronunciation: "/nje/",
    translation: "jangan",
    category: "adverb",
    frequency: 123,
    examples: [
      { sentence: "Не уходи!", translation: "Jangan pergi!" },
      { sentence: "Не забудь!", translation: "Jangan lupa!" },
    ],
    lessonIds: [5],
  },

  {
    id: 124,
    word: "поэтому",
    pronunciation: "/poɛtomu/",
    translation: "jadi",
    category: "conjunction",
    frequency: 124,
    examples: [
      { sentence: "Итак, мы идём", translation: "Jadi, kita pergi" },
    ],
    lessonIds: [5, 15],
  },

  {
    id: 125,
    word: "может быть",
    pronunciation: "/moʐjet bɨtj/",
    translation: "mungkin",
    category: "adverb",
    frequency: 125,
    examples: [
      { sentence: "Может быть, он придёт", translation: "Mungkin dia datang" },
      { sentence: "Невозможно", translation: "Tidak mungkin" },
    ],
    lessonIds: [11],
  },

  {
    id: 126,
    word: "всегда",
    pronunciation: "/vsjeɡda/",
    translation: "selalu",
    category: "adverb",
    frequency: 126,
    examples: [
      { sentence: "Всегда учиться", translation: "Selalu belajar" },
    ],
    lessonIds: [9],
  },

  {
    id: 127,
    word: "когда-либо",
    pronunciation: "/koɡda-libo/",
    translation: "pernah",
    category: "adverb",
    frequency: 127,
    examples: [
      { sentence: "Я был на Бали", translation: "Saya pernah ke Bali" },
      { sentence: "Ещё никогда", translation: "Belum pernah" },
    ],
    lessonIds: [5, 9],
  },

  {
    id: 128,
    word: "оставаться",
    pronunciation: "/ostavatjsja/",
    translation: "tetap",
    category: "adverb",
    frequency: 128,
    examples: [
      { sentence: "Он остаётся молчаливым", translation: "Dia tetap diam" },
      { sentence: "Держись!", translation: "Tetap semangat!" },
    ],
    lessonIds: [5],
  },

  {
    id: 129,
    word: "не",
    pronunciation: "/nje/",
    translation: "tak",
    category: "adverb",
    frequency: 129,
    examples: [
      { sentence: "Не знаю", translation: "Tak tahu" },
      { sentence: "Ничего, нормально", translation: "Tak apa" },
    ],
    lessonIds: [5],
  },

  {
    id: 130,
    word: "без",
    pronunciation: "/bjez/",
    translation: "tanpa",
    category: "preposition",
    frequency: 130,
    examples: [
      { sentence: "Без тебя", translation: "Tanpa kamu" },
      { sentence: "Без проблем", translation: "Tanpa masalah" },
    ],
    lessonIds: [5, 14],
  },

  {
    id: 131,
    word: "а",
    pronunciation: "/a/",
    translation: "melainkan",
    category: "conjunction",
    frequency: 131,
    examples: [
      { sentence: "Не я, а он", translation: "Bukan saya, melainkan dia" },
      { sentence: "Не это, а то", translation: "Bukan ini, melainkan itu" },
    ],
    lessonIds: [5, 15],
  },

  {
    id: 132,
    word: "не только",
    pronunciation: "/nje toljko/",
    translation: "bukan saja",
    category: "adverb",
    frequency: 132,
    examples: [
      { sentence: "Не только я", translation: "Bukan saja saya" },
    ],
    lessonIds: [5, 15],
  },

  {
    id: 133,
    word: "кроме",
    pronunciation: "/kromje/",
    translation: "kecuali",
    category: "preposition",
    frequency: 133,
    examples: [
      { sentence: "Все кроме меня", translation: "Semua kecuali saya" },
      { sentence: "Кроме воскресенья", translation: "Kecuali hari Minggu" },
    ],
    lessonIds: [5, 14],
  },

  {
    id: 134,
    word: "с",
    pronunciation: "/s/",
    translation: "sama",
    category: "preposition",
    frequency: 134,
    examples: [
      { sentence: "Со мной", translation: "Sama saya" },
      { sentence: "Одинаковый по размеру", translation: "Sama besar" },
    ],
    lessonIds: [5, 14],
  },

  {
    id: 135,
    word: "нет",
    pronunciation: "/njet/",
    translation: "tidak ada",
    category: "adverb",
    frequency: 135,
    examples: [
      { sentence: "Нет проблем", translation: "Tidak ada masalah" },
      { sentence: "Никого нет", translation: "Tidak ada seorang pun" },
    ],
    wordFamily: [
      { word: "отрицание", translation: "negasi, sangkalan" },
    ],
    lessonIds: [5],
  },

  {
    id: 136,
    word: "может быть",
    pronunciation: "/moʐjet bɨtj/",
    translation: "bisa jadi",
    category: "adverb",
    frequency: 136,
    examples: [
      { sentence: "Может быть, он забыл", translation: "Bisa jadi dia lupa" },
      { sentence: "Может быть правда", translation: "Bisa jadi benar" },
    ],
    lessonIds: [5, 11],
  },

  {
    id: 137,
    word: "часто",
    pronunciation: "/tɕasto/",
    translation: "acap kali",
    category: "adverb",
    frequency: 137,
    examples: [
      { sentence: "Часто идёт дождь", translation: "Acap kali hujan" },
    ],
    lessonIds: [9],
  },

  {
    id: 138,
    word: "редко",
    pronunciation: "/rjedko/",
    translation: "jarang",
    category: "adverb",
    frequency: 138,
    examples: [
      { sentence: "Очень редко", translation: "Jarang sekali" },
    ],
    lessonIds: [9],
  },

  {
    id: 139,
    word: "почти",
    pronunciation: "/potɕti/",
    translation: "hampir",
    category: "adverb",
    frequency: 139,
    examples: [
      { sentence: "Почти готово", translation: "Hampir selesai" },
      { sentence: "Почти забыл", translation: "Hampir lupa" },
    ],
    lessonIds: [5],
  },

  {
    id: 140,
    word: "один раз; очень",
    pronunciation: "/odin raz; otɕjenj/",
    translation: "sekali",
    category: "adverb",
    frequency: 140,
    examples: [
      { sentence: "Ещё раз", translation: "Sekali lagi" },
      { sentence: "Очень хорошо", translation: "Baik sekali" },
    ],
    lessonIds: [7, 13],
  },

  {
    id: 141,
    word: "иметь",
    pronunciation: "/imjetj/",
    translation: "punya",
    category: "verb",
    frequency: 141,
    examples: [
      { sentence: "У меня есть книга", translation: "Saya punya buku" },
      { sentence: "Это моё", translation: "Ini punya saya" },
    ],
    lessonIds: [6, 7],
  },

  {
    id: 142,
    word: "новый",
    pronunciation: "/novɨj/",
    translation: "baru",
    category: "adjective",
    frequency: 142,
    examples: [
      { sentence: "Новая машина", translation: "Mobil baru" },
      { sentence: "Новый дом", translation: "Rumah baru" },
    ],
    wordFamily: [
      { word: "новинка", translation: "baru, kabar baru" },
      { word: "обновлять", translation: "memperbarui" },
      { word: "обновление", translation: "pembaruan" },
    ],
    lessonIds: [6, 13],
  },

  {
    id: 143,
    word: "собственность",
    pronunciation: "/sobstvjennostj/",
    translation: "milik",
    category: "noun",
    frequency: 143,
    examples: [
      { sentence: "Это моя собственность", translation: "Ini milik saya" },
      { sentence: "Чьё это?", translation: "Milik siapa ini?" },
    ],
    lessonIds: [6],
  },

  {
    id: 144,
    word: "сам",
    pronunciation: "/sam/",
    translation: "sendiri",
    category: "adverb",
    frequency: 144,
    examples: [
      { sentence: "Я сам", translation: "Saya sendiri" },
      { sentence: "Работать самостоятельно", translation: "Kerja sendiri" },
    ],
    lessonIds: [3, 6],
  },

  {
    id: 145,
    word: "вместе",
    pronunciation: "/vmjestje/",
    translation: "bersama",
    category: "adverb",
    frequency: 145,
    examples: [
      { sentence: "Мы вместе", translation: "Kita bersama" },
      { sentence: "Учиться вместе", translation: "Belajar bersama" },
    ],
    lessonIds: [6],
  },

  {
    id: 146,
    word: "каждый",
    pronunciation: "/kaʐdɨj/",
    translation: "masing-masing",
    category: "adverb",
    frequency: 146,
    examples: [
      { sentence: "Свой собственный дом", translation: "Rumah masing-masing" },
    ],
    lessonIds: [6],
  },

  {
    id: 147,
    word: "как",
    pronunciation: "/kak/",
    translation: "seperti",
    category: "preposition",
    frequency: 147,
    examples: [
      { sentence: "Как я", translation: "Seperti saya" },
      { sentence: "Как это, вот так", translation: "Seperti ini" },
    ],
    wordFamily: [
      { word: "какой", translation: "yang mana, bagaimana" },
      { word: "как-то", translation: "entah bagaimana" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 148,
    word: "между",
    pronunciation: "/mjeʐdu/",
    translation: "antara",
    category: "preposition",
    frequency: 148,
    examples: [
      { sentence: "Между мной и ним", translation: "Antara saya dan dia" },
      { sentence: "Среди них", translation: "Di antara mereka" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 149,
    word: "о",
    pronunciation: "/o/",
    translation: "tentang",
    category: "preposition",
    frequency: 149,
    examples: [
      { sentence: "Рассказ о нём", translation: "Cerita tentang dia" },
      { sentence: "О чём?", translation: "Tentang apa?" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 150,
    word: "к",
    pronunciation: "/k/",
    translation: "terhadap",
    category: "preposition",
    frequency: 150,
    examples: [
      { sentence: "Добрый к людям", translation: "Baik terhadap orang" },
      { sentence: "Отношение к", translation: "Sikap terhadap" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 151,
    word: "для",
    pronunciation: "/dlja/",
    translation: "bagi",
    category: "preposition",
    frequency: 151,
    examples: [
      { sentence: "Для меня", translation: "Bagi saya" },
      { sentence: "Для тебя", translation: "Bagi kamu" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 152,
    word: "для",
    pronunciation: "/dlja/",
    translation: "untuk",
    category: "preposition",
    frequency: 152,
    examples: [
      { sentence: "Для меня", translation: "Untuk saya" },
      { sentence: "Для чего?", translation: "Untuk apa?" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 153,
    word: "от",
    pronunciation: "/ot/",
    translation: "oleh",
    category: "preposition",
    frequency: 153,
    examples: [
      { sentence: "Сделано мной", translation: "Dibuat oleh saya" },
      { sentence: "Поэтому", translation: "Oleh karena itu" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 154,
    word: "с",
    pronunciation: "/s/",
    translation: "dengan",
    category: "preposition",
    frequency: 154,
    examples: [
      { sentence: "Со мной", translation: "Dengan saya" },
      { sentence: "С удовольствием", translation: "Dengan senang hati" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 155,
    word: "способом",
    pronunciation: "/sposobom/",
    translation: "secara",
    category: "adverb",
    frequency: 155,
    examples: [
      { sentence: "Медленно", translation: "Secara perlahan" },
      { sentence: "Непосредственно", translation: "Secara langsung" },
    ],
    lessonIds: [6],
  },

  {
    id: 156,
    word: "через",
    pronunciation: "/tɕjerjez/",
    translation: "melalui",
    category: "preposition",
    frequency: 156,
    examples: [
      { sentence: "По телефону", translation: "Melalui telepon" },
      { sentence: "Через интернет", translation: "Melalui internet" },
    ],
    lessonIds: [6, 14],
  },

  {
    id: 157,
    word: "каждый",
    pronunciation: "/kaʐdɨj/",
    translation: "tiap",
    category: "adverb",
    frequency: 157,
    examples: [
      { sentence: "Каждый день", translation: "Tiap hari" },
      { sentence: "Каждую неделю", translation: "Tiap minggu" },
    ],
    lessonIds: [6, 8],
  },

  {
    id: 158,
    word: "каждый",
    pronunciation: "/kaʐdɨj/",
    translation: "setiap",
    category: "adverb",
    frequency: 158,
    examples: [
      { sentence: "Каждый человек", translation: "Setiap orang" },
      { sentence: "Каждый день", translation: "Setiap hari" },
    ],
    lessonIds: [6, 8],
  },

  {
    id: 159,
    word: "все",
    pronunciation: "/vsje/",
    translation: "semua",
    category: "adverb",
    frequency: 159,
    examples: [
      { sentence: "Все люди", translation: "Semua orang" },
      { sentence: "Всё готово", translation: "Semua sudah siap" },
    ],
    lessonIds: [6],
  },

  {
    id: 160,
    word: "весь",
    pronunciation: "/vjesj/",
    translation: "seluruh",
    category: "adverb",
    frequency: 160,
    examples: [
      { sentence: "Вся Индонезия", translation: "Seluruh Indonesia" },
      { sentence: "Весь мир", translation: "Seluruh dunia" },
    ],
    lessonIds: [6],
  },

  {
    id: 161,
    word: "один",
    pronunciation: "/odin/",
    translation: "satu",
    category: "number",
    frequency: 161,
    examples: [
      { sentence: "Один человек", translation: "Satu orang" },
      { sentence: "Одна книга", translation: "Satu buku" },
    ],
    lessonIds: [7],
  },

  {
    id: 162,
    word: "два",
    pronunciation: "/dva/",
    translation: "dua",
    category: "number",
    frequency: 162,
    examples: [
      { sentence: "Два человека", translation: "Dua orang" },
      { sentence: "Две книги", translation: "Dua buku" },
    ],
    lessonIds: [7],
  },

  {
    id: 163,
    word: "три",
    pronunciation: "/tri/",
    translation: "tiga",
    category: "number",
    frequency: 163,
    examples: [
      { sentence: "Три человека", translation: "Tiga orang" },
      { sentence: "Три часа", translation: "Jam tiga" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 164,
    word: "четыре",
    pronunciation: "/tɕjetɨrje/",
    translation: "empat",
    category: "number",
    frequency: 164,
    examples: [
      { sentence: "Четыре книги", translation: "Empat buku" },
      { sentence: "Четыре человека", translation: "Empat orang" },
    ],
    lessonIds: [7],
  },

  {
    id: 165,
    word: "пять",
    pronunciation: "/pjatj/",
    translation: "lima",
    category: "number",
    frequency: 165,
    examples: [
      { sentence: "Пять дней", translation: "Lima hari" },
      { sentence: "Пять часов", translation: "Jam lima" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 166,
    word: "шесть",
    pronunciation: "/ʂjestj/",
    translation: "enam",
    category: "number",
    frequency: 166,
    examples: [
      { sentence: "Шесть человек", translation: "Enam orang" },
      { sentence: "Шесть часов", translation: "Jam enam" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 167,
    word: "семь",
    pronunciation: "/sjemj/",
    translation: "tujuh",
    category: "number",
    frequency: 167,
    examples: [
      { sentence: "Семь дней", translation: "Tujuh hari" },
      { sentence: "Семь часов", translation: "Jam tujuh" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 168,
    word: "восемь",
    pronunciation: "/vosjemj/",
    translation: "delapan",
    category: "number",
    frequency: 168,
    examples: [
      { sentence: "Восемь книг", translation: "Delapan buku" },
      { sentence: "Восемь часов", translation: "Jam delapan" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 169,
    word: "девять",
    pronunciation: "/djevjatj/",
    translation: "sembilan",
    category: "number",
    frequency: 169,
    examples: [
      { sentence: "Девять человек", translation: "Sembilan orang" },
      { sentence: "Девять часов", translation: "Jam sembilan" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 170,
    word: "десять",
    pronunciation: "/djesjatj/",
    translation: "sepuluh",
    category: "number",
    frequency: 170,
    examples: [
      { sentence: "Десять книг", translation: "Sepuluh buku" },
      { sentence: "Десять часов", translation: "Jam sepuluh" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 171,
    word: "одиннадцать",
    pronunciation: "/odinnadtsatj/",
    translation: "sebelas",
    category: "number",
    frequency: 171,
    examples: [
      { sentence: "Одиннадцать человек", translation: "Sebelas orang" },
      { sentence: "Номер одиннадцать", translation: "Nomor sebelas" },
    ],
    lessonIds: [7],
  },

  {
    id: 172,
    word: "двенадцать",
    pronunciation: "/dvjenadtsatj/",
    translation: "dua belas",
    category: "number",
    frequency: 172,
    examples: [
      { sentence: "Двенадцать месяцев", translation: "Dua belas bulan" },
      { sentence: "Двенадцать часов", translation: "Jam dua belas" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 173,
    word: "сто",
    pronunciation: "/sto/",
    translation: "seratus",
    category: "number",
    frequency: 173,
    examples: [
      { sentence: "Сто рупий", translation: "Seratus rupiah" },
      { sentence: "Сто человек", translation: "Seratus orang" },
    ],
    lessonIds: [7],
  },

  {
    id: 174,
    word: "двести",
    pronunciation: "/dvjesti/",
    translation: "dua ratus",
    category: "number",
    frequency: 174,
    examples: [
      { sentence: "Двести книг", translation: "Dua ratus buku" },
      { sentence: "Двести рупий", translation: "Dua ratus rupiah" },
    ],
    lessonIds: [7],
  },

  {
    id: 175,
    word: "тысяча",
    pronunciation: "/tɨsjatɕa/",
    translation: "seribu",
    category: "number",
    frequency: 175,
    examples: [
      { sentence: "Тысяча рупий", translation: "Seribu rupiah" },
      { sentence: "Тысяча человек", translation: "Seribu orang" },
    ],
    lessonIds: [7],
  },

  {
    id: 176,
    word: "миллион",
    pronunciation: "/million/",
    translation: "sejuta",
    category: "number",
    frequency: 176,
    examples: [
      { sentence: "Миллион рупий", translation: "Sejuta rupiah" },
    ],
    lessonIds: [7],
  },

  {
    id: 177,
    word: "номер",
    pronunciation: "/nomjer/",
    translation: "nomor",
    category: "noun",
    frequency: 177,
    examples: [
      { sentence: "Номер телефона", translation: "Nomor telepon" },
      { sentence: "Какой номер?", translation: "Nomor berapa?" },
    ],
    lessonIds: [7],
  },

  {
    id: 178,
    word: "цифра",
    pronunciation: "/tsifra/",
    translation: "angka",
    category: "noun",
    frequency: 178,
    examples: [
      { sentence: "Цифра один", translation: "Angka satu" },
      { sentence: "Какое число?", translation: "Angka berapa?" },
    ],
    lessonIds: [7],
  },

  {
    id: 179,
    word: "считать",
    pronunciation: "/stɕitatj/",
    translation: "hitung",
    category: "verb",
    frequency: 179,
    examples: [
      { sentence: "Считай с одного", translation: "Hitung dari satu" },
      { sentence: "Я считаю", translation: "Saya hitung" },
    ],
    lessonIds: [7],
  },

  {
    id: 180,
    word: "половина",
    pronunciation: "/polovina/",
    translation: "setengah",
    category: "number",
    frequency: 180,
    examples: [
      { sentence: "Полчаса", translation: "Setengah jam" },
      { sentence: "Полкило", translation: "Setengah kilo" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 181,
    word: "более",
    pronunciation: "/boljeje/",
    translation: "lebih",
    category: "adverb",
    frequency: 181,
    examples: [
      { sentence: "Больше десяти", translation: "Lebih dari sepuluh" },
      { sentence: "Лучше", translation: "Lebih baik" },
    ],
    lessonIds: [7, 13],
  },

  {
    id: 182,
    word: "менее",
    pronunciation: "/mjenjeje/",
    translation: "kurang",
    category: "adverb",
    frequency: 182,
    examples: [
      { sentence: "Меньше пяти", translation: "Kurang dari lima" },
      { sentence: "Не хватает одного", translation: "Kurang satu" },
    ],
    lessonIds: [7, 13],
  },

  {
    id: 183,
    word: "раз",
    pronunciation: "/raz/",
    translation: "kali",
    category: "adverb",
    frequency: 183,
    examples: [
      { sentence: "Один раз", translation: "Satu kali" },
      { sentence: "Два раза в день", translation: "Dua kali sehari" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 184,
    word: "складывать; раз",
    pronunciation: "/skladɨvatj; raz/",
    translation: "lipat",
    category: "verb",
    frequency: 184,
    examples: [
      { sentence: "Вдвое", translation: "Dua lipat" },
      { sentence: "Вдвойне", translation: "Lipat ganda" },
    ],
    lessonIds: [7],
  },

  {
    id: 185,
    word: "двойной",
    pronunciation: "/dvojnoj/",
    translation: "ganda",
    category: "adverb",
    frequency: 185,
    examples: [
      { sentence: "Вдвойне", translation: "Lipat ganda" },
      { sentence: "Двойная цена", translation: "Harga ganda" },
    ],
    lessonIds: [7],
  },

  {
    id: 186,
    word: "половина",
    pronunciation: "/polovina/",
    translation: "separuh",
    category: "number",
    frequency: 186,
    examples: [
      { sentence: "Половина книги", translation: "Separuh buku" },
      { sentence: "Половина дороги", translation: "Separuh jalan" },
    ],
    lessonIds: [7],
  },

  {
    id: 187,
    word: "одна треть",
    pronunciation: "/odna trjetj/",
    translation: "sepertiga",
    category: "number",
    frequency: 187,
    examples: [
      { sentence: "Треть цены", translation: "Sepertiga dari harga" },
      { sentence: "Треть часа", translation: "Sepertiga jam" },
    ],
    lessonIds: [7],
  },

  {
    id: 188,
    word: "одна четверть",
    pronunciation: "/odna tɕjetvjertj/",
    translation: "seperempat",
    category: "number",
    frequency: 188,
    examples: [
      { sentence: "Четверть часа", translation: "Seperempat jam" },
      { sentence: "Четверть кило", translation: "Seperempat kilo" },
    ],
    lessonIds: [7, 8],
  },

  {
    id: 189,
    word: "килограмм",
    pronunciation: "/kiloɡramm/",
    translation: "kilo",
    category: "noun",
    frequency: 189,
    examples: [
      { sentence: "Один килограмм риса", translation: "Satu kilo beras" },
      { sentence: "Сколько килограмм?", translation: "Berapa kilo?" },
    ],
    lessonIds: [7],
  },

  {
    id: 190,
    word: "метр",
    pronunciation: "/mjetr/",
    translation: "meter",
    category: "noun",
    frequency: 190,
    examples: [
      { sentence: "Десять метров", translation: "Sepuluh meter" },
      { sentence: "Измерительная лента", translation: "Meteran" },
    ],
    lessonIds: [7],
  },

  {
    id: 191,
    word: "литр",
    pronunciation: "/litr/",
    translation: "liter",
    category: "noun",
    frequency: 191,
    examples: [
      { sentence: "Два литра воды", translation: "Dua liter air" },
      { sentence: "Один литр молока", translation: "Satu liter susu" },
    ],
    lessonIds: [7],
  },

  {
    id: 192,
    word: "количество",
    pronunciation: "/kolitɕjestvo/",
    translation: "jumlah",
    category: "noun",
    frequency: 192,
    examples: [
      { sentence: "Количество людей", translation: "Jumlah orang" },
      { sentence: "Сколько всего?", translation: "Jumlahnya berapa?" },
    ],
    lessonIds: [7],
  },

  {
    id: 193,
    word: "итог",
    pronunciation: "/itoɡ/",
    translation: "total",
    category: "noun",
    frequency: 193,
    examples: [
      { sentence: "Общая цена", translation: "Total harga" },
      { sentence: "Всего десять", translation: "Total sepuluh" },
    ],
    lessonIds: [7],
  },

  {
    id: 194,
    word: "первый",
    pronunciation: "/pjervɨj/",
    translation: "pertama",
    category: "number",
    frequency: 194,
    examples: [
      { sentence: "В первый раз", translation: "Pertama kali" },
      { sentence: "Первый ребёнок", translation: "Anak pertama" },
    ],
    lessonIds: [7],
  },

  {
    id: 195,
    word: "второй",
    pronunciation: "/vtoroj/",
    translation: "kedua",
    category: "number",
    frequency: 195,
    examples: [
      { sentence: "Во второй раз", translation: "Kedua kalinya" },
      { sentence: "Второй ребёнок", translation: "Anak kedua" },
    ],
    lessonIds: [7],
  },

  {
    id: 196,
    word: "третий",
    pronunciation: "/trjetij/",
    translation: "ketiga",
    category: "number",
    frequency: 196,
    examples: [
      { sentence: "В третий раз", translation: "Ketiga kalinya" },
      { sentence: "Третья часть", translation: "Bagian ketiga" },
    ],
    lessonIds: [7],
  },

  {
    id: 197,
    word: "последний",
    pronunciation: "/posljednij/",
    translation: "terakhir",
    category: "adjective",
    frequency: 197,
    examples: [
      { sentence: "Последний", translation: "Yang terakhir" },
      { sentence: "В последний раз", translation: "Kali terakhir" },
    ],
    lessonIds: [7, 13],
  },

  {
    id: 198,
    word: "несколько",
    pronunciation: "/njeskoljko/",
    translation: "beberapa",
    category: "adverb",
    frequency: 198,
    examples: [
      { sentence: "Несколько человек", translation: "Beberapa orang" },
      { sentence: "Несколько дней", translation: "Beberapa hari" },
    ],
    lessonIds: [7],
  },

  {
    id: 199,
    word: "много",
    pronunciation: "/mnoɡo/",
    translation: "banyak",
    category: "adverb",
    frequency: 199,
    examples: [
      { sentence: "Много людей", translation: "Banyak orang" },
      { sentence: "Сколько?", translation: "Berapa banyak?" },
    ],
    lessonIds: [7, 13],
  },

  {
    id: 200,
    word: "мало",
    pronunciation: "/malo/",
    translation: "sedikit",
    category: "adverb",
    frequency: 200,
    examples: [
      { sentence: "Только немного", translation: "Sedikit saja" },
      { sentence: "Мало-помалу", translation: "Sedikit demi sedikit" },
    ],
    lessonIds: [7, 13],
  },

  {
    id: 201,
    word: "рис",
    pronunciation: "/ris/",
    translation: "nasi",
    category: "noun",
    frequency: 201,
    examples: [
      { sentence: "Я ем рис", translation: "Saya makan nasi" },
      { sentence: "Жареный рис", translation: "Nasi goreng" },
    ],
    lessonIds: [3],
  },

  {
    id: 202,
    word: "вода",
    pronunciation: "/voda/",
    translation: "air",
    category: "noun",
    frequency: 202,
    examples: [
      { sentence: "Вода (букв. 'белая вода')", translation: "Air putih" },
      { sentence: "Пить воду", translation: "Minum air" },
    ],
    lessonIds: [3],
  },

  {
    id: 203,
    word: "кофе",
    pronunciation: "/kofje/",
    translation: "kopi",
    category: "noun",
    frequency: 203,
    examples: [
      { sentence: "Хочешь кофе?", translation: "Mau kopi?" },
      { sentence: "Горячий кофе", translation: "Kopi panas" },
    ],
    lessonIds: [12, 15],
  },

  {
    id: 204,
    word: "чай",
    pronunciation: "/tɕaj/",
    translation: "teh",
    category: "noun",
    frequency: 204,
    examples: [
      { sentence: "Сладкий чай", translation: "Teh manis" },
      { sentence: "Хочешь чай или кофе?", translation: "Mau teh atau kopi?" },
    ],
    lessonIds: [15],
  },

  {
    id: 205,
    word: "еда",
    pronunciation: "/jeda/",
    translation: "makanan",
    category: "noun",
    frequency: 205,
    examples: [
      { sentence: "Вкусная еда", translation: "Makanan enak" },
      { sentence: "Индонезийская еда", translation: "Makanan Indonesia" },
    ],
    lessonIds: [13],
  },

  {
    id: 206,
    word: "сахар",
    pronunciation: "/saxar/",
    translation: "gula",
    category: "noun",
    frequency: 206,
    examples: [
      { sentence: "Сахарный песок", translation: "Gula pasir" },
    ],
    lessonIds: [15],
  },

  {
    id: 207,
    word: "соль",
    pronunciation: "/solj/",
    translation: "garam",
    category: "noun",
    frequency: 207,
    examples: [
      { sentence: "Добавить соли", translation: "Tambah garam" },
      { sentence: "Не хватает соли", translation: "Kurang garam" },
    ],
    lessonIds: [15],
  },

  {
    id: 208,
    word: "молоко",
    pronunciation: "/moloko/",
    translation: "susu",
    category: "noun",
    frequency: 208,
    examples: [
      { sentence: "Кофе с молоком", translation: "Kopi susu" },
      { sentence: "Тёплое молоко", translation: "Susu hangat" },
    ],
    lessonIds: [15],
  },

  {
    id: 209,
    word: "хлеб",
    pronunciation: "/xljeb/",
    translation: "roti",
    category: "noun",
    frequency: 209,
    examples: [
      { sentence: "Белый хлеб", translation: "Roti tawar" },
      { sentence: "Тост", translation: "Roti bakar" },
    ],
    lessonIds: [15],
  },

  {
    id: 210,
    word: "овощи",
    pronunciation: "/ovoɕːi/",
    translation: "sayur",
    category: "noun",
    frequency: 210,
    examples: [
      { sentence: "Суп", translation: "Sayur sop" },
      { sentence: "Есть овощи", translation: "Makan sayur" },
    ],
    lessonIds: [15],
  },

  {
    id: 211,
    word: "фрукты",
    pronunciation: "/fruktɨ/",
    translation: "buah",
    category: "noun",
    frequency: 211,
    examples: [
      { sentence: "Свежие фрукты", translation: "Buah segar" },
      { sentence: "Фруктовый сок", translation: "Jus buah" },
    ],
    lessonIds: [15],
  },

  {
    id: 212,
    word: "мясо",
    pronunciation: "/mjaso/",
    translation: "daging",
    category: "noun",
    frequency: 212,
    examples: [
      { sentence: "Куриное мясо", translation: "Daging ayam" },
      { sentence: "Говядина", translation: "Daging sapi" },
    ],
    lessonIds: [15],
  },

  {
    id: 213,
    word: "рыба",
    pronunciation: "/rɨba/",
    translation: "ikan",
    category: "noun",
    frequency: 213,
    examples: [
      { sentence: "Жареная рыба", translation: "Ikan goreng" },
      { sentence: "Свежая рыба", translation: "Ikan segar" },
    ],
    lessonIds: [15],
  },

  {
    id: 214,
    word: "яйцо",
    pronunciation: "/jajtso/",
    translation: "telur",
    category: "noun",
    frequency: 214,
    examples: [
      { sentence: "Яичница", translation: "Telur goreng" },
      { sentence: "Варёное яйцо", translation: "Telur rebus" },
    ],
    lessonIds: [15],
  },

  {
    id: 215,
    word: "вкусный",
    pronunciation: "/vkusnɨj/",
    translation: "enak",
    category: "adjective",
    frequency: 215,
    examples: [
      { sentence: "Вкусная еда", translation: "Makanan enak" },
      { sentence: "Очень вкусно", translation: "Enak sekali" },
    ],
    lessonIds: [13, 15],
  },

  {
    id: 216,
    word: "острый",
    pronunciation: "/ostrɨj/",
    translation: "pedas",
    category: "adjective",
    frequency: 216,
    examples: [
      { sentence: "Острый соус", translation: "Sambal pedas" },
      { sentence: "Острая еда", translation: "Makanan pedas" },
    ],
    lessonIds: [13, 15],
  },

  {
    id: 217,
    word: "солёный",
    pronunciation: "/soljonɨj/",
    translation: "asin",
    category: "adjective",
    frequency: 217,
    examples: [
      { sentence: "Солёная еда", translation: "Makanan asin" },
      { sentence: "Слишком солёно", translation: "Terlalu asin" },
    ],
    lessonIds: [13, 15],
  },

  {
    id: 218,
    word: "сладкий",
    pronunciation: "/sladkij/",
    translation: "manis",
    category: "adjective",
    frequency: 218,
    examples: [
      { sentence: "Сладкий чай", translation: "Teh manis" },
      { sentence: "Сладкое пирожное", translation: "Kue manis" },
    ],
    lessonIds: [13, 15],
  },

  {
    id: 219,
    word: "горький",
    pronunciation: "/ɡorjkij/",
    translation: "pahit",
    category: "adjective",
    frequency: 219,
    examples: [
      { sentence: "Горький кофе", translation: "Kopi pahit" },
      { sentence: "Горькое лекарство", translation: "Obat pahit" },
    ],
    lessonIds: [13, 15],
  },

  {
    id: 220,
    word: "готовить",
    pronunciation: "/ɡotovitj/",
    translation: "masak",
    category: "verb",
    frequency: 220,
    examples: [
      { sentence: "Мама готовит", translation: "Ibu sedang masak" },
      { sentence: "Я люблю готовить", translation: "Saya suka masak" },
    ],
    lessonIds: [10, 15],
  },

  {
    id: 221,
    word: "жарить",
    pronunciation: "/ʐaritj/",
    translation: "goreng",
    category: "verb",
    frequency: 221,
    examples: [
      { sentence: "Жареный рис", translation: "Nasi goreng" },
      { sentence: "Жареная рыба", translation: "Ikan goreng" },
    ],
    lessonIds: [15],
  },

  {
    id: 222,
    word: "варить",
    pronunciation: "/varitj/",
    translation: "rebus",
    category: "verb",
    frequency: 222,
    examples: [
      { sentence: "Варёное яйцо", translation: "Telur rebus" },
      { sentence: "Кипячёная вода", translation: "Air rebus" },
    ],
    lessonIds: [15],
  },

  {
    id: 223,
    word: "жарить на огне",
    pronunciation: "/ʐaritj na oɡnje/",
    translation: "bakar",
    category: "verb",
    frequency: 223,
    examples: [
      { sentence: "Тост", translation: "Roti bakar" },
      { sentence: "Жареная курица", translation: "Ayam bakar" },
    ],
    lessonIds: [15],
  },

  {
    id: 224,
    word: "голодный",
    pronunciation: "/ɡolodnɨj/",
    translation: "lapar",
    category: "adjective",
    frequency: 224,
    examples: [
      { sentence: "Я голоден", translation: "Saya lapar" },
      { sentence: "Очень голоден", translation: "Lapar sekali" },
    ],
    lessonIds: [13, 15],
  },

  {
    id: 225,
    word: "жажда",
    pronunciation: "/ʐaʐda/",
    translation: "haus",
    category: "adjective",
    frequency: 225,
    examples: [
      { sentence: "Я хочу пить", translation: "Saya haus" },
      { sentence: "Очень хочется пить", translation: "Haus sekali" },
    ],
    lessonIds: [13, 15],
  },

  {
    id: 226,
    word: "завтрак",
    pronunciation: "/zavtrak/",
    translation: "sarapan",
    category: "noun",
    frequency: 226,
    examples: [
      { sentence: "Утренний завтрак", translation: "Sarapan pagi" },
      { sentence: "Ещё не завтракал", translation: "Belum sarapan" },
    ],
    lessonIds: [8, 15],
  },

  {
    id: 227,
    word: "обед",
    pronunciation: "/objed/",
    translation: "makan siang",
    category: "noun",
    frequency: 227,
    examples: [
      { sentence: "Обед вместе", translation: "Makan siang bersama" },
      { sentence: "Время обеда", translation: "Waktu makan siang" },
    ],
    lessonIds: [8, 15],
  },

  {
    id: 228,
    word: "ужин",
    pronunciation: "/uʐin/",
    translation: "makan malam",
    category: "noun",
    frequency: 228,
    examples: [
      { sentence: "Романтический ужин", translation: "Makan malam romantis" },
      { sentence: "Уже поужинал?", translation: "Sudah makan malam?" },
    ],
    lessonIds: [8, 15],
  },

  {
    id: 229,
    word: "тарелка",
    pronunciation: "/tarjelka/",
    translation: "piring",
    category: "noun",
    frequency: 229,
    examples: [
      { sentence: "Мыть посуду", translation: "Cuci piring" },
      { sentence: "На тарелке", translation: "Di atas piring" },
    ],
    lessonIds: [15],
  },

  {
    id: 230,
    word: "стакан",
    pronunciation: "/stakan/",
    translation: "gelas",
    category: "noun",
    frequency: 230,
    examples: [
      { sentence: "Стакан воды", translation: "Gelas air" },
      { sentence: "Пустой стакан", translation: "Gelas kosong" },
    ],
    lessonIds: [15],
  },

  {
    id: 231,
    word: "ложка",
    pronunciation: "/loʐka/",
    translation: "sendok",
    category: "noun",
    frequency: 231,
    examples: [
      { sentence: "Столовая ложка", translation: "Sendok makan" },
      { sentence: "Чайная ложка", translation: "Sendok teh" },
    ],
    lessonIds: [15],
  },

  {
    id: 232,
    word: "вилка",
    pronunciation: "/vilka/",
    translation: "garpu",
    category: "noun",
    frequency: 232,
    examples: [
      { sentence: "Использовать вилку", translation: "Pakai garpu" },
      { sentence: "Вилка и нож", translation: "Garpu dan pisau" },
    ],
    lessonIds: [15],
  },

  {
    id: 233,
    word: "ресторан",
    pronunciation: "/rjestoran/",
    translation: "restoran",
    category: "noun",
    frequency: 233,
    examples: [
      { sentence: "Есть в ресторане", translation: "Makan di restoran" },
      { sentence: "Вкусный ресторан", translation: "Restoran enak" },
    ],
    lessonIds: [14, 15],
  },

  {
    id: 234,
    word: "меню",
    pronunciation: "/mjenju/",
    translation: "menu",
    category: "noun",
    frequency: 234,
    examples: [
      { sentence: "Посмотреть меню", translation: "Lihat menu" },
      { sentence: "Меню на сегодня", translation: "Menu hari ini" },
    ],
    lessonIds: [15],
  },

  {
    id: 235,
    word: "заказывать; сообщение",
    pronunciation: "/zakazɨvatj; soobɕːjenije/",
    translation: "pesan",
    category: "verb",
    frequency: 235,
    examples: [
      { sentence: "Отправить сообщение", translation: "Kirim pesan" },
    ],
    lessonIds: [15],
  },

  {
    id: 236,
    word: "платить",
    pronunciation: "/platitj/",
    translation: "bayar",
    category: "verb",
    frequency: 236,
    examples: [
      { sentence: "Платить на кассе", translation: "Bayar di kasir" },
      { sentence: "Уже заплатил", translation: "Sudah bayar" },
    ],
    lessonIds: [16],
  },

  {
    id: 237,
    word: "цена",
    pronunciation: "/tsjena/",
    translation: "harga",
    category: "noun",
    frequency: 237,
    examples: [
      { sentence: "Сколько стоит?", translation: "Harga berapa?" },
      { sentence: "Дешёвая цена", translation: "Harga murah" },
    ],
    lessonIds: [16],
  },

  {
    id: 238,
    word: "дешёвый",
    pronunciation: "/djeʂjovɨj/",
    translation: "murah",
    category: "adjective",
    frequency: 238,
    examples: [
      { sentence: "Дешёвая цена", translation: "Harga murah" },
      { sentence: "Дешёвый товар", translation: "Barang murah" },
    ],
    lessonIds: [13, 16],
  },

  {
    id: 239,
    word: "дорогой",
    pronunciation: "/doroɡoj/",
    translation: "mahal",
    category: "adjective",
    frequency: 239,
    examples: [
      { sentence: "Дорогая машина", translation: "Mobil mahal" },
      { sentence: "Слишком дорого", translation: "Terlalu mahal" },
    ],
    lessonIds: [13, 16],
  },

  {
    id: 240,
    word: "деньги",
    pronunciation: "/djenjɡi/",
    translation: "uang",
    category: "noun",
    frequency: 240,
    examples: [
      { sentence: "Нет денег", translation: "Tidak punya uang" },
      { sentence: "Наличные", translation: "Uang tunai" },
    ],
    lessonIds: [7, 16],
  },

  {
    id: 241,
    word: "день",
    pronunciation: "/djenj/",
    translation: "hari",
    category: "noun",
    frequency: 241,
    examples: [
      { sentence: "Сегодня", translation: "Hari ini" },
      { sentence: "Понедельник", translation: "Hari Senin" },
    ],
    lessonIds: [8],
  },

  {
    id: 242,
    word: "неделя; воскресенье",
    pronunciation: "/njedjelja; voskrjesjenjje/",
    translation: "minggu",
    category: "noun",
    frequency: 242,
    examples: [
      { sentence: "На следующей неделе", translation: "Minggu depan" },
      { sentence: "Воскресенье", translation: "Hari Minggu" },
    ],
    lessonIds: [8, 11],
  },

  {
    id: 243,
    word: "месяц; луна",
    pronunciation: "/mjesjats; luna/",
    translation: "bulan",
    category: "noun",
    frequency: 243,
    examples: [
      { sentence: "В следующем месяце", translation: "Bulan depan" },
      { sentence: "В этом месяце", translation: "Bulan ini" },
    ],
    lessonIds: [8],
  },

  {
    id: 244,
    word: "год",
    pronunciation: "/ɡod/",
    translation: "tahun",
    category: "noun",
    frequency: 244,
    examples: [
      { sentence: "Новый год", translation: "Tahun baru" },
      { sentence: "В следующем году", translation: "Tahun depan" },
    ],
    lessonIds: [8],
  },

  {
    id: 245,
    word: "час",
    pronunciation: "/tɕas/",
    translation: "jam",
    category: "noun",
    frequency: 245,
    examples: [
      { sentence: "Который час?", translation: "Jam berapa?" },
      { sentence: "Два часа", translation: "Jam dua" },
    ],
    lessonIds: [8, 14],
  },

  {
    id: 246,
    word: "понедельник",
    pronunciation: "/ponjedjeljnik/",
    translation: "hari Senin",
    category: "noun",
    frequency: 246,
    examples: [
      { sentence: "Первый понедельник", translation: "Hari Senin pertama" },
      { sentence: "Завтра понедельник", translation: "Besok hari Senin" },
    ],
    lessonIds: [8],
  },

  {
    id: 247,
    word: "вторник",
    pronunciation: "/vtornik/",
    translation: "hari Selasa",
    category: "noun",
    frequency: 247,
    examples: [
      { sentence: "Во вторник работаю", translation: "Hari Selasa kerja" },
      { sentence: "Во вторник прошлый", translation: "Selasa lalu" },
    ],
    lessonIds: [8],
  },

  {
    id: 248,
    word: "среда",
    pronunciation: "/srjeda/",
    translation: "hari Rabu",
    category: "noun",
    frequency: 248,
    examples: [
      { sentence: "В среду собрание", translation: "Hari Rabu rapat" },
      { sentence: "В следующую среду", translation: "Rabu depan" },
    ],
    lessonIds: [8],
  },

  {
    id: 249,
    word: "четверг",
    pronunciation: "/tɕjetvjerɡ/",
    translation: "hari Kamis",
    category: "noun",
    frequency: 249,
    examples: [
      { sentence: "В четверг выходной", translation: "Hari Kamis libur" },
      { sentence: "Вечером в четверг", translation: "Kamis malam" },
    ],
    lessonIds: [8],
  },

  {
    id: 250,
    word: "пятница",
    pronunciation: "/pjatnitsa/",
    translation: "hari Jumat",
    category: "noun",
    frequency: 250,
    examples: [
      { sentence: "В пятницу молитва", translation: "Hari Jumat sholat" },
      { sentence: "Благословенная пятница", translation: "Jumat berkah" },
    ],
    lessonIds: [8],
  },

  {
    id: 251,
    word: "суббота",
    pronunciation: "/subbota/",
    translation: "hari Sabtu",
    category: "noun",
    frequency: 251,
    examples: [
      { sentence: "В субботу гулять", translation: "Hari Sabtu jalan-jalan" },
      { sentence: "Суббота и воскресенье", translation: "Sabtu dan Minggu" },
    ],
    lessonIds: [8],
  },

  {
    id: 252,
    word: "воскресенье",
    pronunciation: "/voskrjesjenjje/",
    translation: "hari Minggu",
    category: "noun",
    frequency: 252,
    examples: [
      { sentence: "Выходные", translation: "Akhir minggu" },
    ],
    lessonIds: [8],
  },

  {
    id: 253,
    word: "вчера",
    pronunciation: "/vtɕjera/",
    translation: "kemarin",
    category: "adverb",
    frequency: 253,
    examples: [
      { sentence: "Вчера я ходил", translation: "Kemarin saya pergi" },
      { sentence: "Вчера вечером", translation: "Kemarin malam" },
    ],
    lessonIds: [8, 9],
  },

  {
    id: 254,
    word: "завтра",
    pronunciation: "/zavtra/",
    translation: "besok",
    category: "adverb",
    frequency: 254,
    examples: [
      { sentence: "Завтра я приду", translation: "Besok saya datang" },
      { sentence: "До завтра", translation: "Sampai jumpa besok" },
    ],
    lessonIds: [8, 11],
  },

  {
    id: 255,
    word: "сейчас",
    pronunciation: "/sjejtɕas/",
    translation: "sekarang",
    category: "adverb",
    frequency: 255,
    examples: [
      { sentence: "Сейчас который час?", translation: "Sekarang jam berapa?" },
      { sentence: "Сейчас же", translation: "Sekarang juga" },
    ],
    lessonIds: [8, 10],
  },

  {
    id: 256,
    word: "потом",
    pronunciation: "/potom/",
    translation: "nanti",
    category: "adverb",
    frequency: 256,
    examples: [
      { sentence: "Потом мы пойдём", translation: "Nanti kita pergi" },
      { sentence: "До встречи", translation: "Sampai nanti" },
    ],
    lessonIds: [8, 11],
  },

  {
    id: 257,
    word: "раньше",
    pronunciation: "/ranjʂje/",
    translation: "dulu",
    category: "adverb",
    frequency: 257,
    examples: [
      { sentence: "Сначала послушай", translation: "Dengar dulu" },
    ],
    lessonIds: [8, 9],
  },

  {
    id: 258,
    word: "потом",
    pronunciation: "/potom/",
    translation: "lalu",
    category: "adverb",
    frequency: 258,
    examples: [
      { sentence: "На прошлой неделе", translation: "Minggu lalu" },
      { sentence: "Потом он ушёл", translation: "Lalu dia pergi" },
    ],
    lessonIds: [8, 9, 15],
  },

  {
    id: 259,
    word: "начало",
    pronunciation: "/natɕalo/",
    translation: "awal",
    category: "noun",
    frequency: 259,
    examples: [
      { sentence: "Начало месяца", translation: "Awal bulan" },
      { sentence: "Начало года", translation: "Awal tahun" },
    ],
    lessonIds: [8],
  },

  {
    id: 260,
    word: "конец",
    pronunciation: "/konjets/",
    translation: "akhir",
    category: "noun",
    frequency: 260,
    examples: [
      { sentence: "Конец месяца", translation: "Akhir bulan" },
      { sentence: "Конец года", translation: "Akhir tahun" },
    ],
    lessonIds: [8],
  },

  {
    id: 261,
    word: "дождь",
    pronunciation: "/doʐdj/",
    translation: "hujan",
    category: "noun",
    frequency: 261,
    examples: [
      { sentence: "Сильный дождь", translation: "Hujan deras" },
      { sentence: "Идёт дождь", translation: "Sedang hujan" },
    ],
    lessonIds: [15],
  },

  {
    id: 262,
    word: "солнце",
    pronunciation: "/solntsje/",
    translation: "matahari",
    category: "noun",
    frequency: 262,
    examples: [
      { sentence: "Восход солнца", translation: "Matahari terbit" },
      { sentence: "Сегодня жарко", translation: "Hari ini panas" },
    ],
    lessonIds: [8],
  },

  {
    id: 263,
    word: "дерево",
    pronunciation: "/djerjevo/",
    translation: "pohon",
    category: "noun",
    frequency: 263,
    examples: [
      { sentence: "Большое дерево", translation: "Pohon besar" },
      { sentence: "Кокосовая пальма", translation: "Pohon kelapa" },
    ],
    lessonIds: [13],
  },

  {
    id: 264,
    word: "цветок",
    pronunciation: "/tsvjetok/",
    translation: "bunga",
    category: "noun",
    frequency: 264,
    examples: [
      { sentence: "Красивый цветок", translation: "Bunga indah" },
      { sentence: "Цветочный сад", translation: "Taman bunga" },
    ],
    lessonIds: [13],
  },

  {
    id: 265,
    word: "море",
    pronunciation: "/morje/",
    translation: "laut",
    category: "noun",
    frequency: 265,
    examples: [
      { sentence: "Синее море", translation: "Laut biru" },
      { sentence: "К морю", translation: "Ke laut" },
    ],
    lessonIds: [14],
  },

  {
    id: 266,
    word: "гора",
    pronunciation: "/ɡora/",
    translation: "gunung",
    category: "noun",
    frequency: 266,
    examples: [
      { sentence: "Высокая гора", translation: "Gunung tinggi" },
      { sentence: "Восхождение на гору", translation: "Naik gunung" },
    ],
    lessonIds: [14],
  },

  {
    id: 267,
    word: "река",
    pronunciation: "/rjeka/",
    translation: "sungai",
    category: "noun",
    frequency: 267,
    examples: [
      { sentence: "Большая река", translation: "Sungai besar" },
      { sentence: "Плавать в реке", translation: "Berenang di sungai" },
    ],
    lessonIds: [14],
  },

  {
    id: 268,
    word: "озеро",
    pronunciation: "/ozjero/",
    translation: "danau",
    category: "noun",
    frequency: 268,
    examples: [
      { sentence: "Красивое озеро", translation: "Danau indah" },
      { sentence: "Озеро Тоба", translation: "Danau Toba" },
    ],
    lessonIds: [14],
  },

  {
    id: 269,
    word: "пляж",
    pronunciation: "/pljaʐ/",
    translation: "pantai",
    category: "noun",
    frequency: 269,
    examples: [
      { sentence: "На пляж", translation: "Ke pantai" },
      { sentence: "Пляж с белым песком", translation: "Pantai pasir putih" },
    ],
    lessonIds: [14],
  },

  {
    id: 270,
    word: "лес",
    pronunciation: "/ljes/",
    translation: "hutan",
    category: "noun",
    frequency: 270,
    examples: [
      { sentence: "Тропический лес", translation: "Hutan tropis" },
      { sentence: "В лесу", translation: "Di dalam hutan" },
    ],
    lessonIds: [14],
  },

  {
    id: 271,
    word: "земля",
    pronunciation: "/zjemlja/",
    translation: "tanah",
    category: "noun",
    frequency: 271,
    examples: [
      { sentence: "Плодородная земля", translation: "Tanah subur" },
      { sentence: "Родина", translation: "Tanah air" },
    ],
    lessonIds: [14],
  },

  {
    id: 272,
    word: "камень",
    pronunciation: "/kamjenj/",
    translation: "batu",
    category: "noun",
    frequency: 272,
    examples: [
      { sentence: "Большой камень", translation: "Batu besar" },
      { sentence: "Каменная дорога", translation: "Jalan berbatu" },
    ],
    lessonIds: [14],
  },

  {
    id: 273,
    word: "песок",
    pronunciation: "/pjesok/",
    translation: "pasir",
    category: "noun",
    frequency: 273,
    examples: [
      { sentence: "Белый песок", translation: "Pasir putih" },
      { sentence: "Песчаный пляж", translation: "Pantai pasir" },
    ],
    lessonIds: [14],
  },

  {
    id: 274,
    word: "огонь",
    pronunciation: "/oɡonj/",
    translation: "api",
    category: "noun",
    frequency: 274,
    examples: [
      { sentence: "Костёр", translation: "Api unggun" },
      { sentence: "Осторожно с огнём", translation: "Hati-hati dengan api" },
    ],
    lessonIds: [14],
  },

  {
    id: 275,
    word: "воздух",
    pronunciation: "/vozdux/",
    translation: "udara",
    category: "noun",
    frequency: 275,
    examples: [
      { sentence: "Свежий воздух", translation: "Udara segar" },
      { sentence: "Холодный воздух", translation: "Udara dingin" },
    ],
    lessonIds: [14],
  },

  {
    id: 276,
    word: "звезда",
    pronunciation: "/zvjezda/",
    translation: "bintang",
    category: "noun",
    frequency: 276,
    examples: [
      { sentence: "Звёзды на небе", translation: "Bintang di langit" },
      { sentence: "Морская звезда", translation: "Bintang laut" },
    ],
    lessonIds: [14],
  },

  {
    id: 277,
    word: "луна",
    pronunciation: "/luna/",
    translation: "bulan",
    category: "noun",
    frequency: 277,
    examples: [
      { sentence: "Полнолуние", translation: "Bulan purnama" },
      { sentence: "Лунный свет", translation: "Cahaya bulan" },
    ],
    lessonIds: [8, 14],
  },

  {
    id: 278,
    word: "небо",
    pronunciation: "/njebo/",
    translation: "langit",
    category: "noun",
    frequency: 278,
    examples: [
      { sentence: "Голубое небо", translation: "Langit biru" },
      { sentence: "Ясное небо", translation: "Langit cerah" },
    ],
    lessonIds: [14],
  },

  {
    id: 279,
    word: "радуга",
    pronunciation: "/raduɡa/",
    translation: "pelangi",
    category: "noun",
    frequency: 279,
    examples: [
      { sentence: "Красивая радуга", translation: "Pelangi indah" },
      { sentence: "Цвета радуги", translation: "Warna pelangi" },
    ],
    lessonIds: [14],
  },

  {
    id: 280,
    word: "землетрясение",
    pronunciation: "/zjemljetrjasjenije/",
    translation: "gempa bumi",
    category: "noun",
    frequency: 280,
    examples: [
      { sentence: "Большое землетрясение", translation: "Gempa bumi besar" },
      { sentence: "Было землетрясение", translation: "Ada gempa" },
    ],
    lessonIds: [14],
  },

  {
    id: 281,
    word: "город",
    pronunciation: "/ɡorod/",
    translation: "kota",
    category: "noun",
    frequency: 281,
    examples: [
      { sentence: "Большой город", translation: "Kota besar" },
      { sentence: "В городе", translation: "Di kota" },
    ],
    lessonIds: [14],
  },

  {
    id: 282,
    word: "улица",
    pronunciation: "/ulitsa/",
    translation: "jalan",
    category: "noun",
    frequency: 282,
    examples: [
      { sentence: "Шоссе", translation: "Jalan raya" },
      { sentence: "Идти пешком", translation: "Jalan kaki" },
    ],
    lessonIds: [14],
  },

  {
    id: 283,
    word: "офис",
    pronunciation: "/ofis/",
    translation: "kantor",
    category: "noun",
    frequency: 283,
    examples: [
      { sentence: "В офис", translation: "Ke kantor" },
      { sentence: "В офисе", translation: "Di kantor" },
    ],
    lessonIds: [14],
  },

  {
    id: 284,
    word: "школа",
    pronunciation: "/ʂkola/",
    translation: "sekolah",
    category: "noun",
    frequency: 284,
    examples: [
      { sentence: "Идти в школу", translation: "Pergi ke sekolah" },
      { sentence: "В школе", translation: "Di sekolah" },
    ],
    lessonIds: [14],
  },

  {
    id: 285,
    word: "рынок",
    pronunciation: "/rɨnok/",
    translation: "pasar",
    category: "noun",
    frequency: 285,
    examples: [
      { sentence: "На рынок", translation: "Ke pasar" },
      { sentence: "Традиционный рынок", translation: "Pasar tradisional" },
    ],
    lessonIds: [14],
  },

  {
    id: 286,
    word: "больница",
    pronunciation: "/boljnitsa/",
    translation: "rumah sakit",
    category: "noun",
    frequency: 286,
    examples: [
      { sentence: "В больницу", translation: "Ke rumah sakit" },
      { sentence: "В больнице", translation: "Di rumah sakit" },
    ],
    lessonIds: [14],
  },

  {
    id: 287,
    word: "банк",
    pronunciation: "/bank/",
    translation: "bank",
    category: "noun",
    frequency: 287,
    examples: [
      { sentence: "В банк", translation: "Ke bank" },
      { sentence: "Банк закрыт", translation: "Bank tutup" },
    ],
    lessonIds: [14],
  },

  {
    id: 288,
    word: "магазин",
    pronunciation: "/maɡazin/",
    translation: "toko",
    category: "noun",
    frequency: 288,
    examples: [
      { sentence: "Книжный магазин", translation: "Toko buku" },
      { sentence: "В магазин", translation: "Ke toko" },
    ],
    lessonIds: [14],
  },

  {
    id: 289,
    word: "аптека",
    pronunciation: "/aptjeka/",
    translation: "apotek",
    category: "noun",
    frequency: 289,
    examples: [
      { sentence: "В аптеку", translation: "Ke apotek" },
      { sentence: "Аптека открыта", translation: "Apotek buka" },
    ],
    lessonIds: [14],
  },

  {
    id: 290,
    word: "вокзал",
    pronunciation: "/vokzal/",
    translation: "stasiun",
    category: "noun",
    frequency: 290,
    examples: [
      { sentence: "Железнодорожный вокзал", translation: "Stasiun kereta" },
      { sentence: "На вокзале", translation: "Di stasiun" },
    ],
    lessonIds: [14],
  },

  {
    id: 291,
    word: "аэропорт",
    pronunciation: "/aɛroport/",
    translation: "bandara",
    category: "noun",
    frequency: 291,
    examples: [
      { sentence: "В аэропорт", translation: "Ke bandara" },
    ],
    lessonIds: [14],
  },

  {
    id: 292,
    word: "порт",
    pronunciation: "/port/",
    translation: "pelabuhan",
    category: "noun",
    frequency: 292,
    examples: [
      { sentence: "Морской порт", translation: "Pelabuhan laut" },
    ],
    lessonIds: [14],
  },

  {
    id: 293,
    word: "парк",
    pronunciation: "/park/",
    translation: "taman",
    category: "noun",
    frequency: 293,
    examples: [
      { sentence: "Городской парк", translation: "Taman kota" },
      { sentence: "Гулять в парке", translation: "Jalan-jalan di taman" },
    ],
    lessonIds: [14],
  },

  {
    id: 294,
    word: "мечеть",
    pronunciation: "/mjetɕjetj/",
    translation: "masjid",
    category: "noun",
    frequency: 294,
    examples: [
      { sentence: "Большая мечеть", translation: "Masjid besar" },
      { sentence: "В мечеть", translation: "Ke masjid" },
    ],
    lessonIds: [14],
  },

  {
    id: 295,
    word: "церковь",
    pronunciation: "/tsjerkovj/",
    translation: "gereja",
    category: "noun",
    frequency: 295,
    examples: [
      { sentence: "В церковь", translation: "Ke gereja" },
      { sentence: "Старая церковь", translation: "Gereja tua" },
    ],
    lessonIds: [14],
  },

  {
    id: 296,
    word: "левый",
    pronunciation: "/ljevɨj/",
    translation: "kiri",
    category: "adverb",
    frequency: 296,
    examples: [
      { sentence: "Поверните налево", translation: "Belok kiri" },
      { sentence: "Слева", translation: "Di sebelah kiri" },
    ],
    lessonIds: [14],
  },

  {
    id: 297,
    word: "правый",
    pronunciation: "/pravɨj/",
    translation: "kanan",
    category: "adverb",
    frequency: 297,
    examples: [
      { sentence: "Поверните направо", translation: "Belok kanan" },
      { sentence: "Справа", translation: "Di sebelah kanan" },
    ],
    lessonIds: [14],
  },

  {
    id: 298,
    word: "прямо",
    pronunciation: "/prjamo/",
    translation: "lurus",
    category: "adverb",
    frequency: 298,
    examples: [
      { sentence: "Идите прямо", translation: "Jalan lurus" },
      { sentence: "Просто прямо", translation: "Lurus saja" },
    ],
    lessonIds: [14],
  },

  {
    id: 299,
    word: "близко",
    pronunciation: "/blizko/",
    translation: "dekat",
    category: "adverb",
    frequency: 299,
    examples: [
      { sentence: "Рядом с моим домом", translation: "Dekat rumah saya" },
      { sentence: "Очень близко", translation: "Dekat sekali" },
    ],
    lessonIds: [14],
  },

  {
    id: 300,
    word: "далеко",
    pronunciation: "/daljeko/",
    translation: "jauh",
    category: "adverb",
    frequency: 300,
    examples: [
      { sentence: "Далеко отсюда", translation: "Jauh dari sini" },
      { sentence: "Очень далеко", translation: "Jauh sekali" },
    ],
    lessonIds: [14],
  },

  {
    id: 301,
    word: "одежда",
    pronunciation: "/odjeʐda/",
    translation: "baju",
    category: "noun",
    frequency: 301,
    examples: [
      { sentence: "Новая одежда", translation: "Baju baru" },
      { sentence: "Красная рубашка", translation: "Baju merah" },
    ],
    lessonIds: [13],
  },

  {
    id: 302,
    word: "цвет",
    pronunciation: "/tsvjet/",
    translation: "warna",
    category: "noun",
    frequency: 302,
    examples: [
      { sentence: "Какой это цвет?", translation: "Apa warna ini?" },
      { sentence: "Красный цвет", translation: "Warna merah" },
    ],
    lessonIds: [13],
  },

  {
    id: 303,
    word: "красный",
    pronunciation: "/krasnɨj/",
    translation: "merah",
    category: "adjective",
    frequency: 303,
    examples: [
      { sentence: "Красная рубашка", translation: "Baju merah" },
      { sentence: "Красная машина", translation: "Mobil merah" },
    ],
    lessonIds: [13],
  },

  {
    id: 304,
    word: "белый",
    pronunciation: "/bjelɨj/",
    translation: "putih",
    category: "adjective",
    frequency: 304,
    examples: [
      { sentence: "Вода (букв. 'белая вода')", translation: "Air putih" },
      { sentence: "Белый цветок", translation: "Bunga putih" },
    ],
    lessonIds: [13],
  },

  {
    id: 305,
    word: "чёрный",
    pronunciation: "/tɕjornɨj/",
    translation: "hitam",
    category: "adjective",
    frequency: 305,
    examples: [
      { sentence: "Чёрная машина", translation: "Mobil hitam" },
      { sentence: "Чёрный кот", translation: "Kucing hitam" },
    ],
    lessonIds: [13],
  },

  {
    id: 306,
    word: "синий",
    pronunciation: "/sinij/",
    translation: "biru",
    category: "adjective",
    frequency: 306,
    examples: [
      { sentence: "Синее море", translation: "Laut biru" },
      { sentence: "Голубое небо", translation: "Langit biru" },
    ],
    lessonIds: [13],
  },

  {
    id: 307,
    word: "зелёный",
    pronunciation: "/zjeljonɨj/",
    translation: "hijau",
    category: "adjective",
    frequency: 307,
    examples: [
      { sentence: "Зелёное дерево", translation: "Pohon hijau" },
      { sentence: "Зелёные рисовые поля", translation: "Sawah hijau" },
    ],
    lessonIds: [13],
  },

  {
    id: 308,
    word: "жёлтый",
    pronunciation: "/ʐjoltɨj/",
    translation: "kuning",
    category: "adjective",
    frequency: 308,
    examples: [
      { sentence: "Жёлтый цветок", translation: "Bunga kuning" },
      { sentence: "Яичный желток", translation: "Kuning telur" },
    ],
    lessonIds: [13],
  },

  {
    id: 309,
    word: "коричневый",
    pronunciation: "/koritɕnjevɨj/",
    translation: "coklat",
    category: "adjective",
    frequency: 309,
    examples: [
      { sentence: "Коричневая машина", translation: "Mobil coklat" },
      { sentence: "Коричневый цвет", translation: "Warna coklat" },
    ],
    lessonIds: [13],
  },

  {
    id: 310,
    word: "серый",
    pronunciation: "/sjerɨj/",
    translation: "abu-abu",
    category: "adjective",
    frequency: 310,
    examples: [
      { sentence: "Серое небо", translation: "Langit abu-abu" },
      { sentence: "Серая рубашка", translation: "Baju abu-abu" },
    ],
    lessonIds: [13],
  },

  {
    id: 311,
    word: "брюки",
    pronunciation: "/brjuki/",
    translation: "celana",
    category: "noun",
    frequency: 311,
    examples: [
      { sentence: "Длинные брюки", translation: "Celana panjang" },
      { sentence: "Шорты", translation: "Celana pendek" },
    ],
    lessonIds: [13],
  },

  {
    id: 312,
    word: "шляпа",
    pronunciation: "/ʂljapa/",
    translation: "topi",
    category: "noun",
    frequency: 312,
    examples: [
      { sentence: "Надеть шляпу", translation: "Pakai topi" },
      { sentence: "Красная кепка", translation: "Topi merah" },
    ],
    lessonIds: [13],
  },

  {
    id: 313,
    word: "обувь",
    pronunciation: "/obuvj/",
    translation: "sepatu",
    category: "noun",
    frequency: 313,
    examples: [
      { sentence: "Новая обувь", translation: "Sepatu baru" },
      { sentence: "Чёрные туфли", translation: "Sepatu hitam" },
    ],
    lessonIds: [13],
  },

  {
    id: 314,
    word: "футболка",
    pronunciation: "/futbolka/",
    translation: "kaus",
    category: "noun",
    frequency: 314,
    examples: [
      { sentence: "Белая футболка", translation: "Kaus putih" },
      { sentence: "Футболка с коротким рукавом", translation: "Kaus oblong" },
    ],
    lessonIds: [13],
  },

  {
    id: 315,
    word: "куртка",
    pronunciation: "/kurtka/",
    translation: "jaket",
    category: "noun",
    frequency: 315,
    examples: [
      { sentence: "Тёплая куртка", translation: "Jaket hangat" },
      { sentence: "Надеть куртку", translation: "Pakai jaket" },
    ],
    lessonIds: [13],
  },

  {
    id: 316,
    word: "одежда",
    pronunciation: "/odjeʐda/",
    translation: "pakaian",
    category: "noun",
    frequency: 316,
    examples: [
      { sentence: "Новая одежда", translation: "Pakaian baru" },
      { sentence: "Магазин одежды", translation: "Toko pakaian" },
    ],
    lessonIds: [13],
  },

  {
    id: 317,
    word: "светлый",
    pronunciation: "/svjetlɨj/",
    translation: "terang",
    category: "adjective",
    frequency: 317,
    examples: [
      { sentence: "Яркий цвет", translation: "Warna terang" },
      { sentence: "Яркий свет", translation: "Cahaya terang" },
    ],
    lessonIds: [13],
  },

  {
    id: 318,
    word: "тёмный",
    pronunciation: "/tjomnɨj/",
    translation: "gelap",
    category: "adjective",
    frequency: 318,
    examples: [
      { sentence: "Тёмный цвет", translation: "Warna gelap" },
      { sentence: "Уже темно", translation: "Sudah gelap" },
    ],
    lessonIds: [13],
  },

  {
    id: 319,
    word: "тонкий",
    pronunciation: "/tonkij/",
    translation: "tipis",
    category: "adjective",
    frequency: 319,
    examples: [
      { sentence: "Тонкая ткань", translation: "Kain tipis" },
      { sentence: "Тонкая книга", translation: "Buku tipis" },
    ],
    lessonIds: [13],
  },

  {
    id: 320,
    word: "толстый",
    pronunciation: "/tolstɨj/",
    translation: "tebal",
    category: "adjective",
    frequency: 320,
    examples: [
      { sentence: "Толстая книга", translation: "Buku tebal" },
      { sentence: "Толстая куртка", translation: "Jaket tebal" },
    ],
    lessonIds: [13],
  },

  {
    id: 321,
    word: "радостный",
    pronunciation: "/radostnɨj/",
    translation: "senang",
    category: "adjective",
    frequency: 321,
    examples: [
      { sentence: "Я рад", translation: "Saya senang" },
    ],
    lessonIds: [13, 16],
  },

  {
    id: 322,
    word: "грустный",
    pronunciation: "/ɡrustnɨj/",
    translation: "sedih",
    category: "adjective",
    frequency: 322,
    examples: [
      { sentence: "Он грустный", translation: "Dia sedih" },
      { sentence: "Не грусти", translation: "Jangan sedih" },
    ],
    lessonIds: [5, 13],
  },

  {
    id: 323,
    word: "сердитый",
    pronunciation: "/sjerditɨj/",
    translation: "marah",
    category: "adjective",
    frequency: 323,
    examples: [
      { sentence: "Он сердит", translation: "Dia marah" },
      { sentence: "Не сердись", translation: "Jangan marah" },
    ],
    lessonIds: [5, 13],
  },

  {
    id: 324,
    word: "усталый",
    pronunciation: "/ustalɨj/",
    translation: "capek",
    category: "adjective",
    frequency: 324,
    examples: [
      { sentence: "Я устал", translation: "Saya capek" },
      { sentence: "Очень устал", translation: "Capek sekali" },
    ],
    lessonIds: [13],
  },

  {
    id: 325,
    word: "больной",
    pronunciation: "/boljnoj/",
    translation: "sakit",
    category: "adjective",
    frequency: 325,
    examples: [
      { sentence: "Я болен", translation: "Saya sakit" },
      { sentence: "Головная боль", translation: "Sakit kepala" },
    ],
    lessonIds: [15],
  },

  {
    id: 326,
    word: "весёлый",
    pronunciation: "/vjesjolɨj/",
    translation: "gembira",
    category: "adjective",
    frequency: 326,
    examples: [
      { sentence: "Дети радостны", translation: "Anak-anak gembira" },
      { sentence: "Счастливый день", translation: "Hari yang gembira" },
    ],
    lessonIds: [13],
  },

  {
    id: 327,
    word: "бояться",
    pronunciation: "/bojatjsja/",
    translation: "takut",
    category: "adjective",
    frequency: 327,
    examples: [
      { sentence: "Я боюсь", translation: "Saya takut" },
      { sentence: "Не бойся", translation: "Jangan takut" },
    ],
    lessonIds: [5, 13],
  },

  {
    id: 328,
    word: "смелый",
    pronunciation: "/smjelɨj/",
    translation: "berani",
    category: "adjective",
    frequency: 328,
    examples: [
      { sentence: "Он смелый", translation: "Dia berani" },
      { sentence: "Смелый попробовать", translation: "Berani coba" },
    ],
    lessonIds: [13],
  },

  {
    id: 329,
    word: "ленивый",
    pronunciation: "/ljenivɨj/",
    translation: "malas",
    category: "adjective",
    frequency: 329,
    examples: [
      { sentence: "Мне лень учиться", translation: "Saya malas belajar" },
      { sentence: "Ленивый человек", translation: "Orang malas" },
    ],
    lessonIds: [13],
  },

  {
    id: 330,
    word: "прилежный",
    pronunciation: "/priljeʐnɨj/",
    translation: "rajin",
    category: "adjective",
    frequency: 330,
    examples: [
      { sentence: "Прилежный ребёнок", translation: "Anak rajin" },
      { sentence: "Усердно учиться", translation: "Rajin belajar" },
    ],
    lessonIds: [13],
  },

  {
    id: 331,
    word: "умный",
    pronunciation: "/umnɨj/",
    translation: "pintar",
    category: "adjective",
    frequency: 331,
    examples: [
      { sentence: "Он умный", translation: "Dia pintar" },
      { sentence: "Очень умный", translation: "Pintar sekali" },
    ],
    lessonIds: [13],
  },

  {
    id: 332,
    word: "глупый",
    pronunciation: "/ɡlupɨj/",
    translation: "bodoh",
    category: "adjective",
    frequency: 332,
    examples: [
      { sentence: "Не будь глупым", translation: "Jangan bodoh" },
      { sentence: "Это глупо", translation: "Itu bodoh" },
    ],
    lessonIds: [13],
  },

  {
    id: 333,
    word: "добрый",
    pronunciation: "/dobrɨj/",
    translation: "baik hati",
    category: "adjective",
    frequency: 333,
    examples: [
      { sentence: "Он добрый человек", translation: "Dia orang baik hati" },
      { sentence: "Спасибо, вы добры", translation: "Terima kasih, baik hati" },
    ],
    lessonIds: [13],
  },

  {
    id: 334,
    word: "злой",
    pronunciation: "/zloj/",
    translation: "jahat",
    category: "adjective",
    frequency: 334,
    examples: [
      { sentence: "Злой человек", translation: "Orang jahat" },
      { sentence: "Не будь злым", translation: "Jangan jahat" },
    ],
    lessonIds: [13],
  },

  {
    id: 335,
    word: "терпеливый",
    pronunciation: "/tjerpjelivɨj/",
    translation: "sabar",
    category: "adjective",
    frequency: 335,
    examples: [
      { sentence: "Будь терпелив", translation: "Sabar ya" },
      { sentence: "Терпеливо ждать", translation: "Sabar menunggu" },
    ],
    lessonIds: [13],
  },

  {
    id: 336,
    word: "тревожный",
    pronunciation: "/trjevoʐnɨj/",
    translation: "cemas",
    category: "adjective",
    frequency: 336,
    examples: [
      { sentence: "Не волнуйся", translation: "Jangan cemas" },
      { sentence: "Я волнуюсь", translation: "Saya cemas" },
    ],
    lessonIds: [13],
  },

  {
    id: 337,
    word: "удивлённый",
    pronunciation: "/udivljonnɨj/",
    translation: "kaget",
    category: "adjective",
    frequency: 337,
    examples: [
      { sentence: "Я удивлён", translation: "Saya kaget" },
      { sentence: "Очень удивлён", translation: "Kaget sekali" },
    ],
    lessonIds: [13],
  },

  {
    id: 338,
    word: "гордый",
    pronunciation: "/ɡordɨj/",
    translation: "bangga",
    category: "adjective",
    frequency: 338,
    examples: [
      { sentence: "Я горжусь тобой", translation: "Saya bangga pada kamu" },
      { sentence: "Очень горд", translation: "Bangga sekali" },
    ],
    lessonIds: [13],
  },

  {
    id: 339,
    word: "стеснительный",
    pronunciation: "/stjesnitjeljnɨj/",
    translation: "malu",
    category: "adjective",
    frequency: 339,
    examples: [
      { sentence: "Не стесняйся", translation: "Jangan malu" },
      { sentence: "Мне стыдно", translation: "Saya malu" },
    ],
    lessonIds: [13],
  },

  {
    id: 340,
    word: "удивляться",
    pronunciation: "/udivljatjsja/",
    translation: "heran",
    category: "adjective",
    frequency: 340,
    examples: [
      { sentence: "Я удивляюсь", translation: "Saya heran" },
      { sentence: "Удивительно, почему", translation: "Heran kenapa" },
    ],
    lessonIds: [13],
  },

  {
    id: 341,
    word: "мать",
    pronunciation: "/matj/",
    translation: "ibu",
    category: "noun",
    frequency: 341,
    examples: [
      { sentence: "Моя мама", translation: "Ibu saya" },
      { sentence: "Госпожа учитель", translation: "Ibu guru" },
    ],
    lessonIds: [2, 6],
  },

  {
    id: 342,
    word: "отец",
    pronunciation: "/otjets/",
    translation: "bapak",
    category: "noun",
    frequency: 342,
    examples: [
      { sentence: "Мой отец", translation: "Bapak saya" },
      { sentence: "Господин президент", translation: "Bapak presiden" },
    ],
    lessonIds: [2, 6],
  },

  {
    id: 343,
    word: "старший брат/сестра",
    pronunciation: "/starʂij brat/sjestra/",
    translation: "kakak",
    category: "noun",
    frequency: 343,
    examples: [
      { sentence: "Мой/моя старший/ая брат/сестра", translation: "Kakak saya" },
      { sentence: "Старшая сестра", translation: "Kakak perempuan" },
    ],
    lessonIds: [6],
  },

  {
    id: 344,
    word: "младший брат/сестра",
    pronunciation: "/mladʂij brat/sjestra/",
    translation: "adik",
    category: "noun",
    frequency: 344,
    examples: [
      { sentence: "Младший брат", translation: "Adik laki-laki" },
      { sentence: "Младшая сестра", translation: "Adik perempuan" },
    ],
    lessonIds: [6],
  },

  {
    id: 345,
    word: "ребёнок",
    pronunciation: "/rjebjonok/",
    translation: "anak",
    category: "noun",
    frequency: 345,
    examples: [
      { sentence: "Мой ребёнок", translation: "Anak saya" },
      { sentence: "Школьник", translation: "Anak sekolah" },
    ],
    lessonIds: [6],
  },

  {
    id: 346,
    word: "дедушка",
    pronunciation: "/djeduʂka/",
    translation: "kakek",
    category: "noun",
    frequency: 346,
    examples: [
      { sentence: "Мой дедушка", translation: "Kakek saya" },
      { sentence: "Бабушка и дедушка", translation: "Kakek nenek" },
    ],
    lessonIds: [6],
  },

  {
    id: 347,
    word: "бабушка",
    pronunciation: "/babuʂka/",
    translation: "nenek",
    category: "noun",
    frequency: 347,
    examples: [
      { sentence: "Моя бабушка", translation: "Nenek saya" },
      { sentence: "Дом бабушки", translation: "Rumah nenek" },
    ],
    lessonIds: [6],
  },

  {
    id: 348,
    word: "муж",
    pronunciation: "/muʐ/",
    translation: "suami",
    category: "noun",
    frequency: 348,
    examples: [
      { sentence: "Мой муж", translation: "Suami saya" },
      { sentence: "Муж и жена", translation: "Suami istri" },
    ],
    lessonIds: [6],
  },

  {
    id: 349,
    word: "жена",
    pronunciation: "/ʐjena/",
    translation: "istri",
    category: "noun",
    frequency: 349,
    examples: [
      { sentence: "Моя жена", translation: "Istri saya" },
      { sentence: "Хорошая жена", translation: "Istri yang baik" },
    ],
    lessonIds: [6],
  },

  {
    id: 350,
    word: "дядя",
    pronunciation: "/djadja/",
    translation: "paman",
    category: "noun",
    frequency: 350,
    examples: [
      { sentence: "Мой дядя", translation: "Paman saya" },
      { sentence: "Дядя живёт здесь", translation: "Paman tinggal di sini" },
    ],
    lessonIds: [6],
  },

  {
    id: 351,
    word: "тётя",
    pronunciation: "/tjotja/",
    translation: "bibi",
    category: "noun",
    frequency: 351,
    examples: [
      { sentence: "Тётя пришла", translation: "Bibi datang" },
      { sentence: "Моя тётя", translation: "Bibi saya" },
    ],
    lessonIds: [6],
  },

  {
    id: 352,
    word: "племянник/племянница",
    pronunciation: "/pljemjannik/pljemjannitsa/",
    translation: "keponakan",
    category: "noun",
    frequency: 352,
    examples: [
      { sentence: "Мой племянник", translation: "Keponakan saya" },
      { sentence: "Племянник", translation: "Keponakan laki-laki" },
    ],
    lessonIds: [6],
  },

  {
    id: 353,
    word: "двоюродный брат/сестра",
    pronunciation: "/dvojurodnɨj brat/sjestra/",
    translation: "sepupu",
    category: "noun",
    frequency: 353,
    examples: [
      { sentence: "Мой двоюродный брат", translation: "Sepupu saya" },
      { sentence: "Двоюродные родственники", translation: "Keluarga sepupu" },
    ],
    lessonIds: [6],
  },

  {
    id: 354,
    word: "семья",
    pronunciation: "/sjemjja/",
    translation: "keluarga",
    category: "noun",
    frequency: 354,
    examples: [
      { sentence: "Моя семья", translation: "Keluarga saya" },
      { sentence: "Большая семья", translation: "Keluarga besar" },
    ],
    lessonIds: [6],
  },

  {
    id: 355,
    word: "брат/сестра",
    pronunciation: "/brat/sjestra/",
    translation: "saudara",
    category: "noun",
    frequency: 355,
    examples: [
      { sentence: "Родной брат/сестра", translation: "Saudara kandung" },
      { sentence: "Двоюродный брат/сестра", translation: "Saudara sepupu" },
    ],
    lessonIds: [6],
  },

  {
    id: 356,
    word: "старший брат",
    pronunciation: "/starʂij brat/",
    translation: "kakak laki-laki",
    category: "noun",
    frequency: 356,
    examples: [
      { sentence: "Мой старший брат", translation: "Kakak laki-laki saya" },
      { sentence: "Он старший брат", translation: "Dia kakak laki-laki" },
    ],
    lessonIds: [6],
  },

  {
    id: 357,
    word: "старшая сестра",
    pronunciation: "/starʂaja sjestra/",
    translation: "kakak perempuan",
    category: "noun",
    frequency: 357,
    examples: [
      { sentence: "Моя старшая сестра", translation: "Kakak perempuan saya" },
      { sentence: "Две старшие сестры", translation: "Dua kakak perempuan" },
    ],
    lessonIds: [6],
  },

  {
    id: 358,
    word: "сын",
    pronunciation: "/sɨn/",
    translation: "anak laki-laki",
    category: "noun",
    frequency: 358,
    examples: [
      { sentence: "Мой сын", translation: "Anak laki-laki saya" },
      { sentence: "Два сына", translation: "Dua anak laki-laki" },
    ],
    lessonIds: [6],
  },

  {
    id: 359,
    word: "дочь",
    pronunciation: "/dotɕj/",
    translation: "anak perempuan",
    category: "noun",
    frequency: 359,
    examples: [
      { sentence: "Моя дочь", translation: "Anak perempuan saya" },
      { sentence: "Красивая дочь", translation: "Cantik anak perempuan" },
    ],
    lessonIds: [6],
  },

  {
    id: 360,
    word: "домашнее хозяйство",
    pronunciation: "/domaʂnjeje xozjajstvo/",
    translation: "rumah tangga",
    category: "noun",
    frequency: 360,
    examples: [
      { sentence: "Домохозяйка", translation: "Ibu rumah tangga" },
      { sentence: "Семейная жизнь", translation: "Kehidupan rumah tangga" },
    ],
    lessonIds: [6],
  },

  {
    id: 361,
    word: "учитель",
    pronunciation: "/utɕitjelj/",
    translation: "guru",
    category: "noun",
    frequency: 361,
    examples: [
      { sentence: "Он/она учитель", translation: "Dia guru" },
      { sentence: "Учитель языка", translation: "Guru bahasa" },
    ],
    wordFamily: [
      { word: "учить", translation: "mengajar" },
      { word: "учиться", translation: "belajar" },
      { word: "ученик", translation: "murid, pelajar" },
      { word: "учение", translation: "ajaran, pelajaran" },
    ],
    lessonIds: [2],
  },

  {
    id: 362,
    word: "врач",
    pronunciation: "/vratɕ/",
    translation: "dokter",
    category: "noun",
    frequency: 362,
    examples: [
      { sentence: "Я врач", translation: "Saya dokter" },
      { sentence: "К врачу", translation: "Ke dokter" },
    ],
    wordFamily: [
      { word: "больница", translation: "rumah sakit" },
      { word: "лечение", translation: "pengobatan" },
    ],
    lessonIds: [2],
  },

  {
    id: 363,
    word: "студент",
    pronunciation: "/studjent/",
    translation: "mahasiswa",
    category: "noun",
    frequency: 363,
    examples: [
      { sentence: "Я студент", translation: "Saya mahasiswa" },
      { sentence: "Новый студент", translation: "Mahasiswa baru" },
    ],
    lessonIds: [2, 13],
  },

  {
    id: 364,
    word: "работа",
    pronunciation: "/rabota/",
    translation: "kerja",
    category: "noun",
    frequency: 364,
    examples: [
      { sentence: "Я работаю в офисе", translation: "Saya kerja di kantor" },
      { sentence: "Удачи в работе", translation: "Selamat kerja" },
    ],
    wordFamily: [
      { word: "работать", translation: "bekerja, kerja" },
      { word: "работник", translation: "pekerja, karyawan" },
      { word: "занятие", translation: "pekerjaan" },
    ],
    lessonIds: [10],
  },

  {
    id: 365,
    word: "задание",
    pronunciation: "/zadanije/",
    translation: "tugas",
    category: "noun",
    frequency: 365,
    examples: [
      { sentence: "Домашнее задание", translation: "Tugas rumah" },
      { sentence: "Моя задача", translation: "Tugas saya" },
    ],
    lessonIds: [6],
  },

  {
    id: 366,
    word: "полицейский",
    pronunciation: "/politsjejskij/",
    translation: "polisi",
    category: "noun",
    frequency: 366,
    examples: [
      { sentence: "Полиция приехала", translation: "Polisi datang" },
    ],
    lessonIds: [2],
  },

  {
    id: 367,
    word: "водитель",
    pronunciation: "/voditjelj/",
    translation: "supir",
    category: "noun",
    frequency: 367,
    examples: [
      { sentence: "Таксист", translation: "Supir taksi" },
      { sentence: "Водитель автобуса", translation: "Supir bus" },
    ],
    lessonIds: [2],
  },

  {
    id: 368,
    word: "повар",
    pronunciation: "/povar/",
    translation: "koki",
    category: "noun",
    frequency: 368,
    examples: [
      { sentence: "Искусный повар", translation: "Koki handal" },
      { sentence: "Он повар", translation: "Dia koki" },
    ],
    lessonIds: [2],
  },

  {
    id: 369,
    word: "фермер",
    pronunciation: "/fjermjer/",
    translation: "petani",
    category: "noun",
    frequency: 369,
    examples: [
      { sentence: "Индонезийские фермеры", translation: "Petani Indonesia" },
    ],
    lessonIds: [2],
  },

  {
    id: 370,
    word: "рыбак",
    pronunciation: "/rɨbak/",
    translation: "nelayan",
    category: "noun",
    frequency: 370,
    examples: [
      { sentence: "Рыбак идёт в море", translation: "Nelayan pergi ke laut" },
      { sentence: "Рыбацкая лодка", translation: "Kapal nelayan" },
    ],
    lessonIds: [2],
  },

  {
    id: 371,
    word: "торговец",
    pronunciation: "/torɡovjets/",
    translation: "pedagang",
    category: "noun",
    frequency: 371,
    examples: [
      { sentence: "Рыночный торговец", translation: "Pedagang pasar" },
      { sentence: "Уличный торговец", translation: "Pedagang kaki lima" },
    ],
    lessonIds: [2],
  },

  {
    id: 372,
    word: "предприниматель",
    pronunciation: "/prjedprinimatjelj/",
    translation: "pengusaha",
    category: "noun",
    frequency: 372,
    examples: [
      { sentence: "Молодой предприниматель", translation: "Pengusaha muda" },
      { sentence: "Успешный предприниматель", translation: "Pengusaha sukses" },
    ],
    lessonIds: [2],
  },

  {
    id: 373,
    word: "инженер",
    pronunciation: "/inʐjenjer/",
    translation: "insinyur",
    category: "noun",
    frequency: 373,
    examples: [
      { sentence: "Гражданский инженер", translation: "Insinyur sipil" },
    ],
    lessonIds: [2],
  },

  {
    id: 374,
    word: "медсестра",
    pronunciation: "/mjedsjestra/",
    translation: "perawat",
    category: "noun",
    frequency: 374,
    examples: [
      { sentence: "Добрая медсестра", translation: "Perawat baik" },
      { sentence: "Она медсестра", translation: "Dia perawat" },
    ],
    lessonIds: [2],
  },

  {
    id: 375,
    word: "служащий",
    pronunciation: "/sluʐaɕːij/",
    translation: "karyawan",
    category: "noun",
    frequency: 375,
    examples: [
      { sentence: "Офисный сотрудник", translation: "Karyawan kantor" },
      { sentence: "Новый сотрудник", translation: "Karyawan baru" },
    ],
    lessonIds: [2],
  },

  {
    id: 376,
    word: "пенсия",
    pronunciation: "/pjensija/",
    translation: "pensiun",
    category: "noun",
    frequency: 376,
    examples: [
      { sentence: "Он уже на пенсии", translation: "Dia sudah pensiun" },
      { sentence: "Пенсионный возраст", translation: "Usia pensiun" },
    ],
    lessonIds: [2],
  },

  {
    id: 377,
    word: "зарплата",
    pronunciation: "/zarplata/",
    translation: "gaji",
    category: "noun",
    frequency: 377,
    examples: [
      { sentence: "Большая зарплата", translation: "Gaji besar" },
      { sentence: "Ежемесячная зарплата", translation: "Gaji bulanan" },
    ],
    lessonIds: [2],
  },

  {
    id: 378,
    word: "выходной",
    pronunciation: "/vɨxodnoj/",
    translation: "libur",
    category: "noun",
    frequency: 378,
    examples: [
      { sentence: "Выходной день", translation: "Hari libur" },
      { sentence: "Длинные каникулы", translation: "Libur panjang" },
    ],
    lessonIds: [8],
  },

  {
    id: 379,
    word: "отпуск",
    pronunciation: "/otpusk/",
    translation: "cuti",
    category: "noun",
    frequency: 379,
    examples: [
      { sentence: "Ежегодный отпуск", translation: "Cuti tahunan" },
      { sentence: "В отпуске", translation: "Sedang cuti" },
    ],
    lessonIds: [8],
  },

  {
    id: 380,
    word: "собрание",
    pronunciation: "/sobranije/",
    translation: "rapat",
    category: "noun",
    frequency: 380,
    examples: [
      { sentence: "Офисное собрание", translation: "Rapat kantor" },
      { sentence: "Есть собрание", translation: "Ada rapat" },
    ],
    lessonIds: [10],
  },

  {
    id: 381,
    word: "большой",
    pronunciation: "/boljʂoj/",
    translation: "besar",
    category: "adjective",
    frequency: 381,
    examples: [
      { sentence: "Большой дом", translation: "Rumah besar" },
      { sentence: "Большой город", translation: "Kota besar" },
    ],
    wordFamily: [
      { word: "больше", translation: "lebih besar" },
      { word: "величие", translation: "kebesaran" },
      { word: "увеличивать", translation: "memperbesar" },
      { word: "крупнейший", translation: "terbesar" },
    ],
    lessonIds: [13],
  },

  {
    id: 382,
    word: "маленький",
    pronunciation: "/maljenjkij/",
    translation: "kecil",
    category: "adjective",
    frequency: 382,
    examples: [
      { sentence: "Маленький дом", translation: "Rumah kecil" },
      { sentence: "Маленький ребёнок", translation: "Anak kecil" },
    ],
    wordFamily: [
      { word: "меньше", translation: "lebih kecil" },
      { word: "уменьшать", translation: "memperkecil" },
      { word: "мелкий", translation: "kecil" },
    ],
    lessonIds: [13],
  },

  {
    id: 383,
    word: "длинный",
    pronunciation: "/dlinnɨj/",
    translation: "panjang",
    category: "adjective",
    frequency: 383,
    examples: [
      { sentence: "Длинная дорога", translation: "Jalan panjang" },
      { sentence: "Длинные волосы", translation: "Rambut panjang" },
    ],
    lessonIds: [13],
  },

  {
    id: 384,
    word: "короткий",
    pronunciation: "/korotkij/",
    translation: "pendek",
    category: "adjective",
    frequency: 384,
    examples: [
      { sentence: "Короткие волосы", translation: "Rambut pendek" },
      { sentence: "Короткая дорога", translation: "Jalan pendek" },
    ],
    lessonIds: [13],
  },

  {
    id: 385,
    word: "быстрый",
    pronunciation: "/bɨstrɨj/",
    translation: "cepat",
    category: "adjective",
    frequency: 385,
    examples: [
      { sentence: "Быстрая машина", translation: "Mobil cepat" },
      { sentence: "Приходи быстрее!", translation: "Cepat datang!" },
    ],
    lessonIds: [13],
  },

  {
    id: 386,
    word: "медленный",
    pronunciation: "/mjedljennɨj/",
    translation: "lambat",
    category: "adjective",
    frequency: 386,
    examples: [
      { sentence: "Медленная машина", translation: "Mobil lambat" },
      { sentence: "Не медли", translation: "Jangan lambat" },
    ],
    lessonIds: [13],
  },

  {
    id: 387,
    word: "высокий",
    pronunciation: "/vɨsokij/",
    translation: "tinggi",
    category: "adjective",
    frequency: 387,
    examples: [
      { sentence: "Высокая гора", translation: "Gunung tinggi" },
      { sentence: "Он высокий", translation: "Dia tinggi" },
    ],
    lessonIds: [13],
  },

  {
    id: 388,
    word: "низкий",
    pronunciation: "/nizkij/",
    translation: "rendah",
    category: "adjective",
    frequency: 388,
    examples: [
      { sentence: "Низкий стол", translation: "Meja rendah" },
      { sentence: "Низкая цена", translation: "Harga rendah" },
    ],
    lessonIds: [13],
  },

  {
    id: 389,
    word: "тяжёлый",
    pronunciation: "/tjaʐjolɨj/",
    translation: "berat",
    category: "adjective",
    frequency: 389,
    examples: [
      { sentence: "Тяжёлый предмет", translation: "Barang berat" },
      { sentence: "Очень тяжёлый", translation: "Berat sekali" },
    ],
    lessonIds: [13],
  },

  {
    id: 390,
    word: "лёгкий",
    pronunciation: "/ljoɡkij/",
    translation: "ringan",
    category: "adjective",
    frequency: 390,
    examples: [
      { sentence: "Лёгкий предмет", translation: "Barang ringan" },
      { sentence: "Тяжесть", translation: "Berat ringan" },
    ],
    lessonIds: [13],
  },

  {
    id: 391,
    word: "сильный",
    pronunciation: "/siljnɨj/",
    translation: "kuat",
    category: "adjective",
    frequency: 391,
    examples: [
      { sentence: "Он сильный", translation: "Dia kuat" },
      { sentence: "Сильный ветер", translation: "Angin kuat" },
    ],
    lessonIds: [13],
  },

  {
    id: 392,
    word: "слабый",
    pronunciation: "/slabɨj/",
    translation: "lemah",
    category: "adjective",
    frequency: 392,
    examples: [
      { sentence: "Он слабый", translation: "Dia lemah" },
      { sentence: "Очень слабый", translation: "Lemah sekali" },
    ],
    lessonIds: [13],
  },

  {
    id: 393,
    word: "твёрдый",
    pronunciation: "/tvjordɨj/",
    translation: "keras",
    category: "adjective",
    frequency: 393,
    examples: [
      { sentence: "Твёрдый камень", translation: "Batu keras" },
      { sentence: "Громкий голос", translation: "Suara keras" },
    ],
    lessonIds: [13],
  },

  {
    id: 394,
    word: "мягкий",
    pronunciation: "/mjaɡkij/",
    translation: "lunak",
    category: "adjective",
    frequency: 394,
    examples: [
      { sentence: "Мягкая подушка", translation: "Bantal lunak" },
      { sentence: "Мягкая ткань", translation: "Kain lunak" },
    ],
    lessonIds: [13],
  },

  {
    id: 395,
    word: "грубый",
    pronunciation: "/ɡrubɨj/",
    translation: "kasar",
    category: "adjective",
    frequency: 395,
    examples: [
      { sentence: "Грубая ткань", translation: "Kain kasar" },
      { sentence: "Грубый человек", translation: "Orang kasar" },
    ],
    lessonIds: [13],
  },

  {
    id: 396,
    word: "гладкий",
    pronunciation: "/ɡladkij/",
    translation: "halus",
    category: "adjective",
    frequency: 396,
    examples: [
      { sentence: "Нежная кожа", translation: "Kulit halus" },
      { sentence: "Мелкий песок", translation: "Pasir halus" },
    ],
    lessonIds: [13],
  },

  {
    id: 397,
    word: "чистый",
    pronunciation: "/tɕistɨj/",
    translation: "bersih",
    category: "adjective",
    frequency: 397,
    examples: [
      { sentence: "Чистый дом", translation: "Rumah bersih" },
      { sentence: "Чистая вода", translation: "Air bersih" },
    ],
    lessonIds: [13],
  },

  {
    id: 398,
    word: "грязный",
    pronunciation: "/ɡrjaznɨj/",
    translation: "kotor",
    category: "adjective",
    frequency: 398,
    examples: [
      { sentence: "Грязная одежда", translation: "Baju kotor" },
      { sentence: "Грязная комната", translation: "Kamar kotor" },
    ],
    lessonIds: [13],
  },

  {
    id: 399,
    word: "мокрый",
    pronunciation: "/mokrɨj/",
    translation: "basah",
    category: "adjective",
    frequency: 399,
    examples: [
      { sentence: "Мокрая одежда", translation: "Baju basah" },
      { sentence: "Мокрая дорога", translation: "Jalan basah" },
    ],
    lessonIds: [13],
  },

  {
    id: 400,
    word: "сухой",
    pronunciation: "/suxoj/",
    translation: "kering",
    category: "adjective",
    frequency: 400,
    examples: [
      { sentence: "Сухая одежда", translation: "Baju kering" },
      { sentence: "Сухой сезон", translation: "Musim kering" },
    ],
    lessonIds: [13],
  },

  {
    id: 401,
    word: "здесь",
    pronunciation: "/zdjesj/",
    translation: "sini",
    category: "adverb",
    frequency: 401,
    examples: [
      { sentence: "Иди сюда!", translation: "Datang sini!" },
      { sentence: "Здесь", translation: "Di sini" },
    ],
    lessonIds: [14],
  },

  {
    id: 402,
    word: "там",
    pronunciation: "/tam/",
    translation: "situ",
    category: "adverb",
    frequency: 402,
    examples: [
      { sentence: "Там (у тебя)", translation: "Di situ" },
      { sentence: "Сиди там", translation: "Duduk di situ" },
    ],
    lessonIds: [14],
  },

  {
    id: 403,
    word: "там",
    pronunciation: "/tam/",
    translation: "sana",
    category: "adverb",
    frequency: 403,
    examples: [
      { sentence: "Там (далеко)", translation: "Di sana" },
      { sentence: "Иди туда", translation: "Pergi ke sana" },
    ],
    lessonIds: [14],
  },

  {
    id: 404,
    word: "верх",
    pronunciation: "/vjerx/",
    translation: "atas",
    category: "preposition",
    frequency: 404,
    examples: [
      { sentence: "На столе", translation: "Di atas meja" },
      { sentence: "Наверх", translation: "Ke atas" },
    ],
    lessonIds: [14],
  },

  {
    id: 405,
    word: "низ",
    pronunciation: "/niz/",
    translation: "bawah",
    category: "preposition",
    frequency: 405,
    examples: [
      { sentence: "Под стулом", translation: "Di bawah kursi" },
      { sentence: "Вниз", translation: "Ke bawah" },
    ],
    lessonIds: [14],
  },

  {
    id: 406,
    word: "в",
    pronunciation: "/v/",
    translation: "dalam",
    category: "preposition",
    frequency: 406,
    examples: [
      { sentence: "Внутри дома", translation: "Di dalam rumah" },
      { sentence: "Войти внутрь", translation: "Masuk ke dalam" },
    ],
    lessonIds: [14],
  },

  {
    id: 407,
    word: "снаружи",
    pronunciation: "/snaruʐi/",
    translation: "luar",
    category: "preposition",
    frequency: 407,
    examples: [
      { sentence: "Снаружи", translation: "Di luar" },
      { sentence: "Извне", translation: "Dari luar" },
    ],
    lessonIds: [14],
  },

  {
    id: 408,
    word: "перед",
    pronunciation: "/pjerjed/",
    translation: "depan",
    category: "preposition",
    frequency: 408,
    examples: [
      { sentence: "Перед домом", translation: "Di depan rumah" },
      { sentence: "Вперёд", translation: "Ke depan" },
    ],
    lessonIds: [14],
  },

  {
    id: 409,
    word: "сзади",
    pronunciation: "/szadi/",
    translation: "belakang",
    category: "preposition",
    frequency: 409,
    examples: [
      { sentence: "Позади дома", translation: "Di belakang rumah" },
      { sentence: "Назад", translation: "Ke belakang" },
    ],
    lessonIds: [14],
  },

  {
    id: 410,
    word: "рядом",
    pronunciation: "/rjadom/",
    translation: "samping",
    category: "preposition",
    frequency: 410,
    examples: [
      { sentence: "Рядом с домом", translation: "Di samping rumah" },
      { sentence: "Рядом со мной", translation: "Di samping saya" },
    ],
    lessonIds: [14],
  },

  {
    id: 411,
    word: "напротив",
    pronunciation: "/naprotiv/",
    translation: "seberang",
    category: "preposition",
    frequency: 411,
    examples: [
      { sentence: "Через дорогу", translation: "Di seberang jalan" },
      { sentence: "На той стороне", translation: "Seberang sana" },
    ],
    lessonIds: [14],
  },

  {
    id: 412,
    word: "край",
    pronunciation: "/kraj/",
    translation: "tepi",
    category: "noun",
    frequency: 412,
    examples: [
      { sentence: "Берег реки", translation: "Tepi sungai" },
      { sentence: "Край дороги", translation: "Tepi jalan" },
    ],
    lessonIds: [14],
  },

  {
    id: 413,
    word: "конец",
    pronunciation: "/konjets/",
    translation: "ujung",
    category: "noun",
    frequency: 413,
    examples: [
      { sentence: "Конец улицы", translation: "Ujung jalan" },
      { sentence: "В конце", translation: "Di ujung" },
    ],
    lessonIds: [14],
  },

  {
    id: 414,
    word: "окраина",
    pronunciation: "/okraina/",
    translation: "pinggir",
    category: "noun",
    frequency: 414,
    examples: [
      { sentence: "Окраина города", translation: "Pinggir kota" },
      { sentence: "На краю", translation: "Di pinggir" },
    ],
    lessonIds: [14],
  },

  {
    id: 415,
    word: "вокруг",
    pronunciation: "/vokruɡ/",
    translation: "sekitar",
    category: "preposition",
    frequency: 415,
    examples: [
      { sentence: "Вокруг дома", translation: "Sekitar rumah" },
      { sentence: "Около двух часов", translation: "Sekitar jam dua" },
    ],
    lessonIds: [14],
  },

  {
    id: 416,
    word: "угол",
    pronunciation: "/uɡol/",
    translation: "sudut",
    category: "noun",
    frequency: 416,
    examples: [
      { sentence: "Угол улицы", translation: "Sudut jalan" },
      { sentence: "В углу комнаты", translation: "Di sudut kamar" },
    ],
    lessonIds: [14],
  },

  {
    id: 417,
    word: "место",
    pronunciation: "/mjesto/",
    translation: "tempat",
    category: "noun",
    frequency: 417,
    examples: [
      { sentence: "Это место", translation: "Tempat ini" },
      { sentence: "Место (сиденье)", translation: "Tempat duduk" },
    ],
    lessonIds: [14],
  },

  {
    id: 418,
    word: "позиция",
    pronunciation: "/pozitsija/",
    translation: "posisi",
    category: "noun",
    frequency: 418,
    examples: [
      { sentence: "Моя позиция", translation: "Posisi saya" },
      { sentence: "Положение сидя", translation: "Posisi duduk" },
    ],
    lessonIds: [14],
  },

  {
    id: 419,
    word: "направление",
    pronunciation: "/napravljenije/",
    translation: "arah",
    category: "noun",
    frequency: 419,
    examples: [
      { sentence: "В каком направлении?", translation: "Arah mana?" },
      { sentence: "Следуйте за мной", translation: "Ikuti arah saya" },
    ],
    lessonIds: [14],
  },

  {
    id: 420,
    word: "направление",
    pronunciation: "/napravljenije/",
    translation: "jurusan",
    category: "noun",
    frequency: 420,
    examples: [
      { sentence: "Какое направление?", translation: "Jurusan apa?" },
      { sentence: "Не то направление", translation: "Salah jurusan" },
    ],
    lessonIds: [14],
  },

  {
    id: 421,
    word: "спать",
    pronunciation: "/spatj/",
    translation: "tidur",
    category: "verb",
    frequency: 421,
    examples: [
      { sentence: "Спокойной ночи", translation: "Selamat tidur" },
      { sentence: "Я хочу спать", translation: "Saya mau tidur" },
    ],
    wordFamily: [
      { word: "поспать", translation: "tidur" },
      { word: "сон", translation: "tidur, mimpi" },
      { word: "заснуть", translation: "tertidur" },
    ],
    lessonIds: [10, 12],
  },

  {
    id: 422,
    word: "просыпаться",
    pronunciation: "/prosɨpatjsja/",
    translation: "bangun",
    category: "verb",
    frequency: 422,
    examples: [
      { sentence: "Я просыпаюсь утром", translation: "Saya bangun pagi" },
      { sentence: "Проснуться", translation: "Bangun tidur" },
    ],
    wordFamily: [
      { word: "проснуться", translation: "bangun" },
      { word: "пробуждение", translation: "kebangkitan" },
    ],
    lessonIds: [8],
  },

  {
    id: 423,
    word: "купаться",
    pronunciation: "/kupatjsja/",
    translation: "mandi",
    category: "verb",
    frequency: 423,
    examples: [
      { sentence: "Утренний душ", translation: "Mandi pagi" },
      { sentence: "Я принимаю душ", translation: "Saya mandi" },
    ],
    wordFamily: [
      { word: "мыться", translation: "mandi" },
      { word: "купание", translation: "pemandian" },
    ],
    lessonIds: [10],
  },

  {
    id: 424,
    word: "учиться",
    pronunciation: "/utɕitjsja/",
    translation: "belajar",
    category: "verb",
    frequency: 424,
    examples: [
      { sentence: "Я изучаю язык", translation: "Saya belajar bahasa" },
      { sentence: "Учиться дома", translation: "Belajar di rumah" },
    ],
    lessonIds: [3, 10, 11, 12],
  },

  {
    id: 425,
    word: "читать",
    pronunciation: "/tɕitatj/",
    translation: "baca",
    category: "verb",
    frequency: 425,
    examples: [
      { sentence: "Читать книгу", translation: "Baca buku" },
      { sentence: "Я читаю", translation: "Saya baca" },
    ],
    wordFamily: [
      { word: "прочитать", translation: "membaca" },
      { word: "прочтение", translation: "pembacaan" },
      { word: "читатель", translation: "pembaca" },
      { word: "чтение", translation: "bacaan" },
    ],
    lessonIds: [10],
  },

  {
    id: 427,
    word: "мыть",
    pronunciation: "/mɨtj/",
    translation: "cuci",
    category: "verb",
    frequency: 427,
    examples: [
      { sentence: "Мыть руки", translation: "Cuci tangan" },
      { sentence: "Стирать одежду", translation: "Cuci baju" },
    ],
    lessonIds: [10],
  },

  {
    id: 428,
    word: "убирать",
    pronunciation: "/ubiratj/",
    translation: "bersihkan",
    category: "verb",
    frequency: 428,
    examples: [
      { sentence: "Убрать комнату", translation: "Bersihkan kamar" },
      { sentence: "Протереть стол", translation: "Bersihkan meja" },
    ],
    lessonIds: [10],
  },

  {
    id: 429,
    word: "готово",
    pronunciation: "/ɡotovo/",
    translation: "beres",
    category: "adjective",
    frequency: 429,
    examples: [
      { sentence: "Уже готово", translation: "Sudah beres" },
      { sentence: "Убери всё", translation: "Bereskan semua" },
    ],
    lessonIds: [10],
  },

  {
    id: 430,
    word: "использовать",
    pronunciation: "/ispoljzovatj/",
    translation: "pakai",
    category: "verb",
    frequency: 430,
    examples: [
      { sentence: "Надень эту рубашку", translation: "Pakai baju ini" },
      { sentence: "Что надеть?", translation: "Pakai apa?" },
    ],
    lessonIds: [10],
  },

  {
    id: 431,
    word: "снимать",
    pronunciation: "/snimatj/",
    translation: "lepas",
    category: "verb",
    frequency: 431,
    examples: [
      { sentence: "Сними обувь", translation: "Lepas sepatu" },
      { sentence: "Не отпускай", translation: "Jangan lepas" },
    ],
    lessonIds: [10],
  },

  {
    id: 432,
    word: "менять",
    pronunciation: "/mjenjatj/",
    translation: "ganti",
    category: "verb",
    frequency: 432,
    examples: [
      { sentence: "Переодеться", translation: "Ganti baju" },
      { sentence: "Разменять деньги", translation: "Ganti uang" },
    ],
    lessonIds: [10],
  },

  {
    id: 433,
    word: "хранить",
    pronunciation: "/xranitj/",
    translation: "simpan",
    category: "verb",
    frequency: 433,
    examples: [
      { sentence: "Убери эту книгу", translation: "Simpan buku ini" },
      { sentence: "Хранить аккуратно", translation: "Simpan rapi" },
    ],
    wordFamily: [
      { word: "сохранять", translation: "menyimpan, memelihara" },
      { word: "сохранение", translation: "penyimpanan, simpanan" },
    ],
    lessonIds: [10],
  },

  {
    id: 434,
    word: "провожать",
    pronunciation: "/provoʐatj/",
    translation: "antar",
    category: "verb",
    frequency: 434,
    examples: [
      { sentence: "Я провожу тебя", translation: "Saya antar kamu" },
      { sentence: "Отвести в школу", translation: "Antar ke sekolah" },
    ],
    lessonIds: [10],
  },

  {
    id: 435,
    word: "встречать",
    pronunciation: "/vstrjetɕatj/",
    translation: "jemput",
    category: "verb",
    frequency: 435,
    examples: [
      { sentence: "Забери меня", translation: "Jemput saya" },
      { sentence: "Я забираю ребёнка", translation: "Saya jemput anak" },
    ],
    lessonIds: [10],
  },

  {
    id: 438,
    word: "возвращаться домой",
    pronunciation: "/vozvraɕːatjsja domoj/",
    translation: "pulang",
    category: "verb",
    frequency: 438,
    examples: [
      { sentence: "Я иду домой", translation: "Saya pulang" },
      { sentence: "Уже дома", translation: "Sudah pulang" },
    ],
    lessonIds: [10],
  },

  {
    id: 439,
    word: "отправляться",
    pronunciation: "/otpravljatjsja/",
    translation: "berangkat",
    category: "verb",
    frequency: 439,
    examples: [
      { sentence: "Пример с \"отправляться\"", translation: "berangkat" },
    ],
    lessonIds: [10, 14],
  },

  {
    id: 440,
    word: "готовый",
    pronunciation: "/ɡotovɨj/",
    translation: "siap",
    category: "adjective",
    frequency: 440,
    examples: [
      { sentence: "Я готов", translation: "Saya siap" },
      { sentence: "Всё готово", translation: "Semua siap" },
    ],
    lessonIds: [10],
  },

  {
    id: 441,
    word: "кошка",
    pronunciation: "/koʂka/",
    translation: "kucing",
    category: "noun",
    frequency: 441,
    examples: [
      { sentence: "Моя кошка", translation: "Kucing saya" },
      { sentence: "Маленькая кошка", translation: "Kucing kecil" },
    ],
    lessonIds: [6, 13],
  },

  {
    id: 442,
    word: "собака",
    pronunciation: "/sobaka/",
    translation: "anjing",
    category: "noun",
    frequency: 442,
    examples: [
      { sentence: "Большая собака", translation: "Anjing besar" },
      { sentence: "Моя собака", translation: "Anjing saya" },
    ],
    lessonIds: [13],
  },

  {
    id: 443,
    word: "рыба",
    pronunciation: "/rɨba/",
    translation: "ikan",
    category: "noun",
    frequency: 443,
    examples: [
      { sentence: "Большая рыба", translation: "Ikan besar" },
      { sentence: "Есть рыбу", translation: "Makan ikan" },
    ],
    lessonIds: [3],
  },

  {
    id: 444,
    word: "птица",
    pronunciation: "/ptitsa/",
    translation: "burung",
    category: "noun",
    frequency: 444,
    examples: [
      { sentence: "Птица летит", translation: "Burung terbang" },
      { sentence: "Маленькая птица", translation: "Burung kecil" },
    ],
    lessonIds: [13],
  },

  {
    id: 445,
    word: "лошадь",
    pronunciation: "/loʂadj/",
    translation: "kuda",
    category: "noun",
    frequency: 445,
    examples: [
      { sentence: "Белая лошадь", translation: "Kuda putih" },
      { sentence: "Ездить верхом", translation: "Naik kuda" },
    ],
    lessonIds: [13],
  },

  {
    id: 446,
    word: "курица",
    pronunciation: "/kuritsa/",
    translation: "ayam",
    category: "noun",
    frequency: 446,
    examples: [
      { sentence: "Жареная курица", translation: "Ayam goreng" },
      { sentence: "Курятник", translation: "Kandang ayam" },
    ],
    lessonIds: [13],
  },

  {
    id: 447,
    word: "утка",
    pronunciation: "/utka/",
    translation: "bebek",
    category: "noun",
    frequency: 447,
    examples: [
      { sentence: "Утка плавает", translation: "Bebek berenang" },
      { sentence: "Жареная утка", translation: "Bebek goreng" },
    ],
    lessonIds: [13],
  },

  {
    id: 448,
    word: "корова",
    pronunciation: "/korova/",
    translation: "sapi",
    category: "noun",
    frequency: 448,
    examples: [
      { sentence: "Дойная корова", translation: "Sapi perah" },
      { sentence: "Говядина", translation: "Daging sapi" },
    ],
    lessonIds: [13],
  },

  {
    id: 449,
    word: "коза",
    pronunciation: "/koza/",
    translation: "kambing",
    category: "noun",
    frequency: 449,
    examples: [
      { sentence: "Горная коза", translation: "Kambing gunung" },
      { sentence: "Козлятина", translation: "Daging kambing" },
    ],
    lessonIds: [13],
  },

  {
    id: 450,
    word: "змея",
    pronunciation: "/zmjeja/",
    translation: "ular",
    category: "noun",
    frequency: 450,
    examples: [
      { sentence: "Большая змея", translation: "Ular besar" },
      { sentence: "Осторожно, змея", translation: "Hati-hati ular" },
    ],
    lessonIds: [13],
  },

  {
    id: 451,
    word: "тигр",
    pronunciation: "/tiɡr/",
    translation: "harimau",
    category: "noun",
    frequency: 451,
    examples: [
      { sentence: "Суматранский тигр", translation: "Harimau Sumatra" },
      { sentence: "Большой тигр", translation: "Harimau besar" },
    ],
    lessonIds: [13],
  },

  {
    id: 452,
    word: "слон",
    pronunciation: "/slon/",
    translation: "gajah",
    category: "noun",
    frequency: 452,
    examples: [
      { sentence: "Большой слон", translation: "Gajah besar" },
      { sentence: "Суматранский слон", translation: "Gajah Sumatra" },
    ],
    lessonIds: [13],
  },

  {
    id: 453,
    word: "обезьяна",
    pronunciation: "/objezjjana/",
    translation: "monyet",
    category: "noun",
    frequency: 453,
    examples: [
      { sentence: "Смешная обезьяна", translation: "Monyet lucu" },
      { sentence: "Обезьяна в лесу", translation: "Monyet di hutan" },
    ],
    lessonIds: [13],
  },

  {
    id: 454,
    word: "комар",
    pronunciation: "/komar/",
    translation: "nyamuk",
    category: "noun",
    frequency: 454,
    examples: [
      { sentence: "Много комаров", translation: "Banyak nyamuk" },
      { sentence: "Средство от комаров", translation: "Obat nyamuk" },
    ],
    lessonIds: [13],
  },

  {
    id: 455,
    word: "бабочка",
    pronunciation: "/babotɕka/",
    translation: "kupu-kupu",
    category: "noun",
    frequency: 455,
    examples: [
      { sentence: "Красивая бабочка", translation: "Kupu-kupu cantik" },
      { sentence: "Бабочка летит", translation: "Kupu-kupu terbang" },
    ],
    lessonIds: [13],
  },

  {
    id: 456,
    word: "пчела",
    pronunciation: "/ptɕjela/",
    translation: "lebah",
    category: "noun",
    frequency: 456,
    examples: [
      { sentence: "Медовая пчела", translation: "Lebah madu" },
      { sentence: "Укус пчелы", translation: "Sengatan lebah" },
    ],
    lessonIds: [13],
  },

  {
    id: 457,
    word: "муравей",
    pronunciation: "/muravjej/",
    translation: "semut",
    category: "noun",
    frequency: 457,
    examples: [
      { sentence: "Маленький муравей", translation: "Semut kecil" },
      { sentence: "Красный муравей", translation: "Semut merah" },
    ],
    lessonIds: [13],
  },

  {
    id: 458,
    word: "черепаха",
    pronunciation: "/tɕjerjepaxa/",
    translation: "kura-kura",
    category: "noun",
    frequency: 458,
    examples: [
      { sentence: "Медленная черепаха", translation: "Kura-kura lambat" },
      { sentence: "Морская черепаха", translation: "Kura-kura laut" },
    ],
    lessonIds: [13],
  },

  {
    id: 459,
    word: "крокодил",
    pronunciation: "/krokodil/",
    translation: "buaya",
    category: "noun",
    frequency: 459,
    examples: [
      { sentence: "Большой крокодил", translation: "Buaya besar" },
      { sentence: "Крокодил в реке", translation: "Buaya di sungai" },
    ],
    lessonIds: [13],
  },

  {
    id: 461,
    word: "велосипед",
    pronunciation: "/vjelosipjed/",
    translation: "sepeda",
    category: "noun",
    frequency: 461,
    examples: [
      { sentence: "Ехать на велосипеде", translation: "Naik sepeda" },
      { sentence: "Новый велосипед", translation: "Sepeda baru" },
    ],
    lessonIds: [13],
  },

  {
    id: 462,
    word: "поезд",
    pronunciation: "/pojezd/",
    translation: "kereta",
    category: "noun",
    frequency: 462,
    examples: [
      { sentence: "Ехать на поезде", translation: "Naik kereta" },
      { sentence: "Железнодорожная станция", translation: "Stasiun kereta" },
    ],
    lessonIds: [14],
  },

  {
    id: 463,
    word: "самолёт",
    pronunciation: "/samoljot/",
    translation: "pesawat",
    category: "noun",
    frequency: 463,
    examples: [
      { sentence: "Лететь на самолёте", translation: "Naik pesawat" },
      { sentence: "Самолёт летит", translation: "Pesawat terbang" },
    ],
    lessonIds: [14],
  },

  {
    id: 464,
    word: "корабль",
    pronunciation: "/korablj/",
    translation: "kapal",
    category: "noun",
    frequency: 464,
    examples: [
      { sentence: "Морской корабль", translation: "Kapal laut" },
      { sentence: "Плыть на корабле", translation: "Naik kapal" },
    ],
    lessonIds: [14],
  },

  {
    id: 465,
    word: "автобус",
    pronunciation: "/avtobus/",
    translation: "bis",
    category: "noun",
    frequency: 465,
    examples: [
      { sentence: "Ехать на автобусе", translation: "Naik bis" },
      { sentence: "Автобусная остановка", translation: "Halte bis" },
    ],
    lessonIds: [14],
  },

  {
    id: 466,
    word: "такси",
    pronunciation: "/taksi/",
    translation: "taksi",
    category: "noun",
    frequency: 466,
    examples: [
      { sentence: "Ехать на такси", translation: "Naik taksi" },
      { sentence: "Вызвать такси", translation: "Panggil taksi" },
    ],
    lessonIds: [14],
  },

  {
    id: 467,
    word: "мотоцикл",
    pronunciation: "/mototsikl/",
    translation: "motor",
    category: "noun",
    frequency: 467,
    examples: [
      { sentence: "Ехать на мотоцикле", translation: "Naik motor" },
      { sentence: "Новый мотоцикл", translation: "Motor baru" },
    ],
    lessonIds: [14],
  },

  {
    id: 468,
    word: "велорикша",
    pronunciation: "/vjelorikʂa/",
    translation: "becak",
    category: "noun",
    frequency: 468,
    examples: [
      { sentence: "Ехать на велорикше", translation: "Naik becak" },
      { sentence: "Традиционная велорикша", translation: "Becak tradisional" },
    ],
    lessonIds: [14],
  },

  {
    id: 469,
    word: "мототакси",
    pronunciation: "/mototaksi/",
    translation: "ojek",
    category: "noun",
    frequency: 469,
    examples: [
      { sentence: "Ехать на мототакси", translation: "Naik ojek" },
      { sentence: "Онлайн мототакси", translation: "Ojek online" },
    ],
    lessonIds: [14],
  },

  {
    id: 470,
    word: "бензин",
    pronunciation: "/bjenzin/",
    translation: "bensin",
    category: "noun",
    frequency: 470,
    examples: [
      { sentence: "Заправить бензин", translation: "Isi bensin" },
      { sentence: "Цена бензина", translation: "Harga bensin" },
    ],
    lessonIds: [14],
  },

  {
    id: 471,
    word: "шина",
    pronunciation: "/ʂina/",
    translation: "ban",
    category: "noun",
    frequency: 471,
    examples: [
      { sentence: "Спущенная шина", translation: "Ban kempes" },
      { sentence: "Заменить шину", translation: "Ganti ban" },
    ],
    lessonIds: [14],
  },

  {
    id: 472,
    word: "авария",
    pronunciation: "/avarija/",
    translation: "kecelakaan",
    category: "noun",
    frequency: 472,
    examples: [
      { sentence: "Дорожная авария", translation: "Kecelakaan lalu lintas" },
      { sentence: "Осторожно, авария", translation: "Hati-hati kecelakaan" },
    ],
    lessonIds: [14],
  },

  {
    id: 473,
    word: "пробка",
    pronunciation: "/probka/",
    translation: "macet",
    category: "adjective",
    frequency: 473,
    examples: [
      { sentence: "Дорожная пробка", translation: "Jalan macet" },
      { sentence: "Сильная пробка", translation: "Macet parah" },
    ],
    lessonIds: [14],
  },

  {
    id: 474,
    word: "билет",
    pronunciation: "/biljet/",
    translation: "tiket",
    category: "noun",
    frequency: 474,
    examples: [
      { sentence: "Купить билет", translation: "Beli tiket" },
      { sentence: "Авиабилет", translation: "Tiket pesawat" },
    ],
    lessonIds: [14],
  },

  {
    id: 475,
    word: "чемодан",
    pronunciation: "/tɕjemodan/",
    translation: "koper",
    category: "noun",
    frequency: 475,
    examples: [
      { sentence: "Большой чемодан", translation: "Koper besar" },
      { sentence: "Нести чемодан", translation: "Bawa koper" },
    ],
    lessonIds: [14],
  },

  {
    id: 476,
    word: "путешествие",
    pronunciation: "/putjeʂjestvije/",
    translation: "perjalanan",
    category: "noun",
    frequency: 476,
    examples: [
      { sentence: "Далёкая поездка", translation: "Perjalanan jauh" },
      { sentence: "Счастливого пути", translation: "Selamat perjalanan" },
    ],
    lessonIds: [14],
  },

  {
    id: 477,
    word: "туризм",
    pronunciation: "/turizm/",
    translation: "wisata",
    category: "noun",
    frequency: 477,
    examples: [
      { sentence: "Природный туризм", translation: "Wisata alam" },
      { sentence: "Туристическое место", translation: "Tempat wisata" },
    ],
    lessonIds: [14],
  },

  {
    id: 478,
    word: "карта",
    pronunciation: "/karta/",
    translation: "peta",
    category: "noun",
    frequency: 478,
    examples: [
      { sentence: "Карта города", translation: "Peta kota" },
      { sentence: "Посмотреть на карту", translation: "Lihat peta" },
    ],
    lessonIds: [14],
  },

  {
    id: 479,
    word: "паспорт",
    pronunciation: "/pasport/",
    translation: "paspor",
    category: "noun",
    frequency: 479,
    examples: [
      { sentence: "Мой паспорт", translation: "Paspor saya" },
      { sentence: "Проверка паспорта", translation: "Cek paspor" },
    ],
    lessonIds: [14],
  },

  {
    id: 480,
    word: "багаж",
    pronunciation: "/baɡaʐ/",
    translation: "bagasi",
    category: "noun",
    frequency: 480,
    examples: [
      { sentence: "Забрать багаж", translation: "Ambil bagasi" },
      { sentence: "Тяжёлый багаж", translation: "Bagasi berat" },
    ],
    lessonIds: [14],
  },

  {
    id: 481,
    word: "жаркий",
    pronunciation: "/ʐarkij/",
    translation: "panas",
    category: "adjective",
    frequency: 481,
    examples: [
      { sentence: "Сегодня жарко", translation: "Hari ini panas" },
      { sentence: "Горячий кофе", translation: "Kopi panas" },
    ],
    lessonIds: [13],
  },

  {
    id: 482,
    word: "холодный",
    pronunciation: "/xolodnɨj/",
    translation: "dingin",
    category: "adjective",
    frequency: 482,
    examples: [
      { sentence: "Холодная вода", translation: "Air dingin" },
      { sentence: "Сегодня холодно", translation: "Hari ini dingin" },
    ],
    lessonIds: [13],
  },

  {
    id: 483,
    word: "ветер",
    pronunciation: "/vjetjer/",
    translation: "angin",
    category: "noun",
    frequency: 483,
    examples: [
      { sentence: "Сильный ветер", translation: "Angin kencang" },
      { sentence: "Ветрено", translation: "Ada angin" },
    ],
    lessonIds: [13],
  },

  {
    id: 484,
    word: "облако",
    pronunciation: "/oblako/",
    translation: "awan",
    category: "noun",
    frequency: 484,
    examples: [
      { sentence: "Белые облака", translation: "Awan putih" },
      { sentence: "Тёмные облака", translation: "Awan gelap" },
    ],
    lessonIds: [13],
  },

  {
    id: 485,
    word: "землетрясение",
    pronunciation: "/zjemljetrjasjenije/",
    translation: "gempa",
    category: "noun",
    frequency: 485,
    examples: [
      { sentence: "Землетрясение", translation: "Gempa bumi" },
      { sentence: "Было землетрясение", translation: "Ada gempa" },
    ],
    lessonIds: [13],
  },

  {
    id: 486,
    word: "ясный",
    pronunciation: "/jasnɨj/",
    translation: "cerah",
    category: "adjective",
    frequency: 486,
    examples: [
      { sentence: "Ясная погода", translation: "Cuaca cerah" },
      { sentence: "Сегодня солнечно", translation: "Hari ini cerah" },
    ],
    lessonIds: [13],
  },

  {
    id: 487,
    word: "облачный",
    pronunciation: "/oblatɕnɨj/",
    translation: "mendung",
    category: "adjective",
    frequency: 487,
    examples: [
      { sentence: "Пасмурная погода", translation: "Cuaca mendung" },
      { sentence: "Тёмные тучи", translation: "Mendung gelap" },
    ],
    lessonIds: [13],
  },

  {
    id: 488,
    word: "прохладный",
    pronunciation: "/proxladnɨj/",
    translation: "sejuk",
    category: "adjective",
    frequency: 488,
    examples: [
      { sentence: "Прохладный воздух", translation: "Udara sejuk" },
      { sentence: "В горах прохладно", translation: "Di gunung sejuk" },
    ],
    lessonIds: [13],
  },

  {
    id: 489,
    word: "влажный",
    pronunciation: "/vlaʐnɨj/",
    translation: "lembab",
    category: "adjective",
    frequency: 489,
    examples: [
      { sentence: "Влажная погода", translation: "Cuaca lembab" },
      { sentence: "Влажный воздух", translation: "Udara lembab" },
    ],
    lessonIds: [13],
  },

  {
    id: 490,
    word: "погода",
    pronunciation: "/poɡoda/",
    translation: "cuaca",
    category: "noun",
    frequency: 490,
    examples: [
      { sentence: "Хорошая погода", translation: "Cuaca baik" },
      { sentence: "Плохая погода", translation: "Cuaca buruk" },
    ],
    lessonIds: [13],
  },

  {
    id: 491,
    word: "сезон",
    pronunciation: "/sjezon/",
    translation: "musim",
    category: "noun",
    frequency: 491,
    examples: [
      { sentence: "Сезон дождей", translation: "Musim hujan" },
      { sentence: "Сухой сезон", translation: "Musim kemarau" },
    ],
    lessonIds: [13],
  },

  {
    id: 492,
    word: "лето",
    pronunciation: "/ljeto/",
    translation: "musim panas",
    category: "noun",
    frequency: 492,
    examples: [
      { sentence: "Прошлым летом", translation: "Musim panas lalu" },
      { sentence: "Летние каникулы", translation: "Liburan musim panas" },
    ],
    lessonIds: [13],
  },

  {
    id: 493,
    word: "зима",
    pronunciation: "/zima/",
    translation: "musim dingin",
    category: "noun",
    frequency: 493,
    examples: [
      { sentence: "Зимой снег", translation: "Musim dingin salju" },
      { sentence: "Зимняя куртка", translation: "Jaket musim dingin" },
    ],
    lessonIds: [13],
  },

  {
    id: 494,
    word: "весна",
    pronunciation: "/vjesna/",
    translation: "musim semi",
    category: "noun",
    frequency: 494,
    examples: [
      { sentence: "Цветы весной", translation: "Bunga di musim semi" },
      { sentence: "Весна пришла", translation: "Musim semi tiba" },
    ],
    lessonIds: [13],
  },

  {
    id: 495,
    word: "осень",
    pronunciation: "/osjenj/",
    translation: "musim gugur",
    category: "noun",
    frequency: 495,
    examples: [
      { sentence: "Опавшие листья", translation: "Daun gugur" },
      { sentence: "Осень красива", translation: "Musim gugur indah" },
    ],
    lessonIds: [13],
  },

  {
    id: 496,
    word: "климат",
    pronunciation: "/klimat/",
    translation: "iklim",
    category: "noun",
    frequency: 496,
    examples: [
      { sentence: "Тропический климат", translation: "Iklim tropis" },
      { sentence: "Климат Индонезии", translation: "Iklim Indonesia" },
    ],
    lessonIds: [13],
  },

  {
    id: 497,
    word: "температура",
    pronunciation: "/tjempjeratura/",
    translation: "suhu",
    category: "noun",
    frequency: 497,
    examples: [
      { sentence: "Высокая температура", translation: "Suhu tinggi" },
      { sentence: "Какая температура?", translation: "Suhu berapa?" },
    ],
    lessonIds: [13],
  },

  {
    id: 498,
    word: "градус",
    pronunciation: "/ɡradus/",
    translation: "derajat",
    category: "noun",
    frequency: 498,
    examples: [
      { sentence: "Тридцать градусов", translation: "Tiga puluh derajat" },
    ],
    lessonIds: [7, 13],
  },

  {
    id: 499,
    word: "тайфун",
    pronunciation: "/tajfun/",
    translation: "topan",
    category: "noun",
    frequency: 499,
    examples: [
      { sentence: "Большой тайфун", translation: "Topan besar" },
      { sentence: "Предупреждение о тайфуне", translation: "Peringatan topan" },
    ],
    lessonIds: [13],
  },

  {
    id: 500,
    word: "наводнение",
    pronunciation: "/navodnjenije/",
    translation: "banjir",
    category: "noun",
    frequency: 500,
    examples: [
      { sentence: "Большое наводнение", translation: "Banjir besar" },
    ],
    lessonIds: [13],
  },

  {
    id: 501,
    word: "нога",
    pronunciation: "/noɡa/",
    translation: "kaki",
    category: "noun",
    frequency: 501,
    examples: [
      { sentence: "Идти пешком", translation: "Jalan kaki" },
      { sentence: "Моя нога болит", translation: "Kaki saya sakit" },
    ],
    lessonIds: [14],
  },

  {
    id: 502,
    word: "глаз",
    pronunciation: "/ɡlaz/",
    translation: "mata",
    category: "noun",
    frequency: 502,
    examples: [
      { sentence: "Карие глаза", translation: "Mata coklat" },
      { sentence: "Закрыть глаза", translation: "Tutup mata" },
    ],
    lessonIds: [13],
  },

  {
    id: 503,
    word: "рука",
    pronunciation: "/ruka/",
    translation: "tangan",
    category: "noun",
    frequency: 503,
    examples: [
      { sentence: "Мыть руки", translation: "Cuci tangan" },
      { sentence: "Правая рука", translation: "Tangan kanan" },
    ],
    lessonIds: [10],
  },

  {
    id: 504,
    word: "напиток",
    pronunciation: "/napitok/",
    translation: "minuman",
    category: "noun",
    frequency: 504,
    examples: [
      { sentence: "Холодный напиток", translation: "Minuman dingin" },
      { sentence: "Сладкий напиток", translation: "Minuman manis" },
    ],
    lessonIds: [15],
  },
];
