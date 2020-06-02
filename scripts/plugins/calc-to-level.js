//calculating items needed to reach selected level

const Skill = CONSTANTS.skill;

/** @param {number} skill */
const getData = (skill) => {
    const hasCraftCape = SEMI.currentEquipmentInSlot('Cape') === CONSTANTS.item.Crafting_Skillcape;
    const craftInterval = hasCraftCape ? 1500 : 3000;
    const data = {
        [Skill.Woodcutting]:  {interval: 2000,          key: 'xp',             itemData: logsData,          selectedItem: selectedLog},
        [Skill.Cooking]:      {interval: 3000,          key: 'cookingXP',      itemData: items,             selectedItem: selectedFood},
        [Skill.Smithing]:     {interval: 2000,          key: 'smithingXP',     itemData: smithingItems,     selectedItem: selectedSmith},
        [Skill.Fletching]:    {interval: 2000,          key: 'fletchingXP',    itemData: fletchingItems,    selectedItem: selectedFletch},
        [Skill.Crafting]:     {interval: craftInterval, key: 'craftingXP',     itemData: craftingItems,     selectedItem: selectedCraft},
        [Skill.Runecrafting]: {interval: 2000,          key: 'runecraftingXP', itemData: runecraftingItems, selectedItem: selectedRunecraft},
        [Skill.Herblore]:     {interval: 2000,          key: 'herbloreXP',     itemData: herbloreItemData,  selectedItem: selectedHerblore}
    };
    return data[skill];
};

/** @param {number} skill */
const calcToLvl = (skill) => {
    const validSkills = [2, 3, 5, 13, 14, 15, 19]; //firemaking, cooking, smithing, fletching, crafting, runecrafting, herblore
    if (!validSkills.includes(skill)) return;
    const alternateCalcSkills = [5, 13, 14, 15]; //deeper nested...sigh

    const name = skillName[skill];
    const data = getData(skill);
    const selectedItem = data.selectedItem;
    if (selectedItem == null) return;

    let expToLvl = exp.level_to_xp(Number($(`#${name}-lvl-in`).val())) +1 - skillXP[skill];
    let itemsToLvl;
    //need to account for mastery here. preserves ores, increases XP in runecrafting.
    //omg need to account for fire type in cooking...AND burn chance without gloves... smithing gloves in smithing...jeeeeeez
    //also should probably try to make runecrafting more precise based on mastery level & xp gained per rune etc, if will reach higher mastery tier then etc
    const item = data.itemData[selectedItem];
    if (alternateCalcSkills.includes(skill)) { itemsToLvl = Math.round((expToLvl) / items[item.itemID][data.key]) + 1; }
    else { itemsToLvl = Math.round((expToLvl) / item[data.key]) + 1; }
    $(`#${name}-needed`).text(numberWithCommas(itemsToLvl));


    const craftTimeMin = (data.interval / 1000) / 60;
    let timeToLvl = itemsToLvl * craftTimeMin;
    $(`#${name}-calc-time`).text(SEMI.formatTimeFromMinutes(timeToLvl));
};

//universal calc injector
//changeup. a small gold-border calculator image button, similar to the loot chest button in MICE.
//opens up a panel beneath crafting panel displaying table with infos like mastery/level calcs, estimated time, etc. Unless estimated time should be up above.
const calcItemsInjectBtn = (skill = Skill.Firemaking) => {
    const validSkills = [Skill.Firemaking, Skill.Cooking, Skill.Smithing, Skill.Fletching, Skill.Crafting, Skill.Runecrafting, Skill.Herblore];
    if (!validSkills.includes(skill)) { return; }
    const name = skillName[skill];
    return $(`
        <hr style="border-top: 1px solid gold !important;">
        <div class="col-12">
            How many of my selected item do I need to reach level <input type="number" id="${name}-lvl-in" name="${name}-lvl-in" min="2" max="99" style="width: 60px;">?
            <br>
            <div class="font-size-sm font-w600 text-uppercase text-center text-muted">
                <small class="mr-2">
                    <button type="button" class="btn btn-success m-3" onclick="calcToLvl(${skill});" title="You'll need to click this after selecting your craftable item, and click it each time you want to re-calculate.">Calculate</button>
                </small>
            </div>
            <hr>
            <span id="${name}-needed">#</span> needed to reach selected level.
            <hr>
            Creating this many will take this much time: <span id="${name}-calc-time">...</span>
        </div>`);
};

//move to semisetup
const injectItemsCalculators = () => {
    //firemaking injection
    $('#firemaking').children().children().first().append(calcItemsInjectBtn(Skill.Firemaking));
    //cooking injection
    $('#cooking').children().children().first().append(calcItemsInjectBtn(Skill.Cooking));
    //smithing
    $('#smithing-category-container').children().children().children().first().append(calcItemsInjectBtn(Skill.Smithing));
    //fletching
    $('#fletching-container .block-content.block-content-full').first().after(calcItemsInjectBtn(Skill.Fletching));
    //crafting
    $('#crafting-container .block-content.block-content-full').first().after(calcItemsInjectBtn(Skill.Crafting));
    //runecrafting
    $('#runecrafting-container .block-content.block-content-full').first().after(calcItemsInjectBtn(Skill.Runecrafting));
    //herblore
    $('#herblore-progress').parent().parent().append(calcItemsInjectBtn(Skill.Herblore));
};

/** @param {string} skillName */
const _initializeCalcLvl = (skillName) => {
    $(`#${skillName}-lvl-in`).val(SEMI.currentLevel(skillName) + 1);
};

const initializeCalcLvl = () => {
    _initializeCalcLvl('Firemaking');
    _initializeCalcLvl('Cooking');
    _initializeCalcLvl('Smithing');
    _initializeCalcLvl('Fletching');
    _initializeCalcLvl('Crafting');
    _initializeCalcLvl('Runecrafting');
    _initializeCalcLvl('Herblore');
};
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