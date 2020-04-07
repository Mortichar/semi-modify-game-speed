//:: importing scraps from Melvor Super Control Panel user script by Strutty on Greasefork: https://greasyfork.org/en/scripts/395834-melvor-super-control-panel
//AutoSellGems
var targetStack = 100; //once it hits this amount, sell all of them.
var gemIdList = [128, 129, 130, 131, 132]; //ruby boobies & such

//AutoSellGems: Will sell gems when they reach the stack amount specified
var autoSellGemsEnabled = false;
var updateAutoSellGemsButtonText = function () {
	$('#auto-sellgems-button-status').text((autoSellGemsEnabled) ? 'Enabled' : 'Disabled');
}
var toggleAutoSellGems = function () {
	autoSellGemsEnabled = !autoSellGemsEnabled;
	updateAutoSellGemsButtonText();
	setTimeout(function() {
		if (!autoSellGemsEnabled) {
			console.log("Auto Sell Gems Disabled!");
		}
	}, 100);
}

var autoSellGems = function() {
	if (!autoSellGemsEnabled) {
		return;
	}
	for(const gemId of gemIdList) {
		const curQty = getBankQty(gemId);
		//console.log('GEM ID '+gemId+' you have '+curQty);
		if(curQty > targetStack){
			sellItem(getBankId(gemId), targetStack);
            customNotify('assets/media/main/coins.svg','Auto Sell Gems just sold '+targetStack+' '+ items[gemId].name +'.', 5000);
		}
	}
}
var autoSellGemsTimer = setInterval(function(){autoSellGems();}, 5000);
