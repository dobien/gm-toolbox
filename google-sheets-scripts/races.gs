// TODO: расширить список имён

//races (reference: Waterdeep population)
let humanChance = 54.70;
let elfChance = 10.00;
let dwarfChance = 10.00;
let halflingChance = 3.00;
let halfElfChance = 6.00;
let gnomeChance = 2.00;
let halfOrcChance = 3.00;
let orcChance = 2.00;
let tieflingChance = 1.00;
let dragonbornChance = 1.00;
let goblinChance = 1.00;
let hobgoblinChance = 0.50;
let bugbearChance = 0.50;
let koboldChance = 0.50;
let lizardfolkChance = 0.50;
let yuanTiPurebloodChance = 0.10;
let goliathChance = 0.50;
let firbolgChance = 0.20;
let aasimarChance = 1.00;
let genasiChance = 1.00;
let kenkuChance = 0.50;
let tabaxiChance = 0.50;
let leoninChance = 0.10;
let satyrChance = 0.10;
let tritonChance = 0.10;
let githChance = 0.20;

let sunElfChance = 25.00;
let moonElfChance = 34.50;
let woodElfChance = 25.00;
let drowChance = 10.00;
let shadarKaiChance = 2.50;
let eladrinChance = 2.50;
let avarielChance = 0.50;

let halfSunElfChance = 10.00;
let halfMoonElfChance = 56.50;
let halfWoodElfChance = 25.00;
let halfDrowChance = 3.50;
let halfShadarKaiChance = 2.50;
let halfEladrinChance = 2.50;

let hillDwarfChance = 50.00;
let mountainDwarfChance = 40.00;
let duergarChance = 10.00;

let lightfootHalflingChance = 60.00;
let stoutHalflingChance = 30.00;
let ghostwiseHalflingChance = 10.00;

let calishiteChance = 20.00;
let chondathanChance = 20.00;
let damaranChance = 15.00;
let illuskanChance = 15.00;
let mulanChance = 10.00;
let rashemiChance = 7.50;
let tethyrianChance =7.50;
let shouChance = 2.50;
let koryoanChance = 2.50;

let protectorChance = 50.00;
let scourgeChance = 30.00;
let fallenChance = 20.00;

let airGenasiChance = 25.00;
let earthGenasiChance = 25.00;
let fireGenasiChance = 25.00;
let waterGenasiChance = 25.00;

let dragonbornSubraces = {
  "Black": {
    "chance": 10.00,
  },
  "Blue": {
    "chance": 10.00,
  },
  "Brass": {
    "chance": 10.00,
  },
  "Bronze": {
    "chance": 10.00,
  },
  "Copper": {
    "chance": 10.00,
  },
  "Gold": {
    "chance": 10.00,
  },
  "Green": {
    "chance": 10.00,
  },
  "Red": {
    "chance": 10.00,
  },
  "Silver": {
    "chance": 10.00,
  },
  "White": {
    "chance": 10.00,
  }
};

