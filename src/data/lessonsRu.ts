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
- Здравствуйте [zdra-stvooy-tye] — halo / salam formal (sopan)
- Привет [pri-vyet] — hai / salam informal (teman)
- Доброе утро [dob-ra-ye oot-ra] — selamat pagi (pagi hari)
- Добрый день [dob-ryy dyen'] — selamat siang (siang hari)
- Добрый вечер [dob-ryy vye-cher] — selamat sore / malam

Menanyakan kabar dan menjawab:
- Как дела? [kak dye-la] — Apa kabar? (букв. "bagaimana urusan?")
- Как [kak] — bagaimana
- Дела [dye-la] — urusan / kabar
- Хорошо [kha-ra-sho] — baik / bagus
- Спасибо [spa-si-ba] — terima kasih
- Хорошо, спасибо [kha-ra-sho spa-si-ba] — Baik, terima kasih

Saat berpisah:
- До свидания [da svi-da-ni-ya] — sampai jumpa (formal)
- Пока [pa-ka] — sampai jumpa / dah (informal)

Memperkenalkan diri:
- Меня зовут... [mye-nya zo-voot] — nama saya... (букв. "saya dipanggil...")
- Меня зовут Анна [mye-nya zo-voot an-na] — Nama saya Anna
- Анна [an-na] — Anna (nama orang)
- Очень приятно [o-chen' pri-yat-na] — senang berkenalan`,
      examples: [
        { indonesian: "Здравствуйте!", russian: "Halo! (salam formal)" },
        { indonesian: "Привет!", russian: "Hai! (informal)" },
        { indonesian: "Как дела?", russian: "Apa kabar?" },
        { indonesian: "Хорошо, спасибо", russian: "Baik, terima kasih" },
        { indonesian: "Меня зовут Анна", russian: "Nama saya Anna" },
      ],
      keyPoints: [
        "Здравствуйте — salam formal",
        "Привет — salam informal",
        "Как дела? — menanyakan kabar",
        "Хорошо, спасибо — baik, terima kasih",
        "Меня зовут... — memperkenalkan diri",
        "До свидания — sampai jumpa",
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
Kamu — Ты [ty] (informal), Вы [vy] (formal / jamak)
Dia (laki-laki) — Он [on]
Dia (perempuan) — Она [a-na]
Dia (benda) — Оно [a-no]
Kami/kita — Мы [my]
Kalian — Вы [vy]
Mereka — Они [a-ni]

Kosakata untuk contoh kalimat:
- Говорить [ga-va-reet'] — bicara
- Говорю [ga-va-ryoo] — saya bicara
- Я говорю по-русски [ya ga-va-ryoo pa roos-ski] — saya bicara bahasa Rusia
- По-русски [pa roos-ski] — dalam bahasa Rusia
- Хороший [kha-ro-shiy] — baik, bagus
- Друг [drook] — teman
- Ты хороший друг [ty kha-ro-shiy drook] — Kamu teman yang baik
- Красивая [kra-si-va-ya] — cantik
- Она красивая [a-na kra-si-va-ya] — Dia cantik
- Учиться [oo-chit'-sya] — belajar
- Мы учимся [my oo-chim-sya] — Kami belajar
- Прийти [pree-tyee] — datang
- Пришли [pree-shlee] — datang (lampau jamak)
- Они пришли [a-ni pree-shlee] — Mereka datang

Contoh sederhana:
- Я студент [ya stoo-dyent] — Saya mahasiswa
- Он дома [on do-ma] — Dia di rumah
- Она учитель [a-na oo-chi-tyel'] — Dia guru
- Мы вместе [my vmyes-tye] — Kita bersama`,
      examples: [
        { indonesian: "Я говорю по-русски", russian: "Saya bicara bahasa Rusia" },
        { indonesian: "Ты хороший друг", russian: "Kamu teman yang baik" },
        { indonesian: "Она красивая", russian: "Dia (perempuan) cantik" },
        { indonesian: "Мы учимся", russian: "Kami belajar" },
        { indonesian: "Они пришли", russian: "Mereka datang" },
      ],
      keyPoints: [
        "Я, ты, он, она, оно, мы, вы, они — kata ganti orang",
        "Вы — formal 'Anda' atau jamak 'kalian'",
        "Он / она / оно — tiga gender gramatikal",
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
    objectives: ["Mengenal kata kerja dasar", "Memahami konjugasi dasar", "Negasi 'не'"],
    content: {
      theory: `Kata kerja dasar dalam bahasa Rusia:

- Говорить [ga-va-reet'] — bicara
- Я говорю [ya ga-va-ryoo] — saya bicara
- Ты говоришь [ty ga-va-reesh] — kamu bicara
- Делать [dye-lat'] — melakukan, membuat
- Мы делаем [my dye-la-yem] — kami mengerjakan / melakukan
- Уроки [oo-ro-kee] — tugas / pelajaran (делать уроки = mengerjakan PR)
- Знать [znat'] — tahu
- Понимать [pa-ni-mat'] — mengerti
- Я понимаю [ya pa-ni-ma-yoo] — saya mengerti
- Не [nye] — tidak (partikel negasi di depan kata kerja: я не понимаю = saya tidak mengerti)
- Хотеть [kha-tyet'] — mau, ingin
- Она хочет [a-na kho-chyet] — dia mau / ingin
- Есть [yest'] — makan (она хочет есть = dia mau makan)

Kosakata keterangan:
- Хорошо [kha-ra-sho] — dengan baik (ты хорошо говоришь = kamu bicara dengan baik)
- По-русски [pa roos-ski] — bahasa Rusia`,
      examples: [
        { indonesian: "Я говорю по-русски", russian: "Saya bicara bahasa Rusia" },
        { indonesian: "Ты хорошо говоришь", russian: "Kamu bicara dengan baik" },
        { indonesian: "Мы делаем уроки", russian: "Kami mengerjakan pelajaran" },
        { indonesian: "Я не понимаю", russian: "Saya tidak mengerti" },
        { indonesian: "Она хочет есть", russian: "Dia mau makan" },
      ],
      keyPoints: [
        "Kata kerja dikonjugasikan sesuai subjek",
        "Partikel 'не' untuk menyatakan negasi / tidak",
        "Говорить, делать, знать, понимать, хотеть, есть — kata kerja dasar",
      ],
    },
    exercises: [],
    vocabulary: [17, 18, 19, 20, 21, 22, 23, 24],
    estimatedTime: 35,
  },
  {
    id: 4,
    title: "Kata Tanya",
    description: "Belajar membuat pertanyaan dalam bahasa Rusia",
    objectives: ["Mengenal kata tanya", "Menyusun kalimat tanya"],
    content: {
      theory: `Kata tanya dalam bahasa Rusia:

- Кто [kto] — siapa
- Что [shto] — apa
- Где [gdye] — di mana
- Куда [koo-da] — ke mana
- Откуда [at-koo-da] — dari mana
- Когда [kag-da] — kapan
- Почему [pa-che-moo] — kenapa, mengapa
- Как [kak] — bagaimana
- Сколько [skol'-ka] — berapa

Kata bantu dan kerja dalam pertanyaan:
- Это [e-ta] — ini (кто это? = siapa ini?)
- Делаешь [dye-la-yesh] — kamu lakukan (что ты делаешь? = apa yang kamu lakukan?)
- Живёшь [zhy-vyosh'] — kamu tinggal (где ты живёшь? = di mana kamu tinggal?)
- Придёт [pree-dyot] — dia akan datang (когда он придёт? = kapan dia datang?)
- Идёшь [ee-dyosh'] — kamu pergi / jalan (почему ты не идёшь? = kenapa kamu tidak pergi?)`,
      examples: [
        { indonesian: "Кто это?", russian: "Siapa ini?" },
        { indonesian: "Что ты делаешь?", russian: "Apa yang kamu lakukan?" },
        { indonesian: "Где ты живёшь?", russian: "Di mana kamu tinggal?" },
        { indonesian: "Когда он придёт?", russian: "Kapan dia datang?" },
        { indonesian: "Почему ты не идёшь?", russian: "Kenapa kamu tidak pergi?" },
      ],
      keyPoints: [
        "Kata tanya diletakkan di awal kalimat",
        "Кто, Что, Где, Куда, Когда, Почему — kata tanya utama",
      ],
    },
    exercises: [],
    vocabulary: [25, 26, 27, 28, 29, 30, 31],
    estimatedTime: 30,
  },
  {
    id: 5,
    title: "Negasi",
    description: "Menyatakan ketidaksetujuan dan negasi dalam bahasa Rusia",
    objectives: ["Menggunakan 'не'", "Menggunakan 'нет'", "Kalimat negatif"],
    content: {
      theory: `Cara menyatakan negasi dalam bahasa Rusia:

1. НЕ [nye] — diletakkan di depan kata kerja atau kata sifat (artinya 'tidak'):
   - Я не понимаю [ya nye pa-ni-ma-yoo] — Saya tidak mengerti
   - Это не мой дом [e-ta nye moy dom] — Ini bukan rumah saya
   - Я не хочу есть [ya nye kha-chyoo yest'] — Saya tidak mau makan
   - Он никогда не говорит [on nee-kag-da nye ga-va-reet] — Dia tidak pernah bicara

2. НЕТ [nyet] — berarti 'tidak' (sebagai jawaban) atau 'tidak ada':
   - Нет, спасибо [nyet spa-si-ba] — Tidak, terima kasih
   - У меня нет [oo mye-nya nyet] — Saya tidak punya

3. НИКОГДА [nee-kag-da] — tidak pernah:
   - Он никогда не говорит [on nee-kag-da nye ga-va-reet] — Dia tidak pernah bicara

Kosakata pendukung:
- Мой [moy] — milik saya
- Дом [dom] — rumah
- Говорит [ga-va-reet] — berbicara / bicara`,
      examples: [
        { indonesian: "Я не понимаю", russian: "Saya tidak mengerti" },
        { indonesian: "Нет, спасибо", russian: "Tidak, terima kasih" },
        { indonesian: "Это не мой дом", russian: "Ini bukan rumah saya" },
        { indonesian: "Я не хочу есть", russian: "Saya tidak mau makan" },
        { indonesian: "Он никогда не говорит", russian: "Dia tidak pernah bicara" },
      ],
      keyPoints: [
        "Не = tidak (di depan kata)",
        "Нет = tidak / tidak ada",
        "Никогда не... = tidak pernah (dobel negasi adalah standar dalam bahasa Rusia)",
      ],
    },
    exercises: [],
    vocabulary: [32, 33, 34, 35],
    estimatedTime: 30,
  },
  {
    id: 6,
    title: "Kepemilikan",
    description: "Menyatakan kepemilikan dalam bahasa Rusia",
    objectives: ["Mengenal kata ganti kepemilikan", "Gender kata kepemilikan"],
    content: {
      theory: `Kata ganti kepemilikan dalam bahasa Rusia disesuaikan dengan gender benda:

Milik saya:
- Мой [moy] — maskulin (мой дом = rumah saya, мой папа = ayah saya)
- Моя [ma-ya] — feminin (моя мама = ibu saya, моя книга = buku saya)
- Моё [ma-yo] — netral (моё окно = jendela saya)
- Мои [ma-ee] — jamak (мои друзья = teman-teman saya)

Milik kamu:
- Твой [tvoy] — maskulin
- Твоя [tva-ya] — feminin (твоя книга = buku kamu)
- Твоё [tva-yo] — netral
- Твои [tva-ee] — jamak

Milik dia / mereka (bentuk tetap):
- Его [ye-vo] — miliknya (laki-laki)
- Её [ye-yo] — miliknya (perempuan)
- Их [eekh] — milik mereka (их машина = mobil mereka)

Kosakata keluarga dan benda:
- Папа [pa-pa] — ayah
- Мама [ma-ma] — ibu
- Книга [kni-ga] — buku
- Машина [ma-shi-na] — mobil`,
      examples: [
        { indonesian: "Это мой папа", russian: "Ini ayah saya" },
        { indonesian: "Это моя мама", russian: "Ini ibu saya" },
        { indonesian: "Это твоя книга?", russian: "Ini buku kamu?" },
        { indonesian: "Это его дом", russian: "Ini rumahnya" },
        { indonesian: "Это их машина", russian: "Ini mobil mereka" },
      ],
      keyPoints: [
        "Мой / моя / моё / мои — disesuaikan gender benda",
        "Его / её / их — tidak berubah bentuk",
      ],
    },
    exercises: [],
    vocabulary: [36, 37, 38, 39, 40, 41, 42],
    estimatedTime: 35,
  },
  {
    id: 7,
    title: "Angka dan Berhitung",
    description: "Belajar angka dari 1 sampai 100",
    objectives: ["Menghitung 1-100", "Menggunakan angka dalam kalimat"],
    content: {
      theory: `Angka dalam bahasa Rusia:

0 — Ноль [nol']
1 — Один [a-deen]
2 — Два [dva]
3 — Три [tree]
4 — Четыre [che-ty-rye]
5 — Пять [pyat']
6 — Шесть [shest']
7 — Семь [syem']
8 — Восемь [vo-syem']
9 — Девять [dye-vyat']
10 — Десять [dye-syat']

Puluhan dan ratusan:
- 20 — Двадцать [dvad-tsat']
- 30 — Тридцать [treed-tsat']
- 50 — Пятьдесят [pyat'-dye-syat]
- 100 — Сто [sto]

Kosakata berhitung dan usia:
- Брат [brat] / брата [bra-ta] — saudara laki-laki (два брата = dua saudara laki-laki)
- Стоит [sto-eet] — berharga, harganya (сколько это стоит? = berapa harganya?, это стоит сто рублей)
- Рубль [roobl'] / рублей [roob-lyey] — rubel (mata uang Rusia)
- Мне [mnye] — kepada saya / umur saya (мне двадцать лет = umur saya 20 tahun)
- Лет [lyet] — tahun (untuk umur)`,
      examples: [
        { indonesian: "Один, два, три", russian: "Satu, dua, tiga" },
        { indonesian: "У меня два брата", russian: "Saya punya dua saudara laki-laki" },
        { indonesian: "Сколько это стоит?", russian: "Berapa harganya?" },
        { indonesian: "Это стоит сто рублей", russian: "Ini harganya seratus rubel" },
        { indonesian: "Мне двадцать лет", russian: "Umur saya dua puluh tahun" },
      ],
      keyPoints: [
        "Angka 1-10 adalah fondasi berhitung",
        "Belas dan puluhan dibentuk dari angka dasar",
        "Стоит — berharga / harganya",
      ],
    },
    exercises: [],
    vocabulary: [43, 44, 45, 46, 47, 48, 49, 50],
    estimatedTime: 40,
  },
  {
    id: 8,
    title: "Waktu",
    description: "Hari, bulan, dan cara menyebut jam",
    objectives: ["Hari dalam seminggu", "Menyebutkan jam", "Keterangan waktu"],
    content: {
      theory: `Hari dalam seminggu:
- Понедельник [pa-nye-dyel'-nik] — Senin
- Вторник [ftor-nik] — Selasa
- Среда [srye-da] — Rabu
- Четверг [cheet-vyerk] — Kamis
- Пятница [pyat-nee-tsa] — Jumat
- Суббота [soob-bo-ta] — Sabtu
- Воскресенье [vas-krye-syen'-ye] — Minggu

Keterangan waktu dan jam:
- Сегодня [sye-vod-nya] — hari ini
- Завтра [zaf-tra] — besok
- Вчера [fche-ra] — kemarin
- Сейчас [sye-chas] — sekarang
- Будет [boo-dyet] — akan / besok akan (завтра будет вторник = besok hari Selasa)
- Который [ka-to-ryy] — yang mana (который час? = jam berapa?)
- Час [chas] — jam
- Часа [cha-sa] — jam (три часа = jam tiga, sekarang jam tiga)
- Приду [pree-doo] — saya akan datang (я приду завтра = saya datang besok)`,
      examples: [
        { indonesian: "Сегодня понедельник", russian: "Hari ini hari Senin" },
        { indonesian: "Завтра будет вторник", russian: "Besok hari Selasa" },
        { indonesian: "Который час?", russian: "Jam berapa?" },
        { indonesian: "Сейчас три часа", russian: "Sekarang jam tiga" },
        { indonesian: "Я приду завтра", russian: "Saya datang besok" },
      ],
      keyPoints: [
        "Hari dalam seminggu dimulai dari Senin (Понедельник)",
        "Который час? — jam berapa?",
        "Сегодня = hari ini, Завтра = besok",
      ],
    },
    exercises: [],
    vocabulary: [51, 52, 53, 54, 55, 56, 57],
    estimatedTime: 35,
  },
  {
    id: 9,
    title: "Masa Lampau",
    description: "Membentuk kalimat dalam masa lampau",
    objectives: ["Bentuk lampau kata kerja", "Gender dalam masa lampau"],
    content: {
      theory: `Masa lampau dalam bahasa Rusia dibentuk berdasarkan gender subjek:

Akhiran bentuk lampau:
- Maskulin: -л (был, читал, делал)
- Feminin: -ла (была, читала, делала)
- Netral: -ло (было)
- Jamak: -ли (были, читали, делали)

Bentuk kata kerja dan kosakata tempat:
- Был [byl] — ada / berada (maskulin: я был в школе)
- Была [by-la] — ada / berada (feminin: она была дома)
- Были [by-lee] — ada / berada (jamak: мы были в кино)
- Делал [dye-lal] — melakukan / mengerjakan (что ты делал?, я это делал)
- Школа [shko-la] — sekolah
- В школе [f shko-lye] — di sekolah (я был в школе)
- Кино [kee-no] / в кино [f kee-no] — bioskop / di bioskop
- Дома [do-ma] — di rumah`,
      examples: [
        { indonesian: "Я был в школе", russian: "Saya (laki-laki) ada di sekolah" },
        { indonesian: "Она была дома", russian: "Dia (perempuan) ada di rumah" },
        { indonesian: "Мы были в кино", russian: "Kami ada di bioskop" },
        { indonesian: "Что ты делал?", russian: "Apa yang kamu lakukan?" },
        { indonesian: "Я это делал", russian: "Saya melakukan ini" },
      ],
      keyPoints: [
        "Akhiran masa lampau berubah sesuai gender subjek",
        "-л (laki-laki), -ла (perempuan), -ли (jamak)",
      ],
    },
    exercises: [],
    vocabulary: [58, 59, 60, 61],
    estimatedTime: 35,
  },
  {
    id: 10,
    title: "Waktu Sekarang",
    description: "Aktivitas yang sedang berlangsung",
    objectives: ["Konjugasi waktu sekarang", "Aktivitas sehari-hari"],
    content: {
      theory: `Waktu sekarang menyatakan aksi saat ini atau rutinitas:

Konjugasi kata kerja dan kosakata:
- Читать [chee-tat'] — membaca
- Я читаю [ya chee-ta-yoo] — saya membaca
- Книга [kni-ga] / книгу [kni-goo] — buku (я читаю книгу)
- Учить [oo-cheet'] — belajar / mempelajari
- Ты учишь [ty oo-chish] — kamu belajar (ты учишь русский?)
- Русский [roos-skiy] — bahasa Rusia
- Говорить [ga-va-reet'] — bicara (она говорит по-русски)
- Делать уроки [dye-lat' oo-ro-kee] — mengerjakan tugas/PR
- Мы делаем уроки [my dye-la-yem oo-ro-kee] — Kami mengerjakan PR
- Смотреть [sma-tryet'] / смотрят [smot-ryat] — menonton / melihat
- Фильм [feel'm] — film (они смотрят фильм = mereka menonton film)`,
      examples: [
        { indonesian: "Я читаю книгу", russian: "Saya membaca buku" },
        { indonesian: "Ты учишь русский?", russian: "Kamu belajar bahasa Rusia?" },
        { indonesian: "Она говорит по-русски", russian: "Dia bicara bahasa Rusia" },
        { indonesian: "Мы делаем уроки", russian: "Kami mengerjakan PR" },
        { indonesian: "Они смотрят фильм", russian: "Mereka menonton film" },
      ],
      keyPoints: [
        "Waktu sekarang menggunakan konjugasi kata kerja orang ke-1, 2, atau 3",
      ],
    },
    exercises: [],
    vocabulary: [62, 63, 64, 65],
    estimatedTime: 35,
  },
  {
    id: 11,
    title: "Masa Depan",
    description: "Membentuk kalimat dalam masa depan",
    objectives: ["Masa depan sederhana dan majemuk", "Kata bantu 'буду'"],
    content: {
      theory: `Masa depan dalam bahasa Rusia dapat dibentuk dengan kata bantu 'быть':

Bentuk 'буду' + kata kerja infinitif:
- Я буду [ya boo-doo] — saya akan
- Ты будешь [ty boo-dyesh] — kamu akan
- Он / она будет [boo-dyet] — dia akan
- Мы будем [my boo-dyem] — kami akan
- Вы будете [boo-dye-tye] — kalian / Anda akan
- Они будут [boo-doot] — mereka akan

Kosakata kegiatan dan arah:
- Учиться [oo-chit'-sya] — belajar (я буду учиться = saya akan belajar)
- Работать [ra-bo-tat'] — bekerja (она будет работать = dia akan bekerja)
- Ждать [zhdat'] — menunggu (мы будем ждать = kami akan menunggu)
- Поехать [pa-ye-khat'] / поеду [pa-ye-doo] — pergi berkendara (завтра я поеду = besok saya akan pergi)
- Москва [mask-va] / в Москву [v mask-voo] — Moskow / ke Moskow (в Москву = ke Moskow)`,
      examples: [
        { indonesian: "Я буду учиться", russian: "Saya akan belajar" },
        { indonesian: "Она будет работать", russian: "Dia akan bekerja" },
        { indonesian: "Мы будем ждать", russian: "Kami akan menunggu" },
        { indonesian: "Завтра я поеду в Москву", russian: "Besok saya akan pergi ke Moskow" },
        { indonesian: "Что ты будешь делать?", russian: "Apa yang akan kamu lakukan?" },
      ],
      keyPoints: [
        "Буду + infinitif = masa depan majemuk",
      ],
    },
    exercises: [],
    vocabulary: [66, 67, 68, 69],
    estimatedTime: 35,
  },
  {
    id: 12,
    title: "Kata Modal",
    description: "Bisa, harus, boleh, mau",
    objectives: ["Mengenal kata modal", "Menggunakan kata modal dalam kalimat"],
    content: {
      theory: `Kata modal dalam bahasa Rusia:

- Мочь [moch'] / могу [ma-goo] — bisa, dapat
- Помочь [pa-moch'] — membantu (я могу помочь = saya bisa membantu)
- Должен [dol-zhen] — harus (maskulin: должен, feminin: должна, jamak: должны)
- Я должен работать [ya dol-zhen ra-bo-tat'] — saya harus bekerja
- Нужно [noozh-na] / Надо [na-da] — perlu, harus
- Рано [ra-na] — pagi-pagi, lebih awal
- Встать [fstat'] — bangun (нужно рано встать = harus bangun pagi)
- Можно [mozh-na] — boleh, bisa (можно войти? = boleh masuk?)
- Войти [vay-tee] — masuk
- Хотеть [kha-tyet'] / хочу [kha-chyoo] — ingin, mau
- Хочешь [kho-chyesh] — kamu mau (ты хочешь пить? = kamu mau minum?)
- Пить [peet'] — minum`,
      examples: [
        { indonesian: "Я могу помочь", russian: "Saya bisa membantu" },
        { indonesian: "Можно войти?", russian: "Boleh masuk?" },
        { indonesian: "Нужно рано встать", russian: "Harus bangun pagi" },
        { indonesian: "Я должен работать", russian: "Saya harus bekerja" },
        { indonesian: "Ты хочешь пить?", russian: "Kamu mau minum?" },
      ],
      keyPoints: [
        "Могу = kemampuan / izin",
        "Должен / нужно = keharusan",
        "Можно = izin / kemungkinan",
      ],
    },
    exercises: [],
    vocabulary: [70, 71, 72, 73],
    estimatedTime: 35,
  },
  {
    id: 13,
    title: "Kata Sifat",
    description: "Mendeskripsikan benda dan orang",
    objectives: ["Gender kata sifat", "Posisi kata sifat", "Kata sifat umum"],
    content: {
      theory: `Kata sifat dalam bahasa Rusia mendahului kata benda dan berpasangan dengan gender benda:

Akhiran kata sifat:
- Maskulin: -ый / -ий (большой город = kota besar, новый дом = rumah baru)
- Feminin: -ая / -яя (красивая женщина = wanita cantik, хорошая погода = cuaca bagus)
- Netral: -ое / -ее (маленькое окно = jendela kecil, новое = baru)
- Jamak: -ые / -ие (хорошие друзья = teman-teman yang baik)

Kosakata benda dan sifat:
- Город [go-rat] — kota (большой город)
- Женщина [zhen-shchi-na] — wanita (красивая женщина)
- Окно [ak-no] — jendela (маленькое окно)
- Погода [pa-go-da] — cuaca
- Хорошая [kha-ro-sha-ya] — bagus, baik (хорошая погода = cuaca bagus)
- Большой [bal'-shoy] — besar
- Маленький / маленькое [ma-lyen'-ka-ye] — kecil
- Красивый / красивая [kra-si-va-ya] — cantik / indah
- Новый [no-vyy] — baru`,
      examples: [
        { indonesian: "Большой город", russian: "Kota besar" },
        { indonesian: "Красивая женщина", russian: "Wanita cantik" },
        { indonesian: "Маленькое окно", russian: "Jendela kecil" },
        { indonesian: "Новый дом", russian: "Rumah baru" },
        { indonesian: "Хорошая погода", russian: "Cuaca bagus" },
      ],
      keyPoints: [
        "Kata sifat diletakkan SEBELUM kata benda",
        "Akhiran kata sifat setuju dengan gender kata benda",
      ],
    },
    exercises: [],
    vocabulary: [74, 75, 76, 77, 78],
    estimatedTime: 35,
  },
  {
    id: 14,
    title: "Preposisi",
    description: "Tempat, arah, dan waktu",
    objectives: ["Preposisi tempat (в, на)", "Preposisi asal (из, от)", "Preposisi waktu"],
    content: {
      theory: `Preposisi umum dalam bahasa Rusia:

1. В [v / f] — di / ke (di dalam):
   - В Москве [v mask-vye] — di Moskow (я живу в Москве = saya tinggal di Moskow)
   - В школу [f shko-loo] — ke sekolah (я иду в школу = saya pergi ke sekolah)

2. НА [na] — di / ke (di atas permukaan / acara):
   - На столе [na sta-lye] — di atas meja (книга на столе)
   - На работе [na ra-bo-tye] — di tempat kerja / di kantor (он на работе = dia di tempat kerja)

3. ИЗ [eez] — dari:
   - Мы из Индонезии [my eez in-da-nye-zi-ee] — Kami dari Indonesia
   - Из дома [eez do-ma] — dari rumah

Kosakata tempat dan tindakan:
- Живу [zhy-voo] — saya tinggal / hidup (я живу в Москве)
- Стол [stol] / на столе [na sta-lye] — meja / di atas meja
- Работа [ra-bo-ta] — pekerjaan / tempat kerja
- Индонезия [in-da-nye-zi-ya] — Indonesia
- Иду [ee-doo] — saya berjalan / pergi`,
      examples: [
        { indonesian: "Книга на столе", russian: "Buku di atas meja" },
        { indonesian: "Он на работе", russian: "Dia di tempat kerja" },
        { indonesian: "Мы из Индонезии", russian: "Kami dari Indonesia" },
        { indonesian: "Я живу в Москве", russian: "Saya tinggal di Moskow" },
        { indonesian: "Я иду в школу", russian: "Saya pergi ke sekolah" },
      ],
      keyPoints: [
        "В = di/ke dalam, На = di/ke atas permukaan atau kegiatan",
        "Из = dari dalam tempat",
      ],
    },
    exercises: [],
    vocabulary: [79, 80, 81, 82],
    estimatedTime: 35,
  },
  {
    id: 15,
    title: "Kalimat Kompleks",
    description: "Menghubungkan klausa dan kalimat majemuk",
    objectives: ["Kata hubung (и, но, а, потому что)", "Kalimat sebab-akibat"],
    content: {
      theory: `Kata hubung dalam bahasa Rusia:

- И [ee] — dan
- А [a] — sedangkan / dan (kontras ringan)
- Но [no] — tetapi, namun (он умный, но ленивый)
- Что [shto] — bahwa (я знаю, что ты здесь = saya tahu bahwa kamu di sini)
- Потому что [pa-ta-moo shto] — karena (он не пришёл, потому что был занят = dia tidak datang karena sibuk)
- Чтобы [shto-by] — supaya, agar (я хочу, чтобы ты помог = saya ingin kamu membantu)
- Если [yes-lee] — jika, kalau (если будет дождь, я останусь дома = jika hujan, saya tinggal di rumah)

Kosakata tambahan:
- Умный [oom-nyy] — pintar, pandai
- Ленивый [lye-nee-vyy] — malas
- Здесь [zdyes'] — di sini
- Занят [za-nyat] — sibuk
- Помог [pa-mok] — membantu (lampau)
- Дождь [dozhd'] — hujan
- Останусь [as-ta-noos'] — saya akan tinggal / tetap berada`,
      examples: [
        { indonesian: "Я знаю, что ты здесь", russian: "Saya tahu bahwa kamu di sini" },
        { indonesian: "Он не пришёл, потому что был занят", russian: "Dia tidak datang karena sibuk" },
        { indonesian: "Я хочу, чтобы ты помог", russian: "Saya ingin kamu membantu" },
        { indonesian: "Если будет дождь, я останусь дома", russian: "Jika hujan, saya tinggal di rumah" },
        { indonesian: "Он умный, но ленивый", russian: "Dia pintar tapi malas" },
      ],
      keyPoints: [
        "Koma diletakkan sebelum kata hubung dalam bahasa Rusia",
        "Потому что = karena, Если = jika",
      ],
    },
    exercises: [],
    vocabulary: [83, 84, 85, 86],
    estimatedTime: 40,
  },
  {
    id: 16,
    title: "Praktik Percakapan",
    description: "Percakapan sehari-hari dan ungkapan penting",
    objectives: ["Ungkapan sopan santun", "Situasi sehari-hari"],
    content: {
      theory: `Ungkapan percakapan sehari-hari:

- Пожалуйста [pa-zhal-sta] — tolong / silakan / sama-sama
- Извините [eez-vee-nee-tye] — maaf / permisi
- Приятно познакомиться [pree-yat-na paz-na-ko-mit'-sya] — senang berkenalan
- Познакомиться [paz-na-ko-mit'-sya] — berkenalan
- Повторите пожалуйста [paf-ta-ree-tye pa-zhal-sta] — tolong ulangi
- Повторить [paf-ta-reet'] — mengulangi
- Где находится...? [gdye na-kho-deet-sya] — di mana letak...?
- Находится [na-kho-deet-sya] — berada / terletak
- Туалет [too-a-lyet] — toilet (где находится туалет?)
- Помощь [po-moshch'] — bantuan
- Большое спасибо за помощь [bal'-sho-ye spa-si-ba za po-moshch'] — terima kasih banyak atas bantuannya
- За помощь [za po-moshch'] — atas bantuannya
- Всего хорошего [fsye-vo kha-ro-sha-va] — semoga sukses / segala yang terbaik`,
      examples: [
        { indonesian: "Здравствуйте! Меня зовут Анна", russian: "Halo! Nama saya Anna" },
        { indonesian: "Приятно познакомиться!", russian: "Senang berkenalan!" },
        { indonesian: "Я не понимаю, повторите пожалуйста", russian: "Saya tidak mengerti, ulangi tolong" },
        { indonesian: "Где находится туалет?", russian: "Di mana letak toilet?" },
        { indonesian: "Большое спасибо за помощь!", russian: "Terima kasih banyak atas bantuannya!" },
      ],
      keyPoints: [
        "Пожалуйста — multi-fungsi: tolong, silakan, sama-sama",
        "Приятно познакомиться — diucapkan saat perkenalan",
      ],
    },
    exercises: [],
    vocabulary: [87, 88, 89, 90],
    estimatedTime: 40,
  },
];
