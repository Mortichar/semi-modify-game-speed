(() => {
    const id = 'auto-loot';
    const title = 'AutoLoot';
    const desc = 'Self-splanatory. :)';
    const imgSrc = 'assets/media/main/bank_header.svg';
    SEMI.add(id, {
        ms: 500,
        imgSrc,
        onLoop: () => {
            if (droppedLoot.length !== 0) lootAll();
        },
        desc,
        title,
        pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT,
    });
})();
