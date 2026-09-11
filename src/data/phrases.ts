export interface PhraseItem {
  id: number;
  phrase: string;
  pronunciation?: string;
  translation: string;
  literal?: string;
  category: string;
  context?: string;
}

export interface PhraseCategory {
  id: string;
  titleRu: string;
  titleId: string;
  icon: string;
}

export const phraseCategories: PhraseCategory[] = [
  { id: "all", titleRu: "Все темы", titleId: "Semua Topik", icon: "🌐" },
  { id: "greetings", titleRu: "Приветствия и прощания", titleId: "Salam & Perpisahan", icon: "👋" },
  { id: "courtesy", titleRu: "Вежливость и этикет", titleId: "Kesopanan & Etika", icon: "🙏" },
  { id: "questions", titleRu: "Вопросы и ориентирование", titleId: "Pertanyaan & Arah", icon: "🧭" },
  { id: "shopping", titleRu: "Покупки и деньги", titleId: "Belanja & Uang", icon: "💳" },
  { id: "dining", titleRu: "В кафе и ресторане", titleId: "Di Restoran & Kafe", icon: "🍽️" },
  { id: "emergencies", titleRu: "Помощь и непредвиденное", titleId: "Bantuan & Darurat", icon: "🚨" },
  { id: "conversation", titleRu: "Разговорные реплики", titleId: "Percakapan Sehari-hari", icon: "💬" },
];

