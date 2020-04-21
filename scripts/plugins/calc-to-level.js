//calculating items needed to reach selected level
function calcToLvl(skill) {
    const validSkills = [2, 3, 5, 13, 14, 15, 19]; //firemaking, cooking, smithing, fletching, crafting, runecrafting, herblore
    if (!validSkills.includes(skill)) return;
    const alternateCalcSkills = [5, 13, 14, 15]; //deeper nested...sigh
    const selectedItems = {
        '2': selectedLog,
        '3': selectedFood,
        '5': selectedSmith,
        '13': selectedFletch,
        '14': selectedCraft,
        '15': selectedRunecraft,
        '19': selectedHerblore };
    const selectedItem = selectedItems[skill];
    if (selectedItem == null) return;
    const itemDataMap = {'2': logsData, '3': items, '5': smithingItems, '13': fletchingItems, '14': craftingItems, '15': runecraftingItems, '19': herbloreItemData};
    const xpKeyMap = {'2': 'xp', '3': 'cookingXP', '5': 'smithingXP', '13': 'fletchingXP', '14': 'craftingXP', '15': 'runecraftingXP', '19': 'herbloreXP'};
    const xpKey = xpKeyMap[skill];
    let expToLvl = exp.level_to_xp(Number($("#"+skillName[skill]+"-lvl-in").val())) +1 - skillXP[skill];
    let itemsToLvl;
    //need to account for mastery here. preserves ores, increases XP in runecrafting.
    //omg need to account for fire type in cooking...AND burn chance without gloves... smithing gloves in smithing...jeeeeeez
    //also should probably try to make runecrafting more precise based on mastery level & xp gained per rune etc, if will reach higher mastery tier then etc
    if (alternateCalcSkills.includes(skill)) { itemsToLvl = Math.round((expToLvl) / items[itemDataMap[skill][selectedItem].itemID][xpKey]) + 1; }
    else { itemsToLvl = Math.round((expToLvl) / itemDataMap[skill][selectedItem][xpKey]) + 1; }
    $("#"+skillName[skill]+"-needed").text(numberWithCommas(itemsToLvl));
    let craftIntervals = {
        '2': 2000,
        '3': 3000,
        '5': 2000,
        '13': 2000,
        '14': 3000,
        '15': 2000,
        '19': 2000
    }
    if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Crafting_Skillcape) {
        craftIntervals[14] = 1500;
    }
    const craftTimeMin = (craftIntervals[skill]/1000)/60;
    let timeToLvl = itemsToLvl*craftTimeMin;
    $("#"+skillName[skill]+"-calc-time").text(formatTimeFromMinutes(timeToLvl));
}

function formatTimeFromMinutes(min) {
    let hrs = min/60;
    let days = hrs/24;
    if (min < 60) { return min.toFixed(1) + " min"; }
    else if (min < 1440) { return hrs.toFixed(1) + " hrs"; }
    else if (min >= 1440) { return days.toFixed(2) + " days"; }
}

//universal calc injector
//changeup. a small gold-border calculator image button, similar to the loot chest button in MICE.
//opens up a panel beneath crafting panel displaying table with infos like mastery/level calcs, estimated time, etc. Unless estimated time should be up above.
function calcItemsInjectBtn(skill=2) {
    const validSkills = [2, 3, 5, 13, 14, 15, 19]; //firemaking, cooking, smithing, fletching, crafting, runecrafting, herblore
    if (!validSkills.includes(skill)) { return; }
    return $(`
        <hr style="border-top: 1px solid gold !important;">
        <div class="col-12">
            How many of my selected item do I need to reach level <input type="number" id="`+ skillName[skill] +`-lvl-in" name="`+ skillName[skill] +`-lvl-in" min="2" max="99" style="width: 60px;">?
            <br>
            <div class="font-size-sm font-w600 text-uppercase text-center text-muted">
                <small class="mr-2">
                    <button type="button" class="btn btn-success m-3" onclick="calcToLvl(`+ skill +`);" title="You'll need to click this after selecting your craftable item, and click it each time you want to re-calculate.">Calculate</button>
                </small>
            </div>
            <hr>
            <span id="`+ skillName[skill] +`-needed">#</span> needed to reach selected level.
            <hr>
            Creating this many will take this much time: <span id="`+ skillName[skill] +`-calc-time">...</span>
        </div>`);
}

