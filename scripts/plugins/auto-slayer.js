/*
Melvor Slayer Task Selection Explanation

player slects new slayer task
minLevel and maxLevel is based on task difficulty
loop over all monsters
    skip if monster is not slayer-able (MONSTERS[i].canSlayer) or if monster is outside combat level range
    skip if monster is inside a slayer area with level requirement (slayerAreas[area[1]].slayerLevel) if not fullfilled
    if area has item requirement (slayerAreas[area[1]].slayerItem > 0)
        if melvor's auto-slayer is enabled
            skip if none of the following is equipped: required item, Slayer_Skillcape, Max_Skillcape, Cape_of_Completion

        if melvor's auto-slayer is disabled
            skip if the player never had one of the following items: required item, Slayer_Skillcape, Max_Skillcape, Cape_of_Completion
    
    if area has dungeon requirement (slayerAreas[area[1]].dungeonCompleted >= 0) 
        skip if dungeon clear requirement is not fullfilled

    if not skipped add monster to monsterSelection array

pick one random monster from the monsterSelection array
*/

(() => {
    const id = 'auto-slayer';
    const title = 'AutoSlayer';
    const desc = '';
    const imgSrc = SEMIUtils.skillImg('slayer');

    const config = {
        extend: false,
        skip: false,
    };

    // holds value for uneqipped equipment
    let originalItem = 0;
    let capePriority = [
        CONSTANTS.item.Slayer_Skillcape,
        CONSTANTS.item.Max_Skillcape,
        CONSTANTS.item.Cape_of_Completion,
    ];
    let waitForEnemyLoaded = false;

    const loop = () => {
        // on a character that has never accepted a slayer task
        if (slayerTask.length == 0) {
            notifyPlayer(CONSTANTS.skill.Slayer, 'No active slayer task found. Please start a new slayer task.');
            return;
        }

        // disable melvor's own auto-slayer as it makes no sense in combination with this plugin
        if (autoSlayer === true) {
            toggleSetting(32);
        }

        // auto-extend
        if (!slayerTask[0].extended && SEMI.getValue(id, 'extend')) {
            if (getSlayerTaskExtensionCost() <= slayerCoins) {
                extendSlayerTask();
            }
        }

        // because of timing issues we should not run the rest of the loop if an enemy is loading after issuing a jumpToEnemy function call
        if (waitForEnemyLoaded) {
            if (newEnemyLoading) {
                return;
            } else {
                waitForEnemyLoaded = false;
            }
        }

        //If you are fighting an enemy that isn't your current task, stop combat and switch to the task monster
        if (forcedEnemy !== slayerTask[0].monsterID || !SEMIUtils.isCurrentSkill('Hitpoints')) {
            if (SEMIUtils.isCurrentSkill('Hitpoints')) {
                SEMIUtils.stopSkill('Hitpoints');
            }

            waitForEnemyLoaded = false;

            let targetArea = findEnemyArea(slayerTask[0].monsterID, false);
            let requiredItem = slayerAreas[targetArea[1]].slayerItem;
            let requiredItemType = items[requiredItem].type;
            let ready = false;

            // re-equip original item, there is an edgecase where the same item is required again but it will simply reequip it
            if (originalItem > 0) {
                SEMIUtils.equipFromBank(originalItem);
                originalItem = 0;
            } else if (requiredItem > 0) {
                // there is no need to switch any items if the required item, a slayer, max or completion cape is equipped
                if (
                    capePriority.includes(SEMIUtils.currentEquipmentInSlot('Cape')) ||
                    requiredItem === SEMIUtils.currentEquipmentInSlot(requiredItemType)
                ) {
                    ready = true;
                }
                // overwrite required item with cape if available in bank
                else {
                    capePriority.forEach((item) => {
                        if (getBankId(item)) {
                            if (
                                // cape of completion needs a special check because its not equipable without completion
                                item !== CONSTANTS.item.Cape_of_Completion ||
                                (item === CONSTANTS.item.Cape_of_Completion && completionStats >= 100)
                            ) {
                                requiredItem = item;
                                requiredItemType = 'Cape';
                            }
                        }
                    });
                }

                if (!ready && getBankId(requiredItem)) {
                    originalItem = SEMIUtils.currentEquipmentInSlot(items[requiredItem].type);
                    ready = SEMIUtils.equipFromBank(requiredItem);
                }
            } else {
                ready = true;
                8;
            }

            if (ready) {
                // jumpToEnemy instead of selectMonster because selectMonster does not check for equipment requirements
                jumpToEnemy(slayerTask[0].monsterID);
                waitForEnemyLoaded = true;
            } else {
                if (SEMI.getValue(id, 'skip')) {
                    // pick a new slayer task with the same difficulty setting
                    selectNewSlayerTask(slayerTask[0].tier);
                } else {
                    notifyPlayer(
                        CONSTANTS.skill.Slayer,
                        'Missing equipment for slayer task! Manually select new task or enable auto-skip option.'
                    );
                }
            }
        }
    };

    //Config menu
    const hasConfig = true;
    const configMenu = `<div class="form-group" style="max-width: 300px;">
        <b>Auto-Extend</b><br/>
        <span>Enable this option to auto-extend all slayer tasks. This will check periodicaly if enough slayer coins are available and extend if possible.</span>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="${id}-config-extend" name="${id}-config-extend">
            <label class="custom-control-label" for="${id}-config-extend">Enabled</label>
        </div>
        <br/>
        <b>Auto-Skip</b><br/>
        <span>Enable this option to auto-skip all slayer tasks if the required equipment is not available.</span>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="${id}-config-skip" name="${id}-config-skip">
            <label class="custom-control-label" for="${id}-config-skip">Enabled</label>
        </div>
    </div>`;

    const saveConfig = () => {
        let extend = Number(document.getElementById(`${id}-config-extend`).checked);
        let skip = Number(document.getElementById(`${id}-config-skip`).checked);
        SEMI.setValue(id, 'extend', extend);
        SEMI.setValue(id, 'skip', skip);
        SEMI.setItem(`${id}-config`, SEMI.getValues(id));

        SEMIUtils.customNotify(imgSrc, `Saved AutoSlayer`, 3000);

        updateConfig();
    };

    const updateConfig = () => {
        document.getElementById(`${id}-config-extend`).checked = SEMI.getValue(id, 'extend');
        document.getElementById(`${id}-config-skip`).checked = SEMI.getValue(id, 'skip');
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
        onLoop: loop,
        skill: 'Combat',
    });
})();
