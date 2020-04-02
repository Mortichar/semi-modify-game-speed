//SEMIv0.3.2 by AW.

//AldousWatts code section 

//custom notifications! green background with custom txt, two images, second one optional, main one is add-on icon.
function customNotify(imgsrc="", msg="Custom Notifications!", n=3000) { //outputs a custom notification with optional first image, SEMI icon, and message.
    $.notify(
		{
			message: '<img class="notification-img" src="' + imgsrc + '"><img src="'+ $("#iconImg").attr('src') +'" height="auto" width="auto" style="margin: 4px;"><span class="badge badge-success">' + msg + '</span>'
		},
		{
			type: 'light', 
			placement: { 
				from: 'bottom', 
				align: 'center'
			}, 
			delay: n,
			newest_on_top: true,
			animate: {
				enter: 'animated fadeInUp', 
				exit: 'animated fadeOut'
			}, 
			template: '<div data-notify="container" class="col-12 text-center notify-event" role="alert"><span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
		}
	);
}

//SEMI menu setup function -- big fat template literal append
function setupSEMI() { // streamlining/simplicity
    if ($("#auto-replant-button").length) return; //probably smarter than the way i inject a lot of elements
    //Settings menu HTML, attached to the heading anchor set up in SEMI.js content script
    $("#semiHeading").after($(`
    <li class="nav-main-heading" title="One at a time, please! Mixing any skill automations will cause problems as you can only idle one thing at once. Mixing these with combat is impossible, except for AutoReplant, the beautiful script that it is.">
        Auto Skills <a href="javascript:toggleMoreMenus(2);"><i style="color: gold !important;" class="far fa-eye text-muted ml-1" id="moreEye2"></i></a>
    </li>
    
    <li class="nav-main-item" title="AutoReplant will automatically farm everything for you, replanting the same seed when it harvests, buying and using compost when it needs to automatically.">
        <a id="auto-replant-button" class="nav-main-link" href="javascript:toggleAutoReplant();">
            <img class="nav-img" src="assets/media/skills/farming/farming.svg">
            <span class="nav-main-link-name">AutoReplant</span>
            <small id="auto-replant-button-status">Disabled</small>
        </a>
    </li>
    
    <li class="nav-main-item" title="AutoBonfire will keep a bonfire lit when you have a type of wood selected in Firemaking. The author suggests having an abundance of wood if using this!">
        <a id="auto-bonfire-button" class="nav-main-link" href="javascript:toggleAutoBonfire();">
            <img class="nav-img" src="assets/media/skills/firemaking/bonfire_active.svg">
            <span class="nav-main-link-name">AutoBonfire</span>
            <small id="auto-bonfire-button-status">Disabled</small>
        </a>
    </li>
    
    <!-- broken/obsoleted by melvor v0.14
    <li class="nav-main-item" title="AutoFish by BreakIt, Aldous Watts, and Jarx will automatically fish for you. This script will fish the area with the highest average XP fish and chase chests when you aren't using potions, and will switch to finding the maximum XP fish and stop chasing chests when using potions.">
        <a id="auto-fish-button" class="nav-main-link" href="javascript:toggleAutoFish();">
            <img class="nav-img" src="assets/media/shop/fishing_dragon.svg">
            <span class="nav-main-link-name">AutoFish</span>
            <small id="auto-fish-status">Disabled</small>
        </a>
    </li>
    
    <li class="nav-main-item" title="If you want to prioritize fishing areas with crabs to help with making potions, this is the option for you. If you are using potions, it will only seek fishing areas with crabs when it is the max XP fish in the area. Otherwise, it'll prioritize chests and then crabs for fishing.">
        <a id="chase-crabs-button" class="nav-main-link" href="javascript:toggleAutoFishCrabs();">
            <img class="nav-img" src="assets/media/skills/fishing/crab.svg">
            <span class="nav-main-link-name">AF Chase Crabs</span>
            <small id="chase-crabs-status">Disabled</small>
        </a>
    </li>
    -->
    
    <li class="nav-main-item" title="AutoCook by Unicue, updated for alpha v0.13 by AldousWatts, will automatically cycle through your fish and cook them all in order.">
        <a id="auto-cook-button" class="nav-main-link" href="javascript:toggleAutoCook();">
            <img class="nav-img" src="assets/media/skills/cooking/cooking.svg">
            <span class="nav-main-link-name">AutoCook</span>
            <small id="auto-cook-status">Disabled</small>
        </a>
    </li>
    
    <li class="nav-main-item" title="AutoMine will mine highest XP ore first automatically. SEMI's version will not switch ores until mining action is complete. SEMI has added AutoMine Priority Override buttons for each mining ore. Select one ore to prioritize above XP, and AM will still switch automatically. If you need further control over your automated mining, you can open the developer console and modify the mineArray array to your liking, much like in the original userscript. Example console commands: mineArray = [6,3]; (Mithril and Coal), mineArray = [9,8,3]; (Dragonite, Runite, and Coal for Dragonite bars)">
        <a id="auto-mine-button" class="nav-main-link" href="javascript:toggleAutoMine();">
            <img class="nav-img" src="assets/media/shop/pickaxe_dragon.svg">
            <span class="nav-main-link-name">AutoMine</span>
            <small id="auto-mine-button-status"></small>
        </a>
    </li>    
    
    <li class="nav-main-item" title="AutoSell Gems will sell 100 gems once they've reached a stack of 100.">
        <a id="auto-sellgems-button" class="nav-main-link" href="javascript:toggleAutoSellGems();">
            <img class="nav-img" src="assets/media/bank/diamond.svg">
            <span class="nav-main-link-name">AutoSell Gems</span>
            <small id="auto-sellgems-button-status"></small>
        </a>
    </li>
    
    <li class="nav-main-item" title="AutoSmith Bars will cycle through your smithing bars and smelt those you have materials for.">
        <a id="auto-sellgems-button" class="nav-main-link" href="javascript:toggleAutoSmithBars();">
            <img class="nav-img" src="assets/media/bank/dragonite_bar.svg">
            <span class="nav-main-link-name">AutoSmith Bars</span>
            <small id="auto-sb-status">Disabled</small>
        </a>
    </li>
    
    <li class="nav-main-item">
        <a class="nav-main-link nav-compact" href="javascript:semiSetMenu();" id="semiSetsNavBut">
            <img class="nav-img" src="assets/media/bank/gloves_gems.svg">
            <span class="nav-main-link-name"><b>Katorone Menu</b></span>
        </a>
    </li>
    
    <li class="nav-main-heading">
        Auto Combat <a href="javascript:toggleMoreMenus(4);"><i style="color: gold !important;" class="far fa-eye text-muted ml-1" id="moreEye4"></i></a>
    </li>
    
    <li class="nav-main-item" title="AutoSlayer, based on Melvor Auto Slayer by Bubbalova, automatically seeks slayer tasks and sets out to kill that enemy. If you are assigned a monster in a zone that requires special equipment, this version of AutoSlayer will simply reroll your assignment and continue on by default, unless you are properly equipped or you turn on AS Auto Equip and have the correct items in the bank.">
        <a id="auto-slayer-button" class="nav-main-link" href="javascript:toggleAutoSlayer();">
            <img class="nav-img" src="assets/media/skills/slayer/slayer.svg">
            <span class="nav-main-link-name">AutoSlayer</span>
            <small id="auto-slayer-button-status">Disabled</small>
        </a>
    </li>
    
    <li class="nav-main-item" title="AutoCombat will automatically continue combat until you're either out of food in your equipped food slot, out of ranged ammo, or out of runes if using magic. It will safely exit combat if any of those conditions occur. Options include automatically looting and eating, shown below in the sidebar. Combines well with AutoSlayer.">
        <a class="nav-main-link nav-compact" href="javascript:toggleautocombat();" id="autocombatNavBut">
            <img class="nav-img" src="assets/media/skills/combat/combat.svg" id="autocombatImg">
            <span class="nav-main-link-name">AutoCombat</span>
        <small id="autocombatStatus">Disabled</small></a>
    </li>

    <li class="nav-main-item" title="Auto Eat script will eat if your HP is less than what your food would heal, and automatically cycles to next equipped food if you run out. Since SEMIv0.2.3, this Auto Eat script is now separated from the AutoCombat function so you can use it for things like thieving. However, it still pairs very well with AutoCombat.">
        <a class="nav-main-link nav-compact" href="javascript:toggleAutoEat();" id="autoEatNavBut">
            <img class="nav-img" src="assets/media/shop/autoeat.svg" id="autoEatImg">
            <span class="nav-main-link-name">Auto Eat</span>
        <small id="autoEatStatus">Disabled</small></a>
    </li>
    
    <li class="nav-main-item" title="Tired of that trash loot while your combat robot does its thing? Try the AutoCombat Auto Loot Option today!">
        <a class="nav-main-link nav-compact" href="javascript:toggleAutoLoot();" id="autoLootNavBut">
            <img class="nav-img" src="assets/media/main/bank_header.svg" id="autoLootImg">
            <span class="nav-main-link-name">AC Auto Loot</span>
        <small id="autoLootStatus">Enabled</small></a>
    </li>

    <li class="nav-main-item" title="The original Melvor Auto Slayer script by Bubbalova attempts to equip the Mirror Shield or Magic Ring when assigned a monster in zones that require them to enter. This option, disabled by default in SEMI, turns that functionality back on.">
        <a class="nav-main-link nav-compact" href="javascript:toggleAutoEquip();" id="autoEquipNavBut">
            <img class="nav-img" src="assets/media/bank/mirror_shield.svg" id="autoEquipImg">
            <span class="nav-main-link-name">AS Auto Equip</span>
        <small id="autoEquipStatus">Disabled</small></a>
    </li>

    <br>
    
    <li class="nav-main-item" title="AUTOMATICALLY SCRATCH! OMG">
        <a class="nav-main-link nav-compact" href="javascript:toggleAutoArch();" id="autoArchNavBut">
            <img class="nav-img" src="assets/media/skills/archaeology/archaeology.svg" id="autoArchImg">
            <span class="nav-main-link-name">AuToArChAeOloGy</span>
        <small id="autoArchStatus">Disabled</small></a>
    </li>
    
    <br>
    
    <li class="nav-main-item">
        <a class="nav-main-link nav-compact" href="javascript:semiInfo();" id="semiInfoNavBut">
            <img class="nav-img" src="`+$("#iconImg")[0].src+`">
            <span class="nav-main-link-name">Show SEMI Info</span>
        </a>
    </li>`));
    
    //sets up the nav ids to hide the menu.
    for (i=0; i < $("#semiHeading").nextAll().length; i++) { $("#semiHeading").nextAll()[i].id = 'semi-nav-'+i; } 
    
    for (i=0; i<rockData.length; i++) {
    $("#mining-ore-"+i).prepend($(`
        <button id="autoMine`+i+`" class="btn btn-outline-primary" style="width: 100%" type="button" onclick="autoMineSet(`+i+`);">
            AM Priority Override
        </button>`));
    } //sets up the AM overrides
    
    //katorone settings gui
    $('#modal-account-change').before($(`
        <div class="modal" id="modal-semi-set-menu" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true" style="display: none;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-primary-dark">
                            <img class="nav-img" src="`+ $("#iconImg")[0].src +`">
                            <h3 class="block-title">SEMI GUI for Katorone Automation Settings</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="fa fa-fw fa-times"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="block-content font-size-sm m-1">
                            These settings control parts of Katorone's automation script imported into SEMI using a settings menu idea from Melvor Idle Helper.
                            It's probably best to adjust these settings before starting the whole script, because every change is updated instantly.
                            Leaving the text fields blank will set the value to the placeholder amount, which is the default set by Katorone.
                            <br><br>
                            Warning: the settings <u>are not saved</u> and they will not carry over if the game is refreshed.
                            <br><br>
                            When changing number settings, use only numbers, no commas or periods or letters, otherwise the setting will not update to prevent breaking things.
                            <br><br>
                            Katorone's script uses two intervals, one that sells things if there's things to sell every second. 
                            It also loops every half-minute for the larger functions: burial, checking for loot to sell, all the rest. So, be patient!
                            <br>
                            <b>SEMI will notify you in-game and in the console when this script completes an action.</b>
                            <br><br>
                            <div class="row">
                                <div class="col-sm-12">
                                
                                    <div style="border: 2px solid gold; border-radius: 5px; padding: 10px;" class="custom-control custom-switch mb-1">
                                        <input type="checkbox" class="custom-control-input" id="kat-enabled" name="kat-enabled" onchange="katoroneOn = this.checked" ${katoroneOn ? "checked" : ""}>
                                        <label class="custom-control-label" for="kat-enabled"><b>Toggle All Katorone Automation</b></label>
                                    </div>
                                    
                                    <b class="font-size-h5">Bank automation settings:</b>
                                    
                                    <div id="number-settings-1" class="form-group" title="Katorone suggests at least 4M to buy bank slots.">
                                        <label for="example-text-input">Amount of GP to keep in the Bank:</label>
                                        <input type="text" class="form-control" id="k-set-1" placeholder="5000000">
                                    </div>
                                    
                                    <b>Another word of caution:</b> Katorone's script will automatially sell gems to reach the reserve GP amount set above. 
                                    This is useful to do its automation, such as buying more bank space or gem glove charges. 
                                    It is meant as a good companion to AutoMine. If you don't want this feature on, set the value to 0.
                                
                                    
                                    <div class="custom-control custom-switch mb-1">
                                        <input type="checkbox" class="custom-control-input" id="auto-sgb-enabled" name="auto-sgb-enabled" onchange="bot_sellGoldBags = this.checked" ${bot_sellGoldBags ? "checked" : ""}>
                                        <label class="custom-control-label" for="auto-sgb-enabled">Automatically Sell Gold Bags (Bobby's Pocket)</label>
                                    </div>
                                    
                                    <div class="custom-control custom-switch mb-1" title="Warning from Katorone: can drain money fast early game.">
                                        <input type="checkbox" class="custom-control-input" id="auto-bbs-enabled" name="auto-bbs-enabled" onchange="bot_buyBankSlots = this.checked" ${bot_buyBankSlots ? "checked" : ""}>
                                        <label class="custom-control-label" for="auto-bbs-enabled">Automatically Buy More Bank Space</label>
                                    </div>
                                    
                                    <div class="custom-control custom-switch mb-1" title="Opening anything in the bank will cause a popup and interrupt any bank actions.">
                                        <input type="checkbox" class="custom-control-input" id="auto-obn-enabled" name="auto-obn-enabled" onchange="bot_farming_openBirdNests = this.checked" ${bot_farming_openBirdNests ? "checked" : ""}>
                                        <label class="custom-control-label" for="auto-obn-enabled">Automatically Open Bird Nests</label>
                                    </div>
                                    
                                    <div class="custom-control custom-switch mb-1" title="Opening anything in the bank will cause a popup and interrupt any bank actions.">
                                        <input type="checkbox" class="custom-control-input" id="auto-ohb-enabled" name="auto-ohb-enabled" onchange="bot_farming_openHerbBags = this.checked" ${bot_farming_openHerbBags ? "checked" : ""}>
                                        <label class="custom-control-label" for="auto-ohb-enabled">Automatically Open Herb Sacks</label>
                                    </div>
                                    
                                    <hr>
                                    <b class="font-size-h5">Mining & Gem Gloves settings:</b>
                                    
                                    <div class="custom-control custom-switch mb-1">
                                        <input type="checkbox" class="custom-control-input" id="auto-bgg-enabled" name="auto-bgg-enabled" onchange="bot_buyGemGlove_enabled = this.checked" ${bot_buyGemGlove_enabled ? "checked" : ""}>
                                        <label class="custom-control-label" for="auto-bgg-enabled">Automatically Buy Gem Glove Charges</label>
                                    </div>
                                    
                                    The script will only buy gem glove charges if you are wearing the gloves and mining.
                                    
                                    <div id="number-settings-2" class="form-group" title="">
                                        <label for="example-text-input">Amount of Gem Glove Charges to keep:</label>
                                        <input type="text" class="form-control" id="k-set-2" placeholder="60000">
                                    </div>
                                    
                                    <hr>
                                    <b class="font-size-h5">Prayer settings:</b>
                                    
                                    <div class="custom-control custom-switch mb-1">
                                        <input type="checkbox" class="custom-control-input" id="auto-bb-enabled" name="auto-bb-enabled" onchange="bot_buryBones_enabled = this.checked" ${bot_buryBones_enabled ? "checked" : ""}>
                                        <label class="custom-control-label" for="auto-bb-enabled">Automatically Bury Bones</label>
                                    </div>
                                    
                                    <div id="number-settings-3" class="form-group" title="Katorone Sez: 21,600 bones is enough for 12h of crafting.">
                                        <label for="example-text-input">Amount of Bones to keep in bank:</label>
                                        <input type="text" class="form-control" id="k-set-3" placeholder="21600">
                                    </div>
                                    
                                    <div id="number-settings-4" class="form-group" title="Katorone Sez: 21,600 bones is enough for 12h of crafting.">
                                        <label for="example-text-input">Amount of Dragon Bones to keep in bank:</label>
                                        <input type="text" class="form-control" id="k-set-4" placeholder="21600">
                                    </div>
                                    
                                    <div id="number-settings-5" class="form-group" title="">
                                        <label for="example-text-input">Amount of Magic Bones to keep in bank:</label>
                                        <input type="text" class="form-control" id="k-set-5" placeholder="0">
                                    </div>
                                    
                                    <div id="number-settings-6" class="form-group" title="Katorone Sez: 21,600 bones is enough for 12h of crafting.">
                                        <label for="example-text-input">Amount of Holy Dust to keep in bank:</label>
                                        <input type="text" class="form-control" id="k-set-6" placeholder="21600">
                                    </div>
                                    
                                    <div id="number-settings-7" class="form-group" title="">
                                        <label for="example-text-input">Amount of Big Bones to keep in bank:</label>
                                        <input type="text" class="form-control" id="k-set-7" placeholder="0">
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
        </div>`));

    
    //initiate hidden XP/hr blocks in page containers
    /* adds extra section to fishing container... maybe the dropdown is worth it after all, always there but page-dependent. how does the potion button handle?
    $("#fishing-container").prepend($(`
        <div id="xph-div-1" class="col-md-12 d-none">
            <div class="block block-rounded block-link-pop border-top border-fishing border-4x">
                <div class="block-header text-center">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12 col-md-12">
                                <h3 class="text-muted m-1">You are earning <span class="p-1 bg-info rounded" id="xph-1">8,216</span> XP per hour.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`));
    */
    
    //XPH GUI
    $("#page-header-potions-dropdown").parent().before($(`
        <div class="dropdown d-inline-block ml-2">
            <button type="button" class="btn btn-sm bg-info" id="page-header-xph-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="border: 2px solid gold;">
                XP Per Hr
            </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 border-0 font-size-sm" id="header-equipment-dropdown" aria-labelledby="page-header-xph-dropdown" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-262px, 33px, 0px);">
                <div class="p-2 bg-primary text-center">
                    <h5 class="dropdown-header">
                        <a class="text-white">Use the XPH Script to calculate Experience Points Per Hour</a>
                    </h5>
                </div>
                <div class="block-content block-content-full text-center">
                    <span class="text-muted m-1">
                        The button below starts the XPH script for the skill you are currently idling.<br>
                        SEMI will display your XP per hour in a dialog below the button.<br>
                        If you're in combat, a custom XPH script will run for all combat skills simultaneously and display in the Combat Page's Skill Progress table.<br><br>
                        Toggle off and on again if switching idle skills.<br><br>
                    </span>
                    <button id="xphBtn" class="btn btn-sm btn-dual" onclick="xphDisplay()">Toggle XPH Display</button>
                    <br><br>
                    <div class="text-muted m-1">
                        SEMI has a specific button and separate script for Farming XPH. [NOTE: Only even remotely accurate after calculating for a few hours. Pairs well with AutoReplant.]
                    </div>
                    <button id="xphBtnF" class="btn btn-sm btn-dual" onclick="xphDisplay(11)">Toggle XPH for Farming</button>
                </div>
                <div id="xphDialog" class="block-content block-content-full text-center d-none">
                    <h3 class="text-muted m-1"><span class="p-1 bg-info rounded" id="xph-rate">...</span> <span id="xph-skill"></span> XP per hour.</h3>
                    <br>
                    <h3 class="text-muted m-1"><span class="p-1 bg-info rounded" id="xph-time">0</span> seconds spent running XPH.</h3>
                    <h4 class="text-muted m-1"><span id="xph-lvl">... hrs</span> to L<input type="number" id="xph-lvl-in" name="xph-lvl-in" min="2" max="99" style="width: 60px;">
                    <br>
                </div>
                <div id="xphDialogF" class="block-content block-content-full text-center d-none">
                    <h3 class="text-muted m-1"><span class="p-1 bg-info rounded" id="xph-rate-f">...</span> Farming XP per hour.</h3>
                    <br>
                    <h3 class="text-muted m-1"><span class="p-1 bg-info rounded" id="xph-time-f">0</span> seconds spent running XPHf.</h3>
                    <h4 class="text-muted m-1"><span id="xphf-lvl">... hrs</span> to L<input type="number" id="xphf-lvl-in" name="xph-lvl-in" min="2" max="99" style="width: 60px;">
                    <br>
                </div>
            </div>
        </div>`));
    
    //XPHcombat GUI
    $("#combat-skill-progress-menu tr:first").append($(`<th id="xphc-th" class="xphc d-none" style="width: 125px;">xp/h (<span id="xphc-time">0</span> s)</th>`));
    $("#combat-skill-progress-menu tr:not(:first)").append($('<td class="font-w600 xphc d-none"><small>...</small></td>'));
    for (i=0; i<8; i++) { $(".xphc:not(:first)")[i].id = "xphc-rate-"+i; }
    $("#combat-skill-progress-menu tr:first").append($(`<th id="xphc-th2" class="xphc xphcl d-none" style="width: 175px;">Time to Level</th>`)); 
    $("#combat-skill-progress-menu tr:not(:first)").append($(`
        <td class="font-w600 xphc xphcl d-none">
            <span>... hrs</span> to L<input type="number" id="xphc-lvl-in" name="xphc-lvl" min="2" max="99" style="width: 50px; float: right;">
        </td>`)); //add level selector
    for (i=0; i<8; i++) { $(".xphcl:not(:first) span")[i].id = "xphc-lvl-"+i; }
    for (i=0; i<8; i++) { $(".xphcl:not(:first) input")[i].id = "xphc-lvl-in-"+i; }
    
    //Barf Potion Button
    $('.row.no-gutters.bg-primary').append($(`
        <div class="col-12">
            <div class="p-2 text-center">
                <button class="btn btn-dual" onclick="barf();" style="border: 2px solid gold" title="This will purge your remaining charges of your potion and immediately remove its effects. Even if Auto-Reuse is on, you will have to select your potion again to restart its effects after barfing.">
                    <small>BARF MY POTION NOW!<br></small>
                </button>
            </div>
        </div>`));
    
    //AutoMine Bar Select GUI
    $("#mining-container .row:first").after($(`
        <div class="col-6 col-lg-12" id="AMselector">
            <div class="block-header text-center m-1" style="color: gold; background: #2c343f !important; border-radius: 5px; border: 2px solid gold;">
                SEMI AutoMine Bar Selection GUI: Set the robot to mine ores for specific bars.
            </div>
            <button id="AMbtn0" class="btn btn-outline-primary" type="button" onclick="AMselect(0);">
                <img src="assets/media/bank/bronze_bar.svg" width="32" height="32">
            </button>
 
            <button id="AMbtn1" class="btn btn-outline-primary" type="button" onclick="AMselect(1);">
                <img src="assets/media/bank/iron_bar.svg" width="32" height="32">
            </button>
            
            <button id="AMbtn2" class="btn btn-outline-primary" type="button" onclick="AMselect(2);">
                <img src="assets/media/bank/steel_bar.svg" width="32" height="32">
            </button>
        
            <button id="AMbtn3" class="btn btn-outline-primary" type="button" onclick="AMselect(3);">
                <img src="assets/media/bank/silver_bar.svg" width="32" height="32">
            </button>
            
            <button id="AMbtn4" class="btn btn-outline-primary" type="button" onclick="AMselect(4);">
                <img src="assets/media/bank/gold_bar.svg" width="32" height="32">
            </button>
            
            <button id="AMbtn5" class="btn btn-outline-primary" type="button" onclick="AMselect(5);">
                <img src="assets/media/bank/mithril_bar.svg" width="32" height="32">
            </button>
            
            <button id="AMbtn6" class="btn btn-outline-primary" type="button" onclick="AMselect(6);">
                <img src="assets/media/bank/adamantite_bar.svg" width="32" height="32">
            </button>
            
            <button id="AMbtn7" class="btn btn-outline-primary" type="button" onclick="AMselect(7);">
                <img src="assets/media/bank/runite_bar.svg" width="32" height="32">
            </button>
            
            <button id="AMbtn8" class="btn btn-outline-primary" type="button" onclick="AMselect(8);">
                <img src="assets/media/bank/dragonite_bar.svg" width="32" height="32">
            </button>
            
            <button id="AMbtn9" class="btn btn-primary" type="button" onclick="AMselect(9);" title="Default AM mineArray setting: prioritize XP.">
                <img src="assets/media/shop/pickaxe_dragon.svg" width="32" height="32">
            </button>
            
        </div><br><br>`))
    
    updateAutoSellGemsButtonText();    
    updateAutoMineButtonText();    
    updateAutoSlayerButtonText();
    
    $("#semiHeading").append($('<a href="javascript:toggleSemiMenu();"><i style="color: gold !important;" class="far fa-eye text-muted ml-1" id="skill-menu-icon2"></i></a>'));
    //if all goes well, yay, it's loaded
        customNotify('assets/media/monsters/dragon_black.svg','Scripting Engine for Melvor Idle is now loaded and running! Check the bottom of the sidebar.',10000);
} //End of SEMI menu injection

