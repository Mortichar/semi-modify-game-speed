// Importing Auto Slayer by Bubbalova. Using a modified version of script v1.2.1.

var autoEquipZone = false;
function toggleAutoEquip() {
    autoEquipZone = !autoEquipZone;
    $("#autoEquipStatus").text( (autoEquipZone) ? 'Enabled' : 'Disabled');
}


var autoSlayerEnabled = false;
var autoSlayerCheck = 0;

//Holds values for unequipped equipment
    var originalRing;
    var originalShield;
    var originalCape;

var updateAutoSlayerButtonText = function () { 
    $('#auto-slayer-button-status').text((autoSlayerEnabled) ? 'Enabled' : 'Disabled'); 
    $('#auto-slayer-button-status').css('color', (autoSlayerEnabled) ? 'gold' : '');
} 

var toggleAutoSlayer = function () {
    autoSlayerEnabled = !autoSlayerEnabled; //interesting way to toggle. i like it better than my bs way. seems like the 'right' way. maybe it's just the jqueryui way. nope, all bool way.
    updateAutoSlayerButtonText();
    setTimeout(function() {
        if (!autoSlayerEnabled) {
            stopCombat(false, true, true); 
            customNotify('assets/media/skills/slayer/slayer.svg', 'AutoSlayer is now disabled.');
            if (autocombat) terminateAutoCombat('robo-slayer juice. AutoSlayer was disabled, so AutoCombat will follow suit.');
        } else { 
            changePage(13) 
            customNotify('assets/media/skills/slayer/slayer.svg', 'AutoSlayer is now running.');
        }
    }, 100);
}

//Main function
var autoSlayer = function() {
    if (!autoSlayerEnabled) {
        autoSlayerCheck = 0;
        return;
    }
    //Slayer areas that require items
    //aw: defunct in melvor v0.13
    var strangeCave = 10;
    var highLands = 11;
    //slayerAreas[1] = strangeCave
    //slayerAreas[2] = highLands
    //probably best to change if conditions to "if slayer monster is in these areas, do this"
    
    isDungeon = false; //if you just completed a dungeon, this will be true and throw errors on enemy killed.

    if (!slayerTask.length) getSlayerTask(); //If there is no slayer task, get one
    
    if(autoSlayerCheck == 0){
        autoSlayerCheck = 1;
        originalCape = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Cape];
        originalShield = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield];
        originalRing = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring];
    }

    if (ASAutoSkipOn) slayerSkip();
    
    //If you are fighting an enemy that isn't your current task, stop combat and switch to the task monster
    if (forcedEnemy !== slayerTask[0].monsterID || !isInCombat) {
        if (isInCombat) stopCombat(false, true, true);
        for(let i=0; i<combatAreas.length; i++){
            if (combatAreas[i].areaName == findEnemyArea(slayerTask[0].monsterID)) {
                selectedCombatArea = i;
                break;
            }
        }
        //Equips Slayer Skillcape if owned
        if(skillLevel[CONSTANTS.skill.Slayer] >= 99 && checkBankForItem(CONSTANTS.item.Slayer_Skillcape) || equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Cape] == CONSTANTS.item.Slayer_Skillcape){
            if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Cape] != CONSTANTS.item.Slayer_Skillcape){
                originalCape = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Cape]
                for (let i = 0; i < bank.length; i++) {
                    if(items[bank[i].id].name == "Slayer Skillcape") {
                        equipItem(i, CONSTANTS.item.Slayer_Skillcape, 1, selectedEquipmentSet)
                        found = true
                        break;
                    }
                }
            }
        }
        //skips task if unequipped for the zone and the monster is in an equipment-restricted zone with AS AutoEquip off
        else if( (slayerAreas[1].monsters.includes(slayerTask[0].monsterID) || slayerAreas[2].monsters.includes(slayerTask[0].monsterID)) && !autoEquipZone ) {
            if(slayerAreas[1].monsters.includes(slayerTask[0].monsterID) && equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] != CONSTANTS.item.Mirror_Shield) {
                newSlayerTask();
            } else if (slayerAreas[2].monsters.includes(slayerTask[0].monsterID) && equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring] != CONSTANTS.item.Magical_Ring) {
                newSlayerTask();
            }
        }
        //Equips Mirror Shield for area
        else if(slayerAreas[1].monsters.includes(slayerTask[0].monsterID) && autoEquipZone) {
            if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] != CONSTANTS.item.Mirror_Shield) {
                originalShield = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield];
                if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] == 0) {
                    newSlayerTask();
                    notifyPlayer(CONSTANTS.skill.Slayer, "Skipping task due to 2-handed weapon!");
                } else {
                    for (let i = 0; i < bank.length; i++) {
                        if(items[bank[i].id].name == "Mirror Shield") {
                            equipItem(i, CONSTANTS.item.Mirror_Shield, 1, selectedEquipmentSet)
                            found = true
                            break;
                        }
                    }
                }
            }
        }
        //Equips Magical Ring for area
        else if(slayerAreas[2].monsters.includes(slayerTask[0].monsterID) && autoEquipZone) {
            if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring] != CONSTANTS.item.Magical_Ring) {
                originalRing = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring];
                for (let i = 0; i < bank.length; i++) {
                    if(items[bank[i].id].name == "Magical Ring") { //aw: removed typeof() because broken.
                        equipItem(i, CONSTANTS.item.Magical_Ring, 1, selectedEquipmentSet)
                        found = true
                        break;
                    }
                }
            }
        }
        else if( !(slayerAreas[1].monsters.includes(slayerTask[0].monsterID) || slayerAreas[2].monsters.includes(slayerTask[0].monsterID)) && autoEquipZone){
            
            slayerLockedItem = null; //not sure what this does, added in Auto Slayer 1.2.1
            
            //Equips original shield when not in Area
            if ( (equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] == CONSTANTS.item.Mirror_Shield && originalShield != CONSTANTS.item.Mirror_Shield && originalShield != undefined) && autoEquipZone){
                for (let i = 0; i < bank.length; i++) {
                    if(items[bank[i].id].name == items[originalShield].name) {
                        equipItem(i, originalShield, 1, selectedEquipmentSet)
                        found = true
                        break
                    }
                }
            }
            //Equips original ring when not in Area
            if ( (equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring] == CONSTANTS.item.Magical_Ring && originalRing != CONSTANTS.item.Magical_Ring && originalRing != undefined) && autoEquipZone){
                for (let i = 0; i < bank.length; i++) {
                    if(items[bank[i].id].name == items[originalRing].name) {
                        equipItem(i, originalRing, 1, selectedEquipmentSet)
                        found = true
                        break
                    }
                }
            }
        }
        selectMonster(slayerTask[0].monsterID);
    }
}

var autoSlayerTimer = setInterval(function(){autoSlayer();}, 2000); //idk how i feel about this always being on rn... guess it's ok cuz it will just check if running and return. doesn't seem to be heavy in bg.
// End of AutoSlayer!

// AS AutoSkip
var ASAutoSkipOn = false;
let monsterIDs = [69, 13, 0, 72, 74]; //master farmer, moist monster, black knight, mithril knight, rune knight

function slayerSkip() {
    if (monsterIDs.includes(slayerTask[0].monsterID)) { newSlayerTask(); }
}

function toggleASAutoSkip () {
    ASAutoSkipOn = !ASAutoSkipOn;
    $("#as-auto-skip-status").text( (ASAutoSkipOn) ? 'Enabled' : 'Disabled');
}