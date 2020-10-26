(() => {
    const id = 'auto-smith-bars';
    const title = 'AutoSmith Bars';
    const desc = 'AutoSmith Bars will cycle through your smithing bars and smelt those you have materials for.';
    const imgSrc = 'assets/media/bank/dragonite_bar.svg';
    const skill = 'Smithing';

    const config = {
        ignoreIron: false,
    };

    //Auto Smelt
    const bars = items.filter((x) => x.category === skill && x.type === 'Bar');

    let barTypeCount = 0;
    const findBarIndex = (bar) => smithingItems.findIndex((y) => y.smithingID === bar.smithingID);
    const getBarTypes = () => {
        barTypes = bars.map(findBarIndex).sort();
    };

    let barTypes = [];
    const getItemId = () => smithingItems[barTypes[barTypeCount]].itemID;

    const moveToNext = () => {
        barTypeCount = (barTypeCount + 1) % barTypes.length;
        selectSmith(barTypes[barTypeCount]);
    };

    const autoSmithBars = () => {
        const ignoringIron =
            SEMI.getValue(id, 'ignoreIron') && smithingItems[barTypes[barTypeCount]].name === 'Iron Bar';
        if (document.getElementById('smith-item-have').innerHTML == '-') {
            selectSmith(0);
        }
        if (selectedSmith !== barTypes[barTypeCount]) {
            moveToNext();
        }
        for (const _ in barTypes) {
            // if (!checkSmithingReq(getItemId())) {
            if (!checkSmithingReq(getItemId()) || ignoringIron) {
                moveToNext();
            }
        }
        if (!SEMIUtils.isCurrentSkill(skill)) {
            startSmithing(true);
        }
    };

    const onDisable = () => {
        SEMIUtils.stopSkill(skill);
    };

    const hasConfig = true;
    const configMenu = `<div class="form-group">
        <div class="custom-control custom-switch mb-1">
            <input type="checkbox" class="custom-control-input" id="${id}-iron-toggle" name="${id}-iron-toggle">
            <label class="custom-control-label" for="${id}-iron-toggle">
                Ignore Iron (for Steel smelting)
            </label>
        </div>
    </div>`;
    const saveConfig = () => {
        const toggled = $(`#${id}-iron-toggle`).prop('checked');
        SEMI.setValue(id, 'ignoreIron', toggled);
        SEMI.setItem(`${id}-config`, SEMI.getValues(id));
        SEMIUtils.customNotify(imgSrc, 'AutoSmith Bars config saved!');
    };
    const updateConfig = () => {
        $(`#${id}-iron-toggle`).prop('checked', SEMI.getValue(id, 'ignoreIron'));
    };

    SEMI.add(id, {
        onLoop: autoSmithBars,
        onEnable: getBarTypes,
        onDisable,
        config,
        hasConfig,
        configMenu,
        saveConfig,
        updateConfig,
        title,
        desc,
        imgSrc,
        skill,
    });
})();
