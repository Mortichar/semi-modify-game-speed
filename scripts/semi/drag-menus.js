var injectDragMenus = () => {
    const prefix = SEMI.ROOT_ID;
    const getEl = (id) => SEMI.getElement(id);

    const sections = ['combat', 'skills', 'other', 'socials'];
    const configVersion = 2;

    const menuConfig = { version: configVersion };

    for (let key in SEMI.SIDEBAR_MENUS) {
        const menu = SEMI.SIDEBAR_MENUS[key];
        sections.push(menu.ID);
    }

    sections.forEach((section) => {
        menuConfig[section] = {locked: true, order: []};
    });

    const orderMenu = (section) => {
        const order = menuConfig[section].order;
        if(order.length === 0) {return;}
        const menu = getEl(`section-${section}-inner`);
        const menuItems = [...menu.children()];
        const sortedMenu = menuItems.sort((menuA, menuB) => order.indexOf(menuA.id) - order.indexOf(menuB.id));
        menu.append(sortedMenu);
    };

    const orderMenus = () => {
        sections.forEach(orderMenu);
        lockItems();
    };

    const lockClasses = {'false': 'fa-unlock-alt', 'true': 'fa-lock'};

    const lockMenus = () => {
        sections.forEach((x) => {
            const state = menuConfig[x].locked;
            getEl(`lock-${x}`).removeClass(lockClasses[!state]).addClass(lockClasses[state]);
        });
        lockItems();
    };

    const lockMenu = (x) => {
        menuConfig[x].locked = !menuConfig[x].locked;
        lockMenus();
    };

    const lockItems = () => {
        sections.forEach((key) => {
            const menuItems = getEl(`section-${key}-inner`).children();
            const div = getEl(`section-${key}-divider`);
            if(menuConfig[key].locked) {
                menuItems.addClass('SEMI-locked');
                div.addClass('lock-d-none');
                div.nextAll().addClass('lock-d-none');
            } else {
                menuItems.removeClass('SEMI-locked');
                div.removeClass('lock-d-none');
                div.nextAll().removeClass('lock-d-none');
            }
        });
        storeMenuState();
    };

    const makeItemsGhost = () => {
        sections.forEach((key) => {
            const div = getEl(`section-${key}-divider`);
            div.nextAll().fadeTo(500, 0.5);
            div.prevAll().fadeTo(0.5, 1);
            menuConfig[key].order = [...getEl(`section-${key}-inner`).children()].map((x) => x.id);
        });
        storeMenuState();
    };

    const loadMenuState = () => {
        const storedMenuConfig = SEMI.getItem('drag-menu-config');
        if (storedMenuConfig !== null) {
            Object.keys(storedMenuConfig).map((k) => menuConfig[k] = storedMenuConfig[k]);

            // unhide alt-magic unintentionally hidden by a previous version
            if (!storedMenuConfig.version) {
                const altMagicMenu = 'nav-skill-tooltip-16';
                const altMagicIndex = menuConfig.skills.order.indexOf(altMagicMenu);
                const dividerIndex = menuConfig.skills.order.indexOf(`${SEMI.ROOT_ID}-section-skills-divider`);
                if (altMagicIndex !== -1 && dividerIndex !== -1 && altMagicIndex > dividerIndex) {
                    menuConfig.skills.order.splice(altMagicIndex, 1);
                    menuConfig.skills.order.splice(dividerIndex, 0, altMagicMenu);
                }
            }
            // update SEMI menu ids
            if (storedMenuConfig.version < 2) {
                menuConfig['auto-skills'].order = menuConfig['auto-skills'].order.map(s => s.replace('SEMI-menu-skills', 'SEMI-menu-auto-skills'));
                menuConfig['auto-combat'].order = menuConfig['auto-combat'].order.map(s => s.replace('SEMI-menu-combat', 'SEMI-menu-auto-combat'));
            }

            menuConfig.version = configVersion;
        }
    };

    const storeMenuState = () => { SEMI.setItem('drag-menu-config', menuConfig); };

    const skillElements = [...$('.nav-main-item')].filter((x) => x.id.startsWith('nav-skill-tooltip') || x.id === 'farming-glower');
    const headers = [...$('.nav-main-heading')];

    const combatSkills = skillElements.filter((x) => x.lastElementChild.getAttribute('onClick') === 'changePage(13);');
    const nonCombatSkills = skillElements.filter((x) => x.lastElementChild.getAttribute('onClick') !== 'changePage(13);');
    const SEMIPlugins = [...$(`.${prefix}-button`)];
    const otherButtons = [...$('.nav-main-item')].filter((x) => x.id.startsWith(`${prefix}-other-`));
    const socialButtons = [...$('.nav-main-item')].filter((x) => x.id.startsWith(`${prefix}-socials-`));

    const skills = {combat: combatSkills, skills: nonCombatSkills, other: otherButtons, socials: socialButtons};

    for (let key in SEMI.SIDEBAR_MENUS) {
        const menu = SEMI.SIDEBAR_MENUS[key];
        skills[menu.ID] = SEMIPlugins.filter((x) => x.id.startsWith(`${prefix}-${menu.ID}-skill-`));
    }

    loadMenuState();

    const header = (name) => $(headers.filter((x) => {
        return x.id.startsWith(name) || x.innerText.toUpperCase().startsWith(name.toUpperCase().replace('-', ' '));
    })[0]);

    const makeSortable = (id) => {
        Sortable.create(document.getElementById(id), {onEnd: makeItemsGhost, filter: '.SEMI-locked'});
    };

    const makeDrag = (name) => {
        const fullPrefix = `${prefix}-section-${name}`;
        if($(`#${fullPrefix}`).length !== 1) { header(name).before($(`<div id="${fullPrefix}"><div id="${fullPrefix}-inner"></div></div>`)); }
        $(`#${fullPrefix}-inner`).append(skills[name], $(`<div id="${fullPrefix}-divider" class="nav-main-link nav-compact"><img class="nav-img" src="${SEMI.iconSrc}"><small>Unlocked! Items below this hide when locked.</small></div>`)).before(header(name));
        makeSortable(`${fullPrefix}-inner`);
        addLockIcon(name);
    };

    const addLockIcon = (name) => {
        const el = $(`<i class="fa fa-lock text-muted ml-1" id="${prefix}-lock-${name}"></i>`);
        el.on('click', () => lockMenu(name));
        header(name).append(el);
    };

    sections.forEach((section) => makeDrag(section));

    $(`#${prefix}-section-combat-inner`).before($('#nav-skill-tooltip-69').parent());
    lockMenus();
    orderMenus();
    makeItemsGhost();
    $(".nav-main-heading:contains('Other'):last").remove();
};