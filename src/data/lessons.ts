import type { Lesson } from "../utils/types";

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Знакомство и базовые фразы",
    description: "Научитесь приветствовать людей и представляться",
    objectives: ["Приветствия", "Представление", "Прощания"],
    content: {
      theory: `В индонезийском языке нет спряжения глаголов, множественное число образуется повторением слова, а времена выражаются с помощью частиц. Это делает язык относительно простым для изучения.

Основные приветствия:
- Selamat pagi (Селамат паги) - Доброе утро (до 11:00)
- Selamat siang (Селамат сианг) - Добрый день (11:00-15:00)
- Selamat sore (Селамат сорэ) - Добрый вечер (15:00-19:00)
- Selamat malam (Селамат малам) - Добрый вечер/ночь (после 19:00)

Для представления себя используется конструкция:
- Nama saya... (Нама сайа...) - Меня зовут...
- Saya dari... (Сайа дари...) - Я из...`,
      examples: [
        {
          indonesian: "Selamat pagi, nama saya Ivan",
          russian: "Доброе утро, меня зовут Иван",
        },
        { indonesian: "Saya dari Rusia", russian: "Я из России" },
        { indonesian: "Terima kasih", russian: "Спасибо" },
        { indonesian: "Sampai jumpa", russian: "До свидания" },
        { indonesian: "Apa kabar?", russian: "Как дела?" },
        { indonesian: "Kabar baik", russian: "Хорошо (букв. 'дела хорошие')" },
      ],
      keyPoints: [
        "Selamat - здравствуйте/привет",
        "saya - я (официально)",
        "nama - имя",
        "dari - из",
        "terima kasih - спасибо",
        "sampai jumpa - до свидания",
        "apa kabar - как дела",
      ],
    },
    exercises: [1, 2, 3, 4],
    vocabulary: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    estimatedTime: 45,
  },
  {
    id: 2,
    title: "Личные местоимения",
    description: "Изучаем местоимения и базовые конструкции с ними",
    objectives: [
      "Личные местоимения",
      "Притяжательные местоимения",
      "Конструкция 'это'",
    ],
    content: {
      theory: `Индонезийские местоимения различаются по степени официальности:

Личные местоимения:
- saya (сайа) - я (официально/нейтрально)
- aku (аку) - я (неформально, с друзьями)
- kamu (каму) - ты (неформально)
- Anda (Анда) - Вы (официально)
- dia (диа) - он/она
- kami (ками) - мы (без собеседника)
- kita (кита) - мы (включая собеседника)
- mereka (мэрэка) - они

Притяжательность выражается простым добавлением местоимения после существительного:
- buku saya (буку сайа) - моя книга (букв. "книга я")
- rumah dia (румах диа) - его/её дом`,
      examples: [
        { indonesian: "Saya siswa", russian: "Я ученик" },
        { indonesian: "Dia guru", russian: "Он/она учитель" },
        { indonesian: "Ini buku saya", russian: "Это моя книга" },
        { indonesian: "Itu rumah dia", russian: "То его/её дом" },
        { indonesian: "Kami dari Indonesia", russian: "Мы из Индонезии" },
        { indonesian: "Mereka teman saya", russian: "Они мои друзья" },
      ],
      keyPoints: [
        "saya/aku - я",
        "kamu/Anda - ты/Вы",
        "dia - он/она",
        "kami/kita - мы",
        "mereka - они",
        "ini - это",
        "itu - то",
      ],
    },
    exercises: [5, 6, 7, 8],
    vocabulary: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    estimatedTime: 40,
  },
  {
    id: 3,
    title: "Простые предложения",
    description: "Строим простые предложения с глаголами",
    objectives: ["Порядок слов", "Основные глаголы", "Отрицание 'tidak'"],
    content: {
      theory: `Порядок слов в индонезийском языке: Подлежащее + Сказуемое + Дополнение (как в русском).

Отрицание образуется с помощью частицы 'tidak' (тидак) перед глаголом или прилагательным:
- Saya tidak tahu (Сайа тидак таху) - Я не знаю
- Dia tidak besar (Диа тидак бесар) - Он/она не большой

Основные глаголы не спрягаются:
- makan (макан) - есть
- minum (минум) - пить
- pergi (пэрги) - идти
- datang (датанг) - приходить
- lihat (лихат) - видеть
- bicara (бичара) - говорить`,
      examples: [
        { indonesian: "Saya makan nasi", russian: "Я ем рис" },
        { indonesian: "Dia minum air", russian: "Он/она пьёт воду" },
        { indonesian: "Saya tidak pergi", russian: "Я не иду" },
        { indonesian: "Mereka datang besok", russian: "Они придут завтра" },
        { indonesian: "Kami tidak lihat", russian: "Мы не видим" },
      ],
      keyPoints: [
        "Порядок слов: SVO",
        "tidak - отрицание",
        "makan - есть",
        "minum - пить",
        "pergi - идти",
        "datang - приходить",
      ],
    },
    exercises: [9, 10, 11, 12],
    vocabulary: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    estimatedTime: 45,
  },
  {
    id: 4,
    title: "Вопросительные слова",
    description: "Учимся задавать вопросы",
    objectives: [
      "Вопросительные слова",
      "Построение вопросов",
      "Вопросы с 'apa'",
    ],
    content: {
      theory: `Вопросительные слова в индонезийском:

- apa (апа) - что
- siapa (сиапа) - кто
- di mana (ди мана) - где
- ke mana (кэ мана) - куда
- dari mana (дари мана) - откуда
- kapan (капан) - когда
- mengapa (мэньяпа) - почему
- bagaimana (багаймана) - как
- berapa (бэрапа) - сколько

Вопросы строятся просто: вопросительное слово + остальная часть предложения.`,
      examples: [
        { indonesian: "Apa ini?", russian: "Что это?" },
        {
          indonesian: "Siapa nama kamu?",
          russian: "Как тебя зовут? (букв. 'Кто имя твой?')",
        },
        { indonesian: "Di mana rumah kamu?", russian: "Где твой дом?" },
        { indonesian: "Kapan kamu datang?", russian: "Когда ты придёшь?" },
        { indonesian: "Berapa harganya?", russian: "Сколько это стоит?" },
        { indonesian: "Bagaimana kabar kamu?", russian: "Как твои дела?" },
      ],
      keyPoints: [
        "apa - что",
        "siapa - кто",
        "di mana - где",
        "kapan - когда",
        "berapa - сколько",
        "bagaimana - как",
      ],
    },
    exercises: [13, 14, 15, 16],
    vocabulary: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    estimatedTime: 40,
  },
  {
    id: 5,
    title: "Отрицания",
    description: "Изучаем различные способы отрицания",
    objectives: ["tidak vs bukan", "belum", "jangan"],
    content: {
      theory: `В индонезийском несколько видов отрицания:

1. TIDAK - отрицание глаголов и прилагательных:
   - Saya tidak tahu (Я не знаю)
   - Dia tidak besar (Он не большой)

2. BUKAN - отрицание существительных:
   - Ini bukan buku saya (Это не моя книга)
   - Dia bukan guru (Он не учитель)

3. BELUM - ещё не (отрицание завершённости):
   - Saya belum makan (Я ещё не ел)
   - Dia belum datang (Он ещё не пришёл)

4. JANGAN - запрет (не делай!):
   - Jangan pergi! (Не уходи!)
   - Jangan bicara! (Не разговаривай!)`,
      examples: [
        { indonesian: "Saya tidak mengerti", russian: "Я не понимаю" },
        { indonesian: "Ini bukan masalah", russian: "Это не проблема" },
        { indonesian: "Saya belum siap", russian: "Я ещё не готов" },
        { indonesian: "Jangan lupa!", russian: "Не забудь!" },
        {
          indonesian: "Dia bukan orang Indonesia",
          russian: "Он не индонезиец",
        },
      ],
      keyPoints: [
        "tidak - не (с глаголами/прилагательными)",
        "bukan - не (с существительными)",
        "belum - ещё не",
        "jangan - не (запрет)",
      ],
    },
    exercises: [17, 18, 19, 20],
    vocabulary: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    estimatedTime: 40,
  },
  {
    id: 6,
    title: "Притяжательные конструкции",
    description: "Выражаем принадлежность",
    objectives: [
      "Конструкция с -nya",
      "Притяжательные местоимения",
      "Kepunyaan",
    ],
    content: {
      theory: `Притяжательность в индонезийском выражается просто:

1. Местоимение после существительного:
   - buku saya (моя книга)
   - rumah dia (его/её дом)
   - mobil kami (наша машина)

2. Суффикс -nya (его/её/их):
   - bukunya (его/её книга)
   - rumahnya (его/её дом)
   - mobilnya (его/её машина)

3. Конструкция dengan (с) или punya (иметь):
   - buku dengan saya / buku saya punya (моя книга)`,
      examples: [
        { indonesian: "Ini buku saya", russian: "Это моя книга" },
        { indonesian: "Rumah dia besar", russian: "Его/её дом большой" },
        { indonesian: "Mobilnya baru", russian: "Его/её машина новая" },
        { indonesian: "Temannya baik", russian: "Его/её друг хороший" },
        { indonesian: "Ini punya saya", russian: "Это моё (принадлежит мне)" },
      ],
      keyPoints: [
        "-nya - его/её/их",
        "punya - иметь/принадлежать",
        "dengan - с",
      ],
    },
    exercises: [21, 22, 23, 24],
    vocabulary: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    estimatedTime: 35,
  },
  {
    id: 7,
    title: "Числа и счёт",
    description: "Учимся считать и использовать числа",
    objectives: ["Числа 1-100", "Счёт существительных", "Harga (цена)"],
    content: {
      theory: `Числа в индонезийском:

0-10: nol, satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan, sepuluh

Десятки образуются: число + puluh
- 20 = dua puluh
- 30 = tiga puluh
- 100 = seratus

Для счёта людей используется classifier 'orang':
- satu orang (один человек)
- dua orang (два человека)

Для предметов - 'buah':
- satu buah rumah (один дом)
- dua buah mobil (две машины)`,
      examples: [
        {
          indonesian: "Saya punya dua saudara",
          russian: "У меня два брата/сестры",
        },
        { indonesian: "Ada sepuluh orang", russian: "Есть десять человек" },
        { indonesian: "Harganya seribu rupiah", russian: "Цена тысяча рупий" },
        { indonesian: "Saya butuh tiga buku", russian: "Мне нужно три книги" },
        { indonesian: "Rumah itu besar", russian: "Тот дом большой" },
      ],
      keyPoints: [
        "satu, dua, tiga... - один, два, три...",
        "puluh - десяток",
        "ratus - сотня",
        "orang - человек (classifier)",
        "buah - предмет (classifier)",
      ],
    },
    exercises: [25, 26, 27, 28],
    vocabulary: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    estimatedTime: 45,
  },
  {
    id: 8,
    title: "Время и даты",
    description: "Говорим о времени, днях и датах",
    objectives: ["Дни недели", "Время суток", "Даты"],
    content: {
      theory: `Дни недели:
- Senin (Сэнин) - понедельник
- Selasa (Сэласа) - вторник
- Rabu (Рабу) - среда
- Kamis (Камис) - четверг
- Jumat (Джумат) - пятница
- Sabtu (Сабту) - суббота
- Minggu (Мингу) - воскресенье

Время суток:
- pagi (паги) - утро
- siang (сианг) - день
- sore (сорэ) - вечер (до темноты)
- malam (малам) - ночь

Для указания времени используется jam (джам):
- Jam berapa? (Джам бэрапа?) - Который час?
- Jam dua (Джам дуа) - Два часа`,
      examples: [
        { indonesian: "Hari ini Senin", russian: "Сегодня понедельник" },
        { indonesian: "Besok hari Selasa", russian: "Завтра вторник" },
        { indonesian: "Sekarang jam tiga", russian: "Сейчас три часа" },
        { indonesian: "Saya bangun pagi", russian: "Я просыпаюсь утром" },
        { indonesian: "Kita bertemu besok", russian: "Мы встретимся завтра" },
      ],
      keyPoints: [
        "hari - день",
        "jam - час/время",
        "sekarang - сейчас",
        "besok - завтра",
        "kemarin - вчера",
      ],
    },
    exercises: [29, 30, 31, 32],
    vocabulary: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    estimatedTime: 40,
  },
  {
    id: 9,
    title: "Прошедшее время",
    description: "Выражаем завершённые действия",
    objectives: ["sudah", "telah", "pernah"],
    content: {
      theory: `В индонезийском нет грамматического прошедшего времени. Вместо этого используются частицы:

1. SUDAH (судах) - уже (разговорное):
   - Saya sudah makan (Я уже поел)
   - Dia sudah pergi (Он уже ушёл)

2. TELAH (тэлах) - уже (более формальное):
   - Dia telah selesai (Он уже закончил)

3. PERNAH (пэрнах) - когда-либо (опыт):
   - Saya pernah ke Bali (Я когда-либо был на Бали)
   - Pernah makan nasi goreng? (Ты когда-нибудь ел жареный рис?)

Вопрос о завершённости: Sudah? (Уже?)`,
      examples: [
        { indonesian: "Saya sudah selesai", russian: "Я уже закончил" },
        { indonesian: "Dia sudah pulang", russian: "Он уже вернулся домой" },
        { indonesian: "Sudah makan?", russian: "Уже ел?" },
        { indonesian: "Saya pernah ke Jakarta", russian: "Я бывал в Джакарте" },
        { indonesian: "Mereka telah tiba", russian: "Они уже прибыли" },
      ],
      keyPoints: [
        "sudah - уже",
        "telah - уже (формально)",
        "pernah - когда-либо",
        "selesai - закончить",
      ],
    },
    exercises: [33, 34, 35, 36],
    vocabulary: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    estimatedTime: 40,
  },
  {
    id: 10,
    title: "Настоящее продолженное",
    description: "Действия в процессе",
    objectives: ["sedang", "lagi", "masih"],
    content: {
      theory: `Для выражения процесса в настоящем времени используются:

1. SEDANG (сэданг) - в процессе:
   - Saya sedang makan (Я ем сейчас)
   - Dia sedang belajar (Он учится сейчас)

2. LAGI (лаги) - тоже означает процесс (разговорное):
   - Saya lagi kerja (Я работаю сейчас)
   - Dia lagi tidur (Он спит сейчас)

3. MASIH (масих) - всё ещё:
   - Saya masih di rumah (Я всё ещё дома)
   - Dia masih tidur (Он всё ещё спит)`,
      examples: [
        { indonesian: "Saya sedang bekerja", russian: "Я работаю (сейчас)" },
        {
          indonesian: "Dia lagi baca buku",
          russian: "Он читает книгу (сейчас)",
        },
        {
          indonesian: "Mereka masih di kantor",
          russian: "Они всё ещё в офисе",
        },
        { indonesian: "Kami sedang makan siang", russian: "Мы обедаем" },
        { indonesian: "Apa kamu masih di sini?", russian: "Ты всё ещё здесь?" },
      ],
      keyPoints: [
        "sedang - в процессе",
        "lagi - тоже процесс (разг.)",
        "masih - всё ещё",
      ],
    },
    exercises: [37, 38, 39, 40],
    vocabulary: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    estimatedTime: 35,
  },
  {
    id: 11,
    title: "Будущее время",
    description: "Выражаем будущие действия",
    objectives: ["akan", "mau", "hendak"],
    content: {
      theory: `Будущее время выражается с помощью частиц:

1. AKAN (акан) - буду (нейтральное):
   - Saya akan pergi (Я пойду)
   - Dia akan datang (Он придёт)

2. MAU (мау) - собираюсь/хочу (разговорное):
   - Saya mau tidur (Я собираюсь спать)
   - Mau ke mana? (Куда идёшь?)

3. HENDAK (хэндак) - намерен (более формальное):
   - Saya hendak belajar (Я намерен учиться)

Также можно использовать waktu (вaktu) + время:
- Besok saya akan datang (Завтра я приду)`,
      examples: [
        {
          indonesian: "Saya akan belajar besok",
          russian: "Я буду учиться завтра",
        },
        { indonesian: "Mau pergi ke mana?", russian: "Куда хочешь пойти?" },
        {
          indonesian: "Dia akan pulang minggu depan",
          russian: "Он вернётся на следующей неделе",
        },
        {
          indonesian: "Kami akan bertemu jam 5",
          russian: "Мы встретимся в 5 часов",
        },
        { indonesian: "Mereka mau makan", russian: "Они хотят есть" },
      ],
      keyPoints: [
        "akan - буду (нейтр.)",
        "mau - собираюсь/хочу",
        "hendak - намерен",
        "besok - завтра",
      ],
    },
    exercises: [41, 42, 43, 44],
    vocabulary: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
    estimatedTime: 35,
  },
  {
    id: 12,
    title: "Модальные глаголы",
    description: "Может, должен, хочет",
    objectives: ["bisa", "harus", "mau", "ingin"],
    content: {
      theory: `Модальные глаголы в индонезийском:

1. BISA (биса) - мочь/уметь:
   - Saya bisa bicara Inggris (Я могу говорить по-английски)
   - Bisa bantu saya? (Можете помочь мне?)

2. HARUS (харус) - должен:
   - Saya harus pergi (Я должен уйти)
   - Kamu harus belajar (Ты должен учиться)

3. MAU (мау) - хотеть (разговорное):
   - Saya mau makan (Я хочу есть)
   - Mau kopi? (Хочешь кофе?)

4. INGIN (ингин) - хотеть (более формальное):
   - Saya ingin belajar (Я хочу учиться)
   - Apa yang kamu inginkan? (Чего ты хочешь?)`,
      examples: [
        { indonesian: "Saya bisa berenang", russian: "Я умею плавать" },
        {
          indonesian: "Kamu harus datang tepat waktu",
          russian: "Ты должен прийти вовремя",
        },
        { indonesian: "Saya mau kopi", russian: "Я хочу кофе" },
        {
          indonesian: "Dia ingin pergi ke Bali",
          russian: "Он хочет поехать на Бали",
        },
        { indonesian: "Bisa bantu saya?", russian: "Можете помочь мне?" },
      ],
      keyPoints: [
        "bisa - мочь/уметь",
        "harus - должен",
        "mau - хотеть (разг.)",
        "ingin - хотеть (форм.)",
      ],
    },
    exercises: [45, 46, 47, 48],
    vocabulary: [111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
    estimatedTime: 40,
  },
  {
    id: 13,
    title: "Прилагательные",
    description: "Описываем предметы и людей",
    objectives: ["Прилагательные", "Степени сравнения", "Порядок слов"],
    content: {
      theory: `Прилагательные в индонезийском ставятся ПОСЛЕ существительного:
- rumah besar (румах бесар) - большой дом (букв. "дом большой")
- mobil baru (мобиль бару) - новая машина

Степени сравнения:
1. Lebih (лэбих) - более:
   - lebih besar (более большой)
   - lebih baik (лучше)

2. Paling (палинг) - самый:
   - paling besar (самый большой)
   - paling baik (самый лучший)

3. Sangat (сангат) - очень:
   - sangat baik (очень хороший)
   - sangat besar (очень большой)`,
      examples: [
        { indonesian: "Rumah itu besar", russian: "Тот дом большой" },
        { indonesian: "Mobil ini lebih baik", russian: "Эта машина лучше" },
        { indonesian: "Dia paling pintar", russian: "Он самый умный" },
        {
          indonesian: "Makanan ini sangat enak",
          russian: "Эта еда очень вкусная",
        },
        { indonesian: "Buku itu kecil", russian: "Та книга маленькая" },
      ],
      keyPoints: [
        "Прилагательное после существительного",
        "lebih - более",
        "paling - самый",
        "sangat - очень",
      ],
    },
    exercises: [49, 50, 51, 52],
    vocabulary: [121, 122, 123, 124, 125, 126, 127, 128, 129, 130],
    estimatedTime: 40,
  },
  {
    id: 14,
    title: "Предлоги",
    description: "Место, направление, время",
    objectives: ["di, ke, dari", "в пространстве", "во времени"],
    content: {
      theory: `Основные предлоги:

1. DI (ди) - в/на (место):
   - di rumah (дома)
   - di Jakarta (в Джакарте)
   - di meja (на столе)

2. KE (кэ) - в/на (направление):
   - ke rumah (домой)
   - ke Jakarta (в Джакарту)
   - ke sekolah (в школу)

3. DARI (дари) - из/от:
   - dari rumah (из дома)
   - dari Indonesia (из Индонезии)
   - dari saya (от меня)

4. PADA (пада) - в (время):
   - pada jam 5 (в 5 часов)
   - pada hari Senin (в понедельник)`,
      examples: [
        { indonesian: "Saya di rumah", russian: "Я дома" },
        { indonesian: "Dia pergi ke kantor", russian: "Он идёт в офис" },
        { indonesian: "Saya dari Rusia", russian: "Я из России" },
        {
          indonesian: "Kita bertemu pada jam 3",
          russian: "Мы встретимся в 3 часа",
        },
        { indonesian: "Buku di atas meja", russian: "Книга на столе" },
      ],
      keyPoints: [
        "di - в/на (место)",
        "ke - в/на (направление)",
        "dari - из/от",
        "pada - в (время)",
      ],
    },
    exercises: [53, 54, 55, 56],
    vocabulary: [131, 132, 133, 134, 135, 136, 137, 138, 139, 140],
    estimatedTime: 40,
  },
  {
    id: 15,
    title: "Сложные предложения",
    description: "Соединяем простые предложения",
    objectives: ["dan, atau, tapi", "karena, jadi", "yang"],
    content: {
      theory: `Союзы для соединения предложений:

1. DAN (дан) - и:
   - Saya makan dan minum (Я ем и пью)

2. ATAU (атау) - или:
   - Mau kopi atau teh? (Хочешь кофе или чай?)

3. TAPI (тапи) - но:
   - Saya mau pergi tapi tidak punya waktu (Я хочу уйти, но нет времени)

4. KARENA (карэна) - потому что:
   - Saya tidak datang karena sakit (Я не пришёл, потому что заболел)

5. JADI (джади) - поэтому:
   - Saya sakit jadi tidak datang (Я заболел, поэтому не пришёл)

6. YANG (янг) - который:
   - Orang yang baik (Хороший человек, букв. "человек который хороший")`,
      examples: [
        {
          indonesian: "Saya makan nasi dan minum air",
          russian: "Я ем рис и пью воду",
        },
        { indonesian: "Mau teh atau kopi?", russian: "Хочешь чай или кофе?" },
        {
          indonesian: "Dia pintar tapi malas",
          russian: "Он умный, но ленивый",
        },
        {
          indonesian: "Saya tidak pergi karena hujan",
          russian: "Я не пошёл, потому что дождь",
        },
        {
          indonesian: "Orang yang saya lihat",
          russian: "Человек, которого я видел",
        },
      ],
      keyPoints: [
        "dan - и",
        "atau - или",
        "tapi - но",
        "karena - потому что",
        "jadi - поэтому",
        "yang - который",
      ],
    },
    exercises: [57, 58, 59, 60],
    vocabulary: [141, 142, 143, 144, 145, 146, 147, 148, 149, 150],
    estimatedTime: 45,
  },
  {
    id: 16,
    title: "Разговорная практика",
    description: "Идиомы и полезные фразы",
    objectives: ["Идиомы", "Разговорные фразы", "Культурные особенности"],
    content: {
      theory: `Полезные разговорные фразы и идиомы:

1. Tidak apa-apa (тидак апа-апа) - ничего страшного
2. Sama-sama (сама-сама) - пожалуйста (в ответ на спасибо)
3. Tolong (толонг) - пожалуйста (просьба) / помогите
4. Maaf (мааф) - извините
5. Permisi (пэрмиси) - разрешите / извините (чтобы пройти)
6. Silakan (силакан) - пожалуйста (приглашение)
7. Terima kasih banyak (тэрима касих баньяк) - большое спасибо
8. Sampai jumpa lagi (сампай джумпа лаги) - до встречи снова

Культурные особенности:
- Индонезийцы очень вежливы
- Часто используют титулы (Pak, Bu, Mas, Mbak)
- Прямой отказ считается невежливым`,
      examples: [
        {
          indonesian: "Tidak apa-apa, jangan khawatir",
          russian: "Ничего страшного, не волнуйся",
        },
        {
          indonesian: "Sama-sama, senang bisa membantu",
          russian: "Пожалуйста, рад помочь",
        },
        {
          indonesian: "Tolong ambilkan buku itu",
          russian: "Пожалуйста, подай ту книгу",
        },
        { indonesian: "Maaf, saya terlambat", russian: "Извините, я опоздал" },
        { indonesian: "Silakan masuk", russian: "Пожалуйста, входите" },
      ],
      keyPoints: [
        "tidak apa-apa - ничего страшного",
        "sama-sama - пожалуйста (в ответ)",
        "tolong - пожалуйста (просьба)",
        "maaf - извините",
        "silakan - пожалуйста (приглашение)",
      ],
    },
    exercises: [61, 62, 63, 64],
    vocabulary: [151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
    estimatedTime: 50,
  },
];
