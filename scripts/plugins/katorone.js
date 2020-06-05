//Katorone settings defaults
var katoroneOn = false; //called by radio button. works instantly.
var katBot = {
    buyBankSlots: true,
    buyGemGlove_enabled: true,
    reserveGold: 5000000,
    gemGloveUses: 6000,
    gemList: [],
    sellList: []
};

const saveKatSets = () => {
    SEMI.setItem('katorone-config', katBot);
};

const loadKatSets = () => {
    if (SEMI.getItem('katorone-config') == null) return;
    const katBotDefaults = katBot;
    katBot = SEMI.getItem('katorone-config');
    const state = katBotDefaults !== katBot;
    if (state) setLoadedKatValues();
};

const setLoadedKatValues = () => {
    if (katBot.reserveGold !== 5000000) $(`#k-set-1`).val(katBot.reserveGold);
    if (katBot.gemGloveUses !== 6000) $(`#k-set-2`).val(katBot.gemGloveUses);
    if (!katBot.buyBankSlots) $("#auto-bbs-enabled")[0].checked = false;
    if (!katBot.buyGemGlove_enabled) $("#auto-bgg-enabled")[0].checked = false;
};

(() => {
    /**
     * @param {number} id
     */
    const getBankCount = (id) => {
        for (let i = 0; i < bank.length; i++) {
            if (bank[i].id === id) {return bank[i].qty;}
        }
        return 0;
    };

    /**
     * Adds an item to the sell list, or merges if it's already queued.
     * @param {number} id
     * @param {number} amount
     */
    const addSellList = (id, amount) => {
        for (let i = 0; i < katBot.sellList.length; i++) {
            if (katBot.sellList[i][0] === id) {
                katBot.sellList[i][1] += amount;
                return;
            }
        }
        katBot.sellList.push([id, amount]);
    };

    /**
     * Try to sell gems, but keep an equal amount of each in the bank.
     * @param {number} targetGold
     */
    const sellGems = (targetGold) => {
        // Create an easy to navigate structure
        let bankGems = [];
        let toSell = {};
        let value = 0;
        for (let i = 0; i < katBot.gemList.length; i++) {
            let id = katBot.gemList[i];
            let amount = getBankCount(id);
            bankGems.push([id, amount, items[id].sellsFor]);
            toSell[id] = {};
            // Little hack to always keep 1 gem in the bank.
            toSell[id].amount = -1;
            value = value + ((amount-1) * items[id].sellsFor);
        }
        // If selling all gems doesn't match target_gold, stop.
        if (value < targetGold) {return;}

        let sellValue = 0;
        // Add gems to sell until the target gold is reached
        while (sellValue < targetGold) {
            // Sort bank_gems on amount
            bankGems.sort((a,b) => b[1] - a[1]);
            // Add gems to the selling queue
            bankGems[0][1]--;
            sellValue = sellValue + bankGems[0][2];
            addSellList(bankGems[0][0], 1);
        }
    };

    // MINING
    const checkGloves = () => {
        // Are we mining? - Do this check to avoid spending saved gp
        if (!isMining) { return; }
        // Is the gem glove equipped? - Same reason
        if (SEMI.currentEquipmentInSlot('Gloves') !== CONSTANTS.item.Gem_Gloves) {return;}
        // How many uses left?
        let uses_left = glovesTracker[CONSTANTS.shop.gloves.Gems].remainingActions;
        let to_buy = Math.ceil((katBot.gemGloveUses - uses_left) / 2000);
        // Quit if we don't need more gloves.
        if (to_buy <= 0) {return;}
        let price = glovesCost[CONSTANTS.shop.gloves.Gems];
        // Buy one if we can afford it
        if ((gp - price) >= katBot.reserveGold) { //suggestion by rebelEpik: prevent from buying gem charges if you have a minimum set
            buyGloves(CONSTANTS.shop.gloves.Gems);
            SEMI.confirmAndCloseModal();
            //aw: adding notifications
            const notification = 'Katorone Automation just bought Gem Glove charges.';
            notifyPlayer(4, notification);
            console.log(notification);
            return;
        }
        // Do we need to sell gems?
        if (gp < (katBot.reserveGold+price)) {
            sellGems((price+katBot.reserveGold) - gp); //0.2.3.1 hotfix: added katBot.reserveGold to this.
        }
    };

    katBot.sellList = [];
    katBot.gemList = [128, 129, 130, 131, 132];
    katBot.SeedStorage = {};

    const setupKat = () => {
        notifyPlayer(10, 'Katorone Automation is set up and ready to activate.');
        // Do actions every second. (aw: more like action of selling things.)

        const mediumF = () => {
            updateKatSets();
            if (!katoroneOn) { return; }
            ////DEV
            //console.log('Katorone short loop running.');
            // Does anything need selling?
            let sell = katBot.sellList.shift();
            if (sell) {
                sellItem(getBankId(sell[0]), sell[1]);
                SEMI.confirmAndCloseModal();
                const notification = `Katorone Automation just auto-sold ${sell[1]} ${items[sell[0]].name}.`;
                notifyPlayer(10, notification);
                console.log(notification);
            }
        };

        const mediumLoop = setInterval(mediumF, 1000);

        const buyBankSlot = () => {
            let cost = Math.min(newNewBankUpgradeCost.level_to_gp(currentBankUpgrade + 1), 4000000);
            // Buy if we have enough gold above reserve.
            if (gp >= (cost + katBot.reserveGold)) {
                upgradeBank();
                SEMI.confirmAndCloseModal();
                const notification = 'Katorone Automation just bought a new bank slot.';
                notifyPlayer(4, notification);
                console.log(notification);
                // Stop script to let the game update.
                return true;
            }
        };

        const slowF = () => {
            if (!katoroneOn) { return; }
            // Try buying a bank slot
            if (katBot.buyBankSlots === true && bank.length >= (baseBankMax + bankMax)) { buyBankSlot(); }
            // Make sure our money reserves are replenished
            if (gp < katBot.reserveGold) { sellGems(katBot.reserveGold - gp); }
            // One gem glove lasts at least 750 seconds.
            if (katBot.buyGemGlove_enabled) { checkGloves(); }
        };

        // Do actions every minute.
        const slowLoop = setInterval(slowF, 30000); //aw: changed to half-min
        console.log('Katorone Automation is set up and ready to activate.');
    };

    setupKat();
    //:: end import Katorone's automation
})();


