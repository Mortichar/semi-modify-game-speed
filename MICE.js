// Melvor Idle Cheat Engine v0.3 by aldousWatts on GitLab | Built for Melvor Idle alpha v0.12.2
// Currently developing on Waterfox 2020.02 KDE Plasma Edition (56.3). I'm guessing it's roughly equivalent to slightly-old firefox, probably v56.3.
// Hacking Melvor Idle for dummies! And learning/relearning Javascript along the way
// As always, use and modify at your own risk. But hey, contribute and share!
// This code is open source and shared freely under MPL/GNUv3/creative commons licenses.
// I have decided that farming isn't terrible after all.
// //2-8-20: working on MI 0.11.2. Double comments are from this major overhaul

// //*%*%*%*%*%*%*%* Begin GUI Manipulation *%*%*%*%*%*%*%*%*

document.getElementsByClassName('content-side content-side-full')[0].style.border = "2px solid red"; //nav border

//Sidebar = navbar = navigator definition
const navbar = document.getElementsByClassName("nav-main")[0]; //defines the nav list itself as navbar
const navbut = document.getElementsByClassName("nav-main-item")[0]; // //gives us the shop button to reassemble.
const navbutDeMoney = navbut.cloneNode(true); // //cloning button to have a template without money icon/text in the button
navbutDeMoney.childNodes[1].childNodes[4].remove(); //take away money img
navbutDeMoney.childNodes[1].childNodes[4].remove(); //running it twice also takes away the gp counter. nice.

// //found a test environment header hidden in array pos 0. This will be useful for showing cheating. 
const testCheatHeader = document.getElementsByClassName("nav-main-heading")[0];
testCheatHeader.textContent = "Cheat Environment: MICEv0.3"; //change text content from Test Environment -> Cheat "" +MICE
testCheatHeader.className = "nav-main-heading text-uppercase text-danger"; //makes visible, deletes d-none from class

const clnheading = document.getElementsByClassName("nav-main-heading")[1].cloneNode(true); // //in MIv0.12.2 pulls up the main nav version header. used to use two lines, used to be heading then clnheading
navbar.appendChild(clnheading); // append title and change it
clnheading.childNodes[0].textContent = "Cheat Tools";
clnheading.style = "font-size: 12pt; color: cyan;";
clnheading.title = "Ooooh, we cheatin' now!";

// //Creating cheat menu button  
const cheatMenuNavBut = navbutDeMoney.cloneNode(true);
navbar.appendChild(cheatMenuNavBut);
cheatMenuNavBut.childNodes[1].setAttribute('href', 'javascript:openCheatMenu();'); // //change nav button function, calls injected function
cheatMenuNavBut.childNodes[1].childNodes[3].textContent = 'Cheat Menu'; //change nav button text
cheatMenuNavBut.childNodes[1].childNodes[3].style.color = 'cyan'; //change nav button text color
cheatMenuNavBut.childNodes[1].childNodes[1].src = browser.runtime.getURL("icons/border-48.png");// //omfg worked perfectly. fixed the json issue and bam. goddamn. excellent.
cheatMenuNavBut.childNodes[1].childNodes[1].id = "MICEicon"; //to call the MICE icon URL from Jquery in injected scripts: $("#MICEicon").src()

// //Gold giver nav button
const goldNavBut = navbut.cloneNode(true);
navbar.appendChild(goldNavBut);
goldNavBut.childNodes[1].setAttribute('href', 'javascript:giveGPcheatNav();');
goldNavBut.childNodes[1].childNodes[3].textContent = 'Get GP';
goldNavBut.childNodes[1].childNodes[5].id = "nav-current-gp2";

// //Slayer Coins giver nav button
const scNavBut = navbut.cloneNode(true);
navbar.appendChild(scNavBut);
scNavBut.childNodes[1].setAttribute('href', 'javascript:giveSCcheatNav();');
scNavBut.childNodes[1].childNodes[1].src = "assets/media/main/slayer_coins.svg";
scNavBut.childNodes[1].childNodes[3].textContent = 'Get SC';
scNavBut.childNodes[1].childNodes[4].src = "assets/media/main/slayer_coins.svg";
scNavBut.childNodes[1].childNodes[5].id = "nav-current-sc";

