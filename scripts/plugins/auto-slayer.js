// Importing Auto Slayer by Bubbalova. Using a modified version of script v1.2.1.
(() => {
    const id = 'auto-slayer-equip';
    const title = 'AutoSlayerEquip';
    const desc = 'The original Melvor Auto Slayer script by Bubbalova attempts to equip the Mirror Shield or Magic Ring when assigned a monster in zones that require them to enter. This option, disabled by default in SEMI, turns that functionality back on.';
    const imgSrc = 'assets/media/bank/mirror_shield.svg';
    SEMI.add(id, {ms: 0, pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT, title, desc, imgSrc});
})();

(() => {
    const id = 'auto-slayer';
    const title = 'AutoSlayer';
    const desc = 'AutoSlayer, based on Melvor Auto Slayer by Bubbalova, automatically seeks slayer tasks and sets out to kill that enemy. If you are assigned a monster in a zone that requires special equipment, this version of AutoSlayer will simply reroll your assignment and continue on by default, unless you are properly equipped or you turn on AS Auto Equip and have the correct items in the bank.';
    const imgSrc = SEMI.skillImg('slayer');

    let autoSlayerCheck = 0;

    //Holds values for unequipped equipment
    let originalRing;
    let originalShield;
    let originalCape;

    const updateAutoSlayerButtonText = () => {
        $(`#${id}-status`).css('color', (SEMI.isEnabled(id)) ? 'gold' : '');
    };

    /** @param {number?} item */
    const equipFromBank = (item) => {
        if(typeof item === 'undefined') {return false; }
        for (let i = 0; i < bank.length; i++) {
            if(items[bank[i].id].name == items[item].name) {
                equipItem(i, item, 1, selectedEquipmentSet);
                return true;
            }
        }
        return false;
    };

    //Main function
    const autoSlayer = () => {
        if (!SEMI.isEnabled(id)) {
            autoSlayerCheck = 0;
            return;
        }
        //Slayer areas that require items
        //aw: defunct in melvor v0.13
        let strangeCave = 10;
        let highLands = 11;
        //slayerAreas[1] = strangeCave
        //slayerAreas[2] = highLands
        //probably best to change if conditions to "if slayer monster is in these areas, do this"

        isDungeon = false; //if you just completed a dungeon, this will be true and throw errors on enemy killed.

        if (!slayerTask.length) { getSlayerTask(); } //If there is no slayer task, get one

        const currentCape      = () => SEMI.currentEquipmentInSlot('Cape');
        const currentRing      = () => SEMI.currentEquipmentInSlot('Ring');
        const currentShield    = () => SEMI.currentEquipmentInSlot('Shield');

        if(autoSlayerCheck == 0){
            autoSlayerCheck = 1;
            originalCape = currentCape();
            originalShield = currentShield();
            originalRing = currentRing();
        }

        if (SEMI.isEnabled('auto-slayer-skip')) slayerSkip();

        if (slayerTask[0] == null) return;
        const needsShield = slayerAreas[1].monsters.includes(slayerTask[0].monsterID);
        const needsRing = slayerAreas[2].monsters.includes(slayerTask[0].monsterID);

        const hasShield = currentShield() == CONSTANTS.item.Mirror_Shield;
        const hasRing = currentRing() == CONSTANTS.item.Magical_Ring;
        const hasCape = currentCape() == CONSTANTS.item.Slayer_Skillcape;

        const skillCape = CONSTANTS.item.Slayer_Skillcape;

        //If you are fighting an enemy that isn't your current task, stop combat and switch to the task monster
        if (forcedEnemy !== slayerTask[0].monsterID || !SEMI.isCurrentSkill('Hitpoints')) {
            if (SEMI.isCurrentSkill('Hitpoints')) { SEMI.stopSkill('Hitpoints'); }
            for(let i = 0; i < combatAreas.length; i++){
                if (combatAreas[i].areaName == findEnemyArea(slayerTask[0].monsterID)) {
                    selectedCombatArea = i;
                    break;
                }
            }
            //Equips Slayer Skillcape if owned
            if(SEMI.currentLevel('Slayer') >= 99 && checkBankForItem(skillCape) || hasCape){
                if(!hasCape) {
                    originalCape = currentCape();
                    found = equipFromBank(skillCape);
                }
            }

            //skips task if unequipped for the zone and the monster is in an equipment-restricted zone with AS AutoEquip off
            else if((needsShield || needsRing) && !SEMI.isEnabled('auto-slayer-equip')) {
                if(needsShield && !hasShield) {
                    newSlayerTask();
                } else if (needsRing && !hasRing) {
                    newSlayerTask();
                }
            } else if(SEMI.isEnabled('auto-slayer-equip')) {
                //Equips Mirror Shield for area
                if(needsShield) {
                    if(!hasShield) {
                        originalShield = currentShield();
                        if(currentShield() == 0) {
                            newSlayerTask();
                            notifyPlayer(CONSTANTS.skill.Slayer, 'Skipping task due to 2-handed weapon!');
                        } else {
                            found = equipFromBank(CONSTANTS.item.Mirror_Shield);
                        }
                    }
                }
                //Equips Magical Ring for area
                else if(needsRing) {
                    if(!hasRing) {
                        originalRing = currentRing();
                        found = equipFromBank(CONSTANTS.item.Magical_Ring);
                    }
                }
                else if(!(needsShield || needsRing)) {

                    slayerLockedItem = null; //not sure what this does, added in Auto Slayer 1.2.1

                    //Equips original shield when not in Area
                    if ((hasShield && originalShield != CONSTANTS.item.Mirror_Shield)){ found = equipFromBank(originalShield); }
                    //Equips original ring when not in Area
                    if ((hasRing && originalRing != CONSTANTS.item.Magical_Ring)){ found = equipFromBank(originalRing); }
                }
            }

            if (slayerTask[0] !== undefined) selectMonster(slayerTask[0].monsterID);
        }
    };
    // End of AutoSlayer!

    SEMI.add(id, {ms: 2000, pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT, title, desc, imgSrc, onToggle: updateAutoSlayerButtonText, onLoop: autoSlayer, skill: 'Combat'});
})();


// // AS AutoSkip
// let monsterIDs = [69, 13, 0, 72, 74]; //master farmer, moist monster, black knight, mithril knight, rune knight

const slayerSkip = () => {
    if (monsterIDs.includes(slayerTask[0].monsterID)) { newSlayerTask(); }
};