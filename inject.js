//SEMIv0.1.1 by AW.

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
            <small id="auto-replant-button-status">Enabled</small>
        </a>
    </li>
    
    <li class="nav-main-item" title="AutoBonfire will keep a bonfire lit when you have a type of wood selected in Firemaking. The author suggests having an abundance of wood if using this!">
        <a id="auto-bonfire-button" class="nav-main-link" href="javascript:toggleAutoBonfire();">
            <img class="nav-img" src="assets/media/skills/firemaking/bonfire_active.svg">
            <span class="nav-main-link-name">AutoBonfire</span>
            <small id="auto-bonfire-button-status">Disabled</small>
        </a>
    </li>
    
    <li class="nav-main-item" title="AutoCook by Unicue will automatically cycle through your fish and cook them all in order.">
        <a id="auto-cook-button" class="nav-main-link" href="javascript:toggleAutoCook();">
            <img class="nav-img" src="assets/media/skills/cooking/cooking.svg">
            <span class="nav-main-link-name">AutoCook</span>
            <small id="auto-cook-status">Disabled</small>
        </a>
    </li>
    
    <li class="nav-main-item" title="AutoMine will mine highest XP ore first automatically.">
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
    
    <li class="nav-main-heading">
        Auto Fishing <a href="javascript:toggleMoreMenus(3);"><i style="color: gold !important;" class="far fa-eye text-muted ml-1" id="moreEye3"></i></a>
    </li>
    
    <li class="nav-main-item" title="AutoFish by BreakIt, Aldous Watts, and Jarx will automatically fish for you, either fishing the area with the highest average XP fish, or chasing either chests or highest XP fish in general for maximum efficiency of fishing with potions.">
        <a id="auto-fish-button" class="nav-main-link" href="javascript:toggleAutoFish();">
            <img class="nav-img" src="assets/media/shop/fishing_dragon.svg">
            <span class="nav-main-link-name">AutoFish</span>
            <small id="auto-fish-status">Disabled</small>
        </a>
    </li>
    
    <li class="nav-main-item" title="AutoFish by default chases the highest XP fish. This is best for fishing with the fishing potion you can make in herblore. If you'd rather fish in the area with the highest AVERAGE fish XP, then you should turn this option off.">
        <a id="autoFishMaxNavBut" class="nav-main-link nav-compact" href="javascript:toggleAutoFishMax();">
            <img class="nav-img" src="assets/media/skills/fishing/whale.svg" id="autoFishMaxImg">
            <span class="nav-main-link-name">AF Max Mode</span>
        <small id="max-mode-status">Enabled</small></a>
    </li>
    
    <li class="nav-main-item" title="Chase those chests! This option will prioritize fishing in areas with chests in them.">
        <a class="nav-main-link nav-compact" href="javascript:toggleAutoFishChest();" id="autoFishChestNavBut">
            <img class="nav-img" src="assets/media/main/bank_header.svg" id="autoFishChestImg">
            <span class="nav-main-link-name">AF Chase Chests</span>
        <small id="chase-chest-status">Enabled</small></a>
    </li>
    
    <li class="nav-main-heading">
        Auto Combat <a href="javascript:toggleMoreMenus(4);"><i style="color: gold !important;" class="far fa-eye text-muted ml-1" id="moreEye4"></i></a>
    </li>
    
    <li class="nav-main-item" title="AutoSlayer, based on Melvor Auto Slayer by Bubbalova, automatically seeks slayer tasks and sets out to kill that enemy. If you are assigned a monster in a zone that requires special equipment, this version of AutoSlayer will simply reroll your assignment and continue on by default.">
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

    <li class="nav-main-item" title="AutoCombat will, by default, eat your food for you if your HP is less than what your food would heal. This option turns that off, if you'd rather rely on the default in-game Auto Eat, or just don't want it. Be warned that even the tier III in-game Auto Eat will leave you vulnerable to one-hits by very powerful mobs when at just above 40% HP.">
        <a class="nav-main-link nav-compact" href="javascript:toggleAutoEat();" id="autoEatNavBut">
            <img class="nav-img" src="assets/media/shop/autoeat.svg" id="autoEatImg">
            <span class="nav-main-link-name">AC Auto Eat</span>
        <small id="autoEatStatus">Enabled</small></a>
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
    
    <li class="nav-main-heading">Katorone Settings</li>
    
    <li class="nav-main-item">
        <a class="nav-main-link nav-compact" href="javascript:semiSetMenu();" id="semiSetsNavBut">
            <img class="nav-img" src="`+$("#iconImg")[0].src+`">
            <span class="nav-main-link-name">Automation Menu</span>
        </a>
    </li>
    
    <hr>
    
    <li class="nav-main-item">
        <a class="nav-main-link nav-compact" href="javascript:semiInfo();" id="semiInfoNavBut">
            <img class="nav-img" src="`+$("#iconImg")[0].src+`">
            <span class="nav-main-link-name">Show SEMI Info</span>
        </a>
    </li>`));
    
    for (i=0; i < $("#semiHeading").nextAll().length; i++) {
        $("#semiHeading").nextAll()[i].id = 'semi-nav-'+i;
    } //sets up the nav ids to hide the menu.
    
    for (i=0; i<rockData.length; i++) {
    $("#mining-ore-"+i).prepend($(`
        <button id="autoMine`+i+`" class="btn btn-outline-primary" style="width: 100%" type="button" onclick="autoMineSet(`+i+`);">
            AM Priority Override
        </button>`));
    } //sets up the AM overrides
    
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
                            Warning: the settings <u>are not saved</u> and they will not carry over if the game is refreshed.
                            <div class="row">
                                <div class="col-sm-12">
                                
                                    <div style="border: 2px solid gold; border-radius: 5px; padding: 10px;" class="custom-control custom-switch mb-1">
                                        <input type="checkbox" class="custom-control-input" id="auto-x-enabled" name="auto-x-enabled" onchange="katoroneOn = this.checked" ${katoroneOn ? "checked" : ""}>
                                        <label class="custom-control-label" for="auto-x-enabled"><b>Toggle All Katorone Automation</b></label>
                                    </div>
                                    
                                    <div class="custom-control custom-switch mb-1">
                                        <input type="checkbox" class="custom-control-input" id="auto-y-enabled" name="auto-y-enabled" onchange="testVar2 = this.checked" ${testVar2 ? "checked" : ""}>
                                        <label class="custom-control-label" for="auto-y-enabled">Auto Y</label>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div id="number-settings-1" class="form-group">
                                <label for="example-text-input">Amount of GP to keep in the Bank:</label>
                                <input type="text" class="form-control" id="k-set-1" placeholder="5000000">
                            </div>
                            
                        </div>
                        
                        <div class="block-content block-content-full text-right border-top">
                            <button type="button" id="semiInfoModalBtn" class="btn btn-sm btn-primary" data-dismiss="modal" onclick=""><i class="fa fa-check mr-1"></i>All done. (Settings auto-save)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`));
    
    //document.getElementById('k-set-1').value; //gets the current value, as string, of the text inside the form field. 
    //if (input sterile) { variable = doc.el('set').val } //put this in loop
    
    updateAutoSellGemsButtonText();    
    updateAutoMineButtonText();    
    updateAutoSlayerButtonText();
    
    //if all goes well, yay, it's loaded
    if(navigator.userAgent.match("Chrome")){
        customNotify('assets/media/monsters/dragon_black.svg','Scripting Engine for Melvor Idle is now loaded and running! Check the bottom of the sidebar.',22000);
    } else if(navigator.userAgent.match("Firefox")) { 
        customNotify('','Scripting Engine for Melvor Idle is now loaded and running! Check the bottom of the sidebar.',22000);
    }
} //End of SEMI menu injection
var katoroneOn = false; //called by radio button. works instantly.
var testVar2 = true;