//Loot Cheat by Name btn
const lootcheatNavBut = navbutDeMoney.cloneNode(true);
navbar.appendChild(lootcheatNavBut);
lootcheatNavBut.childNodes[1].setAttribute('href', 'javascript:lootcheat();');
lootcheatNavBut.childNodes[1].childNodes[3].textContent = 'Get Loot by Name';
lootcheatNavBut.childNodes[1].childNodes[1].src = "assets/media/bank/elite_chest.svg"; //changes button img

//Loot Cheat by ID btn
const lootcheatIDNavBut = navbutDeMoney.cloneNode(true);
navbar.appendChild(lootcheatIDNavBut);
lootcheatIDNavBut.childNodes[1].setAttribute('href', 'javascript:lootcheatID();');
lootcheatIDNavBut.childNodes[1].childNodes[3].textContent = 'Get Loot by ID';
lootcheatIDNavBut.childNodes[1].childNodes[1].src = "assets/media/bank/elite_chest.svg"; //changes button img
//navbar.appendChild(document.createElement('hr')); //horiz line after the big cheaties. header seems good enough
const scriptHeader = document.createElement('li');
scriptHeader.className = "nav-main-heading";
scriptHeader.textContent = "Scripts for Automation";
navbar.appendChild(scriptHeader);

// //AutoCombat (+AutoSlayer attaches before this button)
const autocombatNavBut = navbutDeMoney.cloneNode(true);
autocombatNavBut.title = "AutoCombat will automatically continue combat until you're either out of food in your equipped food slot, out of ranged ammo, or out of runes if using magic. It will safely exit combat if any of those conditions occur. Options include automatically looting and eating, shown below in the sidebar. Combines well with AutoSlayer.";
navbar.appendChild(autocombatNavBut);
const autocombatStatus = document.createElement('small');
autocombatStatus.id = "autocombatStatus";
autocombatNavBut.childNodes[1].appendChild(autocombatStatus);
autocombatStatus.textContent = "Disabled"; //inspired by Bubbalova
autocombatNavBut.childNodes[1].setAttribute('href', 'javascript:toggleautocombat();');
autocombatNavBut.childNodes[1].childNodes[3].textContent = 'AutoCombat';
autocombatNavBut.childNodes[1].childNodes[1].src = "assets/media/skills/combat/combat.svg";
autocombatNavBut.childNodes[1].id = 'autocombatNavBut';
autocombatNavBut.childNodes[1].childNodes[1].id = "autocombatImg";

//AutoCombat Options
const autoCombatOptNavHeader = document.createElement('li');
autoCombatOptNavHeader.className = "nav-main-heading";
autoCombatOptNavHeader.textContent = "AutoCombat Options";
navbar.appendChild(autoCombatOptNavHeader);

const autoEatNavBut = navbutDeMoney.cloneNode(true);
autoEatNavBut.title = "AutoCombat will, by default, eat your food for you if your HP is less than what your food would heal. This option turns that off, if you'd rather rely on the default in-game Auto Eat, or just don't want it. Be warned that even the tier III in-game Auto Eat will leave you vulnerable to one-hits by very powerful mobs when at just above 40% HP.";
navbar.appendChild(autoEatNavBut);
const autoEatStatus = document.createElement('small');
autoEatStatus.id = "autoEatStatus";
autoEatNavBut.childNodes[1].appendChild(autoEatStatus);
autoEatStatus.textContent = "Enabled"; //inspired by Bubbalova
autoEatNavBut.childNodes[1].setAttribute('href', 'javascript:toggleAutoEat();');
autoEatNavBut.childNodes[1].childNodes[3].textContent = 'AC Auto Eat';
autoEatNavBut.childNodes[1].childNodes[1].src = "assets/media/shop/autoeat.svg";
autoEatNavBut.childNodes[1].id = 'autoEatNavBut';
autoEatNavBut.childNodes[1].childNodes[1].id = "autoEatImg";

