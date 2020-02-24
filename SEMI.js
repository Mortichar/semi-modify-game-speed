// Scripting Engine for Melvor Idle v0.1 by aldousWatts on GitLab | Built for Melvor Idle alpha v0.12.2
// Currently developing on Waterfox 2020.02 KDE Plasma Edition (56.3). I'm guessing it's roughly equivalent to slightly-old firefox, probably v56.3.
// As always, use and modify at your own risk. But hey, contribute and share!
// This code is open source and shared freely under MPL/GNUv3/creative commons licenses.
    
//Injecting Script
    
    var script = document.createElement('script');
if(navigator.userAgent.match("Chrome")){
    script.src = chrome.runtime.getURL("inject.js");
} else if(navigator.userAgent.match("Firefox")){
	script.src = browser.runtime.getURL("inject.js");
}
    document.body.appendChild(script); //appending to body because that's where all the other page scripts are at. head's probably ok too

/* ~~~---~~~---~~~---~~~---~~~Notes~~~---~~~---~~~---~~~---~~~
   *** desired functions:  ***
More settings for autocombat: auto re-equip arrows? Auto only-loot bones/etc? neato.
auto Bonfire? there's a script for it out there already... implement here if not working well as independent script?
Hide SEMI menu button, like the eyeball glyphs on previous menu titles. Copy from main.js

    ~~~ From source: ~~~
display: flex; //hmmmmmmmmmmm. seems like a very versatile display mode, automatically sections things.

*/

// //*%*%*%*%*%*%*%* GUI Manipulation *%*%*%*%*%*%*%*%*  No jquery here, since it's an extension content script.

//Sidebar = navbar = navigator definition
const navbar = document.getElementsByClassName("nav-main")[0]; //defines the nav list itself as navbar
const navbut = document.getElementsByClassName("nav-main-item")[0]; // //gives us the shop button to reassemble.
const navbutDeMoney = navbut.cloneNode(true); // //cloning button to have a template without money icon/text in the button
navbutDeMoney.childNodes[1].childNodes[4].remove(); //take away money img
navbutDeMoney.childNodes[1].childNodes[4].remove(); //running it twice also takes away the gp counter. nice.

/* //found a test environment header hidden in array pos 0. This will be useful for showing cheating. 
const testCheatHeader = document.getElementsByClassName("nav-main-heading")[0];
testCheatHeader.textContent = "Cheat Environment: MICEv0.3"; //change text content from Test Environment -> Cheat "" +MICE
testCheatHeader.className = "nav-main-heading text-uppercase text-danger"; //makes visible, deletes d-none from class
*/

const clnheading = document.getElementsByClassName("nav-main-heading")[1].cloneNode(true); // //in MIv0.12.2 pulls up the main nav version header. used to use two lines, used to be heading then clnheading
navbar.appendChild(clnheading); 
clnheading.style = "font-size: 12pt; color: gold;";
clnheading.childNodes[0].textContent = " SEMI v0.1";
clnheading.title = "Scripting Engine for Melvor Idle";

//Creating Buttons
const btnTemplate = document.createElement('button');
btnTemplate.id = "btnTemplate";
btnTemplate.className = "btn btn-outline-primary"; //'empty' button/ non-highlighted
btnTemplate.type = 'button'; //you can add textcontent to make a regular non-image button
const btnImgTemplate = btnTemplate.cloneNode(true); //making image button template
btnImgTemplate.id = "btnImgTemplate";
const btnImg = document.createElement('img'); //img element
if(navigator.userAgent.match("Chrome")){
    btnImg.src = chrome.runtime.getURL("icons/border-48.png");
} else if(navigator.userAgent.match("Firefox")){
	btnImg.src = browser.runtime.getURL("icons/border-48.png");
} //SEMI: leaving uncommented to allow jquery to call this url. Changed to accomodate for chrome.
btnImg.height = 32;
btnImg.width = 32;
btnImg.id = "iconImg";
btnImgTemplate.appendChild(btnImg);

clnheading.insertBefore(btnImg, clnheading.childNodes[0]);

//AutoCombat Nav Buttons (+AutoSlayer attaches before this button)
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

navbar.appendChild(document.createElement('hr'));

const semiInfoNavBut = navbutDeMoney.cloneNode(true);
semiInfoNavBut.childNodes[1].id = "semiInfoNavBut";
semiInfoNavBut.childNodes[1].setAttribute('href', 'javascript:semiInfo();');
semiInfoNavBut.childNodes[1].childNodes[3].textContent = "Show SEMI Info";
semiInfoNavBut.childNodes[1].childNodes[1].src = document.getElementById('iconImg').src;
navbar.appendChild(semiInfoNavBut);
// //End of Nav Edits***************************************************
    
// //Modifying Cooking Page to have an Always-On Cook All button
const alwayscookallbut = document.getElementById('cook-button-qty-all').cloneNode(true);
document.getElementById('cooking-container').getElementsByClassName('block-content')[1].appendChild(alwayscookallbut);
alwayscookallbut.className = "btn btn-warning mb-1"; //makes it look ready for clickin'
alwayscookallbut.removeAttribute('disabled'); //enables button permanently
alwayscookallbut.textContent = 'Cook All (Permanently Unlocked by SEMI)';
alwayscookallbut.id = 'alwayscookallbut';
alwayscookallbut.style = 'background-color: red; width: 100%;';

//And everything else is probably easiest with jquery in inject.js. Whee!
