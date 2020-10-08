var autoSellShow = (() => {
    const pluginKind = 'slayer-skip';

    const id = `auto-${pluginKind}`;
    const title = 'AS AutoSkip';
    const desc = 'This script option for AutoSlayer will skip all monsters selected in this menu.';
    const imgSrc = 'assets/media/monsters/m13.svg';

    let showHiddenMonsters = false;
    let autoEnabled = [];

    /** @param {number} monsterId */
    const getNeededOpacity = (monsterId) => {
        return autoEnabled[monsterId] ? 1 : 0.25;
    };

    /** @param {number} monsterId */
    const toggleAutoEnabled = (monsterId) => {
        autoEnabled[monsterId] = !autoEnabled[monsterId];
        $(`#${id}-img-${monsterId}`).fadeTo(500, getNeededOpacity(monsterId));
    };

    const emptyObj = {media: 'assets/media/main/question.svg', name: '???'};

    /** @param {number} monsterId */
    const createImg = (monsterId) => {
        const empty = monsterStats[monsterId].killedByPlayer === 0 && !showHiddenMonsters;
        const {media, name} = empty ? emptyObj : MONSTERS[monsterId];
        const e = $(`<img id="${id}-img-${monsterId}" class="skill-icon-md" src="${media}" data-tippy-content="${name}" data-tippy-placement="bottom" style="opacity: ${getNeededOpacity(monsterId)};">`);
        if(!empty) { e.on('click', () => toggleAutoEnabled(monsterId)); }
        return e;
    };

    const doAll = () => {
        monsterIDs = autoEnabled.flatMap((enabled, i) => enabled ? i : []);
    };

    const setupContainer = () => {
        $(`#${id}-container [data-tippy-content]`).each((_, e) => e._tippy.destroy());
        $(`#${id}-container`).html('');

        const slayerTasks = combatAreaDisplayOrder.flatMap(area => combatAreas[area].monsters).concat(slayerAreaDisplayOrder.flatMap(area => slayerAreas[area].monsters));
        for (let i = 0; i < slayerTasks.length; i++) {
            $(`#${id}-container`).append(createImg(slayerTasks[i]));
        }

        tippy(`#${id}-container [data-tippy-content]`, { animation: false });
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
        autoEnabled = Array(MONSTERS.length).fill(false);
        const loadedAutoEnabled = SEMI.getItem(`${id}-config`);
        if(loadedAutoEnabled !== null) {
            autoEnabled = [...loadedAutoEnabled];
        }

        const modal = $('#modal-monster-log').clone().first();
        modal.attr('id', `modal-${id}`);
        $('#modal-monster-log').parent().append(modal);
        const y = modal.children().children().children().children('.font-size-sm');
        y.children().children().attr('id', `${id}-container`);

        const enableAutoButton = $(`<button class="btn btn-md btn-danger SEMI-modal-btn" id="${id}-status">Disabled</button>`);
        enableAutoButton.on('click', () => SEMI.toggle(id));
        y.before(enableAutoButton);

        const toggleHiddenMonsters = $(`<button type="button" class="btn-block-option"><i class="far fa-eye" title="Show hidden monsters"></i></button>`).on('click', () => {
            showHiddenMonsters = !showHiddenMonsters;
            setupContainer();
        });
        const refreshLogBtn = $(`<button type="button" class="btn-block-option" aria-label="Refresh">
            <i class="fas fa-undo-alt text-muted" title="Refresh this log page to reflect your current monster log."></i>
            </button>`);
        refreshLogBtn.on('click', () => setupContainer());
        modal.find('.block-options').prepend(refreshLogBtn).prepend(toggleHiddenMonsters);

        modal.find('.block-title').text(`${title} Menu`);

        modal.find('#toggleMonsters').remove(); // Temporary fix for incompatibility with Completion Log Helper

        modal.on('hidden.bs.modal', () => {
            SEMI.setItem(`${id}-config`, autoEnabled);
        });
        setupContainer();

        setTimeout(() => {
            $(`#${id}-menu-status`)[0].innerHTML = '';
            $(`#${id}-menu-button`).on('click', autoShow);
            $(`#${id}-menu-button`).attr('href', null);
        }, 1000);
    };

    SEMI.add(id, {onLoop: doAll, onEnable, onDisable, title, desc, pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT});
    SEMI.add(id + '-menu', {title, desc, imgSrc, injectGUI, pluginType: SEMI.PLUGIN_TYPE.AUTO_COMBAT});
})();