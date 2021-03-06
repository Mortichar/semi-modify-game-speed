(() => {
    const id = 'auto-master';
    const desc = `AutoMaster will automatically spend down mastery pools when they are above 95%. It will spend your mastery points on your lowest mastery item in the particular skill above 95%. Warning: at this stage it will constantly close your mastery spending page and may interrupt attempts to spend other Mastery XP than what it is automating. Also, be aware that it will be affected by the Mastery XP Spending Multiplier buttons (+1, +5, +10)
    
    Additionally, this skill will claim any mastery tokens in your bank as well.`;
    const imgSrc = 'assets/media/main/mastery_pool.svg';
    const title = 'AutoMaster (Beta)';

    //AutoMaster: will spend down mastery pool
    const autoMaster = () => {
        const skillList = [0, 1, 2, 3, 4, 5, 10, 11, 13, 14, 15, 19, 20];

        // Now
        const masteryTokens = [
            CONSTANTS.item.Mastery_Token_Agility,
            CONSTANTS.item.Mastery_Token_Cooking,
            CONSTANTS.item.Mastery_Token_Crafting,
            CONSTANTS.item.Mastery_Token_Farming,
            CONSTANTS.item.Mastery_Token_Firemaking,
            CONSTANTS.item.Mastery_Token_Fishing,
            CONSTANTS.item.Mastery_Token_Fletching,
            CONSTANTS.item.Mastery_Token_Herblore,
            CONSTANTS.item.Mastery_Token_Mining,
            CONSTANTS.item.Mastery_Token_Runecrafting,
            CONSTANTS.item.Mastery_Token_Smithing,
            CONSTANTS.item.Mastery_Token_Summoning,
            CONSTANTS.item.Mastery_Token_Thieving,
            CONSTANTS.item.Mastery_Token_Woodcutting,
        ];

        masteryTokens.forEach((token) => {
            const tokenSkill = items[token].skill;
            const poolSize = getMasteryPoolTotalXP(tokenSkill);
            const currPool = MASTERY[tokenSkill].pool;
            const poolRatio = currPool / poolSize;

            if (SEMIUtils.getBankQty(token) && poolRatio < 1) {
                selectBankItem(token);
                claimToken();
            }
        });

        for (const skillId of skillList) {
            const poolSize = getMasteryPoolTotalXP(skillId);
            const currPool = MASTERY[skillId].pool;
            if (currPool / poolSize > 0.95) {
                const minSkill = MASTERY[skillId].xp.indexOf(Math.min(...MASTERY[skillId].xp));
                const toLevel = getMasteryXpForNextLevel(skillId, minSkill);
                if ((currPool - toLevel) / poolSize > 0.95) {
                    //skip if mastery skill is at 99
                    if (toLevel == 0) {
                        continue;
                    }
                    levelUpMasteryWithPool(skillId, minSkill);
                    //auto-close the modal, just spend it
                    $('#modal-spend-mastery-xp').modal('hide');
                }
            }
        }
    };

    SEMI.add(id, { ms: 2000, onLoop: autoMaster, title, desc, imgSrc });
})();
