(() => {
    const pluginKind = 'open';

    const id = `auto-${pluginKind}`;
    const title = 'AutoOpen';
    const desc = 'AutoOpen is a script for opening containers like chests.';
    const imgSrc = 'assets/media/main/bank_header.svg';

    let autoEnabled = [];

    const fadeAll = () => {
        for (let i = 0; i < itemStats.length; i++) {
            const x = $(`#auto-${pluginKind}-img-${i}`);
            if(x.length === 0) { continue; }
            const shouldBeFaded = !autoEnabled[i];
            const currentState = typeof x.css('opacity') === 'undefined' ? '1' : x.css('opacity');
            const isFaded = currentState === '0.25';
            const isCorrect = isFaded === shouldBeFaded;
            const neededOpacity = shouldBeFaded ? 0.25 : 1;
            if(!isCorrect) { x.fadeTo(500, neededOpacity); }
        }
    };

    /** @param {number} i */
    const toggleAutoEnabled = (i) => {
        autoEnabled[i] = !autoEnabled[i];
        fadeAll();
    };

    const emptyObj = {media: 'assets/media/main/question.svg', name: '???'};
    const el = (i) => {
        const empty = itemStats[i].timesFound === 0;
        const {media, name} = empty ? emptyObj : items[i];
        const e = $(`<img id="auto-${pluginKind}-img-${i}" class="skill-icon-md js-tooltip-enable" src="${media}" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="${name}">`);
        if(!empty) { e.on('click', () => toggleAutoEnabled(i)); }
        return e;
    };

    const doOne = (i) => {
        const bankFull = SEMI.isBankFull();
        if (bankFull) {return;}
        const itemToTest = bank[i].id;
        const qty = SEMI.getBankQty(itemToTest);
        openBankItem(i, itemToTest, true);
        SEMI.confirmAndCloseModal(1500);
        SEMI.customNotify(items[itemToTest].media, `Opening ${qty} of ${items[itemToTest].name}`);
        return true;
    };

    const doFirstFound = () => {
        for(let i = 0; i < bank.length; i++) {
            const itemToTest = bank[i].id;
            if(autoEnabled[itemToTest]) {
                const found = doOne(i);
                if(found) { return true; }
            }
        }
        return false;
    };

    const doAll = () => {
        let found = doFirstFound();
        let bankFull = SEMI.isBankFull();
        if(found && !bankFull) { setTimeout(doAll, 2000); }
    };

    const setupContainer = () => {
        $(`#auto-${pluginKind}-container`).html('');
        autoEnabled = Array(itemStats.length).fill(false);
        for (let i = 0; i < itemStats.length; i++) {
            if(!('dropQty' in items[i])) { continue; }
            $(`#auto-${pluginKind}-container`).append(el(i));
        }

        const loadedAutoEnabled = SEMI.getItem(`auto-${pluginKind}-config`);
        if(loadedAutoEnabled !== null) {
            autoEnabled = [...loadedAutoEnabled];
        }

        fadeAll();
    };

    const onDisable = () => {
        $(`#${id}-status`).addClass('btn-danger');
        $(`#${id}-status`).removeClass('btn-success');
    };

    const onEnable = () => {
        $(`#${id}-status`).addClass('btn-success');
        $(`#${id}-status`).removeClass('btn-danger');
    };

    const autoShow = () => {  $(`#modal-auto-${pluginKind}`).modal('show'); };

    const injectGUI = () => {
        const x = $('#modal-item-log').clone().first();
        x.attr('id', `modal-auto-${pluginKind}`);
        $('#modal-item-log').parent().append(x);
        const y = $(`#modal-auto-${pluginKind}`).children().children().children().children('.font-size-sm');
        y.children().children().attr('id', `auto-${pluginKind}-container`);

        const enableAutoButton = $(`<button class="btn btn-md btn-danger m-1 SEMI-modal-btn" id="${id}-status">Disabled</button>`);
        enableAutoButton.on('click', () => SEMI.toggle(`auto-${pluginKind}`));
        y.before(enableAutoButton);
        $(`#modal-auto-${pluginKind}`).on('hidden.bs.modal', () => {
            SEMI.setItem(`auto-${pluginKind}-config`, autoEnabled);
        });
        setupContainer();
        setTimeout(() => {
            $(`#${id}-menu-status`)[0].innerHTML = '';
            $(`#${id}-menu-button`).on('click', autoShow);
            $(`#${id}-menu-button`).attr('href', null);
        }, 1000);
    };


    SEMI.add(id, {ms: 2000, onLoop: doFirstFound, onEnable, onDisable, title, desc});
    SEMI.add(id + '-menu', {title, desc, imgSrc, injectGUI});
})();