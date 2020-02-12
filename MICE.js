// Melvor Idle Cheat Engine v0.1.1dev by aldousWatts on GitLab
// Currently developing on Waterfox 2019.12 KDE version. I'm guessing it's roughly equivalent to slightly-old firefox. Come to think of it, I have Chromium KDE too...
// Hacking Melvor Idle for dummies! And learning/relearning Javascript along the way
// As always, use and modify at your own risk. But hey, contribute and share!
// This code is open source and shared freely under MPL/GNUv3/creative commons licenses.
// //What version of Melvor was it in MICEv0.1.1? 0.8? something like that. 
// //2-8-20: working on MI 0.11.2. Double comments are from this major overhaul
// //sniff... sniff... is there a memory leak 'round here?

//document.body.style.border = "5px solid red"; //buggy
document.getElementsByClassName('content-side content-side-full')[0].style.border = "2px solid red"; //nav border
// commenting out alert for dev purposes... ugh so tedious to reload the cloud shit now... window.onload retriggers it somehow? no need for onload.
alert('Melvor Idle Cheat Engine v0.2 is running. Sweet! \n \
The red sidebar border is a friendly reminder that MICE is running, but can be turned off. \n \
Developed in Dark Mode, which looks great and saves your eyes! Check normal settings menu for that. \n \n \
BEWARE, YE CHEATER! \n \
Use such software at your own risk! Back up ye game before modifying! \n \
This extension may completely break the save if used wrongly. You have been warned. \n \
Also, be careful about using Ctrl+F5 with this game, I\'ve had it completely corrupt a save. \n \
That may or may not be the impetus for cheating. ;) \n \n \
You should leave page alerts on because MICE uses js prompts for certain cheats at this point. \n \
Check the bottom of the sidebar for cheats. Have fun. :)' );

// //also for dev, going to kill this modal cloud loading shit. fukoff i already wait for the loading screen to finish
//document.getElementById('modal-cloud-loading').remove(); //works like a cherm. sometimes i think this does weird things where a gray overlay is on top of the entire game and you can't load. gotta close tab and reopen.

// //*%*%*%*%*%*%*%* Begin GUI Manipulation *%*%*%*%*%*%*%*%*
// adding nav bar entries for hacked stuff
const navbar = document.getElementsByClassName("nav-main")[0]; // create element for the nav list itself, navbar
const navbut = document.getElementsByClassName("nav-main-item")[0]; // //gives us the shop button to reassemble.
const navbutDeMoney = navbut.cloneNode(true); // //cloning button to have a template without money icon/text in the button
navbutDeMoney.childNodes[1].childNodes[4].remove(); //take away money img
navbutDeMoney.childNodes[1].childNodes[4].remove(); //running it twice also takes away the gp counter. nice.
// //found a test environment header hidden in array pos 0. This will be useful for showing cheating. 
const testCheatHeader = document.getElementsByClassName("nav-main-heading")[0];
testCheatHeader.textContent = "Cheat Environment: MICEv0.2"; //change text content from Test Environment -> Cheat "" +MICE
testCheatHeader.className = "nav-main-heading text-uppercase text-danger"; //makes visible, deletes d-none from class

const clnheading = document.getElementsByClassName("nav-main-heading")[1].cloneNode(true); // //in MIv0.11.2 pulls up the main nav version header. used to use two lines, used to be heading then clnheading
navbar.appendChild(clnheading); // append title and change it
clnheading.childNodes[0].textContent = "Cheat Tools";
clnheading.style = "font-size: 12pt; color: cyan;";
clnheading.title = "Ooooh, we cheatin' now!";

