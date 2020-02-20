//MICEv0.3dev by AW. these are the real cheats right here.
//DEV//$("#cheat-container").removeClass('d-none'); //DEV//open cheat menu automatically

/*//::from Bioniclegenius in Melvor discord
var smithingHUD = window.setInterval(function() {
    var xpLeft = exp.level_to_xp(skillLevel[5] + 1) - skillXP[5];
    var smithItemXP = items[smithingItems[selectedSmith].itemID].smithingXP;
    var itemsLeft = Math.ceil(xpLeft / smithItemXP);
    var oldText = numberWithCommas(Math.floor(skillXP[5])) + " / " + numberWithCommas(exp.level_to_xp(skillLevel[5] + 1));
    $("#skill-progress-xp-5").text(oldText + " - " + numberWithCommas(xpLeft) + " - " + numberWithCommas(itemsLeft));
}, 1000 / 60);
//::*/

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

/*//wc calc hrs to next lvl
$('#woodcutting-container').append('<button id="wcCalcBtn" type="button" class="btn btn-success m-3" onclick="calcWCTimeToLvl();">Calculate Time Needed to Next Level</button>');
$('#woodcutting-container').append('<p class="text-size-sm text-muted">You need to cut for <span id="wcCalc">#</span> more minutes, or <span id="wcCalcHrs">#</span> more hours before leveling up.</p>');
//function whatever */

