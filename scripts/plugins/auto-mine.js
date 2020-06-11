(() => {
    const id = 'auto-mine';
    const title = 'AutoMine';
    const desc = 'AutoMine will mine highest XP ore first automatically. SEMI\'s version will not switch ores until mining action is complete. You can set your mining priorities by dragging and dropping in the Mining page while the script is running.';
    const imgSrc = 'assets/media/shop/pickaxe_dragon.svg';
    const skill = 'Mining';


    // const addOverrideButtons = () => {
    //     if ($('#autoMine1').length) return;
    //     for (let i = 0; i < rockData.length; i++) {
    //         const overrideBtn = $(`<button id="autoMine${i}" class="btn btn-outline-primary" style="width: 100%" type="button">AM Priority Override</button>`);
    //         overrideBtn.on('click', () => autoMineSet(i));
    //         $(`#mining-ore-${i}`).prepend(overrideBtn);
    //     }
    // };

    // const injectAutoMineGUI = () => {
    //     addOverrideButtons();

    //     const bars = ['bronze', 'iron', 'steel', 'silver', 'gold', 'mithril', 'adamantite', 'runite', 'dragonite'];
    //     const ores = ['rune_essence', 'copper', 'tin', 'iron', 'coal', 'silver', 'gold', 'mithril', 'adamantite', 'runite', 'dragonite'];
    //     const btn = (i) => `<button id="AMbtn${i}" class="AMbtn btn btn-outline-primary" type="button">
    //     <img src="assets/media/bank/${bars[i]}_bar.svg" width="32" height="32">
    //     </button>`;

    //     const btns = Array(10).fill(0).map((_, i) => btn(i)).join('\n        \n');
    //     const selector = `
    //     <div class="col-6 col-lg-12" id="AMselector">
    //         <div class="block-header text-center mb-1 SEMI-gold" style="color: gold; background: #2c343f !important; border-radius: 5px;">
    //             SEMI AutoMine Bar Selection GUI: Set the robot to mine ores for specific bars.
    //         </div>
    //     </div>`
    //     //AutoMine Bar Select GUI
    //     $('#mining-container .row:first').after($(`${selector}<div class="col-6 col-lg-12">${btns}</div><br><br>`));
    //     for(let i = 0; i < bars.length + 1; i++) { $(`#AMbtn${i}`).on('click', () => AMselect(i)); }
    //     $(`#AMbtn${9}`).attr('title', "Default AM mineArray setting: prioritize XP.");
    //     $(`#AMbtn${9}`).find('img').attr('src', "assets/media/shop/pickaxe_dragon.svg")
    //     highlightBarBtn(9);
    // };

    const menuConfig = {};
    const storeAutoMineOrder = () => {
        const menu = $("#SEMI-Auto-Mine-drag-div");
        menuConfig['AM'].order = [...menu.children()].map((x) => x.id);
        SEMI.setItem("AM-priority-config", menuConfig);
        orderMenu();
    };
    const indexOrInf = (arr) => (el) => {
        let i = arr.indexOf(el);
        return i === -1 ? Infinity : i;
    };
    const orderMenu = () => {
        const menu = $("#SEMI-Auto-Mine-drag-div");
        const order = menuConfig['AM'].order;
        if(order.length === 0) {return;}
        const menuItems = [...menu.children()];
        const indexOf = indexOrInf(order);
        const sortedMenu = menuItems.sort((menuA, menuB) => indexOf(menuA.id) - indexOf(menuB.id));
        menu.append(sortedMenu);
    }
    const injectAutoMineGUI = () => {
        const ores = ['copper', 'tin', 'iron', 'coal', 'silver', 'gold', 'mithril', 'adamantite', 'runite', 'dragonite', 'rune_essence'];
        menuConfig['AM'] = {locked: false, order: []};

        const div = (i) => {
            if (i==10) {
                return `<div id="AutoMineDrag${i}" class="AMbtn btn btn-outline-primary SEMI-AM-els">
                <img src="assets/media/bank/${ores[i]}.svg" width="36" height="36">
                </div>`;
            } else {
                return `<div id="AutoMineDrag${i}" class="AMbtn btn btn-outline-primary SEMI-AM-els" title="${ores[i]}">
                <img src="assets/media/skills/mining/rock_${ores[i]}.svg" width="36" height="36">
                </div>`;
            }
        }

        const divs = Array(11).fill(0).map((_, i) => div(i)).join('');

        const selector = `
        <div class="col-6 col-lg-12" id="AMselector">
            <div class="block-header mb-1 SEMI-gold SEMI-AM-info" style="">
                SEMI AutoMine Priority Setting GUI: Set priority directly by dragging.<br>
                <-- Highest Priority || Lower Priority -->
            </div>
        </div>`

        $('#mining-container .row:first').after($(`${selector}<div id="SEMI-Auto-Mine-drag-div" class="col-6 col-lg-12">${divs}</div><br><br>`));

        const makeSortable = (id) => {
            Sortable.create(document.getElementById(id), {
                animation: 150,
                filter: '.SEMI-locked',
                onEnd: storeAutoMineOrder}); };
        makeSortable('SEMI-Auto-Mine-drag-div');

        const storedMenuConfig = SEMI.getItem("AM-priority-config");
        if (storedMenuConfig !== null) {
            menuConfig['AM'] = storedMenuConfig['AM'];
            orderMenu();
        }

        const bars = ['bronze', 'iron', 'steel', 'silver', 'gold', 'mithril', 'adamantite', 'runite', 'dragonite'];
        const btn = (i) => `<button id="AMbtn${i}" class="AMbtn btn btn-outline-primary SEMI-AM-els" type="button">
        <img src="assets/media/bank/${bars[i]}_bar.svg" width="36" height="36">
        </button>`;

        const btns = Array(10).fill(0).map((_, i) => btn(i)).join('');
        const barSelector = `
        <div class="col-6 col-lg-12" id="AMselector">
            <div class="block-header mb-1 SEMI-gold SEMI-AM-info">
                Bar Selection: Mine by ratios of resources in your bank.<br>
                Ex: 4 coal per 1 mithril. Senses Smithing cape & halves coal requirements if owned.<br>
                Click current selection to de-select and return to priority-based mining.
            </div>
        </div>`
        //AutoMine Bar Select GUI
        $('#SEMI-Auto-Mine-drag-div').after($(`${barSelector}<div class="col-6 col-lg-12">${btns}</div>`));
        for(let i = 0; i < bars.length + 1; i++) { $(`#AMbtn${i}`).on('click', () => AMselect(i)); }
        $(`#AMbtn${9}`).attr('title', "Default AM mineArray setting: prioritize XP.");
        $(`#AMbtn${9}`).find('img').attr('src', "assets/media/shop/pickaxe_dragon.svg")

    };

    const ORES = {Copper: 0, Tin: 1, Iron: 2, Coal: 3, Silver: 4, Gold: 5, Mithril: 6, Adamantite: 7, Runite: 8, Dragonite: 9, RuneEssence: 10};

    const oreIDs = [45, 46, 47, 48, 49, 50, 51, 52, 53, 54];

    const mineArrays = [
        [ORES.Copper, ORES.Tin], // bronze
        [ORES.Iron], // iron
        [ORES.Iron, ORES.Coal], // steel
        [ORES.Silver], // silver
        [ORES.Gold], // gold
        [ORES.Mithril, ORES.Coal], // mith bar
        [ORES.Adamantite, ORES.Coal], // addy bar
        [ORES.Runite, ORES.Coal], // rune bar
        [ORES.Dragonite, ORES.Runite, ORES.Coal], // dragon bar (snack legendarily ®)
        [ORES.Dragonite, ORES.Runite, ORES.Adamantite, ORES.Mithril, ORES.Gold, ORES.Silver, ORES.Coal, ORES.Iron, ORES.Tin, ORES.Copper, ORES.RuneEssence], //xp priority
        [ORES.RuneEssence]
    ];

    let AMselection = -1;

    const barRatios = [
        {[ORES.Copper]: 1, [ORES.Tin]: 1},
        {[ORES.Iron]: 1},
        {[ORES.Iron]: 1, [ORES.Coal]: 2},
        {[ORES.Silver]: 1},
        {[ORES.Gold]: 1},
        {[ORES.Mithril]: 1, [ORES.Coal]: 4},
        {[ORES.Adamantite]: 1, [ORES.Coal]: 6},
        {[ORES.Runite]: 1, [ORES.Coal]: 8},
        {[ORES.Dragonite]: 1, [ORES.Runite]: 2, [ORES.Coal]: 12}
    ];
    let resourceRatios = [];
    // let mineArray = mineArrays[9];

    //autoMine Override: buttons injected in setupSEMI
    // let autoMineOverride = false;
    // let overrideRock;

    // /** @param {number} x */
    // const autoMineSet = (x) => {
    //     if (x == overrideRock && autoMineOverride) {
    //         mineArray.shift();
    //         autoMineOverride = false;
    //         overrideRock = null;
    //         $(`#autoMine${x}`).removeClass('btn-primary'); //de-highlight current selection & turn off
    //     } else {
    //         if (overrideRock !== null && autoMineOverride) {
    //             mineArray.shift();
    //             $(`#autoMine${overrideRock}`).removeClass('btn-primary'); //de-highlight previous
    //         }
    //         mineArray.unshift(x);
    //         $(`#autoMine${x}`).addClass('btn-primary'); //highlight
    //         overrideRock = x;
    //         autoMineOverride = true;
    //     }
    // };

    /** @param {number} n */
    const highlightBarBtn = (n) => {
        $('.AMbtn').removeClass('btn-primary'); //de-highlight all
        $(`#AMbtn${n}`).addClass('btn-primary'); //highlight n
    };


    /**
     * autoMine Selector: GUI for choosing bars to mine for.
     * @param {number} n
     */
    const AMselect = (n) => {
        if (n == AMselection) { n = -1; }
        highlightBarBtn(n);
        AMselection = n;
        if (n !== -1) { mineArray = mineArrays[n]; }
    };

    //AutoMine: Will mine based on your or priorities set in mineArray //aw: this still works awesomely!
    const onEnable = () => {
        if (!SEMI.isCurrentSkill(skill)) { mineRock(0); }
        injectAutoMineGUI();
    };

    const onDisable = () => {
        SEMI.stopSkill(skill);
        removeAutoMineGUI();
        // SEMI.removeAutoMineGUI();
    };

    let mineArray = [ORES.Dragonite, ORES.Runite, ORES.Adamantite, ORES.Mithril, ORES.Gold, ORES.Silver, ORES.Coal, ORES.Iron, ORES.Tin, ORES.Copper, ORES.RuneEssence];

    /** @param {number[]} rocks */
    const autoMine = (rocks = mineArray) => {
        let swingRatio = 0;
        if (SEMI.isCurrentSkill(skill)) { swingRatio = Number(document.getElementById(`mining-rock-progress-${currentRock}`).style.width.split('%')[0]); }
        if (AMselection !== 9 && AMselection !== -1) {
            for (const rock of rocks) {
                const wearingCape = SEMI.currentEquipmentInSlot('Cape') == CONSTANTS.item.Smithing_Skillcape;
                const ownsCape = SEMI.ownsCape('Smithing');
                resourceRatios[rock] = SEMI.getBankQty(oreIDs[rock])/(barRatios[AMselection][rock]);
                if ((wearingCape || ownsCape) && rock == [ORES.Coal]) { resourceRatios[rock] *= 2; }
            }
            mineArray.sort((a, b) => resourceRatios[a] - resourceRatios[b]);
        }
        const order = menuConfig['AM'].order;
        if(order.length !== 0 && AMselection == -1) {
            const indexOf = indexOrInf(order);
            mineArray = [ORES.Dragonite, ORES.Runite, ORES.Adamantite, ORES.Mithril, ORES.Gold, ORES.Silver, ORES.Coal, ORES.Iron, ORES.Tin, ORES.Copper, ORES.RuneEssence];
            mineArray.sort((a,b) => indexOf(`AutoMineDrag${a}`) - indexOf(`AutoMineDrag${b}`));
        }
        for(const rock of rocks) {
            if (!SEMI.isCurrentSkill(skill)) mineRock(rock);
            if(!rockData[rock].depleted && miningData[rock].level <= SEMI.currentLevel(skill)) { //added extra condition to make universal
                if(currentRock !== rock && (swingRatio<10) ) { mineRock(rock); }
                return; //necessary to stop it looping all the way to last rock. i see now.
            }
        }
        storeAutoMineOrder();
    };

    const removeAutoMineGUI = () => {
        // $("#AMbtn0").parent().remove();
        $("#AMselector").nextUntil('#mining-ores-container').remove();
        $("#AMselector").remove();
        $("[id^='autoMine']").remove();
    };

    // const mergeObj = {removeAutoMineGUI};
    //injectGUI: injectAutoMineGUI,
    SEMI.add(id, {ms: 100, onLoop: autoMine, onEnable, onDisable, desc, title, imgSrc, skill});

    // SEMI.mergeOnto(SEMI, {removeAutoMineGUI});
})();