// //creating cheat menu button  
const cheatMenuNavBut = navbutDeMoney.cloneNode(true);
navbar.appendChild(cheatMenuNavBut);
cheatMenuNavBut.childNodes[1].setAttribute('href', 'javascript:openCheatMenu();'); // //change nav button function, calls injected function
cheatMenuNavBut.childNodes[1].childNodes[3].textContent = 'Cheat Menu'; //change nav button text
cheatMenuNavBut.childNodes[1].childNodes[3].style.color = 'cyan'; //change nav button text color
cheatMenuNavBut.childNodes[1].childNodes[1].src = browser.runtime.getURL("icons/border-48.png"); // //omfg worked perfectly. fixed the json issue and bam. goddamn. excellent.

// //Gold giver nav button
const goldNavBut = navbut.cloneNode(true);
navbar.appendChild(goldNavBut);
goldNavBut.childNodes[1].setAttribute('href', 'javascript:giveGPcheatNav();');
goldNavBut.childNodes[1].childNodes[3].textContent = 'Get GP';
goldNavBut.childNodes[1].childNodes[5].id = "nav-current-gp2";

// //creating loot cheat nav button... probably soon defunct    //This one is begging for a UI
const lootcheatNavBut = navbutDeMoney.cloneNode(true);
navbar.appendChild(lootcheatNavBut);
lootcheatNavBut.childNodes[1].setAttribute('href', 'javascript:lootcheat();');
lootcheatNavBut.childNodes[1].childNodes[3].textContent = 'Get Loot by Name';
lootcheatNavBut.childNodes[1].childNodes[1].src = "assets/media/main/bank_header.svg"; //changes button img

// //creating loot cheat nav button... probably soon defunct    //This one is begging for a UI
const lootcheatIDNavBut = navbutDeMoney.cloneNode(true);
navbar.appendChild(lootcheatIDNavBut);
lootcheatIDNavBut.childNodes[1].setAttribute('href', 'javascript:lootcheatID();');
lootcheatIDNavBut.childNodes[1].childNodes[3].textContent = 'Get Loot by ID';
lootcheatIDNavBut.childNodes[1].childNodes[1].src = "assets/media/main/bank_header.svg"; //changes button img

// //AutoCombat (new ideas for on/off indicators... pic changes n shit)
const autocombatNavBut = navbutDeMoney.cloneNode(true);
navbar.appendChild(autocombatNavBut);
autocombatNavBut.childNodes[1].setAttribute('href', 'javascript:toggleautocombat();');
autocombatNavBut.childNodes[1].childNodes[3].textContent = 'Toggle Auto Combat';
autocombatNavBut.childNodes[1].childNodes[1].src = "assets/media/skills/combat/combat.svg";
autocombatNavBut.childNodes[1].id = 'autocombatNavBut';
autocombatNavBut.childNodes[1].childNodes[1].id = "autocombatImg";

// //Toggle red border nav button
const borderNavBut = navbutDeMoney.cloneNode(true);
navbar.appendChild(borderNavBut);
borderNavBut.childNodes[1].setAttribute('href', 'javascript:toggleborder();');
borderNavBut.childNodes[1].childNodes[3].textContent = 'Toggle Red Border';
borderNavBut.childNodes[1].childNodes[1].src = "assets/media/skills/combat/ship.svg";

// //End of Nav Edits***************************************************
    
// *** *** *** *** *** ***Creating the Cheat Menu*** *** *** *** *** ***
// //There was an extra radio button option added in or before v0.11.2 it seems, threw off child node array values for the settings page clone.
const mainpage = document.getElementById('main-container'); //define main page container
const settingspagecln = document.getElementById('settings-container').cloneNode(true); //clone settings page, was done previously using settingpage var
mainpage.appendChild(settingspagecln); //append clone
settingspagecln.id = 'cheat-container'; //proper name for cloned page
const cheatmenu = settingspagecln.childNodes[3].childNodes[1].childNodes[1].childNodes[1]; //the actual menu in the settings/cheat page
cheatmenu.id = "cheatmenu"; //good for calling cheat menu with the injected script, which does not share env with this content script
cheatmenu.style.border = "4px solid cyan"; //adds a uniquely distinct border to the cheat menu

