let Aragrakh = {
  name: "Aragrakh",
  alphabet: "Draconic",
  speakers: "Old high wyrm",
  chance: 15.00 // Древний язык драконов, имеет высокое историческое значение.
};

let Hulgorkyn = {
  name: "Hulgorkyn",
  alphabet: "Dethek",
  speakers: "Archaic orc",
  chance: 10.00 // Древний язык орков, имеет культурное значение среди их потомков.
};

let Loross = {
  name: "Loross",
  alphabet: "Draconic",
  speakers: "Netherese noble tongue",
  chance: 20.00 // Язык благородных Нетерил, высоко ценимый среди магов и историков.
};

let Netherese = {
  name: "Netherese",
  alphabet: "Draconic",
  speakers: "A precursor of Halruaan",
  chance: 17.00 // Прото-язык, из которого развился язык Халруаа, важный для магии.
};

let Roushoum = {
  name: "Roushoum",
  alphabet: "Imaskari",
  speakers: "A precursor of Tuigan",
  chance: 13.00 // Язык предков Туиганов, важный для древних степных народов.
};

let Seldruin = {
  name: "Seldruin",
  alphabet: "Hamarfae",
  speakers: "Elven high magic",
  chance: 12.00 // Эльфийская магия, язык высокоразвитой магической традиции.
};

let Thorass = {
  name: "Thorass",
  alphabet: "Thorass",
  speakers: "Old Common",
  chance: 13.00 // Древний общий язык, предшественник современных диалектов.
};

let deadLanguages = [
  Aragrakh,
  Hulgorkyn,
  Loross,
  Netherese,
  Roushoum,
  Seldruin,
  Thorass
];


let Aglorondan = {
  name: "Aglorondan",
  alphabet: "Espruar",
  speakers: "Aglarond, Altumbel",
  chance: 2.50 // Агларонд - небольшой регион, язык не особо распространён.
};

let Alzhedo = {
  name: "Alzhedo",
  alphabet: "Thorass",
  speakers: "Calimshan",
  chance: 4.50 // Калимшан — крупный регион с богатой торговлей и историей.
};

let Chessentan = {
  name: "Chessentan",
  alphabet: "Thorass",
  speakers: "Chessenta",
  chance: 3.00 // Чессента - важный, но локальный язык.
};

let Chondathan = {
  name: "Chondathan",
  alphabet: "Thorass",
  speakers: "Amn, Chondath, Cormyr, the Dalelands, the Dragon Coast, the civilized North, Sembia, the Silver Marches, the Sword Coast, Tethyr, Waterdeep, the Western Heartlands, the Vilhon Reach",
  chance: 12.00 // Очень распространённый язык по всему Фаэруну, в том числе на Мече.
};

let Chultan = {
  name: "Chultan",
  alphabet: "Draconic",
  speakers: "Chult",
  chance: 2.00 // Язык Чульта, но географически ограничен его джунглями.
};

let Common = {
  name: "Common",
  alphabet: "Thorass",
  speakers: "", // Everywhere on Faerûn's surface (trade language)
  chance: 25.00 // Общий язык, на котором говорят почти везде.
};

let Damaran = {
  name: "Damaran",
  alphabet: "Dethek",
  speakers: "Damara, the Great Dale, Impiltur, the Moonsea, Narfell, Thesk, Vaasa, the Vast",
  chance: 4.00 // Локальный, но важный язык в восточных регионах.
};

let Dambrathan = {
  name: "Dambrathan",
  alphabet: "Espruar",
  speakers: "Dambrath",
  chance: 2.00 // Язык Дамбрата, распространён лишь в небольшом регионе.
};

let Durpari = {
  name: "Durpari",
  alphabet: "Thorass",
  speakers: "Durpar, Estagund, Var, Veldorn",
  chance: 3.00 // Региональный язык юго-восточной части Фаэруна.
};

