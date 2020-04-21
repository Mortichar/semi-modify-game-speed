//:: importing scraps from Melvor Super Control Panel user script by Strutty on Greasefork: https://greasyfork.org/en/scripts/395834-melvor-super-control-panel
//Important Settings
//AutoMine
const copper = 0;
const tin = 1;
const iron = 2;
const coal = 3;
const silver = 4;
const gold = 5;
const mithril = 6;
const addy = 7;
const runite = 8;
const dragonite = 9;
const runeEssence = 10;
const oreIDs = [45, 46, 47, 48, 49, 50, 51, 52, 53, 54];
const barRatios = [
    {'0': 1, '1': 1},
    {'2': 1},
    {'2': 1, '3': 2},
    {'4': 1},
    {'5': 1},
    {'6': 1, '3': 4},
    {'7': 1, '3': 6},
    {'8': 1, '3': 8},
    {'9': 1, '8': 2, '3': 12}];
var resourceRatios = [];
var mineArray = ([dragonite, runite, addy, mithril, gold, silver, coal, iron, tin, copper, runeEssence]);

//General Functions (this is now included in utils.js as well... might as well leave it *shrug*)
function getBankQty(id) {
    for (let i = 0; i < bank.length; i++) {
        if (bank[i].id === id) {
            return bank[i].qty;
        }
    }
    return 0;
}

//autoMine Override: buttons injected in setupSEMI
var autoMineOverride = false;
var overrideRock;
var overrideMineArray = [];
function autoMineSet(x) {
    if (x == overrideRock && autoMineOverride) {
        mineArray.shift();
        autoMineOverride = false;
        overrideRock = null;
        $("#autoMine"+x).attr("class", "btn btn-outline-primary"); //de-highlight current selection & turn off
    } else {
        if (overrideRock !== null && autoMineOverride) {
            mineArray.shift();
            $("#autoMine"+overrideRock).attr("class", "btn btn-outline-primary"); //de-highlight previous
        }
        mineArray.unshift(x);
        $("#autoMine"+x).attr("class", "btn btn-primary"); //highlight
        overrideRock = x;
        autoMineOverride = true;
    }
}

function highlightBarBtn(n) {
    $(".AMbtn").attr("class", "btn btn-outline-primary AMbtn"); //de-highlight all
    $("#AMbtn"+n).attr("class", "btn btn-primary AMbtn"); //highlight n
}

var AMselection = 9;
//autoMine Selector: GUI for choosing bars to mine for.
function AMselect(n) {
    highlightBarBtn(n);
    AMselection = n;
    if (n == 0) {
        mineArray = [0,1]; //tin & copper = bronze
    }
    if (n == 1) {
        mineArray = [2]; //iron
    }
    if (n == 2) {
        mineArray = [2,3]; //iron & coal = steel
    }
    if (n == 3) {
        mineArray = [4]; //silver
    }
    if (n == 4) {
        mineArray = [5]; //gold
    }
    if (n == 5) {
        mineArray = [6,3]; //mithril + coal = mith bar
    }
    if (n == 6) {
        mineArray = [7,3]; //adamantite + coal = addy bar
    }
    if (n == 7) {
        mineArray = [8,3]; //runite + coal = rune bar
    }
    if (n == 8) {
        mineArray = [9,8,3]; //dragonite + runite + coal = dragon bar (snack legendarily ®)
    }
    if (n == 9) {
        mineArray = ([dragonite, runite, addy, mithril, gold, silver, coal, iron, tin, copper, runeEssence]); //xp priority
    }
    if (n == 10) mineArray = ([runeEssence]);
    //soon obsolete
    if (autoMineOverride) {
        autoMineOverride = false;
        $("#autoMine"+overrideRock).attr("class", "btn btn-outline-primary"); //de-highlight current selection & turn off
        overrideRock = null;
    }
}

//AutoMine: Will mine based on your or priorities set in mineArray //aw: this still works awesomely!
var autoMineEnabled = false;
var updateAutoMineButtonText = function () { $('#auto-mine-button-status').text((autoMineEnabled) ? 'Enabled' : 'Disabled'); }
var autoMineLoop;
autoMineLoop = setInterval(function(){autoMine(mineArray);}, 100);
function toggleAutoMine() {
    autoMineEnabled = !autoMineEnabled;
    updateAutoMineButtonText();
    if (!autoMineEnabled) {
        mineRock(currentRock, true);
        console.log("Auto Mine Disabled!");
        //clearInterval(autoMineLoop);
    }else{
        changePage(10);
        if (!isMining) mineRock(0);
        /* if(!glovesTracker[CONSTANTS.shop.gloves.Mining].isActive){
            //equipItem(34, 399);
        }
        */
    }
}
function autoMine(rocks) {
    if ($("#autoMine1").length == 0) { addOverrideButtons(); }
    if (!autoMineEnabled) { return; }
    if (isMining) var swingRatio = Number(document.getElementById('mining-rock-progress-'+currentRock).style.width.split('%')[0]);
    else var swingRatio = 0;
    if ( AMselection !== 9 && !autoMineOverride ) {
        for (const rock of rocks) {
            resourceRatios[rock] = getBankQty(oreIDs[rock])/(barRatios[AMselection][rock]);
        }
        mineArray.sort(function(a, b) {
            return resourceRatios[a] - resourceRatios[b];
        });
    }
    for(const rock of rocks) {
        if (!isMining) mineRock(rock);
        if(!rockData[rock].depleted && miningData[rock].level <= skillLevel[CONSTANTS.skill.Mining]) { //added extra condition to make universal
            if(currentRock !== rock && (swingRatio<10) ) {
                mineRock(rock);
            }
            return; //necessary to stop it looping all the way to last rock. i see now.
        }
    }
}