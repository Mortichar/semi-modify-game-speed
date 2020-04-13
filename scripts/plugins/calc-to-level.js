//calculating items needed to reach selected level
function calcToLvl(skill=0) {
    let expToNextLvl = exp.level_to_xp(skillLevel[skill]+1) +1 - skillXP[skill];
    let expToLvl = exp.level_to_xp(Number($("#"+skillName[skill]+"-lvl-in").val())) +1 - skillXP[skill];
    let itemsToLvl = -1;
    if (skill == 2 && selectedLog) { //firemaking
        itemsToLvl = Math.round((expToLvl)/logsData[selectedLog].xp)+1 ;
    } else if (skill == 3 && selectedFood) { //cooking
        itemsToLvl = Math.round((expToLvl)/items[selectedFood].cookingXP)+1 ;
    } else if (skill == 19 && selectedHerblore) { //herblore
        itemsToLvl = Math.round((expToLvl)/herbloreItemData[selectedHerblore].herbloreXP)+1 ;
    }
    if (itemsToLvl<1) itemsToLvl = "#";
    $("#"+skillName[skill]+"-needed").text(itemsToLvl);
    //extra span w/ name of item needed? or is this enough
}

//universal calc injector
function calcItemsInjectBtn(skill=2) {
    return $(`
        <div class="col-8 offset-2">
            How many do I need until level <input type="number" id="`+ skillName[skill] +`-lvl-in" name="`+ skillName[skill] +`-lvl-in" min="2" max="99" style="width: 60px;">?
            <br>
            <button type="button" class="btn btn-success m-3" onclick="calcToLvl(`+ skill +`);" title="You'll need to click this after selecting your craftable item, and click it each time you want to re-calculate.">Calculate</button>
            <br>
            <span id="`+ skillName[skill] +`-needed">#</span> needed to reach selected level.
        </div>`);
}

//move to semisetup
//herblore calc # items needed to level injection
$('#herblore-progress').parent().parent().append(calcItemsInjectBtn(19));
//firemaking injection
$("#firemaking").children().children().first().append(calcItemsInjectBtn(2));
//cooking injection
$("#cooking").children().children().first().append(calcItemsInjectBtn(3));
//smithing, fletching, crafting

setTimeout( () => { //move this to semisetup as func: initializeCalcLvl()
    $("#Firemaking-lvl-in").val(skillLevel[2]+1);
    $("#Cooking-lvl-in").val(skillLevel[3]+1);
    $("#Herblore-lvl-in").val(skillLevel[19]+1);
}, 5000);