let Halruaan = {
  name: "Halruaan",
  alphabet: "Draconic",
  speakers: "Halruaa, Nimbral",
  chance: 2.50 // Язык волшебников Халруаа, важен в магических кругах, но локализован.
};

let Illuskan = {
  name: "Illuskan",
  alphabet: "Thorass",
  speakers: "Luskan, Mintarn, the Moonshaes, the Savage North (uncivilized areas), Ruathym, the Uthgardt barbarians",
  chance: 6.00 // Язык варваров и северных народов, важен на северо-западе.
};

let Lantanese = {
  name: "Lantanese",
  alphabet: "Draconic",
  speakers: "Lantan",
  chance: 1.50 // Язык Лантана, технологически развитого острова, но крайне ограничен.
};

let Midani = {
  name: "Midani",
  alphabet: "Thorass",
  speakers: "Zakhara, the Bedine",
  chance: 3.50 // Язык Закхары, богатого южного региона.
};

let Mulani = {
  name: "Mulani",
  alphabet: "Thorass", // не корректно, надо искать
  speakers: "East Faerûn",
  chance: 2.00
};

let Mulhorandi = {
  name: "Mulhorandi",
  alphabet: "Celestial",
  speakers: "Mulhorand, Murghôm, Semphar",
  chance: 3.00 // Язык могущественной империи Мулоранда.
};

let MulhorandiVar = {
  name: "Mulhorandi (var.)",
  alphabet: "Infernal",
  speakers: "Thay",
  chance: 2.20 // Вариант языка, используемый в Тэе, известен своей мощной магической культурой.
};

let Nexalan = {
  name: "Nexalan",
  alphabet: "Draconic",
  speakers: "Maztica",
  chance: 1.50 // Локализован в Мазтике, ограниченная область применения.
};

let Rashemi = {
  name: "Rashemi",
  alphabet: "Thorass",
  speakers: "Rashemen",
  chance: 2.50 // Язык Расхемена, в основном используемый внутри страны.
};

let Serusan = {
  name: "Serusan",
  alphabet: "Aquan",
  speakers: "Inner Sea (aquatic trade language)",
  chance: 1.00 // Язык подводных торговцев, малоизвестен на поверхности.
};

let Shaaran = {
  name: "Shaaran",
  alphabet: "Dethek",
  speakers: "Lake of Steam, Lapaliiya, Sespech, the Shaar",
  chance: 2.50 // Используется кочевниками Шаара, в определённых южных регионах.
};

let KoryoLanguage = {
  name: "Koryo",
  alphabet: "Draconic", // не корректно, надо проверять
  speakers: "Kara-Tur (Koryo)",
  chance: 0.30
};

let Shou = {
  name: "Shou",
  alphabet: "Draconic",
  speakers: "Kara-Tur",
  chance: 2.00 // Язык дальневосточной территории Кара-Тур.
};

let Tashalan = {
  name: "Tashalan",
  alphabet: "Dethek",
  speakers: "Black Jungle, Mhair Jungle, Samarach, Tashalar, Thindol",
  chance: 2.00 // Локализованный язык тропических джунглей.
};

let Tuigan = {
  name: "Tuigan",
  alphabet: "Thorass",
  speakers: "Hordelands",
  chance: 1.50 // Язык степных племён кочевников в Хорделенде.
};

let Turmic = {
  name: "Turmic",
  alphabet: "Thorass",
  speakers: "Turmish",
  chance: 2.00 // Локализован в Турмише, важен для региональных торговцев.
};

let Uluik = {
  name: "Uluik",
  alphabet: "Thorass",
  speakers: "Great Glacier",
  chance: 1.00 // Язык обледеневших регионов, малоизвестен за пределами ледников.
};

let Undercommon = {
  name: "Undercommon",
  alphabet: "Espruar",
  speakers: "Underdark (trade language)",
  chance: 4.00 // Используется в Подземье для торговли.
};

let Untheric = {
  name: "Untheric",
  alphabet: "Dethek",
  speakers: "Unther",
  chance: 3.50 // Язык древней Унтерской империи.
};

