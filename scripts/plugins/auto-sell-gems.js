(() => {
    const id = 'auto-sell-gems';
    const desc = 'AutoSell Gems will sell 100 gems once they\'ve reached a stack of 100.';
    const imgSrc = 'assets/media/bank/diamond.svg';
    const title = 'AutoSell Gems';

    //:: importing scraps from Melvor Super Control Panel user script by Strutty on Greasefork: https://greasyfork.org/en/scripts/395834-melvor-super-control-panel
    //AutoSellGems
    // const targetStack = 100; //once it hits this amount, sell all of them.
    const config = {targetStack: 100};
    const gemIdList = items.map((item, i) => ({...item, i})).filter((item) => item.type == 'Gem').map((x) => x.i); //ruby boobies & such

    //AutoSellGems: Will sell gems when they reach the stack amount specified
    const autoSellGems = () => {
        var count = 0;
        for(const gemId of gemIdList) {
            const curQty = SEMI.getBankQty(gemId);
            //console.log('GEM ID '+gemId+' you have '+curQty);
            if(curQty > config.targetStack) {
                count++;
                setTimeout(() => {
                    sellItem(gemId, config.targetStack);
                    SEMI.confirmAndCloseModal();
                    SEMI.customNotify('assets/media/main/coins.svg', `Auto Sell Gems just sold ${config.targetStack} ${items[gemId].name}.`, 5000);
                }, count*150);
            }
        }
    };

    SEMI.add(id, {ms: 5000, onLoop: autoSellGems, desc, title, imgSrc, config});
})();