//toggle SEMI sidebar menu
var semiMenu = true;

$("#semiHeading").append($('<a href="javascript:toggleSemiMenu();"><i style="color: gold !important;" class="far fa-eye text-muted ml-1" id="skill-menu-icon2"></i></a>'));
function toggleSemiMenu() {
    semiMenu = !semiMenu;
    if (semiMenu) { 
        for (i=0; i < $("[id^=semi-nav]").length; i++) { $("#semi-nav-" + i).removeClass("d-none"); }
        if (!moreMenus2) {
            for (i=0; i<5; i++) { $(".nav-main-heading:contains('Auto Skills')").nextAll().slice(0,5).toggleClass("d-none"); }
        }
        if (!moreMenus3) {
            for (i=0; i<3; i++) { $(".nav-main-heading:contains('Auto Fishing')").nextAll().slice(0,3).toggleClass("d-none"); }
        }
        if (!moreMenus4) {
            for (i=0; i<5; i++) { $(".nav-main-heading:contains('Auto Combat')").nextAll().slice(0,5).toggleClass("d-none"); }
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
    if (x==0) {
        moreMenus0 = !moreMenus0;
        for (i=0; i < $("[id^=other-nav]").length; i++) { $("#other-nav-" + i).toggleClass("d-none"); } //automated id application, all appended will be tagged for invisibilitization
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus0) ? '' : '-slash') + " text-muted ml-1");
    } else if (x==1) {
        moreMenus1 = !moreMenus1;
        for (i=0; i < $("[id^=socials-nav]").length; i++) { $("#socials-nav-" + i).toggleClass("d-none"); } //automated id application, all appended will be tagged for invisibilitization
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus1) ? '' : '-slash') + " text-muted ml-1");
    } else if (x==2) { //auto skills 
        moreMenus2 = !moreMenus2;
        $(".nav-main-heading:contains('Auto Skills')").nextAll().slice(0,5).toggleClass("d-none");
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus2) ? '' : '-slash') + " text-muted ml-1");
    } else if (x==3) { //auto fishing
        moreMenus3 = !moreMenus3;
        $(".nav-main-heading:contains('Auto Fishing')").nextAll().slice(0,3).toggleClass("d-none");
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus3) ? '' : '-slash') + " text-muted ml-1");
    } else if (x==4) { //auto combat
        moreMenus4 = !moreMenus4;
        $(".nav-main-heading:contains('Auto Combat')").nextAll().slice(0,5).toggleClass("d-none");
        $("#moreEye"+x).attr("class", "far fa-eye" + ((moreMenus4) ? '' : '-slash') + " text-muted ml-1");
    }
}