export const phrasesId: PhraseItem[] = [
  // Greetings
  {
    id: 1,
    phrase: "Selamat pagi",
    pronunciation: "/səlamat paɡi/",
    translation: "Доброе утро",
    literal: "благополучное утро (до 11:00)",
    category: "greetings",
    context: "Стандартное вежливое утреннее приветствие"
  },
  {
    id: 2,
    phrase: "Selamat siang",
    pronunciation: "/səlamat siaŋ/",
    translation: "Добрый день",
    literal: "благополучный день (11:00 – 15:00)",
    category: "greetings",
    context: "Приветствие в разгар дня"
  },
  {
    id: 3,
    phrase: "Selamat sore",
    pronunciation: "/səlamat sorə/",
    translation: "Добрый вечер",
    literal: "благополучное предвечернее время (15:00 – 19:00)",
    category: "greetings",
    context: "Приветствие во второй половине дня до заката"
  },
  {
    id: 4,
    phrase: "Selamat malam",
    pronunciation: "/səlamat malam/",
    translation: "Добрый вечер / Спокойной ночи",
    literal: "благополучная ночь (после 19:00)",
    category: "greetings",
    context: "Вечернее приветствие и пожелание спокойной ночи"
  },
  {
    id: 5,
    phrase: "Selamat datang",
    pronunciation: "/səlamat dataŋ/",
    translation: "Добро пожаловать",
    literal: "благополучный приход",
    category: "greetings",
    context: "Встреча гостей, в отелях, магазинах, на входе"
  },
  {
    id: 6,
    phrase: "Sampai jumpa",
    pronunciation: "/sampai dʒumpa/",
    translation: "До свидания / До встречи",
    literal: "до встречи",
    category: "greetings",
    context: "Самое универсальное прощание"
  },
  {
    id: 7,
    phrase: "Sampai jumpa lagi",
    pronunciation: "/sampai dʒumpa laɡi/",
    translation: "До скорой встречи / Увидимся снова",
    literal: "до встречи снова",
    category: "greetings",
    context: "Дружеское прощание"
  },
  {
    id: 8,
    phrase: "Sampai nanti",
    pronunciation: "/sampai nanti/",
    translation: "До скорого / До скорого времени",
    literal: "до позже",
    category: "greetings",
    context: "Когда планируете встретиться позже в тот же день"
  },
  {
    id: 9,
    phrase: "Sampai besok",
    pronunciation: "/sampai besok/",
    translation: "До завтра",
    literal: "до завтра",
    category: "greetings",
    context: "Прощание до следующего дня"
  },
  {
    id: 10,
    phrase: "Selamat jalan",
    pronunciation: "/səlamat dʒalan/",
    translation: "Счастливого пути",
    literal: "благополучной дороги (говорит остающийся уходящему)",
    category: "greetings",
    context: "Пожелание уезжающему или уходящему человеку"
  },
  {
    id: 11,
    phrase: "Selamat tinggal",
    pronunciation: "/səlamat tiŋɡal/",
    translation: "Счастливо оставаться",
    literal: "благополучно оставаться (говорит уходящий остающемуся)",
    category: "greetings",
    context: "Говорит тот, кто уходит, тем, кто остаётся"
  },
  {
    id: 12,
    phrase: "Apa kabar?",
    pronunciation: "/apa kabar/",
    translation: "Как дела?",
    literal: "что за новости?",
    category: "greetings",
    context: "Главный вопрос при любой встрече"
  },
  {
    id: 13,
    phrase: "Kabar baik",
    pronunciation: "/kabar baik/",
    translation: "Всё хорошо / Дела отлично",
    literal: "новости хорошие",
    category: "greetings",
    context: "Стандартный положительный ответ на Apa kabar?"
  },
  {
    id: 14,
    phrase: "Senang bertemu dengan Anda",
    pronunciation: "/sənaŋ bərtəmu dəŋan anda/",
    translation: "Приятно познакомиться с Вами",
    literal: "рад встретиться с Вами",
    category: "greetings",
    context: "Вежливое знакомство при первой встрече"
  },

  // Courtesy
  {
    id: 15,
    phrase: "Terima kasih",
    pronunciation: "/tərima kasih/",
    translation: "Спасибо",
    literal: "примите любовь/благодарность",
    category: "courtesy",
    context: "Базовая благодарность"
  },
  {
    id: 16,
    phrase: "Terima kasih banyak",
    pronunciation: "/tərima kasih baɲak/",
    translation: "Большое спасибо",
    literal: "примите много благодарности",
    category: "courtesy",
    context: "Искренняя признательность"
  },
  {
    id: 17,
    phrase: "Sama-sama",
    pronunciation: "/sama sama/",
    translation: "Пожалуйста / Не за что / Взаимно",
    literal: "одинаково-одинаково",
    category: "courtesy",
    context: "Ответ на Terima kasih"
  },
  {
    id: 18,
    phrase: "Kembali",
    pronunciation: "/kəmbali/",
    translation: "Пожалуйста (в ответ на спасибо)",
    literal: "возвращаю взаимно",
    category: "courtesy",
    context: "Часто используется в магазинах и гостиницах"
  },
  {
    id: 19,
    phrase: "Maaf",
    pronunciation: "/maʔaf/",
    translation: "Извините / Простите",
    literal: "прощение",
    category: "courtesy",
    context: "При извинении или чтобы привлечь внимание"
  },
  {
    id: 20,
    phrase: "Permisi",
    pronunciation: "/pərmisi/",
    translation: "Прошу прощения / Разрешите пройти",
    literal: "позволение",
    category: "courtesy",
    context: "Чтобы протиснуться в толпе или зайти в комнату"
  },
  {
    id: 21,
    phrase: "Tolong",
    pronunciation: "/toloŋ/",
    translation: "Пожалуйста (просьба) / Помогите!",
    literal: "помощь",
    category: "courtesy",
    context: "Перед глаголом в просьбах или как призыв о помощи"
  },
  {
    id: 22,
    phrase: "Silakan",
    pronunciation: "/silakan/",
    translation: "Пожалуйста (проходите / угощайтесь / присаживайтесь)",
    literal: "будьте любезны",
    category: "courtesy",
    context: "Вежливое побуждение к действию (Silakan masuk, silakan duduk)"
  },
  {
    id: 23,
    phrase: "Tidak apa-apa",
    pronunciation: "/tidaʔ apa apa/",
    translation: "Ничего страшного / Всё в порядке",
    literal: "не что-либо",
    category: "courtesy",
    context: "В ответ на извинения или мелкие неудобства"
  },
  {
    id: 24,
    phrase: "Hati-hati",
    pronunciation: "/hati hati/",
    translation: "Осторожно! / Береги себя",
    literal: "сердце-сердце (будь внимателен)",
    category: "courtesy",
    context: "Предостережение или напутствие в дорогу"
  },

  // Questions & Navigation
  {
    id: 25,
    phrase: "Siapa nama Anda?",
    pronunciation: "/siapa nama anda/",
    translation: "Как Вас зовут?",
    literal: "кто имя Ваше?",
    category: "questions",
    context: "Вопрос о имени при знакомстве (вежливо)"
  },
  {
    id: 26,
    phrase: "Nama saya...",
    pronunciation: "/nama saja/",
    translation: "Меня зовут...",
    literal: "имя моё...",
    category: "questions",
    context: "Представление себя"
  },
  {
    id: 27,
    phrase: "Dari mana asal Anda?",
    pronunciation: "/dari mana asal anda/",
    translation: "Откуда Вы родом?",
    literal: "откуда происхождение Ваше?",
    category: "questions",
    context: "Вопрос о родной стране или городе"
  },
  {
    id: 28,
    phrase: "Saya dari Rusia",
    pronunciation: "/saja dari rusia/",
    translation: "Я из России",
    literal: "я из России",
    category: "questions",
    context: "Ответ о своей стране"
  },
  {
    id: 29,
    phrase: "Di mana toilet?",
    pronunciation: "/di mana toilet/",
    translation: "Где туалет?",
    literal: "в где туалет?",
    category: "questions",
    context: "Один из самых нужных вопросов в путешествии"
  },
  {
    id: 30,
    phrase: "Di mana stasiun terdekat?",
    pronunciation: "/di mana stasiun tərdəkat/",
    translation: "Где ближайшая станция?",
    literal: "где станция самая близкая?",
    category: "questions",
    context: "Поиск вокзала или станции метро"
  },
  {
    id: 31,
    phrase: "Bagaimana cara ke sana?",
    pronunciation: "/baɡaimana tʃara kə sana/",
    translation: "Как добраться туда?",
    literal: "каким образом способ туда?",
    category: "questions",
    context: "Вопрос о маршруте"
  },
  {
    id: 32,
    phrase: "Belok kanan / Belok kiri",
    pronunciation: "/bəlok kanan / bəlok kiri/",
    translation: "Поверните направо / Поверните налево",
    literal: "поворот право / поворот лево",
    category: "questions",
    context: "Ориентирование по карте и указаниям"
  },
  {
    id: 33,
    phrase: "Lurus saja",
    pronunciation: "/lurus sadʒa/",
    translation: "Идите прямо",
    literal: "прямо только",
    category: "questions",
    context: "Указание направления"
  },
  {
    id: 34,
    phrase: "Jam berapa sekarang?",
    pronunciation: "/dʒam bərapa səkaraŋ/",
    translation: "Который сейчас час?",
    literal: "час сколько сейчас?",
    category: "questions",
    context: "Спросить точное время"
  },
  {
    id: 35,
    phrase: "Bisa bicara bahasa Inggris?",
    pronunciation: "/bisa bitʃara bahasa iŋɡris/",
    translation: "Вы говорите по-английски?",
    literal: "можете говорить язык английский?",
    category: "questions",
    context: "Узнать, говорит ли собеседник по-английски"
  },
  {
    id: 36,
    phrase: "Saya tidak mengerti",
    pronunciation: "/saja tidaʔ məŋərti/",
    translation: "Я не понимаю",
    literal: "я не понимаю",
    category: "questions",
    context: "Если вы не поняли сказанное"
  },
  {
    id: 37,
    phrase: "Bisa tolong bicara pelan-pelan?",
    pronunciation: "/bisa toloŋ bitʃara pəlan pəlan/",
    translation: "Не могли бы вы говорить помедленнее?",
    literal: "можете пожалуйста говорить медленно-медленно?",
    category: "questions",
    context: "Просьба замедлить речь"
  },

  // Shopping & Money
  {
    id: 38,
    phrase: "Berapa harganya?",
    pronunciation: "/bərapa harɡaɲa/",
    translation: "Сколько это стоит?",
    literal: "сколько цена этого?",
    category: "shopping",
    context: "Узнать стоимость товара или услуги"
  },
  {
    id: 39,
    phrase: "Bisa kurang?",
    pronunciation: "/bisa kuraŋ/",
    translation: "Можно скидку / подешевле?",
    literal: "можно меньше?",
    category: "shopping",
    context: "Торговаться на рынках и уличных лавках"
  },
  {
    id: 40,
    phrase: "Terlalu mahal",
    pronunciation: "/tərlalu mahal/",
    translation: "Слишком дорого",
    literal: "слишком дорого",
    category: "shopping",
    context: "При торге"
  },
  {
    id: 41,
    phrase: "Saya mau beli ini",
    pronunciation: "/saja mau bəli ini/",
    translation: "Я хочу купить это",
    literal: "я хочу купить это",
    category: "shopping",
    context: "Указание на выбранную вещь"
  },
  {
    id: 42,
    phrase: "Bisa bayar pakai kartu?",
    pronunciation: "/bisa bajar pakai kartu/",
    translation: "Можно оплатить картой?",
    literal: "можно платить используя карту?",
    category: "shopping",
    context: "Способ безналичной оплаты"
  },
  {
    id: 43,
    phrase: "Hanya uang tunai",
    pronunciation: "/haɲa uaŋ tunai/",
    translation: "Только наличные",
    literal: "только деньги наличные",
    category: "shopping",
    context: "Частое объявление в небольших торговых точках"
  },
  {
    id: 44,
    phrase: "Minta struk / bon",
    pronunciation: "/minta struk / bon/",
    translation: "Дайте чек, пожалуйста",
    literal: "прошу чек",
    category: "shopping",
    context: "Запрос чека"
  },

  // Dining
  {
    id: 45,
    phrase: "Ada menu?",
    pronunciation: "/ada menu/",
    translation: "Есть меню?",
    literal: "есть меню?",
    category: "dining",
    context: "В ресторане или варунге"
  },
  {
    id: 46,
    phrase: "Saya mau pesan ini",
    pronunciation: "/saja mau pəsan ini/",
    translation: "Я хочу заказать это",
    literal: "я хочу заказать это",
    category: "dining",
    context: "При заказе блюда"
  },
  {
    id: 47,
    phrase: "Tidak pedas, ya",
    pronunciation: "/tidaʔ pədas ja/",
    translation: "Не острое, пожалуйста",
    literal: "не острое, да",
    category: "dining",
    context: "Важнейшая фраза в Индонезии (чтобы еда была без чили)"
  },
  {
    id: 48,
    phrase: "Sedikit pedas saja",
    pronunciation: "/sədikit pədas sadʒa/",
    translation: "Только чуть-чуть острое",
    literal: "немного острое только",
    category: "dining",
    context: "Если любите легкую пряность"
  },
  {
    id: 49,
    phrase: "Tanpa gula",
    pronunciation: "/tanpa ɡula/",
    translation: "Без сахара",
    literal: "без сахара",
    category: "dining",
    context: "Индонезийские чай и кофе по умолчанию очень сладкие"
  },
  {
    id: 50,
    phrase: "Air putih hangat",
    pronunciation: "/air putih haŋat/",
    translation: "Теплая питьевая вода",
    literal: "вода белая теплая",
    category: "dining",
    context: "Заказ простой питьевой воды"
  },
  {
    id: 51,
    phrase: "Enak sekali!",
    pronunciation: "/enak səkali/",
    translation: "Очень вкусно!",
    literal: "вкусно очень",
    category: "dining",
    context: "Комплимент повару"
  },
  {
    id: 52,
    phrase: "Minta bon / Mau bayar",
    pronunciation: "/minta bon / mau bajar/",
    translation: "Счёт, пожалуйста / Хочу оплатить",
    literal: "прошу чек / хочу платить",
    category: "dining",
    context: "Завершение трапезы"
  },

  // Emergencies
  {
    id: 53,
    phrase: "Tolong saya!",
    pronunciation: "/toloŋ saja/",
    translation: "Помогите мне!",
    literal: "помощь мне",
    category: "emergencies",
    context: "Призыв о срочной помощи"
  },
  {
    id: 54,
    phrase: "Saya sakit",
    pronunciation: "/saja sakit/",
    translation: "Я заболел / Мне плохо",
    literal: "я больной",
    category: "emergencies",
    context: "В аптеке или больнице"
  },
  {
    id: 55,
    phrase: "Saya perlu dokter",
    pronunciation: "/saja pərlu doktər/",
    translation: "Мне нужен врач",
    literal: "мне нужно доктора",
    category: "emergencies",
    context: "При ухудшении самочувствия"
  },
  {
    id: 56,
    phrase: "Panggil polisi!",
    pronunciation: "/paŋɡil polisi/",
    translation: "Вызовите полицию!",
    literal: "позовите полицию",
    category: "emergencies",
    context: "Экстренная ситуация"
  },
  {
    id: 57,
    phrase: "Ada kebakaran!",
    pronunciation: "/ada kəbakaran/",
    translation: "Пожар!",
    literal: "есть пожар",
    category: "emergencies",
    context: "Предупреждение о пожаре"
  },
  {
    id: 58,
    phrase: "Saya tersesat",
    pronunciation: "/saja tərsəsat/",
    translation: "Я заблудился",
    literal: "я потерялся",
    category: "emergencies",
    context: "Когда потеряли дорогу в городе"
  },

  // Everyday Conversation
  {
    id: 59,
    phrase: "Bisa jadi",
    pronunciation: "/bisa dʒadi/",
    translation: "Может быть / Возможно",
    literal: "может стать/случиться",
    category: "conversation",
    context: "Выражение вероятности"
  },
  {
    id: 60,
    phrase: "Tentu saja",
    pronunciation: "/təntu sadʒa/",
    translation: "Конечно / Разумеется",
    literal: "определенно только",
    category: "conversation",
    context: "Уверенное согласие"
  },
  {
    id: 61,
    phrase: "Bagus sekali!",
    pronunciation: "/baɡus səkali/",
    translation: "Отлично! / Замечательно!",
    literal: "хорошо очень",
    category: "conversation",
    context: "Одобрение и похвала"
  },
  {
    id: 62,
    phrase: "Coba lagi",
    pronunciation: "/tʃoba laɡi/",
    translation: "Попробуй ещё раз",
    literal: "попробуй снова",
    category: "conversation",
    context: "Подбадривание"
  },
  {
    id: 63,
    phrase: "Siap!",
    pronunciation: "/siap/",
    translation: "Готово! / Слушаюсь! / Всё сделаем!",
    literal: "готов",
    category: "conversation",
    context: "Очень популярный бодрый индонезийский ответ о готовности"
  },
  {
    id: 64,
    phrase: "Semoga berhasil!",
    pronunciation: "/səmoɡa bərhasil/",
    translation: "Удачи! / Пусть всё получится!",
    literal: "пусть увенчается успехом",
    category: "conversation",
    context: "Пожелание удачи перед делом или экзаменом"
  }
];

