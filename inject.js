//figured out how to inject in a new way. this way i'll be able to add comments and such here. better for dev.
//these are the real cheats right here.
//MICEv0.2 by AW 2-10-20

//start of injected script
var cheatborder = true;
function toggleborder() {
	if(cheatborder) { borderOff(); }
	else { borderOn(); }
}

function borderOn() {
    document.getElementsByClassName('content-side content-side-full')[0].style.border = "2px solid red";
    cheatborder = true;
}

function borderOff() {
    document.getElementsByClassName('content-side content-side-full')[0].style.border = "";
    cheatborder = false;
}

    var skillPick; //selecting which skill you want to do level up cheat on
function cheatSkill(x) {
    $("#cheatSkillBut" + skillPick).attr("class", "btn btn-outline-primary"); //de-highlight previous selection
	 skillPick = x; //update selection 
	 $("#cheatSkillBut" + x).attr("class", "btn btn-primary"); //highlight selection
}

function levelUpCheat() {
    addXP(skillPick, exp.level_to_xp(skillLevel[skillPick]+1) +1 - skillXP[skillPick]);
    updateLevelProgress(skillPick);
    updateSkillWindow(skillPick);
}

function giveGPcheat() {
    var gpaddnum = Number(document.getElementById('gpinput').value);
    gpAdd(gpaddnum);
}

function giveGPcheatNav() {
    var numprompt = prompt("How much gold?", 10000000);
    var gpaddnum = Number(numprompt);
    gpAdd(gpaddnum);
}

function gpAdd(n) { 
	if (!isNaN(n) && n>0) {
	gp += n; 
	updateGP();
	gpNotify(n);
	updateGetGP();
	}
}

function updateGetGP() { //immediately updates custom nav button gp amount
    $("#nav-current-gp2").text(convertGP(gp) + " GP"); 
	 $("#nav-current-gp2").attr("data-original-title", numberWithCommas(gp) + " GP");
}
var cheatgpupdate = setInterval(function() { updateGetGP(); }, 1500); //looping function to constantly update the cheat clone gp count
    
function masterycheat() {
    var masteryadd = prompt("What item would you like to add mastery XP to?", "Normal_Bow_u");
    var masteryamtadd = prompt("How many XP?", "10000");
    miningOreMastery[miningData[masteryadd].masteryID].masteryXP += Number(masteryamtadd);
}

function lootcheat() {
    var lootnameask = prompt("What loot do you want? Type or copy the name here. Use underscores for spaces, delete any parenthesis.", "Normal_Shortbow_U");
    if (lootnameask === null) { return; } //if cancel or blank kill function
    var lootqtyask = prompt("How many?", "1");
    var lootqty = Number(lootqtyask);
    if (isNaN(lootqty) || lootqty === 0) { return; } 
    if (!isNaN(lootqty) && lootqty>0) {
    collectLoot(-1,CONSTANTS.item[lootnameask],lootqty);
    }
}

function lootcheatID() {
    var lootidask = prompt("Enter the Loot ID of the item you want.", "222");
    var lootid = Number(lootidask);
    if (isNaN(lootid) || lootid === 0) { return; } //cancel or non-numbers kills function
    var lootqtyask = prompt("How many?", "222");
    var lootqty = Number(lootqtyask);
    if (isNaN(lootqty) || lootqty === 0) { return; } 
    if (!isNaN(lootqty) && lootqty>0) {
    collectLoot(-1,lootidask,Number(lootqtyask));
    }
}

//***************************AUTO COMBAT***********************************
    var autocombat;
    var autocombatloop;
    var today = new Date(); //this and next three lines are date & time function from https://tecadmin.net/get-current-date-time-javascript/
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' @ '+time;
function autocombatfunc() {
    var hp = Number(document.getElementById("combat-player-hitpoints-current").textContent);
    var hpfood = 10 * items[equippedFood[currentCombatFood].itemID].healsFor;
    var hpmax = Number(document.getElementById("combat-player-hitpoints-max").textContent);
    if (hp < hpmax-hpfood || hp<50) { eatFood(); }
    if (equippedFood[currentCombatFood].qty < 1) { 
    	terminateAutoCombat('food.');
    }
    if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged || (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === "Ranged Weapon") && ammo < 1) { 
    	terminateAutoCombat('ammo.');
    }
    if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic && !checkRuneCount(selectedSpell) ) { 
		terminateAutoCombat('runes.');
    }
    lootAll();
}
//***************************END AUTO COMBAT*******************************

