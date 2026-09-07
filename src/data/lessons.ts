import type { Lesson } from "../utils/types";

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Знакомство и базовые фразы",
    description: "Научитесь приветствовать людей и представляться",
    objectives: ["Приветствия", "Представление", "Прощания", "Вежливые слова"],
    content: {
      theory: `В индонезийском языке нет спряжения глаголов, множественное число часто образуется простым повторением слова, а времена выражаются с помощью частиц. Это делает язык очень логичным и доступным для изучения.

Основные приветствия по времени суток:
- Selamat pagi /səlamat paɡi/ - Доброе утро (до 11:00)
- Selamat siang /səlamat siaŋ/ - Добрый день (11:00-15:00)
- Selamat sore /səlamat sorə/ - Добрый вечер (до заката, 15:00-19:00)
- Selamat malam /səlamat malam/ - Добрый вечер / ночь (после 19:00)
- Selamat /səlamat/ - приветствие / благополучный, безопасный

Знакомство и представление (perkenalan & berkenalan):
- saya /saja/ - я (официально/нейтрально)
- Anda /anda/ - Вы (вежливо/официально)
- nama /nama/ - имя
- siapa /siapa/ - кто
- Nama saya... /nama saja/ - Меня зовут... (букв. "имя моё...")
- Siapa nama Anda? /siapa nama anda/ - Как вас зовут? (букв. "Кто ваше имя?")
- kenalan /kənalan/ - знакомиться, знакомый
- berkenalan /bərkənalan/ - знакомиться друг с другом
- senang /sənaŋ/ - рад, приятно (Senang bertemu dengan Anda - Приятно познакомиться с Вами)
- bertemu /bərtəmu/ - встречать, встречаться
- berkenan /bərkənan/ - соблаговолить, быть любезным

Происхождение и место проживания:
- dari /dari/ - из, от
- asal /asal/ - происхождение, родом (Dari mana asal Anda? - Откуда вы родом?)
- tinggal /tiŋɡal/ - жить, оставаться (Saya tinggal di sini - Я живу здесь)
- Rusia /rusia/ - Россия
- Indonesia /indonəsia/ - Индонезия

Вежливые слова и полезные выражения:
- Terima kasih /tərima kasih/ - Спасибо (букв. "примите любовь/благодарность")
- terima /tərima/ - принимать, получать
- Sama-sama /sama-sama/ - Пожалуйста / не за что / взаимно (букв. "одинаково")
- tolong /toloŋ/ - пожалуйста (при просьбе), помогите
- maaf /maaf/ - извините, простите
- silakan /silakan/ - пожалуйста (приглашение к действию: Silakan masuk)
- ya /ya/ - да
- tidak /tidaʔ/ - нет, не
- apa /apa/ - что (вопросительная частица)
- Apa kabar? /apa kabar/ - Как дела? (букв. "что за новости?")
- kabar /kabar/ - новости, дела
- baik /baik/ - хороший, хорошо, в порядке
- Kabar baik /kabar baik/ - Всё хорошо (букв. "новости хорошие")
- Sampai jumpa /sampaj dʒumpa/ - До свидания, до встречи (букв. "до встречи")
- Selamat jalan /səlamat dʒalan/ - Счастливого пути (букв. "благополучно идти/ехать")`,
      examples: [
        {
          indonesian: "Selamat pagi, nama saya Ivan",
          russian: "Доброе утро, меня зовут Иван",
        },
        {
          indonesian: "Siapa nama Anda?",
          russian: "Как вас зовут? (букв. 'Кто ваше имя?')",
        },
        { indonesian: "Senang bertemu dengan Anda", russian: "Приятно познакомиться с Вами" },
        { indonesian: "Saya dari Rusia, asal saya dari Moskow", russian: "Я из России, родом из Москвы" },
        { indonesian: "Saya tinggal di Indonesia", russian: "Я живу в Индонезии" },
        { indonesian: "Terima kasih banyak", russian: "Большое спасибо" },
        { indonesian: "Sama-sama, silakan duduk", russian: "Пожалуйста, присаживайтесь" },
        { indonesian: "Maaf, tolong bantu saya", russian: "Извините, пожалуйста, помогите мне" },
        { indonesian: "Sampai jumpa dan selamat jalan!", russian: "До свидания и счастливого пути!" },
      ],
      keyPoints: [
        "Приветствия по времени суток — начинаются с 'Selamat' (Selamat pagi — доброе утро, Selamat siang — добрый день)",
        "Формула представления — Nama saya... (Nama saya Ivan — меня зовут Иван)",
        "Вопрос о знакомстве — Siapa nama Anda? (букв. 'Кто ваше имя?')",
        "Происхождение через 'dari' и 'asal' — Saya dari Rusia (Я из России, Asal saya — родом из...)",
        "Благодарность и вежливый ответ — Terima kasih (Спасибо) / Sama-sama (Пожалуйста)",
      ],
    },
    exercises: [1, 2, 3, 4, 65, 66, 67, 68, 1001, 1002, 1003, 1004],
    vocabulary: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 22, 28, 29, 30,
      33, 34, 35, 36, 37, 38, 39, 40, 66, 67, 68,
    ],
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
      "Профессии и статус людей",
    ],
    content: {
      theory: `Индонезийские местоимения различаются по степени официальности:

Личные местоимения:
- saya /saja/ - я (официально/нейтрально)
- aku /aku/ - я (неформально, с друзьями)
- kamu /kamu/ - ты (неформально)
- engkau /əŋkau/ - ты (поэтично/архаично)
- Anda /anda/ - Вы (официально, с уважением)
- dia /dia/ - он / она (нейтрально)
- beliau /bəliau/ - он / она (уважительно, о старших или руководителях)
- kami /kami/ - мы (без собеседника, эксклюзивное)
- kita /kita/ - мы (включая собеседника, инклюзивное)
- mereka /mərəka/ - они

Указательные слова:
- ini /ini/ - это, этот, эта (близко к говорящему)
- itu /itu/ - то, тот, та (далеко от говорящего)

Семья и статус:
- ibu /ibu/ - мама, мать; госпожа (уважительное обращение к женщине)
- bapak /bapaʔ/ - папа, отец; господин (уважительное обращение к мужчине)
- teman /təman/ - друг, товарищ
- buku /buku/ - книга

Профессии и работа:
- guru /ɡuru/ - учитель, преподаватель
- dokter /dɔktər/ - врач, доктор
- perawat /pərawat/ - медсестра, медбрат
- mahasiswa /mahasiswa/ - студент (университета)
- polisi /polisi/ - полицейский
- supir /supir/ - водитель, шофёр
- koki /koki/ - повар
- petani /pətani/ - фермер, крестьянин
- nelayan /nəlajan/ - рыбак
- pedagang /pədaɡaŋ/ - торговец, продавец
- pengusaha /pəŋusaha/ - предприниматель, бизнесмен
- insinyur /insiɲur/ - инженер
- karyawan /karjawan/ - служащий, сотрудник компании
- pensiun /pənsiun/ - пенсия, на пенсии
- gaji /ɡadʒi/ - зарплата

Притяжательность выражается простым добавлением местоимения после существительного:
- buku saya /buku saja/ - моя книга (букв. "книга я")
- rumah dia /rumah dia/ - его/её дом
- teman saya /təman saja/ - мои друзья / мой друг`,
      examples: [
        { indonesian: "Saya mahasiswa", russian: "Я студент" },
        { indonesian: "Dia dokter, bukan perawat", russian: "Он врач, а не медбрат" },
        { indonesian: "Beliau guru saya", russian: "Он (уважительно) мой учитель" },
        { indonesian: "Ini buku teman saya", russian: "Это книга моего друга" },
        { indonesian: "Bapak saya seorang pengusaha", russian: "Мой отец — предприниматель" },
        { indonesian: "Ibu bekerja sebagai karyawan", russian: "Мама работает сотрудницей" },
        { indonesian: "Supir itu teman kami", russian: "Тот водитель — наш друг" },
        { indonesian: "Kakek sudah pensiun", russian: "Дедушка уже на пенсии" },
      ],
      keyPoints: [
        "Личное местоимение как подлежащее — глагол-связка 'быть' не нужен (Saya siswa — Я ученик, Dia guru — Он учитель)",
        "Притяжательность — местоимение ставится сразу после существительного (buku saya — моя книга, rumah dia — его дом)",
        "Два вида 'мы' — 'kita' включает собеседника, 'kami' исключает его (Kita belajar — Мы вместе учимся, Kami dari Indonesia — Мы из Индонезии)",
        "Указательные местоимения ini (этот/это) и itu (тот/то) — ставятся в начале или после слова (Ini buku saya — Это моя книга)",
      ],
    },
    exercises: [5, 6, 7, 8, 69, 70, 71, 72, 1005, 1006, 1007, 1008],
    vocabulary: [
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 62, 65, 341, 342, 361,
      362, 363, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
    ],
    estimatedTime: 40,
  },
  {
    id: 3,
    title: "Простые предложения",
    description: "Строим простые предложения с глаголами",
    objectives: ["Порядок слов SVO", "Основные глаголы действия", "Отрицание 'tidak'", "Базовые существительные"],
    content: {
      theory: `Порядок слов в индонезийском языке: Подлежащее + Сказуемое + Дополнение (SVO - как в русском).

Глаголы действия (глаголы не спрягаются по лицам и числам):
- makan /makan/ - есть, кушать
- minum /minum/ - пить
- pergi /pərɡi/ - идти, уходить, ехать
- datang /dataŋ/ - приходить, приезжать
- lihat /lihat/ - видеть, смотреть
- tahu /tahu/ - знать
- mengerti /məŋərti/ - понимать
- bicara /bitʃara/ - говорить, разговаривать
- dengar /dəŋar/ - слушать, слышать
- membaca /məmbatʃa/ - читать, прочитать
- menulis /mənulis/ - писать, написать
- belajar /bəladʒar/ - учиться, изучать
- ajar /adʒar/ - учить, обучать
- pikir /pikir/ - думать
- ingat /iŋat/ - помнить, вспоминать
- lupa /lupa/ - забывать
- coba /tʃoba/ - пробовать, пытаться

Глаголы перемещения и физических действий:
- jalan-jalan /dʒalan-dʒalan/ - гулять, прогуливаться
- lari /lari/, berlari /bərlari/ - бежать, бегать
- berenang /bərənaŋ/ - плавать
- duduk /duduk/ - сидеть, садиться
- berdiri /bərdiri/ - стоять, вставать
- masuk /masuk/ - входить, заходить
- keluar /kəluar/ - выходить, выйти
- naik /naik/ - подниматься, садиться в транспорт
- turun /turun/ - спускаться, выходить из транспорта
- terbang /tərbaŋ/ - летать, лететь
- main /main/ - играть
- nyanyi /ɲaɲi/ - петь

Глаголы манипуляции с предметами и быта:
- ambil /ambil/ - брать, взять
- bawa /bawa/ - нести, приносить
- taruh /taruh/ - класть, ставить
- pegang /pəɡaŋ/ - держать, трогать
- lempar /lèmpar/ - бросать, кидать
- pukul /pukul/ - бить, ударять
- buka /buka/ - открывать
- tutup /tutup/ - закрывать
- beri /bəri/ - давать, дать
- minta /minta/ - просить, попросить
- cari /tʃari/ - искать, найти
- tunggu /tuŋɡu/ - ждать, подождать
- kirim /kirim/ - посылать, отправлять
- simpan /simpan/ - хранить, сохранять
- buat /buat/ - делать, создавать
- beli /bəli/ - покупать
- jual /dʒual/ - продавать
- mulai /mulai/ - начинать, начать
- selesai /sələsai/ - заканчивать, завершать
- habis /habis/ - кончаться, закончиться

Полезные служебные слова и существительные:
- tidak /tidaʔ/ - не, нет (отрицание перед глаголом/прилагательным)
- ada /ada/ - есть, имеется, существовать
- saya mau /saja mau/ - я хочу, я собираюсь
- sendiri /səndiri/ - сам, самостоятельно
- nasi /nasi/ - варёный рис
- air /air/ - вода
- ikan /ikan/ - рыба`,
      examples: [
        { indonesian: "Saya makan nasi dan minum air", russian: "Я ем рис и пью воду" },
        { indonesian: "Dia membaca buku di rumah", russian: "Он читает книгу дома" },
        { indonesian: "Kami belajar bahasa Indonesia", russian: "Мы учим индонезийский язык" },
        { indonesian: "Saya tidak tahu, coba tanya dia", russian: "Я не знаю, попробуй спросить его" },
        { indonesian: "Mereka jalan-jalan sore", russian: "Они гуляют вечером" },
        { indonesian: "Tolong buka pintu itu", russian: "Пожалуйста, открой ту дверь" },
        { indonesian: "Saya mau beli ikan di pasar", russian: "Я хочу купить рыбу на рынке" },
        { indonesian: "Jangan lupa bawa air minum", russian: "Не забудь взять питьевую воду" },
      ],
      keyPoints: [
        "Порядок слов SVO — Подлежащее + Сказуемое + Дополнение (Saya makan nasi — Я ем рис)",
        "Глаголы не спрягаются — форма слова не меняется по лицам и числам (Saya makan — я ем, Mereka datang — они приходят)",
        "Отрицание с 'tidak' — ставится перед глаголом или свойством (Saya tidak pergi — Я не иду, Tidak besar — Не большой)",
        "Время действия через контекст и наречия — форма глагола не требует окончаний (Mereka datang besok — Они придут завтра)",
      ],
    },
    exercises: [9, 10, 11, 12, 1009, 1010, 1011, 1012],
    vocabulary: [
      9, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
      59, 60, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 144, 201,
      202, 424, 443,
    ],
    estimatedTime: 45,
  },
  {
    id: 4,
    title: "Вопросительные слова",
    description: "Учимся задавать вопросы",
    objectives: [
      "Вопросительные слова",
      "Построение вопросов с частицей -kah",
      "Вопросы о цене, местоположении и качестве",
    ],
    content: {
      theory: `Вопросительные слова в индонезийском языке:
- apa /apa/ - что, какой
- apakah /apakah/ - ли, вопросительная частица в начале общего вопроса
- siapa /siapa/ - кто
- siapa-siapa /siapa-siapa/ - кто вообще, кто-либо (во множественном числе)
- di mana /di mana/ - где
- ke mana /kə mana/ - куда
- dari mana /dari mana/ - откуда
- manakah /manakah/ - который же (вопросительное усиление)
- yang mana /jaŋ mana/ - который, какой именно из нескольких
- kapan /kapan/ - когда
- kapan-kapan /kapan-kapan/ - когда-нибудь, в другой раз
- bilakah /bilakah/ - когда же (формальный / литературный вариант)
- mengapa /məŋapa/ - почему (официально / литературно)
- kenapa /kənapa/ - почему, зачем (разговорно)
- bagaimana /baɡaimana/ - как, каким образом
- bagaimanakah /baɡaimanaka/ - как же именно (формально)
- bagaimana cara /baɡaimana tʃara/ - как (каким способом/методом)
- berapa /bərapa/ - сколько
- seberapa /səbərapa/ - насколько (в какой степени)

Слова для описания выбора, видов и неопределённости:
- asal /asal/ - происхождение, родом (Dari mana asal Anda? - Откуда вы родом?)
- macam /matʃam/ - вид, тип, сорт (Macam apa? - Какого рода?)
- jenis /dʒənis/ - тип, сорт, разновидность (Jenis ini - Этот тип)
- begitu /bəɡitu/ - так, таким образом
- ataukah /ataukah/ - или же (в вопросах с выбором)
- entah /əntah/ - неизвестно, не знаю (Entah di mana - Неизвестно где)

Построение вопросов:
Вопросительное слово обычно ставится в начале предложения либо на месте члена предложения, к которому задаётся вопрос:
- Apa ini? /apa ini/ - Что это?
- Siapa nama kamu? /siapa nama kamu/ - Как тебя зовут?
- Di mana stasiun? /di mana stasiun/ - Где вокзал?
- Berapa harganya? /bərapa harɡaɲa/ - Сколько это стоит?`,
      examples: [
        { indonesian: "Apa ini?", russian: "Что это?" },
        { indonesian: "Apakah Anda mengerti?", russian: "Вы понимаете?" },
        { indonesian: "Siapa guru bahasa Indonesia Anda?", russian: "Кто ваш учитель индонезийского языка?" },
        { indonesian: "Di mana Anda tinggal?", russian: "Где вы живёте?" },
        { indonesian: "Ke mana kamu mau pergi?", russian: "Куда ты хочешь пойти?" },
        { indonesian: "Dari mana asal Anda?", russian: "Откуда вы родом?" },
        { indonesian: "Buku yang mana yang Anda beli?", russian: "Какую именно книгу вы купили?" },
        { indonesian: "Berapa harganya?", russian: "Сколько это стоит?" },
      ],
      keyPoints: [
        "Прямой порядок в вопросах — вопросительное слово ставится в начале или на место нужного члена предложения (Apa ini? — Что это?)",
        "Вопросы о людях и вещах — 'siapa' (кто) и 'apa' (что) (Siapa nama kamu? — Как тебя зовут?)",
        "Вопросы о месте — предлог + 'mana' (Di mana rumah kamu? — Где твой дом? Ke mana kamu pergi? — Куда ты идёшь?)",
        "Вопросы о количестве и цене — 'berapa' (Berapa harganya? — Сколько это стоит?)",
      ],
    },
    exercises: [13, 14, 15, 16, 1013, 1014, 1015, 1016],
    vocabulary: [
      10, 11, 30, 31, 32, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
      111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    ],
    estimatedTime: 40,
  },
  {
    id: 5,
    title: "Отрицания",
    description: "Изучаем различные способы отрицания",
    objectives: ["tidak vs bukan", "belum", "jangan", "Полезная лексика"],
    content: {
      theory: `В индонезийском языке используются 4 основных вида отрицания:

1. TIDAK /tidaʔ/ (кратко tak /tak/) - отрицание действий (глаголов) и качеств (прилагательных):
   - Saya tidak tahu /saja tidaʔ tahu/ - Я не знаю
   - Dia tidak mengerti /dia tidaʔ məŋərti/ - Он не понимает
   - Rumah ini tidak besar /rumah ini tidaʔ bəsar/ - Этот дом не большой
   - tak mungkin /tak muŋkin/ - невозможно

2. BUKAN /bukan/ - отрицание сущности и существительных ("не является"):
   - Ini bukan masalah /ini bukan masalah/ - Это не проблема
   - Dia bukan orang Indonesia /dia bukan oraŋ indonəsia/ - Он не индонезиец
   - bukan saja ... melainkan ... /bukan sadʒa ... məlainkan/ - не только ..., но и (а напротив) ...

3. BELUM /bəlum/ - ещё не (действие не свершилось, но ожидается или возможно):
   - Saya belum siap /saja bəlum siap/ - Я ещё не готов
   - Saya belum makan /saja bəlum makan/ - Я ещё не ел
   - belum pernah /bəlum pərnah/ - ещё никогда

4. JANGAN /dʒaŋan/ - запрет и категорическое "не делай":
   - Jangan lupa! /dʒaŋan lupa/ - Не забудь!
   - Jangan takut! /dʒaŋan takut/ - Не бойся!
   - Jangan marah! /dʒaŋan marah/ - Не сердись!

Отрицание наличия и устойчивые сочетания:
- tidak ada /tidaʔ ada/ - нет, не имеется, отсутствует
- tiada /tiada/ - нет, не существует (поэтично / возвышенно)
- tanpa /tanpa/ - без (tanpa gula - без сахара)
- kecuali /kətʃuali/ - кроме, за исключением
- hampir /hampir/ - почти (hampir tidak - почти не)
- tetap /tətap/ - всё ещё, оставаться прежним
- jadi /dʒadi/ - поэтому, так что; становиться
- bisa jadi /bisa dʒadi/ - может быть, возможно
- sama /sama/ - с, вместе; одинаковый

Глаголы и эмоции урока:
- pegang /pəɡaŋ/ - держать, трогать
- lempar /ləmpar/ - бросать, кидать
- pukul /pukul/ - бить, ударять
- lupa /lupa/ - забывать
- sedih /sədih/ - грустный, печальный
- marah /marah/ - сердитый, злой
- takut /takut/ - бояться, страшный`,
      examples: [
        { indonesian: "Saya tidak mengerti bahasa ini", russian: "Я не понимаю этот язык" },
        { indonesian: "Ini bukan buku saya", russian: "Это не моя книга" },
        { indonesian: "Dia belum pernah makan di sini", russian: "Он ещё никогда не ел здесь" },
        { indonesian: "Jangan marah dan jangan takut", russian: "Не сердись и не бойся" },
        { indonesian: "Di sini tidak ada orang", russian: "Здесь никого нет (нет людей)" },
        { indonesian: "Kopi ini tanpa gula", russian: "Этот кофе без сахара" },
        { indonesian: "Semua datang kecuali dia", russian: "Все пришли, кроме него" },
        { indonesian: "Bisa jadi dia lupa", russian: "Возможно, он забыл" },
      ],
      keyPoints: [
        "tidak (tak) — отрицание действий и качеств (Saya tidak mengerti — Я не понимаю, tidak sedih — не грустный)",
        "bukan — отрицание существительных и сущности (Ini bukan masalah — Это не проблема, Dia bukan guru — Он не учитель)",
        "belum — ещё не произошло, но ожидается (Saya belum siap — Я ещё не готов, belum pernah — ещё ни разу)",
        "jangan — запретительное повеление (Jangan lupa! — Не забудь!, Jangan takut! — Не бойся!)",
        "tidak ada / tanpa / kecuali — отсутствие и исключение (tidak ada uang — нет денег, tanpa masalah — без проблем, semua kecuali saya — все кроме меня)",
      ],
    },
    exercises: [17, 18, 19, 20, 1017, 1018, 1019, 1020],
    vocabulary: [
      9, 46, 47, 48, 57, 71, 75, 77, 121, 122, 123, 124, 127, 128, 129, 130,
      131, 132, 133, 134, 135, 136, 139, 322, 323, 327,
    ],
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
      theory: `Притяжательность и принадлежность в индонезийском языке:

1. Существительное + местоимение (порядок "предмет + владелец"):
   - buku saya /buku saja/ - моя книга
   - rumah dia /rumah dia/ - его/её дом
   - mobil kami /mobil kami/ - наша машина
   - rumah tangga /rumah taŋɡa/ - домашнее хозяйство, семья

2. Суффикс -nya /ɲa/ (универсальный показатель "его / её / их"):
   - mobilnya /mobilɲa/ - его/её машина
   - bukunya /bukuɲa/ - его/её книга
   - temannya /təmanɲa/ - его/её друг
   - kucingnya /kutʃiŋɲa/ - его/её кошка

3. Глагол punya /puɲa/ и существительное milik /milik/:
   - Saya punya kucing baru /saja puɲa kutʃiŋ baru/ - У меня есть новая кошка
   - Ini punya saya /ini puɲa saja/ - Это моё (принадлежит мне)
   - Buku ini milik saya /buku ini milik saja/ - Эта книга — моя собственность
   - sendiri /səndiri/ - сам, собственный (rumah sendiri - собственный дом)

4. Члены семьи (keluarga /kəluarɡa/):
   - bapak /bapak/, ayah /ayah/ - отец, папа; господин
   - ibu /ibu/ - мать, мама; госпожа
   - kakek /kakək/ - дедушка
   - nenek /nenek/ - бабушка
   - suami /suami/ - муж
   - istri /istri/ - жена
   - anak /anak/ - ребёнок; anak laki-laki - сын; anak perempuan - дочь
   - kakak /kakak/ - старший брат/сестра; kakak laki-laki - старший брат; kakak perempuan - старшая сестра
   - adik /adik/ - младший брат/сестра
   - saudara /saudara/ - брат/сестра, родственник
   - paman /paman/ - дядя
   - bibi /bibi/ - тётя
   - keponakan /kəponakan/ - племянник/племянница
   - sepupu /səpupu/ - двоюродный брат/сестра

5. Служебные слова отношений, предлоги и квантификаторы:
   - untuk /untuk/, bagi /baɡi/ - для, ради
   - dengan /dəŋan/ - с, вместе с
   - bersama /bərsama/ - вместе, совместно
   - oleh /oləh/ - от, кем-то (деятель)
   - tentang /təntaŋ/ - о, об, относительно
   - antara /antara/ - между, среди
   - terhadap /tərhadap/ - к, по отношению к
   - seperti /səpərti/ - как, подобно
   - melalui /məlalui/ - через, посредством
   - secara /sətʃara/ - способом, в виде
   - tiap /tiap/, setiap /sətiap/ - каждый, любой
   - masing-masing /masiŋ-masiŋ/ - каждый по отдельности
   - semua /səmua/, seluruh /səluruh/ - все, всё, целый
   - tugas /tuɡas/ - задание, задача`,
      examples: [
        { indonesian: "Ini rumah keluarga kami", russian: "Это дом нашей семьи" },
        { indonesian: "Saya punya kucing baru", russian: "У меня новая кошка" },
        { indonesian: "Mobil ini milik bapak saya", russian: "Эта машина принадлежит моему отцу" },
        { indonesian: "Kakak laki-laki saya tinggal sendiri", russian: "Мой старший брат живёт отдельно (сам)" },
        { indonesian: "Buku ini untuk anak perempuan dia", russian: "Эта книга для его дочери" },
        { indonesian: "Kita belajar bersama teman", russian: "Мы учимся вместе с другом" },
        { indonesian: "Semua anggota keluarga punya tugas masing-masing", russian: "У всех членов семьи есть свои отдельные задачи" },
        { indonesian: "Kakek dan nenek membaca buku tentang sejarah", russian: "Дедушка и бабушка читают книгу об истории" },
      ],
      keyPoints: [
        "Существительное + обладатель — базовый порядок притяжания (buku saya — моя книга, rumah bapak — дом отца)",
        "Суффикс -nya — заменяет 'его / её / их' (Mobilnya baru — Его машина новая, temannya baik — её друг хороший)",
        "punya и milik — владение и принадлежность (Saya punya kucing — У меня есть кошка, Rumah ini milik saya — Этот дом мой)",
        "Термины родства семьи — bapak (папа), ibu (мама), kakak (старший), adik (младший), anak (ребёнок), kakek/nenek (дедушка/бабушка)",
        "Определители и предлоги — untuk (для), dengan (с), bersama (вместе), setiap/semua (каждый/все)",
      ],
    },
    exercises: [21, 22, 23, 24, 1021, 1022, 1023, 1024],
    vocabulary: [
      24, 25, 61, 62, 63, 65, 70, 141, 142, 143, 144, 145, 146, 147, 148, 149,
      150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 341, 342, 343,
      344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357,
      358, 359, 360, 365, 441,
    ],
    estimatedTime: 45,
  },
  {
    id: 7,
    title: "Числа и счёт",
    description: "Учимся считать и использовать числа",
    objectives: ["Числа 0-1000", "Счётные слова (классификаторы)", "Количественные конструкции"],
    content: {
      theory: `Числа, счёт, меры и порядковые числительные в индонезийском языке:

1. Базовые числа 0–10:
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

2. Числа от 11 до миллионов:
   - sebelas /səbəlas/ - 11, dua belas /dua bəlas/ - 12 (суффикс -belas от 11 до 19)
   - dua puluh /dua puluh/ - 20 (суффикс -puluh для десятков)
   - seratus /səratus/ - 100, dua ratus /dua ratus/ - 200 (разряд -ratus)
   - seribu /səribu/ - 1 000 (разряд -ribu)
   - sejuta /sədʒuta/ - 1 000 000 (разряд -juta)

3. Порядковые числительные (префикс ke-):
   - pertama /pərtama/ - первый
   - kedua /kədua/ - второй
   - ketiga /kətiɡa/ - третий
   - terakhir /təraxir/ - последний

4. Дроби, кратность и математические понятия:
   - setengah /sətəŋah/, separuh /səparuh/ - половина
   - sepertiga /səpərtiɡa/ - одна треть
   - seperempat /səpərəmpat/ - одна четверть
   - kali /kali/ - раз; умножить на (tiga kali - три раза)
   - sekali /səkali/ - один раз; очень (усиление)
   - lipat /lipat/ - складывать; раз (кратность: dua kali lipat - в два раза больше)
   - ganda /ɡanda/ - двойной, вдвойне
   - hitung /hituŋ/ - считать, подсчитывать
   - nomor /nomor/ - номер
   - angka /aŋka/ - цифра, число
   - jumlah /dʒumlah/ - количество, сумма
   - total /total/ - итог, всего

5. Количественные наречия, меры и деньги:
   - banyak /baɲak/ - много
   - sedikit /sədikit/ - мало, немного
   - beberapa /bəbərapa/ - несколько
   - lebih /ləbih/ - больше, более
   - kurang /kuraŋ/ - меньше, менее, не хватает
   - kilo /kilo/ - килограмм
   - meter /meter/ - метр
   - liter /litər/ - литр
   - derajat /dəradʒat/ - градус
   - uang /uaŋ/ - деньги
   - orang /oraŋ/ - человек (классификатор людей: tiga orang)
   - berapa /bərapa/ - сколько`,
      examples: [
        { indonesian: "Saya punya dua ratus ribu rupiah", russian: "У меня двести тысяч рупий" },
        { indonesian: "Ini buku pertama saya", russian: "Это моя первая книга" },
        { indonesian: "Dia minum satu setengah liter air", russian: "Он выпил полтора (один с половиной) литра воды" },
        { indonesian: "Ada tiga orang di dalam mobil", russian: "В машине три человека" },
        { indonesian: "Berapa total jumlah uang ini?", russian: "Какова общая сумма этих денег?" },
        { indonesian: "Saya mau beli dua kilo ikan", russian: "Я хочу купить два килограмма рыбы" },
        { indonesian: "Suhu hari ini tiga puluh derajat", russian: "Температура сегодня тридцать градусов" },
        { indonesian: "Uang saya kurang sedikit", russian: "Моих денег немного не хватает" },
      ],
      keyPoints: [
        "Числа от единиц до миллионов строятся регулярно: belas (11-19), puluh (десятки), ratus (сотни), ribu (тысячи), juta (миллионы)",
        "Порядковые числительные образуются с префиксом ke- (kedua — второй, ketiga — третий; исключение: pertama — первый)",
        "Дроби образуются с префиксом seper- (setengah — 1/2, sepertiga — 1/3, seperempat — 1/4)",
        "Счёт и измерения — число + единица измерения (dua kilo — 2 кг, tiga orang — 3 человека, empat meter — 4 метра)",
        "Слова количества — banyak (много), sedikit (мало), beberapa (несколько), lebih (больше), kurang (меньше/не хватает)",
      ],
    },
    exercises: [25, 26, 27, 28, 1025, 1026, 1027, 1028],
    vocabulary: [
      64, 105, 140, 141, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
      171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
      185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198,
      199, 200, 240, 498,
    ],
    estimatedTime: 45,
  },
  {
    id: 8,
    title: "Время и даты",
    description: "Говорим о времени, днях и датах",
    objectives: ["Дни недели", "Время суток", "Часы и выражение времени", "Действия по времени"],
    content: {
      theory: `Время, дни недели, календарь и распорядок дня:

1. Дни недели (hari /hari/):
   - hari Senin /hari sənin/ - понедельник
   - hari Selasa /hari səlasa/ - вторник
   - hari Rabu /hari rabu/ - среда
   - hari Kamis /hari kamis/ - четверг
   - hari Jumat /hari dʒumat/ - пятница
   - hari Sabtu /hari sabtu/ - суббота
   - hari Minggu /hari miŋɡu/ - воскресенье (minggu также означает "неделя")

2. Календарные периоды и природа:
   - hari /hari/ - день
   - minggu /miŋɡu/ - неделя
   - bulan /bulan/ - месяц; луна
   - tahun /tahun/ - год
   - matahari /matahari/ - солнце (букв. "глаз дня")
   - libur /libur/, cuti /tʃuti/ - выходной, отпуск
   - awal /awal/ - начало, ранний (awal bulan - начало месяца)
   - akhir /axir/ - конец, последний (akhir tahun - конец года)

3. Время суток (bagian hari):
   - pagi /paɡi/ - утро (05:00 - 11:00)
   - siang /siaŋ/ - день (11:00 - 15:00)
   - sore /sorə/ - вечер до заката (15:00 - 18:30)
   - malam /malam/ - ночь, поздний вечер (после 18:30)

4. Указание точного времени (jam /dʒam/):
   - jam /dʒam/ - час; часы (прибор)
   - Jam berapa? /dʒam bərapa/ - Который час?
   - jam tiga /dʒam tiɡa/ - три часа
   - jam setengah delapan /dʒam sətəŋah dəlapan/ - половина восьмого (07:30)
   - jam sepuluh lewat seperempat /dʒam səpuluh lewat səpərəmpat/ - 10:15 (четверть одиннадцатого)

5. Временные ориентиры и наречия:
   - sekarang /səkaraŋ/ - сейчас, теперь
   - kemarin /kəmarin/ - вчера
   - besok /besok/ - завтра
   - nanti /nanti/ - потом, позже
   - dulu /dulu/ - раньше, сначала
   - lalu /lalu/ - потом, затем; прошлый (minggu lalu - прошлая неделя)
   - tiap /tiap/, setiap /sətiap/ - каждый (setiap hari - каждый день)
   - kali /kali/ - раз (tiga kali sehari - три раза в день)

6. Распорядок дня и приёмы пищи:
   - bangun /baŋun/ - просыпаться, вставать ото сна
   - sarapan /sarapan/ - завтрак, завтракать
   - makan siang /makan siaŋ/ - обед, обедать
   - makan malam /makan malam/ - ужин, ужинать`,
      examples: [
        { indonesian: "Sekarang jam delapan pagi, waktu sarapan", russian: "Сейчас восемь утра, время завтракать" },
        { indonesian: "Kemarin hari Minggu, kami libur", russian: "Вчера было воскресенье, у нас был выходной" },
        { indonesian: "Besok saya bangun pagi jam enam", russian: "Завтра я проснусь рано утром в шесть часов" },
        { indonesian: "Setiap hari kami makan siang jam satu", russian: "Каждый день мы обедаем в час дня" },
        { indonesian: "Nanti malam kita makan malam bersama", russian: "Позже вечером мы поужинаем вместе" },
        { indonesian: "Dulu dia tinggal di sini, lalu pindah", russian: "Раньше он жил здесь, затем переехал" },
        { indonesian: "Pada awal bulan depan saya cuti", russian: "В начале следующего месяца я в отпуске" },
        { indonesian: "Bulan dan matahari sangat indah", russian: "Луна и солнце очень красивы" },
      ],
      keyPoints: [
        "Названия дней недели употребляются со словом 'hari' или самостоятельно (hari Senin — понедельник, hari Minggu — воскресенье)",
        "Время суток уточняет час: jam delapan pagi (8 утра), jam satu siang (13:00), jam tujuh malam (19:00)",
        "Обозначение половины через 'setengah' к следующему часу (jam setengah delapan — 7:30)",
        "Временные ориентиры — sekarang (сейчас), kemarin (вчера), besok (завтра), nanti (потом), dulu (раньше)",
        "Приёмы пищи привязаны ко времени суток — sarapan (завтрак), makan siang (обед), makan malam (ужин)",
      ],
    },
    exercises: [29, 30, 31, 32, 1029, 1030, 1031, 1032],
    vocabulary: [
      2, 66, 67, 68, 105, 157, 158, 163, 165, 166, 167, 168, 169, 170, 172,
      180, 183, 188, 226, 227, 228, 241, 242, 243, 244, 245, 246, 247, 248,
      249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 262, 277,
      378, 379, 422,
    ],
    estimatedTime: 45,
  },
  {
    id: 9,
    title: "Прошедшее время",
    description: "Выражаем завершённые действия",
    objectives: ["Частица sudah", "Частица telah", "Частица pernah", "Лексика завершенности"],
    content: {
      theory: `В индонезийском языке глаголы не изменяются по лицам, числам и временам. Завершённость действия в прошлом передаётся специальными маркерами и наречиями времени:

1. SUDAH /sudah/ - уже (наиболее употребительное в разговорной и нейтральной речи):
   - Saya sudah makan /saja sudah makan/ - Я уже поел
   - Saya sudah selesai /saja sudah sələsai/ - Я уже закончил
   - Dia sudah pulang /dia sudah pulaŋ/ - Он уже вернулся домой
   - Sudah makan? /sudah makan/ - Уже поел?

2. TELAH /təlah/ - уже (формальный, книжный аналог sudah):
   - Mereka telah tiba /mərəka təlah tiba/ - Они уже прибыли

3. PERNAH /pərnah/ - когда-либо, случалось (наличие жизненного опыта в прошлом):
   - Saya pernah ke Jakarta /saja pərnah kə dʒakarta/ - Я бывал в Джакарте
   - belum pernah /bəlum pərnah/ - ещё никогда не случалось / ни разу не был

4. Завершение и исчерпанность (habis и selesai):
   - selesai /sələsai/ - заканчивать, завершать, готово (Tugas saya sudah selesai - Моё задание уже завершено)
   - habis /habis/ - заканчиваться, исчерпаться, весь до конца (Uang saya sudah habis - Мои деньги кончились)

5. Временные ориентиры прошлого и частотность:
   - kemarin /kəmarin/ - вчера
   - dulu /dulu/ - раньше, прежде, сначала (Dulu saya tinggal di Bandung - Раньше я жил в Бандунге)
   - lalu /lalu/ - прошлый; затем, потом (minggu lalu - прошлая неделя, bulan lalu - прошлый месяц)
   - selalu /səlalu/ - всегда, постоянно
   - acap kali /atʃap kali/ - часто, нередко
   - jarang /dʒaraŋ/ - редко`,
      examples: [
        { indonesian: "Saya sudah selesai makan", russian: "Я уже закончил есть" },
        { indonesian: "Kemarin uang kami sudah habis", russian: "Вчера наши деньги уже кончились" },
        { indonesian: "Dia pernah tinggal di sini dulu", russian: "Он когда-то раньше жил здесь" },
        { indonesian: "Minggu lalu kami jarang pergi", russian: "На прошлой неделе мы редко уходили" },
        { indonesian: "Dia selalu ingat masa lalu", russian: "Он всегда помнит прошлое" },
        { indonesian: "Mereka telah tiba kemarin sore", russian: "Они прибыли вчера вечером" },
        { indonesian: "Acap kali saya lupa bawa buku", russian: "Я нередко забывал взять книгу" },
        { indonesian: "Sudah makan malam?", russian: "Ты уже поужинал?" },
      ],
      keyPoints: [
        "Частицы времени перед глаголом — глагол не изменяется (Saya sudah makan — Я уже поел)",
        "sudah — совершённое действие или результат (Dia sudah pulang — Он уже вернулся домой)",
        "pernah — жизненный опыт 'когда-либо бывал / делал' (Saya pernah ke Jakarta — Я бывал в Джакарте)",
        "selesai vs habis — завершение действия (selesai — закончить процесс) и исчерпанность запаса (habis — кончилось, больше нет)",
        "Временные маркеры прошлого — kemarin (вчера), dulu (раньше), minggu lalu (на прошлой неделе)",
      ],
    },
    exercises: [33, 34, 35, 36, 1033, 1034, 1035, 1036],
    vocabulary: [98, 99, 126, 127, 137, 138, 253, 257, 258],
    estimatedTime: 40,
  },
  {
    id: 10,
    title: "Настоящее продолженное",
    description: "Действия в процессе",
    objectives: ["sedang", "lagi", "masih", "Действия в момент речи"],
    content: {
      theory: `Для выражения действия, происходящего прямо сейчас (в процессе), используются маркеры длительности:

1. SEDANG /sədaŋ/ - в процессе, прямо сейчас (нейтральное и официальное):
   - Saya sedang bekerja /saja sədaŋ bəkərdʒa/ - Я работаю (прямо сейчас)
   - Kami sedang belajar /kami sədaŋ bəladʒar/ - Мы учимся
   - Ibu sedang masak di dapur /ibu sədaŋ masak di dapur/ - Мама готовит на кухне

2. LAGI /laɡi/ - в процессе (живая разговорная речь):
   - Dia lagi baca buku /dia laɡi batʃa buku/ - Он читает книгу (сейчас)
   - Mereka lagi rapat /mərəka laɡi rapat/ - У них сейчас собрание / совещание
   - Dia lagi tidur /dia laɡi tidur/ - Он спит

3. MASIH /masih/ - всё ещё (действие или состояние продолжается):
   - Mereka masih kerja /mərəka masih kərdʒa/ - Они всё ещё работают
   - Apa kamu masih di sini? /apa kamu masih di sini/ - Ты всё ещё здесь?

4. Глаголы повседневных действий, гигиены и быта:
   - kerja /kərdʒa/, bekerja /bəkərdʒa/ - работать, работа
   - rapat /rapat/ - собрание, совещание
   - tidur /tidur/ - спать
   - mandi /mandi/ - купаться, принимать душ
   - cuci /tʃutʃi/ - мыть, стирать (cuci tangan - мыть руки)
   - bersihkan /bərsihkan/ - чистить, наводить порядок
   - beres /bərəs/ - в порядке, сделано, готово
   - pakai /pakai/ - надевать, носить, использовать
   - lepas /ləpas/ - снимать (одежду), отпускать
   - ganti /ɡanti/ - менять, заменять, переодеваться
   - simpan /simpan/ - сохранять, убирать на место
   - antar /antar/ - провожать, отвозить
   - jemput /dʒəmput/ - встречать, забирать
   - berangkat /bəraŋkat/ - отправляться, уезжать
   - pulang /pulaŋ/ - возвращаться домой
   - siap /siap/ - готовый, готов`,
      examples: [
        { indonesian: "Saya sedang cuci tangan sekarang", russian: "Я сейчас мою руки" },
        { indonesian: "Dia lagi masak untuk makan malam", russian: "Она сейчас готовит на ужин" },
        { indonesian: "Bapak masih rapat di kantor", russian: "Папа всё ещё на совещании в офисе" },
        { indonesian: "Saya sedang bersihkan kamar, semua beres", russian: "Я убираю комнату, всё в порядке" },
        { indonesian: "Kakak sedang jemput adik di sekolah", russian: "Старший брат забирает младшего из школы" },
        { indonesian: "Kami baru ganti baju dan siap berangkat", russian: "Мы только что переоделись и готовы ехать" },
        { indonesian: "Dia lagi baca buku sambil menunggu", russian: "Он читает книгу в ожидании" },
        { indonesian: "Adik sedang mandi di kamar mandi", russian: "Младший брат принимает душ в ванной" },
      ],
      keyPoints: [
        "sedang — нейтральный маркер длительного действия в момент речи (Saya sedang bekerja — Я работаю прямо сейчас)",
        "lagi — разговорный эквивалент sedang (Dia lagi tidur — Он сейчас спит)",
        "masih — продолжение процесса 'всё ещё' (Bapak masih rapat — Папа всё ещё на совещании)",
        "Бытовые глаголы в процессе — cuci tangan (мыть руки), masak (готовить), bersihkan (убирать), jemput (забирать)",
        "beres и siap — фиксация готовности (Semua sudah beres — Всё уже в порядке/готово)",
      ],
    },
    exercises: [37, 38, 39, 40, 1037, 1038, 1039, 1040],
    vocabulary: [
      62, 72, 220, 255, 364, 380, 421, 423, 424, 425, 427, 428, 429, 430,
      431, 432, 433, 434, 435, 438, 439, 440, 503,
    ],
    estimatedTime: 45,
  },
  {
    id: 11,
    title: "Будущее время",
    description: "Выражаем будущие действия",
    objectives: ["akan", "mau", "hendak", "Выражение намерений и времени в будущем"],
    content: {
      theory: `Будущее время в индонезийском языке выражается специальными частицами перед глаголом, а также маркерами времени и вероятности:

1. AKAN /akan/ - будет, буду (нейтральный маркер будущего времени):
   - Saya akan belajar besok /saja akan bəladʒar besok/ - Я буду учиться завтра
   - Dia akan datang minggu depan /dia akan dataŋ miŋɡu dəpan/ - Он приедет на следующей неделе
   - Kami akan bertemu jam lima /kami akan bərtəmu dʒam lima/ - Мы встретимся в 5 часов

2. MAU /mau/ (saya mau) - собираться, намереваться, хотеть:
   - Mau pergi ke mana? /mau pərɡi kə mana/ - Куда собираешься пойти?
   - Saya mau belajar sekarang /saja mau bəladʒar səkaraŋ/ - Я собираюсь учиться сейчас

3. HENDAK /həndaʔ/ - намереваться (книжный, более официальный стиль):
   - Kami hendak berangkat /kami həndaʔ bəraŋkat/ - Мы намерены отправиться в путь

4. Временные ориентиры будущего:
   - besok /besok/ - завтра (besok pagi - завтра утром)
   - nanti /nanti/ - потом, позже, скоро (nanti malam - сегодня вечером)
   - minggu /miŋɡu/ - неделя (minggu depan - следующая неделя)
   - kapan-kapan /kapan-kapan/ - когда-нибудь, при случае, в другой раз

5. Выражение вероятности и возможности в будущем:
   - mungkin /muŋkin/ - возможно, может быть
   - bisa jadi /bisa dʒadi/ - может быть, вполне вероятно
   - datang /dataŋ/ - приходить, приезжать, наступать`,
      examples: [
        { indonesian: "Saya akan belajar bahasa Indonesia besok", russian: "Я буду учить индонезийский язык завтра" },
        { indonesian: "Mungkin dia akan datang nanti sore", russian: "Возможно, он придёт позже вечером" },
        { indonesian: "Bisa jadi kami pindah minggu depan", russian: "Может случиться, что мы переедем на следующей неделе" },
        { indonesian: "Kapan-kapan kita bertemu lagi", russian: "Когда-нибудь мы встретимся снова" },
        { indonesian: "Nanti saya mau makan malam dengan keluarga", russian: "Позже я собираюсь поужинать с семьёй" },
        { indonesian: "Mau pergi ke mana besok pagi?", russian: "Куда собираешься пойти завтра утром?" },
        { indonesian: "Mereka hendak berangkat besok", russian: "Они намереваются уехать завтра" },
        { indonesian: "Saya akan datang tepat waktu", russian: "Я приду вовремя" },
      ],
      keyPoints: [
        "akan — нейтральный маркер будущего времени (Saya akan belajar besok — Я буду учиться завтра)",
        "mau — намерение, ближайшее будущее и желание в живой речи (Saya mau datang — Я собираюсь прийти)",
        "вероятность будущего — mungkin и bisa jadi (Mungkin dia akan datang — Возможно, он придёт)",
        "ориентиры будущего — besok (завтра), nanti (позже), minggu depan (на следующей неделе), kapan-kapan (когда-нибудь)",
      ],
    },
    exercises: [41, 42, 43, 44, 1041, 1042, 1043, 1044],
    vocabulary: [44, 69, 112, 125, 136, 242, 254, 256, 424],
    estimatedTime: 40,
  },
  {
    id: 12,
    title: "Модальные глаголы",
    description: "Может, должен, хочет",
    objectives: ["bisa", "harus", "mau / ingin", "Вежливые просьбы"],
    content: {
      theory: `Модальные глаголы выражают возможность, способность, необходимость и желание:

1. BISA /bisa/ - мочь, уметь (физическая способность или умение):
   - Saya bisa berenang /saja bisa bərənaŋ/ - Я умею плавать
   - Saya bisa main gitar /saja bisa main ɡitar/ - Я умею играть на гитаре
   - Bisa bantu saya? /bisa bantu saja/ - Можете помочь мне?

2. HARUS /harus/, PERLU /pərlu/ - должен, обязан, нужно:
   - Kamu harus tidur sekarang /kamu harus tidur səkaraŋ/ - Ты должен спать сейчас
   - Kita harus belajar /kita harus bəladʒar/ - Мы должны учиться
   - Kamu harus datang tepat waktu /kamu harus dataŋ təpat waktu/ - Ты должен прийти вовремя

3. MAU /mau/ (saya mau) - хотеть, собираться (повседневное):
   - Saya mau kopi /saja mau kopi/ - Я хочу кофе
   - Saya mau makan nasi goreng /saja mau makan nasi ɡoreŋ/ - Я хочу поесть жареный рис

4. INGIN /iŋin/ - хотеть, желать (вежливое, душевное желание):
   - Dia ingin pergi ke Bali /dia iŋin pərɡi kə bali/ - Он хочет поехать на Бали
   - Saya ingin tidur /saja iŋin tidur/ - Я хочу спать

5. BOLEH /boleh/ - можно, разрешено:
   - Boleh saya minum kopi ini? /boleh saja minum kopi ini/ - Можно мне выпить этот кофе?
   - Boleh /boleh/ - можно, разрешается`,
      examples: [
        { indonesian: "Saya bisa berenang dan main di pantai", russian: "Я умею плавать и играть на пляже" },
        { indonesian: "Saya mau minum kopi hangat", russian: "Я хочу выпить горячего кофе" },
        { indonesian: "Kamu harus tidur, besok harus bangun pagi", russian: "Ты должен спать, завтра нужно проснуться рано" },
        { indonesian: "Dia ingin belajar bahasa baru", russian: "Он хочет изучать новый язык" },
        { indonesian: "Bisa tolong bantu saya?", russian: "Не могли бы вы мне помочь?" },
        { indonesian: "Boleh saya makan di sini?", russian: "Можно мне поесть здесь?" },
        { indonesian: "Anak-anak mau main bersama di luar", russian: "Дети хотят играть вместе на улице" },
        { indonesian: "Kita harus datang tepat waktu", russian: "Мы должны прийти вовремя" },
      ],
      keyPoints: [
        "bisa — способность, навык или вежливая просьба (Saya bisa berenang — Я умею плавать; Bisa bantu? — Можешь помочь?)",
        "harus — долженствование и строгая необходимость (Kamu harus tidur — Ты должен спать)",
        "mau vs ingin — повседневное 'mau' против более вежливого 'ingin' (Saya mau kopi — Я хочу кофе; Dia ingin belajar — Он хочет учиться)",
        "boleh — разрешение и вопрос 'можно?' (Boleh saya makan? — Можно мне поесть?)",
        "Модальный глагол всегда предшествует основному действию (Saya harus pergi — Я должен идти)",
      ],
    },
    exercises: [45, 46, 47, 48, 1045, 1046, 1047, 1048],
    vocabulary: [41, 52, 69, 90, 203, 421, 424],
    estimatedTime: 40,
  },
  {
    id: 13,
    title: "Прилагательные",
    description: "Описываем предметы и людей",
    objectives: ["Позиция прилагательных", "lebih (более)", "paling (самый)", "sangat (очень)"],
    content: {
      theory: `Прилагательные в индонезийском языке (описания, свойства, цвета, характер, животные и погода):

1. Порядок слов:
   Прилагательное ВСЕГДА ставится ПОСЛЕ существительного:
   - rumah besar /rumah bəsar/ - большой дом (букв. "дом большой")
   - mobil baru /mobil baru/ - новая машина
   - baju putih /badʒu putih/ - белая рубашка / одежда
   - anjing pintar /andʒiŋ pintar/ - умная собака

2. Степени сравнения и усиления:
   - lebih /ləbih/ - более, лучше (lebih baik - лучше, lebih besar - больше)
   - kurang /kuraŋ/ - менее (kurang manis - менее сладкий)
   - paling /paliŋ/ - самый (paling pintar - самый умный, paling tinggi - самый высокий)
   - sangat /saŋat/, sekali /səkali/ - очень (sangat enak / enak sekali - очень вкусный)

3. Физические свойства, размер и форма:
   - besar /bəsar/ - большой; kecil /kətʃil/ - маленький
   - panjang /pandʒaŋ/ - длинный; pendek /pəndək/ - короткий
   - tinggi /tiŋɡi/ - высокий; rendah /rendah/ - низкий
   - berat /bərat/ - тяжёлый; ringan /riŋan/ - лёгкий
   - kuat /kuat/ - сильный; lemah /lemah/ - слабый
   - keras /kəras/ - твёрдый, громкий; lunak /lunak/ - мягкий
   - kasar /kasar/ - грубый, шершавый; halus /halus/ - гладкий, нежный
   - bersih /bersih/ - чистый; kotor /kotor/ - грязный
   - basah /basah/ - мокрый; kering /kəriŋ/ - сухой
   - cepat /tʃəpat/ - быстрый; lambat /lambat/ - медленный
   - tebal /təbal/ - толстый; tipis /tipis/ - тонкий
   - terang /teraŋ/ - светлый, яркий; gelap /ɡelap/ - тёмный

4. Цвета (warna /warna/) и одежда (pakaian /pakaian/):
   - merah /merah/ - красный, putih /putih/ - белый
   - hitam /hitam/ - чёрный, biru /biru/ - синий
   - hijau /hidʒau/ - зелёный, kuning /kuniŋ/ - жёлтый
   - coklat /tʃoklat/ - коричневый, abu-abu /abu-abu/ - серый
   - baju /badʒu/ - одежда, рубашка; celana /tʃəlana/ - брюки
   - sepatu /sepatu/ - обувь; topi /topi/ - шляпа/кепка; jaket /dʒakət/ - куртка; kaus /kaus/ - футболка

5. Характер, чувства и эмоции:
   - senang /sənaŋ/, gembira /ɡəmbira/ - радостный, весёлый
   - sedih /sədih/ - грустный; marah /marah/ - сердитый; takut /takut/ - напуганный
   - capek /tʃapək/ - усталый; cemas /tʃəmas/ - тревожный; kaget /kaɡət/ - удивлённый
   - bangga /baŋɡa/ - гордый; malu /malu/ - стеснительный, стыдный; heran /həran/ - поражённый
   - pintar /pintar/ - умный; bodoh /bodoh/ - глупый
   - rajin /radʒin/ - прилежный; malas /malas/ - ленивый
   - baik hati /baiʔ hati/ - добрый; jahat /dʒahat/ - злой; sabar /sabar/ - терпеливый; berani /bərani/ - смелый

6. Вкусы, животные и природные явления:
   - enak /enak/ - вкусный; manis /manis/ - сладкий; asin /asin/ - солёный; pedas /pədas/ - острый; pahit /pahit/ - горький
   - lapar /lapar/ - голодный; haus /haus/ - испытывающий жажду; murah /murah/ - дешёвый; mahal /mahal/ - дорогой
   - kucing, anjing, burung, kuda, ayam, bebek, sapi, kambing, ular, harimau, gajah, monyet, buaya, kura-kura
   - cuaca /tʃuatʃa/ - погода; panas /panas/ - жаркий; dingin /diŋin/ - холодный; sejuk /sedʒuk/ - прохладный; cerah /tʃerah/ - ясный; mendung /mənduŋ/ - пасмурный; lembab /lembab/ - влажный; angin, awan, musim, iklim, suhu, gempa, topan, banjir`,
      examples: [
        { indonesian: "Mobil baru ini lebih cepat dan sangat bersih", russian: "Эта новая машина быстрее и очень чистая" },
        { indonesian: "Kucing putih itu sangat lucu dan manis", russian: "Та белая кошка очень милая и ласковая" },
        { indonesian: "Makanan pedas ini enak sekali, tapi saya haus", russian: "Эта острая еда очень вкусная, но я хочу пить" },
        { indonesian: "Hari ini cuaca cerah dan angin sejuk", russian: "Сегодня солнечная погода и прохладный ветер" },
        { indonesian: "Gajah adalah binatang paling besar dan kuat", russian: "Слон — самое большое и сильное животное" },
        { indonesian: "Dia rajin dan pintar, tidak pernah malas", russian: "Он прилежный и умный, никогда не ленится" },
        { indonesian: "Baju merah ini murah, tapi jaket hitam itu mahal", russian: "Эта красная рубашка дешёвая, а та чёрная куртка дорогая" },
        { indonesian: "Jangan takut dan tetap sabar", russian: "Не бойся и оставайся терпеливым" },
      ],
      keyPoints: [
        "Позиция признака — прилагательное всегда ставится ПОСЛЕ определяемого существительного (baju merah — красная одежда, kucing kecil — маленькая кошка)",
        "Степени сравнения — lebih (более / -ее: lebih baik), paling (самый: paling pintar)",
        "Усилители качества — sangat (перед прилагательным: sangat enak) или sekali (после прилагательного: enak sekali)",
        "Цвета и одежда — warna (цвет), merah, putih, hitam, biru, hijau, kuning, baju, celana, sepatu",
        "Чувства и черты характера — senang, sedih, marah, takut, capek, rajin, malas, sabar, berani",
      ],
    },
    exercises: [49, 50, 51, 52, 1049, 1050, 1051, 1052],
    vocabulary: [
      14, 36, 63, 65, 91, 140, 142, 181, 182, 197, 199, 200, 205, 215, 216,
      217, 218, 219, 224, 225, 238, 239, 263, 264, 301, 302, 303, 304, 305,
      306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319,
      320, 321, 322, 323, 324, 326, 327, 328, 329, 330, 331, 332, 333, 334,
      335, 336, 337, 338, 339, 340, 363, 381, 382, 383, 384, 385, 386, 387,
      388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 441,
      442, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456,
      457, 458, 459, 461, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490,
      491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 502,
    ],
    estimatedTime: 50,
  },
  {
    id: 14,
    title: "Предлоги",
    description: "Место, направление, время",
    objectives: ["di (место)", "ke (направление)", "dari (исходная точка)", "pada (время)", "di atas / di bawah"],
    content: {
      theory: `Предлоги места, направления, времени, транспорт и ориентация в городе:

1. Базовые предлоги направления и места:
   - DI /di/ - в, на (местонахождение, "где?"): di rumah, di kantor, di pasar
   - KE /kə/ - в, на, к (направление, "куда?"): ke sekolah, ke bandara, ke stasiun
   - DARI /dari/ - из, от, с (исходная точка, "откуда?"): dari rumah sakit, dari Rusia
   - PADA /pada/ - в, на (время или абстрактное положение): pada jam tiga, pada hari Senin

2. Пространственная ориентация:
   - atas /atas/ - верх (di atas - на/над); bawah /bawah/ - низ (di bawah - под)
   - dalam /dalam/ - внутри (di dalam); luar /luar/ - снаружи (di luar)
   - depan /dəpan/ - спереди (di depan); belakang /bəlakaŋ/ - сзади (di belakang)
   - samping /sampiŋ/ - сбоку, рядом; seberang /seberaŋ/ - напротив, через дорогу
   - sekitar /sekitar/ - вокруг, около; antara /antara/ - между, среди
   - tepi /təpi/, pinggir /piŋɡir/, ujung /udʒuŋ/ - край, побережье, конец
   - sudut /sudut/ - угол; tempat /tempat/ - место; posisi /posisi/ - положение
   - sini /sini/ - здесь, сюда; situ /situ/ - там (поблизости); sana /sana/ - вон там (далеко)

3. Направления движения и городская среда:
   - kiri /kiri/ - налево, левый; kanan /kanan/ - направо, правый; lurus /lurus/ - прямо
   - dekat /dəkat/ - близко, рядом; jauh /dʒauh/ - далеко
   - kota, jalan, kantor, sekolah, pasar, rumah sakit, bank, toko, apotek, stasiun, bandara, pelabuhan, taman, masjid, gereja, restoran

4. Транспорт (kendaraan) и путешествия:
   - naik /naik/ - садиться (в транспорт), ехать на (naik bis, naik kereta)
   - turun /turun/ - выходить (из транспорта), спускаться
   - mobil, motor, ojek, bis, taksi, kereta, pesawat, kapal, sepeda, becak
   - jalan kaki /dʒalan kaki/ - идти пешком (kaki - нога)
   - bensin, ban, tiket, koper, paspor, bagasi, perjalanan, wisata, peta, macet, kecelakaan

5. Предлоги отношений и связи:
   - dengan /dəŋan/, sama /sama/ - с, вместе
   - untuk /untuk/, bagi /baɡi/ - для, ради
   - tentang /təntaŋ/ - о, про; terhadap /tərhadap/ - по отношению к
   - tanpa /tanpa/ - без; кроме /kətʃuali/ - кроме, за исключением; melalui /məlalui/ - через, сквозь`,
      examples: [
        { indonesian: "Saya pergi ke kantor naik motor karena jalan macet", russian: "Я еду в офис на мотоцикле, потому что на дороге пробка" },
        { indonesian: "Buku itu ada di atas meja di dalam kamar", russian: "Та книга на столе внутри комнаты" },
        { indonesian: "Dari bandara ke hotel cukup dekat, bisa jalan kaki", russian: "От аэропорта до гостиницы довольно близко, можно дойти пешком" },
        { indonesian: "Tolong belok ke kiri, lalu jalan lurus", russian: "Пожалуйста, поверните налево, затем идите прямо" },
        { indonesian: "Kami naik kereta dari stasiun menuju ke kota", russian: "Мы сели на поезд на вокзале по направлению в город" },
        { indonesian: "Jangan lupa bawa paspor, tiket, dan koper Anda", russian: "Не забудьте взять ваш паспорт, билет и чемодан" },
        { indonesian: "Toko dan apotek ada di seberang rumah sakit", russian: "Магазин и аптека находятся напротив больницы" },
        { indonesian: "Mereka duduk bersama di tepi pantai", russian: "Они сидят вместе на берегу моря" },
      ],
      keyPoints: [
        "Тройка базовых предлогов — di (где?), ke (куда?), dari (откуда?)",
        "Пространственные конструкции — предлог + ориентир (di atas — сверху, di bawah — снизу, di depan — спереди, di belakang — сзади)",
        "Транспортные фразы — naik + вид транспорта (naik kereta — ехать на поезде, naik pesawat — лететь на самолёте), jalan kaki (пешком)",
        "Ориентация в пространстве — belok kiri (налево), belok kanan (направо), jalan lurus (прямо)",
        "Указатели местоположения — di sini (здесь), di situ (там рядом), di sana (вон там далеко)",
      ],
    },
    exercises: [53, 54, 55, 56, 1053, 1054, 1055, 1056],
    vocabulary: [
      15, 29, 43, 49, 54, 61, 84, 85, 86, 87, 92, 102, 103, 130, 133, 134,
      147, 148, 149, 150, 151, 152, 153, 154, 156, 233, 245, 265, 266, 267,
      268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281,
      282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295,
      296, 297, 298, 299, 300, 401, 402, 403, 404, 405, 406, 407, 408, 409,
      410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 439, 462, 463,
      464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477,
      478, 479, 480, 501,
    ],
    estimatedTime: 50,
  },
  {
    id: 15,
    title: "Сложные предложения",
    description: "Соединяем простые предложения",
    objectives: ["Союзы dan, atau, tapi", "karena, jadi", "yang (который)"],
    content: {
      theory: `Сложные предложения, союзы, логические связки, заказ еды и гастрономия:

1. Сочинительные и противительные союзы:
   - dan /dan/ - и (saya makan nasi dan minum air)
   - atau /atau/, ataukah /ataukah/ - или, или же (mau kopi atau teh?)
   - tapi /tapi/, tetapi /tətapi/ - но, однако (dia pintar tapi malas)
   - melainkan /məlainkan/ - а (напротив) (bukan kopi melainkan teh)
   - bukan saja ... melainkan ... - не только ..., но и (напротив) ...

2. Причинно-следственные и определительные союзы:
   - karena /karəna/, sebab /səbab/ - потому что, так как (tidak datang karena hujan)
   - jadi /dʒadi/ - поэтому, так что; становиться (saya sakit jadi tinggal di rumah)
   - yang /jaŋ/ - который, которая, то что (orang yang saya lihat; makanan yang enak)
   - begitu /bəɡitu/ - так, таким образом; как только (begitu dia datang)
   - lalu /lalu/ - затем, потом (makan dulu, lalu minum)

3. В ресторане (restoran /restoran/), заказ и посуда:
   - menu /mənu/ - меню; pesan /pəsan/ - заказывать, сообщение
   - piring /piriŋ/ - тарелка; gelas /ɡəlas/ - стакан; sendok /səndok/ - ложка; garpu /ɡarpu/ - вилка
   - makanan /makanan/ - еда; minuman /minuman/ - напиток
   - kopi /kopi/ - кофе; teh /teh/ - чай; susu /susu/ - молоко; gula /ɡula/ - сахар; garam /ɡaram/ - соль
   - roti /roti/ - хлеб; sayur /sajur/ - овощи; buah /buah/ - фрукты
   - daging /daɡiŋ/ - мясо; ikan /ikan/ - рыба; telur /təlur/ - яйцо

4. Приготовление еды (masak /masak/) и вкусы:
   - goreng /ɡorəŋ/ - жарить, жареный (nasi goreng, ayam goreng)
   - rebus /rəbus/ - варить, варёный (telur rebus)
   - bakar /bakar/ - жарить на углях, запекать (ikan bakar)
   - enak /enak/ - вкусный; manis /manis/ - сладкий; asin /asin/ - солёный; pedas /pədas/ - острый; pahit /pahit/ - горький
   - lapar /lapar/ - голодный; haus /haus/ - испытывающий жажду; sakit /sakit/ - больной; hujan /hudʒan/ - дождь`,
      examples: [
        { indonesian: "Saya lapar jadi saya mau pesan nasi goreng dan teh manis", russian: "Я голоден, поэтому хочу заказать жареный рис и сладкий чай" },
        { indonesian: "Dia tidak datang karena hujan sangat deras dan dia sakit", russian: "Он не пришёл, потому что дождь очень сильный и он заболел" },
        { indonesian: "Orang yang duduk di restoran itu memesan ikan bakar", russian: "Человек, который сидит в том ресторане, заказал рыбу на углях" },
        { indonesian: "Ini bukan saja enak, melainkan juga sehat", russian: "Это не только вкусно, но и полезно для здоровья" },
        { indonesian: "Tolong beri saya sendok, garpu, dan piring bersih", russian: "Пожалуйста, дайте мне ложку, вилку и чистую тарелку" },
        { indonesian: "Mau minum kopi dengan susu atau teh tanpa gula?", russian: "Хотите выпить кофе с молоком или чай без сахара?" },
        { indonesian: "Makanan yang terlalu pedas tidak baik untuk anak-anak", russian: "Еда, которая слишком острая, не полезна детям" },
        { indonesian: "Setelah makan malam, kami minum minuman hangat", russian: "После ужина мы выпили тёплый напиток" },
      ],
      keyPoints: [
        "Базовые союзы — dan (и), atau (или), tapi/tetapi (но), melainkan (а напротив)",
        "Причина и следствие — karena (потому что) и jadi (поэтому)",
        "Определительное 'yang' — соединяет определяемое слово с признаком или придаточным (makanan yang enak — вкусная еда, orang yang saya lihat — человек, которого я видел)",
        "Заказ в ресторане — pesan (заказывать), menu (меню), piring (тарелка), gelas (стакан), sendok (ложка), garpu (вилка)",
        "Способы готовки — goreng (жареный), rebus (варёный), bakar (на углях)",
      ],
    },
    exercises: [57, 58, 59, 60, 1057, 1058, 1059, 1060],
    vocabulary: [
      45, 64, 113, 117, 124, 131, 132, 203, 204, 206, 207, 208, 209, 210,
      211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224,
      225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 258, 261, 325,
      504,
    ],
    estimatedTime: 50,
  },
  {
    id: 16,
    title: "Разговорная практика и этикет",
    description: "Формулы вежливости, знакомство, покупки и расчеты",
    objectives: ["Разговорные формулы и вежливость", "Знакомство и прощание", "Покупки, деньги и цены", "Просьбы и разрешения"],
    content: {
      theory: `Разговорные формулы вежливости, этикет, покупки и расчёты:

1. Формулы вежливости и извинения:
   - terima kasih /tərima kasih/ - спасибо (terima kasih banyak - большое спасибо)
   - sama-sama /sama sama/ - пожалуйста, не за что, взаимно (букв. "одинаково-одинаково")
   - maaf /maʔaf/ - извините, простите
   - tolong /toloŋ/ - пожалуйста (просьба помочь); помогите!
   - permisi /pərmisi/ - разрешите, простите (чтобы пройти или привлечь внимание)
   - silakan /silakan/ - пожалуйста (приглашение сделать что-то: silakan masuk - входите, пожалуйста)
   - berkenan /bərkənan/ - соблаговолить, быть любезным

2. Знакомство, общение и пожелания:
   - kenalan /kənalan/ - знакомиться, знакомство
   - berkenalan /bərkənalan/ - знакомиться друг с другом (Senang berkenalan dengan Anda - Рад познакомиться с вами)
   - bertemu /bərtəmu/ - встречать, встречаться (senang bertemu dengan Anda - приятно встретиться с вами)
   - senang /sənaŋ/ - рад, приятный, счастливый
   - selamat jalan /səlamat dʒalan/ - счастливого пути (говорят уходящему)
   - sampai jumpa lagi /sampaj dʒumpa laɡi/ - до скорой встречи

3. Глаголы взаимодействия и просьб:
   - minta /minta/ - просить, заказывать (minta tolong - просить о помощи)
   - ambil /ambil/ - брать, взять (tolong ambil buku itu - пожалуйста, возьми ту книгу)
   - masuk /masuk/ - входить, заходить (silakan masuk ke dalam - пожалуйста, заходите внутрь)

4. Деньги, покупки и торговля:
   - uang /uaŋ/ - деньги
   - harga /harɡa/ - цена, стоимость (Berapa harganya? - Какова цена? Сколько стоит?)
   - murah /murah/ - дешёвый (Harga ini sangat murah - Эта цена очень низкая/дешёвая)
   - mahal /mahal/ - дорогой (Ini terlalu mahal - Это слишком дорого)
   - bayar /bajar/ - платить, оплачивать (Saya mau bayar - Я хочу оплатить / расплатиться)`,
      examples: [
        {
          indonesian: "Senang berkenalan dengan Anda, sampai jumpa lagi!",
          russian: "Приятно познакомиться с вами, до скорой встречи!",
        },
        {
          indonesian: "Tolong ambilkan uang di atas meja",
          russian: "Пожалуйста, возьми деньги на столе",
        },
        {
          indonesian: "Berapa harga baju ini? Murah atau mahal?",
          russian: "Сколько стоит эта одежда? Дёшево или дорого?",
        },
        {
          indonesian: "Saya mau bayar sekarang, terima kasih banyak!",
          russian: "Я хочу заплатить сейчас, большое спасибо!",
        },
        {
          indonesian: "Silakan masuk dan duduk di sini",
          russian: "Пожалуйста, входите и садитесь сюда",
        },
      ],
      keyPoints: [
        "Разница между tolong и silakan — tolong выражает просьбу о помощи или действии (Tolong bantu saya), а silakan — вежливое приглашение или разрешение (Silakan duduk)",
        "Ответ на благодарность — sama-sama (взаимно, не за что) на terima kasih (спасибо)",
        "Торговля и покупки — слова harga (цена), mahal (дорогой), murah (дешёвый) и глагол bayar (платить): Berapa harganya? Saya mau bayar",
        "Приветствия и знакомство — senang berkenalan / senang bertemu (приятно познакомиться/встретиться), selamat jalan (счастливого пути уходящему)",
      ],
    },
    exercises: [61, 62, 63, 64, 1061, 1062, 1063, 1064],
    vocabulary: [
      3, 4, 5, 6, 28, 33, 35, 36, 37, 38, 39, 83, 84, 96, 236, 237, 238, 239,
      240, 321,
    ],
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
        "Формат общения — живой диалог на индонезийском языке с обратной связью (Halo, apa kabar? — Привет, как дела?)",
        "Применение конструкций курса — используйте глаголы без спряжений, маркеры времени (sudah, sedang, akan) и формулы вежливости",
        "Условие завершения — обмен как минимум 6 репликами с ИИ для закрепления навыка",
      ],
    },
    exercises: [],
    vocabulary: [],
    estimatedTime: 15,
  },
];
