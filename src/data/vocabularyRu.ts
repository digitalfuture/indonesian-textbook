import type { DictionaryWord } from "../utils/types";

export const vocabularyRu: DictionaryWord[] = [
  {
    id: 1,
    word: "здравствуйте",
    pronunciation: "/zdravstvujtje/",
    translation: "halo (formal), selamat...",
    category: "interjection",
    frequency: 1,
    examples: [
      { sentence: "Здравствуйте!", translation: "Halo! (salam formal)" },
      { sentence: "Здравствуйте, как дела?", translation: "Halo, apa kabar?" },
    ],
    wordFamily: [
      { word: "здоровье", translation: "kesehatan" },
    ],
    lessonIds: [1],
  },

  {
    id: 2,
    word: "привет",
    pronunciation: "/privjet/",
    translation: "hai (informal)",
    category: "interjection",
    frequency: 2,
    examples: [
      { sentence: "Привет!", translation: "Hai!" },
      { sentence: "Привет, как ты?", translation: "Hai, apa kabar?" },
    ],
    wordFamily: [
      { word: "приветствие", translation: "salam, ucapan salam" },
    ],
    lessonIds: [1],
  },

  {
    id: 3,
    word: "до свидания",
    pronunciation: "/do svidanija/",
    translation: "sampai jumpa (formal)",
    category: "interjection",
    frequency: 3,
    examples: [
      { sentence: "До свидания!", translation: "Sampai jumpa!" },
      { sentence: "До свидания, до встречи!", translation: "Sampai jumpa lagi!" },
    ],
    wordFamily: [
      { word: "свидание", translation: "pertemuan, kencan" },
    ],
    lessonIds: [1],
  },

  {
    id: 4,
    word: "пока",
    pronunciation: "/poka/",
    translation: "dadah (informal)",
    category: "interjection",
    frequency: 4,
    examples: [
      { sentence: "Пока!", translation: "Dadah!" },
      { sentence: "Ну, пока!", translation: "Yah, dadah!" },
    ],
    lessonIds: [1],
  },

  {
    id: 5,
    word: "спасибо",
    pronunciation: "/spasibo/",
    translation: "terima kasih",
    category: "interjection",
    frequency: 5,
    examples: [
      { sentence: "Спасибо!", translation: "Terima kasih!" },
      { sentence: "Большое спасибо!", translation: "Terima kasih banyak!" },
    ],
    wordFamily: [
      { word: "благодарить", translation: "berterima kasih" },
      { word: "благодарность", translation: "rasa terima kasih" },
    ],
    lessonIds: [1],
  },

  {
    id: 6,
    word: "пожалуйста",
    pronunciation: "/poʐalujsta/",
    translation: "tolong; sama-sama",
    category: "interjection",
    frequency: 6,
    examples: [
      { sentence: "Спасибо! — Пожалуйста!", translation: "Terima kasih! — Sama-sama!" },
      { sentence: "Пожалуйста, помогите!", translation: "Tolong bantu saya!" },
    ],
    lessonIds: [1],
  },

  {
    id: 7,
    word: "извините",
    pronunciation: "/izvinitje/",
    translation: "maaf, permisi",
    category: "interjection",
    frequency: 7,
    examples: [
      { sentence: "Извините, вы не знаете?", translation: "Maaf, Anda tidak tahu?" },
      { sentence: "Извините, я опоздал", translation: "Maaf, saya terlambat" },
    ],
    wordFamily: [
      { word: "извинять", translation: "memaafkan" },
      { word: "извинение", translation: "permintaan maaf" },
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
      { sentence: "Да, конечно", translation: "Ya, tentu" },
      { sentence: "Да, я понимаю", translation: "Ya, saya mengerti" },
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
      { sentence: "Нет, спасибо", translation: "Tidak, terima kasih" },
      { sentence: "Нет, я не хочу", translation: "Tidak, saya tidak mau" },
    ],
    lessonIds: [1],
  },

  {
    id: 10,
    word: "как",
    pronunciation: "/kak/",
    translation: "bagaimana",
    category: "adverb",
    frequency: 10,
    examples: [
      { sentence: "Как дела?", translation: "Apa kabar?" },
      { sentence: "Как тебя зовут?", translation: "Siapa namamu?" },
    ],
    wordFamily: [
      { word: "какой", translation: "yang mana, apa" },
      { word: "как-то", translation: "entah bagaimana" },
    ],
    lessonIds: [1],
  },

  {
    id: 11,
    word: "я",
    pronunciation: "/ja/",
    translation: "saya",
    category: "pronoun",
    frequency: 11,
    examples: [
      { sentence: "Я студент", translation: "Saya mahasiswa" },
      { sentence: "Я из России", translation: "Saya dari Rusia" },
    ],
    wordFamily: [
      { word: "меня", translation: "saya (milik)" },
      { word: "мне", translation: "saya (kepada)" },
    ],
    lessonIds: [1],
  },

  {
    id: 12,
    word: "ты",
    pronunciation: "/tɨ/",
    translation: "kamu (informal)",
    category: "pronoun",
    frequency: 12,
    examples: [
      { sentence: "Ты хороший друг", translation: "Kamu teman baik" },
      { sentence: "Как ты?", translation: "Apa kabar kamu?" },
    ],
    wordFamily: [
      { word: "тебя", translation: "kamu (milik)" },
      { word: "тебе", translation: "kamu (kepada)" },
    ],
    lessonIds: [1],
  },

  {
    id: 13,
    word: "он",
    pronunciation: "/on/",
    translation: "dia (laki-laki)",
    category: "pronoun",
    frequency: 13,
    examples: [
      { sentence: "Он учитель", translation: "Dia guru" },
      { sentence: "Он здесь", translation: "Dia di sini" },
    ],
    wordFamily: [
      { word: "его", translation: "dia (milik laki-laki)" },
    ],
    lessonIds: [2],
  },

  {
    id: 14,
    word: "она",
    pronunciation: "/ona/",
    translation: "dia (perempuan)",
    category: "pronoun",
    frequency: 14,
    examples: [
      { sentence: "Она красивая", translation: "Dia cantik" },
      { sentence: "Она дома", translation: "Dia di rumah" },
    ],
    wordFamily: [
      { word: "её", translation: "dia (milik perempuan)" },
    ],
    lessonIds: [2],
  },

  {
    id: 15,
    word: "мы",
    pronunciation: "/mɨ/",
    translation: "kami, kita",
    category: "pronoun",
    frequency: 15,
    examples: [
      { sentence: "Мы вместе", translation: "Kita bersama" },
      { sentence: "Мы учимся", translation: "Kami belajar" },
    ],
    wordFamily: [
      { word: "нас", translation: "kami (milik)" },
      { word: "нам", translation: "kami (kepada)" },
    ],
    lessonIds: [2],
  },

  {
    id: 16,
    word: "вы",
    pronunciation: "/vɨ/",
    translation: "Anda, kalian",
    category: "pronoun",
    frequency: 16,
    examples: [
      { sentence: "Вы говорите по-русски?", translation: "Anda bicara bahasa Rusia?" },
      { sentence: "Вы здесь работаете?", translation: "Anda bekerja di sini?" },
    ],
    wordFamily: [
      { word: "вас", translation: "Anda (milik)" },
      { word: "вам", translation: "Anda (kepada)" },
    ],
    lessonIds: [2],
  },

  {
    id: 17,
    word: "они",
    pronunciation: "/oni/",
    translation: "mereka",
    category: "pronoun",
    frequency: 17,
    examples: [
      { sentence: "Они пришли", translation: "Mereka datang" },
      { sentence: "Они мои друзья", translation: "Mereka teman saya" },
    ],
    wordFamily: [
      { word: "их", translation: "mereka (milik)" },
    ],
    lessonIds: [2],
  },

  {
    id: 18,
    word: "кто",
    pronunciation: "/kto/",
    translation: "siapa",
    category: "adverb",
    frequency: 18,
    examples: [
      { sentence: "Кто это?", translation: "Siapa ini?" },
      { sentence: "Кто ты?", translation: "Siapa kamu?" },
    ],
    wordFamily: [
      { word: "кто-то", translation: "seseorang" },
      { word: "никто", translation: "tidak seorang pun" },
    ],
    lessonIds: [2],
  },

  {
    id: 19,
    word: "что",
    pronunciation: "/tɕto/",
    translation: "apa",
    category: "adverb",
    frequency: 19,
    examples: [
      { sentence: "Что это?", translation: "Apa ini?" },
      { sentence: "Что ты делаешь?", translation: "Apa yang kamu lakukan?" },
    ],
    wordFamily: [
      { word: "что-то", translation: "sesuatu" },
      { word: "ничто", translation: "tidak ada apa-apa" },
    ],
    lessonIds: [2],
  },

  {
    id: 20,
    word: "где",
    pronunciation: "/ɡdje/",
    translation: "di mana",
    category: "adverb",
    frequency: 20,
    examples: [
      { sentence: "Где туалет?", translation: "Di mana toilet?" },
      { sentence: "Где ты живёшь?", translation: "Di mana kamu tinggal?" },
    ],
    lessonIds: [2],
  },

  {
    id: 21,
    word: "когда",
    pronunciation: "/koɡda/",
    translation: "kapan",
    category: "adverb",
    frequency: 21,
    examples: [
      { sentence: "Когда ты придёшь?", translation: "Kapan kamu datang?" },
      { sentence: "Когда урок?", translation: "Kapan pelajarannya?" },
    ],
    lessonIds: [2],
  },

  {
    id: 22,
    word: "почему",
    pronunciation: "/potɕjemu/",
    translation: "mengapa",
    category: "adverb",
    frequency: 22,
    examples: [
      { sentence: "Почему ты не идёшь?", translation: "Kenapa kamu tidak pergi?" },
      { sentence: "Почему?", translation: "Mengapa?" },
    ],
    lessonIds: [2],
  },

  {
    id: 23,
    word: "говорить",
    pronunciation: "/ɡovoritʲ/",
    translation: "bicara, mengatakan",
    category: "verb",
    frequency: 23,
    examples: [
      { sentence: "Я говорю по-русски", translation: "Saya bicara bahasa Rusia" },
      { sentence: "Что ты говоришь?", translation: "Apa yang kamu katakan?" },
    ],
    wordFamily: [
      { word: "сказать", translation: "berkata" },
      { word: "разговор", translation: "percakapan" },
    ],
    lessonIds: [2],
  },

  {
    id: 24,
    word: "делать",
    pronunciation: "/djelatʲ/",
    translation: "melakukan, membuat",
    category: "verb",
    frequency: 24,
    examples: [
      { sentence: "Что ты делаешь?", translation: "Apa yang kamu lakukan?" },
      { sentence: "Я делаю уроки", translation: "Saya mengerjakan PR" },
    ],
    wordFamily: [
      { word: "сделать", translation: "selesai melakukan" },
      { word: "дело", translation: "urusan, pekerjaan" },
    ],
    lessonIds: [2],
  },

  {
    id: 25,
    word: "знать",
    pronunciation: "/znatʲ/",
    translation: "tahu",
    category: "verb",
    frequency: 25,
    examples: [
      { sentence: "Я знаю", translation: "Saya tahu" },
      { sentence: "Ты знаешь его?", translation: "Kamu kenal dia?" },
    ],
    wordFamily: [
      { word: "знание", translation: "pengetahuan" },
      { word: "известный", translation: "terkenal" },
    ],
    lessonIds: [3],
  },

  {
    id: 26,
    word: "понимать",
    pronunciation: "/ponimatʲ/",
    translation: "mengerti",
    category: "verb",
    frequency: 26,
    examples: [
      { sentence: "Я понимаю", translation: "Saya mengerti" },
      { sentence: "Я не понимаю", translation: "Saya tidak mengerti" },
    ],
    wordFamily: [
      { word: "понять", translation: "paham" },
      { word: "понимание", translation: "pemahaman" },
    ],
    lessonIds: [3],
  },

  {
    id: 27,
    word: "хотеть",
    pronunciation: "/xotjetʲ/",
    translation: "mau, ingin",
    category: "verb",
    frequency: 27,
    examples: [
      { sentence: "Я хочу есть", translation: "Saya mau makan" },
      { sentence: "Что ты хочешь?", translation: "Apa yang kamu mau?" },
    ],
    wordFamily: [
      { word: "захотеть", translation: "menjadi ingin" },
      { word: "желание", translation: "keinginan" },
    ],
    lessonIds: [3],
  },

  {
    id: 28,
    word: "мочь",
    pronunciation: "/motɕʲ/",
    translation: "bisa, dapat",
    category: "verb",
    frequency: 28,
    examples: [
      { sentence: "Я могу помочь", translation: "Saya bisa membantu" },
      { sentence: "Ты можешь?", translation: "Kamu bisa?" },
    ],
    wordFamily: [
      { word: "смочь", translation: "berhasil" },
      { word: "возможность", translation: "kemungkinan" },
    ],
    lessonIds: [3],
  },

  {
    id: 29,
    word: "идти",
    pronunciation: "/idti/",
    translation: "pergi (berjalan)",
    category: "verb",
    frequency: 29,
    examples: [
      { sentence: "Я иду домой", translation: "Saya pulang" },
      { sentence: "Куда ты идёшь?", translation: "Kamu pergi ke mana?" },
    ],
    wordFamily: [
      { word: "пойти", translation: "berangkat" },
      { word: "прийти", translation: "datang" },
    ],
    lessonIds: [3],
  },

  {
    id: 30,
    word: "прийти",
    pronunciation: "/prijti/",
    translation: "datang",
    category: "verb",
    frequency: 30,
    examples: [
      { sentence: "Он пришёл", translation: "Dia datang" },
      { sentence: "Когда ты придёшь?", translation: "Kapan kamu datang?" },
    ],
    wordFamily: [
      { word: "приходить", translation: "datang (berulang)" },
    ],
    lessonIds: [3],
  },

  {
    id: 31,
    word: "видеть",
    pronunciation: "/vidjetʲ/",
    translation: "melihat",
    category: "verb",
    frequency: 31,
    examples: [
      { sentence: "Я вижу дом", translation: "Saya melihat rumah" },
      { sentence: "Ты видишь?", translation: "Kamu lihat?" },
    ],
    wordFamily: [
      { word: "увидеть", translation: "melihat (tiba-tiba)" },
      { word: "вид", translation: "pemandangan" },
    ],
    lessonIds: [3],
  },

  {
    id: 32,
    word: "слышать",
    pronunciation: "/slɨʂatʲ/",
    translation: "mendengar",
    category: "verb",
    frequency: 32,
    examples: [
      { sentence: "Я слышу музыку", translation: "Saya dengar musik" },
      { sentence: "Ты слышишь?", translation: "Kamu dengar?" },
    ],
    wordFamily: [
      { word: "услышать", translation: "mendengar (tiba-tiba)" },
      { word: "слух", translation: "pendengaran" },
    ],
    lessonIds: [3],
  },

  {
    id: 33,
    word: "есть",
    pronunciation: "/jestʲ/",
    translation: "makan",
    category: "verb",
    frequency: 33,
    examples: [
      { sentence: "Я хочу есть", translation: "Saya mau makan" },
      { sentence: "Ты уже ел?", translation: "Kamu sudah makan?" },
    ],
    wordFamily: [
      { word: "съесть", translation: "menghabiskan makanan" },
      { word: "еда", translation: "makanan" },
    ],
    lessonIds: [3],
  },

  {
    id: 34,
    word: "пить",
    pronunciation: "/pitʲ/",
    translation: "minum",
    category: "verb",
    frequency: 34,
    examples: [
      { sentence: "Я хочу пить", translation: "Saya mau minum" },
      { sentence: "Что ты пьёшь?", translation: "Kamu minum apa?" },
    ],
    wordFamily: [
      { word: "выпить", translation: "minum habis" },
      { word: "питьё", translation: "minuman" },
    ],
    lessonIds: [3],
  },

  {
    id: 35,
    word: "любить",
    pronunciation: "/ljubitʲ/",
    translation: "mencintai, suka",
    category: "verb",
    frequency: 35,
    examples: [
      { sentence: "Я люблю тебя", translation: "Aku cinta kamu" },
      { sentence: "Я люблю музыку", translation: "Saya suka musik" },
    ],
    wordFamily: [
      { word: "полюбить", translation: "jatuh cinta" },
      { word: "любовь", translation: "cinta" },
    ],
    lessonIds: [3],
  },

  {
    id: 36,
    word: "жить",
    pronunciation: "/ʐitʲ/",
    translation: "hidup, tinggal",
    category: "verb",
    frequency: 36,
    examples: [
      { sentence: "Я живу в Москве", translation: "Saya tinggal di Moskow" },
      { sentence: "Где ты живёшь?", translation: "Di mana kamu tinggal?" },
    ],
    wordFamily: [
      { word: "проживать", translation: "tinggal, mendiami" },
      { word: "жизнь", translation: "kehidupan" },
    ],
    lessonIds: [3],
  },

  {
    id: 37,
    word: "не",
    pronunciation: "/nje/",
    translation: "tidak (sebelum kata)",
    category: "adverb",
    frequency: 37,
    examples: [
      { sentence: "Я не знаю", translation: "Saya tidak tahu" },
      { sentence: "Он не пришёл", translation: "Dia tidak datang" },
    ],
    lessonIds: [4],
  },

  {
    id: 38,
    word: "ни",
    pronunciation: "/ni/",
    translation: "tidak satu pun",
    category: "adverb",
    frequency: 38,
    examples: [
      { sentence: "Я ничего не знаю", translation: "Saya tidak tahu apa-apa" },
      { sentence: "Никто не пришёл", translation: "Tidak ada yang datang" },
    ],
    lessonIds: [4],
  },

  {
    id: 39,
    word: "или",
    pronunciation: "/ili/",
    translation: "atau",
    category: "conjunction",
    frequency: 39,
    examples: [
      { sentence: "Чай или кофе?", translation: "Teh atau kopi?" },
      { sentence: "Сегодня или завтра?", translation: "Hari ini atau besok?" },
    ],
    lessonIds: [4],
  },

  {
    id: 40,
    word: "но",
    pronunciation: "/no/",
    translation: "tetapi",
    category: "conjunction",
    frequency: 40,
    examples: [
      { sentence: "Я хочу, но не могу", translation: "Saya mau tapi tidak bisa" },
      { sentence: "Дорого, но вкусно", translation: "Mahal tapi enak" },
    ],
    lessonIds: [4],
  },

  {
    id: 41,
    word: "а",
    pronunciation: "/a/",
    translation: "sedangkan (kontras)",
    category: "conjunction",
    frequency: 41,
    examples: [
      { sentence: "Я здесь, а ты там", translation: "Saya di sini, sedangkan kamu di sana" },
      { sentence: "Это дом, а это школа", translation: "Ini rumah, dan ini sekolah" },
    ],
    lessonIds: [4],
  },

  {
    id: 42,
    word: "да",
    pronunciation: "/da/",
    translation: "dan, ya",
    category: "conjunction",
    frequency: 42,
    examples: [
      { sentence: "Я и ты", translation: "Saya dan kamu" },
      { sentence: "Мама и папа", translation: "Ibu dan ayah" },
    ],
    lessonIds: [4],
  },

  {
    id: 43,
    word: "если",
    pronunciation: "/jesli/",
    translation: "jika",
    category: "conjunction",
    frequency: 43,
    examples: [
      { sentence: "Если хочешь, приходи", translation: "Jika mau, datanglah" },
      { sentence: "Если будет время", translation: "Jika ada waktu" },
    ],
    lessonIds: [4],
  },

  {
    id: 44,
    word: "что",
    pronunciation: "/tɕto/",
    translation: "bahwa",
    category: "conjunction",
    frequency: 44,
    examples: [
      { sentence: "Я знаю, что ты прав", translation: "Saya tahu bahwa kamu benar" },
      { sentence: "Он сказал, что придёт", translation: "Dia bilang bahwa akan datang" },
    ],
    lessonIds: [4],
  },

  {
    id: 45,
    word: "чтобы",
    pronunciation: "/tɕtobɨ/",
    translation: "agar, supaya",
    category: "conjunction",
    frequency: 45,
    examples: [
      { sentence: "Я хочу, чтобы ты помог", translation: "Saya ingin kamu membantu" },
      { sentence: "Сделай, чтобы было хорошо", translation: "Lakukan supaya menjadi baik" },
    ],
    lessonIds: [4],
  },

  {
    id: 46,
    word: "потому что",
    pronunciation: "/potomu tɕto/",
    translation: "karena",
    category: "conjunction",
    frequency: 46,
    examples: [
      { sentence: "Я учусь, потому что хочу знать", translation: "Saya belajar karena ingin tahu" },
      { sentence: "Он не пришёл, потому что занят", translation: "Dia tidak datang karena sibuk" },
    ],
    lessonIds: [4],
  },

  {
    id: 47,
    word: "мой",
    pronunciation: "/moj/",
    translation: "milik saya (laki-laki)",
    category: "pronoun",
    frequency: 47,
    examples: [
      { sentence: "Это мой дом", translation: "Ini rumah saya" },
      { sentence: "Мой папа", translation: "Ayah saya" },
    ],
    wordFamily: [
      { word: "моя", translation: "milik saya (perempuan)" },
      { word: "моё", translation: "milik saya (netral)" },
    ],
    lessonIds: [4],
  },

  {
    id: 48,
    word: "твой",
    pronunciation: "/tvoj/",
    translation: "milik kamu (laki-laki)",
    category: "pronoun",
    frequency: 48,
    examples: [
      { sentence: "Это твой друг?", translation: "Ini teman kamu?" },
      { sentence: "Твой дом", translation: "Rumahmu" },
    ],
    wordFamily: [
      { word: "твоя", translation: "milik kamu (perempuan)" },
    ],
    lessonIds: [4],
  },

  {
    id: 49,
    word: "наш",
    pronunciation: "/naʂ/",
    translation: "milik kami (laki-laki)",
    category: "pronoun",
    frequency: 49,
    examples: [
      { sentence: "Наш дом", translation: "Rumah kami" },
      { sentence: "Наш учитель", translation: "Guru kami" },
    ],
    wordFamily: [
      { word: "наша", translation: "milik kami (perempuan)" },
      { word: "наше", translation: "milik kami (netral)" },
    ],
    lessonIds: [5],
  },

  {
    id: 50,
    word: "ваш",
    pronunciation: "/vaʂ/",
    translation: "milik Anda (laki-laki)",
    category: "pronoun",
    frequency: 50,
    examples: [
      { sentence: "Ваш билет", translation: "Tiket Anda" },
      { sentence: "Ваш паспорт", translation: "Paspor Anda" },
    ],
    wordFamily: [
      { word: "ваша", translation: "milik Anda (perempuan)" },
    ],
    lessonIds: [5],
  },

  {
    id: 51,
    word: "хороший",
    pronunciation: "/xoroʂij/",
    translation: "baik, bagus",
    category: "adjective",
    frequency: 51,
    examples: [
      { sentence: "Хороший человек", translation: "Orang baik" },
      { sentence: "Хорошая книга", translation: "Buku bagus" },
    ],
    wordFamily: [
      { word: "хорошо", translation: "baik (adv)" },
      { word: "лучший", translation: "terbaik" },
    ],
    lessonIds: [5],
  },

  {
    id: 52,
    word: "плохой",
    pronunciation: "/ploxoj/",
    translation: "buruk, jelek",
    category: "adjective",
    frequency: 52,
    examples: [
      { sentence: "Плохая погода", translation: "Cuaca buruk" },
      { sentence: "Плохой фильм", translation: "Film jelek" },
    ],
    wordFamily: [
      { word: "плохо", translation: "buruk (adv)" },
    ],
    lessonIds: [5],
  },

  {
    id: 53,
    word: "большой",
    pronunciation: "/bolʲʂoj/",
    translation: "besar",
    category: "adjective",
    frequency: 53,
    examples: [
      { sentence: "Большой город", translation: "Kota besar" },
      { sentence: "Большая страна", translation: "Negara besar" },
    ],
    wordFamily: [
      { word: "больше", translation: "lebih besar" },
      { word: "величие", translation: "kebesaran" },
    ],
    lessonIds: [5],
  },

  {
    id: 54,
    word: "маленький",
    pronunciation: "/maljenʲkij/",
    translation: "kecil",
    category: "adjective",
    frequency: 54,
    examples: [
      { sentence: "Маленький дом", translation: "Rumah kecil" },
      { sentence: "Маленькая собака", translation: "Anjing kecil" },
    ],
    wordFamily: [
      { word: "меньше", translation: "lebih kecil" },
      { word: "мелкий", translation: "kecil-kecil" },
    ],
    lessonIds: [5],
  },

  {
    id: 55,
    word: "новый",
    pronunciation: "/novɨj/",
    translation: "baru",
    category: "adjective",
    frequency: 55,
    examples: [
      { sentence: "Новый телефон", translation: "Telepon baru" },
      { sentence: "Новая машина", translation: "Mobil baru" },
    ],
    wordFamily: [
      { word: "новость", translation: "kabar, berita" },
      { word: "обновление", translation: "pembaruan" },
    ],
    lessonIds: [5],
  },

  {
    id: 56,
    word: "старый",
    pronunciation: "/starɨj/",
    translation: "tua, lama",
    category: "adjective",
    frequency: 56,
    examples: [
      { sentence: "Старый дом", translation: "Rumah tua" },
      { sentence: "Старый друг", translation: "Teman lama" },
    ],
    wordFamily: [
      { word: "стареть", translation: "menjadi tua" },
    ],
    lessonIds: [5],
  },

  {
    id: 57,
    word: "красивый",
    pronunciation: "/krasivɨj/",
    translation: "cantik, indah",
    category: "adjective",
    frequency: 57,
    examples: [
      { sentence: "Красивая девушка", translation: "Gadis cantik" },
      { sentence: "Красивый вид", translation: "Pemandangan indah" },
    ],
    wordFamily: [
      { word: "красота", translation: "kecantikan, keindahan" },
    ],
    lessonIds: [5],
  },

  {
    id: 58,
    word: "умный",
    pronunciation: "/umnɨj/",
    translation: "pintar, cerdas",
    category: "adjective",
    frequency: 58,
    examples: [
      { sentence: "Умный студент", translation: "Mahasiswa pintar" },
      { sentence: "Умная собака", translation: "Anjing cerdas" },
    ],
    wordFamily: [
      { word: "ум", translation: "akal, pikiran" },
      { word: "умнеть", translation: "menjadi pintar" },
    ],
    lessonIds: [5],
  },

  {
    id: 59,
    word: "добрый",
    pronunciation: "/dobrɨj/",
    translation: "baik hati",
    category: "adjective",
    frequency: 59,
    examples: [
      { sentence: "Добрый человек", translation: "Orang baik hati" },
      { sentence: "Доброе утро!", translation: "Selamat pagi!" },
    ],
    wordFamily: [
      { word: "доброта", translation: "kebaikan hati" },
    ],
    lessonIds: [5],
  },

  {
    id: 60,
    word: "сильный",
    pronunciation: "/silʲnɨj/",
    translation: "kuat",
    category: "adjective",
    frequency: 60,
    examples: [
      { sentence: "Сильный мужчина", translation: "Pria kuat" },
      { sentence: "Сильный ветер", translation: "Angin kencang" },
    ],
    wordFamily: [
      { word: "сила", translation: "kekuatan" },
      { word: "усиливать", translation: "memperkuat" },
    ],
    lessonIds: [5],
  },

  {
    id: 61,
    word: "хлеб",
    pronunciation: "/xljeb/",
    translation: "roti",
    category: "noun",
    frequency: 61,
    examples: [
      { sentence: "Купить хлеб", translation: "Beli rota" },
      { sentence: "Белый хлеб", translation: "Roti putih" },
    ],
    lessonIds: [6],
  },

  {
    id: 62,
    word: "молоко",
    pronunciation: "/moloko/",
    translation: "susu",
    category: "noun",
    frequency: 62,
    examples: [
      { sentence: "Купить молоко", translation: "Beli susu" },
      { sentence: "Горячее молоко", translation: "Susu panas" },
    ],
    lessonIds: [6],
  },

  {
    id: 63,
    word: "мясо",
    pronunciation: "/mjaso/",
    translation: "daging",
    category: "noun",
    frequency: 63,
    examples: [
      { sentence: "Куриное мясо", translation: "Daging ayam" },
      { sentence: "Свежее мясо", translation: "Daging segar" },
    ],
    lessonIds: [6],
  },

  {
    id: 64,
    word: "рыба",
    pronunciation: "/rɨba/",
    translation: "ikan",
    category: "noun",
    frequency: 64,
    examples: [
      { sentence: "Свежая рыба", translation: "Ikan segar" },
      { sentence: "Жареная рыба", translation: "Ikan goreng" },
    ],
    lessonIds: [6],
  },

  {
    id: 65,
    word: "вода",
    pronunciation: "/voda/",
    translation: "air",
    category: "noun",
    frequency: 65,
    examples: [
      { sentence: "Стакан воды", translation: "Segelas air" },
      { sentence: "Пить воду", translation: "Minum air" },
    ],
    lessonIds: [6],
  },

  {
    id: 66,
    word: "чай",
    pronunciation: "/tɕaj/",
    translation: "teh",
    category: "noun",
    frequency: 66,
    examples: [
      { sentence: "Зелёный чай", translation: "Teh hijau" },
      { sentence: "Чай с сахаром", translation: "Teh dengan gula" },
    ],
    lessonIds: [6],
  },

  {
    id: 67,
    word: "кофе",
    pronunciation: "/kofje/",
    translation: "kopi",
    category: "noun",
    frequency: 67,
    examples: [
      { sentence: "Чёрный кофе", translation: "Kopi hitam" },
      { sentence: "Кофе с молоком", translation: "Kopi susu" },
    ],
    lessonIds: [6],
  },

  {
    id: 68,
    word: "сахар",
    pronunciation: "/saxar/",
    translation: "gula",
    category: "noun",
    frequency: 68,
    examples: [
      { sentence: "Чай с сахаром", translation: "Teh dengan gula" },
      { sentence: "Белый сахар", translation: "Gula putih" },
    ],
    lessonIds: [6],
  },

  {
    id: 69,
    word: "соль",
    pronunciation: "/solʲ/",
    translation: "garam",
    category: "noun",
    frequency: 69,
    examples: [
      { sentence: "Добавить соль", translation: "Tambahkan garam" },
      { sentence: "Морская соль", translation: "Garam laut" },
    ],
    lessonIds: [6],
  },

  {
    id: 70,
    word: "яйцо",
    pronunciation: "/jajtso/",
    translation: "telur",
    category: "noun",
    frequency: 70,
    examples: [
      { sentence: "Куриное яйцо", translation: "Telur ayam" },
      { sentence: "Яичница", translation: "Telur goreng" },
    ],
    lessonIds: [6],
  },

  {
    id: 71,
    word: "рис",
    pronunciation: "/ris/",
    translation: "nasi, beras",
    category: "noun",
    frequency: 71,
    examples: [
      { sentence: "Варёный рис", translation: "Nasi rebus" },
      { sentence: "Рис с мясом", translation: "Nasi dengan daging" },
    ],
    lessonIds: [6],
  },

  {
    id: 72,
    word: "суп",
    pronunciation: "/sup/",
    translation: "sup",
    category: "noun",
    frequency: 72,
    examples: [
      { sentence: "Горячий суп", translation: "Sup panas" },
      { sentence: "Суп с мясом", translation: "Sup dengan daging" },
    ],
    lessonIds: [6],
  },

  {
    id: 73,
    word: "фрукт",
    pronunciation: "/frukt/",
    translation: "buah",
    category: "noun",
    frequency: 73,
    examples: [
      { sentence: "Свежие фрукты", translation: "Buah segar" },
      { sentence: "Фруктовый сок", translation: "Jus buah" },
    ],
    lessonIds: [7],
  },

  {
    id: 74,
    word: "овощ",
    pronunciation: "/ovoɕː/",
    translation: "sayur",
    category: "noun",
    frequency: 74,
    examples: [
      { sentence: "Свежие овощи", translation: "Sayur segar" },
      { sentence: "Суп из овощей", translation: "Sup sayur" },
    ],
    lessonIds: [7],
  },

  {
    id: 75,
    word: "вкусный",
    pronunciation: "/vkusnɨj/",
    translation: "lezat, enak",
    category: "adjective",
    frequency: 75,
    examples: [
      { sentence: "Вкусная еда", translation: "Makanan enak" },
      { sentence: "Очень вкусно!", translation: "Sangat enak!" },
    ],
    wordFamily: [
      { word: "вкус", translation: "rasa" },
    ],
    lessonIds: [7],
  },

  {
    id: 76,
    word: "один",
    pronunciation: "/odin/",
    translation: "satu",
    category: "number",
    frequency: 76,
    examples: [
      { sentence: "Один билет", translation: "Satu tiket" },
      { sentence: "Одна минута", translation: "Satu menit" },
    ],
    wordFamily: [
      { word: "первый", translation: "pertama" },
      { word: "единица", translation: "angka satu" },
    ],
    lessonIds: [7],
  },

  {
    id: 77,
    word: "два",
    pronunciation: "/dva/",
    translation: "dua",
    category: "number",
    frequency: 77,
    examples: [
      { sentence: "Два билета", translation: "Dua tiket" },
      { sentence: "Два друга", translation: "Dua teman" },
    ],
    wordFamily: [
      { word: "второй", translation: "kedua" },
      { word: "двойка", translation: "angka dua" },
    ],
    lessonIds: [7],
  },

  {
    id: 78,
    word: "три",
    pronunciation: "/tri/",
    translation: "tiga",
    category: "number",
    frequency: 78,
    examples: [
      { sentence: "Три билета", translation: "Tiga tiket" },
      { sentence: "Три минуты", translation: "Tiga menit" },
    ],
    wordFamily: [
      { word: "третий", translation: "ketiga" },
      { word: "тройка", translation: "angka tiga" },
    ],
    lessonIds: [7],
  },

  {
    id: 79,
    word: "четыре",
    pronunciation: "/tɕjetɨrje/",
    translation: "empat",
    category: "number",
    frequency: 79,
    examples: [
      { sentence: "Четыре часа", translation: "Empat jam" },
      { sentence: "Четыре друга", translation: "Empat teman" },
    ],
    wordFamily: [
      { word: "четвёртый", translation: "keempat" },
    ],
    lessonIds: [7],
  },

  {
    id: 80,
    word: "пять",
    pronunciation: "/pjatʲ/",
    translation: "lima",
    category: "number",
    frequency: 80,
    examples: [
      { sentence: "Пять минут", translation: "Lima menit" },
      { sentence: "Пять рублей", translation: "Lima rubel" },
    ],
    wordFamily: [
      { word: "пятый", translation: "kelima" },
    ],
    lessonIds: [7],
  },

  {
    id: 81,
    word: "шесть",
    pronunciation: "/ʂjestʲ/",
    translation: "enam",
    category: "number",
    frequency: 81,
    examples: [
      { sentence: "Шесть часов", translation: "Enam jam" },
      { sentence: "Шесть дней", translation: "Enam hari" },
    ],
    wordFamily: [
      { word: "шестой", translation: "keenam" },
    ],
    lessonIds: [7],
  },

  {
    id: 82,
    word: "семь",
    pronunciation: "/sjemʲ/",
    translation: "tujuh",
    category: "number",
    frequency: 82,
    examples: [
      { sentence: "Семь дней", translation: "Tujuh hari" },
      { sentence: "Семь рублей", translation: "Tujuh rubel" },
    ],
    wordFamily: [
      { word: "седьмой", translation: "ketujuh" },
    ],
    lessonIds: [7],
  },

  {
    id: 83,
    word: "восемь",
    pronunciation: "/vosjemʲ/",
    translation: "delapan",
    category: "number",
    frequency: 83,
    examples: [
      { sentence: "Восемь часов", translation: "Delapan jam" },
      { sentence: "Восемь рублей", translation: "Delapan rubel" },
    ],
    wordFamily: [
      { word: "восьмой", translation: "kedelapan" },
    ],
    lessonIds: [7],
  },

  {
    id: 84,
    word: "девять",
    pronunciation: "/djevjatʲ/",
    translation: "sembilan",
    category: "number",
    frequency: 84,
    examples: [
      { sentence: "Девять минут", translation: "Sembilan menit" },
      { sentence: "Девять рублей", translation: "Sembilan rubel" },
    ],
    wordFamily: [
      { word: "девятый", translation: "kesembilan" },
    ],
    lessonIds: [7],
  },

  {
    id: 85,
    word: "десять",
    pronunciation: "/djesjatʲ/",
    translation: "sepuluh",
    category: "number",
    frequency: 85,
    examples: [
      { sentence: "Десять рублей", translation: "Sepuluh rubel" },
      { sentence: "Десять минут", translation: "Sepuluh menit" },
    ],
    wordFamily: [
      { word: "десятый", translation: "kesepuluh" },
    ],
    lessonIds: [8],
  },

  {
    id: 86,
    word: "сто",
    pronunciation: "/sto/",
    translation: "seratus",
    category: "number",
    frequency: 86,
    examples: [
      { sentence: "Сто рублей", translation: "Seratus rubel" },
      { sentence: "Сто лет", translation: "Seratus tahun" },
    ],
    wordFamily: [
      { word: "сотня", translation: "ratusan" },
    ],
    lessonIds: [8],
  },

  {
    id: 87,
    word: "тысяча",
    pronunciation: "/tɨsjatɕa/",
    translation: "seribu",
    category: "number",
    frequency: 87,
    examples: [
      { sentence: "Тысяча рублей", translation: "Seribu rubel" },
      { sentence: "Тысяча лет", translation: "Seribu tahun" },
    ],
    wordFamily: [
      { word: "тысячный", translation: "keseribu" },
    ],
    lessonIds: [8],
  },

  {
    id: 88,
    word: "миллион",
    pronunciation: "/million/",
    translation: "sejuta",
    category: "number",
    frequency: 88,
    examples: [
      { sentence: "Миллион рублей", translation: "Sejuta rubel" },
      { sentence: "Миллион раз", translation: "Sejuta kali" },
    ],
    lessonIds: [8],
  },

  {
    id: 89,
    word: "номер",
    pronunciation: "/nomjer/",
    translation: "nomor",
    category: "noun",
    frequency: 89,
    examples: [
      { sentence: "Номер телефона", translation: "Nomor telepon" },
      { sentence: "Какой номер?", translation: "Nomor berapa?" },
    ],
    lessonIds: [8],
  },

  {
    id: 90,
    word: "сколько",
    pronunciation: "/skolʲko/",
    translation: "berapa",
    category: "adverb",
    frequency: 90,
    examples: [
      { sentence: "Сколько стоит?", translation: "Berapa harganya?" },
      { sentence: "Сколько лет?", translation: "Berapa tahun?" },
    ],
    lessonIds: [8],
  },

  {
    id: 91,
    word: "время",
    pronunciation: "/vrjemja/",
    translation: "waktu",
    category: "noun",
    frequency: 91,
    examples: [
      { sentence: "Который час?", translation: "Jam berapa?" },
      { sentence: "У меня есть время", translation: "Saya punya waktu" },
    ],
    wordFamily: [
      { word: "временный", translation: "sementara" },
    ],
    lessonIds: [8],
  },

  {
    id: 92,
    word: "сегодня",
    pronunciation: "/sjeɡodnja/",
    translation: "hari ini",
    category: "adverb",
    frequency: 92,
    examples: [
      { sentence: "Сегодня хороший день", translation: "Hari ini hari yang baik" },
      { sentence: "Сегодня холодно", translation: "Hari ini dingin" },
    ],
    lessonIds: [8],
  },

  {
    id: 93,
    word: "завтра",
    pronunciation: "/zavtra/",
    translation: "besok",
    category: "adverb",
    frequency: 93,
    examples: [
      { sentence: "Завтра я приду", translation: "Besok saya datang" },
      { sentence: "До завтра!", translation: "Sampai besok!" },
    ],
    lessonIds: [8],
  },

  {
    id: 94,
    word: "вчера",
    pronunciation: "/vtɕjera/",
    translation: "kemarin",
    category: "adverb",
    frequency: 94,
    examples: [
      { sentence: "Вчера был дождь", translation: "Kemarin hujan" },
      { sentence: "Вчера я работал", translation: "Kemarin saya bekerja" },
    ],
    lessonIds: [8],
  },

  {
    id: 95,
    word: "сейчас",
    pronunciation: "/sjejtɕas/",
    translation: "sekarang",
    category: "adverb",
    frequency: 95,
    examples: [
      { sentence: "Сейчас три часа", translation: "Sekarang jam tiga" },
      { sentence: "Сейчас я занят", translation: "Sekarang saya sibuk" },
    ],
    lessonIds: [8],
  },

  {
    id: 96,
    word: "потом",
    pronunciation: "/potom/",
    translation: "nanti",
    category: "adverb",
    frequency: 96,
    examples: [
      { sentence: "Потом приду", translation: "Nanti datang" },
      { sentence: "Сначала работа, потом отдых", translation: "Dulu kerja, nanti istirahat" },
    ],
    lessonIds: [8],
  },

  {
    id: 97,
    word: "всегда",
    pronunciation: "/vsjeɡda/",
    translation: "selalu",
    category: "adverb",
    frequency: 97,
    examples: [
      { sentence: "Я всегда дома", translation: "Saya selalu di rumah" },
      { sentence: "Она всегда улыбается", translation: "Dia selalu tersenyum" },
    ],
    lessonIds: [9],
  },

  {
    id: 98,
    word: "никогда",
    pronunciation: "/nikoɡda/",
    translation: "tidak pernah",
    category: "adverb",
    frequency: 98,
    examples: [
      { sentence: "Я никогда не был в Москве", translation: "Saya tidak pernah ke Moskow" },
      { sentence: "Никогда не поздно", translation: "Tidak pernah terlambat" },
    ],
    lessonIds: [9],
  },

  {
    id: 99,
    word: "часто",
    pronunciation: "/tɕasto/",
    translation: "sering",
    category: "adverb",
    frequency: 99,
    examples: [
      { sentence: "Я часто хожу в кино", translation: "Saya sering ke bioskop" },
      { sentence: "Она часто опаздывает", translation: "Dia sering terlambat" },
    ],
    wordFamily: [
      { word: "частый", translation: "sering" },
    ],
    lessonIds: [9],
  },

  {
    id: 100,
    word: "редко",
    pronunciation: "/rjedko/",
    translation: "jarang",
    category: "adverb",
    frequency: 100,
    examples: [
      { sentence: "Я редко пью кофе", translation: "Saya jarang minum kopi" },
      { sentence: "Он редко приходит", translation: "Dia jarang datang" },
    ],
    wordFamily: [
      { word: "редкий", translation: "jarang" },
    ],
    lessonIds: [9],
  },

  {
    id: 101,
    word: "утро",
    pronunciation: "/utro/",
    translation: "pagi",
    category: "noun",
    frequency: 101,
    examples: [
      { sentence: "Доброе утро!", translation: "Selamat pagi!" },
      { sentence: "Утром я пью кофе", translation: "Pagi saya minum kopi" },
    ],
    wordFamily: [
      { word: "утренний", translation: "pagi" },
    ],
    lessonIds: [9],
  },

  {
    id: 102,
    word: "день",
    pronunciation: "/djenʲ/",
    translation: "siang, hari",
    category: "noun",
    frequency: 102,
    examples: [
      { sentence: "Добрый день!", translation: "Selamat siang!" },
      { sentence: "Целый день", translation: "Seharian" },
    ],
    wordFamily: [
      { word: "дневной", translation: "siang" },
    ],
    lessonIds: [9],
  },

  {
    id: 103,
    word: "вечер",
    pronunciation: "/vjetɕjer/",
    translation: "sore, malam",
    category: "noun",
    frequency: 103,
    examples: [
      { sentence: "Добрый вечер!", translation: "Selamat sore!" },
      { sentence: "Вечером дома", translation: "Sore di rumah" },
    ],
    wordFamily: [
      { word: "вечерний", translation: "sore" },
    ],
    lessonIds: [9],
  },

  {
    id: 104,
    word: "ночь",
    pronunciation: "/notɕʲ/",
    translation: "malam",
    category: "noun",
    frequency: 104,
    examples: [
      { sentence: "Спокойной ночи!", translation: "Selamat malam!" },
      { sentence: "Ночью темно", translation: "Malam gelap" },
    ],
    wordFamily: [
      { word: "ночной", translation: "malam" },
    ],
    lessonIds: [9],
  },

  {
    id: 105,
    word: "неделя",
    pronunciation: "/njedjelja/",
    translation: "minggu",
    category: "noun",
    frequency: 105,
    examples: [
      { sentence: "На следующей неделе", translation: "Minggu depan" },
      { sentence: "Два раза в неделю", translation: "Dua kali seminggu" },
    ],
    wordFamily: [
      { word: "еженедельный", translation: "mingguan" },
    ],
    lessonIds: [9],
  },

  {
    id: 106,
    word: "быть",
    pronunciation: "/bɨtʲ/",
    translation: "ada, adalah",
    category: "verb",
    frequency: 106,
    examples: [
      { sentence: "Я был дома", translation: "Saya ada di rumah (laki-laki)" },
      { sentence: "Она была в школе", translation: "Dia ada di sekolah" },
    ],
    wordFamily: [
      { word: "бывший", translation: "mantan" },
    ],
    lessonIds: [9],
  },

  {
    id: 107,
    word: "был",
    pronunciation: "/bɨl/",
    translation: "sudah (lampau, laki-laki)",
    category: "verb",
    frequency: 107,
    examples: [
      { sentence: "Я был в Москве", translation: "Saya pernah ke Moskow" },
      { sentence: "Он был студентом", translation: "Dia adalah mahasiswa" },
    ],
    lessonIds: [9],
  },

  {
    id: 108,
    word: "была",
    pronunciation: "/bɨla/",
    translation: "sudah (lampau, perempuan)",
    category: "verb",
    frequency: 108,
    examples: [
      { sentence: "Она была дома", translation: "Dia ada di rumah" },
      { sentence: "Ты была в школе?", translation: "Kamu ada di sekolah?" },
    ],
    lessonIds: [9],
  },

  {
    id: 109,
    word: "было",
    pronunciation: "/bɨlo/",
    translation: "sudah (lampau, netral)",
    category: "verb",
    frequency: 109,
    examples: [
      { sentence: "Было холодно", translation: "Dulu dingin" },
      { sentence: "Было хорошо", translation: "Dulu baik" },
    ],
    lessonIds: [10],
  },

  {
    id: 110,
    word: "были",
    pronunciation: "/bɨli/",
    translation: "sudah (lampau, jamak)",
    category: "verb",
    frequency: 110,
    examples: [
      { sentence: "Мы были вместе", translation: "Kami bersama" },
      { sentence: "Они были друзьями", translation: "Mereka adalah teman" },
    ],
    lessonIds: [10],
  },

  {
    id: 111,
    word: "уже",
    pronunciation: "/uʐje/",
    translation: "sudah",
    category: "adverb",
    frequency: 111,
    examples: [
      { sentence: "Я уже пришёл", translation: "Saya sudah datang" },
      { sentence: "Уже поздно", translation: "Sudah terlambat" },
    ],
    wordFamily: [
      { word: "уже", translation: "sudah" },
    ],
    lessonIds: [10],
  },

  {
    id: 112,
    word: "ещё",
    pronunciation: "/jeɕːё/",
    translation: "masih, lagi",
    category: "adverb",
    frequency: 112,
    examples: [
      { sentence: "Я ещё не готов", translation: "Saya belum siap" },
      { sentence: "Ещё раз", translation: "Sekali lagi" },
    ],
    lessonIds: [10],
  },

  {
    id: 113,
    word: "сделать",
    pronunciation: "/sdjelatʲ/",
    translation: "selesai melakukan",
    category: "verb",
    frequency: 113,
    examples: [
      { sentence: "Я сделал уроки", translation: "Saya selesai mengerjakan PR" },
      { sentence: "Что ты сделал?", translation: "Apa yang kamu lakukan?" },
    ],
    wordFamily: [
      { word: "делать", translation: "melakukan (imperfektif)" },
    ],
    lessonIds: [10],
  },

  {
    id: 114,
    word: "сказать",
    pronunciation: "/skazatʲ/",
    translation: "mengatakan",
    category: "verb",
    frequency: 114,
    examples: [
      { sentence: "Он сказал правду", translation: "Dia mengatakan kebenaran" },
      { sentence: "Скажи мне!", translation: "Katakan padaku!" },
    ],
    wordFamily: [
      { word: "говорить", translation: "bicara (imperfektif)" },
    ],
    lessonIds: [10],
  },

  {
    id: 115,
    word: "дать",
    pronunciation: "/datʲ/",
    translation: "memberi",
    category: "verb",
    frequency: 115,
    examples: [
      { sentence: "Дай мне книгу", translation: "Berikan saya buku" },
      { sentence: "Он дал мне ручку", translation: "Dia memberi saya pulpen" },
    ],
    wordFamily: [
      { word: "давать", translation: "memberi (imperfektif)" },
      { word: "подарок", translation: "hadiah" },
    ],
    lessonIds: [10],
  },

  {
    id: 116,
    word: "взять",
    pronunciation: "/vzjatʲ/",
    translation: "mengambil",
    category: "verb",
    frequency: 116,
    examples: [
      { sentence: "Возьми это!", translation: "Ambil ini!" },
      { sentence: "Я взял билет", translation: "Saya mengambil tiket" },
    ],
    wordFamily: [
      { word: "брать", translation: "mengambil (imperfektif)" },
    ],
    lessonIds: [10],
  },

  {
    id: 117,
    word: "понять",
    pronunciation: "/ponjatʲ/",
    translation: "memahami",
    category: "verb",
    frequency: 117,
    examples: [
      { sentence: "Я понял!", translation: "Saya paham!" },
      { sentence: "Ты понял?", translation: "Kamu paham?" },
    ],
    wordFamily: [
      { word: "понимать", translation: "memahami (imperfektif)" },
    ],
    lessonIds: [10],
  },

  {
    id: 118,
    word: "увидеть",
    pronunciation: "/uvidjetʲ/",
    translation: "melihat (tiba-tiba)",
    category: "verb",
    frequency: 118,
    examples: [
      { sentence: "Я увидел друга", translation: "Saya melihat teman" },
      { sentence: "Он увидел дом", translation: "Dia melihat rumah" },
    ],
    wordFamily: [
      { word: "видеть", translation: "melihat (imperfektif)" },
    ],
    lessonIds: [10],
  },

  {
    id: 119,
    word: "услышать",
    pronunciation: "/uslɨʂatʲ/",
    translation: "mendengar (tiba-tiba)",
    category: "verb",
    frequency: 119,
    examples: [
      { sentence: "Я услышал новость", translation: "Saya mendengar kabar" },
      { sentence: "Она услышала звук", translation: "Dia mendengar suara" },
    ],
    wordFamily: [
      { word: "слышать", translation: "mendengar (imperfektif)" },
    ],
    lessonIds: [10],
  },

  {
    id: 120,
    word: "приехать",
    pronunciation: "/prijexatʲ/",
    translation: "tiba (naik kendaraan)",
    category: "verb",
    frequency: 120,
    examples: [
      { sentence: "Он приехал в Москву", translation: "Dia tiba di Moskow" },
      { sentence: "Когда ты приедешь?", translation: "Kapan kamu tiba?" },
    ],
    wordFamily: [
      { word: "приезжать", translation: "tiba (imperfektif)" },
    ],
    lessonIds: [10],
  },

  {
    id: 121,
    word: "читать",
    pronunciation: "/tɕitatʲ/",
    translation: "membaca",
    category: "verb",
    frequency: 121,
    examples: [
      { sentence: "Я читаю книгу", translation: "Saya membaca buku" },
      { sentence: "Что ты читаешь?", translation: "Apa yang kamu baca?" },
    ],
    wordFamily: [
      { word: "прочитать", translation: "selesai membaca" },
      { word: "читатель", translation: "pembaca" },
    ],
    lessonIds: [11],
  },

  {
    id: 122,
    word: "писать",
    pronunciation: "/pisatʲ/",
    translation: "menulis",
    category: "verb",
    frequency: 122,
    examples: [
      { sentence: "Я пишу письмо", translation: "Saya menulis surat" },
      { sentence: "Она пишет книгу", translation: "Dia menulis buku" },
    ],
    wordFamily: [
      { word: "написать", translation: "selesai menulis" },
      { word: "писатель", translation: "penulis" },
    ],
    lessonIds: [11],
  },

  {
    id: 123,
    word: "работать",
    pronunciation: "/rabotatʲ/",
    translation: "bekerja",
    category: "verb",
    frequency: 123,
    examples: [
      { sentence: "Я работаю в офисе", translation: "Saya bekerja di kantor" },
      { sentence: "Где ты работаешь?", translation: "Di mana kamu bekerja?" },
    ],
    wordFamily: [
      { word: "поработать", translation: "bekerja sebentar" },
      { word: "работа", translation: "pekerjaan" },
    ],
    lessonIds: [11],
  },

  {
    id: 124,
    word: "учиться",
    pronunciation: "/utɕitʲsja/",
    translation: "belajar",
    category: "verb",
    frequency: 124,
    examples: [
      { sentence: "Я учусь в университете", translation: "Saya belajar di universitas" },
      { sentence: "Она учится хорошо", translation: "Dia belajar dengan baik" },
    ],
    wordFamily: [
      { word: "научиться", translation: "belajar hingga bisa" },
    ],
    lessonIds: [11],
  },

  {
    id: 125,
    word: "играть",
    pronunciation: "/iɡratʲ/",
    translation: "bermain",
    category: "verb",
    frequency: 125,
    examples: [
      { sentence: "Дети играют", translation: "Anak-anak bermain" },
      { sentence: "Я играю в футбол", translation: "Saya main sepak bola" },
    ],
    wordFamily: [
      { word: "сыграть", translation: "selesai bermain" },
      { word: "игра", translation: "permainan" },
    ],
    lessonIds: [11],
  },

  {
    id: 126,
    word: "смотреть",
    pronunciation: "/smotrjetʲ/",
    translation: "menonton, melihat",
    category: "verb",
    frequency: 126,
    examples: [
      { sentence: "Я смотрю фильм", translation: "Saya menonton film" },
      { sentence: "Что ты смотришь?", translation: "Apa yang kamu tonton?" },
    ],
    wordFamily: [
      { word: "посмотреть", translation: "selesai menonton" },
    ],
    lessonIds: [11],
  },

  {
    id: 127,
    word: "слушать",
    pronunciation: "/sluʂatʲ/",
    translation: "mendengarkan",
    category: "verb",
    frequency: 127,
    examples: [
      { sentence: "Я слушаю музыку", translation: "Saya dengar musik" },
      { sentence: "Слушай!", translation: "Dengarkan!" },
    ],
    wordFamily: [
      { word: "послушать", translation: "mendengarkan sebentar" },
    ],
    lessonIds: [11],
  },

  {
    id: 128,
    word: "ждать",
    pronunciation: "/ʐdatʲ/",
    translation: "menunggu",
    category: "verb",
    frequency: 128,
    examples: [
      { sentence: "Я жду тебя", translation: "Saya menunggu kamu" },
      { sentence: "Подожди!", translation: "Tunggu!" },
    ],
    wordFamily: [
      { word: "подождать", translation: "menunggu sebentar" },
    ],
    lessonIds: [11],
  },

  {
    id: 129,
    word: "стоять",
    pronunciation: "/stojatʲ/",
    translation: "berdiri",
    category: "verb",
    frequency: 129,
    examples: [
      { sentence: "Я стою здесь", translation: "Saya berdiri di sini" },
      { sentence: "Они стоят на улице", translation: "Mereka berdiri di jalan" },
    ],
    wordFamily: [
      { word: "постоять", translation: "berdiri sebentar" },
    ],
    lessonIds: [11],
  },

  {
    id: 130,
    word: "лежать",
    pronunciation: "/ljeʐatʲ/",
    translation: "berbaring",
    category: "verb",
    frequency: 130,
    examples: [
      { sentence: "Книга лежит на столе", translation: "Buku terletak di meja" },
      { sentence: "Я лежу на диване", translation: "Saya berbaring di sofa" },
    ],
    wordFamily: [
      { word: "полежать", translation: "berbaring sebentar" },
    ],
    lessonIds: [11],
  },

  {
    id: 131,
    word: "сидеть",
    pronunciation: "/sidjetʲ/",
    translation: "duduk",
    category: "verb",
    frequency: 131,
    examples: [
      { sentence: "Я сижу на стуле", translation: "Saya duduk di kursi" },
      { sentence: "Они сидят в кафе", translation: "Mereka duduk di kafe" },
    ],
    wordFamily: [
      { word: "посидеть", translation: "duduk sebentar" },
    ],
    lessonIds: [11],
  },

  {
    id: 132,
    word: "бежать",
    pronunciation: "/bjeʐatʲ/",
    translation: "berlari",
    category: "verb",
    frequency: 132,
    examples: [
      { sentence: "Я бегу быстро", translation: "Saya berlari cepat" },
      { sentence: "Дети бегут", translation: "Anak-anak berlari" },
    ],
    wordFamily: [
      { word: "побежать", translation: "mulai berlari" },
      { word: "бег", translation: "lari" },
    ],
    lessonIds: [11],
  },

  {
    id: 133,
    word: "ехать",
    pronunciation: "/jexatʲ/",
    translation: "pergi (naik kendaraan)",
    category: "verb",
    frequency: 133,
    examples: [
      { sentence: "Я еду на работу", translation: "Saya pergi ke kerja" },
      { sentence: "Он едет на машине", translation: "Dia pergi naik mobil" },
    ],
    wordFamily: [
      { word: "поехать", translation: "berangkat" },
    ],
    lessonIds: [12],
  },

  {
    id: 134,
    word: "лететь",
    pronunciation: "/ljetjetʲ/",
    translation: "terbang",
    category: "verb",
    frequency: 134,
    examples: [
      { sentence: "Самолёт летит", translation: "Pesawat terbang" },
      { sentence: "Я лечу в Москву", translation: "Saya terbang ke Moskow" },
    ],
    wordFamily: [
      { word: "полететь", translation: "mulai terbang" },
    ],
    lessonIds: [12],
  },

  {
    id: 135,
    word: "плыть",
    pronunciation: "/plɨtʲ/",
    translation: "berenang, berlayar",
    category: "verb",
    frequency: 135,
    examples: [
      { sentence: "Корабль плывёт", translation: "Kapal berlayar" },
      { sentence: "Он плывёт", translation: "Dia berenang" },
    ],
    wordFamily: [
      { word: "поплыть", translation: "mulai berenang" },
    ],
    lessonIds: [12],
  },

  {
    id: 136,
    word: "буду",
    pronunciation: "/budu/",
    translation: "akan (saya)",
    category: "verb",
    frequency: 136,
    examples: [
      { sentence: "Я буду ждать", translation: "Saya akan menunggu" },
      { sentence: "Я буду учиться", translation: "Saya akan belajar" },
    ],
    lessonIds: [12],
  },

  {
    id: 137,
    word: "будет",
    pronunciation: "/budjet/",
    translation: "akan (dia)",
    category: "verb",
    frequency: 137,
    examples: [
      { sentence: "Он будет работать", translation: "Dia akan bekerja" },
      { sentence: "Завтра будет дождь", translation: "Besok akan hujan" },
    ],
    lessonIds: [12],
  },

  {
    id: 138,
    word: "будут",
    pronunciation: "/budut/",
    translation: "akan (mereka)",
    category: "verb",
    frequency: 138,
    examples: [
      { sentence: "Они будут здесь", translation: "Mereka akan di sini" },
      { sentence: "Завтра будут уроки", translation: "Besok akan ada pelajaran" },
    ],
    lessonIds: [12],
  },

  {
    id: 139,
    word: "стать",
    pronunciation: "/statʲ/",
    translation: "menjadi",
    category: "verb",
    frequency: 139,
    examples: [
      { sentence: "Он стал врачом", translation: "Dia menjadi dokter" },
      { sentence: "Я хочу стать учителем", translation: "Saya ingin menjadi guru" },
    ],
    wordFamily: [
      { word: "становиться", translation: "menjadi (proses)" },
    ],
    lessonIds: [12],
  },

  {
    id: 140,
    word: "начать",
    pronunciation: "/natɕatʲ/",
    translation: "memulai",
    category: "verb",
    frequency: 140,
    examples: [
      { sentence: "Я начал учить русский", translation: "Saya mulai belajar bahasa Rusia" },
      { sentence: "Начнём!", translation: "Mari mulai!" },
    ],
    wordFamily: [
      { word: "начинать", translation: "memulai (imperfektif)" },
      { word: "начало", translation: "permulaan" },
    ],
    lessonIds: [12],
  },

  {
    id: 141,
    word: "кончить",
    pronunciation: "/kontɕitʲ/",
    translation: "menyelesaikan",
    category: "verb",
    frequency: 141,
    examples: [
      { sentence: "Я кончил работу", translation: "Saya selesai kerja" },
      { sentence: "Кончай!", translation: "Hentikan!" },
    ],
    wordFamily: [
      { word: "кончать", translation: "menyelesaikan (imperfektif)" },
    ],
    lessonIds: [12],
  },

  {
    id: 142,
    word: "помочь",
    pronunciation: "/pomotɕʲ/",
    translation: "membantu",
    category: "verb",
    frequency: 142,
    examples: [
      { sentence: "Помоги мне!", translation: "Tolong saya!" },
      { sentence: "Я помогу тебе", translation: "Saya akan membantu kamu" },
    ],
    wordFamily: [
      { word: "помогать", translation: "membantu (imperfektif)" },
      { word: "помощь", translation: "bantuan" },
    ],
    lessonIds: [12],
  },

  {
    id: 143,
    word: "ответить",
    pronunciation: "/otvjetitʲ/",
    translation: "menjawab",
    category: "verb",
    frequency: 143,
    examples: [
      { sentence: "Ответь мне!", translation: "Jawab saya!" },
      { sentence: "Он ответил на вопрос", translation: "Dia menjawab pertanyaan" },
    ],
    wordFamily: [
      { word: "отвечать", translation: "menjawab (imperfektif)" },
      { word: "ответ", translation: "jawaban" },
    ],
    lessonIds: [12],
  },

  {
    id: 144,
    word: "спросить",
    pronunciation: "/sprositʲ/",
    translation: "bertanya",
    category: "verb",
    frequency: 144,
    examples: [
      { sentence: "Спроси его!", translation: "Tanya dia!" },
      { sentence: "Я спросил дорогу", translation: "Saya bertanya jalan" },
    ],
    wordFamily: [
      { word: "спрашивать", translation: "bertanya (imperfektif)" },
      { word: "вопрос", translation: "pertanyaan" },
    ],
    lessonIds: [12],
  },

  {
    id: 145,
    word: "поехать",
    pronunciation: "/pojexatʲ/",
    translation: "berangkat (kendaraan)",
    category: "verb",
    frequency: 145,
    examples: [
      { sentence: "Я поеду в Москву", translation: "Saya akan pergi ke Moskow" },
      { sentence: "Поехали!", translation: "Ayo berangkat!" },
    ],
    wordFamily: [
      { word: "ехать", translation: "pergi (kendaraan, imperfektif)" },
    ],
    lessonIds: [13],
  },

  {
    id: 146,
    word: "можно",
    pronunciation: "/moʐno/",
    translation: "boleh, bisa",
    category: "adverb",
    frequency: 146,
    examples: [
      { sentence: "Можно войти?", translation: "Boleh masuk?" },
      { sentence: "Можно мне воды?", translation: "Boleh saya minta air?" },
    ],
    lessonIds: [13],
  },

  {
    id: 147,
    word: "нужно",
    pronunciation: "/nuʐno/",
    translation: "perlu, harus",
    category: "adverb",
    frequency: 147,
    examples: [
      { sentence: "Нужно учиться", translation: "Harus belajar" },
      { sentence: "Что нужно сделать?", translation: "Apa yang perlu dilakukan?" },
    ],
    wordFamily: [
      { word: "нужный", translation: "yang diperlukan" },
    ],
    lessonIds: [13],
  },

  {
    id: 148,
    word: "надо",
    pronunciation: "/nado/",
    translation: "harus, perlu",
    category: "adverb",
    frequency: 148,
    examples: [
      { sentence: "Надо идти", translation: "Harus pergi" },
      { sentence: "Мне надо домой", translation: "Saya harus pulang" },
    ],
    lessonIds: [13],
  },

  {
    id: 149,
    word: "нельзя",
    pronunciation: "/njelʲzja/",
    translation: "tidak boleh",
    category: "adverb",
    frequency: 149,
    examples: [
      { sentence: "Нельзя курить", translation: "Tidak boleh merokok" },
      { sentence: "Нельзя опаздывать", translation: "Tidak boleh terlambat" },
    ],
    lessonIds: [13],
  },

  {
    id: 150,
    word: "должен",
    pronunciation: "/dolʐjen/",
    translation: "harus (kewajiban, laki-laki)",
    category: "adjective",
    frequency: 150,
    examples: [
      { sentence: "Я должен работать", translation: "Saya harus bekerja" },
      { sentence: "Он должен прийти", translation: "Dia harus datang" },
    ],
    wordFamily: [
      { word: "должна", translation: "harus (perempuan)" },
    ],
    lessonIds: [13],
  },

  {
    id: 151,
    word: "обязательно",
    pronunciation: "/objazatjelʲno/",
    translation: "pasti, wajib",
    category: "adverb",
    frequency: 151,
    examples: [
      { sentence: "Обязательно приду", translation: "Pasti datang" },
      { sentence: "Это обязательно?", translation: "Ini wajib?" },
    ],
    wordFamily: [
      { word: "обязанность", translation: "kewajiban" },
    ],
    lessonIds: [13],
  },

  {
    id: 152,
    word: "может быть",
    pronunciation: "/moʐjet bɨtʲ/",
    translation: "mungkin",
    category: "adverb",
    frequency: 152,
    examples: [
      { sentence: "Может быть, завтра", translation: "Mungkin besok" },
      { sentence: "Может быть, он придёт", translation: "Mungkin dia datang" },
    ],
    lessonIds: [13],
  },

  {
    id: 153,
    word: "хотеться",
    pronunciation: "/xotjetʲsja/",
    translation: "ingin (rasanya)",
    category: "verb",
    frequency: 153,
    examples: [
      { sentence: "Мне хочется пить", translation: "Saya haus" },
      { sentence: "Хочется спать", translation: "Mau tidur" },
    ],
    lessonIds: [13],
  },

  {
    id: 154,
    word: "нуждаться",
    pronunciation: "/nuʐdatʲsja/",
    translation: "memerlukan",
    category: "verb",
    frequency: 154,
    examples: [
      { sentence: "Я нуждаюсь в помощи", translation: "Saya perlu bantuan" },
      { sentence: "Он нуждается в деньгах", translation: "Dia perlu uang" },
    ],
    wordFamily: [
      { word: "нужда", translation: "kebutuhan" },
    ],
    lessonIds: [13],
  },

  {
    id: 155,
    word: "мочь",
    pronunciation: "/motɕʲ/",
    translation: "bisa",
    category: "verb",
    frequency: 155,
    examples: [
      { sentence: "Я могу", translation: "Saya bisa" },
      { sentence: "Ты можешь мне помочь?", translation: "Kamu bisa bantu saya?" },
    ],
    wordFamily: [
      { word: "смочь", translation: "berhasil" },
    ],
    lessonIds: [13],
  },

  {
    id: 156,
    word: "тёплый",
    pronunciation: "/tёplɨj/",
    translation: "hangat",
    category: "adjective",
    frequency: 156,
    examples: [
      { sentence: "Тёплая вода", translation: "Air hangat" },
      { sentence: "Тёплый день", translation: "Hari yang hangat" },
    ],
    wordFamily: [
      { word: "тепло", translation: "hangat (adv)" },
      { word: "теплота", translation: "kehangatan" },
    ],
    lessonIds: [13],
  },

  {
    id: 157,
    word: "холодный",
    pronunciation: "/xolodnɨj/",
    translation: "dingin",
    category: "adjective",
    frequency: 157,
    examples: [
      { sentence: "Холодная вода", translation: "Air dingin" },
      { sentence: "Холодный ветер", translation: "Angin dingin" },
    ],
    wordFamily: [
      { word: "холодно", translation: "dingin (adv)" },
      { word: "холод", translation: "dingin, udara dingin" },
    ],
    lessonIds: [14],
  },

  {
    id: 158,
    word: "горячий",
    pronunciation: "/ɡorjatɕij/",
    translation: "panas",
    category: "adjective",
    frequency: 158,
    examples: [
      { sentence: "Горячий чай", translation: "Teh panas" },
      { sentence: "Горячая вода", translation: "Air panas" },
    ],
    wordFamily: [
      { word: "горячо", translation: "panas (adv)" },
      { word: "жара", translation: "panas terik" },
    ],
    lessonIds: [14],
  },

  {
    id: 159,
    word: "лёгкий",
    pronunciation: "/lёɡkij/",
    translation: "ringan, mudah",
    category: "adjective",
    frequency: 159,
    examples: [
      { sentence: "Лёгкая сумка", translation: "Tas ringan" },
      { sentence: "Лёгкий урок", translation: "Pelajaran mudah" },
    ],
    wordFamily: [
      { word: "легко", translation: "ringan (adv)" },
      { word: "легкость", translation: "keringanan" },
    ],
    lessonIds: [14],
  },

  {
    id: 160,
    word: "тяжёлый",
    pronunciation: "/tjaʐёlɨj/",
    translation: "berat, sulit",
    category: "adjective",
    frequency: 160,
    examples: [
      { sentence: "Тяжёлая работа", translation: "Pekerjaan berat" },
      { sentence: "Тяжёлый чемодан", translation: "Koper berat" },
    ],
    wordFamily: [
      { word: "тяжело", translation: "berat (adv)" },
      { word: "тяжесть", translation: "kberatan" },
    ],
    lessonIds: [14],
  },

  {
    id: 161,
    word: "быстрый",
    pronunciation: "/bɨstrɨj/",
    translation: "cepat",
    category: "adjective",
    frequency: 161,
    examples: [
      { sentence: "Быстрая машина", translation: "Mobil cepat" },
      { sentence: "Быстрый поезд", translation: "Kereta cepat" },
    ],
    wordFamily: [
      { word: "быстро", translation: "cepat (adv)" },
      { word: "скорость", translation: "kecepatan" },
    ],
    lessonIds: [14],
  },

  {
    id: 162,
    word: "медленный",
    pronunciation: "/mjedljennɨj/",
    translation: "lambat",
    category: "adjective",
    frequency: 162,
    examples: [
      { sentence: "Медленный танец", translation: "Tarian lambat" },
      { sentence: "Медленная музыка", translation: "Musik lambat" },
    ],
    wordFamily: [
      { word: "медленно", translation: "lambat (adv)" },
    ],
    lessonIds: [14],
  },

  {
    id: 163,
    word: "высокий",
    pronunciation: "/vɨsokij/",
    translation: "tinggi",
    category: "adjective",
    frequency: 163,
    examples: [
      { sentence: "Высокий человек", translation: "Orang tinggi" },
      { sentence: "Высокое здание", translation: "Gedung tinggi" },
    ],
    wordFamily: [
      { word: "высота", translation: "ketinggian" },
    ],
    lessonIds: [14],
  },

  {
    id: 164,
    word: "низкий",
    pronunciation: "/nizkij/",
    translation: "rendah",
    category: "adjective",
    frequency: 164,
    examples: [
      { sentence: "Низкий стол", translation: "Meja rendah" },
      { sentence: "Низкая цена", translation: "Harga rendah" },
    ],
    wordFamily: [
      { word: "низко", translation: "rendah (adv)" },
    ],
    lessonIds: [14],
  },

  {
    id: 165,
    word: "дорогой",
    pronunciation: "/doroɡoj/",
    translation: "mahal, sayang",
    category: "adjective",
    frequency: 165,
    examples: [
      { sentence: "Дорогой билет", translation: "Tiket mahal" },
      { sentence: "Дорогой друг!", translation: "Teman terkasih!" },
    ],
    wordFamily: [
      { word: "дорого", translation: "mahal (adv)" },
      { word: "дороговизна", translation: "kemahalan" },
    ],
    lessonIds: [14],
  },

  {
    id: 166,
    word: "дешёвый",
    pronunciation: "/djeʂёvɨj/",
    translation: "murah",
    category: "adjective",
    frequency: 166,
    examples: [
      { sentence: "Дешёвый билет", translation: "Tiket murah" },
      { sentence: "Дешёвая еда", translation: "Makanan murah" },
    ],
    wordFamily: [
      { word: "дешево", translation: "murah (adv)" },
    ],
    lessonIds: [14],
  },

  {
    id: 167,
    word: "молодой",
    pronunciation: "/molodoj/",
    translation: "muda",
    category: "adjective",
    frequency: 167,
    examples: [
      { sentence: "Молодой человек", translation: "Pemuda" },
      { sentence: "Молодая девушка", translation: "Gadis muda" },
    ],
    wordFamily: [
      { word: "молодость", translation: "kemudaan, masa muda" },
    ],
    lessonIds: [14],
  },

  {
    id: 168,
    word: "старый",
    pronunciation: "/starɨj/",
    translation: "tua",
    category: "adjective",
    frequency: 168,
    examples: [
      { sentence: "Старый город", translation: "Kota tua" },
      { sentence: "Старый друг", translation: "Teman lama" },
    ],
    wordFamily: [
      { word: "старость", translation: "usia tua" },
    ],
    lessonIds: [14],
  },

  {
    id: 169,
    word: "светлый",
    pronunciation: "/svjetlɨj/",
    translation: "terang",
    category: "adjective",
    frequency: 169,
    examples: [
      { sentence: "Светлая комната", translation: "Kamar terang" },
      { sentence: "Светлый цвет", translation: "Warna terang" },
    ],
    wordFamily: [
      { word: "свет", translation: "cahaya" },
      { word: "светло", translation: "terang (adv)" },
    ],
    lessonIds: [15],
  },

  {
    id: 170,
    word: "тёмный",
    pronunciation: "/tёmnɨj/",
    translation: "gelap",
    category: "adjective",
    frequency: 170,
    examples: [
      { sentence: "Тёмная комната", translation: "Kamar gelap" },
      { sentence: "Тёмный цвет", translation: "Warna gelap" },
    ],
    wordFamily: [
      { word: "темно", translation: "gelap (adv)" },
      { word: "темнота", translation: "kegelapan" },
    ],
    lessonIds: [15],
  },

  {
    id: 171,
    word: "в",
    pronunciation: "/v/",
    translation: "di, ke (dalam)",
    category: "preposition",
    frequency: 171,
    examples: [
      { sentence: "Я в школе", translation: "Saya di sekolah" },
      { sentence: "Иду в магазин", translation: "Pergi ke toko" },
    ],
    lessonIds: [15],
  },

  {
    id: 172,
    word: "на",
    pronunciation: "/na/",
    translation: "di, ke (atas)",
    category: "preposition",
    frequency: 172,
    examples: [
      { sentence: "На столе", translation: "Di atas meja" },
      { sentence: "Иду на работу", translation: "Pergi ke kerja" },
    ],
    lessonIds: [15],
  },

  {
    id: 173,
    word: "из",
    pronunciation: "/iz/",
    translation: "dari (dalam)",
    category: "preposition",
    frequency: 173,
    examples: [
      { sentence: "Я из России", translation: "Saya dari Rusia" },
      { sentence: "Из дома", translation: "Dari rumah" },
    ],
    lessonIds: [15],
  },

  {
    id: 174,
    word: "с",
    pronunciation: "/s/",
    translation: "dari (atas), dengan",
    category: "preposition",
    frequency: 174,
    examples: [
      { sentence: "С работы", translation: "Dari kerja" },
      { sentence: "С другом", translation: "Dengan teman" },
    ],
    lessonIds: [15],
  },

  {
    id: 175,
    word: "у",
    pronunciation: "/u/",
    translation: "di (dekat), punya",
    category: "preposition",
    frequency: 175,
    examples: [
      { sentence: "У меня есть книга", translation: "Saya punya buku" },
      { sentence: "У дома", translation: "Di dekat rumah" },
    ],
    lessonIds: [15],
  },

  {
    id: 176,
    word: "о",
    pronunciation: "/o/",
    translation: "tentang",
    category: "preposition",
    frequency: 176,
    examples: [
      { sentence: "О чём ты думаешь?", translation: "Tentang apa kamu berpikir?" },
      { sentence: "Расскажи о себе", translation: "Ceritakan tentang dirimu" },
    ],
    lessonIds: [15],
  },

  {
    id: 177,
    word: "от",
    pronunciation: "/ot/",
    translation: "dari (sumber)",
    category: "preposition",
    frequency: 177,
    examples: [
      { sentence: "Письмо от друга", translation: "Surat dari teman" },
      { sentence: "Отойди от окна", translation: "Menjauh dari jendela" },
    ],
    lessonIds: [15],
  },

  {
    id: 178,
    word: "до",
    pronunciation: "/do/",
    translation: "sampai",
    category: "preposition",
    frequency: 178,
    examples: [
      { sentence: "До встречи!", translation: "Sampai jumpa!" },
      { sentence: "От Москвы до Питера", translation: "Dari Moskow sampai Peterburg" },
    ],
    lessonIds: [15],
  },

  {
    id: 179,
    word: "для",
    pronunciation: "/dlja/",
    translation: "untuk",
    category: "preposition",
    frequency: 179,
    examples: [
      { sentence: "Это для тебя", translation: "Ini untuk kamu" },
      { sentence: "Для работы нужен компьютер", translation: "Untuk kerja perlu komputer" },
    ],
    lessonIds: [15],
  },

  {
    id: 180,
    word: "без",
    pronunciation: "/bjez/",
    translation: "tanpa",
    category: "preposition",
    frequency: 180,
    examples: [
      { sentence: "Без сахара", translation: "Tanpa gula" },
      { sentence: "Без проблем", translation: "Tanpa masalah" },
    ],
    lessonIds: [15],
  },

  {
    id: 181,
    word: "через",
    pronunciation: "/tɕjerjez/",
    translation: "melewati, melalui",
    category: "preposition",
    frequency: 181,
    examples: [
      { sentence: "Через дорогу", translation: "Menyeberang jalan" },
      { sentence: "Через час", translation: "Satu jam lagi" },
    ],
    lessonIds: [16],
  },

  {
    id: 182,
    word: "между",
    pronunciation: "/mjeʐdu/",
    translation: "antara",
    category: "preposition",
    frequency: 182,
    examples: [
      { sentence: "Между домом и школой", translation: "Antara rumah dan sekolah" },
      { sentence: "Между нами", translation: "Di antara kita" },
    ],
    lessonIds: [16],
  },

  {
    id: 183,
    word: "перед",
    pronunciation: "/pjerjed/",
    translation: "sebelum, di depan",
    category: "preposition",
    frequency: 183,
    examples: [
      { sentence: "Перед домом", translation: "Di depan rumah" },
      { sentence: "Перед уроком", translation: "Sebelum pelajaran" },
    ],
    lessonIds: [16],
  },

  {
    id: 184,
    word: "за",
    pronunciation: "/za/",
    translation: "di belakang, untuk",
    category: "preposition",
    frequency: 184,
    examples: [
      { sentence: "За домом", translation: "Di belakang rumah" },
      { sentence: "Спасибо за помощь", translation: "Terima kasih atas bantuan" },
    ],
    lessonIds: [16],
  },

  {
    id: 185,
    word: "после",
    pronunciation: "/poslje/",
    translation: "setelah",
    category: "preposition",
    frequency: 185,
    examples: [
      { sentence: "После работы", translation: "Setelah kerja" },
      { sentence: "После урока", translation: "Setelah pelajaran" },
    ],
    lessonIds: [16],
  },

  {
    id: 186,
    word: "который",
    pronunciation: "/kotorɨj/",
    translation: "yang (kata sambung)",
    category: "pronoun",
    frequency: 186,
    examples: [
      { sentence: "Человек, который пришёл", translation: "Orang yang datang" },
      { sentence: "Книга, которую я читаю", translation: "Buku yang saya baca" },
    ],
    lessonIds: [16],
  },

  {
    id: 187,
    word: "весь",
    pronunciation: "/vjesʲ/",
    translation: "semua, seluruh",
    category: "adjective",
    frequency: 187,
    examples: [
      { sentence: "Весь день", translation: "Sepanjang hari" },
      { sentence: "Всё хорошо", translation: "Semua baik" },
    ],
    wordFamily: [
      { word: "всё", translation: "semua" },
      { word: "все", translation: "semua orang" },
    ],
    lessonIds: [16],
  },

  {
    id: 188,
    word: "каждый",
    pronunciation: "/kaʐdɨj/",
    translation: "setiap",
    category: "adjective",
    frequency: 188,
    examples: [
      { sentence: "Каждый день", translation: "Setiap hari" },
      { sentence: "Каждый человек", translation: "Setiap orang" },
    ],
    lessonIds: [16],
  },

  {
    id: 189,
    word: "сам",
    pronunciation: "/sam/",
    translation: "sendiri",
    category: "pronoun",
    frequency: 189,
    examples: [
      { sentence: "Я сам", translation: "Saya sendiri" },
      { sentence: "Он сам сделал", translation: "Dia sendiri yang membuat" },
    ],
    wordFamily: [
      { word: "самый", translation: "paling, sangat" },
    ],
    lessonIds: [16],
  },

  {
    id: 190,
    word: "самый",
    pronunciation: "/samɨj/",
    translation: "paling, sangat",
    category: "adverb",
    frequency: 190,
    examples: [
      { sentence: "Самый лучший", translation: "Yang terbaik" },
      { sentence: "Самый большой", translation: "Yang terbesar" },
    ],
    lessonIds: [16],
  },

  {
    id: 191,
    word: "такой",
    pronunciation: "/takoj/",
    translation: "seperti itu, begitu",
    category: "adjective",
    frequency: 191,
    examples: [
      { sentence: "Такой же", translation: "Sama, serupa" },
      { sentence: "Такой большой", translation: "Begitu besar" },
    ],
    wordFamily: [
      { word: "так", translation: "begitu, demikian" },
    ],
    lessonIds: [16],
  },

  {
    id: 192,
    word: "очень",
    pronunciation: "/otɕjenʲ/",
    translation: "sangat",
    category: "adverb",
    frequency: 192,
    examples: [
      { sentence: "Очень хорошо", translation: "Sangat baik" },
      { sentence: "Очень вкусно", translation: "Sangat enak" },
    ],
    lessonIds: [16],
  },

  {
    id: 193,
    word: "много",
    pronunciation: "/mnoɡo/",
    translation: "banyak",
    category: "adverb",
    frequency: 193,
    examples: [
      { sentence: "Много людей", translation: "Banyak orang" },
      { sentence: "Много времени", translation: "Banyak waktu" },
    ],
    wordFamily: [
      { word: "многие", translation: "banyak (orang)" },
    ],
    lessonIds: [17],
  },

  {
    id: 194,
    word: "мало",
    pronunciation: "/malo/",
    translation: "sedikit",
    category: "adverb",
    frequency: 194,
    examples: [
      { sentence: "Мало времени", translation: "Sedikit waktu" },
      { sentence: "Мало денег", translation: "Sedikit uang" },
    ],
    wordFamily: [
      { word: "меньше", translation: "kurang" },
    ],
    lessonIds: [17],
  },

  {
    id: 195,
    word: "тоже",
    pronunciation: "/toʐje/",
    translation: "juga",
    category: "adverb",
    frequency: 195,
    examples: [
      { sentence: "Я тоже", translation: "Saya juga" },
      { sentence: "Он тоже студент", translation: "Dia juga mahasiswa" },
    ],
    lessonIds: [17],
  },

  {
    id: 196,
    word: "даже",
    pronunciation: "/daʐje/",
    translation: "bahkan",
    category: "adverb",
    frequency: 196,
    examples: [
      { sentence: "Даже дети знают", translation: "Bahkan anak-anak tahu" },
      { sentence: "Даже не думай", translation: "Jangan berpikir sekalipun" },
    ],
    lessonIds: [17],
  },

  {
    id: 197,
    word: "только",
    pronunciation: "/tolʲko/",
    translation: "hanya",
    category: "adverb",
    frequency: 197,
    examples: [
      { sentence: "Только один", translation: "Hanya satu" },
      { sentence: "Только что", translation: "Baru saja" },
    ],
    lessonIds: [17],
  },

  {
    id: 198,
    word: "уже",
    pronunciation: "/uʐje/",
    translation: "sudah",
    category: "adverb",
    frequency: 198,
    examples: [
      { sentence: "Уже поздно", translation: "Sudah larut" },
      { sentence: "Я уже сделал", translation: "Saya sudah selesai" },
    ],
    lessonIds: [17],
  },

  {
    id: 199,
    word: "ещё",
    pronunciation: "/jeɕːё/",
    translation: "masih, lagi",
    category: "adverb",
    frequency: 199,
    examples: [
      { sentence: "Ещё раз", translation: "Sekali lagi" },
      { sentence: "Он ещё спит", translation: "Dia masih tidur" },
    ],
    lessonIds: [17],
  },

  {
    id: 200,
    word: "уже",
    pronunciation: "/uʐje/",
    translation: "sudah (lagi)",
    category: "adverb",
    frequency: 200,
    examples: [
      { sentence: "Уже не надо", translation: "Sudah tidak perlu" },
      { sentence: "Уже пришёл?", translation: "Sudah datang?" },
    ],
    lessonIds: [17],
  },

  {
    id: 201,
    word: "человек",
    pronunciation: "/tɕjelovjek/",
    translation: "orang",
    category: "noun",
    frequency: 201,
    examples: [
      { sentence: "Это хороший человек", translation: "Ini orang baik" },
      { sentence: "Сколько человек?", translation: "Berapa orang?" },
    ],
    lessonIds: [17],
  },

  {
    id: 202,
    word: "мужчина",
    pronunciation: "/muʐtɕina/",
    translation: "laki-laki, pria",
    category: "noun",
    frequency: 202,
    examples: [
      { sentence: "Высокий мужчина", translation: "Pria tinggi" },
      { sentence: "Молодой мужчина", translation: "Pria muda" },
    ],
    lessonIds: [17],
  },

  {
    id: 203,
    word: "женщина",
    pronunciation: "/ʐjenɕːina/",
    translation: "perempuan, wanita",
    category: "noun",
    frequency: 203,
    examples: [
      { sentence: "Красивая женщина", translation: "Wanita cantik" },
      { sentence: "Молодая женщина", translation: "Wanita muda" },
    ],
    lessonIds: [17],
  },

  {
    id: 204,
    word: "ребёнок",
    pronunciation: "/rjebёnok/",
    translation: "anak-anak",
    category: "noun",
    frequency: 204,
    examples: [
      { sentence: "Маленький ребёнок", translation: "Anak kecil" },
      { sentence: "Дети играют", translation: "Anak-anak bermain" },
    ],
    wordFamily: [
      { word: "дети", translation: "anak-anak (jamak)" },
    ],
    lessonIds: [17],
  },

  {
    id: 205,
    word: "мама",
    pronunciation: "/mama/",
    translation: "ibu, mama",
    category: "noun",
    frequency: 205,
    examples: [
      { sentence: "Моя мама", translation: "Ibuku" },
      { sentence: "Мама дома", translation: "Ibu di rumah" },
    ],
    lessonIds: [18],
  },

  {
    id: 206,
    word: "папа",
    pronunciation: "/papa/",
    translation: "ayah, papa",
    category: "noun",
    frequency: 206,
    examples: [
      { sentence: "Мой папа", translation: "Ayahku" },
      { sentence: "Папа работает", translation: "Ayah bekerja" },
    ],
    lessonIds: [18],
  },

  {
    id: 207,
    word: "брат",
    pronunciation: "/brat/",
    translation: "saudara laki-laki",
    category: "noun",
    frequency: 207,
    examples: [
      { sentence: "Мой старший брат", translation: "Kakak laki-laki saya" },
      { sentence: "У меня есть брат", translation: "Saya punya saudara laki-laki" },
    ],
    wordFamily: [
      { word: "братский", translation: "persaudaraan" },
    ],
    lessonIds: [18],
  },

  {
    id: 208,
    word: "сестра",
    pronunciation: "/sjestra/",
    translation: "saudara perempuan",
    category: "noun",
    frequency: 208,
    examples: [
      { sentence: "Моя старшая сестра", translation: "Kakak perempuan saya" },
      { sentence: "У неё есть сестра", translation: "Dia punya saudara perempuan" },
    ],
    lessonIds: [18],
  },

  {
    id: 209,
    word: "друг",
    pronunciation: "/druɡ/",
    translation: "teman",
    category: "noun",
    frequency: 209,
    examples: [
      { sentence: "Мой лучший друг", translation: "Teman terbaik saya" },
      { sentence: "Друзья пришли", translation: "Teman-teman datang" },
    ],
    wordFamily: [
      { word: "друзья", translation: "teman-teman (jamak)" },
      { word: "дружба", translation: "persahabatan" },
    ],
    lessonIds: [18],
  },

  {
    id: 210,
    word: "семья",
    pronunciation: "/sjemjja/",
    translation: "keluarga",
    category: "noun",
    frequency: 210,
    examples: [
      { sentence: "Моя семья", translation: "Keluarga saya" },
      { sentence: "Большая семья", translation: "Keluarga besar" },
    ],
    lessonIds: [18],
  },

  {
    id: 211,
    word: "голова",
    pronunciation: "/ɡolova/",
    translation: "kepala",
    category: "noun",
    frequency: 211,
    examples: [
      { sentence: "У меня болит голова", translation: "Saya sakit kepala" },
      { sentence: "Она кивнула головой", translation: "Dia mengangguk" },
    ],
    lessonIds: [18],
  },

  {
    id: 212,
    word: "рука",
    pronunciation: "/ruka/",
    translation: "tangan",
    category: "noun",
    frequency: 212,
    examples: [
      { sentence: "Подними руку!", translation: "Angkat tangan!" },
      { sentence: "Правая рука", translation: "Tangan kanan" },
    ],
    lessonIds: [18],
  },

  {
    id: 213,
    word: "нога",
    pronunciation: "/noɡa/",
    translation: "kaki",
    category: "noun",
    frequency: 213,
    examples: [
      { sentence: "Левая нога", translation: "Kaki kiri" },
      { sentence: "Он встал на ноги", translation: "Dia berdiri" },
    ],
    lessonIds: [18],
  },

  {
    id: 214,
    word: "глаз",
    pronunciation: "/ɡlaz/",
    translation: "mata",
    category: "noun",
    frequency: 214,
    examples: [
      { sentence: "Синие глаза", translation: "Mata biru" },
      { sentence: "Закрой глаза!", translation: "Tutup mata!" },
    ],
    lessonIds: [18],
  },

  {
    id: 215,
    word: "рот",
    pronunciation: "/rot/",
    translation: "mulut",
    category: "noun",
    frequency: 215,
    examples: [
      { sentence: "Открой рот!", translation: "Buka mulut!" },
      { sentence: "У неё красивый рот", translation: "Dia punya mulut cantik" },
    ],
    lessonIds: [18],
  },

  {
    id: 216,
    word: "нос",
    pronunciation: "/nos/",
    translation: "hidung",
    category: "noun",
    frequency: 216,
    examples: [
      { sentence: "У него большой нос", translation: "Dia berhidung besar" },
      { sentence: "Носом чувствую запах", translation: "Mencium bau" },
    ],
    lessonIds: [18],
  },

  {
    id: 217,
    word: "ухо",
    pronunciation: "/uxo/",
    translation: "telinga",
    category: "noun",
    frequency: 217,
    examples: [
      { sentence: "Уши мёрзнут", translation: "Telinga dingin" },
      { sentence: "Он шевелит ушами", translation: "Dia menggerakkan telinga" },
    ],
    lessonIds: [19],
  },

  {
    id: 218,
    word: "зуб",
    pronunciation: "/zub/",
    translation: "gigi",
    category: "noun",
    frequency: 218,
    examples: [
      { sentence: "Чистить зубы", translation: "Menggosok gigi" },
      { sentence: "Белые зубы", translation: "Gigi putih" },
    ],
    lessonIds: [19],
  },

  {
    id: 219,
    word: "сердце",
    pronunciation: "/sjerdtsje/",
    translation: "jantung",
    category: "noun",
    frequency: 219,
    examples: [
      { sentence: "Моё сердце бьётся", translation: "Jantungku berdetak" },
      { sentence: "От всего сердца", translation: "Dari lubuk hati" },
    ],
    lessonIds: [19],
  },

  {
    id: 220,
    word: "кровь",
    pronunciation: "/krovʲ/",
    translation: "darah",
    category: "noun",
    frequency: 220,
    examples: [
      { sentence: "Группа крови", translation: "Golongan darah" },
      { sentence: "Идёт кровь", translation: "Berdarah" },
    ],
    lessonIds: [19],
  },

  {
    id: 221,
    word: "дом",
    pronunciation: "/dom/",
    translation: "rumah",
    category: "noun",
    frequency: 221,
    examples: [
      { sentence: "Я иду домой", translation: "Saya pulang" },
      { sentence: "Большой дом", translation: "Rumah besar" },
    ],
    wordFamily: [
      { word: "дома", translation: "di rumah" },
      { word: "домашний", translation: "rumahan" },
    ],
    lessonIds: [19],
  },

  {
    id: 222,
    word: "квартира",
    pronunciation: "/kvartira/",
    translation: "apartemen",
    category: "noun",
    frequency: 222,
    examples: [
      { sentence: "Новая квартира", translation: "Apartemen baru" },
      { sentence: "Снять квартиру", translation: "Menyewa apartemen" },
    ],
    lessonIds: [19],
  },

  {
    id: 223,
    word: "комната",
    pronunciation: "/komnata/",
    translation: "kamar",
    category: "noun",
    frequency: 223,
    examples: [
      { sentence: "Моя комната", translation: "Kamarku" },
      { sentence: "Светлая комната", translation: "Kamar terang" },
    ],
    lessonIds: [19],
  },

  {
    id: 224,
    word: "кухня",
    pronunciation: "/kuxnja/",
    translation: "dapur",
    category: "noun",
    frequency: 224,
    examples: [
      { sentence: "Большая кухня", translation: "Dapur besar" },
      { sentence: "Я на кухне", translation: "Saya di dapur" },
    ],
    lessonIds: [19],
  },

  {
    id: 225,
    word: "дверь",
    pronunciation: "/dvjerʲ/",
    translation: "pintu",
    category: "noun",
    frequency: 225,
    examples: [
      { sentence: "Открой дверь!", translation: "Buka pintu!" },
      { sentence: "Закрой дверь", translation: "Tutup pintu" },
    ],
    lessonIds: [19],
  },

  {
    id: 226,
    word: "окно",
    pronunciation: "/okno/",
    translation: "jendela",
    category: "noun",
    frequency: 226,
    examples: [
      { sentence: "Открой окно!", translation: "Buka jendela!" },
      { sentence: "За окном дождь", translation: "Di luar jendela hujan" },
    ],
    lessonIds: [19],
  },

  {
    id: 227,
    word: "стол",
    pronunciation: "/stol/",
    translation: "meja",
    category: "noun",
    frequency: 227,
    examples: [
      { sentence: "Книга на столе", translation: "Buku di meja" },
      { sentence: "Письменный стол", translation: "Meja tulis" },
    ],
    wordFamily: [
      { word: "столик", translation: "meja kecil" },
    ],
    lessonIds: [19],
  },

  {
    id: 228,
    word: "стул",
    pronunciation: "/stul/",
    translation: "kursi",
    category: "noun",
    frequency: 228,
    examples: [
      { sentence: "Сядь на стул!", translation: "Duduk di kursi!" },
      { sentence: "Удобный стул", translation: "Kursi nyaman" },
    ],
    lessonIds: [19],
  },

  {
    id: 229,
    word: "кровать",
    pronunciation: "/krovatʲ/",
    translation: "tempat tidur",
    category: "noun",
    frequency: 229,
    examples: [
      { sentence: "Я лежу на кровати", translation: "Saya berbaring di tempat tidur" },
      { sentence: "Утром встаю с кровати", translation: "Pagi bangun dari tempat tidur" },
    ],
    lessonIds: [20],
  },

  {
    id: 230,
    word: "лампа",
    pronunciation: "/lampa/",
    translation: "lampu",
    category: "noun",
    frequency: 230,
    examples: [
      { sentence: "Включи лампу!", translation: "Nyalakan lampu!" },
      { sentence: "Настольная лампа", translation: "Lampu meja" },
    ],
    lessonIds: [20],
  },

  {
    id: 231,
    word: "город",
    pronunciation: "/ɡorod/",
    translation: "kota",
    category: "noun",
    frequency: 231,
    examples: [
      { sentence: "Большой город", translation: "Kota besar" },
      { sentence: "Я живу в городе", translation: "Saya tinggal di kota" },
    ],
    lessonIds: [20],
  },

  {
    id: 232,
    word: "улица",
    pronunciation: "/ulitsa/",
    translation: "jalan",
    category: "noun",
    frequency: 232,
    examples: [
      { sentence: "На улице холодно", translation: "Di luar dingin" },
      { sentence: "Главная улица", translation: "Jalan utama" },
    ],
    lessonIds: [20],
  },

  {
    id: 233,
    word: "площадь",
    pronunciation: "/ploɕːadʲ/",
    translation: "alun-alun",
    category: "noun",
    frequency: 233,
    examples: [
      { sentence: "Красная площадь", translation: "Lapangan Merah" },
      { sentence: "Центральная площадь", translation: "Alun-alun pusat" },
    ],
    lessonIds: [20],
  },

  {
    id: 234,
    word: "магазин",
    pronunciation: "/maɡazin/",
    translation: "toko",
    category: "noun",
    frequency: 234,
    examples: [
      { sentence: "Продуктовый магазин", translation: "Toko makanan" },
      { sentence: "Идти в магазин", translation: "Pergi ke toko" },
    ],
    lessonIds: [20],
  },

  {
    id: 235,
    word: "аптека",
    pronunciation: "/aptjeka/",
    translation: "apotek",
    category: "noun",
    frequency: 235,
    examples: [
      { sentence: "Где аптека?", translation: "Di mana apotek?" },
      { sentence: "Круглосуточная аптека", translation: "Apotek 24 jam" },
    ],
    lessonIds: [20],
  },

  {
    id: 236,
    word: "больница",
    pronunciation: "/bolʲnitsa/",
    translation: "rumah sakit",
    category: "noun",
    frequency: 236,
    examples: [
      { sentence: "Он в больнице", translation: "Dia di rumah sakit" },
      { sentence: "Пойти в больницу", translation: "Pergi ke rumah sakit" },
    ],
    lessonIds: [20],
  },

  {
    id: 237,
    word: "школа",
    pronunciation: "/ʂkola/",
    translation: "sekolah",
    category: "noun",
    frequency: 237,
    examples: [
      { sentence: "Я хожу в школу", translation: "Saya pergi ke sekolah" },
      { sentence: "Школа рядом", translation: "Sekolah dekat" },
    ],
    lessonIds: [20],
  },

  {
    id: 238,
    word: "университет",
    pronunciation: "/univjersitjet/",
    translation: "universitas",
    category: "noun",
    frequency: 238,
    examples: [
      { sentence: "Я учусь в университете", translation: "Saya kuliah di universitas" },
      { sentence: "Московский университет", translation: "Universitas Moskow" },
    ],
    lessonIds: [20],
  },

  {
    id: 239,
    word: "парк",
    pronunciation: "/park/",
    translation: "taman",
    category: "noun",
    frequency: 239,
    examples: [
      { sentence: "Гулять в парке", translation: "Jalan-jalan di taman" },
      { sentence: "Центральный парк", translation: "Taman pusat" },
    ],
    lessonIds: [20],
  },

  {
    id: 240,
    word: "музей",
    pronunciation: "/muzjej/",
    translation: "museum",
    category: "noun",
    frequency: 240,
    examples: [
      { sentence: "Пойти в музей", translation: "Pergi ke museum" },
      { sentence: "Исторический музей", translation: "Museum sejarah" },
    ],
    lessonIds: [20],
  },

  {
    id: 241,
    word: "машина",
    pronunciation: "/maʂina/",
    translation: "mobil",
    category: "noun",
    frequency: 241,
    examples: [
      { sentence: "У меня есть машина", translation: "Saya punya mobil" },
      { sentence: "Новая машина", translation: "Mobil baru" },
    ],
    lessonIds: [21],
  },

  {
    id: 242,
    word: "поезд",
    pronunciation: "/pojezd/",
    translation: "kereta api",
    category: "noun",
    frequency: 242,
    examples: [
      { sentence: "Поезд пришёл", translation: "Kereta datang" },
      { sentence: "На поезде", translation: "Naik kereta" },
    ],
    lessonIds: [21],
  },

  {
    id: 243,
    word: "самолёт",
    pronunciation: "/samolёt/",
    translation: "pesawat",
    category: "noun",
    frequency: 243,
    examples: [
      { sentence: "Лететь самолётом", translation: "Terbang naik pesawat" },
      { sentence: "Время полёта", translation: "Waktu penerbangan" },
    ],
    lessonIds: [21],
  },

  {
    id: 244,
    word: "автобус",
    pronunciation: "/avtobus/",
    translation: "bus",
    category: "noun",
    frequency: 244,
    examples: [
      { sentence: "Автобус пришёл", translation: "Bus datang" },
      { sentence: "На автобусе", translation: "Naik bus" },
    ],
    lessonIds: [21],
  },

  {
    id: 245,
    word: "такси",
    pronunciation: "/taksi/",
    translation: "taksi",
    category: "noun",
    frequency: 245,
    examples: [
      { sentence: "Вызвать такси", translation: "Panggil taksi" },
      { sentence: "Сесть в такси", translation: "Naik taksi" },
    ],
    lessonIds: [21],
  },

  {
    id: 246,
    word: "метро",
    pronunciation: "/mjetro/",
    translation: "metro, kereta bawah tanah",
    category: "noun",
    frequency: 246,
    examples: [
      { sentence: "Метро близко", translation: "Metro dekat" },
      { sentence: "Я езжу на метро", translation: "Saya naik metro" },
    ],
    lessonIds: [21],
  },

  {
    id: 247,
    word: "дорога",
    pronunciation: "/doroɡa/",
    translation: "jalan, perjalanan",
    category: "noun",
    frequency: 247,
    examples: [
      { sentence: "Долгая дорога", translation: "Perjalanan panjang" },
      { sentence: "По дороге домой", translation: "Dalam perjalanan pulang" },
    ],
    lessonIds: [21],
  },

  {
    id: 248,
    word: "остановка",
    pronunciation: "/ostanovka/",
    translation: "halte, perhentian",
    category: "noun",
    frequency: 248,
    examples: [
      { sentence: "Автобусная остановка", translation: "Halte bus" },
      { sentence: "Следующая остановка", translation: "Halte berikutnya" },
    ],
    wordFamily: [
      { word: "останавливаться", translation: "berhenti" },
    ],
    lessonIds: [21],
  },

  {
    id: 249,
    word: "билет",
    pronunciation: "/biljet/",
    translation: "tiket",
    category: "noun",
    frequency: 249,
    examples: [
      { sentence: "Купить билет", translation: "Beli tiket" },
      { sentence: "Билет в один конец", translation: "Tiket sekali jalan" },
    ],
    lessonIds: [21],
  },

  {
    id: 250,
    word: "вокзал",
    pronunciation: "/vokzal/",
    translation: "stasiun",
    category: "noun",
    frequency: 250,
    examples: [
      { sentence: "Прийти на вокзал", translation: "Datang ke stasiun" },
      { sentence: "Железнодорожный вокзал", translation: "Stasiun kereta" },
    ],
    lessonIds: [21],
  },

  {
    id: 251,
    word: "одежда",
    pronunciation: "/odjeʐda/",
    translation: "pakaian",
    category: "noun",
    frequency: 251,
    examples: [
      { sentence: "Новая одежда", translation: "Pakaian baru" },
      { sentence: "Магазин одежды", translation: "Toko pakaian" },
    ],
    lessonIds: [21],
  },

  {
    id: 252,
    word: "пальто",
    pronunciation: "/palʲto/",
    translation: "mantel",
    category: "noun",
    frequency: 252,
    examples: [
      { sentence: "Зимнее пальто", translation: "Mantel musim dingin" },
      { sentence: "Надеть пальто", translation: "Memakai mantel" },
    ],
    lessonIds: [21],
  },

  {
    id: 253,
    word: "куртка",
    pronunciation: "/kurtka/",
    translation: "jaket",
    category: "noun",
    frequency: 253,
    examples: [
      { sentence: "Тёплая куртка", translation: "Jaket hangat" },
      { sentence: "Кожаная куртка", translation: "Jaket kulit" },
    ],
    lessonIds: [22],
  },

  {
    id: 254,
    word: "платье",
    pronunciation: "/platjje/",
    translation: "gaun",
    category: "noun",
    frequency: 254,
    examples: [
      { sentence: "Красивое платье", translation: "Gaun cantik" },
      { sentence: "Вечернее платье", translation: "Gaun malam" },
    ],
    lessonIds: [22],
  },

  {
    id: 255,
    word: "рубашка",
    pronunciation: "/rubaʂka/",
    translation: "kemeja",
    category: "noun",
    frequency: 255,
    examples: [
      { sentence: "Белая рубашка", translation: "Kemeja putih" },
      { sentence: "Мужская рубашка", translation: "Kemeja pria" },
    ],
    lessonIds: [22],
  },

  {
    id: 256,
    word: "ботинки",
    pronunciation: "/botinki/",
    translation: "sepatu",
    category: "noun",
    frequency: 256,
    examples: [
      { sentence: "Новые ботинки", translation: "Sepatu baru" },
      { sentence: "Зимние ботинки", translation: "Sepatu musim dingin" },
    ],
    lessonIds: [22],
  },

  {
    id: 257,
    word: "шапка",
    pronunciation: "/ʂapka/",
    translation: "topi (musim dingin)",
    category: "noun",
    frequency: 257,
    examples: [
      { sentence: "Вязаная шапка", translation: "Topi rajut" },
      { sentence: "Надень шапку!", translation: "Pakai topi!" },
    ],
    lessonIds: [22],
  },

  {
    id: 258,
    word: "цвет",
    pronunciation: "/tsvjet/",
    translation: "warna",
    category: "noun",
    frequency: 258,
    examples: [
      { sentence: "Какой цвет?", translation: "Warna apa?" },
      { sentence: "Красный цвет", translation: "Warna merah" },
    ],
    lessonIds: [22],
  },

  {
    id: 259,
    word: "природа",
    pronunciation: "/priroda/",
    translation: "alam",
    category: "noun",
    frequency: 259,
    examples: [
      { sentence: "Красивая природа", translation: "Alam indah" },
      { sentence: "На природе", translation: "Di alam" },
    ],
    lessonIds: [22],
  },

  {
    id: 260,
    word: "лес",
    pronunciation: "/ljes/",
    translation: "hutan",
    category: "noun",
    frequency: 260,
    examples: [
      { sentence: "Гулять по лесу", translation: "Jalan di hutan" },
      { sentence: "Тёмный лес", translation: "Hutan gelap" },
    ],
    lessonIds: [22],
  },

  {
    id: 261,
    word: "река",
    pronunciation: "/rjeka/",
    translation: "sungai",
    category: "noun",
    frequency: 261,
    examples: [
      { sentence: "Большая река", translation: "Sungai besar" },
      { sentence: "Купаться в реке", translation: "Berenang di sungai" },
    ],
    lessonIds: [22],
  },

  {
    id: 262,
    word: "море",
    pronunciation: "/morje/",
    translation: "laut",
    category: "noun",
    frequency: 262,
    examples: [
      { sentence: "Чёрное море", translation: "Laut Hitam" },
      { sentence: "Отдыхать на море", translation: "Berlibur ke laut" },
    ],
    lessonIds: [22],
  },

  {
    id: 263,
    word: "гора",
    pronunciation: "/ɡora/",
    translation: "gunung",
    category: "noun",
    frequency: 263,
    examples: [
      { sentence: "Высокая гора", translation: "Gunung tinggi" },
      { sentence: "Кататься на горах", translation: "Bermain di gunung" },
    ],
    lessonIds: [22],
  },

  {
    id: 264,
    word: "небо",
    pronunciation: "/njebo/",
    translation: "langit",
    category: "noun",
    frequency: 264,
    examples: [
      { sentence: "Голубое небо", translation: "Langit biru" },
      { sentence: "Звёздное небо", translation: "Langit berbintang" },
    ],
    lessonIds: [22],
  },

  {
    id: 265,
    word: "солнце",
    pronunciation: "/solntsje/",
    translation: "matahari",
    category: "noun",
    frequency: 265,
    examples: [
      { sentence: "Яркое солнце", translation: "Matahari cerah" },
      { sentence: "Солнце встаёт", translation: "Matahari terbit" },
    ],
    lessonIds: [23],
  },

  {
    id: 266,
    word: "луна",
    pronunciation: "/luna/",
    translation: "bulan",
    category: "noun",
    frequency: 266,
    examples: [
      { sentence: "Полная луна", translation: "Bulan purnama" },
      { sentence: "Свет луны", translation: "Cahaya bulan" },
    ],
    lessonIds: [23],
  },

  {
    id: 267,
    word: "звезда",
    pronunciation: "/zvjezda/",
    translation: "bintang",
    category: "noun",
    frequency: 267,
    examples: [
      { sentence: "Звёзды на небе", translation: "Bintang di langit" },
      { sentence: "Падающая звезда", translation: "Bintang jatuh" },
    ],
    lessonIds: [23],
  },

  {
    id: 268,
    word: "дождь",
    pronunciation: "/doʐdʲ/",
    translation: "hujan",
    category: "noun",
    frequency: 268,
    examples: [
      { sentence: "Идёт дождь", translation: "Sedang hujan" },
      { sentence: "Сильный дождь", translation: "Hujan deras" },
    ],
    lessonIds: [23],
  },

  {
    id: 269,
    word: "погода",
    pronunciation: "/poɡoda/",
    translation: "cuaca",
    category: "noun",
    frequency: 269,
    examples: [
      { sentence: "Хорошая погода", translation: "Cuaca baik" },
      { sentence: "Какая сегодня погода?", translation: "Bagaimana cuaca hari ini?" },
    ],
    lessonIds: [23],
  },

  {
    id: 270,
    word: "ветер",
    pronunciation: "/vjetjer/",
    translation: "angin",
    category: "noun",
    frequency: 270,
    examples: [
      { sentence: "Сильный ветер", translation: "Angin kuat" },
      { sentence: "Ветер дует", translation: "Angin bertiup" },
    ],
    lessonIds: [23],
  },

  {
    id: 271,
    word: "снег",
    pronunciation: "/snjeɡ/",
    translation: "salju",
    category: "noun",
    frequency: 271,
    examples: [
      { sentence: "Идёт снег", translation: "Turun salju" },
      { sentence: "Белый снег", translation: "Salju putih" },
    ],
    lessonIds: [23],
  },

  {
    id: 272,
    word: "солнечно",
    pronunciation: "/solnjetɕno/",
    translation: "cerah",
    category: "adjective",
    frequency: 272,
    examples: [
      { sentence: "Сегодня солнечно", translation: "Hari ini cerah" },
      { sentence: "Солнечный день", translation: "Hari yang cerah" },
    ],
    lessonIds: [23],
  },

  {
    id: 273,
    word: "облачно",
    pronunciation: "/oblatɕno/",
    translation: "berawan",
    category: "adjective",
    frequency: 273,
    examples: [
      { sentence: "Сегодня облачно", translation: "Hari ini berawan" },
      { sentence: "Облачное небо", translation: "Langit berawan" },
    ],
    lessonIds: [23],
  },

  {
    id: 274,
    word: "минута",
    pronunciation: "/minuta/",
    translation: "menit",
    category: "noun",
    frequency: 274,
    examples: [
      { sentence: "Подожди минуту!", translation: "Tunggu sebentar!" },
      { sentence: "Пять минут", translation: "Lima menit" },
    ],
    lessonIds: [23],
  },

  {
    id: 275,
    word: "час",
    pronunciation: "/tɕas/",
    translation: "jam",
    category: "noun",
    frequency: 275,
    examples: [
      { sentence: "Через час", translation: "Satu jam lagi" },
      { sentence: "Который час?", translation: "Jam berapa?" },
    ],
    lessonIds: [23],
  },

  {
    id: 276,
    word: "год",
    pronunciation: "/ɡod/",
    translation: "tahun",
    category: "noun",
    frequency: 276,
    examples: [
      { sentence: "Новый год!", translation: "Tahun baru!" },
      { sentence: "В этом году", translation: "Tahun ini" },
    ],
    lessonIds: [23],
  },

  {
    id: 277,
    word: "месяц",
    pronunciation: "/mjesjats/",
    translation: "bulan",
    category: "noun",
    frequency: 277,
    examples: [
      { sentence: "В прошлом месяце", translation: "Bulan lalu" },
      { sentence: "Каждый месяц", translation: "Setiap bulan" },
    ],
    lessonIds: [24],
  },

  {
    id: 278,
    word: "раз",
    pronunciation: "/raz/",
    translation: "kali",
    category: "noun",
    frequency: 278,
    examples: [
      { sentence: "Ещё раз", translation: "Sekali lagi" },
      { sentence: "Первый раз", translation: "Pertama kali" },
    ],
    lessonIds: [24],
  },

  {
    id: 279,
    word: "всегда",
    pronunciation: "/vsjeɡda/",
    translation: "selalu",
    category: "adverb",
    frequency: 279,
    examples: [
      { sentence: "Я всегда рад", translation: "Saya selalu senang" },
      { sentence: "Он всегда опаздывает", translation: "Dia selalu terlambat" },
    ],
    lessonIds: [24],
  },

  {
    id: 280,
    word: "радость",
    pronunciation: "/radostʲ/",
    translation: "kegembiraan",
    category: "noun",
    frequency: 280,
    examples: [
      { sentence: "Какая радость!", translation: "Betapa senangnya!" },
      { sentence: "Большая радость", translation: "Kegembiraan besar" },
    ],
    wordFamily: [
      { word: "радостный", translation: "gembira" },
    ],
    lessonIds: [24],
  },

  {
    id: 281,
    word: "грусть",
    pronunciation: "/ɡrustʲ/",
    translation: "kesedihan",
    category: "noun",
    frequency: 281,
    examples: [
      { sentence: "Почему грусть?", translation: "Kenapa sedih?" },
      { sentence: "Он с грустью смотрит", translation: "Dia melihat dengan sedih" },
    ],
    wordFamily: [
      { word: "грустный", translation: "sedih" },
    ],
    lessonIds: [24],
  },

  {
    id: 282,
    word: "страх",
    pronunciation: "/strax/",
    translation: "ketakutan",
    category: "noun",
    frequency: 282,
    examples: [
      { sentence: "У него страх", translation: "Dia takut" },
      { sentence: "Без страха", translation: "Tanpa takut" },
    ],
    wordFamily: [
      { word: "страшный", translation: "menakutkan" },
    ],
    lessonIds: [24],
  },

  {
    id: 283,
    word: "любовь",
    pronunciation: "/ljubovʲ/",
    translation: "cinta",
    category: "noun",
    frequency: 283,
    examples: [
      { sentence: "Первая любовь", translation: "Cinta pertama" },
      { sentence: "Любовь к жизни", translation: "Cinta pada kehidupan" },
    ],
    wordFamily: [
      { word: "любимый", translation: "tercinta" },
    ],
    lessonIds: [24],
  },

  {
    id: 284,
    word: "надежда",
    pronunciation: "/nadjeʐda/",
    translation: "harapan",
    category: "noun",
    frequency: 284,
    examples: [
      { sentence: "Есть надежда", translation: "Ada harapan" },
      { sentence: "Надежда умирает последней", translation: "Harapan mati terakhir" },
    ],
    wordFamily: [
      { word: "надеяться", translation: "berharap" },
    ],
    lessonIds: [24],
  },

  {
    id: 285,
    word: "тарелка",
    pronunciation: "/tarjelka/",
    translation: "piring",
    category: "noun",
    frequency: 285,
    examples: [
      { sentence: "Глубокая тарелка", translation: "Piring sup" },
      { sentence: "Мыть тарелки", translation: "Cuci piring" },
    ],
    lessonIds: [24],
  },

  {
    id: 286,
    word: "чашка",
    pronunciation: "/tɕaʂka/",
    translation: "cangkir",
    category: "noun",
    frequency: 286,
    examples: [
      { sentence: "Чашка чая", translation: "Secangkir teh" },
      { sentence: "Кофейная чашка", translation: "Cangkir kopi" },
    ],
    lessonIds: [24],
  },

  {
    id: 287,
    word: "стакан",
    pronunciation: "/stakan/",
    translation: "gelas",
    category: "noun",
    frequency: 287,
    examples: [
      { sentence: "Стакан воды", translation: "Segelas air" },
      { sentence: "Стакан сока", translation: "Segelas jus" },
    ],
    lessonIds: [24],
  },

  {
    id: 288,
    word: "ложка",
    pronunciation: "/loʐka/",
    translation: "sendok",
    category: "noun",
    frequency: 288,
    examples: [
      { sentence: "Чайная ложка", translation: "Sendok teh" },
      { sentence: "Столовая ложка", translation: "Sendok makan" },
    ],
    lessonIds: [24],
  },

  {
    id: 289,
    word: "вилка",
    pronunciation: "/vilka/",
    translation: "garpu",
    category: "noun",
    frequency: 289,
    examples: [
      { sentence: "Вилка и нож", translation: "Garpu dan pisau" },
      { sentence: "Положить вилку", translation: "Meletakkan garpu" },
    ],
    lessonIds: [25],
  },

  {
    id: 290,
    word: "нож",
    pronunciation: "/noʐ/",
    translation: "pisau",
    category: "noun",
    frequency: 290,
    examples: [
      { sentence: "Острый нож", translation: "Pisau tajam" },
      { sentence: "Резать ножом", translation: "Memotong dengan pisau" },
    ],
    lessonIds: [25],
  },

  {
    id: 291,
    word: "завтрак",
    pronunciation: "/zavtrak/",
    translation: "sarapan",
    category: "noun",
    frequency: 291,
    examples: [
      { sentence: "Завтрак готов", translation: "Sarapan siap" },
      { sentence: "Я завтракаю", translation: "Saya sarapan" },
    ],
    lessonIds: [25],
  },

  {
    id: 292,
    word: "обед",
    pronunciation: "/objed/",
    translation: "makan siang",
    category: "noun",
    frequency: 292,
    examples: [
      { sentence: "Время обеда", translation: "Waktu makan siang" },
      { sentence: "Обедать в ресторане", translation: "Makan siang di restoran" },
    ],
    lessonIds: [25],
  },

  {
    id: 293,
    word: "ужин",
    pronunciation: "/uʐin/",
    translation: "makan malam",
    category: "noun",
    frequency: 293,
    examples: [
      { sentence: "Приготовить ужин", translation: "Siapkan makan malam" },
      { sentence: "Ужин готов", translation: "Makan malam siap" },
    ],
    lessonIds: [25],
  },

  {
    id: 294,
    word: "ресторан",
    pronunciation: "/rjestoran/",
    translation: "restoran",
    category: "noun",
    frequency: 294,
    examples: [
      { sentence: "Пойти в ресторан", translation: "Pergi ke restoran" },
      { sentence: "Хороший ресторан", translation: "Restoran bagus" },
    ],
    lessonIds: [25],
  },

  {
    id: 295,
    word: "Россия",
    pronunciation: "/rossija/",
    translation: "Rusia",
    category: "noun",
    frequency: 295,
    examples: [
      { sentence: "Я из России", translation: "Saya dari Rusia" },
      { sentence: "Россия большая страна", translation: "Rusia negara besar" },
    ],
    lessonIds: [25],
  },

  {
    id: 296,
    word: "Москва",
    pronunciation: "/moskva/",
    translation: "Moskow",
    category: "noun",
    frequency: 296,
    examples: [
      { sentence: "Я живу в Москве", translation: "Saya tinggal di Moskow" },
      { sentence: "Москва столица", translation: "Moskow ibu kota" },
    ],
    lessonIds: [25],
  },

  {
    id: 297,
    word: "русский",
    pronunciation: "/russkij/",
    translation: "bahasa Rusia, orang Rusia",
    category: "adjective",
    frequency: 297,
    examples: [
      { sentence: "Я говорю по-русски", translation: "Saya bicara bahasa Rusia" },
      { sentence: "Русский язык", translation: "Bahasa Rusia" },
    ],
    lessonIds: [25],
  },

  {
    id: 298,
    word: "английский",
    pronunciation: "/anɡlijskij/",
    translation: "bahasa Inggris",
    category: "adjective",
    frequency: 298,
    examples: [
      { sentence: "Английский язык", translation: "Bahasa Inggris" },
      { sentence: "Я учу английский", translation: "Saya belajar bahasa Inggris" },
    ],
    lessonIds: [25],
  },

  {
    id: 299,
    word: "страна",
    pronunciation: "/strana/",
    translation: "negara",
    category: "noun",
    frequency: 299,
    examples: [
      { sentence: "Моя страна", translation: "Negara saya" },
      { sentence: "Другая страна", translation: "Negara lain" },
    ],
    lessonIds: [25],
  },

  {
    id: 300,
    word: "язык",
    pronunciation: "/jazɨk/",
    translation: "bahasa, lidah",
    category: "noun",
    frequency: 300,
    examples: [
      { sentence: "Изучать языки", translation: "Belajar bahasa" },
      { sentence: "Индонезийский язык", translation: "Bahasa Indonesia" },
    ],
    lessonIds: [25],
  },

  {
    id: 301,
    word: "вставать",
    pronunciation: "/vstavatʲ/",
    translation: "bangun tidur",
    category: "verb",
    frequency: 301,
    examples: [
      { sentence: "Я встаю в 7 утра", translation: "Saya bangun jam 7 pagi" },
      { sentence: "Вставай!", translation: "Bangun!" },
    ],
    wordFamily: [
      { word: "встать", translation: "bangun (perfektif)" },
    ],
    lessonIds: [26],
  },

  {
    id: 302,
    word: "ложиться",
    pronunciation: "/loʐitʲsja/",
    translation: "pergi tidur",
    category: "verb",
    frequency: 302,
    examples: [
      { sentence: "Я ложусь в 11", translation: "Saya tidur jam 11" },
      { sentence: "Ложись спать!", translation: "Pergi tidur!" },
    ],
    wordFamily: [
      { word: "лечь", translation: "tidur (perfektif)" },
    ],
    lessonIds: [26],
  },

  {
    id: 303,
    word: "умываться",
    pronunciation: "/umɨvatʲsja/",
    translation: "cuci muka",
    category: "verb",
    frequency: 303,
    examples: [
      { sentence: "Я умываюсь утром", translation: "Saya cuci muka pagi" },
      { sentence: "Умойся!", translation: "Cuci muka!" },
    ],
    lessonIds: [26],
  },

  {
    id: 304,
    word: "одеваться",
    pronunciation: "/odjevatʲsja/",
    translation: "berpakaian",
    category: "verb",
    frequency: 304,
    examples: [
      { sentence: "Я одеваюсь", translation: "Saya berpakaian" },
      { sentence: "Оденься!", translation: "Pakailah baju!" },
    ],
    wordFamily: [
      { word: "одеть", translation: "memakaikan" },
    ],
    lessonIds: [26],
  },

  {
    id: 305,
    word: "завтракать",
    pronunciation: "/zavtrakatʲ/",
    translation: "sarapan",
    category: "verb",
    frequency: 305,
    examples: [
      { sentence: "Я завтракаю в 8", translation: "Saya sarapan jam 8" },
      { sentence: "Мы завтракаем вместе", translation: "Kami sarapan bersama" },
    ],
    lessonIds: [26],
  },

  {
    id: 306,
    word: "обедать",
    pronunciation: "/objedatʲ/",
    translation: "makan siang",
    category: "verb",
    frequency: 306,
    examples: [
      { sentence: "Где ты обедаешь?", translation: "Di mana kamu makan siang?" },
      { sentence: "Я обедаю в столовой", translation: "Saya makan siang di kantin" },
    ],
    lessonIds: [26],
  },

  {
    id: 307,
    word: "ужинать",
    pronunciation: "/uʐinatʲ/",
    translation: "makan malam",
    category: "verb",
    frequency: 307,
    examples: [
      { sentence: "Мы ужинаем в 7", translation: "Kami makan malam jam 7" },
      { sentence: "Приходи ужинать!", translation: "Datanglah untuk makan malam!" },
    ],
    lessonIds: [26],
  },

  {
    id: 308,
    word: "гулять",
    pronunciation: "/ɡuljatʲ/",
    translation: "jalan-jalan",
    category: "verb",
    frequency: 308,
    examples: [
      { sentence: "Я гуляю в парке", translation: "Saya jalan-jalan di taman" },
      { sentence: "Пойдём гулять!", translation: "Ayo jalan-jalan!" },
    ],
    wordFamily: [
      { word: "погулять", translation: "jalan-jalan sebentar" },
    ],
    lessonIds: [26],
  },

  {
    id: 309,
    word: "отдыхать",
    pronunciation: "/otdɨxatʲ/",
    translation: "beristirahat",
    category: "verb",
    frequency: 309,
    examples: [
      { sentence: "Я отдыхаю после работы", translation: "Saya istirahat setelah kerja" },
      { sentence: "Отдыхай!", translation: "Beristirahatlah!" },
    ],
    wordFamily: [
      { word: "отдохнуть", translation: "beristirahat (perfektif)" },
    ],
    lessonIds: [26],
  },

  {
    id: 310,
    word: "кушать",
    pronunciation: "/kuʂatʲ/",
    translation: "makan (informal)",
    category: "verb",
    frequency: 310,
    examples: [
      { sentence: "Я хочу кушать", translation: "Saya mau makan" },
      { sentence: "Кушай!", translation: "Makanlah!" },
    ],
    lessonIds: [26],
  },

  {
    id: 311,
    word: "покупать",
    pronunciation: "/pokupatʲ/",
    translation: "membeli",
    category: "verb",
    frequency: 311,
    examples: [
      { sentence: "Я покупаю продукты", translation: "Saya membeli bahan makanan" },
      { sentence: "Где ты покупаешь одежду?", translation: "Di mana kamu membeli pakaian?" },
    ],
    wordFamily: [
      { word: "купить", translation: "beli (perfektif)" },
    ],
    lessonIds: [26],
  },

  {
    id: 312,
    word: "продавать",
    pronunciation: "/prodavatʲ/",
    translation: "menjual",
    category: "verb",
    frequency: 312,
    examples: [
      { sentence: "Они продают машины", translation: "Mereka menjual mobil" },
      { sentence: "Это не продаётся", translation: "Ini tidak dijual" },
    ],
    wordFamily: [
      { word: "продать", translation: "jual (perfektif)" },
    ],
    lessonIds: [26],
  },

  {
    id: 313,
    word: "цена",
    pronunciation: "/tsjena/",
    translation: "harga",
    category: "noun",
    frequency: 313,
    examples: [
      { sentence: "Цена билета", translation: "Harga tiket" },
      { sentence: "Какая цена?", translation: "Berapa harganya?" },
    ],
    lessonIds: [27],
  },

  {
    id: 314,
    word: "деньги",
    pronunciation: "/djenʲɡi/",
    translation: "uang",
    category: "noun",
    frequency: 314,
    examples: [
      { sentence: "У меня нет денег", translation: "Saya tidak punya uang" },
      { sentence: "Сколько денег?", translation: "Berapa uang?" },
    ],
    lessonIds: [27],
  },

  {
    id: 315,
    word: "карта",
    pronunciation: "/karta/",
    translation: "kartu, peta",
    category: "noun",
    frequency: 315,
    examples: [
      { sentence: "Кредитная карта", translation: "Kartu kredit" },
      { sentence: "Карта города", translation: "Peta kota" },
    ],
    lessonIds: [27],
  },

  {
    id: 316,
    word: "сумка",
    pronunciation: "/sumka/",
    translation: "tas",
    category: "noun",
    frequency: 316,
    examples: [
      { sentence: "Моя сумка", translation: "Tas saya" },
      { sentence: "Тяжёлая сумка", translation: "Tas berat" },
    ],
    lessonIds: [27],
  },

  {
    id: 317,
    word: "чемодан",
    pronunciation: "/tɕjemodan/",
    translation: "koper",
    category: "noun",
    frequency: 317,
    examples: [
      { sentence: "Упаковать чемодан", translation: "Mengemas koper" },
      { sentence: "Большой чемодан", translation: "Koper besar" },
    ],
    lessonIds: [27],
  },

  {
    id: 318,
    word: "ключ",
    pronunciation: "/kljutɕ/",
    translation: "kunci",
    category: "noun",
    frequency: 318,
    examples: [
      { sentence: "Ключ от дома", translation: "Kunci rumah" },
      { sentence: "Где мои ключи?", translation: "Di mana kunci saya?" },
    ],
    lessonIds: [27],
  },

  {
    id: 319,
    word: "телефон",
    pronunciation: "/tjeljefon/",
    translation: "telepon",
    category: "noun",
    frequency: 319,
    examples: [
      { sentence: "Мобильный телефон", translation: "Handphone" },
      { sentence: "Номер телефона", translation: "Nomor telepon" },
    ],
    lessonIds: [27],
  },

  {
    id: 320,
    word: "компьютер",
    pronunciation: "/kompjjutjer/",
    translation: "komputer",
    category: "noun",
    frequency: 320,
    examples: [
      { sentence: "Работать на компьютере", translation: "Bekerja di komputer" },
      { sentence: "Новый компьютер", translation: "Komputer baru" },
    ],
    lessonIds: [27],
  },

  {
    id: 321,
    word: "здоровье",
    pronunciation: "/zdorovjje/",
    translation: "kesehatan",
    category: "noun",
    frequency: 321,
    examples: [
      { sentence: "Как здоровье?", translation: "Bagaimana kesehatan?" },
      { sentence: "Будь здоров!", translation: "Sehat selalu!" },
    ],
    wordFamily: [
      { word: "здоровый", translation: "sehat" },
    ],
    lessonIds: [27],
  },

  {
    id: 322,
    word: "болезнь",
    pronunciation: "/boljeznʲ/",
    translation: "penyakit",
    category: "noun",
    frequency: 322,
    examples: [
      { sentence: "Серьёзная болезнь", translation: "Penyakit serius" },
      { sentence: "Он пропустил работу из-за болезни", translation: "Dia tidak masuk kerja karena sakit" },
    ],
    wordFamily: [
      { word: "болеть", translation: "sakit" },
    ],
    lessonIds: [27],
  },

  {
    id: 323,
    word: "врач",
    pronunciation: "/vratɕ/",
    translation: "dokter",
    category: "noun",
    frequency: 323,
    examples: [
      { sentence: "Пойти к врачу", translation: "Pergi ke dokter" },
      { sentence: "Вызвать врача", translation: "Panggil dokter" },
    ],
    lessonIds: [27],
  },

  {
    id: 324,
    word: "аптека",
    pronunciation: "/aptjeka/",
    translation: "apotek",
    category: "noun",
    frequency: 324,
    examples: [
      { sentence: "Купить лекарство в аптеке", translation: "Beli obat di apotek" },
      { sentence: "Ночная аптека", translation: "Apotek malam" },
    ],
    lessonIds: [27],
  },

  {
    id: 325,
    word: "лекарство",
    pronunciation: "/ljekarstvo/",
    translation: "obat",
    category: "noun",
    frequency: 325,
    examples: [
      { sentence: "Принять лекарство", translation: "Minum obat" },
      { sentence: "Вкусное лекарство", translation: "Obat yang enak" },
    ],
    lessonIds: [28],
  },

  {
    id: 326,
    word: "боль",
    pronunciation: "/bolʲ/",
    translation: "sakit, nyeri",
    category: "noun",
    frequency: 326,
    examples: [
      { sentence: "У меня сильная боль", translation: "Saya sakit parah" },
      { sentence: "Где болит?", translation: "Di mana sakitnya?" },
    ],
    wordFamily: [
      { word: "больной", translation: "sakit" },
    ],
    lessonIds: [28],
  },

  {
    id: 327,
    word: "температура",
    pronunciation: "/tjempjeratura/",
    translation: "suhu, demam",
    category: "noun",
    frequency: 327,
    examples: [
      { sentence: "У него температура", translation: "Dia demam" },
      { sentence: "Измерить температуру", translation: "Mengukur suhu" },
    ],
    lessonIds: [28],
  },

  {
    id: 328,
    word: "кашель",
    pronunciation: "/kaʂjelʲ/",
    translation: "batuk",
    category: "noun",
    frequency: 328,
    examples: [
      { sentence: "Сильный кашель", translation: "Batuk parah" },
      { sentence: "Лекарство от кашля", translation: "Obat batuk" },
    ],
    lessonIds: [28],
  },

  {
    id: 329,
    word: "насморк",
    pronunciation: "/nasmork/",
    translation: "pilek",
    category: "noun",
    frequency: 329,
    examples: [
      { sentence: "У меня насморк", translation: "Saya pilek" },
      { sentence: "Лечить насморк", translation: "Mengobati pilek" },
    ],
    lessonIds: [28],
  },

  {
    id: 330,
    word: "грипп",
    pronunciation: "/ɡripp/",
    translation: "flu",
    category: "noun",
    frequency: 330,
    examples: [
      { sentence: "Грипп опасен", translation: "Flu berbahaya" },
      { sentence: "Прививка от гриппа", translation: "Vaksin flu" },
    ],
    lessonIds: [28],
  },

  {
    id: 331,
    word: "урок",
    pronunciation: "/urok/",
    translation: "pelajaran",
    category: "noun",
    frequency: 331,
    examples: [
      { sentence: "Интересный урок", translation: "Pelajaran menarik" },
      { sentence: "Урок русского языка", translation: "Pelajaran bahasa Rusia" },
    ],
    lessonIds: [28],
  },

  {
    id: 332,
    word: "учитель",
    pronunciation: "/utɕitjelʲ/",
    translation: "guru",
    category: "noun",
    frequency: 332,
    examples: [
      { sentence: "Хороший учитель", translation: "Guru yang baik" },
      { sentence: "Учитель русского языка", translation: "Guru bahasa Rusia" },
    ],
    wordFamily: [
      { word: "учить", translation: "mengajar" },
    ],
    lessonIds: [28],
  },

  {
    id: 333,
    word: "ученик",
    pronunciation: "/utɕjenik/",
    translation: "murid",
    category: "noun",
    frequency: 333,
    examples: [
      { sentence: "Прилежный ученик", translation: "Murid rajin" },
      { sentence: "Ученики слушают", translation: "Murid-murid mendengarkan" },
    ],
    lessonIds: [28],
  },

  {
    id: 334,
    word: "книга",
    pronunciation: "/kniɡa/",
    translation: "buku",
    category: "noun",
    frequency: 334,
    examples: [
      { sentence: "Интересная книга", translation: "Buku menarik" },
      { sentence: "Читать книгу", translation: "Membaca buku" },
    ],
    lessonIds: [28],
  },

  {
    id: 335,
    word: "тетрадь",
    pronunciation: "/tjetradʲ/",
    translation: "buku catatan",
    category: "noun",
    frequency: 335,
    examples: [
      { sentence: "Новая тетрадь", translation: "Buku catatan baru" },
      { sentence: "Писать в тетради", translation: "Menulis di buku catatan" },
    ],
    lessonIds: [28],
  },

  {
    id: 336,
    word: "ручка",
    pronunciation: "/rutɕka/",
    translation: "pulpen",
    category: "noun",
    frequency: 336,
    examples: [
      { sentence: "Синяя ручка", translation: "Pulpen biru" },
      { sentence: "Писать ручкой", translation: "Menulis dengan pulpen" },
    ],
    lessonIds: [28],
  },

  {
    id: 337,
    word: "карандаш",
    pronunciation: "/karandaʂ/",
    translation: "pensil",
    category: "noun",
    frequency: 337,
    examples: [
      { sentence: "Простой карандаш", translation: "Pensil biasa" },
      { sentence: "Рисовать карандашом", translation: "Menggambar dengan pensil" },
    ],
    lessonIds: [29],
  },

  {
    id: 338,
    word: "задание",
    pronunciation: "/zadanije/",
    translation: "tugas",
    category: "noun",
    frequency: 338,
    examples: [
      { sentence: "Домашнее задание", translation: "PR" },
      { sentence: "Выполнить задание", translation: "Mengerjakan tugas" },
    ],
    lessonIds: [29],
  },

  {
    id: 339,
    word: "экзамен",
    pronunciation: "/ɛkzamjen/",
    translation: "ujian",
    category: "noun",
    frequency: 339,
    examples: [
      { sentence: "Сдать экзамен", translation: "Lulus ujian" },
      { sentence: "Экзамен по русскому", translation: "Ujian bahasa Rusia" },
    ],
    lessonIds: [29],
  },

  {
    id: 340,
    word: "школа",
    pronunciation: "/ʂkola/",
    translation: "sekolah",
    category: "noun",
    frequency: 340,
    examples: [
      { sentence: "Я хожу в школу", translation: "Saya pergi ke sekolah" },
      { sentence: "Школьный учитель", translation: "Guru sekolah" },
    ],
    lessonIds: [29],
  },

  {
    id: 341,
    word: "животное",
    pronunciation: "/ʐivotnoje/",
    translation: "binatang",
    category: "noun",
    frequency: 341,
    examples: [
      { sentence: "Домашнее животное", translation: "Hewan peliharaan" },
      { sentence: "Дикое животное", translation: "Binatang liar" },
    ],
    lessonIds: [29],
  },

  {
    id: 342,
    word: "собака",
    pronunciation: "/sobaka/",
    translation: "anjing",
    category: "noun",
    frequency: 342,
    examples: [
      { sentence: "У меня есть собака", translation: "Saya punya anjing" },
      { sentence: "Верная собака", translation: "Anjing setia" },
    ],
    lessonIds: [29],
  },

  {
    id: 343,
    word: "кошка",
    pronunciation: "/koʂka/",
    translation: "kucing",
    category: "noun",
    frequency: 343,
    examples: [
      { sentence: "Моя кошка", translation: "Kucingku" },
      { sentence: "Маленький котёнок", translation: "Anak kucing kecil" },
    ],
    lessonIds: [29],
  },

  {
    id: 344,
    word: "птица",
    pronunciation: "/ptitsa/",
    translation: "burung",
    category: "noun",
    frequency: 344,
    examples: [
      { sentence: "Птицы поют", translation: "Burung bernyanyi" },
      { sentence: "Перелётные птицы", translation: "Burung migran" },
    ],
    lessonIds: [29],
  },

  {
    id: 345,
    word: "рыба",
    pronunciation: "/rɨba/",
    translation: "ikan",
    category: "noun",
    frequency: 345,
    examples: [
      { sentence: "Ловить рыбу", translation: "Memancing ikan" },
      { sentence: "Аквариумные рыбки", translation: "Ikan akuarium" },
    ],
    lessonIds: [29],
  },

  {
    id: 346,
    word: "лошадь",
    pronunciation: "/loʂadʲ/",
    translation: "kuda",
    category: "noun",
    frequency: 346,
    examples: [
      { sentence: "Красивая лошадь", translation: "Kuda indah" },
      { sentence: "Кататься на лошади", translation: "Menunggang kuda" },
    ],
    lessonIds: [29],
  },

  {
    id: 347,
    word: "корова",
    pronunciation: "/korova/",
    translation: "sapi",
    category: "noun",
    frequency: 347,
    examples: [
      { sentence: "Корова даёт молоко", translation: "Sapi memberi susu" },
      { sentence: "Стадо коров", translation: "Kawanan sapi" },
    ],
    lessonIds: [29],
  },

  {
    id: 348,
    word: "слон",
    pronunciation: "/slon/",
    translation: "gajah",
    category: "noun",
    frequency: 348,
    examples: [
      { sentence: "Большой слон", translation: "Gajah besar" },
      { sentence: "Слон живёт в Африке", translation: "Gajah hidup di Afrika" },
    ],
    lessonIds: [29],
  },

  {
    id: 349,
    word: "медведь",
    pronunciation: "/mjedvjedʲ/",
    translation: "beruang",
    category: "noun",
    frequency: 349,
    examples: [
      { sentence: "Бурый медведь", translation: "Beruang coklat" },
      { sentence: "Медведь зимой спит", translation: "Beruang tidur di musim dingin" },
    ],
    lessonIds: [30],
  },

  {
    id: 350,
    word: "волк",
    pronunciation: "/volk/",
    translation: "serigala",
    category: "noun",
    frequency: 350,
    examples: [
      { sentence: "Серый волк", translation: "Serigala abu-abu" },
      { sentence: "Волк воет", translation: "Serigala melolong" },
    ],
    lessonIds: [30],
  },

  {
    id: 351,
    word: "деревня",
    pronunciation: "/djerjevnja/",
    translation: "desa",
    category: "noun",
    frequency: 351,
    examples: [
      { sentence: "Жить в деревне", translation: "Tinggal di desa" },
      { sentence: "Маленькая деревня", translation: "Desa kecil" },
    ],
    lessonIds: [30],
  },

  {
    id: 352,
    word: "дача",
    pronunciation: "/datɕa/",
    translation: "dacha, rumah pedesaan",
    category: "noun",
    frequency: 352,
    examples: [
      { sentence: "Поехать на дачу", translation: "Pergi ke dacha" },
      { sentence: "Дача за городом", translation: "Dacha di luar kota" },
    ],
    lessonIds: [30],
  },

  {
    id: 353,
    word: "работа",
    pronunciation: "/rabota/",
    translation: "pekerjaan",
    category: "noun",
    frequency: 353,
    examples: [
      { sentence: "Интересная работа", translation: "Pekerjaan menarik" },
      { sentence: "Потерять работу", translation: "Kehilangan pekerjaan" },
    ],
    wordFamily: [
      { word: "рабочий", translation: "pekerja" },
    ],
    lessonIds: [30],
  },

  {
    id: 354,
    word: "завод",
    pronunciation: "/zavod/",
    translation: "pabrik",
    category: "noun",
    frequency: 354,
    examples: [
      { sentence: "Работать на заводе", translation: "Bekerja di pabrik" },
      { sentence: "Автомобильный завод", translation: "Pabrik mobil" },
    ],
    lessonIds: [30],
  },

  {
    id: 355,
    word: "офис",
    pronunciation: "/ofis/",
    translation: "kantor",
    category: "noun",
    frequency: 355,
    examples: [
      { sentence: "Работать в офисе", translation: "Bekerja di kantor" },
      { sentence: "Офисное здание", translation: "Gedung kantor" },
    ],
    lessonIds: [30],
  },

  {
    id: 356,
    word: "компания",
    pronunciation: "/kompanija/",
    translation: "perusahaan",
    category: "noun",
    frequency: 356,
    examples: [
      { sentence: "Большая компания", translation: "Perusahaan besar" },
      { sentence: "Иностранная компания", translation: "Perusahaan asing" },
    ],
    lessonIds: [30],
  },

  {
    id: 357,
    word: "деньги",
    pronunciation: "/djenʲɡi/",
    translation: "uang",
    category: "noun",
    frequency: 357,
    examples: [
      { sentence: "Зарабатывать деньги", translation: "Menghasilkan uang" },
      { sentence: "Много денег", translation: "Banyak uang" },
    ],
    lessonIds: [30],
  },

  {
    id: 358,
    word: "зарплата",
    pronunciation: "/zarplata/",
    translation: "gaji",
    category: "noun",
    frequency: 358,
    examples: [
      { sentence: "Высокая зарплата", translation: "Gaji tinggi" },
      { sentence: "Получить зарплату", translation: "Menerima gaji" },
    ],
    lessonIds: [30],
  },

  {
    id: 359,
    word: "отпуск",
    pronunciation: "/otpusk/",
    translation: "liburan, cuti",
    category: "noun",
    frequency: 359,
    examples: [
      { sentence: "Летний отпуск", translation: "Liburan musim panas" },
      { sentence: "Я в отпуске", translation: "Saya sedang cuti" },
    ],
    lessonIds: [30],
  },

  {
    id: 360,
    word: "путешествие",
    pronunciation: "/putjeʂjestvije/",
    translation: "perjalanan",
    category: "noun",
    frequency: 360,
    examples: [
      { sentence: "Путешествие за границу", translation: "Perjalanan ke luar negeri" },
      { sentence: "Интересное путешествие", translation: "Perjalanan menarik" },
    ],
    wordFamily: [
      { word: "путешествовать", translation: "bepergian" },
    ],
    lessonIds: [30],
  },

  {
    id: 361,
    word: "спокойный",
    pronunciation: "/spokojnɨj/",
    translation: "tenang",
    category: "adjective",
    frequency: 361,
    examples: [
      { sentence: "Спокойная ночь", translation: "Malam tenang" },
      { sentence: "Спокойный человек", translation: "Orang tenang" },
    ],
    wordFamily: [
      { word: "спокойно", translation: "dengan tenang" },
    ],
    lessonIds: [31],
  },

  {
    id: 362,
    word: "весёлый",
    pronunciation: "/vjesёlɨj/",
    translation: "ceria, gembira",
    category: "adjective",
    frequency: 362,
    examples: [
      { sentence: "Весёлый праздник", translation: "Pesta meriah" },
      { sentence: "Весёлая компания", translation: "Kelompok ceria" },
    ],
    wordFamily: [
      { word: "веселье", translation: "kegembiraan" },
    ],
    lessonIds: [31],
  },

  {
    id: 363,
    word: "счастливый",
    pronunciation: "/stɕastlivɨj/",
    translation: "bahagia",
    category: "adjective",
    frequency: 363,
    examples: [
      { sentence: "Счастливый человек", translation: "Orang bahagia" },
      { sentence: "Счастливая семья", translation: "Keluarga bahagia" },
    ],
    wordFamily: [
      { word: "счастье", translation: "kebahagiaan" },
    ],
    lessonIds: [31],
  },

  {
    id: 364,
    word: "усталый",
    pronunciation: "/ustalɨj/",
    translation: "lelah",
    category: "adjective",
    frequency: 364,
    examples: [
      { sentence: "Я очень усталый", translation: "Saya sangat lelah" },
      { sentence: "Усталый после работы", translation: "Lelah setelah kerja" },
    ],
    wordFamily: [
      { word: "устать", translation: "menjadi lelah" },
    ],
    lessonIds: [31],
  },

  {
    id: 365,
    word: "сердитый",
    pronunciation: "/sjerditɨj/",
    translation: "marah",
    category: "adjective",
    frequency: 365,
    examples: [
      { sentence: "Он сердитый", translation: "Dia marah" },
      { sentence: "Сердитый голос", translation: "Suara marah" },
    ],
    wordFamily: [
      { word: "сердиться", translation: "marah" },
    ],
    lessonIds: [31],
  },

  {
    id: 366,
    word: "любопытный",
    pronunciation: "/ljubopɨtnɨj/",
    translation: "ingin tahu",
    category: "adjective",
    frequency: 366,
    examples: [
      { sentence: "Любопытный ребёнок", translation: "Anak yang ingin tahu" },
      { sentence: "Любопытный взгляд", translation: "Pandangan penasaran" },
    ],
    lessonIds: [31],
  },

  {
    id: 367,
    word: "интересный",
    pronunciation: "/intjerjesnɨj/",
    translation: "menarik",
    category: "adjective",
    frequency: 367,
    examples: [
      { sentence: "Интересный фильм", translation: "Film menarik" },
      { sentence: "Интересная книга", translation: "Buku menarik" },
    ],
    wordFamily: [
      { word: "интерес", translation: "ketertarikan" },
    ],
    lessonIds: [31],
  },

  {
    id: 368,
    word: "скучный",
    pronunciation: "/skutɕnɨj/",
    translation: "membosankan",
    category: "adjective",
    frequency: 368,
    examples: [
      { sentence: "Скучный урок", translation: "Pelajaran membosankan" },
      { sentence: "Очень скучно", translation: "Sangat membosankan" },
    ],
    lessonIds: [31],
  },

  {
    id: 369,
    word: "трудный",
    pronunciation: "/trudnɨj/",
    translation: "sulit",
    category: "adjective",
    frequency: 369,
    examples: [
      { sentence: "Трудный экзамен", translation: "Ujian sulit" },
      { sentence: "Трудная задача", translation: "Tugas sulit" },
    ],
    wordFamily: [
      { word: "трудно", translation: "sulit (adv)" },
    ],
    lessonIds: [31],
  },

  {
    id: 370,
    word: "простой",
    pronunciation: "/prostoj/",
    translation: "sederhana, mudah",
    category: "adjective",
    frequency: 370,
    examples: [
      { sentence: "Простой вопрос", translation: "Pertanyaan mudah" },
      { sentence: "Простая задача", translation: "Tugas sederhana" },
    ],
    wordFamily: [
      { word: "просто", translation: "mudah (adv)" },
    ],
    lessonIds: [31],
  },

  {
    id: 371,
    word: "начинать",
    pronunciation: "/natɕinatʲ/",
    translation: "mulai (imperfektif)",
    category: "verb",
    frequency: 371,
    examples: [
      { sentence: "Я начинаю урок", translation: "Saya mulai pelajaran" },
      { sentence: "Начинаем!", translation: "Kita mulai!" },
    ],
    wordFamily: [
      { word: "начать", translation: "mulai (perfektif)" },
    ],
    lessonIds: [31],
  },

  {
    id: 372,
    word: "кончать",
    pronunciation: "/kontɕatʲ/",
    translation: "selesai (imperfektif)",
    category: "verb",
    frequency: 372,
    examples: [
      { sentence: "Я кончаю работу", translation: "Saya selesai kerja" },
      { sentence: "Кончай!", translation: "Hentikan!" },
    ],
    wordFamily: [
      { word: "кончить", translation: "selesai (perfektif)" },
    ],
    lessonIds: [31],
  },

  {
    id: 373,
    word: "открывать",
    pronunciation: "/otkrɨvatʲ/",
    translation: "membuka (imperfektif)",
    category: "verb",
    frequency: 373,
    examples: [
      { sentence: "Я открываю дверь", translation: "Saya membuka pintu" },
      { sentence: "Магазин открывается в 9", translation: "Toko buka jam 9" },
    ],
    wordFamily: [
      { word: "открыть", translation: "buka (perfektif)" },
    ],
    lessonIds: [32],
  },

  {
    id: 374,
    word: "закрывать",
    pronunciation: "/zakrɨvatʲ/",
    translation: "menutup (imperfektif)",
    category: "verb",
    frequency: 374,
    examples: [
      { sentence: "Я закрываю окно", translation: "Saya menutup jendela" },
      { sentence: "Магазин закрывается в 8", translation: "Toko tutup jam 8" },
    ],
    wordFamily: [
      { word: "закрыть", translation: "tutup (perfektif)" },
    ],
    lessonIds: [32],
  },

  {
    id: 375,
    word: "класть",
    pronunciation: "/klastʲ/",
    translation: "meletakkan (imperfektif)",
    category: "verb",
    frequency: 375,
    examples: [
      { sentence: "Я кладу книгу на стол", translation: "Saya meletakkan buku di meja" },
      { sentence: "Куда ты положил ключи?", translation: "Di mana kamu meletakkan kunci?" },
    ],
    wordFamily: [
      { word: "положить", translation: "letakkan (perfektif)" },
    ],
    lessonIds: [32],
  },

  {
    id: 376,
    word: "брать",
    pronunciation: "/bratʲ/",
    translation: "mengambil (imperfektif)",
    category: "verb",
    frequency: 376,
    examples: [
      { sentence: "Я беру книгу", translation: "Saya mengambil buku" },
      { sentence: "Возьми!", translation: "Ambil!" },
    ],
    wordFamily: [
      { word: "взять", translation: "ambil (perfektif)" },
    ],
    lessonIds: [32],
  },

  {
    id: 377,
    word: "давать",
    pronunciation: "/davatʲ/",
    translation: "memberi (imperfektif)",
    category: "verb",
    frequency: 377,
    examples: [
      { sentence: "Я даю тебе книгу", translation: "Saya memberi kamu buku" },
      { sentence: "Дай мне!", translation: "Berikan saya!" },
    ],
    wordFamily: [
      { word: "дать", translation: "beri (perfektif)" },
    ],
    lessonIds: [32],
  },

  {
    id: 378,
    word: "держать",
    pronunciation: "/djerʐatʲ/",
    translation: "memegang",
    category: "verb",
    frequency: 378,
    examples: [
      { sentence: "Я держу сумку", translation: "Saya memegang tas" },
      { sentence: "Держи!", translation: "Pegang!" },
    ],
    lessonIds: [32],
  },

  {
    id: 379,
    word: "нести",
    pronunciation: "/njesti/",
    translation: "membawa (berjalan)",
    category: "verb",
    frequency: 379,
    examples: [
      { sentence: "Я несу сумку", translation: "Saya membawa tas" },
      { sentence: "Что ты несёшь?", translation: "Apa yang kamu bawa?" },
    ],
    wordFamily: [
      { word: "принести", translation: "bawakan" },
    ],
    lessonIds: [32],
  },

  {
    id: 380,
    word: "везти",
    pronunciation: "/vjezti/",
    translation: "membawa (kendaraan)",
    category: "verb",
    frequency: 380,
    examples: [
      { sentence: "Я везу детей в школу", translation: "Saya antar anak ke sekolah" },
      { sentence: "Поезд везёт груз", translation: "Kereta membawa barang" },
    ],
    lessonIds: [32],
  },

  {
    id: 381,
    word: "интернет",
    pronunciation: "/intjernjet/",
    translation: "internet",
    category: "noun",
    frequency: 381,
    examples: [
      { sentence: "Выйти в интернет", translation: "Online" },
      { sentence: "Скорость интернета", translation: "Kecepatan internet" },
    ],
    lessonIds: [32],
  },

  {
    id: 382,
    word: "сайт",
    pronunciation: "/sajt/",
    translation: "situs web",
    category: "noun",
    frequency: 382,
    examples: [
      { sentence: "Интересный сайт", translation: "Situs menarik" },
      { sentence: "Создать сайт", translation: "Membuat situs" },
    ],
    lessonIds: [32],
  },

  {
    id: 383,
    word: "почта",
    pronunciation: "/potɕta/",
    translation: "pos, surel",
    category: "noun",
    frequency: 383,
    examples: [
      { sentence: "Электронная почта", translation: "Surel" },
      { sentence: "Почтовый ящик", translation: "Kotak pos" },
    ],
    lessonIds: [32],
  },

  {
    id: 384,
    word: "сообщение",
    pronunciation: "/soobɕːjenije/",
    translation: "pesan",
    category: "noun",
    frequency: 384,
    examples: [
      { sentence: "Отправить сообщение", translation: "Kirim pesan" },
      { sentence: "Текстовое сообщение", translation: "Pesan teks" },
    ],
    lessonIds: [32],
  },

  {
    id: 385,
    word: "новость",
    pronunciation: "/novostʲ/",
    translation: "berita",
    category: "noun",
    frequency: 385,
    examples: [
      { sentence: "Хорошая новость!", translation: "Kabar baik!" },
      { sentence: "Новости по телевизору", translation: "Berita di TV" },
    ],
    lessonIds: [33],
  },

  {
    id: 386,
    word: "телевизор",
    pronunciation: "/tjeljevizor/",
    translation: "televisi",
    category: "noun",
    frequency: 386,
    examples: [
      { sentence: "Смотреть телевизор", translation: "Menonton TV" },
      { sentence: "Включить телевизор", translation: "Menyalakan TV" },
    ],
    lessonIds: [33],
  },

  {
    id: 387,
    word: "фильм",
    pronunciation: "/filʲm/",
    translation: "film",
    category: "noun",
    frequency: 387,
    examples: [
      { sentence: "Интересный фильм", translation: "Film menarik" },
      { sentence: "Смотреть фильм", translation: "Menonton film" },
    ],
    lessonIds: [33],
  },

  {
    id: 388,
    word: "музыка",
    pronunciation: "/muzɨka/",
    translation: "musik",
    category: "noun",
    frequency: 388,
    examples: [
      { sentence: "Слушать музыку", translation: "Mendengarkan musik" },
      { sentence: "Классическая музыка", translation: "Musik klasik" },
    ],
    lessonIds: [33],
  },

  {
    id: 389,
    word: "фото",
    pronunciation: "/foto/",
    translation: "foto",
    category: "noun",
    frequency: 389,
    examples: [
      { sentence: "Сделать фото", translation: "Ambil foto" },
      { sentence: "Красивое фото", translation: "Foto indah" },
    ],
    lessonIds: [33],
  },

  {
    id: 390,
    word: "камера",
    pronunciation: "/kamjera/",
    translation: "kamera",
    category: "noun",
    frequency: 390,
    examples: [
      { sentence: "Цифровая камера", translation: "Kamera digital" },
      { sentence: "Камера телефона", translation: "Kamera telepon" },
    ],
    lessonIds: [33],
  },

  {
    id: 391,
    word: "растение",
    pronunciation: "/rastjenije/",
    translation: "tanaman",
    category: "noun",
    frequency: 391,
    examples: [
      { sentence: "Комнатное растение", translation: "Tanaman hias" },
      { sentence: "Поливать растения", translation: "Menyiram tanaman" },
    ],
    lessonIds: [33],
  },

  {
    id: 392,
    word: "дерево",
    pronunciation: "/djerjevo/",
    translation: "pohon",
    category: "noun",
    frequency: 392,
    examples: [
      { sentence: "Высокое дерево", translation: "Pohon tinggi" },
      { sentence: "Зелёное дерево", translation: "Pohon hijau" },
    ],
    lessonIds: [33],
  },

  {
    id: 393,
    word: "цветок",
    pronunciation: "/tsvjetok/",
    translation: "bunga",
    category: "noun",
    frequency: 393,
    examples: [
      { sentence: "Красивый цветок", translation: "Bunga indah" },
      { sentence: "Букет цветов", translation: "Karangan bunga" },
    ],
    lessonIds: [33],
  },

  {
    id: 394,
    word: "трава",
    pronunciation: "/trava/",
    translation: "rumput",
    category: "noun",
    frequency: 394,
    examples: [
      { sentence: "Зелёная трава", translation: "Rumput hijau" },
      { sentence: "Стричь траву", translation: "Memotong rumput" },
    ],
    lessonIds: [33],
  },

  {
    id: 395,
    word: "поле",
    pronunciation: "/polje/",
    translation: "ladang",
    category: "noun",
    frequency: 395,
    examples: [
      { sentence: "Широкое поле", translation: "Ladang luas" },
      { sentence: "Футбольное поле", translation: "Lapangan sepak bola" },
    ],
    lessonIds: [33],
  },

  {
    id: 396,
    word: "озеро",
    pronunciation: "/ozjero/",
    translation: "danau",
    category: "noun",
    frequency: 396,
    examples: [
      { sentence: "Глубокое озеро", translation: "Danau dalam" },
      { sentence: "Купаться в озере", translation: "Berenang di danau" },
    ],
    lessonIds: [33],
  },

  {
    id: 397,
    word: "остров",
    pronunciation: "/ostrov/",
    translation: "pulau",
    category: "noun",
    frequency: 397,
    examples: [
      { sentence: "Необитаемый остров", translation: "Pulau tak berpenghuni" },
      { sentence: "На острове тепло", translation: "Di pulau hangat" },
    ],
    lessonIds: [34],
  },

  {
    id: 398,
    word: "берег",
    pronunciation: "/bjerjeɡ/",
    translation: "tepi, pantai",
    category: "noun",
    frequency: 398,
    examples: [
      { sentence: "На берегу моря", translation: "Di tepi laut" },
      { sentence: "Песчаный берег", translation: "Pantai berpasir" },
    ],
    lessonIds: [34],
  },

  {
    id: 399,
    word: "волна",
    pronunciation: "/volna/",
    translation: "gelombang",
    category: "noun",
    frequency: 399,
    examples: [
      { sentence: "Большая волна", translation: "Gelombang besar" },
      { sentence: "Волны бьются о берег", translation: "Ombak menghantam pantai" },
    ],
    lessonIds: [34],
  },

  {
    id: 400,
    word: "камень",
    pronunciation: "/kamjenʲ/",
    translation: "batu",
    category: "noun",
    frequency: 400,
    examples: [
      { sentence: "Тяжёлый камень", translation: "Batu berat" },
      { sentence: "Бросать камень", translation: "Melempar batu" },
    ],
    lessonIds: [34],
  },

  {
    id: 401,
    word: "космос",
    pronunciation: "/kosmos/",
    translation: "angkasa luar",
    category: "noun",
    frequency: 401,
    examples: [
      { sentence: "Полёт в космос", translation: "Penerbangan ke angkasa" },
      { sentence: "Космическая станция", translation: "Stasiun luar angkasa" },
    ],
    lessonIds: [34],
  },

  {
    id: 402,
    word: "звезда",
    pronunciation: "/zvjezda/",
    translation: "bintang",
    category: "noun",
    frequency: 402,
    examples: [
      { sentence: "Звёзды на небе", translation: "Bintang di langit" },
      { sentence: "Путеводная звезда", translation: "Bintang penuntun" },
    ],
    lessonIds: [34],
  },

  {
    id: 403,
    word: "планета",
    pronunciation: "/planjeta/",
    translation: "planet",
    category: "noun",
    frequency: 403,
    examples: [
      { sentence: "Земля — планета", translation: "Bumi adalah planet" },
      { sentence: "Другая планета", translation: "Planet lain" },
    ],
    lessonIds: [34],
  },

  {
    id: 404,
    word: "мир",
    pronunciation: "/mir/",
    translation: "dunia, damai",
    category: "noun",
    frequency: 404,
    examples: [
      { sentence: "Весь мир", translation: "Seluruh dunia" },
      { sentence: "Мир во всём мире", translation: "Perdamaian di seluruh dunia" },
    ],
    lessonIds: [34],
  },

  {
    id: 405,
    word: "земля",
    pronunciation: "/zjemlja/",
    translation: "bumi, tanah",
    category: "noun",
    frequency: 405,
    examples: [
      { sentence: "Земля круглая", translation: "Bumi bulat" },
      { sentence: "Родная земля", translation: "Tanah air" },
    ],
    lessonIds: [34],
  }

];
