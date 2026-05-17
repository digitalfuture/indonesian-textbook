import type { Lesson } from "../utils/types";

// Уроки русского языка для индонезийцев
export const lessonsRu: Lesson[] = [
  {
    id: 1,
    title: "Sapaan dan Perkenalan",
    description: "Belajar menyapa dan memperkenalkan diri dalam bahasa Rusia",
    objectives: ["Mengucapkan salam", "Memperkenalkan diri", "Mengucapkan selamat tinggal"],
    content: {
      theory: `Dalam bahasa Rusia, sapaan tergantung pada formalitas dan waktu hari.

Sapaan umum:
- Здравствуйте [zdra-stvooy-tye] — salam formal (sopan)
- Привет [pri-vyet] — salam informal (teman)
- Доброе утро [dob-ra-ye oot-ra] — selamat pagi
- Добрый день [dob-ryy dyen'] — selamat siang
- Добрый вечер [dob-ryy vye-cher] — selamat sore/malam

Saat berpisah:
- До свидания [da svi-da-ni-ya] — sampai jumpa (formal)
- Пока [pa-ka] — sampai jumpa (informal)

Memperkenalkan diri:
- Меня зовут... [mye-nya zo-voot] — nama saya...
- Очень приятно [o-chen' pri-yat-na] — senang berkenalan`,
      examples: [
        { indonesian: "Здравствуйте!", russian: "Halo! (salam formal)" },
        { indonesian: "Привет!", russian: "Hai! (informal)" },
        { indonesian: "Как дела?", russian: "Apa kabar?" },
        { indonesian: "Хорошо, спасибо", russian: "Baik, terima kasih" },
        { indonesian: "Меня зовут Анна", russian: "Nama saya Anna" },
      ],
      keyPoints: [
        "Глагол (kata kerja) — konjugasi: я говорю (saya bicara), ты говоришь (kamu bicara)",
        "Имя (kata benda) — gender: мужской (maskulin), женский (feminin), средний (netral)",
        "Прилагательное (kata sifat) — setuju dengan kata benda dalam gender dan kasus",
      ],
      grammarNotes: [
        "В русском языке 3 рода: мужской, женский, средний",
        "Падежи: именительный, родительный, дательный, винительный, творительный, предложный",
      ],
    },
    exercises: [101, 102, 103, 104],
    vocabulary: [1, 2, 3, 4, 5, 6, 7, 8],
    estimatedTime: 30,
  },
  {
    id: 2,
    title: "Kata Ganti Orang",
    description: "Belajar kata ganti orang dalam bahasa Rusia",
    objectives: ["Mengenal kata ganti orang", "Menggunakan kata ganti dalam kalimat"],
    content: {
      theory: `Kata ganti orang dalam bahasa Rusia:

Saya — Я [ya]
Kamu — Ты [ty] (informal), Вы [vy] (formal)
Dia (laki-laki) — Он [on]
Dia (perempuan) — Она [a-na]
Dia (benda) — Оно [a-no]
Kami/kita — Мы [my]
Kalian — Вы [vy]
Mereka — Они [a-ni]

Contoh:
- Я студент [ya stoo-dyent] — Saya mahasiswa
- Ты красивая [ty kra-si-va-ya] — Kamu cantik
- Он дома [on do-ma] — Dia (laki-laki) di rumah
- Она учитель [a-na oo-chi-tyel'] — Dia (perempuan) guru
- Мы вместе [my vmyes-tye] — Kita bersama`,
      examples: [
        { indonesian: "Я говорю по-русски", russian: "Saya bicara bahasa Rusia" },
        { indonesian: "Ты хороший друг", russian: "Kamu teman yang baik" },
        { indonesian: "Она красивая", russian: "Dia (perempuan) cantik" },
        { indonesian: "Мы учимся", russian: "Kami belajar" },
        { indonesian: "Они пришли", russian: "Mereka datang" },
      ],
      keyPoints: [
        "Вы — формальное 'Anda', juga digunakan untuk 'kalian'",
        "Он/она/оно — tiga jenis gender",
        "Kata ganti berubah bentuk tergantung kasus",
      ],
    },
    exercises: [201, 202, 203, 204],
    vocabulary: [9, 10, 11, 12, 13, 14, 15, 16],
    estimatedTime: 30,
  },
  {
    id: 3,
    title: "Kata Kerja Dasar",
    description: "Kata kerja dasar dan cara menggunakannya dalam kalimat",
    objectives: ["Mengenal kata kerja dasar", "Memahami konjugasi"],
    content: {
      theory: `Kata kerja dasar dalam bahasa Rusia:

Говорить [ga-va-reet'] — bicara
Делать [dye-lat'] — melakukan, membuat
Знать [znat'] — tahu
Понимать [pa-ni-mat'] — mengerti
Хотеть [kha-tyet'] — mau, ingin

Konjugasi (я/ты/он/она/мы/вы/они):
Говорить:
- Я говорю [ya ga-va-ryu] — saya bicara
- Ты говоришь [ty ga-va-reesh'] — kamu bicara
- Он/она говорит [on/a-na ga-va-reet] — dia bicara
- Мы говорим [my ga-va-reem] — kami bicara
- Вы говорите [vy ga-va-ree-tye] — Anda bicara
- Они говорят [a-ni ga-va-ryat] — mereka bicara`,
      examples: [
        { indonesian: "Я говорю по-русски", russian: "Saya bicara bahasa Rusia" },
        { indonesian: "Ты хорошо говоришь", russian: "Kamu bicara dengan baik" },
        { indonesian: "Мы делаем уроки", russian: "Kami mengerjakan pelajaran" },
        { indonesian: "Я не понимаю", russian: "Saya tidak mengerti" },
        { indonesian: "Она хочет есть", russian: "Dia mau makan" },
      ],
      keyPoints: [
        "Kata kerja Rusia punya 2 bentuk: sempurna (selesai) dan tidak sempurna (proses)",
        "Konjugasi tergantung pada orang (я, ты, он...)",
        "Infinitif berakhiran -ть, -ти, -чь",
      ],
    },
    exercises: [301, 302, 303, 304],
    vocabulary: [17, 18, 19, 20, 21, 22, 23, 24],
    estimatedTime: 30,
  },
  {
    id: 4,
    title: "Kata Tanya",
    description: "Kata tanya dalam bahasa Rusia",
    objectives: ["Membentuk pertanyaan", "Menggunakan kata tanya"],
    content: {
      theory: `Kata tanya dalam bahasa Rusia:

Кто? [kto] — Siapa?
Что? [shto] — Apa?
Где? [gdye] — Di mana?
Куда? [koo-da] — Ke mana?
Откуда? [at-koo-da] — Dari mana?
Когда? [kag-da] — Kapan?
Почему? [pa-chee-moo] — Mengapa?
Зачем? [za-chem] — Untuk apa?
Как? [kak] — Bagaimana?
Сколько? [skol'-ka] — Berapa?
Какой? [ka-koy] — Yang mana?

Contoh:
- Кто это? [kto e-ta] — Siapa ini?
- Что это? [shto e-ta] — Apa ini?
- Где туалет? [gdye too-a-lyet] — Di mana toilet?
- Сколько стоит? [skol'-ka sto-eet] — Berapa harganya?`,
      examples: [
        { indonesian: "Кто это?", russian: "Siapa ini?" },
        { indonesian: "Что ты делаешь?", russian: "Apa yang kamu lakukan?" },
        { indonesian: "Где ты живёшь?", russian: "Di mana kamu tinggal?" },
        { indonesian: "Когда он придёт?", russian: "Kapan dia datang?" },
        { indonesian: "Почему ты не идёшь?", russian: "Kenapa kamu tidak pergi?" },
      ],
      keyPoints: [
        "Кто (siapa) digunakan untuk orang, что (apa) untuk benda",
        "Где (di mana), куда (ke mana), откуда (dari mana) — kata tanya tempat",
        "Kata tanya selalu di awal kalimat",
      ],
    },
    exercises: [401, 402, 403, 404],
    vocabulary: [25, 26, 27, 28, 29, 30, 31, 32],
    estimatedTime: 30,
  },
  {
    id: 5,
    title: "Negasi",
    description: "Cara mengekspresikan negasi dalam bahasa Rusia",
    objectives: ["Menggunakan tidak", "Menggunakan bukan"],
    content: {
      theory: `Negasi dalam bahasa Rusia:

НЕТ [nyet] — tidak (jawaban)
НЕ [nye] — tidak (sebelum kata kerja/kata sifat)
НИ [nee] — tidak satu pun

Contoh:
- Я не знаю [ya nye zna-yu] — Saya tidak tahu
- Я не хочу [ya nye kha-choo] — Saya tidak mau
- Это не моя книга [e-ta nye ma-ya knee-ga] — Ini bukan buku saya
- Нет, спасибо [nyet spa-SEE-ba] — Tidak, terima kasih

Negasi ganda:
- Я ничего не знаю [ya nee-che-VO nye zna-yu] — Saya tidak tahu apa-apa
- Никто не пришёл [neek-TO nye pree-SHOL] — Tidak ada yang datang`,
      examples: [
        { indonesian: "Я не понимаю", russian: "Saya tidak mengerti" },
        { indonesian: "Нет, спасибо", russian: "Tidak, terima kasih" },
        { indonesian: "Это не мой дом", russian: "Ini bukan rumah saya" },
        { indonesian: "Я не хочу есть", russian: "Saya tidak mau makan" },
        { indonesian: "Он не пришёл", russian: "Dia tidak datang" },
      ],
      keyPoints: [
        "НЕ diletakkan SEBELUM kata kerja (seperti 'tidak' dalam bahasa Indonesia)",
        "Dalam bahasa Rusia, negasi ganda itu benar (ни...ни...не = tidak ada satu pun)",
        "НЕТ = jawaban 'tidak', НЕ = negasi kata",
      ],
    },
    exercises: [501, 502, 503, 504],
    vocabulary: [33, 34, 35, 36, 37, 38, 39, 40],
    estimatedTime: 30,
  },
  {
    id: 6,
    title: "Kepemilikan",
    description: "Menyatakan kepemilikan dalam bahasa Rusia",
    objectives: ["Menggunakan kata ganti kepemilikan", "Menyusun kalimat milik"],
    content: {
      theory: `Kata ganti kepemilikan dalam bahasa Rusia:

Мой [moy] — milik saya (laki-laki)
Моя [ma-ya] — milik saya (perempuan)
Моё [ma-yo] — milik saya (netral)
Мои [ma-ee] — milik saya (jamak)
Твой [tvoy] — milik kamu
Его [ye-VO] — milik dia (laki-laki)
Её [ye-YO] — milik dia (perempuan)
Наш [nash] — milik kami
Ваш [vash] — milik Anda/Кalian
Их [eeh] — milik mereka

Contoh:
- Это мой дом [e-ta moy dom] — Ini rumah saya (laki-laki)
- Это моя книга [e-ta ma-YA KNEE-ga] — Ini buku saya (perempuan)
- Это моё окно [e-ta ma-YO ak-NO] — Ini jendela saya (netral)
- Это мои друзья [e-ta ma-ee drooz-YA] — Ini teman-teman saya (jamak)`,
      examples: [
        { indonesian: "Это мой папа", russian: "Ini ayah saya" },
        { indonesian: "Это моя мама", russian: "Ini ibu saya" },
        { indonesian: "Это твоя книга?", russian: "Ini buku kamu?" },
        { indonesian: "Где наш дом?", russian: "Di mana rumah kita?" },
        { indonesian: "Это их машина", russian: "Ini mobil mereka" },
      ],
      keyPoints: [
        "Kata ganti kepemilikan setuju dengan gender BENDA yang dimiliki",
        "Мой/моя/моё/мои — bentuk berbeda untuk gender & jumlah",
        "Его, её, их — tidak berubah bentuk",
      ],
    },
    exercises: [601, 602, 603, 604],
    vocabulary: [41, 42, 43, 44, 45, 46, 47, 48],
    estimatedTime: 30,
  },
  {
    id: 7,
    title: "Angka",
    description: "Angka dan berhitung dalam bahasa Rusia",
    objectives: ["Menghitung 1-100", "Menggunakan angka dalam percakapan"],
    content: {
      theory: `Angka dalam bahasa Rusia:

1 — один [a-DEEN]
2 — два [dva]
3 — три [tree]
4 — четыре [che-TY-rye]
5 — пять [pyat']
6 — шесть [shest']
7 — семь [syem']
8 — восемь [VO-syem']
9 — девять [DYE-vyat']
10 — десять [DYE-syat']
11 — одиннадцать [a-DEEN-na-dtsat']
12 — двенадцать [dvee-NA-dtsat']
20 — двадцать [DVA-dtsat']
30 — тридцать [TREE-dtsat']
100 — сто [sto]

Contoh:
- Сколько это стоит? — Berapa ini?
- Один билет, пожалуйста — Satu tiket, tolong
- Мне двадцать лет — Saya berusia 20 tahun`,
      examples: [
        { indonesian: "Один, два, три", russian: "Satu, dua, tiga" },
        { indonesian: "Мне двадцать пять лет", russian: "Saya 25 tahun" },
        { indonesian: "Сколько это стоит?", russian: "Berapa harganya?" },
        { indonesian: "Один билет, пожалуйста", russian: "Satu tiket, tolong" },
      ],
      keyPoints: [
        "Angka 1 berubah gender: один (m), одна (f), одно (n)",
        "Setelah 2,3,4 — kata benda bentuk genitif tunggal",
        "Setelah 5+ — kata benda bentuk genitif jamak",
      ],
    },
    exercises: [701, 702, 703, 704],
    vocabulary: [49, 50, 51, 52, 53, 54, 55, 56],
    estimatedTime: 30,
  },
  {
    id: 8,
    title: "Waktu",
    description: "Mengungkapkan waktu dalam bahasa Rusia",
    objectives: ["Menyebutkan waktu", "Menggunakan kata waktu"],
    content: {
      theory: `Waktu dalam bahasa Rusia:

Hari ini — сегодня [see-VOD-nya]
Kemarin — вчера [fche-RA]
Besok — завтра [ZAV-tra]
Sekarang — сейчас [seey-CHAHS]
Nanti — потом [pa-TOM]

Hari:
Понедельник — Senin
Вторник — Selasa
Среда — Rabu
Четверг — Kamis
Пятница — Jumat
Суббота — Sabtu
Воскресенье — Minggu

Bulan:
Январь — Januari
Февраль — Februari
Март — Maret
Апрель — April
Май — Mei
Июнь — Juni
Июль — Juli
Август — Agustus
Сентябрь — September
Октябрь — Oktober
Ноябрь — November
Декабрь — Desember`,
      examples: [
        { indonesian: "Сегодня понедельник", russian: "Hari ini hari Senin" },
        { indonesian: "Завтра будет вторник", russian: "Besok hari Selasa" },
        { indonesian: "Который час?", russian: "Jam berapa?" },
        { indonesian: "Сейчас три часа", russian: "Sekarang jam tiga" },
        { indonesian: "Я приду завтра", russian: "Saya datang besok" },
      ],
      keyPoints: [
        "Hari dalam seminggu semuanya berakhiran konsonan",
        "Nama bulan semuanya maskulin",
        "Который час? — 'Jam berapa?' secara harfiah 'Yang ke berapa jam?'",
      ],
    },
    exercises: [801, 802, 803, 804],
    vocabulary: [57, 58, 59, 60, 61, 62, 63, 64],
    estimatedTime: 30,
  },
  {
    id: 9,
    title: "Masa Lampau",
    description: "Mengungkapkan kejadian di masa lampau",
    objectives: ["Membentuk kalimat lampau", "Menggunakan kata lampau"],
    content: {
      theory: `Masa lampau dalam bahasa Rusia dibentuk dengan akhiran -Л:

Kata kerja bentuk lampau:
Говорить → Говорил (laki-laki)
               Говорила (perempuan)
               Говорили (jamak)

- Я говорил [ya ga-va-REEL] — Saya bicara (laki-laki)
- Я говорила [ya ga-va-REE-la] — Saya bicara (perempuan)
- Ты говорил [ty ga-va-REEL] — Kamu bicara (laki-laki)
- Она говорила [a-NA ga-va-REE-la] — Dia bicara (perempuan)
- Мы говорили [my ga-va-REE-lee] — Kami bicara

Contoh kalimat:
- Я вчера был дома — Saya kemarin di rumah
- Она уже пришла — Dia sudah datang
- Мы были в Москве — Kami berada di Moskow`,
      examples: [
        { indonesian: "Я был в школе", russian: "Saya (laki-laki) ada di sekolah" },
        { indonesian: "Она была дома", russian: "Dia (perempuan) ada di rumah" },
        { indonesian: "Мы были в кино", russian: "Kami ada di bioskop" },
        { indonesian: "Он уже пришёл", russian: "Dia sudah datang" },
        { indonesian: "Я это делал", russian: "Saya melakukan ini" },
      ],
      keyPoints: [
        "Bentuk lampau tidak berubah untuk orang (saya/kamu/dia — sama)",
        "Yang berubah adalah gender: -л (m), -ла (f), -ло (n), -ли (pl)",
      ],
    },
    exercises: [901, 902, 903, 904],
    vocabulary: [65, 66, 67, 68, 69, 70, 71, 72],
    estimatedTime: 30,
  },
  {
    id: 10,
    title: "Waktu Sekarang",
    description: "Mengungkapkan tindakan yang sedang berlangsung",
    objectives: ["Menggunakan konjugasi sekarang", "Membentuk kalimat sekarang"],
    content: {
      theory: `Waktu sekarang dalam bahasa Rusia menggunakan bentuk dasar kata kerja.

Kata kerja kelompok 1 (akhiran -ать/-ять):
Читать (membaca): я читаю, ты читаешь, он/она читает
Делать (melakukan): я делаю, ты делаешь, он/она делает

Kata kerja kelompok 2 (akhiran -ить):
Говорить (bicara): я говорю, ты говоришь, он говорит
Учить (belajar): я учу, ты учишь, он учит

Kata kerja tidak beraturan:
Хотеть (mau): я хочу, ты хочешь, он хочет
Мочь (bisa): я могу, ты можешь, он может
Есть (makan): я ем, ты ешь, он ест`,
      examples: [
        { indonesian: "Я читаю книгу", russian: "Saya membaca buku" },
        { indonesian: "Ты учишь русский?", russian: "Kamu belajar bahasa Rusia?" },
        { indonesian: "Она говорит по-русски", russian: "Dia bicara bahasa Rusia" },
        { indonesian: "Мы делаем уроки", russian: "Kami mengerjakan PR" },
        { indonesian: "Что ты делаешь?", russian: "Apa yang kamu lakukan?" },
      ],
      keyPoints: [
        "Dua kelompok konjugasi: -ать/-ять dan -ить",
        "Akhiran berubah: -ю/-у, -ешь/-ишь, -ет/-ит, -ем/-им, -ете/-ите, -ют/-ат",
      ],
    },
    exercises: [1001, 1002, 1003, 1004],
    vocabulary: [73, 74, 75, 76, 77, 78, 79, 80],
    estimatedTime: 30,
  },
  {
    id: 11,
    title: "Masa Depan",
    description: "Mengungkapkan kejadian di masa depan",
    objectives: ["Membentuk kalimat masa depan", "Menggunakan kata буду"],
    content: {
      theory: `Masa depan dalam bahasa Rusia ada 2 cara:

1. Буду + infintif (akan + kata kerja):
Я БУДУ + говорить — Saya akan bicara
Ты БУДЕШЬ + говорить — Kamu akan bicara
Он БУДЕТ + говорить — Dia akan bicara

2. Kata kerja sempurna (perfektif):
Я скажу — Saya akan mengatakan
Я сделаю — Saya akan melakukan
Я приду — Saya akan datang

Contoh:
- Я буду учить русский — Saya akan belajar bahasa Rusia
- Завтра я буду дома — Besok saya akan di rumah
- Я приду вечером — Saya akan datang sore`,
      examples: [
        { indonesian: "Я буду учиться", russian: "Saya akan belajar" },
        { indonesian: "Она будет работать", russian: "Dia akan bekerja" },
        { indonesian: "Мы будем ждать", russian: "Kami akan menunggu" },
        { indonesian: "Завтра я поеду в Москву", russian: "Besok saya akan pergi ke Moskow" },
      ],
      keyPoints: [
        "Буду + infinitif = akan melakukan (tidak sempurna)",
        "Kata kerja perfektif = tindakan akan selesai",
        "Буду berkonjugasi seperti kata kerja biasa",
      ],
    },
    exercises: [1101, 1102, 1103, 1104],
    vocabulary: [81, 82, 83, 84, 85, 86, 87, 88],
    estimatedTime: 30,
  },
  {
    id: 12,
    title: "Kata Modal",
    description: "Mengungkapkan kemungkinan, keharusan, dan keinginan",
    objectives: ["Menggunakan kata modal", "Menyusun kalimat modal"],
    content: {
      theory: `Kata modal dalam bahasa Rusia:

МОЖНО [MOZH-na] — boleh, bisa (umum)
НУЖНО [NOOZH-na] — perlu, harus (umum)
НАДО [NA-da] — harus (perlu)
НЕЛЬЗЯ [nyel-ZYA] — tidak boleh
МОЧЬ [moch'] — bisa (mampu)
ДОЛЖЕН [DOL-zhen] — harus (kewajiban)

Contoh:
- Можно войти? [MOZH-na voy-TEE] — Boleh masuk?
- Нельзя курить [nyel-ZYA koo-REET'] — Tidak boleh merokok
- Нужно учиться [NOOZH-na oo-CHEET-sya] — Harus belajar
- Я должен идти [ya DOL-zhen eet-TEE] — Saya harus pergi
- Я могу помочь [ya ma-GOO pa-MOCH'] — Saya bisa membantu`,
      examples: [
        { indonesian: "Можно войти?", russian: "Boleh masuk?" },
        { indonesian: "Нельзя курить", russian: "Tidak boleh merokok" },
        { indonesian: "Нужно рано встать", russian: "Harus bangun pagi" },
        { indonesian: "Я должен работать", russian: "Saya harus bekerja" },
      ],
      keyPoints: [
        "Можно, нужно, нельзя — tidak berubah bentuk",
        "Должен berubah gender: должен (m), должна (f), должно (n), должны (pl)",
        "Мочь berkonjugasi: я могу, ты можешь, он может",
      ],
    },
    exercises: [1201, 1202, 1203, 1204],
    vocabulary: [89, 90, 91, 92, 93, 94, 95, 96],
    estimatedTime: 30,
  },
  {
    id: 13,
    title: "Kata Sifat",
    description: "Kata sifat dalam bahasa Rusia dan penggunaannya",
    objectives: ["Mengenal kata sifat", "Menggunakan kata sifat dengan benar"],
    content: {
      theory: `Kata sifat dalam bahasa Rusia berakhiran:

-ЫЙ [yy] — maskulin: новый (baru), большой (besar)
-АЯ [a-ya] — feminin: новая, большая
-ОЕ [o-ye] — netral: новое, большое
-ЫЕ [ye] — jamak: новые, большие

Kata sifat umum:
Хороший [kha-RO-shiy] — baik, bagus
Плохой [pla-KHOY] — buruk
Большой [bal'-SHOY] — besar
Маленький [ma-LYEN'-kiy] — kecil
Новый [NO-viy] — baru
Старый [STA-riy] — lama
Красивый [kra-SEE-viy] — cantik
Умный [OOM-niy] — pintar

Contoh:
- Большой дом — Rumah besar
- Красивая девушка — Gadis cantik
- Новое платье — Gaun baru
- Хорошие друзья — Teman baik`,
      examples: [
        { indonesian: "Большой город", russian: "Kota besar" },
        { indonesian: "Красивая женщина", russian: "Wanita cantik" },
        { indonesian: "Маленькое окно", russian: "Jendela kecil" },
        { indonesian: "Новые друзья", russian: "Teman baru" },
      ],
      keyPoints: [
        "Kata sifat setuju dengan kata benda dalam gender dan jumlah",
        "Akhiran -ый/-ая/-ое/-ые tergantung gender",
        "Kata sifat letaknya SEBELUM kata benda",
      ],
    },
    exercises: [1301, 1302, 1303, 1304],
    vocabulary: [97, 98, 99, 100, 101, 102, 103, 104],
    estimatedTime: 30,
  },
  {
    id: 14,
    title: "Preposisi",
    description: "Preposisi tempat, arah, dan waktu",
    objectives: ["Menggunakan preposisi dengan benar", "Memahami kasus setelah preposisi"],
    content: {
      theory: `Preposisi dalam bahasa Rusia:

В [v] — di, ke (dalam)
НА [na] — di, ke (atas)
ИЗ [iz] — dari (dalam)
С [s] / СО [so] — dari (atas)
У [oo] — di (dekat)
О [a] / ОБ [ob] — tentang
ОТ [ot] — dari
ДО [do] — sampai
ПОСЛЕ [POS-lye] — setelah
ДЛЯ [dlya] — untuk

Contoh:
- Я в школе [ya f SHKO-lye] — Saya di sekolah
- Он идёт на работу [on ee-DYOT na ra-BO-too] — Dia pergi ke kerja
- Я из России [ya iz ras-SEE-ee] — Saya dari Rusia
- Книга на столе [KNEE-ga na sta-LE] — Buku di atas meja`,
      examples: [
        { indonesian: "Я в Москве", russian: "Saya di Moskow" },
        { indonesian: "Он на работе", russian: "Dia di tempat kerja" },
        { indonesian: "Мы из Индонезии", russian: "Kami dari Indonesia" },
        { indonesian: "Книга на столе", russian: "Buku di atas meja" },
        { indonesian: "Я иду в школу", russian: "Saya pergi ke sekolah" },
      ],
      keyPoints: [
        "Preposisi В dan НА diikuti kasus preposisional (lokasi) atau akusatif (tujuan)",
        "В = di dalam, НА = di atas/pada",
        "ИЗ = dari dalam, С = dari atas",
      ],
    },
    exercises: [1401, 1402, 1403, 1404],
    vocabulary: [105, 106, 107, 108, 109, 110, 111, 112],
    estimatedTime: 30,
  },
  {
    id: 15,
    title: "Kalimat Kompleks",
    description: "Menyusun kalimat kompleks dengan konjungsi",
    objectives: ["Menggunakan konjungsi", "Menyusun kalimat majemuk"],
    content: {
      theory: `Konjungsi dalam bahasa Rusia:

И [ee] — dan
ИЛИ [EE-lee] — atau
НО [no] — tetapi
А [a] — sedangkan (kontras)
ЧТО [shto] — bahwa
ЧТОБЫ [shto-BY] — agar, supaya
ПОТОМУ ЧТО [pa-ta-MOO shto] — karena
ЕСЛИ [YES-lee] — jika
КОГДА [kag-DA] — ketika

Contoh:
- Я знаю, что ты прав — Saya tahu bahwa kamu benar
- Я приду, если будет время — Saya datang jika ada waktu
- Я учу русский, потому что хочу работать в России — Saya belajar bahasa Rusia karena ingin bekerja di Rusia`,
      examples: [
        { indonesian: "Я знаю, что ты здесь", russian: "Saya tahu bahwa kamu di sini" },
        { indonesian: "Он не пришёл, потому что был занят", russian: "Dia tidak datang karena sibuk" },
        { indonesian: "Я хочу, чтобы ты помог", russian: "Saya ingin kamu membantu" },
        { indonesian: "Если будет дождь, я останусь дома", russian: "Jika hujan, saya tinggal di rumah" },
      ],
      keyPoints: [
        "ЧТО = 'bahwa' (fakta), ЧТОБЫ = 'agar' (tujuan)",
        "ПОТОМУ ЧТО = karena (alasan)",
        "Setelah ЧТОБЫ kata kerja dalam bentuk lampau",
      ],
    },
    exercises: [1501, 1502, 1503, 1504],
    vocabulary: [113, 114, 115, 116, 117, 118, 119, 120],
    estimatedTime: 30,
  },
  {
    id: 16,
    title: "Praktik Percakapan",
    description: "Percakapan sehari-hari dalam bahasa Rusia",
    objectives: ["Bercakap dalam situasi nyata", "Menguasai frasa umum"],
    content: {
      theory: `Frasa percakapan sehari-hari:

Sapaan dan basa-basi:
- Как дела? [kak dee-LA] — Apa kabar?
- Хорошо, а у вас? [kha-ra-SHO a oo VAS] — Baik, dan Anda?
- Что нового? [shto NO-va-va] — Apa yang baru?
- Ничего [nee-che-VO] — Biasa saja

Di restoran:
- Можно меню? [MOZH-na mye-NYU] — Boleh minta menu?
- Я буду кофе [ya BOO-doo KO-fye] — Saya akan pesan kopi
- Счёт, пожалуйста [SCHOT pa-ZHA-loo-sta] — Minta bill, tolong

Di toko:
- Сколько стоит? [SKOL'-ka STO-eet] — Berapa harganya?
- Это дорого [E-ta DO-ra-ga] — Ini mahal
- Спасибо, я просто смотрю [spa-SEE-ba ya PRO-sta smat-RYU] — Terima kasih, saya lihat-lihat`,
      examples: [
        { indonesian: "Здравствуйте! Меня зовут Анна", russian: "Halo! Nama saya Anna" },
        { indonesian: "Приятно познакомиться!", russian: "Senang berkenalan!" },
        { indonesian: "Я не понимаю, повторите пожалуйста", russian: "Saya tidak mengerti, ulangi tolong" },
        { indonesian: "Сколько стоит билет?", russian: "Berapa harga tiket?" },
        { indonesian: "Большое спасибо за помощь!", russian: "Terima kasih banyak atas bantuannya!" },
      ],
      keyPoints: [
        "Пожалуйста digunakan untuk tolong dan sama-sama",
        "Извините = maaf (permisi), Простите = maaf (permohonan maaf)",
        "Да/Нет — ya/tidak",
      ],
    },
    exercises: [1601, 1602, 1603, 1604],
    vocabulary: [121, 122, 123, 124, 125, 126, 127, 128],
    estimatedTime: 30,
  },
];
