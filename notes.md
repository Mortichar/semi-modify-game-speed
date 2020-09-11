# SEMI General notes

## Next large patch
* removeGUI uses
    * apply&save toggles
* 1 or 2 more issues/requests

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

100% complete character command (buggy)
```
for(_ of monsterStats)_.killedByPlayer=bankMax=t=891;dungeonCompleteCount.fill(t);
for(;t--;)addItemToBank(t,slayerCoins=gp=9e9,addXP(t%20,3e5),0);
for(e in w=this){for(j=20;j--;){try{e[h='includes']`pgr`&&w[e](j,1)}catch{}e[h]`Mas`&&w[e].map?.(async(y,i)=>{y.masteryXP=11e5;levelUpMastery(j,i,w[e])})}}
petUnlocked.fill(1);
updateWindow()
```