SEMIEventBus = (() => {
    /**
     * @typedef {HandleAddItemToBankPre: function, HandleAddItemToBankPost: function} AddItemToBankHandler
     * @typedef {HandleSkillChange: function} SkillChangeHandler
     */

    /**
     * @type {AddItemToBankHandler[]}
     */
    const _addItemToBankHandlers = [];
    const RegisterAddItemToBankHandler = (handler) => {
        _addItemToBankHandlers.push(handler);
    };

    /**
     * @type {SkillChangeHandler[]}
     */
    const _skillChangeHandlers = [];
    const RegisterSkillChangeHandler = (handler) => {
        _skillChangeHandlers.push(handler);
    };

    // While we can hook a ton of functions to catch skill changes instantly this is
    // cumbersome and a lot of maintenance. Instead we run the main loop
    // so that all scripts can use the data without their own loops.
    let _currentSkill = -1;
    let _isMagic = false;
    const checkIfSkillChanged = () => {
        if (SEMIUtils.currentSkillId() != _currentSkill || isMagic != _isMagic) {
            const _prevSkill = _currentSkill;
            _currentSkill = SEMIUtils.currentSkillId();
            _isMagic = isMagic;

            for (var handler of _skillChangeHandlers) {
                try {
                    if (handler.HandleSkillChange) {
                        handler.HandleSkillChange(_prevSkill, _currentSkill);
                    }
                } catch (e) {
                    console.error(`SEMI: SkillChangeHandler Failed.`);
                    console.error(e);
                }
            }
        }
    };

    const startEventBusTimers = () => {
        if (typeof SEMIUtils === 'undefined' || !SEMIUtils.utilsReady()) {
            return;
        }

        console.log('Starting Event Bus');
        clearInterval(eventBusWaiter);
        setInterval(checkIfSkillChanged, 100);
    };
    const eventBusWaiter = setInterval(startEventBusTimers, 50);

    const AddItemToBankPre = (itemID, quantity, found = true, showNotification = true, ignoreBankSpace = false) => {
        for (var handler of _addItemToBankHandlers) {
            try {
                if (
                    handler.HandleAddItemToBankPre &&
                    handler.HandleAddItemToBankPre(itemID, quantity, found, showNotification, ignoreBankSpace)
                ) {
                    return true;
                }
            } catch (e) {
                console.error(`SEMI: ItemHandler Failed.`);
                console.error(e);
            }
        }
    };

    const AddItemToBankPost = (itemID, quantity, found = true, showNotification = true, ignoreBankSpace = false) => {
        for (var handler of _addItemToBankHandlers) {
            try {
                if (handler.HandleAddItemToBankPost) {
                    handler.HandleAddItemToBankPost(itemID, quantity, found, showNotification, ignoreBankSpace);
                }
            } catch (e) {
                console.error(`SEMI: ItemHandler Failed.`);
                console.error(e);
            }
        }
    };

    return { AddItemToBankPost, AddItemToBankPre, RegisterAddItemToBankHandler, RegisterSkillChangeHandler };
})();
