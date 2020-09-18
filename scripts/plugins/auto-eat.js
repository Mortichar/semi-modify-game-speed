(() => {
    const id = 'auto-eat';
    const title = 'AutoEat';
    const desc = "AutoEat in combat will still only eat when your HP is below calculated max hit, but now it will eat to nearly full health instead of just to the max hit value. It eats with efficiency in mind, so it won't eat food if your food healing would cause overhealing. However, it will still eat if you are at risk of dying from max hit near full health, ignoring this efficiency rule. This makes it a little more viable for the v0.16+ combat eating changes. Suggestion: large quantities of low-healing food for maximum efficiency of this bot.";
    const imgSrc = 'assets/media/shop/autoeat.svg';

    const autoEat = () => {
        const hp = SEMI.currentHP(); // this number is already multiplied
        const hpmax = SEMI.currentLevel('Hitpoints') * numberMultiplier; // same here
        const hpdeficit = hpmax - hp;
        const currentFood = equippedFood[currentCombatFood];
        const hpfood = numberMultiplier * items[currentFood.itemID].healsFor; // numberMultiplier = 10, adjusts hp math
        const adjustedMaxHit = SEMI.adjustedMaxHit();
        const maxHitEatingCase = (hp <= adjustedMaxHit) && isInCombat;
        const generalEatingCase = ((hpdeficit > hpfood) || hp <= 50) && !isInCombat;
        const eatingCase = maxHitEatingCase || generalEatingCase;
        if(eatingCase) {
            eatFood();
            if (!isInCombat) return;
            // while ((SEMI.currentHP() <= adjustedMaxHit) && (hpmax > adjustedMaxHit) && (currentFood.qty >= 1)) { eatFood(); }
            while ((SEMI.currentHP() <= (hpmax - hpfood)) && (hpmax > adjustedMaxHit) && (currentFood.qty >= 1)) { eatFood(); }
        }
        if(currentFood.qty >= 1) { return; }
        for(let i = 0; i < equippedFood.length; i++) { //cycle through food, added by rebelEpik
            if(equippedFood[i].qty > 0){ return selectEquippedFood(i); }
        }
    };

    const onEnable = () => {
        const hpmax = SEMI.currentLevel('Hitpoints') * numberMultiplier; // same here
        const adjustedMaxHit = SEMI.adjustedMaxHit();
        if(hpmax <= adjustedMaxHit) { SEMI.customNotify('assets/media/monsters/ghost.svg', 'WARNING: You are engaged with an enemy that can one-hit-kill you. \n Its damage-reduction-adjusted max hit is at or above your max HP. \n This script can\'t save you now.', 10000); }
    }

    SEMI.add(id, {ms: 100, onLoop: autoEat, onEnable, pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT, title, imgSrc, desc});
})();
