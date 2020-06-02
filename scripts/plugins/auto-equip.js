(() => {
    const id = 'auto-equip';
    const title = 'AutoEquip Ammo';
    const desc = 'Auto Equip will automatically equip 1000 more of your currently equipped ammo if you run low.'
    const imgSrc = SEMI.skillImg('ranged');

    //***************************AUTO COMBAT***********************************
    //AutoCombat Main Function

    const equipMoreAmmo = () => {
        const ammoId = SEMI.currentEquipmentInSlot('Quiver');
        const currentAmmo = items[ammoId];
        for (let i = 0; i < bank.length; i++) {
            if(items[bank[i].id].name == currentAmmo.name && currentAmmo.name !== 'Normal Logs' ) {
                equipItem(i, ammoId, 1000, selectedEquipmentSet);
                SEMI.customNotify(currentAmmo.media, 'SEMI just equipped 1000 '+ currentAmmo.name+'.', 5000);
            }
        }
    }

    const onLoop = () => {
        const currentWeapon = items[SEMI.currentEquipmentInSlot('Weapon')];
        const usingRanged = (currentWeapon.isRanged || (currentWeapon.type === 'Ranged Weapon'));
        if (usingRanged && ammo < 500 && !isDungeon) { equipMoreAmmo(); }
    };

    //***************************END AUTO COMBAT*******************************
    SEMI.add(id, {ms: 500, onLoop, isCombat: true, title, desc, imgSrc});
})();

