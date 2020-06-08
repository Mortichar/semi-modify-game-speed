(() => {
    const id = 'auto-eat';
    const title = 'AutoEat';
    const desc = "AutoEat script eats when HP is less than what food heals when outside combat, or when HP is less than max hit of your enemy in combat. Don't be scared! SEMI calculates your damage reduction AND enemy stun damage multipliers AND burning AND damage reflection when calculating max hit. AutoEat is finally god dungeon ready.";
    const imgSrc = 'assets/media/shop/autoeat.svg';

    const autoEat = () => {
        const hp = SEMI.currentHP(); // this number is already multiplied
        const hpmax = SEMI.currentLevel('Hitpoints') * numberMultiplier; // same here
        const hpdeficit = hpmax - hp;
        const currentFood = equippedFood[currentCombatFood];
        const hpfood = numberMultiplier * items[currentFood.itemID].healsFor; // numberMultiplier = 10, adjusts hp math
        const adjustedMaxHit = SEMI.adjustedMaxHit();
        const maxHitEatingCase = hp <= adjustedMaxHit;
        const generalEatingCase = hpdeficit > hpfood;
        const eatingCase = (maxHitEatingCase && isInCombat) || (generalEatingCase && !isInCombat);
        if(eatingCase) {
            eatFood();
            while (isInCombat && (SEMI.currentHP() <= adjustedMaxHit) && (hpmax > adjustedMaxHit)) { eatFood(); }
        }
        if(currentFood.qty >= 1) { return; }
        for(let i = 0; i < equippedFood.length; i++) { //cycle through food, added by rebelEpik
            if(equippedFood[i].qty > 0){ return selectEquippedFood(i); }
        }
    };

    const onEnable = () => {
        const hpmax = SEMI.currentLevel('Hitpoints') * numberMultiplier; // same here
        const maxHit = SEMI.maxHitOfCurrentEnemy();
        const damageReductionMultiplier = (100-damageReduction)/100; //whole-numbers representing percentages: converting to decimal for ez multiplication.
        const adjustedMaxHit = maxHit * damageReductionMultiplier;
        if(hpmax <= adjustedMaxHit) { SEMI.customNotify('assets/media/monsters/ghost.svg', 'WARNING: You are engaged with an enemy that can one-hit-kill you. \n Its damage-reduction-adjusted max hit is at or above your max HP.', 10000); }
    }

    SEMI.add(id, {ms: 100, onLoop: autoEat, onEnable, isCombat: true, title, imgSrc, desc});
})();
