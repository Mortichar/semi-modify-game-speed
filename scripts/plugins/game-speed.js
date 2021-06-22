(() => {
    const id = 'modify-game-speed';
    const title = 'Modify Game Speed';
    const desc = 'This will modify the rate at which you, and enemies, perform all actions.';
    const imgSrc = 'assets/media/bank/skillcape_max.svg';
    const version = 1;
    const defaultGameSpeed = 1;
    const maximumSpeed = 10;
    const minimumSpeed = 1;

    const clamp = (value, minimum, maximum) => {
        if (value < minimum) {
            return minimum;
        }
        if (value > maximum) {
            return maximum;
        }
        return value;
    };

    var config = {
        gameSpeed: defaultGameSpeed,
        version: version,
    };

    const gameSpeedIdentifier = `#${id}-game-speed`;

    const storeConfig = () => {
        SEMI.setItem(`${id}-config-${currentCharacter}`, config);
    };

    const saveConfig = () => {
        config.gameSpeed = clamp($(gameSpeedIdentifier).val(), minimumSpeed, maximumSpeed);
        SEMI.setValue(id, `gameSpeed`, config.gameSpeed);
        if (SEMI.isEnabled(id)) {
            removeGUI();
            injectGUI();
        }
        storeConfig();
        SEMIUtils.customNotify(imgSrc, `${title} config saved!`);
    };

    const loadConfig = () => {
        const storedConfig = SEMI.getItem(`${id}-config-${currentCharacter}`);
        config = { ...config, ...storedConfig };
    };

    const updateConfig = () => {
        $(gameSpeedIdentifier).val(SEMI.getValue(id, `gameSpeed`));
    };
    loadConfig();

    const configMenu = `<div class="form-group">
        <label for="${id}-config-menu">Target speed:</label>
        <input type="number" class="form-control" id="${id}-game-speed" placeholder="${config.gameSpeed}">
    </div>`;

    const calculateSkillIntervalOriginal = calculateSkillInterval;
    const updatePlayerAttackSpeedOriginal = updatePlayerAttackSpeed;
    const magicIntervalOriginal = magicInterval;
    const loadNewEnemyOriginal = loadNewEnemy;
    const startCombatOriginal = startCombat;
    const rockResetOriginal = rockReset;

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
            `return Math.ceil(interval/${config.gameSpeed});`
        );
        if (calculateSkillIntervalNew == calculateSkillInterval.toString()) {
            console.error('Failed to find return / ceil call!');
            return;
        }
        SEMI.replaceGameFunc('calculateSkillInterval', calculateSkillIntervalNew);
        console.log('Successfully adjusted calculateSkillInterval.');

        console.log('Attempting to just rock respawn interval . . .');
        var rockResetNew = rockResetOriginal.toString();
        rockResetNew = rockResetNew.replace(
            'miningData[ore].respawnInterval;',
            `miningData[ore].respawnInterval/${config.gameSpeed};`
        );
        if (rockResetNew == rockResetOriginal.toString()) {
            console.rerror('Failed to adjust rock respawn interval!');
            return;
        }
        SEMI.replaceGameFunc('rockReset', rockResetNew);
        console.log('Successfully adjusted rock respawn interval.');

        console.log('Attempting to adjust alt magic interval . . .');
        magicInterval = magicIntervalOriginal / config.gameSpeed;
        console.log('Successfully adjusted alt magic interval.');

        console.log('Attempting to adjust combat attack speed for the player . . .');
        if (!updatePlayerAttackSpeedOriginal) {
            console.error('Failed to update player attack speed!');
            return;
        }
        updatePlayerAttackSpeed = () => {
            combatData.player.baseAttackSpeed = combatData.player.baseAttackSpeed / config.gameSpeed;
            updatePlayerAttackSpeedOriginal();
        };

        startCombatNew = startCombat.toString();
        startCombatNew = startCombatNew.replace(
            'attackInterval=playerSpecialAttacks[specID].attackInterval;',
            `attackInterval=playerSpecialAttacks[specID].attackInterval/${config.gameSpeed};`
        );
        if (startCombatNew == startCombat.toString()) {
            console.error('Failed to update player attack speed!');
            return;
        }
        SEMI.replaceGameFunc('startCombat', startCombatNew);
        console.log('Successfully adjusted combat attack speed for the player.');

        console.log('Attemping to adjust combat attack speed for enemies . . .');
        loadNewEnemyNew = loadNewEnemyOriginal.toString();
        loadNewEnemyNew = loadNewEnemyNew.replace(
            'MONSTERS[enemy].attackSpeed/golbinModifier;',
            `MONSTERS[enemy].attackSpeed/golbinModifier/${config.gameSpeed};`
        );
        if (loadNewEnemyNew == loadNewEnemyOriginal.toString()) {
            console.error('Failed to adjust enemy attack speed!');
            return;
        }
        loadNewEnemyNew = loadNewEnemyNew.replace(
            'MONSTERS[enemy].attackSpeed;',
            `MONSTERS[enemy].attackSpeed/${config.gameSpeed};`
        );
        if (loadNewEnemyNew == loadNewEnemyOriginal.toString()) {
            console.error('Failed to adjust enemy attack speed!');
            return;
        }
        loadNewEnemyNew = loadNewEnemyNew.replace(
            'enemySpawnTimer-playerModifiers.decreasedMonsterRespawnTimer+playerModifiers.increasedMonsterRespawnTimer',
            `(enemySpawnTimer-playerModifiers.decreasedMonsterRespawnTimer+playerModifiers.increasedMonsterRespawnTimer)/${config.gameSpeed};`
        );
        if (loadNewEnemyNew == loadNewEnemyOriginal.toString()) {
            console.error('Failed to adjust enemy attack speed!');
            return;
        }
        SEMI.replaceGameFunc('loadNewEnemy', loadNewEnemyNew);
        console.log('Successfully adjusted combat attack speed for enemies.');
    };

    const removeGUI = () => {
        // restore skilling interval
        SEMI.removeReplacementFunc('calculateSkillInterval');
        calculateSkillInterval = calculateSkillIntervalOriginal;

        // restore magic interval
        magicInterval = magicIntervalOriginal;

        // restore player attack interval
        updatePlayerAttackSpeed = updatePlayerAttackSpeedOriginal;
        SEMI.removeReplacementFunc('startCombat');
        startCombat = startCombatOriginal;

        // restore enemy attack speed interval
        SEMI.removeReplacementFunc('loadNewEnemy');
        loadNewEnemy = loadNewEnemyOriginal;

        SEMI.removeReplacementFunc('rockReset');
        rockReset = rockResetOriginal;
    };

    SEMI.add(id, {
        ms: 0,
        title,
        desc,
        imgSrc,
        pluginType: SEMI.PLUGIN_TYPE.TWEAK,
        onEnable: injectGUI,
        onDisable: removeGUI,
        configMenu,
        hasConfig: true,
        saveConfig,
        updateConfig,
    });
})();
