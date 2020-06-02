(() => {
    const id = 'auto-eat';
    const title = 'AutoEat';
    const desc = 'AutoEat script will eat quickly if you are missing any HP at all, and automatically cycles to next equipped food if you run out.';
    const imgSrc = 'assets/media/shop/autoeat.svg';

    const autoEat = () => {
        const hp = combatData.player.hitpoints; // this number is already multiplied
        const currentFood = equippedFood[currentCombatFood];
        const hpfood = numberMultiplier * items[currentFood.itemID].healsFor; // numberMultiplier = 10, adjusts hp math
        const hpmax = SEMI.currentLevel('Hitpoints') * numberMultiplier; // same here
        if(hp < hpmax) { eatFood(); }
        if(currentFood.qty >= 1) { return; }
        for(let i = 0; i < equippedFood.length; i++) { //cycle through food, added by rebelEpik
            if(equippedFood[i].qty > 0){ return selectEquippedFood(i); }
        }
    };

    SEMI.add(id, {ms: 50, onLoop: autoEat, isCombat: true, title, imgSrc, desc});
})();
