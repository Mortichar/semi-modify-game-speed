(() => {
    const id = 'auto-replant';
    const title = 'AutoReplant';
    const desc = 'AutoReplant will automatically farm everything for you, replanting the same seed when it harvests, buying and using compost when it needs to automatically.';
    const imgSrc = SEMI.skillImg('farming');

    //:: importing Melvor Auto Replant 1.6 by Arcanus on Greasyfork: https://greasyfork.org/en/scripts/394855-melvor-auto-replant
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
        var patchCheck;
        for (let i in newFarmingAreas) {
            for (let j in newFarmingAreas[i].patches) {
                const patch = newFarmingAreas[i].patches[j];
                if(patch.hasGrown) { patchCheck = true; }
            }
        }
        if(patchCheck && !isInCombat) {
            swapFarmingEquipment(true);
            SEMI.equipSwapConfig.script = id;
        }
        for (let i in newFarmingAreas) { for (let j in newFarmingAreas[i].patches) { handlePatch(i, j); } }
        if(SEMI.equipSwapConfig.script == id) {
            swapFarmingEquipment(false);
            SEMI.equipSwapConfig.script = '';
        }
    };

    /** @param {boolean} x */
    const swapFarmingEquipment = (x = true) => {
        if (x) {
            if(checkBankForItem(CONSTANTS.item.Bobs_Rake)) {SEMI.equipSwap(CONSTANTS.item.Bobs_Rake, 'Weapon')}
            if(checkBankForItem(CONSTANTS.item.Farming_Skillcape)) {SEMI.equipSwap(CONSTANTS.item.Farming_Skillcape, 'Cape')}
            if(checkBankForItem(CONSTANTS.item.Aorpheats_Signet_Ring)) {SEMI.equipSwap(CONSTANTS.item.Aorpheats_Signet_Ring, 'Ring')}
        } else {
            if(SEMI.currentEquipmentInSlot('Weapon') == CONSTANTS.item.Bobs_Rake && SEMI.equipSwapConfig['Weapon'].swapped) {SEMI.equipSwap(CONSTANTS.item.Bobs_Rake, 'Weapon')}
            if(SEMI.currentEquipmentInSlot('Cape') == CONSTANTS.item.Farming_Skillcape && SEMI.equipSwapConfig['Cape'].swapped) {SEMI.equipSwap(CONSTANTS.item.Farming_Skillcape, 'Cape')}
            if(SEMI.currentEquipmentInSlot('Ring') == CONSTANTS.item.Aorpheats_Signet_Ring && SEMI.equipSwapConfig['Ring'].swapped) {SEMI.equipSwap(CONSTANTS.item.Aorpheats_Signet_Ring, 'Ring')}
        }
    };

    //extracting the buy compost sections to make the autoReplant function cleaner
    const bot_getCompost = () => {
        if(checkBankForItem(CONSTANTS.item.Compost)) {
            const qty = SEMI.getBankQty(CONSTANTS.item.Compost);
            if(qty < 5) {
                buyQty = 5 - qty;
                buyCompost();
                SEMI.confirmAndCloseModal();
            }
        } else {
            buyQty = 5;
            buyCompost();
            SEMI.confirmAndCloseModal();
        }
    };


    SEMI.add(id, {ms: 5000, onLoop: autoReplant, desc, title, imgSrc});
})();