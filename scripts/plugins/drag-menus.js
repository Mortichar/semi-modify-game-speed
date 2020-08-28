var injectDragMenus = () => {
    const is_android = navigator.userAgent.indexOf("Android") > -1;
    if (is_android) { return; }
    const prefix = SEMI.ROOT_ID;
    const getEl = (id) => SEMI.getElement(id);

    const menuConfig = {};
    const sections = ['combat', 'skills', 'auto-combat', 'auto-skills', 'other', 'socials'];

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
        if(storedMenuConfig !== null) { Object.keys(storedMenuConfig).map((k) => menuConfig[k] = storedMenuConfig[k]); }
    };

    const storeMenuState = () => { SEMI.setItem('drag-menu-config', menuConfig); };

    const skillElements = [...$('.nav-main-item')].filter((x) => x.id.startsWith('nav-skill-tooltip') || x.id === 'farming-glower');
    const headers = [...$('.nav-main-heading')];

    const combatSkills = skillElements.filter((x) => x.lastElementChild.href === 'javascript:changePage(13);');
    const nonCombatSkills = skillElements.filter((x) => x.lastElementChild.href !== 'javascript:changePage(13);');
    const SEMIPlugins = [...$(`.${prefix}-button`)];
    const SEMICombatPlugins = SEMIPlugins.filter((x) => x.id.startsWith(`${prefix}-combat-skill-`));
    const SEMISkillPlugins = SEMIPlugins.filter((x) => x.id.startsWith(`${prefix}-skills-skill-`));
    const otherButtons = [...$('.nav-main-item')].filter((x) => x.id.startsWith(`${prefix}-other-`));
    const socialButtons = [...$('.nav-main-item')].filter((x) => x.id.startsWith(`${prefix}-socials-`));

    loadMenuState();
    const skills = {combat: combatSkills, skills: nonCombatSkills, 'auto-skills': SEMISkillPlugins, 'auto-combat': SEMICombatPlugins, other: otherButtons, socials: socialButtons};

    const header = (name) => $(headers.filter((x) => {
        return x.innerText.toUpperCase().startsWith(name.toUpperCase().replace('-', ' '));
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