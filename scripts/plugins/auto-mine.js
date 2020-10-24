(() => {
    const id = 'auto-mine';
    const title = 'AutoMine';
    const desc =
        "AutoMine will mine highest XP ore first automatically. SEMI's version will not switch ores until mining action is complete. You can set your mining priorities by dragging and dropping in the Mining page while the script is running.";
    const imgSrc = 'assets/media/shop/pickaxe_dragon.svg';
    const skill = 'Mining';

    const menuConfig = {};

    const storeConfig = () => {
        SEMI.setItem('AM-priority-config', menuConfig);
    };

    const storeAutoMineOrder = () => {
        const menu = $('#SEMI-Auto-Mine-drag-div');
        menuConfig['AM'].order = [...menu.children()].map((x) => x.id);
        storeConfig();
        orderMenu();
    };

    const indexOrInf = (arr) => (el) => {
        let i = arr.indexOf(el);
        return i === -1 ? Infinity : i;
    };

    const orderMenu = () => {
        const menu = $('#SEMI-Auto-Mine-drag-div');
        const order = menuConfig['AM'].order;
        if (order.length === 0) {
            return;
        }
        const menuItems = [...menu.children()];
        const indexOf = indexOrInf(order);
        const sortedMenu = menuItems.sort((menuA, menuB) => indexOf(menuA.id) - indexOf(menuB.id));
        menu.append(sortedMenu);
    };

    const injectAutoMineGUI = () => {
        if ($(`#${id}`).length) {
            return;
        }

        menuConfig['AM'] = { coalRatio: 'default', order: [] };
        const storedMenuConfig = SEMI.getItem('AM-priority-config');
        if (storedMenuConfig !== null) {
            menuConfig['AM'] = storedMenuConfig['AM'];
        }

        const ores = [
            'copper',
            'tin',
            'iron',
            'coal',
            'silver',
            'gold',
            'mithril',
            'adamantite',
            'runite',
            'dragonite',
            'rune_essence',
        ];
        const createDragDiv = (i) => {
            let title = `${ores[i].charAt(0).toUpperCase() + ores[i].slice(1)} Ore`;
            let src = `assets/media/skills/mining/rock_${ores[i]}.svg`;
            if (i === 10) {
                title = 'Rune Essence';
                src = `assets/media/bank/${ores[i]}.svg`;
            }
            return `<div id="AutoMineDrag${i}" class="AMbtn btn btn-outline-primary" style="padding: 2px ; margin: 2px;" data-tippy-content="${title}"><img src="${src}" width="36" height="36"></div>`;
        };

        const bars = ['bronze', 'iron', 'steel', 'silver', 'gold', 'mithril', 'adamantite', 'runite', 'dragonite'];
        const createBarButton = (i) => {
            let src = `assets/media/bank/${bars[i]}_bar.svg`;
            if (i === bars.length) {
                src = 'assets/media/shop/pickaxe_dragon.svg';
            }
            return `<div id="AMbtn${i}" class="AMbtn btn btn-outline-primary" style="padding: 2px ; margin: 2px;"><img src="${src}" width="36" height="36"></div>`;
        };

        const createCoalRadioButton = (value, description, tooltip, defaultOption = false) => {
            const name = `${id}-coal-ratio`;
            const elementId = `${description}-${value}`;
            return `
                <div class="custom-control custom-radio custom-control-inline custom-control">
                    <input class="custom-control-input" type="radio" id="${elementId}" name="${name}" value="${value}"${
                menuConfig['AM'].coalRatio === value || (defaultOption && !menuConfig['AM'].coalRatio)
                    ? ' checked'
                    : ''
            }>
                    <label class="custom-control-label" for="${elementId}" data-tippy-content="${tooltip}">${description}</label>
                </div>`;
        };

        const barOptions = `
            <div class="custom-control-inline">Coal ratio:</div>
            ${createCoalRadioButton('default', 'Default', 'For smithing without cape or Superheat I-III', true)}
            ${createCoalRadioButton('half', 'Half', 'For smithing with cape')}
            ${createCoalRadioButton('none', 'None', 'For Superheat IV')}
            <div>${bars.map((_, i) => createBarButton(i)).join('') + createBarButton(bars.length)}</div>`;

        const createBlock = (title, description, content) => {
            return `
                <div class="col-md-6">
                    <div class="block block-rounded block-link-pop border-top border-mining border-4x" style="padding-bottom: 12px; display: flex; flex-direction: column">
                        <div class="block-header text-center"><h3 class="block-title">${title}</h3></div>
                        <div class="block-content text-center font-w400 font-size-sm" style="padding-top: 4px;">${description}</div>
                        <div class="block-content text-center" style="padding-top: 12px; margin-top: auto;">${content}</div>
                    </div>
                </div>`;
        };

        const prioritySetting = createBlock(
            'AutoMine Priority Setting',
            'Set priority directly by dragging.<br><-- Highest Priority || Lower Priority -->',
            `<div id="SEMI-Auto-Mine-drag-div">${ores.map((_, i) => createDragDiv(i)).join('')}</div>`
        );

        const barSelection = createBlock(
            'AutoMine Bar Selection',
            'Mine by ratios of resources in your bank. Ex: 4 coal per 1 mithril.<br>Click current selection to de-select and return to priority-based mining.',
            barOptions
        );

        const autoMineDiv = `<div id="${id}" class="row row-deck">${prioritySetting}${barSelection}</div>`;

        $('#mining-container .row:first').after($(autoMineDiv));

        for (let i = 0; i < bars.length + 1; i++) {
            $(`#AMbtn${i}`).on('click', () => AMselect(i));
        }

        // tool-tip for bars with capital letters [by Remko de Bruin]
        for (let i = 0; i < bars.length; i++) {
            $(`#AMbtn${i}`).attr('data-tippy-content', `${bars[i].charAt(0).toUpperCase() + bars[i].slice(1)} Bar`);
        }
        $(`#AMbtn${bars.length}`).attr('data-tippy-content', 'Default AM mineArray setting: prioritize XP');

        $(`#${id} input[name="${id}-coal-ratio"]`).change(() => {
            menuConfig['AM'].coalRatio = event.target.value;
            storeConfig();
        });

        const makeSortable = (id) => {
            Sortable.create(document.getElementById(id), {
                animation: 150,
                filter: '.SEMI-locked',
                onEnd: storeAutoMineOrder,
            });
        };
        makeSortable('SEMI-Auto-Mine-drag-div');

        tippy(`#${id} [data-tippy-content]`, { animation: false });

        highlightBarBtn(AMselection);
        orderMenu();
    };

    const ORES = {
        Copper: 0,
        Tin: 1,
        Iron: 2,
        Coal: 3,
        Silver: 4,
        Gold: 5,
        Mithril: 6,
        Adamantite: 7,
        Runite: 8,
        Dragonite: 9,
        RuneEssence: 10,
    };

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
        [
            ORES.Dragonite,
            ORES.Runite,
            ORES.Adamantite,
            ORES.Mithril,
            ORES.Gold,
            ORES.Silver,
            ORES.Coal,
            ORES.Iron,
            ORES.Tin,
            ORES.Copper,
            ORES.RuneEssence,
        ], // xp priority
        [ORES.RuneEssence],
    ];

    let AMselection = -1;

    const barRatios = [
        { [ORES.Copper]: 1, [ORES.Tin]: 1 },
        { [ORES.Iron]: 1 },
        { [ORES.Iron]: 1, [ORES.Coal]: 2 },
        { [ORES.Silver]: 1 },
        { [ORES.Gold]: 1 },
        { [ORES.Mithril]: 1, [ORES.Coal]: 4 },
        { [ORES.Adamantite]: 1, [ORES.Coal]: 6 },
        { [ORES.Runite]: 1, [ORES.Coal]: 8 },
        { [ORES.Dragonite]: 1, [ORES.Runite]: 2, [ORES.Coal]: 12 },
    ];

    /** @param {number} n */
    const highlightBarBtn = (n) => {
        $('.AMbtn').removeClass('btn-primary'); // de-highlight all
        $(`#AMbtn${n}`).addClass('btn-primary'); // highlight n
    };

    /**
     * autoMine Selector: GUI for choosing bars to mine for.
     * @param {number} n
     */
    const AMselect = (n) => {
        if (n === AMselection) {
            n = -1;
        }
        highlightBarBtn(n);
        AMselection = n;
        if (n !== -1) {
            mineArray = mineArrays[n];
        }
    };

    // AutoMine: Will mine based on your or priorities set in mineArray // aw: this still works awesomely!
    const onEnable = () => {
        if (!SEMIUtils.isCurrentSkill(skill)) {
            mineRock(0);
        }
        injectAutoMineGUI();
    };

    const onDisable = () => {
        SEMIUtils.stopSkill(skill);
        removeAutoMineGUI();
    };

    let mineArray = [
        ORES.Dragonite,
        ORES.Runite,
        ORES.Adamantite,
        ORES.Mithril,
        ORES.Gold,
        ORES.Silver,
        ORES.Coal,
        ORES.Iron,
        ORES.Tin,
        ORES.Copper,
        ORES.RuneEssence,
    ];

    /** @param {number[]} rocks */
    const autoMine = (rocks = mineArray) => {
        let swingRatio = 0;
        if (SEMIUtils.isCurrentSkill(skill)) {
            swingRatio = Number(
                document.getElementById(`mining-rock-progress-${currentRock}`).style.width.split('%')[0]
            );
        }
        if (AMselection !== 9 && AMselection !== -1) {
            let resourceRatios = [];
            for (const rock of rocks) {
                if (rock === ORES.Coal && menuConfig['AM'].coalRatio === 'none') {
                    resourceRatios[rock] = Infinity;
                } else {
                    resourceRatios[rock] = SEMIUtils.getBankQty(oreIDs[rock]) / barRatios[AMselection][rock];
                    if (rock === ORES.Coal && menuConfig['AM'].coalRatio === 'half') {
                        resourceRatios[rock] *= 2;
                    }
                }
            }
            mineArray.sort((a, b) => resourceRatios[a] - resourceRatios[b]);
        }
        const order = menuConfig['AM'].order;
        if (order.length !== 0 && AMselection === -1) {
            const indexOf = indexOrInf(order);
            mineArray = [
                ORES.Dragonite,
                ORES.Runite,
                ORES.Adamantite,
                ORES.Mithril,
                ORES.Gold,
                ORES.Silver,
                ORES.Coal,
                ORES.Iron,
                ORES.Tin,
                ORES.Copper,
                ORES.RuneEssence,
            ];
            mineArray.sort((a, b) => indexOf(`AutoMineDrag${a}`) - indexOf(`AutoMineDrag${b}`));
        }
        for (const rock of rocks) {
            if (!SEMIUtils.isCurrentSkill(skill)) {
                mineRock(rock);
            }
            if (!rockData[rock].depleted && miningData[rock].level <= SEMIUtils.currentLevel(skill)) {
                // added extra condition to make universal
                if (currentRock !== rock && swingRatio < 10) {
                    mineRock(rock);
                }
                return; // necessary to stop it looping all the way to last rock. i see now.
            }
        }
        storeAutoMineOrder();
    };

    const removeAutoMineGUI = () => {
        $(`#${id} [data-tippy-content]`).each((_, e) => e._tippy.destroy());
        $(`#${id}`).remove();
    };

    SEMI.add(id, { ms: 100, onLoop: autoMine, onEnable, onDisable, desc, title, imgSrc, skill });
})();