//AutoCook (sorta): insert always-unlocked cooking button.
$("#cook-button-qty-all").parent().append($('<button type="button" id="alwayscookallbut" class="btn btn-warning mb-1" onclick="startCooking(0, false)" style="width: 100%; border: 2px solid red;">Cook All (Permanently Unlocked by SEMI)</button>'));

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
                    <h3 class="block-title">Scripting Engine for Melvor Idle v0.1.1</h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                            <i class="fa fa-fw fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="block-content font-size-sm">
                    <p id="semi-info-text"></p>
                    
                    <h2 style="color: white;">SEMI v0.1.1 by Aldous Watts</h2>
                    Various Quality of Life improvements, scripts for automation, and UI tweaks for Melvor.
                    <br><br>
                    Don't forget these features of SEMI that aren't in the sidebar:
                    <ul>
                        <li>Always-unlocked Cook All button in the Cooking page</li>
                        <li>Thieving XP calculators and loot popups in the Thieving page</li>
                        <li>Number of potions until level-up calculator button in the Herblore page</li>
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
                        <li><a href="https://pastebin.com/wq641Nhx" target="_blank">XPH by Breakit.</a> For now, console only: Ctrl+Shift+K for console, type XPH() for the tool.</li>
                        <li>Thieving Calculator from <a href="https://github.com/RedSparr0w/Melvor-Idle-Helper" target="_blank">Melvor Idle Helper by RedSparr0w</a></li>
                        <li><a href="https://discordapp.com/channels/625838709203271680/664637399028072470/681397160465661992" target="_blank">AutoCook by Unicue</a></li>
                        <li><a href="https://pastebin.com/WKD9R6WY" target="_blank" title="BreakIt's original source">AutoFish by BreakIt, Jarx, and me</a></li>
                    </ul>
                    <br>
                    I'm definitely eyeballing Katorone's Melvor Idle automation script for extra functionality.
                    <br><br>
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

