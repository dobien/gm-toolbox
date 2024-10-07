// https://chatgpt.com/g/g-qgcben3uu-faerun/c/66ef4e4f-d1c4-800b-b20e-3969cb619c25
// https://dzen.ru/a/ZGxhsBGbTjaBeUhc?ysclid=m1dne1zyr1205412782

// TODO: сделать на часть преступных бэкграундов ограничение по мировоззрению
// TODO: увязать расу и выбор дополнительного языка (сделать выбор соответствующего языка от бэкграунда намного вероятнее)

// По дорогам и рекам Королевств проезжают менестрели и ремесленники, купцы и охранники, солдаты и моряки

// Отдельные переменные для каждого инструмента
const alchemistsSupplies = "Alchemist's supplies";
const brewersSupplies = "Brewer's supplies";
const calligraphersSupplies = "Calligrapher's supplies";
const carpentersTools = "Carpenter's tools";
const cartographersTools = "Cartographer's tools";
const cobblersTools = "Cobbler's tools";
const cooksUtensils = "Cook's utensils";
const glassblowersTools = "Glassblower's tools";
const jewelersTools = "Jeweler's tools";
const leatherworkersTools = "Leatherworker's tools";
const masonsTools = "Mason's tools";
const paintersTools = "Painter's tools";
const pottersTools = "Potter's tools";
const smithsTools = "Smith's tools";
const tinkersTools = "Tinker's tools";
const weaversTools = "Weaver's tools";
const woodcarversTools = "Woodcarver's tools";

// Добавил (хоумбрю)
const barberTools = "Barber's Tools";

// Массив с объединёнными инструментами ремесленников
const artisansTools = [
  alchemistsSupplies,
  brewersSupplies,
  calligraphersSupplies,
  carpentersTools,
  cartographersTools,
  cobblersTools,
  cooksUtensils,
  glassblowersTools,
  jewelersTools,
  leatherworkersTools,
  masonsTools,
  paintersTools,
  pottersTools,
  smithsTools,
  tinkersTools,
  weaversTools,
  woodcarversTools
];

// Наборы для игр
const diceSet = "Dice set";
const dragonchessSet = "Dragonchess set";
const playingCardSet = "Playing card set";
const threeDragonAnteSet = "Three-Dragon Ante set";

// Наборы для игр массив
const gamingSets = [
  diceSet,
  dragonchessSet,
  playingCardSet,
  threeDragonAnteSet
];

// Прочие наборы и инструменты
const disguiseKit = "Disguise kit";
const forgeryKit = "Forgery kit";
const herbalismKit = "Herbalism kit";
const navigatorsTools = "Navigator's tools";
const poisonersKit = "Poisoner's kit";
const thievesTools = "Thieves' tools";

// Транспорт
const vehiclesLand = "Vehicles (Land)";
const vehiclesWater = "Vehicles (Water)";

const otherTools = [
  disguiseKit,
  forgeryKit,
  herbalismKit,
  navigatorsTools,
  poisonersKit,
  thievesTools,
  vehiclesLand,
  vehiclesWater
];

// Музыкальные инструменты
const bagpipes = "Bagpipes";
const drum = "Drum";
const dulcimer = "Dulcimer";
const flute = "Flute";
const lute = "Lute";
const lyre = "Lyre";
const horn = "Horn";
const panFlute = "Pan flute";
const shawm = "Shawm";
const viol = "Viol";

// Массив музыкальных инструментов
const musicalInstruments = [
  bagpipes,
  drum,
  dulcimer,
  flute,
  lute,
  lyre,
  horn,
  panFlute,
  shawm,
  viol
];

const allTools = [...artisansTools, ...gamingSets, ...musicalInstruments, ...otherTools];