// //hiding radio buttons and the title for them
cheatmenu.childNodes[3].hidden = true; //title. child nodes 0-2 are blank text space, a comment, and more blank respectively.
cheatmenu.childNodes[4].hidden = true; //i think this is unneeded blank text space, nope but it didnt break anything
cheatmenu.childNodes[5].hidden = true; //buttons

// //First Cheat Menu Heading
cheatmenu.childNodes[13].textContent = 'MICEv0.2 Cheat Menu!'; //modifies second header
cheatmenu.childNodes[13].style.color = "cyan"; //makes the first heading cyan
cheatmenu.childNodes[15].childNodes[1].childNodes[1].textContent = 'Skill to modify:'; //modifies text of the skill selector left col

// //Modifying cheat menu buttons: selecting combat button, and the div that contains all the buttons.    
const combatbutton = cheatmenu.getElementsByClassName('btn')[0]; //moving to class name assignment, pos 0 is still the combat button
const skillselector = combatbutton.parentNode; //same as above, more direct reference to the button.
combatbutton.setAttribute('onclick', 'cheatSkill(16);'); //modifying combat button to be magic skill button
combatbutton.setAttribute('id', 'cheatSkillBut16');
combatbutton.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/magic/magic.svg';
combatbutton.className = "btn btn-outline-primary"; //prevents the cloned buttons from all being highlighted if combat page is default load page

// //modifying skill buttons normally used for default page setting to point to cheats
skillselector.childNodes[3].setAttribute('id', 'cheatSkillBut0'); //woodcutting
skillselector.childNodes[3].setAttribute('onclick', 'cheatSkill(0);');
skillselector.childNodes[5].setAttribute('id', 'cheatSkillBut1'); //fishing
skillselector.childNodes[5].setAttribute('onclick', 'cheatSkill(1);');
skillselector.childNodes[7].setAttribute('id', 'cheatSkillBut2'); //firemaking
skillselector.childNodes[7].setAttribute('onclick', 'cheatSkill(2);');
skillselector.childNodes[9].setAttribute('id', 'cheatSkillBut3'); //cooking
skillselector.childNodes[9].setAttribute('onclick', 'cheatSkill(3);');
skillselector.childNodes[11].setAttribute('id', 'cheatSkillBut4'); //mining
skillselector.childNodes[11].setAttribute('onclick', 'cheatSkill(4);');
skillselector.childNodes[13].setAttribute('id', 'cheatSkillBut5'); //smithing
skillselector.childNodes[13].setAttribute('onclick', 'cheatSkill(5);');
skillselector.childNodes[15].setAttribute('id', 'cheatSkillBut10'); //thieving
skillselector.childNodes[15].setAttribute('onclick', 'cheatSkill(10);');
skillselector.childNodes[17].setAttribute('id', 'cheatSkillBut11'); //farming
skillselector.childNodes[17].setAttribute('onclick', 'cheatSkill(11);');
skillselector.childNodes[19].setAttribute('id', 'cheatSkillBut13'); //fletching
skillselector.childNodes[19].setAttribute('onclick', 'cheatSkill(13);');
skillselector.childNodes[21].setAttribute('id', 'cheatSkillBut14'); //crafting
skillselector.childNodes[21].setAttribute('onclick', 'cheatSkill(14);');
skillselector.childNodes[23].setAttribute('id', 'cheatSkillBut15'); //runecrafting
skillselector.childNodes[23].setAttribute('onclick', 'cheatSkill(15);');

// //cloning combat button to make custom buttons for combat skills (except magic, which is above) and append to the skill selector div
const cheatbutton1 = combatbutton.cloneNode(true);
skillselector.appendChild(cheatbutton1);
cheatbutton1.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/combat/attack.svg';
cheatbutton1.setAttribute('onclick', 'cheatSkill(6);');
cheatbutton1.setAttribute('id', 'cheatSkillBut6');
skillselector.appendChild(skillselector.childNodes[0].cloneNode()); //adds spacing: empty text element

