//adding destroy crop functionality by Jarx in discord, modified by me based on game's source
(() => {
    const id = 'destroy-crops';
    const title = 'Destroy Crops Button';
    const desc = 'This script injects a button into the Farming page to destroy all crops of your selected plot. It will ask if you are sure you want to proceed with a prompt warning, then if you respond correctly it will destroy EVERY CROP in whatever section you are viewing. All Allotments, for example.';
    const imgSrc = 'assets/media/skills/combat/fire_god_dungeon.svg';

    const destroyCrops = () => {
        const confirmDestroyCrops = prompt('Wait. Are you sure you want to continue? Type yes in the prompt to destroy currently viewed area crops.', 'wait');
        if (confirmDestroyCrops === 'yes') {
            const area = newFarmingAreas[currentFarmingArea];
            for (let i = 0; i < area.patches.length; i++) {
                if (area.patches[i].seedID > 0) {
                    removeSeed(area.id, i);
                }
            }
            SEMI.customNotify(SEMI.skillImg('farming'), `SEMI destroyed all of your ${area.areaName}.`, 4000);
        }
    };

    const injectDestroyCropsGUI = () => {
        const destroyCropsBtn = $(`<div id="destroy-crops-gui" class="block block-content block-rounded block-link-pop border-top border-farming border-4x text-center">
            <button id="destroyCropsBtn" class="btn btn-warning m-2">[SEMI] Destroy All Crops in This Area</button>
        </div>`);
        destroyCropsBtn.on('click', () => {destroyCrops()});
        $('#farming-area-container').before(destroyCropsBtn);
    };
    const removeGUI = () => $('#destroy-crops-gui').remove();
    // SEMI.mergeOnto(SEMI, {barf});
    SEMI.add(id, {ms: 0, pluginType: SEMI.PLUGIN_TYPE.TWEAK, title, desc, imgSrc, onEnable: injectDestroyCropsGUI, onDisable: removeGUI});
})();