//toggle SEMI sidebar menu
var semiMenu = true;

function toggleSemiMenu() {
    semiMenu = !semiMenu;
    if (semiMenu) { 
        for (i=0; i < $("[id^=semi-nav]").length; i++) { $("#semi-nav-" + i).removeClass("d-none"); }
        if (!moreMenus2) {
            $(".nav-main-heading:contains('Auto Skills')").nextAll().slice(0,7).toggleClass("d-none"); 
        }
        /* AF options automated, AF submenu/header removed, now included in skills above
        if (!moreMenus3) {
            for (i=0; i<3; i++) { $(".nav-main-heading:contains('Auto Fishing')").nextAll().slice(0,3).toggleClass("d-none"); }
        }*/
        if (!moreMenus4) {
            $(".nav-main-heading:contains('Auto Combat')").nextAll().slice(0,5).toggleClass("d-none");
        }
    }
        else { for (i=0; i < $("[id^=semi-nav]").length; i++) { $("#semi-nav-" + i).addClass("d-none"); } //automated id application in place, all appended will be tagged for invisibilitization
    }
    $("#skill-menu-icon2").attr("class", "far fa-eye" + ((semiMenu) ? '' : '-slash') + " text-muted ml-1");
}

//Adjusting main menu so we can toggle other & social menus
for (i=0; i<6; i++) { $(".nav-main-heading:contains('Other')").nextAll()[i].id = 'other-nav-'+i }
for (i=0; i<5; i++) { $(".nav-main-heading:contains('Socials')").nextAll()[i].id = 'socials-nav-'+i }
var moreMenus0 = true;
var moreMenus1 = true;
var moreMenus2 = true;
var moreMenus3 = true;
var moreMenus4 = true;
$(".nav-main-heading:contains('Other')").append($('<a href="javascript:toggleMoreMenus(0);"><i style="color: gold !important;" class="far fa-eye text-muted ml-1" id="moreEye0"></i></a>'));
$(".nav-main-heading:contains('Socials')").append($('<a href="javascript:toggleMoreMenus(1);"><i style="color: gold !important;" class="far fa-eye text-muted ml-1" id="moreEye1"></i></a>'));

