//adding destroy crop functionality by Jarx in discord, modified by me based on game's source
function destroyCrops() {
    var confirmDestroyCrops = prompt("Wait. Are you sure you want to continue? Type yes in the prompt to destroy crops.", "wait");
    if (confirmDestroyCrops === "yes") {
        for (let i = 0; i < newFarmingAreas[currentFarmingArea].patches.length; i++) {
            if (newFarmingAreas[currentFarmingArea].patches[i].seedID > 0) {
                removeSeed(newFarmingAreas[currentFarmingArea].id, i);
            }
        }
        customNotify('assets/media/skills/farming/farming.svg', 'SEMI destroyed all of your '+newFarmingAreas[currentFarmingArea].areaName+'.', 4000);
    }
}