const injectKatGUI = () => {
    //katorone settings gui
    const katMenuEl = $(`
    <div class="modal" id="SEMI-menu-kat-modal" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="block block-themed block-transparent mb-0">
    <div class="block-header bg-primary-dark">
    <img class="nav-img" src="${SEMI.iconSrc}">
    <h3 class="block-title">Katorone Automation Settings</h3>
    <div class="block-options">
    <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
    <i class="fa fa-fw fa-times"></i>
    </button>
    </div>
    </div>

    <div class="block-content font-size-sm m-1">
    It's probably best to adjust these settings before starting the whole script, because every change is updated instantly.
    Leaving the text fields blank will set the value to the placeholder amount, which is the default set by Katorone.
    <br><br>
    When changing number settings, use only numbers, no commas or periods or letters, otherwise the setting will not update to prevent breaking things.
    <br><br>
    Katorone's script uses two intervals, one that sells things if there's things to sell every second.
    It also loops every half-minute for the larger functions: checking for bank slots, checking for loot to sell and adding to list, all the rest. So, be patient!
    <br>
    <b>SEMI will notify you in-game and in the console when this script completes an action.</b>
    <br><br>
    <div class="row">
    <div class="col-sm-12">

    <div style="border-radius: 5px; padding: 10px;" class="SEMI-gold custom-control custom-switch mb-1">
    <input type="checkbox" class="custom-control-input" id="kat-enabled" name="kat-enabled" onchange="katoroneOn = this.checked" ${katoroneOn ? 'checked' : ''}>
    <label class="custom-control-label" for="kat-enabled"><b>Toggle All Katorone Automation</b></label>
    </div>

    <b class="font-size-h5">Bank automation settings:</b>

    <div id="number-settings-1" class="form-group" title="Katorone suggests at least 4M to buy bank slots.">
    <label for="example-text-input">Amount of GP to keep in the Bank:</label>
    <input type="text" class="form-control" id="k-set-1" placeholder="5000000">
    </div>

    <b>Another word of caution:</b> Katorone's script will automatially sell gems to reach the reserve GP amount set above.
    This is useful to do its automation, such as buying more bank space or gem glove charges.
    It is meant as a good companion to AutoMine. If you don't want this feature on, set the value to 0.<br>
    <b>Information regarding AutoReplant and Reserve Gold:</b>
    This minimum bank gp amount is respected by AutoReplant.
    Therefore, if you use Katorone with AutoReplant and you don't have more gp than your limit, <u>AutoReplant will NOT buy compost</u>.
    This means it will replant seeds without compost in the plot, giving it a chance for the crop to fail to produce.
    AutoReplant will not replant the failed crops, which will end up leaving a blank plot in your farming area.
    To prevent this, turn off the limit by setting to 0, or set to below your current GP amount to ensure AutoReplant buys compost.
    Currently, Katorone will only sell gems to buy gem glove charges and won't acquire GP to buy compost.

    <div class="custom-control custom-switch mb-1" title="Warning from Katorone: can drain money fast early game.">
    <input type="checkbox" class="custom-control-input" id="auto-bbs-enabled" name="auto-bbs-enabled" onchange="katBot.buyBankSlots = this.checked" ${katBot.buyBankSlots ? 'checked' : ''}>
    <label class="custom-control-label" for="auto-bbs-enabled">Automatically Buy More Bank Space</label>
    </div>

    Only buys more bank space if what it costs to upgrade wouldn't take you under your reserved gold.

    <hr>
    <b class="font-size-h5">Mining & Gem Gloves settings:</b>

    <div class="custom-control custom-switch mb-1">
    <input type="checkbox" class="custom-control-input" id="auto-bgg-enabled" name="auto-bgg-enabled" onchange="katBot.buyGemGlove_enabled = this.checked" ${katBot.buyGemGlove_enabled ? 'checked' : ''}>
    <label class="custom-control-label" for="auto-bgg-enabled">Automatically Buy Gem Glove Charges</label>
    </div>

    The script will only buy gem glove charges if you are wearing the gloves and mining.

    <div id="number-settings-2" class="form-group" title="">
    <label for="example-text-input">Amount of Gem Glove Charges to keep:</label>
    <input type="text" class="form-control" id="k-set-2" placeholder="6000">
    </div>

    </div>
    </div>
    </div>

    <div class="block-content block-content-full text-right border-top">
    <button type="button" id="semiInfoModalBtn" class="btn btn-sm btn-primary" data-dismiss="modal" onclick=""><i class="fa fa-check mr-1"></i>All done. (Settings auto-update when changed)</button>
    </div>
    </div>
    </div>
    </div>
    </div>`);
    $('.modal').first().before(katMenuEl);
    setTimeout(() => { $('#katorone-status')[0].innerHTML = ''; }, 100);
    loadKatSets();
};

//katorone settings update
const updateKatSets = () => {
    let ks = [];
    const settings = [1, 2].map((i) => document.getElementById(`k-set-${i}`));
    const values = settings.map((x) => x.value);
    const placeholders = settings.map((x) => x.placeholder);

    //if settings fields are empty, set vars to placeholders, otherwise set values
    for(let i = 0; i < settings.length; i++) { ks[i] = Number(values[i] == '' ? placeholders[i] : values[i]); }

    //if they're not NaN (letters or symbols in the field) and they're positive numbers, change values.
    if (!isNaN(ks[0]) && ks[0] >= 0) { katBot.reserveGold        = ks[0]; }
    if (!isNaN(ks[1]) && ks[1] >= 0) { katBot.gemGloveUses       = ks[1]; }
    saveKatSets();
};

SEMI.add('katorone', {ms: 0, imgSrc: 'assets/media/bank/gloves_gems.svg', f: 'semiSetMenu()', title: '<b>Katorone Menu</b>', injectGUI: injectKatGUI});