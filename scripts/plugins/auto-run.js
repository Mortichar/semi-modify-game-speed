(() => {
    const id = 'auto-run';
    const title = 'AutoRun';
    const desc = 'AutoRun will automatically run from combat if you are out of food, runes, or ammo.'
    const imgSrc = "assets/media/skills/combat/run.svg";

    //***************************AUTO COMBAT***********************************
    //AutoCombat Main Function

    const autoRun = () => {
        if(!SEMI.isCurrentSkill('Hitpoints')) { return; }
        const currentWeapon = items[SEMI.currentEquipmentInSlot('Weapon')];
        const usingRanged = (currentWeapon.isRanged || (currentWeapon.type === 'Ranged Weapon'));
        if (equippedFood[currentCombatFood].qty < 1) { return runFromCombat('food.'); }
        if (usingRanged && ammo < 1) { return runFromCombat('ammo.'); }
        if (currentWeapon.isMagic && !checkRuneCount(selectedSpell) ) { return runFromCombat('runes.'); }
    };

    //***************************END AUTO COMBAT*******************************
    /** @param {string} reason */
    const runFromCombat = (reason) => {
        const today = new Date();
        const date = today.toDateString();
        const time = today.toTimeString().split(' ')[0];
        const dateTime = `${date} @ ${time}`;
        SEMI.stopSkill('Hitpoints');
        SEMI.customNotify(imgSrc, `SEMI: Exited Auto Combat @ ${dateTime} because ${username} is out of ${reason}`);//upgrade to jqueryui modal dialog
        if(SEMI.isEnabled(id)) { SEMI.disable(id); }
        if(SEMI.isEnabled('auto-slayer')) { SEMI.disable('auto-slayer'); }
    };

    SEMI.add(id, {ms: 500, onLoop: autoRun, isCombat: true, title, desc, imgSrc});
})();

