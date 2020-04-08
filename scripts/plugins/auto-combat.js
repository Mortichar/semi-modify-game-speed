//***************************AUTO COMBAT***********************************
var autocombat;
var autocombatloop;

//AutoCombat Main Function
function autocombatfunc() {
    if (equippedFood[currentCombatFood].qty < 1) { 
        terminateAutoCombat('food.');
    } 
    if ((items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged || (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === "Ranged Weapon") ) && ammo<500) {
        if (!isDungeon) { 
            for (let i = 0; i < bank.length; i++) {
                if(items[bank[i].id].name == items[equippedItems[CONSTANTS.equipmentSlot.Quiver]].name && items[equippedItems[CONSTANTS.equipmentSlot.Quiver]].name !== "Normal Logs" ) { 
                    equipItem(i, equippedItems[CONSTANTS.equipmentSlot.Quiver], 1000, selectedEquipmentSet);
                    customNotify(items[equippedItems[CONSTANTS.equipmentSlot.Quiver]].media,'SEMI just equipped 1000 '+ items[equippedItems[CONSTANTS.equipmentSlot.Quiver]].name+'.',5000);
                }
            }
        }
    }
    if ((items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged || (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === "Ranged Weapon") ) && ammo < 1) { 
        terminateAutoCombat('ammo.');
    }
    if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic && !checkRuneCount(selectedSpell) ) { 
        terminateAutoCombat('runes.');
    }
    if (!(droppedLoot == "") && autoLoot) lootAll(); //the truth condition was always true. now it ACTUALLY checks when empty and shouldn't run lootAll() every half-second, which caused big issues.
}

//***************************END AUTO COMBAT*******************************
//Autocombat Auxiliaries
function terminateAutoCombat(reason) { 
    var today = new Date(); //this and next three lines are date & time function from https://tecadmin.net/get-current-date-time-javascript/
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' @ '+time;
    clearInterval(autocombatloop); 
    stopCombat(false, true, true);
    autocombat = false;
    updateACstatus();
    alert('SEMI: Exited Auto Combat @ '+dateTime+' because '+username+' is out of '+reason);//upgrade to jqueryui modal dialog
    autoSlayerEnabled = false; //connecting to auto slayer script by bubbalova from greasefork in tampermonkey
    updateAutoSlayerButtonText(); //yay, automatically turns off auto slayer! kewls
}

function updateACstatus() { 
    $("#autocombatStatus").text((autocombat) ? 'Enabled' : 'Disabled'); 
    $("#autocombatStatus").css('color', (autocombat) ? 'gold' : '');
}

function toggleautocombat() { //button -> function that enables auto combat
    if (!isInCombat) { terminateAutoCombat("common sense... You aren't in combat!"); return; } 
    autocombat = !autocombat;
    updateACstatus();
    if (!autocombat) {
        clearInterval(autocombatloop);
        terminateAutoCombat("orders: you have given the command to stop.");
    } else { 
        autocombatloop = setInterval(() => { autocombatfunc(); }, 500);
        customNotify('assets/media/skills/combat/combat.svg','AutoCombat is now running.');
    }
}

//toggle AutoLoot option
var autoLoot = true;

function toggleAutoLoot() { 
    autoLoot = !autoLoot;
    $("#autoLootStatus").text((autoLoot) ? 'Enabled' : 'Disabled');
}
//End of Autocombat Auxiliaries
