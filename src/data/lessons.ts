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
- Selamat pagi /səlamat/ /paɡi/ - Доброе утро (до 11:00)
- Selamat siang /səlamat/ /siaŋ/ - Добрый день (11:00-15:00)
- Selamat sore /səlamat/ /sorə/ - Добрый вечер (15:00-19:00)
- Selamat malam /səlamat/ /malam/ - Добрый вечер/ночь (после 19:00)

Для представления себя используется конструкция:
- Nama saya... (Нама сайа...) - Меня зовут...
- Saya dari... (Сайа дари...) - Я из...`,
      examples: [
        {
          indonesian: "Selamat pagi, nama saya Ivan",
          russian: "Доброе утро, меня зовут Иван",
        },
        { indonesian: "Saya dari Rusia", russian: "Я из России" },
        { indonesian: "Terima kasih", russian: "Спасибо (букв. 'примите любовь/благодарность')" },
        { indonesian: "Sampai jumpa", russian: "До свидания" },
        { indonesian: "Apa kabar?", russian: "Как дела? (букв. 'что за новости?')" },
        { indonesian: "Kabar baik", russian: "Хорошо (букв. 'дела хорошие')" },
      ],
      keyPoints: [
        "Selamat - здравствуйте/привет",
        "saya - я (официально)",
        "nama - имя",
        "dari - из",
        "terima kasih - спасибо (букв. 'примите любовь/благодарность')",
        "sampai jumpa - до свидания",
        "apa kabar - как дела (букв. 'что за новости?')",
      ],
    },
    exercises: [1, 2, 3, 4, 65, 66, 67, 68, 73, 74, 75, 76, 77, 78],
    vocabulary: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
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
- saya /saja/ - я (официально/нейтрально)
- aku /aku/ - я (неформально, с друзьями)
- kamu /kamu/ - ты (неформально)
- Anda /anda/ - Вы (официально)
- dia /dia/ - он/она
- kami /kami/ - мы (без собеседника)
- kita /kita/ - мы (включая собеседника)
- mereka /mərəka/ - они

Притяжательность выражается простым добавлением местоимения после существительного:
- buku saya /buku/ /saja/ - моя книга (букв. "книга я")
- rumah dia /rumah/ /dia/ - его/её дом`,
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
    exercises: [5, 6, 7, 8, 69, 70, 71, 72, 79, 80, 81, 82],
    vocabulary: [
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 341, 342, 343, 344, 345, 361, 362,
      363,
    ],
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
- Saya tidak tahu /tidaʔ/ /tahu/ - Я не знаю
- Dia tidak besar /tidaʔ/ /bəsar/ - Он/она не большой

