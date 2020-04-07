//***************************AUTO EAT***********************************
var autoEating = false;
var autoEatLoop;
var hp;
var hpmax;
var hpfoox;

function autoEat() {
    hp = combatData.player.hitpoints; //this number is already multiplied
    hpfood = numberMultiplier * items[equippedFood[currentCombatFood].itemID].healsFor; //numberMultiplier = 10, adjusts hp math
    hpmax = skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier; //same here
    if (hp < (hpmax-hpfood) || hp<50) eatFood(); 
    if(equippedFood[currentCombatFood].qty < 1 ){ //cycle through food, added by rebelEpik
        for(i = 0; i < equippedFood.length; i++){
            if(equippedFood[i].qty > 0){
                selectEquippedFood(i);
                return;
            }
        }
    }
}

function toggleAutoEat() { 
    autoEating = !autoEating;
    $("#autoEatStatus").text((autoEating) ? 'Enabled' : 'Disabled');
    (autoEating) ? autoEatLoop = setInterval( () => { autoEat(); }, 500) : clearInterval(autoEatLoop);
}