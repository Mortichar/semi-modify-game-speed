# SEMI Changelog

## v0.6.2
[auto-eat]
* Fixed browser crashes on Into the Mist. Thank you to Visua for the help!
## v0.6.1
[auto-sell]
* Fixed items not being deleted from bank after sales

## v0.6.0
[auto-mine] 
* Doesn't yank control away from the user after selecting automine
[auto-equip-best-items]
* Ignores mastery ring if the current skill is at max mastery
* Doesn't put on gem gloves if you are currently mining rune essence
[auto-sell]
* Doesn't skip the bank anymore when selling items. This will make it such that you no longer miss out on completion log stuff when auto-selling.
* Adds item searching
[auto-eat]
* Works better with Thieving, and all non-normal game modes. This will now operate properly regardless of what HP scaling happens.
* Mostly fixed the issues with stuns, however there are still issues with ITM. USE AT YOUR OWN PERIL. THIS MIGHT CRASH YOUR BROWSER.
[drop-chances]
* New toggle in settings. Displays drop chances for items on the "View Monster Drops" modal
[save-on-exit]
* New tweak. When the user leaves the page, a confirmation message will pop up asking the user to confirm the exit, while the game automatically saves in the background. The delay *should* be enough time for the cloud save to fire.
[eta]
* Merged fixes from upstream userscript to SEMI
[auto-rc]
* Changed "Base Rune Count" to "Cast Count" to clarify the function
* Fixed the onChange triggers to make this work better
* Fixed the counts not updating properly.
* Fixed AutoRC allowing you to stop runecrafting
* Made AutoRC work off of bank quantities
[auto-skills]
* Fixed most of the compatibility issues with adventure mode

### Changes to SEMI going forward
* SEMI will now use proper semver notation for future patches.
* Bug fixes will be more frequent. I will be adding a new branch in the future, bug-fix, which will be rolled into main more frequently to ensure browser extension users are not left by the wayside.

Credits to Luna, Shamus, Elad Shahar, Duc Bui, and TheAlpacalypse for the changes!

## Melvor @ v0.19.2

## v0.5.6

## Various Fixes & Updates

* Katorone auto-buy glove charges now properly fixed with hard-coded values for now

### These merge requests were reviewed & merged:

[tooltip-changes] Converts the plugin hover tooltips to use tippy
[auto-eat-fix] Fixes the console errors that crash the tab when the player stuns the target enemy
[adventure-mode-fixes] - Adds a check for adventure mode if you don't have a script's skill unlocked
Define `upgradeBank` using `buyShopItem` to fix Katorone bank upgrade
Define `buyCompost` using `buyShopItem` to fix AutoFarm
[eta] Eta fishing fix
[katorone] Fixes gem gloves again
[AutoSlayer] Fixes the issues with AutoSlayerSkip

Thanks to TheAlpacalypse and Elad Shahar!

## Melvor @ v0.19.1

## v0.5.5

## Melvor @ v0.19.1

### Fixes (Developer in parenthesis)

* Fix to bank full logic (madasi)
    * Fixes AutoOpen not opening items
    * AutoFarm not harvesting if you don't already have the harvested item in your bank
    * Katorone buying bank slots when it doesn't need to
* Add Agility to AutoMaster (Klz)
* Fix XPH button visibility (Klz)

### New!

* AutoRunecraft by TheAlpacalypse

## v0.5.4

## Melvor @ v0.19!

### Updates

* ETA to latest version

### Fixes

* Bank fixes and such: prevent Katorone errors (Will Mitchell)
* AutoSlayerSkip fixed
* AutoSellGems target stack will maintain a stack of that amount instead of selling all once it hits that stack
* Disabled drag-menus for the combat & non-combat sections because of major changes that break it for those sections
* Barf potion button now readable again
* AutoEquip Best Items: Only equip smithing skillcape if current smithing item requires coal (Shamus Taylor)
* AutoFarm
    * Check before attempting to equip max/completion skillcapes (Shamus Taylor)
    * Logic problems prevented harvest when an item was not in bank; now properly checks if item is not in bank and bank is full

### New Scripts

* AutoLute by Ugh: AutoLute monitors your combat opponent's health and switches to Lute for the final kill of a dungeon, or the killing blow for normal combat, for the 5x GP reward!

