//SEMIv0.1 by AW.

//AldousWatts code section 

//custom notifications! green background txt.
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

//herblore calc # items needed to level.
$('#herblore-container .col-12 .mr-2 .btn').parent().append('<button type="button" class="btn btn-success m-3" onclick="calcHerbItemsToLvl();">Calculate # Needed to Next Level</button>');
$('#herblore-container .col-12 .mr-2 .btn').parent().append('<p>You need to make <span id="herbCalc">#</span> of this item before leveling up.</p>');
function calcHerbItemsToLvl() {
    var itemsToLvl = Math.round((exp.level_to_xp(skillLevel[19]+1) +1 - skillXP[19])/herbloreItemData[selectedHerblore].herbloreXP)+1 ;
    $("#herbCalc").text(itemsToLvl);
}

function calcToLvl(current=0) { 
    var expToLvl = exp.level_to_xp(skillLevel[current]+1) +1 - skillXP[current];
    $("#"+current+"xpCalc").text(itemsToLvl);
}

/* wc calc hrs to next lvl
$('#woodcutting-container').append('<button id="wcCalcBtn" type="button" class="btn btn-success m-3" onclick="calcWCTimeToLvl();">Calculate Time Needed to Next Level</button>');
$('#woodcutting-container').append('<p class="text-size-sm text-muted">You need to cut for <span id="wcCalc">#</span> more minutes, or <span id="wcCalcHrs">#</span> more hours before leveling up.</p>');
*/
//function etc... should we do this as a main header button that calcs based on open page?

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
/* highlighting buttons
    var skillPick; //selecting which skill you want to do level up cheat on
    $("#skillBut" + skillPick).attr("class", "btn btn-outline-primary"); //de-highlight previous selection
	skillPick = x; //update selection 
    $("#skillBut" + x).attr("class", "btn btn-primary"); //highlight selection
*/

function semiInfo() { $("#modal-semi-info").modal(open); }