function toggleMoreMenus(x) {
    if (x==0) { //Other (main menu)
        moreMenus0 = !moreMenus0;
        for (i=0; i < $("[id^=other-nav]").length; i++) { $("#other-nav-" + i).toggleClass("d-none"); } //automated id application, all appended will be tagged for invisibilitization
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus0) ? '' : '-slash') + " text-muted ml-1");
    } else if (x==1) { //Socials (main menu)
        moreMenus1 = !moreMenus1;
        for (i=0; i < $("[id^=socials-nav]").length; i++) { $("#socials-nav-" + i).toggleClass("d-none"); } //automated id application, all appended will be tagged for invisibilitization
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus1) ? '' : '-slash') + " text-muted ml-1");
    } else if (x==2) { //auto skills 
        moreMenus2 = !moreMenus2;
        $(".nav-main-heading:contains('Auto Skills')").nextAll().slice(0,7).toggleClass("d-none");
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus2) ? '' : '-slash') + " text-muted ml-1");
    } else if (x==3) { //auto fishing... DEFUNCT
        moreMenus3 = !moreMenus3;
        $(".nav-main-heading:contains('Auto Fishing')").nextAll().slice(0,3).toggleClass("d-none");
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus3) ? '' : '-slash') + " text-muted ml-1");
    } else if (x==4) { //auto combat
        moreMenus4 = !moreMenus4;
        $(".nav-main-heading:contains('Auto Combat')").nextAll().slice(0,5).toggleClass("d-none");
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus4) ? '' : '-slash') + " text-muted ml-1");
    }
}

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

//show SEMI katorone automation settings modal called by nav button 
function semiSetMenu() { $("#modal-semi-set-menu").modal(open); }

//show SEMI info modal function called by nav button
function semiInfo() { $("#modal-semi-info").modal(open); }

