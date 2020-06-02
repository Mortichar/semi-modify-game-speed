(() => {
    const id = 'auto-replant';
    const title = 'AutoReplant';
    const desc = 'AutoReplant will automatically farm everything for you, replanting the same seed when it harvests, buying and using compost when it needs to automatically.';
    const imgSrc = SEMI.skillImg('farming');

    //:: importing Melvor Auto Replant 1.6 by Arcanus on Greasyfork: https://greasyfork.org/en/scripts/394855-melvor-auto-replant
    // updated with a change from 1.7: gloop!
    // AW changes: added respect for katorone bot gp limit, extracted getCompost into a separate function

    const canBuyCompost = (n = 5) => {
        if(equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Farming_Skillcape) { return false; } // No need to buy with a cape
        if(!katoroneOn) {return true; }
        const cost = (n * items[CONSTANTS.item.Compost].buysFor);
        const balanceAfter = (gp - cost);
        if((katBot.reserveGold > 0) && (balanceAfter > katBot.reserveGold)){ return true; }
        if(katBot.reserveGold == 0) { return true; }
    };

    const handlePatch = (i, j) => {
        const patch = newFarmingAreas[i].patches[j];
        if(!patch.hasGrown) { return; }
        let lastSeed = patch.seedID;
        let grownID = items[lastSeed].grownItemID;
        if(!(checkBankForItem(grownID) || bankMax + baseBankMax > bank.length)) { return; }
        harvestSeed(i,j);
        if(equippedFood.find(food => food.itemID === grownID) && checkBankForItem(grownID)) { equipFood(getBankId(grownID), grownID, bank[getBankId(grownID)].qty); }
        if(!checkBankForItem(lastSeed)) { return; }
        if(checkBankForItem(CONSTANTS.item.Weird_Gloop)) {
            addGloop(i,j);
        } else if(farmingMastery[items[lastSeed].masteryID].mastery < 50) {
            if(canBuyCompost()) { bot_getCompost(); } //adding&tweaking script modification by rebelEpik
            addCompost(i,j,5);
        }
        selectedPatch = [i,j];
        selectedSeed = lastSeed;
        plantSeed();
    };

    const autoReplant = () => {
        for (let i in newFarmingAreas) { for (let j in newFarmingAreas[i].patches) { handlePatch(i, j); } }
    };
    //:: end of import of Melvor Auto Replant. Beautiful script.

    //extracting the buy compost sections to make the autoReplant function cleaner
    const bot_getCompost = () => {
        if(checkBankForItem(CONSTANTS.item.Compost)) {
            const qty = SEMI.getBankQty(CONSTANTS.item.Compost);
            if(qty < 5) {
                buyQty = 5 - qty;
                buyCompost();
            }
        } else {
            buyQty = 5;
            buyCompost();
        }
    };


    SEMI.add(id, {ms: 5000, onLoop: autoReplant, desc, title, imgSrc});
})();