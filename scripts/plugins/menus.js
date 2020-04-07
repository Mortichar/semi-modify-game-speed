//SEMIv0.3.3 by AW.

//AldousWatts code section 
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
    
    <!-- april fools!
    <li class="nav-main-item" title="AUTOMATICALLY SCRATCH! OMG">
        <a class="nav-main-link nav-compact" href="javascript:toggleAutoArch();" id="autoArchNavBut">
            <img class="nav-img" src="assets/media/skills/archaeology/archaeology.svg" id="autoArchImg">
            <span class="nav-main-link-name">AuToArChAeOloGy</span>
        <small id="autoArchStatus">Disabled</small></a>
    </li>
    
    <br>
    -->
    
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
    
    //initiate certain button texts
    updateAutoSellGemsButtonText();    
    updateAutoMineButtonText();    
    updateAutoSlayerButtonText();
    
    //adding button to the farming page to destroy crops
    $('#farming-container').append($('<button id="destroyCropsBtn" class="btn btn-success m-2" onclick="destroyCrops();">[SEMI] Destroy All Crops in This Area</button>'));

    //SEMI menu hide-eye
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
                    <h3 class="block-title">Scripting Engine for Melvor Idle v0.3.3</h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                            <i class="fa fa-fw fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="block-content font-size-sm">
                    <p id="semi-info-text"></p>
                    <h2 style="color: white;">SEMI v0.3.3 by Aldous Watts</h2>
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

//Super Control Panel Builder (now more semi buttons or whatever)
setTimeout(function() { setupSEMI(); },10000); //following 10s idea by Katorone to try and get override buts back
//:: end of MSCP

