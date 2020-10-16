(() => {
    const id = 'auto-equip';
    const title = 'AutoEquip Ammo';
    const desc = 'Auto Equip will automatically equip 1000 more of your currently equipped ammo if you run low.'
    const imgSrc = SEMI.skillImg('ranged');

    const equipMoreAmmo = () => {
        const ammoId = SEMI.currentEquipmentInSlot('Quiver');
        if (ammoId === 0) {
            return;
        }
        const ammoQty = Math.min(SEMI.getBankQty(ammoId), 1000);
        if (ammoQty) {
            SEMI.equipFromBank(ammoId, ammoQty);
            SEMI.customNotify(items[ammoId].media, `SEMI just equipped ${ammoQty} ${items[ammoId].name}.`, 5000);
        }
    }

    const onLoop = () => {
        const currentWeapon = items[SEMI.currentEquipmentInSlot('Weapon')];
        const usingRanged = (currentWeapon.isRanged || (currentWeapon.type === 'Ranged Weapon'));
        if (usingRanged && ammo < 500 && !isDungeon) { equipMoreAmmo(); }
        if (usingRanged && ammo < 500 && isDungeon && equipmentSwapPurchased) { equipMoreAmmo(); }
    };

    //***************************END AUTO COMBAT*******************************
    SEMI.add(id, {ms: 500, onLoop, pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT, title, desc, imgSrc});
})();