//Autocombat Auxiliaries
function terminateAutoCombat(reason) {
	clearInterval(autocombatloop); 
   stopCombat(false, true, true);
   autocombat = false;
   alert('MICE: Exited Auto Combat @ '+dateTime+' because '+username+' is out of '+reason);
   //document.getElementById('autocombatNavBut').childNodes[3].textContent = '[Off] Toggle Auto Combat';
   clearInterval(looper); //stop rotation
   document.getElementById('autocombatImg').style.MozTransform = "rotate(0deg)"; //fix rotation
}

function toggleautocombat() { //button -> function that enables auto combat
    if (!isInCombat) { terminateAutoCombat("common sense... You aren't in combat!"); return; } 
    if (autocombat) {
        autocombat = false;
        clearInterval(autocombatloop);
        alert("Auto combat is terminated. You're in the danger zone now, baby.");
        //document.getElementById('autocombatNavBut').childNodes[3].textContent = '[Off] Toggle Auto Combat';
        clearInterval(looper); //stop rotation
        document.getElementById('autocombatImg').style.MozTransform = "rotate(0deg)"; //fix rotation
    }
    else {
        autocombatloop = setInterval(autocombatfunc, 500);
        autocombat = true;
        alert("Auto combat is now running while the combat logo is rotating.\n \n \
This will auto-eat if injured as well as pick up any loot that was dropped automatically every half second. \n \
To turn auto combat off, hit the auto combat nav button again. \n \
Auto combat will automatically cancel combat if you are out of food, ammo, or runes.");
        //document.getElementById('autocombatNavBut').childNodes[3].textContent = '[ON] Toggle Auto Combat';
        rotateAnimation('autocombatImg', 10); //rotate combat icon while combat is on...? lol
    }
}

//awesome script from https://www.developphp.com/video/JavaScript/Transform-Rotate-Image-Spin-Smooth-Animation-Tutorial
var looper; //clearInterval this to stop rotation. 5-10 is a good speed?
var degrees = 0;
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
	//deleted the line from the script that used an element from an example page. no need
}
//End of Autocombat Auxiliaries

    var menuOn;
function openCheatMenu() {
    if(menuOn) {
    $("#cheat-container").attr("class", "content d-none");
    menuOn = false;
    }
    else {
    menuOn = true;
    $('[data-toggle="tooltip"]').tooltip('hide');
	let pages = ["woodcutting", "shop", "bank", "settings", "changelog", "milestones", "statistics", "fishing", "firemaking", "cooking", "mining", "smithing", "mastery", "combat", "thieving", "farming", "fletching","crafting","runecrafting"];
	$("#" + pages[currentPage] + "-container").attr("class", "content d-none");
	$("#cheat-container").attr("class", "content");
	$("#header-title").text("Cheat Menu: persistent across other pages. To close, click nav button again.");
	$("#header-icon").attr("src", "assets/media/main/logo-xmas.svg");
	$("#header-theme").attr("class", "content-header bg-settings");
	if( $(window).width() < 992) {
		  One.layout('sidebar_toggle');
        }
	}
}

function changeNameInf() {
	if (document.getElementById('unameinput').value !== "") { //if not blank, change name to whatever's in the box. PUT YOUR ASS IN THE BOOOOX
	username = document.getElementById('unameinput').value;
	$("#account-name").text(username); 
	console.log("Username changed to: " + username); 
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

updateTooltips(); //should fix settings page from being messed up by MICE, radio buttons can be blank sometimes
//end of injected script.