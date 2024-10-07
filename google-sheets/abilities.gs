// Приоритеты характеристик для каждого класса
const classStatPriority = {
  Barbarian: ["Strength", "Constitution", "Dexterity", "Wisdom", "Charisma", "Intelligence"],
  Bard: ["Charisma", "Dexterity", "Intelligence", "Constitution", "Wisdom", "Strength"],
  Cleric: ["Wisdom", "Strength", "Dexterity", "Constitution", "Charisma", "Intelligence"], // Приоритет будет скорректирован в особых случаях
  Druid: ["Wisdom", "Dexterity", "Constitution", "Intelligence", "Charisma", "Strength"],
  Fighter: ["Strength", "Constitution", "Dexterity", "Wisdom", "Charisma", "Intelligence"], // Приоритет будет скорректирован в особых случаях
  Monk: ["Wisdom", "Dexterity", "Constitution", "Charisma", "Intelligence", "Strength"],
  Paladin: ["Strength", "Constitution", "Charisma", "Wisdom", "Dexterity", "Intelligence"],
  Ranger: ["Dexterity", "Wisdom", "Constitution", "Strength", "Charisma", "Intelligence"],
  Rogue: ["Dexterity", "Charisma", "Intelligence", "Constitution", "Wisdom", "Strength"],
  Sorcerer: ["Charisma", "Constitution", "Dexterity", "Wisdom", "Intelligence", "Strength"],
  Warlock: ["Charisma", "Dexterity", "Constitution", "Wisdom", "Intelligence", "Strength"],
  Wizard: ["Intelligence", "Wisdom", "Constitution", "Dexterity", "Charisma", "Strength"],
};


// Функция для броска 3d6
function roll3d6() {
  return Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
}

// Функция для расчета модификатора атрибута
function getModifier(score) {
  return Math.floor((score - 10) / 2);
}

// Функция для получения суммы модификаторов всех атрибутов
function calculateTotalModifiers(abilityScores) {
  return abilityScores.reduce((total, score) => total + getModifier(score), 0);
}

function getAbilityScores(characterClass) {
  let rolledStats = [];
  let totalModifiers = 0;
  // Продолжаем перебрасывать, пока сумма модификаторов не будет >= 0
  do {
    // Броски для атрибутов
    rolledStats = [
      roll3d6(),
      roll3d6(),
      roll3d6(),
      roll3d6(),
      roll3d6(),
      roll3d6(),
    ];

    // Считаем сумму модификаторов
    totalModifiers = calculateTotalModifiers(rolledStats);
  } while (totalModifiers < 0); // Если сумма модификаторов меньше 0, перебрасываем

  // Сортируем броски по убыванию
  rolledStats.sort((a, b) => b - a);

  // Получаем приоритеты для выбранного класса //и клонируем
  let priority = classStatPriority[characterClass].slice();

  // Создаем объект для атрибутов
  let characterStats = {};

  // Копируем массив бросков
  let stats = rolledStats.slice();

  // Блок обработки особых случаев
  if (characterClass === "Cleric" || characterClass === "Fighter") {
    // Сила и Ловкость имеют одинаковый приоритет, но сила в массивах выше по допущению больше
    let strIndex = priority.indexOf("Strength");
    let dexIndex = priority.indexOf("Dexterity");

    // Если позиции разные, решаем случайно
    if (strIndex !== dexIndex) {
      // Случайно решаем, кому достанется более высокий стат
      if (Math.random() < 0.5) {
        // Сила получает более высокий приоритет
        priority[strIndex] = "Strength";
        priority[dexIndex] = "Dexterity";
      } else {
        // Ловкость получает более высокий приоритет
        priority[strIndex] = "Dexterity";
        priority[dexIndex] = "Strength";
      }
    }
  }

  // Распределяем характеристики
  for (let i = 0; i < priority.length; i++) {
    characterStats[priority[i]] = stats[i];
  }

  return characterStats;
}