const autoLootNavBut = navbutDeMoney.cloneNode(true);
autoLootNavBut.title = "Tired of that trash loot while your combat robot does its thing? Try the AutoCombat Auto Loot Option today!";
navbar.appendChild(autoLootNavBut);
const autoLootStatus = document.createElement('small');
autoLootStatus.id = "autoLootStatus";
autoLootNavBut.childNodes[1].appendChild(autoLootStatus);
autoLootStatus.textContent = "Enabled"; //inspired by Bubbalova
autoLootNavBut.childNodes[1].setAttribute('href', 'javascript:toggleAutoLoot();');
autoLootNavBut.childNodes[1].childNodes[3].textContent = 'AC Auto Loot';
autoLootNavBut.childNodes[1].childNodes[1].src = "assets/media/main/bank_header.svg";
autoLootNavBut.childNodes[1].id = 'autoLootNavBut';
autoLootNavBut.childNodes[1].childNodes[1].id = "autoLootImg";

// //Toggle red border nav button
navbar.appendChild(document.createElement('hr'));
const borderNavBut = navbutDeMoney.cloneNode(true);
navbar.appendChild(borderNavBut);
borderNavBut.childNodes[1].setAttribute('href', 'javascript:toggleborder();');
borderNavBut.childNodes[1].childNodes[3].textContent = 'Toggle Red Border';
borderNavBut.childNodes[1].childNodes[1].src = "assets/media/skills/combat/ship.svg";

// //End of Nav Edits***************************************************
    
// *** *** *** *** *** ***Creating the Cheat Menu*** *** *** *** *** ***
//MICEv0.2.2: rewriting how we create the cheat menu. Delete all internal elements, then add custom ones. No more editing cloned settings menu items.
const mainpage = document.getElementById('main-container'); //define main page container
const settingspagecln = document.getElementById('settings-container').cloneNode(true); //clone settings page, was done previously using settingpage var
mainpage.appendChild(settingspagecln); //append clone
settingspagecln.id = 'cheat-container'; //proper name for cloned page
const cheatmenu = settingspagecln.childNodes[3].childNodes[1].childNodes[1].childNodes[1]; //the actual menu in the settings/cheat page
cheatmenu.id = "cheatmenu"; //good for calling cheat menu with the injected script, which does not share env with this content script
cheatmenu.style.border = "2px solid cyan";//adds a uniquely distinct border to the cheat menu
cheatmenu.style.borderRadius = "4px";//does this work?
while (cheatmenu.firstChild) { cheatmenu.removeChild(cheatmenu.firstChild); } //COMPLETELY CLEAN OUT THE CHEAT MENU.

//Creating Buttons
const btnTemplate = document.createElement('button');
btnTemplate.id = "btnTemplate";
btnTemplate.className = "btn btn-outline-primary"; //'empty' button/ non-highlighted
btnTemplate.type = 'button'; //you can add textcontent to make a regular non-image button
const btnImgTemplate = btnTemplate.cloneNode(true); //making image button template
btnImgTemplate.id = "btnImgTemplate";
const btnImg = document.createElement('img'); //img element
btnImg.src = browser.runtime.getURL("icons/border-48.png");
btnImg.height = 32;
btnImg.width = 32;
btnImgTemplate.appendChild(btnImg);

//Main Header
const cheatmenuTitle = document.createElement('h2');
cheatmenuTitle.className = "content-heading border-bottom mb-4 pb-2";
cheatmenuTitle.textContent = 'MICEv0.3 Cheat Menu!';
cheatmenuTitle.style.color = "cyan"; //makes the heading cyan
cheatmenuTitle.style.fontSize = "14pt"; //phatt
cheatmenu.appendChild(cheatmenuTitle);

