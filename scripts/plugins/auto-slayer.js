// Importing Auto Slayer by Bubbalova. Using a modified version of script v1.2.1.
(() => {
    const id = 'auto-slayer-equip';
    const title = 'AutoSlayerEquip';
    const desc =
        'The original Melvor Auto Slayer script by Bubbalova attempts to equip the Mirror Shield or Magic Ring when assigned a monster in zones that require them to enter. This option, disabled by default in SEMI, turns that functionality back on. The original script also forced equipping of the Slayer Cape when starting, but this option also controls that cape equip. When this is enabled and you have 99 slayer and the slayer cape, AutoSlayer will always equip the slayer cape.';
    const imgSrc = 'assets/media/bank/mirror_shield.svg';
    SEMI.add(id, { ms: 0, pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT, title, desc, imgSrc });
})();

(() => {
    const id = 'auto-slayer';
    const title = 'AutoSlayer';
    const desc =
        'AutoSlayer, based on Melvor Auto Slayer by Bubbalova, automatically seeks slayer tasks and sets out to kill that enemy. If you are assigned a monster in a zone that requires special equipment, this version of AutoSlayer will simply reroll your assignment and continue on by default, unless you are properly equipped or you turn on AS Auto Equip and have the correct items in the bank.';
    const imgSrc = SEMIUtils.skillImg('slayer');

    const config = {
        taskTier: 0,
    };

    let autoSlayerCheck = 0;

    //Holds values for unequipped equipment
    let originalBoots;
    let originalCape;
    let originalHelmet;
    let originalShield;
    let originalRing;

    const selectNewSlayerTaskWithConfig = () => {
        let taskTier = SEMI.getValue(id, 'taskTier');
        selectNewSlayerTask(taskTier);
    };

    //Main function
    const autoSlayer = () => {
        if (!SEMI.isEnabled(id)) {
            autoSlayerCheck = 0;
            return;
        }

        isDungeon = false; //if you just completed a dungeon, this will be true and throw errors on enemy killed.

        if (!slayerTask.length) {
            selectNewSlayerTaskWithConfig();
        } //If there is no slayer task, get one

        const currentBoots = () => SEMIUtils.currentEquipmentInSlot('Boots');
        const currentCape = () => SEMIUtils.currentEquipmentInSlot('Cape');
        const currentHelmet = () => SEMIUtils.currentEquipmentInSlot('Helmet');
        const currentRing = () => SEMIUtils.currentEquipmentInSlot('Ring');
        const currentShield = () => SEMIUtils.currentEquipmentInSlot('Shield');

        if (autoSlayerCheck == 0) {
            autoSlayerCheck = 1;
            originalBoots = currentBoots();
            originalCape = currentCape();
            originalHelmet = currentHelmet();
            originalShield = currentShield();
            originalRing = currentRing();
        }

        if (
            SEMI.isEnabled('auto-slayer-skip') &&
            typeof monsterIDs !== 'undefined' &&
            monsterIDs.includes(slayerTask[0].monsterID)
        ) {
            selectNewSlayerTaskWithConfig();
        }

        if (slayerTask[0] == null) return;
        const needsItemMirrorShield = slayerAreas[1].monsters.includes(slayerTask[0].monsterID);
        const needsItemMagicalRing = slayerAreas[2].monsters.includes(slayerTask[0].monsterID);
        const needsItemDesertHat = slayerAreas[7].monsters.includes(slayerTask[0].monsterID);
        const needsItemBlazingLantern = slayerAreas[8].monsters.includes(slayerTask[0].monsterID);
        const needsItemClimbingBoots = slayerAreas[9].monsters.includes(slayerTask[0].monsterID);
        const needsClearIntoTheMist = slayerAreas[10].monsters.includes(slayerTask[0].monsterID);

        const hasItemMirrorShield = currentShield() == CONSTANTS.item.Mirror_Shield;
        const hasItemMagicalRing = currentRing() == CONSTANTS.item.Magical_Ring;
        const hasItemDesertHat = currentHelmet() == CONSTANTS.item.Desert_Hat;
        const hasItemBlazingLantern = currentShield() == CONSTANTS.item.Blazing_Lantern;
        const hasItemClimbingBoots = currentBoots() == CONSTANTS.item.Climbing_Boots;
        const hasItemSlayerSkillcape = currentCape() == CONSTANTS.item.Slayer_Skillcape;

        const skillCape = CONSTANTS.item.Slayer_Skillcape;

        //If you are fighting an enemy that isn't your current task, stop combat and switch to the task monster
        if (forcedEnemy !== slayerTask[0].monsterID || !SEMIUtils.isCurrentSkill('Hitpoints')) {
            if (SEMIUtils.isCurrentSkill('Hitpoints')) {
                SEMIUtils.stopSkill('Hitpoints');
            }
            for (let i = 0; i < combatAreas.length; i++) {
                if (combatAreas[i].areaName == findEnemyArea(slayerTask[0].monsterID)) {
                    selectedCombatArea = i;
                    break;
                }
            }

            //Equips Slayer Skillcape if owned
            if (
                SEMIUtils.currentLevel('Slayer') >= 99 &&
                (checkBankForItem(skillCape) || hasItemSlayerSkillcape) &&
                SEMI.isEnabled('auto-slayer-equip')
            ) {
                if (!hasItemSlayerSkillcape) {
                    originalCape = currentCape();
                    found = SEMIUtils.equipFromBank(skillCape);
                }
            } else if (
                (needsItemMirrorShield ||
                    needsItemMagicalRing ||
                    needsItemDesertHat ||
                    needsItemBlazingLantern ||
                    needsItemClimbingBoots) &&
                !SEMI.isEnabled('auto-slayer-equip')
            ) {
                //skips task if unequipped for the zone and the monster is in an equipment-restricted zone with AS AutoEquip off
                if (
                    (needsItemMirrorShield && !hasItemMirrorShield) ||
                    (needsItemMagicalRing && !hasItemMagicalRing) ||
                    (needsItemDesertHat && !hasItemDesertHat) ||
                    (needsItemBlazingLantern && !hasItemBlazingLantern) ||
                    (needsItemClimbingBoots && !hasItemClimbingBoots)
                ) {
                    selectNewSlayerTaskWithConfig();
                }
            } else if (SEMI.isEnabled('auto-slayer-equip')) {
                //Equips Mirror Shield for area
                if (needsItemMirrorShield) {
                    if (!hasItemMirrorShield) {
                        originalShield = currentShield();
                        if (currentShield() == 0 || !getBankId(CONSTANTS.item.Mirror_Shield)) {
                            selectNewSlayerTaskWithConfig();
                            notifyPlayer(
                                CONSTANTS.skill.Slayer,
                                'Skipping task due to 2-handed weapon or missing shield!'
                            );
                        } else {
                            found = SEMIUtils.equipFromBank(CONSTANTS.item.Mirror_Shield);
                        }
                    }
                } else if (needsItemMagicalRing) {
                    //Equips Magical Ring for area
                    if (!hasItemMagicalRing) {
                        if (!getBankId(CONSTANTS.item.Magical_Ring)) {
                            selectNewSlayerTaskWithConfig();
                            notifyPlayer(CONSTANTS.skill.Slayer, 'Skipping task due to missing ring!');
                        }
                        originalRing = currentRing();
                        found = SEMIUtils.equipFromBank(CONSTANTS.item.Magical_Ring);
                    }
                } else if (needsItemDesertHat) {
                    //Equips Magical Ring for area
                    if (!hasItemDesertHat) {
                        if (!getBankId(CONSTANTS.item.Desert_Hat)) {
                            selectNewSlayerTaskWithConfig();
                            notifyPlayer(CONSTANTS.skill.Slayer, 'Skipping task due to missing helmet!');
                        }
                        originalHelmet = currentHelmet();
                        found = SEMIUtils.equipFromBank(CONSTANTS.item.Desert_Hat);
                    }
                } else if (needsItemBlazingLantern) {
                    //Equips Blazing Lantern for area
                    if (!hasItemBlazingLantern) {
                        if (!getBankId(CONSTANTS.item.Blazing_Lantern)) {
                            selectNewSlayerTaskWithConfig();
                            notifyPlayer(CONSTANTS.skill.Slayer, 'Skipping task due to missing shield!');
                        }
                        originalShield = currentShield();
                        found = SEMIUtils.equipFromBank(CONSTANTS.item.Blazing_Lantern);
                    }
                } else if (needsItemClimbingBoots) {
                    //Equips Climbing Boots for area
                    if (!hasItemClimbingBoots) {
                        if (!getBankId(CONSTANTS.item.Climbing_Boots)) {
                            selectNewSlayerTaskWithConfig();
                            notifyPlayer(CONSTANTS.skill.Slayer, 'Skipping task due to missing boots!');
                        }
                        originalBoots = currentBoots();
                        found = SEMIUtils.equipFromBank(CONSTANTS.item.Climbing_Boots);
                    }
                } else if (
                    !(needsItemMirrorShield && !hasItemMirrorShield) ||
                    (needsItemMagicalRing && !hasItemMagicalRing) ||
                    (needsItemDesertHat && !hasItemDesertHat) ||
                    (needsItemBlazingLantern && !hasItemBlazingLantern) ||
                    (needsItemClimbingBoots && !hasItemClimbingBoots)
                ) {
                    slayerLockedItem = null; // Ensures the game will allow us to unequip slayer equipment

                    //Equips original shield when not in Area
                    if (hasItemMirrorShield && originalShield != CONSTANTS.item.Mirror_Shield) {
                        found = SEMIUtils.equipFromBank(originalShield);
                    }
                    //Equips original ring when not in Area
                    if (hasItemMagicalRing && originalRing != CONSTANTS.item.Magical_Ring) {
                        found = SEMIUtils.equipFromBank(originalRing);
                    }
                    //Equips original helmet when not in Area
                    if (hasItemDesertHat && originalHelmet != CONSTANTS.item.Desert_Hat) {
                        found = SEMIUtils.equipFromBank(originalHelmet);
                    }
                    //Equips original shield when not in Area
                    if (hasItemBlazingLantern && originalShield != CONSTANTS.item.Blazing_Lantern) {
                        found = SEMIUtils.equipFromBank(originalShield);
                    }
                    //Equips original boots when not in Area
                    if (hasItemClimbingBoots && originalBoots != CONSTANTS.item.Blazing_Lantern) {
                        found = SEMIUtils.equipFromBank(originalBoots);
                    }
                }
            }

            if (slayerTask[0] !== undefined) selectMonster(slayerTask[0].monsterID);
        }
    };

    //Config menu
    const hasConfig = true;
    const configMenu = `<div class="form-group">
        <label for="${id}-config-tasktier">Slayer Task Tier</label>
        <select id="${id}-config-tasktier" class="form-control">
            <option selected value="0">Easy</option>
            <option value="1">Normal</option>
            <option value="2">Hard</option>
            <option value="3">Elite</option>
            <option value="4">Master</option>
        </select>
    </div>`;

    const saveConfig = () => {
        let taskTier = Number(document.getElementById(`${id}-config-tasktier`).value);
        SEMI.setValue(id, 'taskTier', taskTier);
        SEMI.setItem(`${id}-config`, SEMI.getValues(id));

        SEMIUtils.customNotify(imgSrc, `Saved AutoSlayer Task Tier: ${SEMI.getValue(id, 'taskTier')}`, 3000);

        updateConfig();
    };

    const updateConfig = () => {
        document.getElementById(`${id}-config-tasktier`).value = SEMI.getValue(id, 'taskTier');
    };

    SEMI.add(id, {
        ms: 2000,
        pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT,
        title,
        desc,
        imgSrc,
        config,
        hasConfig,
        configMenu,
        saveConfig,
        updateConfig,
        onLoop: autoSlayer,
        skill: 'Combat',
    });
})();