//Modal for SEMI info popup
$('#modal-account-change').before($(`
<div class="modal" id="modal-semi-info" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="block block-themed block-transparent mb-0">
                <div class="block-header bg-primary-dark">
                    <img class="nav-img" src="`+ $("#iconImg")[0].src +`">
                    <h3 class="block-title">Scripting Engine for Melvor Idle v0.3.2</h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                            <i class="fa fa-fw fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="block-content font-size-sm">
                    <p id="semi-info-text"></p>
                    
                    <h2 style="color: white;">SEMI v0.3.2 by Aldous Watts</h2>
                    Various Quality of Life improvements, scripts for automation, and UI tweaks for Melvor.
                    <br>
                    Hover over sidebar buttons or Katorone settings menu items to see tooltips that describe the scripts/options and give hints.
                    <br><br>
                    Don't forget these features of SEMI that aren't in the sidebar:
                    <ul>
                        <li>Thieving XP calculators and loot popups in the Thieving page</li>
                        <li>Number of potions until level-up calculator button in the Herblore page</li>
                        <li>Destroy All Crops button in the Farming page</li>
                        <li>Barf My Potion button in the Potion selection menu</li>
                        <li>XPH GUI: XP per hour calculations done through a button next to the Potion selection button</li>
                    </ul>
                    Scripting with Melvor can be done through injected user scripts, either through a browser add-on like this, 
                    or another more general-purpose add-on like Tampermonkey to run userscripts. 
                    Either way, the end result is extra functionality, like automating a task or adding calculated info to the page.
                    <br><br>
                    Many functions of SEMI are based on these scripts by others:
                    <ul>
                        <li><a href="https://greasyfork.org/en/scripts/394855-melvor-auto-replant" target="_blank">Melvor Auto Replant by Arcanus</a></li>
                        <li><a href="https://discordapp.com/channels/625838709203271680/664637399028072470/669475769671483392" target="_blank">AutoBonfire by Dream</a></li>
                        <li>Auto Mine & Auto Sell Gems from <a href="https://greasyfork.org/en/scripts/395834-melvor-super-control-panel/code" target="_blank">Melvor Super Control Panel by Strutty & others?</a></li>
                        <li><a href="https://greasyfork.org/en/scripts/396400-melvor-auto-slayer" target="_blank">Melvor AutoSlayer by Bubbalova</a></li>
                        <li><a href="https://greasyfork.org/en/scripts/394856-melvor-percent-accuracy" target="_blank">Melvor Percent Accuracy by Arcanus</a></li>
                        <li><a href="https://pastebin.com/wq641Nhx" target="_blank">XPH by Breakit</a></li>
                        <li>Thieving Calculator from <a href="https://github.com/RedSparr0w/Melvor-Idle-Helper" target="_blank">Melvor Idle Helper by RedSparr0w</a></li>
                        <li><a href="https://discordapp.com/channels/625838709203271680/664637399028072470/681397160465661992" target="_blank">AutoCook by Unicue</a></li>
                        <li><a href="https://pastebin.com/WKD9R6WY" target="_blank" title="BreakIt's original source">AutoFish by BreakIt</a>, Jarx, and me (currently broken and removed as of Melvor alpha v0.14)</li>
                        <li><a href="https://github.com/Katorone/AutoMelvorIdle/blob/master/melvor.user.js" target="_blank" title="">Katorone's automation script</a></li>
                    </ul>
                    <br>
                    Source code for SEMI can be found <a href="https://gitlab.com/aldousWatts/SEMI" target="_blank">here.</a>
                    <br><br>
                </div>
                <div class="block-content block-content-full text-right border-top">
                    <button type="button" id="semiInfoModalBtn" class="btn btn-sm btn-primary" data-dismiss="modal" onclick=""><i class="fa fa-check mr-1"></i>Cool!</button>
                </div>
            </div>
        </div>
    </div>
</div>`));

//Barf Up Current Potion
function barf() {
    herbloreBonuses[currentPage].itemID = 0;
    herbloreBonuses[currentPage].bonus = [null, null];
    herbloreBonuses[currentPage].charges = 0;
    customNotify('assets/media/skills/herblore/potion_empty.svg', 'Your potion has been BARFED!', 5000);
    if (currentPage === 13) updatePlayerStats();
    updatePotionHeader();
}

//Auto Smelt
var barTypeCount = 0;
var barType = [0, 11, 24, 26, 35, 41, 54, 61, 74];

function autoSmithBars(){
    if (document.getElementById("smith-item-have").innerHTML == "-" ) {
        selectSmith(0);
        return;
    }
    if (document.getElementById("smithing-item-have-2") == null) {
        if (document.getElementById("smithing-item-have-1") == null) {
            if (Number(document.getElementById("smithing-item-have-0").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[0]) ){ //< requires
                barTypeCount = (barTypeCount + 1) % barType.length;
                selectSmith(barType[barTypeCount]);
            } else if (!isSmithing) startSmithing(true);
        } else if (Number(document.getElementById("smithing-item-have-0").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[0]) || Number(document.getElementById("smithing-item-have-1").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[1]) ){
            barTypeCount = (barTypeCount + 1) % barType.length;
            selectSmith(barType[barTypeCount]);
        } else if (!isSmithing) startSmithing(true);
    } else if (Number(document.getElementById("smithing-item-have-0").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[0]) || Number(document.getElementById("smithing-item-have-1").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[1]) || Number(document.getElementById("smithing-item-have-2").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[2]) ){
        barTypeCount = (barTypeCount + 1) % barType.length;
        selectSmith(barType[barTypeCount]);
    } else if (!isSmithing) startSmithing(true);
}
var smithBarsInterval;
var autoSmithingBars = false;
function toggleAutoSmithBars() {
    autoSmithingBars = !autoSmithingBars;
    $("#auto-sb-status").text( (autoSmithingBars) ? 'Enabled' : 'Disabled');
    if (autoSmithingBars) {
        smithBarsInterval = setInterval(autoSmithBars, 1000);
        changePage(11);
    } else { 
        clearInterval(smithBarsInterval);
        if (isSmithing) startSmithing(true);
    }
}

function autoArch() {
    if (currentPage !== 20) changePage(20);
    let brush = document.createElement('img');
    brush.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAABVlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////LFJkRAAAAcHRSTlMAAQIDBAUGBwgJCgwNDxARFBUWFxgeHyEkJSYoKywtLi8yNDU2Ojw+RUxNU1tcZmtsbXR1eoSKi4yZnJ2goqeoqa+ytre4ub/AwsPIzc7P0dPU19jZ2tvc3d7f4OXn6+zt7vDx8vP09fb3+Pr7/P3+y6o2NAAAA4dJREFUeAHt2/9TG1UUBfDjgqUoMdCgpiltMXyhwShYBRXFaJpSTBW/IGCbBiNLN4kQe/7/n8xM0rBvd7MyL2/vm87k8xdcmJ3M7r3nQFtuyed9iFuk4jaklakoQ1qDilNIa1HRhDQGIEmZvcMiVAUGrEFVPNzLwIx0jV0bUFQY8B0UG+yqpTG66Sp7NuHnMsCF3yZ7qtMYjbPNgQeBZzDmKXzAgW0HI1ijXwZXOgzo4Eom/HRomWpScYGBOwyZx8AFFc0paMky6BivbTHkIV47ZlAWOpYZso8+jyEv0bfPkGXoyDNsB0Cu9MJjBK9eygHYYVgeOmYZYfeozRjto11GSEPLMxpyAD1rNGQFelI0JAVNT2nEU+haoBF3oesGjbgBbd/QgB3oe4cGzEKf0+HI/nWgz2lwZL+9hWvLLufT8JlwaYA7AZ90fjmLIabYdbCSQt+kSyPcSfS9V3jGrrcRrcmePxZuKn+/of/B9Ee/s6f+/z/9j+Ycx6UxndTkB4945R4iOFRcNpggB2HbFPQFQqYp6iaCqhRVRUCawlJQ1SisBkWG4jLw26O4PfgdUtwh/IoUV4Rig8I2ELBJUR8jZJ2CVhEhc0EhFzOIdkwRxxhqnwJ+RIwdJu4JYu0yYb8g3hETdoJ4bSbMQ6w8EzeHOCUm7kvEqTNxLxDHY+JeYaj5LY8Cmg/nEbJeOWt1KKbTPKsU0He7fNqiFa1GeRHI0aoclmjVkv0BxgOMBxgPMB5gPMAcrcoB96t//0MrWqflRfR98lj2haTlVgoImf/8nAK8rTsY6pKJ82y/ltcR53smroQ4WSYuD7tfJm3EO7H9eV5lwsqCCxKNS+4+aW9JZH9NN3NOIecziLBqeVVbkF9W21/X2z9Y2D/Z2D9a2T/b2T9c2j/d2j9e2z/fWw8wCEQ4GpdUOIhwP7kQi+s4t37glXtWYjxTd39mTz0uyPQ8ySBTauVADTKFo1yzwlEugTBbw7Ec5+s49gON9iOd9kOtdmO9C3hTg83Wo90rtsPtz2nIr9CSZoTySZsxvD+fMELaaMUjX6p7jPCq/vUtAN8yLC9RcmkaL7nYrvmEi07nmkWnl+8aqnrNXLfq9SH91k2V3VavX3Zb58D2hKm6XxF+Zww4g99nat1PovBYgeIrdtVSgpXPAlSf8qcMksQA27XfFqT9RUUD0h5TUbZffhc3Z6b+/x+23mUFpRRI3wAAAABJRU5ErkJggg==";
    let count = 0;
    let county = 0;
    var offsetx;
    var offsety;
    var ctx = $(".sc__canvas")[0].getContext('2d');
    for (i=0; i<9; i++) { 
        setTimeout( () => {
            var offset = $(".sc__canvas").offset();
            offsetx = offset["top"];
            offsety = offset["left"];
            
            $(".sc__canvas")[0].getContext('2d').globalCompositeOperation = 'destination-out';
            if (count>2) {county = 1;}
            if (count>5) {county = 2;}
            $(".sc__canvas")[0].getContext('2d').drawImage(brush, 5 + (100*(count % 3)), 5 + (100*county));
            if (count == 3) { 
                ctx.font = "50px Arial";
                ctx.fillText("69 69 69 69", 69, 222); 
            }
            if (count == 8) { 
                setTimeout( () => {
                    var targetNode = $(".sc__canvas")[0];
                    if (targetNode) {
                        //--- Simulate a natural mouse-click sequence.
                        triggerMouseEvent (targetNode, "mouseover");
                        triggerMouseEvent (targetNode, "mousedown");
                        triggerMouseEvent (targetNode, "mousemove"); //aw: added for this, needs movement too
                        triggerMouseEvent (targetNode, "mouseup");
                        triggerMouseEvent (targetNode, "click");
                    }
                    else console.log ("*** Target node not found!");
                    
                    function triggerMouseEvent (node, eventType) {
                        var clickEvent = document.createEvent ('MouseEvents');
                        clickEvent.initEvent (eventType, true, true);
                        node.dispatchEvent (clickEvent);
                    }
                }, 100);
            }
            count++;
        }, 100*i);
    }
}

var autoArchOn = false;
var autoArchLoop;
function toggleAutoArch() {
    autoArchOn = !autoArchOn;
    $("#autoArchStatus").text( (autoArchOn) ? 'Enabled' : 'Disabled' );
    if (autoArchOn) {
        autoArch();
        autoArchLoop = setInterval( () => { autoArch() }, 3000);
    } else { clearInterval (autoArchLoop); }
    
}

//***************************AUTO COMBAT***********************************
    var autocombat;
    var autocombatloop;
    var hp;
    var hpfoox;
    var hpmax;
    var autoEating = false;
    var autoEatLoop;
    var autoLoot = true;

function autoEat() {
    hp = combatData.player.hitpoints; //this number is already multiplied
    hpfood = numberMultiplier * items[equippedFood[currentCombatFood].itemID].healsFor; //numberMultiplier = 10, adjusts hp math
    hpmax = skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier; //same here
    if (hp < (hpmax-hpfood) || hp<50) eatFood(); 
    if(equippedFood[currentCombatFood].qty < 1 ){ //cycle through food, added by rebelEpik
        for(i = 0; i < equippedFood.length; i++){
            if(equippedFood[i].qty > 0){
                selectEquippedFood(i);
                return;
            }
        }
    }
}
    
