// Random henchmen

function test_recalc_generateHenchmen()
{
  // Получаем активный лист
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var kcount = sheet.getRange('PC_Henchmen!A36').getValue();
  var muA = sheet.getRange('PC_Henchmen!O16').getValue();
  var muB = sheet.getRange('PC_Henchmen!O17').getValue();
  var sigmaA = sheet.getRange('PC_Henchmen!O18').getValue();
  var sigmaB = sheet.getRange('PC_Henchmen!O19').getValue();
  var degree = sheet.getRange('PC_Henchmen!L15').getValue();

  recalc_generateHenchmen(kcount, muA, muB, sigmaA, sigmaB, degree);
}

// Constans
let alignments = ["LG", "LN", "LE", "NG", "TN", "NE", "CG", "CN", "CE"];

function getRandomGender() {
  return Math.random() < 0.68 ? 'M' : 'F';
}

function formatLanguages(languages) {
  return languages
    .map(lang => {
      let result = `${lang.name} [${lang.alphabet}`;
      if (lang.speakers) {
        result += `; ${lang.speakers}`;
      }
      result += ']';
      return result;
    })
    .join(", ");
}


function recalc_generateHenchmen(maxCount, muA, muB, sigmaA, sigmaB, degree) {
  // Функция для броска кубиков 3d6
  // Переменная для хранения итогового текста
  var resultText = "";

  // Проход по уровням от 3 до 10
  for (var level = 1; level < 8; level++) {
    let mu = muA*Math.exp(muB*level**degree);
    let sigma = sigmaA*Math.exp(sigmaB*level**degree);

    var hench_count = recalc_countFromNormalDistribution(mu, sigma);

    if (hench_count > 0)
    {
      if (level !== "" && hench_count !== "") {
        // Минимум между BN и maxCount
        var minHenchCount = Math.min(hench_count, maxCount);

        // Текст для текущего уровня
        var levelText = "Level " + level + ":\n";

        // Генерируем строки для персонажей (персонаж1, персонаж2, и т.д.)
        for (var j = 1; j <= minHenchCount; j++) {
          var alignmentIndex = Math.floor(Math.random() * alignments.length);
          var randomAlignment = alignments[alignmentIndex];

          let race = selectRandomRaceAndSubrace(races);
          let raceString = "";
          // Проверка на совпадение расы и подрасы
          if (race.race === race.subrace || !race.subrace) {
            raceString = race.race; // Если совпадает, возвращаем только расу
          } else {
            raceString = `${race.subrace} ${race.race}`; // Если разные, возвращаем в формате "раса подраса"
          }

          let gender = getRandomGender();

          let fullNameObject = getName(race, gender);
          let fullName = fullNameObject.name;

          let knownLanguagesFromRace = getLanguages(race, fullNameObject);
          raceString += " (" + formatLanguages(knownLanguagesFromRace) + ")";

          var randomClass = getRandomClass(classes, classesChance);

          let abilityScores = getAbilityScores(randomClass, knownLanguagesFromRace);

          let background = getBackground(randomClass);
          let backgroundString = background.name + " ("
            + background.skills.join(", ") + ", "
            + background.tools.join(", ") + ", "
            + formatLanguages(background.languages) + ")";

          let chosenClassSkills = getClassSkillsWithBackground(randomClass, characterClassesSkills, background);
          let chosenClassSkillsString = chosenClassSkills.join(", ");

          // Формируем текст с атрибутами
          var attributes = "Str " + abilityScores["Strength"] + ", Dex " + abilityScores["Dexterity"] + ", Con " + abilityScores["Constitution"] +
                          ", Int " + abilityScores["Intelligence"] + ", Wis " + abilityScores["Wisdom"] + ", Cha " + abilityScores["Charisma"];

          // Добавляем строку для персонажа с атрибутами
          levelText += "#" + j + " - " + randomClass + " lvl " + level + "; " + gender + "; " + fullName + "; " + raceString + "; " + attributes + "; al " + randomAlignment
            + "; skills: " + chosenClassSkillsString
            + "; background: " + backgroundString + "\n";
        }

        // Добавляем результат для текущего уровня в итоговый текст
        resultText += levelText + "\n";
      }
    }
  }

  // Возвращаем итоговый текст
  return resultText;
}

function recalc_generateNormalRandom(mu, sigma) {
  return generateNormalRandom(mu, sigma);
}

// =IF(μ >= 1, FLOOR(μ + σ * NORMINV(RAND(), 0, 1)), IF(RAND() <= μ, 1, 0))
function recalc_countFromNormalDistribution(mu, sigma) {
    const rand = Math.random();
    if (mu >= 1) {
        return Math.floor(generateNormalRandom(mu, sigma));
        // return Math.floor(mu + sigma * norminv(rand));
    } else {
        return rand <= mu ? 1 : 0;
    }
}