//***************************AUTO COMBAT***********************************
    var autocombat;
    var autocombatloop;
    var hp;
    var hpfoox;
    var hpmax;
    var autoEat = true;
    var autoLoot = true;
    
//AutoCombat Main Function
function autocombatfunc() {
    hp = combatData.player.hitpoints; //this number is already multiplied
    hpfood = numberMultiplier * items[equippedFood[currentCombatFood].itemID].healsFor; //numberMultiplier = 10, adjusts hp math
    hpmax = skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier; //same here
    if ( (hp < (hpmax-hpfood) || hp<50) && autoEat ) eatFood(); //autoEat toggle here now
    if (equippedFood[currentCombatFood].qty < 1 && autoEat) { 
    	terminateAutoCombat('food.');
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
    autoEat = !autoEat;
    $("#autoEatStatus").text((autoEat) ? 'Enabled' : 'Disabled');
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
        return; //aw: one line
    }
    //Slayer areas that require items
    var strangeCave = 10;
    var highLands = 11;

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
                    if(typeof(items[bank[i].id].name) == "Slayer Skillcape") {
                        equipItem(i, CONSTANTS.item.Slayer_Skillcape, 1, selectedEquipmentSet)
                        found = true
                        break;
                    }
                }
            }
        }
        else if( (selectedCombatArea == strangeCave || selectedCombatArea == highLands) && !autoEquipZone ) newSlayerTask(); //aw: ranged & autoslayer: no good. just rerolling when combat area is the cave or highlands. but it costs
        //Equips Mirror Shield for area
        else if(selectedCombatArea == strangeCave && autoEquipZone) {
            if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] != CONSTANTS.item.Mirror_Shield) {
                originalShield = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield];
                if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] == 0) {
                    newSlayerTask();
                    notifyPlayer(CONSTANTS.skill.Slayer, "Skipping task due to 2-handed weapon!");
                } else {
                    for (let i = 0; i < bank.length; i++) {
                        if(typeof(items[bank[i].id].name) == "Mirror Shield") {
                            equipItem(i, CONSTANTS.item.Mirror_Shield, 1, selectedEquipmentSet)
                            found = true
                            break;
                        }
                    }
                }
            }
        }
        //Equips Magical Ring for area
        else if(selectedCombatArea == highLands && autoEquipZone) {
            if(equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring] != CONSTANTS.item.Magical_Ring) {
                originalRing = equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring];
                for (let i = 0; i < bank.length; i++) {
                    if(typeof(items[bank[i].id].name) == "Magical Ring") {
                        equipItem(i, CONSTANTS.item.Magical_Ring, 1, selectedEquipmentSet)
                        found = true
                        break;
                    }
                }
            }
        }
        else if( (selectedCombatArea != strangeCave || selectedCombatArea != highLands) && autoEquipZone){
            
            slayerLockedItem = null; //not sure what this does, added in Auto Slayer 1.2.1
            
            //Equips original shield when not in Area
            if ( (equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] == CONSTANTS.item.Mirror_Shield && originalShield != CONSTANTS.item.Mirror_Shield && originalShield != undefined) && autoEquipZone){
                for (let i = 0; i < bank.length; i++) {
                    if(typeof(items[bank[i].id].name) == items[originalShield].name) {
                        equipItem(i, originalShield, 1, selectedEquipmentSet)
                        found = true
                        break
                    }
                }
            }
            //Equips original ring when not in Area
            if ( (equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring] == CONSTANTS.item.Magical_Ring && originalRing != CONSTANTS.item.Magical_Ring && originalRing != undefined) && autoEquipZone){
                for (let i = 0; i < bank.length; i++) {
                    if(typeof(items[bank[i].id].name) == items[originalRing].name) {
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
     console.log(XPH.Stats.toSource());
     console.log('Example to Start/Check Strength XPH(1,7)');
     console.log('Example to Stop Strength XPH(0,7)');
     return
  }
  else {
    if (XPH.running) {
      XPH.rate = Math.floor((skillXP[stat] - XPH.exp) / ((Date.now() - XPH.time) / 1000) * 3600);
      XPH.rate = XPH.rate.toString();
      
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(XPH.rate)) XPH.rate = XPH.rate.replace(pattern, "$1,$2");
      console.log('Current xp/hr rate for ' + XPH.Stats[stat] + ': ' + XPH.rate + '/hr -- Test running for ' + ((Date.now() - XPH.time) / 1000) + ' seconds.');
      if (!running) {
        console.log('Stopping');
        XPH.running = '';
      }
    }
    else {
      XPH.exp = skillXP[stat];
      XPH.time = Date.now();
      XPH.running = 1;
 
      console.log('Starting xp/hr monitoring for: ' + XPH.Stats[stat]);
      console.log('Use XPH(1,' + stat + ') to view current exp/hr.');
      console.log('Use XPH(0,' + stat + ') to stop.');
    }
  }
}
//::what a great utility! to get current page: XPH(1,currentPage);... won't work for combat