//AutoCombat Main Function
function autocombatfunc() {
    if (equippedFood[currentCombatFood].qty < 1) { 
    	terminateAutoCombat('food.');
    } 
    if ((items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged || (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === "Ranged Weapon") ) && ammo<500) {
        if (!isDungeon) { 
            for (let i = 0; i < bank.length; i++) {
                if(items[bank[i].id].name == items[equippedItems[CONSTANTS.equipmentSlot.Quiver]].name && items[equippedItems[CONSTANTS.equipmentSlot.Quiver]].name !== "Normal Logs" ) { 
                    equipItem(i, equippedItems[CONSTANTS.equipmentSlot.Quiver], 1000, selectedEquipmentSet);
                    customNotify(items[equippedItems[CONSTANTS.equipmentSlot.Quiver]].media,'SEMI just equipped 1000 '+ items[equippedItems[CONSTANTS.equipmentSlot.Quiver]].name+'.',5000);
                }
            }
        }
    }
    if ((items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged || (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === "Ranged Weapon") ) && ammo < 1) { 
    	terminateAutoCombat('ammo.');
    }
    if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic && !checkRuneCount(selectedSpell) ) { 
		terminateAutoCombat('runes.');
    }
    if (!(droppedLoot == "") && autoLoot) lootAll(); //the truth condition was always true. now it ACTUALLY checks when empty and shouldn't run lootAll() every half-second, which caused big issues.
}

//***************************END AUTO COMBAT*******************************
//Autocombat Auxiliaries
function terminateAutoCombat(reason) { 
    var today = new Date(); //this and next three lines are date & time function from https://tecadmin.net/get-current-date-time-javascript/
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' @ '+time;
    clearInterval(autocombatloop); 
    stopCombat(false, true, true);
    autocombat = false;
    updateACstatus();
    alert('SEMI: Exited Auto Combat @ '+dateTime+' because '+username+' is out of '+reason);//upgrade to jqueryui modal dialog
    autoSlayerEnabled = false; //connecting to auto slayer script by bubbalova from greasefork in tampermonkey
    updateAutoSlayerButtonText(); //yay, automatically turns off auto slayer! kewls
}

function updateACstatus() { 
    $("#autocombatStatus").text((autocombat) ? 'Enabled' : 'Disabled'); 
    $("#autocombatStatus").css('color', (autocombat) ? 'gold' : '');
}

function toggleautocombat() { //button -> function that enables auto combat
    if (!isInCombat) { terminateAutoCombat("common sense... You aren't in combat!"); return; } 
    autocombat = !autocombat;
    updateACstatus();
    if (!autocombat) {
        clearInterval(autocombatloop);
        terminateAutoCombat("orders: you have given the command to stop.");
    } else { 
        autocombatloop = setInterval(() => { autocombatfunc(); }, 500);
        customNotify('assets/media/skills/combat/combat.svg','AutoCombat is now running.');
    }
}

function toggleAutoEat() { 
    autoEating = !autoEating;
    $("#autoEatStatus").text((autoEating) ? 'Enabled' : 'Disabled');
    (autoEating) ? autoEatLoop = setInterval( () => { autoEat(); }, 500) : clearInterval(autoEatLoop);
}

function toggleAutoLoot() { 
    autoLoot = !autoLoot;
    $("#autoLootStatus").text((autoLoot) ? 'Enabled' : 'Disabled');
}
//End of Autocombat Auxiliaries

// Imported code section/mostly authored by others. Comments like this //::show the script name & author. Heavy modifications.

var autoEquipZone = false;
function toggleAutoEquip() {
    autoEquipZone = !autoEquipZone;
    $("#autoEquipStatus").text( (autoEquipZone) ? 'Enabled' : 'Disabled');
}

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// Importing Auto Slayer by Bubbalova. Using a modified version of script v1.2.1.
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

var autoSlayerEnabled = false;
var autoSlayerCheck = 0;

//Holds values for unequipped equipment
    var originalRing;
    var originalShield;
    var originalCape;

var updateAutoSlayerButtonText = function () { 
    $('#auto-slayer-button-status').text((autoSlayerEnabled) ? 'Enabled' : 'Disabled'); 
    $('#auto-slayer-button-status').css('color', (autoSlayerEnabled) ? 'gold' : '');
} 

var toggleAutoSlayer = function () {
    autoSlayerEnabled = !autoSlayerEnabled; //interesting way to toggle. i like it better than my bs way. seems like the 'right' way. maybe it's just the jqueryui way. nope, all bool way.
    updateAutoSlayerButtonText();
    setTimeout(function() {
        if (!autoSlayerEnabled) {
            stopCombat(false, true, true); 
            customNotify('assets/media/skills/slayer/slayer.svg', 'AutoSlayer is now disabled.');
            if (autocombat) terminateAutoCombat('robo-slayer juice. AutoSlayer was disabled, so AutoCombat will follow suit.');
        } else { 
            changePage(13) 
            customNotify('assets/media/skills/slayer/slayer.svg', 'AutoSlayer is now running.');
        }
    }, 100);
}

//Main function
var autoSlayer = function() {
    if (!autoSlayerEnabled) {
        autoSlayerCheck = 0;
        return;
    }
    //Slayer areas that require items
    //aw: defunct in melvor v0.13
    var strangeCave = 10;
    var highLands = 11;
    //slayerAreas[1] = strangeCave
    //slayerAreas[2] = highLands
    //probably best to change if conditions to "if slayer monster is in these areas, do this"
    
    isDungeon = false; //if you just completed a dungeon, this will be true and throw errors on enemy killed.

    if (!slayerTask.length) getSlayerTask(); //If there is no slayer task, get one
    
    if(autoSlayerCheck == 0){
        autoSlayerCheck = 1;
        originalCape = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Cape];
        originalShield = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield];
        originalRing = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring];
    }
    
    //If you are fighting an enemy that isn't your current task, stop combat and switch to the task monster
    if (forcedEnemy !== slayerTask[0].monsterID || !isInCombat) {
        if (isInCombat) stopCombat(false, true, true);
        for(let i=0; i<combatAreas.length; i++){
            if (combatAreas[i].areaName == findEnemyArea(slayerTask[0].monsterID)) {
                selectedCombatArea = i;
                break;
            }
        }
        //Equips Slayer Skillcape if owned
        if(skillLevel[CONSTANTS.skill.Slayer] >= 99 && checkBankForItem(CONSTANTS.item.Slayer_Skillcape) || equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Cape] == CONSTANTS.item.Slayer_Skillcape){
            if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Cape] != CONSTANTS.item.Slayer_Skillcape){
                originalCape = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Cape]
                for (let i = 0; i < bank.length; i++) {
                    if(items[bank[i].id].name == "Slayer Skillcape") {
                        equipItem(i, CONSTANTS.item.Slayer_Skillcape, 1, selectedEquipmentSet)
                        found = true
                        break;
                    }
                }
            }
        }
        //skips task if unequipped for the zone and the monster is in an equipment-restricted zone with AS AutoEquip off
        else if( (slayerAreas[1].monsters.includes(slayerTask[0].monsterID) || slayerAreas[2].monsters.includes(slayerTask[0].monsterID)) && !autoEquipZone ) {
            if(slayerAreas[1].monsters.includes(slayerTask[0].monsterID) && equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] != CONSTANTS.item.Mirror_Shield) {
                newSlayerTask(); 
            } else if (slayerAreas[2].monsters.includes(slayerTask[0].monsterID) && equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring] != CONSTANTS.item.Magical_Ring) {
                newSlayerTask();
            }
        }
        //Equips Mirror Shield for area
        else if(slayerAreas[1].monsters.includes(slayerTask[0].monsterID) && autoEquipZone) {
            if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] != CONSTANTS.item.Mirror_Shield) {
                originalShield = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield];
                if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] == 0) {
                    newSlayerTask();
                    notifyPlayer(CONSTANTS.skill.Slayer, "Skipping task due to 2-handed weapon!");
                } else {
                    for (let i = 0; i < bank.length; i++) {
                        if(items[bank[i].id].name == "Mirror Shield") {
                            equipItem(i, CONSTANTS.item.Mirror_Shield, 1, selectedEquipmentSet)
                            found = true
                            break;
                        }
                    }
                }
            }
        }
        //Equips Magical Ring for area
        else if(slayerAreas[2].monsters.includes(slayerTask[0].monsterID) && autoEquipZone) {
            if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring] != CONSTANTS.item.Magical_Ring) {
                originalRing = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring];
                for (let i = 0; i < bank.length; i++) {
                    if(items[bank[i].id].name == "Magical Ring") { //aw: removed typeof() because broken.
                        equipItem(i, CONSTANTS.item.Magical_Ring, 1, selectedEquipmentSet)
                        found = true
                        break;
                    }
                }
            }
        }
        else if( !(slayerAreas[1].monsters.includes(slayerTask[0].monsterID) || slayerAreas[2].monsters.includes(slayerTask[0].monsterID)) && autoEquipZone){
            
            slayerLockedItem = null; //not sure what this does, added in Auto Slayer 1.2.1
            
            //Equips original shield when not in Area
            if ( (equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] == CONSTANTS.item.Mirror_Shield && originalShield != CONSTANTS.item.Mirror_Shield && originalShield != undefined) && autoEquipZone){
                for (let i = 0; i < bank.length; i++) {
                    if(items[bank[i].id].name == items[originalShield].name) {
                        equipItem(i, originalShield, 1, selectedEquipmentSet)
                        found = true
                        break
                    }
                }
            }
            //Equips original ring when not in Area
            if ( (equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring] == CONSTANTS.item.Magical_Ring && originalRing != CONSTANTS.item.Magical_Ring && originalRing != undefined) && autoEquipZone){
                for (let i = 0; i < bank.length; i++) {
                    if(items[bank[i].id].name == items[originalRing].name) {
                        equipItem(i, originalRing, 1, selectedEquipmentSet)
                        found = true
                        break
                    }
                }
            }
        }
        selectMonster(slayerTask[0].monsterID);
    }
}

var autoSlayerTimer = setInterval(function(){autoSlayer();}, 2000); //idk how i feel about this always being on rn... guess it's ok cuz it will just check if running and return. doesn't seem to be heavy in bg.

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// End of AutoSlayer!
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

