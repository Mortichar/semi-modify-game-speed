(() => {
    const id = 'auto-bonfire';
    const title = 'AutoBonfire';
    const desc = 'AutoBonfire will keep a bonfire lit when you have a type of wood selected in Firemaking. The author suggests having an abundance of wood if using this!';
    const imgSrc = 'assets/media/skills/firemaking/bonfire_active.svg';
    const skill = 'Firemaking';

    //:: simply rewritten autoBonfire by Dream below
    const autoBonfire = () => { if (bonfireBonus === 0) lightBonfire(); }; //really
    //:: end autoBonfire, adding Auto-Bonfire tog, buttons injected in menus.js
    const onToggle = () => { $(`#${id}-status`).css('color', (SEMI.isEnabled(id)) ? 'red' : ''); };

    const onEnable = () => { SEMI.customNotify(imgSrc, 'Select your Logs to begin.', 5000); };

    SEMI.add(id, {ms: 500, onLoop: autoBonfire, onEnable, onToggle, desc, imgSrc, title, skill});
})();


