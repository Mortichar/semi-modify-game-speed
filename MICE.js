// Melvor Idle Cheat Engine v0.1.1 by aldousWatts on GitLab
// Currently developing on Waterfox 2019.12 KDE version. I'm guessing it's roughly equivalent to slightly-old firefox. Come to think of it, I have Chromium KDE too...
// Hacking Melvor Idle for dummies! And learning/relearning Javascript along the way
// As always, use and modify at your own risk. But hey, contribute and share!
// This code is open source and shared freely under MPL/GNUv3/creative commons licenses.

document.body.style.border = "5px solid red"; 
window.onload(alert('Melvor Idle Cheat Engine v0.1 is running. Beware, ye cheater! \n \
The red border is a friendly reminder that MICE is running, but can be turned off in the cheat menu. \n \
Use such software at your own risk! Back up ye game before modifying! \n \
This extension may completely break the save if used wrongly. You have been warned. \n \
Also, be careful about using Ctrl+F5 with this game, I\'ve had it completely corrupt a save. \n \
That may or may not be the impetus for cheating. ;) \n \n \
Check the bottom of the sidebar for cheats. Have fun. :)'));

// Modifying DOM: adding nav bar entries for hacked stuff
// create element for the nav list itself, navul
const navul = document.querySelector('ul');
// create element of settings link
	const settingsnav = document.getElementsByTagName('LI')[32];
// create cloned element of settings link
    const cln = settingsnav.cloneNode(true);
// create cloned element of nav title
    const header = document.getElementsByTagName('LI')[0];
    const clntitle = header.cloneNode(true);
// append title and change it
    navul.appendChild(clntitle);
    clntitle.childNodes[0].textContent = "Cheat Tools";
// add the clone to the nav list
	navul.appendChild(cln);
// create element for the final attribute changes
	var lastnav = navul.lastChild;
// change link to coincide with our function below
	lastnav.childNodes[1].setAttribute('href', 'javascript:openCheatMenu();');
// change name to cheating (note nesting child nodes, navigating html using js)
    lastnav.childNodes[1].childNodes[3].textContent = 'Cheat Menu';

    /* these were moved to the cheat menu to great suck-sess
// add another clone to the nav list
    const cln2 = settingsnav.cloneNode(true);
    navul.appendChild(cln2);
    lastnav = navul.lastChild;
// change link to coincide with our function below
	lastnav.childNodes[1].setAttribute('href', 'javascript:addXPcheatbutton();');
// change name to cheating (note nesting child nodes, navigating html using js)
    lastnav.childNodes[1].childNodes[3].textContent = 'Add Skill XP';
    // add yet another clone to the nav list 
    const cln3 = settingsnav.cloneNode(true);
    navul.appendChild(cln3);
    lastnav = navul.lastChild;
	lastnav.childNodes[1].setAttribute('href', 'javascript:giveGPcheat();');
    lastnav.childNodes[1].childNodes[3].textContent = 'Get GP';
    */
    
    //This one is begging for a UI
    const cln4 = settingsnav.cloneNode(true);
    navul.appendChild(cln4);
    lastnav = navul.lastChild;
	lastnav.childNodes[1].setAttribute('href', 'javascript:lootcheat();');
    lastnav.childNodes[1].childNodes[3].textContent = 'Get Loot';
    
    //i like this one just fine
    const cln5 = settingsnav.cloneNode(true);
    navul.appendChild(cln5);
    lastnav = navul.lastChild;
	lastnav.childNodes[1].setAttribute('href', 'javascript:toggleautocombat();');
    lastnav.childNodes[1].childNodes[3].textContent = 'Toggle Auto Combat';
    
