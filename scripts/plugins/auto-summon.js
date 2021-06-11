(() => {
    const id = 'auto-summon';
    const desc =
        'AutoSummon will automatically make tablets using all available recipes starting with the highest exp tablets. Will automatically buy shards if there is money and bank space. WARNING: THIS WILL USE RESOURCES IF THEY ARE AVAILABLE. ENSURE YOU ARE COMFORTABLE POSSIBLY BURNING ALL OF YOUR RECIPE ITEMS UNTIL A BLACKLIST IS IMPLEMENTED.';
    const imgSrc = 'assets/media/bank/skillcape_summoning.svg';
    const title = 'AutoSummon';
    const skill = 'Summoning';

    const config = {
        gpToKeep: 10000000,
    };

    const shardTypes = [
        CONSTANTS.item.Summoning_Shard_Red,
        CONSTANTS.item.Summoning_Shard_Green,
        CONSTANTS.item.Summoning_Shard_Blue,
        CONSTANTS.item.Summoning_Shard_Silver,
        CONSTANTS.item.Summoning_Shard_Gold,
        CONSTANTS.item.Summoning_Shard_Black,
    ];

    const shardShopIDs = SHOP.Materials.map((curr) => shardTypes.includes(curr.contains.items[0][0])).reduce(
        (acc, item, ind) => {
            if (item) {
                acc.push(ind);
            }
            return acc;
        },
        []
    );

    // Gives us the unlocked familiars in reverse order so we can go from high -> low in xp
    const getUnlockedFamiliars = () =>
        Object.keys(summoningData.MarksDiscovered)
            .filter((key) => summoningData.MarksDiscovered[key] > 0)
            .reverse();

    const getFamiliarItemID = (familiar) => summoningItems[familiar].itemID;

    const getShardTypeIndex = (shardType) => shardTypes.indexOf(shardType);
    const getShardShopID = (shardTypeID) => shardShopIDs[shardTypeID];

    const buyShard = (shardType) => {
        const shardToBuyIndex = getShardTypeIndex(shardType);
        const shardShopID = getShardShopID(shardToBuyIndex);

        // Sets this to 10
        buyQty = 10;

        // TODO: Bank checking should happen here

        // Buys the shards
        buyShopItem('Materials', shardShopID);
    };

    const configMenu = `<div class="form-group">
        <label for="${id}-config-menu">GP to Keep:</label>
        <input type="number" class="form-control" id="${id}-gp-to-keep" placeholder="100">
    </div>`;

    const topOffShards = () =>
        shardTypes.forEach((shard) => {
            if (SEMIUtils.getBankQty(shard) < 10) {
                buyShard(shard);
            }
        });

    const onEnable = () => {
        console.log('AutoSummon enabled');

        // Stops it initially so that the script can grab control
        SEMIUtils.stopSkill(skill);
    };

    const onDisable = () => {
        console.log('AutoSummon disabled');
        SEMIUtils.stopSkill(skill);
    };

    const currentlyCrafting = () => {
        return SEMIUtils.currentSkillName() === 'Summoning';
    };

    const autoSummon = () => {
        if (!currentlyCrafting()) {
            const familiarsToCraft = getUnlockedFamiliars();

            familiarsToCraft.every((familiar) => {
                // First top off our shards, we need these for all crafts so keep a minimum of 10 of each
                topOffShards();

                // Gets the item id so we can check for recipe requirements
                const tabletID = getFamiliarItemID(familiar);
                const tablet = items[tabletID];

                tablet.summoningReq.every((recipe, index) => {
                    // Selects the chosen familiar in the menu

                    const ableToCraft = checkSummoningReq(tabletID);

                    // If we can't craft this, move to the next familiar
                    if (!ableToCraft) {
                        return true;
                    }

                    summoningCategory(1);
                    selectSummon(familiar, index);
                    // If we can, begin crafting tablets
                    createSummon(false);
                    return false;
                });

                if (currentlyCrafting()) {
                    return false;
                }
            });
        }
    };

    SEMI.add(id, {
        ms: 5000,
        pluginType: SEMI.PLUGIN_TYPE.AUTO_SKILL,
        title,
        desc,
        imgSrc,
        onEnable,
        onDisable,
        onLoop: autoSummon,
    });
})();