//hide cheat info btn
const hideCheatInfoBtn = btnTemplate.cloneNode(true);
hideCheatInfoBtn.textContent = "Hide Info";
hideCheatInfoBtn.id = "hideCheatInfoBtn";
hideCheatInfoBtn.setAttribute('onclick', 'toggleInfo()');
cheatmenu.appendChild(hideCheatInfoBtn);

//Adding the info paragraph
const cheatmenuInfo = document.createElement('div');
cheatmenuInfo.id = "cheatmenuInfo"; //font:16px/26px monospace, monospace; 
cheatmenuInfo.style = "height: 222px; padding: 10px; width: 66%; border: 1px solid #ccc; white-space: pre-wrap; overflow: auto; color: cyan;";
cheatmenuInfo.textContent = ` *** Melvor Idle Cheat Engine v0.3 is running. Sweet!
 * The red sidebar border is a friendly reminder that MICE is running, but can be turned off.

-BEWARE, YE CHEATER!-
Use such software at your own risk! Back up ye game before modifying!
This extension may completely break the save if used wrongly. You have been warned.
Also, be careful about using Ctrl+F5 with this game, I've had it completely corrupt a save. That may or may not be the impetus for cheating. ;)

-Tips-
 * Hover over the cheat sidebar buttons to get some more info/help in the title tooltip.
 * Don't forget there are extra buttons added by MICE in the Farming, Combat, Cooking, and now Herblore pages.
 * GP/SC cheats won't run if you've entered text or negative numbers to help prevent breaking the game data. Strings and ints mix badly.
 * You should leave page alerts on because MICE uses js prompts for certain cheats at this point. (Moving to modals like GP/SC now)
 * If you're willing to open up the console (Ctrl+Shift+K) the XHP script is running, so you can run XHP([0|1],[0-19]) in the console to get a handy XP per hour utility. Ideally this information will be embedded in the UI.
 
-Thanks and More-
 * Huge thanks to Mr Frux, the developer who created this awesome game!
 * Tampermonkey can help you run simpler user scripts on Melvor. For instance, Melvor Auto Replant automates your farming for you, and works perfectly alongside MICE. You can find it here at greasyfork: https://greasyfork.org/en/scripts/394855-melvor-auto-replant
 * Thanks to Bubbalova & nysos3 for the AutoSlayer script framework (found here: https://greasyfork.org/en/scripts/396400-melvor-auto-slayer/code ) and other ideas!
 * I'll likely fork this extension into a cheat-free one for automation only, such as AutoCombat/Slayer and the cook all button, etc.
 
 Have fun! :D`;
cheatmenu.appendChild(cheatmenuInfo);

//Skill Leveler Menu container(s)
const skillCheatDiv = document.createElement('div');
skillCheatDiv.className = "row push";
const skillCheatLabelDiv = document.createElement('div');
skillCheatLabelDiv.className = "col-6 col-lg-4"; //left column
skillCheatDiv.appendChild(skillCheatLabelDiv); 
const skillselector = document.createElement('div');
skillselector.className = "col-6 col-lg-8";
skillCheatDiv.appendChild(skillselector);
const skillCheatLabel = document.createElement('p'); //is there a tool that does this for me? probably. sigh.
skillCheatLabel.className = "font-size-sm text-muted";
skillCheatLabel.textContent = "Level Up Cheat! Skill to modify:";
skillCheatLabelDiv.appendChild(skillCheatLabel);
const cheatmenuDiv = skillCheatDiv.cloneNode(true); //saving above as template

//Continuing with skill cheat div
const skillCheatHeader = cheatmenuTitle.cloneNode(true);
skillCheatHeader.textContent = "Skill Level-up Cheat";
skillCheatHeader.id = "skillCheatHeader";
skillCheatHeader.style.fontSize = "10pt";
cheatmenu.appendChild(skillCheatHeader);