// +Морские профессии
let maritimeProfessions = {
  "Моряк":
  {
    "skills": [athletics, perception],
    "tools": [navigatorsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 35
  },
  "Рыбак":
  {
    "skills": [survival, animalHandling],
    "tools": ["Fishing tackle"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 25
  },
  "Пират":
  {
    "skills": [athletics, perception],
    "tools": [vehiclesWater, navigatorsTools],
    "languages": [],
    "chance": 10
  },
  "Гребец":
  {
    "skills": [athletics, survival],
    "tools": [vehiclesWater],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Боцман":
  {
    "skills": [intimidation, athletics],
    "tools": [vehiclesWater, navigatorsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Штурман":
  {
    "skills": [arcana, perception],
    "tools": [navigatorsTools, cartographersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Канонир":
  {
    "skills": [athletics, investigation],
    "tools": [smithsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Кок корабля":
  {
    "skills": [insight, performance],
    "tools": [cooksUtensils],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Кладовщик корабля":
  {
    "skills": [investigation, perception],
    "tools": [vehiclesWater],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Лоцман":
  {
    "skills": [perception, survival],
    "tools": [navigatorsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Канатчик":
  {
    "skills": [athletics, sleightOfHand],
    "tools": [weaversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
  "Оружейник корабля":
  {
    "skills": [athletics, investigation],
    "tools": [smithsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  }
};

// +Фермеры, пастухи и охотники
let agrarianProfessions = {
  "Фермер":
  {
    "skills": [animalHandling, nature],
    "tools": [brewersSupplies, carpentersTools, cobblersTools, cooksUtensils, leatherworkersTools, masonsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 25
  },
  "Пастух":
  {
    "skills": [animalHandling, nature],
    "tools": [musicalInstruments],
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },
  "Земледелец":
  {
    "skills": [athletics, nature],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Охотник":
  {
    "skills": [stealth, survival],
    "tools": ["Animal traps"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Овчар":
  {
    "skills": [animalHandling, survival],
    "tools": [barberTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Скотник":
  {
    "skills": [animalHandling, survival],
    "tools": [barberTools, leatherworkersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Свинопас":
  {
    "skills": [animalHandling, nature],
    "tools": [musicalInstruments],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Мельник":
  {
    "skills": [athletics, investigation],
    "tools": [cooksUtensils], // *
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Птицевод":
  {
    "skills": [animalHandling, survival],
    "tools": [woodcarversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Заводчик лошадей":
  {
    "skills": [animalHandling, persuasion],
    "tools": [musicalInstruments, calligraphersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Садовник":
  {
    "skills": [nature, survival],
    "tools": [herbalismKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Пчеловод":
  {
    "skills": [animalHandling, survival],
    "tools": [woodcarversTools, cooksUtensils],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Сыровар":
  {
    "skills": [animalHandling, investigation],
    "tools": [cooksUtensils],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Винодел":
  {
    "skills": [nature, persuasion],
    "tools": [brewersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Молочник":
  {
    "skills": [animalHandling, athletics],
    "tools": [cooksUtensils],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Зверолов":
  {
    "skills": [stealth, survival],
    "tools": ["Animal traps"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  }
};

// +Ремесленники
let artisanProfessions = {
  "Кузнец":
  {
    "skills": [athletics, insight],
    "tools": [smithsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 12
  },
  "Кожевенник":
  {
    "skills": [survival, investigation],
    "tools": [leatherworkersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 9
  },
  "Ткач":
  {
    "skills": [insight, investigation],
    "tools": [weaversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 9
  },
  "Пекарь":
  {
    "skills": [insight, investigation],
    "tools": [cooksUtensils],
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Мясник":
  {
    "skills": [athletics, survival],
    "tools": [cooksUtensils], // *
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Сапожник":
  {
    "skills": [investigation, perception],
    "tools": [cobblersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 6
  },
  "Повар":
  {
    "skills": [insight, performance],
    "tools": [cooksUtensils],
    "languages": [livingLanguagesExceptCommon],
    "chance": 7
  },
  "Столяр":
  {
    "skills": [athletics, perception],
    "tools": [carpentersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Резчик по дереву":
  {
    "skills": [athletics, perception],
    "tools": [woodcarversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Каменотес":
  {
    "skills": [athletics, investigation],
    "tools": [masonsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Гончар":
  {
    "skills": [investigation, performance],
    "tools": [pottersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Булочник":
  {
    "skills": [insight, performance],
    "tools": [cooksUtensils],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Бондарь":
  {
    "skills": [athletics, investigation],
    "tools": [woodcarversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Пивовар":
  {
    "skills": [investigation, insight],
    "tools": [brewersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Кирпичник":
  {
    "skills": [athletics, investigation],
    "tools": [masonsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Кондитер":
  {
    "skills": [insight, investigation],
    "tools": [cooksUtensils],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Изготовитель свечей":
  {
    "skills": [investigation, insight],
    "tools": [cooksUtensils],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Механик":
  {
    "skills": [investigation, sleightOfHand],
    "tools": [tinkersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Стеклодув":
  {
    "skills": [investigation, perception],
    "tools": [glassblowersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
  "Часовщик":
  {
    "skills": [investigation, perception],
    "tools": [tinkersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
  "Ювелир":
  {
    "skills": [insight, investigation],
    "tools": [jewelersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
  "Ткач ковров":
  {
    "skills": [insight, perception],
    "tools": [weaversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
  "Лудильщик":
  {
    "skills": [survival, investigation],
    "tools": [tinkersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  }
};

// +Музыканты и артисты
let performingArtsProfessions = {
  "Музыкант":
  {
    "skills": [performance, perception],
    "tools": [musicalInstruments],
    "languages": [livingLanguagesExceptCommon],
    "chance": 21
  },
  "Актер театра":
  {
    "skills": [performance, deception],
    "tools": [musicalInstruments, weaversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },
  "Певец":
  {
    "skills": [performance, persuasion],
    "tools": [], // * чтобы знал пару языков, на которых песни
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },
  "Танцор":
  {
    "skills": [acrobatics, performance],
    "tools": [], // * чтобы знал пару языков, на которых песни
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Художник":
  {
    "skills": [performance, investigation],
    "tools": [paintersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 6
  },
  "Поэт":
  {
    "skills": [performance, persuasion],
    "tools": [], // * чтобы знал пару языков, на которых песни
    "languages": [livingLanguagesExceptCommon],
    "chance": 6
  },
  "Жонглер":
  {
    "skills": [sleightOfHand, performance],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Фокусник":
  {
    "skills": [sleightOfHand, performance],
    "tools": [woodcarversTools], // *
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Кукловод":
  {
    "skills": [performance, sleightOfHand],
    "tools": [weaversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Скульптор":
  {
    "skills": [perception, performance],
    "tools": [paintersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Бард":
  {
    "skills": [performance, history],
    "tools": [musicalInstruments],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Оркестровый музыкант":
  {
    "skills": [performance, insight],
    "tools": [musicalInstruments],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Трубач":
  {
    "skills": [performance, athletics],
    "tools": [horn],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Лютнист":
  {
    "skills": [performance, perception],
    "tools": [lute],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Гармонист":
  {
    "skills": [performance, sleightOfHand],
    "tools": ["Harmonica"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Писатель (драматург)":
  {
    "skills": [history, performance],
    "tools": [calligraphersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  }
};

// +Военные и стражники
let militaryProfessions = {
  "Легкий пехотинец":
  {
    "skills": [athletics, perception],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },
  "Тяжелый пехотинец":
  {
    "skills": [athletics, intimidation],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Стражник":
  {
    "skills": [athletics, perception],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Ополченец":
  {
    "skills": [athletics, perception],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Лучник":
  {
    "skills": [perception, survival],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Копейщик":
  {
    "skills": [athletics, survival],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Кавалерист":
  {
    "skills": [athletics, animalHandling],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Гарнизонный солдат":
  {
    "skills": [athletics, insight],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Наемник":
  {
    "skills": [athletics, survival],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Рекрут":
  {
    "skills": [athletics, survival],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Телохранитель":
  {
    "skills": [athletics, insight],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Разведчик":
  {
    "skills": [stealth, survival],
    "tools": [cartographersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Оруженосец":
  {
    "skills": [athletics, perception],
    "tools": [smithsTools, leatherworkersTools, weaversTools, gamingSets], // *
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Баллистик":
  {
    "skills": [investigation, athletics],
    "tools": [smithsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Фортификатор":
  {
    "skills": [investigation, perception],
    "tools": [masonsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Гладиатор":
  {
    "skills": [athletics, intimidation],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Осадный инженер":
  {
    "skills": [investigation, survival],
    "tools": [carpentersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Морской пехотинец":
  {
    "skills": [athletics, perception],
    "tools": [navigatorsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Катапультир":
  {
    "skills": [athletics, survival],
    "tools": [masonsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Шпион":
  {
    "skills": [stealth, deception],
    "tools": [disguiseKit, thievesTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  }
};

// +Профессии воров и мошенников
let criminalProfessions = {
  "Карманник":
  {
    "skills": [sleightOfHand, stealth],
    "tools": [thievesTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 20
  },
  "Мошенник":
  {
    "skills": [deception, persuasion],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },
  "Домушник":
  {
    "skills": [stealth, perception],
    "tools": [thievesTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },
  "Контрабандист":
  {
    "skills": [stealth, deception],
    "tools": [vehiclesLand, vehiclesWater, thievesTools, disguiseKit, forgeryKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Карточный шулер":
  {
    "skills": [sleightOfHand, deception],
    "tools": [playingCardSet],
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Скупщик краденого":
  {
    "skills": [insight, persuasion],
    "tools": [disguiseKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 7
  },
  "Медвежатник":
  {
    "skills": [sleightOfHand, stealth],
    "tools": [thievesTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Скотокрад":
  {
    "skills": [stealth, survival],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Грабитель повозок":
  {
    "skills": [athletics, stealth],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Угонщик повозок":
  {
    "skills": [stealth, sleightOfHand],
    "tools": [vehiclesLand],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Фальшивомонетчик":
  {
    "skills": [deception, investigation],
    "tools": [forgeryKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Рекетир":
  {
    "skills": [intimidation, athletics],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Подделыватель документов":
  {
    "skills": [investigation, sleightOfHand],
    "tools": [forgeryKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Похититель скота":
  {
    "skills": [survival, stealth],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Ассасин":
  {
    "skills": [stealth, deception],
    "tools": [poisonersKit, disguiseKit, forgeryKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
  "Наёмный убийца":
  {
    "skills": [stealth, intimidation],
    "tools": [poisonersKit, disguiseKit, forgeryKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
  "Поджигатель":
  {
    "skills": [stealth, intimidation],
    "tools": [alchemistsSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
  "Похититель":
  {
    "skills": [stealth, deception],
    "tools": [disguiseKit, thievesTools, forgeryKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  }
};

// +Интеллектуалы и ученые
let academicProfessions = {
  "Писарь":
  {
    "skills": [history, investigation],
    "tools": [calligraphersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },
  "Учитель":
  {
    "skills": [persuasion, insight],
    "tools": [allTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },
  "Аколит":
  {
    "skills": [religion, insight],
    "tools": [calligraphersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 12
  },
  "Ученый":
  {
    "skills": [history, arcana],
    "tools": [calligraphersSupplies, cartographersTools, alchemistsSupplies], // *
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "chance": 9
  },
  "Алхимик":
  {
    "skills": [arcana, investigation],
    "tools": [alchemistsSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Инженер":
  {
    "skills": [investigation, perception],
    "tools": [tinkersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Профессор":
  {
    "skills": [history, persuasion],
    "tools": [], // *
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "chance": 7
  },
  "Историк":
  {
    "skills": [history, insight],
    "tools": [],
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "chance": 4
  },
  "Библиотекарь":
  {
    "skills": [history, investigation],
    "tools": [],
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "chance": 4
  },
  "Картограф":
  {
    "skills": [investigation, perception],
    "tools": [cartographersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Археолог":
  {
    "skills": [history, investigation],
    "tools": [cartographersTools],
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "chance": 3
  },
  "Лингвист":
  {
    "skills": [history, insight],
    "tools": [],
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "chance": 2
  },
  "Математик":
  {
    "skills": [investigation, insight],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Философ":
  {
    "skills": [religion, insight],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Исследователь":
  {
    "skills": [nature, survival],
    "tools": [herbalismKit],
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "chance": 2
  },
  "Географ":
  {
    "skills": [nature, history],
    "tools": [cartographersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Астроном":
  {
    "skills": [arcana, perception],
    "tools": [navigatorsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  }
};

// +Городские профессии
let urbanProfessions = {
  "Извозчик":
  {
    "skills": [animalHandling, perception],
    "tools": [vehiclesLand],
    "languages": [livingLanguagesExceptCommon],
    "chance": 20
  },
  "Грузчик":
  {
    "skills": [athletics, survival],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 17
  },
  /*"Уборщик улиц (дворник)":
  {
    "skills": [athletics, survival],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },*/
  "Цирюльник":
  {
    "skills": [medicine, performance],
    "tools": [barberTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Трактирщик":
  {
    "skills": [persuasion, insight],
    "tools": [brewersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Гонец":
  {
    "skills": [acrobatics, athletics],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Фонарщик":
  {
    "skills": [athletics, perception],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Почтальон":
  {
    "skills": [athletics, perception],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Пожарный":
  {
    "skills": [athletics, perception],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Тюремщик":
  {
    "skills": [intimidation, insight],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Садовник городской":
  {
    "skills": [nature, survival],
    "tools": [herbalismKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  }
};

// +Торговые профессии
let mercantileProfessions = {
  "Продавец фруктов и овощей":
  {
    "skills": [nature, persuasion],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 15
  },
  "Продавец тканей":
  {
    "skills": [insight, performance],
    "tools": [weaversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 12
  },
  "Продавец лошадей":
  {
    "skills": [animalHandling, persuasion],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Караванщик":
  {
    "skills": [animalHandling, perception],
    "tools": [vehiclesLand],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Продавец оружия":
  {
    "skills": [persuasion, investigation],
    "tools": [smithsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 10
  },
  "Продавец ювелирных изделий":
  {
    "skills": [persuasion, insight],
    "tools": [jewelersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Продавец вина":
  {
    "skills": [persuasion, insight],
    "tools": [brewersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Продавец мебели":
  {
    "skills": [persuasion, investigation],
    "tools": [carpentersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 7
  },
  "Аптекарь":
  {
    "skills": [medicine, arcana],
    "tools": [herbalismKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 6
  },
  "Продавец книг":
  {
    "skills": [history, investigation],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Продавец рыбы":
  {
    "skills": [survival, athletics],
    "tools": ["Fishing tackle"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
  "Торговец кожаными изделиями":
  {
    "skills": [investigation, insight],
    "tools": [leatherworkersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Торговец тканями":
  {
    "skills": [insight, persuasion],
    "tools": [weaversTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 3
  },
  "Караванный охранник":
  {
    "skills": [athletics, perception],
    "tools": [gamingSets],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Гильдейский казначей":
  {
    "skills": [investigation, insight],
    "tools": [calligraphersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
  "Продавец пряностей":
  {
    "skills": [insight, persuasion],
    "tools": [],
    "languages": [livingLanguagesExceptCommon],
    "chance": 1
  },
};

// +Строители
let constructionProfessions = {
  "Строитель":
  {
    "skills": [athletics, perception],
    "tools": [carpentersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 42
  },
  "Каменщик":
  {
    "skills": [athletics, investigation],
    "tools": [masonsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 25
  },
  "Архитектор":
  {
    "skills": [investigation, insight],
    "tools": [masonsTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 12
  },
  "Маляр":
  {
    "skills": [investigation, performance],
    "tools": [paintersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  },
  "Плотник":
  {
    "skills": [athletics, perception],
    "tools": [carpentersTools],
    "languages": [livingLanguagesExceptCommon],
    "chance": 9
  },
  "Кровельщик":
  {
    "skills": [athletics, perception],
    "tools": ["roofersTools"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 2
  },
  "Реставратор":
  {
    "skills": [insight, investigation],
    "tools": ["restorationTools"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 6
  }
};

// Медицинские профессии
let medicalProfessions = {
  "Врач":
  {
    "skills": [medicine, perception],
    "tools": ["Medical instruments"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 52
  },
  "Травник":
  {
    "skills": [nature, medicine],
    "tools": [herbalismKit],
    "languages": [livingLanguagesExceptCommon],
    "chance": 21
  },
  "Хирург":
  {
    "skills": [medicine, investigation],
    "tools": ["Healer's kit"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 14
  },
  "Акушер":
  {
    "skills": [medicine, insight],
    "tools": ["Medical instruments"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 8
  },
  "Корабельный врач":
  {
    "skills": [medicine, perception],
    "tools": ["Medical instruments"],
    "languages": [livingLanguagesExceptCommon],
    "chance": 5
  },
};

// +Религиозные профессии
let religiousProfessions = {
  "Священник":
  {
    "skills": [religion, persuasion],
    "tools": [calligraphersSupplies],
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "prerequisiteClasses": [cleric, paladin],
    "chance": 30
  },
  "Аколит":
  {
    "skills": [religion, insight],
    "tools": [],
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "prerequisiteClasses": [cleric, paladin],
    "chance": 20
  },
  "Монах":
  {
    "skills": [religion, acrobatics],
    "tools": [herbalismKit],
    "languages": [livingLanguagesExceptCommon, deadLanguages],
    "prerequisiteClasses": [cleric, paladin],
    "chance": 15
  },
  "Храмовый целитель":
  {
    "skills": [medicine, religion],
    "tools": ["Healer's kit"],
    "languages": [livingLanguagesExceptCommon],
    "prerequisiteClasses": [cleric, paladin],
    "chance": 15
  },
  "Певчий в храме":
  {
    "skills": [performance, religion],
    "tools": [musicalInstruments],
    "languages": [livingLanguagesExceptCommon],
    "chance": 9
  },
  "Церковный учитель":
  {
    "skills": [religion, persuasion],
    "tools": [allTools],
    "languages": [livingLanguagesExceptCommon],
    "prerequisiteClasses": [cleric, paladin],
    "chance": 7
  },
  "Церковный писарь":
  {
    "skills": [history, investigation],
    "tools": [calligraphersSupplies],
    "languages": [livingLanguagesExceptCommon],
    "chance": 4
  }
};

let backgrounds = {
  agrarianProfessions:
  {
    list: agrarianProfessions,
    chance: 30.00  // Большая часть населения Фаэруна занята в сельском хозяйстве (40), но уменьшим процент для авантюристов.
  },
  militaryProfessions:
  {
    list: militaryProfessions,
    chance: 20.00  // Частые конфликты делают военные профессии значимыми.
  },
  maritimeProfessions:
  {
    list: maritimeProfessions,
    chance: 6.00  // Побережье Мечей активно связано с морем, но не вся территория Фаэруна прибрежная.
  },
  artisanProfessions:
  {
    list: artisanProfessions,
    chance: 10.00  // Ремесленники играют важную роль в городах и селах.
  },
  urbanProfessions:
  {
    list: urbanProfessions,
    chance: 8.00  // Городские профессии распространены, но составляют меньшую часть населения.
  },
  criminalProfessions:
  {
    list: criminalProfessions,
    chance: 6.00  // Преступные элементы присутствуют, но не доминируют в обществе (3), но среди авантюристов их будет больше.
  },
  mercantileProfessions:
  {
    list: mercantileProfessions,
    chance: 5.00  // Торговля важна для экономики, особенно в городах и на торговых путях.
  },
  religiousProfessions:
  {
    list: religiousProfessions,
    chance: 5.00  // Религия играет значимую роль, и многие служат в храмах и святилищах.
  },
  medicalProfessions:
  {
    list: medicalProfessions,
    chance: 3.00  // Целители и лекари необходимы, но их число невелико (2), но среди авантюристов чуть больше.
  },
  constructionProfessions:
  {
    list: constructionProfessions,
    chance: 3.00  // Строители и каменщики востребованы, но их число ограничено.
  },
  academicProfessions:
  {
    list: academicProfessions,
    chance: 2.00  // Академики и учёные редки и сконцентрированы в определённых центрах знаний.
  },
  performingArtsProfessions:
  {
    list: performingArtsProfessions,
    chance: 2.00  // Артисты и музыканты встречаются, но составляют небольшую часть населения.
  }
};


// get random background

function getClassSkillsWithBackground(randomClass, characterClassesSkills, background) {
  // Берем скиллы из бекграунда
  let backgroundSkills = background.skills;

  // Получаем список скиллов для класса персонажа
  let skillsChoice = characterClassesSkills[randomClass.toLowerCase()];
  let skillsList = skillsChoice[0];               // список доступных скиллов класса
  let skillsNr = skillsChoice[1];                 // количество скиллов, которые нужно выбрать

  // Убираем из списка скиллов класса те, что уже выбраны через бекграунд
  let filteredSkillsList = removeBackgroundSkillsFromClassSkills(skillsList, backgroundSkills);

  // Выбираем случайные скиллы для класса из оставшегося списка
  let randomSkills = getRandomSkills(filteredSkillsList, skillsNr);

  return randomSkills;
}

function removeBackgroundSkillsFromClassSkills(classSkills, backgroundSkills) {
  // Клонируем список скиллов класса
  let clonedClassSkills = [...classSkills];

  // Удаляем скиллы, выбранные через бекграунд
  backgroundSkills.forEach(skill => {
    const index = clonedClassSkills.indexOf(skill);
    if (index > -1) {
      clonedClassSkills.splice(index, 1);
    }
  });

  return clonedClassSkills;
}

function getBackground(characterClass, knownLanguagesFromRace) {
  while (true) {
    // Шаг 1: выбираем случайную группу бекграундов с учетом шанса
    const backgroundGroups = Object.keys(backgrounds).map(key => ({
      name: key,
      list: backgrounds[key].list,
      chance: backgrounds[key].chance
    }));

    const selectedGroup = getRandomItemWithChance(backgroundGroups);

    // Шаг 2: выбираем случайную профессию внутри группы с учетом шанса
    const professions = Object.keys(selectedGroup.list).map(key => ({
      name: key,
      ...selectedGroup.list[key]
    }));

    const selectedProfession = getRandomItemWithChance(professions);

    // Шаг 3: проверяем prerequisiteClasses, если есть
    if (selectedProfession.prerequisiteClasses && selectedProfession.prerequisiteClasses.length > 0) {
      if (!selectedProfession.prerequisiteClasses.includes(characterClass)) {
        continue; // Класс не подходит, повторяем выбор
      }
    }

    // Шаг 4: выбираем элементы для skills, tools, languages
    let selectedSkills = selectRandomElements(selectedProfession.skills, 2);
    let selectedToolsAndLanguages = selectFromTwoArrays(
      selectedProfession.tools,
      selectedProfession.languages,
      knownLanguagesFromRace // Передаём известные языки для исключения
    );

    // Шаг 5: формируем итоговый блок и возвращаем его
    return {
      name: selectedProfession.name,
      skills: selectedSkills,
      tools: selectedToolsAndLanguages.tools,
      languages: selectedToolsAndLanguages.languages
    };
  }
}

function getRandomItemWithChance(items) {
  const totalChance = items.reduce((sum, item) => sum + item.chance, 0);
  const randomValue = Math.random() * totalChance;
  let cumulativeChance = 0;

  for (const item of items) {
    cumulativeChance += item.chance;
    if (randomValue <= cumulativeChance) {
      return item;
    }
  }
  return null; // на случай если что-то пойдет не так
}

function selectRandomElements(array, count, excludeList = []) {
  if (!array || array.length === 0) {
    return [];
  }

  const flattenedArray = array.flat();
  const uniqueElements = [...new Set(flattenedArray)];

  // Убираем исключённые элементы
  const availableElements = uniqueElements.filter(el => !excludeList.includes(el));

  // Если после исключения элементов ничего не осталось, возвращаем пустой массив
  if (availableElements.length === 0) {
    return [];
  }

  return shuffleArray(availableElements).slice(0, Math.min(count, availableElements.length));
}

function selectFromTwoArrays(array1, array2, excludeLanguages = []) {
  let selectedFromArray1 = [];
  let selectedFromArray2 = [];

  if (array1 && array1.length > 0 && array2 && array2.length > 0) {
    selectedFromArray1 = selectRandomElements(array1, 1);
    selectedFromArray2 = selectRandomElements(array2, 1, excludeLanguages);
  } else if (array1 && array1.length > 0) {
    selectedFromArray1 = selectRandomElements(array1, 2);
  } else if (array2 && array2.length > 0) {
    selectedFromArray2 = selectRandomElements(array2, 2, excludeLanguages);
  }

  return {
    tools: selectedFromArray1,
    languages: selectedFromArray2
  };
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
