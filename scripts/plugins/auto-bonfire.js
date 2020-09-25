(() => {
    const id = 'auto-bonfire';
    const title = 'AutoBonfire';
    const desc = 'AutoBonfire will keep a bonfire lit when you have a type of wood selected in Firemaking. The author suggests having an abundance of wood if using this! Now only begins a bonfire when logs are currently burning.';
    const imgSrc = 'assets/media/skills/firemaking/bonfire_active.svg';
    const skill = 'Firemaking';

    const autoBonfire = () => {
        if (bonfireBonus === 0 && SEMI.isCurrentSkill('Firemaking')) lightBonfire();
    };

    const onEnable = () => { SEMI.customNotify(imgSrc, 'To begin, start burning some logs.', 5000); };
    SEMI.add(id, {ms: 500, onLoop: autoBonfire, onEnable, desc, imgSrc, title, skill});
})();
