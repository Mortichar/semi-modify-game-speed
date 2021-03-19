(() => {
    const id = 'auto-equip';
    const title = 'AutoEquip Ammo';
    const desc = 'Auto Equip will automatically equip more of your currently equipped ammo if you run low.';
    const imgSrc = SEMIUtils.skillImg('ranged');

    const config = {
        ammoQty: 1000,
        minimumAmmo: 500,
    };

    const equipMoreAmmo = () => {
        const ammoId = SEMIUtils.currentEquipmentInSlot('Quiver');
        if (ammoId === 0) return;
        // const ammoQty = Math.min(SEMIUtils.getBankQty(ammoId), 1000);
        const ammoQty = SEMI.getValue(id, 'ammoQty');
        if (SEMIUtils.getBankQty(ammoId)) {
            SEMIUtils.equipFromBank(ammoId, ammoQty);
            SEMIUtils.customNotify(items[ammoId].media, `SEMI just equipped ${ammoQty} ${items[ammoId].name}.`, {
                duration: 5000,
                lowPriority: true,
            });
        }
    };

    const onLoop = () => {
        const currentWeapon = items[SEMIUtils.currentEquipmentInSlot('Weapon')];
        const usingRanged = currentWeapon.isRanged || currentWeapon.type === 'Ranged Weapon';
        const minAmmo = SEMI.getValue(id, 'minimumAmmo');
        if (usingRanged && ammo < minAmmo && !isDungeon) {
            equipMoreAmmo();
        }
        if (usingRanged && ammo < minAmmo && isDungeon && equipmentSwapPurchased) {
            equipMoreAmmo();
        }
    };

    const hasConfig = true;
    const configMenu = `<div class="form-group">
        <label for="${id}-config-menu">
        Quantity of ammo to equip automatically:
        </label>
        <input type="number" class="form-control" id="${id}-ammo-form" placeholder="1000" title="Warning: If this number is small and min-ammo is much larger than equipped ammo, you'll end up equipping ammo slowly for a long time. Enforced minimum of 10 to be safe for combat.">
        <label for="${id}-config-menu">Minimum ammo to have equipped:</label>
        <input type="number" class="form-control" id="${id}-min-ammo-form" placeholder="500">
    </div>`;
    const saveConfig = () => {
        let saved = false;
        let ammoQtyVal = Number($(`#${id}-ammo-form`).val());
        if (ammoQtyVal < 10) ammoQtyVal = 10;
        if ($(`#${id}-ammo-form`).val() === '') ammoQtyVal = config.ammoQty;
        if (ammoQtyVal !== null && !isNaN(ammoQtyVal) && ammoQtyVal > 0) {
            SEMI.setValue(id, 'ammoQty', ammoQtyVal);
            SEMI.setItem(`${id}-config`, SEMI.getValues(id));
            saved = true;
        }
        let minAmmoVal = Number($(`#${id}-min-ammo-form`).val());
        if ($(`#${id}-min-ammo-form`).val() === '') minAmmoVal = config.minimumAmmo;
        if (minAmmoVal !== null && !isNaN(minAmmoVal) && minAmmoVal > 0) {
            SEMI.setValue(id, 'minimumAmmo', minAmmoVal);
            SEMI.setItem(`${id}-config`, SEMI.getValues(id));
            saved = true;
        }
        if (saved) {
            SEMIUtils.customNotify(
                imgSrc,
                `Saved AutoEquip Ammo Quantity: ${SEMI.getValue(
                    id,
                    'ammoQty'
                )}<br>and Minimum Ammo Equipped: ${SEMI.getValue(id, 'minimumAmmo')}`,
                { duration: 3000 }
            );
        }
        updateConfig();
    };
    const updateConfig = () => {
        $(`#${id}-ammo-form`).val(SEMI.getValue(id, 'ammoQty'));
        $(`#${id}-min-ammo-form`).val(SEMI.getValue(id, 'minimumAmmo'));
    };
    SEMI.add(id, {
        ms: 5000,
        onLoop,
        pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT,
        title,
        desc,
        imgSrc,
        config,
        hasConfig,
        configMenu,
        saveConfig,
        updateConfig,
    });
})();
