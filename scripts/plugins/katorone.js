//Katorone settings defaults
var katoroneOn = false; //called by radio button. works instantly.
var bot_sellGoldBags = true;
var bot_buyBankSlots = true; 
var bot_farming_openBirdNests = true;
var bot_farming_openHerbBags = true;
var bot_buyGemGlove_enabled = true;
var bot_buryBones_enabled = true;
var bot_reserveGold = 5000000;
var bot_gemGloveUses = 5000; //this guy on crack
var bot_bonesReserve;// = 21600;
var bot_dragonBonesReserve;// = 21600;
var bot_magicBonesReserve;// = 0;
var bot_holyDustReserve;// = 21600;
var bot_bigBonesReserve;// = 0;

//katorone settings update
function updateKatSets() { 
    var ks1n;
    var ks2n;
    var ks3n;
    var ks4n;
    var ks5n;
    var ks6n;
    var ks7n;
    
    //if settings fields are empty, set vars to placeholders, otherwise set values
    if (document.getElementById('k-set-1').value == "") { ks1n = Number(document.getElementById('k-set-1').placeholder); }
    else { ks1n = Number(document.getElementById('k-set-1').value); }
    if (document.getElementById('k-set-2').value == "") { ks2n = Number(document.getElementById('k-set-2').placeholder); }
    else { ks2n = Number(document.getElementById('k-set-2').value); }
    if (document.getElementById('k-set-3').value == "") { ks3n = Number(document.getElementById('k-set-3').placeholder); }
    else { ks3n = Number(document.getElementById('k-set-3').value); }
    if (document.getElementById('k-set-4').value == "") { ks4n = Number(document.getElementById('k-set-4').placeholder); }
    else { ks4n = Number(document.getElementById('k-set-4').value); }
    if (document.getElementById('k-set-5').value == "") { ks5n = Number(document.getElementById('k-set-5').placeholder); }
    else { ks5n = Number(document.getElementById('k-set-5').value); }
    if (document.getElementById('k-set-6').value == "") { ks6n = Number(document.getElementById('k-set-6').placeholder); }
    else { ks6n = Number(document.getElementById('k-set-6').value); }
    if (document.getElementById('k-set-7').value == "") { ks7n = Number(document.getElementById('k-set-7').placeholder); }
    else { ks7n = Number(document.getElementById('k-set-7').value); }
    
    //if they're not NaN (letters or symbols in the field) and they're positive numbers, change values.
    if (!isNaN(ks1n) && ks1n>=0) { bot_reserveGold = ks1n; }
    if (!isNaN(ks2n) && ks2n>=0) { bot_gemGloveUses = ks2n; }
    if (!isNaN(ks3n) && ks3n>=0) { bot_bonesReserve = ks3n; }
    if (!isNaN(ks4n) && ks4n>=0) { bot_dragonBonesReserve = ks4n; }
    if (!isNaN(ks5n) && ks5n>=0) { bot_magicBonesReserve = ks5n; }
    if (!isNaN(ks6n) && ks6n>=0) { bot_holyDustReserve = ks6n; }
    if (!isNaN(ks7n) && ks7n>=0) { bot_bigBonesReserve = ks7n; }
    
    //update bone array
    bot_bones = [
        [439, bot_bonesReserve],
        [440, bot_dragonBonesReserve],
        [441, bot_magicBonesReserve],
        [500, bot_holyDustReserve],
        [506, bot_bigBonesReserve]
        ];
}

//:: import this: https://github.com/Katorone/AutoMelvorIdle/blob/master/melvor.user.js
// GENERAL FUNCTIONS
function bot_getBankCount(id) {
    for (let i = 0; i < bank.length; i++) {
        if (bank[i].id === id) {return bank[i].qty;}
    }
    return 0;
}