/* well, i don't like the xph function in this, but this is a good way to create a fresh, working dropdown addon button to the left of the potions header button.
//add xhp... XPH dammit! not x hitpoints... xp hour. feel like it should be xpph...
$("#page-header-potions-dropdown").parent().before($(`
<div class="dropdown d-inline-block ml-2">
    <button type="button" class="btn btn-sm btn-dual" id="page-header-xph-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        XPH
    </button>
    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 border-0 font-size-sm" id="header-xph-dropdown" aria-labelledby="page-header-xph-dropdown" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-262px, 33px, 0px);">
        <div class="p-2 bg-primary text-center">
            <h5 class="dropdown-header text-uppercase">
                <a class="text-white" href="javascript:viewItemStats(0,0,true);">Use the XPH Script (Experience points per hour)</a>
            </h5>
        </div>
        <div class="block-content block-content-full text-center">
            <button id="xphBtn" class="btn btn-sm btn-dual" onclick="xphBtn()">Start</button>
        </div>
    </div>
</div>`));

function xphBtn() { 
    XPH(1,currentPage); //don't like this actually. sigh.
}
*/

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

//:: importing Melvor Auto Replant 1.6 by Arcanus on Greasyfork: https://greasyfork.org/en/scripts/394855-melvor-auto-replant
function autoReplant() {
    for (let i = 0; i < newFarmingAreas.length; i++) {
        for (let j = 0; j < newFarmingAreas[i].patches.length; j++) {
            if(newFarmingAreas[i].patches[j].hasGrown) {
                let lastSeed = newFarmingAreas[i].patches[j].seedID
                let grownID = items[newFarmingAreas[i].patches[j].seedID].grownItemID
                if(checkBankForItem(grownID) || bankMax+baseBankMax > bank.length) {
                    harvestSeed(i,j)
                    if(checkBankForItem(lastSeed)) {
                        if(farmingMastery[items[lastSeed].masteryID].mastery < 50) {
                            if(equippedItems[CONSTANTS.equipmentSlot.Cape] !== CONSTANTS.item.Farming_Skillcape) {
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
var autoReplantLoop = setInterval( () => { autoReplant() }, 5000);
//:: end of import of Melvor Auto Replant. Beautiful script.
//adding togbtn functions, togbtn is injected in setupSEMI()
var autoReplanting = true;
function toggleAutoReplant() {
    autoReplanting = !autoReplanting;
    $("#auto-replant-button-status").text( (autoReplanting) ? 'Enabled' : 'Disabled');
    (autoReplanting) ? autoReplantLoop = setInterval( () => { autoReplant() }, 5000) : clearInterval(autoReplantLoop);
}

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
var mineArray = ([dragonite, runite, addy, mithril, gold, silver, coal, iron, tin, copper, runeEssence]); //add ui...?
//AutoSellGems
var targetStack = 100; //once it hits this amount, sell all of them.
var gemIdList = [128, 129, 130, 131, 132]; //ruby boobies & such

//General Functions
function getBankQty(id) {
    for (let i = 0; i < bank.length; i++) {
      if (bank[i].id === id) {
        return bank[i].qty;
      }
    }
    return 0;
}

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
        if (overrideRock !== null) { 
            mineArray.shift(); 
            $("#autoMine"+overrideRock).attr("class", "btn btn-outline-primary"); //de-highlight previous
        }
        mineArray.unshift(x);
        $("#autoMine"+x).attr("class", "btn btn-primary"); //highlight
        overrideRock = x;
        autoMineOverride = true;
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
        mineRock(0);
        autoMineLoop = setInterval(function(){autoMine(mineArray);}, 100);
        /* if(!glovesTracker[CONSTANTS.shop.gloves.Mining].isActive){
            //equipItem(34, 399);
        }*/
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
setTimeout(function() { setupSEMI(); },3000);
//:: end of MSCP

//:://Auto Cooking by Unicue on the Melvor discord: https://discordapp.com/channels/625838709203271680/664637399028072470/681397160465661992
let fishTypeCount = 0;
let fishType = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function autoCookAll(){
    if(document.getElementById("skill-cooking-food-selected-qty").innerHTML == "x 0"){
        fishTypeCount = (fishTypeCount + 1) % fishType.length;
        selectFood(fishType[fishTypeCount]);
    }
    else if(document.getElementById("cook-count").innerHTML == "-"){
        startCooking(10, false);
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
    } else { clearInterval(cookInterval); }
}
//::end autoCook

//:: importing AutoFish by BreakIt, Jarx and me
var chaseChest = true;
var maxMode = true;

function autoFish() {
    let fishMax = []; //set to empty each time autoFish iterates to recalculate
    let fishAvg = [];
    let fishZone = 0;
    var maxXP = 0;
    
    if (maxMode) {
        for (let i = 0; i < fishingArea.length; i++) { //for each available fishing area
        if (skillLevel[CONSTANTS.skill.Fishing] > fishingArea[i].level) { //if you can fish it
            maxXP = fishData[Math.max(...fishingArea[i].currentFish)].xp; //find max xp of fish there
            if (chaseChest && Math.max(...fishingArea[i].currentFish) == 12) {
                console.log("Found a Chest!");
                console.log($(this));
                maxXP = 9000;
                }
            fishMax.push(maxXP); //add that max to the array of fish areas to be max'd again
            }
        }
    fishZone = fishMax.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0); //some maths by BreakIt, calcs max of array and outputs the array position.
    } else { 
        $("[id^=fishing-area-fish-]").each(function() {
            var totalexp = 0;
            $(this).children("img").each(function() {
                totalexp = totalexp + parseInt($(this).attr("data-original-title").split("+")[1].split(" ")[0]);
                if (chaseChest && parseInt($(this).attr("data-original-title").split("+")[1].split(" ")[0]) == "1") {
                    console.log("Found a Chest!");
                    console.log($(this));
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
        startFishing(0,false);
        //customNotify('assets/media/shop/fishing_dragon.svg', 'AutoFish is enabled.', 5000);
        fishInterval = setInterval( () => { autoFish(); }, 1000); //loop!
    } else { 
        clearInterval(fishInterval); 
        if (currentlyFishingArea !== null) { startFishing(currentlyFishingArea,false); }
    }
}
function toggleAutoFishMax() {
    maxMode = !maxMode;
    $("#max-mode-status").text( (maxMode) ? 'Enabled' : 'Disabled' );
}
function toggleAutoFishChest() {
    chaseChest = !chaseChest;
    $("#chase-chest-status").text( (chaseChest) ? 'Enabled' : 'Disabled' );
}
//:: end autoFish

//adding katorone automation settings menu to setupSEMI()

/* from melvor idle helper, will help design our settings gui

$('#page-container').append(`
    <div class="modal" id="modal-melvor-idle-helper" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="block-header bg-primary-dark">
                <h3 class="block-title text-light">Melvor Idle Helper</h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                        <i class="fa fa-fw fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="block-content font-size-sm m-1">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="custom-control custom-switch mb-1">
                            <input type="checkbox" class="custom-control-input" id="auto-eat-enabled" name="auto-eat-enabled" onchange="helperSettings.autoEat = this.checked" ${helperSettings.autoEat ? "checked" : ""}>
                            <label class="custom-control-label" for="auto-eat-enabled">Auto Eat</label>
                        </div>
                        <div class="custom-control custom-switch mb-1">
                            <input type="checkbox" class="custom-control-input" id="auto-loot-enabled" name="auto-loot-enabled" onchange="helperSettings.autoLoot = this.checked" ${helperSettings.autoLoot ? "checked" : ""}>
                            <label class="custom-control-label" for="auto-loot-enabled">Auto Collect Loot</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`);

*/

//:: import this: https://github.com/Katorone/AutoMelvorIdle/blob/master/melvor.user.js
/* god damn that's gonna be a lot to do. 
// BANK
// How much money to keep on reserve?
// Aim for at least 4.000.000 when also buying bank slots
var bot_reserveGold = 5000000; //aw: use a form-field in settings menu
// Sell Bobbys pocket automatically?
var bot_sellGoldBags = true; //tog button in settings menu
// Buy new Bank slots when needed?
// Careful with this setting, this can drain your money fast in early game.
var bot_buyBankSlots = true; //tog button

// Opening containers automatically will display a popup.
// The script tries to close this popup automatically, but this might
// interrupt other actions you're doing in the bank. //aw: but nothing else?...
// Sadly there's no real way around this.

// Open bird nests automatically?
var bot_farming_openBirdNests = true;
// Open herb bags automatically?
var bot_farming_openHerbBags = true;

// MINING
// Enable automatic buying of Gem gloves?
var bot_buyGemGlove_enabled = true;
// Amount of uses to keep in reserve?
// Have this larger than 2000.
var bot_gemGloveUses = 60000; //this guy on crack

// PRAYER
// Bury bones?
var bot_buryBones_enabled = true;
// Amount of bones to keep in reserve?
// 21.600 bones is enough for 12h of crafting.
// - Normal bones
var bot_bonesReserve = 21600;
// - Dragon bones
var bot_dragonBonesReserve = 21600;
// - Magic bones
var bot_magicBonesReserve = 0;
// - Holy dust
var bot_holyDustReserve = 21600;
// - Big bones
var bot_bigBonesReserve = 0;


// GENERAL
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
if (gp >= price) {
    buyGloves(CONSTANTS.shop.gloves.Gems);
    return;
}
// Do we need to sell gems?
if (gp < price) {
    bot_sellGems(price - gp);
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
notifyPlayer(11, "Katorone Automation started.");
// Do actions every second.
var mediumLoop = setInterval(function() {
    // Does anything need selling?
    let sell = bot_sellList.shift();
    if (sell) {
        sellItem(getBankId(sell[0]), sell[1]);
    }
}, 1000);

// Do actions every minute.
var slowLoop = setInterval(function() {
    // Try buying a bank slot
    if (bot_buyBankSlots === true &&
        bank.length >= (baseBankMax + bankMax)) {
        let cost = Math.min(newNewBankUpgradeCost.level_to_gp(currentBankUpgrade+1), 4000000);
        // Buy if we have enough gold.
        if (gp >= cost) {
            upgradeBank();
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
            openBankItem(getBankId(bot_birdsNest), bot_birdsNest, true)
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
    }, 60000)

    console.log("Started automation.");
}, 10000); */
//:: end import Katorone's automation

/* ~~~~~-----~~~~~-----~~~~~Notes~~~~~-----~~~~~-----~~~~~
TODO
Kill potion button, or just suggest to ol Fruxy

More settings for autocombat
    auto re-equip arrows 
    Auto only-loot bones/etc
    Auto bury bones. 
    Auto-prayer.

Menus for automation: inject div into skill page containers w/ buttons containing selectors.
    For instance:
        Mining: select bar to create. Will try to mine dragonite, rune, and coal in such a way to mine much more coal and twice as much runite.
        Fishing: select which fish to auto-sell
        AutoSell Gems: same thing, settings menu for stack amount and which gems to sell

time until done calculators? more items til done calculators? there already be utils/calcs out there. Link to them in info?
    const craftTime = 2; //s
    var numItemsCraftable = math;
    output.text(numItemsCraftable*craftTime+" sec til done");
        UI notes for xp/item calc: sliders. Move a slider to set how many levels you want to move up, then once item is selected, calculate and display XP, gp, whatever.
    craftInterval: game variable for ms that it takes to use crafting to make one item. Halved with skill cape. Could be useful for item/xp time calc. Thief calc does this.

add custom settings in localstorage?... keeps variables like autoLoot, autoEat, autoEquipZone, etc. localStorage.SEMI.setItem('test', test)
    idk i like how these scripts kind of reset after reload. so, won't start up with autobon enabled...but that's not really an option
    so much as it is doing some dumb stuff when loaded. so, maybe the AC/slayer option toggles would be fine.

make compatible with MICE?... remove all MICE automation and just leave cheats in next ver? done

-

FUNKY IDEAS
sound plays when idle is done and no task queued? repeats every minute or so
task queueing
sounds in combat, alert sound for low health

//:: //:: //:: More Imported Scripts
//:: average hits to kill enemy from https://repl.it/@Dwake5/TightSpringgreenCosmos
const averageHits = (accuracy, maxHit, enemyHP) => {
    let hits = 0
    
    while (enemyHP > 0) {
      hits++
      if (Math.random()*100 <= accuracy) {
        enemyHP -= Math.floor(Math.random()*maxHit) + 1
      } 
    }

    return hits
}

let total  = 0

for (i = 0; i < 10000; i++) {
  total += averageHits(60.4,420,2200)
  // Put your accuracy, maxhit and enemys hp above here
} 


total/10000
//::end hits to kill

//::from Bioniclegenius in Melvor discord
var smithingHUD = window.setInterval(function() {
    var xpLeft = exp.level_to_xp(skillLevel[5] + 1) - skillXP[5];
    var smithItemXP = items[smithingItems[selectedSmith].itemID].smithingXP;
    var itemsLeft = Math.ceil(xpLeft / smithItemXP);
    var oldText = numberWithCommas(Math.floor(skillXP[5])) + " / " + numberWithCommas(exp.level_to_xp(skillLevel[5] + 1));
    $("#skill-progress-xp-5").text(oldText + " - " + numberWithCommas(xpLeft) + " - " + numberWithCommas(itemsLeft));
}, 1000 / 60);
//::end smith shit//hmmm... numberWithCommas eh? is this a game function? also, i just kinda hate the way this looks. so unintuitive.

*/
