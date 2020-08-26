# SEMI General notes

Test add- push mee

## TODO

* "Better" checks for things like putting on capes and gloves etc when needed
* Reset-to-default button for the UI drags.
* mastery time calculators
* Auto-prayer?
* autosellgems obsolete-delete? later.
* AutoReplant... -> AutoFarming?
    * causing confusion when katorone is on and the crops die. Good fix: make autoreplant work even on crop failure. For now: information in title tooltip and katorone about autoreplant effects with bot gold limit.
    * Suggestion by got ADHD: GUI for herblore for autoreplant, will plant by ratios to get herbs that are needed for potions
    * Suggestion by Bisping: toggles for each farming area for gloop, each plot even (auto-detect if gloop used, then gloop that plot next time)
    * A lot of these ideas would probably end up turning autoreplant -> AutoFarming
* refine calc-to-level to include mastery/other bonuses for xp
* Jarx additions:
    * automatically upgrade fishing rod (AutoFish)
    * pickaxe (AutoMine)
    * woodcutting axe (background script)
* ideally convert many scripts into userscripts for those who don't want a full extension. halfway there with DanielRX's help!
    and/or modularized scripts within semi: choose which to load, add custom, etc.
    this is sort of included now that you can hide individual script buttons.
* any script that auto wields farming cape/signet/rake before harvesting? - pikkkaa
* Potential auto-claim token script, maybe in auto-open?

-----

## FUNKY IDEAS

* sound plays when idle is done and no task queued? repeats every minute or so
* task queueing
* sounds in combat, alert sound for low health

## bug squashing & code snips

Set slayer task to 2 griffins (magic ring):
`slayerTask = [{monsterID: 22, count: 2}]; updateSlayerTask(0);`
And 2 lots of eyes (mirror shield):
`slayerTask = [{monsterID: 20, count: 2}]; updateSlayerTask(0);`
