# SEMI General notes

## TODO

* We need to make the herblore calc item to level thing more functional/universal

* Major script cleanup: moving variables to a SEMI variable container

    * Move scripts & on/off status to this variable, combine setIntervals, etc

    * Part of this: move the hide/show to a 'forEach' type thing, maybe make nav items semi-nav-skill-[0...7] and semi-nav-combat[0...6] and just toggle semi-nav*

* AutoReplant... -> AutoFarming?

    * causing confusion when katorone is on and the crops die. Good fix: make autoreplant work even on crop failure. For now: information in title tooltip and katorone about autoreplant effects with bot gold limit.

    * choose highest available seeds for replanting if you run out of seeds

    * Suggestion by got ADHD: GUI for herblore for autoreplant, will plant by ratios to get herbs that are needed for potions

    * Suggestion by Bisping: toggles for each farming area for gloop, each plot even (auto-detect if gloop used, then gloop that plot next time)

    * A lot of these ideas would probably end up turning autoreplant -> AutoFarming

* mastery time calculators

* time until done crafting/creating calculators? more items til done calculators? there already be utils/calcs out there. Link to them in info?

    const craftTime = 2; //s
    var numItemsCraftable = math;
    output.text(numItemsCraftable*craftTime+" sec til done");

* add custom settings in localstorage?... keeps variables like autoLoot, autoEat, autoEquipZone, etc.

    localStorage.SEMI.setItem('test', test)

    * idk i like how these scripts kind of reset after reload. so, won't start up with autobon enabled...but that's not really an option so much as it is doing some dumb stuff when loaded. so, maybe the AC/slayer option toggles would be fine.

    * custom configuration of UI: set which scripts to 'load' and which to leave out, select which buttons, rearrange? this would ideally make use of saved semi settings.

* Jarx additions: (could be good inside Katorone menu)

    * automatically upgrade fishing rod (AutoFish)

    * pickaxe (AutoMine)

    * woodcutting axe (background script)

* AutoLoot AutoSell GUI Based on Completion Log - all ? are looted, all known are sold by default, select of the remaining which you want to keep.

* More settings for autocombat

    * Auto only-loot bones/etc... select which items to omit? or certain monsters don't loot?

    * Auto-prayer.

* Fishing: select which fish to auto-sell

* ideally convert many scripts into userscripts for those who don't want a full extension. halfway there with DanielRX's help!

-----

## FUNKY IDEAS

sound plays when idle is done and no task queued? repeats every minute or so

task queueing

sounds in combat, alert sound for low health

-----

## Code snippets

    /* we don't need this after all. maybe useful for something. moving to notes.
    let pages = [{
        name: 'woodcutting',
        skillID: 0
    }, {
        name: 'shop',
        upyourbutt: 'andstuffit'
    }, {
        name: 'bank'
    }, {
        name: 'settings'
    }, {
        name: 'changelog'
    }, {
        name: 'milestones'
    }, {
        name: 'statistics'
    }, {
        name: 'fishing',
        skillID: 1
    }, {
        name: 'firemaking',
        skillID: 2
    }, {
        name: 'cooking',
        skillID: 3
    }, {
        name: 'mining',
        skillID: 4
    }, {
        name: 'smithing',
        skillID: 5
    }, {
        name: 'mastery'
    }, {
        name: 'combat',
        skillID: [6,7,8,9,12,16,18,17]
    }, {
        name: 'thieving',
        skillID: 10
    }, {
        name: 'farming',
        skillID: 11
    }, {
        name: 'fletching',
        skillID: 13
    }, {
        name: 'crafting',
        skillID: 14
    }, {
        name: 'runecrafting',
        skillID: 15
    }, {
        name: 'herblore',
        skillID: 19
    }];
    */