// Adds an item to the sell list, or merges if it's already queued.
function bot_addSellList(id, amount) {
    for (let i = 0; i < bot_sellList.length; i++) {
        if (bot_sellList[i][0] === id) {
        bot_sellList[i][1] += amount;
        return;
        }
    }
    bot_sellList.push([id, amount]);
}

// Try to sell gems, but keep an equal amount of each in the bank.
function bot_sellGems(target_gold) {
    // Create an easy to navigate structure
    let bank_gems = [];
    let to_sell = {};
    let value = 0;
    for (let i = 0; i < bot_gemList.length; i++) {
        let id = bot_gemList[i];
        let amount = bot_getBankCount(id);
        bank_gems.push([id, amount, items[id].sellsFor]);
        to_sell[id] = {};
        // Little hack to always keep 1 gem in the bank.
        to_sell[id].amount = -1;
        value = value + ((amount-1) * items[id].sellsFor);
    }
    // If selling all gems doesn't match target_gold, stop.
    if (value < target_gold) {return;}

    let sell_value = 0;
    // Add gems to sell until the target gold is reached
    while (sell_value < target_gold) {
        // Sort bank_gems on amount
        bank_gems.sort(function(a,b) {return b[1] - a[1];})
        // Add gems to the selling queue
        bank_gems[0][1]--;
        sell_value = sell_value + bank_gems[0][2];
        bot_addSellList(bank_gems[0][0], 1)
    }
}

// MINING
function bot_checkGloves() {
    // Are we mining? - Do this check to avoid spending saved gp
    if (!isMining) {return;}
    // Is the gem glove equipped? - Same reason
    if (equippedItems[CONSTANTS.equipmentSlot.Gloves] !== CONSTANTS.item.Gem_Gloves) {return;}
    // How many uses left?
    let uses_left = glovesTracker[CONSTANTS.shop.gloves.Gems].remainingActions;
    let to_buy = Math.ceil((bot_gemGloveUses - uses_left)/2000)
    // Quit if we don't need more gloves.
    if (to_buy <= 0) {return;}
    let price = glovesCost[CONSTANTS.shop.gloves.Gems];
    // Buy one if we can afford it
    if ((gp - price) >= bot_reserveGold) { //suggestion by rebelEpik: prevent from buying gem charges if you have a minimum set
        buyGloves(CONSTANTS.shop.gloves.Gems);
        //aw: adding notifications
        notifyPlayer(4, "Katorone Automation just bought Gem Glove charges.");
        console.log("Katorone Automation just bought Gem Glove charges.");
        return;
    }
    // Do we need to sell gems?
    if (gp < (bot_reserveGold+price)) {
        bot_sellGems( (price+bot_reserveGold) - gp); //0.2.3.1 hotfix: added bot_reserveGold to this.
    }
}

function bot_checkBones(b = 0) {
    if (b < bot_bones.length) {
        let boneId = bot_bones[b][0];
        let keep = bot_bones[b][1];
        let inBank = bot_getBankCount(boneId);
        let bury = inBank - keep;
        // The code allows us to bypass the 10 bones minimum, but let's not cheat. (TEEHEE)
        if (inBank > 10 && bury > 0) {
        buryItem(getBankId(boneId), boneId, bury);
        //AW: adding notifications
        notifyPlayer(17, "Katorone Automation just buried "+bury+" "+items[boneId].name+".");
        console.log("Katorone Automation just buried "+bury+" "+items[boneId].name+".");
        }
        // Delay checking the next bone, so the bank can update.
        // bankIds shift when all of an item is sold.
        setTimeout(bot_checkBones(b+1),100);
    }
}

var bot_sellList = [];
var bot_gemList = [128, 129, 130, 131, 132];
var bot_bones = [
[439, bot_bonesReserve],
[440, bot_dragonBonesReserve],
[441, bot_magicBonesReserve],
[500, bot_holyDustReserve],
[506, bot_bigBonesReserve]
];

const bot_birdsNest = 119;
const bot_herbsBag = 620;
const bot_goldBag = 482;
var botSeedStorage = {};
var equippedCape = 0;

