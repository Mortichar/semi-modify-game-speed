# This is Scripting Engine for Melvor Idle v0.3.6.

Thanks for waiting, everyone! v0.3.6 is a fairly massive update to the code itself, but comes with some great new features!

Huge thanks to DanielRX for contributing a ton of work to the extension! You can find his fork of this project [here.](https://gitlab.com/DanielRX/SEMI)

Firefox Release Version: [![Mozilla Firefox](https://img.shields.io/amo/v/scripting-engine-melvor-idle?label=Scripting%20Engine%20for%20Melvor%20Idle%3A%20Firefox%20Add-on&logo=Mozilla%20Firefox)](https://addons.mozilla.org/en-US/firefox/addon/scripting-engine-melvor-idle/)

## SEMI is a Firefox and Chrome web extension for Melvor Idle.

This add-on/extension helps you automate certain aspects of the game, and adds certain useful features, combining many scripts into one. Toggle each one on and off individually from inside the game. Hovering over the SEMI sidebar buttons will give tooltips including hints, explanations, and tips for most scripts.

* Auto Replant by Arcanus
    * Automatically harvests and then replants the same crop, buying and using compost as needed, using seeds from your bank. Be sure you have enough seeds!
    * Automatically adds Weird Gloop if you have any in the bank as of Melvor v0.14! Prioritizes gloop over compost. Will not buy gloop.
* AutoBonfire by Dream: continuously starts bonfires for you when you have a type of wood selected in Firemaking.
* AutoCook by Unicue & improved by DanielRX: cycles through fish and cooks them all
* Auto Mine & Auto Sell Gems by Strutty & others
    * AutoMine now has a GUI for selecting which bar you'd like to mine. **Since v0.3.5:** AutoMine mines by ratio of required materials to smelt bars based on amount of ores you have in bank. (Ex: when Mithril bar is selected, mines 1 Mithril ore and then prioritizes coal until it reaches 4 coal ore.)
    * Priority override buttons give even more control over how you want to mine. **Since v0.3.5:** Cloud save no longer deletes those precious priority override buttons.
    * **Note:** Using priority override will stop the robot from mining by ratios.
    * AutoSellGems will sell 100 gems once they've reached a stack of 100.
* AutoSmith Bars: cycle through smithing bars and smelt them if you have the materials to do so
* Katorone Automation & GUI
    * In-game menu for toggling & using Katorone's automation script functions, which can do these things:
        * Automatically buys more bank space when full
        * Automatically buys Gem Glove Charges, selling gems to acquire money for more charges
        * Now saves your custom configuration settings, persisting across refreshes
* AutoSell, AutoBury, and AutoOpen by DanielRX inspired by Katorone:
    * GUI menus for selecting items you want to sell, bury, or open automatically. Selections saved in SEMI localstorage config.
* Combat Scripts
    * AutoSlayer by Bubbalova, tweaked by myself
        * Automates Slayer tasks, entering combat and constantly engaging whatever monster you're assigned.
        * Optionally automatically equips mirror shield or magic ring, replacing original equipment when done.
        * Optionally skips these monsters: master farmer, moist monster, black knight, mithril knight, and rune knight.
    * AutoRun extracted from AutoCombat by DanielRX: Exit combat if you're out of food/ammo/runes.
    * AutoEquip Ammo extracted from AutoCombat by DanielRX: Attempts to equip more of the same type of arrow if using ranged before exiting combat. Now works in dungeons if you have dungeon equipment swap purchased.
    * AutoEat: eats to maintain maximum HP quickly. Usable for thieving as well as combat.
    * AutoLoot: picks up dropped loot items for you.
* Extra functions & buttons
    * Toggle "OTHER" & "SOCIALS" Sidebar Button section visibility like you can do for "COMBAT" & "SKILLS"
    * Drag-able sidebar menu items by DanielRX!
        * Optional hidden section. Items dragged under the semi-icon divider will be hidden when the order is locked!
        * Order saved in SEMI localstorage.
    * Destroy All Crops button in the Farming page
    * Barf My Potion button in the Potion selection menu
    * Thieving calculators and tooltips by RedSparr0w (scavenged from Melvor Idle Helper)
    * XPH script by Breakit, now with an in-game GUI to display XP per hour and estimate time until reaching the level of your choice
    * Many code utilities that are useful in scripting for Melvor Idle. See `utils.js`

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

This was built around Melvor Idle alpha v0.15.1.
