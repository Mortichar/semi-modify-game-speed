## This is Scripting Engine for Melvor Idle v0.3.
Firefox Release Version: [![Mozilla Firefox](https://img.shields.io/amo/v/scripting-engine-melvor-idle?label=Scripting%20Engine%20for%20Melvor%20Idle%3A%20Firefox%20Add-on&logo=Mozilla%20Firefox)](https://addons.mozilla.org/en-US/firefox/addon/scripting-engine-melvor-idle/)

To install in chrome,  please look further below in the '0.3' section.
### It's a Firefox and Chrome browser extension for the fun idle web game Melvor Idle. 
This add-on/extension helps you automate certain aspects of the game, and adds certain useful features, combining many scripts into one. Toggle each one on and off individually from inside the game.
* Auto Replant and Percent Accuracy by Arcanus
* AutoBonfire by Dream
* Auto Mine & Auto Sell Gems by Strutty & others
* AutoSlayer by Bubbalova: automates Slayer tasks, optionally automatically equips mirror shield or magic ring.
* AutoCombat: eat food and loot automatically, exit combat if you're out of food/ammo/runes.
* AutoCombat Options: Toggle auto eat and loot
* Calculate number of selected potions needed until next level button in Herblore page
* Thieving calculators and tooltips by RedSparr0w (scavenged from Melvor Idle Helper)
* Auto-cook: permanently unlocked Cook All button in the Cooking skill page
* XHP script by Breakit

Added in 0.1.1:
* AutoCook by Unicue
* AutoFish by BreakIt, Jarx, and Myself with added options: Max Mode (for use with fishing potions) and Chase Chests (fish treasure chests when spawned)
* UI updates & more menu toggles, even for native Melvor sidebar sections like Other & Socials

Added in 0.2:
* Huge update: incorporated many functions from Katorone's automation script into SEMI complete with a settings menu.
* Tweaked AutoMine to only switch if the current mining action is complete (more efficient)
* Added AutoMine priority override buttons, allows you to select one ore to prioritize above all others (still seeks highest XP)

0.2.1:
* Quick fixes & mods to the Katorone scripts by rebelEpik & me:
    * Auto buy gem glove charges now respects the bank gp limit
    * AutoReplant respects the bank gp limit when Katorone is enabled and won't buy compost unless it has more than the reserve

0.2.2:
* AutoEat will now cycle through equipped foods before exiting combat (credit rebelEpik)
* getBankQty function updated for efficiency (credit rebelEpik)
* AutoReplant disabled by default (suggested by Rickardo)
* AutoFish is now fully automated: it will find max XP fish and stop chasing chests when using fishing potions.
* 0.2.2.1: quick fix to make sure AutoFish is hidden when Auto Skills visibility is toggled
* 0.2.2.2: quick fix to make sure AutoReplant is ACTUALLY off when starting SEMI.

0.2.3:
* AutoSell Gems was broken by the updated getBankQty function, reverted back, the script works again.
* Removed AutoCook extra button as Cooking is now idle from the start in alpha v0.13
* Fixed AutoCook script to work in alpha v0.13
* AutoEat script is now usable outside of combat, useful for thieving (suggested by Pentharian)
* Destroy All Crops button added to the Farming page: will remove all your plants in the currently selected farming area (suggested & prototyped by Jarx)
* Chase Crabs option for AutoFishing: will hunt down crabs for fishing potions. If using potions, will only hunt them if they are max in an area. Otherwise, will prioritize them after chests. (suggested by Jarx)

0.2.3.1:
* Some Katorone Automation edits that I did caused an issue with reserve gold and selling gems to pay for glove charges. This hotfix takes care of that issue: Katorone will now sell gems to boost the GP pool past the reserve amount in order to buy gem glove charges, thereby fixing the automation. Previously, it would not sell gems if you were at your reserve gold amount, and could not buy gem glove charges as a result.
* Minor UI updates

## 0.3
* Seems to be working on android Firefox. Might as well open it up to that platform as well.
    * Note: this version will throw a harmless error when loading into Chrome because Chrome does not recognize a part of the manifest.json necessary to run the extension on Firefox for Android. If you want to get rid of the error, delete the "browser_specific_settings" section in manifest.json. Deleting lines 13-17 of manifest.json will give you a perfectly fine Chrome version.

### Additions:
* GUI for XPH for every skill. Get crunchy with your XP per hour calculations nicely displayed in-game, no console needed.
* GUI for AutoMine Bar Selection: with priority override and smithing bar selection, there are plenty of ways to customize AutoMine to your needs without using the console.
* Barf my potion button: Removes your currently equipped potion on the current page. Handy for chasing down fishing chests when you just drank a fisherman's potion!

### Fixes:
* AutoSlayer was a little broken after combat was updated in Melvor v0.13, but now seems to run fine. 
    * Was ignoring equipment requirements for slayer zones. Changed code to fix this.
    * Was throwing a dungeon complete screen every kill if you had just finished a dungeon then used AutoSlayer. Added a line to fix.
    * Was not re-equipping items after leaving slayer zones where they were required. Fixed.
    
***

Thanks to everyone who writes scripts for Melvor and provides them to others!

#### Temporary install

Download the entire SEMI directory, including the .js files as well as icon folder. Extract to an empty folder.

Firefox: open the url "about:debugging" without quotes, enable add-on debugging, and install the addon by opening either manifest.json or either of the .js files in the folder.

Chrome: open settings > tools > extensions, enable developer options in the top right, and click load unpacked. Open the SEMI containing folder to load the add-on. (Please see the note above in the '0.3' section for the harmless error that is thrown on loading the extension into Chrome this way.)

***

### Goal of the Software
This software was made to unify many Melvor automation and QOL scripts, including my own, into one easy-to-use platform with a UI that mirrors the game, without worrying about compatibility or maintaining individual userscripts.

This was built around Melvor Idle alpha v0.13.
