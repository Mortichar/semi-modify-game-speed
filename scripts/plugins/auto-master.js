(() => {
    const id = 'auto-master';
    const desc = `AutoMaster will automatically spend down mastery pools when they are above 95%. It will spend your mastery points on your lowest mastery item in the particular skill above 95%. Warning: at this stage it will constantly open your mastery spending page and may interrupt gameplay. Also, be aware that it will be affected by the Mastery XP Spending Multiplier buttons (+1, +5, +10)`;
    const imgSrc = 'assets/media/main/mastery_pool.svg';
    const title = 'AutoMaster (Beta)';

    //AutoMaster: will spend down mastery pool
    const autoMaster = () => {
        var skillList = [0, 1, 2, 3, 4, 5, 10, 11, 13, 14, 15, 19];

        for (const skillId of skillList) {
            const poolSize = getMasteryPoolTotalXP(skillId);
            const currPool = MASTERY[skillId].pool;
            if (currPool / poolSize > 0.95) {
                const minSkill = MASTERY[skillId].xp.indexOf(Math.min(...MASTERY[skillId].xp));
                const toLevel = getMasteryXpForNextLevel(skillId, minSkill);
                if ((currPool - toLevel) / poolSize > 0.95) {
                    //skip if mastery skill is at 99
                    if (toLevel == 0) { continue; }
                    levelUpMasteryWithPool(skillId, minSkill);
                }
            }
        }
    };

    SEMI.add(id, { ms: 2000, onLoop: autoMaster, title, desc, imgSrc });
})();
