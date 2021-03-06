(() => {
    const pluginKind = 'bury';

    const id = `auto-${pluginKind}`;
    const title = 'AutoBury';
    const desc = 'AutoBury is a script for burying items you no longer want.';
    const imgSrc = 'assets/media/bank/bones.svg';

    let isItemEnabledToBury = {};

    const fadeAll = () => {
        for (let i = 0; i < itemStats.length; i++) {
            const x = $(`#${id}-img-${i}`);
            if (x.length === 0) {
                continue;
            }
            const shouldBeFaded = !isItemEnabledToBury[i];
            const currentState = typeof x.css('opacity') === 'undefined' ? '1' : x.css('opacity');
            const isFaded = currentState === '0.25';
            const isCorrect = isFaded === shouldBeFaded;
            const neededOpacity = shouldBeFaded ? 0.25 : 1;
            if (!isCorrect) {
                x.fadeTo(500, neededOpacity);
            }
        }
    };

    /** @param {number} i */
    const toggleAutoEnabled = (i) => {
        isItemEnabledToBury[i] = !isItemEnabledToBury[i];
        fadeAll();
    };

    const emptyObj = { media: 'assets/media/main/question.svg', name: '???' };
    const el = (i) => {
        const empty = itemStats[i].timesFound === 0;
        const { media, name } = empty ? emptyObj : items[i];
        const e = $(
            `<img id="${id}-img-${i}" class="skill-icon-md js-tooltip-enable" src="${media}" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="${name}">`
        );
        if (!empty) {
            e.on('click', () => toggleAutoEnabled(i));
        }
        return e;
    };

    const autoBury = () => {
        for (let i = bank.length - 1; i >= 0; i--) {
            const itemID = bank[i].id;
            if (isItemEnabledToBury[itemID]) {
                const qty = SEMIUtils.getBankQty(itemID);
                SEMIUtils.buryItemWithoutConfirmation(itemID, qty);
                SEMIUtils.customNotify(
                    items[itemID].media,
                    `Burying ${numberWithCommas(qty)} ${items[itemID].name} for ${numberWithCommas(
                        items[itemID].prayerPoints * qty
                    )} Prayer Points`,
                    { lowPriority: true }
                );
            }
        }
    };

    const setupContainer = () => {
        $(`#${id}-container`).html('');
        for (let i = 0; i < itemStats.length; i++) {
            if (!('prayerPoints' in items[i])) {
                continue;
            }
            $(`#${id}-container`).append(el(i));
        }

        const loadedAutoEnabled = SEMI.getItem(`${id}-config`);
        if (loadedAutoEnabled !== null) {
            if (Array.isArray(loadedAutoEnabled)) {
                for (let i = 0; i < loadedAutoEnabled.length; i++) {
                    if (loadedAutoEnabled[i]) {
                        isItemEnabledToBury[i] = true;
                    }
                }
            } else {
                isItemEnabledToBury = loadedAutoEnabled;
            }
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

    const autoShow = () => {
        $(`#modal-${id}`).modal('show');
    };

    const injectGUI = () => {
        const x = $('#modal-item-log').clone().first();
        x.attr('id', `modal-${id}`);
        $('#modal-item-log').parent().append(x);
        const y = $(`#modal-${id}`).children().children().children().children('.font-size-sm');
        y.children().children().attr('id', `${id}-container`);

        const enableAutoButton = $(
            `<button class="btn btn-md btn-danger SEMI-modal-btn" id="${id}-status">Disabled</button>`
        );
        enableAutoButton.on('click', () => SEMI.toggle(`${id}`));
        y.before(enableAutoButton);

        const refreshLogBtn = $(`<button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
            <i class="fas fa-redo text-muted" title="Refresh this log page to reflect your current bone log."></i>
            </button>`);
        refreshLogBtn.on('click', () => SEMI.refreshBoneLog());
        $(`#${id}-status`).parent().find('.fa.fa-fw.fa-times').parent().before(refreshLogBtn);

        $(`#modal-${id} .block-title`).text(`${title} Menu`);

        $(`#modal-${id}`).on('hidden.bs.modal', () => {
            SEMI.setItem(`${id}-config`, isItemEnabledToBury);
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

    const refreshBoneLog = () => {
        $('.modal.show').find('.fa.fa-fw.fa-times').click();
        $(`#modal-${id}`).remove();
        injectGUI();
        $(`#modal-${id}`).modal('show');
        if (SEMI.isEnabled(id)) {
            $(`#${id}-status`).addClass('btn-success');
            $(`#${id}-status`).removeClass('btn-danger');
            $(`#${id}-status`).text('Enabled');
        }
    };

    SEMI.add(id, { onLoop: autoBury, onEnable, onDisable, title, desc });
    SEMI.add(id + '-menu', { title, desc, imgSrc, injectGUI });
    SEMIUtils.mergeOnto(SEMI, { refreshBoneLog });
})();
