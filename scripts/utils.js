(() => {
    /** @typedef {keyof typeof CONSTANTS.skill} SkillName */
    const injectUtils = () => {
        console.log('Starting inject utils!');
        /** @param {string} id */
        const getElement = (id) => { return $(`#${SEMI.ROOT_ID}-${id}`).first(); };

        /** @param {string} id */
        const getElements = (id) => { return id == '' ? $(`[id^=${SEMI.ROOT_ID}]`) : $(`[id^=${SEMI.ROOT_ID}-${id}]`); };
        const iconSrc = getElement('icon')[0].src;

        /**
        * Custom notifications! green background with custom txt, two images, second one optional, main one is add-on icon.
        * @param {string} imgsrc
        * @param {string} msg
        * @param {number} n
        */
        const customNotify = (imgsrc = '', msg = 'Custom Notifications!', n = 3000) => { //outputs a custom notification with optional first image, SEMI icon, and message.
            // const template = '<div data-notify="container" class="SEMI-notif col-12 text-center notify-event" role="alert"><span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>';
            // const defaults = {type: 'light', placement: {from: 'bottom',  align: 'center'},  newest_on_top: true, animate: {enter: 'animated fadeInUp',  exit: 'animated fadeOut'}, template};
            // const message = `<img class="notification-img" src="${imgsrc}"><img src="${iconSrc}" height="auto" width="auto" style="margin: 4px;"><span class="badge badge-success">${msg}</span>`;
            Toastify({
                text: `<div class="text-center"><img class="notification-img" src="${imgsrc}"><img src="${iconSrc}" height="auto" width="auto" style="margin: 4px;"><span class="badge badge-success"> ${msg} </span></div>`,
                duration: n,
                gravity: "bottom", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                backgroundColor: "transparent",
                stopOnFocus: false,
            }).showToast();

            // Toastify({message}, {...defaults, delay: n}).showToast();
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

        /** @param {number?} itemID */
        const equipFromBank = (itemID, qty = 1) => {
            if(typeof itemID === 'undefined' || itemID === 0) {return false; }
            equipItem(itemID, qty, selectedEquipmentSet);
            return true;
        };

        const currentEquipment = () => equipmentSets[selectedEquipmentSet].equipment;

        /** @param {string} slotName */
        const currentEquipmentInSlot = (slotName) => currentEquipment()[CONSTANTS.equipmentSlot[slotName]];

        const isBankFull = () => { return bank.length >= baseBankMax + bankMax; };

        const sellItemWithoutConfirmation = (itemID, qty = 1) => {
            let saleModifier = 1; // Need to determine saleModifier because for some reason this isn't done inside processItemSale()
            if (items[itemID].type === 'Logs' && getMasteryPoolProgress(CONSTANTS.skill.Woodcutting) >= masteryCheckpoints[2]) {
                saleModifier += 0.5;
            }

            const selectBankItemRef = selectBankItem;
            selectBankItem = () => {}; // Temporarily replace selectBankItem() because this can cause errors when it gets called in processItemSale()
            processItemSale(itemID, qty, saleModifier);
            selectBankItem = selectBankItemRef;

            if ((selectedBankItem === itemID || itemsToSell.includes(itemID)) && !checkBankForItem(itemID)) {
                if (selectedBankItem === itemID) {
                    deselectBankItem();
                }
                if (itemsToSell.includes(itemID)) {
                    addItemToItemSaleArray(itemID);
                }
            }
        };

        const equipSwapConfig = {
            "Helmet": {
                slotID: 0,
                swapped: false
            },
            "Platebody": {
                slotID: 1,
                swapped: false
            },
            "Platelegs": {
                slotID: 2,
                swapped: false
            },
            "Boots": {
                slotID: 3,
                swapped: false
            },
            "Weapon": {
                slotID: 4,
                swapped: false
            },
            "Shield": {
                slotID: 5,
                swapped: false
            },
            "Amulet": {
                slotID: 6,
                swapped: false
            },
            "Ring": {
                slotID: 7,
                swapped: false
            },
            "Gloves": {
                slotID: 8,
                swapped: false
            },
            "Quiver": {
                slotID: 9,
                swapped: false
            },
            "Cape": {
                slotID: 10,
                swapped: false
            }
        };
        /**
         * Equips an item, remembers original item in slot, and can be called again to re-equip original item.
         * @param {number} idSwap
         * @param {string} slotName
         */
        const equipSwap = (idSwap, slotName) => {
            const currentlyEquippedItemID = currentEquipmentInSlot(slotName);
            if (!equipSwapConfig[slotName].swapped) {
                equipSwapConfig[slotName].originalID = currentlyEquippedItemID;
                if (slotName === 'Weapon') {
                    const currentlyEquippedShield = currentEquipmentInSlot('Shield');
                    equipSwapConfig['Shield'].originalID = currentlyEquippedShield;

                    // Store ammo count for javelins and throwing knives
                    if (items[currentlyEquippedItemID].ammoType === 2 || items[currentlyEquippedItemID].ammoType === 3) {
                        equipSwapConfig[slotName].ammo = equipmentSets[selectedEquipmentSet].ammo;
                    } else {
                        equipSwapConfig[slotName].ammo = 0;
                    }
                }
            }
            if (equipSwapConfig[slotName].swapped) {
                equipFromBank(equipSwapConfig[slotName].originalID, equipSwapConfig[slotName].ammo || 1);
                if (slotName === 'Weapon') {
                    equipFromBank(equipSwapConfig['Shield'].originalID);
                }
            } else {
                equipFromBank(idSwap);
            }
            equipSwapConfig[slotName].swapped = !equipSwapConfig[slotName].swapped;
        };

        /** @param {SkillName} skillName */
        const currentLevel = (skillName) => skillLevel[CONSTANTS.skill[skillName]];

        /** @param {SkillName} skillName */
        const currentXP = (skillName) => skillXP[CONSTANTS.skill[skillName]];

        /** @param {SkillName} skillName */
        const isMaxLevel = (skillName) => currentLevel(skillName) >= 99;

        /** @param {SkillName} skillName */
        const ownsCape = (skillName) => isMaxLevel(skillName) && checkBankForItem(CONSTANTS.item[`${skillName}_Skillcape`]);
        /** @param {SkillName} skillName */
        const hasCapeOn = (skillName) => equippedItems.includes(CONSTANTS.item[`${skillName}_Skillcape`]) || equippedItems.includes(CONSTANTS.item.Max_Skillcape);


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

        /** @param {number} n */
        const confirmAndCloseModal = (n = 100) => {
            setTimeout(() => {
                if (document.getElementsByClassName('swal2-confirm').length == 0) return;
                document.getElementsByClassName('swal2-confirm')[0].click();
            }, n);
        };

        const incomingAttackData = () => {
            //from user Lamb on discord: https://pastebin.com/Fw4R7zv5
            let htmlAttack = document.getElementById("combat-enemy-attack-speed-desc").textContent.slice(6, -1);

            if (htmlAttack === " Speed") {
                incomingAttack = "Attack";
                incomingDamage = combatData.enemy.maximumStrengthRoll;
            } else {
                incomingAttack = enemySpecialAttacks.find(o => o.name === htmlAttack);
                incomingDamage = (incomingAttack.setDamage) ? incomingAttack.setDamage * numberMultiplier : combatData.enemy.maximumStrengthRoll;
            }
            return {incomingAttack, incomingDamage};
        };

        const maxHP = () => { return SEMI.currentLevel('Hitpoints') * numberMultiplier; };
        const currentHP = () => { return combatData.player.hitpoints; };

        const maxHitOfCurrentEnemy = () => {
            // if (enemyInCombat == null) return 0;
            // if (combatData.enemy.specialAttackID == null) return combatData.enemy.maximumStrengthRoll;
            // var specialAtkArray = [combatData.enemy.maximumStrengthRoll];
            // for (const specialAttack of combatData.enemy.specialAttackID) {
            //     specialAtkArray.push(enemySpecialAttacks[specialAttack].setDamage * numberMultiplier);
            // }
            // return Math.max(...specialAtkArray);
            return SEMI.incomingAttackData().incomingDamage;
        };

        const playerIsStunned = () => { return combatData.player.stunned; };

        const enemyMaxStunDamageMultiplier = () => {
            if (combatData.enemy.specialAttackID == null) return 1;
            var multiplierArray = [];
            for (const specialAttack of combatData.enemy.specialAttackID) {
                multiplierArray.push(enemySpecialAttacks[specialAttack].stunDamageMultiplier);
            }
            return Math.max(...multiplierArray);
        };

        const adjustedMaxHit = () => {
            let maxHit = SEMI.maxHitOfCurrentEnemy();
            //enemy damage multipliers (stun etc) are calculated before player damage reduction
            const playerIsStunned = SEMI.playerIsStunned();
            const stunnedCase = playerIsStunned && !isNaN(SEMI.incomingAttackData().incomingAttack.stunDamageMultiplier);
            if (stunnedCase) { maxHit *= SEMI.incomingAttackData().incomingAttack.stunDamageMultiplier; }

            const damageReductionMultiplier = (100-damageReduction)/100;
            let adjustedMaxHit = Math.ceil(maxHit * damageReductionMultiplier);
            //Lamb's calculations account for other contingencies: burning damage, air god reflect damage, etc
            adjustedMaxHit += ((combatData.player.isBurning) ? Math.floor(SEMI.maxHP() * 0.02) : 0)
                + ((combatData.enemy.reflectMelee && attackStyle <= 2) ? combatData.enemy.reflectMelee * numberMultiplier : 0)
                + ((combatData.enemy.reflectMagic && attackStyle >= 6) ? combatData.enemy.reflectMagic * numberMultiplier : 0)
                + ((combatData.enemy.reflectRanged && (attackStyle >= 3 && attackStyle <= 5)) ? combatData.enemy.reflectRanged * numberMultiplier : 0);

            return Math.ceil(adjustedMaxHit);
        };

        const getCharacter = () => { return currentCharacter };

        const utilsReady = true;
        const utils = {utilsReady, changePage: _changePage, currentPageName,
            skillImg, isCurrentSkill, stopSkill, currentSkillName, currentSkillId, currentEquipment, currentXP,
            currentEquipmentInSlot, currentLevel, formatTimeFromMinutes, equipFromBank, isMaxLevel, ownsCape,
            incomingAttackData, maxHP, currentHP, equipSwap, equipSwapConfig, isBankFull, sellItemWithoutConfirmation, hasCapeOn,
            confirmAndCloseModal, maxHitOfCurrentEnemy, adjustedMaxHit, playerIsStunned,
            enemyMaxStunDamageMultiplier, getCharacter,
            customNotify, getElements, getElement, getBankQty, iconSrc, mergeOnto
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