//::from Breakit on pastebin, modified for Melvor v0.12: https://pastebin.com/wq641Nhx
function XPH(running,stat) {
  XPH.Stats = [ "Woodcutting","Fishing","Firemaking","Cooking","Mining","Smithing","Attack","Strength","Defence","Hitpoints","Thieving","Farming","Ranged","Fletching","Crafting","Runecrafting","Magic","Prayer","Slayer","Herblore" ]
  if ((running == null) || (stat > 19) || (isNaN(running)) || (isNaN(stat))) {
     for (var i=0; i<XPH.Stats.length; i++) { console.log(i + ': ' + XPH.Stats[i]); }
     console.log('SYNTAX: XPH([1|0],[0-19])');
     //console.log(XPH.Stats.toSource()); //breaks XPH in chrome.
     console.log('["Woodcutting", "Fishing", "Firemaking", "Cooking", "Mining", "Smithing", "Attack", "Strength", "Defence", "Hitpoints", "Thieving", "Farming", "Ranged", "Fletching", "Crafting", "Runecrafting", "Magic", "Prayer", "Slayer", "Herblore"]');
     console.log('Example to Start/Check Strength XPH(1,7)');
     console.log('Example to Stop Strength XPH(0,7)');
     return
  } else {
    if (XPH.running) {
      XPH.rate = Math.floor((skillXP[stat] - XPH.exp) / ((Date.now() - XPH.time) / 1000) * 3600);
      XPH.rate = XPH.rate.toString();
      
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(XPH.rate)) XPH.rate = XPH.rate.replace(pattern, "$1,$2");
      //console.log('Current xp/hr rate for ' + XPH.Stats[stat] + ': ' + XPH.rate + '/hr -- Test running for ' + ((Date.now() - XPH.time) / 1000) + ' seconds.');
        if (!running) {
        console.log('Stopping');
        XPH.running = '';
        }
    } else {
      XPH.exp = skillXP[stat];
      XPH.time = Date.now();
      XPH.running = 1;
      XPH.skillID = stat;
      //XPH.testarr = ['testarr0', 'testarr1', '2', 'yo mamam'];
 
      console.log('Starting xp/hr monitoring for: ' + XPH.Stats[stat]);
      //console.log('Use XPH(1,' + stat + ') to view current exp/hr.');
      console.log('Use XPH(0,' + stat + ') to stop.');
    }
  }
}
//::what a great utility!

//XPH GUI function
var updateXPHloop;
function xphDisplay(n) {    
    if (XPH.running && n !== 11) {
        $("#xphDialog").toggleClass('d-none');
        clearInterval(updateXPHloop);
        XPH(0,0); //stops if running already
    } else if (XPHf.running && n == 11) {
        $("#xphDialogF").toggleClass('d-none');
        clearInterval(updateXPHloopF);
        XPHf(0);
    } else if (XPHcombat.running && n !== 11) {
        $(".xphc").toggleClass('d-none');
        XPHcombat(0);
        clearInterval(updateXPHCloop);
    } else if (n == 11) {
        startXPHF();
    } else if (isInCombat) {
        customNotify('assets/media/main/statistics_header.svg', 'Check Combat Page Skill Progress table for XPH Combat Display!', 10000);
        startXPHC();
    } else if (currentlyCutting == 1 || currentlyCutting == 2) {
        startXPH(0);
    } else if (isFishing) {
        startXPH(1);
    } else if (isBurning) { //we be burning not concerning what nobody wanna say
        startXPH(2);
    } else if (isCooking) {
        startXPH(3);
    } else if (isMining) {
        startXPH(4);
    } else if (isSmithing) {
        startXPH(5);
    } else if (isThieving) {
        startXPH(10);
    } else if (isFletching) {
        startXPH(13);
    } else if (isCrafting) {
        startXPH(14);
    } else if (isRunecrafting) {
        startXPH(15);
    } else if (isHerblore) {
        startXPH(19);
    }
}

function startXPH(n) {
    XPH(1,n);
    $("#xphDialog").toggleClass('d-none');
    $("#xph-rate").text('...');
    $("#xph-time").text('0');
    $("#xph-skill").text(skillName[XPH.skillID]);
    $("#xph-lvl").text("... hrs");
    updateXPHloop = setInterval( () => {
        XPH(1,n);
        $("#xph-rate").text(XPH.rate);
        $("#xph-time").text(((Date.now() - XPH.time) / 1000).toFixed(0));
        if($("#xph-lvl-in").val()>99) $("#xph-lvl-in").val(99)
        if ((Number($("#xph-lvl-in").val()) > skillLevel[XPH.skillID]) && Number(XPH.rate.split(",").join(""))>0) {
            var timeToLvl = ( exp.level_to_xp(Number($("#xph-lvl-in").val())) - skillXP[XPH.skillID] )/Number(XPH.rate.split(",").join(""));
            var timeToLvl = timeToLvl.toFixed(1);
            if (timeToLvl<1000) {
                $("#xph-lvl").text(timeToLvl + " hrs"); 
            } else if (timeToLvl>=1000) {
                timeToLvl = timeToLvl / 24;
                timeToLvl = timeToLvl.toFixed(0);
                $("#xph-lvl").text(timeToLvl + " days"); 
            }
        } else { 
            timeToLvl = "..."; 
            $("#xph-lvl").text(timeToLvl + " hrs"); 
        }
        //should this loop just check for idle switching and switch automatically?!?!?!? dont have time for this tonight
        //if currentXPHskill !== idleSkill {change}
    }, 1000);
}

function XPHf(running) {
    if (XPHf.running) {
      XPHf.rate = Math.floor((skillXP[11] - XPHf.exp) / ((Date.now() - XPHf.time) / 1000) * 3600);
      XPHf.rate = XPHf.rate.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(XPHf.rate)) XPHf.rate = XPHf.rate.replace(pattern, "$1,$2");
      //console.log('Current xp/hr rate for ' + XPH.Stats[stat] + ': ' + XPH.rate + '/hr -- Test running for ' + ((Date.now() - XPH.time) / 1000) + ' seconds.');
      if (!running) {
        console.log('Stopping');
        XPHf.running = '';
      }
    } else {
      XPHf.exp = skillXP[11];
      XPHf.time = Date.now();
      XPHf.running = 1;
      console.log('Starting xp/hr monitoring for farming.');
    }
}

var updateXPHloopF;
function startXPHF() {
    XPHf(1);
    $("#xphDialogF").toggleClass('d-none');
    $("#xph-rate-f").text('...');
    $("#xph-time-f").text('0');
    $("#xphf-lvl").text("... hrs"); 
    updateXPHloopF = setInterval( () => {
        XPHf(1);
        $("#xph-rate-f").text(XPHf.rate);
        $("#xph-time-f").text(((Date.now() - XPHf.time) / 1000).toFixed(0));
        if($("#xphf-lvl-in").val()>99) $("#xphf-lvl-in").val(99);
        if ((Number($("#xphf-lvl-in").val()) > skillLevel[11]) && Number(XPHf.rate.split(",").join(""))>0) {
            var timeToLvl = ( exp.level_to_xp(Number($("#xphf-lvl-in").val())) - skillXP[11] )/Number(XPHf.rate.split(",").join(""));
            var timeToLvl = timeToLvl.toFixed(1);
            if (timeToLvl<1000) {
                $("#xphf-lvl").text(timeToLvl + " hrs"); 
            } else if (timeToLvl>=1000) {
                timeToLvl = timeToLvl / 24;
                timeToLvl = timeToLvl.toFixed(0);
                $("#xphf-lvl").text(timeToLvl + " days"); 
            }
        } else { 
            timeToLvl = "..."; 
            $("#xphf-lvl").text(timeToLvl + " hrs"); 
        }
    }, 1000);
}

//Then from there, calculate the time until level up in hours or minutes?

//XPH for all combat skills at once
function XPHcombat(running) {
    if (XPHcombat.running) {
      for (i=0; i<8; i++) {
        XPHcombat.skills[i].rate = Math.floor((skillXP[XPHcombat.skills[i].id] - XPHcombat.skills[i].exp) / ((Date.now() - XPHcombat.time) / 1000) * 3600);
        XPHcombat.skills[i].rate = XPHcombat.skills[i].rate.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(XPHcombat.skills[i].rate)) XPHcombat.skills[i].rate = XPHcombat.skills[i].rate.replace(pattern, "$1,$2");
      }
      if (!running) {
          console.log('Stopping');
          XPHcombat.running = '';
      } 
    } else {
        XPHcombat.skills = [{
        name: 'Attack',
        id: 6,
        exp: 0,
        rate: 0
        }, {
        name: 'Strength',
        id: 7,
        exp: 0,
        rate: 0
        }, {
        name: 'Defense',
        id: 8,
        exp: 0,
        rate: 0
        }, {
        name: 'Hitpoints',
        id: 9,
        exp: 0,
        rate: 0
        }, {
        name: 'Ranged',
        id: 12,
        exp: 0,
        rate: 0
        }, {
        name: 'Magic',
        id: 16,
        exp: 0,
        rate: 0
        }, {
        name: 'Slayer',
        id: 18,
        exp: 0,
        rate: 0
        }, {
        name: 'Prayer',
        id: 17,
        exp: 0,
        rate: 0
        }];
        
        for (i=0; i<8; i++) { XPHcombat.skills[i].exp = skillXP[XPHcombat.skills[i].id]; }
        XPHcombat.time = Date.now();
        XPHcombat.running = 1; 
      console.log('Starting xp/hr monitoring for combat skills.');
      console.log('Use XPHcombat(0) or the button to stop.');
    }
}

//update time to lvl sections... convert from seconds to min if above 1000s, min to hr if above 1000h
//Number($("#xphc-lvl-in-0").val())

var updateXPHCloop;
function startXPHC() {
    XPHcombat(1);
    //unhide & initialize tables
    $(".xphc").toggleClass('d-none');
    for (i=0; i<8; i++) { $("#xphc-rate-"+i).text('...'); }
    for (i=0; i<8; i++) { $("#xphc-lvl-"+i).text('... hrs'); }
    $("#xphc-time").text('0');
    if ($("#combat-skill-progress-menu").attr('class').split(' ').includes('d-none')) { toggleCombatSkillMenu(); }
    if (currentPage !== 13) { changePage(13); }
    updateXPHCloop = setInterval( () => {
        XPHcombat(1);
        for (i=0; i<8; i++) { 
            $("#xphc-rate-"+i).text(XPHcombat.skills[i].rate);
            if($("#xphc-lvl-in-"+i).val()>99) $("#xphc-lvl-in-"+i).val(99);
            if ((Number($("#xphc-lvl-in-"+i).val()) > skillLevel[XPHcombat.skills[i].id]) && Number(XPHcombat.skills[i].rate.split(",").join(""))>0) {
                var timeToLvl = ( exp.level_to_xp(Number($("#xphc-lvl-in-"+i).val())) - skillXP[XPHcombat.skills[i].id] )/Number(XPHcombat.skills[i].rate.split(",").join(""));
                var timeToLvl = timeToLvl.toFixed(1);
                if (timeToLvl<1000) {
                    $("#xphc-lvl-"+i).text(timeToLvl + " hrs"); 
                } else if (timeToLvl>=1000) {
                    var timeToLvl = timeToLvl / 24;
                    var timeToLvl = timeToLvl.toFixed(0);
                    $("#xphc-lvl-"+i).text(timeToLvl + " days"); 
                }
            } else { 
                timeToLvl = "..."; 
                $("#xphc-lvl-"+i).text(timeToLvl + " hrs"); 
            }
        }
        $("#xphc-time").text(((Date.now() - XPHcombat.time) / 1000).toFixed(0));
    }, 1000);
}