skillselector.id = "skillselector";
skillCheatDiv.id = "skillCheatDiv";
cheatmenu.appendChild(skillCheatDiv); //adding to the menu

//Adding & customizing Skill Buttons=====================
const skillBut0 = btnImgTemplate.cloneNode(true);
skillBut0.id = "skillBut0"; //woodcutting
skillBut0.childNodes[0].src = "assets/media/skills/woodcutting/woodcutting.svg";
skillBut0.setAttribute('onclick', 'cheatSkill(0);');
skillselector.appendChild(skillBut0);
skillselector.append("\n \n"); //adds spacing: newline text element

const skillBut1 = btnImgTemplate.cloneNode(true);
skillBut1.id = "skillBut1"; //fishing
skillBut1.childNodes[0].src = "assets/media/skills/fishing/fishing.svg";
skillBut1.setAttribute('onclick', 'cheatSkill(1);');
skillselector.appendChild(skillBut1);
skillselector.append("\n \n");

const skillBut2 = btnImgTemplate.cloneNode(true);
skillBut2.id = "skillBut2"; //firemaking
skillBut2.childNodes[0].src = "assets/media/skills/firemaking/firemaking.svg";
skillBut2.setAttribute('onclick', 'cheatSkill(2);');
skillselector.appendChild(skillBut2);
skillselector.append("\n \n");

const skillBut3 = btnImgTemplate.cloneNode(true);
skillBut3.id = "skillBut3"; //cooking
skillBut3.childNodes[0].src = "assets/media/skills/cooking/cooking.svg";
skillBut3.setAttribute('onclick', 'cheatSkill(3);');
skillselector.appendChild(skillBut3);
skillselector.append("\n \n");

const skillBut4 = btnImgTemplate.cloneNode(true);
skillBut4.id = "skillBut4"; //mining
skillBut4.childNodes[0].src = "assets/media/skills/mining/mining.svg";
skillBut4.setAttribute('onclick', 'cheatSkill(4);');
skillselector.appendChild(skillBut4);
skillselector.append("\n \n");

const skillBut5 = btnImgTemplate.cloneNode(true);
skillBut5.id = "skillBut5"; //smithing
skillBut5.childNodes[0].src = "assets/media/skills/smithing/smithing.svg";
skillBut5.setAttribute('onclick', 'cheatSkill(5);');
skillselector.appendChild(skillBut5);
skillselector.append("\n \n");

const skillBut6 = btnImgTemplate.cloneNode(true);
skillBut6.id = "skillBut6"; //attack
skillBut6.childNodes[0].src = "assets/media/skills/combat/attack.svg";
skillBut6.setAttribute('onclick', 'cheatSkill(6);');
skillselector.appendChild(skillBut6);
skillselector.append("\n \n");

const skillBut7 = btnImgTemplate.cloneNode(true);
skillBut7.id = "skillBut7"; //strength
skillBut7.childNodes[0].src = "assets/media/skills/combat/strength.svg";
skillBut7.setAttribute('onclick', 'cheatSkill(7);');
skillselector.appendChild(skillBut7);
skillselector.append("\n \n");

const skillBut8 = btnImgTemplate.cloneNode(true);
skillBut8.id = "skillBut8"; //defense
skillBut8.childNodes[0].src = "assets/media/skills/combat/defence.svg";
skillBut8.setAttribute('onclick', 'cheatSkill(8);');
skillselector.appendChild(skillBut8);
skillselector.append("\n \n");

const skillBut9 = btnImgTemplate.cloneNode(true);
skillBut9.id = "skillBut9"; //hitpoints
skillBut9.childNodes[0].src = "assets/media/skills/combat/hitpoints.svg";
skillBut9.setAttribute('onclick', 'cheatSkill(9);');
skillselector.appendChild(skillBut9);
skillselector.append("\n \n");

const skillBut10 = btnImgTemplate.cloneNode(true);
skillBut10.id = "skillBut10"; //thieving
skillBut10.childNodes[0].src = "assets/media/skills/thieving/thieving.svg";
skillBut10.setAttribute('onclick', 'cheatSkill(10);');
skillselector.appendChild(skillBut10);
skillselector.append("\n \n");

