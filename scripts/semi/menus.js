var SEMIetcGUI = {
  thievingXP: true,
  xph: true,
  timeRemaining: true,
  masteryEnhancements: true,
  lessNotifications: false,
  dropChances: true,
};

var { semiSetMenu } = (() => {
  const header = $('#SEMI-heading');

  const injectSidebarSections = () => {
    for (let key in SEMI.SIDEBAR_MENUS) {
      const menu = SEMI.SIDEBAR_MENUS[key];
      const menuHeader = `<li class="nav-main-heading SEMI-header" id="${SEMI.ROOT_ID}-${menu.ID}-header" ${
        menu.Title !== undefined ? `title="${menu.Title}"` : ''
      }>${menu.Header}</li>`;
      const menuSection = `<div id="${SEMI.ROOT_ID}-${menu.ID}-section-unsorted"></div>`;

      header.after(menuHeader, menuSection);
    }

    const semiNavImg = `<img class="nav-img" src="${SEMIUtils.iconSrc}">`;
    const semiNavInner = `<a class="nav-main-link nav-compact ${SEMI.ROOT_ID}-btn" id="${SEMI.ROOT_ID}-info-button">${semiNavImg}<span class="nav-main-link-name">SEMI Menu</span></a>`;
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
  </ul>`;
  const creditsText = `
  <ul>
  <li>Maintainer & owner: AldousWatts</li>
  <li>Contributor: DanielRX
    <ul>
    <li>Massive refactoring</li>
    <li>Dragable Menus</li>
    <li>Repository improvements</li>
    <li>Many other script cleanups and contributions</li>
    </ul>
  </li>
  <li>Contributor: Visua
    <ul>
    <li>AutoFarm</li>
    <li>Core fixes and upgrades</li>
    <li>0.17 update script repair</li>
    <li>Debugging, refactoring, and more</li>
    </ul>
  </li>
  <li>Contributor: Zeldo
    <ul>
    <li>Offline Timer script</li>
    <li>AutoEquip Best Item script (beta)</li>
    <li>Per-character config</li>
    <li>Core upgrades & additions</li>
    <li>Refactoring & development improvements</li>
    </ul>
  </li>
  <li>Contributor: AuroraKy
    <ul>
    <li>Object-Oriented Core Changes finally included</li>
    <li>Good ideas & discussions</li>
    <li>Contributions to other scripts that have made it into SEMI</li>
    </ul>
  </li>
  <li>Contributor: Parataku
    <ul>
    <li>Spearheaded Melvor v0.18 super-issue</li>
    <li>Got many scripts up to date with the changes</li>
    <li>Completely reworked AutoSlayer to be easier to maintain</li>
    </ul>
  </li>
  <li>Contributor: Shamus Taylor
    <ul>
    <li>AutoMastery & Updates</li>
    <li>Fixes & other contributions</li>
    </ul>
  </li>
  <li>Many other community coders and bug reporters and supportive helpful folks! <i class="fas fa-heart"></i></li>
  </ul>`;

  const injectSEMIInfoPopup = () => {
    const semiInfoPopup = $(`
    <div class="modal" id="${
      SEMI.ROOT_ID
    }-semi-modal" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content"><div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <img class="nav-img" src="${SEMIUtils.iconSrc}">
            <h3 class="block-title">Scripting Engine for Melvor Idle Menu</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content font-size-sm" style="padding-top: 0 !important;">
            <div style="font-size: 14pt;">Toggle SEMI features that aren't in the sidebar:</div>
            <div class="custom-control custom-switch mb-1">
              <input type="checkbox" class="custom-control-input" id="SEMI-auto-enable" name="SEMI-auto-enable" onchange="SEMI.setItem('remember-state', this.checked)" ${
                Boolean(SEMI.getItem('remember-state')) ? 'checked' : ''
              }>
              <label class="custom-control-label" for="SEMI-auto-enable">Automatically load previously enabled scripts</label>
            </div>
            <div class="custom-control custom-switch mb-1">
              <input type="checkbox" class="custom-control-input" id="SEMI-thieving-xp-enabled" name="SEMI-thieving-xp-enabled" onchange="SEMIetcGUI.thievingXP = this.checked" ${
                SEMIetcGUI.thievingXP ? 'checked' : ''
              }>
              <label class="custom-control-label" for="SEMI-thieving-xp-enabled">Thieving XP calculators and loot popups in the Thieving page</label>
            </div>
            <div class="custom-control custom-switch mb-1">
              <input type="checkbox" class="custom-control-input" id="SEMI-xph-button-enabled" name="SEMI-xph-button-enabled" onchange="SEMIetcGUI.xph = this.checked" ${
                SEMIetcGUI.xph ? 'checked' : ''
              }>
              <label class="custom-control-label" for="SEMI-xph-button-enabled">XPH button: XP per hour calculations done through a button next to the Potion selection button</label>
            </div>
            <div class="custom-control custom-switch mb-1">
              <input type="checkbox" class="custom-control-input" id="SEMI-time-remaining-button-enabled" name="SEMI-time-remaining-button-enabled" onchange="SEMIetcGUI.timeRemaining = this.checked" ${
                SEMIetcGUI.timeRemaining ? 'checked' : ''
              }>
              <label class="custom-control-label" for="SEMI-time-remaining-button-enabled">ETA by TinyCoyote: time estimates & details for production skills next to the item. Includes a ding noise when a task completes. <a href="https://greasyfork.org/en/scripts/415592-melvor-eta/code" target="_blank">More configurable than TimeRemaining.</a></label>
            </div>
            <div class="custom-control custom-switch mb-1">
              <input type="checkbox" class="custom-control-input" id="SEMI-mastery-enhancements-button-enabled" name="SEMI-mastery-enhancements-button-enabled" onchange="SEMIetcGUI.masteryEnhancements = this.checked" ${
                SEMIetcGUI.masteryEnhancements ? 'checked' : ''
              }>
              <label class="custom-control-label" for="SEMI-mastery-enhancements-button-enabled">Mastery Enhancement Script: Adds progress bars for pools to skills in the menu</label>
            </div>
            <div class="custom-control custom-switch mb-1">
              <input type="checkbox" class="custom-control-input" id="SEMI-less-notifications-enabled" name="SEMI-less-notifications-enabled" onchange="SEMIetcGUI.lessNotifications = this.checked" ${
                SEMIetcGUI.lessNotifications ? 'checked' : ''
              }>
              <label class="custom-control-label" for="SEMI-less-notifications-enabled">Less notifications: Disables notifications for repetetive actions like auto-sell and auto-bury. Important notifications will still be shown.</label>
            </div>
            <div class="custom-control custom-switch mb-1">
              <input type="checkbox" class="custom-control-input" id="SEMI-drop-chances-enabled" name="SEMI-drop-chances-enabled" onchange="SEMIetcGUI.dropChances = this.checked" ${
                SEMIetcGUI.dropChances ? 'checked' : ''
              }>
              <label class="custom-control-label" for="SEMI-drop-chances-enabled">Drop Chances: Displays drop chance percentages on the monster/chest drops modal down to three sig figs.</label>
            </div>
            <div class="block-content block-content-full text-right">
              <button type="button" id="${SEMI.ROOT_ID}-etc-toggles-apply-save" class="btn btn-sm btn-primary">
                <i class="fa fa-check mr-1"></i>Save Toggles
              </button>
            </div>
            <div style="font-size: 14pt;">
            SEMI Config Backup, Restore, and Reset:
            </div>
            <div class="block-content">
              <textarea class="form-control SEMI-static-textarea" id="exportSEMISettings" name="exportSEMISettings" rows="1" placeholder="Exported SEMI config will be here."></textarea>
              <button type="button" id="${
                SEMI.ROOT_ID
              }-semi-modal-export-button" class="btn btn-sm btn-primary" onclick="SEMI.backupSEMI()">
                Export
              </button>
            </div>
            <br>
            <div class="block-content">
              <textarea class="form-control SEMI-static-textarea" id="importSEMISettings" name="importSEMISettings" rows="1" placeholder="Paste SEMI config here."></textarea>
              <button type="button" id="${
                SEMI.ROOT_ID
              }-semi-modal-import-button" class="btn btn-sm btn-primary" onclick="SEMI.restoreSEMI()">
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
            <div id="${SEMI.ROOT_ID}-info-box" class="d-none SEMI-fixed-textbox">
              <div style="font-size: 14pt"><b>SEMI v${SEMI_VERSION}</b></div>
              Hover over sidebar buttons or some other SEMI elements to see tooltips that describe the scripts/options and give hints.
              <br>
              <br>
              If you unlock the sidebar sections, you can drag and rearrange the items in the section. Dragging an item below the SEMI icon only visible when unlocked will hide the item when the section is locked.
              <br>
              <br>
              <b>Credits:</b>
              <br>
              ${creditsText}
              Many functions of SEMI were originally based on these scripts by others:
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
    $(`#${SEMI.ROOT_ID}-etc-toggles-apply-save`).on('click', () => saveEtcToggles());
    $(`#SEMI-auto-enable-status`).on('click', () => toggleAutoEnableScripts());
  };

  if (SEMI.getItem('etc-GUI-toggles') !== null) {
    SEMIUtils.mergeOnto(SEMIetcGUI, SEMI.getItem('etc-GUI-toggles'));
    if (SEMIetcGUI.barf !== undefined) delete SEMIetcGUI.barf;
    if (SEMIetcGUI.destroyCrops !== undefined) delete SEMIetcGUI.destroyCrops;
  }

  //SEMI menu setup function
  const setupSEMI = () => {
    if ($('#auto-replant-button').length) return;
    injectSidebarSections();
    SEMIUtils.getElement('info-header').before($('<br>'));
    SEMI.setItem('etc-GUI-toggles', SEMIetcGUI); //to prevent errors first-run with thieving-calc
    SEMI.pluginNames.forEach((name) => SEMI.injectGUI(name));

    if (SEMIetcGUI.xph) injectXPHGUI();
    //Modal for SEMI info popup, now SEMI's menu
    injectSEMIInfoPopup();

    injectEyes();
    injectDragMenus();

    //if all goes well, yay, it's loaded
    SEMIUtils.customNotify(
      'assets/media/monsters/dragon_black.svg',
      'Scripting Engine for Melvor Idle is now loaded and running! Check the bottom of the sidebar.',
      { duration: 5000 }
    );
  };

  //show SEMI info modal function called by nav button
  const semiInfo = () => {
    SEMIUtils.getElement('semi-modal').modal(open);
  };

  const toggleSEMIMenuInfo = () => {
    $(`#${SEMI.ROOT_ID}-info-box`).toggleClass('d-none');
    if ($('#hide-SEMI-info-button').text() == 'Show SEMI Info') $('#hide-SEMI-info-button').text('Hide SEMI Info');
    else $('#hide-SEMI-info-button').text('Show SEMI Info');
  };

  const resetSEMIPrompt = () => {
    const resetResponse = prompt(
      `Wait. This will erase EVERY SINGLE SEMI CONFIGURATION SETTING. This includes every script option, every dragged menu position, every item selection on your AutoSell and such, all AutoMine preferences, EVERYTHING. This is best used for when something has gone very wrong and you'd like to reset SEMI to a fresh start.

    If you are sure you want to do this, please type 'semi' into the prompt.`,
      'I changed my mind!'
    );
    if (resetResponse === 'semi') SEMI.resetSEMI();
  };

  const saveEtcToggles = () => {
    SEMI.setItem('etc-GUI-toggles', SEMIetcGUI);
    SEMIUtils.customNotify(
      'assets/media/main/settings_header.svg',
      'Miscellaneous SEMI GUI settings saved! Changes will take place after refreshing the page.',
      { duration: 10000 }
    );
  };

  const toggleAutoEnableScripts = () => {
    SEMI.getItem('remember-state') ? SEMI.setItem('remember-state', false) : SEMI.setItem('remember-state', true);
    $(`#SEMI-auto-enable-status`).text(SEMI.getItem('remember-state') ? 'Enabled' : 'Disabled');
    $(`#SEMI-auto-enable-status`).addClass(SEMI.getItem('remember-state') ? 'btn-success' : 'btn-danger');
    $(`#SEMI-auto-enable-status`).removeClass(SEMI.getItem('remember-state') ? 'btn-danger' : 'btn-success');
  };

  const hideSemi = (reason) => {
    console.warn(`SEMI was not correctly loaded due to ${reason}`);
    SEMIUtils.getElements().toggleClass('d-none');
  };

  const loadSemi = () => {
    if (typeof SEMIUtils === 'undefined' || !SEMIUtils.utilsReady()) {
      return;
    }
    clearInterval(semiLoader);
    let tryLoad = true;
    const wrongVersion = gameVersion != SEMI.SUPPORTED_GAME_VERSION;
    if (wrongVersion) {
      const msg = `SEMI Alert:
      This version of SEMI was made for Melvor Idle ${SEMI.SUPPORTED_GAME_VERSION}. Loading the extension in this game version may cause unexpected behavior or result in errors.
      IMPORTANT NOTE: Any errors encountered after loading this way should be reported to SEMI DEVS, and NOT Malcs!
      Try loading it anyways?`;
      tryLoad = window.confirm(msg);
    }
    if (!tryLoad) {
      return hideSemi('game version incompatibility.');
    }
    // try {
    setupSEMI();
    const msg = `SEMI v${SEMI_VERSION} Loaded`;
    const suffix = wrongVersion ? ', but may experience errors.' : '!';
    console.log(msg + suffix);
    // } catch (error) {
    // hideSemi('the following error:');
    // console.error(error);
    // }
  };

  const semiLoader = setInterval(loadSemi, 200);

  return { semiSetMenu };
})();