//:: Scavenging the Thieving calculator from Melvor Idle Helper by RedSparr0w on GitLab: https://github.com/RedSparr0w/Melvor-Idle-Helper
setTimeout( () => { //setup thieving calcs after 10sec, plenty delay for page load... should it be interval or timeout? timeout works fine, no need to repeat.
    thievingCalc();
    $('.js-popover').popover({ // Enable the popovers
        container: 'body',
        animation: false,
        trigger: 'hover focus',
    }); 
}, 10000); //give it a nice long time to load. this one can throw errors.

const addCalcToEl = (el, data = []) => {
    if (!el || !el.appendChild) return;    
    const helper_container = document.createElement('div'); // create our helper elements
    helper_container.className = 'font-size-sm font-w600 text-right text-uppercase text-muted';
    helper_container.style = 'position: absolute; right: 6px; top: 8px;';
    data.forEach((dat, i)=>{
        // Add line break if not first element
        if (i > 0) helper_container.appendChild(document.createElement('br'));
        const el = document.createElement('small');
        el.innerText = dat;
        helper_container.appendChild(el);
    });
    el.classList.add('ribbon', 'ribbon-light', 'ribbon-bookmark', 'ribbon-left'); // Needs these classes for the text to show correctly
    el.appendChild(helper_container);
}

const thievingCalc = () => { //this is freshhh - Thieving Calc & Item Popup! SO Handy!
    const seconds = baseThievingInterval / 1000; // Always takes the same amount of time
    thievingNPC.forEach((npc, id) => {
        const xp_ps = +(npc.xp / seconds).toFixed(1);
        // Get the loottable text
        let popoutText = [`<img src='assets/media/main/coins.svg' height='20px'> ${npc.maxCoins} coins (max)`];
        const totalWeight = npc.lootTable.reduce((a,b)=>a + b[1], 0);
        npc.lootTable.forEach(loot => {
            const item = items[loot[0]];
            popoutText.push(`<img src='${item.media}' height='20px'> ${item.name} - ${((loot[1] / totalWeight) * 100).toFixed(1)}%`);
        });
        const npc_el = document.getElementById(`thieving-npc-${id}`).getElementsByClassName('block-content')[0];
        addCalcToEl(npc_el, [xp_ps + ' XP/s']); // Add the xp/s amounts
        npc_el.classList.add('js-popover'); // Add the popovers for the loot
        const npc_el_data = npc_el.dataset;
        npc_el_data.toggle = 'popover';
        npc_el_data.html = 'true';
        npc_el_data.placement = 'bottom';
        npc_el_data.content = popoutText.join('<br/>');
    });
}
//:: end of import of scraps from Melvor Idle Helper

//extracting the buy compost sections to make the autoReplant function cleaner
function bot_getCompost() {
    if(checkBankForItem(CONSTANTS.item.Compost)) {
        if(bank[getBankId(CONSTANTS.item.Compost)].qty < 5) {
            buyQty = 5 - bank[getBankId(CONSTANTS.item.Compost)].qty
            buyCompost()
        }
    } else {
        buyQty = 5
        buyCompost()
    }
}

//:: importing Melvor Auto Replant 1.6 by Arcanus on Greasyfork: https://greasyfork.org/en/scripts/394855-melvor-auto-replant
// updated with a change from 1.7: gloop!
function autoReplant() {
    for (let i = 0; i < newFarmingAreas.length; i++) {
        for (let j = 0; j < newFarmingAreas[i].patches.length; j++) {
            if(newFarmingAreas[i].patches[j].hasGrown) {
                let lastSeed = newFarmingAreas[i].patches[j].seedID
                let grownID = items[newFarmingAreas[i].patches[j].seedID].grownItemID
                if(checkBankForItem(grownID) || bankMax+baseBankMax > bank.length) {
                    harvestSeed(i,j)
                    if(checkBankForItem(lastSeed)) {
                        if(checkBankForItem(CONSTANTS.item.Weird_Gloop)) {
                            addGloop(i,j)
                        } else if(farmingMastery[items[lastSeed].masteryID].mastery < 50) {
                            if(equippedItems[CONSTANTS.equipmentSlot.Cape] !== CONSTANTS.item.Farming_Skillcape) { //adding&tweaking script modification by rebelEpik
                                if(katoroneOn){
									if((bot_reserveGold > 0) && ((gp - (5*items[159].buysFor)) > bot_reserveGold)){
										bot_getCompost();
									} else if(bot_reserveGold==0) {
                                        bot_getCompost();
                                    }
								}else{
									bot_getCompost();
								}
                            }
                            addCompost(i,j,5)
                        }
                        selectedPatch = [i,j]
                        selectedSeed = lastSeed
                        plantSeed()
                    }
                    if (equippedFood.find(food => food.itemID === grownID) && checkBankForItem(grownID))
                        equipFood(getBankId(grownID),grownID,bank[getBankId(grownID)].qty)
                }
            }
        }
    }
}
//var autoReplantLoop = setInterval( () => { autoReplant() }, 5000);
//:: end of import of Melvor Auto Replant. Beautiful script.
//adding togbtn functions, togbtn is injected in setupSEMI()
var autoReplanting = false;
function toggleAutoReplant() {
    autoReplanting = !autoReplanting;
    $("#auto-replant-button-status").text( (autoReplanting) ? 'Enabled' : 'Disabled');
    (autoReplanting) ? autoReplantLoop = setInterval( () => { autoReplant() }, 5000) : clearInterval(autoReplantLoop);
}

//adding destroy crop functionality by Jarx in discord, modified by me based on game's source
function destroyCrops() {
    var confirmDestroyCrops = prompt("Wait. Are you sure you want to continue? Type yes in the prompt to destroy crops.", "wait");
    if (confirmDestroyCrops === "yes") {
        for (let i = 0; i < newFarmingAreas[currentFarmingArea].patches.length; i++) {
            if (newFarmingAreas[currentFarmingArea].patches[i].seedID > 0) {
                removeSeed(newFarmingAreas[currentFarmingArea].id, i);
            }
        }
        customNotify('assets/media/skills/farming/farming.svg', 'SEMI destroyed all of your '+newFarmingAreas[currentFarmingArea].areaName+'.', 4000);
    }
}

//adding button to the farming page to destroy crops
$('#farming-container').append($('<button id="destroyCropsBtn" class="btn btn-success m-2" onclick="destroyCrops();">[SEMI] Destroy All Crops in This Area</button>'));

//:: importing Melvor Percent Accuracy 1.1 by (Not) Arcanus on Greasyfork: https://greasyfork.org/en/scripts/394856-melvor-percent-accuracy
this.setAccuracyPercent = setInterval(() =>{
    if(isInCombat) {
        let playerDodge = combatData.enemy.attackType === CONSTANTS.attackType.Melee ? maximumDefenceRoll : combatData.enemy.attackType === CONSTANTS.attackType.Ranged ? maximumRangedDefenceRoll : maximumMagicDefenceRoll
        let enemyDodge = attackStyle < 3 ? combatData.enemy.maximumDefenceRoll : attackStyle < 6 ? combatData.enemy.maximumRangedDefenceRoll : combatData.enemy.maximumMagicDefenceRoll
        let playerAccuracy = maximumAttackRoll < enemyDodge ? (0.5 * maximumAttackRoll / enemyDodge) * 100 : (1 - 0.5 * enemyDodge / maximumAttackRoll) * 100
        let enemyAccuracy = combatData.enemy.maximumAttackRoll < playerDodge ? (0.5 * combatData.enemy.maximumAttackRoll / playerDodge) * 100 : (1 - 0.5 * playerDodge / combatData.enemy.maximumAttackRoll) * 100
        $("#combat-player-attack-bonus").text(Math.floor(playerAccuracy)+ "%")
        $("#combat-enemy-attack-bonus").text(Math.floor(enemyAccuracy)+ "%")
    }
},1000)
//:: end of %acc

//:: simply rewritten autoBonfire by Dream below
function autoBonfire() { if ( $.trim($('#skill-fm-bonfire-status').text()) == 'Inactive') lightBonfire(); } //really
//:: end autoBonfire, adding Auto-Bonfire tog, * button included in setupSEMI() *
var autoBonOn = false;
var bonLoop;
function toggleAutoBonfire() {
    autoBonOn = !autoBonOn;
    $("#auto-bonfire-button-status").text( (autoBonOn) ? 'Enabled' : 'Disabled');
    $("#auto-bonfire-button-status").css('color', (autoBonOn) ? 'red' : '');
    if (autoBonOn) { 
        bonLoop = setInterval( () => { autoBonfire(); }, 500);
        changePage(8);
        customNotify('assets/media/skills/firemaking/bonfire_active.svg','AutoBonfire initiated. Select your Logs to begin.', 5000);
    } else { clearInterval(bonLoop); }
}

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
var mineArray = ([dragonite, runite, addy, mithril, gold, silver, coal, iron, tin, copper, runeEssence]);
//AutoSellGems
var targetStack = 100; //once it hits this amount, sell all of them.
var gemIdList = [128, 129, 130, 131, 132]; //ruby boobies & such

//General Functions
// old, improved by rebelEpik below
function getBankQty(id) {
    for (let i = 0; i < bank.length; i++) {
      if (bank[i].id === id) {
        return bank[i].qty;
      }
    }
    return 0;
}

/* more efficient by rebelEpik, however seems to break AutoSellGems
function getBankQty(id) {
    var t = bank.find(x=> x.id === id);
    if(t > 0){
        return t;
    }else{
        return 0;
    }
}
*/

//AutoSellGems: Will sell gems when they reach the stack amount specified
var autoSellGemsEnabled = false;
var updateAutoSellGemsButtonText = function () {
	$('#auto-sellgems-button-status').text((autoSellGemsEnabled) ? 'Enabled' : 'Disabled');
}
var toggleAutoSellGems = function () {
	autoSellGemsEnabled = !autoSellGemsEnabled;
	updateAutoSellGemsButtonText();
	setTimeout(function() {
		if (!autoSellGemsEnabled) {
			console.log("Auto Sell Gems Disabled!");
		}
	}, 100);
}

