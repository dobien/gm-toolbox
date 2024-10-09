const path_module = require('path');

function getNPCName(p) {
    let nameLink = `[[${p.file.name}|${p.file.name}]]`; // Создаем Wiki-ссылку
    let alive = p.alive == undefined || !!p.alive;
    if (!alive) {
        nameLink += `<span style="color:red"> (D)</span>`;
    }
    return nameLink;
}

function getMainInfo(p) {
    let age = p.birthday ? (1491 - p.birthday) : null;
    let mainInfoParts = [];

    if (p.appearance || p.race) {
        // specialization
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

function getImageLinks(p, basePath) {
    let avatar = p["avatar-image"];
    if (avatar) {
        let imagePath = `${basePath}/${avatar.path}`; // Используем базовый путь хранилища
        return `<div style="width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="${imagePath}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>`;
    }
    return ""; // Возвращаем пустую строку, если изображения нет
}

function regionMatches(regionsList, p_regions) {
    console.log(regionsList);
    console.log(p_regions);
    if (p_regions !== null) {
        if (Array.isArray(p_regions)) {
            return regionsList.some(loc =>
                p_regions.some(region => {
                    if (typeof region === 'object' && region.hasOwnProperty('path')) {
                        let regionName = path_module.parse(region.path).name;
                        return regionName === loc;
                    } else {
                        return region === loc;
                    }
                })
            );
        } else {
            // Обработка случая, когда p_regions не является массивом (на всякий случай)
            return regionsList.some(loc => {
                if (typeof p_regions === 'object' && p_regions.hasOwnProperty('path')) {
                    let regionName = path_module.parse(p_regions.path).name;
                    return regionName === loc;
                } else {
                    return p_regions === loc;
                }
            });
        }
    } else {
        return false;
    }
}

function listProperty(property) {
    if (!property) {
        return "";
    }

    // Если это массив, разделяем элементы
    if (Array.isArray(property)) {
        let links = [];
        let otherItems = [];

        property.forEach(item => {
			if (item) {
				if (typeof item === 'string') {
					otherItems.push(item);
				}
				else if (typeof item === 'object')
				{
					links.push(item);
				}
			}
        });

        // Собираем ссылочные элементы и создаём tooltip для остальных
        let tooltip = otherItems.length > 0 ? `<abbr title="${otherItems.join(', ')}">Equip</abbr>` : "";

        // Объединяем ссылки и tooltip
        return [...links, tooltip].filter(Boolean).join(", ");
    } else {
        // Если это не массив, просто возвращаем как есть (и проверяем на тип строки)
        return typeof property === 'string' ? `<abbr title="${property}">Equip</abbr>` : "";
    }
}

function listAffiliation(affiliation) {
    if (!affiliation) {
        return "";
    }

    if (Array.isArray(affiliation)) {
        return affiliation.filter(Boolean).join(", ");
    } else {
        // Если это не массив, просто возвращаем как есть (и проверяем на тип строки)
        return typeof affiliation === 'string' ? affiliation : "";
    }
}

// Функция для отображения таблицы
function show_table(dv, regionsList, basePath) {
    dv.table(["Image", "Name", "Main Info", "Aff", "Property", "Loc"],
        dv.pages("#npc")
        .filter(p => p.regions && regionMatches(regionsList, p.regions))
        .sort(p => p.file.name, 'asc') // Сортировка по имени файла в порядке возрастания
        .map(p => {
            let nameLink = getNPCName(p);
            let mainInfo = getMainInfo(p);
            let avatarImage = getImageLinks(p, basePath); // Передаем basePath для формирования правильного пути

            return [avatarImage, nameLink, mainInfo, listAffiliation(p.affiliation), listProperty(p.possessions), p.location]; // Аватар первой колонкой
        })
    );
}

// Функция для запуска отображения таблицы
function run_show_table(...args) {
    let dv = args[0].arg1;
    let regionsList = args[0].arg2;
    let basePath = this.app.vault.adapter.basePath; // Получаем базовый путь к хранилищу
    show_table(dv, regionsList, basePath);
}

run_show_table(input);
