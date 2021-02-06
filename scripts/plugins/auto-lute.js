(() => {
    const id = 'auto-lute';
    const title = 'AutoLute';
    const desc = `AutoLute monitors your combat opponent's health and switches to Lute for the final kill of a dungeon, or the killing blow for normal combat, for the 5x GP reward.`;
    const imgSrc = 'assets/media/bank/almighty_lute.svg';

    const autoLute = () => {
        const enemyHp = combatData.enemy.hitpoints;
        const playerMaxHit = baseMaxHit;
        const dungeon = DUNGEONS[selectedDungeon];
        const monster = combatData.enemy.id;
        const isFinalMonster =
            dungeon !== undefined ? monster === dungeon.monsters[dungeon.monsters.length - 1] : false;
        const shouldSwitchToLute = dungeon !== undefined ? isFinalMonster : true;
        const lute = CONSTANTS.item.Almighty_Lute;
        const slot = 'Weapon';
        const wieldingLute = SEMIUtils.currentEquipmentInSlot(slot) === lute;
        const ableToKill = enemyHp > 0 && playerMaxHit >= enemyHp;
        const inCombat = SEMIUtils.currentSkillName() === 'Hitpoints';

        if (
            ableToKill &&
            shouldSwitchToLute &&
            !wieldingLute &&
            checkBankForItem(lute) &&
            !newEnemyLoading &&
            inCombat
        ) {
            SEMIUtils.equipSwap(lute, slot);
        } else if ((enemyHp === 0 || newEnemyLoading || !inCombat) && SEMIUtils.equipSwapConfig[slot].swapped) {
            SEMIUtils.equipSwap(0, slot);
        }
    };

    SEMI.add(id, {
        ms: 100,
        onLoop: autoLute,
        pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT,
        title,
        imgSrc,
        desc,
    });
})();
