//AutoSell Fish Junk by AW
function autoSellFishJunk() {
    var autoSoldJunk = false;
    for(const junk of junkItems) {
        if (getBankId(junk)) {
            sellItem(getBankId(junk),6969696969696969);
            //console.log('AutoSell Fish Junk just sold '+items[junk].name+'.'); 
            autoSoldJunk = true;
        }
    }
    if (autoSoldJunk) customNotify('assets/media/bank/rope.svg','AutoSell Fish Junk just sold some junk.',2000);
}

var autoSellingJunk = false;
var autoSellJunkLoop;
function toggleAutoSellFishJunk() {
    autoSellingJunk = !autoSellingJunk;
    $("#auto-sell-junk-status").text((autoSellingJunk) ? 'Enabled' : 'Disabled');
    if (autoSellingJunk) {
        autoSellFishJunk();
        autoSellJunkLoop = setInterval( () => { autoSellFishJunk() }, 10000);
    } else { clearInterval(autoSellJunkLoop) }
}
