SEMI.AutoEquipBestItems = (() => {
    const id = 'auto-equip-best-item';
    const title = 'AutoEquipBestItem (Beta)';
    const desc =
        'Automatically determines the item that is best for your current situation, such as xp items, or increased drops. This script is in beta, it may not include every item.';
    const imgSrc = 'assets/media/main/milestones_header.svg';

    const slotsWeWant = [
        CONSTANTS.equipmentSlot.Helmet,
        CONSTANTS.equipmentSlot.Amulet,
        CONSTANTS.equipmentSlot.Ring,
        CONSTANTS.equipmentSlot.Gloves,
        CONSTANTS.equipmentSlot.Cape,
    ];

    const skillsThatConsumeResources = [
        CONSTANTS.skill.Cooking,
        CONSTANTS.skill.Crafting,
        CONSTANTS.skill.Firemaking,
        CONSTANTS.skill.Fletching,
        CONSTANTS.skill.Herblore,
        CONSTANTS.skill.Runecrafting,
        CONSTANTS.skill.Smithing,
        CONSTANTS.skill.Magic, // Alt-Magic
    ];
    const skillsThatHaveSecondaryDrops = [
        CONSTANTS.skill.Fishing,
        CONSTANTS.skill.Woodcutting,
        CONSTANTS.skill.Mining,
        CONSTANTS.skill.Thieving,
    ];
    const slotsWeWantImg = {
        0: 'assets/media/bank/armour_helmet.svg',
        6: 'assets/media/bank/misc_amulet.svg',
        7: 'assets/media/bank/misc_ring.svg',
        8: 'assets/media/bank/armour_gloves.svg',
        10: 'assets/media/bank/armour_cape.svg',
    };
    let itemsBySlotConfig = {};

    // Default sorting to set our suggestions
    // Items missing from the list are appended to the end
    const itemsBySlotConfigDefault = {
        0: [CONSTANTS.item.Crown_of_Rhaelyx, CONSTANTS.item.Chapeau_Noir],
        6: [CONSTANTS.item.Amulet_of_Looting, CONSTANTS.item.Amulet_of_Fishing, CONSTANTS.item.Clue_Chasers_Insignia],
        7: [
            CONSTANTS.item.Pirates_Lost_Ring,
            CONSTANTS.item.Ancient_Ring_Of_Skills,
            CONSTANTS.item.Aorpheats_Signet_Ring,
            CONSTANTS.item.Gold_Topaz_Ring,
            CONSTANTS.item.Gold_Emerald_Ring,
        ],
        8: [
            CONSTANTS.item.Cooking_Gloves,
            CONSTANTS.item.Gem_Gloves,
            CONSTANTS.item.Mining_Gloves,
            CONSTANTS.item.Smithing_Gloves,
            CONSTANTS.item.Thieving_Gloves,
        ],
        10: [
            CONSTANTS.item.Cape_of_Completion,
            CONSTANTS.item.Max_Skillcape,
            CONSTANTS.item.Woodcutting_Skillcape,
            CONSTANTS.item.Fishing_Skillcape,
            CONSTANTS.item.Cooking_Skillcape,
            CONSTANTS.item.Mining_Skillcape,
            CONSTANTS.item.Smithing_Skillcape,
            CONSTANTS.item.Attack_Skillcape,
            CONSTANTS.item.Strength_Skillcape,
            CONSTANTS.item.Defence_Skillcape,
            CONSTANTS.item.Hitpoints_Skillcape,
            CONSTANTS.item.Thieving_Skillcape,
            CONSTANTS.item.Farming_Skillcape,
            CONSTANTS.item.Ranged_Skillcape,
            CONSTANTS.item.Fletching_Skillcape,
            CONSTANTS.item.Crafting_Skillcape,
            CONSTANTS.item.Runecrafting_Skillcape,
            CONSTANTS.item.Magic_Skillcape,
            CONSTANTS.item.Prayer_Skillcape,
            CONSTANTS.item.Slayer_Skillcape,
            CONSTANTS.item.Herblore_Skillcape,
            CONSTANTS.item.Firemaking_Skillcape,
        ],
    };

    const gatherItemData = () => {
        const itemsBySlot = {};
        for (var slot of slotsWeWant) {
            itemsBySlot[slot] = [];
        }

        let itemId = 0;
        for (var item of items) {
            if (Number.isInteger(item.equipmentSlot) && slotsWeWant.includes(item.equipmentSlot)) {
                item.id = itemId;
                itemsBySlot[item.equipmentSlot].push(item);
            }
            itemId++;
        }

        loadConfig(itemsBySlot);
    };

    const loadConfig = (itemsBySlot) => {
        itemsBySlotConfig = SEMI.getItem(`${name}-config`);
        if (!itemsBySlotConfig) {
            itemsBySlotConfig = itemsBySlotConfigDefault;
            let newItemsBySlot = {};

            for (var slot of slotsWeWant) {
                newItemsBySlot[slot] = [];
                for (var item of itemsBySlot[slot]) {
                    if (!itemsBySlotConfig[slot].includes(item.id)) {
                        newItemsBySlot[slot].push(item.id);
                    }
                }
            }

            newItemsBySlot[CONSTANTS.equipmentSlot.Helmet].sort(defensiveItemComparator);
            newItemsBySlot[CONSTANTS.equipmentSlot.Gloves].sort(defensiveItemComparator);

            for (var slot of slotsWeWant) {
                itemsBySlotConfig[slot] = itemsBySlotConfig[slot].concat(newItemsBySlot[slot]);
            }
        }
    };

    const defensiveItemComparator = (aId, bId) => {
        let a = items[aId];
        let b = items[bId];
        const aLevel = a.defenceLevelRequired || a.magicLevelRequired || a.rangedLevelRequired;
        const bLevel = b.defenceLevelRequired || b.magicLevelRequired || b.rangedLevelRequired;

        if (!aLevel && bLevel) return 1; //b

        if (aLevel && !bLevel) return -1; //a

        if (aLevel < bLevel) return 1; //b

        if (aLevel == bLevel) {
            const aBonus = a.defenceLevelRequired
                ? a.damageReduction
                : a.magicLevelRequired
                ? a.magicDefenceBonus
                : a.rangeArrackBonus;
            const bBonus = b.defenceLevelRequired
                ? b.damageReduction
                : b.magicLevelRequired
                ? b.magicDefenceBonus
                : b.rangeArrackBonus;

            if (aBonus < bBonus) return 1; //b

            return -1; //a
        }

        return -1; //a
    };

    const defaultTab = 7;
    const getConfigMenu = () => {
        let configMenu = `<div id="auto-equip-best-item-tabs"><ul style="list-style-type: none;display:grid;grid-template-columns: repeat(${slotsWeWant.length}, 1fr);padding: 0rem 1rem;margin-bottom: 0rem;">`;

        for (var slot of slotsWeWant) {
            configMenu += getTabHeader(slot);
        }

        configMenu += `</ul>`;

        for (var slot of slotsWeWant) {
            configMenu += `<ul id="auto-equip-best-item-${slot}-list" style="list-style-type: none;display:grid;grid-template-columns: repeat(6, 1fr);padding: 1rem;border-color: #5179d6;border-radius: 0rem 0rem 0.25rem 0.25rem;border: 1px solid;margin-bottom: 1rem;">`;
            for (var itemId of itemsBySlotConfig[slot]) {
                configMenu += getItemButton(items[itemId]);
            }
            configMenu += `</ul>`;
        }

        return `${configMenu}</div>`;
    };

    const getTabHeader = (slot) => {
        return `<li><button type="button" id="auto-equip-best-item-tab-${slot}" class="btn btn-outline-primary btn-info" style="margin-bottom: 0;border-bottom: none;border-radius: .25rem .25rem 0 0;border-color: white;" onclick="SEMI.AutoEquipBestItems.swapTabs(${slot});"><img class="skill-icon-sm m-0" src="${slotsWeWantImg[slot]}"></button></li>`;
    };

    let tooltips = [];
    const swapTabs = (slot) => {
        for (var s of slotsWeWant) {
            document.getElementById(`auto-equip-best-item-tab-${s}`).style['border-color'] = 'white';
            $(`#auto-equip-best-item-${s}-list`).hide();
        }

        const btn = document.getElementById(`auto-equip-best-item-tab-${slot}`);
        if (btn) {
            btn.style['border-color'] = '#5179d6';
            $(`#auto-equip-best-item-${slot}-list`).show();
        } else {
            console.error('Invalid tab', slot);
        }

        // Setup tooltips
        tooltips.forEach((instance) => {
            instance.destroy();
        });
        tooltips = [];

        $(`#auto-equip-best-item-${slot}-list`)
            .children()
            .each((index, child) => {
                tooltips.concat(
                    tippy(`#auto-equip-best-item-id-${child.dataset.id}`, {
                        content: SEMIUtils.getItemTooltip(Number(child.dataset.id)),
                        placement: 'top',
                        allowHTML: true,
                        interactive: false,
                        animation: false,
                        touch: 'hold',
                    })
                );
            });
    };

    const getItemButton = (item) => {
        return `<li class="ui-state-default" data-id="${item.id}"><button type="button" id="auto-equip-best-item-id-${item.id}" class="btn btn-outline-primary m-1" onclick=""><img class="skill-icon-sm m-0" src="${item.media}"></button></li>`;
    };

    const onConfigMenuShown = (instance) => {
        for (var slot of slotsWeWant) {
            const element = document.getElementById(`auto-equip-best-item-${slot}-list`);
            if (element) Sortable.create(element);
        }

        swapTabs(defaultTab);
    };

    const saveConfig = () => {
        for (var slot of slotsWeWant) {
            const list = document.getElementById(`auto-equip-best-item-${slot}-list`);
            if (list) {
                itemsBySlotConfig[slot] = [];
                for (var element of list.children) {
                    itemsBySlotConfig[slot].push(Number(element.dataset.id));
                }
            }
        }

        SEMI.setItem(`${name}-config`, itemsBySlotConfig);
    };

    const skillChangeHandler = (prevSkillId, currentSkillId) => {
        if (!Boolean(SEMI.getItem(`${id}-status`)) || (currentSkillId == -1 && !isMagic)) {
            return;
        }

        if (currentSkillId == -1 && isMagic) {
            currentSkillId = CONSTANTS.skill.Magic;
        }

        const currentCombatSkillId = SEMIUtils.currentCombatSkillId();
        const isSkillMaxLevel = SEMIUtils.isMaxLevelById(currentSkillId);
        const isCombatMaxLevel =
            SEMIUtils.isMaxLevelById(currentCombatSkillId) && SEMIUtils.isMaxLevelById(CONSTANTS.skill.Hitpoints);

        // Cape Slot
        for (var itemId of itemsBySlotConfig[CONSTANTS.equipmentSlot.Cape]) {
            if (
                canEquipCape(currentSkillId, currentCombatSkillId, itemId, isSkillMaxLevel, isCombatMaxLevel) &&
                equipItem(itemId)
            ) {
                break;
            }
        }

        // Hat Slot
        for (var itemId of itemsBySlotConfig[CONSTANTS.equipmentSlot.Helmet]) {
            if (
                canEquipHelmet(currentSkillId, currentCombatSkillId, itemId, isSkillMaxLevel, isCombatMaxLevel) &&
                equipItem(itemId)
            ) {
                break;
            }
        }

        // Gloves Slot
        for (var itemId of itemsBySlotConfig[CONSTANTS.equipmentSlot.Gloves]) {
            if (
                canEquipGloves(currentSkillId, currentCombatSkillId, itemId, isSkillMaxLevel, isCombatMaxLevel) &&
                equipItem(itemId)
            ) {
                break;
            }
        }

        // Ring Slot
        for (var itemId of itemsBySlotConfig[CONSTANTS.equipmentSlot.Ring]) {
            if (canEquipRing(currentSkillId, itemId, isSkillMaxLevel) && equipItem(itemId)) {
                break;
            }
        }

        // Amulet Slot
        for (var itemId of itemsBySlotConfig[CONSTANTS.equipmentSlot.Amulet]) {
            if (
                canEquipAmulet(currentSkillId, currentCombatSkillId, itemId, isSkillMaxLevel, isCombatMaxLevel) &&
                equipItem(itemId)
            ) {
                break;
            }
        }
    };

    const canEquipCape = (currentSkillId, currentCombatSkillId, itemId, isSkillMaxLevel, isCombatMaxLevel) => {
        if (!checkBankForItem(itemId) && !equippedItems.includes(itemId)) {
            return false;
        }

        switch (itemId) {
            case CONSTANTS.item.Woodcutting_Skillcape:
                return currentSkillId == CONSTANTS.skill.Woodcutting;
            case CONSTANTS.item.Fishing_Skillcape:
                return currentSkillId == CONSTANTS.skill.Fishing;
            case CONSTANTS.item.Cooking_Skillcape:
                return currentSkillId == CONSTANTS.skill.Cooking;
            case CONSTANTS.item.Mining_Skillcape:
                return currentSkillId == CONSTANTS.skill.Mining;
            case CONSTANTS.item.Smithing_Skillcape:
                return (
                    currentSkillId == CONSTANTS.skill.Smithing &&
                    items[smithingItems[currentSmith].itemID].smithReq.some((r) => r.id === CONSTANTS.item.Coal_Ore)
                );
            case CONSTANTS.item.Attack_Skillcape:
                return isInCombat && currentCombatSkillId == CONSTANTS.skill.Attack;
            case CONSTANTS.item.Strength_Skillcape:
                return isInCombat && currentCombatSkillId == CONSTANTS.skill.Strength;
            case CONSTANTS.item.Defence_Skillcape:
                return isInCombat && currentCombatSkillId == CONSTANTS.skill.Defence;
            case CONSTANTS.item.Hitpoints_Skillcape:
                return isInCombat;
            case CONSTANTS.item.Thieving_Skillcape:
                return currentSkillId == CONSTANTS.skill.Thieving;
            case CONSTANTS.item.Farming_Skillcape:
                return currentSkillId == CONSTANTS.skill.Farming;
            case CONSTANTS.item.Ranged_Skillcape:
                return isInCombat && currentCombatSkillId == CONSTANTS.skill.Ranged;
            case CONSTANTS.item.Fletching_Skillcape:
                return currentSkillId == CONSTANTS.skill.Fletching;
            case CONSTANTS.item.Crafting_Skillcape:
                return currentSkillId == CONSTANTS.skill.Crafting;
            case CONSTANTS.item.Runecrafting_Skillcape:
                return currentSkillId == CONSTANTS.skill.Runecrafting;
            case CONSTANTS.item.Magic_Skillcape:
                return isInCombat && currentCombatSkillId == CONSTANTS.skill.Magic;
            case CONSTANTS.item.Prayer_Skillcape:
                return isInCombat;
            case CONSTANTS.item.Slayer_Skillcape:
                return isInCombat;
            case CONSTANTS.item.Herblore_Skillcape:
                return currentSkillId == CONSTANTS.skill.Herblore;
            case CONSTANTS.item.Firemaking_Skillcape:
                return currentSkillId == CONSTANTS.skill.Firemaking || !isSkillMaxLevel;
        }

        return true;
    };

    const canEquipGloves = (currentSkillId, currentCombatSkillId, itemId, isSkillMaxLevel, isCombatMaxLevel) => {
        if (!checkBankForItem(itemId) && !equippedItems.includes(itemId)) {
            return false;
        }

        const item = items[itemId];
        if (Number.isInteger(item.gloveID) && glovesTracker[item.gloveID].remainingActions <= 0) {
            return false;
        }

        const RUNE_ESSENCE = 10;

        switch (itemId) {
            case CONSTANTS.item.Cooking_Gloves:
                return currentSkillId == CONSTANTS.skill.Cooking;
            case CONSTANTS.item.Mining_Gloves:
                return currentSkillId == CONSTANTS.skill.Mining;
            case CONSTANTS.item.Smithing_Gloves:
                return currentSkillId == CONSTANTS.skill.Smithing;
            case CONSTANTS.item.Thieving_Gloves:
                return currentSkillId == CONSTANTS.skill.Thieving;
            case CONSTANTS.item.Gem_Gloves:
                return currentSkillId == CONSTANTS.skill.Mining && currentRock !== RUNE_ESSENCE;
        }

        if (item.magicLevelRequired) {
            return (
                isInCombat &&
                currentCombatSkillId == CONSTANTS.skill.Magic &&
                item.magicLevelRequired <= SEMIUtils.currentLevelById(CONSTANTS.skill.Magic)
            );
        }

        if (item.defenceLevelRequired) {
            return (
                isInCombat &&
                (currentCombatSkillId == CONSTANTS.skill.Attack ||
                    currentCombatSkillId == CONSTANTS.skill.Strength ||
                    currentCombatSkillId == CONSTANTS.skill.Defence) &&
                item.defenceLevelRequired <= SEMIUtils.currentLevelById(CONSTANTS.skill.Defence)
            );
        }

        if (item.rangedLevelRequired) {
            return (
                isInCombat &&
                currentCombatSkillId == CONSTANTS.skill.Ranged &&
                item.rangedLevelRequired <= SEMIUtils.currentLevelById(CONSTANTS.skill.Ranged)
            );
        }

        return true;
    };

    const canEquipAmulet = (currentSkillId, currentCombatSkillId, itemId, isSkillMaxLevel, isCombatMaxLevel) => {
        if (!checkBankForItem(itemId) && !equippedItems.includes(itemId)) {
            return false;
        }

        switch (itemId) {
            case CONSTANTS.item.Amulet_of_Looting:
                return isInCombat;
            case CONSTANTS.item.Amulet_of_Fishing:
                return currentSkillId == CONSTANTS.skill.Fishing;
            case CONSTANTS.item.Clue_Chasers_Insignia:
                return skillsThatHaveSecondaryDrops.includes(currentSkillId);
        }
    };

    const canEquipHelmet = (currentSkillId, currentCombatSkillId, itemId, isSkillMaxLevel, isCombatMaxLevel) => {
        if (!checkBankForItem(itemId) && !equippedItems.includes(itemId)) {
            return false;
        }

        switch (itemId) {
            case CONSTANTS.item.Chapeau_Noir:
                return currentSkillId == CONSTANTS.skill.Thieving || isInCombat;
            case CONSTANTS.item.Crown_of_Rhaelyx:
                return skillsThatConsumeResources.includes(currentSkillId);
        }

        const item = items[itemId];
        if (item.magicLevelRequired) {
            return (
                isInCombat &&
                currentCombatSkillId == CONSTANTS.skill.Magic &&
                item.magicLevelRequired <= SEMIUtils.currentLevelById(CONSTANTS.skill.Magic)
            );
        }

        if (item.defenceLevelRequired) {
            return (
                isInCombat &&
                (currentCombatSkillId == CONSTANTS.skill.Attack ||
                    currentCombatSkillId == CONSTANTS.skill.Strength ||
                    currentCombatSkillId == CONSTANTS.skill.Defence) &&
                item.defenceLevelRequired <= SEMIUtils.currentLevelById(CONSTANTS.skill.Defence)
            );
        }

        if (item.rangedLevelRequired) {
            return (
                isInCombat &&
                currentCombatSkillId == CONSTANTS.skill.Ranged &&
                item.rangedLevelRequired <= SEMIUtils.currentLevelById(CONSTANTS.skill.Ranged)
            );
        }

        return true;
    };

    const isCurrentTaskMaxMastery = () => {
        const currentSkillId = SEMIUtils.currentSkillId();
        if (currentSkillId === -1) {
            return false;
        }

        const isMaxMastery = (masteryId) => {
            return getMasteryLevel(currentSkillId, masteryId) >= 99;
        };

        switch (SEMIUtils.currentSkillName()) {
            case 'Woodcutting':
                return currentTrees.every((t) => isMaxMastery(t));
            case 'Fishing':
                return isMaxMastery(
                    fishingItems[fishingAreas[currentFishingArea].fish[selectedFish[currentFishingArea]]].fishingID
                );
            case 'Mining':
                return isMaxMastery(currentRock);
            case 'Cooking':
                return isMaxMastery(items[selectedFood].masteryID[1]);
            // Remaining skills to be implemented
        }
        return false;
    };

    const canEquipRing = (currentSkill, itemId, isSkillMaxLevel) => {
        if (!checkBankForItem(itemId) && !equippedItems.includes(itemId)) {
            return false;
        }

        switch (itemId) {
            case CONSTANTS.item.Pirates_Lost_Ring:
                return !isSkillMaxLevel && currentSkill == CONSTANTS.skill.Fishing;
            case CONSTANTS.item.Ancient_Ring_Of_Skills:
                return !isInCombat && !isSkillMaxLevel;
            case CONSTANTS.item.Ancient_Ring_Of_Mastery:
                return !isInCombat && !isCurrentTaskMaxMastery();
        }

        return true;
    };

    const equipItem = (itemId) => {
        if (equippedItems.includes(itemId)) {
            return true;
        }

        return SEMIUtils.equipFromBank(itemId);
    };

    gatherItemData();
    SEMIEventBus.RegisterSkillChangeHandler({ HandleSkillChange: skillChangeHandler });
    SEMI.add(id, {
        title,
        desc,
        imgSrc,
        pluginType: SEMI.PLUGIN_TYPE.TWEAK,
        hasConfig: true,
        configMenu: getConfigMenu(),
        onConfigMenuShown,
        saveConfig,
    });

    return { swapTabs };
})();