const cheatbutton2 = combatbutton.cloneNode(true);
skillselector.appendChild(cheatbutton2);
cheatbutton2.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/combat/strength.svg';
cheatbutton2.setAttribute('onclick', 'cheatSkill(7);');
cheatbutton2.setAttribute('id', 'cheatSkillBut7');
skillselector.appendChild(skillselector.childNodes[0].cloneNode());

const cheatbutton3 = combatbutton.cloneNode(true);
skillselector.appendChild(cheatbutton3);
cheatbutton3.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/combat/defence.svg';
cheatbutton3.setAttribute('onclick', 'cheatSkill(8);');
cheatbutton3.setAttribute('id', 'cheatSkillBut8');
skillselector.appendChild(skillselector.childNodes[0].cloneNode());

const cheatbutton4 = combatbutton.cloneNode(true);
skillselector.appendChild(cheatbutton4);
cheatbutton4.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/combat/hitpoints.svg';
cheatbutton4.setAttribute('onclick', 'cheatSkill(9);');
cheatbutton4.setAttribute('id', 'cheatSkillBut9');
skillselector.appendChild(skillselector.childNodes[0].cloneNode());

const cheatbutton5 = combatbutton.cloneNode(true);
skillselector.appendChild(cheatbutton5);
cheatbutton5.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/ranged/ranged.svg';
cheatbutton5.setAttribute('onclick', 'cheatSkill(12);');
cheatbutton5.setAttribute('id', 'cheatSkillBut12'); 
skillselector.appendChild(skillselector.childNodes[0].cloneNode());

const cheatbutton6 = combatbutton.cloneNode(true);
skillselector.appendChild(cheatbutton6);
cheatbutton6.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/prayer/prayer.svg';
cheatbutton6.setAttribute('onclick', 'cheatSkill(17);'); //check MI src for real #s. i was right!!! <3
cheatbutton6.setAttribute('id', 'cheatSkillBut17'); 
skillselector.appendChild(skillselector.childNodes[0].cloneNode());

const cheatbutton7 = combatbutton.cloneNode(true);
skillselector.appendChild(cheatbutton7);
cheatbutton7.childNodes[0].src = 'https://melvoridle.com/assets/media/skills/slayer/slayer.svg';
cheatbutton7.setAttribute('onclick', 'cheatSkill(18);');
cheatbutton7.setAttribute('id', 'cheatSkillBut18');

// //finishing skill level up cheat GUI... still worried about using all these childNodes calls, should be more discrete
cheatmenu.childNodes[17].childNodes[1].childNodes[1].textContent = 'Level Up Once:'; //this one changed. is now setting label. adding 2 to index values for the next 12 lines or so.
cheatmenu.childNodes[17].childNodes[3].childNodes[3].remove(); //removes "small" button that we copied for "level up once" button
cheatmenu.childNodes[17].childNodes[3].childNodes[1].setAttribute('id', 'levelupbutton');
cheatmenu.childNodes[17].childNodes[3].childNodes[1].setAttribute('onclick', 'levelUpCheat();');
cheatmenu.childNodes[17].childNodes[3].childNodes[1].textContent = 'Level up my selected skill!'; //after adding 2 to indexes here for first child node, looks good again.
//cheatmenu.childNodes[17].className = "row push border-bottom"; //adds border after skill leveler

