# SEMI General notes

## TODO overflow

* "Better" checks for things like putting on capes and gloves etc when needed
* Reset-to-default button for the UI drags.
* mastery time calculators
* refine calc-to-level to include mastery/other bonuses for xp... or use it at all! lol.
* Jarx additions:
    * automatically upgrade fishing rod (AutoFish)
    * pickaxe (AutoMine)
    * woodcutting axe (background script)
* Potential auto-claim token script, maybe in auto-open?

## bug squashing & code snips

Set slayer task to 2 griffins (magic ring):
`slayerTask = [{monsterID: 22, count: 2}]; updateSlayerTask(0);`
And 2 lots of eyes (mirror shield):
`slayerTask = [{monsterID: 20, count: 2}]; updateSlayerTask(0);`
