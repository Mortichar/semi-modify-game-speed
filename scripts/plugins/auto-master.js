(() => {
    const id = 'auto-master';
    const desc = `AutoMaster will automatically spend down mastery pools when they are above 95%`;
    const imgSrc = 'assets/media/main/mastery_pool.svg';
    const title = 'AutoMaster';


    //AutoMaster: will spend down mastery pool
    const autoMaster = () => {
        var skillList = [0,1,2,3,4,5,10,11,13,14,15,19];

        for (const skillId of skillList) {
          const poolSize = getMasteryPoolTotalXP(skillId)
          const currPool = MASTERY[skillId].pool
          if (currPool/poolSize > .95) {
            const minSkill = MASTERY[skillId].xp.indexOf(Math.min(...MASTERY[skillId].xp))
            const toLevel = getMasteryXpForNextLevel(skillId,minSkill)
            if ((currPool-toLevel)/poolSize > .95) {
              levelUpMasteryWithPool(skillId, minSkill);
            }
          }
        }
    };

    const hasConfig = false;

    SEMI.add(id, { ms: 2000, onLoop: autoMaster,  title, desc, imgSrc });
})();
