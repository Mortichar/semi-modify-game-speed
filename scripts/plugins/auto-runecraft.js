(() => {
    const id = 'auto-runecraft';
    const title = 'AutoRunecraft';
    const desc = 'AutoRunecraft will runecraft runes based on the rune use ratios you select.';

    const imgSrc = 'assets/media/bank/rune_chaos.svg';
    const skill = 'Runecrafting';

    const menuConfig = {};

    let currCraft = null;

    const RUNE_IDS = {
        air: 389,
        mind: 390,
        water: 391,
        earth: 392,
        fire: 393,
        light: 820,
        body: 394,
        chaos: 395,
        nature: 821,
        havoc: 822,
        death: 396,
        blood: 397,
        spirit: 823,
        ancient: 398,
    };

    const RUNE_SKILL_IDS = {
        air: 0,
        mind: 3,
        water: 5,
        earth: 9,
        fire: 17,
        light: 20,
        body: 24,
        chaos: 31,
        nature: 37,
        havoc: 47,
        death: 56,
        blood: 64,
        spirit: 71,
        ancient: 78,
    };

    const RUNE_NAMES = [
        'air',
        'mind',
        'water',
        'earth',
        'fire',
        'light',
        'body',
        'chaos',
        'nature',
        'havoc',
        'death',
        'blood',
        'spirit',
        'ancient',
    ];

    const defaultRatioConfig = {
        air: null,
        mind: null,
        water: null,
        earth: null,
        fire: null,
        light: null,
        body: null,
        chaos: null,
        nature: null,
        havoc: null,
        death: null,
        blood: null,
        spirit: null,
        ancient: null,
    };

    const storeConfig = () => {
        SEMI.setItem('ARC-ratio-config', menuConfig);
    };

    const runeCount = (runeName) => {
        return SEMIUtils.getBankQty(RUNE_IDS[runeName]);
    };

    const runesNeed = (runeName) => {
        return menuConfig['ARC'].runeRatio[runeName] * menuConfig['ARC'].baseRuneCount;
    };

    const runesLeft = (runeName) => {
        let onHand = SEMIUtils.getBankQty(RUNE_IDS[runeName]);
        let target = runesNeed(runeName);
        return Math.max(target - onHand, 0);
    };

    const injectAutoRunecraftGUI = () => {
        if ($(`#${id}`).length) {
            return;
        }

        menuConfig['ARC'] = { runeRatio: defaultRatioConfig, baseRuneCount: 10000 };
        const storedMenuConfig = SEMI.getItem('ARC-ratio-config');
        if (storedMenuConfig !== null) {
            menuConfig['ARC'] = storedMenuConfig['ARC'];
        }

        const createRuneButton = (i) => {
            let runeName = RUNE_NAMES[i];
            let src = `assets/media/bank/rune_${runeName}.svg`;

            return `
            <div id="aRCBtn${runeName}" class="aRCBtn btn btn-outline-primary" style="padding: 2px ; margin: 2px;">
                <img src="${src}" width="36" height="36">
                <input type="text" class="form-control form-control-small" style="width:auto;" id="aRCRatio${runeName}" placeholder="0"></input>
                <div id="aRCHave${runeName}">Have: ${runeCount(runeName)}</div>
                <div id="aRCNeed${runeName}">Need: ${runesNeed(runeName)}</div>
                <div id="aRCLeft${runeName}">Left: ${runesLeft(runeName)}</div>
            </div>`;
        };

        const runeOptions = `<div class="custom-control-inline">Cast Count:<input type="text" class="form-control form-control-small" id="aRCBaseRuneCount" placeholder="10000"></input></div><div>${RUNE_NAMES.map(
            (_, i) => createRuneButton(i)
        ).join('')}</div>`;

        const runeSelection = `
                <div class="col-md-12">
                    <div class="block block-rounded block-link-pop border-top border-mining border-4x" style="padding-bottom: 12px; display: flex; flex-direction: column">
                        <div class="block-header text-center"><h3 class="block-title">AutoRunecraft Rune Selection</h3></div>
                        <div class="block-content text-center font-w400 font-size-sm" style="padding-top: 4px;">Craft by ratios of your selection. Choose the base spell cast count you wish to craft for, then calculate your rune use for each cast and put it into the rune boxes. Will begin mining rune essence if you rune out.</div>
                        <div class="block-content text-center" style="padding-top: 12px; margin-top: auto;">${runeOptions}</div>
                    </div>
                </div>`;

        const autoRunecraftDiv = `<div id="${id}" class="row row-deck">${runeSelection}</div>`;

        const seedSavedRatios = () => {
            $.each(menuConfig['ARC'].runeRatio, function (index, value) {
                $('#aRCRatio' + index + ':text').val(value);
            });
        };

        const setOnChangeTriggers = () => {
            $.each(RUNE_NAMES, function (index, value) {
                $('#aRCRatio' + value).on('input', function () {
                    menuConfig['ARC'].runeRatio[value] = $(this).val();
                    storeConfig();
                });
            });
            $('#aRCBaseRuneCount').on('input', function () {
                menuConfig['ARC'].baseRuneCount = $(this).val();
                storeConfig();
            });
        };

        $('#horizontal-navigation-runecrafting').after($(autoRunecraftDiv));

        seedSavedRatios();
        setOnChangeTriggers();
    };

    const removeAutoRunecraftGUI = () => {
        $(`#${id}`).remove();
    };

    const onEnable = () => {
        if (!SEMIUtils.isCurrentSkill(skill)) {
            console.log('Not Crafting');
        }
        injectAutoRunecraftGUI();
    };

    const onDisable = () => {
        SEMIUtils.stopSkill(skill);
        removeAutoRunecraftGUI();
    };

    const craftRune = (runeName) => {
        let skillID = RUNE_SKILL_IDS[runeName];
        selectRunecraft(skillID);
        startRunecrafting();
    };

    const currentlyCrafting = (runeName) => {
        return currCraft === runeName;
    };

    const updateRuneCounts = (runeName) => {
        $(`#aRCHave${runeName}`).text('Have: ' + runeCount(runeName));
        $(`#aRCNeed${runeName}`).text('Need: ' + runesNeed(runeName));
        $(`#aRCLeft${runeName}`).text('Left: ' + runesLeft(runeName));
    };

    const totalRunesLeft = () => {
        return RUNE_NAMES.reduce((acc, curr, ind) => ((acc += runesLeft(curr)), 0));
    };

    const getSelectedRune = () => {
        return $('#runecraft-item-name').text().split(' ')[0].toLowerCase();
    };

    const isCraftingRune = (rune) => {
        return rune === getSelectedRune();
    };

    const autoRunecraft = () => {
        // Set the standard rune menu as the current menu
        runecraftingCategory(0);

        // Assure the counts are correct before each loop
        for (const rune of RUNE_NAMES) {
            updateRuneCounts(rune);
        }

        let runeEssenceCount = SEMIUtils.getBankQty(CONSTANTS.item.Rune_Essence);
        // Check if we even have enough rune essence
        if (runeEssenceCount === 0) {
            mineRock(10);
        } else {
            // Iterate through our "need" categories
            for (const rune of RUNE_NAMES) {
                // Store the value of runes left to go, and add the value to our iteration tracker
                let runeCountLeft = runesLeft(rune);

                // If the runes needed is >0, start crafting that rune
                if (runeCountLeft > 0 && !isCraftingRune(rune)) {
                    // Craft the Rune
                    craftRune(rune);
                    console.log('AutoRunecraft begin crafting ' + rune + ' runes');

                    // Exit to prevent from swapping runes to make infinitely
                    return false;
                } else if (!SEMIUtils.isCurrentSkill(skill)) {
                    craftRune(rune);
                    return false;
                } else if (runeCountLeft) {
                    return false;
                }
            }

            // Are we all done? If all left counts are at 0, stop crafting
            if (totalRunesLeft() === 0) {
                SEMIUtils.stopSkill(skill);
            }
        }
    };

    SEMI.add(id, {
        ms: 2000,
        onLoop: autoRunecraft,
        onEnable,
        onDisable,
        title,
        desc,
        imgSrc,
        skill,
    });
})();
