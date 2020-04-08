# SEMI General notes

## TODO

ideally convert many scripts into userscripts for those who don't want a full extension

universal button status toggle function for script cleanup...? ideas on how to do this... toggleStatusText("so-and-so"); but... would have to specify where it was coming from. hmmmmmm. this might not be worth changing.

Major script cleanup: moving variables to a SEMI variable container

mastery time calculators

time until done calculators? more items til done calculators? there already be utils/calcs out there. Link to them in info?

    const craftTime = 2; //s
    
    var numItemsCraftable = math;
    
    output.text(numItemsCraftable*craftTime+" sec til done");
    
craftInterval: game variable for ms that it takes to use crafting to make one item. Halved with skill cape. Could be useful for item/xp time calc. Thief calc does this.

add custom settings in localstorage?... keeps variables like autoLoot, autoEat, autoEquipZone, etc.
    
    localStorage.SEMI.setItem('test', test)
    
idk i like how these scripts kind of reset after reload. so, won't start up with autobon enabled...but that's not really an option so much as it is doing some dumb stuff when loaded. so, maybe the AC/slayer option toggles would be fine.

custom configuration of UI: set which scripts to 'load' and which to leave out, select which buttons, rearrange? this would ideally make use of saved semi settings.
    
Jarx additions: (could be good inside Katorone menu)

    automatically upgrade fishing rod (AutoFish)
    
    pickaxe (AutoMine) 
    
    woodcutting axe (background script, maybe injected in Percent Accuracy?)
    
AutoSlayer skip-monster menu/setting
    
AutoLoot AutoSell GUI Based on Completion Log - all ? are looted, all known are sold by default, select of the remaining which you want to keep.
    
AutoReplant: choose highest available seeds for replanting if you run out of seeds

More settings for autocombat

    Auto only-loot bones/etc... select which items to omit? or certain monsters don't loot?
    Auto-prayer.

Fishing: select which fish to auto-sell


-----

## FUNKY IDEAS

sound plays when idle is done and no task queued? repeats every minute or so

task queueing

sounds in combat, alert sound for low health

-----

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
