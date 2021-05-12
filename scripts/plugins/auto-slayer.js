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
    const desc = `If using AutoSlayerSkip, it will select a new slayer task within the same tier. Using the Skip option in the AutoSlayer menu will allow you to cycle to a new slayer task in the same tier if you don't have the proper equipment for a currently assigned task. Leave it off if you want to manually select a new tier when complete. Extend option will attempt to extend your current task if you have the coins.`;
    const imgSrc = SEMIUtils.skillImg('slayer');

    const config = {
        autodisable: false,
        extend: false,
        unmet: false,
    };

    // holds value for unequipped equipment
    let originalItem = 0;
    let capePriority = [
        CONSTANTS.item.Slayer_Skillcape,
        CONSTANTS.item.Max_Skillcape,
        CONSTANTS.item.Cape_of_Completion,
    ];
    let waitForEnemyLoaded = false;

    // create equipment slot lookup
    let equipmentSlotNames = [];
    Object.keys(CONSTANTS.equipmentSlot).forEach((key) => {
        equipmentSlotNames[CONSTANTS.equipmentSlot[key]] = key;
    });

    // just simple hook to log when new task starts
    //const _getSlayerTask = getSlayerTask;
    //getSlayerTask = (...args) => {
    //    _getSlayerTask(...args);
    //    debugLog(`New Slayer Task: ${MONSTERS[slayerTask[0].monsterID].name} [${slayerTask[0].monsterID}] x ${slayerTask[0].count}`);
    //}

    const loop = () => {
        // on a character that has never accepted a slayer task
        if (slayerTask.length == 0) {
            notifyPlayer(CONSTANTS.skill.Slayer, 'No active slayer task found. Please start a new slayer task.');
            return;
        }

        const isSlayerTaskDisabled = () => {
            return (
                SEMI.isEnabled('auto-slayer-skip') &&
                typeof SEMI.getItem('ASS-monsterIDS') !== 'undefined' &&
                SEMI.getItem('ASS-monsterIDs').includes(slayerTask[0].monsterID)
            );
        };

        const stopCombat = () => {
            if (SEMIUtils.isCurrentSkill('Hitpoints')) {
                SEMIUtils.stopSkill('Hitpoints');
            }
        };

        // in-game auto-slayer checks for equipment before deciding on the slayer target
        // keeping it enabled can let the user avoid certain areas without requiring spending tokens
        // by just not equipping gear for areas they don't wish to go to.
        if (SEMI.getValue(id, 'autodisable')) {
            if (autoSlayer === true) {
                toggleSetting(32);
            }
        }

        //if semi auto-slayer-skip is on, skip them unwanteds
        if (isSlayerTaskDisabled()) {
            // If we are currently in combat, we need to exit immediately and ensure we aren't one-shot
            stopCombat();
            // pick a new slayer task with the same difficulty setting
            selectNewSlayerTask(slayerTask[0].tier);

            // Exit so we can recheck the assignment upon loop
            return;
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
            stopCombat();

            waitForEnemyLoaded = false;

            let targetArea = findEnemyArea(slayerTask[0].monsterID, false);
            let requiredItem = -1;
            let requiredItemType = -1;
            let ready = false;

            // some enemies like wandering bard don't have an area, causes undefined error when getting item
            // also make sure we're in a slayer area before checking if we need a slayer item
            if (targetArea[0] === 1) {
                requiredItem = slayerAreas[targetArea[1]].slayerItem;
                if (requiredItem > 0) {
                    requiredItemType = equipmentSlotNames[items[requiredItem].equipmentSlot]; // equipmentSlot is a number, but `SEMIUtils.currentEquipmentInSlot()` expects a string
                }
            }

            // re-equip original item, there is an edgecase where the same item is required again but it will simply reequip it
            if (originalItem > 0) {
                debugLog(`Re-equipped Item: ${items[originalItem].name} [${originalItem}] [${requiredItemType}]`);
                SEMIUtils.equipFromBank(originalItem);
                originalItem = 0;
            }

            // equip required item
            if (requiredItem > 0) {
                debugLog(`Required Item: ${items[requiredItem].name} [${requiredItem}] [${requiredItemType}]`);

                // there is no need to switch any items if the required item, a slayer, max or completion cape is equipped
                if (
                    capePriority.includes(SEMIUtils.currentEquipmentInSlot('Cape')) ||
                    requiredItem === SEMIUtils.currentEquipmentInSlot(requiredItemType)
                ) {
                    debugLog(`Required item is already equipped.`);
                    ready = true;
                }
                // overwrite required item with cape if available in bank
                else {
                    capePriority.forEach((item) => {
                        if (SEMIUtils.getBankId(item)) {
                            if (
                                // cape of completion needs a special check because its not equipable without completion
                                item !== CONSTANTS.item.Cape_of_Completion ||
                                (item === CONSTANTS.item.Cape_of_Completion && completionStats >= 100)
                            ) {
                                requiredItem = item;
                                requiredItemType = 'Cape';
                                debugLog(`Using ${items[requiredItem].name} as Slayer Item Requirement.`);
                            }
                        }
                    });
                }

                if (!ready && SEMIUtils.getBankId(requiredItem)) {
                    originalItem = SEMIUtils.currentEquipmentInSlot(
                        equipmentSlotNames[items[requiredItem].equipmentSlot]
                    );
                    ready = SEMIUtils.equipFromBank(requiredItem);
                    debugLog(
                        `Storing equipped item to equip slayer item: ${items[originalItem].name} [${originalItem}]`
                    );
                }
            } else {
                debugLog(`Nothing special required, is ready.`);
                ready = true;
            }

            if (ready) {
                // jumpToEnemy instead of selectMonster because selectMonster does not check for equipment requirements
                jumpToEnemy(slayerTask[0].monsterID);
                waitForEnemyLoaded = true;
            } else {
                if (SEMI.getValue(id, 'unmet')) {
                    // pick a new slayer task with the same difficulty setting
                    debugLog(`Required item not found, getting a new task.`);
                    selectNewSlayerTask(slayerTask[0].tier);
                } else {
                    debugLog(`Missing equipment "${items[requiredItem].name}"`);
                    notifyPlayer(
                        CONSTANTS.skill.Slayer,
                        `Missing equipment "${items[requiredItem].name}" for slayer task! Manually select new task or enable auto-skip unmet requirements option.`
                    );
                }
            }
        }
    };

    //Config menu
    const hasConfig = true;
    const configMenu = `<div class="form-group" style="max-width: 300px;">
        <b>Disable In-Game Auto-Slayer</b><br/>
        <span>Enable this option to disable the in-game auto slayer if enabled.</span>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="${id}-config-disable-auto" name="${id}-config-disable-auto">
            <label class="custom-control-label" for="${id}-config-disable-auto">Enabled</label>
        </div>
        <br/>
        <b>Auto-Extend</b><br/>
        <span>Enable this option to auto-extend all slayer tasks. This will check periodicaly if enough slayer coins are available and extend if possible.</span>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="${id}-config-extend" name="${id}-config-extend">
            <label class="custom-control-label" for="${id}-config-extend">Enabled</label>
        </div>
        <br/>
        <b>Auto-Skip Unmet Requirements</b><br/>
        <span>Enable this option to auto-skip all slayer tasks if the required equipment is not available.</span>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="${id}-config-unmet" name="${id}-config-unmet">
            <label class="custom-control-label" for="${id}-config-unmet">Enabled</label>
        </div>
    </div>`;

    const saveConfig = () => {
        let autodisable = Number(document.getElementById(`${id}-config-disable-auto`).checked);
        let extend = Number(document.getElementById(`${id}-config-extend`).checked);
        let unmet = Number(document.getElementById(`${id}-config-unmet`).checked);
        SEMI.setValue(id, 'autodisable', autodisable);
        SEMI.setValue(id, 'extend', extend);
        SEMI.setValue(id, 'unmet', unmet);
        SEMI.setItem(`${id}-config`, SEMI.getValues(id));

        SEMIUtils.customNotify(imgSrc, `Saved ${title} Config`, {
            duration: 3000,
        });

        updateConfig();
    };

    const updateConfig = () => {
        document.getElementById(`${id}-config-disable-auto`).checked = SEMI.getValue(id, 'autodisable');
        document.getElementById(`${id}-config-extend`).checked = SEMI.getValue(id, 'extend');
        document.getElementById(`${id}-config-unmet`).checked = SEMI.getValue(id, 'unmet');
    };

    const debugLog = (msg) => {
        //console.debug(`[${title}] ${msg}`);
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
        skill: 'Slayer',
    });
})();
