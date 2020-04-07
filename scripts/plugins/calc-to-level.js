//herblore calc # items needed to level.
$('#herblore-container .col-12 .mr-2 .btn').parent().append('<button type="button" class="btn btn-success m-3" onclick="calcHerbItemsToLvl();">Calculate # Needed to Next Level</button>');
$('#herblore-container .col-12 .mr-2 .btn').parent().append('<p>You need to make <span id="herbCalc">#</span> of this item before leveling up.</p>');
function calcHerbItemsToLvl() {
    if (!selectedHerblore) return;
    var itemsToLvl = Math.round((exp.level_to_xp(skillLevel[19]+1) +1 - skillXP[19])/herbloreItemData[selectedHerblore].herbloreXP)+1 ;
    $("#herbCalc").text(itemsToLvl);
}

//not used yet, trying to make more generic, maybe somehow...
function calcToLvl(current=0) { 
    var expToLvl = exp.level_to_xp(skillLevel[current]+1) +1 - skillXP[current];
    $("#"+current+"xpCalc").text(itemsToLvl);
}