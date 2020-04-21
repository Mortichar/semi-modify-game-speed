# This is Scripting Engine for Melvor Idle v0.3.5.

Firefox Release Version: [![Mozilla Firefox](https://img.shields.io/amo/v/scripting-engine-melvor-idle?label=Scripting%20Engine%20for%20Melvor%20Idle%3A%20Firefox%20Add-on&logo=Mozilla%20Firefox)](https://addons.mozilla.org/en-US/firefox/addon/scripting-engine-melvor-idle/)

To install in chrome,  please look further below in the ['Chrome Developer Install' section](https://gitlab.com/aldousWatts/SEMI#chrome-developer-install).

## SEMI is a Firefox and Chrome web extension for Melvor Idle.

This add-on/extension helps you automate certain aspects of the game, and adds certain useful features, combining many scripts into one. Toggle each one on and off individually from inside the game. Hovering over the SEMI sidebar buttons will give tooltips including hints, explanations, and tips for most scripts.

* Auto Replant by Arcanus
    * Automatically harvests and then replants the same crop, buying and using compost as needed, using seeds from your bank. Be sure you have enough seeds!
    * Automatically adds Weird Gloop if you have any in the bank as of Melvor v0.14! Prioritizes gloop over compost. Will not buy gloop.
* AutoBonfire by Dream: continuously starts bonfires for you when you have a type of wood selected in Firemaking.
* [CURRENTLY BROKEN/obsolete after Melvor alpha v0.14] AutoFish by BreakIt, Jarx and myself
    * Fishes area with highest average XP fish, but will chase chests when they appear
    * Detects if you are using fishing potions, will switch to fishing the max XP fish and ignores chests since it's impossible to catch them while using potions
    * Chase Crabs option for prioritizing crabs, useful for creating fisherman's potions
* AutoSell Fish Junk: sells junk caught while fishing every 10 sec.
* AutoCook by Unicue: cycles through fish and cooks them all
* Auto Mine & Auto Sell Gems by Strutty & others
    * AutoMine now has a GUI for selecting which bar you'd like to mine. **Since v0.3.5:** AutoMine mines by ratio of required materials to smelt bars based on amount of ores you have in bank. (Ex: when Mithril bar is selected, mines 1 Mithril ore and then prioritizes coal until it reaches 4 coal ore.)
    * Priority override buttons give even more control over how you want to mine. **Since v0.3.5:** Cloud save no longer deletes those precious priority override buttons.
    * **Note:** Using priority override will stop the robot from mining by ratios.
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
        * Optionally skips these monsters: master farmer, moist monster, black knight, mithril knight, and rune knight.
    * AutoCombat
        * Exit combat if you're out of food/ammo/runes.
        * Attempts to equip more of the same type of arrow if using ranged before exiting combat.
            * IGNORES EQUIPPING MORE ARROWS WHEN DOING DUNGEONS. However, will still exit combat when you reach 0.
        * Options: Toggle auto eat and loot.
        * AutoEat script works outside of AutoCombat now and is disabled by default. Useful for thieving.
* Extra functions & buttons
    * Toggle "OTHER" & "SOCIALS" Sidebar Button section visibility like you can do for "COMBAT" & "SKILLS".
    * Destroy All Crops button in the Farming page
    * Barf My Potion button in the Potion selection menu
    * Thieving calculators and tooltips by RedSparr0w (scavenged from Melvor Idle Helper)
    * XPH script by Breakit, now with an in-game GUI to display XP per hour and estimate time until reaching the level of your choice

***

Thanks to everyone who writes scripts for Melvor and provides them to others!

### Alternative Installation

#### Chrome Developer Install

**Note:** There is a harmless error that is thrown on loading the extension from source into Chrome from the main source since version 0.3 because Chrome does not recognize the part of manifest.json necessary for the extension to run on Firefox for Android. Deleting the "browser_specific_settings" section of manifest.json fixes the error, but an alternative chrome version of the manifest.json file is now in the repository, named chrome.manifest.json.

Download the SEMI repository. Extract the downloaded compressed file, which should be named SEMI-master.zip (or .tar*) to an empty folder. Delete manifest.json (used for Firefox) and rename chrome.manifest.json to manifest.json.

In Chrome, open settings > tools > extensions, or go to this url without quotes: "chrome://extensions". Enable developer options in the top right, and click "Load Unpacked" on the left. Open the folder that contains manifest.json to load the add-on.

#### Firefox Temporary Install

Download the SEMI repository. Extract the downloaded compressed file, which should be named SEMI-master.zip (or .tar*) to an empty folder.

Open the url "about:debugging" without quotes, enable add-on debugging if you need to. On newest firefox, go to the "this firefox" page. Install the addon by clicking "Load Temporary Add-on" opening either manifest.json or either of the .js files in the 'scripts' subfolder.


***

## Goal of the Software
This software was made to unify many Melvor automation and QOL scripts, including my own, into one easy-to-use platform with a UI that mirrors the game, without worrying about compatibility or maintaining individual userscripts.

This was built around Melvor Idle alpha v0.14.2.