// //Gold Cheat Menu GUI
cheatmenu.childNodes[19].childNodes[1].childNodes[1].textContent = 'Gimme Gold!'; 
const textinput = document.getElementById('username-change-form'); //was gonna combine into one but this could be useful to clone for the infinite name change.
const gpinput = textinput.cloneNode(true);
cheatmenu.childNodes[19].childNodes[3].childNodes[1].setAttribute('data-action', '');
cheatmenu.childNodes[19].childNodes[3].childNodes[1].textContent = 'Click this button to get this much gold:';
cheatmenu.childNodes[19].childNodes[3].childNodes[1].setAttribute('onclick', 'giveGPcheat();');
cheatmenu.childNodes[19].childNodes[3].appendChild(gpinput); //adding the gpinput text form/field into the menu
gpinput.setAttribute('id', 'gpinputform');
gpinput.childNodes[1].remove(); //removing other buttons and such i guess or text thingies
gpinput.childNodes[1].remove();
gpinput.childNodes[1].setAttribute('placeholder', 'Numbers only, no decimals or commas etc. Careful, you can go negative.');
gpinput.childNodes[1].setAttribute('data-kpxc-id', 'gpadd');
gpinput.childNodes[1].setAttribute('id', 'gpinput');
// //Since we have a nav button for this now, hiding these elements
cheatmenu.childNodes[19].hidden = true;


// //CLEANUP?...
// //hide child nodes 20-25 to get rid of radio buttons below Level Up.
cheatmenu.childNodes[20].hidden = true;
cheatmenu.childNodes[21].hidden = true;
cheatmenu.childNodes[22].hidden = true;
cheatmenu.childNodes[23].hidden = true;
cheatmenu.childNodes[24].hidden = true;
cheatmenu.childNodes[25].hidden = true;

// //hide child nodes 30-35 to get rid of account settings. not deleting in case we want to use those elements/better for DOM consistency
cheatmenu.childNodes[30].hidden = true;
cheatmenu.childNodes[31].hidden = true;
cheatmenu.childNodes[32].hidden = true;
cheatmenu.childNodes[33].hidden = true;
cheatmenu.childNodes[34].hidden = true;
cheatmenu.childNodes[35].hidden = true;

// //KILL ALL ADS. KILL ALL ADS. KILL ALL ADS. KILL ALL ADS. KILL ALL ADS. KILL ALL ADS. KILL ALL ADS. KILL ALL ADS. KILL ALL ADS. KILL ALL ADS. 
cheatmenu.childNodes[39].textContent = "I hate ads, but they support the dev. So here's the option for the ads, not disabled by default, though it easily could be.";
cheatmenu.childNodes[41].childNodes[1].childNodes[1].textContent = "Show Banner Ad - these buttons work, but the cheat UI doesn't reflect it:" ;
cheatmenu.childNodes[41].childNodes[3].className = "col-6 col-lg-8"; //show banner ad setting without lv99
cheatmenu.childNodes[41].childNodes[5].className = "d-none"; //hides the "reach lv99" text
// //is it possible to have these buttons LITERALLY be the buttons from the settings page? not cloned? re-assign to the real ones? if it is, idk, i think this is too buggy with the radio buttons being linked to the settings page. nixing.

// //Adding unlimited name changer, heading & input field & button
const namechnghead = document.createElement('h2'); //custom bustom
namechnghead.textContent = "Unlimited Name Changing Cheat";
namechnghead.className = "content-heading border-bottom mb-4 pb-2";
cheatmenu.appendChild(namechnghead); //worked like a charm
const namechngdiv = cheatmenu.getElementsByClassName('row push')[2].cloneNode(true); //clone gimme gold cheat div
namechngdiv.hidden = false; //unhiding since we hid the gp cheat menu and we cloned that to make this.
namechngdiv.childNodes[3].appendChild(namechngdiv.childNodes[3].childNodes[1]); //change order of button and field
namechngdiv.childNodes[1].childNodes[1].textContent = "Your New Name:"; //left col div is array pos 1
namechngdiv.getElementsByClassName('btn')[0].textContent = "Change My Name Now"; //change name of button specifically
namechngdiv.getElementsByClassName('btn')[0].setAttribute('onclick', 'changeNameInf();');
namechngdiv.getElementsByClassName('form-group')[0].id= 'unameform';
namechngdiv.getElementsByClassName('form-control')[0].setAttribute('placeholder', 'Careful what you type. You have been warned.');
namechngdiv.getElementsByClassName('form-control')[0].setAttribute('data-kpxc-id', 'unameinfchange');
namechngdiv.getElementsByClassName('form-control')[0].id = 'unameinput';
cheatmenu.appendChild(namechngdiv);

