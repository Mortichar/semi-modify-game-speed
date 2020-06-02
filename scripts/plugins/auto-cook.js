(() => {
    const id = 'auto-cook';
    const title = 'AutoCook';
    const desc = 'AutoCook is a script for cooking all the fish you have caught.';
    const skill = 'Cooking';

    let fishTypeCount = 0;
    const isFood = (item) => ('cookingID' in item) && (item.cookingID !== undefined);
    const isSelected = (b) => b.id === selectedFood;
    const getFoods = () => bank.filter((bankItem) => isFood(items[bankItem.id])).filter(isSelected);
    const foodQty = () => ([...getFoods(), {qty: 0}])[0].qty;

    const fishType = items.map((item, i) => ({...item, i})).filter(isFood).map(({i}) => i);

    const moveToNext = () => {
        fishTypeCount = (fishTypeCount + 1) % fishType.length;
        selectFood(fishType[fishTypeCount]);
    }

    const autoCookAll = () => {
        for(const _ in fishType) { if(foodQty() === 0) { moveToNext(); } }
        if((foodQty() !== 0) && !SEMI.isCurrentSkill(skill)){ startCooking(0, false); }
    };

    const onDisable = () => { SEMI.stopSkill(skill); };

    SEMI.add(id, {onLoop: autoCookAll, onDisable, title, desc, skill});
})();