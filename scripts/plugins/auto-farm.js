//AF AutoEquip toggle
(() => {
    const id = 'auto-farm-equip';
    const title = 'AutoFarmEquip';
    const desc = `If not in combat, equips Farming Cape, Bob's Rake and Signet Ring if you have them before harvesting and replanting. Be careful enabling this option with a full bank, can cause a loop where equipment gets continually swapped until bank space is opened up.`;
    const imgSrc = 'assets/media/bank/skillcape_farming.svg';
    SEMI.add(id, { ms: 0, title, desc, imgSrc });
})();

(() => {
    const id = 'auto-farm';
    const title = 'AutoFarm';
    const desc =
        'AutoFarm by Visua will automatically farm everything for you, planting seeds according to your selected priority, buying and using compost when it needs to. Will use gloop if you have it.';
    const imgSrc = SEMIUtils.skillImg('farming');
    const version = 2;
    const patchTypes = ['allotments', 'herbs', 'trees'];
    const toPatchType = { Allotment: patchTypes[0], Herb: patchTypes[1], Tree: patchTypes[2] };
    const priorityTypes = {
        custom: { id: 'custom', description: 'Custom priority', tooltip: 'Drag seeds to change their priority' },
        mastery: {
            id: 'mastery',
            description: 'Highest mastery',
            tooltip: 'Seeds with maxed mastery are excluded<br>Click seeds to disable/enable them',
        },
        replant: { id: 'replant', description: 'Replant', tooltip: 'Lock patches to their current seeds' },
        lowestQuantity: {
            id: 'lowestQuantity',
            description: 'Lowest Quantity',
            tooltip: 'Crops with the lowest quantity in the bank are planted',
        },
    };
    const allSeeds = {
        allotments: [...allotmentSeeds].sort((a, b) => b.level - a.level).map((s) => s.itemID),
        herbs: [...herbSeeds].sort((a, b) => b.level - a.level).map((s) => s.itemID),
        trees: [...treeSeeds].sort((a, b) => b.level - a.level).map((s) => s.itemID),
    };
    let observer;
    let config = {
        version: version,
        disabledSeeds: {},
    };
    patchTypes.forEach((patchType) => {
        config[patchType] = {
            enabled: false,
            priorityType: priorityTypes.custom.id,
            priority: allSeeds[patchType],
            lockedPatches: {},
        };
    });

    function canBuyCompost(n = 5) {
        if (SEMIUtils.hasCapeOn('Farming')) {
            return false;
        }
        const cost = n * items[CONSTANTS.item.Compost].buysFor;
        const balanceAfter = gp - cost;
        return false;
    }

    function buyCompost(confirmed) {
        buyShopItem('Materials', CONSTANTS.shop.materials.Compost, confirmed);
    }

    function findNextSeed(patch, patchId) {
        // Find next seed in bank according to priority
        const patchType = toPatchType[patch.type];
        const patchTypeConfig = config[patchType];
        const lockedSeed = patchTypeConfig.lockedPatches[patchId];
        let priority = [];
        if (lockedSeed !== undefined) {
            priority = [lockedSeed];
        } else if (patchTypeConfig.priorityType === priorityTypes.custom.id) {
            priority = patchTypeConfig.priority;
        } else if (patchTypeConfig.priorityType === priorityTypes.mastery.id) {
            priority = allSeeds[patchType]
                .filter((s) => !config.disabledSeeds[s] && getSeedMasteryLevel(s) < 99)
                .sort((a, b) => getSeedMastery(b) - getSeedMastery(a));
        } else if (patchTypeConfig.priorityType === priorityTypes.lowestQuantity.id) {
            priority = allSeeds[patchType]
                .filter((s) => !config.disabledSeeds[s])
                .sort((a, b) => getSeedCropQuantity(a) - getSeedCropQuantity(b));
        }

        let nextSeed = -1;
        for (let k = 0; k < priority.length; k++) {
            const seedId = priority[k];
            if (seedId !== -1 && skillLevel[CONSTANTS.skill.Farming] >= items[seedId].farmingLevel) {
                const bankId = SEMIUtils.getBankId(seedId);
                if (bankId !== false && bank[bankId].qty >= items[seedId].seedsRequired) {
                    nextSeed = seedId;
                    break;
                }
            }
        }

        return nextSeed;
    }

    function handlePatch(areaId, patchId) {
        const patch = newFarmingAreas[areaId].patches[patchId];

        if (!config[toPatchType[patch.type]].enabled || !patch.unlocked || !(patch.hasGrown || !patch.seedID)) {
            // AutoFarm disabled for patch type or patch not unlocked or still growing
            return;
        }

        if (patch.hasGrown) {
            // Harvest
            let grownId = items[patch.seedID].grownItemID;
            let bankId = SEMIUtils.getBankId(grownId);
            if (bankId == false && SEMIUtils.isBankFull()) {
                return;
            }
            harvestSeed(areaId, patchId);
            // Auto equip as food. Maybe as an option later
            // if (bankId === false) { bankId = SEMIUtils.getBankId(grownId); }
            // if (equippedFood.find(food => food.itemID === grownId) && bankId !== false) { equipFood(bankId, grownId, bank[bankId].qty); }
        }

        const nextSeed = findNextSeed(patch, patchId);
        if (nextSeed === -1) {
            // No seeds available
            return;
        }

        if (!patch.gloop) {
            if (checkBankForItem(CONSTANTS.item.Weird_Gloop)) {
                addGloop(areaId, patchId);
            } else if (
                getSeedMasteryLevel(nextSeed) < 50 &&
                getMasteryPoolProgress(CONSTANTS.skill.Farming) < masteryCheckpoints[1]
            ) {
                if (canBuyCompost()) {
                    getCompost();
                }
                addCompost(areaId, patchId, 5);
            }
        }
        selectedPatch = [areaId, patchId];
        selectedSeed = nextSeed;
        plantSeed();
    }

    function autoFarm() {
        let anyPatchReady = false;
        for (let i = 0; i < newFarmingAreas.length; i++) {
            for (let j = 0; j < newFarmingAreas[i].patches.length; j++) {
                const patch = newFarmingAreas[i].patches[j];
                if (
                    config[toPatchType[patch.type]].enabled &&
                    patch.unlocked &&
                    (patch.hasGrown || (!patch.seedID && findNextSeed(patch, j) !== -1))
                ) {
                    anyPatchReady = true;
                    break;
                }
            }
        }
        if (anyPatchReady) {
            if (!isInCombat) {
                swapFarmingEquipment(true);
                SEMIUtils.equipSwapConfig.script = id;
            }
            for (let i = 0; i < newFarmingAreas.length; i++) {
                for (let j = 0; j < newFarmingAreas[i].patches.length; j++) {
                    handlePatch(i, j);
                }
            }
            if (SEMIUtils.equipSwapConfig.script === id) {
                swapFarmingEquipment(false);
                SEMIUtils.equipSwapConfig.script = '';
            }
        }

        patchTypes.forEach((patchType) => {
            if (config[patchType].priorityType === priorityTypes.mastery.id) {
                orderMasteryPriorityMenu(patchType);
            }
        });
    }

    function equipIfNotEquipped(item, slot) {
        if (SEMIUtils.currentEquipmentInSlot(slot) === item) {
            return true;
        }
        if (checkBankForItem(item)) {
            SEMIUtils.equipSwap(item, slot);
            return true;
        }
        return false;
    }

    function swapFarmingEquipment(swapTo = true) {
        if (!SEMI.isEnabled('auto-farm-equip')) {
            return;
        }
        if (swapTo) {
            equipIfNotEquipped(CONSTANTS.item.Bobs_Rake, 'Weapon');
            equipIfNotEquipped(CONSTANTS.item.Aorpheats_Signet_Ring, 'Ring');
            (checkCompletionCapeRequirements() && equipIfNotEquipped(CONSTANTS.item.Cape_of_Completion, 'Cape')) ||
                (checkMaxCapeRequirements() && equipIfNotEquipped(CONSTANTS.item.Max_Skillcape, 'Cape')) ||
                equipIfNotEquipped(CONSTANTS.item.Farming_Skillcape, 'Cape');
        } else {
            if (SEMIUtils.equipSwapConfig['Weapon'].swapped) {
                SEMIUtils.equipSwap(0, 'Weapon');
            }
            if (SEMIUtils.equipSwapConfig['Ring'].swapped) {
                SEMIUtils.equipSwap(0, 'Ring');
            }
            if (SEMIUtils.equipSwapConfig['Cape'].swapped) {
                SEMIUtils.equipSwap(0, 'Cape');
            }
        }
    }

    function getCompost() {
        if (checkBankForItem(CONSTANTS.item.Compost)) {
            const qty = SEMIUtils.getBankQty(CONSTANTS.item.Compost);
            if (qty < 5) {
                buyQty = 5 - qty;
                buyCompost(true);
            }
        } else {
            buyQty = 5;
            buyCompost(true);
        }
    }

    function getSeedMastery(seedId) {
        return MASTERY[CONSTANTS.skill.Farming].xp[items[seedId].masteryID[1]];
    }

    function getSeedCropQuantity(seedId) {
        return SEMIUtils.getBankQty(items[seedId].grownItemID);
    }

    function getSeedMasteryLevel(seedId) {
        return getMasteryLevel(CONSTANTS.skill.Farming, items[seedId].masteryID[1]);
    }

    function orderMasteryPriorityMenu(patchType) {
        const menu = $(`#${id}-${patchType}-prioritysettings-mastery`);
        menu.children()
            .toArray()
            .filter((e) => getSeedMasteryLevel($(e).data('seed-id')) >= 99)
            .forEach((e) => $(e).remove());
        const sortedMenuItems = menu
            .children()
            .toArray()
            .sort((a, b) => getSeedMastery($(b).data('seed-id')) - getSeedMastery($(a).data('seed-id')));
        menu.append(sortedMenuItems);
    }

    function injectGUI() {
        if ($(`#${id}`).length) {
            return;
        }

        const disabledOpacity = 0.25;

        function storeConfig() {
            SEMI.setItem(`${id}-config-${currentCharacter}`, config);
        }

        function loadConfig() {
            const storedConfig = SEMI.getItem(`${id}-config-${currentCharacter}`);
            if (!storedConfig) {
                return;
            }

            config = { ...config, ...storedConfig };

            if (config.version === 1) {
                // Fix wrong seeds in custom priority
                patchTypes.forEach((patchType) => {
                    if (config[patchType].priority[0] === allSeeds.herbs[0]) {
                        config[patchType].priority = allSeeds[patchType];
                    }
                });

                // Remove seeds planted in locked patches
                for (let i = 0; i < newFarmingAreas.length; i++) {
                    for (let j = 0; j < newFarmingAreas[i].patches.length; j++) {
                        const patch = newFarmingAreas[i].patches[j];
                        if (!patch.unlocked && patch.seedID) {
                            patch.seedID = 0;
                            patch.compost = 0;
                            patch.timePlanted = 0;
                            patch.timeout = null;
                            patch.hasGrown = false;
                            patch.gloop = false;
                        }
                    }
                }
            }

            config.version = version;
            storeConfig();
        }
        loadConfig();

        function createPatchTypeDiv(patchType) {
            function createSeedDiv(seedId) {
                const grownItem = items[items[seedId].grownItemID];
                return `
                    <div class="btn btn-outline-secondary ${id}-priority-selector" data-seed-id="${seedId}" data-tippy-content="${grownItem.name}" style="margin: 2px; padding: 6px; float: left;">
                        <img src="${grownItem.media}" width="30" height="30">
                    </div>`;
            }

            function createPriorityTypeSelector(priorityType) {
                const prefix = `${id}-${patchType}-prioritytype`;
                const elementId = `${prefix}-${priorityType.id}`;
                return `
                    <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" id="${elementId}" name="${prefix}" value="${
                    priorityType.id
                }"${config[patchType].priorityType === priorityType.id ? ' checked' : ''}>
                        <label class="custom-control-label" for="${elementId}" data-tippy-content="${
                    priorityType.tooltip
                }">${priorityType.description}</label>
                    </div>`;
            }

            const prefix = `${id}-${patchType}`;
            const prioritySettings = `${prefix}-prioritysettings`;
            const seedDivs = allSeeds[patchType].map(createSeedDiv).join('');
            return `
                <div id="${prefix}" class="col-12 col-md-6 col-xl-4">
                    <div class="block block-rounded block-link-pop border-top border-farming border-4x" style="padding-bottom: 12px;">
                        <div class="block-header border-bottom">
                            <h3 class="block-title">${title} ${patchType}</h3>
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="${prefix}-enabled" name="${prefix}-enabled"${
                config[patchType].enabled ? ' checked' : ''
            }>
                                <label class="custom-control-label" for="${prefix}-enabled">Enable</label>
                            </div>
                        </div>
                        <div class="block-content" style="padding-top: 12px">
                            ${Object.values(priorityTypes).map(createPriorityTypeSelector).join('')}
                        </div>
                        <div class="block-content" style="padding-top: 12px">
                            <div id="${prioritySettings}-custom">
                                ${seedDivs}
                                <button id="${prioritySettings}-reset" class="btn btn-primary locked" data-tippy-content="Reset order to default (highest to lowest level)" style="margin: 5px 0 0 2px; float: right;">Reset</button>
                            </div>
                            <div id="${prioritySettings}-mastery" class="${id}-seed-toggles">
                                ${seedDivs}
                            </div>
                            <div id="${prioritySettings}-lowestQuantity" class="${id}-seed-toggles">
                                ${seedDivs}
                            </div>
                        </div>
                    </div>
                </div>`;
        }

        const autoFarmDiv = `
            <div id="${id}" class="row row-deck gutters-tiny">
                ${patchTypes.map(createPatchTypeDiv).join('')}
            </div>`;

        $('#farming-container .row:first').after($(autoFarmDiv));

        function addStateChangeHandler(patchType) {
            $(`#${id}-${patchType}-enabled`).change((event) => {
                config[patchType].enabled = event.currentTarget.checked;
                storeConfig();
            });
        }
        patchTypes.forEach(addStateChangeHandler);

        function showSelectedPriorityTypeSettings(patchType) {
            for (const priorityType of Object.values(priorityTypes)) {
                $(`#${id}-${patchType}-prioritysettings-${priorityType.id}`).toggle(
                    priorityType.id === config[patchType].priorityType
                );
            }
        }
        patchTypes.forEach(showSelectedPriorityTypeSettings);

        function lockPatch(patchType, patchId, seedId) {
            if (seedId !== undefined) {
                config[patchType].lockedPatches[patchId] = seedId;
            } else {
                delete config[patchType].lockedPatches[patchId];
            }
        }

        function addPriorityTypeChangeHandler(patchType) {
            function lockAllPatches(auto = false) {
                const area = newFarmingAreas[patchTypes.indexOf(patchType)];
                for (let i = 0; i < area.patches.length; i++) {
                    lockPatch(patchType, i, auto ? undefined : area.patches[i].seedID || -1);
                }
                $(`.${id}-seed-selector`).remove();
                addSeedSelectors();
            }

            $(`#${id} input[name="${id}-${patchType}-prioritytype"]`).change((event) => {
                if (config[patchType].priorityType === priorityTypes.replant.id) {
                    lockAllPatches(true);
                }

                config[patchType].priorityType = event.currentTarget.value;
                if (event.currentTarget.value === priorityTypes.replant.id) {
                    lockAllPatches();
                }
                showSelectedPriorityTypeSettings(patchType);
                storeConfig();
            });
        }
        patchTypes.forEach(addPriorityTypeChangeHandler);

        function makeSortable(patchType) {
            const elementId = `${id}-${patchType}-prioritysettings-custom`;
            Sortable.create(document.getElementById(elementId), {
                animation: 150,
                filter: '.locked',
                onMove: (event) => {
                    if (event.related) {
                        return !event.related.classList.contains('locked');
                    }
                },
                onEnd: () => {
                    config[patchType].priority = [...$(`#${elementId} .${id}-priority-selector`)].map(
                        (x) => +$(x).data('seed-id')
                    );
                    storeConfig();
                },
            });
        }
        patchTypes.forEach(makeSortable);

        function orderCustomPriorityMenu(patchType) {
            const priority = config[patchType].priority;
            if (!priority.length) {
                return;
            }
            const menu = $(`#${id}-${patchType}-prioritysettings-custom`);
            const menuItems = [...menu.children()];

            function indexOfOrInf(el) {
                let i = priority.indexOf(+el);
                return i === -1 ? Infinity : i;
            }

            const sortedMenu = menuItems.sort(
                (a, b) => indexOfOrInf($(a).data('seed-id')) - indexOfOrInf($(b).data('seed-id'))
            );
            menu.append(sortedMenu);
        }

        function addPriorityResetClickHandler(patchType) {
            $(`#${id}-${patchType}-prioritysettings-reset`).on('click', () => {
                config[patchType].priority = allSeeds[patchType];
                orderCustomPriorityMenu(patchType);
                storeConfig();
            });
        }
        patchTypes.forEach(addPriorityResetClickHandler);

        $(`.${id}-seed-toggles div`).each((_, e) => {
            const toggle = $(e);
            const seedId = toggle.data('seed-id');
            if (config.disabledSeeds[seedId]) {
                toggle.css('opacity', disabledOpacity);
            }
        });

        $(`.${id}-seed-toggles div`).on('click', (event) => {
            const toggle = $(event.currentTarget);
            const seedId = toggle.data('seed-id');
            if (config.disabledSeeds[seedId]) {
                delete config.disabledSeeds[seedId];
            } else {
                config.disabledSeeds[seedId] = true;
            }
            const opacity = config.disabledSeeds[seedId] ? disabledOpacity : 1;
            toggle.fadeTo(200, opacity);
            storeConfig();
        });

        patchTypes.forEach((patchType) => {
            orderCustomPriorityMenu(patchType);
            orderMasteryPriorityMenu(patchType);
        });

        function createDropdown(patchType) {
            function createDropdownItem(name, icon, seedId) {
                return `
                    <button class="dropdown-item"${
                        seedId !== undefined ? ` data-seed-id="${seedId}"` : ''
                    } style="outline: none;">
                        <span style="margin-right: 12px; vertical-align: text-top;">${icon}</span>${name}
                    </button>`;
            }

            return `
            <div class="dropdown ${id}-seed-selector" style="position: absolute; right: 19px;">
                <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" style="padding-left: 8px; padding-right: 8px;"><span class="${id}-seed-selector-icon" style="margin-right: 6px; vertical-align: text-top; margin-top: 1px;"></span><span class="${id}-seed-selector-text"></span></button>
                <div class="dropdown-menu font-size-sm" style="border-color: #6c757d; border-radius: 0.25rem; padding: 0.25rem 0;">
                    ${createDropdownItem(
                        'Auto',
                        '<img src="assets/media/main/settings_header.svg" width="20" height="20">'
                    )}
                    ${allSeeds[patchType]
                        .map((seedId) =>
                            createDropdownItem(
                                items[items[seedId].grownItemID].name,
                                `<img src="${items[items[seedId].grownItemID].media}" width="20" height="20">`,
                                seedId
                            )
                        )
                        .join('')}
                    ${createDropdownItem(
                        'None',
                        '<i class="fa fa-ban" style="width: 20px; font-size: 20px; color: #c81f1f;"></i>',
                        -1
                    )}
                </div>
            </div>`;
        }

        function addSeedSelectors() {
            function updateDropdownSelection(patchType, patchId, dropdown) {
                dropdown.find('.dropdown-item.active').removeClass('active');
                const button = dropdown.children('button');
                const selectedSeed = config[patchType].lockedPatches[patchId];
                let selected;
                if (selectedSeed !== undefined) {
                    selected = dropdown.find(`.dropdown-item[data-seed-id="${selectedSeed}"]`);
                    button.find(`.${id}-seed-selector-text`).text('');
                } else {
                    selected = dropdown.find('.dropdown-item:not([data-seed-id])');
                    button.find(`.${id}-seed-selector-text`).text('Auto');
                }
                selected.addClass('active');
                button.find(`.${id}-seed-selector-icon`).html(selected.find('span').html());
            }

            $('#farming-area-container h3').each((patchId, e) => {
                const header = $(e);
                if (header.siblings().length) {
                    // Seed selector already exists
                    return;
                }
                const patchType = toPatchType[header.text()];
                if (patchType === undefined) {
                    // Locked patch
                    return;
                }
                const dropdown = $(createDropdown(patchType, patchId));
                updateDropdownSelection(patchType, patchId, dropdown);

                dropdown.find('.dropdown-item').on('click', (event) => {
                    lockPatch(patchType, patchId, $(event.currentTarget).data('seed-id'));
                    storeConfig();
                    updateDropdownSelection(patchType, patchId, dropdown);
                });

                header.after(dropdown);
            });
        }
        addSeedSelectors();

        if (observer) {
            observer.disconnect();
        }
        observer = new MutationObserver(addSeedSelectors);
        observer.observe(document.getElementById('farming-area-container'), { childList: true });

        tippy(`#${id} [data-tippy-content]`, { animation: false, allowHTML: true });
    }

    function removeGUI() {
        if (observer) {
            observer.disconnect();
        }
        $(`#${id} [data-tippy-content]`).each((_, e) => e._tippy.destroy());
        $(`#${id}`).remove();
        $(`.${id}-seed-selector`).remove();
    }

    SEMI.add(id, {
        ms: 15000,
        onLoop: autoFarm,
        onEnable: injectGUI,
        onDisable: removeGUI,
        desc,
        title,
        imgSrc,
        skill: 'Farming',
    });
    if (SEMI.getItem('auto-replant-status') !== null) SEMI.removeItem('auto-replant-status');
})();
