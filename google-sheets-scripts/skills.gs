// skills
let acrobatics = "Acrobatics";
let animalHandling = "Animal Handling";
let arcana = "Arcana";
let athletics = "Athletics";
let deception = "Deception";
let history = "History";
let insight = "Insight";
let intimidation = "Intimidation";
let investigation = "Investigation";
let medicine = "Medicine";
let nature = "Nature";
let perception = "Perception";
let performance = "Performance";
let persuasion = "Persuasion";
let religion = "Religion";
let sleightOfHand = "Sleight of Hand";
let stealth = "Stealth";
let survival = "Survival";

let all_skills = [acrobatics, animalHandling, arcana, athletics, deception,
  history, insight, intimidation, investigation, medicine,
  nature, perception, performance, persuasion, religion,
  sleightOfHand, stealth, survival];

let bard_skills = all_skills;
let bard_skills_nr = 3;
let barbarian_skills = [athletics, perception, survival, intimidation, nature, animalHandling];
let barbarian_skills_nr = 2;
let fighter_skills = [acrobatics, athletics, perception, survival, intimidation, history, insight, animalHandling];
let fighter_skills_nr = 2;
let wizard_skills = [history, arcana, medicine, insight, investigation, religion];
let wizard_skills_nr = 2;
let druid_skills = [perception, survival, arcana, medicine, animalHandling, nature, insight, religion];
let druid_skills_nr = 2;
let cleric_skills = [history, medicine, insight, religion, persuasion];
let cleric_skills_nr = 2;
let warlock_skills = [intimidation, history, arcana, deception, nature, investigation, religion];
let warlock_skills_nr = 2;
let monk_skills = [acrobatics, athletics, history, insight, religion, stealth];
let monk_skills_nr = 2;
let paladin_skills = [athletics, intimidation, medicine, insight, religion, persuasion];
let paladin_skills_nr = 2;
let rogue_skills = [acrobatics, athletics, perception, performance, intimidation, sleightOfHand, deception, insight, investigation, stealth, persuasion];
let rogue_skills_nr = 4;
let ranger_skills = [athletics, perception, survival, nature, insight, investigation, stealth, animalHandling];
let ranger_skills_nr = 3;
let sorcerer_skills = [intimidation, arcana, deception, insight, religion, persuasion];
let sorcerer_skills_nr = 2;

let characterClassesSkills = {
  bard: [bard_skills, bard_skills_nr],
  barbarian: [barbarian_skills, barbarian_skills_nr],
  fighter: [fighter_skills, fighter_skills_nr],
  wizard: [wizard_skills, wizard_skills_nr],
  druid: [druid_skills, druid_skills_nr],
  cleric: [cleric_skills, cleric_skills_nr],
  warlock: [warlock_skills, warlock_skills_nr],
  monk: [monk_skills, monk_skills_nr],
  paladin: [paladin_skills, paladin_skills_nr],
  rogue: [rogue_skills, rogue_skills_nr],
  ranger: [ranger_skills, ranger_skills_nr],
  sorcerer: [sorcerer_skills, sorcerer_skills_nr]
};


// Функция для получения случайных элементов из массива
function getRandomSkills(skillsList, skillsNr) {
  let selectedSkills = [];
  let availableSkills = [...skillsList]; // Копируем список навыков, чтобы не изменять исходный

  for (let i = 0; i < skillsNr; i++) {
    let randomIndex = Math.floor(Math.random() * availableSkills.length);
    selectedSkills.push(availableSkills[randomIndex]);
    availableSkills.splice(randomIndex, 1); // Убираем выбранный навык, чтобы не выбрать его снова
  }

  return selectedSkills;
}