## v0.5.3

## Minor fixes & additions

### New Scripts

* ETA, the more up-to-date fork of the TimeRemaining script, has replaced TimeRemaining in SEMI.
    * Note: to use ETA's new GUI menu, you must have Melvor Idle Combat Simulator Reloaded extension installed.

### Script Fixes

* AutoFarm had a bug with the new implementation of the getBankId function, and is now fixed.
* AutoSlayer's config menu options are now named differently than the AutoSkip plugin. (Auto-Skip Unmet Requirements)
* Thief-calc's faulty xp/s calculations removed in favor of ETA's more precise calculations; now properly clears the loading interval when done injecting loot tables

### UI Changes

* Credits update in SEMI menu

## v0.5.2

## Long time no see!

* Wow! I've been busy and/or lazy lately. New job and whatnot. Here's a quick freshen-up update for SEMI to get it working again.
* Much of this SEMI update has been community devs helping with merge requests and such. Thanks a bunch! Ideally, I'll get some sort of system worked out where more people than just myself can push updates to FF/Chrome, and the whole DevOps flow will be much better, even when I'm unavailable.

### Currently Broken

* AutoEat & run still needs some fixing, basically need to recalculate how Max Hit detection works for it to be safe.
* Seems that the 12hr limit script wasn't doing much and I'm getting errors, so I'm going to temp disable it for now.

### Script Updates/Fixes

* AutoSlayer seems back up to full speed.
    * AutoSlayerSkip is also functional, updated, & enabled.
* AutoFarm looks fixed as well.
* AutoMaster has some improvements
    * Skip master increases for things already maxed
    * Auto-closes the modal so it does the spending in the background; drawback: you can't access any mastery page while this script is running.
* Katorone now sets buy quantity to 1 before buying glove charges, preventing buying of many more charges than you intended.

### Still needs testing

* AutoEquipBest, a few others in-depth

## v0.5.1

## Melvor is now v0.18!

### Currently broken scripts

* AutoSlayer/SlayerEquip/SlayerSkip, AutoEat, AutoRun
* These scripts will be disabled until fixes can be implemented.

### New Scripts

* AutoMastery provided by Alex Mauney!
    * AutoMaster will automatically spend down mastery pools when they are above 95%. It will spend your mastery points on your lowest mastery item in the particular skill above 95%. Warning: at this stage it will constantly open your mastery spending page and may interrupt gameplay. Also, be aware that it will be affected by the Mastery XP Spending Multiplier buttons (+1, +5, +10)

### Script Updates

* AutoEquipBestItems had a small fix by Shamus Taylor for amulet of fishing

### Other Fixes

* Colored mastery buttons no longer present in the mastery enhancement script

### Community Coder Shoutouts

* Parataku: taking the initiative on the v0.18 fixes!
* Alex Mauney: providing an auto-mastery script!
* Shamus Taylor: various fixes!

## v0.5

### Core changes
* Per-character SEMI Settings! Coded by Zeldo
* AuroraKy setters & getters: SEMI now has plugin data & config set and get functions
* Config menu available per-plugin as a tippy popout menu from cog buttons in the sidebar
    * Includes new helper functions like `SEMI.saveConfigFromMenu` and `SEMI.updateConfig`
* EventBus: intercepting game events coded by Zeldo
    * Mainly used now for intercepting items being added to bank and instead selling with AutoSell

### New Scripts
* Offline idle time extension script by Zeldo
    * Extends the amount of offline time that can be idled
    * Cleans up the calculation of offline skilling
* AutoEquip Best Item script by Zeldo (beta version)
    * Equips best item for a situation
* Mastery Enhancements by many coders, toggled in SEMI menu
    * Colors buttons to spend pool xp depending on current xp
    * Adds progress bars for pools to skills in the menu

### Script updates
* TimeRemaining is updated and back!
* AutoSellGems & AutoEquip Ammo have working config menus! Access via the cog button on right side of plugin sidebar button.
* AutoSellGems now has the ability to choose stack size to sell at, as well as toggles for each gem
* AutoSell no longer requires a loop interval and instead relies on the new SEMI Event Bus, so it should save on CPU usage and improve performance
* XPH improvements by Visua: time display enhancements and virtual level toggles maximum input value