// Delay 10 seconds to allow the game to load. good idea
setTimeout(function() {
notifyPlayer(10, "Katorone Automation is set up and ready to activate.");
// Do actions every second. (aw: more like action of selling things.)
var mediumLoop = setInterval(function() {
    if (!katoroneOn) { return; }
    ////DEV
    //console.log('Katorone short loop running.');
    updateKatSets();
    // Does anything need selling?
    let sell = bot_sellList.shift();
    if (sell) {
        sellItem(getBankId(sell[0]), sell[1]);
        notifyPlayer(10, "Katorone Automation just auto-sold "+sell[1]+" "+items[sell[0]].name+ ".");
        console.log("Katorone Automation just auto-sold "+sell[1]+" "+items[sell[0]].name+ ".");
    }
}, 1000);

// Do actions every minute.
var slowLoop = setInterval(function() {
    if (!katoroneOn) { return; }
    
    ////DEV
    //console.log('Katorone long loop running.');
    
    // Try buying a bank slot
    if (bot_buyBankSlots === true &&
        bank.length >= (baseBankMax + bankMax)) {
        let cost = Math.min(newNewBankUpgradeCost.level_to_gp(currentBankUpgrade+1), 4000000);
        // Buy if we have enough gold.
        if (gp >= cost) {
            upgradeBank();
            notifyPlayer(4, "Katorone Automation just bought a new bank slot.");
            console.log('Katorone Automation just bought a new bank slot.');
            // Stop script to let the game update.
            return true;
        }
    }
    // Sell Bobbys pocket
    if (bot_sellGoldBags === true) {
        let c = bot_getBankCount(bot_goldBag);
        if (c > 0) { bot_addSellList(bot_goldBag, c); }
    }
    // Open bird nests
    if (bot_farming_openBirdNests === true) {
        let c = bot_getBankCount(bot_birdsNest);
        if (c > 0) {
            openBankItem(getBankId(bot_birdsNest), bot_birdsNest, true);
            notifyPlayer(10, "Katorone Automation just auto-opened Bird Nest(s).");
            console.log("Katorone Automation just auto-opened Bird Nest(s).");
            // Close the popup
            setTimeout(function() {
            document.getElementsByClassName("swal2-confirm")[0].click();
            }, 100);
        }
    }
    // Open herb sacks
    if (bot_farming_openHerbBags === true) {
        let c = bot_getBankCount(bot_herbsBag);
        if (c > 0) {
            openBankItem(getBankId(bot_herbsBag), bot_herbsBag, true)
            notifyPlayer(10, "Katorone Automation just auto-opened Herb Sack(s).");
            console.log("Katorone Automation just auto-opened Herb Sack(s).");
            // Close the popup
            setTimeout(function() {
            document.getElementsByClassName("swal2-confirm")[0].click();
            }, 100);
        }
    }
    // Make sure our money reserves are replenished
    if (gp < bot_reserveGold) { bot_sellGems(bot_reserveGold - gp); }
    // One gem glove lasts at least 750 seconds.
    if (bot_buyGemGlove_enabled) { bot_checkGloves(); }
    // Bury bones.
    if (bot_buryBones_enabled) { bot_checkBones(); }
    // Convenience for Daedalus (sells knight loot)
    //let knightLoot = [63, 64, 65, 66, 71, 72, 73, 74, 79, 80, 81, 82, 134, 135, 136, 137, 87, 88, 89, 90, 95, 96, 97, 98, 104, 105];
    //for (let i = 0; i < knightLoot.length; i++) {
    //    let c = bot_getBankCount(knightLoot[i]);
    //    if (c > 0) { bot_addSellList(knightLoot[i], c) }
    //}
    }, 30000) //aw: changed to half-min

    console.log("Katorone Automation is set up and ready to activate.");
}, 10000); 
//:: end import Katorone's automation
