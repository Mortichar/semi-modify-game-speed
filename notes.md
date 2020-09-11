# SEMI General notes

## v0.4.1

* ~~AutoFarm by Visua!~~
* ~~Toggle equip swap for AutoFarm?~~
* ~~Fix warnings that may be present in time-remaining.js from exposed inner/outer HTML assigns~~

## TODO overflow

* Reset-to-default button for the UI drags. SEMI.removeItem('drag-menu-config'); orderMenus();?
* "Better" checks for things like putting on capes and gloves etc when needed
* Jarx additions:
    * automatically upgrade fishing rod (AutoFish)
    * pickaxe (AutoMine)
    * woodcutting axe (background script)
* ~~mastery time calculators~~ wait for 0.17
* ~~refine calc-to-level to include mastery/other bonuses for xp...~~ wait for 0.17 or use it at all! lol.
* ~~Potential auto-claim token script, maybe in auto-open?~~

## bug squashing & code snips

Set slayer task to 2 griffins (magic ring):
`slayerTask = [{monsterID: 22, count: 2}]; updateSlayerTask(0);`
And 2 lots of eyes (mirror shield):
`slayerTask = [{monsterID: 20, count: 2}]; updateSlayerTask(0);`
