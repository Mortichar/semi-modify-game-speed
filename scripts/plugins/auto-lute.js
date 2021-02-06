(() => {
    const id = 'auto-lute';
    const title = 'AutoLute';
    const desc =
        'AutoLute monitors your opponents health and switches to Lute for the final kill for the 5x GP reward.';
    const imgSrc = 'assets/media/bank/almighty_lute.svg';

    const autoLute = () => {
        const enemyHp = combatData.enemy.hitpoints;
        const playerMaxHit = baseMaxHit;

        function isFinalMonsterOfDungeon(monster) {
            const dungeon = DUNGEONS[selectedDungeon];
            return monster === dungeon.monsters[dungeon.monsters.length - 1];
        }

        function shouldSwitchToLute(monster) {
            if (DUNGEONS[selectedDungeon] !== undefined) {
                return isFinalMonsterOfDungeon(monster);
            } else {
                return true;
            }
        }

        function equipLute(swapTo = true) {
            if (!SEMI.isEnabled('auto-lute')) {
                return;
            }
            if (swapTo) {
                equipIfNotEquipped(CONSTANTS.item.Almighty_Lute, 'Weapon');
            } else {
                if (enemyHp == 0 && SEMIUtils.equipSwapConfig['Weapon'].swapped) {
                    SEMIUtils.equipSwap(0, 'Weapon');
                    SEMIUtils.equipSwap(0, 'Shield');
                }
            }
        }

        function equipIfNotEquipped(item, slot) {
            if (SEMIUtils.currentEquipmentInSlot(slot) === item) {
                return true;
            }
            if (checkBankForItem(item)) {
                SEMIUtils.equipSwap(item, slot);
                return true;
            }
            return false;
        }

        if (enemyHp > 0 && playerMaxHit >= enemyHp && shouldSwitchToLute(combatData.enemy.id)) {
            equipLute(true);
            return;
        } else {
            equipLute(false);
            return;
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