let races = {
  "Aasimar": {
    "chance": aasimarChance,
    "subraces": {
      "Protector": {
        "chance": protectorChance
      },
      "Scourge": {
        "chance": scourgeChance
      },
      "Fallen": {
        "chance": fallenChance
      }
    },
    "names": "Human",
    "languages": [Common, Celestial]
  },
  "Bugbear": {
    "chance": bugbearChance,
    "names": "Goblin",
    "languages": [Common, GoblinLanguage]
  },
  "Dragonborn": {
    "chance": dragonbornChance,
    "subraces": dragonbornSubraces,
    "names": {
      "M": ["Арджхан", "Баласар", "Бхараш", "Гхеш", "Донаар", "Крив", "Медраш", "Мехен", "Надарр", "Панджед", "Патрин", "Рхогар", "Тархун", "Торинн", "Хескан", "Шамаш", "Шединн"],
      "F": ["Акра", "Бири", "Даар", "Джхери", "Кава", "Коринн", "Мисханн", "Нала", "Перра", "Райанн", "Сора", "Сурина", "Тхава", "Уаджит", "Фаридэ", "Хавилар", "Харанн"]
    },
    "languages": [Common, Draconic]
  },
  "Dwarf": {
    "chance": dwarfChance,
    "subraces": {
      "Gold/Hill": {
        "chance": hillDwarfChance,
        "languages": [Common, Dwarvish]
      },
      "Shield/Mountain": {
        "chance": mountainDwarfChance,
        "languages": [Common, Dwarvish]
      },
      "Duergar": {
        "chance": duergarChance,
        "languages": [Common, Dwarvish, Undercommon]
      }
    },
    "names": {
      "M": ["Адрик", "Альберих", "Баренд", "Барундар", "Баэрн", "Броттор", "Бруенор", "Вондал", "Вулгар", "Вэйт", "Гардаин", "Даин", "Даррак", "Делг", "Джойин", "Дорн", "Килдрак", "Моргран", "Орсик", "Оскар", "Рангрим", "Рорин", "Рюрик", "Сторн", "Таклинн", "Торадин", "Тордек", "Торин", "Торик", "Травок", "Траубон", "Ульфгар", "Фаргрим", "Флинт", "Харбек", "Хондар", "Эберк", "Эйнкиль"],
      "F": ["Артин", "Бардрин", "Белмара", "Вистра", "Гуннлода", "Гурдис", "Дагнал", "Джойлин", "Диеза", "Дорна", "Илде", "Катра", "Киира", "Кристид", "Лифтраса", "Мардред", "Одхильд", "Рисвин", "Самбрил", "Саннл", "Тейс", "Торбера", "Торгга", "Умиль", "Фалкрунн", "Финеллен", "Хельджа", "Хлин", "Эльдет", "Эмбер"],
      "S": ["Балдерк", "Блейтбайт", "Боевой Молот", "Гордривер", "Горунн", "Данкил", "Железный Кулак", "Каменный Щит", "Крауншилд", "Крепкая Наковальня", "Ледяная Борода", "Лодерр", "Лютгер", "Огненная Кузня", "Рамнахейм", "Рог", "Скуллдарк", "Стракелн", "Торунн", "Унгарт", "Холдерхек"]
    },
    "languages": [Common, Dwarvish]
  },
  "Elf": {
    "chance": elfChance,
    "subraces": {
      "Avariel": {
        "chance": avarielChance,
        "names": "Moon",
        "languages": [Common, Elvish]
      },
      "Drow": {
        "chance": drowChance,
        "names": {
          "M": ["Алак", "Дриззт", "Ильмрин", "Меринид", "Фарон", "Риззон", "Тебрин", "Закнафейн"],
          "F": ["Акордия", "Чалитра", "Эклавдра", "Джаэлрина", "Недилен", "Квилуэ", "СиНафай, Влондрил"],
          "S": ["Абафейр", "Колоара", "Гланнат", "Иллистин", "Фарн", "Сиреар", "Вринн", "Ксилтин"]
        },
        "languages": [Common, Elvish, Undercommon]
      },
      "Eladrin": {
        "chance": eladrinChance,
        "names": "Moon",
        "languages": [Common, Elvish]
      },
      "Moon": {
        "chance": moonElfChance,
        "names": {
          "M": ["Адран", "Аравилар", "Арамиль", "Араннис", "Ауст", "Аэлар", "Бейро", "Берриан", "Варис", "Галинндан", "Ивеллиос", "Иммераль", "Каррик", "Куарион", "Лаусиан", "Миндартис", "Морн", "Ним", "Орлпар", "Паэлиас", "Перен", "Респен", "Риардон", "Ристель", "Ролен", "Саэвел", "Совелисс", "Тамиорн", "Таривол", "Терен", "Тэген", "Фейлар", "Хадарай", "Химо", "Хэйян", "Эниалис", "Эрдан", "Эреван"],
          "F": ["Адрие", "Альтеа", "Амра", "Анастрианна", "Андрасте", "Антинуа", "Бетринна", "Бирель", "Вадания", "Валанте", "Вестеле", "Джаумрит", "Джеленетт", "Друсилиа", "Имизаэль", "Йелениа", "Каэлинн", "Квамара", "Квеленна", "Квиласи", "Кейлет", "Ксанафия", "Лешанна", "Лиа", "Миали", "Мэриэль", "Найвара", "Сариэль", "Силакви", "Талиндра", "Теирастра", "Тиа", "Фелосиаль", "Хакатра", "Шава", "Шанайра", "Энна", "Ястра"],
          "S": ["Амакиир (Сверкающий Цветок)", "Амалит", "Амастасия (Звёздный Цветок)", "Брэген", "Галанодель (Лунный Шёпот)", "Ивнингфолл", "Ильфелкиир (Сверкающий Бутон)", "Калаудра", "Ксилосент (Золотой Лепесток)", "Лаэлитар", "Лиадон (Серебряный Лист)", "Мундаун", "Найло (Ночной Бриз)", "Сианодель (Лунный Ручей)", "Тарнрут", "Холимион (Алмазная Роса)"]
        },
        "languages": [Common, Elvish]
      },
      "Shadar-kai": {
        "chance": shadarKaiChance,
        "names": "Moon",
        "languages": [Common, Elvish]
      },
      "Sun": {
        "chance": sunElfChance,
        "names": "Moon",
        "languages": [Common, Elvish]
      },
      "Wood": {
        "chance": woodElfChance,
        "names": "Moon",
        "languages": [Common, Elvish]
      }
    },
    "languages": [Common, Elvish]
  },
  "Firbolg": {
    "chance": firbolgChance,
    "names": "Elf",
    "languages": [Common, Elvish, GiantLanguage]
  },
  "Genasi": {
    "chance": genasiChance,
    "subraces": {
      "Air": {
        "chance": airGenasiChance
      },
      "Earth": {
        "chance": earthGenasiChance
      },
      "Fire": {
        "chance": fireGenasiChance
      },
      "Water": {
        "chance": waterGenasiChance
      }
    },
    "names": "Human",
    "languages": [Common, Primordial]
  },
  "Gith": {
    "chance": githChance,
    "names": {
      "M": ["Al'chaia", "Dak'kon", "Lae'zel", "Vhostym", "Yrlakka"],
      "F": ["Al'chaia", "Dak'kon", "Lae'zel", "Vhostym", "Yrlakka"]
    },
    "languages": [Common, GithLanguage]
  },
  "Gnome": {
    "chance": gnomeChance,
    "subraces": {
      "Forest": {
        "chance": 50.00
      },
      "Rock": {
        "chance": 50.00
      }
    },
    "names": {
      "M": ["Алвин", "Алстон", "Боддинок", "Брок", "Бургелл", "Бюргел", "Варрин", "Вренн", "Гербо", "Гимбл", "Глим", "Джебеддо", "Димбл", "Дорган", "Зук", "Келлен", "Колмарр", "Намфудл", "Орламм", "Оррин", "Ронделл", "Рундар", "Сибо", "Синдри", "Столиг", "Фалринн", "Фонкин", "Фрюг", "Халбринн", "Элдон", "Эрки"],
      "F": ["Бимпноттин", "Брина", "Вейуокет", "Джари", "Донелла", "Дувамил", "Занна", "Зелазадда", "Ийисс", "Каландра", "Карамип", "Карлин", "Лилли", "Лисса", "Лорилла", "Лупмоттин", "Маднаб", "Мери", "Нати", "Никс", "Нисса", "Ода", "Орла", "Ройвин", "Тана", "Шамил", "Эливик", "Элиджобелл", "Элла", "Эрисс"],
      "S": ["Берен", "Блэкрок", "Блимс", "Гаррик", "Грейторм", "Даергел", "Мёрниг", "Накл", "Нингел", "Раулнор", "Ривенстоун", "Тавартарр", "Тимберс", "Турен", "Уайтхорн", "Уварикк", "Фолькор", "Шеппен"]
    },
    "languages": [Common, GnomishLanguage]
  },
  "Goblin": {
    "chance": goblinChance,
    "names": {
      "M": ["Аругет", "Вании", "Ванон", "Вуударадж", "Гудруун", "Даавн", "Дабрак", "Дагии", "Джазаал", "Древдуул", "Дуулан", "Каллаад", "Кракуул", "Кроотад", "Мазаан", "Мунта", "Насаар", "Ракари", "Рексиит", "Тарик", "Тарууж", "Туун", "Феник", "Четин", "Халуун", "Харуук", "Аззинакс", "Баболакс", "Бликсаникс", "Вазозав", "Вексин", "Даззаз", "Зиззикс", "Калузакс", "Криксизикс", "Лизакса", "Миззикс", "Мизнар", "Никсиспикс", "Паксизаз", "Равиксиз", "Стиксил", "Сунникс", "Тозинокс", "Уксивози", "Эстрикс", "Финизикс", "Юзба"],
      "F": ["Ааспар", "Агуус", "Белалуур", "Вали", "Вуун", "Грааль", "Гадуул", "Денаал", "Джелуум", "Драраар", "Дууша", "Келаал", "Мулаан", "Насри", "Разу", "Ралин", "Рексин", "Сенен", "Таджин", "Тюнер", "Хашак", "Шедруор", "Эхаас", "Элуун"]
    },
    "languages": [Common, GoblinLanguage]
  },
  "Goliath": {
    "chance": goliathChance,
    "names": {
      "M": ["Аукан", "Ваунеа", "Вимак", "Гае-Ал", "Иглат", "Иликан", "Кеотхи", "Куори", "Ло-Каг", "Мавейт", "Маннео", "Налла", "Орило", "Пааву", "Петани", "Талай", "Тхотам", "Утхал"]
    },
    "languages": [Common, GiantLanguage]
  },
  "Half-Elf": {
    "chance": halfElfChance,
    "subraces": {
      "Drow": {
        "chance": halfDrowChance
      },
      "Eladrin": {
        "chance": halfEladrinChance
      },
      "Moon": {
        "chance": halfMoonElfChance
      },
      "Shadar-kai": {
        "chance": halfShadarKaiChance
      },
      "Sun": {
        "chance": halfSunElfChance
      },
      "Wood": {
        "chance": halfWoodElfChance
      }
    },
    "names": ["Human", "Elf"],
    "languages": [Common, Elvish, livingLanguagesExceptCommon]
  },
  "Half-Orc": {
    "chance": halfOrcChance,
    "names": {
      "M": ["Гел", "Денч", "Имш", "Кет", "Краск", "Муррен", "Ронт", "Токк", "Фенг", "Хенк", "Холг", "Шамп"],
      "F": ["Багги", "Вола", "Волен", "Евельда", "Кансиф", "Мев", "Нига", "Овак", "Оунка", "Сута", "Шаута", "Эмен", "Энгонг"]
    },
    "languages": [Common, OrcLanguage]
  },
  "Halfling": {
    "chance": halflingChance,
    "subraces": {
      "Ghostwise": {
        "chance": ghostwiseHalflingChance
      },
      "Lightfoot": {
        "chance": lightfootHalflingChance
      },
      "Stout": {
        "chance": stoutHalflingChance
      }
    },
    "names": {
      "M": ["Альтон", "Андер", "Блазанар", "Вилимак", "Гаррет", "Далабрак", "Кейд", "Коррин", "Коркаури", "Лайл", "Линдал", "Майло", "Меррик", "Омберт", "Осборн", "Перрин", "Рид", "Роберк", "Роско", "Тирраури", "Уэллби", "Финнан", "Халандар", "Элдон", "Эррих"],
      "F": ["Алонирра", "Бри", "Вани", "Венинда", "Верна", "Делдира", "Джиллиан", "Калатра", "Китри", "Кора", "Кэлли", "Лавиния", "Лидда", "Мелинден", "Мерла", "Недда", "Олпара", "Паэла", "Портия", "Росинден", "Серафина", "Тара", "Трим", "Шаэна", "Эндри", "Юфемия"],
      "S": ["Аумбль", "Брамблфут", "Вверхтормашкин", "Высокохолм", "Галькоброс", "Дардаргон", "Добробочка", "Зеленофляг", "Кустосбор", "Лугодуг", "Мерримар", "Подветкин", "Репейник", "Старнхап", "Хардингдейл", "Чайнолист"]
    },
    "languages": [Common, HalflingLanguage]
  },
  "Hobgoblin": {
    "chance": hobgoblinChance,
    "names": "Goblin",
    "languages": [Common, GoblinLanguage]
  },
  "Human": {
    "chance": humanChance,
    "subraces": {
      "Calishite": {
        "chance": calishiteChance,
        "names": {
          "M": ["Асеир", "Бардеид", "Зашеир", "Кхемед", "Мехмен", "Судейман", "Хасеид"],
		  "F": ["Атала", "Джасмаль", "Зашеида", "Мейлиль", "Сейдиль", "Сейпора", "Хама", "Яшеира"],
		  "S": ["Баша", "Джассан", "Думеин", "Кхалид", "Мостана", "Пашар", "Рейн"]
        },
        "languages": [Common, Alzhedo]
      },
      "Chondathan": {
        "chance": chondathanChance,
        "names": {
		  "M": ["Горстаг", "Грим", "Дарвин", "Дорн", "Маларк", "Морн", "Рэндал", "Стедд", "Хельм", "Эвендур"],
		  "F": ["Арвин", "Джессаиль", "Керри", "Лурин", "Мири", "Рован", "Тесселе", "Шандри", "Эсвель"],
		  "S": ["Бакмэн", "Грэйкасл", "Дандрэгон", "Толстаг", "Эвенвуд", "Эмблкроун"]
        },
        "languages": [Common, Chondathan]
      },
      "Damaran": {
        "chance": damaranChance,
        "names": {
		  "M": ["Айвор", "Бор", "Глэр", "Григор", "Иган", "Козеф", "Миваль", "Орел", "Павел", "Сергор", "Фодель"],
		  "F": ["Алетра", "Зора", "Кара", "Катернин", "Мара", "Натали", "Ольма", "Тана"],
		  "S": ["Берск", "Дотск", "Куленов", "Марск", "Немецк", "Стараг", "Чернин", "Шемов"]
        },
        "languages": [Common, Damaran]
      },
      "Illuskan": {
        "chance": illuskanChance,
        "names": {
		  "M": ["Блас", "Бран", "Гет", "Ландер", "Лют", "Малсер", "Стор", "Таман", "Урт", "Фрат", "Эндер"],
		  "F": ["Амафрея", "Бетха", "Вестра", "Кетра", "Мара", "Ольга", "Силифрей", "Цефрея"],
		  "S": ["Брайтвуд", "Виндривер", "Лакмэн", "Хелдер", "Хорнрейвен", "Штормвинд"]
        },
        "languages": [Common, Illuskan]
      },
      "Koryoan": {
        "chance": koryoanChance,
        "names": "Shou",
        "languages": [Common, KoryoLanguage]
      },
      "Mulan": {
        "chance": mulanChance,
        "names": {
		  "M": ["Аот", "Барерис", "Кетот", "Мумед", "Рамас", "Со-Кехур", "Тхазар-Де", "Урхур", "ЭхпутКи"],
		  "F": ["Аризима", "Золис", "Мурити", "Нефис", "Нулара", "Сефрис", "Тола", "Умара", "Чатхи"],
		  "S": ["Анкхалаб", "Анскульд", "Натандем", "Серпет", "Уутракт", "Фезим", "Хахпет"]
        },
        "languages": [Common, Mulani]
      },
      "Rashemi": {
        "chance": rashemiChance,
        "names": {
		  "M": ["Боривик", "Владислак", "Джандар", "Канитар", "Мадислак", "Ральмевик", "Фаургар", "Шаумар"],
		  "F": ["Имзель", "Иммит", "Наварра", "Таммит", "Файварра", "Хульмарра", "Шеварра", "Юльдра"],
		  "S": ["Дайрнина", "Илтазяра", "Мурнитара", "Стаянога", "Улмокина", "Чергоба"]
        },
        "languages": [Common, Rashemi]
      },
      "Shou": {
        "chance": shouChance,
        "names": {
		  "M": ["Ан", "Вэнь", "Лонг", "Лянь", "Менг", "Он", "Фай", "Цзюн", "Цзянь", "Чен", "Чи", "Шань", "Шуй"],
		  "F": ["Бай", "Ксяо", "Лей", "Мей", "Тай", "Цзя", "Чао", "Шуй"],
		  "S": ["Вань", "Као", "Кунг", "Лао", "Линг", "Мей", "Пинь", "Сум", "Тань", "Хуан", "Чиень", "Шин"]
        },
        "languages": [Common, Shou]
      },
      "Tethyrian": {
        "chance": tethyrianChance,
        "names": "Chondathan",
        "languages": [Common, Chondathan]
      }
    }
  },
  "Kenku": {
    "chance": kenkuChance,
    "names": {
		"M": ["Разбиватель", "Лязгун", "Разрезатель", "Грохотун", "Крысиный Скрежет", "Свистун", "Мышатник", "Рычун"],
		"F": ["Свистун", "Мышатник", "Рычун"]
    },
    "languages": [Common, Primordial]
  },
  "Kobold": {
    "chance": koboldChance,
    "names": [],
    "languages": [Common, Draconic]
  },
  "Leonin": {
    "chance": leoninChance,
    "names": {
      "M": ["Апто", "Ат", "Барагон", "Брыг", "Горий", "Грекс", "Земн", "Зиор", "Орий", "Пиксатор", "Тей", "Эрем"],
      "F": ["Алета", "Атагона", "Грагонда", "Демна", "Доксия", "Зиора", "Иадма", "Койла", "Орамна", "Сеза", "Эката", "Эриз"]
    },
    "languages": [Common, LeoninLanguage]
  },
  "Lizardfolk": {
    "chance": lizardfolkChance,
    "names": [],
    "languages": [Common, Draconic]
  },
  "Orc": {
    "chance": orcChance,
    "names": {
      "M": ["Абзуг", "Бажок", "Беск", "Готог", "Груток", "Джахрук", "Дурт", "Кеск", "Лортар", "Мобад", "Мугруб", "Орруск", "Рук", "Рхог", "Тараг", "Тог", "Угурт", "Урзул", "Фанг", "Харл", "Шамок", "Шугог"],
      "F": ["Багги", "Бетарра", "Варра", "Вола", "Волен", "Дуваега", "Имен", "Йескарра", "Кансиф", "Креске", "Муай", "Неске", "Ниига", "Овак", "Орваега", "Оунка", "Сута", "Шаута", "Эдарреске", "Энгонг"],
      "S": ["Думник", "Хортор", "Ламмар", "Сормужик", "Турнчерпал", "Улькруннар", "Зоргар"]
    },
    "languages": [Common, OrcLanguage]
  },
  "Satyr": {
    "chance": satyrChance,
    "names": [],
    "languages": [Common, Sylvan]
  },
  "Tabaxi": {
    "chance": tabaxiChance,
    "names": [],
    "languages": [Common, livingLanguagesExceptCommon]
  },
  "Tiefling": {
    "chance": tieflingChance,
    "names": {
      "M": ["Акменос", "Амнон", "Баракас", "Дамакос", "Йадос", "Кайрон", "Люцис", "Мелех", "Мордай", "Мортос", "Пелайос", "Скамос", "Терай", "Экемон"],
      "F": ["Акта", "Анакис", "Брисеис", "Дамая", "Каллиста", "Криелла", "Лерисса", "Макария", "Немея", "Орианна", "Риета", "Фелая", "Эа"],
      "S": ["Амезис", "Барбатос", "Дракос", "Инфернус", "Мефисто", "Фирнас", "Хекатон", "Харгрейв", "Эбони"]
    },
    "languages": [Common, Infernal]
  },
  "Triton": {
    "chance": tritonChance,
    "names": {
      "M": ["Водос", "Делнис", "Джимас", "Зунис", "Керос", "Корус", "Молос", "Налос"],
      "F": ["Белтин", "Вуолин", "Влэрин", "Дьютин", "Отанин", "Филорин", "Шелрин", "Эрин"]
    },
    "languages": [Common, Primordial]
  },
  "Yuan-ti Pureblood": {
    "chance": yuanTiPurebloodChance,
    "names": [],
    "languages": [Common, Abyssal, Draconic]
  }
};