### UI changes
* Added status icons for AutoSell/Open/Bury as well as AutoSlayerSkip so you can see their status from the sidebar without being inside the actual menus
* Credits update in SEMI menu

### Repository changes
* Prettier formatting for the project files
* Melvor Type definitions included in the repo
* vscode directory un-gitignore'd, settings and more available
* Refactoring done to SEMI utils, now available in intellisense

## v0.4.10

### Core changes

* Plugin menu buttons have changed: status text is now an icon, making way for future config menu cog btns

### Script updates

* All previously temp-disabled scripts (excepting TimeRemaining) are now back online and better than ever thanks to Visua's hard work

## v0.4.9

### Core changes

* Cleanup documentation on content script, also preparing for a change to how SEMI loads
* Prevent auto-enable scripts on refresh if you loaded a different character

### Script updates

* AutoFarm: Mastery priority now plants seeds with the highest mastery (excluding those with maxed mastery) to maximize mastery and pool xp
* Many scripts and utilities fixed by Visua, restoring functionality. Now only 2 that we maintain are down: AutoOpen & AutoBury
* AutoSlayer fixes to prevent fighting monsters you can't kill if you don't have equipment, yet you have AutoSlayerEquip enabled

### UI changes

* Menu updates: credits in the SEMI info section
* Fix: drag-menus now works properly, a couple filters were looking for the wrong metric

## v0.4.8

## Hot(mess)fix: Melvor has updated to Alpha v0.17! Big changes, big breakage

### Core changes

* Notifications are now done in-game through Toastify. Converted SEMI's custom notification system to match

### Script updates

* AutoBonfire: only starts a bonfire if you are currently burning logs. Easy fix
* AutoSlayerSkip bugfix: now actually skips Black Knights! Too bad AutoSlayer is broken for the time being. See below

### Temporary script removal

* AutoFarm is disabled for now. Since it deals heavily with mastery and the mastery system has had an overhaul, it throws errors upon load
* TimeRemaining is also heavily involved with mastery, and in the interest of safety & accuracy it will be disabled until it is updated
* AutoSell, AutoOpen, AutoBury, AutoSlayer, AutoEquip Ammo, AutoSell Gems, Katorone all broken by bank changes. Disabled

## v0.4.7

### Hotfix

* Update manifest match pattern so that SEMI only loads in the game, not the wiki

## v0.4.6

### Core changes

* Zeldo core changes
    * Move SEMI scripts to a SEMI directory, injected as libs
    * Get SEMI version from manifest & populate more fields with it
    * New sidebar header & capabilities
    * Improve load speed of SEMI by making some scripts inject asynchronously?
    * Upcoming: finally transition into TypeScript base!
* Starting Aurora-inspired core changes
    * Plugins have a new default option: config. Set config as an object with plugin settings inside, and pass it with the rest of the options with `SEMI.add()`.
    * `SEMI.pluginConfig(name)`: New SEMI core function to access and modify plugin configs.
    * See `auto-sell-gems.js` for an example of the new config use, more refactoring for core config to come, hopefully this is sufficient for now.
* Visua contributions
    * Various core fixes
    * Drag-menu config fixes
* Etc change: fixed the content script SEMI detection, added an alert if SEMI tries to load on top of an already loaded SEMI instance that suggests refreshing

### Script changes

* Visua contributions
    * AutoFarm fixes
    * AutoSlayer cleanup
    * Updated time-remaining
    * New AutoSlayerSkip feature: See monsters you haven't yet slain and don't appear in your monster logs. Toggle this visibility with the new eye button, top-right of the menu near refresh and close.
* AutoSlayer fix for >99 slayer folk: AutoSlayerEquip now enforces Slayer cape equipping as well. Previously AS was ignoring the AutoEquip option for cape equipping.
* Moved to Tweaks sidebar header from the SEMI etc GUI toggles in the menu:
    * Barf My Potion button toggle
    * Destroy Crops button toggle, improvements, and much improved button GUI as well, if I do say so

## v0.4.5

### Small hotfix

* Update SEMI version to gameVersion

## v0.4.4

### Small hotfix patches

* More etc GUI fixes
* AutoCook fix fixes (no longer changes conflicting game setting every loop, only if it is enabled)
* Small changes to auto-sell-style buttons to make them centered in chrome to match firefox

