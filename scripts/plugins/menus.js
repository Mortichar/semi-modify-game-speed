var {semiSetMenu} = (() => {
    const SEMI_VERSION = '0.3.8-3';
    const GAME_VERSION = 'Alpha v0.15.2.1';

    const header = $('#SEMI-heading');

    const injectX = () => {
        const skillTitle = 'One at a time, please! Mixing any two idle skill automations will cause problems as you can only idle one thing at once. Mixing these skill automations with combat is impossible, except for AutoReplant.';
        const skillMenuHeader = `<li class="nav-main-heading" id="${SEMI.ROOT_ID}-skills-header" title="${skillTitle}">Auto Skills</li>`;
        const skillMenuSection = `<div id="${SEMI.ROOT_ID}-skills-section-unsorted"></div>`;
        const autoCombatheader = `<li class="nav-main-heading" id="${SEMI.ROOT_ID}-combat-header">Auto Combat</li>`;
        const autoCombatSection = `<div id="${SEMI.ROOT_ID}-combat-section-unsorted"></div>`;
        header.after(skillMenuHeader, skillMenuSection, autoCombatheader, autoCombatSection);

        const semiNavImg = `<img class="nav-img" src="${SEMI.iconSrc}">`;
        const semiNavInner = `<a class="nav-main-link nav-compact" id="${SEMI.ROOT_ID}-info-button">${semiNavImg}<span class="nav-main-link-name">Show SEMI Info</span></a>`;
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
                        <h3 class="block-title">Scripting Engine for Melvor Idle v${SEMI_VERSION}</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="block-content font-size-sm">
                        <h3 style="color: white;">SEMI v${SEMI_VERSION} by Aldous Watts & DanielRX</h2>
                        Various Quality of Life improvements, scripts for automation, and UI tweaks for Melvor.
                        <br>
                        Hover over sidebar buttons or Katorone settings menu items to see tooltips that describe the scripts/options and give hints.
                        <br>
                        Don't forget these features of SEMI that aren't in the sidebar:
                        <ul>
                            <li>Thieving XP calculators and loot popups in the Thieving page</li>
                            <li>Destroy All Crops button in the Farming page</li>
                            <li>Barf My Potion button in the Potion selection menu</li>
                            <li>XPH GUI: XP per hour calculations done through a button next to the Potion selection button</li>
                        </ul>
                        Scripting with Melvor can be done through injected user scripts, either through a browser add-on like this,
                        or another more general-purpose add-on like Tampermonkey to run userscripts.
                        Either way, the end result is extra functionality, like automating a task or adding calculated info to the page.
                        <br><br>
                        Many functions of SEMI are based on these scripts by others:
                        ${otherScriptsText}
                        Source code for SEMI can be found <a href="https://gitlab.com/aldousWatts/SEMI" target="_blank">here.</a>
                        <br>
                        DanielRX's SEMI fork can be found <a href="https://gitlab.com/DanielRX/SEMI/" target="_blank">here.</a>
                        <br>
                    </div>
                    <div class="block-content block-content-full text-right">
                        <button type="button" id="${SEMI.ROOT_ID}-semi-modal-button" class="btn btn-sm btn-primary" data-dismiss="modal" onclick="">
                            <i class="fa fa-check mr-1"></i>Cool!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
        $('#modal-account-change').before(semiInfoPopup);
    };


    //SEMI menu setup function -- big fat template literal append(s)
    const setupSEMI = () => { // streamlining/simplicity
        if ($('#auto-replant-button').length) return; //probably smarter than the way i inject a lot of elements
        injectX();
        SEMI.getElement('info-header').before($('<br>'));
        SEMI.pluginNames.forEach((name) => SEMI.injectGUI(name));
        injectXPHGUI();
        injectBarfGUI();
        //Modal for SEMI info popup
        injectSEMIInfoPopup();
        injectEyes();
        injectDragMenus();

        //adding button to the farming page to destroy crops
        injectDestroyCropsGUI();

        //if all goes well, yay, it's loaded
        SEMI.customNotify('assets/media/monsters/dragon_black.svg','Scripting Engine for Melvor Idle is now loaded and running! Check the bottom of the sidebar.',10000);
    }; //End of SEMI menu injection

    //show SEMI katorone automation settings modal called by nav button
    const semiSetMenu = () => { SEMI.getElement('kat-modal').modal(open); };

    //show SEMI info modal function called by nav button
    const semiInfo = () => { SEMI.getElement('semi-modal').modal(open); };

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