const skillBut11 = btnImgTemplate.cloneNode(true);
skillBut11.id = "skillBut11"; //farming
skillBut11.childNodes[0].src = "assets/media/skills/farming/farming.svg";
skillBut11.setAttribute('onclick', 'cheatSkill(11);');
skillselector.appendChild(skillBut11);
skillselector.append("\n \n");

const skillBut12 = btnImgTemplate.cloneNode(true);
skillBut12.id = "skillBut12"; //ranged
skillBut12.childNodes[0].src = "assets/media/skills/ranged/ranged.svg";
skillBut12.setAttribute('onclick', 'cheatSkill(12);');
skillselector.appendChild(skillBut12);
skillselector.append("\n \n");

const skillBut13 = btnImgTemplate.cloneNode(true);
skillBut13.id = "skillBut13"; //fletching
skillBut13.childNodes[0].src = "assets/media/skills/fletching/fletching.svg";
skillBut13.setAttribute('onclick', 'cheatSkill(13);');
skillselector.appendChild(skillBut13);
skillselector.append("\n \n");

const skillBut14 = btnImgTemplate.cloneNode(true);
skillBut14.id = "skillBut14"; //crafting
skillBut14.childNodes[0].src = "assets/media/skills/crafting/crafting.svg";
skillBut14.setAttribute('onclick', 'cheatSkill(14);');
skillselector.appendChild(skillBut14);
skillselector.append("\n \n");

const skillBut15 = btnImgTemplate.cloneNode(true);
skillBut15.id = "skillBut15"; //runecrafting
skillBut15.childNodes[0].src = "assets/media/skills/runecrafting/runecrafting.svg";
skillBut15.setAttribute('onclick', 'cheatSkill(15);');
skillselector.appendChild(skillBut15);
skillselector.append("\n \n");

const skillBut16 = btnImgTemplate.cloneNode(true);
skillBut16.id = "skillBut16"; //magic
skillBut16.childNodes[0].src = "assets/media/skills/magic/magic.svg";
skillBut16.setAttribute('onclick', 'cheatSkill(16);');
skillselector.appendChild(skillBut16);
skillselector.append("\n \n");

const skillBut17 = btnImgTemplate.cloneNode(true);
skillBut17.id = "skillBut17"; //prayer
skillBut17.childNodes[0].src = "assets/media/skills/prayer/prayer.svg";
skillBut17.setAttribute('onclick', 'cheatSkill(17);');
skillselector.appendChild(skillBut17);
skillselector.append("\n \n");

const skillBut18 = btnImgTemplate.cloneNode(true);
skillBut18.id = "skillBut18"; //slayer
skillBut18.childNodes[0].src = "assets/media/skills/slayer/slayer.svg";
skillBut18.setAttribute('onclick', 'cheatSkill(18);');
skillselector.appendChild(skillBut18);
skillselector.append("\n \n");

const skillBut19 = btnImgTemplate.cloneNode(true);
skillBut19.id = "skillBut19"; //herblore
skillBut19.childNodes[0].src = "assets/media/skills/herblore/herblore.svg";
skillBut19.setAttribute('onclick', 'cheatSkill(19);');
skillselector.appendChild(skillBut19);
skillselector.append("\n \n");
//========================End Skill Buttons

//Level-up Button
const levelBtnDiv = cheatmenuDiv.cloneNode(true);
cheatmenu.appendChild(levelBtnDiv);
levelBtnDiv.getElementsByTagName('p')[0].textContent = "Level up once:";
const levelBtn = btnTemplate.cloneNode(true);
levelBtn.textContent = "Level Up Selected Skill Once";
levelBtn.setAttribute('onclick', 'levelUpCheat();');
levelBtnDiv.childNodes[1].appendChild(levelBtn);
levelBtn.id = "levelupbutton";

