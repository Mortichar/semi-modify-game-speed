(() => {
    //override killswitch
    if (SEMI.getItem('etc-GUI-toggles') !== null) {
        const toggle = SEMI.getItem('etc-GUI-toggles').thievingXP;
        if (toggle !== undefined && !toggle) return;
    }

    /** @typedef {{xp: number, lootTable: number[][], maxCoins: number}} NPC */

    const thievingCalc = () => {
        const coinRow = (n) => `<img src='assets/media/main/coins.svg' height='20px'> ${n} coins (max)`;

        /** @param {NPC} npc */
        const g = ({ lootTable, maxCoins }) => {
            const totalWeight = lootTable.map((item) => item[1]).reduce((a, b) => a + b, 0);

            const makeLootRow = ([itemId, weight]) => {
                const item = items[itemId];
                return `<img src='${item.media}' height='20px'> ${item.name} - ${(
                    (weight / totalWeight) *
                    100
                ).toFixed(1)}%`;
            };
            return [coinRow(maxCoins), ...lootTable.map(makeLootRow)].join('<br/>');
        };

        /**
         * @param {NPC} npc
         * @param {number} id
         */
        const f = (npc, id) => {
            // Get the loottable text
            const npcEl = document.getElementById(`thieving-npc-${id}`).getElementsByClassName('block-content')[0];
            npcEl.classList.add('js-popover'); // Add the popovers for the loot
            const data = { toggle: 'popover', html: 'true', placement: 'bottom', content: g(npc) };
            SEMIUtils.mergeOnto(npcEl.dataset, data);
        };

        thievingNPC.forEach(f);
        $('.js-popover').popover({ container: 'body', animation: false, trigger: 'hover focus' });
    };

    const loadCalc = () => {
        if ($('.js-popover').length !== 0) {
            return clearInterval(calcLoader);
        }
        thievingCalc(); // Enable the popovers
    };

    const calcLoader = setInterval(loadCalc, 1000);
})();