// Creating the Cheat Page. It's a lot of DOM editing from here.
    const mainpage = document.getElementById('main-container');
    const settingspage = document.getElementById('settings-container');
    const pagecln = settingspage.cloneNode(true);
    mainpage.appendChild(pagecln);
    pagecln.childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].textContent = 'Hooray! You made it! This is the nice MICE cheat menu. This menu is persistent across other pages. To close this menu, click Cheat Menu again.'; //sort of a bug-becomes-feature situation: the way I coded the cheat menu avoids being 'closed' by other pages because they don't understand the 'cheating' page and can't close it. therefore it'll stay open until the button is pushed again, calling the specific function to close the page since it's only in these scripts and not possible through page scripts.
    pagecln.id = 'cheat-container';
    const cheatmenu = pagecln.childNodes[3].childNodes[5].childNodes[1].childNodes[1];
    cheatmenu.childNodes[3].textContent = 'A Friendly Reminder that MICE is running';
    cheatmenu.childNodes[5].childNodes[1].textContent = 'Red Page Border';
    const borderenablebutton = cheatmenu.childNodes[5].childNodes[3].childNodes[1].childNodes[1]; 
    const borderdisablebutton = cheatmenu.childNodes[5].childNodes[3].childNodes[1].childNodes[3];
    borderenablebutton.childNodes[1].setAttribute('onclick', 'borderOn();');
    borderenablebutton.childNodes[3].setAttribute('for', 'setting-addborder');
    borderenablebutton.childNodes[1].setAttribute('id', 'setting-addborder');
    borderdisablebutton.childNodes[1].setAttribute('onclick', 'borderOff();');
    borderdisablebutton.childNodes[3].setAttribute('for', 'setting-noborder');
    borderdisablebutton.childNodes[1].setAttribute('id', 'setting-noborder');
    for (i=0; i<17; i++) { cheatmenu.childNodes[5].childNodes[4].remove(); } //deleting the other radio buttons
    cheatmenu.childNodes[11].textContent = 'Skill Leveler and Gold Giver';
    cheatmenu.childNodes[13].childNodes[1].childNodes[1].textContent = 'Skill to modify:';
    const combatbutton = cheatmenu.childNodes[13].childNodes[3].childNodes[1];
    const skillselector = cheatmenu.childNodes[13].childNodes[3];
    combatbutton.setAttribute('onclick', 'cheatSkill(16);');
    combatbutton.setAttribute('id', 'magiccheat');
    combatbutton.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/magic/magic.svg';
    skillselector.childNodes[3].setAttribute('id', 'woodcuttingcheat');
    skillselector.childNodes[3].setAttribute('onclick', 'cheatSkill(0);');
    skillselector.childNodes[5].setAttribute('id', 'fishingcheat');
    skillselector.childNodes[5].setAttribute('onclick', 'cheatSkill(1);');
    skillselector.childNodes[7].setAttribute('id', 'firemakingcheat');
    skillselector.childNodes[7].setAttribute('onclick', 'cheatSkill(2);');
    skillselector.childNodes[9].setAttribute('id', 'cookingcheat');
    skillselector.childNodes[9].setAttribute('onclick', 'cheatSkill(3);');
    skillselector.childNodes[11].setAttribute('id', 'minininingcheat');
    skillselector.childNodes[11].setAttribute('onclick', 'cheatSkill(4);');
    skillselector.childNodes[13].setAttribute('id', 'smithingcheat');
    skillselector.childNodes[13].setAttribute('onclick', 'cheatSkill(5);');
    skillselector.childNodes[15].setAttribute('id', 'thievingcheat');
    skillselector.childNodes[15].setAttribute('onclick', 'cheatSkill(10);');
    skillselector.childNodes[17].setAttribute('id', 'farmingcheat');
    skillselector.childNodes[17].setAttribute('onclick', 'cheatSkill(11);');
    skillselector.childNodes[19].setAttribute('id', 'fletchingcheat');
    skillselector.childNodes[19].setAttribute('onclick', 'cheatSkill(13);');
    skillselector.childNodes[21].setAttribute('id', 'craftingcheat');
    skillselector.childNodes[21].setAttribute('onclick', 'cheatSkill(14);');
    skillselector.childNodes[23].setAttribute('id', 'runecraftingcheat');
    skillselector.childNodes[23].setAttribute('onclick', 'cheatSkill(15);');
    const cheatbutton1 = combatbutton.cloneNode(true);
    skillselector.appendChild(cheatbutton1);
    const cheatbutton2 = combatbutton.cloneNode(true);
    skillselector.appendChild(cheatbutton2);
    const cheatbutton3 = combatbutton.cloneNode(true);
    skillselector.appendChild(cheatbutton3);
    const cheatbutton4 = combatbutton.cloneNode(true);
    skillselector.appendChild(cheatbutton4);
    const cheatbutton5 = combatbutton.cloneNode(true);
    skillselector.appendChild(cheatbutton5);
    cheatbutton1.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/combat/attack.svg';
    cheatbutton2.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/combat/strength.svg';
    cheatbutton3.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/combat/defence.svg';
    cheatbutton4.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/combat/hitpoints.svg';
    cheatbutton5.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/ranged/ranged.svg';
    cheatbutton1.setAttribute('onclick', 'cheatSkill(6);');
    cheatbutton1.setAttribute('id', 'attackcheat');
    cheatbutton2.setAttribute('onclick', 'cheatSkill(7);');
    cheatbutton2.setAttribute('id', 'strengthcheat');
    cheatbutton3.setAttribute('onclick', 'cheatSkill(8);');
    cheatbutton3.setAttribute('id', 'defencecheat');
    cheatbutton4.setAttribute('onclick', 'cheatSkill(9);');
    cheatbutton4.setAttribute('id', 'hitpointscheat');
    cheatbutton5.setAttribute('onclick', 'cheatSkill(12);');
    cheatbutton5.setAttribute('id', 'rangedcheat'); 
    cheatmenu.childNodes[15].childNodes[1].childNodes[1].textContent = 'Level Up Once:';
    cheatmenu.childNodes[15].childNodes[3].childNodes[3].remove();
    cheatmenu.childNodes[15].childNodes[3].childNodes[1].setAttribute('id', 'levelupbutton');
    cheatmenu.childNodes[15].childNodes[3].childNodes[1].setAttribute('onclick', 'levelUpCheat();');
    cheatmenu.childNodes[15].childNodes[3].childNodes[1].textContent = 'Level up my selected skill!';
    cheatmenu.childNodes[17].childNodes[1].childNodes[1].textContent = 'Gimme Gold!';
    const textinput = document.getElementById('username-change-form');
    const gpinput = textinput.cloneNode(true);
    cheatmenu.childNodes[17].childNodes[3].childNodes[1].setAttribute('data-action', '');
    cheatmenu.childNodes[17].childNodes[3].childNodes[1].textContent = 'Give me this much gold:';
    cheatmenu.childNodes[17].childNodes[3].childNodes[1].setAttribute('onclick', 'giveGPcheat();');
    cheatmenu.childNodes[17].childNodes[3].appendChild(gpinput);
    gpinput.setAttribute('id', 'gpinputform');
    gpinput.childNodes[1].remove();
    gpinput.childNodes[1].remove();
    gpinput.childNodes[1].setAttribute('placeholder', 'Numbers only, no decimals or commas etc. Careful, you can go negative.');
    gpinput.childNodes[1].setAttribute('data-kpxc-id', 'gpadd');
    gpinput.childNodes[1].setAttribute('id', 'gpinput');
    cheatmenu.childNodes[19].remove();
    cheatmenu.childNodes[24].textContent = 'Coming Soon: Loot Picker UI, Mastery Hacker, Infinite Username Changer, and more.';
    cheatmenu.childNodes[26].hidden = true;
    cheatmenu.childNodes[28].hidden = true;
    
    //below is the lynchpin of the extension: injecting javascript functions into the body of the website so as to access the page scripts using code inside the content script
    //everything in the addxpcheatscript string is injected into the html page as javascript to be called by any element in the page, effectively adding custom functions to the game that can access regular functions. the buttons created above call injected functions that call page script functions.
    
