(() => {
    const id = 'auto-equip';
    const title = 'AutoEquip Ammo';
    const desc = 'Auto Equip will automatically equip more of your currently equipped ammo if you run low.'
    const imgSrc = SEMI.skillImg('ranged');

    const config = {
        ammoQty: 1000,
        minimumAmmo: 500
    }

    const equipMoreAmmo = () => {
        const ammoId = SEMI.currentEquipmentInSlot('Quiver');
        if (ammoId === 0) return;
        // const ammoQty = Math.min(SEMI.getBankQty(ammoId), 1000);
        const ammoQty = SEMI.getValue(id, 'ammoQty');
        if (SEMI.getBankQty(ammoId)) {
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

    const hasConfig = true;
    const configMenu = `<div class="form-group">
        <label for="${id}-config-menu">Quantity of ammo to equip automatically:</label>
        <input type="text" class="form-control" id="${id}-ammo-form" placeholder="1000">
    </div>`;
    const saveConfig = () => {
        let ammoQtyVal = Number($(`#${id}-ammo-form`).val());
        if ($(`#${id}-ammo-form`).val() === "") ammoQtyVal = config.ammoQty;
        if (ammoQtyVal !== null && !isNaN(ammoQtyVal)) {
            SEMI.setValue(id, 'ammoQty', ammoQtyVal);
            SEMI.setItem(`${id}-config`, SEMI.getValues(id));
            SEMI.customNotify(imgSrc, `Saved AutoEquip Ammo Quantity: ${SEMI.getValue(id, 'ammoQty')}`, 3000);
        }
    };
    const updateConfig = () => {
        $(`#${id}-ammo-form`).val(SEMI.getValue(id, 'ammoQty'));
    };
    SEMI.add(id, {ms: 500, onLoop, pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT, title, desc, imgSrc, config, hasConfig,
        configMenu,
        saveConfig, updateConfig});
})();
