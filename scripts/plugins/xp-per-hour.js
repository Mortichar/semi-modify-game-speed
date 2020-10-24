/** @typedef {'xphf' | 'xphc' | 'xph'} XPHKey */
var injectXPHGUI = (() => {
    //::from Breakit on pastebin, modified for Melvor v0.12: https://pastebin.com/wq641Nhx
    const skills = {
        'xphc-0': 'Attack',
        'xphc-1': 'Strength',
        'xphc-2': 'Defence',
        'xphc-3': 'Hitpoints',
        'xphc-4': 'Ranged',
        'xphc-5': 'Magic',
        'xphc-6': 'Prayer',
        'xphc-7': 'Slayer',
        xphf: 'Farming',
        xph: '',
        xphc: '',
    };

    const el = { xph: '#xph-dialog', xphf: '#xphf-dialog', xphc: '.xphc' };

    /**
     * @type {{[key: string]: any}}
     */
    const data = {};

    Object.keys(skills).forEach((skill) => {
        data[skill] = {
            skill: skills[skill],
            el: el[skill],
            children: 0,
        };
    });

    data.xphc.children = 8;

    /** @param {string} key */
    const resetXPHEl = (key) => {
        if (data[key].children !== 0) {
            for (let i = 0; i < data[key].children; i++) {
                resetXPHEl(`${key}-${i}`);
            }
        }
        $(`#${key}-rate`).text('...');
        $(`#${key}-lvl`).text('... hrs');
        $(`#${key}-lvl-in`).val(SEMI.currentLevel(data[key].skill) + 1);
        $(`#${key}-time`).text('0');
    };

    const setupData = (key) => {
        const value = data[key];
        if (value.children !== 0) {
            for (let i = 0; i < value.children; i++) {
                setupData(`${key}-${i}`);
            }
        }
        value.time = Date.now();
        value.running = true;
        value.exp = SEMI.currentXP(value.skill);
    };

    /** @param {string} key */
    const updateXPHEl = (key) => {
        const { skill, xpPerHour, time, children } = data[key];
        if (children !== 0) {
            for (let i = 0; i < children; i++) {
                updateXPHEl(`${key}-${i}`);
            }
        }
        let hoursToLvl = 0;
        const lvlIn = Number($(`#${key}-lvl-in`).val()); // Math.min(99, lvlIn) to cap to 99
        const rate = Number(xpPerHour.split(',').join(''));
        if (lvlIn > SEMI.currentLevel(skill) && rate > 0) {
            hoursToLvl = (exp.level_to_xp(lvlIn) - SEMI.currentXP(skill)) / rate;
        }
        $(`#${key}-rate`).text(xpPerHour);
        $(`#${key}-lvl`).text(SEMI.formatTimeFromMinutes(hoursToLvl * 60));
        $(`#${key}-time`).text(((Date.now() - time) / 1000).toFixed(0));
    };

    /** @param {string} key */
    const updateRate = (key) => {
        const { skill, exp, time, children } = data[key];
        if (children !== 0) {
            for (let i = 0; i < children; i++) {
                updateRate(`${key}-${i}`);
            }
        }
        const oldXP = exp || 0;
        const oldTime = time || Date.now();
        const timeSince = (Date.now() - oldTime) / 1000;
        const xpLeft = SEMI.currentXP(skill) - oldXP;
        let xpPerHour = Math.floor((xpLeft / timeSince) * 3600).toString();
        const pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(xpPerHour)) {
            xpPerHour = xpPerHour.replace(pattern, '$1,$2');
        }
        data[key].xpPerHour = xpPerHour;
    };

    const stats = [
        'Woodcutting',
        'Fishing',
        'Firemaking',
        'Cooking',
        'Mining',
        'Smithing',
        'Attack',
        'Strength',
        'Defence',
        'Hitpoints',
        'Thieving',
        'Farming',
        'Ranged',
        'Fletching',
        'Crafting',
        'Runecrafting',
        'Magic',
        'Prayer',
        'Slayer',
        'Herblore',
    ];

    /**
     * @param {XPHKey} key
     * @param {boolean} running
     */
    const runXPH = (key, running) => {
        if (data[key].running) {
            updateRate(key);
            if (!running) {
                console.log('Stopping');
                data[key].running = false;
            } else {
                updateXPHEl(key);
            }
        } else {
            console.log('Starting');
            setupData(key);
            resetXPHEl(key);
        }
    };

    /** @param {XPHKey} key */
    const stopRunning = (key) => {
        $(data[key].el).addClass('d-none');
        runXPH(key, false);
        clearInterval(data[key].loop);
    };

    /** @param {XPHKey} key */
    const startRunning = (key) => {
        _startRunning[key]();
        runXPH(key, true);
        $(data[key].el).removeClass('d-none');
        const updater = () => {
            runXPH(key, true);
        };
        data[key].loop = setInterval(updater, 1000);
    };

    /** @param {XPHKey} key */
    const toggleRunning = (key) => {
        if (data[key].running) {
            return stopRunning(key);
        }
        return startRunning(key);
    };

    // ! -----------------

    let XPHtoggledOff = false;

    const startXPH = () => {
        const n = SEMI.currentSkillId();
        if (n === -1) {
            return;
        }
        const key = 'xph';
        // ! ----
        let skill = typeof n === 'string' ? n : stats[n];
        if (skill == data[key].skill && !XPHtoggledOff) {
            XPHtoggledOff = true;
            return;
        }
        XPHtoggledOff = false;
        data[key].skill = skill;
        $('#xph-skill').text(data[key].skill);
    };

    const startXPHC = () => {
        if (!SEMI.isCurrentSkill('Hitpoints')) {
            return;
        } // Not in combat
        SEMI.customNotify(
            'assets/media/main/statistics_header.svg',
            'Check Combat Page Skill Progress table for XPH Combat Display!',
            10000
        );
        if ($('#combat-skill-progress-menu').attr('class').split(' ').includes('d-none')) {
            toggleCombatSkillMenu();
        }
        if (SEMI.currentPageName() !== 'Combat') {
            SEMI.changePage('Combat');
        }
    };

    const _startRunning = { xph: startXPH, xphc: startXPHC, xphf: () => {} };

    /**
     * @title XPH GUI function
     * @description One function for two buttons, one button uses n=11 for farming specific script
     * @param {number} n
     */
    const xphDisplay = (n) => {
        if (n == 11) {
            return toggleRunning('xphf');
        }
        const currentSkill = SEMI.currentSkillName();
        if (currentSkill !== '' && currentSkill !== 'Hitpoints') {
            return toggleRunning('xph');
        }
        toggleRunning('xphc');
    };

    const COMBAT_LEVELS = 8;

    const injectXPHCGUI = () => {
        $('#combat-skill-progress-menu tr:first').append(
            $(
                '<th id="xphc-th" class="xphc d-none" style="width: 125px;">xp/h (<span id="xphc-time">0</span> s)</th>'
            )
        );
        $('#combat-skill-progress-menu tr:not(:first)').append(
            $('<td class="font-w600 xphc d-none"><small>...</small></td>')
        );
        for (let i = 0; i < COMBAT_LEVELS; i++) {
            $('.xphc:not(:first)')[i].id = 'xphc-' + i + '-rate';
        }
        $('#combat-skill-progress-menu tr:first').append(
            $('<th id="xphc-th2" class="xphc xphcl d-none" style="width: 175px;">Time to Level</th>')
        );
        $('#combat-skill-progress-menu tr:not(:first)').append(
            $(
                `<td class="font-w600 xphc xphcl d-none"><span>... hrs</span> to L<input type="number" id="xphc-lvl-in" name="xphc-lvl" min="2" style="width: 50px; float: right;"></td>`
            )
        ); //add level selector
        for (let i = 0; i < COMBAT_LEVELS; i++) {
            $('.xphcl:not(:first) span')[i].id = `xphc-${i}-lvl`;
            $('.xphcl:not(:first) input')[i].id = `xphc-${i}-lvl-in`;
        }
    };

    const XPHDialogText = `
    <div id="xph-dialog" class="block-content block-content-full text-center d-none">
        <h3 class="text-muted m-1"><span class="p-1 bg-info rounded" id="xph-rate">...</span> <span id="xph-skill"></span> XP per hour.</h3>
        <br>
        <h3 class="text-muted m-1"><span class="p-1 bg-info rounded" id="xph-time">0</span> seconds spent running XPH.</h3>
        <h4 class="text-muted m-1"><span id="xph-lvl">... hrs</span> to L<input type="number" id="xph-lvl-in" name="xph-lvl-in" min="2" style="width: 60px;">
        <br>
    </div>`;

    const XPHFDialogText = `
    <div id="xphf-dialog" class="block-content block-content-full text-center d-none">
        <h3 class="text-muted m-1"><span class="p-1 bg-info rounded" id="xphf-rate">...</span> Farming XP per hour.</h3>
        <br>
        <h3 class="text-muted m-1"><span class="p-1 bg-info rounded" id="xphf-time">0</span> seconds spent running XPHf.</h3>
        <h4 class="text-muted m-1"><span id="xphf-lvl">... hrs</span> to L<input type="number" id="xphf-lvl-in" name="xph-lvl-in" min="2" style="width: 60px;">
        <br>
    </div>`;

    const y = `
    <div class="block-content block-content-full text-center">
        <span class="text-muted m-1">
        The button below starts the XPH script for the skill you are currently idling. If you click it while it's running for the skill you're currently idling, it will toggle off.<br>
        SEMI will display your XP per hour in a dialog below the button.<br>
        If you're in combat, a custom XPH script will run for all combat skills simultaneously and display in the Combat Page's Skill Progress table.<br><br>
        </span>
        <button id="xphBtn" class="btn btn-sm btn-dual">Toggle XPH Display</button>
        <br><br>
        <div class="text-muted m-1">
            SEMI has a specific button and separate script for Farming XPH. [NOTE: Only even remotely accurate after calculating for a few hours. Pairs well with AutoReplant.]
        </div>
        <button id="xphBtnF" class="btn btn-sm btn-dual">Toggle XPH for Farming</button>
    </div>`;

    //XPH GUI
    const injectXPHGUI = () => {
        const XPHGUI = `
            <div class="dropdown d-inline-block ml-2">
                <button type="button" class="btn btn-sm bg-info SEMI-gold" id="page-header-xph-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><small>XP/h</small></button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 border-0 font-size-sm" id="header-equipment-dropdown" aria-labelledby="page-header-xph-dropdown" x-placement="bottom-end" style="max-width: 90vw; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-262px, 33px, 0px);">
                    <div class="p-2 bg-primary text-center"><h5 class="dropdown-header"><a class="text-white">Calculate XP Per Hour</a></h5></div>
                    ${y}
                    ${XPHDialogText}
                    ${XPHFDialogText}
                </div>
            </div>`;

        $('#page-header-potions-dropdown').parent().before($(XPHGUI));
        $('#xphBtn').on('click', () => xphDisplay(0));
        $('#xphBtnF').on('click', () => xphDisplay(11));
        injectXPHCGUI();
        //XPHcombat GUIxphDisplay

        //android game header space problem fix; reduces margins of header dropdown buttons to squeeze XPH in there.
        const is_android = navigator.userAgent.indexOf('Android') > -1;
        if (!is_android) {
            return;
        }
        $('#header-theme').children().eq(1).children().removeClass('ml-2');
        $("[id^='page-header-']" + 'button').addClass('SEMI-android-narrow-btn');
    };
    return injectXPHGUI;
})();
