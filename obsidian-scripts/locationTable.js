// Функция для создания ссылки на страницу
function getLocationName(p) {
    let nameLink = `[[${p.file.name}|${p.file.name}]]`; // Создаем Wiki-ссылку
    return nameLink;
}

// Функция для получения основной информации
function getMainInfo(p) {
    let age = p.birthday ? (1491 - p.birthday) : null;
    let mainInfoParts = [];

    if (p.appearance || p.race) {
        let appearanceTitle = "";
        if (p.race) {
            appearanceTitle += `Раса: ${p.race}. `;
        }
        if (age) {
            appearanceTitle += `Возраст: ${age} лет. `;
        }
        if (p.profession) {
            appearanceTitle += `Профессия: ${p.profession}. `;
        }
        if (p.appearance) {
            appearanceTitle += `${p.appearance}`;
        }

        let appearanceTooltip = `<abbr title="${appearanceTitle}">View</abbr>`;
        mainInfoParts.push(appearanceTooltip);
    }
    if (p.personality) {
        let personalityTooltip = `<abbr title="${p.personality}">Pers</abbr>`;
        mainInfoParts.push(personalityTooltip);
    }
    if (p.biography) {
        let biographyTooltip = `<abbr title="${p.biography}">Bio</abbr>`;
        mainInfoParts.push(biographyTooltip);
    }
    if (p.quests) {
        let questsTooltip = `<abbr title="${p.quests}">Quests</abbr>`;
        mainInfoParts.push(questsTooltip);
    }

    return mainInfoParts.join(" / ");
}

// Функция для получения ссылок на изображения
function getImageLinks(p) {
	let images = [];
	let avatar = p["avatar-image"];
    if (avatar) {
		images.push(`[[${avatar.path}|img]]`);
	}
    return images.join(" / ");
}

// Рекурсивная функция для проверки, является ли страница потомком любой из целевых локаций
function isDescendant(page, targetNames, visited = new Set()) {
    if (!page || visited.has(page.file.path)) {
        return false;
    }
    visited.add(page.file.path);

    // Если страница совпадает с любой из целевых, она не считается своим потомком
    if (targetNames.includes(page.file.name)) {
        return true;
    }

    // Получаем родительские регионы
    let parents = page["parent-region"];
    if (!parents) {
        return false;
    }

    if (!Array.isArray(parents)) {
        parents = [parents];
    }

    // Рекурсивно проверяем каждого родителя
    for (let parent of parents) {
        let parentPage = null;
        if (typeof parent === 'object' && parent.path) {
            parentPage = dv.page(parent.path);
        } else if (typeof parent === 'string') {
            parentPage = dv.page(parent);
        } else {
            parentPage = null;
        }

        if (parentPage && isDescendant(parentPage, targetNames, visited)) {
                return true;
        }
    }

    return false;
}

// Функция для получения потомков для массива локаций
function getDescendantLocations(dv, targetLocations) {
    // Собираем все локации, которые являются потомками любых из целевых локаций
    let descendantLocations = dv.pages('#location')
        // Исключаем сами целевые локации из результатов
        .filter(p => !targetLocations.includes(p.file.name) && isDescendant(p, targetLocations))
        .sort(p => p.file.name, 'asc')
        .map(p => {
            let nameLink = getLocationName(p);
            let mainInfo = getMainInfo(p);
            let avatarImage = getImageLinks(p);
            return [nameLink, mainInfo, avatarImage];
        });
    return descendantLocations;
}

// Функция для отображения таблицы
function show_table(dv, targetLocations) {
   // Отображаем таблицу с найденными локациями
   dv.table(["Name", "Main Info", "Image"], getDescendantLocations(dv, targetLocations));
}

// Функция для запуска отображения таблицы
function run_show_table(...args) {
  let dv = args[0].arg1;
  let targetLocation = args[0].arg2;
  show_table(dv, targetLocation);
}

run_show_table(input)