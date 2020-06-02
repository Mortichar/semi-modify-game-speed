# SEMI General notes

## bug squashing


## TODO

* Make test save. Should have:
    * A collection of logs (autoBonfire)
    * Fish (autoCook)
    * All gems (for now)
    * All seeds
    * Some compost & weird gloop (autoReplant)
    * All kinds of
        * ores (autoSmelt)
        * bones (autoBury)
        * openables (autoOpen)
        * potions (barf)
        * Arrows n runes (autoRun&ammo)
        * foods
        * slayer gears
    * Gem gloves with <6000 charges, >5M GP (katorone)
    * Mostly full bank to test katorone
    * Console commands to add slayer task of a monster in either of the equip-zones, or skippies. Had em somewhere.

* "Better" checks for things like putting on capes and gloves etc when needed
* Reset-to-default button for the UI drags.
* Set mine array by dragables
* Add better auto-eat for major update content... for now, it's just very fast and no longer efficient.
* AutoCombat additions (autoRun now?)
    * Run if you won't survive max hit
    * Look at that script again
* Auto-prayer?
* autosellgems obsolete-delete? later.
* Android: make the xph button smaller? portrait mode glitchy
* AutoReplant... -> AutoFarming?
    * causing confusion when katorone is on and the crops die. Good fix: make autoreplant work even on crop failure. For now: information in title tooltip and katorone about autoreplant effects with bot gold limit.
    * choose highest available seeds for replanting if you run out of seeds
    * Suggestion by got ADHD: GUI for herblore for autoreplant, will plant by ratios to get herbs that are needed for potions
    * Suggestion by Bisping: toggles for each farming area for gloop, each plot even (auto-detect if gloop used, then gloop that plot next time)
    * A lot of these ideas would probably end up turning autoreplant -> AutoFarming
* mastery time calculators
* refine calc-to-level to include mastery/other bonuses for xp
* Jarx additions:
    * automatically upgrade fishing rod (AutoFish)
    * pickaxe (AutoMine)
    * woodcutting axe (background script)
* ideally convert many scripts into userscripts for those who don't want a full extension. halfway there with DanielRX's help!
    and/or modularized scripts within semi: choose which to load, add custom, etc.

-----

## FUNKY IDEAS

sound plays when idle is done and no task queued? repeats every minute or so

task queueing

sounds in combat, alert sound for low health