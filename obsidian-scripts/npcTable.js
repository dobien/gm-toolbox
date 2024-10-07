const path_module = require('path');

function getNPCName(p) {
	let nameLink = `[[${p.file.name}|${p.file.name}]]`; // Создаем Wiki-ссылку
    let alive = p.alive == undefined || !!p.alive;
    if (!alive)
    {
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
	    if (p.race)
	    {
		    appearanceTitle += `Раса: ${p.race}. `;
	    }
	    if (age)
	    {
		    appearanceTitle += `Возраст: ${age} лет. `;
	    }
	    if (p.profession)
	    {
		    appearanceTitle += `Профессия: ${p.profession}. `;
	    }
	    if (p.appearance)
	    {
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

function getImageLinks(p) {
	let images = [];
	let avatar = p["avatar-image"];
    if (avatar) {
		images.push(`[[${avatar.path}|av]]`);
	}
	if (p.token) {
		images.push(`[[${p.token.path}|tok]]`);
	}
    return images.join(" / ");
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
    if (property !== null) {
        if (Array.isArray(property)) {
            return property.filter(item => item).join(", ");
        } else {
            return property;
        }
    } else {
        return "";
    }
}

function show_table(dv, regionsList) {
	dv.table(["Name", "Main Info", "Avatar", "Affiliation", "Property", "Loc"],
	  dv.pages("#npc")
		.filter(p => p.regions && regionMatches(regionsList, p.regions))
		.sort(p => p.file.name, 'asc') // Сортировка по имени файла в порядке возрастания
		.map(p => {
			let age = p.birthday ? (1491 - p.birthday) : null;
			let nameLink = getNPCName(p);

			let mainInfo = getMainInfo(p);
			let avatarImage = getImageLinks(p);

			return [nameLink, mainInfo, avatarImage, p.affiliation, listProperty(p.possessions), p.location];
		})
	);
}

function run_show_table(...args) {
  let dv = args[0].arg1;
  let regionsList = args[0].arg2;
  show_table(dv, regionsList);
}

run_show_table(input)