// **Дополнительные языки**
let Dwarvish = {
  name: "Dwarvish",
  alphabet: "Dethek",
  speakers: "Дварфы",
  chance: 6.00 // Используется дварфами.
};

let Elvish = {
  name: "Elvish",
  alphabet: "Espruar",
  speakers: "Эльфы",
  chance: 8.00 // Используется эльфами.
};

let Draconic = {
  name: "Draconic",
  alphabet: "Iokharic",
  speakers: "Драконы, Драконорожденные, Кобольды, Ящеролюди, Троглодиты",
  chance: 5.00 // Древний язык драконов, используется различными драконьими существами.
};

let GiantLanguage = {
  name: "Giant",
  alphabet: "Dethek",
  speakers: "Огры, Великаны, Голиафы, Фирболги",
  chance: 4.00 // Язык великанов и их родни.
};

let GnomishLanguage = {
  name: "Gnomish",
  alphabet: "Dethek",
  speakers: "Гномы",
  chance: 3.00 // Используется гномами.
};

let GoblinLanguage = {
  name: "Goblin",
  alphabet: "Dethek",
  speakers: "Гоблины, Хобгоблины, Багбиры",
  chance: 4.00 // Язык гоблиноидных рас.
};

let HalflingLanguage = {
  name: "Halfling",
  alphabet: "Espruar",
  speakers: "Полурослики",
  chance: 3.00 // Используется полуросликами.
};

let OrcLanguage = {
  name: "Orc",
  alphabet: "Dethek",
  speakers: "Орки, Полуорки",
  chance: 4.00 // Используется орками и их роднёй.
};

let Infernal = {
  name: "Infernal",
  alphabet: "Infernal",
  speakers: "Тифлинги, Дьяволы",
  chance: 2.00 // Язык дьяволов, используется тифлингами.
};

let Celestial = {
  name: "Celestial",
  alphabet: "Celestial",
  speakers: "Аасимары, Небожители",
  chance: 1.50 // Язык небожителей.
};

let Primordial = {
  name: "Primordial",
  alphabet: "Dethek",
  speakers: "Элементали, Дженази, Тритоны",
  chance: 1.50 // Язык элементалей, включает диалекты.
};

let Sylvan = {
  name: "Sylvan",
  alphabet: "Espruar",
  speakers: "Фейские существа, Сатиры",
  chance: 1.50 // Язык фей.
};

let Abyssal = {
  name: "Abyssal",
  alphabet: "Infernal",
  speakers: "Демоны, Юан-ти Чистокровные",
  chance: 1.00 // Язык демонов.
};

let GithLanguage = {
  name: "Gith",
  alphabet: "Espruar",
  speakers: "Гитьянки, Гитьзераи",
  chance: 0.50 // Язык гитов.
};

let LeoninLanguage = {
  name: "Leonin",
  alphabet: "Common",
  speakers: "Леонины",
  chance: 0.50 // Язык леонинов.
};


let livingLanguages = [
  Aglorondan,
  Alzhedo,
  Chessentan,
  Chondathan,
  Chultan,
  Common,
  Damaran,
  Dambrathan,
  Durpari,
  Halruaan,
  Illuskan,
  Lantanese,
  Midani,
  Mulani,
  Mulhorandi,
  MulhorandiVar,
  Nexalan,
  Rashemi,
  Serusan,
  Shaaran,
  KoryoLanguage,
  Shou,
  Tashalan,
  Tuigan,
  Turmic,
  Uluik,
  Undercommon,
  Untheric,

  // Дополнительные языки
  Dwarvish,
  Elvish,
  Draconic,
  GiantLanguage,
  GnomishLanguage,
  GoblinLanguage,
  HalflingLanguage,
  OrcLanguage,
  Infernal,
  Celestial,
  Primordial,
  Sylvan,
  Abyssal,
  GithLanguage,
  LeoninLanguage
];

let livingLanguagesExceptCommon = livingLanguages.filter(language => language.name !== "Common");
