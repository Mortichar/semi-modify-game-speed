//AutoSell Fish Junk by AW
var autoSellingJunk = false;
function autoSellFishJunk() {
    for(const junk of junkItems) {
        if (getBankId(junk)) {
            sellItem(getBankId(junk),6969696969696969);
            console.log('AutoSell Fish Junk just sold '+items[junk].name+'.');
        }
    }
}
//var autoSellJunkLoop = setInterval( () => { autoSellFishJunk() }, 10000); //above and this line = userscript

var autoSellJunkLoop;
function toggleAutoSellFishJunk() {
    autoSellingJunk = !autoSellingJunk;
    //$("auto-sell-junk-status").text((autoSellingJunk) ? 'Enabled' : 'Disabled');
    if (autoSellingJunk) {
        autoSellJunkLoop = setInterval( () => { autoSellFishJunk() }, 10000);
    } else { clearInterval(autoSellJunkLoop) }
}
