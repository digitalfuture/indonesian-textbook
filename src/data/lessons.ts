import type { Lesson } from "../utils/types";

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Знакомство и базовые фразы",
    description: "Научитесь приветствовать людей и представляться",
    objectives: ["Приветствия", "Представление", "Прощания", "Вежливые слова"],
    content: {
      theory: `В индонезийском языке нет спряжения глаголов, множественное число образуется повторением слова, а времена выражаются с помощью частиц. Это делает язык относительно простым для изучения.

Основные приветствия по времени суток:
- Selamat pagi /səlamat paɡi/ - Доброе утро (до 11:00)
- Selamat siang /səlamat siaŋ/ - Добрый день (11:00-15:00)
- Selamat sore /səlamat sorə/ - Добрый вечер (15:00-19:00)
- Selamat malam /səlamat malam/ - Добрый вечер / ночь (после 19:00)
- Selamat /səlamat/ - приветствие / благополучный, мирный

Для представления и знакомства используются слова и конструкции:
- saya /saja/ - я (официально/нейтрально)
- Anda /anda/ - Вы (вежливо/официально)
- nama /nama/ - имя
- siapa /siapa/ - кто
- Nama saya... /nama saja/ - Меня зовут... (букв. "имя моё...")
- Siapa nama Anda? /siapa nama anda/ - Как вас зовут? (букв. "Кто ваше имя?")
- dari /dari/ - из, от
- Saya dari... /saja dari/ - Я из...
- Rusia /rusia/ - Россия
- Indonesia /indonəsia/ - Индонезия

Вежливые слова и полезные выражения:
- Terima kasih /tərima kasih/ - Спасибо (букв. "примите благодарность")
- Sama-sama /sama-sama/ - Пожалуйста / не за что / взаимно (букв. "одинаково")
- Sampai jumpa /sampaj dʒumpa/ - До свидания / до встречи (букв. "до встречи")
- Apa kabar? /apa kabar/ - Как дела? (букв. "что за новости?")
- Kabar /kabar/ - новости, дела
- Baik /baik/ - хороший, хорошо, в порядке
- Kabar baik /kabar baik/ - Хорошо / всё в порядке (букв. "новости хорошие")`,
      examples: [
        {
          indonesian: "Selamat pagi, nama saya Ivan",
          russian: "Доброе утро, меня зовут Иван",
        },
        {
          indonesian: "Siapa nama Anda?",
          russian: "Как вас зовут? (букв. 'Кто ваше имя?')",
        },
        { indonesian: "Saya dari Rusia", russian: "Я из России" },
        { indonesian: "Terima kasih", russian: "Спасибо (букв. 'примите любовь/благодарность')" },
        { indonesian: "Sampai jumpa", russian: "До свидания" },
        { indonesian: "Apa kabar?", russian: "Как дела? (букв. 'что за новости?')" },
        { indonesian: "Kabar baik", russian: "Хорошо (букв. 'дела хорошие')" },
      ],
      keyPoints: [
        "Selamat - здравствуйте / привет / благополучный",
        "saya - я (официально / нейтрально)",
        "Anda - Вы (вежливо / официально)",
        "nama - имя",
        "siapa - кто",
        "Siapa nama Anda? - Как вас зовут?",
        "dari - из / от",
        "terima kasih - спасибо",
        "sama-sama - пожалуйста / не за что",
        "sampai jumpa - до свидания",
        "apa kabar - как дела",
        "kabar baik - дела хорошо",
      ],
    },
    exercises: [1, 2, 3, 4, 65, 66, 67, 68],
    vocabulary: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 22],
    estimatedTime: 45,
  },
  {
    id: 2,
    title: "Личные местоимения",
    description: "Изучаем местоимения и базовые конструкции с ними",
    objectives: [
      "Личные местоимения",
      "Притяжательные местоимения",
      "Указательные местоимения ini/itu",
    ],
    content: {
      theory: `Индонезийские местоимения различаются по степени официальности:

Личные местоимения:
- saya /saja/ - я (официально/нейтрально)
- aku /aku/ - я (неформально, с друзьями)
- kamu /kamu/ - ты (неформально)
- Anda /anda/ - Вы (официально, с уважением)
- dia /dia/ - он / она
- kami /kami/ - мы (без собеседника, эксклюзивное)
- kita /kita/ - мы (включая собеседника, инклюзивное)
- mereka /mərəka/ - они

Указательные слова:
- ini /ini/ - это, этот, эта
- itu /itu/ - то, тот, та

Базовая лексика для описания людей и предметов:
- buku /buku/ - книга
- rumah /rumah/ - дом
- siswa /siswa/ - ученик, студент
- guru /ɡuru/ - учитель, преподаватель
- teman /təman/ - друг, друзья
- Indonesia /indonəsia/ - Индонезия

Притяжательность выражается простым добавлением местоимения после существительного:
- buku saya /buku saja/ - моя книга (букв. "книга я")
- rumah dia /rumah dia/ - его/её дом
- teman saya /təman saja/ - мои друзья / мой друг`,
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
        "kami/kita - мы (без/включая собеседника)",
        "mereka - они",
        "ini - это, этот",
        "itu - то, тот",
        "buku - книга",
        "rumah - дом",
        "siswa - ученик",
        "guru - учитель",
        "teman - друг",
      ],
    },
    exercises: [5, 6, 7, 8, 69, 70, 71, 72],
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
    objectives: ["Порядок слов SVO", "Основные глаголы", "Отрицание 'tidak'", "Базовые существительные"],
    content: {
      theory: `Порядок слов в индонезийском языке: Подлежащее + Сказуемое + Дополнение (SVO - как в русском).

Основные глаголы не спрягаются по лицам и числам:
- makan /makan/ - есть, кушать
- minum /minum/ - пить
- pergi /pərɡi/ - идти, уходить, ехать
- datang /dataŋ/ - приходить, приезжать
- lihat /lihat/ - видеть, смотреть
- tahu /tahu/ - знать
- beli /bəli/ - покупать
- jual /dʒual/ - продавать

Отрицание образуется с помощью частицы 'tidak' перед глаголом или прилагательным:
- tidak /tidaʔ/ - не, нет
- Saya tidak tahu /saja tidaʔ tahu/ - Я не знаю
- Saya tidak pergi /saja tidaʔ pərɡi/ - Я не иду
- Dia tidak besar /dia tidaʔ bəsar/ - Он не большой

Полезные существительные и наречия времени:
- nasi /nasi/ - варёный рис
- air /air/ - вода
- besok /besok/ - завтра
- besar /bəsar/ - большой`,
      examples: [
        { indonesian: "Saya makan nasi", russian: "Я ем рис" },
        { indonesian: "Dia minum air", russian: "Он/она пьёт воду" },
        { indonesian: "Saya tidak pergi", russian: "Я не иду" },
        { indonesian: "Mereka datang besok", russian: "Они придут завтра" },
        { indonesian: "Kami tidak lihat", russian: "Мы не видим" },
      ],
      keyPoints: [
        "Порядок слов: SVO (Подлежащее + Сказуемое + Дополнение)",
        "tidak - частица отрицания 'не'",
        "makan - есть",
        "minum - пить",
        "pergi - идти / ехать",
        "datang - приходить / приезжать",
        "lihat - видеть",
        "nasi - рис",
        "air - вода",
        "besok - завтра",
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
      "Вопросы о цене и местоположении",
    ],
    content: {
      theory: `Вопросительные слова в индонезийском языке:
- apa /apa/ - что, какой
- siapa /siapa/ - кто
- di mana /di mana/ - где
- ke mana /kə mana/ - куда
- dari mana /dari mana/ - откуда
- kapan /kapan/ - когда
- mengapa /məŋapa/ - почему (также kenapa /kənapa/)
- bagaimana /baɡaimana/ - как, каким образом
- berapa /bərapa/ - сколько

Слова для вопросов о покупках и состоянии:
- harga /harɡa/ - цена, стоимость
- harganya /harɡaɲa/ - её/его цена, стоимость
- kabar /kabar/ - дела, новости

Вопросы строятся прямолинейно: вопросительное слово ставится в начале предложения либо на место заменяемого члена предложения.
- Apa ini? /apa ini/ - Что это?
- Siapa nama kamu? /siapa nama kamu/ - Как тебя зовут? (букв. "Кто твоё имя?")
- Berapa harganya? /bərapa harɡaɲa/ - Сколько это стоит? (букв. "Сколько её цена?")`,
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
        "apa - что / какой",
        "siapa - кто",
        "di mana - где",
        "ke mana - куда",
        "kapan - когда",
        "berapa - сколько",
        "bagaimana - как",
        "harganya - его/её цена, стоимость",
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
    objectives: ["tidak vs bukan", "belum", "jangan", "Полезная лексика"],
    content: {
      theory: `В индонезийском языке используются 4 основных вида отрицания:

1. TIDAK /tidaʔ/ - отрицание действий (глаголов) и признаков (прилагательных):
   - Saya tidak mengerti /saja tidaʔ məŋərti/ - Я не понимаю
   - Rumah ini tidak besar /rumah ini tidaʔ bəsar/ - Этот дом не большой

2. BUKAN /bukan/ - отрицание сущности и существительных ("не является"):
   - Ini bukan masalah /ini bukan masalah/ - Это не проблема
   - Dia bukan orang Indonesia /dia bukan oraŋ indonəsia/ - Он не индонезиец (букв. "не человек Индонезии")
   - Dia bukan guru /dia bukan ɡuru/ - Он не учитель

3. BELUM /bəlum/ - ещё не (действие не произошло к настоящему моменту, но возможно в будущем):
   - Saya belum siap /saja bəlum siap/ - Я ещё не готов
   - Saya belum makan /saja bəlum makan/ - Я ещё не ел

4. JANGAN /dʒaŋan/ - запрет ("не делай!", "нельзя"):
   - Jangan lupa! /dʒaŋan lupa/ - Не забудь!
   - Jangan pergi! /dʒaŋan pərɡi/ - Не уходи!

Новая лексика урока:
- mengerti /məŋərti/ - понимать
- masalah /masalah/ - проблема
- siap /siap/ - готовый, готов
- lupa /lupa/ - забывать
- orang /oraŋ/ - человек, люди`,
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
        "tidak - не (с глаголами и прилагательными)",
        "bukan - не (с существительными)",
        "belum - ещё не",
        "jangan - не делай (запрет)",
        "mengerti - понимать",
        "masalah - проблема",
        "siap - готов",
        "lupa - забывать",
        "orang - человек",
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
      "Глагол punya",
    ],
    content: {
      theory: `Притяжательность в индонезийском выражается несколькими способами:

1. Местоимение ставится сразу после существительного:
   - buku saya /buku saja/ - моя книга
   - rumah dia /rumah dia/ - его/её дом
   - mobil kami /mobil kami/ - наша машина

2. Суффикс -nya /ɲa/ (его / её / их):
   - mobilnya /mobilɲa/ - его/её машина
   - bukunya /bukuɲa/ - его/её книга
   - temannya /təmanɲa/ - его/её друг

3. Слово punya /puɲa/ (иметь, владеть, принадлежать):
   - Ini punya saya /ini puɲa saja/ - Это моё (принадлежит мне)
   - punya /puɲa/ - иметь, владеть, принадлежать

Новые слова урока:
- mobil /mobil/ - автомобиль, машина
- baru /baru/ - новый
- baik /baik/ - хороший, добрый`,
      examples: [
        { indonesian: "Ini buku saya", russian: "Это моя книга" },
        { indonesian: "Rumah dia besar", russian: "Его/её дом большой" },
        { indonesian: "Mobilnya baru", russian: "Его/её машина новая" },
        { indonesian: "Temannya baik", russian: "Его/её друг хороший" },
        { indonesian: "Ini punya saya", russian: "Это моё (принадлежит мне)" },
      ],
      keyPoints: [
        "Существительное + местоимение = принадлежность (buku saya)",
        "-nya - суффикс принадлежности 'его/её/их'",
        "punya - иметь / принадлежать (Ini punya saya)",
        "mobil - машина",
        "baru - новый",
        "baik - хороший / добрый",
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
    objectives: ["Числа 0-1000", "Счётные слова (классификаторы)", "Количественные конструкции"],
    content: {
      theory: `Числа в индонезийском языке:

0-10:
- nol /nol/ - 0
- satu /satu/ - 1
- dua /dua/ - 2
- tiga /tiɡa/ - 3
- empat /əmpat/ - 4
- lima /lima/ - 5
- enam /ənam/ - 6
- tujuh /tudʒuh/ - 7
- delapan /dəlapan/ - 8
- sembilan /səmbilan/ - 9
- sepuluh /səpuluh/ - 10

Десятки, сотни, тысячи:
- puluh /puluh/ - десяток (dua puluh = 20, tiga puluh = 30)
- ratus /ratus/ - сотня (seratus /səratus/ = 100, dua ratus = 200)
- ribu /ribu/ - тысяча (seribu /səribu/ = 1000, dua ribu = 2000)

Счётные классификаторы:
- orang /oraŋ/ - человек (classifier для людей: satu orang, dua orang)
- buah /buah/ - штука (classifier для предметов: satu buah rumah, dua buah mobil)

Полезные слова урока:
- ada /ada/ - есть, имеется, присутствовать
- saudara /saudara/ - брат/сестра, родственник
- butuh /butuh/ - нуждаться, нужно, требоваться
- rupiah /rupiah/ - рупия (валюта Индонезии)`,
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
        "satu, dua, tiga, empat, lima... - числительные",
        "puluh - десятки",
        "ratus - сотни",
        "ribu - тысячи",
        "orang - классификатор для людей",
        "buah - классификатор для предметов",
        "ada - есть / имеется",
        "saudara - брат/сестра",
        "butuh - нужно / нуждаться",
        "rupiah - рупия",
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
    objectives: ["Дни недели", "Время суток", "Часы и выражение времени", "Действия по времени"],
    content: {
      theory: `Дни недели:
- Senin /sənin/ - понедельник
- Selasa /səlasa/ - вторник
- Rabu /rabu/ - среда
- Kamis /kamis/ - четверг
- Jumat /dʒumat/ - пятница
- Sabtu /sabtu/ - суббота
- Minggu /miŋɡu/ - воскресенье / неделя

Временные понятия и время суток:
- hari /hari/ - день
- hari ini /hari ini/ - сегодня
- besok /besok/ - завтра
- kemarin /kəmarin/ - вчера
- sekarang /səkaraŋ/ - сейчас
- pagi /paɡi/ - утро
- siang /siaŋ/ - день (с 11:00 до 15:00)
- sore /sorə/ - вечер (до заката, 15:00-19:00)
- malam /malam/ - ночь / поздний вечер (после 19:00)

Указание времени:
- jam /dʒam/ - час / время / часы
- Jam berapa? /dʒam bərapa/ - Который час?
- Jam dua /dʒam dua/ - Два часа
- Jam tiga /dʒam tiɡa/ - Три часа

Глаголы распорядка дня:
- bangun /baŋun/ - просыпаться, вставать
- bertemu /bərtəmu/ - встречаться`,
      examples: [
        { indonesian: "Hari ini Senin", russian: "Сегодня понедельник" },
        { indonesian: "Besok hari Selasa", russian: "Завтра вторник" },
        { indonesian: "Sekarang jam tiga", russian: "Сейчас три часа" },
        { indonesian: "Saya bangun pagi", russian: "Я просыпаюсь утром" },
        { indonesian: "Kita bertemu besok", russian: "Мы встретимся завтра" },
      ],
      keyPoints: [
        "Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu - дни недели",
        "hari ini - сегодня",
        "besok - завтра",
        "kemarin - вчера",
        "sekarang - сейчас",
        "jam - час / время",
        "bangun - просыпаться",
        "bertemu - встречаться",
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
    objectives: ["Частица sudah", "Частица telah", "Частица pernah", "Лексика завершенности"],
    content: {
      theory: `В индонезийском языке глаголы не изменяются по временам. Вместо этого используются специальные маркеры (частицы):

1. SUDAH /sudah/ - уже (наиболее употребительное в разговорной и нейтральной речи):
   - Saya sudah makan /saja sudah makan/ - Я уже поел
   - Saya sudah selesai /saja sudah sələsai/ - Я уже закончил
   - Dia sudah pulang /dia sudah pulaŋ/ - Он уже вернулся домой
   - Sudah makan? /sudah makan/ - Уже ел?

2. TELAH /təlah/ - уже (формальный, книжный аналог sudah):
   - Mereka telah tiba /mərəka təlah tiba/ - Они уже прибыли

3. PERNAH /pərnah/ - когда-либо, бывал (указывает на наличие жизненного опыта в прошлом):
   - Saya pernah ke Jakarta /saja pərnah kə dʒakarta/ - Я бывал в Джакарте
   - Saya pernah ke Bali /saja pərnah kə bali/ - Я бывал на Бали

Новая лексика урока:
- selesai /sələsai/ - закончить, завершить, готово
- pulang /pulaŋ/ - возвращаться (домой)
- tiba /tiba/ - прибывать, приезжать
- Jakarta /dʒakarta/ - Джакарта (столица Индонезии)`,
      examples: [
        { indonesian: "Saya sudah selesai", russian: "Я уже закончил" },
        { indonesian: "Dia sudah pulang", russian: "Он уже вернулся домой" },
        { indonesian: "Sudah makan?", russian: "Уже ел?" },
        { indonesian: "Saya pernah ke Jakarta", russian: "Я бывал в Джакарте" },
        { indonesian: "Mereka telah tiba", russian: "Они уже прибыли" },
      ],
      keyPoints: [
        "sudah - уже (завершённость действия)",
        "telah - уже (формальное)",
        "pernah - когда-либо (наличие опыта)",
        "selesai - закончить",
        "pulang - возвращаться домой",
        "tiba - прибывать",
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
    objectives: ["sedang", "lagi", "masih", "Действия в момент речи"],
    content: {
      theory: `Для выражения действия, происходящего прямо сейчас (в процессе), используются следующие частицы:

1. SEDANG /sədaŋ/ - в процессе, прямо сейчас (нейтральное и официальное):
   - Saya sedang bekerja /saja sədaŋ bəkərdʒa/ - Я работаю (прямо сейчас)
   - Kami sedang makan siang /kami sədaŋ makan siaŋ/ - Мы обедаем

2. LAGI /laɡi/ - в процессе (разговорное):
   - Dia lagi baca buku /dia laɡi batʃa buku/ - Он читает книгу (сейчас)

3. MASIH /masih/ - всё ещё (действие или состояние продолжается):
   - Mereka masih di kantor /mərəka masih di kantor/ - Они всё ещё в офисе
   - Apa kamu masih di sini? /apa kamu masih di sini/ - Ты всё ещё здесь?

Новая лексика урока:
- bekerja /bəkərdʒa/ - работать (также kerja)
- baca /batʃa/ - читать (также membaca)
- kantor /kantor/ - офис, учреждение
- makan siang /makan siaŋ/ - обедать (букв. "есть дневное")
- di sini /di sini/ - здесь`,
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
        "sedang - в процессе (прямо сейчас)",
        "lagi - в процессе (разговорное)",
        "masih - всё ещё",
        "bekerja - работать",
        "baca - читать",
        "kantor - офис",
        "di sini - здесь",
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
    objectives: ["akan", "mau", "hendak", "Выражение намерений и времени в будущем"],
    content: {
      theory: `Будущее время в индонезийском языке выражается специальными частицами перед глаголом:

1. AKAN /akan/ - будет, буду (нейтральный маркер будущего времени):
   - Saya akan belajar besok /saja akan bəladʒar besok/ - Я буду учиться завтра
   - Dia akan pulang minggu depan /dia akan pulaŋ miŋɡu dəpan/ - Он вернётся на следующей неделе
   - Kami akan bertemu jam 5 /kami akan bərtəmu dʒam lima/ - Мы встретимся в 5 часов

2. MAU /mau/ - собираться, хотеть (разговорный маркер ближайшего будущего и желания):
   - Mau pergi ke mana? /mau pərɡi kə mana/ - Куда хочешь пойти? / Куда идёшь?
   - Mereka mau makan /mərəka mau makan/ - Они хотят есть / собираются поесть

3. HENDAK /həndaʔ/ - намереваться (более формальное):
   - Saya hendak belajar /saja həndaʔ bəladʒar/ - Я намерен учиться

Новая лексика урока:
- belajar /bəladʒar/ - учиться, изучать
- minggu depan /miŋɡu dəpan/ - на следующей неделе
- depan /dəpan/ - передний, следующий`,
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
        "akan - буду / будет (нейтральное)",
        "mau - собираюсь / хочу (разговорное)",
        "hendak - намерен (формальное)",
        "belajar - учиться",
        "minggu depan - на следующей неделе",
        "depan - следующий / впереди",
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
    objectives: ["bisa", "harus", "mau / ingin", "Вежливые просьбы"],
    content: {
      theory: `Модальные глаголы выражают возможность, необходимость и желание:

1. BISA /bisa/ - мочь, уметь:
   - Saya bisa berenang /saja bisa bərənaŋ/ - Я умею плавать
   - Bisa bantu saya? /bisa bantu saja/ - Можете помочь мне?

2. HARUS /harus/ - должен, обязан:
   - Kamu harus datang tepat waktu /kamu harus dataŋ təpat waktu/ - Ты должен прийти вовремя
   - Saya harus pergi /saja harus pərɡi/ - Я должен идти

3. MAU /mau/ - хотеть (повседневное):
   - Saya mau kopi /saja mau kopi/ - Я хочу кофе

4. INGIN /iŋin/ - хотеть, желать (более вежливое и формальное):
   - Dia ingin pergi ke Bali /dia iŋin pərɡi kə bali/ - Он хочет поехать на Бали
   - Apa yang kamu inginkan? /apa jaŋ kamu iŋinkan/ - Чего ты желаешь?

Новые слова урока:
- berenang /bərənaŋ/ - плавать
- tepat /təpat/ - точный
- waktu /waktu/ - время
- tepat waktu /təpat waktu/ - вовремя
- kopi /kopi/ - кофе
- bantu /bantu/ - помогать (также membantu)
- Bali /bali/ - Бали`,
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
        "bisa - мочь / уметь",
        "harus - должен / обязан",
        "mau - хотеть (разговорное)",
        "ingin - хотеть / желать (вежливое)",
        "berenang - плавать",
        "tepat waktu - вовремя",
        "kopi - кофе",
        "bantu - помогать",
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
    objectives: ["Позиция прилагательных", "lebih (более)", "paling (самый)", "sangat (очень)"],
    content: {
      theory: `Правило: В индонезийском языке прилагательное всегда ставится ПОСЛЕ определяемого существительного:
- rumah besar /rumah bəsar/ - большой дом (букв. "дом большой")
- mobil baru /mobil baru/ - новая машина
- buku kecil /buku kətʃil/ - маленькая книга

Степени сравнения и усиления:
1. Lebih /ləbih/ - более (сравнительная степень):
   - lebih baik /ləbih baik/ - лучше (более хороший)
   - lebih besar /ləbih bəsar/ - больше

2. Paling /paliŋ/ - самый (превосходная степень):
   - paling pintar /paliŋ pintar/ - самый умный
   - paling besar /paliŋ bəsar/ - самый большой

3. Sangat /saŋat/ - очень:
   - sangat enak /saŋat enak/ - очень вкусный
   - sangat baik /saŋat baik/ - очень хороший

Новые слова урока:
- pintar /pintar/ - умный, способный
- enak /enak/ - вкусный, приятный
- makanan /makanan/ - еда, пища, блюдо
- kecil /kətʃil/ - маленький
- besar /bəsar/ - большой`,
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
        "Прилагательное ставится ПОСЛЕ существительного (rumah besar)",
        "lebih - более / ...-ее (lebih baik - лучше)",
        "paling - самый (paling pintar - самый умный)",
        "sangat - очень (sangat enak - очень вкусный)",
        "pintar - умный",
        "enak - вкусный",
        "makanan - еда",
        "kecil - маленький",
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
    objectives: ["di (место)", "ke (направление)", "dari (исходная точка)", "pada (время)", "di atas / di bawah"],
    content: {
      theory: `Основные предлоги в индонезийском языке:

1. DI /di/ - в, на (указывает на местонахождение, где?):
   - di rumah /di rumah/ - дома / в доме
   - di Jakarta /di dʒakarta/ - в Джакарте

2. KE /kə/ - в, на, к (указывает на направление движения, куда?):
   - ke kantor /kə kantor/ - в офис / на работу
   - ke rumah /kə rumah/ - домой

3. DARI /dari/ - из, от, с (указывает на источник / происхождение, откуда?):
   - dari Rusia /dari rusia/ - из России
   - dari rumah /dari rumah/ - из дома

4. PADA /pada/ - в, на (указывает на точное время или дни):
   - pada jam 3 /pada dʒam tiɡa/ - в 3 часа
   - pada hari Senin /pada hari sənin/ - в понедельник

5. Пространственные конструкции:
   - di atas /di atas/ - на, над (положение сверху)
   - di atas meja /di atas medʒa/ - на столе
   - di bawah /di bawah/ - под
   - di dalam /di dalam/ - внутри, в

Новые слова урока:
- kantor /kantor/ - офис, служба
- meja /medʒa/ - стол
- atas /atas/ - верх
- bawah /bawah/ - низ`,
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
        "di - в / на (место)",
        "ke - в / к (направление)",
        "dari - из / от (исходная точка)",
        "pada - в (время: pada jam 3)",
        "di atas meja - на столе",
        "kantor - офис",
        "meja - стол",
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
    objectives: ["Союзы dan, atau, tapi", "karena, jadi", "yang (который)"],
    content: {
      theory: `Основные союзы для соединения слов и предложений:

1. DAN /dan/ - и:
   - Saya makan nasi dan minum air /saja makan nasi dan minum air/ - Я ем рис и пью воду

2. ATAU /atau/ - или:
   - Mau teh atau kopi? /mau teh atau kopi/ - Хочешь чай или кофе?

3. TAPI /tapi/ - но (также tetapi /tətapi/):
   - Dia pintar tapi malas /dia pintar tapi malas/ - Он умный, но ленивый

4. KARENA /karəna/ - потому что, так как:
   - Saya tidak pergi karena hujan /saja tidaʔ pərɡi karəna hudʒan/ - Я не пошёл, потому что дождь

5. JADI /dʒadi/ - поэтому, так что:
   - Saya sakit jadi tidak datang /saja sakit dʒadi tidaʔ dataŋ/ - Я заболел, поэтому не пришёл

6. YANG /jaŋ/ - который, которая, которое:
   - Orang yang saya lihat /oraŋ jaŋ saja lihat/ - Человек, которого я видел

Новая лексика урока:
- teh /teh/ - чай
- malas /malas/ - ленивый
- hujan /hudʒan/ - дождь
- sakit /sakit/ - больной, болеть`,
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
        "yang - который / которая",
        "teh - чай",
        "malas - ленивый",
        "hujan - дождь",
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
    objectives: ["Разговорные формулы", "Вежливость и этикет", "Полезные выражения"],
    content: {
      theory: `Полезные разговорные фразы и формулы вежливости:

1. Tidak apa-apa /tidaʔ apa-apa/ - Ничего страшного / всё в порядке
2. Sama-sama /sama-sama/ - Пожалуйста, не за что / взаимно (в ответ на спасибо)
3. Tolong /toloŋ/ - Пожалуйста (просьба) / помогите
4. Maaf /maaf/ - Извините, прости
5. Permisi /pərmisi/ - Разрешите / извините (чтобы пройти или обратиться)
6. Silakan /silakan/ - Пожалуйста, добро пожаловать (вежливое приглашение)
7. Terima kasih banyak /tərima kasih baɲaʔ/ - Большое спасибо
8. Sampai jumpa lagi /sampaj dʒumpa laɡi/ - До скорой встречи снова

Полезная лексика урока:
- khawatir /khawatir/ - волноваться, беспокоиться (jangan khawatir - не волнуйся)
- senang /sənaŋ/ - рад, приятно (senang bisa membantu - рад помочь)
- membantu /məmbantu/ - помогать
- ambilkan /ambilkan/ - взять, принести, подать (tolong ambilkan buku itu)
- terlambat /tərlambat/ - опоздать, с опозданием (maaf, saya terlambat)
- masuk /masuk/ - входить (silakan masuk - пожалуйста, входите)`,
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
        "sama-sama - пожалуйста (в ответ на спасибо)",
        "tolong - пожалуйста (просьба)",
        "maaf - извините",
        "silakan - пожалуйста (приглашение)",
        "jangan khawatir - не волнуйтесь",
        "senang bisa membantu - рад помочь",
        "terlambat - опоздать",
        "masuk - входить",
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

Приветствия и вводные фразы:
- Halo /halo/ - Привет / алло
- Apa kabar? /apa kabar/ - Как дела?
- Kabar baik /kabar baik/ - Всё хорошо

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
        "Halo - привет",
      ],
    },
    exercises: [],
    vocabulary: [],
    estimatedTime: 15,
  },
];
