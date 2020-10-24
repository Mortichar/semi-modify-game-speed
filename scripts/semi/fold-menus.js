var injectEyes = (() => {
    const toggleMoreMenus = (x) => {
        moreMenus[x] = !moreMenus[x];
        storeMenuState();
        showMenus();
    };

    const eye = (section) => {
        const eyeEl = $(`<i class="far fa-eye text-muted ml-1" id="${SEMI.ROOT_ID}-eye-${section}"></i>`);
        eyeEl.on('click', () => toggleMoreMenus(section));
        return eyeEl;
    };

    const loadMenuState = () => {
        const storedMenuConfig = SEMI.getItem('fold-menu-config');
        if (storedMenuConfig !== null) {
            Object.keys(storedMenuConfig).map((k) => (moreMenus[k] = storedMenuConfig[k]));
        }
    };

    const storeMenuState = () => {
        SEMI.setItem('fold-menu-config', moreMenus);
    };

    const injectEyes = () => {
        const socials = $(".nav-main-heading:contains('Socials')").nextUntil('.nav-main-heading');
        const other = $(".nav-main-heading:contains('Other')").nextUntil('.nav-main-heading');
        for (let i = 0; i < socials.length; i++) {
            socials[i].id = `${SEMI.ROOT_ID}-socials-${i}`;
        }
        for (let i = 0; i < other.length; i++) {
            other[i].id = `${SEMI.ROOT_ID}-other-${i}`;
        }

        $(".nav-main-heading:contains('Other'):first").append(eye('other'));
        $(".nav-main-heading:contains('Socials')").append(eye('socials'));

        for (let key in SEMI.SIDEBAR_MENUS) {
            const menu = SEMI.SIDEBAR_MENUS[key];
            SEMIUtils.getElement(`${menu.ID}-header`).append(eye(menu.ID));
        }

        $('#SEMI-heading').append(eye('main'));
        loadMenuState();
        showMenus();
    };

    const moreMenus = { other: true, socials: true, main: true };

    const idMap = {
        socials: 'socials-',
        other: 'other-',
    };

    const showMenu = (id) => {
        const state = moreMenus.main && moreMenus[id];

        const className = 'fa-eye' + (state ? '' : '-slash');
        const toRemove = 'fa-eye' + (!state ? '' : '-slash');
        const eye = SEMIUtils.getElement(`eye-${id}`);
        eye.removeClass(toRemove);
        eye.addClass(className);

        if (id == 'main') {
            const els = $(`.SEMI-header, .${SEMI.ROOT_ID}-btn`);
            if (state) {
                els.removeClass('fold-d-none');
            } else {
                els.addClass('fold-d-none');
            }
        } else {
            const els = SEMIUtils.getElements(idMap[id]);
            if (state) {
                els.removeClass('fold-d-none');
            } else {
                els.addClass('fold-d-none');
            }
        }
    };

    const showMenus = () => {
        showMenu('socials');
        showMenu('other');
        showMenu('main');

        for (let key in SEMI.SIDEBAR_MENUS) {
            const menu = SEMI.SIDEBAR_MENUS[key];
            idMap[menu.ID] = `${menu.ID}-skill-`;

            if (!moreMenus.hasOwnProperty(menu.ID)) moreMenus[menu.ID] = true;

            showMenu(menu.ID);
        }

        SEMIUtils.getElements('eye-').removeClass('fold-d-none');
    };

    return injectEyes;
})();