//start of injected script
    var injectedscript = ' \
    function borderOn() { \
    document.body.style.border = "5px solid red"; \
} \
    function borderOff() { \
    document.body.style.border = "0px"; \
} \
    var skillPick; \
    function cheatSkill(x) { \
    skillPick = x; \
} \
    function levelUpCheat() { \
    addXP(skillPick, exp.level_to_xp(skillLevel[skillPick]+1) +1 - skillXP[skillPick]); \
    updateLevelProgress(skillPick); \
    updateSkillWindow(skillPick); \
} \
    function giveGPcheat() { \
    var gpaddnum = Number(document.getElementById(\'gpinput\').value); \
    if (!isNaN(gpaddnum)) { \
    var coinsToDrop = gpaddnum; gp += coinsToDrop; updateGP(); \
    gpNotify(coinsToDrop); \
    } \
} \
    function masterycheat() { \
    var masteryadd = prompt("What item would you like to add mastery XP to?", "Normal_Logs"); \
    var masteryamtadd = prompt("How many XP?", "10000"); \
    miningOreMastery[miningData[masteryadd].masteryID].masteryXP += Number(masteryamtadd); \
} \
    function lootcheat() { \
    var lootidask = prompt("What loot do you want? Use underscores for spaces, type the name that would show up in the bank item selection tooltip.", "Normal_Logs"); \
    var lootamtask = prompt("How many? You can be clever and try negative values, but don\'t cry to me when your game breaks!", "1000"); \
    if (!isNaN(lootamtask)) { \
    collectLoot(-1,CONSTANTS.item[lootidask],Number(lootamtask)); \
    } \
} \
    var autocombat; \
    var autocombatloop; \
    function autocombatfunc() { \
    var hp = Number(document.getElementById("combat-player-hitpoints-current").textContent); \
    var hpfood = items[equippedFood[currentCombatFood].itemID].healsFor; \
    var hpmax = Number(document.getElementById("combat-player-hitpoints-max").textContent); \
    if (hp < hpmax-hpfood) { \
        eatFood(); \
    } \
    var lootbutton = document.getElementById("loot-0"); \
    if (lootbutton != null) { \
        lootbutton.click(); \
    } \
} \
    function toggleautocombat() { \
    if (autocombat) { \
        autocombat = false; \
        clearInterval(autocombatloop); \
        alert("Auto combat is terminated. You\'re in the danger zone now, baby."); \
    } \
    else { \
        autocombatloop = setInterval(autocombatfunc, 500); \
        autocombat = true; \
        alert("Auto combat is now running. This will auto-eat every half-second as well as pick up any loot that was dropped automatically. To cancel, hit the auto-combat button again."); \
    } \
} \
    var menuOn; \
    function openCheatMenu() { \
    if(menuOn) { \
    $("#cheat-container").attr("class", "content d-none"); \
    menuOn = false; \
    } \
    else { \
    menuOn = true; \
    $(\'[data-toggle="tooltip"]\').tooltip(\'hide\'); \
	let pages = ["woodcutting", "shop", "bank", "settings", "changelog", "milestones", "statistics", "fishing", "firemaking", "cooking", "mining", "smithing", "mastery", "combat", "thieving", "farming", "fletching","crafting","runecrafting"]; \
	$("#" + pages[currentPage] + "-container").attr("class", "content d-none"); \
	$("#cheat-container").attr("class", "content"); \
	$("#header-title").text("Cheating"); \
	$("#header-icon").attr("src", "assets/media/main/logo-xmas.svg"); \
	$("#header-theme").attr("class", "content-header bg-settings"); \
	if( $(window).width() < 992) { \
		  One.layout(\'sidebar_toggle\'); \
        } \
	} \
} '
//end of injected script

        
    //this part is how the above script, contained in the addxpcheatscript object, is injected to the main page.
    var script = document.createElement('script');
    //var code = document.createTextNode('(function() {' + addxpcheatscript + '})();'); //alternate script injection, for some reason i haven't found out yet uses this (function() {... business, but the following works...obviously. not sure if this alternate is better for some reason.
    var code = document.createTextNode(injectedscript);
    script.appendChild(code);
    (document.body || document.head).appendChild(script);

    //may be unneccessary with current injection
    //exportFunction(addXPcheat, window, {defineAs:'addXPcheat'});
//there's always something you can tinker, something you can tweak, play with, get more.

//need to share content script function with page scripts
//exportFunction(changePageCheat, window, {defineAs:'changePageCheat'});
//not when injecting it all


// *** desired functions:  ***
//autocombat terminator conditions: out of food, out of arrows, out of runes. 
//loot creator gui or autofill list
//autocooker: could just unlock cook all there
//autofirer: could just unlock infinite burn there
//mastery increaser: gonna need to create a gui menu for it or something, it's ridiculous. or add a button to each style container with mastery content, and add a button there specific for each one. big project.
//set extra attacks in combat?
//unlimited name changer
//border also contains 5px monospace text saying MICE version # is running
//about button that talks about javascript hacking in browser, some of the things you can do. 
//export and import saves that are not encrypted? 