//move to semisetup
function injectItemsCalculators() {
    //firemaking injection
    $("#firemaking").children().children().first().append(calcItemsInjectBtn(2));
    //cooking injection
    $("#cooking").children().children().first().append(calcItemsInjectBtn(3));
    //smithing
    $("#smithing-category-container").children().children().children().first().append(calcItemsInjectBtn(5));
    //fletching
    $("#fletching-container .block-content.block-content-full").first().after(calcItemsInjectBtn(13));
    //crafting
    $("#crafting-container .block-content.block-content-full").first().after(calcItemsInjectBtn(14));
    //runecrafting
    $("#runecrafting-container .block-content.block-content-full").first().after(calcItemsInjectBtn(15));
    //herblore
    $('#herblore-progress').parent().parent().append(calcItemsInjectBtn(19));
}
function initializeCalcLvl() {
    $("#Firemaking-lvl-in").val(skillLevel[2]+1);
    $("#Cooking-lvl-in").val(skillLevel[3]+1);
    $("#Smithing-lvl-in").val(skillLevel[5]+1);
    $("#Fletching-lvl-in").val(skillLevel[13]+1);
    $("#Crafting-lvl-in").val(skillLevel[14]+1);
    $("#Runecrafting-lvl-in").val(skillLevel[15]+1);
    $("#Herblore-lvl-in").val(skillLevel[19]+1);
}
//injectItemsCalculators(); //not ready yet but we need to push automine bugfix
//setTimeout(() => { initializeCalcLvl() }, 5000);

/* from Xhaf on discord
function masterychance(mastery){
    //insert switch to return chance to preserve resources depending on mastery EXP (make sure to give new(higher) chance when a value from masteryLim is given)
}
const masteryLim = {} //masteryLim[skill] = :Array, mastery EXP at which a new chance to preserve resources starts

function items_to_level(expToLvl, expPerItem, currentMastery, masteryLim){ //this function makes iterative guesses at the number of required actions and compares them to the number of actions required to reach new master level and thus new calculation
    var expected_items = expToLvl / (expPerItem / (1-masterychance(currentMastery))); //first guess is the current masterychance is applied to all actions 
    var final_result; //this variable will iteratively be added upon in each iteration
    let currentMastery_lim = masteryLim[skill].find(element => element>currentMastery)
    const items_to_new_chance = currentMastery_lim - currentMastery; //actions required to reach 1st new mastery level
    
    if (expected_items <= items_to_new_chance) { //if the first guess has fewer actions than required for new mastery level then we're done
        let remainder = 0; 
        final_result = expected_items;
    } else { //otherwise we add items_to_new_chance to final_result and start iterating
        let remainder = expected_items - items_to_new_chance; 
        final_result = items_to_new_chance;
    }
    
    let newmastery_chance;
    while (remainder >= 0) {//continue iterating until we do not reach a new mastery level
        currentMastery_lim = masteryLim.find(element => element > currentMastery_lim); 
        newmastery_chance = masterychance(currentMastery_lim); //this is the new mastery level we will consider
        new_expected_items = remainder/(1-masterychance(currentMastery))*(1-masterychance(currentMastery_lim)); //now we assume that all of the remainder will be within the new mastery level
        if (new_expected_items >= currentMastery_lim - currentMastery) { //if we will reach a new mastery level, set the new remainder and add the actions required to reach the new mastery level to the final result
            remainder = new_expected_items - currentMastery_lim;
            final_result += currentMastery_lim - currentMastery;
            currentMastery = currentMastery_lim;
        } else {
            final_result += new_expected_items;
            remainder = 0;
        }
     }
     return final_result;
} */