//custom notifications!
function customNotify(imgsrc="", msg="Custom Notifications!", n=3000) { //outputs a custom notification with optional first image, MICE icon, and message.
    $.notify(
		{
			message: '<img class="notification-img" src="' + imgsrc + '"><img src="'+ $("#MICEicon").attr('src') +'" height="auto" width="auto" style="margin: 4px;"><span class="badge badge-success">' + msg + '</span>'
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

var cheatborder = true;
function toggleborder() { 
    cheatborder = !cheatborder;
    (cheatborder) ? borderOn() : borderOff();
}

function borderOn() { document.getElementsByClassName('content-side content-side-full')[0].style.border = "2px solid red"; }
function borderOff() { document.getElementsByClassName('content-side content-side-full')[0].style.border = ""; }

var cheatInfoVisible = true;
function toggleInfo() {
    cheatInfoVisible = !cheatInfoVisible;
    updateCheatInfoBtn();
    (cheatInfoVisible) ? $("#cheatmenuInfo").show() : $("#cheatmenuInfo").hide();
}
function updateCheatInfoBtn() { $("#hideCheatInfoBtn").text((cheatInfoVisible) ? 'Hide Info' : 'Show Info'); }

    var skillPick; //selecting which skill you want to do level up cheat on
function cheatSkill(x) {
    $("#skillBut" + skillPick).attr("class", "btn btn-outline-primary"); //de-highlight previous selection
	skillPick = x; //update selection 
    $("#skillBut" + x).attr("class", "btn btn-primary"); //highlight selection
}

function levelUpCheat() {
    addXP(skillPick, exp.level_to_xp(skillLevel[skillPick]+1) +1 - skillXP[skillPick]);
    updateLevelProgress(skillPick);
    updateSkillWindow(skillPick);
}

function giveGPcheat() {
    var gpaddnum = Number(document.getElementById('GPask').value);
    gpAdd(gpaddnum);
}

function giveGPcheatNav() { $("#modal-gp-cheat").modal(open); }

//Modal Dialog for GP cheat! --- these modals DO work, which is awesome, but they're kinda phatt here. hmm. good for editing, not great for space.
$('#modal-account-change').before($(`<div class="modal" id="modal-gp-cheat" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true" style="display: none;">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="block block-themed block-transparent mb-0">
					<div class="block-header bg-primary-dark">
                        <img class="nav-img" src="assets/media/main/coins.svg">
						<h3 class="block-title">Pirate some GP</h3>
						<div class="block-options">
							<button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
								<i class="fa fa-fw fa-times"></i>
							</button>
						</div>
					</div>
					<div class="block-content font-size-sm">
						<p id="name-change-text"></p>
						<div id="GPaskForm" class="form-group">
							<label for="example-text-input">How many pirated Gold Pieces would you like?</label>
							<input class="form-control" id="GPask" placeholder="1234567890" type="text">
						</div>
					</div>
					<div class="block-content block-content-full text-right border-top">
						<button type="button" id="GPcheatNavBtn" class="btn btn-sm btn-primary" data-dismiss="modal" onclick="giveGPcheat();"><i class="fa fa-check mr-1"></i>Plunder Booty!</button>
					</div>
				</div>
			</div>
		</div>
	</div>
`));

function gpAdd(n) { 
	if (!isNaN(n) && n>0) {
	gp += n; 
	updateGP();
	gpNotify(n+" Unearned GP"); //unearned gp stats? lol
	updateGetGP();
	}
}

function updateGetGP() { //immediately updates custom nav button gp amount
    $("#nav-current-gp2").text(convertGP(gp) + " GP"); 
    $("#nav-current-gp2").attr("data-original-title", numberWithCommas(gp) + " GP");
    $("#nav-current-sc").text(slayerCoins + " SC"); //and I'm just gonna add SC in here too
    $("#nav-current-sc").attr("data-original-title", slayerCoins + " SC");
}
var cheatgpupdate = setInterval(function() { updateGetGP(); }, 3000); //looping function to constantly update the cheat clone gp count & sc count

function giveSCcheat(n) {
    n = Number(n); //just in case
    if (!isNaN(n) && n>0) {
        slayerCoins += n;
        notifySlayer("+"+n+" Unearned SC");
        updateSlayerCoins();
        updateGetGP();
    }
}
//SC Cheat Modal Dialog -- adds modified modal into the page before the account change one, which it's based on. could use for the others. things of note here: using template literals instead of quotes to make it easily multi-line. injecting a bunch of text into a webpage that becomes a modal element. figuring out that they're not using jqueryui, it's just this modal stuff. got it.
$('#modal-account-change').before($(`<div class="modal" id="modal-sc-cheat" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true" style="display: none;">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="block block-themed block-transparent mb-0">
					<div class="block-header bg-primary-dark">
                        <img class="nav-img" src="assets/media/main/slayer_coins.svg">
						<h3 class="block-title">Cheatin' fer Slayer Coins</h3>
						<div class="block-options">
							<button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
								<i class="fa fa-fw fa-times"></i>
							</button>
						</div>
					</div>
					<div class="block-content font-size-sm">
						<p id="name-change-text"></p>
						<div id="SCaskForm" class="form-group">
							<label for="example-text-input">How many ill-gotten Slayer Coins would you like?</label>
							<input class="form-control" id="SCask" placeholder="1234567890" type="text">
						</div>
					</div>
					<div class="block-content block-content-full text-right border-top">
						<button type="button" id="SCcheatNavBtn" class="btn btn-sm btn-primary" data-dismiss="modal" onclick="giveSCcheat(Number(document.getElementById('SCask').value));"><i class="fa fa-check mr-1"></i>Gimme!</button>
					</div>
				</div>
			</div>
		</div>
	</div>
`));

function giveSCcheatNav() { $("#modal-sc-cheat").modal(open); }

function lootcheat() {
    var lootnameask = prompt("What loot do you want? Type or copy the name here. Use underscores for spaces, delete any parentheses.", "Normal_Shortbow_U");
    if (lootnameask === null) return; //if cancel or blank kill function
    var lootqtyask = prompt("How many?", "1");
    var lootqty = Number(lootqtyask);
    if (!isNaN(lootqty) && lootqty>0) collectLoot(-1,CONSTANTS.item[lootnameask],lootqty);
}

function lootcheatID() {
    var lootidask = prompt("Enter the Loot ID of the item you want.", "222");
    var lootid = Number(lootidask);
    if (isNaN(lootid) || lootid === 0) return; //cancel or non-numbers kills function
    var lootqtyask = prompt("How many?", "222");
    var lootqty = Number(lootqtyask);
    if (isNaN(lootqty) || lootqty === 0) return; 
    if (!isNaN(lootqty) && lootqty>0) collectLoot(-1,lootidask,Number(lootqtyask)); //do we even need the {}? dont think so.
}

//***************************AUTO COMBAT***********************************
    var autocombat;
    var autocombatloop;
    var today = new Date(); //this and next three lines are date & time function from https://tecadmin.net/get-current-date-time-javascript/
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' @ '+time;
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
    if (equippedFood[currentCombatFood].qty < 1) { 
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
    clearInterval(autocombatloop); 
    stopCombat(false, true, true);
    autocombat = false;
    updateACstatus();
    alert('MICE: Exited Auto Combat @ '+dateTime+' because '+username+' is out of '+reason);//upgrade to jqueryui modal dialog
    autoSlayerEnabled = false; //connecting to auto slayer script by bubbalova from greasefork in tampermonkey
    updateAutoSlayerButtonText(); //yay, automatically turns off auto slayer! kewls
}

function updateACstatus() { 
    $("#autocombatStatus").text((autocombat) ? 'Enabled' : 'Disabled'); 
    $("#autocombatStatus").css('color', (autocombat) ? 'cyan' : '');
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

    var menuOn;
function openCheatMenu() {
    if(menuOn) {
    $("#cheat-container").attr("class", "content d-none"); //adding d-none to class hides elements, bootstrap+jqueryui methinks
    menuOn = false;
    } else {
    menuOn = true;
    $('[data-toggle="tooltip"]').tooltip('hide');
    let pages = ["woodcutting", "shop", "bank", "settings", "changelog", "milestones", "statistics", "fishing", "firemaking", "cooking", "mining", "smithing", "mastery", "combat", "thieving", "farming", "fletching","crafting","runecrafting","herblore"];
    $("#" + pages[currentPage] + "-container").attr("class", "content d-none");
    $("#cheat-container").attr("class", "content");
    $("#header-title").text("Cheat Menu: persistent across other pages. To close, click nav button again.");
    $("#header-icon").attr("src", "assets/media/main/logo-xmas.svg");
    $("#header-theme").attr("class", "content-header bg-settings");
    if ( $(window).width() < 992 ) { One.layout('sidebar_toggle'); }
    }
}

function changeNameInf() {
	if (document.getElementById('unameinput').value !== "") { //if not blank, change name to whatever's in the box. PUT YOUR ASS IN THE BOOOOX
	username = document.getElementById('unameinput').value;
	$("#account-name").text(username); 
	console.log("Username changed to: " + username); 
    customNotify('assets/media/main/profile_header.svg','Username changed to: '+username);
	saveData();
	}
}

function showItems() {
	var list = "List of items and IDs: \n"+CONSTANTS.item.toSource(); 
	var listBox = document.createElement('pre'); //use pre html tag for the string's new lines to format properly
	listBox.style = "height:80px; width: 100%; border: 1px solid #ccc; font:16px/26px monospace, monospace; overflow: auto; color:cyan;";
	listBox.textContent = list;
	document.getElementById("cheatmenu").appendChild(listBox);
	document.getElementById("showItemsBut").remove();
	document.getElementById("listheader").textContent = "Ctrl+F is your friend here. :)";
}

function instantFarm(x=0) { //0 crops, 1 herbs, 2 trees.
    customNotify('assets/media/skills/farming/farming.svg','Bonemeal has been added. Please wait for success.');
	for (i=0; i<newFarmingAreas[x].patches.length; i++) { 
		newFarmingAreas[x].patches[i].timePlanted = 1; //sets all herb patches to time immemorial (1970) where all herbs are ready to harvest now
	}
}

function unlockAdSet() { $("#setting-ad-options-enabled").removeClass('d-none'); } //shows the ad setting.

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// Importing Auto Slayer by Bubbalova. Using a modified version of script v1.1.7.
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

var autoSlayerEnabled = false;

var updateAutoSlayerButtonText = function () { 
    $('#auto-slayer-button-status').text((autoSlayerEnabled) ? 'Enabled' : 'Disabled'); 
    $('#auto-slayer-button-status').css('color', (autoSlayerEnabled) ? 'cyan' : '');
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
    li.attr('title', 'aw-AutoSlayer, based on Melvor Auto Slayer by Bubbalova, automatically seeks slayer tasks and sets out to kill that enemy. If you are assigned a monster in a zone that requires special equipment, this version of AutoSlayer will simply reroll your assignment and continue on. This is meant to help those using ranged or magic avoid force-equipping a shield, which would leave you unable to attack.');
}

//Main function
var autoSlayer = function() {
    if (!autoSlayerEnabled) return; //aw: one line
    //Holds values for unequipped equipment
    /*aw: probably comment out since we ain't gonna mess with equipments. cept maybe arrows later.
    var originalRing;
    var originalShield;
    var originalCape;
    */
    //Slayer areas that require items
    var strangeCave = 10;
    var highLands = 11;

    if (!slayerTask.length) getSlayerTask(); //If there is no slayer task, get one

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
        else if(selectedCombatArea == strangeCave || selectedCombatArea == highLands) newSlayerTask(); //aw: ranged & autoslayer: no good. just rerolling when combat area is the cave or highlands. but it costs
        /* aw: commenting out equipment changes, will have it reroll if it lands on one of these
        //Equips Mirror Shield for area
        else if(selectedCombatArea == strangeCave) {
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
        else if(selectedCombatArea == highLands) {
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
        else if(selectedCombatArea != strangeCave || selectedCombatArea != highLands){

            //Equips original shield when not in Area
            if (equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] == CONSTANTS.item.Mirror_Shield && originalShield != CONSTANTS.item.Mirror_Shield){
                for (let i = 0; i < bank.length; i++) {
                    if(typeof(items[bank[i].id].name) == items[originalShield].name) {
                        equipItem(i, originalShield, 1, selectedEquipmentSet)
                        found = true
                        break
                    }
                }
            }

            //Equips original ring when not in Area
            if (equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Ring] == CONSTANTS.item.Magical_Ring && originalRing != CONSTANTS.item.Magical_Ring){
                for (let i = 0; i < bank.length; i++) {
                    if(typeof(items[bank[i].id].name) == items[originalRing].name) {
                        equipItem(i, originalRing, 1, selectedEquipmentSet)
                        found = true
                        break
                    }
                }
            }
        } */
        selectMonster(slayerTask[0].monsterID);
    }
}

var autoSlayerTimer = setInterval(function(){autoSlayer();}, 2000); //idk how i feel about this always being on rn

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

customNotify('','Melvor Idle Cheat Engine v0.3dev is now loaded and running! Check the bottom of the sidebar for cheats.',22000);

/*//are we ever gonna do this?
function masterycheat() {
    var masteryadd = prompt("What item would you like to add mastery XP to?", "Normal_Bow_u");
    var masteryamtadd = prompt("How many XP?", "10000");
    miningOreMastery[miningData[masteryadd].masteryID].masteryXP += Number(masteryamtadd);
}
*/

/* ~~~~~-----~~~~~-----~~~~~Notes~~~~~-----~~~~~-----~~~~~

time until done calculators? more items til done calculators?
const craftTime = 2; //s
var numItemsCraftable = math;
output.text(numItemsCraftable*craftTime+" sec til done");

*/
