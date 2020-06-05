(() => {
    /** @typedef {keyof typeof CONSTANTS.skill} SkillName */
    const ROOT_ID = 'SEMI-menu';
    const injectUtils = () => {
        console.log('Starting inject utils!');
        /**
        * @param {string} x
        * @param {*} y
        */
        const setItem = (x, y) => localStorage.setItem(`SEMI-${x}`, JSON.stringify(y));

        /** @param {string} x */
        const getItem = (x) => JSON.parse(localStorage.getItem(`SEMI-${x}`));

        /** @param {string} id */
        const getElement = (id) => { return $(`#${ROOT_ID}-${id}`).first(); };

        /** @param {string} id */
        const getElements = (id) => { return id == '' ? $(`[id^=${ROOT_ID}]`) : $(`[id^=${ROOT_ID}-${id}]`); };
        const iconSrc = getElement('icon')[0].src;

        /**
        * Custom notifications! green background with custom txt, two images, second one optional, main one is add-on icon.
        * @param {string} imgsrc
        * @param {string} msg
        * @param {number} n
        */
        const customNotify = (imgsrc = '', msg = 'Custom Notifications!', n = 3000) => { //outputs a custom notification with optional first image, SEMI icon, and message.
            const template = '<div data-notify="container" class="SEMI-notif col-12 text-center notify-event" role="alert"><span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>';
            const defaults = {type: 'light', placement: {from: 'bottom',  align: 'center'},  newest_on_top: true, animate: {enter: 'animated fadeInUp',  exit: 'animated fadeOut'}, template};
            const message = `<img class="notification-img" src="${imgsrc}"><img src="${iconSrc}" height="auto" width="auto" style="margin: 4px;"><span class="badge badge-success">${msg}</span>`;

            $.notify({message}, {...defaults, delay: n});
        };

        /**
        * @param {string} name
        * @param {*} options
        */
        const createElement = (name, options) => {
            const x = document.createElement(name);
            mergeOnto(x, options);
            return x;
        };


        /**
        * @param {HTMLElement} x
        * @param {object} y
        */
        const mergeOnto = (x, y) => {
            Object.keys(y).forEach((key) => { x[key] = y[key]; });
        };
        //the above func is also included in core.js

        /** @param {number} id */
        const getBankQty = (id) => {
            for (let i = 0; i < bank.length; i++) {
                if(bank[i].id === id) { return bank[i].qty; }
            }
            return 0;
        };

        /** @param {number?} item */
        const equipFromBank = (item) => {
            if(typeof item === 'undefined') {return false; }
            for (let i = 0; i < bank.length; i++) {
                if(items[bank[i].id].name == items[item].name) {
                    equipItem(i, item, 1, selectedEquipmentSet);
                    return true;
                }
            }
            return false;
        };

        const currentEquipment = () => equipmentSets[selectedEquipmentSet].equipment;

        /** @param {string} slotName */
        const currentEquipmentInSlot = (slotName) => currentEquipment()[CONSTANTS.equipmentSlot[slotName]];

        /** @param {SkillName} skillName */
        const currentLevel = (skillName) => skillLevel[CONSTANTS.skill[skillName]];

        /** @param {SkillName} skillName */
        const currentXP = (skillName) => skillXP[CONSTANTS.skill[skillName]];

        /** @param {SkillName} skillName */
        const isMaxLevel = (skillName) => currentLevel(skillName) >= 99;

        /** @param {SkillName} skillName */
        const ownsCape = (skillName) => isMaxLevel(skillName) && checkBankForItem(CONSTANTS.item[`${skillName}_Skillcape`]);

        const formatTimeFromMinutes = (min = 0) => {
            if(min == 0 || min == Infinity) { return '...'; }
            let hrs = min/60;
            let days = hrs/24;
            if (min < 60) { return `${min.toFixed(1)} min`; }
            else if (min < 1440) { return `${hrs.toFixed(1)} hrs`; }
            else if (min >= 1440) { return `${days.toFixed(2)} days`; }
        };

        const currentSkillId = () => currentSkillName() == '' ? -1 : CONSTANTS.skill[currentSkillName()];

        const currentSkillName = () => {
            if(currentlyCutting == 1 || currentlyCutting == 2) { return 'Woodcutting'; }
            if(isFishing) { return 'Fishing'; }
            if(isBurning) { return 'Firemaking'; }
            if(isCooking) { return 'Cooking'; }
            if(isMining) { return 'Mining'; }
            if(isSmithing) { return 'Smithing'; }
            if(isThieving) { return 'Thieving'; }
            if(isFletching) { return 'Fletching'; }
            if(isCrafting) { return 'Crafting'; }
            if(isRunecrafting) { return 'Runecrafting'; }
            if(isHerblore) { return 'Herblore'; }
            if(isInCombat) { return 'Hitpoints'; }
            return '';
        };

        /** @param {SkillName} skillName */
        const stopSkill = (skillName) => {
            if(currentSkillName() !== skillName) { return; }
            switch(skillName) {
                case 'Mining':    return mineRock(currentRock, true);
                case 'Cooking':   return startCooking(0, false);
                case 'Smithing':  return startSmithing(true);
                case 'Hitpoints': return stopCombat(false, true, true);
            }
        };

        /** @param {string} nameOrId */
        const isCurrentSkill = (nameOrId) => typeof nameOrId === 'string' ? currentSkillName() === nameOrId : currentSkillId() === nameOrId;

        /** @param {string} skill */
        const _skillImg = (skill) => `assets/media/skills/${skill}/${skill}.svg`;

        /** @param {string} skill */
        const skillImg = (skill) => _skillImg(skill.toLowerCase());

        const pages = ['Woodcutting', 'Shop', 'Bank', 'Settings', 'Changelog', 'Milestones', 'Statistics', 'Fishing', 'Firemaking', 'Cooking', 'Mining', 'Smithing', 'Mastery', 'Combat', 'Thieving', 'Farming', 'Fletching', 'Crafting', 'Runecrafting', 'Herblore', 'Archaeology', 'Easter'];
        const currentPageName = () => pages[currentPage];

        /** @param {string} name */
        const _changePage = (name) => { changePage(pages.indexOf(name)); };

        const filterItems = (f) => items.map((item, i) => ({...item, i})).filter(f).map(({i}) => i)

        const confirmAndCloseModal = () => {
            setTimeout(() => {
                if (document.getElementsByClassName('swal2-confirm').length == 0) return;
                setTimeout(() => { document.getElementsByClassName('swal2-confirm')[0].click();}, 50);
            }, 50);
        };

        const maxHitOfCurrentEnemy = () => {
            if (enemyInCombat == null) return 0;
            return combatData.enemy.maximumStrengthRoll;
        }

        const adjustedMaxHit = () => {
            const maxHit = SEMI.maxHitOfCurrentEnemy();
            const damageReductionMultiplier = (100-damageReduction)/100;
            const adjustedMaxHit = maxHit * damageReductionMultiplier;
            return Math.ceil(adjustedMaxHit);
        }

        const utilsReady = true;
        const utils = {utilsReady, changePage: _changePage, currentPageName,
            skillImg, isCurrentSkill, stopSkill, currentSkillName, currentSkillId, currentEquipment, currentXP,
            currentEquipmentInSlot, currentLevel, formatTimeFromMinutes, equipFromBank, isMaxLevel, ownsCape,
            confirmAndCloseModal, maxHitOfCurrentEnemy, adjustedMaxHit,
            createElement, customNotify, getElements, getElement, getItem, setItem, getBankQty, iconSrc, mergeOnto, ROOT_ID
        };
        Object.keys(utils).forEach((key) => { SEMI[key] = utils[key]; });
        console.log('Utils injected!');
        $('body').append('<div id="SEMI-canary"></div>');
    };

    const loadUtils = () => {
        if(!isLoaded || typeof SEMI === 'undefined') {return;}
        clearInterval(utilLoader);
        injectUtils();
    };

    const utilLoader = setInterval(loadUtils, 50);

})();
