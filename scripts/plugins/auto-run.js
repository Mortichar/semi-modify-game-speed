(() => {
    const id = 'auto-run';
    const title = 'AutoRun';
    const desc = 'AutoRun will automatically run from combat if you are out of food, runes, or ammo, or if you can be one-hit-killed by the enemy.'
    const imgSrc = "assets/media/skills/combat/run.svg";

    const autoRun = () => {
        if(!SEMI.isCurrentSkill('Hitpoints')) { return; }
        const currentWeapon = items[SEMI.currentEquipmentInSlot('Weapon')];
        const usingRanged = (currentWeapon.isRanged || (currentWeapon.type === 'Ranged Weapon'));
        const hpmax = SEMI.maxHP();
        const deadlyEnemyMaxHit = SEMI.adjustedMaxHit() > hpmax;
        if (deadlyEnemyMaxHit) { return runFromCombat(`courage: the adjusted max hit of the current enemy (${SEMI.maxHitOfCurrentEnemy()} raw DMG, ${SEMI.adjustedMaxHit()} %reduced DMG) is greater than your max hp! (${hpmax} HP)`)}
        if (equippedFood[currentCombatFood].qty < 1) { return runFromCombat('food.'); }
        if (usingRanged && ammo < 1) { return runFromCombat('ammo.'); }
        if (currentWeapon.isMagic && ((!isSpellAncient && !checkRuneCount(0, selectedSpell, false)) || (isSpellAncient && !checkRuneCount(3, selectedAncient, false)))) { return runFromCombat('runes.'); }
    };

    /** @param {string} reason */
    const runFromCombat = (reason) => {
        const today = new Date();
        const date = today.toDateString();
        const time = today.toTimeString().split(' ')[0];
        const dateTime = `${date} @ ${time}`;
        SEMI.stopSkill('Hitpoints');
        SEMI.customNotify(imgSrc, `SEMI: Exited Auto Combat @ ${dateTime} because ${username} is out of ${reason}`, 15000);//upgrade to jqueryui modal dialog
        console.log(`SEMI: Exited Auto Combat @ ${dateTime} because ${username} is out of ${reason}`);
        // if(SEMI.isEnabled(id)) { SEMI.disable(id); }
        if(SEMI.isEnabled('auto-slayer')) { SEMI.disable('auto-slayer'); }
    };

    SEMI.add(id, {ms: 500, onLoop: autoRun, isCombat: true, title, desc, imgSrc});
})();