//Modal for SEMI info popup
$('#modal-account-change').before($(`
<div class="modal" id="modal-semi-info" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="block block-themed block-transparent mb-0">
                <div class="block-header bg-primary-dark">
                    <img class="nav-img" src="`+ $("#iconImg")[0].src +`">
                    <h3 class="block-title">Scripting Engine for Melvor Idle v0.1</h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                            <i class="fa fa-fw fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="block-content font-size-sm">
                    <p id="semi-info-text"></p>
                    
                    <h2 style="color: white;">SEMI v0.1 by Aldous Watts</h2>
                    Various Quality of Life improvements, scripts for automation, and UI tweaks for Melvor.
                    <br><br>
                    Scripting with Melvor can be done through injected user scripts, either through a browser add-on like this, 
                    or another more general-purpose add-on like Tampermonkey to run userscripts. 
                    Either way, the end result is extra functionality, like automating a task or adding calculated info to the page.
                    <br><br>
                    The basis of this add-on comes from my own scripts as well as others'. Currently running:
                    <ul>
                        <li>Melvor AutoSlayer by Bubbalova, modified for more general use</li>
                        <li>Melvor Auto Replant by Arcanus</li>
                        <li>Melvor Percent Accuracy by Arcanus</li>
                        <li>XPH by Breakit. For now, console only: Ctrl+Shift+K for console, type XPH() for the tool.</li>
                        <li>Thieving Calculator from Melvor Idle Helper by RedSparr0w</li>
                    </ul>
                    Source code can be found <a href="https://gitlab.com/aldousWatts/SEMI" target="_blank">here.</a>
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

//Button for toggling Auto Slayer Auto-equip scripts
$("#sidebar hr").before($(`<li class="nav-main-heading">AutoSlayer Options</li>
<li class="nav-main-item" title="The original Melvor Auto Slayer script by Bubbalova attempts to equip the Mirror Shield or Magic Ring when assigned a monster in zones that require them to enter. This option, disabled by default in SEMI, turns that functionality back on.">
    <a class="nav-main-link nav-compact" href="javascript:toggleAutoEquip();" id="autoEquipNavBut">
        <img class="nav-img" src="assets/media/bank/mirror_shield.svg" id="autoEquipImg">
        <span class="nav-main-link-name">AS Auto Equip</span>
    <small id="autoEquipStatus">Disabled</small></a>
</li>`));

var autoEquipZone = false;

function toggleAutoEquip() {
    autoEquipZone = !autoEquipZone;
    $("#autoEquipStatus").text( (autoEquipZone) ? 'Enabled' : 'Disabled');
}

// Imported code section/authored by others. Comments like this //::show the script name & author.

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
} //aw: ?: that shit's a ternary operation. ? and : are ternary operators. (if) ? then : else. goddamn thats good. shorthand if, else. so func does this: set text of button stat to enabled if enabled, disabled else. made this all one line.

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

var setupAutoSlayer = function() { //aw: wonderful! injecting ui elements using jquery(ui). good to learn
    if ($("#auto-slayer-button").length) return; //if there's already a button, buzz off ho. super tempted to change this to ? but idk, what if it borks without :?
    //var containerRef = $(".content-side ul.nav-main li.nav-main-heading:last"); //looks like defining where to put the button... right before the main heading
    var containerRef = $("#autocombatNavBut").parent();
    var li = $('<li class="nav-main-item"></li>'); //setting up button container, the li element
    containerRef.before(li); // put the button container, li, just before the final header defined in containerRef.
    var button = $([ //jqueryui stuff: writing the contents of the nav-main-item... makes it as an array in... jquery? why the $?
        '<a id="auto-slayer-button" class="nav-main-link" href="javascript:void(0);">', //but why void? why not href="func-u-want"? sneeky
        '<img class="nav-img" src="assets/media/skills/slayer/slayer.svg">', //nice. aw chng: slayer skill icon
        '<span class="nav-main-link-name">aw-AutoSlayer</span>', // ye boi
        '<small id="auto-slayer-button-status"></small>', //no comma on final line... reminds a bit of .json. probably just array formatting.
        '</a>'
    ].join("")); //join, huh? it makes it into a string. using jquery to make an html block. nice.
    li.append(button); //well yeah
    button.on("click", toggleAutoSlayer); //duh. looks like you dont need () here for some reason
    updateAutoSlayerButtonText(); //ez. aw added tooltip title below.
    li.attr('title', 'aw-AutoSlayer, based on Melvor Auto Slayer by Bubbalova, automatically seeks slayer tasks and sets out to kill that enemy. If you are assigned a monster in a zone that requires special equipment, this version of AutoSlayer will simply reroll your assignment and continue on by default.');
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

setTimeout(function() { setupAutoSlayer(); }, 1000); //why not just run it? there must be a reason for delay

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

/*//::from Bioniclegenius in Melvor discord
var smithingHUD = window.setInterval(function() {
    var xpLeft = exp.level_to_xp(skillLevel[5] + 1) - skillXP[5];
    var smithItemXP = items[smithingItems[selectedSmith].itemID].smithingXP;
    var itemsLeft = Math.ceil(xpLeft / smithItemXP);
    var oldText = numberWithCommas(Math.floor(skillXP[5])) + " / " + numberWithCommas(exp.level_to_xp(skillLevel[5] + 1));
    $("#skill-progress-xp-5").text(oldText + " - " + numberWithCommas(xpLeft) + " - " + numberWithCommas(itemsLeft));
}, 1000 / 60);
//::*/
//hmmm... numberWithCommas eh? is this a game function?

//:: Scavenging the Thieving calculator from Melvor Idle Helper by RedSparr0w on GitLab: https://github.com/RedSparr0w/Melvor-Idle-Helper
const waitForPage = setInterval(() => {
    const changeLog = document.getElementById('changelog-body-container');
    if (!changeLog || !changeLog.innerText) return;    
    clearInterval(waitForPage);// Page is loaded
    thievingCalc();
    $('.js-popover').popover({ // Enable the popovers
        container: 'body',
        animation: false,
        trigger: 'hover focus',
    });
}, 200);

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

//this is freshhh - Thieving Calc & Item Popup! SO Handy!
const thievingCalc = () => {
    const seconds = baseThievingInterval / 1000; // Always takes the same amount of time
    thievingNPC.forEach((npc, id) => {
        const xp_ps = +(npc.xp / seconds).toFixed(1);
        // Get the loottable text
        let popoutText = [`<img src='http://melvoridle.com/assets/media/main/coins.svg' height='20px'> ${npc.maxCoins} coins (max)`];
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

//:: straight-up importing Melvor Auto Replant 1.6 by Arcanus on Greasyfork: https://greasyfork.org/en/scripts/394855-melvor-auto-replant
this.autoReplant = setInterval(()=>{
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
},5000)
//:: end of import of Melvor Auto Replant

//:: straight-up importing Melvor Percent Accuracy 1.1 by Not Arcanus on Greasyfork: https://greasyfork.org/en/scripts/394856-melvor-percent-accuracy
this.setAccuracyPercent = setInterval(() =>{
    if(isInCombat) {
        let playerDodge = combatData.enemy.attackType === CONSTANTS.attackType.Melee ? maximumDefenceRoll : combatData.enemy.attackType === CONSTANTS.attackType.Ranged ? maximumRangedDefenceRoll : maximumMagicDefenceRoll
        let enemyDodge = attackStyle < 3 ? combatData.enemy.maximumDefenceRoll : attackStyle < 6 ? combatData.enemy.maximumRangedDefenceRoll : combatData.enemy.maximumMagicDefenceRoll
        let playerAccuracy = maximumAttackRoll < enemyDodge ? (0.5 * maximumAttackRoll / enemyDodge) * 100 : (1 - 0.5 * enemyDodge / maximumAttackRoll) * 100
        let enemyAccuracy = combatData.enemy.maximumAttackRoll < playerDodge ? (0.5 * combatData.enemy.maximumAttackRoll / playerDodge) * 100 : (1 - 0.5 * playerDodge / combatData.enemy.maximumAttackRoll) * 100
        $("#combat-player-attack-bonus").text(Math.floor(playerAccuracy)+ "%")
        $("#combat-enemy-attack-bonus").text(Math.floor(enemyAccuracy)+ "%")
    }
},500)
//:: end of %acc

//The End
//SEMI loaded custom notification
if(navigator.userAgent.match("Chrome")){
    customNotify('assets/media/monsters/dragon_black.svg','Scripting Engine for Melvor Idle is now loaded and running! Check the bottom of the sidebar.',22000);
} else if(navigator.userAgent.match("Firefox")) { 
    customNotify('','Scripting Engine for Melvor Idle is now loaded and running! Check the bottom of the sidebar.',22000);
}


/* ~~~~~-----~~~~~-----~~~~~Notes~~~~~-----~~~~~-----~~~~~

time until done calculators? more items til done calculators?
const craftTime = 2; //s
var numItemsCraftable = math;
output.text(numItemsCraftable*craftTime+" sec til done");

*** PUT OPTION FOR AUTO-EQUIPMENT during autoslayer IN THIS ***

UI notes for xp/item calc: sliders. Move a slider to set how many levels you want to move up, then once item is selected, calculate and display XP, gp, whatever.

craftInterval: game variable for ms that it takes to craft one item. Halved with skill cape. Could be useful for item/xp time calc.


*/
