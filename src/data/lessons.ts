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
        "Частицы времени перед глаголом — глагол не меняет форму (Saya sudah makan — Я уже поел)",
        "sudah — завершённое действие или результат (Dia sudah pulang — Он уже вернулся домой, Sudah makan? — Уже ел?)",
        "telah — формальный / книжный аналог sudah (Mereka telah tiba — Они прибыли)",
        "pernah — прошлый жизненный опыт 'когда-либо бывал / делал' (Saya pernah ke Jakarta — Я бывал в Джакарте)",
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
        "sedang — действие происходит прямо сейчас, нейтральный стиль (Saya sedang bekerja — Я работаю прямо сейчас)",
        "lagi — разговорный маркер текущего действия (Dia lagi baca buku — Он сейчас читает книгу)",
        "masih — продолжение действия или состояния 'всё ещё' (Mereka masih di kantor — Они всё ещё в офисе)",
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
        "akan — нейтральный маркер будущего времени (Saya akan belajar besok — Я буду учиться завтра)",
        "mau — намерение, ближайшее будущее и желание в разговорной речи (Mereka mau makan — Они собираются / хотят поесть)",
        "hendak — книжное и формальное намерение (Saya hendak belajar — Я намерен учиться)",
        "Указатели будущего времени — depan ставится после единицы времени (minggu depan — на следующей неделе, tahun depan — в следующем году)",
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
        "bisa — физическая возможность, навык или вежливая просьба (Saya bisa berenang — Я умею плавать; Bisa bantu saya? — Можете помочь?)",
        "harus — долженствование и обязательство (Kamu harus datang tepat waktu — Ты должен прийти вовремя)",
        "mau vs ingin — повседневное 'mau' против более вежливого и глубокого желания 'ingin' (Saya mau kopi — Я хочу кофе; Dia ingin pergi ke Bali — Он мечтает/хочет поехать на Бали)",
        "Модальный глагол ставится перед смысловым глаголом (Saya harus pergi — Я должен идти)",
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
        "Порядок слов с признаком — прилагательное всегда ставится ПОСЛЕ определяемого существительного (rumah besar — большой дом, mobil baru — новая машина)",
        "Сравнительная степень через 'lebih' — более / -ее (Mobil ini lebih baik — Эта машина лучше)",
        "Превосходная степень через 'paling' — самый (Dia paling pintar — Он самый умный)",
        "Усиление признака через 'sangat' — очень (Makanan ini sangat enak — Эта еда очень вкусная)",
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
        "di — местонахождение 'где?' (Saya di rumah — Я дома, di Jakarta — в Джакарте)",
        "ke — направление движения 'куда?' (Dia pergi ke kantor — Он идёт в офис)",
        "dari — точка отправления или происхождение 'откуда?' (Saya dari Rusia — Я из России, dari rumah — из дома)",
        "pada — указание времени и дней недели (pada jam 3 — в 3 часа, pada hari Senin — в понедельник)",
        "Пространственные связки di atas / di bawah / di dalam — положение предмета (Buku di atas meja — Книга на столе)",
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
        "dan / atau / tapi — базовые соединительные и противительные союзы (nasi dan air — рис и вода; pintar tapi malas — умный, но ленивый)",
        "Причинно-следственная связь через karena и jadi — причина и следствие (tidak pergi karena hujan — не пошёл, так как дождь; sakit jadi tidak datang — заболел, поэтому не пришёл)",
        "Определительное союзное слово yang — аналог 'который' (Orang yang saya lihat — Человек, которого я видел)",
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
        "Разница оттенков вежливости — tolong (просьба помочь: tolong ambilkan buku), silakan (приглашение сделать: silakan masuk), sama-sama (в ответ на спасибо)",
        "Извинения и реакция — maaf (извинение за поступок: maaf, saya terlambat), tidak apa-apa (успокоение: не переживай, ничего страшного)",
        "Permisi — вежливое обращение к незнакомцу или просьба пропустить (Permisi, saya mau lewat)",
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
