( () => {
//:://Auto Cooking by Unicue on the Melvor discord: https://discordapp.com/channels/625838709203271680/664637399028072470/681397160465661992
let fishTypeCount = 0;
let fishType = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 662, 663, 664, 665]; 

function autoCookAll(){
    if(document.getElementById("skill-cooking-food-selected-qty").innerHTML == "0" || document.getElementById("skill-cooking-food-selected-qty").innerHTML == ""){
        fishTypeCount = (fishTypeCount + 1) % fishType.length;
        selectFood(fishType[fishTypeCount]);
    }
    else if(!isCooking){
        startCooking(0, false);
    }
}
//var cookInterval;
var autoCook = false;

function enableAutoCook() { changePage(9); }
function disableAutoCook() { if (isCooking) startCooking(0, false); }

/*
function toggleAutoCook() {
    //autoCook = !autoCook;
    //$("#auto-cook-status").text( (SEMI.isEnabled('autoCook')) ? 'Enabled' : 'Disabled');
    if (SEMI.isEnabled('autoCook')) {
        //cookInterval = setInterval(autoCookAll, 1000) 
        changePage(9);
    } else { 
        //clearInterval(cookInterval); 
        if (isCooking) startCooking(0, false);
    }
}
*/
//::end autoCook

//refactoring
SEMI.add('autoCook', {onLoop: autoCookAll, onEnable: enableAutoCook, onDisable: disableAutoCook, id: 'auto-cook-status'});
})();