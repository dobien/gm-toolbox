// classes names
let bard = "Bard";
let barbarian = "Barbarian";
let fighter = "Fighter";
let wizard = "Wizard";
let druid = "Druid";
let cleric = "Cleric";
let warlock = "Warlock";
let monk = "Monk";
let paladin = "Paladin";
let rogue = "Rogue";
let ranger = "Ranger";
let sorcerer = "Sorcerer";

let classes = [bard, barbarian, fighter, wizard, druid, cleric, warlock,
  monk, paladin, rogue, ranger, sorcerer];

// classes chances
let bardChance = 2;
let barbarianChance = 8;
let fighterChance = 26;
let wizardChance = 7;
let druidChance = 4;
let clericChance = 18;
let warlockChance = 2;
let monkChance = 2;
let paladinChance = 6;
let rogueChance = 17;
let rangerChance = 6;
let sorcererChance = 2;

let classesChance = [
  bardChance,
  barbarianChance,
  fighterChance,
  wizardChance,
  druidChance,
  clericChance,
  warlockChance,
  monkChance,
  paladinChance,
  rogueChance,
  rangerChance,
  sorcererChance
];


function getRandomClass(classes, classesChance)
{
  // Вычисляем сумму всех шансов
  let totalChance = classesChance.reduce((sum, chance) => sum + chance, 0);

  // Генерируем случайное число от 0 до totalChance
  let randomChance = Math.random() * totalChance;

  // Определяем индекс класса на основе случайного числа и шансов
  let cumulativeChance = 0;
  let classIndex;

  for (let i = 0; i < classesChance.length; i++) {
    cumulativeChance += classesChance[i];
    if (randomChance < cumulativeChance) {
      classIndex = i;
      break;
    }
  }

  // Получаем выбранный класс
  let selectedClass = classes[classIndex];

  return selectedClass;
}