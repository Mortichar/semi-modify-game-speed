var SEMIetcGUI = {
    thievingXP: true,
    destroyCrops: true,
    barf: true,
    xph: true
};

var {semiSetMenu} = (() => {
    const SEMI_VERSION = '0.3.14';
    const GAME_VERSION = 'Alpha v0.16.2.1';

    const header = $('#SEMI-heading');

    const injectX = () => {
        const skillTitle = 'One at a time, please! Mixing any two idle skill automations will cause problems as you can only idle one thing at once. Mixing these skill automations with combat is impossible, except for AutoReplant.';
        const skillMenuHeader = `<li class="nav-main-heading" id="${SEMI.ROOT_ID}-skills-header" title="${skillTitle}">Auto Skills</li>`;
        const skillMenuSection = `<div id="${SEMI.ROOT_ID}-skills-section-unsorted"></div>`;
        const autoCombatheader = `<li class="nav-main-heading" id="${SEMI.ROOT_ID}-combat-header">Auto Combat</li>`;
        const autoCombatSection = `<div id="${SEMI.ROOT_ID}-combat-section-unsorted"></div>`;
        header.after(skillMenuHeader, skillMenuSection, autoCombatheader, autoCombatSection);

        const semiNavImg = `<img class="nav-img" src="${SEMI.iconSrc}">`;
        const semiNavInner = `<a class="nav-main-link nav-compact" id="${SEMI.ROOT_ID}-info-button">${semiNavImg}<span class="nav-main-link-name">SEMI Menu</span></a>`;
        const semiNavEl = $(`<li class="nav-main-item" id="${SEMI.ROOT_ID}-info-header">${semiNavInner}</li>`);
        $('#sidebar').find('.nav-main').append(semiNavEl);
        $(`#${SEMI.ROOT_ID}-info-button`).on('click', () => semiInfo());
    };

    const otherScriptsText = `
    <ul>
    <li><a href="https://greasyfork.org/en/scripts/394855-melvor-auto-replant" target="_blank">Melvor Auto Replant by Arcanus</a></li>
    <li><a href="https://discordapp.com/channels/625838709203271680/664637399028072470/669475769671483392" target="_blank">AutoBonfire by Dream</a></li>
    <li>Auto Mine & Auto Sell Gems from <a href="https://greasyfork.org/en/scripts/395834-melvor-super-control-panel/code" target="_blank">Melvor Super Control Panel by Strutty & others?</a></li>
    <li><a href="https://greasyfork.org/en/scripts/396400-melvor-auto-slayer" target="_blank">Melvor AutoSlayer by Bubbalova</a></li>
    <li><a href="https://pastebin.com/wq641Nhx" target="_blank">XPH by Breakit</a></li>
    <li>Thieving Calculator from <a href="https://github.com/RedSparr0w/Melvor-Idle-Helper" target="_blank">Melvor Idle Helper by RedSparr0w</a></li>
    <li><a href="https://discordapp.com/channels/625838709203271680/664637399028072470/681397160465661992" target="_blank">AutoCook by Unicue</a></li>
    <li><a href="https://github.com/Katorone/AutoMelvorIdle/blob/master/melvor.user.js" target="_blank" title="">Katorone's automation script</a></li>
    </ul>`;

    const injectSEMIInfoPopup = () => {
        const semiInfoPopup = $(`
        <div class="modal" id="${SEMI.ROOT_ID}-semi-modal" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content"><div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <img class="nav-img" src="${SEMI.iconSrc}">
                        <h3 class="block-title">Scripting Engine for Melvor Idle Menu</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="block-content font-size-sm">
                        <div style="font-size: 14pt;">Toggle SEMI features that aren't in the sidebar:</div>
                        <div class="custom-control custom-switch mb-1" title="Tooltip!">
                            <input type="checkbox" class="custom-control-input" id="SEMI-thieving-xp-enabled" name="SEMI-thieving-xp-enabled" onchange="SEMIetcGUI.thievingXP = this.checked" ${SEMIetcGUI.thievingXP ? 'checked' : ''}>
                            <label class="custom-control-label" for="SEMI-thieving-xp-enabled">Thieving XP calculators and loot popups in the Thieving page</label>
                        </div>
                        <div class="custom-control custom-switch mb-1" title="Tooltip!">
                            <input type="checkbox" class="custom-control-input" id="SEMI-destroy-crops-enabled" name="SEMI-destroy-crops-enabled" onchange="SEMIetcGUI.destroyCrops = this.checked" ${SEMIetcGUI.destroyCrops ? 'checked' : ''}>
                            <label class="custom-control-label" for="SEMI-destroy-crops-enabled">Destroy All Crops button in the Farming page</label>
                        </div>
                        <div class="custom-control custom-switch mb-1" title="Tooltip!">
                            <input type="checkbox" class="custom-control-input" id="SEMI-barf-enabled" name="SEMI-barf-enabled" onchange="SEMIetcGUI.barf = this.checked" ${SEMIetcGUI.barf ? 'checked' : ''}>
                            <label class="custom-control-label" for="SEMI-barf-enabled">Barf My Potion button in the Potion selection menu</label>
                        </div>
                        <div class="custom-control custom-switch mb-1" title="Tooltip!">
                            <input type="checkbox" class="custom-control-input" id="SEMI-xph-button-enabled" name="SEMI-xph-button-enabled" onchange="SEMIetcGUI.xph = this.checked" ${SEMIetcGUI.xph ? 'checked' : ''}>
                            <label class="custom-control-label" for="SEMI-xph-button-enabled">XPH button: XP per hour calculations done through a button next to the Potion selection button</label>
                        </div>
                        <div class="block-content block-content-full text-right">
                            <button type="button" id="${SEMI.ROOT_ID}-etc-toggles-apply-save" class="btn btn-sm btn-primary">
                                <i class="fa fa-check mr-1"></i>Save Toggles
                            </button>
                        </div>
                        <br>
                        You can now save and export your SEMI configuration settings like your AutoSell choices and other saved settings.
                        <div class="block-content">
                            <textarea class="form-control SEMI-static-text-box" id="exportSEMISettings" name="exportSEMISettings" rows="1" placeholder="Exported SEMI config will be here."></textarea>
                            <button type="button" id="${SEMI.ROOT_ID}-semi-modal-export-button" class="btn btn-sm btn-primary" onclick="SEMI.backupSEMI()">
                                Export
                            </button>
                        </div>
                        <br>
                        <div class="block-content">
                            <textarea class="form-control SEMI-static-text-box" id="importSEMISettings" name="importSEMISettings" rows="1" placeholder="Paste SEMI config here."></textarea>
                            <button type="button" id="${SEMI.ROOT_ID}-semi-modal-import-button" class="btn btn-sm btn-primary" onclick="SEMI.restoreSEMI()">
                                Import
                            </button>
                        </div>
                        <br>
                        <br>
                        <button id="hide-SEMI-info-button" class="btn btn-outline-primary" type="button">Show SEMI Info</button>
                        <button id="SEMI-RESET-button" class="btn btn-danger" style="margin-left: 20px;" type="button">
                            <i class="fa fa-fw fa-times mr-1"></i>
                            Reset SEMI
                        </button>
                        <div id="SEMI-menu-info-box" class="d-none SEMI-fixed-textbox">
                            <h3 style="color: white;">SEMI v${SEMI_VERSION} by Aldous Watts & DanielRX</h3>
                            Hover over sidebar buttons or some other SEMI elements to see tooltips that describe the scripts/options and give hints.
                            <br>
                            If you unlock the sidebar sections, you can drag and rearrange the items in the section. Dragging an item below the SEMI icon only visible when unlocked will hide the item when the section is locked.
                            <br>
                            <br>
                            Many functions of SEMI are based on these scripts by others:
                            ${otherScriptsText}
                            Source code for SEMI, along with issues page for suggestions/bugs, can be found at the GitLab repository <a href="https://gitlab.com/aldousWatts/SEMI" target="_blank">here.</a>
                        </div>
                        <br>
                        <br>
                    </div>
                </div>
            </div>
        </div>`);
        $('#modal-account-change').before(semiInfoPopup);
        $(`#hide-SEMI-info-button`).on('click', () => toggleSEMIMenuInfo());
        $(`#SEMI-RESET-button`).on('click', () => resetSEMIPrompt());
        $(`#SEMI-menu-etc-toggles-apply-save`).on('click', () => saveEtcToggles());
    };

    if (SEMI.getItem('etc-GUI-toggles') !== null) {
        SEMIetcGUI = SEMI.getItem('etc-GUI-toggles');
    };

    //SEMI menu setup function
    const setupSEMI = () => {
        if ($('#auto-replant-button').length) return;
        injectX();
        SEMI.getElement('info-header').before($('<br>'));
        SEMI.setItem('etc-GUI-toggles', SEMIetcGUI); //to prevent errors first-run with thieving-calc
        SEMI.pluginNames.forEach((name) => SEMI.injectGUI(name));

        if (SEMIetcGUI.destroyCrops) injectDestroyCropsGUI();
        if (SEMIetcGUI.barf) injectBarfGUI();
        if (SEMIetcGUI.xph) injectXPHGUI();
        //Modal for SEMI info popup
        injectSEMIInfoPopup();

        injectEyes();
        injectDragMenus();



        //if all goes well, yay, it's loaded
        SEMI.customNotify('assets/media/monsters/dragon_black.svg','Scripting Engine for Melvor Idle is now loaded and running! Check the bottom of the sidebar.',10000);
    };

    //show SEMI katorone automation settings modal called by nav button
    const semiSetMenu = () => { SEMI.getElement('kat-modal').modal(open); };

    //show SEMI info modal function called by nav button
    const semiInfo = () => { SEMI.getElement('semi-modal').modal(open); };

    const toggleSEMIMenuInfo = () => {
        $("#SEMI-menu-info-box").toggleClass("d-none");
        if ($("#hide-SEMI-info-button").text() == "Show SEMI Info") $("#hide-SEMI-info-button").text("Hide SEMI Info");
        else $("#hide-SEMI-info-button").text("Show SEMI Info");
    };

    const resetSEMIPrompt = () => {
        const resetResponse = prompt(`Wait. This will erase EVERY SINGLE SEMI CONFIGURATION SETTING. This includes every script option, every dragged menu position, every item selection on your AutoSell and such, all AutoMine preferences, EVERYTHING. This is best used for when something has gone very wrong and you'd like to reset SEMI to a fresh start. If you are sure you want to do this, please type 'semi' into the prompt.`, 'This Resets SEMI!');
        if (resetResponse !== "semi") return;
        SEMI.resetSEMI();
    };

    const saveEtcToggles = () => {
        SEMI.setItem('etc-GUI-toggles', SEMIetcGUI);
        SEMI.customNotify('assets/media/main/settings_header.svg','Miscellaneous SEMI GUI settings saved! Please refresh to enable changes.',10000);
    };

    const hideSemi = (reason) => {
        console.warn(`SEMI was not correctly loaded due to ${reason}`);
        SEMI.getElements().toggleClass('d-none');
    };

    const loadSemi = () => {
        if(!isLoaded || typeof SEMI === 'undefined' || !SEMI.utilsReady) {return;}
        clearInterval(semiLoader);
        let tryLoad = true;
        const wrongVersion = gameVersion != GAME_VERSION;
        if (wrongVersion) {
            const msg = `SEMI\nThis version of SEMI was made for Melvor Idle ${GAME_VERSION}. Loading the extension may cause unexpected behavior or result in errors.\n Try loading it anyways?`;
            tryLoad = window.confirm(msg);
        }
        if(!tryLoad) { return hideSemi('game version incompatability.'); }
        try {
            setupSEMI();
            const msg = `SEMI v${SEMI_VERSION} Loaded`;
            const suffix = wrongVersion ? ', but may experience errors.' : '!';
            console.log(msg + suffix);
        } catch (error) {
            hideSemi('the following error:');
            console.error(error);
        }
    };

    const semiLoader = setInterval(loadSemi, 200);

    return {semiSetMenu};
})();