//Unlimited Name Changes
const nameChngTitle = cheatmenuTitle.cloneNode(true);
nameChngTitle.textContent = "Unlimited Name Changes";
nameChngTitle.style.fontSize = "10pt";
cheatmenu.appendChild(nameChngTitle);

const nameChngDiv = cheatmenuDiv.cloneNode(true);
cheatmenu.appendChild(nameChngDiv);
nameChngDiv.getElementsByTagName('p')[0].textContent = "";
const textinput = document.getElementById('username-change-form'); //was gonna combine into one but this could be useful to clone for the infinite name change.
const unameformDiv = textinput.cloneNode(true); //child node 1 is label, child node 3 is form-control
unameformDiv.id = "unameform";
//unameformDiv.childNodes[1].textContent = ""; //?
unameformDiv.childNodes[3].id = "unameinput";
unameformDiv.childNodes[3].setAttribute('placeholder', "Turd Ferguson");
unameformDiv.childNodes[3].setAttribute('data-kpxc-id', 'unameinfchange');
nameChngDiv.childNodes[1].appendChild(unameformDiv);

const nameChngBut = btnTemplate.cloneNode(true);
nameChngBut.id = "nameChngBut";
nameChngBut.textContent = "Change my name now";
nameChngBut.setAttribute('onclick', 'changeNameInf();');
nameChngDiv.childNodes[1].appendChild(nameChngBut);

// //Item List Scroll Box
const listheader = cheatmenuTitle.cloneNode(true); //heading first
listheader.textContent = 'The Button Below Shows THE List of All Loot Items';
listheader.style = "color: cyan; font-size: 10pt;";
listheader.id = 'listheader';
cheatmenu.appendChild(listheader);

const lootListBut = btnImgTemplate.cloneNode(true);
lootListBut.style.marginBottom = "20px";
lootListBut.childNodes[0].src = 'assets/media/main/bank_header.svg';
lootListBut.setAttribute('onclick', 'showItems();');
lootListBut.setAttribute('id', 'showItemsBut');

cheatmenu.appendChild(lootListBut);

// //End of Cheat Menu -----------------------------------------------------------------------------------------

// //Modifying Cooking Page to have an Always-On Cook All button
const alwayscookallbut = document.getElementById('cook-button-qty-all').cloneNode(true);
document.getElementById('cooking-container').getElementsByClassName('block-content')[1].appendChild(alwayscookallbut);
alwayscookallbut.className = "btn btn-warning mb-1"; //makes it look ready for clickin'
alwayscookallbut.removeAttribute('disabled'); //enables button permanently
alwayscookallbut.textContent = 'Cook All (MICE Permanently Unlocked Cook All Button of Extreme Convenience)';
alwayscookallbut.id = 'alwayscookallbut';
alwayscookallbut.style = 'background-color: red;';

//Modifying farming page to have instant-grow bone meal button
const bonemealBtn0 = document.getElementsByClassName('block block-content block-rounded block-link-pop border-top border-farming border-4x')[0].parentNode.cloneNode(true);
bonemealBtn0.style.float = "left";
bonemealBtn0.childNodes[1].childNodes[1].childNodes[1].childNodes[1].src = "assets/media/bank/bones.svg";
const farmingPg = document.getElementById('farming-container'); //no jquery in this content script
const bonemealBtn1 = bonemealBtn0.cloneNode(true);
const bonemealBtn2 = bonemealBtn0.cloneNode(true);
farmingPg.appendChild(bonemealBtn0);
farmingPg.appendChild(bonemealBtn1);
farmingPg.appendChild(bonemealBtn2);
bonemealBtn0.childNodes[1].href = "javascript: instantFarm(0)";
bonemealBtn1.childNodes[1].href = "javascript: instantFarm(1)"; 
bonemealBtn2.childNodes[1].href = "javascript: instantFarm(2)";
bonemealBtn0.childNodes[1].childNodes[1].childNodes[3].childNodes[1].textContent = "Grow Allotments Now";
bonemealBtn1.childNodes[1].childNodes[1].childNodes[3].childNodes[1].textContent = "Grow Herbs Now";
bonemealBtn2.childNodes[1].childNodes[1].childNodes[3].childNodes[1].textContent = "Grow Trees Now";
bonemealBtn0.childNodes[1].childNodes[1].childNodes[3].childNodes[3].textContent = "Apply MICE bonemeal (instantly grows plants) to your Allotments.";
bonemealBtn1.childNodes[1].childNodes[1].childNodes[3].childNodes[3].textContent = "Apply MICE bonemeal (instantly grows plants) to your Herbs.";
bonemealBtn2.childNodes[1].childNodes[1].childNodes[3].childNodes[3].textContent = "Apply MICE bonemeal (instantly grows plants) to your Trees.";

