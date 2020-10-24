(() => {
    const id = 'auto-cook';
    const title = 'AutoCook';
    const desc =
        'AutoCook is a script for cooking all the fish you have caught. Incompatible with the experimental setting in Melvor, so it will constantly disable that option. Has an extra delay before auto-enabling because of issues with offline progress.';
    const skill = 'Cooking';

    let fishTypeCount = 0;
    const isFood = (item) => 'cookingID' in item && item.cookingID !== undefined;
    const isSelected = (b) => b.id === selectedFood;
    const getFoods = () => bank.filter((bankItem) => isFood(items[bankItem.id])).filter(isSelected);
    const foodQty = () => [...getFoods(), { qty: 0 }][0].qty;

    const fishType = items
        .map((item, i) => ({ ...item, i }))
        .filter(isFood)
        .map(({ i }) => i);

    const moveToNext = () => {
        fishTypeCount = (fishTypeCount + 1) % fishType.length;
        selectFood(fishType[fishTypeCount]);
    };

    const autoCookAll = () => {
        if (pauseOfflineActions) changeSetting(22, false); //bugfix... if you want autocook, it needs to have that one experimental option OFF or it will SERIOUSLY BREAK THINGS. especially with the new autoenable...
        for (const _ in fishType) {
            if (foodQty() === 0) {
                moveToNext();
            }
        }
        if (foodQty() !== 0 && !SEMI.isCurrentSkill(skill)) {
            startCooking(0, false);
        }
    };

    const onDisable = () => {
        SEMI.stopSkill(skill);
    };

    SEMI.add(id, { onLoop: autoCookAll, onDisable, title, desc, skill });
})();
