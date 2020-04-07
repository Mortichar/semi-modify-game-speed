//Barf Up Current Potion
function barf() {
    herbloreBonuses[currentPage].itemID = 0;
    herbloreBonuses[currentPage].bonus = [null, null];
    herbloreBonuses[currentPage].charges = 0;
    customNotify('assets/media/skills/herblore/potion_empty.svg', 'Your potion has been BARFED!', 5000);
    if (currentPage === 13) updatePlayerStats();
    updatePotionHeader();
}