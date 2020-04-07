/* broken by melvor v0.14
//:: importing AutoFish by BreakIt, Jarx and me
var chaseCrabs = false;

function autoFish() {
    let fishMax = []; //set to empty each time autoFish iterates to recalculate
    let fishAvg = [];
    let fishZone = 0;
    var maxXP = 0;
    let fishXPs = [];
    
    if (herbloreBonuses[7].itemID > 0) { //if you're using potions on the fishing page, page 7, automatically do max mode & turn off chase chests
    //if (maxMode) {
        for (let i = 0; i < fishingArea.length; i++) { //for each available fishing area
            if (skillLevel[CONSTANTS.skill.Fishing] > fishingArea[i].level) { //if you can fish it
                for (n=0; n<fishingArea[i].currentFish.length; n++) {
                    fishXPs.push(fishData[fishingArea[i].currentFish[n]].xp);
                }
                maxXP = Math.max(...fishXPs);
                
                if (chaseCrabs && Math.max(...fishingArea[i].currentFish) == 7) { //7 is crab, will seek crabs if max in area with potions
                    console.log("You've Got Crabs!"); //do we really need the console spam? eh whatevs
                    maxXP = 8000; //second in priority to chests
                }
                
                fishMax.push(maxXP); //add that max to the array of fish areas to be max'd again
                fishXPs = []; //reset the fishXP array
            }
        }
    fishZone = fishMax.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0); //some maths by BreakIt, calcs max of array and outputs the array position.
    } else { 
        $("[id^=fishing-area-fish-]").each(function() {
            var totalexp = 0;
            $(this).children("img").each(function() {
                totalexp = totalexp + parseInt($(this).attr("data-original-title").split("+")[1].split(" ")[0]);
                
                if (chaseCrabs && parseInt($(this).attr("data-original-title").split("+")[1].split(" ")[0]) == "120") { //120xp is crab
                    //console.log("You've Got Crabs!"); //do we really need the console spam? eh whatevs
                    totalexp = 8000; //second in priority to chests
                }
                
                if (parseInt($(this).attr("data-original-title").split("+")[1].split(" ")[0]) == "1") { //removed chase chest toggler
                    console.log("Found a Chest!");
                    //console.log($(this)); //makes console spam very annoying.
                    totalexp = 9000;
                }
            });
            var toPush = totalexp / $(this).children("img").length;
            if (toPush == 9000) { toPush = 0; }
            fishAvg.push(toPush);
        });
        fishZone = fishAvg.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    }
    
    let fishActiveZone = 0;
    $("#fishing-container").find("a").each(function() { //sets the zone if max changed.
        if ($(this).hasClass("bg-fishing")) { //if the containers are indeed fishing areas
            if (fishActiveZone != fishZone) { //and if the zone is different from where the max fish is at
                console.log('Max: '+fishMax+' Avg: '+fishAvg);
                console.log("Switching from " + fishActiveZone + " to " + fishZone);
                startFishing(0,false);
                startFishing(fishZone,false);
                //return; //this may be necessary but it could have also been the userscript running at same time
            }
        }
    fishActiveZone++;
    });
}
var fishInterval;
var autoFishing = false;
function toggleAutoFish() {
    autoFishing = !autoFishing;
    $("#auto-fish-status").text( (autoFishing) ? 'Enabled' : 'Disabled' );
    if (autoFishing) {
        changePage(7);
        if (!currentlyFishing) startFishing(0,false);
        //customNotify('assets/media/shop/fishing_dragon.svg', 'AutoFish is enabled.', 5000);
        fishInterval = setInterval( () => { autoFish(); }, 1000); //loop!
    } else { 
        clearInterval(fishInterval); 
        if (currentlyFishingArea !== null) { startFishing(currentlyFishingArea,false); }
    }
}

function toggleAutoFishCrabs() {
    chaseCrabs = !chaseCrabs;
    $("#chase-crabs-status").text( (chaseCrabs) ? 'Enabled' : 'Disabled' );
}
//:: end autoFish
*/