(() => {
    const id = 'auto-idle-agility';
    const title = 'Auto Idle Agility';
    const desc =
        'This will automatically begin idling agiility whenever your character is idle as there are no consequences to running agility courses';
    const imgSrc = 'assets/media/bank/skillcape_agility.svg';

    const agilityIfIdle = () => {
        if (SEMIUtils.currentSkillName() === '' && !currentlyCatchingUp) {
            startAgility();
        }
    };

    SEMI.add(id, {
        ms: 500,
        pluginType: SEMI.PLUGIN_TYPE.TWEAK,
        title,
        desc,
        imgSrc,
        onLoop: agilityIfIdle,
    });
})();