### AutoEat Changes

* AutoEat in combat will still only eat when your HP is below calculated max hit, but now it will eat to nearly full health instead of just to the max hit value. It eats with efficiency in mind, so it won't eat food if your food healing would cause overhealing. However, it will still eat if you are at risk of dying from max hit, ignoring this efficiency rule. This makes it a little more viable for the v0.16+ combat eating changes. I suggest large quantities of low-healing food for maximum efficiency of this bot.

## v0.4.3

### Small hotfix patch

* Core fixes: GUI toggles for TimeRemaining issues.

## v0.4.2

### Small hotfix patch

* AutoFarm fixes: Fix default AutoFarm config and don't plant seeds in locked patches

## v0.4.1

### More SEMI Core features & menu changes

* AutoEnable Scripts on Refresh now has a GUI toggle in the SEMI menu. (Previously a hidden option only)
    * Small code change to `ore-in-bank.js` to properly work when auto-enabled
    * Added a few bits to Katorone to make it auto-enable as well
* Another non-sidebar toggle: TimeRemaning script. Updated non-sidebar toggle killswitches.
* New `removeGUI()` plugin option
* Fixed core bug by removing redundancy. See [issue #40](https://gitlab.com/aldousWatts/SEMI/-/issues/40) for details

### New Scripts

* AutoFarm by Visua! Very customizable farming robot that replaces AutoReplant.
    * New toggle for AutoFarm: AutoEquip. Allows you to toggle the equipment swap if you want.

### Script fixes & updates

* AutoCook: throws an error and you can't close the offline progress modal when it's on when offline progress is calculating.
    * Fix: AutoCook now constantly disables the experimental option that can cause the uncloseable modal
    * Added extra delay for auto-enabling to prevent uncloseable modal upon refresh
* TimeRemaining updated to v0.4.0: includes Alt Magic!

### Repository changes

* Unified manifests since Firefox for Android isn't allowing SEMI anyway, Android SEMI user count was hovering around zero, pretty much killed by the newest version of the mobile browser.
    * Cleaned up readme & build script to reflect this change
* Change fugly changelog to purdy markdown.

## v0.4

### New SEMI Core features & menu changes

* Backup, Restore, and Nuke your SEMI settings and configuration!
* All these features are present where the SEMI Info Page used to be, replaced by SEMI Menu.
* Toggle non-sidebar SEMI GUI elements with buttons in the SEMI Menu

### AutoMine Changes by Visua

* GUI improvements: Fresh menus that look much nicer.
* Mining by ratios for bar smelting now has coal ratio options: Default, Half, and None.
* Visua mentioned other small fixes in their merge request.

### Minor fixes

* AutoReplant will no longer open a modal when buying compost.
* Small cosmetic changes

### Repository changes

* build.py should now actually work and produces the correctly built web extension zips.

---

v0.3.13

* A few cosmetic changes
* Merged Visua fixes to prevent scrambling of plugins by drag-menus.
* Added refresh buttons to the auto-bury and auto-open Logs.
* Bugfix: auto-run was consuming runes every 500ms upon checking for runes, this has been fixed.
* Repository changes: added .build/build.py as a build script for easily packaging releases.

v0.3.12
Melvor updated a bunch! Now at v0.16.2.1

* Removed some code from semi.js to prevent unnecessary injection of semi.css which threw an error.
* Silenced 1s loop katorone script saving settings in the console, now SEMI.setItem has a silent mode.
* Added failsafe for AutoEat outside combat if your HP healed by your food exceeds your max HP.
    Community code updates
* AutoMine priority button tooltips now fresh and dapper.
* Updated TimeRemaining script to newest version.
* New plugin: ore-in-bank shows the current amount of ore in bank on the mining skill page rocks.
    Visua Merges
* Hopefully fixed random order of drag-menus and prevent new scripts or skills from being auto-hidden.
* SEMI.equipSwap now remembers quantity of arrows or javelins when re-equipping.

v0.3.11
AutoSlayer Fixes & New Menu

* AutoSlayer no longer breaks at level 99 by trying to call a function that doesn't work.
* AutoSlayer Skip now has a menu for selecting which monsters you wanna skip!
* AutoSlayer should no longer throw (harmless) console errors when your slayer task is null.

v0.3.10
Melvor update v0.15.3, fixes

* Script updates
    * Auto Sell bugfix: no longer creates infinite loop when 'All But One' sale mode selected in bank; will override this choice and sell all items in the stack for Auto Sell items, re-enabling the option after selling.
* Minor UI changes

v0.3.9
AutoMine changes & more fixes

* Code & Utilities
    * Equipment Swap: equip an item and remember what was in its slot(s). Call it again to equip original item.
    * Is Bank Full: returns whether or not the bank is full.
* UI updates
    * Quick fix: XP/h for combat now shows Prayer and Slayer in their correct positions in the table.
* New Script
    * Melvor TimeRemaining graciously provided by Breindahl now included: https://greasyfork.org/en/scripts/400936-melvor-timeremaining
* Script updates
    * AutoMine
        * GUI updated & no longer injected into the Mining page without starting the script.
        * The way you set your mining priorities has changed. Now you can directly change the mineArray by dragging elements on the page.
        * No longer mines by ratios until you select a bar. Both bar selector and drag priority are included and work together.
        * No more priority override buttons, since you can exactly set your priority.
    * AutoSellGems now closes the sale confirmation modal for you if you have it enabled.
    * AutoReplant now equips special farming equipment before harvesting and replanting to maximize output.
    * AutoOpen no longer causes issues when trying to open containers with a full bank.
    * AutoSell has a refresh button for when you get new items that weren't yet in your item log when you loaded the game.

v0.3.8.2
Yet more fixes to auto-eat. Incorporated even more combat mechanics; hopefully all the bases are covered:

* Burning damage (Fire god dungeon)
* Reflected damage (Air god dungeon)
* Stun damage increase (Water & Earth god dungeons)
* Detects what attack is incoming and eats accordingly
* Thanks to Lamb on the discord for letting me use some of their auto-eat script: https://pastebin.com/Fw4R7zv5

v0.3.8.1
Hotfix for the hotfix: now properly calculates enemy special attack damage.

v0.3.8
Auto-eat & auto-run hotfix: now calculates stun damage multipliers.
Removed Auto-Fortune, event over!

v0.3.7
Fixes, Android UI improvements, & Event Things

* Code & Utilities
    * New utility to close confirmation modals for selling/buying things. SEMI will now close all modals by default when running automated tasks.
    * Small fix to Android version: stop drag-menus from loading so that you can navigate the sidebar without a problem.
* UI updates
    * All SEMI in-game notifications should now appear over every other element in the page, including auto-sell GUI. This lets you see SEMI auto-sell notifications immediately after enabling.
    * Android game header buttons (including XPH GUI dropdown button & menu) have had margins reduced to prevent UI bugging on portrait mode.
* New scripts
    * AutoFortune: open them chests, baby!
* Script updates
    * AutoEat: back to more efficient, unless fighting a big boss. Now relies on max hit for eating calculations.
    * AutoRun: you're now properly scared of monsters that can kill you in one hit and you'll run away if that's the case.

v0.3.6
Holy Moly! Where to begin?
Massive code changes, big additions, lots of changes.
Huge thanks to DanielRX for the refactoring and additions! A huge part of the update is his fine work!

* Code & Utilities
    * SEMI can now save and load configurations from localstorage
    * Many added utility functions and core changes, almost every script has been updated and improved
    * Custom SEMI stylesheet, mainly used for the drag & lock menus for now
* UI updates
    * Drag-able menus!
        * Locks next to nav-bar section headings allow dragging.
        * Re-order and hide individual elements on the sidebar!
        * The order (and hidden states) are saved across refreshes!
* New scripts
    * Based on functions of Katorone:
        * AutoSell! Select items you want a robot to sell automatically from a nice GUI based on your item log!
        * AutoOpen! A GUI for choosing which containers to automatically open!
        * AutoBury! GUI to select which bones/items you'd like to automatically bury!
    * AutoCombat has been broken up into components:
        * AutoRun: prevent dying when out of food, or wasting food when out of runes/ammo.
        * AutoEquip Ammo: attempts to equip 1000 of the same arrow from your bank when you run below 500 arrows.
* Script updates
    * AutoEat
        * Needs more work, but its primary function is now more like maintaining max HP at all times.
        * Eats much faster and will eat until max HP is reached.
    * AutoCook & AutoSmith Bars
        * More efficient: no longer cycle through fish or bars you don't have materials to cook/smelt.
    * Katorone Automation
        * Somewhat split out into components (see above), but some remain:
            * GP Reserve
            * Auto Buy Bank Space (and sell gems to cover costs)
                * Now respects GP reserve amount.
            * Auto Buy Gem Glove Charges (and sell gems to cover costs)
        * Settings now persist after refreshing! For now, still need to enable it after refresh like any other script.
* Many other subtle code changes that improve SEMI!

Thanks for your patience!

v0.3.5

* AutoMine Changes:

    * Bug fix: cloud loading was causing mining ore container to reload and remove priority override buttons. Automine now checks for this and will add AM buttons if they are deleted.
    * Bar Selection now automatically mines by ratio, meaning it will check your bank for amounts of ores and mine with bar-smelting requirements in mind.
        * For example: when Mithril bar is selected, script will mine until you have 4 times as much coal as mithril in the bank, and continue that pattern so that you are efficiently mining with smelting the particular bar in mind.

* Upcoming:
    * Level calculator from Herblore now universal & more functional, however not accurate yet:
        * A small menu is now present on each crafting skill (cooking, smithing, crafting, etc).
        * These menus calculate (read: estimate) how many of a selected item you'd need to make to get to a level of your choosing, and a time estimate.
        * Still to-do: make them automatically track gloves, burn percentage/mastery bonuses, etc.

v0.3.4

* Melvor Idle has updated to alpha v0.14.2!
    * New AutoSlayer option: skip tasks. Will skip certain monsters (master farmer, moist monster, black knight, mithril knight, rune knight). Future GUI/menu planned.
    * Added extra paragraph of information to Katorone menu explaining how the GP limit will affect AutoReplant, potentially causing empty plots since no compost bought.
    * Easter event! Throwing a script into SEMI to automate your flaps, chaps. Script courtesy of Zeal Iskander on Melvor discord.

v0.3.3

* Melvor Idle has updated to alpha v0.14.1!
    * It seems Percent Accuracy is now in the game, so the percent accuracy script has been removed from SEMI to prevent redundancy.
    * New script: AutoSell Fish Junk. This script will sell all that junk for you instantly and repeat every 10sec, notifying you when selling.
    * XPH Time to Selected Level change: level 99 limit removed, should be functional for virtual levels above level 99.
* Code changes: Gearing up to change how SEMI works under the hood.
    * Huge help from DanielRX: splitting inject.js into individual scripts/plugins, more ideas for code cleanup and functional programming.
* Repository changes: Yep, stuff moved around again.
    * No more chrome release subdirectory. Instead there is a chrome.manifest.json file to replace default if desired. See Readme
    * New subdirectory for all the scripts etc.
* Update on that cooking bug report mentioned below: Malcs seems to have fixed it! Woohoo!

v0.3.2

* Melvor Idle has updated to alpha v0.14!
    * AutoFish is completely broken with the Fishing overhaul. AutoFish removed for now, may not be necessary any longer. If it comes back it'll need major reworks.
    * I submitted a bug report to the developer about the Cooking page, how it doesn't update the number of current fish if you burned fish. So, if you burn your last fish using AutoCook, the script will not continue.
        * Use cooking gloves with this script to ensure it doesn't break
        * If the bug isn't fixed soon I'll get to work rewriting the script to not rely on this buggy UI element
* SEMI Fixes:
    * XPH for Fishing now works and doesn't break the entire XPH system.
    * AutoCook was broken after the Cooking UI updated, fixed.
    * Not sure when a code typo slipped in for the Destroy All Crops button, but it's fixed.
* Updated from Others:
    * Arcanus: Added AutoReplant functionality for the Weird Goop update addition

v0.3.1

* AutoSmith Bars: New skill automation that will cycle through your smeltable bars and smelt them all.
* UI Changes:
    * Katorone settings menu moved to AutoSkills section
    * AutoSkills rearranged
* Small fixes
    * When using AutoCombat in dungeons with ranged, attempting to autoequip arrows would cause a broken loop.
    * AutoCombat automatically equipping arrows no longer reports equipping Normal Logs when at 0 arrows.
    * When canceling AutoCook, will stop cooking immediately.
    * AutoSlayer will no longer skip Slayer tasks when you are properly equipped for a slayer zone and AS Auto Equip is disabled.
* Repository changes
    * Moved extension code to source subdirectory
    * Created changelog to clean up the readme
    * Created chrome release version subdirectory for ez chrome installation without browser_specific_settings error

v0.3

* Seems to be working on android Firefox. Might as well open it up to that platform as well. **Best displayed in landscape view.**
    * Note for Chrome users: this version will throw a harmless error when loading into Chrome because Chrome does not recognize a part of the manifest.json necessary to run the extension on Firefox for Android. If you want to get rid of the error, delete the "browser_specific_settings" section in manifest.json. Deleting lines 13-17 of manifest.json will give you a perfectly fine Chrome version.
* Additions:
    * GUI for XPH for every skill. Get crunchy with your XP per hour calculations nicely displayed in-game, no console needed. Also calculates time until desired level.
    * GUI for AutoMine Bar Selection: with priority override and smithing bar selection, there are plenty of ways to customize AutoMine to your needs without using the console.
    * Barf my potion button: Removes your currently equipped potion on the current page. Handy for chasing down fishing chests when you just drank a fisherman's potion!
    * AutoCombat will now attempt to re-equip 1000 of your currently equipped arrows from your bank if your quiver has less than 500, and will still exit combat if you run out completely.
* Fixes:
    * AutoSlayer was a little broken after combat was updated in Melvor v0.13, but now seems to run fine.
        * Was ignoring equipment requirements for slayer zones. Changed code to fix this.
        * Was throwing a dungeon complete screen every kill if you had just finished a dungeon then used AutoSlayer. Added a line to fix.
        * Was not re-equipping items after leaving slayer zones where they were required. Fixed.

v0.2.3.1:

* Some Katorone Automation edits that I did caused an issue with reserve gold and selling gems to pay for glove charges. This hotfix takes care of that issue: Katorone will now sell gems to boost the GP pool past the reserve amount in order to buy gem glove charges, thereby fixing the automation. Previously, it would not sell gems if you were at your reserve gold amount, and could not buy gem glove charges as a result.
* Minor UI updates

v0.2.3:

* AutoSell Gems was broken by the updated getBankQty function, reverted back, the script works again.
* Removed AutoCook extra button as Cooking is now idle from the start in alpha v0.13
* Fixed AutoCook script to work in alpha v0.13
* AutoEat script is now usable outside of combat, useful for thieving (suggested by Pentharian)
* Destroy All Crops button added to the Farming page: will remove all your plants in the currently selected farming area (suggested & prototyped by Jarx)
* Chase Crabs option for AutoFishing: will hunt down crabs for fishing potions. If using potions, will only hunt them if they are max in an area. Otherwise, will prioritize them after chests. (suggested by Jarx)

v0.2.2:

* AutoEat will now cycle through equipped foods before exiting combat (credit rebelEpik)
* getBankQty function updated for efficiency (credit rebelEpik)
* AutoReplant disabled by default (suggested by Rickardo)
* AutoFish is now fully automated: it will find max XP fish and stop chasing chests when using fishing potions.
* 0.2.2.1: quick fix to make sure AutoFish is hidden when Auto Skills visibility is toggled
* 0.2.2.2: quick fix to make sure AutoReplant is ACTUALLY off when starting SEMI.

v0.2.1:

* Quick fixes & mods to the Katorone scripts by rebelEpik & me:
    * Auto buy gem glove charges now respects the bank gp limit
    * AutoReplant respects the bank gp limit when Katorone is enabled and won't buy compost unless it has more than the reserve

v0.2:

* Huge update: incorporated many functions from Katorone's automation script into SEMI complete with a settings menu.
* Tweaked AutoMine to only switch if the current mining action is complete (more efficient)
* Added AutoMine priority override buttons, allows you to select one ore to prioritize above all others (still seeks highest XP)

v0.1.1:

* AutoCook by Unicue (cycles through fish and cooks in order)
* AutoFish by BreakIt, Jarx, and Myself with added options: Max Mode (for use with fishing potions) and Chase Chests (fish treasure chests when spawned)
* UI updates & more menu toggles, even for native Melvor sidebar sections like Other & Socials
