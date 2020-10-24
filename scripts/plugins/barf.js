//Barf Up Current Potion
(() => {
    const id = 'barf';
    const title = 'Barf Potion Button';
    const desc =
        'This script injects a button into the Active Potions page up at the top right. This barf button will immediately purge the effects and bonuses of whatever potion you are currently using and return your potion status to empty.';
    const imgSrc = 'assets/media/skills/herblore/potion_empty.svg';

    const barf = () => {
        const bonus = herbloreBonuses[currentPage];
        bonus.itemID = 0;
        bonus.bonus = [null, null];
        bonus.charges = 0;
        SEMIUtils.customNotify('assets/media/skills/herblore/potion_empty.svg', 'Your potion has been BARFED!', 5000);
        if (currentPage === 13) {
            updatePlayerStats();
        }
        updatePotionHeader();
    };
    const injectBarfGUI = () => {
        //Barf Potion Button
        const barfTitle =
            'This will purge your remaining charges of your potion and immediately remove its effects. Even if Auto-Reuse is on, you will have to select your potion again to restart its effects after barfing.';
        const barf1 = `
        <div id="barf-gui" class="col-12">
            <div class="p-2 text-center">
                <button id="barfbtn" class="btn btn-dual SEMI-gold" title="${barfTitle}">
                    <small>
                        BARF MY POTION NOW!
                    </small>
                </button>
            </div>
        </div>`;
        const barfButton = $(barf1);
        barfButton.on('click', () => {
            barf();
        });
        $('.row.no-gutters.bg-primary').append(barfButton);
    };
    const removeGUI = () => $('#barf-gui').remove();
    // SEMIUtils.mergeOnto(SEMI, {barf});
    SEMI.add(id, {
        ms: 0,
        pluginType: SEMI.PLUGIN_TYPE.TWEAK,
        title,
        desc,
        imgSrc,
        onEnable: injectBarfGUI,
        onDisable: removeGUI,
    });
})();
