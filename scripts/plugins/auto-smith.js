//Auto Smelt
var barTypeCount = 0;
var barType = [0, 11, 24, 26, 35, 41, 54, 61, 74];

function autoSmithBars(){
    if (document.getElementById("smith-item-have").innerHTML == "-" ) {
        selectSmith(0);
        return;
    }
    if (document.getElementById("smithing-item-have-2") == null) {
        if (document.getElementById("smithing-item-have-1") == null) {
            if (Number(document.getElementById("smithing-item-have-0").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[0]) ){ //< requires
                barTypeCount = (barTypeCount + 1) % barType.length;
                selectSmith(barType[barTypeCount]);
            } else if (!isSmithing) startSmithing(true);
        } else if (Number(document.getElementById("smithing-item-have-0").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[0]) || Number(document.getElementById("smithing-item-have-1").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[1]) ){
            barTypeCount = (barTypeCount + 1) % barType.length;
            selectSmith(barType[barTypeCount]);
        } else if (!isSmithing) startSmithing(true);
    } else if (Number(document.getElementById("smithing-item-have-0").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[0]) || Number(document.getElementById("smithing-item-have-1").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[1]) || Number(document.getElementById("smithing-item-have-2").textContent.split(',').join('')) < Number(document.getElementById("smith-item-reqs").textContent.split(' ')[2]) ){
        barTypeCount = (barTypeCount + 1) % barType.length;
        selectSmith(barType[barTypeCount]);
    } else if (!isSmithing) startSmithing(true);
}
var smithBarsInterval;
var autoSmithingBars = false;
function toggleAutoSmithBars() {
    autoSmithingBars = !autoSmithingBars;
    $("#auto-sb-status").text( (autoSmithingBars) ? 'Enabled' : 'Disabled');
    if (autoSmithingBars) {
        smithBarsInterval = setInterval(autoSmithBars, 1000);
        changePage(11);
    } else { 
        clearInterval(smithBarsInterval);
        if (isSmithing) startSmithing(true);
    }
}