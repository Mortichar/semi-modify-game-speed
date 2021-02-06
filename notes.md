# SEMI General notes

## Broken/needs fixing

* TimeRemaining -> that other script
* Deeper testing
* Repo CI/CD stuff
* Add wiki to help new devs/users
* Find a way to poll users to see what they want
    * Migrate to Github?

## TODO overflow

* AutoEat wasteful mode config menu toggle
* AutoFarmEquip config menu toggle between Signet & other ring
* Ambitious: AutoSell per-item target stack/min stack to keep? -> kill AutoSellGems
* katorone -> automine config menu? gp min script? split n stuff?
* Reset-to-default button for the UI drags. SEMI.removeItem('drag-menu-config'); orderMenus();?
* Jarx additions:
    * automatically upgrade fishing rod (AutoFish)
    * pickaxe (AutoMine)
    * woodcutting axe (background script)

## bug squashing & code snips

Set slayer task to 2 griffins (magic ring):
`slayerTask = [{monsterID: 22, count: 2}]; updateSlayerTask(0);`

And 2 lots of eyes (mirror shield):
`slayerTask = [{monsterID: 20, count: 2}]; updateSlayerTask(0);`

100% complete character command (buggy, probably outdated in 0.17)
```
for(_ of monsterStats)_.killedByPlayer=bankMax=t=891;dungeonCompleteCount.fill(t);
for(;t--;)addItemToBank(t,slayerCoins=gp=9e9,addXP(t%20,3e5),0);
for(e in w=this){for(j=20;j--;){try{e[h='includes']`pgr`&&w[e](j,1)}catch{}e[h]`Mas`&&w[e].map?.(async(y,i)=>{y.masteryXP=11e5;levelUpMastery(j,i,w[e])})}}
petUnlocked.fill(1);
updateWindow()
```