function selectRandomRaceAndSubrace(racesDict) {
  // Получаем список рас
  let raceNames = Object.keys(racesDict);

  // Вычисляем общую сумму шансов рас
  let totalRaceChance = 0;
  for (let race of raceNames) {
    totalRaceChance += racesDict[race].chance;
  }

  // Генерируем случайное число для выбора расы
  let randomRaceChance = Math.random() * totalRaceChance;

  // Выбираем расу
  let accumulatedRaceChance = 0;
  let selectedRace;
  for (let race of raceNames) {
    accumulatedRaceChance += racesDict[race].chance;
    if (randomRaceChance <= accumulatedRaceChance) {
      selectedRace = race;
      break;
    }
  }

  // Проверяем наличие подрас
  let subracesDict = racesDict[selectedRace].subraces;
  let selectedSubrace;

  if (subracesDict && Object.keys(subracesDict).length > 0) {
    // Есть подрасы, выбираем подрасу
    let subraceNames = Object.keys(subracesDict);

    // Вычисляем общую сумму шансов подрас
    let totalSubraceChance = 0;
    for (let subrace of subraceNames) {
      totalSubraceChance += subracesDict[subrace].chance;
    }

    // Генерируем случайное число для выбора подрасы
    let randomSubraceChance = Math.random() * totalSubraceChance;

    // Выбираем подрасу
    let accumulatedSubraceChance = 0;
    for (let subrace of subraceNames) {
      accumulatedSubraceChance += subracesDict[subrace].chance;
      if (randomSubraceChance <= accumulatedSubraceChance) {
        selectedSubrace = subrace;
        break;
      }
    }
  } else {
    // Подрас нет, подраса совпадает с расой
    selectedSubrace = null;
  }

  // Формируем результат
  if (selectedSubrace) {
    return {
      race: selectedRace,
      subrace: selectedSubrace
    };
  } else {
    return {
      race: selectedRace
    };
  }
}


