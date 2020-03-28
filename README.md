# This is Scripting Engine for Melvor Idle v0.3.1.
Firefox Release Version: [![Mozilla Firefox](https://img.shields.io/amo/v/scripting-engine-melvor-idle?label=Scripting%20Engine%20for%20Melvor%20Idle%3A%20Firefox%20Add-on&logo=Mozilla%20Firefox)](https://addons.mozilla.org/en-US/firefox/addon/scripting-engine-melvor-idle/)

To install in chrome,  please look further below in the ['Chrome Developer Install' section](https://gitlab.com/aldousWatts/SEMI#chrome-developer-install).

Please note that the repository has changed, and to install without using the Mozilla Add-on Database above you need to download the source subdirectory, not the entire SEMI repository.

## SEMI is a Firefox and Chrome web extension for Melvor Idle. 

This add-on/extension helps you automate certain aspects of the game, and adds certain useful features, combining many scripts into one. Toggle each one on and off individually from inside the game. Hovering over the SEMI sidebar buttons will give tooltips including hints, explanations, and tips for most scripts.

* Auto Replant by Arcanus
    * Automatically harvests and then replants the same crop, buying and using compost as needed, using seeds from your bank. Be sure you have enough seeds!
* Percent Accuracy by Arcanus: calculates percent chance to hit and replaces the in-game accuracy ratings with percentages.
* AutoBonfire by Dream: continuously starts bonfires for you when you have a type of wood selected in Firemaking.
* AutoFish by BreakIt, Jarx and myself
    * Fishes area with highest average XP fish, but will chase chests when they appear
    * Detects if you are using fishing potions, will switch to fishing the max XP fish and ignores chests since it's impossible to catch them while using potions
    * Chase Crabs option for prioritizing crabs, useful for creating fisherman's potions
* AutoCook by Unicue: cycles through fish and cooks them all
* Auto Mine & Auto Sell Gems by Strutty & others
    * AutoMine now has a GUI for selecting which bar you'd like to mine
    * Priority override buttons give even more control over how you want to mine
* AutoSmith Bars: cycle through smithing bars and smelt them if you have the materials to do so
* Katorone Automation & GUI
    * In-game menu for toggling & using Katorone's automation script functions, which can do these things:
        * Automatically sells Bobby's Pockets from thieving
        * Automatically buys more bank space when full
        * Automatically open Bird Nests & Herb Sacks
        * Automatically buys Gem Glove Charges, selling gems to acquire money for more charges
        * Automatically bury bones

* Combat Scripts
    * AutoSlayer by Bubbalova, tweaked by myself 
        * Automates Slayer tasks, entering combat and constantly engaging whatever monster you're assigned.
        * Optionally automatically equips mirror shield or magic ring, replacing original equipment when done.
    * AutoCombat
        * Exit combat if you're out of food/ammo/runes.
        * Attempts to equip more of the same type of arrow if using ranged before exiting combat.
            * IGNORES EQUIPPING MORE ARROWS WHEN DOING DUNGEONS. However, will still exit combat when you reach 0.
        * Options: Toggle auto eat and loot. 
        * AutoEat script works outside of AutoCombat now and is disabled by default. Useful for thieving.

* Extra functions & buttons
    * Toggle "OTHER" & "SOCIALS" Sidebar Button section visibility like you can do for "COMBAT" & "SKILLS".
    * Calculate number of selected potions needed until next level button in Herblore page
    * Destroy All Crops button in the Farming page
    * Barf My Potion button in the Potion selection menu
    * Thieving calculators and tooltips by RedSparr0w (scavenged from Melvor Idle Helper)
    * XPH script by Breakit, now with an in-game GUI to display XP per hour and estimate time until reaching the level of your choice

***

Thanks to everyone who writes scripts for Melvor and provides them to others!

### Alternative Installation

#### Chrome Developer Install

**Note:** There is a harmless error that is thrown on loading the extension from source into Chrome from the main source since version 0.3 because Chrome does not recognize the part of manifest.json necessary for the extension to run on Firefox for Android. Deleting the "browser_specific_settings" section of manifest.json fixes the error, but an alternative chrome version of SEMI without this section is now in the repository [here](https://gitlab.com/aldousWatts/SEMI/-/tree/master/releases/chrome). Download this subdirectory which includes SEMI.js, inject.js, and manifest.json, as well as icons folder. Extract the downloaded compressed file, which should be named SEMI-master-releases-chrome.zip (or .tar*) to an empty folder.

Open settings > tools > extensions, enable developer options in the top right, and click "Load Unpacked" on the left. Open the folder that contains manifest.json to load the add-on. It will be inside subfolders after extracting, so make sure you select the 'chrome' folder which contains manifest.json.

#### Firefox Temporary Install

Download the [SEMI/source directory from here](https://gitlab.com/aldousWatts/SEMI/-/tree/master/source), which includes SEMI.js, inject.js, and manifest.json, as well as icons folder. Extract the downloaded compressed file, which should be named SEMI-master-source.zip (or .tar*) to an empty folder.

Open the url "about:debugging" without quotes, enable add-on debugging if you need to. On newest firefox, go to the "this firefox" page. Install the addon by clicking "Load Temporary Add-on" opening either manifest.json or either of the .js files in the 'source' subfolder.


***

## Goal of the Software
This software was made to unify many Melvor automation and QOL scripts, including my own, into one easy-to-use platform with a UI that mirrors the game, without worrying about compatibility or maintaining individual userscripts.

This was built around Melvor Idle alpha v0.13.
