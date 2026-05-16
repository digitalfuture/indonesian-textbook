import type { DictionaryWord } from "../utils/types";

export const vocabulary: DictionaryWord[] = [
{
    id: 1,
    word: "selamat",
    pronunciation: "/səlamat/",
    translation: "здравствуйте, привет (букв. 'безопасный')",
    category: "interjection",
    frequency: 1,
    examples: [
      { sentence: "Selamat pagi!", translation: "Доброе утро!" },
      { sentence: "Selamat datang", translation: "Добро пожаловать" },
    ], // selamat jalan
    lessonIds: [1],
  },

{
    id: 2,
    word: "pagi",
    pronunciation: "/paɡi/",
    translation: "утро",
    category: "noun",
    frequency: 2,
    examples: [
      { sentence: "Selamat pagi", translation: "Доброе утро" },
      { sentence: "Saya bangun pagi", translation: "Я просыпаюсь утром" },
    ],
    lessonIds: [1, 8],
  },

{
    id: 3,
    word: "terima kasih",
    pronunciation: "/tərima kasih/",
    translation: "спасибо",
    category: "interjection",
    frequency: 3,
    examples: [
      { sentence: "Terima kasih banyak", translation: "Большое спасибо" },
      {
        sentence: "Terima kasih atas bantuannya",
        translation: "Спасибо за помощь",
      },
    ], // terima
    lessonIds: [1, 16],
  },

{
    id: 4,
    word: "sama-sama",
    pronunciation: "/sama sama/",
    translation: "пожалуйста (в ответ на спасибо)",
    category: "interjection",
    frequency: 4,
    examples: [
      {
        sentence: "Terima kasih - Sama-sama",
        translation: "Спасибо - Пожалуйста",
      },
      {
        sentence: "Sama-sama, senang bisa membantu",
        translation: "Пожалуйста, рад помочь",
      },
    ], // sama
    wordFamily: [
      { word: "sama-sama", translation: "пожалуйста (в ответ); вместе" },
      { word: "bersama", translation: "вместе, совместно" },
      { word: "menyamai", translation: "равняться, достигать" },
      { word: "menyamakan", translation: "уравнивать, сравнивать" },
      { word: "persamaan", translation: "равенство, уравнение" },
      { word: "sesama", translation: "такой же, подобный" },
    ],
    lessonIds: [1, 16],
  },

{
    id: 5,
    word: "maaf",
    pronunciation: "/maʔaf/",
    translation: "извините, простите",
    category: "interjection",
    frequency: 5,
    examples: [
      { sentence: "Maaf, saya terlambat", translation: "Извините, я опоздал" },
      { sentence: "Maaf, saya tidak tahu", translation: "Извините, я не знаю" },
    ],
    lessonIds: [1, 16],
  },

{
    id: 6,
    word: "tolong",
    pronunciation: "/toloŋ/",
    translation: "пожалуйста (просьба), помогите",
    category: "interjection",
    frequency: 6,
    examples: [
      { sentence: "Tolong bantu saya", translation: "Пожалуйста, помогите мне" },
      {
        sentence: "Tolong ambilkan buku",
        translation: "Пожалуйста, подай книгу",
      },
    ],
    lessonIds: [1, 16],
  },

{
    id: 7,
    word: "sampai jumpa",
    pronunciation: "/sampai dʒumpa/",
    translation: "до свидания",
    category: "interjection",
    frequency: 7,
    examples: [
      { sentence: "Sampai jumpa lagi", translation: "До новой встречи" },
      { sentence: "Sampai jumpa besok", translation: "До завтра" },
    ],
    lessonIds: [1],
  },

{
    id: 8,
    word: "ya",
    pronunciation: "/ja/",
    translation: "да",
    category: "adverb",
    frequency: 8,
    examples: [
      { sentence: "Ya, saya mengerti", translation: "Да, я понимаю" },
      { sentence: "Ya, benar", translation: "Да, верно" },
    ],
    lessonIds: [1],
  },

{
    id: 9,
    word: "tidak",
    pronunciation: "/tidaʔ/",
    translation: "нет, не",
    category: "adverb",
    frequency: 9,
    examples: [
      { sentence: "Tidak, saya tidak mau", translation: "Нет, я не хочу" },
      { sentence: "Saya tidak tahu", translation: "Я не знаю" },
    ],
    lessonIds: [1, 3, 5],
  },

{
    id: 10,
    word: "apa",
    pronunciation: "/apa/",
    translation: "что, вопросительная частица",
    category: "adverb",
    frequency: 10,
    examples: [
      { sentence: "Apa ini?", translation: "Что это?" },
      { sentence: "Apa kabar?", translation: "Как дела?" },
    ],
    lessonIds: [1, 4],
  },

{
    id: 11,
    word: "siapa",
    pronunciation: "/siapa/",
    translation: "кто",
    category: "adverb",
    frequency: 11,
    examples: [
      { sentence: "Siapa nama kamu?", translation: "Как тебя зовут?" },
      { sentence: "Siapa dia?", translation: "Кто он/она?" },
    ], // siapa-siapa
    lessonIds: [1, 4],
  },

{
    id: 12,
    word: "nama",
    pronunciation: "/nama/",
    translation: "имя",
    category: "noun",
    frequency: 12,
    examples: [
      { sentence: "Nama saya Andi", translation: "Меня зовут Анди" },
      { sentence: "Siapa namamu?", translation: "Как тебя зовут?" },
    ],
    lessonIds: [1],
  },

{
    id: 13,
    word: "kabar",
    pronunciation: "/kabar/",
    translation: "новости, дела",
    category: "noun",
    frequency: 13,
    examples: [
      { sentence: "Apa kabar?", translation: "Как дела?" },
      { sentence: "Kabar baik", translation: "Дела хорошие" },
    ],
    lessonIds: [1],
  },

{
    id: 14,
    word: "baik",
    pronunciation: "/baiʔ/",
    translation: "хороший, хорошо",
    category: "adjective",
    frequency: 14,
    examples: [
      { sentence: "Kabar baik", translation: "Дела хорошие" },
      { sentence: "Orang baik", translation: "Хороший человек" },
    ],
    lessonIds: [1, 13],
  },

{
    id: 15,
    word: "dari",
    pronunciation: "/dari/",
    translation: "из, от",
    category: "preposition",
    frequency: 15,
    examples: [
      { sentence: "Saya dari Rusia", translation: "Я из России" },
      { sentence: "Dari mana?", translation: "Откуда?" },
    ],
    lessonIds: [1, 14],
  },

{
    id: 16,
    word: "saya",
    pronunciation: "/saja/",
    translation: "я (официально)",
    category: "pronoun",
    frequency: 16,
    examples: [
      { sentence: "Saya siswa", translation: "Я ученик" },
      { sentence: "Buku saya", translation: "Моя книга" },
    ],
    lessonIds: [1, 2],
  },

{
    id: 17,
    word: "kamu",
    pronunciation: "/kamu/",
    translation: "ты (неформально)",
    category: "pronoun",
    frequency: 17,
    examples: [
      { sentence: "Kamu baik", translation: "Ты хороший" },
      { sentence: "Siapa kamu?", translation: "Кто ты?" },
    ],
    lessonIds: [2],
  },

{
    id: 18,
    word: "dia",
    pronunciation: "/dia/",
    translation: "он, она",
    category: "pronoun",
    frequency: 18,
    examples: [
      { sentence: "Dia guru", translation: "Он/она учитель" },
      { sentence: "Rumah dia", translation: "Его/её дом" },
    ],
    lessonIds: [2],
  },

{
    id: 19,
    word: "kita",
    pronunciation: "/kita/",
    translation: "мы (включая собеседника)",
    category: "pronoun",
    frequency: 19,
    examples: [
      { sentence: "Kita pergi", translation: "Мы идём (все вместе)" },
      { sentence: "Kita belajar", translation: "Мы учимся" },
    ],
    lessonIds: [2],
  },

{
    id: 20,
    word: "mereka",
    pronunciation: "/mereka/",
    translation: "они",
    category: "pronoun",
    frequency: 20,
    examples: [
      { sentence: "Mereka teman saya", translation: "Они мои друзья" },
      { sentence: "Mereka datang", translation: "Они приходят" },
    ],
    lessonIds: [2],
  },

{
    id: 21,
    word: "kami",
    pronunciation: "/kami/",
    translation: "мы (без собеседника)",
    category: "pronoun",
    frequency: 21,
    examples: [
      { sentence: "Kami dari Indonesia", translation: "Мы из Индонезии" },
      { sentence: "Kami pergi ke Bali", translation: "Мы едем на Бали" },
    ],
    lessonIds: [2],
  },

{
    id: 22,
    word: "Anda",
    pronunciation: "/Anda/",
    translation: "Вы (официально)",
    category: "pronoun",
    frequency: 22,
    examples: [
      { sentence: "Anda guru", translation: "Вы учитель" },
      { sentence: "Selamat pagi, Anda", translation: "Доброе утро, Вы" },
    ],
    lessonIds: [2],
  },

{
    id: 23,
    word: "aku",
    pronunciation: "/aku/",
    translation: "я (неформально)",
    category: "pronoun",
    frequency: 23,
    examples: [
      { sentence: "Aku cinta kamu", translation: "Я люблю тебя" },
      { sentence: "Aku mau makan", translation: "Я хочу есть" },
    ],
    lessonIds: [2],
  },

{
    id: 24,
    word: "ini",
    pronunciation: "/ini/",
    translation: "это, этот, эта",
    category: "adverb",
    frequency: 24,
    examples: [
      { sentence: "Ini buku saya", translation: "Это моя книга" },
      { sentence: "Rumah ini besar", translation: "Этот дом большой" },
    ],
    lessonIds: [2, 6],
  },

{
    id: 25,
    word: "itu",
    pronunciation: "/itu/",
    translation: "то, тот, та",
    category: "adverb",
    frequency: 25,
    examples: [
      { sentence: "Itu rumah dia", translation: "То его/её дом" },
      { sentence: "Buku itu", translation: "Та книга" },
    ],
    lessonIds: [2, 6],
  },

{
    id: 26,
    word: "beliau",
    pronunciation: "/bəliau/",
    translation: "он/она (уважительно)",
    category: "pronoun",
    frequency: 26,
    examples: [
      { sentence: "Beliau guru besar", translation: "Он уважаемый профессор" },
      {
        sentence: "Beliau sudah datang",
        translation: "Он/она уже пришёл/пришла",
      },
    ],
    lessonIds: [2],
  },

{
    id: 27,
    word: "engkau",
    pronunciation: "/əŋkau/",
    translation: "ты (поэтично/архаично)",
    category: "pronoun",
    frequency: 27,
    examples: [
      { sentence: "Engkau cantik", translation: "Ты красивая" },
      { sentence: "Engkau siapa?", translation: "Кто ты?" },
    ],
    lessonIds: [2],
  },

{
    id: 28,
    word: "kenalan",
    pronunciation: "/kenalan/",
    translation: "знакомиться, знакомство",
    category: "verb",
    frequency: 28,
    examples: [
      {
        sentence: "Senang berkenalan denganmu",
        translation: "Рад познакомиться с тобой",
      },
      { sentence: "Mari berkenalan", translation: "Давайте познакомимся" },
    ],
    wordFamily: [
      { word: "kenalan", translation: "знакомый, знакомство" },
      { word: "berkenalan", translation: "знакомиться" },
      { word: "mengenal", translation: "знать, узнавать" },
      { word: "dikenal", translation: "быть узнанным" },
      { word: "perkenalan", translation: "представление, знакомство" },
      { word: "terkenal", translation: "известный, знаменитый" },
      { word: "mengenali", translation: "опознавать, узнавать" },
      { word: "kenali", translation: "узнай, распознай" },
    ],
    lessonIds: [1, 16],
  },

{
    id: 29,
    word: "tinggal",
    pronunciation: "/tiŋɡal/",
    translation: "жить, проживать",
    category: "verb",
    frequency: 29,
    examples: [
      { sentence: "Saya tinggal di Moskow", translation: "Я живу в Москве" },
      { sentence: "Tinggal di mana?", translation: "Где живёшь?" },
    ],
    lessonIds: [1, 14],
  },

{
    id: 30,
    word: "asal",
    pronunciation: "/asal/",
    translation: "происхождение, родом",
    category: "noun",
    frequency: 30,
    examples: [
      { sentence: "Dari mana asalnya?", translation: "Откуда он родом?" },
      { sentence: "Asal saya dari Rusia", translation: "Я родом из России" },
    ],
    lessonIds: [1, 4],
  },

{
    id: 31,
    word: "kenapa",
    pronunciation: "/kənapa/",
    translation: "почему, зачем",
    category: "adverb",
    frequency: 31,
    examples: [
      { sentence: "Kenapa kamu pergi?", translation: "Почему ты уходишь?" },
      { sentence: "Kenapa tidak?", translation: "Почему нет?" },
    ],
    lessonIds: [4],
  },

{
    id: 32,
    word: "bagaimana",
    pronunciation: "/baɡaimana/",
    translation: "как, каким образом",
    category: "adverb",
    frequency: 32,
    examples: [
      { sentence: "Bagaimana kabarmu?", translation: "Как твои дела?" },
      { sentence: "Bagaimana caranya?", translation: "Как это сделать?" },
    ],
    lessonIds: [4],
  },

{
    id: 33,
    word: "selamat jalan",
    pronunciation: "/səlamat dʒalan/",
    translation: "счастливого пути",
    category: "interjection",
    frequency: 33,
    examples: [
      {
        sentence: "Selamat jalan, sampai jumpa!",
        translation: "Счастливого пути, до встречи!",
      },
      {
        sentence: "Selamat jalan, hati-hati!",
        translation: "Счастливого пути, береги себя!",
      },
    ],
    wordFamily: [
      { word: "berjalan", translation: "идти, ходить" },
      { word: "menjalan", translation: "проходить, выполняться" },
      { word: "menjalankan", translation: "выполнять, запускать" },
      { word: "perjalanan", translation: "путешествие, поездка" },
      { word: "pejalan", translation: "пешеход" },
      { word: "sejalan", translation: "по пути, согласованно" },
      { word: "jalan-jalan", translation: "гулять, прогуливаться" },
    ],
    lessonIds: [1, 16],
  },

{
    id: 34,
    word: "perkenalan",
    pronunciation: "/perkenalan/",
    translation: "представление, знакомство",
    category: "noun",
    frequency: 34,
    examples: [
      {
        sentence: "Perkenalkan, nama saya Andi",
        translation: "Разрешите представиться, меня зовут Анди",
      },
      { sentence: "Perkenalan pertama", translation: "Первое знакомство" },
    ],
    wordFamily: [
      { word: "kenalan", translation: "знакомый, знакомство" },
      { word: "berkenalan", translation: "знакомиться" },
      { word: "mengenal", translation: "знать, узнавать" },
      { word: "dikenal", translation: "быть узнанным" },
      { word: "perkenalan", translation: "представление, знакомство" },
      { word: "terkenal", translation: "известный, знаменитый" },
      { word: "mengenali", translation: "опознавать, узнавать" },
      { word: "kenali", translation: "узнай, распознай" },
    ],
    lessonIds: [1],
  },

{
    id: 35,
    word: "berkenalan",
    pronunciation: "/berkenalan/",
    translation: "знакомиться друг с другом",
    category: "verb",
    frequency: 35,
    examples: [
      { sentence: "Mereka sedang berkenalan", translation: "Они знакомятся" },
      { sentence: "Senang berkenalan", translation: "Приятно познакомиться" },
    ],
    wordFamily: [
      { word: "kenalan", translation: "знакомый, знакомство" },
      { word: "berkenalan", translation: "знакомиться" },
      { word: "mengenal", translation: "знать, узнавать" },
      { word: "dikenal", translation: "быть узнанным" },
      { word: "perkenalan", translation: "представление, знакомство" },
      { word: "terkenal", translation: "известный, знаменитый" },
      { word: "mengenali", translation: "опознавать, узнавать" },
      { word: "kenali", translation: "узнай, распознай" },
    ],
    lessonIds: [1, 16],
  },

{
    id: 36,
    word: "senang",
    pronunciation: "/senaŋ/",
    translation: "рад, приятно",
    category: "adjective",
    frequency: 36,
    examples: [
      { sentence: "Senang bertemu Anda", translation: "Рад встрече с Вами" },
      { sentence: "Saya senang sekali", translation: "Я очень рад" },
    ],
    lessonIds: [1, 13, 16],
  },

{
    id: 37,
    word: "bertemu",
    pronunciation: "/bərtəmu/",
    translation: "встречать, встречаться",
    category: "verb",
    frequency: 37,
    examples: [
      {
        sentence: "Senang bertemu denganmu",
        translation: "Рад встрече с тобой",
      },
      { sentence: "Kita bertemu lagi", translation: "Мы снова встретились" },
    ],
    lessonIds: [1, 16],
  },

{
    id: 38,
    word: "berkenan",
    pronunciation: "/bərkənan/",
    translation: "соблаговолить, быть любезным",
    category: "verb",
    frequency: 38,
    examples: [
      { sentence: "Silakan duduk", translation: "Садитесь, пожалуйста" },
      { sentence: "Berkenan datang", translation: "Соблаговолите прийти" },
    ],
    lessonIds: [1, 16],
  },

{
    id: 39,
    word: "silakan",
    pronunciation: "/silakan/",
    translation: "пожалуйста (приглашение)",
    category: "interjection",
    frequency: 39,
    examples: [
      { sentence: "Silakan masuk", translation: "Пожалуйста, входите" },
      { sentence: "Silakan duduk", translation: "Садитесь, пожалуйста" },
    ],
    lessonIds: [1, 16],
  },

{
    id: 40,
    word: "terima",
    pronunciation: "/terima/",
    translation: "принимать, получать",
    category: "verb",
    frequency: 40,
    examples: [
      { sentence: "Terima undangan", translation: "Принять приглашение" },
      { sentence: "Saya terima", translation: "Я принимаю" },
    ],
    lessonIds: [1],
  },

{
    id: 41,
    word: "makan",
    pronunciation: "/makan/",
    translation: "есть, кушать",
    category: "verb",
    frequency: 41,
    examples: [
      { sentence: "Saya makan nasi", translation: "Я ем рис" },
      { sentence: "Mau makan?", translation: "Хочешь есть?" },
    ], // makanan, makan siang, makan malam
    wordFamily: [
      { word: "memakan", translation: "съедать, есть" },
      { word: "dimakan", translation: "быть съеденным" },
      { word: "makanan", translation: "еда, пища" },
      { word: "pemakan", translation: "едок, пожиратель" },
      { word: "termakan", translation: "быть случайно съеденным" },
      { word: "makan-makan", translation: "застолье, пирушка" },
    ],
    lessonIds: [3, 12],
  },

{
    id: 42,
    word: "minum",
    pronunciation: "/minum/",
    translation: "пить",
    category: "verb",
    frequency: 42,
    examples: [
      { sentence: "Saya minum air", translation: "Я пью воду" },
      { sentence: "Mau minum?", translation: "Хочешь пить?" },
    ],
    wordFamily: [
      { word: "meminum", translation: "пить, выпивать" },
      { word: "diminum", translation: "быть выпитым" },
      { word: "minuman", translation: "напиток" },
      { word: "peminum", translation: "пьяница, любитель выпить" },
      { word: "terminum", translation: "быть случайно выпитым" },
    ],
    lessonIds: [3],
  },

{
    id: 43,
    word: "pergi",
    pronunciation: "/perɡi/",
    translation: "идти, уходить",
    category: "verb",
    frequency: 43,
    examples: [
      { sentence: "Saya pergi ke pasar", translation: "Я иду на рынок" },
      { sentence: "Dia pergi sekarang", translation: "Он уходит сейчас" },
    ],
    lessonIds: [3, 14],
  },

{
    id: 44,
    word: "datang",
    pronunciation: "/dataŋ/",
    translation: "приходить, приезжать",
    category: "verb",
    frequency: 44,
    examples: [
      { sentence: "Dia datang besok", translation: "Он придёт завтра" },
      { sentence: "Selamat datang!", translation: "Добро пожаловать!" },
    ],
    lessonIds: [3, 11],
  },

{
    id: 45,
    word: "lihat",
    pronunciation: "/lihat/",
    translation: "видеть, смотреть",
    category: "verb",
    frequency: 45,
    examples: [
      { sentence: "Saya lihat rumah", translation: "Я вижу дом" },
      { sentence: "Lihat itu!", translation: "Смотри туда!" },
    ],
    wordFamily: [
      { word: "melihat", translation: "видеть, смотреть" },
      { word: "dilihat", translation: "быть увиденным" },
      { word: "terlihat", translation: "видимый, заметный" },
      { word: "penglihatan", translation: "зрение, взгляд" },
      { word: "pelihat", translation: "ясновидящий, провидец" },
    ],
    lessonIds: [3, 15],
  },

{
    id: 46,
    word: "pegang",
    pronunciation: "/pəɡaŋ/",
    translation: "держать, трогать",
    category: "verb",
    frequency: 46,
    examples: [
      { sentence: "Pegang buku ini", translation: "Держи эту книгу" },
      { sentence: "Jangan pegang!", translation: "Не трогай!" },
    ],
    lessonIds: [3, 5],
  },

{
    id: 47,
    word: "lempar",
    pronunciation: "/lempar/",
    translation: "бросать, кидать",
    category: "verb",
    frequency: 47,
    examples: [
      { sentence: "Lempar bola", translation: "Бросить мяч" },
      { sentence: "Jangan lempar batu", translation: "Не бросай камни" },
    ],
    lessonIds: [3, 5],
  },

{
    id: 48,
    word: "pukul",
    pronunciation: "/pukul/",
    translation: "бить, ударять",
    category: "verb",
    frequency: 48,
    examples: [
      { sentence: "Jangan pukul dia", translation: "Не бей его" },
      { sentence: "Pukul pintu", translation: "Постучать в дверь" },
    ],
    lessonIds: [3, 5],
  },

{
    id: 49,
    word: "taruh",
    pronunciation: "/taruh/",
    translation: "класть, ставить",
    category: "verb",
    frequency: 49,
    examples: [
      { sentence: "Taruh buku di meja", translation: "Положи книгу на стол" },
      { sentence: "Taruh di sini", translation: "Положи здесь" },
    ],
    lessonIds: [3, 14],
  },

{
    id: 50,
    word: "coba",
    pronunciation: "/tʃoba/",
    translation: "пробовать, пытаться",
    category: "verb",
    frequency: 50,
    examples: [
      { sentence: "Coba lagi", translation: "Попробуй снова" },
      { sentence: "Saya coba", translation: "Я попробую" },
    ],
    lessonIds: [3],
  },

{
    id: 51,
    word: "nyanyi",
    pronunciation: "/ɲaɲi/",
    translation: "петь",
    category: "verb",
    frequency: 51,
    examples: [
      { sentence: "Dia suka menyanyi", translation: "Он любит петь" },
      { sentence: "Nyanyi lagu", translation: "Петь песню" },
    ],
    wordFamily: [
      { word: "menyanyi", translation: "петь" },
      { word: "dinyanyi", translation: "быть спетым" },
      { word: "nyanyian", translation: "песня, пение" },
      { word: "penyanyi", translation: "певец, певица" },
      { word: "penyanyian", translation: "пение" },
    ],
    lessonIds: [3],
  },

{
    id: 52,
    word: "main",
    pronunciation: "/main/",
    translation: "играть",
    category: "verb",
    frequency: 52,
    examples: [
      { sentence: "Anak-anak main bola", translation: "Дети играют в мяч" },
      { sentence: "Mau main?", translation: "Хочешь поиграть?" },
    ],
    wordFamily: [
      { word: "bermain", translation: "играть" },
      { word: "memainkan", translation: "играть (в/на), исполнять" },
      { word: "dimainkan", translation: "исполняться, разыгрываться" },
      { word: "mainan", translation: "игрушка" },
      { word: "pemain", translation: "игрок, исполнитель" },
      { word: "permainan", translation: "игра" },
    ],
    lessonIds: [3, 12],
  },

{
    id: 53,
    word: "lari",
    pronunciation: "/lari/",
    translation: "бежать, убегать",
    category: "verb",
    frequency: 53,
    examples: [
      { sentence: "Dia lari cepat", translation: "Он бежит быстро" },
      { sentence: "Jangan lari!", translation: "Не беги!" },
    ],
    wordFamily: [
      { word: "berlari", translation: "бежать, бегать" },
      { word: "pelari", translation: "бегун" },
      { word: "larian", translation: "побег, бегство" },
      { word: "melarikan", translation: "убегать, сбегать" },
      { word: "larikan", translation: "украсть, увести" },
    ],
    lessonIds: [3],
  },

{
    id: 54,
    word: "jalan-jalan",
    pronunciation: "/dʒalan-dʒalan/",
    translation: "гулять, прогуливаться",
    category: "verb",
    frequency: 54,
    examples: [
      { sentence: "Mari jalan-jalan", translation: "Давай погуляем" },
      { sentence: "Saya suka jalan-jalan", translation: "Я люблю гулять" },
    ],
    wordFamily: [
      { word: "berjalan", translation: "идти, ходить" },
      { word: "menjalan", translation: "проходить, выполняться" },
      { word: "menjalankan", translation: "выполнять, запускать" },
      { word: "perjalanan", translation: "путешествие, поездка" },
      { word: "pejalan", translation: "пешеход" },
      { word: "sejalan", translation: "по пути, согласованно" },
      { word: "jalan-jalan", translation: "гулять, прогуливаться" },
    ],
    lessonIds: [3, 14],
  },

{
    id: 55,
    word: "pikir",
    pronunciation: "/pikir/",
    translation: "думать",
    category: "verb",
    frequency: 55,
    examples: [
      { sentence: "Saya pikir begitu", translation: "Я так думаю" },
      { sentence: "Pikir dulu", translation: "Подумай сначала" },
    ],
    wordFamily: [
      { word: "berpikir", translation: "думать, мыслить" },
      { word: "memikirkan", translation: "думать о, обдумывать" },
      { word: "dipikirkan", translation: "быть обдуманным" },
      { word: "pikiran", translation: "мысль, размышление" },
      { word: "pemikir", translation: "мыслитель" },
      { word: "pemikiran", translation: "мышление, идея" },
    ],
    lessonIds: [3],
  },

{
    id: 56,
    word: "ingat",
    pronunciation: "/iŋat/",
    translation: "помнить, вспоминать",
    category: "verb",
    frequency: 56,
    examples: [
      { sentence: "Saya ingat kamu", translation: "Я помню тебя" },
      { sentence: "Ingat tidak?", translation: "Помнишь или нет?" },
    ],
    wordFamily: [
      { word: "mengingat", translation: "помнить, запоминать" },
      { word: "diingat", translation: "быть запомненным" },
      { word: "teringat", translation: "вспомнить (нечаянно)" },
      { word: "ingatan", translation: "память, воспоминание" },
      { word: "peringatan", translation: "напоминание, предупреждение" },
      { word: "mengingatkan", translation: "напоминать" },
    ],
    lessonIds: [3],
  },

{
    id: 57,
    word: "lupa",
    pronunciation: "/lupa/",
    translation: "забывать",
    category: "verb",
    frequency: 57,
    examples: [
      { sentence: "Saya lupa", translation: "Я забыл" },
      { sentence: "Jangan lupa!", translation: "Не забудь!" },
    ],
    wordFamily: [
      { word: "melupakan", translation: "забывать, забыть" },
      { word: "dilupakan", translation: "быть забытым" },
      { word: "terlupa", translation: "забытый, упущенный" },
      { word: "lupaan", translation: "забывчивый человек" },
      { word: "kelupaan", translation: "забыть (случайно)" },
    ],
    lessonIds: [3, 5],
  },

{
    id: 58,
    word: "kirim",
    pronunciation: "/kirim/",
    translation: "посылать, отправлять",
    category: "verb",
    frequency: 58,
    examples: [
      { sentence: "Kirim surat", translation: "Отправить письмо" },
      { sentence: "Saya kirim pesan", translation: "Я отправляю сообщение" },
    ],
    wordFamily: [
      { word: "mengirim", translation: "отправлять, посылать" },
      { word: "dikirim", translation: "быть отправленным" },
      { word: "kiriman", translation: "посылка, отправление" },
      { word: "pengirim", translation: "отправитель" },
      { word: "pengiriman", translation: "отправка, доставка" },
    ],
    lessonIds: [3],
  },

{
    id: 59,
    word: "terbang",
    pronunciation: "/tərbaŋ/",
    translation: "летать, лететь",
    category: "verb",
    frequency: 59,
    examples: [
      { sentence: "Burung terbang", translation: "Птица летит" },
      { sentence: "Pesawat terbang", translation: "Самолёт летит" },
    ],
    lessonIds: [3],
  },

{
    id: 60,
    word: "ajar",
    pronunciation: "/adʒar/",
    translation: "учить, обучать",
    category: "verb",
    frequency: 60,
    examples: [
      { sentence: "Guru mengajar", translation: "Учитель учит" },
      { sentence: "Ajar saya", translation: "Научи меня" },
    ],
    wordFamily: [
      { word: "mengajar", translation: "учить, преподавать" },
      { word: "diajar", translation: "быть обученным" },
      { word: "belajar", translation: "учиться, изучать" },
      { word: "pelajar", translation: "ученик, учащийся" },
      { word: "pengajar", translation: "преподаватель, учитель" },
      { word: "ajaran", translation: "учение, доктрина" },
      { word: "pengajaran", translation: "обучение, преподавание" },
      { word: "pelajaran", translation: "урок, предмет" },
    ],
    lessonIds: [3],
  },

{
    id: 61,
    word: "rumah",
    pronunciation: "/rumah/",
    translation: "дом",
    category: "noun",
    frequency: 61,
    examples: [
      { sentence: "Rumah saya besar", translation: "Мой дом большой" },
      { sentence: "Di rumah", translation: "Дома" },
    ],
    wordFamily: [
      { word: "rumah sakit", translation: "больница" },
      { word: "rumah tangga", translation: "домашнее хозяйство" },
      { word: "berumah", translation: "иметь дом, жить" },
      { word: "perumahan", translation: "жильё, жилой комплекс" },
      { word: "serumah", translation: "в одном доме, совместно" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 62,
    word: "buku",
    pronunciation: "/buku/",
    translation: "книга",
    category: "noun",
    frequency: 62,
    examples: [
      { sentence: "Ini buku saya", translation: "Это моя книга" },
      { sentence: "Baca buku", translation: "Читать книгу" },
    ],
    lessonIds: [2, 6, 10],
  },

{
    id: 63,
    word: "mobil",
    pronunciation: "/mobil/",
    translation: "машина, автомобиль",
    category: "noun",
    frequency: 63,
    examples: [
      { sentence: "Mobil baru", translation: "Новая машина" },
      { sentence: "Mobil saya merah", translation: "Моя машина красная" },
    ],
    lessonIds: [6, 13],
  },

{
    id: 64,
    word: "orang",
    pronunciation: "/oraŋ/",
    translation: "человек, люди",
    category: "noun",
    frequency: 64,
    examples: [
      { sentence: "Satu orang", translation: "Один человек" },
      { sentence: "Orang Indonesia", translation: "Индонезиец" },
    ],
    lessonIds: [7, 15],
  },

{
    id: 65,
    word: "teman",
    pronunciation: "/teman/",
    translation: "друг, товарищ",
    category: "noun",
    frequency: 65,
    examples: [
      { sentence: "Teman saya", translation: "Мой друг" },
      { sentence: "Teman baik", translation: "Хороший друг" },
    ],
    lessonIds: [2, 6, 13],
  },

{
    id: 66,
    word: "malam",
    pronunciation: "/malam/",
    translation: "ночь, вечер",
    category: "noun",
    frequency: 66,
    examples: [
      { sentence: "Selamat malam", translation: "Доброй ночи" },
      { sentence: "Malam ini", translation: "Сегодня вечером" },
    ],
    wordFamily: [
      { word: "makan malam", translation: "ужин" },
      { word: "bermalam", translation: "ночевать" },
      { word: "semalam", translation: "прошлой ночью; всю ночь" },
      { word: "malam-malam", translation: "поздно вечером" },
      { word: "kemalaman", translation: "слишком поздно (ночью)" },
    ],
    lessonIds: [1, 8],
  },

{
    id: 67,
    word: "siang",
    pronunciation: "/siaŋ/",
    translation: "день (время суток)",
    category: "noun",
    frequency: 67,
    examples: [
      { sentence: "Selamat siang", translation: "Добрый день" },
      { sentence: "Makan siang", translation: "Обед" },
    ],
    wordFamily: [
      { word: "makan siang", translation: "обед" },
      { word: "siang-siang", translation: "рано, спозаранку" },
      { word: "sesiang", translation: "в полдень, днём" },
      { word: "siangan", translation: "чуть позднее утра" },
    ],
    lessonIds: [1, 8],
  },

{
    id: 68,
    word: "sore",
    pronunciation: "/sorə/",
    translation: "вечер (до заката)",
    category: "noun",
    frequency: 68,
    examples: [
      { sentence: "Selamat sore", translation: "Добрый вечер" },
      { sentence: "Sore ini", translation: "Сегодня вечером" },
    ],
    lessonIds: [1, 8],
  },

{
    id: 69,
    word: "saya mau",
    pronunciation: "/saja mau/",
    translation: "я хочу, я собираюсь",
    category: "verb",
    frequency: 69,
    examples: [
      { sentence: "Saya mau makan", translation: "Я хочу есть" },
      { sentence: "Saya mau pergi", translation: "Я хочу пойти" },
    ],
    lessonIds: [3, 11, 12],
  },

{
    id: 70,
    word: "ada",
    pronunciation: "/ada/",
    translation: "есть, имеется, существовать",
    category: "verb",
    frequency: 70,
    examples: [
      { sentence: "Ada buku di meja", translation: "На столе есть книга" },
      { sentence: "Ada apa?", translation: "Что случилось?" },
    ],
    lessonIds: [3, 6],
  },

{
    id: 71,
    word: "tiada",
    pronunciation: "/tiada/",
    translation: "нет, не имеется",
    category: "verb",
    frequency: 71,
    examples: [
      { sentence: "Tiada masalah", translation: "Нет проблем" },
      { sentence: "Tiada seorang pun", translation: "Никого нет" },
    ],
    lessonIds: [5],
  },

{
    id: 72,
    word: "membaca",
    pronunciation: "/məmbatʃa/",
    translation: "читать, прочитать",
    category: "verb",
    frequency: 72,
    examples: [
      { sentence: "Saya membaca buku", translation: "Я читаю книгу" },
      { sentence: "Dia membaca surat", translation: "Он читает письмо" },
    ],
    wordFamily: [
      { word: "membaca", translation: "читать, прочитать" },
      { word: "dibaca", translation: "быть прочитанным" },
      { word: "bacaan", translation: "чтение, текст, чтиво" },
      { word: "pembaca", translation: "читатель" },
      { word: "terbaca", translation: "читаемый, различимый" },
      { word: "pembacaan", translation: "прочтение, чтение вслух" },
    ],
    lessonIds: [3, 10],
  },

{
    id: 73,
    word: "menulis",
    pronunciation: "/mənulis/",
    translation: "писать, написать",
    category: "verb",
    frequency: 73,
    examples: [
      { sentence: "Saya menulis surat", translation: "Я пишу письмо" },
      { sentence: "Menulis nama", translation: "Написать имя" },
    ],
    wordFamily: [
      { word: "menulis", translation: "писать, написать" },
      { word: "ditulis", translation: "быть написанным" },
      { word: "tulisan", translation: "надпись, письмо, текст" },
      { word: "penulis", translation: "писатель, автор" },
      { word: "tertulis", translation: "написанный, письменный" },
      { word: "penulisan", translation: "написание, письмо" },
    ],
    lessonIds: [3],
  },

{
    id: 74,
    word: "dengar",
    pronunciation: "/dəŋar/",
    translation: "слушать, слышать",
    category: "verb",
    frequency: 74,
    examples: [
      { sentence: "Saya dengar musik", translation: "Я слушаю музыку" },
      { sentence: "Dengar!", translation: "Слушай!" },
    ],
    wordFamily: [
      { word: "mendengar", translation: "слышать, слушать" },
      { word: "didengar", translation: "быть услышанным" },
      { word: "pendengar", translation: "слушатель" },
      { word: "terdengar", translation: "слышный, раздавшийся" },
      { word: "pendengaran", translation: "слух" },
    ],
    lessonIds: [3],
  },

{
    id: 75,
    word: "tahu",
    pronunciation: "/tahu/",
    translation: "знать",
    category: "verb",
    frequency: 75,
    examples: [
      { sentence: "Saya tidak tahu", translation: "Я не знаю" },
      { sentence: "Apa kamu tahu?", translation: "Ты знаешь?" },
    ],
    wordFamily: [
      { word: "mengetahui", translation: "знать, понимать, узнавать" },
      { word: "diketahui", translation: "известный, быть узнанным" },
      { word: "pengetahuan", translation: "знание, познание" },
      { word: "ketahui", translation: "знай, узнай" },
      { word: "tertahu", translation: "известно, стало известно" },
    ],
    lessonIds: [3, 5],
  },

{
    id: 76,
    word: "bicara",
    pronunciation: "/bitʃara/",
    translation: "говорить, разговаривать",
    category: "verb",
    frequency: 76,
    examples: [
      {
        sentence: "Saya bicara bahasa Indonesia",
        translation: "Я говорю по-индонезийски",
      },
      { sentence: "Mereka bicara", translation: "Они разговаривают" },
    ],
    wordFamily: [
      { word: "berbicara", translation: "говорить, разговаривать" },
      { word: "pembicara", translation: "оратор, докладчик" },
      { word: "pembicaraan", translation: "разговор, обсуждение" },
      { word: "membicarakan", translation: "обсуждать, говорить о" },
      { word: "dibicarakan", translation: "обсуждаться" },
    ],
    lessonIds: [3],
  },

{
    id: 77,
    word: "mengerti",
    pronunciation: "/məŋərti/",
    translation: "понимать",
    category: "verb",
    frequency: 77,
    examples: [
      { sentence: "Saya mengerti", translation: "Я понимаю" },
      { sentence: "Saya tidak mengerti", translation: "Я не понимаю" },
    ],
    lessonIds: [3, 5],
  },

{
    id: 78,
    word: "bawa",
    pronunciation: "/bawa/",
    translation: "нести, приносить",
    category: "verb",
    frequency: 78,
    examples: [
      { sentence: "Bawa buku ini", translation: "Принеси эту книгу" },
      { sentence: "Saya bawa mobil", translation: "Я привёл машину" },
    ],
    wordFamily: [
      { word: "membawa", translation: "нести, приносить" },
      { word: "dibawa", translation: "быть принесённым" },
      { word: "bawaan", translation: "ноша, груз, багаж" },
      { word: "pembawa", translation: "носитель, переносчик" },
      { word: "terbawa", translation: "унесённый, занесённый" },
    ],
    lessonIds: [3],
  },

{
    id: 79,
    word: "buat",
    pronunciation: "/buat/",
    translation: "делать, создавать",
    category: "verb",
    frequency: 79,
    examples: [
      { sentence: "Saya buat kopi", translation: "Я делаю кофе" },
      { sentence: "Buat apa?", translation: "Зачем? (букв. 'делать что?')" },
    ],
    wordFamily: [
      { word: "membuat", translation: "делать, создавать" },
      { word: "dibuat", translation: "сделанный, созданный" },
      { word: "buatan", translation: "изделие, творение" },
      { word: "pembuat", translation: "создатель, производитель" },
      { word: "pembuatan", translation: "изготовление, производство" },
      { word: "terbuat", translation: "сделанный (из материала)" },
      { word: "berbuat", translation: "делать, поступать" },
    ],
    lessonIds: [3],
  },

{
    id: 80,
    word: "beri",
    pronunciation: "/bəri/",
    translation: "давать, дать",
    category: "verb",
    frequency: 80,
    examples: [
      { sentence: "Beri saya buku", translation: "Дай мне книгу" },
      { sentence: "Dia beri hadiah", translation: "Он даёт подарок" },
    ],
    wordFamily: [
      { word: "memberi", translation: "давать, предоставлять" },
      { word: "diberi", translation: "быть данным" },
      { word: "pemberi", translation: "дающий, даритель" },
      { word: "pemberian", translation: "дар, подарок, даяние" },
      { word: "berikan", translation: "дай, отдай" },
      { word: "diberikan", translation: "быть данным, вручённым" },
    ],
    lessonIds: [3],
  },

{
    id: 81,
    word: "cari",
    pronunciation: "/tʃari/",
    translation: "искать, найти",
    category: "verb",
    frequency: 81,
    examples: [
      { sentence: "Cari buku", translation: "Искать книгу" },
      { sentence: "Saya cari rumah", translation: "Я ищу дом" },
    ],
    wordFamily: [
      { word: "mencari", translation: "искать, найти" },
      { word: "dicari", translation: "быть искомым, разыскиваться" },
      { word: "pencari", translation: "искатель, разыскивающий" },
      { word: "pencarian", translation: "поиск, поиски" },
      { word: "carikan", translation: "найти (для кого-то)" },
    ],
    lessonIds: [3],
  },

{
    id: 82,
    word: "tunggu",
    pronunciation: "/tuŋɡu/",
    translation: "ждать, подождать",
    category: "verb",
    frequency: 82,
    examples: [
      { sentence: "Tunggu saya!", translation: "Подожди меня!" },
      { sentence: "Saya tunggu", translation: "Я жду" },
    ],
    wordFamily: [
      { word: "menunggu", translation: "ждать, ожидать" },
      { word: "ditunggu", translation: "быть ожидаемым" },
      { word: "tungguan", translation: "ожидание" },
      { word: "penunggu", translation: "тот, кто ждёт; сторож" },
      { word: "menunggukan", translation: "ожидать (кого-то)" },
    ],
    lessonIds: [3],
  },

{
    id: 83,
    word: "ambil",
    pronunciation: "/ambil/",
    translation: "брать, взять",
    category: "verb",
    frequency: 83,
    examples: [
      { sentence: "Ambil buku", translation: "Возьми книгу" },
      { sentence: "Tolong ambilkan", translation: "Пожалуйста, подай" },
    ],
    wordFamily: [
      { word: "mengambil", translation: "брать, взять" },
      { word: "diambil", translation: "быть взятым" },
      { word: "ambilan", translation: "взятое; урожай" },
      { word: "pengambil", translation: "берущий, захватчик" },
      { word: "pengambilan", translation: "взятие, сбор" },
    ],
    lessonIds: [3, 16],
  },

{
    id: 84,
    word: "masuk",
    pronunciation: "/masuʔ/",
    translation: "входить, заходить",
    category: "verb",
    frequency: 84,
    examples: [
      { sentence: "Silakan masuk", translation: "Пожалуйста, входите" },
      { sentence: "Masuk ke rumah", translation: "Войти в дом" },
    ],
    wordFamily: [
      { word: "memasuki", translation: "входить, вступать" },
      { word: "memasukkan", translation: "вставлять, включать" },
      { word: "dimasukkan", translation: "быть вставленным" },
      { word: "termasuk", translation: "включая, в том числе" },
      { word: "masukan", translation: "вход; предложение, вклад" },
    ],
    lessonIds: [3, 14, 16],
  },

{
    id: 85,
    word: "keluar",
    pronunciation: "/keluar/",
    translation: "выходить, выйти",
    category: "verb",
    frequency: 85,
    examples: [
      { sentence: "Keluar dari rumah", translation: "Выйти из дома" },
      { sentence: "Dia keluar", translation: "Он вышел" },
    ],
    wordFamily: [
      { word: "mengeluarkan", translation: "выпускать, издавать" },
      { word: "dikeluarkan", translation: "быть выпущенным" },
      { word: "keluaran", translation: "выход; продукт, выпуск" },
      { word: "pengeluaran", translation: "расход, выпуск, вывод" },
    ],
    lessonIds: [3, 14],
  },

{
    id: 86,
    word: "naik",
    pronunciation: "/naiʔ/",
    translation: "подниматься, садиться (в транспорт)",
    category: "verb",
    frequency: 86,
    examples: [
      { sentence: "Naik mobil", translation: "Сесть в машину" },
      { sentence: "Naik pesawat", translation: "Лететь самолётом" },
    ],
    wordFamily: [
      { word: "menaik", translation: "повышаться, расти" },
      { word: "menaiki", translation: "подниматься, взбираться" },
      { word: "menaikkan", translation: "повышать, увеличивать" },
      { word: "dinaikkan", translation: "быть повышенным" },
      { word: "naikan", translation: "повышение, подъём" },
      { word: "kenaikan", translation: "рост, повышение" },
    ],
    lessonIds: [3, 14],
  },

{
    id: 87,
    word: "turun",
    pronunciation: "/turun/",
    translation: "спускаться, выходить (из транспорта)",
    category: "verb",
    frequency: 87,
    examples: [
      { sentence: "Turun dari mobil", translation: "Выйти из машины" },
      { sentence: "Turun di sini", translation: "Выхожу здесь" },
    ],
    wordFamily: [
      { word: "menurun", translation: "снижаться, спускаться" },
      { word: "menuruni", translation: "спускаться по" },
      { word: "menurunkan", translation: "снижать, опускать" },
      { word: "diturunkan", translation: "быть сниженным" },
      { word: "turunan", translation: "потомок; производное" },
      { word: "keturunan", translation: "потомок, происхождение" },
    ],
    lessonIds: [3, 14],
  },

{
    id: 88,
    word: "beli",
    pronunciation: "/bəli/",
    translation: "покупать, купить",
    category: "verb",
    frequency: 88,
    examples: [
      { sentence: "Saya beli buku", translation: "Я покупаю книгу" },
      { sentence: "Mau beli apa?", translation: "Что хочешь купить?" },
    ],
    wordFamily: [
      { word: "membeli", translation: "купить, покупать" },
      { word: "dibeli", translation: "быть купленным" },
      { word: "pembeli", translation: "покупатель" },
      { word: "pembelian", translation: "покупка, приобретение" },
      { word: "belanja", translation: "покупки, закупать" },
    ],
    lessonIds: [3],
  },

{
    id: 89,
    word: "jual",
    pronunciation: "/dʒual/",
    translation: "продавать",
    category: "verb",
    frequency: 89,
    examples: [
      { sentence: "Dia jual rumah", translation: "Он продаёт дом" },
      { sentence: "Jual mobil", translation: "Продать машину" },
    ],
    wordFamily: [
      { word: "menjual", translation: "продавать" },
      { word: "dijual", translation: "продаётся, быть проданным" },
      { word: "penjual", translation: "продавец" },
      { word: "penjualan", translation: "продажа, сбыт" },
      { word: "jualan", translation: "товар, продукт на продажу" },
    ],
    lessonIds: [3],
  },

{
    id: 90,
    word: "berenang",
    pronunciation: "/bərənaŋ/",
    translation: "плавать",
    category: "verb",
    frequency: 90,
    examples: [
      { sentence: "Saya bisa berenang", translation: "Я умею плавать" },
      { sentence: "Berenang di laut", translation: "Плавать в море" },
    ],
    lessonIds: [3, 12],
  },

{
    id: 91,
    word: "berlari",
    pronunciation: "/bərlari/",
    translation: "бегать, бежать",
    category: "verb",
    frequency: 91,
    examples: [
      { sentence: "Dia berlari cepat", translation: "Он бежит быстро" },
      { sentence: "Berlari di taman", translation: "Бегать в парке" },
    ],
    wordFamily: [
      { word: "berlari", translation: "бежать, бегать" },
      { word: "pelari", translation: "бегун" },
      { word: "larian", translation: "побег, бегство" },
      { word: "melarikan", translation: "убегать, сбегать" },
      { word: "larikan", translation: "украсть, увести" },
    ],
    lessonIds: [3, 13],
  },

{
    id: 92,
    word: "duduk",
    pronunciation: "/duduʔ/",
    translation: "сидеть, садиться",
    category: "verb",
    frequency: 92,
    examples: [
      { sentence: "Silakan duduk", translation: "Садитесь, пожалуйста" },
      { sentence: "Duduk di kursi", translation: "Сидеть на стуле" },
    ],
    wordFamily: [
      { word: "menduduki", translation: "занимать (место)" },
      { word: "mendudukkan", translation: "усаживать, размещать" },
      { word: "diduduki", translation: "быть занятым" },
      { word: "kedudukan", translation: "положение, статус" },
      { word: "penduduk", translation: "житель, население" },
    ],
    lessonIds: [3, 14],
  },

{
    id: 93,
    word: "berdiri",
    pronunciation: "/bərdiri/",
    translation: "стоять, вставать",
    category: "verb",
    frequency: 93,
    examples: [
      { sentence: "Berdiri di sini", translation: "Стой здесь" },
      { sentence: "Dia berdiri", translation: "Он стоит" },
    ],
    lessonIds: [3],
  },

{
    id: 94,
    word: "buka",
    pronunciation: "/buka/",
    translation: "открывать",
    category: "verb",
    frequency: 94,
    examples: [
      { sentence: "Buka pintu", translation: "Открой дверь" },
      { sentence: "Toko buka jam 8", translation: "Магазин открывается в 8" },
    ],
    wordFamily: [
      { word: "membuka", translation: "открывать" },
      { word: "dibuka", translation: "быть открытым" },
      { word: "terbuka", translation: "открытый, открыт" },
      { word: "bukaan", translation: "отверстие; начало" },
      { word: "pembuka", translation: "открыватель, вступление" },
      { word: "pembukaan", translation: "открытие, начало" },
    ],
    lessonIds: [3],
  },

{
    id: 95,
    word: "tutup",
    pronunciation: "/tutup/",
    translation: "закрывать",
    category: "verb",
    frequency: 95,
    examples: [
      { sentence: "Tutup pintu", translation: "Закрой дверь" },
      { sentence: "Toko tutup jam 9", translation: "Магазин закрывается в 9" },
    ],
    wordFamily: [
      { word: "menutup", translation: "закрывать" },
      { word: "ditutup", translation: "быть закрытым" },
      { word: "tertutup", translation: "закрытый, закрыт" },
      { word: "tutupan", translation: "крышка, покрытие" },
      { word: "penutup", translation: "закрывающий, завершение" },
      { word: "penutupan", translation: "закрытие" },
    ],
    lessonIds: [3],
  },

{
    id: 96,
    word: "minta",
    pronunciation: "/minta/",
    translation: "просить, попросить",
    category: "verb",
    frequency: 96,
    examples: [
      { sentence: "Saya minta tolong", translation: "Я прошу помощи" },
      { sentence: "Minta maaf", translation: "Просить прощения" },
    ],
    lessonIds: [3, 16],
  },

{
    id: 97,
    word: "simpan",
    pronunciation: "/simpan/",
    translation: "хранить, сохранять",
    category: "verb",
    frequency: 97,
    examples: [
      { sentence: "Simpan buku ini", translation: "Сохрани эту книгу" },
      { sentence: "Simpan uang", translation: "Хранить деньги" },
    ],
    lessonIds: [3],
  },

{
    id: 98,
    word: "habis",
    pronunciation: "/habis/",
    translation: "кончаться, заканчиваться",
    category: "verb",
    frequency: 98,
    examples: [
      { sentence: "Makanan habis", translation: "Еда закончилась" },
      { sentence: "Uang sudah habis", translation: "Деньги уже кончились" },
    ],
    wordFamily: [
      { word: "menghabiskan", translation: "тратить, расходовать" },
      { word: "dihabiskan", translation: "быть потраченным" },
      { word: "kehabisan", translation: "исчерпать, кончиться" },
      { word: "penghabisan", translation: "последний, окончательный" },
      { word: "habisan", translation: "до конца, совсем" },
    ],
    lessonIds: [3, 9],
  },

{
    id: 99,
    word: "selesai",
    pronunciation: "/selesai/",
    translation: "заканчивать, завершать",
    category: "verb",
    frequency: 99,
    examples: [
      { sentence: "Saya sudah selesai", translation: "Я уже закончил" },
      { sentence: "Selesai kerja", translation: "Закончить работу" },
    ],
    wordFamily: [
      { word: "menyelesaikan", translation: "заканчивать, решать" },
      { word: "diselesaikan", translation: "быть решённым/завершённым" },
      { word: "terselesaikan", translation: "решённый, улаженный" },
      { word: "penyelesaian", translation: "завершение, решение" },
    ],
    lessonIds: [3, 9],
  },

{
    id: 100,
    word: "mulai",
    pronunciation: "/mulai/",
    translation: "начинать, начать",
    category: "verb",
    frequency: 100,
    examples: [
      { sentence: "Mulai belajar", translation: "Начать учиться" },
      { sentence: "Mulai dari sekarang", translation: "Начать с сейчас" },
    ],
    wordFamily: [
      { word: "memulai", translation: "начинать, начать" },
      { word: "dimulai", translation: "начинаться, быть начатым" },
      { word: "permulaan", translation: "начало, исток" },
      { word: "mulai-mulai", translation: "только начинать" },
    ],
    lessonIds: [3],
  },

{
    id: 101,
    word: "kapan",
    pronunciation: "/kapan/",
    translation: "когда",
    category: "adverb",
    frequency: 101,
    examples: [
      { sentence: "Kapan kamu datang?", translation: "Когда ты придёшь?" },
      { sentence: "Kapan kita pergi?", translation: "Когда мы идём?" },
    ],
    lessonIds: [4],
  },

{
    id: 102,
    word: "di mana",
    pronunciation: "/di mana/",
    translation: "где",
    category: "adverb",
    frequency: 102,
    examples: [
      { sentence: "Di mana rumah kamu?", translation: "Где твой дом?" },
      { sentence: "Di mana kamu?", translation: "Где ты?" },
    ],
    lessonIds: [4, 14],
  },

{
    id: 103,
    word: "ke mana",
    pronunciation: "/kə mana/",
    translation: "куда",
    category: "adverb",
    frequency: 103,
    examples: [
      { sentence: "Mau ke mana?", translation: "Куда идёшь?" },
      { sentence: "Ke mana dia pergi?", translation: "Куда он пошёл?" },
    ],
    lessonIds: [4, 14],
  },

{
    id: 104,
    word: "dari mana",
    pronunciation: "/dari mana/",
    translation: "откуда",
    category: "adverb",
    frequency: 104,
    examples: [
      { sentence: "Dari mana kamu?", translation: "Откуда ты?" },
      { sentence: "Dari mana asalnya?", translation: "Откуда родом?" },
    ],
    lessonIds: [4],
  },

{
    id: 105,
    word: "berapa",
    pronunciation: "/bərapa/",
    translation: "сколько",
    category: "adverb",
    frequency: 105,
    examples: [
      { sentence: "Berapa harganya?", translation: "Сколько стоит?" },
      { sentence: "Berapa umurmu?", translation: "Сколько тебе лет?" },
    ],
    lessonIds: [4, 7, 8],
  },

{
    id: 106,
    word: "yang mana",
    pronunciation: "/jaŋ mana/",
    translation: "который, какой (из)",
    category: "adverb",
    frequency: 106,
    examples: [
      { sentence: "Yang mana rumahmu?", translation: "Который твой дом?" },
      { sentence: "Yang mana?", translation: "Который?" },
    ],
    lessonIds: [4],
  },

{
    id: 107,
    word: "mengapa",
    pronunciation: "/məŋapa/",
    translation: "почему (формально)",
    category: "adverb",
    frequency: 107,
    examples: [
      { sentence: "Mengapa kamu pergi?", translation: "Почему ты уходишь?" },
      { sentence: "Saya tidak tahu mengapa", translation: "Я не знаю почему" },
    ],
    lessonIds: [4],
  },

{
    id: 108,
    word: "bagaimana cara",
    pronunciation: "/baɡaimana tʃara/",
    translation: "как (способ)",
    category: "adverb",
    frequency: 108,
    examples: [
      {
        sentence: "Bagaimana cara ke sana?",
        translation: "Как туда добраться?",
      },
      {
        sentence: "Bagaimana cara membuatnya?",
        translation: "Как это сделать?",
      },
    ],
    lessonIds: [4],
  },

{
    id: 109,
    word: "seberapa",
    pronunciation: "/seberapa/",
    translation: "насколько",
    category: "adverb",
    frequency: 109,
    examples: [
      { sentence: "Seberapa jauh?", translation: "Насколько далеко?" },
      { sentence: "Seberapa besar?", translation: "Насколько большой?" },
    ],
    lessonIds: [4],
  },

{
    id: 110,
    word: "apakah",
    pronunciation: "/apakah/",
    translation: "ли (вопрос. частица)",
    category: "adverb",
    frequency: 110,
    examples: [
      { sentence: "Apakah kamu mengerti?", translation: "Понимаешь ли ты?" },
      { sentence: "Apakah ini benar?", translation: "Это правда?" },
    ],
    lessonIds: [4],
  },

{
    id: 111,
    word: "siapa-siapa",
    pronunciation: "/siapa-siapa/",
    translation: "кто (множественное)",
    category: "adverb",
    frequency: 111,
    examples: [
      {
        sentence: "Siapa-siapa yang datang?",
        translation: "Кто (все) пришёл?",
      },
      { sentence: "Siapa saja?", translation: "Кто именно?" },
    ],
    lessonIds: [4],
  },

{
    id: 112,
    word: "kapan-kapan",
    pronunciation: "/kapan-kapan/",
    translation: "когда-нибудь, sometime",
    category: "adverb",
    frequency: 112,
    examples: [
      {
        sentence: "Kapan-kapan kita bertemu",
        translation: "Когда-нибудь мы встретимся",
      },
      { sentence: "Datanglah kapan-kapan", translation: "Приходи как-нибудь" },
    ],
    lessonIds: [4, 11],
  },

{
    id: 113,
    word: "begitu",
    pronunciation: "/bəɡitu/",
    translation: "так, таким образом",
    category: "adverb",
    frequency: 113,
    examples: [
      { sentence: "Begitu besar", translation: "Такой большой" },
      { sentence: "Begitu saja", translation: "Просто так" },
    ],
    lessonIds: [4, 15],
  },

{
    id: 114,
    word: "macam",
    pronunciation: "/matʃam/",
    translation: "вид, тип, разновидность",
    category: "noun",
    frequency: 114,
    examples: [
      { sentence: "Macam apa ini?", translation: "Что это за вид?" },
      { sentence: "Macam-macam", translation: "Разные виды" },
    ],
    lessonIds: [4],
  },

{
    id: 115,
    word: "jenis",
    pronunciation: "/dʒənis/",
    translation: "тип, род, сорт",
    category: "noun",
    frequency: 115,
    examples: [
      { sentence: "Jenis apa?", translation: "Какого типа?" },
      { sentence: "Jenis makanan", translation: "Тип еды" },
    ],
    lessonIds: [4],
  },

{
    id: 116,
    word: "entah",
    pronunciation: "/əntah/",
    translation: "неизвестно, не знаю",
    category: "adverb",
    frequency: 116,
    examples: [
      { sentence: "Entah siapa", translation: "Неизвестно кто" },
      { sentence: "Entah kenapa", translation: "Неизвестно почему" },
    ],
    lessonIds: [4],
  },

{
    id: 117,
    word: "ataukah",
    pronunciation: "/ataukah/",
    translation: "или же",
    category: "conjunction",
    frequency: 117,
    examples: [
      { sentence: "Ini ataukah itu?", translation: "Это или же то?" },
      {
        sentence: "Benar ataukah salah?",
        translation: "Правильно или же нет?",
      },
    ],
    lessonIds: [4, 15],
  },

{
    id: 118,
    word: "manakah",
    pronunciation: "/manakah/",
    translation: "который же (усиление)",
    category: "adverb",
    frequency: 118,
    examples: [
      { sentence: "Manakah yang benar?", translation: "Которое же верно?" },
      { sentence: "Manakah pilihanmu?", translation: "Которое твой выбор?" },
    ],
    lessonIds: [4],
  },

{
    id: 119,
    word: "bilakah",
    pronunciation: "/bilakah/",
    translation: "когда же (формально)",
    category: "adverb",
    frequency: 119,
    examples: [
      { sentence: "Bilakah dia datang?", translation: "Когда же он придёт?" },
      { sentence: "Bilakah kita mulai?", translation: "Когда же мы начнём?" },
    ],
    lessonIds: [4],
  },

{
    id: 120,
    word: "bagaimanakah",
    pronunciation: "/baɡaimanakah/",
    translation: "как же (формально)",
    category: "adverb",
    frequency: 120,
    examples: [
      { sentence: "Bagaimanakah caranya?", translation: "Каким же образом?" },
      { sentence: "Bagaimanakah keadaanmu?", translation: "Как же твои дела?" },
    ],
    lessonIds: [4],
  },

{
    id: 121,
    word: "bukan",
    pronunciation: "/bukan/",
    translation: "не (с существительными)",
    category: "adverb",
    frequency: 121,
    examples: [
      { sentence: "Ini bukan buku saya", translation: "Это не моя книга" },
      { sentence: "Dia bukan guru", translation: "Он не учитель" },
    ],
    lessonIds: [5],
  },

{
    id: 122,
    word: "belum",
    pronunciation: "/bəlum/",
    translation: "ещё не",
    category: "adverb",
    frequency: 122,
    examples: [
      { sentence: "Saya belum siap", translation: "Я ещё не готов" },
      { sentence: "Belum makan", translation: "Ещё не ел" },
    ],
    lessonIds: [5],
  },

{
    id: 123,
    word: "jangan",
    pronunciation: "/dʒaŋan/",
    translation: "не (запрет)",
    category: "adverb",
    frequency: 123,
    examples: [
      { sentence: "Jangan pergi!", translation: "Не уходи!" },
      { sentence: "Jangan lupa!", translation: "Не забудь!" },
    ],
    lessonIds: [5],
  },

{
    id: 124,
    word: "jadi",
    pronunciation: "/dʒadi/",
    translation: "поэтому, так что",
    category: "conjunction",
    frequency: 124,
    examples: [
      {
        sentence: "Saya sakit jadi tidak datang",
        translation: "Я заболел, поэтому не пришёл",
      },
      { sentence: "Jadi, kita pergi", translation: "Итак, мы идём" },
    ],
    lessonIds: [5, 15],
  },

{
    id: 125,
    word: "mungkin",
    pronunciation: "/muŋkin/",
    translation: "может быть, возможно",
    category: "adverb",
    frequency: 125,
    examples: [
      { sentence: "Mungkin dia datang", translation: "Может быть, он придёт" },
      { sentence: "Tidak mungkin", translation: "Невозможно" },
    ],
    lessonIds: [11],
  },

{
    id: 126,
    word: "selalu",
    pronunciation: "/səlalu/",
    translation: "всегда",
    category: "adverb",
    frequency: 126,
    examples: [
      {
        sentence: "Dia selalu datang tepat waktu",
        translation: "Он всегда приходит вовремя",
      },
      { sentence: "Selalu belajar", translation: "Всегда учиться" },
    ],
    lessonIds: [9],
  },

{
    id: 127,
    word: "pernah",
    pronunciation: "/pernah/",
    translation: "когда-либо, никогда",
    category: "adverb",
    frequency: 127,
    examples: [
      { sentence: "Saya pernah ke Bali", translation: "Я был на Бали" },
      { sentence: "Belum pernah", translation: "Ещё никогда" },
    ],
    lessonIds: [5, 9],
  },

{
    id: 128,
    word: "tetap",
    pronunciation: "/tetap/",
    translation: "оставаться, всё ещё",
    category: "adverb",
    frequency: 128,
    examples: [
      { sentence: "Dia tetap diam", translation: "Он остаётся молчаливым" },
      { sentence: "Tetap semangat!", translation: "Держись!" },
    ],
    lessonIds: [5],
  },

{
    id: 129,
    word: "tak",
    pronunciation: "/taʔ/",
    translation: "не (краткая форма)",
    category: "adverb",
    frequency: 129,
    examples: [
      { sentence: "Tak tahu", translation: "Не знаю" },
      { sentence: "Tak apa", translation: "Ничего, нормально" },
    ],
    lessonIds: [5],
  },

{
    id: 130,
    word: "tanpa",
    pronunciation: "/tanpa/",
    translation: "без",
    category: "preposition",
    frequency: 130,
    examples: [
      { sentence: "Tanpa kamu", translation: "Без тебя" },
      { sentence: "Tanpa masalah", translation: "Без проблем" },
    ],
    lessonIds: [5, 14],
  },

{
    id: 131,
    word: "melainkan",
    pronunciation: "/məlainkan/",
    translation: "а (напротив)",
    category: "conjunction",
    frequency: 131,
    examples: [
      { sentence: "Bukan saya, melainkan dia", translation: "Не я, а он" },
      { sentence: "Bukan ini, melainkan itu", translation: "Не это, а то" },
    ],
    lessonIds: [5, 15],
  },

{
    id: 132,
    word: "bukan saja",
    pronunciation: "/bukan sadʒa/",
    translation: "не только",
    category: "adverb",
    frequency: 132,
    examples: [
      {
        sentence: "Bukan saja pintar tapi juga baik",
        translation: "Не только умный, но и добрый",
      },
      { sentence: "Bukan saja saya", translation: "Не только я" },
    ],
    lessonIds: [5, 15],
  },

{
    id: 133,
    word: "kecuali",
    pronunciation: "/kətʃuali/",
    translation: "кроме, исключая",
    category: "preposition",
    frequency: 133,
    examples: [
      { sentence: "Semua kecuali saya", translation: "Все кроме меня" },
      { sentence: "Kecuali hari Minggu", translation: "Кроме воскресенья" },
    ],
    lessonIds: [5, 14],
  },

{
    id: 134,
    word: "sama",
    pronunciation: "/sama/",
    translation: "с, вместе; одинаковый",
    category: "preposition",
    frequency: 134,
    examples: [
      { sentence: "Sama saya", translation: "Со мной" },
      { sentence: "Sama besar", translation: "Одинаковый по размеру" },
    ],
    wordFamily: [
      { word: "sama-sama", translation: "пожалуйста (в ответ); вместе" },
      { word: "bersama", translation: "вместе, совместно" },
      { word: "menyamai", translation: "равняться, достигать" },
      { word: "menyamakan", translation: "уравнивать, сравнивать" },
      { word: "persamaan", translation: "равенство, уравнение" },
      { word: "sesama", translation: "такой же, подобный" },
    ],
    lessonIds: [5, 14],
  },

{
    id: 135,
    word: "tidak ada",
    pronunciation: "/tidaʔ ada/",
    translation: "нет, не имеется",
    category: "adverb",
    frequency: 135,
    examples: [
      { sentence: "Tidak ada masalah", translation: "Нет проблем" },
      { sentence: "Tidak ada seorang pun", translation: "Никого нет" },
    ],
    lessonIds: [5],
  },

{
    id: 136,
    word: "bisa jadi",
    pronunciation: "/bisa dʒadi/",
    translation: "может быть, возможно",
    category: "adverb",
    frequency: 136,
    examples: [
      { sentence: "Bisa jadi dia lupa", translation: "Может быть, он забыл" },
      { sentence: "Bisa jadi benar", translation: "Может быть правда" },
    ],
    lessonIds: [5, 11],
  },

{
    id: 137,
    word: "acap kali",
    pronunciation: "/atʃap kali/",
    translation: "часто, нередко",
    category: "adverb",
    frequency: 137,
    examples: [
      {
        sentence: "Dia acap kali terlambat",
        translation: "Он часто опаздывает",
      },
      { sentence: "Acap kali hujan", translation: "Часто идёт дождь" },
    ],
    lessonIds: [9],
  },

{
    id: 138,
    word: "jarang",
    pronunciation: "/dʒaraŋ/",
    translation: "редко",
    category: "adverb",
    frequency: 138,
    examples: [
      {
        sentence: "Saya jarang makan di luar",
        translation: "Я редко ем вне дома",
      },
      { sentence: "Jarang sekali", translation: "Очень редко" },
    ],
    lessonIds: [9],
  },

{
    id: 139,
    word: "hampir",
    pronunciation: "/hampir/",
    translation: "почти",
    category: "adverb",
    frequency: 139,
    examples: [
      { sentence: "Hampir selesai", translation: "Почти готово" },
      { sentence: "Hampir lupa", translation: "Почти забыл" },
    ],
    lessonIds: [5],
  },

{
    id: 140,
    word: "sekali",
    pronunciation: "/səkali/",
    translation: "один раз; очень (усиление)",
    category: "adverb",
    frequency: 140,
    examples: [
      { sentence: "Sekali lagi", translation: "Ещё раз" },
      { sentence: "Baik sekali", translation: "Очень хорошо" },
    ],
    lessonIds: [7, 13],
  },

{
    id: 141,
    word: "punya",
    pronunciation: "/puɲa/",
    translation: "иметь, принадлежать",
    category: "verb",
    frequency: 141,
    examples: [
      { sentence: "Saya punya buku", translation: "У меня есть книга" },
      { sentence: "Ini punya saya", translation: "Это моё" },
    ],
    lessonIds: [6, 7],
  },

{
    id: 142,
    word: "baru",
    pronunciation: "/baru/",
    translation: "новый",
    category: "adjective",
    frequency: 142,
    examples: [
      { sentence: "Mobil baru", translation: "Новая машина" },
      { sentence: "Rumah baru", translation: "Новый дом" },
    ],
    lessonIds: [6, 13],
  },

{
    id: 143,
    word: "milik",
    pronunciation: "/miliʔ/",
    translation: "собственность, принадлежность",
    category: "noun",
    frequency: 143,
    examples: [
      { sentence: "Ini milik saya", translation: "Это моя собственность" },
      { sentence: "Milik siapa ini?", translation: "Чьё это?" },
    ],
    lessonIds: [6],
  },

{
    id: 144,
    word: "sendiri",
    pronunciation: "/səndiri/",
    translation: "сам, самостоятельно",
    category: "adverb",
    frequency: 144,
    examples: [
      { sentence: "Saya sendiri", translation: "Я сам" },
      { sentence: "Kerja sendiri", translation: "Работать самостоятельно" },
    ],
    lessonIds: [3, 6],
  },

{
    id: 145,
    word: "bersama",
    pronunciation: "/bərsama/",
    translation: "вместе, совместно",
    category: "adverb",
    frequency: 145,
    examples: [
      { sentence: "Kita bersama", translation: "Мы вместе" },
      { sentence: "Belajar bersama", translation: "Учиться вместе" },
    ],
    wordFamily: [
      { word: "sama-sama", translation: "пожалуйста (в ответ); вместе" },
      { word: "bersama", translation: "вместе, совместно" },
      { word: "menyamai", translation: "равняться, достигать" },
      { word: "menyamakan", translation: "уравнивать, сравнивать" },
      { word: "persamaan", translation: "равенство, уравнение" },
      { word: "sesama", translation: "такой же, подобный" },
    ],
    lessonIds: [6],
  },

{
    id: 146,
    word: "masing-masing",
    pronunciation: "/masiŋ-masiŋ/",
    translation: "каждый (по отдельности)",
    category: "adverb",
    frequency: 146,
    examples: [
      {
        sentence: "Masing-masing punya buku",
        translation: "У каждого есть книга",
      },
      { sentence: "Rumah masing-masing", translation: "Свой собственный дом" },
    ],
    lessonIds: [6],
  },

{
    id: 147,
    word: "seperti",
    pronunciation: "/seperti/",
    translation: "как, подобно, например",
    category: "preposition",
    frequency: 147,
    examples: [
      { sentence: "Seperti saya", translation: "Как я" },
      { sentence: "Seperti ini", translation: "Как это, вот так" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 148,
    word: "antara",
    pronunciation: "/antara/",
    translation: "между, среди",
    category: "preposition",
    frequency: 148,
    examples: [
      { sentence: "Antara saya dan dia", translation: "Между мной и ним" },
      { sentence: "Di antara mereka", translation: "Среди них" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 149,
    word: "tentang",
    pronunciation: "/tentaŋ/",
    translation: "о, об, относительно",
    category: "preposition",
    frequency: 149,
    examples: [
      { sentence: "Cerita tentang dia", translation: "Рассказ о нём" },
      { sentence: "Tentang apa?", translation: "О чём?" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 150,
    word: "terhadap",
    pronunciation: "/tərhadap/",
    translation: "к, по отношению к",
    category: "preposition",
    frequency: 150,
    examples: [
      { sentence: "Baik terhadap orang", translation: "Добрый к людям" },
      { sentence: "Sikap terhadap", translation: "Отношение к" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 151,
    word: "bagi",
    pronunciation: "/baɡi/",
    translation: "для, ради",
    category: "preposition",
    frequency: 151,
    examples: [
      { sentence: "Bagi saya", translation: "Для меня" },
      { sentence: "Bagi kamu", translation: "Для тебя" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 152,
    word: "untuk",
    pronunciation: "/untuʔ/",
    translation: "для, чтобы",
    category: "preposition",
    frequency: 152,
    examples: [
      { sentence: "Untuk saya", translation: "Для меня" },
      { sentence: "Untuk apa?", translation: "Для чего?" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 153,
    word: "oleh",
    pronunciation: "/oləh/",
    translation: "от, (кем-то)",
    category: "preposition",
    frequency: 153,
    examples: [
      { sentence: "Dibuat oleh saya", translation: "Сделано мной" },
      { sentence: "Oleh karena itu", translation: "Поэтому" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 154,
    word: "dengan",
    pronunciation: "/deŋan/",
    translation: "с, вместе с",
    category: "preposition",
    frequency: 154,
    examples: [
      { sentence: "Dengan saya", translation: "Со мной" },
      { sentence: "Dengan senang hati", translation: "С удовольствием" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 155,
    word: "secara",
    pronunciation: "/setʃara/",
    translation: "способом, образом",
    category: "adverb",
    frequency: 155,
    examples: [
      { sentence: "Secara perlahan", translation: "Медленно" },
      { sentence: "Secara langsung", translation: "Непосредственно" },
    ],
    lessonIds: [6],
  },

{
    id: 156,
    word: "melalui",
    pronunciation: "/melalui/",
    translation: "через, посредством",
    category: "preposition",
    frequency: 156,
    examples: [
      { sentence: "Melalui telepon", translation: "По телефону" },
      { sentence: "Melalui internet", translation: "Через интернет" },
    ],
    lessonIds: [6, 14],
  },

{
    id: 157,
    word: "tiap",
    pronunciation: "/tiap/",
    translation: "каждый (о времени)",
    category: "adverb",
    frequency: 157,
    examples: [
      { sentence: "Tiap hari", translation: "Каждый день" },
      { sentence: "Tiap minggu", translation: "Каждую неделю" },
    ],
    lessonIds: [6, 8],
  },

{
    id: 158,
    word: "setiap",
    pronunciation: "/setiap/",
    translation: "каждый, любой",
    category: "adverb",
    frequency: 158,
    examples: [
      { sentence: "Setiap orang", translation: "Каждый человек" },
      { sentence: "Setiap hari", translation: "Каждый день" },
    ],
    lessonIds: [6, 8],
  },

{
    id: 159,
    word: "semua",
    pronunciation: "/semua/",
    translation: "все, всё",
    category: "adverb",
    frequency: 159,
    examples: [
      { sentence: "Semua orang", translation: "Все люди" },
      { sentence: "Semua sudah siap", translation: "Всё готово" },
    ],
    lessonIds: [6],
  },

{
    id: 160,
    word: "seluruh",
    pronunciation: "/seluruh/",
    translation: "весь, целый",
    category: "adverb",
    frequency: 160,
    examples: [
      { sentence: "Seluruh Indonesia", translation: "Вся Индонезия" },
      { sentence: "Seluruh dunia", translation: "Весь мир" },
    ],
    lessonIds: [6],
  },

{
    id: 161,
    word: "satu",
    pronunciation: "/satu/",
    translation: "один",
    category: "number",
    frequency: 161,
    examples: [
      { sentence: "Satu orang", translation: "Один человек" },
      { sentence: "Satu buku", translation: "Одна книга" },
    ],
    lessonIds: [7],
  },

{
    id: 162,
    word: "dua",
    pronunciation: "/dua/",
    translation: "два",
    category: "number",
    frequency: 162,
    examples: [
      { sentence: "Dua orang", translation: "Два человека" },
      { sentence: "Dua buku", translation: "Две книги" },
    ],
    lessonIds: [7],
  },

{
    id: 163,
    word: "tiga",
    pronunciation: "/tiɡa/",
    translation: "три",
    category: "number",
    frequency: 163,
    examples: [
      { sentence: "Tiga orang", translation: "Три человека" },
      { sentence: "Jam tiga", translation: "Три часа" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 164,
    word: "empat",
    pronunciation: "/empat/",
    translation: "четыре",
    category: "number",
    frequency: 164,
    examples: [
      { sentence: "Empat buku", translation: "Четыре книги" },
      { sentence: "Empat orang", translation: "Четыре человека" },
    ],
    lessonIds: [7],
  },

{
    id: 165,
    word: "lima",
    pronunciation: "/lima/",
    translation: "пять",
    category: "number",
    frequency: 165,
    examples: [
      { sentence: "Lima hari", translation: "Пять дней" },
      { sentence: "Jam lima", translation: "Пять часов" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 166,
    word: "enam",
    pronunciation: "/enam/",
    translation: "шесть",
    category: "number",
    frequency: 166,
    examples: [
      { sentence: "Enam orang", translation: "Шесть человек" },
      { sentence: "Jam enam", translation: "Шесть часов" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 167,
    word: "tujuh",
    pronunciation: "/tudʒuh/",
    translation: "семь",
    category: "number",
    frequency: 167,
    examples: [
      { sentence: "Tujuh hari", translation: "Семь дней" },
      { sentence: "Jam tujuh", translation: "Семь часов" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 168,
    word: "delapan",
    pronunciation: "/dəlapan/",
    translation: "восемь",
    category: "number",
    frequency: 168,
    examples: [
      { sentence: "Delapan buku", translation: "Восемь книг" },
      { sentence: "Jam delapan", translation: "Восемь часов" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 169,
    word: "sembilan",
    pronunciation: "/səmbilan/",
    translation: "девять",
    category: "number",
    frequency: 169,
    examples: [
      { sentence: "Sembilan orang", translation: "Девять человек" },
      { sentence: "Jam sembilan", translation: "Девять часов" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 170,
    word: "sepuluh",
    pronunciation: "/səpuluh/",
    translation: "десять",
    category: "number",
    frequency: 170,
    examples: [
      { sentence: "Sepuluh buku", translation: "Десять книг" },
      { sentence: "Jam sepuluh", translation: "Десять часов" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 171,
    word: "sebelas",
    pronunciation: "/sebelas/",
    translation: "одиннадцать",
    category: "number",
    frequency: 171,
    examples: [
      { sentence: "Sebelas orang", translation: "Одиннадцать человек" },
      { sentence: "Nomor sebelas", translation: "Номер одиннадцать" },
    ],
    lessonIds: [7],
  },

{
    id: 172,
    word: "dua belas",
    pronunciation: "/dua bəlas/",
    translation: "двенадцать",
    category: "number",
    frequency: 172,
    examples: [
      { sentence: "Dua belas bulan", translation: "Двенадцать месяцев" },
      { sentence: "Jam dua belas", translation: "Двенадцать часов" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 173,
    word: "seratus",
    pronunciation: "/seratus/",
    translation: "сто",
    category: "number",
    frequency: 173,
    examples: [
      { sentence: "Seratus rupiah", translation: "Сто рупий" },
      { sentence: "Seratus orang", translation: "Сто человек" },
    ],
    lessonIds: [7],
  },

{
    id: 174,
    word: "dua ratus",
    pronunciation: "/dua ratus/",
    translation: "двести",
    category: "number",
    frequency: 174,
    examples: [
      { sentence: "Dua ratus buku", translation: "Двести книг" },
      { sentence: "Dua ratus rupiah", translation: "Двести рупий" },
    ],
    lessonIds: [7],
  },

{
    id: 175,
    word: "seribu",
    pronunciation: "/seribu/",
    translation: "тысяча",
    category: "number",
    frequency: 175,
    examples: [
      { sentence: "Seribu rupiah", translation: "Тысяча рупий" },
      { sentence: "Seribu orang", translation: "Тысяча человек" },
    ],
    lessonIds: [7],
  },

{
    id: 176,
    word: "sejuta",
    pronunciation: "/sedʒuta/",
    translation: "миллион",
    category: "number",
    frequency: 176,
    examples: [
      { sentence: "Sejuta rupiah", translation: "Миллион рупий" },
      {
        sentence: "Sejuta terima kasih",
        translation: "Миллион благодарностей",
      },
    ],
    lessonIds: [7],
  },

{
    id: 177,
    word: "nomor",
    pronunciation: "/nomor/",
    translation: "номер",
    category: "noun",
    frequency: 177,
    examples: [
      { sentence: "Nomor telepon", translation: "Номер телефона" },
      { sentence: "Nomor berapa?", translation: "Какой номер?" },
    ],
    lessonIds: [7],
  },

{
    id: 178,
    word: "angka",
    pronunciation: "/aŋka/",
    translation: "цифра, число",
    category: "noun",
    frequency: 178,
    examples: [
      { sentence: "Angka satu", translation: "Цифра один" },
      { sentence: "Angka berapa?", translation: "Какое число?" },
    ],
    lessonIds: [7],
  },

{
    id: 179,
    word: "hitung",
    pronunciation: "/hituŋ/",
    translation: "считать, подсчитывать",
    category: "verb",
    frequency: 179,
    examples: [
      { sentence: "Hitung dari satu", translation: "Считай с одного" },
      { sentence: "Saya hitung", translation: "Я считаю" },
    ],
    lessonIds: [7],
  },

{
    id: 180,
    word: "setengah",
    pronunciation: "/seteŋah/",
    translation: "половина",
    category: "number",
    frequency: 180,
    examples: [
      { sentence: "Setengah jam", translation: "Полчаса" },
      { sentence: "Setengah kilo", translation: "Полкило" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 181,
    word: "lebih",
    pronunciation: "/ləbih/",
    translation: "более, больше",
    category: "adverb",
    frequency: 181,
    examples: [
      { sentence: "Lebih dari sepuluh", translation: "Больше десяти" },
      { sentence: "Lebih baik", translation: "Лучше" },
    ],
    lessonIds: [7, 13],
  },

{
    id: 182,
    word: "kurang",
    pronunciation: "/kuraŋ/",
    translation: "менее, меньше, не хватает",
    category: "adverb",
    frequency: 182,
    examples: [
      { sentence: "Kurang dari lima", translation: "Меньше пяти" },
      { sentence: "Kurang satu", translation: "Не хватает одного" },
    ],
    lessonIds: [7, 13],
  },

{
    id: 183,
    word: "kali",
    pronunciation: "/kali/",
    translation: "раз, умножить на",
    category: "adverb",
    frequency: 183,
    examples: [
      { sentence: "Satu kali", translation: "Один раз" },
      { sentence: "Dua kali sehari", translation: "Два раза в день" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 184,
    word: "lipat",
    pronunciation: "/lipat/",
    translation: "складывать; раз (кратность)",
    category: "verb",
    frequency: 184,
    examples: [
      { sentence: "Dua lipat", translation: "Вдвое" },
      { sentence: "Lipat ganda", translation: "Вдвойне" },
    ],
    lessonIds: [7],
  },

{
    id: 185,
    word: "ganda",
    pronunciation: "/ɡanda/",
    translation: "двойной, вдвойне",
    category: "adverb",
    frequency: 185,
    examples: [
      { sentence: "Lipat ganda", translation: "Вдвойне" },
      { sentence: "Harga ganda", translation: "Двойная цена" },
    ],
    lessonIds: [7],
  },

{
    id: 186,
    word: "separuh",
    pronunciation: "/separuh/",
    translation: "половина (часть)",
    category: "number",
    frequency: 186,
    examples: [
      { sentence: "Separuh buku", translation: "Половина книги" },
      { sentence: "Separuh jalan", translation: "Половина дороги" },
    ],
    lessonIds: [7],
  },

{
    id: 187,
    word: "sepertiga",
    pronunciation: "/sepertiɡa/",
    translation: "одна треть",
    category: "number",
    frequency: 187,
    examples: [
      { sentence: "Sepertiga dari harga", translation: "Треть цены" },
      { sentence: "Sepertiga jam", translation: "Треть часа" },
    ],
    lessonIds: [7],
  },

{
    id: 188,
    word: "seperempat",
    pronunciation: "/seperempat/",
    translation: "одна четверть",
    category: "number",
    frequency: 188,
    examples: [
      { sentence: "Seperempat jam", translation: "Четверть часа" },
      { sentence: "Seperempat kilo", translation: "Четверть кило" },
    ],
    lessonIds: [7, 8],
  },

{
    id: 189,
    word: "kilo",
    pronunciation: "/kilo/",
    translation: "килограмм",
    category: "noun",
    frequency: 189,
    examples: [
      { sentence: "Satu kilo beras", translation: "Один килограмм риса" },
      { sentence: "Berapa kilo?", translation: "Сколько килограмм?" },
    ],
    lessonIds: [7],
  },

{
    id: 190,
    word: "meter",
    pronunciation: "/meter/",
    translation: "метр",
    category: "noun",
    frequency: 190,
    examples: [
      { sentence: "Sepuluh meter", translation: "Десять метров" },
      { sentence: "Meteran", translation: "Измерительная лента" },
    ],
    lessonIds: [7],
  },

{
    id: 191,
    word: "liter",
    pronunciation: "/litər/",
    translation: "литр",
    category: "noun",
    frequency: 191,
    examples: [
      { sentence: "Dua liter air", translation: "Два литра воды" },
      { sentence: "Satu liter susu", translation: "Один литр молока" },
    ],
    lessonIds: [7],
  },

{
    id: 192,
    word: "jumlah",
    pronunciation: "/dʒumlah/",
    translation: "количество, сумма",
    category: "noun",
    frequency: 192,
    examples: [
      { sentence: "Jumlah orang", translation: "Количество людей" },
      { sentence: "Jumlahnya berapa?", translation: "Сколько всего?" },
    ],
    lessonIds: [7],
  },

{
    id: 193,
    word: "total",
    pronunciation: "/total/",
    translation: "итог, всего",
    category: "noun",
    frequency: 193,
    examples: [
      { sentence: "Total harga", translation: "Общая цена" },
      { sentence: "Total sepuluh", translation: "Всего десять" },
    ],
    lessonIds: [7],
  },

{
    id: 194,
    word: "pertama",
    pronunciation: "/pərtama/",
    translation: "первый",
    category: "number",
    frequency: 194,
    examples: [
      { sentence: "Pertama kali", translation: "В первый раз" },
      { sentence: "Anak pertama", translation: "Первый ребёнок" },
    ],
    lessonIds: [7],
  },

{
    id: 195,
    word: "kedua",
    pronunciation: "/kədua/",
    translation: "второй",
    category: "number",
    frequency: 195,
    examples: [
      { sentence: "Kedua kalinya", translation: "Во второй раз" },
      { sentence: "Anak kedua", translation: "Второй ребёнок" },
    ],
    lessonIds: [7],
  },

{
    id: 196,
    word: "ketiga",
    pronunciation: "/kətiɡa/",
    translation: "третий",
    category: "number",
    frequency: 196,
    examples: [
      { sentence: "Ketiga kalinya", translation: "В третий раз" },
      { sentence: "Bagian ketiga", translation: "Третья часть" },
    ],
    lessonIds: [7],
  },

{
    id: 197,
    word: "terakhir",
    pronunciation: "/təraxir/",
    translation: "последний",
    category: "adjective",
    frequency: 197,
    examples: [
      { sentence: "Yang terakhir", translation: "Последний" },
      { sentence: "Kali terakhir", translation: "В последний раз" },
    ],
    lessonIds: [7, 13],
  },

{
    id: 198,
    word: "beberapa",
    pronunciation: "/bəbərapa/",
    translation: "несколько",
    category: "adverb",
    frequency: 198,
    examples: [
      { sentence: "Beberapa orang", translation: "Несколько человек" },
      { sentence: "Beberapa hari", translation: "Несколько дней" },
    ],
    lessonIds: [7],
  },

{
    id: 199,
    word: "banyak",
    pronunciation: "/baɲaʔ/",
    translation: "много",
    category: "adverb",
    frequency: 199,
    examples: [
      { sentence: "Banyak orang", translation: "Много людей" },
      { sentence: "Berapa banyak?", translation: "Сколько?" },
    ],
    lessonIds: [7, 13],
  },

{
    id: 200,
    word: "sedikit",
    pronunciation: "/sedikit/",
    translation: "мало, немного",
    category: "adverb",
    frequency: 200,
    examples: [
      { sentence: "Sedikit saja", translation: "Только немного" },
      { sentence: "Sedikit demi sedikit", translation: "Мало-помалу" },
    ],
    lessonIds: [7, 13],
  },

{
    id: 201,
    word: "nasi",
    pronunciation: "/nasi/",
    translation: "рис (варёный)",
    category: "noun",
    frequency: 201,
    examples: [
      { sentence: "Saya makan nasi", translation: "Я ем рис" },
      { sentence: "Nasi goreng", translation: "Жареный рис" },
    ],
    lessonIds: [3],
  },

{
    id: 202,
    word: "air",
    pronunciation: "/air/",
    translation: "вода",
    category: "noun",
    frequency: 202,
    examples: [
      { sentence: "Air putih", translation: "Вода (букв. 'белая вода')" },
      { sentence: "Minum air", translation: "Пить воду" },
    ],
    lessonIds: [3],
  },

{
    id: 203,
    word: "kopi",
    pronunciation: "/kopi/",
    translation: "кофе",
    category: "noun",
    frequency: 203,
    examples: [
      { sentence: "Mau kopi?", translation: "Хочешь кофе?" },
      { sentence: "Kopi panas", translation: "Горячий кофе" },
    ],
    lessonIds: [12, 15],
  },

{
    id: 204,
    word: "teh",
    pronunciation: "/təh/",
    translation: "чай",
    category: "noun",
    frequency: 204,
    examples: [
      { sentence: "Teh manis", translation: "Сладкий чай" },
      { sentence: "Mau teh atau kopi?", translation: "Хочешь чай или кофе?" },
    ],
    lessonIds: [15],
  },

{
    id: 205,
    word: "makanan",
    pronunciation: "/makanan/",
    translation: "еда, пища",
    category: "noun",
    frequency: 205,
    examples: [
      { sentence: "Makanan enak", translation: "Вкусная еда" },
      { sentence: "Makanan Indonesia", translation: "Индонезийская еда" },
    ],
    wordFamily: [
      { word: "memakan", translation: "съедать, есть" },
      { word: "dimakan", translation: "быть съеденным" },
      { word: "makanan", translation: "еда, пища" },
      { word: "pemakan", translation: "едок, пожиратель" },
      { word: "termakan", translation: "быть случайно съеденным" },
      { word: "makan-makan", translation: "застолье, пирушка" },
    ],
    lessonIds: [13],
  },

{
    id: 206,
    word: "gula",
    pronunciation: "/ɡula/",
    translation: "сахар",
    category: "noun",
    frequency: 206,
    examples: [
      {
        sentence: "Teh manis dengan gula",
        translation: "Сладкий чай с сахаром",
      },
      { sentence: "Gula pasir", translation: "Сахарный песок" },
    ],
    lessonIds: [15],
  },

{
    id: 207,
    word: "garam",
    pronunciation: "/ɡaram/",
    translation: "соль",
    category: "noun",
    frequency: 207,
    examples: [
      { sentence: "Tambah garam", translation: "Добавить соли" },
      { sentence: "Kurang garam", translation: "Не хватает соли" },
    ],
    lessonIds: [15],
  },

{
    id: 208,
    word: "susu",
    pronunciation: "/susu/",
    translation: "молоко",
    category: "noun",
    frequency: 208,
    examples: [
      { sentence: "Kopi susu", translation: "Кофе с молоком" },
      { sentence: "Susu hangat", translation: "Тёплое молоко" },
    ],
    lessonIds: [15],
  },

{
    id: 209,
    word: "roti",
    pronunciation: "/roti/",
    translation: "хлеб",
    category: "noun",
    frequency: 209,
    examples: [
      { sentence: "Roti tawar", translation: "Белый хлеб" },
      { sentence: "Roti bakar", translation: "Тост" },
    ],
    lessonIds: [15],
  },

{
    id: 210,
    word: "sayur",
    pronunciation: "/sajur/",
    translation: "овощи",
    category: "noun",
    frequency: 210,
    examples: [
      { sentence: "Sayur sop", translation: "Суп" },
      { sentence: "Makan sayur", translation: "Есть овощи" },
    ],
    lessonIds: [15],
  },

{
    id: 211,
    word: "buah",
    pronunciation: "/buah/",
    translation: "фрукты",
    category: "noun",
    frequency: 211,
    examples: [
      { sentence: "Buah segar", translation: "Свежие фрукты" },
      { sentence: "Jus buah", translation: "Фруктовый сок" },
    ],
    lessonIds: [15],
  },

{
    id: 212,
    word: "daging",
    pronunciation: "/daɡiŋ/",
    translation: "мясо",
    category: "noun",
    frequency: 212,
    examples: [
      { sentence: "Daging ayam", translation: "Куриное мясо" },
      { sentence: "Daging sapi", translation: "Говядина" },
    ],
    lessonIds: [15],
  },

{
    id: 213,
    word: "ikan",
    pronunciation: "/ikan/",
    translation: "рыба",
    category: "noun",
    frequency: 213,
    examples: [
      { sentence: "Ikan goreng", translation: "Жареная рыба" },
      { sentence: "Ikan segar", translation: "Свежая рыба" },
    ],
    lessonIds: [15],
  },

{
    id: 214,
    word: "telur",
    pronunciation: "/telur/",
    translation: "яйцо",
    category: "noun",
    frequency: 214,
    examples: [
      { sentence: "Telur goreng", translation: "Яичница" },
      { sentence: "Telur rebus", translation: "Варёное яйцо" },
    ],
    lessonIds: [15],
  },

{
    id: 215,
    word: "enak",
    pronunciation: "/enaʔ/",
    translation: "вкусный",
    category: "adjective",
    frequency: 215,
    examples: [
      { sentence: "Makanan enak", translation: "Вкусная еда" },
      { sentence: "Enak sekali", translation: "Очень вкусно" },
    ],
    lessonIds: [13, 15],
  },

{
    id: 216,
    word: "pedas",
    pronunciation: "/pədas/",
    translation: "острый (на вкус)",
    category: "adjective",
    frequency: 216,
    examples: [
      { sentence: "Sambal pedas", translation: "Острый соус" },
      { sentence: "Makanan pedas", translation: "Острая еда" },
    ],
    lessonIds: [13, 15],
  },

{
    id: 217,
    word: "asin",
    pronunciation: "/asin/",
    translation: "солёный",
    category: "adjective",
    frequency: 217,
    examples: [
      { sentence: "Makanan asin", translation: "Солёная еда" },
      { sentence: "Terlalu asin", translation: "Слишком солёно" },
    ],
    lessonIds: [13, 15],
  },

{
    id: 218,
    word: "manis",
    pronunciation: "/manis/",
    translation: "сладкий",
    category: "adjective",
    frequency: 218,
    examples: [
      { sentence: "Teh manis", translation: "Сладкий чай" },
      { sentence: "Kue manis", translation: "Сладкое пирожное" },
    ],
    lessonIds: [13, 15],
  },

{
    id: 219,
    word: "pahit",
    pronunciation: "/pahit/",
    translation: "горький",
    category: "adjective",
    frequency: 219,
    examples: [
      { sentence: "Kopi pahit", translation: "Горький кофе" },
      { sentence: "Obat pahit", translation: "Горькое лекарство" },
    ],
    lessonIds: [13, 15],
  },

{
    id: 220,
    word: "masak",
    pronunciation: "/masaʔ/",
    translation: "готовить (еду)",
    category: "verb",
    frequency: 220,
    examples: [
      { sentence: "Ibu sedang masak", translation: "Мама готовит" },
      { sentence: "Saya suka masak", translation: "Я люблю готовить" },
    ],
    wordFamily: [
      { word: "memasak", translation: "готовить (еду), варить" },
      { word: "dimasak", translation: "быть приготовленным" },
      { word: "masakan", translation: "блюдо, кушанье, кухня" },
      { word: "pemasak", translation: "повар, кулинар" },
      { word: "pemasakan", translation: "варка, приготовление" },
    ],
    lessonIds: [10, 15],
  },

{
    id: 221,
    word: "goreng",
    pronunciation: "/ɡorəŋ/",
    translation: "жарить, жареный",
    category: "verb",
    frequency: 221,
    examples: [
      { sentence: "Nasi goreng", translation: "Жареный рис" },
      { sentence: "Ikan goreng", translation: "Жареная рыба" },
    ],
    lessonIds: [15],
  },

{
    id: 222,
    word: "rebus",
    pronunciation: "/rəbus/",
    translation: "варить, варёный",
    category: "verb",
    frequency: 222,
    examples: [
      { sentence: "Telur rebus", translation: "Варёное яйцо" },
      { sentence: "Air rebus", translation: "Кипячёная вода" },
    ],
    lessonIds: [15],
  },

{
    id: 223,
    word: "bakar",
    pronunciation: "/bakar/",
    translation: "жарить на огне, печь",
    category: "verb",
    frequency: 223,
    examples: [
      { sentence: "Roti bakar", translation: "Тост" },
      { sentence: "Ayam bakar", translation: "Жареная курица" },
    ],
    lessonIds: [15],
  },

{
    id: 224,
    word: "lapar",
    pronunciation: "/lapar/",
    translation: "голодный, голод",
    category: "adjective",
    frequency: 224,
    examples: [
      { sentence: "Saya lapar", translation: "Я голоден" },
      { sentence: "Lapar sekali", translation: "Очень голоден" },
    ],
    lessonIds: [13, 15],
  },

{
    id: 225,
    word: "haus",
    pronunciation: "/haus/",
    translation: "жажда, хотеть пить",
    category: "adjective",
    frequency: 225,
    examples: [
      { sentence: "Saya haus", translation: "Я хочу пить" },
      { sentence: "Haus sekali", translation: "Очень хочется пить" },
    ],
    lessonIds: [13, 15],
  },

{
    id: 226,
    word: "sarapan",
    pronunciation: "/sarapan/",
    translation: "завтрак, завтракать",
    category: "noun",
    frequency: 226,
    examples: [
      { sentence: "Sarapan pagi", translation: "Утренний завтрак" },
      { sentence: "Belum sarapan", translation: "Ещё не завтракал" },
    ],
    lessonIds: [8, 15],
  },

{
    id: 227,
    word: "makan siang",
    pronunciation: "/makan siaŋ/",
    translation: "обед",
    category: "noun",
    frequency: 227,
    examples: [
      { sentence: "Makan siang bersama", translation: "Обед вместе" },
      { sentence: "Waktu makan siang", translation: "Время обеда" },
    ],
    wordFamily: [
      { word: "memakan", translation: "съедать, есть" },
      { word: "dimakan", translation: "быть съеденным" },
      { word: "makanan", translation: "еда, пища" },
      { word: "pemakan", translation: "едок, пожиратель" },
      { word: "termakan", translation: "быть случайно съеденным" },
      { word: "makan-makan", translation: "застолье, пирушка" },
    ],
    lessonIds: [8, 15],
  },

{
    id: 228,
    word: "makan malam",
    pronunciation: "/makan malam/",
    translation: "ужин",
    category: "noun",
    frequency: 228,
    examples: [
      { sentence: "Makan malam romantis", translation: "Романтический ужин" },
      { sentence: "Sudah makan malam?", translation: "Уже поужинал?" },
    ],
    wordFamily: [
      { word: "memakan", translation: "съедать, есть" },
      { word: "dimakan", translation: "быть съеденным" },
      { word: "makanan", translation: "еда, пища" },
      { word: "pemakan", translation: "едок, пожиратель" },
      { word: "termakan", translation: "быть случайно съеденным" },
      { word: "makan-makan", translation: "застолье, пирушка" },
    ],
    lessonIds: [8, 15],
  },

{
    id: 229,
    word: "piring",
    pronunciation: "/piriŋ/",
    translation: "тарелка",
    category: "noun",
    frequency: 229,
    examples: [
      { sentence: "Cuci piring", translation: "Мыть посуду" },
      { sentence: "Di atas piring", translation: "На тарелке" },
    ],
    lessonIds: [15],
  },

{
    id: 230,
    word: "gelas",
    pronunciation: "/ɡəlas/",
    translation: "стакан",
    category: "noun",
    frequency: 230,
    examples: [
      { sentence: "Gelas air", translation: "Стакан воды" },
      { sentence: "Gelas kosong", translation: "Пустой стакан" },
    ],
    lessonIds: [15],
  },

{
    id: 231,
    word: "sendok",
    pronunciation: "/səndoʔ/",
    translation: "ложка",
    category: "noun",
    frequency: 231,
    examples: [
      { sentence: "Sendok makan", translation: "Столовая ложка" },
      { sentence: "Sendok teh", translation: "Чайная ложка" },
    ],
    lessonIds: [15],
  },

{
    id: 232,
    word: "garpu",
    pronunciation: "/ɡarpu/",
    translation: "вилка",
    category: "noun",
    frequency: 232,
    examples: [
      { sentence: "Pakai garpu", translation: "Использовать вилку" },
      { sentence: "Garpu dan pisau", translation: "Вилка и нож" },
    ],
    lessonIds: [15],
  },

{
    id: 233,
    word: "restoran",
    pronunciation: "/restoran/",
    translation: "ресторан",
    category: "noun",
    frequency: 233,
    examples: [
      { sentence: "Makan di restoran", translation: "Есть в ресторане" },
      { sentence: "Restoran enak", translation: "Вкусный ресторан" },
    ],
    lessonIds: [14, 15],
  },

{
    id: 234,
    word: "menu",
    pronunciation: "/mənu/",
    translation: "меню",
    category: "noun",
    frequency: 234,
    examples: [
      { sentence: "Lihat menu", translation: "Посмотреть меню" },
      { sentence: "Menu hari ini", translation: "Меню на сегодня" },
    ],
    lessonIds: [15],
  },

{
    id: 235,
    word: "pesan",
    pronunciation: "/pəsan/",
    translation: "заказывать; сообщение",
    category: "verb",
    frequency: 235,
    examples: [
      {
        sentence: "Saya pesan nasi goreng",
        translation: "Я заказываю жареный рис",
      },
      { sentence: "Kirim pesan", translation: "Отправить сообщение" },
    ],
    lessonIds: [15],
  },

{
    id: 236,
    word: "bayar",
    pronunciation: "/bajar/",
    translation: "платить",
    category: "verb",
    frequency: 236,
    examples: [
      { sentence: "Bayar di kasir", translation: "Платить на кассе" },
      { sentence: "Sudah bayar", translation: "Уже заплатил" },
    ],
    lessonIds: [16],
  },

{
    id: 237,
    word: "harga",
    pronunciation: "/harɡa/",
    translation: "цена",
    category: "noun",
    frequency: 237,
    examples: [
      { sentence: "Harga berapa?", translation: "Сколько стоит?" },
      { sentence: "Harga murah", translation: "Дешёвая цена" },
    ],
    lessonIds: [16],
  },

{
    id: 238,
    word: "murah",
    pronunciation: "/murah/",
    translation: "дешёвый",
    category: "adjective",
    frequency: 238,
    examples: [
      { sentence: "Harga murah", translation: "Дешёвая цена" },
      { sentence: "Barang murah", translation: "Дешёвый товар" },
    ],
    lessonIds: [13, 16],
  },

{
    id: 239,
    word: "mahal",
    pronunciation: "/mahal/",
    translation: "дорогой",
    category: "adjective",
    frequency: 239,
    examples: [
      { sentence: "Mobil mahal", translation: "Дорогая машина" },
      { sentence: "Terlalu mahal", translation: "Слишком дорого" },
    ],
    lessonIds: [13, 16],
  },

{
    id: 240,
    word: "uang",
    pronunciation: "/uaŋ/",
    translation: "деньги",
    category: "noun",
    frequency: 240,
    examples: [
      { sentence: "Tidak punya uang", translation: "Нет денег" },
      { sentence: "Uang tunai", translation: "Наличные" },
    ],
    lessonIds: [7, 16],
  },

{
    id: 241,
    word: "hari",
    pronunciation: "/hari/",
    translation: "день",
    category: "noun",
    frequency: 241,
    examples: [
      { sentence: "Hari ini", translation: "Сегодня" },
      { sentence: "Hari Senin", translation: "Понедельник" },
    ],
    wordFamily: [
      { word: "sehari", translation: "один день, целый день" },
      { word: "harian", translation: "ежедневный; газета" },
      { word: "berhari-hari", translation: "днями напролёт" },
      { word: "keseharian", translation: "повседневность, будни" },
      { word: "perayaan", translation: "празднование, торжество" },
    ],
    lessonIds: [8],
  },

{
    id: 242,
    word: "minggu",
    pronunciation: "/miŋɡu/",
    translation: "неделя; воскресенье",
    category: "noun",
    frequency: 242,
    examples: [
      { sentence: "Minggu depan", translation: "На следующей неделе" },
      { sentence: "Hari Minggu", translation: "Воскресенье" },
    ],
    lessonIds: [8, 11],
  },

{
    id: 243,
    word: "bulan",
    pronunciation: "/bulan/",
    translation: "месяц; луна",
    category: "noun",
    frequency: 243,
    examples: [
      { sentence: "Bulan depan", translation: "В следующем месяце" },
      { sentence: "Bulan ini", translation: "В этом месяце" },
    ],
    lessonIds: [8],
  },

{
    id: 244,
    word: "tahun",
    pronunciation: "/tahun/",
    translation: "год",
    category: "noun",
    frequency: 244,
    examples: [
      { sentence: "Tahun baru", translation: "Новый год" },
      { sentence: "Tahun depan", translation: "В следующем году" },
    ],
    lessonIds: [8],
  },

{
    id: 245,
    word: "jam",
    pronunciation: "/dʒam/",
    translation: "час, часы (время)",
    category: "noun",
    frequency: 245,
    examples: [
      { sentence: "Jam berapa?", translation: "Который час?" },
      { sentence: "Jam dua", translation: "Два часа" },
    ],
    lessonIds: [8, 14],
  },

{
    id: 246,
    word: "hari Senin",
    pronunciation: "/hari Sənin/",
    translation: "понедельник",
    category: "noun",
    frequency: 246,
    examples: [
      { sentence: "Hari Senin pertama", translation: "Первый понедельник" },
      { sentence: "Besok hari Senin", translation: "Завтра понедельник" },
    ],
    lessonIds: [8],
  },

{
    id: 247,
    word: "hari Selasa",
    pronunciation: "/hari Səlasa/",
    translation: "вторник",
    category: "noun",
    frequency: 247,
    examples: [
      { sentence: "Hari Selasa kerja", translation: "Во вторник работаю" },
      { sentence: "Selasa lalu", translation: "Во вторник прошлый" },
    ],
    lessonIds: [8],
  },

{
    id: 248,
    word: "hari Rabu",
    pronunciation: "/hari Rabu/",
    translation: "среда",
    category: "noun",
    frequency: 248,
    examples: [
      { sentence: "Hari Rabu rapat", translation: "В среду собрание" },
      { sentence: "Rabu depan", translation: "В следующую среду" },
    ],
    lessonIds: [8],
  },

{
    id: 249,
    word: "hari Kamis",
    pronunciation: "/hari Kamis/",
    translation: "четверг",
    category: "noun",
    frequency: 249,
    examples: [
      { sentence: "Hari Kamis libur", translation: "В четверг выходной" },
      { sentence: "Kamis malam", translation: "Вечером в четверг" },
    ],
    lessonIds: [8],
  },

{
    id: 250,
    word: "hari Jumat",
    pronunciation: "/hari Jumat/",
    translation: "пятница",
    category: "noun",
    frequency: 250,
    examples: [
      { sentence: "Hari Jumat sholat", translation: "В пятницу молитва" },
      { sentence: "Jumat berkah", translation: "Благословенная пятница" },
    ],
    lessonIds: [8],
  },

{
    id: 251,
    word: "hari Sabtu",
    pronunciation: "/hari Sabtu/",
    translation: "суббота",
    category: "noun",
    frequency: 251,
    examples: [
      { sentence: "Hari Sabtu jalan-jalan", translation: "В субботу гулять" },
      { sentence: "Sabtu dan Minggu", translation: "Суббота и воскресенье" },
    ],
    lessonIds: [8],
  },

{
    id: 252,
    word: "hari Minggu",
    pronunciation: "/hari Miŋɡu/",
    translation: "воскресенье",
    category: "noun",
    frequency: 252,
    examples: [
      {
        sentence: "Hari Minggu gereja",
        translation: "В воскресенье в церковь",
      },
      { sentence: "Akhir minggu", translation: "Выходные" },
    ],
    lessonIds: [8],
  },

{
    id: 253,
    word: "kemarin",
    pronunciation: "/kemarin/",
    translation: "вчера",
    category: "adverb",
    frequency: 253,
    examples: [
      { sentence: "Kemarin saya pergi", translation: "Вчера я ходил" },
      { sentence: "Kemarin malam", translation: "Вчера вечером" },
    ],
    lessonIds: [8, 9],
  },

{
    id: 254,
    word: "besok",
    pronunciation: "/besoʔ/",
    translation: "завтра",
    category: "adverb",
    frequency: 254,
    examples: [
      { sentence: "Besok saya datang", translation: "Завтра я приду" },
      { sentence: "Sampai jumpa besok", translation: "До завтра" },
    ],
    lessonIds: [8, 11],
  },

{
    id: 255,
    word: "sekarang",
    pronunciation: "/sekaraŋ/",
    translation: "сейчас, теперь",
    category: "adverb",
    frequency: 255,
    examples: [
      { sentence: "Sekarang jam berapa?", translation: "Сейчас который час?" },
      { sentence: "Sekarang juga", translation: "Сейчас же" },
    ],
    lessonIds: [8, 10],
  },

{
    id: 256,
    word: "nanti",
    pronunciation: "/nanti/",
    translation: "потом, позже",
    category: "adverb",
    frequency: 256,
    examples: [
      { sentence: "Nanti kita pergi", translation: "Потом мы пойдём" },
      { sentence: "Sampai nanti", translation: "До встречи" },
    ],
    lessonIds: [8, 11],
  },

{
    id: 257,
    word: "dulu",
    pronunciation: "/dulu/",
    translation: "раньше, сначала",
    category: "adverb",
    frequency: 257,
    examples: [
      {
        sentence: "Dulu saya tinggal di sana",
        translation: "Раньше я жил там",
      },
      { sentence: "Dengar dulu", translation: "Сначала послушай" },
    ],
    lessonIds: [8, 9],
  },

{
    id: 258,
    word: "lalu",
    pronunciation: "/lalu/",
    translation: "потом, затем; прошлый",
    category: "adverb",
    frequency: 258,
    examples: [
      { sentence: "Minggu lalu", translation: "На прошлой неделе" },
      { sentence: "Lalu dia pergi", translation: "Потом он ушёл" },
    ],
    lessonIds: [8, 9, 15],
  },

{
    id: 259,
    word: "awal",
    pronunciation: "/awal/",
    translation: "начало, ранний",
    category: "noun",
    frequency: 259,
    examples: [
      { sentence: "Awal bulan", translation: "Начало месяца" },
      { sentence: "Awal tahun", translation: "Начало года" },
    ],
    lessonIds: [8],
  },

{
    id: 260,
    word: "akhir",
    pronunciation: "/axir/",
    translation: "конец, последний",
    category: "noun",
    frequency: 260,
    examples: [
      { sentence: "Akhir bulan", translation: "Конец месяца" },
      { sentence: "Akhir tahun", translation: "Конец года" },
    ],
    lessonIds: [8],
  },

{
    id: 261,
    word: "hujan",
    pronunciation: "/hudʒan/",
    translation: "дождь",
    category: "noun",
    frequency: 261,
    examples: [
      { sentence: "Hujan deras", translation: "Сильный дождь" },
      { sentence: "Sedang hujan", translation: "Идёт дождь" },
    ],
    lessonIds: [15],
  },

{
    id: 262,
    word: "matahari",
    pronunciation: "/matahari/",
    translation: "солнце",
    category: "noun",
    frequency: 262,
    examples: [
      { sentence: "Matahari terbit", translation: "Восход солнца" },
      { sentence: "Hari ini panas", translation: "Сегодня жарко" },
    ],
    lessonIds: [8],
  },

{
    id: 263,
    word: "pohon",
    pronunciation: "/pohon/",
    translation: "дерево",
    category: "noun",
    frequency: 263,
    examples: [
      { sentence: "Pohon besar", translation: "Большое дерево" },
      { sentence: "Pohon kelapa", translation: "Кокосовая пальма" },
    ],
    lessonIds: [13],
  },

{
    id: 264,
    word: "bunga",
    pronunciation: "/buŋa/",
    translation: "цветок",
    category: "noun",
    frequency: 264,
    examples: [
      { sentence: "Bunga indah", translation: "Красивый цветок" },
      { sentence: "Taman bunga", translation: "Цветочный сад" },
    ],
    lessonIds: [13],
  },

{
    id: 265,
    word: "laut",
    pronunciation: "/laut/",
    translation: "море",
    category: "noun",
    frequency: 265,
    examples: [
      { sentence: "Laut biru", translation: "Синее море" },
      { sentence: "Ke laut", translation: "К морю" },
    ],
    lessonIds: [14],
  },

{
    id: 266,
    word: "gunung",
    pronunciation: "/ɡunuŋ/",
    translation: "гора",
    category: "noun",
    frequency: 266,
    examples: [
      { sentence: "Gunung tinggi", translation: "Высокая гора" },
      { sentence: "Naik gunung", translation: "Восхождение на гору" },
    ],
    lessonIds: [14],
  },

{
    id: 267,
    word: "sungai",
    pronunciation: "/suŋai/",
    translation: "река",
    category: "noun",
    frequency: 267,
    examples: [
      { sentence: "Sungai besar", translation: "Большая река" },
      { sentence: "Berenang di sungai", translation: "Плавать в реке" },
    ],
    lessonIds: [14],
  },

{
    id: 268,
    word: "danau",
    pronunciation: "/danau/",
    translation: "озеро",
    category: "noun",
    frequency: 268,
    examples: [
      { sentence: "Danau indah", translation: "Красивое озеро" },
      { sentence: "Danau Toba", translation: "Озеро Тоба" },
    ],
    lessonIds: [14],
  },

{
    id: 269,
    word: "pantai",
    pronunciation: "/pantai/",
    translation: "пляж, побережье",
    category: "noun",
    frequency: 269,
    examples: [
      { sentence: "Ke pantai", translation: "На пляж" },
      { sentence: "Pantai pasir putih", translation: "Пляж с белым песком" },
    ],
    lessonIds: [14],
  },

{
    id: 270,
    word: "hutan",
    pronunciation: "/hutan/",
    translation: "лес",
    category: "noun",
    frequency: 270,
    examples: [
      { sentence: "Hutan tropis", translation: "Тропический лес" },
      { sentence: "Di dalam hutan", translation: "В лесу" },
    ],
    lessonIds: [14],
  },

{
    id: 271,
    word: "tanah",
    pronunciation: "/tanah/",
    translation: "земля, почва",
    category: "noun",
    frequency: 271,
    examples: [
      { sentence: "Tanah subur", translation: "Плодородная земля" },
      { sentence: "Tanah air", translation: "Родина" },
    ],
    lessonIds: [14],
  },

{
    id: 272,
    word: "batu",
    pronunciation: "/batu/",
    translation: "камень",
    category: "noun",
    frequency: 272,
    examples: [
      { sentence: "Batu besar", translation: "Большой камень" },
      { sentence: "Jalan berbatu", translation: "Каменная дорога" },
    ],
    lessonIds: [14],
  },

{
    id: 273,
    word: "pasir",
    pronunciation: "/pasir/",
    translation: "песок",
    category: "noun",
    frequency: 273,
    examples: [
      { sentence: "Pasir putih", translation: "Белый песок" },
      { sentence: "Pantai pasir", translation: "Песчаный пляж" },
    ],
    lessonIds: [14],
  },

{
    id: 274,
    word: "api",
    pronunciation: "/api/",
    translation: "огонь",
    category: "noun",
    frequency: 274,
    examples: [
      { sentence: "Api unggun", translation: "Костёр" },
      { sentence: "Hati-hati dengan api", translation: "Осторожно с огнём" },
    ],
    lessonIds: [14],
  },

{
    id: 275,
    word: "udara",
    pronunciation: "/udara/",
    translation: "воздух",
    category: "noun",
    frequency: 275,
    examples: [
      { sentence: "Udara segar", translation: "Свежий воздух" },
      { sentence: "Udara dingin", translation: "Холодный воздух" },
    ],
    lessonIds: [14],
  },

{
    id: 276,
    word: "bintang",
    pronunciation: "/bintaŋ/",
    translation: "звезда",
    category: "noun",
    frequency: 276,
    examples: [
      { sentence: "Bintang di langit", translation: "Звёзды на небе" },
      { sentence: "Bintang laut", translation: "Морская звезда" },
    ],
    lessonIds: [14],
  },

{
    id: 277,
    word: "bulan",
    pronunciation: "/bulan/",
    translation: "луна, месяц",
    category: "noun",
    frequency: 277,
    examples: [
      { sentence: "Bulan purnama", translation: "Полнолуние" },
      { sentence: "Cahaya bulan", translation: "Лунный свет" },
    ],
    lessonIds: [8, 14],
  },

{
    id: 278,
    word: "langit",
    pronunciation: "/laŋit/",
    translation: "небо",
    category: "noun",
    frequency: 278,
    examples: [
      { sentence: "Langit biru", translation: "Голубое небо" },
      { sentence: "Langit cerah", translation: "Ясное небо" },
    ],
    lessonIds: [14],
  },

{
    id: 279,
    word: "pelangi",
    pronunciation: "/pelaŋi/",
    translation: "радуга",
    category: "noun",
    frequency: 279,
    examples: [
      { sentence: "Pelangi indah", translation: "Красивая радуга" },
      { sentence: "Warna pelangi", translation: "Цвета радуги" },
    ],
    lessonIds: [14],
  },

{
    id: 280,
    word: "gempa bumi",
    pronunciation: "/ɡəmpa bumi/",
    translation: "землетрясение",
    category: "noun",
    frequency: 280,
    examples: [
      { sentence: "Gempa bumi besar", translation: "Большое землетрясение" },
      { sentence: "Ada gempa", translation: "Было землетрясение" },
    ],
    lessonIds: [14],
  },

{
    id: 281,
    word: "kota",
    pronunciation: "/kota/",
    translation: "город",
    category: "noun",
    frequency: 281,
    examples: [
      { sentence: "Kota besar", translation: "Большой город" },
      { sentence: "Di kota", translation: "В городе" },
    ],
    lessonIds: [14],
  },

{
    id: 282,
    word: "jalan",
    pronunciation: "/dʒalan/",
    translation: "улица, дорога; идти",
    category: "noun",
    frequency: 282,
    examples: [
      { sentence: "Jalan raya", translation: "Шоссе" },
      { sentence: "Jalan kaki", translation: "Идти пешком" },
    ],
    wordFamily: [
      { word: "berjalan", translation: "идти, ходить" },
      { word: "menjalan", translation: "проходить, выполняться" },
      { word: "menjalankan", translation: "выполнять, запускать" },
      { word: "perjalanan", translation: "путешествие, поездка" },
      { word: "pejalan", translation: "пешеход" },
      { word: "sejalan", translation: "по пути, согласованно" },
      { word: "jalan-jalan", translation: "гулять, прогуливаться" },
    ],
    lessonIds: [14],
  },

{
    id: 283,
    word: "kantor",
    pronunciation: "/kantor/",
    translation: "офис, контора",
    category: "noun",
    frequency: 283,
    examples: [
      { sentence: "Ke kantor", translation: "В офис" },
      { sentence: "Di kantor", translation: "В офисе" },
    ],
    lessonIds: [14],
  },

{
    id: 284,
    word: "sekolah",
    pronunciation: "/sekolah/",
    translation: "школа",
    category: "noun",
    frequency: 284,
    examples: [
      { sentence: "Pergi ke sekolah", translation: "Идти в школу" },
      { sentence: "Di sekolah", translation: "В школе" },
    ],
    lessonIds: [14],
  },

{
    id: 285,
    word: "pasar",
    pronunciation: "/pasar/",
    translation: "рынок, базар",
    category: "noun",
    frequency: 285,
    examples: [
      { sentence: "Ke pasar", translation: "На рынок" },
      { sentence: "Pasar tradisional", translation: "Традиционный рынок" },
    ],
    lessonIds: [14],
  },

{
    id: 286,
    word: "rumah sakit",
    pronunciation: "/rumah sakit/",
    translation: "больница",
    category: "noun",
    frequency: 286,
    examples: [
      { sentence: "Ke rumah sakit", translation: "В больницу" },
      { sentence: "Di rumah sakit", translation: "В больнице" },
    ],
    wordFamily: [
      { word: "rumah sakit", translation: "больница" },
      { word: "penyakit", translation: "болезнь" },
      { word: "menyakiti", translation: "причинять боль, обижать" },
      { word: "tersakiti", translation: "обиженный, уязвлённый" },
      { word: "kesakitan", translation: "страдающий от боли" },
      { word: "sakit-sakit", translation: "с трудом, насилу" },
    ],
    lessonIds: [14],
  },

{
    id: 287,
    word: "bank",
    pronunciation: "/banʔ/",
    translation: "банк",
    category: "noun",
    frequency: 287,
    examples: [
      { sentence: "Ke bank", translation: "В банк" },
      { sentence: "Bank tutup", translation: "Банк закрыт" },
    ],
    lessonIds: [14],
  },

{
    id: 288,
    word: "toko",
    pronunciation: "/toko/",
    translation: "магазин",
    category: "noun",
    frequency: 288,
    examples: [
      { sentence: "Toko buku", translation: "Книжный магазин" },
      { sentence: "Ke toko", translation: "В магазин" },
    ],
    lessonIds: [14],
  },

{
    id: 289,
    word: "apotek",
    pronunciation: "/apotəʔ/",
    translation: "аптека",
    category: "noun",
    frequency: 289,
    examples: [
      { sentence: "Ke apotek", translation: "В аптеку" },
      { sentence: "Apotek buka", translation: "Аптека открыта" },
    ],
    lessonIds: [14],
  },

{
    id: 290,
    word: "stasiun",
    pronunciation: "/stasiun/",
    translation: "вокзал, станция",
    category: "noun",
    frequency: 290,
    examples: [
      { sentence: "Stasiun kereta", translation: "Железнодорожный вокзал" },
      { sentence: "Di stasiun", translation: "На вокзале" },
    ],
    lessonIds: [14],
  },

{
    id: 291,
    word: "bandara",
    pronunciation: "/bandara/",
    translation: "аэропорт",
    category: "noun",
    frequency: 291,
    examples: [
      { sentence: "Ke bandara", translation: "В аэропорт" },
      {
        sentence: "Bandara internasional",
        translation: "Международный аэропорт",
      },
    ],
    lessonIds: [14],
  },

{
    id: 292,
    word: "pelabuhan",
    pronunciation: "/pelabuhan/",
    translation: "порт, гавань",
    category: "noun",
    frequency: 292,
    examples: [
      { sentence: "Pelabuhan laut", translation: "Морской порт" },
      {
        sentence: "Kapal masuk pelabuhan",
        translation: "Корабль заходит в порт",
      },
    ],
    lessonIds: [14],
  },

{
    id: 293,
    word: "taman",
    pronunciation: "/taman/",
    translation: "парк, сад",
    category: "noun",
    frequency: 293,
    examples: [
      { sentence: "Taman kota", translation: "Городской парк" },
      { sentence: "Jalan-jalan di taman", translation: "Гулять в парке" },
    ],
    lessonIds: [14],
  },

{
    id: 294,
    word: "masjid",
    pronunciation: "/masdʒid/",
    translation: "мечеть",
    category: "noun",
    frequency: 294,
    examples: [
      { sentence: "Masjid besar", translation: "Большая мечеть" },
      { sentence: "Ke masjid", translation: "В мечеть" },
    ],
    lessonIds: [14],
  },

{
    id: 295,
    word: "gereja",
    pronunciation: "/ɡeredʒa/",
    translation: "церковь",
    category: "noun",
    frequency: 295,
    examples: [
      { sentence: "Ke gereja", translation: "В церковь" },
      { sentence: "Gereja tua", translation: "Старая церковь" },
    ],
    lessonIds: [14],
  },

{
    id: 296,
    word: "kiri",
    pronunciation: "/kiri/",
    translation: "левый, налево",
    category: "adverb",
    frequency: 296,
    examples: [
      { sentence: "Belok kiri", translation: "Поверните налево" },
      { sentence: "Di sebelah kiri", translation: "Слева" },
    ],
    lessonIds: [14],
  },

{
    id: 297,
    word: "kanan",
    pronunciation: "/kanan/",
    translation: "правый, направо",
    category: "adverb",
    frequency: 297,
    examples: [
      { sentence: "Belok kanan", translation: "Поверните направо" },
      { sentence: "Di sebelah kanan", translation: "Справа" },
    ],
    lessonIds: [14],
  },

{
    id: 298,
    word: "lurus",
    pronunciation: "/lurus/",
    translation: "прямо",
    category: "adverb",
    frequency: 298,
    examples: [
      { sentence: "Jalan lurus", translation: "Идите прямо" },
      { sentence: "Lurus saja", translation: "Просто прямо" },
    ],
    lessonIds: [14],
  },

{
    id: 299,
    word: "dekat",
    pronunciation: "/dekat/",
    translation: "близко, рядом",
    category: "adverb",
    frequency: 299,
    examples: [
      { sentence: "Dekat rumah saya", translation: "Рядом с моим домом" },
      { sentence: "Dekat sekali", translation: "Очень близко" },
    ],
    lessonIds: [14],
  },

{
    id: 300,
    word: "jauh",
    pronunciation: "/dʒauh/",
    translation: "далеко",
    category: "adverb",
    frequency: 300,
    examples: [
      { sentence: "Jauh dari sini", translation: "Далеко отсюда" },
      { sentence: "Jauh sekali", translation: "Очень далеко" },
    ],
    lessonIds: [14],
  },

{
    id: 301,
    word: "baju",
    pronunciation: "/badʒu/",
    translation: "одежда, рубашка",
    category: "noun",
    frequency: 301,
    examples: [
      { sentence: "Baju baru", translation: "Новая одежда" },
      { sentence: "Baju merah", translation: "Красная рубашка" },
    ],
    lessonIds: [13],
  },

{
    id: 302,
    word: "warna",
    pronunciation: "/warna/",
    translation: "цвет",
    category: "noun",
    frequency: 302,
    examples: [
      { sentence: "Apa warna ini?", translation: "Какой это цвет?" },
      { sentence: "Warna merah", translation: "Красный цвет" },
    ],
    lessonIds: [13],
  },

{
    id: 303,
    word: "merah",
    pronunciation: "/merah/",
    translation: "красный",
    category: "adjective",
    frequency: 303,
    examples: [
      { sentence: "Baju merah", translation: "Красная рубашка" },
      { sentence: "Mobil merah", translation: "Красная машина" },
    ],
    lessonIds: [13],
  },

{
    id: 304,
    word: "putih",
    pronunciation: "/putih/",
    translation: "белый",
    category: "adjective",
    frequency: 304,
    examples: [
      { sentence: "Air putih", translation: "Вода (букв. 'белая вода')" },
      { sentence: "Bunga putih", translation: "Белый цветок" },
    ],
    lessonIds: [13],
  },

{
    id: 305,
    word: "hitam",
    pronunciation: "/hitam/",
    translation: "чёрный",
    category: "adjective",
    frequency: 305,
    examples: [
      { sentence: "Mobil hitam", translation: "Чёрная машина" },
      { sentence: "Kucing hitam", translation: "Чёрный кот" },
    ],
    lessonIds: [13],
  },

{
    id: 306,
    word: "biru",
    pronunciation: "/biru/",
    translation: "синий, голубой",
    category: "adjective",
    frequency: 306,
    examples: [
      { sentence: "Laut biru", translation: "Синее море" },
      { sentence: "Langit biru", translation: "Голубое небо" },
    ],
    lessonIds: [13],
  },

{
    id: 307,
    word: "hijau",
    pronunciation: "/hidʒau/",
    translation: "зелёный",
    category: "adjective",
    frequency: 307,
    examples: [
      { sentence: "Pohon hijau", translation: "Зелёное дерево" },
      { sentence: "Sawah hijau", translation: "Зелёные рисовые поля" },
    ],
    lessonIds: [13],
  },

{
    id: 308,
    word: "kuning",
    pronunciation: "/kuniŋ/",
    translation: "жёлтый",
    category: "adjective",
    frequency: 308,
    examples: [
      { sentence: "Bunga kuning", translation: "Жёлтый цветок" },
      { sentence: "Kuning telur", translation: "Яичный желток" },
    ],
    lessonIds: [13],
  },

{
    id: 309,
    word: "coklat",
    pronunciation: "/tʃoklat/",
    translation: "коричневый",
    category: "adjective",
    frequency: 309,
    examples: [
      { sentence: "Mobil coklat", translation: "Коричневая машина" },
      { sentence: "Warna coklat", translation: "Коричневый цвет" },
    ],
    lessonIds: [13],
  },

{
    id: 310,
    word: "abu-abu",
    pronunciation: "/abu-abu/",
    translation: "серый",
    category: "adjective",
    frequency: 310,
    examples: [
      { sentence: "Langit abu-abu", translation: "Серое небо" },
      { sentence: "Baju abu-abu", translation: "Серая рубашка" },
    ],
    lessonIds: [13],
  },

{
    id: 311,
    word: "celana",
    pronunciation: "/tʃəlana/",
    translation: "брюки, штаны",
    category: "noun",
    frequency: 311,
    examples: [
      { sentence: "Celana panjang", translation: "Длинные брюки" },
      { sentence: "Celana pendek", translation: "Шорты" },
    ],
    lessonIds: [13],
  },

{
    id: 312,
    word: "topi",
    pronunciation: "/topi/",
    translation: "шляпа, кепка",
    category: "noun",
    frequency: 312,
    examples: [
      { sentence: "Pakai topi", translation: "Надеть шляпу" },
      { sentence: "Topi merah", translation: "Красная кепка" },
    ],
    lessonIds: [13],
  },

{
    id: 313,
    word: "sepatu",
    pronunciation: "/sepatu/",
    translation: "обувь, туфли",
    category: "noun",
    frequency: 313,
    examples: [
      { sentence: "Sepatu baru", translation: "Новая обувь" },
      { sentence: "Sepatu hitam", translation: "Чёрные туфли" },
    ],
    lessonIds: [13],
  },

{
    id: 314,
    word: "kaus",
    pronunciation: "/kaus/",
    translation: "футболка",
    category: "noun",
    frequency: 314,
    examples: [
      { sentence: "Kaus putih", translation: "Белая футболка" },
      { sentence: "Kaus oblong", translation: "Футболка с коротким рукавом" },
    ],
    lessonIds: [13],
  },

{
    id: 315,
    word: "jaket",
    pronunciation: "/dʒakət/",
    translation: "куртка",
    category: "noun",
    frequency: 315,
    examples: [
      { sentence: "Jaket hangat", translation: "Тёплая куртка" },
      { sentence: "Pakai jaket", translation: "Надеть куртку" },
    ],
    lessonIds: [13],
  },

{
    id: 316,
    word: "pakaian",
    pronunciation: "/pakaian/",
    translation: "одежда (общее)",
    category: "noun",
    frequency: 316,
    examples: [
      { sentence: "Pakaian baru", translation: "Новая одежда" },
      { sentence: "Toko pakaian", translation: "Магазин одежды" },
    ],
    wordFamily: [
      { word: "memakai", translation: "использовать, надевать" },
      { word: "dipakai", translation: "используемый, носимый" },
      { word: "pakaian", translation: "одежда" },
      { word: "pemakaian", translation: "использование, применение" },
      { word: "terpakai", translation: "использованный, ношеный" },
      { word: "berpakai", translation: "одеваться, носить одежду" },
    ],
    lessonIds: [13],
  },

{
    id: 317,
    word: "terang",
    pronunciation: "/teraŋ/",
    translation: "светлый, яркий",
    category: "adjective",
    frequency: 317,
    examples: [
      { sentence: "Warna terang", translation: "Яркий цвет" },
      { sentence: "Cahaya terang", translation: "Яркий свет" },
    ],
    lessonIds: [13],
  },

{
    id: 318,
    word: "gelap",
    pronunciation: "/ɡelap/",
    translation: "тёмный, темно",
    category: "adjective",
    frequency: 318,
    examples: [
      { sentence: "Warna gelap", translation: "Тёмный цвет" },
      { sentence: "Sudah gelap", translation: "Уже темно" },
    ],
    lessonIds: [13],
  },

{
    id: 319,
    word: "tipis",
    pronunciation: "/tipis/",
    translation: "тонкий",
    category: "adjective",
    frequency: 319,
    examples: [
      { sentence: "Kain tipis", translation: "Тонкая ткань" },
      { sentence: "Buku tipis", translation: "Тонкая книга" },
    ],
    lessonIds: [13],
  },

{
    id: 320,
    word: "tebal",
    pronunciation: "/tebal/",
    translation: "толстый",
    category: "adjective",
    frequency: 320,
    examples: [
      { sentence: "Buku tebal", translation: "Толстая книга" },
      { sentence: "Jaket tebal", translation: "Толстая куртка" },
    ],
    lessonIds: [13],
  },

{
    id: 321,
    word: "senang",
    pronunciation: "/senaŋ/",
    translation: "радостный, счастливый",
    category: "adjective",
    frequency: 321,
    examples: [
      { sentence: "Saya senang", translation: "Я рад" },
      {
        sentence: "Senang bertemu denganmu",
        translation: "Рад встрече с тобой",
      },
    ],
    lessonIds: [13, 16],
  },

{
    id: 322,
    word: "sedih",
    pronunciation: "/sədih/",
    translation: "грустный, печальный",
    category: "adjective",
    frequency: 322,
    examples: [
      { sentence: "Dia sedih", translation: "Он грустный" },
      { sentence: "Jangan sedih", translation: "Не грусти" },
    ],
    lessonIds: [5, 13],
  },

{
    id: 323,
    word: "marah",
    pronunciation: "/marah/",
    translation: "сердитый, злой",
    category: "adjective",
    frequency: 323,
    examples: [
      { sentence: "Dia marah", translation: "Он сердит" },
      { sentence: "Jangan marah", translation: "Не сердись" },
    ],
    lessonIds: [5, 13],
  },

{
    id: 324,
    word: "capek",
    pronunciation: "/tʃapəʔ/",
    translation: "усталый, уставший",
    category: "adjective",
    frequency: 324,
    examples: [
      { sentence: "Saya capek", translation: "Я устал" },
      { sentence: "Capek sekali", translation: "Очень устал" },
    ],
    lessonIds: [13],
  },

{
    id: 325,
    word: "sakit",
    pronunciation: "/sakit/",
    translation: "больной, боль",
    category: "adjective",
    frequency: 325,
    examples: [
      { sentence: "Saya sakit", translation: "Я болен" },
      { sentence: "Sakit kepala", translation: "Головная боль" },
    ],
    wordFamily: [
      { word: "rumah sakit", translation: "больница" },
      { word: "penyakit", translation: "болезнь" },
      { word: "menyakiti", translation: "причинять боль, обижать" },
      { word: "tersakiti", translation: "обиженный, уязвлённый" },
      { word: "kesakitan", translation: "страдающий от боли" },
      { word: "sakit-sakit", translation: "с трудом, насилу" },
    ],
    lessonIds: [15],
  },

{
    id: 326,
    word: "gembira",
    pronunciation: "/ɡəmbira/",
    translation: "весёлый, радостный",
    category: "adjective",
    frequency: 326,
    examples: [
      { sentence: "Anak-anak gembira", translation: "Дети радостны" },
      { sentence: "Hari yang gembira", translation: "Счастливый день" },
    ],
    lessonIds: [13],
  },

{
    id: 327,
    word: "takut",
    pronunciation: "/takut/",
    translation: "бояться, страшно",
    category: "adjective",
    frequency: 327,
    examples: [
      { sentence: "Saya takut", translation: "Я боюсь" },
      { sentence: "Jangan takut", translation: "Не бойся" },
    ],
    lessonIds: [5, 13],
  },

{
    id: 328,
    word: "berani",
    pronunciation: "/bərani/",
    translation: "смелый, храбрый",
    category: "adjective",
    frequency: 328,
    examples: [
      { sentence: "Dia berani", translation: "Он смелый" },
      { sentence: "Berani coba", translation: "Смелый попробовать" },
    ],
    lessonIds: [13],
  },

{
    id: 329,
    word: "malas",
    pronunciation: "/malas/",
    translation: "ленивый",
    category: "adjective",
    frequency: 329,
    examples: [
      { sentence: "Saya malas belajar", translation: "Мне лень учиться" },
      { sentence: "Orang malas", translation: "Ленивый человек" },
    ],
    lessonIds: [13],
  },

{
    id: 330,
    word: "rajin",
    pronunciation: "/radʒin/",
    translation: "прилежный, усердный",
    category: "adjective",
    frequency: 330,
    examples: [
      { sentence: "Anak rajin", translation: "Прилежный ребёнок" },
      { sentence: "Rajin belajar", translation: "Усердно учиться" },
    ],
    lessonIds: [13],
  },

{
    id: 331,
    word: "pintar",
    pronunciation: "/pintar/",
    translation: "умный, способный",
    category: "adjective",
    frequency: 331,
    examples: [
      { sentence: "Dia pintar", translation: "Он умный" },
      { sentence: "Pintar sekali", translation: "Очень умный" },
    ],
    lessonIds: [13],
  },

{
    id: 332,
    word: "bodoh",
    pronunciation: "/bodoh/",
    translation: "глупый",
    category: "adjective",
    frequency: 332,
    examples: [
      { sentence: "Jangan bodoh", translation: "Не будь глупым" },
      { sentence: "Itu bodoh", translation: "Это глупо" },
    ],
    lessonIds: [13],
  },

{
    id: 333,
    word: "baik hati",
    pronunciation: "/baiʔ hati/",
    translation: "добрый, добросердечный",
    category: "adjective",
    frequency: 333,
    examples: [
      { sentence: "Dia orang baik hati", translation: "Он добрый человек" },
      { sentence: "Terima kasih, baik hati", translation: "Спасибо, вы добры" },
    ],
    lessonIds: [13],
  },

{
    id: 334,
    word: "jahat",
    pronunciation: "/dʒahat/",
    translation: "злой, плохой",
    category: "adjective",
    frequency: 334,
    examples: [
      { sentence: "Orang jahat", translation: "Злой человек" },
      { sentence: "Jangan jahat", translation: "Не будь злым" },
    ],
    lessonIds: [13],
  },

{
    id: 335,
    word: "sabar",
    pronunciation: "/sabar/",
    translation: "терпеливый, терпение",
    category: "adjective",
    frequency: 335,
    examples: [
      { sentence: "Sabar ya", translation: "Будь терпелив" },
      { sentence: "Sabar menunggu", translation: "Терпеливо ждать" },
    ],
    lessonIds: [13],
  },

{
    id: 336,
    word: "cemas",
    pronunciation: "/tʃəmas/",
    translation: "тревожный, беспокойный",
    category: "adjective",
    frequency: 336,
    examples: [
      { sentence: "Jangan cemas", translation: "Не волнуйся" },
      { sentence: "Saya cemas", translation: "Я волнуюсь" },
    ],
    lessonIds: [13],
  },

{
    id: 337,
    word: "kaget",
    pronunciation: "/kaɡət/",
    translation: "удивлённый, поражённый",
    category: "adjective",
    frequency: 337,
    examples: [
      { sentence: "Saya kaget", translation: "Я удивлён" },
      { sentence: "Kaget sekali", translation: "Очень удивлён" },
    ],
    lessonIds: [13],
  },

{
    id: 338,
    word: "bangga",
    pronunciation: "/baŋɡa/",
    translation: "гордый, гордиться",
    category: "adjective",
    frequency: 338,
    examples: [
      { sentence: "Saya bangga pada kamu", translation: "Я горжусь тобой" },
      { sentence: "Bangga sekali", translation: "Очень горд" },
    ],
    lessonIds: [13],
  },

{
    id: 339,
    word: "malu",
    pronunciation: "/malu/",
    translation: "стеснительный, стыдно",
    category: "adjective",
    frequency: 339,
    examples: [
      { sentence: "Jangan malu", translation: "Не стесняйся" },
      { sentence: "Saya malu", translation: "Мне стыдно" },
    ],
    lessonIds: [13],
  },

{
    id: 340,
    word: "heran",
    pronunciation: "/həran/",
    translation: "удивляться, поражаться",
    category: "adjective",
    frequency: 340,
    examples: [
      { sentence: "Saya heran", translation: "Я удивляюсь" },
      { sentence: "Heran kenapa", translation: "Удивительно, почему" },
    ],
    lessonIds: [13],
  },

{
    id: 341,
    word: "ibu",
    pronunciation: "/ibu/",
    translation: "мать, мама; госпожа (обращение)",
    category: "noun",
    frequency: 341,
    examples: [
      { sentence: "Ibu saya", translation: "Моя мама" },
      { sentence: "Ibu guru", translation: "Госпожа учитель" },
    ],
    lessonIds: [2, 6],
  },

{
    id: 342,
    word: "bapak",
    pronunciation: "/bapaʔ/",
    translation: "отец, папа; господин (обращение)",
    category: "noun",
    frequency: 342,
    examples: [
      { sentence: "Bapak saya", translation: "Мой отец" },
      { sentence: "Bapak presiden", translation: "Господин президент" },
    ],
    lessonIds: [2, 6],
  },

{
    id: 343,
    word: "kakak",
    pronunciation: "/kakaʔ/",
    translation: "старший брат/сестра",
    category: "noun",
    frequency: 343,
    examples: [
      { sentence: "Kakak saya", translation: "Мой/моя старший/ая брат/сестра" },
      { sentence: "Kakak perempuan", translation: "Старшая сестра" },
    ],
    lessonIds: [6],
  },

{
    id: 344,
    word: "adik",
    pronunciation: "/adiʔ/",
    translation: "младший брат/сестра",
    category: "noun",
    frequency: 344,
    examples: [
      { sentence: "Adik laki-laki", translation: "Младший брат" },
      { sentence: "Adik perempuan", translation: "Младшая сестра" },
    ],
    lessonIds: [6],
  },

{
    id: 345,
    word: "anak",
    pronunciation: "/anaʔ/",
    translation: "ребёнок, дитя",
    category: "noun",
    frequency: 345,
    examples: [
      { sentence: "Anak saya", translation: "Мой ребёнок" },
      { sentence: "Anak sekolah", translation: "Школьник" },
    ],
    lessonIds: [6],
  },

{
    id: 346,
    word: "kakek",
    pronunciation: "/kakəʔ/",
    translation: "дедушка",
    category: "noun",
    frequency: 346,
    examples: [
      { sentence: "Kakek saya", translation: "Мой дедушка" },
      { sentence: "Kakek nenek", translation: "Бабушка и дедушка" },
    ],
    lessonIds: [6],
  },

{
    id: 347,
    word: "nenek",
    pronunciation: "/neneʔ/",
    translation: "бабушка",
    category: "noun",
    frequency: 347,
    examples: [
      { sentence: "Nenek saya", translation: "Моя бабушка" },
      { sentence: "Rumah nenek", translation: "Дом бабушки" },
    ],
    lessonIds: [6],
  },

{
    id: 348,
    word: "suami",
    pronunciation: "/suami/",
    translation: "муж",
    category: "noun",
    frequency: 348,
    examples: [
      { sentence: "Suami saya", translation: "Мой муж" },
      { sentence: "Suami istri", translation: "Муж и жена" },
    ],
    lessonIds: [6],
  },

{
    id: 349,
    word: "istri",
    pronunciation: "/istri/",
    translation: "жена",
    category: "noun",
    frequency: 349,
    examples: [
      { sentence: "Istri saya", translation: "Моя жена" },
      { sentence: "Istri yang baik", translation: "Хорошая жена" },
    ],
    lessonIds: [6],
  },

{
    id: 350,
    word: "paman",
    pronunciation: "/paman/",
    translation: "дядя",
    category: "noun",
    frequency: 350,
    examples: [
      { sentence: "Paman saya", translation: "Мой дядя" },
      { sentence: "Paman tinggal di sini", translation: "Дядя живёт здесь" },
    ],
    lessonIds: [6],
  },

{
    id: 351,
    word: "bibi",
    pronunciation: "/bibi/",
    translation: "тётя",
    category: "noun",
    frequency: 351,
    examples: [
      { sentence: "Bibi datang", translation: "Тётя пришла" },
      { sentence: "Bibi saya", translation: "Моя тётя" },
    ],
    lessonIds: [6],
  },

{
    id: 352,
    word: "keponakan",
    pronunciation: "/kəponakan/",
    translation: "племянник/племянница",
    category: "noun",
    frequency: 352,
    examples: [
      { sentence: "Keponakan saya", translation: "Мой племянник" },
      { sentence: "Keponakan laki-laki", translation: "Племянник" },
    ],
    lessonIds: [6],
  },

{
    id: 353,
    word: "sepupu",
    pronunciation: "/səpupu/",
    translation: "двоюродный брат/сестра",
    category: "noun",
    frequency: 353,
    examples: [
      { sentence: "Sepupu saya", translation: "Мой двоюродный брат" },
      { sentence: "Keluarga sepupu", translation: "Двоюродные родственники" },
    ],
    lessonIds: [6],
  },

{
    id: 354,
    word: "keluarga",
    pronunciation: "/keluarɡa/",
    translation: "семья",
    category: "noun",
    frequency: 354,
    examples: [
      { sentence: "Keluarga saya", translation: "Моя семья" },
      { sentence: "Keluarga besar", translation: "Большая семья" },
    ],
    lessonIds: [6],
  },

{
    id: 355,
    word: "saudara",
    pronunciation: "/saudara/",
    translation: "брат/сестра (родственник)",
    category: "noun",
    frequency: 355,
    examples: [
      { sentence: "Saudara kandung", translation: "Родной брат/сестра" },
      { sentence: "Saudara sepupu", translation: "Двоюродный брат/сестра" },
    ],
    lessonIds: [6],
  },

{
    id: 356,
    word: "kakak laki-laki",
    pronunciation: "/kakaʔ laki-laki/",
    translation: "старший брат",
    category: "noun",
    frequency: 356,
    examples: [
      { sentence: "Kakak laki-laki saya", translation: "Мой старший брат" },
      { sentence: "Dia kakak laki-laki", translation: "Он старший брат" },
    ],
    lessonIds: [6],
  },

{
    id: 357,
    word: "kakak perempuan",
    pronunciation: "/kakaʔ pərəmpuan/",
    translation: "старшая сестра",
    category: "noun",
    frequency: 357,
    examples: [
      { sentence: "Kakak perempuan saya", translation: "Моя старшая сестра" },
      { sentence: "Dua kakak perempuan", translation: "Две старшие сестры" },
    ],
    lessonIds: [6],
  },

{
    id: 358,
    word: "anak laki-laki",
    pronunciation: "/anaʔ laki-laki/",
    translation: "сын",
    category: "noun",
    frequency: 358,
    examples: [
      { sentence: "Anak laki-laki saya", translation: "Мой сын" },
      { sentence: "Dua anak laki-laki", translation: "Два сына" },
    ],
    lessonIds: [6],
  },

{
    id: 359,
    word: "anak perempuan",
    pronunciation: "/anaʔ pərəmpuan/",
    translation: "дочь",
    category: "noun",
    frequency: 359,
    examples: [
      { sentence: "Anak perempuan saya", translation: "Моя дочь" },
      { sentence: "Cantik anak perempuan", translation: "Красивая дочь" },
    ],
    lessonIds: [6],
  },

{
    id: 360,
    word: "rumah tangga",
    pronunciation: "/rumah taŋɡa/",
    translation: "домашнее хозяйство, семья",
    category: "noun",
    frequency: 360,
    examples: [
      { sentence: "Ibu rumah tangga", translation: "Домохозяйка" },
      { sentence: "Kehidupan rumah tangga", translation: "Семейная жизнь" },
    ],
    wordFamily: [
      { word: "rumah sakit", translation: "больница" },
      { word: "rumah tangga", translation: "домашнее хозяйство" },
      { word: "berumah", translation: "иметь дом, жить" },
      { word: "perumahan", translation: "жильё, жилой комплекс" },
      { word: "serumah", translation: "в одном доме, совместно" },
    ],
    lessonIds: [6],
  },

{
    id: 361,
    word: "guru",
    pronunciation: "/ɡuru/",
    translation: "учитель",
    category: "noun",
    frequency: 361,
    examples: [
      { sentence: "Dia guru", translation: "Он/она учитель" },
      { sentence: "Guru bahasa", translation: "Учитель языка" },
    ],
    lessonIds: [2],
  },

{
    id: 362,
    word: "dokter",
    pronunciation: "/doktər/",
    translation: "врач, доктор",
    category: "noun",
    frequency: 362,
    examples: [
      { sentence: "Saya dokter", translation: "Я врач" },
      { sentence: "Ke dokter", translation: "К врачу" },
    ],
    lessonIds: [2],
  },

{
    id: 363,
    word: "mahasiswa",
    pronunciation: "/mahasiswa/",
    translation: "студент",
    category: "noun",
    frequency: 363,
    examples: [
      { sentence: "Saya mahasiswa", translation: "Я студент" },
      { sentence: "Mahasiswa baru", translation: "Новый студент" },
    ],
    lessonIds: [2, 13],
  },

{
    id: 364,
    word: "kerja",
    pronunciation: "/kərdʒa/",
    translation: "работа, работать",
    category: "noun",
    frequency: 364,
    examples: [
      { sentence: "Saya kerja di kantor", translation: "Я работаю в офисе" },
      { sentence: "Selamat kerja", translation: "Удачи в работе" },
    ],
    wordFamily: [
      { word: "bekerja", translation: "работать, трудиться" },
      { word: "mengerjakan", translation: "делать, выполнять работу" },
      { word: "dikerjakan", translation: "быть сделанным" },
      { word: "pekerja", translation: "работник, трудящийся" },
      { word: "pekerjaan", translation: "работа, занятие, профессия" },
      { word: "kerjakan", translation: "сделай, выполни" },
    ],
    lessonIds: [10],
  },

{
    id: 365,
    word: "tugas",
    pronunciation: "/tuɡas/",
    translation: "задание, задача",
    category: "noun",
    frequency: 365,
    examples: [
      { sentence: "Tugas rumah", translation: "Домашнее задание" },
      { sentence: "Tugas saya", translation: "Моя задача" },
    ],
    lessonIds: [6],
  },

{
    id: 366,
    word: "polisi",
    pronunciation: "/polisi/",
    translation: "полицейский",
    category: "noun",
    frequency: 366,
    examples: [
      { sentence: "Polisi datang", translation: "Полиция приехала" },
      {
        sentence: "Polisi lalu lintas",
        translation: "Полицейский дорожного движения",
      },
    ],
    lessonIds: [2],
  },

{
    id: 367,
    word: "supir",
    pronunciation: "/supir/",
    translation: "водитель",
    category: "noun",
    frequency: 367,
    examples: [
      { sentence: "Supir taksi", translation: "Таксист" },
      { sentence: "Supir bus", translation: "Водитель автобуса" },
    ],
    lessonIds: [2],
  },

{
    id: 368,
    word: "koki",
    pronunciation: "/koki/",
    translation: "повар",
    category: "noun",
    frequency: 368,
    examples: [
      { sentence: "Koki handal", translation: "Искусный повар" },
      { sentence: "Dia koki", translation: "Он повар" },
    ],
    lessonIds: [2],
  },

{
    id: 369,
    word: "petani",
    pronunciation: "/petani/",
    translation: "фермер, крестьянин",
    category: "noun",
    frequency: 369,
    examples: [
      {
        sentence: "Petani bekerja di sawah",
        translation: "Фермер работает в поле",
      },
      { sentence: "Petani Indonesia", translation: "Индонезийские фермеры" },
    ],
    lessonIds: [2],
  },

{
    id: 370,
    word: "nelayan",
    pronunciation: "/nəlajan/",
    translation: "рыбак",
    category: "noun",
    frequency: 370,
    examples: [
      { sentence: "Nelayan pergi ke laut", translation: "Рыбак идёт в море" },
      { sentence: "Kapal nelayan", translation: "Рыбацкая лодка" },
    ],
    lessonIds: [2],
  },

{
    id: 371,
    word: "pedagang",
    pronunciation: "/pədaɡaŋ/",
    translation: "торговец, продавец",
    category: "noun",
    frequency: 371,
    examples: [
      { sentence: "Pedagang pasar", translation: "Рыночный торговец" },
      { sentence: "Pedagang kaki lima", translation: "Уличный торговец" },
    ],
    lessonIds: [2],
  },

{
    id: 372,
    word: "pengusaha",
    pronunciation: "/pəŋusaha/",
    translation: "предприниматель",
    category: "noun",
    frequency: 372,
    examples: [
      { sentence: "Pengusaha muda", translation: "Молодой предприниматель" },
      { sentence: "Pengusaha sukses", translation: "Успешный предприниматель" },
    ],
    lessonIds: [2],
  },

{
    id: 373,
    word: "insinyur",
    pronunciation: "/insiɲur/",
    translation: "инженер",
    category: "noun",
    frequency: 373,
    examples: [
      { sentence: "Insinyur sipil", translation: "Гражданский инженер" },
      {
        sentence: "Insinyur perangkat lunak",
        translation: "Инженер-программист",
      },
    ],
    lessonIds: [2],
  },

{
    id: 374,
    word: "perawat",
    pronunciation: "/pərawat/",
    translation: "медсестра, медбрат",
    category: "noun",
    frequency: 374,
    examples: [
      { sentence: "Perawat baik", translation: "Добрая медсестра" },
      { sentence: "Dia perawat", translation: "Она медсестра" },
    ],
    lessonIds: [2],
  },

{
    id: 375,
    word: "karyawan",
    pronunciation: "/karjawan/",
    translation: "служащий, сотрудник",
    category: "noun",
    frequency: 375,
    examples: [
      { sentence: "Karyawan kantor", translation: "Офисный сотрудник" },
      { sentence: "Karyawan baru", translation: "Новый сотрудник" },
    ],
    lessonIds: [2],
  },

{
    id: 376,
    word: "pensiun",
    pronunciation: "/pənsiun/",
    translation: "пенсия, на пенсии",
    category: "noun",
    frequency: 376,
    examples: [
      { sentence: "Dia sudah pensiun", translation: "Он уже на пенсии" },
      { sentence: "Usia pensiun", translation: "Пенсионный возраст" },
    ],
    lessonIds: [2],
  },

{
    id: 377,
    word: "gaji",
    pronunciation: "/ɡadʒi/",
    translation: "зарплата",
    category: "noun",
    frequency: 377,
    examples: [
      { sentence: "Gaji besar", translation: "Большая зарплата" },
      { sentence: "Gaji bulanan", translation: "Ежемесячная зарплата" },
    ],
    lessonIds: [2],
  },

{
    id: 378,
    word: "libur",
    pronunciation: "/libur/",
    translation: "выходной, отпуск",
    category: "noun",
    frequency: 378,
    examples: [
      { sentence: "Hari libur", translation: "Выходной день" },
      { sentence: "Libur panjang", translation: "Длинные каникулы" },
    ],
    lessonIds: [8],
  },

{
    id: 379,
    word: "cuti",
    pronunciation: "/tʃuti/",
    translation: "отпуск",
    category: "noun",
    frequency: 379,
    examples: [
      { sentence: "Cuti tahunan", translation: "Ежегодный отпуск" },
      { sentence: "Sedang cuti", translation: "В отпуске" },
    ],
    lessonIds: [8],
  },

{
    id: 380,
    word: "rapat",
    pronunciation: "/rapat/",
    translation: "собрание, совещание",
    category: "noun",
    frequency: 380,
    examples: [
      { sentence: "Rapat kantor", translation: "Офисное собрание" },
      { sentence: "Ada rapat", translation: "Есть собрание" },
    ],
    lessonIds: [10],
  },

{
    id: 381,
    word: "besar",
    pronunciation: "/bəsar/",
    translation: "большой",
    category: "adjective",
    frequency: 381,
    examples: [
      { sentence: "Rumah besar", translation: "Большой дом" },
      { sentence: "Kota besar", translation: "Большой город" },
    ],
    wordFamily: [
      { word: "membesar", translation: "увеличиваться, расти" },
      { word: "perbesar", translation: "увеличь, расширь" },
      { word: "memperbesar", translation: "увеличивать, расширять" },
      { word: "diperbesar", translation: "быть увеличенным" },
      { word: "kebesaran", translation: "величие, огромность" },
      { word: "sebesar", translation: "такой же большой как" },
      { word: "terbesar", translation: "самый большой, крупнейший" },
      { word: "pembesar", translation: "увеличитель, руководитель" },
    ],
    lessonIds: [13],
  },

{
    id: 382,
    word: "kecil",
    pronunciation: "/kətʃil/",
    translation: "маленький",
    category: "adjective",
    frequency: 382,
    examples: [
      { sentence: "Rumah kecil", translation: "Маленький дом" },
      { sentence: "Anak kecil", translation: "Маленький ребёнок" },
    ],
    wordFamily: [
      { word: "mengecil", translation: "уменьшаться" },
      { word: "kecilkan", translation: "уменьши" },
      { word: "mengecilkan", translation: "уменьшать" },
      { word: "sekecil", translation: "такой же маленький как" },
      { word: "terkecil", translation: "самый маленький" },
    ],
    lessonIds: [13],
  },

{
    id: 383,
    word: "panjang",
    pronunciation: "/pandʒaŋ/",
    translation: "длинный",
    category: "adjective",
    frequency: 383,
    examples: [
      { sentence: "Jalan panjang", translation: "Длинная дорога" },
      { sentence: "Rambut panjang", translation: "Длинные волосы" },
    ],
    lessonIds: [13],
  },

{
    id: 384,
    word: "pendek",
    pronunciation: "/pəndəʔ/",
    translation: "короткий",
    category: "adjective",
    frequency: 384,
    examples: [
      { sentence: "Rambut pendek", translation: "Короткие волосы" },
      { sentence: "Jalan pendek", translation: "Короткая дорога" },
    ],
    lessonIds: [13],
  },

{
    id: 385,
    word: "cepat",
    pronunciation: "/tʃəpat/",
    translation: "быстрый, быстро",
    category: "adjective",
    frequency: 385,
    examples: [
      { sentence: "Mobil cepat", translation: "Быстрая машина" },
      { sentence: "Cepat datang!", translation: "Приходи быстрее!" },
    ],
    lessonIds: [13],
  },

{
    id: 386,
    word: "lambat",
    pronunciation: "/lambat/",
    translation: "медленный, медленно",
    category: "adjective",
    frequency: 386,
    examples: [
      { sentence: "Mobil lambat", translation: "Медленная машина" },
      { sentence: "Jangan lambat", translation: "Не медли" },
    ],
    lessonIds: [13],
  },

{
    id: 387,
    word: "tinggi",
    pronunciation: "/tiŋɡi/",
    translation: "высокий",
    category: "adjective",
    frequency: 387,
    examples: [
      { sentence: "Gunung tinggi", translation: "Высокая гора" },
      { sentence: "Dia tinggi", translation: "Он высокий" },
    ],
    lessonIds: [13],
  },

{
    id: 388,
    word: "rendah",
    pronunciation: "/rendah/",
    translation: "низкий",
    category: "adjective",
    frequency: 388,
    examples: [
      { sentence: "Meja rendah", translation: "Низкий стол" },
      { sentence: "Harga rendah", translation: "Низкая цена" },
    ],
    lessonIds: [13],
  },

{
    id: 389,
    word: "berat",
    pronunciation: "/bərat/",
    translation: "тяжёлый",
    category: "adjective",
    frequency: 389,
    examples: [
      { sentence: "Barang berat", translation: "Тяжёлый предмет" },
      { sentence: "Berat sekali", translation: "Очень тяжёлый" },
    ],
    lessonIds: [13],
  },

{
    id: 390,
    word: "ringan",
    pronunciation: "/riŋan/",
    translation: "лёгкий",
    category: "adjective",
    frequency: 390,
    examples: [
      { sentence: "Barang ringan", translation: "Лёгкий предмет" },
      { sentence: "Berat ringan", translation: "Тяжесть" },
    ],
    lessonIds: [13],
  },

{
    id: 391,
    word: "kuat",
    pronunciation: "/kuat/",
    translation: "сильный",
    category: "adjective",
    frequency: 391,
    examples: [
      { sentence: "Dia kuat", translation: "Он сильный" },
      { sentence: "Angin kuat", translation: "Сильный ветер" },
    ],
    lessonIds: [13],
  },

{
    id: 392,
    word: "lemah",
    pronunciation: "/lemah/",
    translation: "слабый",
    category: "adjective",
    frequency: 392,
    examples: [
      { sentence: "Dia lemah", translation: "Он слабый" },
      { sentence: "Lemah sekali", translation: "Очень слабый" },
    ],
    lessonIds: [13],
  },

{
    id: 393,
    word: "keras",
    pronunciation: "/kəras/",
    translation: "твёрдый, громкий, сильный",
    category: "adjective",
    frequency: 393,
    examples: [
      { sentence: "Batu keras", translation: "Твёрдый камень" },
      { sentence: "Suara keras", translation: "Громкий голос" },
    ],
    lessonIds: [13],
  },

{
    id: 394,
    word: "lunak",
    pronunciation: "/lunaʔ/",
    translation: "мягкий",
    category: "adjective",
    frequency: 394,
    examples: [
      { sentence: "Bantal lunak", translation: "Мягкая подушка" },
      { sentence: "Kain lunak", translation: "Мягкая ткань" },
    ],
    lessonIds: [13],
  },

{
    id: 395,
    word: "kasar",
    pronunciation: "/kasar/",
    translation: "грубый, шершавый",
    category: "adjective",
    frequency: 395,
    examples: [
      { sentence: "Kain kasar", translation: "Грубая ткань" },
      { sentence: "Orang kasar", translation: "Грубый человек" },
    ],
    lessonIds: [13],
  },

{
    id: 396,
    word: "halus",
    pronunciation: "/halus/",
    translation: "гладкий, нежный",
    category: "adjective",
    frequency: 396,
    examples: [
      { sentence: "Kulit halus", translation: "Нежная кожа" },
      { sentence: "Pasir halus", translation: "Мелкий песок" },
    ],
    lessonIds: [13],
  },

{
    id: 397,
    word: "bersih",
    pronunciation: "/bersih/",
    translation: "чистый",
    category: "adjective",
    frequency: 397,
    examples: [
      { sentence: "Rumah bersih", translation: "Чистый дом" },
      { sentence: "Air bersih", translation: "Чистая вода" },
    ],
    wordFamily: [
      { word: "membersihkan", translation: "чистить, убирать" },
      { word: "dibersihkan", translation: "быть очищенным" },
      { word: "kebersihan", translation: "чистота" },
      { word: "pembersih", translation: "чистящее средство" },
      { word: "bersih-bersih", translation: "уборка, приборка" },
    ],
    lessonIds: [13],
  },

{
    id: 398,
    word: "kotor",
    pronunciation: "/kotor/",
    translation: "грязный",
    category: "adjective",
    frequency: 398,
    examples: [
      { sentence: "Baju kotor", translation: "Грязная одежда" },
      { sentence: "Kamar kotor", translation: "Грязная комната" },
    ],
    lessonIds: [13],
  },

{
    id: 399,
    word: "basah",
    pronunciation: "/basah/",
    translation: "мокрый",
    category: "adjective",
    frequency: 399,
    examples: [
      { sentence: "Baju basah", translation: "Мокрая одежда" },
      { sentence: "Jalan basah", translation: "Мокрая дорога" },
    ],
    lessonIds: [13],
  },

{
    id: 400,
    word: "kering",
    pronunciation: "/keriŋ/",
    translation: "сухой",
    category: "adjective",
    frequency: 400,
    examples: [
      { sentence: "Baju kering", translation: "Сухая одежда" },
      { sentence: "Musim kering", translation: "Сухой сезон" },
    ],
    lessonIds: [13],
  },

{
    id: 401,
    word: "sini",
    pronunciation: "/sini/",
    translation: "здесь, сюда",
    category: "adverb",
    frequency: 401,
    examples: [
      { sentence: "Datang sini!", translation: "Иди сюда!" },
      { sentence: "Di sini", translation: "Здесь" },
    ],
    lessonIds: [14],
  },

{
    id: 402,
    word: "situ",
    pronunciation: "/situ/",
    translation: "там (рядом с собеседником)",
    category: "adverb",
    frequency: 402,
    examples: [
      { sentence: "Di situ", translation: "Там (у тебя)" },
      { sentence: "Duduk di situ", translation: "Сиди там" },
    ],
    lessonIds: [14],
  },

{
    id: 403,
    word: "sana",
    pronunciation: "/sana/",
    translation: "там (далеко)",
    category: "adverb",
    frequency: 403,
    examples: [
      { sentence: "Di sana", translation: "Там (далеко)" },
      { sentence: "Pergi ke sana", translation: "Иди туда" },
    ],
    lessonIds: [14],
  },

{
    id: 404,
    word: "atas",
    pronunciation: "/atas/",
    translation: "верх, наверху",
    category: "preposition",
    frequency: 404,
    examples: [
      { sentence: "Di atas meja", translation: "На столе" },
      { sentence: "Ke atas", translation: "Наверх" },
    ],
    lessonIds: [14],
  },

{
    id: 405,
    word: "bawah",
    pronunciation: "/bawah/",
    translation: "низ, внизу",
    category: "preposition",
    frequency: 405,
    examples: [
      { sentence: "Di bawah kursi", translation: "Под стулом" },
      { sentence: "Ke bawah", translation: "Вниз" },
    ],
    lessonIds: [14],
  },

{
    id: 406,
    word: "dalam",
    pronunciation: "/dalam/",
    translation: "в, внутри",
    category: "preposition",
    frequency: 406,
    examples: [
      { sentence: "Di dalam rumah", translation: "Внутри дома" },
      { sentence: "Masuk ke dalam", translation: "Войти внутрь" },
    ],
    lessonIds: [14],
  },

{
    id: 407,
    word: "luar",
    pronunciation: "/luar/",
    translation: "снаружи, вне",
    category: "preposition",
    frequency: 407,
    examples: [
      { sentence: "Di luar", translation: "Снаружи" },
      { sentence: "Dari luar", translation: "Извне" },
    ],
    lessonIds: [14],
  },

{
    id: 408,
    word: "depan",
    pronunciation: "/dəpan/",
    translation: "перед, впереди",
    category: "preposition",
    frequency: 408,
    examples: [
      { sentence: "Di depan rumah", translation: "Перед домом" },
      { sentence: "Ke depan", translation: "Вперёд" },
    ],
    lessonIds: [14],
  },

{
    id: 409,
    word: "belakang",
    pronunciation: "/bəlakaŋ/",
    translation: "сзади, позади",
    category: "preposition",
    frequency: 409,
    examples: [
      { sentence: "Di belakang rumah", translation: "Позади дома" },
      { sentence: "Ke belakang", translation: "Назад" },
    ],
    lessonIds: [14],
  },

{
    id: 410,
    word: "samping",
    pronunciation: "/sampiŋ/",
    translation: "рядом, сбоку",
    category: "preposition",
    frequency: 410,
    examples: [
      { sentence: "Di samping rumah", translation: "Рядом с домом" },
      { sentence: "Di samping saya", translation: "Рядом со мной" },
    ],
    lessonIds: [14],
  },

{
    id: 411,
    word: "seberang",
    pronunciation: "/seberaŋ/",
    translation: "напротив, через",
    category: "preposition",
    frequency: 411,
    examples: [
      { sentence: "Di seberang jalan", translation: "Через дорогу" },
      { sentence: "Seberang sana", translation: "На той стороне" },
    ],
    lessonIds: [14],
  },

{
    id: 412,
    word: "tepi",
    pronunciation: "/təpi/",
    translation: "край, берег",
    category: "noun",
    frequency: 412,
    examples: [
      { sentence: "Tepi sungai", translation: "Берег реки" },
      { sentence: "Tepi jalan", translation: "Край дороги" },
    ],
    lessonIds: [14],
  },

{
    id: 413,
    word: "ujung",
    pronunciation: "/udʒuŋ/",
    translation: "конец, окончание",
    category: "noun",
    frequency: 413,
    examples: [
      { sentence: "Ujung jalan", translation: "Конец улицы" },
      { sentence: "Di ujung", translation: "В конце" },
    ],
    lessonIds: [14],
  },

{
    id: 414,
    word: "pinggir",
    pronunciation: "/piŋɡir/",
    translation: "окраина, край",
    category: "noun",
    frequency: 414,
    examples: [
      { sentence: "Pinggir kota", translation: "Окраина города" },
      { sentence: "Di pinggir", translation: "На краю" },
    ],
    lessonIds: [14],
  },

{
    id: 415,
    word: "sekitar",
    pronunciation: "/sekitar/",
    translation: "вокруг, около",
    category: "preposition",
    frequency: 415,
    examples: [
      { sentence: "Sekitar rumah", translation: "Вокруг дома" },
      { sentence: "Sekitar jam dua", translation: "Около двух часов" },
    ],
    lessonIds: [14],
  },

{
    id: 416,
    word: "sudut",
    pronunciation: "/sudut/",
    translation: "угол",
    category: "noun",
    frequency: 416,
    examples: [
      { sentence: "Sudut jalan", translation: "Угол улицы" },
      { sentence: "Di sudut kamar", translation: "В углу комнаты" },
    ],
    lessonIds: [14],
  },

{
    id: 417,
    word: "tempat",
    pronunciation: "/tempat/",
    translation: "место",
    category: "noun",
    frequency: 417,
    examples: [
      { sentence: "Tempat ini", translation: "Это место" },
      { sentence: "Tempat duduk", translation: "Место (сиденье)" },
    ],
    lessonIds: [14],
  },

{
    id: 418,
    word: "posisi",
    pronunciation: "/posisi/",
    translation: "позиция, положение",
    category: "noun",
    frequency: 418,
    examples: [
      { sentence: "Posisi saya", translation: "Моя позиция" },
      { sentence: "Posisi duduk", translation: "Положение сидя" },
    ],
    lessonIds: [14],
  },

{
    id: 419,
    word: "arah",
    pronunciation: "/arah/",
    translation: "направление",
    category: "noun",
    frequency: 419,
    examples: [
      { sentence: "Arah mana?", translation: "В каком направлении?" },
      { sentence: "Ikuti arah saya", translation: "Следуйте за мной" },
    ],
    lessonIds: [14],
  },

{
    id: 420,
    word: "jurusan",
    pronunciation: "/dʒurusan/",
    translation: "направление, курс",
    category: "noun",
    frequency: 420,
    examples: [
      { sentence: "Jurusan apa?", translation: "Какое направление?" },
      { sentence: "Salah jurusan", translation: "Не то направление" },
    ],
    lessonIds: [14],
  },

{
    id: 421,
    word: "tidur",
    pronunciation: "/tidur/",
    translation: "спать",
    category: "verb",
    frequency: 421,
    examples: [
      { sentence: "Selamat tidur", translation: "Спокойной ночи" },
      { sentence: "Saya mau tidur", translation: "Я хочу спать" },
    ],
    wordFamily: [
      { word: "tidur-tidur", translation: "вздремнуть, полежать" },
      { word: "menidurkan", translation: "укладывать спать" },
      { word: "ditidurkan", translation: "быть уложенным спать" },
      { word: "tertidur", translation: "заснуть (нечаянно)" },
      { word: "tiduran", translation: "прилечь, полежать" },
    ],
    lessonIds: [10, 12],
  },

{
    id: 422,
    word: "bangun",
    pronunciation: "/baŋun/",
    translation: "просыпаться, вставать",
    category: "verb",
    frequency: 422,
    examples: [
      { sentence: "Saya bangun pagi", translation: "Я просыпаюсь утром" },
      { sentence: "Bangun tidur", translation: "Проснуться" },
    ],
    wordFamily: [
      { word: "membangun", translation: "строить, возводить" },
      { word: "dibangun", translation: "быть построенным" },
      { word: "bangunan", translation: "здание, строение" },
      { word: "pembangun", translation: "строитель" },
      { word: "pembangunan", translation: "строительство, развитие" },
    ],
    lessonIds: [8],
  },

{
    id: 423,
    word: "mandi",
    pronunciation: "/mandi/",
    translation: "купаться, принимать душ",
    category: "verb",
    frequency: 423,
    examples: [
      { sentence: "Mandi pagi", translation: "Утренний душ" },
      { sentence: "Saya mandi", translation: "Я принимаю душ" },
    ],
    lessonIds: [10],
  },

{
    id: 424,
    word: "belajar",
    pronunciation: "/beladʒar/",
    translation: "учиться, изучать",
    category: "verb",
    frequency: 424,
    examples: [
      { sentence: "Saya belajar bahasa", translation: "Я изучаю язык" },
      { sentence: "Belajar di rumah", translation: "Учиться дома" },
    ],
    wordFamily: [
      { word: "mengajar", translation: "учить, преподавать" },
      { word: "diajar", translation: "быть обученным" },
      { word: "belajar", translation: "учиться, изучать" },
      { word: "pelajar", translation: "ученик, учащийся" },
      { word: "pengajar", translation: "преподаватель, учитель" },
      { word: "ajaran", translation: "учение, доктрина" },
      { word: "pengajaran", translation: "обучение, преподавание" },
      { word: "pelajaran", translation: "урок, предмет" },
    ],
    lessonIds: [3, 10, 11, 12],
  },

{
    id: 425,
    word: "baca",
    pronunciation: "/batʃa/",
    translation: "читать",
    category: "verb",
    frequency: 425,
    examples: [
      { sentence: "Baca buku", translation: "Читать книгу" },
      { sentence: "Saya baca", translation: "Я читаю" },
    ],
    wordFamily: [
      { word: "membaca", translation: "читать, прочитать" },
      { word: "dibaca", translation: "быть прочитанным" },
      { word: "bacaan", translation: "чтение, текст, чтиво" },
      { word: "pembaca", translation: "читатель" },
      { word: "terbaca", translation: "читаемый, различимый" },
      { word: "pembacaan", translation: "прочтение, чтение вслух" },
    ],
    lessonIds: [10],
  },

{
    id: 427,
    word: "cuci",
    pronunciation: "/tʃutʃi/",
    translation: "мыть, стирать",
    category: "verb",
    frequency: 427,
    examples: [
      { sentence: "Cuci tangan", translation: "Мыть руки" },
      { sentence: "Cuci baju", translation: "Стирать одежду" },
    ],
    wordFamily: [
      { word: "mencuci", translation: "мыть, стирать" },
      { word: "dicuci", translation: "быть вымытым" },
      { word: "pencuci", translation: "моющее средство" },
      { word: "cucian", translation: "стирка; грязное бельё" },
      { word: "pencucian", translation: "стирка, мытьё" },
    ],
    lessonIds: [10],
  },

{
    id: 428,
    word: "bersihkan",
    pronunciation: "/bersihkan/",
    translation: "убирать, чистить",
    category: "verb",
    frequency: 428,
    examples: [
      { sentence: "Bersihkan kamar", translation: "Убрать комнату" },
      { sentence: "Bersihkan meja", translation: "Протереть стол" },
    ],
    wordFamily: [
      { word: "membersihkan", translation: "чистить, убирать" },
      { word: "dibersihkan", translation: "быть очищенным" },
      { word: "kebersihan", translation: "чистота" },
      { word: "pembersih", translation: "чистящее средство" },
      { word: "bersih-bersih", translation: "уборка, приборка" },
    ],
    lessonIds: [10],
  },

{
    id: 429,
    word: "beres",
    pronunciation: "/bərəs/",
    translation: "готово, в порядке",
    category: "adjective",
    frequency: 429,
    examples: [
      { sentence: "Sudah beres", translation: "Уже готово" },
      { sentence: "Bereskan semua", translation: "Убери всё" },
    ],
    lessonIds: [10],
  },

{
    id: 430,
    word: "pakai",
    pronunciation: "/pakai/",
    translation: "использовать, носить",
    category: "verb",
    frequency: 430,
    examples: [
      { sentence: "Pakai baju ini", translation: "Надень эту рубашку" },
      { sentence: "Pakai apa?", translation: "Что надеть?" },
    ],
    wordFamily: [
      { word: "memakai", translation: "использовать, надевать" },
      { word: "dipakai", translation: "используемый, носимый" },
      { word: "pakaian", translation: "одежда" },
      { word: "pemakaian", translation: "использование, применение" },
      { word: "terpakai", translation: "использованный, ношеный" },
      { word: "berpakai", translation: "одеваться, носить одежду" },
    ],
    lessonIds: [10],
  },

{
    id: 431,
    word: "lepas",
    pronunciation: "/ləpas/",
    translation: "снимать, отпускать",
    category: "verb",
    frequency: 431,
    examples: [
      { sentence: "Lepas sepatu", translation: "Сними обувь" },
      { sentence: "Jangan lepas", translation: "Не отпускай" },
    ],
    lessonIds: [10],
  },

{
    id: 432,
    word: "ganti",
    pronunciation: "/ɡanti/",
    translation: "менять, заменять",
    category: "verb",
    frequency: 432,
    examples: [
      { sentence: "Ganti baju", translation: "Переодеться" },
      { sentence: "Ganti uang", translation: "Разменять деньги" },
    ],
    lessonIds: [10],
  },

{
    id: 433,
    word: "simpan",
    pronunciation: "/simpan/",
    translation: "хранить, убирать",
    category: "verb",
    frequency: 433,
    examples: [
      { sentence: "Simpan buku ini", translation: "Убери эту книгу" },
      { sentence: "Simpan rapi", translation: "Хранить аккуратно" },
    ],
    lessonIds: [10],
  },

{
    id: 434,
    word: "antar",
    pronunciation: "/antar/",
    translation: "провожать, сопровождать",
    category: "verb",
    frequency: 434,
    examples: [
      { sentence: "Saya antar kamu", translation: "Я провожу тебя" },
      { sentence: "Antar ke sekolah", translation: "Отвести в школу" },
    ],
    lessonIds: [10],
  },

{
    id: 435,
    word: "jemput",
    pronunciation: "/dʒəmput/",
    translation: "встречать, забирать",
    category: "verb",
    frequency: 435,
    examples: [
      { sentence: "Jemput saya", translation: "Забери меня" },
      { sentence: "Saya jemput anak", translation: "Я забираю ребёнка" },
    ],
    lessonIds: [10],
  },

{
    id: 438,
    word: "pulang",
    pronunciation: "/pulaŋ/",
    translation: "возвращаться домой",
    category: "verb",
    frequency: 438,
    examples: [
      { sentence: "Saya pulang", translation: "Я иду домой" },
      { sentence: "Sudah pulang", translation: "Уже дома" },
    ],
    lessonIds: [10],
  },

{
    id: 439,
    word: "berangkat",
    pronunciation: "/bəraŋkat/",
    translation: "отправляться, уезжать",
    category: "verb",
    frequency: 439,
    examples: [
      {
        sentence: "Saya berangkat kerja",
        translation: "Я отправляюсь на работу",
      },
      {
        sentence: "Berangkat jam berapa?",
        translation: "Во сколько отправление?",
      },
    ],
    lessonIds: [10, 14],
  },

{
    id: 440,
    word: "siap",
    pronunciation: "/siap/",
    translation: "готовый, готов",
    category: "adjective",
    frequency: 440,
    examples: [
      { sentence: "Saya siap", translation: "Я готов" },
      { sentence: "Semua siap", translation: "Всё готово" },
    ],
    lessonIds: [10],
  },

{
    id: 441,
    word: "kucing",
    pronunciation: "/kutʃiŋ/",
    translation: "кошка",
    category: "noun",
    frequency: 441,
    examples: [
      { sentence: "Kucing saya", translation: "Моя кошка" },
      { sentence: "Kucing kecil", translation: "Маленькая кошка" },
    ],
    lessonIds: [6, 13],
  },

{
    id: 442,
    word: "anjing",
    pronunciation: "/andʒiŋ/",
    translation: "собака",
    category: "noun",
    frequency: 442,
    examples: [
      { sentence: "Anjing besar", translation: "Большая собака" },
      { sentence: "Anjing saya", translation: "Моя собака" },
    ],
    lessonIds: [13],
  },

{
    id: 443,
    word: "ikan",
    pronunciation: "/ikan/",
    translation: "рыба",
    category: "noun",
    frequency: 443,
    examples: [
      { sentence: "Ikan besar", translation: "Большая рыба" },
      { sentence: "Makan ikan", translation: "Есть рыбу" },
    ],
    lessonIds: [3],
  },

{
    id: 444,
    word: "burung",
    pronunciation: "/buruŋ/",
    translation: "птица",
    category: "noun",
    frequency: 444,
    examples: [
      { sentence: "Burung terbang", translation: "Птица летит" },
      { sentence: "Burung kecil", translation: "Маленькая птица" },
    ],
    lessonIds: [13],
  },

{
    id: 445,
    word: "kuda",
    pronunciation: "/kuda/",
    translation: "лошадь",
    category: "noun",
    frequency: 445,
    examples: [
      { sentence: "Kuda putih", translation: "Белая лошадь" },
      { sentence: "Naik kuda", translation: "Ездить верхом" },
    ],
    lessonIds: [13],
  },

{
    id: 446,
    word: "ayam",
    pronunciation: "/ajam/",
    translation: "курица",
    category: "noun",
    frequency: 446,
    examples: [
      { sentence: "Ayam goreng", translation: "Жареная курица" },
      { sentence: "Kandang ayam", translation: "Курятник" },
    ],
    lessonIds: [13],
  },

{
    id: 447,
    word: "bebek",
    pronunciation: "/bebeʔ/",
    translation: "утка",
    category: "noun",
    frequency: 447,
    examples: [
      { sentence: "Bebek berenang", translation: "Утка плавает" },
      { sentence: "Bebek goreng", translation: "Жареная утка" },
    ],
    lessonIds: [13],
  },

{
    id: 448,
    word: "sapi",
    pronunciation: "/sapi/",
    translation: "корова",
    category: "noun",
    frequency: 448,
    examples: [
      { sentence: "Sapi perah", translation: "Дойная корова" },
      { sentence: "Daging sapi", translation: "Говядина" },
    ],
    lessonIds: [13],
  },

{
    id: 449,
    word: "kambing",
    pronunciation: "/kambiŋ/",
    translation: "коза",
    category: "noun",
    frequency: 449,
    examples: [
      { sentence: "Kambing gunung", translation: "Горная коза" },
      { sentence: "Daging kambing", translation: "Козлятина" },
    ],
    lessonIds: [13],
  },

{
    id: 450,
    word: "ular",
    pronunciation: "/ular/",
    translation: "змея",
    category: "noun",
    frequency: 450,
    examples: [
      { sentence: "Ular besar", translation: "Большая змея" },
      { sentence: "Hati-hati ular", translation: "Осторожно, змея" },
    ],
    lessonIds: [13],
  },

{
    id: 451,
    word: "harimau",
    pronunciation: "/harimau/",
    translation: "тигр",
    category: "noun",
    frequency: 451,
    examples: [
      { sentence: "Harimau Sumatra", translation: "Суматранский тигр" },
      { sentence: "Harimau besar", translation: "Большой тигр" },
    ],
    lessonIds: [13],
  },

{
    id: 452,
    word: "gajah",
    pronunciation: "/ɡadʒah/",
    translation: "слон",
    category: "noun",
    frequency: 452,
    examples: [
      { sentence: "Gajah besar", translation: "Большой слон" },
      { sentence: "Gajah Sumatra", translation: "Суматранский слон" },
    ],
    lessonIds: [13],
  },

{
    id: 453,
    word: "monyet",
    pronunciation: "/moɲət/",
    translation: "обезьяна",
    category: "noun",
    frequency: 453,
    examples: [
      { sentence: "Monyet lucu", translation: "Смешная обезьяна" },
      { sentence: "Monyet di hutan", translation: "Обезьяна в лесу" },
    ],
    lessonIds: [13],
  },

{
    id: 454,
    word: "nyamuk",
    pronunciation: "/ɲamuʔ/",
    translation: "комар",
    category: "noun",
    frequency: 454,
    examples: [
      { sentence: "Banyak nyamuk", translation: "Много комаров" },
      { sentence: "Obat nyamuk", translation: "Средство от комаров" },
    ],
    lessonIds: [13],
  },

{
    id: 455,
    word: "kupu-kupu",
    pronunciation: "/kupu-kupu/",
    translation: "бабочка",
    category: "noun",
    frequency: 455,
    examples: [
      { sentence: "Kupu-kupu cantik", translation: "Красивая бабочка" },
      { sentence: "Kupu-kupu terbang", translation: "Бабочка летит" },
    ],
    lessonIds: [13],
  },

{
    id: 456,
    word: "lebah",
    pronunciation: "/ləbah/",
    translation: "пчела",
    category: "noun",
    frequency: 456,
    examples: [
      { sentence: "Lebah madu", translation: "Медовая пчела" },
      { sentence: "Sengatan lebah", translation: "Укус пчелы" },
    ],
    lessonIds: [13],
  },

{
    id: 457,
    word: "semut",
    pronunciation: "/səmut/",
    translation: "муравей",
    category: "noun",
    frequency: 457,
    examples: [
      { sentence: "Semut kecil", translation: "Маленький муравей" },
      { sentence: "Semut merah", translation: "Красный муравей" },
    ],
    lessonIds: [13],
  },

{
    id: 458,
    word: "kura-kura",
    pronunciation: "/kura-kura/",
    translation: "черепаха",
    category: "noun",
    frequency: 458,
    examples: [
      { sentence: "Kura-kura lambat", translation: "Медленная черепаха" },
      { sentence: "Kura-kura laut", translation: "Морская черепаха" },
    ],
    lessonIds: [13],
  },

{
    id: 459,
    word: "buaya",
    pronunciation: "/buaja/",
    translation: "крокодил",
    category: "noun",
    frequency: 459,
    examples: [
      { sentence: "Buaya besar", translation: "Большой крокодил" },
      { sentence: "Buaya di sungai", translation: "Крокодил в реке" },
    ],
    lessonIds: [13],
  },

{
    id: 461,
    word: "sepeda",
    pronunciation: "/sepeda/",
    translation: "велосипед",
    category: "noun",
    frequency: 461,
    examples: [
      { sentence: "Naik sepeda", translation: "Ехать на велосипеде" },
      { sentence: "Sepeda baru", translation: "Новый велосипед" },
    ],
    lessonIds: [13],
  },

{
    id: 462,
    word: "kereta",
    pronunciation: "/kereta/",
    translation: "поезд",
    category: "noun",
    frequency: 462,
    examples: [
      { sentence: "Naik kereta", translation: "Ехать на поезде" },
      { sentence: "Stasiun kereta", translation: "Железнодорожная станция" },
    ],
    lessonIds: [14],
  },

{
    id: 463,
    word: "pesawat",
    pronunciation: "/pesawat/",
    translation: "самолёт",
    category: "noun",
    frequency: 463,
    examples: [
      { sentence: "Naik pesawat", translation: "Лететь на самолёте" },
      { sentence: "Pesawat terbang", translation: "Самолёт летит" },
    ],
    lessonIds: [14],
  },

{
    id: 464,
    word: "kapal",
    pronunciation: "/kapal/",
    translation: "корабль",
    category: "noun",
    frequency: 464,
    examples: [
      { sentence: "Kapal laut", translation: "Морской корабль" },
      { sentence: "Naik kapal", translation: "Плыть на корабле" },
    ],
    lessonIds: [14],
  },

{
    id: 465,
    word: "bis",
    pronunciation: "/bis/",
    translation: "автобус",
    category: "noun",
    frequency: 465,
    examples: [
      { sentence: "Naik bis", translation: "Ехать на автобусе" },
      { sentence: "Halte bis", translation: "Автобусная остановка" },
    ],
    lessonIds: [14],
  },

{
    id: 466,
    word: "taksi",
    pronunciation: "/taksi/",
    translation: "такси",
    category: "noun",
    frequency: 466,
    examples: [
      { sentence: "Naik taksi", translation: "Ехать на такси" },
      { sentence: "Panggil taksi", translation: "Вызвать такси" },
    ],
    lessonIds: [14],
  },

{
    id: 467,
    word: "motor",
    pronunciation: "/motor/",
    translation: "мотоцикл",
    category: "noun",
    frequency: 467,
    examples: [
      { sentence: "Naik motor", translation: "Ехать на мотоцикле" },
      { sentence: "Motor baru", translation: "Новый мотоцикл" },
    ],
    lessonIds: [14],
  },

{
    id: 468,
    word: "becak",
    pronunciation: "/betʃaʔ/",
    translation: "велорикша",
    category: "noun",
    frequency: 468,
    examples: [
      { sentence: "Naik becak", translation: "Ехать на велорикше" },
      { sentence: "Becak tradisional", translation: "Традиционная велорикша" },
    ],
    lessonIds: [14],
  },

{
    id: 469,
    word: "ojek",
    pronunciation: "/odʒəʔ/",
    translation: "мототакси",
    category: "noun",
    frequency: 469,
    examples: [
      { sentence: "Naik ojek", translation: "Ехать на мототакси" },
      { sentence: "Ojek online", translation: "Онлайн мототакси" },
    ],
    lessonIds: [14],
  },

{
    id: 470,
    word: "bensin",
    pronunciation: "/bensin/",
    translation: "бензин",
    category: "noun",
    frequency: 470,
    examples: [
      { sentence: "Isi bensin", translation: "Заправить бензин" },
      { sentence: "Harga bensin", translation: "Цена бензина" },
    ],
    lessonIds: [14],
  },

{
    id: 471,
    word: "ban",
    pronunciation: "/ban/",
    translation: "шина",
    category: "noun",
    frequency: 471,
    examples: [
      { sentence: "Ban kempes", translation: "Спущенная шина" },
      { sentence: "Ganti ban", translation: "Заменить шину" },
    ],
    lessonIds: [14],
  },

{
    id: 472,
    word: "kecelakaan",
    pronunciation: "/ketʃelakaan/",
    translation: "авария, несчастный случай",
    category: "noun",
    frequency: 472,
    examples: [
      { sentence: "Kecelakaan lalu lintas", translation: "Дорожная авария" },
      { sentence: "Hati-hati kecelakaan", translation: "Осторожно, авария" },
    ],
    lessonIds: [14],
  },

{
    id: 473,
    word: "macet",
    pronunciation: "/matʃət/",
    translation: "пробка, затор",
    category: "adjective",
    frequency: 473,
    examples: [
      { sentence: "Jalan macet", translation: "Дорожная пробка" },
      { sentence: "Macet parah", translation: "Сильная пробка" },
    ],
    lessonIds: [14],
  },

{
    id: 474,
    word: "tiket",
    pronunciation: "/tikət/",
    translation: "билет",
    category: "noun",
    frequency: 474,
    examples: [
      { sentence: "Beli tiket", translation: "Купить билет" },
      { sentence: "Tiket pesawat", translation: "Авиабилет" },
    ],
    lessonIds: [14],
  },

{
    id: 475,
    word: "koper",
    pronunciation: "/kopər/",
    translation: "чемодан",
    category: "noun",
    frequency: 475,
    examples: [
      { sentence: "Koper besar", translation: "Большой чемодан" },
      { sentence: "Bawa koper", translation: "Нести чемодан" },
    ],
    lessonIds: [14],
  },

{
    id: 476,
    word: "perjalanan",
    pronunciation: "/perdʒalanan/",
    translation: "путешествие, поездка",
    category: "noun",
    frequency: 476,
    examples: [
      { sentence: "Perjalanan jauh", translation: "Далёкая поездка" },
      { sentence: "Selamat perjalanan", translation: "Счастливого пути" },
    ],
    wordFamily: [
      { word: "berjalan", translation: "идти, ходить" },
      { word: "menjalan", translation: "проходить, выполняться" },
      { word: "menjalankan", translation: "выполнять, запускать" },
      { word: "perjalanan", translation: "путешествие, поездка" },
      { word: "pejalan", translation: "пешеход" },
      { word: "sejalan", translation: "по пути, согласованно" },
      { word: "jalan-jalan", translation: "гулять, прогуливаться" },
    ],
    lessonIds: [14],
  },

{
    id: 477,
    word: "wisata",
    pronunciation: "/wisata/",
    translation: "туризм, экскурсия",
    category: "noun",
    frequency: 477,
    examples: [
      { sentence: "Wisata alam", translation: "Природный туризм" },
      { sentence: "Tempat wisata", translation: "Туристическое место" },
    ],
    lessonIds: [14],
  },

{
    id: 478,
    word: "peta",
    pronunciation: "/pəta/",
    translation: "карта",
    category: "noun",
    frequency: 478,
    examples: [
      { sentence: "Peta kota", translation: "Карта города" },
      { sentence: "Lihat peta", translation: "Посмотреть на карту" },
    ],
    lessonIds: [14],
  },

{
    id: 479,
    word: "paspor",
    pronunciation: "/paspor/",
    translation: "паспорт",
    category: "noun",
    frequency: 479,
    examples: [
      { sentence: "Paspor saya", translation: "Мой паспорт" },
      { sentence: "Cek paspor", translation: "Проверка паспорта" },
    ],
    lessonIds: [14],
  },

{
    id: 480,
    word: "bagasi",
    pronunciation: "/baɡasi/",
    translation: "багаж",
    category: "noun",
    frequency: 480,
    examples: [
      { sentence: "Ambil bagasi", translation: "Забрать багаж" },
      { sentence: "Bagasi berat", translation: "Тяжёлый багаж" },
    ],
    lessonIds: [14],
  },

{
    id: 481,
    word: "panas",
    pronunciation: "/panas/",
    translation: "жаркий, горячий",
    category: "adjective",
    frequency: 481,
    examples: [
      { sentence: "Hari ini panas", translation: "Сегодня жарко" },
      { sentence: "Kopi panas", translation: "Горячий кофе" },
    ],
    lessonIds: [13],
  },

{
    id: 482,
    word: "dingin",
    pronunciation: "/diŋin/",
    translation: "холодный",
    category: "adjective",
    frequency: 482,
    examples: [
      { sentence: "Air dingin", translation: "Холодная вода" },
      { sentence: "Hari ini dingin", translation: "Сегодня холодно" },
    ],
    lessonIds: [13],
  },

{
    id: 483,
    word: "angin",
    pronunciation: "/aŋin/",
    translation: "ветер",
    category: "noun",
    frequency: 483,
    examples: [
      { sentence: "Angin kencang", translation: "Сильный ветер" },
      { sentence: "Ada angin", translation: "Ветрено" },
    ],
    lessonIds: [13],
  },

{
    id: 484,
    word: "awan",
    pronunciation: "/awan/",
    translation: "облако",
    category: "noun",
    frequency: 484,
    examples: [
      { sentence: "Awan putih", translation: "Белые облака" },
      { sentence: "Awan gelap", translation: "Тёмные облака" },
    ],
    lessonIds: [13],
  },

{
    id: 485,
    word: "gempa",
    pronunciation: "/ɡəmpa/",
    translation: "землетрясение",
    category: "noun",
    frequency: 485,
    examples: [
      { sentence: "Gempa bumi", translation: "Землетрясение" },
      { sentence: "Ada gempa", translation: "Было землетрясение" },
    ],
    lessonIds: [13],
  },

{
    id: 486,
    word: "cerah",
    pronunciation: "/tʃərah/",
    translation: "ясный, солнечный",
    category: "adjective",
    frequency: 486,
    examples: [
      { sentence: "Cuaca cerah", translation: "Ясная погода" },
      { sentence: "Hari ini cerah", translation: "Сегодня солнечно" },
    ],
    lessonIds: [13],
  },

{
    id: 487,
    word: "mendung",
    pronunciation: "/mənduŋ/",
    translation: "облачный, пасмурный",
    category: "adjective",
    frequency: 487,
    examples: [
      { sentence: "Cuaca mendung", translation: "Пасмурная погода" },
      { sentence: "Mendung gelap", translation: "Тёмные тучи" },
    ],
    lessonIds: [13],
  },

{
    id: 488,
    word: "sejuk",
    pronunciation: "/sedʒuʔ/",
    translation: "прохладный",
    category: "adjective",
    frequency: 488,
    examples: [
      { sentence: "Udara sejuk", translation: "Прохладный воздух" },
      { sentence: "Di gunung sejuk", translation: "В горах прохладно" },
    ],
    lessonIds: [13],
  },

{
    id: 489,
    word: "lembab",
    pronunciation: "/lembab/",
    translation: "влажный",
    category: "adjective",
    frequency: 489,
    examples: [
      { sentence: "Cuaca lembab", translation: "Влажная погода" },
      { sentence: "Udara lembab", translation: "Влажный воздух" },
    ],
    lessonIds: [13],
  },

{
    id: 490,
    word: "cuaca",
    pronunciation: "/tʃuatʃa/",
    translation: "погода",
    category: "noun",
    frequency: 490,
    examples: [
      { sentence: "Cuaca baik", translation: "Хорошая погода" },
      { sentence: "Cuaca buruk", translation: "Плохая погода" },
    ],
    lessonIds: [13],
  },

{
    id: 491,
    word: "musim",
    pronunciation: "/musim/",
    translation: "сезон, время года",
    category: "noun",
    frequency: 491,
    examples: [
      { sentence: "Musim hujan", translation: "Сезон дождей" },
      { sentence: "Musim kemarau", translation: "Сухой сезон" },
    ],
    lessonIds: [13],
  },

{
    id: 492,
    word: "musim panas",
    pronunciation: "/musim panas/",
    translation: "лето",
    category: "noun",
    frequency: 492,
    examples: [
      { sentence: "Musim panas lalu", translation: "Прошлым летом" },
      { sentence: "Liburan musim panas", translation: "Летние каникулы" },
    ],
    lessonIds: [13],
  },

{
    id: 493,
    word: "musim dingin",
    pronunciation: "/musim diŋin/",
    translation: "зима",
    category: "noun",
    frequency: 493,
    examples: [
      { sentence: "Musim dingin salju", translation: "Зимой снег" },
      { sentence: "Jaket musim dingin", translation: "Зимняя куртка" },
    ],
    lessonIds: [13],
  },

{
    id: 494,
    word: "musim semi",
    pronunciation: "/musim səmi/",
    translation: "весна",
    category: "noun",
    frequency: 494,
    examples: [
      { sentence: "Bunga di musim semi", translation: "Цветы весной" },
      { sentence: "Musim semi tiba", translation: "Весна пришла" },
    ],
    lessonIds: [13],
  },

{
    id: 495,
    word: "musim gugur",
    pronunciation: "/musim ɡuɡur/",
    translation: "осень",
    category: "noun",
    frequency: 495,
    examples: [
      { sentence: "Daun gugur", translation: "Опавшие листья" },
      { sentence: "Musim gugur indah", translation: "Осень красива" },
    ],
    lessonIds: [13],
  },

{
    id: 496,
    word: "iklim",
    pronunciation: "/iklim/",
    translation: "климат",
    category: "noun",
    frequency: 496,
    examples: [
      { sentence: "Iklim tropis", translation: "Тропический климат" },
      { sentence: "Iklim Indonesia", translation: "Климат Индонезии" },
    ],
    lessonIds: [13],
  },

{
    id: 497,
    word: "suhu",
    pronunciation: "/suhu/",
    translation: "температура",
    category: "noun",
    frequency: 497,
    examples: [
      { sentence: "Suhu tinggi", translation: "Высокая температура" },
      { sentence: "Suhu berapa?", translation: "Какая температура?" },
    ],
    lessonIds: [13],
  },

{
    id: 498,
    word: "derajat",
    pronunciation: "/deradʒat/",
    translation: "градус",
    category: "noun",
    frequency: 498,
    examples: [
      { sentence: "Tiga puluh derajat", translation: "Тридцать градусов" },
      {
        sentence: "Naik lima derajat",
        translation: "Поднялось на пять градусов",
      },
    ],
    lessonIds: [7, 13],
  },

{
    id: 499,
    word: "topan",
    pronunciation: "/topan/",
    translation: "тайфун, ураган",
    category: "noun",
    frequency: 499,
    examples: [
      { sentence: "Topan besar", translation: "Большой тайфун" },
      { sentence: "Peringatan topan", translation: "Предупреждение о тайфуне" },
    ],
    lessonIds: [13],
  },

{
    id: 500,
    word: "banjir",
    pronunciation: "/bandʒir/",
    translation: "наводнение",
    category: "noun",
    frequency: 500,
    examples: [
      { sentence: "Banjir besar", translation: "Большое наводнение" },
      {
        sentence: "Hujan sebabkan banjir",
        translation: "Дождь вызвал наводнение",
      },
    ],
    lessonIds: [13],
  },

{
    id: 501,
    word: "kaki",
    pronunciation: "/kaki/",
    translation: "нога, ступня",
    category: "noun",
    frequency: 501,
    examples: [
      { sentence: "Jalan kaki", translation: "Идти пешком" },
      { sentence: "Kaki saya sakit", translation: "Моя нога болит" },
    ],
    lessonIds: [14],
  },

{
    id: 502,
    word: "mata",
    pronunciation: "/mata/",
    translation: "глаз",
    category: "noun",
    frequency: 502,
    examples: [
      { sentence: "Mata coklat", translation: "Карие глаза" },
      { sentence: "Tutup mata", translation: "Закрыть глаза" },
    ],
    lessonIds: [13],
  },

{
    id: 503,
    word: "tangan",
    pronunciation: "/taŋan/",
    translation: "рука, кисть",
    category: "noun",
    frequency: 503,
    examples: [
      { sentence: "Cuci tangan", translation: "Мыть руки" },
      { sentence: "Tangan kanan", translation: "Правая рука" },
    ],
    lessonIds: [10],
  },

{
    id: 504,
    word: "minuman",
    pronunciation: "/minuman/",
    translation: "напиток",
    category: "noun",
    frequency: 504,
    examples: [
      { sentence: "Minuman dingin", translation: "Холодный напиток" },
      { sentence: "Minuman manis", translation: "Сладкий напиток" },
    ],
    wordFamily: [
      { word: "meminum", translation: "пить, выпивать" },
      { word: "diminum", translation: "быть выпитым" },
      { word: "minuman", translation: "напиток" },
      { word: "peminum", translation: "пьяница, любитель выпить" },
      { word: "terminum", translation: "быть случайно выпитым" },
    ],
    lessonIds: [15],
  }

];