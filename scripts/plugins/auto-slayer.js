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

    let autoSlayerCheck = 0;

    //Holds values for unequipped equipment
    let originalRing;
    let originalShield;
    let originalCape;

    //Main function
    const autoSlayer = () => {
        if (!SEMI.isEnabled(id)) {
            autoSlayerCheck = 0;
            return;
        }

        isDungeon = false; //if you just completed a dungeon, this will be true and throw errors on enemy killed.

        if (!slayerTask.length) {
            getSlayerTask();
        } //If there is no slayer task, get one

        const currentCape = () => SEMIUtils.currentEquipmentInSlot('Cape');
        const currentRing = () => SEMIUtils.currentEquipmentInSlot('Ring');
        const currentShield = () => SEMIUtils.currentEquipmentInSlot('Shield');

        if (autoSlayerCheck == 0) {
            autoSlayerCheck = 1;
            originalCape = currentCape();
            originalShield = currentShield();
            originalRing = currentRing();
        }

        if (
            SEMI.isEnabled('auto-slayer-skip') &&
            typeof monsterIDs !== 'undefined' &&
            monsterIDs.includes(slayerTask[0].monsterID)
        ) {
            newSlayerTask();
        }

        if (slayerTask[0] == null) return;
        const needsShield = slayerAreas[1].monsters.includes(slayerTask[0].monsterID);
        const needsRing = slayerAreas[2].monsters.includes(slayerTask[0].monsterID);

        const hasShield = currentShield() == CONSTANTS.item.Mirror_Shield;
        const hasRing = currentRing() == CONSTANTS.item.Magical_Ring;
        const hasCape = currentCape() == CONSTANTS.item.Slayer_Skillcape;

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
                (checkBankForItem(skillCape) || hasCape) &&
                SEMI.isEnabled('auto-slayer-equip')
            ) {
                if (!hasCape) {
                    originalCape = currentCape();
                    found = SEMIUtils.equipFromBank(skillCape);
                }
            } else if ((needsShield || needsRing) && !SEMI.isEnabled('auto-slayer-equip')) {
                //skips task if unequipped for the zone and the monster is in an equipment-restricted zone with AS AutoEquip off
                if (needsShield && !hasShield) {
                    newSlayerTask();
                } else if (needsRing && !hasRing) {
                    newSlayerTask();
                }
            } else if (SEMI.isEnabled('auto-slayer-equip')) {
                //Equips Mirror Shield for area
                if (needsShield) {
                    if (!hasShield) {
                        originalShield = currentShield();
                        if (currentShield() == 0 || !getBankId(CONSTANTS.item.Mirror_Shield)) {
                            newSlayerTask();
                            notifyPlayer(
                                CONSTANTS.skill.Slayer,
                                'Skipping task due to 2-handed weapon or missing shield!'
                            );
                        } else {
                            found = SEMIUtils.equipFromBank(CONSTANTS.item.Mirror_Shield);
                        }
                    }
                } else if (needsRing) {
                    //Equips Magical Ring for area
                    if (!hasRing) {
                        if (!getBankId(CONSTANTS.item.Magical_Ring)) {
                            newSlayerTask();
                            notifyPlayer(CONSTANTS.skill.Slayer, 'Skipping task due to missing ring!');
                        }
                        originalRing = currentRing();
                        found = SEMIUtils.equipFromBank(CONSTANTS.item.Magical_Ring);
                    }
                } else if (!(needsShield || needsRing)) {
                    slayerLockedItem = null; // Ensures the game will allow us to unequip slayer equipment

                    //Equips original shield when not in Area
                    if (hasShield && originalShield != CONSTANTS.item.Mirror_Shield) {
                        found = SEMIUtils.equipFromBank(originalShield);
                    }
                    //Equips original ring when not in Area
                    if (hasRing && originalRing != CONSTANTS.item.Magical_Ring) {
                        found = SEMIUtils.equipFromBank(originalRing);
                    }
                }
            }

            if (slayerTask[0] !== undefined) selectMonster(slayerTask[0].monsterID);
        }
    };

    SEMI.add(id, {
        ms: 2000,
        pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT,
        title,
        desc,
        imgSrc,
        onLoop: autoSlayer,
        skill: 'Combat',
    });
})();
