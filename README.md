# Scripting Engine for Melvor Idle

### **SEMI** is an **UNOFFICIAL** Firefox and Chrome web extension for Melvor Idle.

**As with any scripts or game mods, please back up your data before making any changes!**

[![Mozilla Firefox](https://img.shields.io/amo/v/scripting-engine-melvor-idle?label=Get%20SEMI%20for%20Firefox&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/scripting-engine-melvor-idle/)
[![Google Chrome](https://img.shields.io/chrome-web-store/v/mnjfmmpkdmgfpabgbeoclagnclmpmjgm?label=Get%20SEMI%20for%20Chrome&logo=Google%20Chrome)](https://chrome.google.com/webstore/detail/scripting-engine-for-melv/mnjfmmpkdmgfpabgbeoclagnclmpmjgm?authuser=0&hl=en)

Please note when a new update is released, the Mozilla add-on database verifies the files quicker than the Chrome web store. Chrome updates are one or two days behind on average. Buttons above reflect currently available versions on the official platforms. You are free to install from source([see Alternative Installation](#alternative-installation)), but be aware the repository's code may contain more bugs or be less stable than release versions from above buttons.

### Contributors

Huge thanks to DanielRX, Visua, Breindahl, AuroraKy, Zeldo, Parataku, Alex Mauney, Shamus Taylor, TheAlpacalypse, and more for helping with the project!

## What can SEMI do?

This add-on/extension helps you automate certain aspects of the game, and adds certain useful features, combining many scripts into one. Toggle each one on and off individually from inside the game. Hovering over the SEMI sidebar buttons will give tooltips including hints, explanations, and tips for most scripts.


* New **Beta** script: Save On Close by TheAlpacalypse!
    * Prompts you to save your game to cloud when you leave the page.
* New **Beta** script: AutoRunecraft by TheAlpacalypse!
    * AutoRunecraft will automatically create runes based on the ratios set up by you.
    * Will mine Rune Essence if you run out
    * Will integrate with a future plugin to automatically set up ratios based on current spell setup
* New: AutoLute by Ugh!
    * AutoLute monitors your combat opponent's health and switches to Lute for the final kill of a dungeon, or the killing blow for normal combat, for the 5x GP reward.
* Updated script: ETA replaces TimeRemaining
    * More recently maintained fork by TinyCoyote
    * Calculates estimated time to completion of your currently selected craft/production skill item, displaying in-menu
    * Also has a task-done alert, when a production skill completes all items and can't continue, a Task Complete alert will make an audible ding. Other dings available too!
    * It is more configurable than TimeRemaining, you can use the console to change parameters. [Check the script's code here to see what you can change.](https://greasyfork.org/en/scripts/415592-melvor-eta/code)
        * To change ETA settings with its new GUI, you must have the Melvor Idle Combat Simulator Reloaded extension installed.
* New **Beta** script: Auto Mastery by Alex Mauney!
    * AutoMaster will automatically spend down mastery pools when they are above 95%. It will spend your mastery points on your lowest mastery item in the particular skill above 95%. Warning: at this stage it will constantly close your mastery spending page and may interrupt attempts to spend other Mastery XP than what it is automating. Also, be aware that it will be affected by the Mastery XP Spending Multiplier buttons (+1, +5, +10)
* Mastery Enhancements Script by Acrone#1563, Aurora Aquir#4272, Breindahl#2660, NotCorgan#1234 and Visua#9999
    * Adds progress bars for pools to skills in the menu
* New **Beta** scripts by Zeldo:
    * Offline Time >12h [temporarily disabled]
        * Extends amount of time you can offline-idle
        * Cleans up offline idle calculations
    * AutoEquip Best Item
        * Equips best item for a situation
* New Core Features
    * Scripts can now include a config menu built-in to the sidebar using tippy, with AutoSellGems and AutoEquip Ammo being the prototype examples
    * Per-character config saving by Zeldo!
    * Event bus to intercept game events
    * Better sidebar menu statuses
    * Backup, Restore, and Reset SEMI Configuration in the repurposed SEMI Menu
    * AutoEnable Scripts on Refresh now available in the SEMI Menu
    * Toggle non-sidebar SEMI GUI elements
* AutoFarm by Visua
    * Replaces AutoReplant with a much more customizable farming robot, with detailed settings like AutoMine.
    * Automatically harvests and then plants seeds, buying and using compost as needed, using seeds from your bank. Be sure you have enough seeds!
    * Automatically adds Weird Gloop if you have any in the bank. Prioritizes gloop over compost. Will not buy gloop
    * Optionally: If not in combat, equips Farming Cape/Signet Ring/Bob's Rake if you have them before harvesting and replanting
* Show Ore in Bank: adds ore counts to mining page rocks.
* AutoBonfire: continuously starts bonfires for you when you have a type of wood selected in Firemaking
* AutoCook: cycles through fish and cooks them all
* AutoMine
    * v0.4: New and improved GUI for setting the mineArray priorities by dragging elements on the page
    * Mine-by-ratios by selecting a bar to mine for
    * v0.4: New option to directly modify coal ratios when mining for bars
* AutoSellGems: sells 100 gems once they've reached a stack of 100
* AutoSmith Bars: cycle through smithing bars and smelt them if you have the materials to do so
* Katorone Automation & GUI
    * In-game menu for toggling & using certain Katorone automation script functions, which still does these things:
        * Set a GP amount to keep in reserve
        * Automatically buys more bank space when full
        * Automatically buys Gem Glove Charges, selling gems to acquire money for more charges or bank space
        * Now saves your custom configuration settings, persisting across refreshes
* AutoSell, AutoBury, and AutoOpen
    * GUI menus for selecting items you want to sell, bury, or open automatically. Selections saved in SEMI localstorage config
* Combat Scripts
    * AutoSlayer
        * Automates Slayer tasks, entering combat and constantly engaging whatever monster you're assigned
        * Optionally automatically equips mirror shield or magic ring, replacing original equipment when done
        * Optionally skips monsters based on a GUI selection menu similar to AutoSell
    * AutoRun: Exit combat if you're out of food/ammo/runes or if enemy can one-hit-kill you
    * AutoEquip Ammo: Attempts to equip more of the same type of arrow if using ranged before exiting combat. Now works in dungeons if you have dungeon equipment swap purchased
    * AutoEat
        * Eats when HP is less than what food heals, or when HP is less than max hit of your enemy
        * Usable for thieving as well as combat
        * Automatically cycles to next equipped food if you run out
        * Takes damage reduction, stun damage increases, burning damage, and damage reflection into consideration for max hit calculations
        * Tested for god dungeons
    * AutoLoot: picks up dropped loot items for you
* Extra functions & buttons
    * Toggle "OTHER" & "SOCIALS" Sidebar Button section visibility like you can do for "COMBAT" & "SKILLS"
    * Drag-able sidebar menu items by DanielRX!
        * Optional hidden section. Items dragged under the semi-icon divider will be hidden when the order is locked!
        * Order saved in SEMI localstorage
    * Destroy All Crops button in the Farming page
    * Barf My Potion button in the Potion selection menu
    * Thieving calculators and tooltips by RedSparr0w (scavenged from Melvor Idle Helper)
    * XPH script by Breakit, now with an in-game GUI to display XP per hour and estimate time until reaching the level of your choice
    * Many code utilities that are useful in scripting for Melvor Idle. See `utils.js`

### Bugs & Requests

Notice a bug? Have an idea for something SEMI can do?

You can post [here on the issues page of the SEMI repository](https://gitlab.com/aldousWatts/SEMI/-/issues), chat about it in the Melvor discord in the #scripting-and-extensions channel, and/or talk to Aldous Watts.

## Alternative Installation

Download or clone the SEMI repository. If downloaded, extract the downloaded compressed file, which should be named SEMI-master.zip (or .tar*) to an empty folder.

### Chrome Developer Install

In Chrome, open settings > tools > extensions, or go to this url without quotes: "chrome://extensions".

Enable developer options in the top right, then click "Load Unpacked" on the left.

Open the folder that contains manifest.json to load the add-on.

### Firefox Temporary Install

Open the url "about:debugging" without quotes, enable add-on debugging if you need to.

On newest firefox, go to the "This Firefox" page using the link on the top left side.

Install the addon by clicking the "Load Temporary Add-on" button on the right, then opening manifest.json.

## Goal of the Software

This software was made to unify many Melvor automation and QOL scripts, including my own, into one easy-to-use platform with a UI that mirrors the game, without worrying about compatibility or maintaining individual userscripts.