// Функция для получения имени на основе расы, подрасы и пола
function getName(raceObj, gender) {
  const genderKey = gender.toUpperCase(); // 'M' или 'F'
  let raceKey = raceObj.race;
  let subraceKey = raceObj.subrace;

  // Функция для разрешения имен
  function resolveNames(racesDict, raceKey, subraceKey) {
    let nameData = null;
    let keysToProcess = [{ raceKey, subraceKey }];
    let nameSource = null; // Переменная для хранения последнего источника имен

    while (keysToProcess.length > 0) {
      let { raceKey, subraceKey } = keysToProcess.shift();
      let raceData = racesDict[raceKey];

      if (!raceData) continue;

      let names = null;

      // Проверяем наличие подрасы и имен в подрасе
      let raceRef = false;
      if (
        subraceKey &&
        raceData.subraces &&
        raceData.subraces[subraceKey] &&
        raceData.subraces[subraceKey].names
      ) {
        // указана подраса, она действительно есть в расе, и в ней есть имена
        names = raceData.subraces[subraceKey].names;
      } else { // Например, кейс, когда перепрыгнули на расу без указания подрасы, а на уровне расы имён нет
        // подрасы в json должны ссылаться только на другие подрасы той же расы, иначе скрипт надо дорабатывать, т.к. здесь получим бесконечный цикл
        // если в расе есть подрасы, то нужно выбрать произвольную внутри и её имена
        if (raceData.subraces && Object.keys(raceData.subraces).length > 0) {
          let subraceKeys = Object.keys(raceData.subraces);
          // Выбираем случайную подрасу
          let randomSubraceKey = subraceKeys[Math.floor(Math.random() * subraceKeys.length)];
          let subraceData = raceData.subraces[randomSubraceKey];
          // Проверяем, есть ли имена в этой подрасе
          if (subraceData.names) {
            names = subraceData.names;
            subraceKey = randomSubraceKey; // обновляем subraceKey
          } else {
            // Имена в подрасе отсутствуют, используем имена на уровне расы
            names = raceData.names;
            raceRef = true;
          }
        }
        else {
          // иначе - имена на уровне расы
          names = raceData.names;
          raceRef = true;
        }
      }

      if (!names) continue;

      let finalData = null;

      if (typeof names === 'string' || Array.isArray(names)) {
        // Если names - строка или массив ссылок
        let reference;

        if (typeof names === 'string') {
          reference = names;
        } else {
          // Если это массив ссылок, выбираем случайный элемент
          let randomIndex = Math.floor(Math.random() * names.length);
          reference = names[randomIndex];
        }

        if (raceRef) {
          // Ссылка на другую расу
          keysToProcess.push({ raceKey: reference, subraceKey: null });
        } else {
          // Ссылка на другую подрасу
          keysToProcess.push({ raceKey: raceKey, subraceKey: reference });
        }
        continue;
      } else if (typeof names === 'object') {
        // Если имена - объект
        const keysToCheck = ['M', 'F', 'S'];

        if (keysToCheck.some(key => names.hasOwnProperty(key))) {
          // Имена непосредственно содержатся в объекте
          finalData = names;
          // Запоминаем источник имен
          nameSource = { raceKey, subraceKey };
        }
      }

      if (!finalData) continue;

      // Объединяем данные имен
      if (!nameData) {
        nameData = { M: [], F: [], S: [] };
      }
      ['M', 'F', 'S'].forEach(gender => {
        if (finalData[gender]) {
          nameData[gender] = nameData[gender].concat(finalData[gender]);
        }
      });
    }

    return { nameData, nameSource };
  }

  // Получаем данные имен
  let { nameData, nameSource } = resolveNames(races, raceKey, subraceKey);

  // Если имена не найдены, возвращаем пустую строку
  if (!nameData) return '';

  // Получаем список имен в зависимости от пола
  let firstNameList = nameData[genderKey];
  if (!firstNameList || firstNameList.length === 0) {
    // Используем имена другого пола, если своих нет
    firstNameList = genderKey === 'M' ? nameData['F'] : nameData['M'];
  }

  // Если имен нет вообще, возвращаем пустую строку
  if (!firstNameList || firstNameList.length === 0) return '';

  // Получаем список фамилий
  let surnameList = nameData['S'];

  // Выбираем случайное имя и фамилию
  let firstName = firstNameList[Math.floor(Math.random() * firstNameList.length)];
  let surname = '';
  if (surnameList && surnameList.length > 0) {
    surname = surnameList[Math.floor(Math.random() * surnameList.length)];
  }

  // Возвращаем полное имя, а также расу и подрасу, которой принадлежит данное имя
  return {
    name: `${firstName} ${surname}`.trim(),
    race: nameSource.raceKey,
    subrace: nameSource.subraceKey
  };
}


