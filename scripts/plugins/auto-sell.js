var autoSellShow = (() => {
    const pluginKind = 'sell';

    const id = `auto-${pluginKind}`;
    const title = 'AutoSell';
    const desc = 'AutoSell is a script for selling items you no longer want.';
    const imgSrc = 'assets/media/main/gp.svg';

    let autoEnabled = [];

    const fadeAll = () => {
        for (let i = 0; i < itemStats.length; i++) {
            const x = $(`#${id}-img-${i}`);
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
        const e = $(`<img id="${id}-img-${i}" class="skill-icon-sm js-tooltip-enable" src="${media}" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="${name}">`);
        if(!empty) { e.on('click', () => toggleAutoEnabled(i)); }
        return e;
    };

    const doOne = (i) => {
        const itemToTest = bank[i].id;
        const qty = SEMI.getBankQty(itemToTest);
        let allButOneEnabled = false;
        if (allButOne) {
            allButOne = false;
            allButOneEnabled = true;
        }
        sellItem(itemToTest, qty);
        if (allButOneEnabled) { allButOne = true; }
        SEMI.confirmAndCloseModal();
        SEMI.customNotify(items[itemToTest].media, `Selling ${qty} of '${items[itemToTest].name}'`);
        return true;
    }

    const doFirstFound = () => {
        for(let i = 0; i < bank.length; i++) {
            if(autoEnabled[bank[i].id]) {
                const found = doOne(i);
                if(found) { return true; }
            }
        }
        return false;
    };

    const doAll = () => {
        let found = doFirstFound();
        if(found) { setTimeout(doAll, 500); }
    };

    const setupContainer = () => {
        $(`#${id}-container`).html('');
        autoEnabled = Array(itemStats.length).fill(false);
        for (let i = 0; i < itemStats.length; i++) {
            $(`#${id}-container`).append(el(i));
        }

        const loadedAutoEnabled = SEMI.getItem(`${id}-config`);
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

    const autoShow = () => {  $(`#modal-${id}`).modal('show'); };

    const injectGUI = () => {
        const x = $('#modal-item-log').clone().first();
        // const guiCheckState = document.contains(document.getElementById(`modal-${id}`));
        // if (guiCheckState) { $(`#modal-${id}`).remove(); }
        x.attr('id', `modal-${id}`);
        $('#modal-item-log').parent().append(x);
        const y = $(`#modal-${id}`).children().children().children().children('.font-size-sm');
        y.children().children().attr('id', `${id}-container`);

        const enableAutoButton = $(`<button class="btn btn-md btn-danger SEMI-modal-btn" id="${id}-status">Disabled</button>`);
        enableAutoButton.on('click', () => SEMI.toggle(`${id}`));
        y.before(enableAutoButton);

        const refreshLogBtn = $(`<button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
            <i class="fas fa-undo-alt text-muted" title="Refresh this log page to reflect your current item log."></i>
            </button>`);
        refreshLogBtn.on('click', () => SEMI.refreshLog());
        $(`#${id}-status`).parent().find('.fa.fa-fw.fa-times').before(refreshLogBtn);

        $(`#modal-${id} .block-title`).text(`${title} Menu`);

        $(`#modal-${id}`).on('hidden.bs.modal', () => {
            SEMI.setItem(`${id}-config`, autoEnabled);
        });
        setupContainer();
        setTimeout(() => {
            $(`#${id}-menu-status`)[0].innerHTML = '';
            $(`#${id}-menu-button`).on('click', autoShow);
            $(`#${id}-menu-button`).attr('href', null);
        }, 1000);
    };

    const refreshLog = () => {
        $(".modal.show").find(".fa.fa-fw.fa-times").click();
        $(`#modal-${id}`).remove();
        injectGUI();
        $(`#modal-${id}`).modal('show');
        if (SEMI.isEnabled(id)) {
            $(`#${id}-status`).addClass('btn-success');
            $(`#${id}-status`).removeClass('btn-danger');
            $(`#${id}-status`).text('Enabled');
        }
    };

    SEMI.add(id, {onLoop: doAll, onEnable, onDisable, title, desc});
    SEMI.add(id + '-menu', {title, desc, imgSrc, injectGUI});
    SEMI.mergeOnto(SEMI,{refreshLog});
})();