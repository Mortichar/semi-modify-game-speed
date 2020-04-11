//:: importing Melvor Auto Replant 1.6 by Arcanus on Greasyfork: https://greasyfork.org/en/scripts/394855-melvor-auto-replant
// updated with a change from 1.7: gloop!
function autoReplant() {
    for (let i = 0; i < newFarmingAreas.length; i++) {
        for (let j = 0; j < newFarmingAreas[i].patches.length; j++) {
            if(newFarmingAreas[i].patches[j].hasGrown) {
                let lastSeed = newFarmingAreas[i].patches[j].seedID
                let grownID = items[newFarmingAreas[i].patches[j].seedID].grownItemID
                if(checkBankForItem(grownID) || bankMax+baseBankMax > bank.length) {
                    harvestSeed(i,j)
                    if(checkBankForItem(lastSeed)) {
                        if(checkBankForItem(CONSTANTS.item.Weird_Gloop)) {
                            addGloop(i,j)
                        } else if(farmingMastery[items[lastSeed].masteryID].mastery < 50) {
                            if(equippedItems[CONSTANTS.equipmentSlot.Cape] !== CONSTANTS.item.Farming_Skillcape) { //adding&tweaking script modification by rebelEpik
                                if(katoroneOn){
									if((bot_reserveGold > 0) && ((gp - (5*items[159].buysFor)) > bot_reserveGold)){
										bot_getCompost();
									} else if(bot_reserveGold==0) {
                                        bot_getCompost();
                                    }
								}else{
									bot_getCompost();
								}
                            }
                            addCompost(i,j,5)
                        }
                        selectedPatch = [i,j]
                        selectedSeed = lastSeed
                        plantSeed()
                    }
                    if (equippedFood.find(food => food.itemID === grownID) && checkBankForItem(grownID))
                        equipFood(getBankId(grownID),grownID,bank[getBankId(grownID)].qty)
                }
            }
        }
    }
}
//var autoReplantLoop = setInterval( () => { autoReplant() }, 5000);
//:: end of import of Melvor Auto Replant. Beautiful script.

//extracting the buy compost sections to make the autoReplant function cleaner
function bot_getCompost() {
    if(checkBankForItem(CONSTANTS.item.Compost)) {
        if(bank[getBankId(CONSTANTS.item.Compost)].qty < 5) {
            buyQty = 5 - bank[getBankId(CONSTANTS.item.Compost)].qty
            buyCompost()
        }
    } else {
        buyQty = 5
        buyCompost()
    }
}

//adding togbtn functions, togbtn is injected in setupSEMI()
var autoReplanting = false;
function toggleAutoReplant() {
    autoReplanting = !autoReplanting;
    $("#auto-replant-button-status").text( (autoReplanting) ? 'Enabled' : 'Disabled');
    (autoReplanting) ? autoReplantLoop = setInterval( () => { autoReplant() }, 5000) : clearInterval(autoReplantLoop);
}