//Modifying combat page to have an extra unlimited instant attack button
const extraAtkBtn = document.getElementById('combat-attack-style-0').cloneNode(true);
extraAtkBtn.id = "extraAtkBtn";
document.getElementById('combat-attack-style-0').parentNode.appendChild(extraAtkBtn);
extraAtkBtn.className = "btn btn-outline-secondary";
extraAtkBtn.style.backgroundColor = "orange";
extraAtkBtn.setAttribute('onclick', 'attack(0)');
extraAtkBtn.childNodes[1].src = "assets/media/skills/slayer/slayer.svg";
extraAtkBtn.childNodes[3].textContent = "MICE Extra Dirty Instant-Attack Button";
/*//and an enemy attack button lol. too big though, gonna comment out for now, maybe add later.
const masoAtkBtn = document.getElementById('combat-attack-style-0').cloneNode(true);
masoAtkBtn.id = "masoAtkBtn";
document.getElementById('combat-enemy-options').parentNode.appendChild(masoAtkBtn);
masoAtkBtn.className = "btn btn-outline-secondary";
masoAtkBtn.style.backgroundColor = "red";
masoAtkBtn.setAttribute('onclick', 'attack(1)');
masoAtkBtn.childNodes[1].src = "assets/media/skills/slayer/slayer.svg";
masoAtkBtn.childNodes[3].textContent = 'MICE "Hurt Me Plenty" Enemy Instant-Attack Button';
masoAtkBtn.title = "You gotta give them a chance, too!";
*/

//Unlocking the banner ad setting
document.getElementById('setting-ad-options-disabled').textContent = "MICE: This setting can be unlocked without needing a skill at 99. Just click this text. Support the developer by leaving ads on.";
document.getElementById('setting-ad-options-disabled').setAttribute('onclick', 'unlockAdSet();');

// //END OF GUI. ***********************************************************************************************

	//below is the lynchpin of the extension: injecting javascript functions into the body of the website. this allows access to the page scripts using code inside the external content script within the extension.
    
////SCRIPT INJECTION -------------------------------------------------------------------------------------------
    
    var script = document.createElement('script');
    script.src = browser.runtime.getURL("inject.js");
    document.body.appendChild(script); //appending to body because that's where all the other page scripts are at. head's probably ok too

// //And that's MICE!

/*~~~---~~~---~~~---~~~---~~~Notes~~~---~~~---~~~---~~~---~~~

there's always something you can tinker, something you can tweak, play with, get more.

 *** desired functions:  ***
 More settings for autocombat: auto re-equip arrows? Auto only-loot bones/etc? neato.
export and import saves that are not encrypted? (but why, maybe you prefer to edit, and then import those)
auto Bonfire? there's a script for it out there already.
mastery increaser: gonna need to create a gui menu for it or something, it's ridiculous. or add a button to each style container with mastery content, and add a button there specific for each one. big project... but, now that mastery tokens are a thing, who cares? ezpz, just give yourself mastery tokens, win win win win win.
loot creator gui or autofill list; would love to have a copied bank page that's just populated with items, and you select them. hmm... god this could be tedious.
*/
