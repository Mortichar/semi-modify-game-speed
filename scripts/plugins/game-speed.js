(() => {
    const id = 'modify-game-speed';
    const title = 'Modify Game Speed';
    const desc = 'This will modify the rate at which you, and enemies, perform all actions.';
    const imgSrc = 'assets/media/bank/skillcape_max.svg';

    const config = {
        gameSpeed: 1,
    };

    const gameSpeedIdentifier = `#${id}-game-speed`;

    const saveConfig = () => {
        const gameSpeed = $(gameSpeedIdentifier).val();
        SEMI.setValue(id, `gameSpeed`, gameSpeed);
        SEMIUtils.customNotify(imgSrc, `${title} config saved!`);
    };

    const updateConfig = () => {
        $(gameSpeedIdentifier).val(SEMI.getValue(id, `gameSpeed`));
    };

    const calculateSkillIntervalOriginal = calculateSkillInterval;

    const injectGUI = () => {
        console.log('Attempting to modify Main.js calculatureSkillInterval');
        var calculateSkillIntervalNew = calculateSkillInterval.toString();
        calculateSkillIntervalNew = calculateSkillIntervalNew.replace('if(interval<250)interval=250;', '');
        if (calculateSkillIntervalNew == calculateSkillInterval.toString()) {
            console.error('Failed to find 250ms interval limit');
            return;
        }
        calculateSkillIntervalNew = calculateSkillIntervalNew.replace(
            'return Math.ceil(interval);',
            `return Math.ceil(interval/SEMI.getValue('${id}', 'gameSpeed'));`
        );
        if (calculateSkillIntervalNew == calculateSkillInterval.toString()) {
            console.error('Failed to find return / ceil call');
            return;
        }
        SEMI.replaceGameFunc('calculateSkillInterval', calculateSkillIntervalNew);
        console.log('Successfully updated calculateSkillInterval for game speed modification.');
    };

    const removeGUI = () => {
        calculateSkillInterval = calculateSkillIntervalOriginal;
    };

    const configMenu = `<div class="form-group">
    <label for="${id}-config-menu">Target speed:</label>
    <input type="number" class="form-control" id="${id}-game-speed" placeholder="1">
    </div>`;

    SEMI.add(id, {
        ms: 0,
        title,
        desc,
        imgSrc,
        pluginType: SEMI.PLUGIN_TYPE.TWEAK,
        onEnable: injectGUI,
        onDisable: removeGUI,
        config,
        configMenu,
        hasConfig: true,
        saveConfig,
        updateConfig,
    });
})();
