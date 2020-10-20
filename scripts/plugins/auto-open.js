(() => {
    const pluginKind = 'open';

    const id = `auto-${pluginKind}`;
    const title = 'AutoOpen';
    const desc = 'AutoOpen is a script for opening containers like chests.';
    const imgSrc = 'assets/media/bank/elite_chest.svg';

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
        const e = $(`<img id="${id}-img-${i}" class="skill-icon-md js-tooltip-enable" src="${media}" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="${name}">`);
        if(!empty) { e.on('click', () => toggleAutoEnabled(i)); }
        return e;
    };

    const autoOpen = () => {
        if (SEMI.isBankFull()) {
            return;
        }
        for (let i = bank.length - 1; i >= 0; i--) {
            const itemID = bank[i].id;
            if (autoEnabled[itemID]) {
                const qty = SEMI.getBankQty(itemID);
                SEMI.openItemWithoutConfirmation(itemID, qty);
                SEMI.customNotify(items[itemID].media, `Opening ${numberWithCommas(qty)} of ${items[itemID].name}`);
            }
        }
    };

    const setupContainer = () => {
        $(`#${id}-container`).html('');
        autoEnabled = Array(itemStats.length).fill(false);
        for (let i = 0; i < itemStats.length; i++) {
            if(!('dropQty' in items[i])) { continue; }
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
        x.attr('id', `modal-${id}`);
        $('#modal-item-log').parent().append(x);
        const y = $(`#modal-${id}`).children().children().children().children('.font-size-sm');
        y.children().children().attr('id', `${id}-container`);

        const enableAutoButton = $(`<button class="btn btn-md btn-danger SEMI-modal-btn" id="${id}-status">Disabled</button>`);
        enableAutoButton.on('click', () => SEMI.toggle(`${id}`));
        y.before(enableAutoButton);

        const refreshLogBtn = $(`<button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
            <i class="fas fa-redo text-muted" title="Refresh this log page to reflect your current container log."></i>
            </button>`);
        refreshLogBtn.on('click', () => SEMI.refreshContainerLog());
        $(`#${id}-status`).parent().find('.fa.fa-fw.fa-times').parent().before(refreshLogBtn);

        $(`#modal-${id} .block-title`).text(`${title} Menu`);

        $(`#modal-${id}`).on('hidden.bs.modal', () => {
            SEMI.setItem(`${id}-config`, autoEnabled);
        });
        setupContainer();
        setTimeout(() => {
            // $(`#${id}-menu-status`)[0].innerHTML = '';
            // $(`#${id}-menu-status`).remove();
            // $(`#${id}-menu-button`).css('padding-left', '20px');
            $(`#${id}-menu-button`).on('click', autoShow);
            $(`#${id}-menu-button`).attr('href', null);
        }, 1000);
    };

    const refreshContainerLog = () => {
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

    SEMI.add(id, { ms: 2000, onLoop: autoOpen, onEnable, onDisable, title, desc });
    SEMI.add(id + '-menu', {title, desc, imgSrc, injectGUI});
    SEMI.mergeOnto(SEMI,{refreshContainerLog});
})();