(() => {
    const id = 'save-on-close';
    const title = 'Save On Close';
    const desc = "This script automatically cloud saves when leaving the page so you don't forget";
    const imgSrc = 'assets/media/bank/rune_mind.svg';

    const forceCloudSave = (event) => {
        forceSync(false, false);
        event.returnValue = `Wait for cloud save to complete.`;
    };

    const enableListener = () => {
        window.addEventListener('beforeunload', forceCloudSave);
    };

    const disableListener = () => {
        window.removeEventListener('beforeunload', forceCloudSave);
    };

    SEMI.add(id, {
        ms: 0,
        pluginType: SEMI.PLUGIN_TYPE.TWEAK,
        title,
        desc,
        imgSrc,
        onEnable: enableListener,
        onDisable: disableListener,
    });
})();