var autoSellGems = function() {
	if (!autoSellGemsEnabled) {
		return;
	}
	for(const gemId of gemIdList) {
		const curQty = getBankQty(gemId);
		//console.log('GEM ID '+gemId+' you have '+curQty);
		if(curQty > targetStack){
			sellItem(getBankId(gemId), targetStack);
            customNotify('assets/media/main/coins.svg','Auto Sell Gems just sold '+targetStack+' '+ items[gemId].name +'.', 5000);
		}
	}
}
var autoSellGemsTimer = setInterval(function(){autoSellGems();}, 5000);

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

var AMselection = 9;
//autoMine Selector: GUI for choosing bars to mine for.
function AMselect(n) {
    if (n == 0) { 
        mineArray = [0,1]; //tin & copper = bronze
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
    if (n == 1) {
        mineArray = [2]; //iron
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
    if (n == 2) {
        mineArray = [2,3]; //iron & coal = steel
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
    if (n == 3) {
        mineArray = [4]; //silver
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
    if (n == 4) {
        mineArray = [5]; //gold
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
    if (n == 5) { 
        mineArray = [6,3]; //mithril + coal = mith bar
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
    if (n == 6) {
        mineArray = [7,3]; //adamantite + coal = addy bar
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
    if (n == 7) {
        mineArray = [8,3]; //runite + coal = rune bar
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
    if (n == 8) {
        mineArray = [9,8,3]; //dragonite + runite + coal = dragon bar (snack legendarily ®)
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
    if (n == 9) { 
        mineArray = ([dragonite, runite, addy, mithril, gold, silver, coal, iron, tin, copper, runeEssence]);
        $("#AMbtn"+AMselection).attr("class", "btn btn-outline-primary"); //de-highlight previous
        AMselection = n;
        $("#AMbtn"+AMselection).attr("class", "btn btn-primary"); //highlight current selection
    }
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
function toggleAutoMine() {
    autoMineEnabled = !autoMineEnabled;
    updateAutoMineButtonText();
    if (!autoMineEnabled) {
        mineRock(currentRock, true);
        console.log("Auto Mine Disabled!");
        clearInterval(autoMineLoop);
    }else{
        changePage(10);
        if (!isMining) mineRock(0);
        autoMineLoop = setInterval(function(){autoMine(mineArray);}, 100);
        /* if(!glovesTracker[CONSTANTS.shop.gloves.Mining].isActive){
            //equipItem(34, 399);
        }
        */
    }
}
function autoMine(rocks) {
	if (!autoMineEnabled) { return; }
    var swingRatio = Number(document.getElementById('mining-rock-progress-'+currentRock).style.width.split('%')[0]);
	for(const rock of rocks) {
		if(!rockData[rock].depleted && miningData[rock].level <= skillLevel[CONSTANTS.skill.Mining]) { //added extra condition to make universal
			if(currentRock !== rock && (swingRatio<10) ) {
				mineRock(rock);
			}
			return;
		}
	}
}

//Super Control Panel Builder (now more semi buttons or whatever)
setTimeout(function() { setupSEMI(); },10000); //following 10s idea by Katorone to try and get override buts back
//:: end of MSCP

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
var cookInterval;
var autoCook = false;
function toggleAutoCook() {
    autoCook = !autoCook;
    $("#auto-cook-status").text( (autoCook) ? 'Enabled' : 'Disabled');
    if (autoCook) {
        cookInterval = setInterval(autoCookAll, 1000) 
        changePage(9);
    } else { 
        clearInterval(cookInterval); 
        if (isCooking) startCooking(0, false);
    }
}
//::end autoCook

/* broken by melvor v0.14
//:: importing AutoFish by BreakIt, Jarx and me
var chaseCrabs = false;

function autoFish() {
    let fishMax = []; //set to empty each time autoFish iterates to recalculate
    let fishAvg = [];
    let fishZone = 0;
    var maxXP = 0;
    let fishXPs = [];
    
    if (herbloreBonuses[7].itemID > 0) { //if you're using potions on the fishing page, page 7, automatically do max mode & turn off chase chests
    //if (maxMode) {
        for (let i = 0; i < fishingArea.length; i++) { //for each available fishing area
            if (skillLevel[CONSTANTS.skill.Fishing] > fishingArea[i].level) { //if you can fish it
                for (n=0; n<fishingArea[i].currentFish.length; n++) {
                    fishXPs.push(fishData[fishingArea[i].currentFish[n]].xp);
                }
                maxXP = Math.max(...fishXPs);
                
                if (chaseCrabs && Math.max(...fishingArea[i].currentFish) == 7) { //7 is crab, will seek crabs if max in area with potions
                    console.log("You've Got Crabs!"); //do we really need the console spam? eh whatevs
                    maxXP = 8000; //second in priority to chests
                }
                
                fishMax.push(maxXP); //add that max to the array of fish areas to be max'd again
                fishXPs = []; //reset the fishXP array
            }
        }
    fishZone = fishMax.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0); //some maths by BreakIt, calcs max of array and outputs the array position.
    } else { 
        $("[id^=fishing-area-fish-]").each(function() {
            var totalexp = 0;
            $(this).children("img").each(function() {
                totalexp = totalexp + parseInt($(this).attr("data-original-title").split("+")[1].split(" ")[0]);
                
                if (chaseCrabs && parseInt($(this).attr("data-original-title").split("+")[1].split(" ")[0]) == "120") { //120xp is crab
                    //console.log("You've Got Crabs!"); //do we really need the console spam? eh whatevs
                    totalexp = 8000; //second in priority to chests
                }
                
                if (parseInt($(this).attr("data-original-title").split("+")[1].split(" ")[0]) == "1") { //removed chase chest toggler
                    console.log("Found a Chest!");
                    //console.log($(this)); //makes console spam very annoying.
                    totalexp = 9000;
                }
            });
            var toPush = totalexp / $(this).children("img").length;
            if (toPush == 9000) { toPush = 0; }
            fishAvg.push(toPush);
        });
        fishZone = fishAvg.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    }
    
    let fishActiveZone = 0;
    $("#fishing-container").find("a").each(function() { //sets the zone if max changed.
        if ($(this).hasClass("bg-fishing")) { //if the containers are indeed fishing areas
            if (fishActiveZone != fishZone) { //and if the zone is different from where the max fish is at
                console.log('Max: '+fishMax+' Avg: '+fishAvg);
                console.log("Switching from " + fishActiveZone + " to " + fishZone);
                startFishing(0,false);
                startFishing(fishZone,false);
                //return; //this may be necessary but it could have also been the userscript running at same time
            }
        }
    fishActiveZone++;
    });
}
var fishInterval;
var autoFishing = false;
function toggleAutoFish() {
    autoFishing = !autoFishing;
    $("#auto-fish-status").text( (autoFishing) ? 'Enabled' : 'Disabled' );
    if (autoFishing) {
        changePage(7);
        if (!currentlyFishing) startFishing(0,false);
        //customNotify('assets/media/shop/fishing_dragon.svg', 'AutoFish is enabled.', 5000);
        fishInterval = setInterval( () => { autoFish(); }, 1000); //loop!
    } else { 
        clearInterval(fishInterval); 
        if (currentlyFishingArea !== null) { startFishing(currentlyFishingArea,false); }
    }
}

function toggleAutoFishCrabs() {
    chaseCrabs = !chaseCrabs;
    $("#chase-crabs-status").text( (chaseCrabs) ? 'Enabled' : 'Disabled' );
}
//:: end autoFish
*/

//adding katorone automation settings menu to setupSEMI()

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

/* ~~~~~-----~~~~~-----~~~~~Notes~~~~~-----~~~~~-----~~~~~
TODO

Major script cleanup: moving variables to a SEMI variable container, combining many of the scripts, etc.

Jarx additions: 
    automatically upgrade fishing rod (AutoFish)
    pickaxe (AutoMine) 
    woodcutting axe (background script, maybe injected in Percent Accuracy?)
    
AutoSlayer skip-monster menu/setting
    
AutoLoot AutoSell GUI Based on Completion Log - all ? are looted, all known are sold by default, select of the remaining which you want to keep.
    
AutoReplant: choose highest available seeds for replanting if you run out of seeds

More settings for autocombat
    Auto only-loot bones/etc... select which items to omit? or certain monsters don't loot?
    Auto-prayer.

Fishing: select which fish to auto-sell

time until done calculators? more items til done calculators? there already be utils/calcs out there. Link to them in info?
    const craftTime = 2; //s
    var numItemsCraftable = math;
    output.text(numItemsCraftable*craftTime+" sec til done");
        UI notes for xp/item calc: sliders. Move a slider to set how many levels you want to move up, then once item is selected, calculate and display XP, gp, whatever.
    craftInterval: game variable for ms that it takes to use crafting to make one item. Halved with skill cape. Could be useful for item/xp time calc. Thief calc does this.

    add custom settings in localstorage?... keeps variables like autoLoot, autoEat, autoEquipZone, etc. localStorage.SEMI.setItem('test', test)
        idk i like how these scripts kind of reset after reload. so, won't start up with autobon enabled...but that's not really an option
        so much as it is doing some dumb stuff when loaded. so, maybe the AC/slayer option toggles would be fine.

-----
    
FUNKY IDEAS
sound plays when idle is done and no task queued? repeats every minute or so
task queueing
sounds in combat, alert sound for low health

*/

    /* we don't need this after all. maybe useful for something. moving to notes.
    let pages = [{
        name: 'woodcutting',
        skillID: 0
    }, {
        name: 'shop',
        upyourbutt: 'andstuffit'
    }, {
        name: 'bank'
    }, {
        name: 'settings'
    }, {
        name: 'changelog'
    }, {
        name: 'milestones'
    }, {
        name: 'statistics'
    }, {
        name: 'fishing',
        skillID: 1
    }, {
        name: 'firemaking',
        skillID: 2
    }, {
        name: 'cooking',
        skillID: 3
    }, {
        name: 'mining',
        skillID: 4
    }, {
        name: 'smithing',
        skillID: 5
    }, {
        name: 'mastery'
    }, {
        name: 'combat',
        skillID: [6,7,8,9,12,16,18,17]
    }, {
        name: 'thieving',
        skillID: 10
    }, {
        name: 'farming',
        skillID: 11
    }, {
        name: 'fletching',
        skillID: 13
    }, {
        name: 'crafting',
        skillID: 14
    }, {
        name: 'runecrafting',
        skillID: 15
    }, {
        name: 'herblore',
        skillID: 19
    }];
    */