// Функция для получения списка языков на основе расы и подрасы
function getLanguages(raceObj, fullNameObj) {
  let raceKey = raceObj.race;
  let subraceKey = raceObj.subrace;

  let languages = [];

  // Вспомогательная функция для получения всех языков для заданной расы и подрасы
  function getAllLanguagesForRace(raceKey, subraceKey) {
    let raceData = races[raceKey];
    if (!raceData) return [];

    let languagesList = [];

    // Проверяем наличие подрасы и языков в подрасе
    if (
      subraceKey &&
      raceData.subraces &&
      raceData.subraces[subraceKey] &&
      raceData.subraces[subraceKey].languages
    ) {
      languagesList = raceData.subraces[subraceKey].languages;
    } else {
      // Используем языки на уровне расы
      languagesList = raceData.languages;
    }

    if (!languagesList) return [];

    return languagesList;
  }

  // Получаем список языков для текущей расы и подрасы
  let languagesList = getAllLanguagesForRace(raceKey, subraceKey);

  // Обрабатываем каждый элемент в languagesList
  languagesList.forEach(languageItem => {
    if (Array.isArray(languageItem)) {
      // Если элемент - массив, применяем особую обработку
      if (fullNameObj.race === raceKey && fullNameObj.subrace === subraceKey) {
        // Расы и подрасы совпадают, выбираем случайный язык из массива
        let randomIndex = Math.floor(Math.random() * languageItem.length);
        let selectedLanguage = languageItem[randomIndex];

        // Добавляем язык в итоговый список
        languages.push(selectedLanguage);
      } else {
        // дальше дикий костыль
        // Расы и/или подрасы различаются, берем языки из fullNameObj
        let fullNameLanguages = getAllLanguagesForRace(fullNameObj.race, fullNameObj.subrace);
        // Разворачиваем список языков
        let flatLanguages = [];
        fullNameLanguages.forEach(languageItem => {
          if (Array.isArray(languageItem)) {
            // Если элемент - массив, добавляем все его элементы
            flatLanguages = flatLanguages.concat(languageItem);
          } else {
            flatLanguages.push(languageItem);
          }
        });
        fullNameLanguages = flatLanguages;

        // Удаляем уже выбранные языки
        let availableLanguages = fullNameLanguages.filter(lang => !languages.includes(lang));

        if (availableLanguages.length > 0) {
          // Выбираем случайный язык из доступных
          let randomIndex = Math.floor(Math.random() * availableLanguages.length);
          let selectedLanguage = availableLanguages[randomIndex];

          // Добавляем язык в итоговый список
          languages.push(selectedLanguage);
        }
        // Если нет доступных языков, ничего не делаем
      }
    } else {
      // Если язык - простой элемент, добавляем его
      languages.push(languageItem);
    }
  });

  // Возвращаем уникальный список языков
  return [...new Set(languages)];
}

