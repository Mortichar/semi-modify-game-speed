(() => {
    //:: Scavenging the Thieving calculator from Melvor Idle Helper by RedSparr0w on GitLab: https://github.com/RedSparr0w/Melvor-Idle-Helper

    //override killswitch
    if (!SEMI.getItem('etc-GUI-toggles').thievingXP) return;

    /** @typedef {{xp: number, lootTable: number[][], maxCoins: number}} NPC */

    /**
    * @param {Element} el
    * @param {string[]} data
    */
    const addCalcToEl = (el, data = []) => {
        if (!el || !el.appendChild) { return; }
        /**
        * @param {string} dat
        * @param {number} i
        */
        const addToHelper = (dat, i)=> {
            const br = SEMI.createElement('br', {});
            const el2 = SEMI.createElement('small', {innerText: dat});
            // Add line break if not first element
            if (i > 0) { return [br, el2]; }
            return [el2];
        };
        const children = data.map(addToHelper).reduce((a, b) => [...a, ...b], []);
        const helperContainer = SEMI.createElement('div', {className: 'font-size-sm font-w600 text-right text-uppercase text-muted', style: 'position: absolute; right: 6px; top: 8px;'}, children); // create our helper elements

        el.classList.add('ribbon', 'ribbon-light', 'ribbon-bookmark', 'ribbon-left'); // Needs these classes for the text to show correctly
        el.appendChild(helperContainer);
    };

    const thievingCalc = () => { //this is freshhh - Thieving Calc & Item Popup! SO Handy!
        const seconds = baseThievingInterval / 1000; // Always takes the same amount of time

        const coinRow = (n) => `<img src='assets/media/main/coins.svg' height='20px'> ${n} coins (max)`;

        /** @param {NPC} npc */
        const g = ({lootTable, maxCoins}) => {
            const totalWeight = lootTable.map((item) => item[1]).reduce((a , b)=> a + b, 0);

            const makeLootRow = ([itemId, weight]) => {
                const item = items[itemId];
                return `<img src='${item.media}' height='20px'> ${item.name} - ${((weight / totalWeight) * 100).toFixed(1)}%`;
            };
            return [coinRow(maxCoins), ...lootTable.map(makeLootRow)].join('<br/>');
        };

        /**
        * @param {NPC} npc
        * @param {number} id
        */
        const f = (npc, id) => {
            const xpPerSecond = +(npc.xp / seconds).toFixed(1);
            // Get the loottable text

            const npcEl = document.getElementById(`thieving-npc-${id}`).getElementsByClassName('block-content')[0];
            addCalcToEl(npcEl, [`${xpPerSecond} XP/s`]); // Add the xp/s amounts
            npcEl.classList.add('js-popover'); // Add the popovers for the loot
            const data = {toggle: 'popover', html: 'true', placement: 'bottom', content: g(npc)};
            SEMI.mergeOnto(npcEl.dataset, data);
        };

        thievingNPC.forEach(f);
        $('.js-popover').popover({container: 'body', animation: false, trigger: 'hover focus'});
    };
    //:: end of import of scraps from Melvor Idle Helper

    const loadCalc = () => {
        if($('.js-popover').length !== 0) {return;}
        thievingCalc(); // Enable the popovers
    };

    const calcLoader = setInterval(loadCalc, 1000);
})();