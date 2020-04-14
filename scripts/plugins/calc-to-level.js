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
    //let smithItem = items[smithingItems[selectedSmith].itemID];
    const itemDataMap = {'2': logsData, '3': items, '5': smithingItems, '13': fletchingItems, '14': craftingItems, '15': runecraftingItems, '19': herbloreItemData};
    const xpKeyMap = {'2': 'xp', '3': 'cookingXP', '5': 'smithingXP', '13': 'fletchingXP', '14': 'craftingXP', '15': 'runecraftingXP', '19': 'herbloreXP'};
    const xpKey = xpKeyMap[skill];
    let expToLvl = exp.level_to_xp(Number($("#"+skillName[skill]+"-lvl-in").val())) +1 - skillXP[skill];
    let itemsToLvl;
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

function initializeCalcLvl() {
    $("#Firemaking-lvl-in").val(skillLevel[2]+1);
    $("#Cooking-lvl-in").val(skillLevel[3]+1);
    $("#Smithing-lvl-in").val(skillLevel[5]+1);
    $("#Fletching-lvl-in").val(skillLevel[13]+1);
    $("#Crafting-lvl-in").val(skillLevel[14]+1);
    $("#Runecrafting-lvl-in").val(skillLevel[15]+1);
    $("#Herblore-lvl-in").val(skillLevel[19]+1);
}
setTimeout(() => { initializeCalcLvl() }, 5000);