// //Item List Scroll Box... must be button to call function to create loot scroll box.
const listheader = document.createElement('h3'); //heading first
listheader.textContent = 'The Button Below Shows THE List of All Loot Items';
listheader.style = "color: cyan";
listheader.id = 'listheader';
cheatmenu.appendChild(listheader);
const cheatbutton8 = combatbutton.cloneNode(true);
cheatmenu.appendChild(cheatbutton8);
cheatbutton8.childNodes[0].src = 'assets/media/main/bank_header.svg';
cheatbutton8.setAttribute('onclick', 'showItems();');
cheatbutton8.setAttribute('id', 'showItemsBut');


// //maybe best to put cheat menu cleanup stuff here and just prevent all the errors
// //del child nodes 0-10 to get rid of top space
cheatmenu.childNodes[10].remove();
cheatmenu.childNodes[9].remove();
cheatmenu.childNodes[8].remove();
cheatmenu.childNodes[7].remove();
cheatmenu.childNodes[6].remove();
cheatmenu.childNodes[5].remove();
cheatmenu.childNodes[4].remove();
cheatmenu.childNodes[3].remove();
cheatmenu.childNodes[2].remove();
cheatmenu.childNodes[1].remove();
// //honestly it might just be easier to completely customize this stuff based on class etc and build the cheat menu from scratch.

// //End of Cheat Menu -----------------------------------------------------------------------------------------

// //Modifying Cooking Page to have an Always-On Cook All button
const alwayscookallbut = document.getElementById('cook-button-qty-all').cloneNode(true);
document.getElementById('cooking-container').getElementsByClassName('block-content')[1].appendChild(alwayscookallbut);
alwayscookallbut.className = "btn btn-warning mb-1"; //makes it look ready for clickin'
alwayscookallbut.removeAttribute('disabled'); //enables button permanently
alwayscookallbut.textContent = 'Cook All (MICE Permanently Unlocked Cook All Button of Extreme Convenience)';
alwayscookallbut.id = 'alwayscookallbut';
alwayscookallbut.style = 'background-color: red;';

// //Modifying firemaking to have an Always-On Burn All button... nevermind, it's automatic now. Good!

// //END OF GUI. ***********************************************************************************************



	//...........................................................................................................
	//below is the lynchpin of the extension: injecting javascript functions into the body of the website.
	//this allows access to the page scripts using code inside the external content script within the extension.
    
////SCRIPT INJECTION -------------------------------------------------------------------------------------------
    
    var script = document.createElement('script');
    script.src = browser.runtime.getURL("inject.js");
    document.body.appendChild(script); //appending to body because that's where all the other page scripts are at. head's probably ok too

// //And that's MICE!

//~~~---~~~---~~~---~~~---~~~Notes~~~---~~~---~~~---~~~---~~~

//there's always something you can tinker, something you can tweak, play with, get more.

// *** desired functions:  ***
//about button that talks about javascript hacking in browser, some of the things you can do. 
//export and import saves that are not encrypted? (but why, maybe you prefer to edit, and then import those)
//auto Bonfire?
//mastery increaser: gonna need to create a gui menu for it or something, it's ridiculous. or add a button to each style container with mastery content, and add a button there specific for each one. big project... but, now that mastery tokens are a thing, who cares? ezpz, just give yourself mastery tokens, win win win win win.
//loot creator gui or autofill list; would love to have a copied bank page that's just populated with items, and you select them. hmm... god this could be tedious.
//set extra attacks in combat? doable but dirty. basically setting attack speed i think, which way ups dps, which way OPs you.
//happy new year 2020! 
