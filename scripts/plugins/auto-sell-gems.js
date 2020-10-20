(() => {
    const id = 'auto-sell-gems';
    const desc = `AutoSell Gems will sell gems once they've reached your target stack. Set the stack size in the config menu by clicking the cog wheel on the right side of this button.`;
    const imgSrc = 'assets/media/bank/diamond.svg';
    const title = 'AutoSell Gems';

    //AutoSellGems, scrapped from Melvor Super Control Panel by Strutty on Greasefork, since deleted
    //once it hits this amount, sell all of them.
    const config = {
        targetStack: 100
    };

    const gemIdList = items.map((item, i) => ({...item, i})).filter((item) => item.type == 'Gem').map((x) => x.i); //ruby boobies & such

    //AutoSellGems: Will sell gems when they reach the stack amount specified
    const autoSellGems = () => {
        var count = 0;
        const targetStack = SEMI.getValue(id, 'targetStack');
        for(const gemId of gemIdList) {
            const curQty = SEMI.getBankQty(gemId);
            //console.log('GEM ID '+gemId+' you have '+curQty);
            if(curQty > targetStack) {
                count++;
                setTimeout(() => {
                    SEMI.sellItemWithoutConfirmation(gemId, targetStack);
                    SEMI.customNotify('assets/media/main/coins.svg', `Auto Sell Gems just sold ${targetStack} ${items[gemId].name}.`, 5000);
                }, count*150);
            }
        }
    };

    const hasConfig = true;
    const configMenu = `<div class="form-group">
        <label for="${id}-config-menu">Target stack:</label>
        <input type="number" class="form-control" id="${id}-stack-form" placeholder="100">
        <!-- radios for each gem -->
        Choose gems to sell:
        <div class="custom-control custom-switch mb-1">
            <input type="checkbox" class="custom-control-input" id="${id}-gem-radio-0" name="${id}-gem-radio-0">
            <label class="custom-control-label" for="${id}-gem-radio-0">
                <img src="${imgSrc}" class="nav-img" />
            </label>
        </div>
    </div>`;
    const saveConfig = () => {
        let stackVal = Number($(`#${id}-stack-form`).val());
        if ($(`#${id}-stack-form`).val() === "") stackVal = config.targetStack;
        if (stackVal !== null && !isNaN(stackVal) && stackVal>0) {
            SEMI.setValue(id, 'targetStack', stackVal);
            SEMI.setItem(`${id}-config`, SEMI.getValues(id) );
            SEMI.customNotify(imgSrc, `Saved AutoSellGems targetStack: ${stackVal}`, 3000);
        }
    }
    const updateConfig = () => {
        $(`#${id}-stack-form`).val(SEMI.getValue(id, 'targetStack'));
    }
    SEMI.add(id, {ms: 5000, onLoop: autoSellGems, desc, title, imgSrc, config, hasConfig, configMenu, saveConfig, updateConfig});
})();
