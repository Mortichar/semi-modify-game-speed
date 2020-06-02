//adding destroy crop functionality by Jarx in discord, modified by me based on game's source
const destroyCrops = () => {
    const confirmDestroyCrops = prompt('Wait. Are you sure you want to continue? Type yes in the prompt to destroy crops.', 'wait');
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
    const destroyCropsBtn = $('<button id="destroyCropsBtn" class="btn btn-success m-2">[SEMI] Destroy All Crops in This Area</button>');
    destroyCropsBtn.on('click', destroyCrops);
    $('#farming-area-container').before(destroyCropsBtn);
};