Основные глаголы не спрягаются:
- makan /makan/ - есть
- minum /minum/ - пить
- pergi /pərɡi/ - идти
- datang /dataŋ/ - приходить
- lihat /lihat/ - видеть`,
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
    vocabulary: [41, 42, 43, 44, 45, 201, 202, 424, 443],
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

- apa /apa/ - что
- siapa /siapa/ - кто
- di mana /di/ /mana/ - где
- ke mana /kə/ /mana/ - куда
- dari mana /dari/ /mana/ - откуда
- kapan /kapan/ - когда
- mengapa /məŋapa/ - почему
- bagaimana /baɡaimana/ - как
- berapa /bərapa/ - сколько

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
    vocabulary: [101, 102, 103, 104, 105, 11, 10],
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
   - Saya tidak tahu /tidaʔ/ /tahu/
   - Dia tidak besar /tidaʔ/ /bəsar/

2. BUKAN - отрицание существительных:
   - Ini bukan buku saya /buku/ /saja/
   - Dia bukan guru /bukan/ /ɡuru/

3. BELUM - ещё не (отрицание завершённости):
   - Saya belum makan /bəlum/ /makan/
   - Dia belum datang /bəlum/ /dataŋ/

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
    vocabulary: [121, 122, 123, 124, 322, 323],
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
   - buku saya /buku/ /saja/
   - rumah dia (его/её дом)
   - mobil kami /mobil/ /kami/

2. Суффикс -nya (его/её/их):
   - bukunya (его/её книга)
   - rumahnya (его/её дом)
   - mobilnya (его/её машина)

3. Конструкция dengan /dəŋan/ или punya /puɲa/:
   - buku dengan saya / buku saya punya /saja/ /puɲa/`,
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
    vocabulary: [141, 142, 61, 62, 63, 64, 65, 365, 441, 345],
    estimatedTime: 35,
  },
  {
    id: 7,
    title: "Числа и счёт",
    description: "Учимся считать и использовать числа",
    objectives: ["Числа 1-100", "Счёт существительных", "Harga /harɡa/"],
    content: {
      theory: `Числа в индонезийском:

0-10: nol, satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan, sepuluh

Десятки образуются: число + puluh
- 20 = dua puluh
- 30 = tiga puluh
- 100 = seratus

Для счёта людей используется classifier 'orang':
- satu orang /satu/ /oraŋ/
- dua orang /dua/ /oraŋ/

Для предметов - 'buah':
- satu buah rumah /buah/ /rumah/
- dua buah mobil /buah/ /mobil/`,
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
    vocabulary: [161, 162, 163, 164, 165, 64, 105],
    estimatedTime: 45,
  },
  {
    id: 8,
    title: "Время и даты",
    description: "Говорим о времени, днях и датах",
    objectives: ["Дни недели", "Время суток", "Даты"],
    content: {
      theory: `Дни недели:
- Senin /sənin/ - понедельник
- Selasa /səlasa/ - вторник
- Rabu /rabu/ - среда
- Kamis /kamis/ - четверг
- Jumat /dʒumat/ - пятница
- Sabtu /sabtu/ - суббота
- Minggu /miŋɡu/ - воскресенье

Время суток:
- pagi /paɡi/ - утро
- siang /siaŋ/ - день
- sore /sorə/ - вечер (до темноты)
- malam /malam/ - ночь

Для указания времени используется jam /dʒam/:
- Jam berapa? (Джам бэрапа?) - Который час?
- Jam dua /dʒam/ /dua/ - Два часа`,
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
    vocabulary: [241, 242, 243, 244, 245, 2, 262, 163, 165, 105],
    estimatedTime: 40,
  },
  {
    id: 9,
    title: "Прошедшее время",
    description: "Выражаем завершённые действия",
    objectives: ["sudah", "telah", "pernah"],
    content: {
      theory: `В индонезийском нет грамматического прошедшего времени. Вместо этого используются частицы:

1. SUDAH /sudah/ - уже (разговорное):
   - Saya sudah makan /sudah/ /makan/
   - Dia sudah pergi /sudah/ /pərɡi/

2. TELAH /təlah/ - уже (более формальное):
   - Dia telah selesai /təlah/ /sələsai/

3. PERNAH /pərnah/ - когда-либо (опыт):
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
    vocabulary: [486, 487, 490, 44],
    estimatedTime: 40,
  },
  {
    id: 10,
    title: "Настоящее продолженное",
    description: "Действия в процессе",
    objectives: ["sedang", "lagi", "masih"],
    content: {
      theory: `Для выражения процесса в настоящем времени используются:

1. SEDANG /sədaŋ/ - в процессе:
   - Saya sedang makan /sədaŋ/ /makan/
   - Dia sedang belajar /sədaŋ/ /bəladʒar/

2. LAGI /laɡi/ - тоже означает процесс (разговорное):
   - Saya lagi kerja /laɡi/ /kərdʒa/
   - Dia lagi tidur /laɡi/ /tidur/

3. MASIH /masih/ - всё ещё:
   - Saya masih di rumah /di/ /rumah/
   - Dia masih tidur /masih/ /tidur/`,
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
    vocabulary: [489, 62, 421, 423, 364, 424, 425, 283],
    estimatedTime: 35,
  },
  {
    id: 11,
    title: "Будущее время",
    description: "Выражаем будущие действия",
    objectives: ["akan", "mau", "hendak"],
    content: {
      theory: `Будущее время выражается с помощью частиц:

1. AKAN /akan/ - буду (нейтральное):
   - Saya akan pergi /akan/ /pərɡi/
   - Dia akan datang /akan/ /dataŋ/

2. MAU /mau/ - собираюсь/хочу (разговорное):
   - Saya mau tidur /mau/ /tidur/
   - Mau ke mana? (Куда идёшь?)

3. HENDAK /həndaʔ/ - намерен (более формальное):
   - Saya hendak belajar /həndaʔ/ /bəladʒar/

Также можно использовать waktu (вaktu) + время:
- Besok saya akan datang /akan/ /dataŋ/`,
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
    vocabulary: [488, 493, 424, 242, 44, 41],
    estimatedTime: 35,
  },
  {
    id: 12,
    title: "Модальные глаголы",
    description: "Может, должен, хочет",
    objectives: ["bisa", "harus", "mau", "ingin"],
    content: {
      theory: `Модальные глаголы в индонезийском:

1. BISA /bisa/ - мочь/уметь:
   - Saya bisa bicara Inggris (Я могу говорить по-английски)
   - Bisa bantu saya? (Можете помочь мне?)

2. HARUS /harus/ - должен:
   - Saya harus pergi /harus/ /pərɡi/
   - Kamu harus belajar /harus/ /bəladʒar/

3. MAU /mau/ - хотеть (разговорное):
   - Saya mau makan /mau/ /makan/
   - Mau kopi? (Хочешь кофе?)

4. INGIN /iŋin/ - хотеть (более формальное):
   - Saya ingin belajar /iŋin/ /bəladʒar/
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
    vocabulary: [491, 492, 493, 203, 421, 424, 41],
    estimatedTime: 40,
  },
  {
    id: 13,
    title: "Прилагательные",
    description: "Описываем предметы и людей",
    objectives: ["Прилагательные", "Степени сравнения", "Порядок слов"],
    content: {
      theory: `Прилагательные в индонезийском ставятся ПОСЛЕ существительного:
- rumah besar /rumah/ /bəsar/ - большой дом (букв. "дом большой")
- mobil baru /mobil/ /baru/ - новая машина

Степени сравнения:
1. Lebih /ləbih/ - более:
   - lebih besar /ləbih/ /bəsar/
   - lebih baik /ləbih/ /baiʔ/

2. Paling /paliŋ/ - самый:
   - paling besar /paliŋ/ /bəsar/
   - paling baik /paliŋ/ /baiʔ/

3. Sangat /saŋat/ - очень:
   - sangat baik /saŋat/ /baiʔ/
   - sangat besar /saŋat/ /bəsar/`,
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
    vocabulary: [
      381, 382, 383, 384, 385, 14, 142, 205, 264, 303, 304, 305, 321, 322, 323,
      324, 481, 482, 483, 484, 485, 494, 495, 496, 63, 65, 61, 263, 363, 301,
      302, 441, 442, 444, 445, 461,
    ],
    estimatedTime: 40,
  },
  {
    id: 14,
    title: "Предлоги",
    description: "Место, направление, время",
    objectives: ["di, ke, dari", "в пространстве", "во времени"],
    content: {
      theory: `Основные предлоги:

1. DI /di/ - в/на (место):
   - di rumah /di/ /rumah/
   - di Jakarta /di/ /dʒakarta/
   - di meja /di/ /mədʒa/

2. KE /kə/ - в/на (направление):
   - ke rumah /kə/ /rumah/
   - ke Jakarta /kə/ /dʒakarta/
   - ke sekolah /kə/ /səkolah/

3. DARI /dari/ - из/от:
   - dari rumah /dari/ /rumah/
   - dari Indonesia /dari/ /indonəsia/
   - dari saya /dari/ /saja/

4. PADA /pada/ - в (время):
   - pada jam 5 (в 5 часов)
   - pada hari Senin /hari/ /sənin/`,
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
    vocabulary: [
      15, 43, 61, 102, 103, 245, 265, 281, 282, 283, 284, 285, 401, 402, 403,
      404, 405, 462, 463, 464, 465,
    ],
    estimatedTime: 40,
  },
  {
    id: 15,
    title: "Сложные предложения",
    description: "Соединяем простые предложения",
    objectives: ["dan, atau, tapi", "karena, jadi", "yang"],
    content: {
      theory: `Союзы для соединения предложений:

1. DAN /dan/ - и:
   - Saya makan dan minum /dan/ /minum/

2. ATAU /atau/ - или:
   - Mau kopi atau teh? (Хочешь кофе или чай?)

3. TAPI /tapi/ - но:
   - Saya mau pergi tapi tidak punya waktu (Я хочу уйти, но нет времени)

4. KARENA /karəna/ - потому что:
   - Saya tidak datang karena sakit (Я не пришёл, потому что заболел)

5. JADI /dʒadi/ - поэтому:
   - Saya sakit jadi tidak datang (Я заболел, поэтому не пришёл)

6. YANG /jaŋ/ - который:
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
    vocabulary: [497, 498, 499, 500, 124, 45, 64, 203, 204, 261, 325],
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
2. Sama-sama (сама-сама) - взаимно, вместе (пожалуйста, не за что; букв. 'одинаково-одинаково')
3. Tolong /toloŋ/ - пожалуйста (просьба) / помогите
4. Maaf /maaf/ - извините
5. Permisi /pərmisi/ - разрешите / извините (чтобы пройти)
6. Silakan /silakan/ - пожалуйста (приглашение)
7. Terima kasih banyak /kasih/ /baɲaʔ/ - большое спасибо
8. Sampai jumpa lagi /dʒumpa/ /laɡi/ - до встречи снова

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
          russian: "Пожалуйста, рад помочь (букв. 'Взаимно, рад помочь')",
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
        "sama-sama - взаимно, вместе (пожалуйста, не за что; букв. 'одинаково-одинаково')",
        "tolong - пожалуйста (просьба)",
        "maaf - извините",
        "silakan - пожалуйста (приглашение)",
      ],
    },
    exercises: [61, 62, 63, 64],
    vocabulary: [3, 4, 5, 6, 321],
    estimatedTime: 50,
  },
  {
    id: 17,
    title: "Разговорная практика с ИИ",
    description: "Живой диалог в рамках изученной лексики",
    objectives: ["Практика общения", "Закрепление лексики", "Свободный диалог"],
    content: {
      theory: `Поздравляем с прохождением курса! Теперь пришло время применить все полученные знания на практике.
      
В этом уроке вам предстоит пообщаться с искусственным интеллектом, встроенным прямо в ваш браузер Google Chrome (Gemini Nano).

Правила практики:
1. ИИ будет общаться с вами преимущественно на индонезийском языке.
2. Старайтесь использовать слова и конструкции, которые вы выучили в предыдущих 16 уроках.
3. Если вы допустите ошибку в грамматике или использовании слов, ИИ вежливо поправит вас на русском языке.
4. Чтобы завершить урок и получить баллы, проведите содержательный диалог из как минимум 6 реплик с обеих сторон.`,
      examples: [
        { indonesian: "Halo, apa kabar?", russian: "Привет, как дела? (букв. 'что за новости?')" },
        { indonesian: "Kabar baik, terima kasih. Siapa nama Anda?", russian: "Дела хорошо, спасибо. Как вас зовут? (букв. 'кто ваше имя?')" },
      ],
      keyPoints: [
        "Общайтесь вежливо",
        "Используйте выученные местоимения и глаголы",
        "Не бойтесь совершать ошибки",
      ],
    },
    exercises: [], // Нет стандартных упражнений, встроен специальный чат
    vocabulary: [],
    estimatedTime: 15,
  },
];
