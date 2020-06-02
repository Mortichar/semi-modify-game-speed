(() => {
    const id = 'auto-smith-bars';
    const title = 'AutoSmith Bars';
    const desc = 'AutoSmith Bars will cycle through your smithing bars and smelt those you have materials for.';
    const imgSrc = 'assets/media/bank/dragonite_bar.svg';
    const skill = 'Smithing';

    const bars = items.filter((x) => (x.category === skill && x.type === 'Bar'));

    //Auto Smelt
    let barTypeCount = 0;
    const findBarIndex = (bar) => smithingItems.findIndex((y) => y.smithingID === bar.smithingID);
    const getBarTypes = () => { barTypes = bars.map(findBarIndex).sort(); };

    let barTypes = [];
    const getItemId = () => smithingItems[barTypes[barTypeCount]].itemID;

    const moveToNext = () => {
        barTypeCount = (barTypeCount + 1) % barTypes.length;
        selectSmith(barTypes[barTypeCount]);
    };

    const autoSmithBars = () => {
        if (document.getElementById('smith-item-have').innerHTML == '-' ) { selectSmith(0); }
        for(const _ in barTypes) { if(!checkSmithingReq(getItemId())) { moveToNext(); } }
        if (!SEMI.isCurrentSkill(skill)) { startSmithing(true); }
    };

    const onDisable = () => { SEMI.stopSkill(skill); };

    SEMI.add(id, {onLoop: autoSmithBars, onEnable: getBarTypes, onDisable, title, desc, imgSrc, skill});
})();