export const phrasesRu: PhraseItem[] = [
  // Greetings
  {
    id: 1,
    phrase: "Доброе утро",
    pronunciation: "/dobrəjə utrə/",
    translation: "Selamat pagi",
    literal: "salam pagi (sampai jam 11:00)",
    category: "greetings",
    context: "Salam pagi formal dan sopan"
  },
  {
    id: 2,
    phrase: "Добрый день",
    pronunciation: "/dobrɨj dʲenʲ/",
    translation: "Selamat siang / sore",
    literal: "salam siang",
    category: "greetings",
    context: "Salam paling umum sepanjang hari"
  },
  {
    id: 3,
    phrase: "Добрый вечер",
    pronunciation: "/dobrɨj vʲetɕər/",
    translation: "Selamat malam",
    literal: "salam petang/malam",
    category: "greetings",
    context: "Salam waktu sore hingga malam"
  },
  {
    id: 4,
    phrase: "Здравствуйте",
    pronunciation: "/zdravstvujtʲe/",
    translation: "Halo (formal) / Selamat datang",
    literal: "semoga sehat selalu",
    category: "greetings",
    context: "Salam formal untuk orang dewasa atau belum akrab"
  },
  {
    id: 5,
    phrase: "Привет",
    pronunciation: "/prʲivʲet/",
    translation: "Halo / Hai (informal)",
    literal: "salam akrab",
    category: "greetings",
    context: "Salam kasual untuk teman sebaya"
  },
  {
    id: 6,
    phrase: "До свидания",
    pronunciation: "/da svʲidanʲija/",
    translation: "Sampai jumpa (formal)",
    literal: "sampai pertemuan berikutnya",
    category: "greetings",
    context: "Ucapan perpisahan umum dan sopan"
  },
  {
    id: 7,
    phrase: "Пока",
    pronunciation: "/paka/",
    translation: "Sampai jumpa / Dah (informal)",
    literal: "sementara ini",
    category: "greetings",
    context: "Perpisahan santai antar teman"
  },
  {
    id: 8,
    phrase: "Как дела?",
    pronunciation: "/kak dʲəla/",
    translation: "Apa kabar?",
    literal: "bagaimana urusan-urusan?",
    category: "greetings",
    context: "Pertanyaan kabar sehari-hari"
  },
  {
    id: 9,
    phrase: "Хорошо, спасибо",
    pronunciation: "/xəraʂo spasʲibə/",
    translation: "Kabar baik, terima kasih",
    literal: "baik, terima kasih",
    category: "greetings",
    context: "Jawaban positif terhadap pertanyaan kabar"
  },
  {
    id: 10,
    phrase: "Приятно познакомиться",
    pronunciation: "/prʲijatnə paznakomʲitsə/",
    translation: "Senang berkenalan dengan Anda",
    literal: "menyenangkan untuk berkenalan",
    category: "greetings",
    context: "Diucapkan saat pertama kali bertemu"
  },

  // Courtesy
  {
    id: 11,
    phrase: "Спасибо",
    pronunciation: "/spasʲibə/",
    translation: "Terima kasih",
    literal: "semoga Tuhan melindungi (spasi Bog)",
    category: "courtesy",
    context: "Ucapan terima kasih standar"
  },
  {
    id: 12,
    phrase: "Большое спасибо",
    pronunciation: "/balʲʂojə spasʲibə/",
    translation: "Terima kasih banyak",
    literal: "terima kasih yang besar",
    category: "courtesy",
    context: "Ungkapan rasa terima kasih mendalam"
  },
  {
    id: 13,
    phrase: "Пожалуйста",
    pronunciation: "/paʐalustə/",
    translation: "Sama-sama / Tolong / Silakan",
    literal: "terimalah permohonan/jawaban",
    category: "courtesy",
    context: "Bisa berarti sama-sama maupun tolong/silakan"
  },
  {
    id: 14,
    phrase: "Извините",
    pronunciation: "/izvʲinʲitʲe/",
    translation: "Maaf / Permisi (formal)",
    literal: "lepaskan dari kesalahan",
    category: "courtesy",
    context: "Meminta maaf atau memanggil perhatian"
  },
  {
    id: 15,
    phrase: "Простите",
    pronunciation: "/prastʲitʲe/",
    translation: "Maafkan saya",
    literal: "ampunilah",
    category: "courtesy",
    context: "Memohon maaf atas kekeliruan"
  },
  {
    id: 16,
    phrase: "Ничего страшного",
    pronunciation: "/nʲitɕəvo straʂnəvə/",
    translation: "Tidak apa-apa",
    literal: "tidak ada yang menakutkan",
    category: "courtesy",
    context: "Jawaban penenang saat orang minta maaf"
  },

  // Questions & Navigation
  {
    id: 17,
    phrase: "Как вас зовут?",
    pronunciation: "/kak vas zavut/",
    translation: "Siapa nama Anda?",
    literal: "bagaimana Anda dipanggil?",
    category: "questions",
    context: "Bertanya nama secara sopan"
  },
  {
    id: 18,
    phrase: "Меня зовут...",
    pronunciation: "/mʲinʲa zavut/",
    translation: "Nama saya...",
    literal: "saya dipanggil...",
    category: "questions",
    context: "Memperkenalkan nama diri"
  },
  {
    id: 19,
    phrase: "Где находится...?",
    pronunciation: "/ɡdʲe naxodʲitsə/",
    translation: "Di mana letak...?",
    literal: "di mana berada...?",
    category: "questions",
    context: "Menanyakan lokasi tempat atau fasilitas"
  },
  {
    id: 20,
    phrase: "Где туалет?",
    pronunciation: "/ɡdʲe tualʲɛt/",
    translation: "Di mana toilet?",
    literal: "di mana toilet?",
    category: "questions",
    context: "Paling sering ditanyakan wisatawan"
  },
  {
    id: 21,
    phrase: "Сколько это стоит?",
    pronunciation: "/skolʲkə ɛtə stoit/",
    translation: "Berapa harganya?",
    literal: "berapa ini berharga?",
    category: "questions",
    context: "Menanyakan harga barang"
  },
  {
    id: 22,
    phrase: "Который час?",
    pronunciation: "/katorɨj tɕas/",
    translation: "Jam berapa sekarang?",
    literal: "jam yang ke berapa?",
    category: "questions",
    context: "Menanyakan waktu"
  },
  {
    id: 23,
    phrase: "Вы говорите по-английски?",
    pronunciation: "/vɨ ɡəvarʲitʲe pa anɡlʲijskʲi/",
    translation: "Bisa bicara bahasa Inggris?",
    literal: "apakah Anda berbicara dalam bahasa Inggris?",
    category: "questions",
    context: "Menanyakan kemampuan bahasa asing"
  },
  {
    id: 24,
    phrase: "Я не понимаю",
    pronunciation: "/ja nʲe panʲimaju/",
    translation: "Saya tidak mengerti",
    literal: "saya tidak paham",
    category: "questions",
    context: "Saat kesulitan memahami ucapan lawan bicara"
  },

  // Shopping
  {
    id: 25,
    phrase: "Можно посмотреть?",
    pronunciation: "/moʐnə pasmatrʲetʲ/",
    translation: "Boleh lihat?",
    literal: "bolehkah melihat?",
    category: "shopping",
    context: "Di toko saat ingin melihat barang"
  },
  {
    id: 26,
    phrase: "Можно оплатить картой?",
    pronunciation: "/moʐnə aplatʲitʲ kartəj/",
    translation: "Bisa bayar pakai kartu?",
    literal: "bolehkah membayar dengan kartu?",
    category: "shopping",
    context: "Memastikan metode pembayaran nontunai"
  },
  {
    id: 27,
    phrase: "Дайте чек, пожалуйста",
    pronunciation: "/dajtʲe tɕɛk paʐalustə/",
    translation: "Minta struk belanja, tolong",
    literal: "berikan struk, silakan",
    category: "shopping",
    context: "Meminta bukti pembayaran"
  },

  // Dining
  {
    id: 28,
    phrase: "Счёт, пожалуйста",
    pronunciation: "/ɕːot paʐalustə/",
    translation: "Minta bon / Mau bayar",
    literal: "tagihan, tolong",
    category: "dining",
    context: "Meminta tagihan di kafe atau restoran"
  },
  {
    id: 29,
    phrase: "Очень вкусно!",
    pronunciation: "/otɕinʲ vkusnə/",
    translation: "Enak sekali!",
    literal: "sangat berasa lezat",
    category: "dining",
    context: "Pujian atas hidangan makanan"
  },
  {
    id: 30,
    phrase: "Воду без газа, пожалуйста",
    pronunciation: "/vodu bʲez ɡaza paʐalustə/",
    translation: "Air putih tanpa soda / air biasa",
    literal: "air tanpa gas, tolong",
    category: "dining",
    context: "Memesan air minum mineral biasa"
  },

  // Emergencies
  {
    id: 31,
    phrase: "Помогите!",
    pronunciation: "/pamagʲitʲe/",
    translation: "Tolong!",
    literal: "bantulah!",
    category: "emergencies",
    context: "Seruan darurat meminta bantuan"
  },
  {
    id: 32,
    phrase: "Вызовите врача!",
    pronunciation: "/vɨzəvʲitʲe vratɕa/",
    translation: "Panggilkan dokter!",
    literal: "panggillah dokter",
    category: "emergencies",
    context: "Kondisi kesehatan mendesak"
  },
  {
    id: 33,
    phrase: "Я потерялся",
    pronunciation: "/ja patʲirʲalsʲa/",
    translation: "Saya tersesat",
    literal: "saya tersesat jalan",
    category: "emergencies",
    context: "Ketika tidak tahu arah pulang"
  },

  // Conversation
  {
    id: 34,
    phrase: "Конечно",
    pronunciation: "/kanʲeʂnə/",
    translation: "Tentu saja",
    literal: "tentu / pasti",
    category: "conversation",
    context: "Pernyataan setuju secara mantap"
  },
  {
    id: 35,
    phrase: "Может быть",
    pronunciation: "/moʐət bɨtʲ/",
    translation: "Bisa jadi / Mungkin",
    literal: "mungkin ada/terjadi",
    category: "conversation",
    context: "Menyatakan keraguan atau kemungkinan"
  },
  {
    id: 36,
    phrase: "Удачи!",
    pronunciation: "/udatɕi/",
    translation: "Semoga berhasil! / Semoga beruntung!",
    literal: "keberuntungan untukmu",
    category: "conversation",
    context: "Harapan baik untuk usaha seseorang"
  }
];
