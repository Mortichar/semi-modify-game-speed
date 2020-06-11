// ==UserScript==
// @name         Melvor TimeRemaining
// @namespace    http://tampermonkey.net/
// @version      0.3.2
// @description  Shows time remaining for completing a task with your current resources. Takes into account Mastery Levels and other bonuses.
// @author       Breindahl#2660
// @match        https://*.melvoridle.com/*
// @grant        none
// ==/UserScript==
/* jshint esversion: 6 */

(main => {
    var script = document.createElement('script');
    script.textContent = `try {(${main})();} catch (e) {console.log(e);}`;
    document.body.appendChild(script).parentNode.removeChild(script);
})(() => {

// Note that this script is made for MelvorIdle version 0.15.1
// Later versions might break parts of this script
// Big thanks to Xhaf#6478 for helping with parts of the code and troubleshooting

// Loading script
console.log('Melvor TimeRemaining Loaded');

// Function to send notifications
function notify(msg) {
	One.helpers('notify', {
		type: 'dark',
		from: 'bottom',
		align: 'center',
		message: msg
	});
}

// Funtion to check if task is complete
function taskComplete() {
    if (window.timeLeftLast > 1 && window.timeLeftGlobal === 0) {
        notify("Task Done");
        console.log('task done');
        let ding = new Audio("https://www.myinstants.com/media/sounds/ding-sound-effect.mp3");
        ding.volume=0.5;
        ding.play();
	}
}

// Make images
function createImg(itemID) {
	return '<img class="skill-icon-xs mr-2" src="' + items[itemID].media + '" />'
}

// Create timeLeft containers
let TempContainer = ['<small id ="','" class="js-tooltip-enabled" style="display:block;clear:both" data-toggle="tooltip" data-placement="top" data-html="true" title="" data-original-title=""><small>']

document.getElementById("smith-item-have").outerHTML += TempContainer[0] + "timeLeftSmithing" + TempContainer[1];
document.getElementById("fletch-item-have").outerHTML += TempContainer[0] + "timeLeftFletching" + TempContainer[1];
document.getElementById("runecraft-item-have").outerHTML += TempContainer[0] + "timeLeftRunecrafting" + TempContainer[1];
document.getElementById("craft-item-have").outerHTML += TempContainer[0] + "timeLeftCrafting" + TempContainer[1];
document.getElementById("herblore-item-have").outerHTML += TempContainer[0] + "timeLeftHerblore" + TempContainer[1];
document.getElementById("skill-cooking-food-selected-qty").outerHTML += TempContainer[0] + "timeLeftCooking" + TempContainer[1];
document.getElementById("skill-fm-logs-selected-qty").outerHTML += TempContainer[0] + "timeLeftFiremaking" + TempContainer[1];

// Create itemProduce containers
// document.getElementById("smith-item-produce").outerHTML += TempContainer[0] + "itemProduceSmithing" + TempContainer[1];
// document.getElementById("fletch-item-produce").outerHTML += TempContainer[0] + "itemProduceFletching" + TempContainer[1];
// document.getElementById("runecraft-item-produce").outerHTML += TempContainer[0] + "itemProduceRunecrafting" + TempContainer[1];
// document.getElementById("craft-item-produce").outerHTML += TempContainer[0] + "itemProduceCrafting" + TempContainer[1];
// document.getElementById("herblore-item-produce").outerHTML += TempContainer[0] + "itemProduceHerblore" + TempContainer[1];
// document.getElementById("skill-cooking-food-selected-qty").outerHTML += TempContainer[0] + "itemProduceCooking" + TempContainer[1];
// document.getElementById("skill-fm-logs-selected-qty").outerHTML += TempContainer[0] + "itemProduceFiremaking" + TempContainer[1];

// Funtion to get unformatted number for Qty
function getQtyUnformat(itemID) {
	let qty = 0;
	for (let i = 0; i < bank.length; i++) {
		if (bank[i].id === itemID) {
			qty += bank[i].qty;
		}
	}
	return qty;
}

// Convert seconds to hours/minutes/seconds and format them
function secondsToHms(d) {
	d = Number(d);
	let h = Math.floor(d / 3600);
	let m = Math.floor(d % 3600 / 60);
	let s = Math.floor(d % 3600 % 60);
	let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	let mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
	let mDisplayComma = m > 0 && s > 0 ? " and " : "";
	let hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : "";
	let hDisplayComma = h > 0 ? ((m === 0 && s > 0)||(s === 0 && m > 0) ? " and " : ((s > 0 || m > 0) ? ", " : "")) : "";
	return hDisplay + hDisplayComma + mDisplay + mDisplayComma + sDisplay;
}

// Add seconds to date
function AddSecondsToDate(date, seconds) {
     return new Date(date.getTime() + seconds*1000);
}

// Format date
function DateFormat(date,time){
  let days = Math.floor(time / 86400)
  days = days > 0 ? ' + ' + days + ' days': '';
  //let days = date.getDate();
  //let year = date.getFullYear();
  //let month = (date.getMonth()+1);
  let hours = date.getHours();
  hours = hours < 10 ? '0' + hours : hours;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + days;
  return strTime;
}

// Convert mastery level to XP
function xpToLvlRef(level) {
	let xp = 0;
	if (level === 1) {return xp;}
	for (var i = 1; i < level; i++) {
		xp += Math.floor(i +300*Math.pow(2,i/7) )/48
	}
	return Math.floor(xp);
}

// Main function
function timeRemaining(item,currentSkill){
    // console.log("Current Skill is "+currentSkill);
    // console.log("ItemID: "+item);
    // Reset variables
	var skillInterval = null; // Update interval of skill
	var skillID = null; // skillID of item (this is different than itemID)
	var skillMastery = null; // Current amount of Mastery experience
	var timeLeftID = "timeLeft".concat(currentSkill); // Field for generating timeLeft HTML
	var itemProduceID = "itemProduce".concat(currentSkill); // Field for generating itemProduce HTML
    var skillReq = []; // Needed items for craft and their quantities
	var	masteryLimLevel = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,Infinity]; // This array contain the thresholds at which a new chanceToKeep comes into effect
	var	chanceToKeep = [0.0000,0.0025,0.0050,0.0075,0.0100,0.0125,0.0150,0.0175,0.0200,0.0225,0.0250,0.0275,0.0300,0.0325,0.0350,0.0375,0.0400,0.0425,0.0450,0.0475,0.0500,0.0525,0.0550,0.0575,0.0600,0.0625,0.0650,0.0675,0.0700,0.0725,0.0750,0.0775,0.0800,0.0825,0.0850,0.0875,0.0900,0.0925,0.0950,0.0975,0.1000,0.1025,0.1050,0.1075,0.1100,0.1125,0.1150,0.1175,0.1200,0.1225,0.1250,0.1275,0.1300,0.1325,0.1350,0.1375,0.1400,0.1425,0.1450,0.1475,0.1500,0.1525,0.1550,0.1575,0.1600,0.1625,0.1650,0.1675,0.1700,0.1725,0.1750,0.1775,0.1800,0.1825,0.1850,0.1875,0.1900,0.1925,0.1950,0.1975,0.2000,0.2025,0.2050,0.2075,0.2100,0.2125,0.2150,0.2175,0.2200,0.2225,0.2250,0.2275,0.2300,0.2325,0.2350,0.2375,0.2400,0.2425,0.2450]; //Percentage chance of keeping item
	var itemCraft = []; // Amount of items craftable for each resource requirement
    var recordCraft = Infinity; // Amount of craftable items for limiting resource
	var now = new Date(); // Current time and day
	var tokenChance = 0;
	var skillBonusesID = null;
	var masteryLim = [];
	var chanceToBonus = [];
	for (let i = 0; i < masteryLimLevel.length; i++) {
		chanceToBonus[i] = 0;
	}

	// Set current skill and pull match variables from game with script
	if (currentSkill == "Smithing") {
		skillInterval = 2000;
		if (godUpgrade[3]) skillInterval *= 0.8;
		skillID = smithingItems[selectedSmith].smithingID;
		skillMastery = smithingMastery[skillID].masteryXP;
		for (let i of items[item].smithReq) {
			skillReq.push(i);
		}
		masteryLimLevel = [10,20,30,40,50,60,70,80,90,Infinity] // Smithing Mastery Limits
		chanceToKeep = [0,0,0.1,0.1,0.2,0.2,0.3,0.3,0.4,0.4]; //Smithing Mastery bonus percentages
		chanceToBonus = [0,0.1,0.1,0.2,0.2,0.3,0.3,0.4,0.4,0.5]; //Smithing Mastery bonus percentages
		tokenChance = 300;
		skillBonusesID = 11;
	}
	if (currentSkill == "Fletching") {
		skillInterval = 2000;
		if (godUpgrade[0]) skillInterval *= 0.8;
		skillID = fletchingItems[selectedFletch].fletchingID;
		skillMastery = fletchingMastery[skillID].masteryXP;
		for (let i of items[item].fletchReq) {
			skillReq.push(i);
		}
		//Special Case for Arrow Shafts
		if (item == 276) {
			if (selectedFletchLog === undefined) {selectedFletchLog = 0;}
			skillReq = [skillReq[selectedFletchLog]];
		}
		tokenChance = 550;
	}
	if (currentSkill == "Runecrafting") {
		skillInterval = 2000;
		if (godUpgrade[1]) skillInterval *= 0.8;
		skillID = runecraftingItems[selectedRunecraft].runecraftingID;
		skillMastery = runecraftingMastery[skillID].masteryXP;
		for (let i of items[item].runecraftReq) {
			skillReq.push(i);
		}
		masteryLimLevel = [10,20,30,40,50,60,70,80,90,Infinity] // Runecrafting Mastery Limits
		for (let i = 0; i < masteryLimLevel.length; i++) {
			chanceToKeep[i] = 0;
		}
		chanceToBonus = [0,1,2,3,4,5,6,7,8,9];
		tokenChance = 1000;
	}
	if (currentSkill == "Crafting") {
		skillInterval = 3000;
		if (godUpgrade[0]) skillInterval *= 0.8;
        skillID = craftingItems[selectedCraft].craftingID;
		skillMastery = craftingMastery[skillID].masteryXP;
		for (let i of items[item].craftReq) {
			skillReq.push(i);
		}
		tokenChance = 400;
    }
	if (currentSkill == "Herblore") {
		skillInterval = 2000;
		if (godUpgrade[1]) skillInterval *= 0.8;
		skillID = herbloreItems[selectedHerblore].id;
		skillMastery = herbloreMastery[skillID].masteryXP;
		for (let i of items[item].herbloreReq) {
			skillReq.push(i);
		}
		// Add 0.05% chance to Keep because Herblore is wierd
		for (let i = 0; i < chanceToKeep.length; i++) {
			chanceToKeep[i] = parseFloat((chanceToKeep[i]+0.0005).toFixed(4));
		}
		tokenChance = 400;
    }
	if (currentSkill == "Cooking") {
		skillInterval = 3000;
        if (godUpgrade[3]) skillInterval *= 0.8;
        skillID = items[selectedFood].cookingID;
		skillMastery = cookingMastery[skillID].masteryXP;
		skillReq = [{id: item, qty: 1}];
		masteryLimLevel = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,Infinity]; // This array contain the thresholds at which a new chanceToKeep comes into effect
		for (let i = 0; i < masteryLimLevel.length; i++) {
			let chanceToBonusTemp = (-((0.3-((i+1)*0.006))*0.99));
			if (chanceToBonusTemp > -0.01) { chanceToBonusTemp = -0.01; }
			chanceToBonus[i] = parseFloat(chanceToBonusTemp.toFixed(4));
		}
		for (let i = 0; i < masteryLimLevel.length; i++) {
			chanceToKeep[i] = 0;
		}
		// console.log("chanceToBonus");
		// console.log(chanceToBonus);
		// console.log("chanceToKeep");
		// console.log(chanceToKeep);
		tokenChance = 1000;
	}
	if (currentSkill == "Firemaking") {
		skillInterval = logsData[item].interval;
        if (godUpgrade[3]) skillInterval *= 0.8;
        skillID = items[selectedLog].firemakingID;
		skillMastery = logsMastery[skillID].masteryXP;
		skillReq = [{id: item, qty: 1}];
		masteryLimLevel = [Infinity]; //Cooking has no Mastery bonus for time
		chanceToKeep = [0]; //Thus gives no extra items
		chanceToBonus = [0];
		tokenChance = 1000;
	}

	// Populate masteryLim from masteryLimLevel
	for (let i = 0; i < masteryLimLevel.length; i++) {
		if (masteryLimLevel[i] == Infinity) {
			masteryLim[i] = Infinity
		} else {
		masteryLim[i] = xpToLvlRef(masteryLimLevel[i]);
		}
	}

    // Get Item Requirements and Current Requirements
	for (let i = 0; i < skillReq.length; i++) {
		var itemReq;
		//Special Case: Check for Smithing Cape
		if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Smithing_Skillcape && skillReq[i].id == 48) {
			itemReq = Math.floor(skillReq[i].qty / 2);
		} else  {
			itemReq = skillReq[i].qty;
		}
		//Check how many of required resourse in Bank
		var itemQty = getQtyUnformat(skillReq[i].id);
		// Calculate max items you can craft for each itemReq
		itemCraft[i] = Math.floor(itemQty/itemReq);
		// Calculate limiting factor and set new record
		if(itemCraft[i] < recordCraft) {
			recordCraft = itemCraft[i];
		}
	}

    //Return the chanceToKeep for any mastery EXP
    function masteryChance(masteryEXP, chanceToRefTable){
        let chanceTo = chanceToRefTable;
		// console.log("chanceTo");
		// console.log(chanceTo);
		if (masteryEXP >= masteryLim[0]) {
			for (let i = 0; i < masteryLim.length; i++) {
				if (masteryLim[i] <= masteryEXP && masteryEXP < masteryLim[i+1]) {
					return chanceTo[i+1];
				}
			}
		} else {return chanceTo[0];}
    }
	// console.log("recordCraft" + recordCraft);

	// Calculates expected time, taking into account Mastery Level advancements during the craft
    function expectedActionsFunc(resources){
		let xpFinalResult = 0;
		let resFinalResult = 0;
		let currentMastery = skillMastery;
		while (resources > 0) {
			let currentMasteryLim = masteryLim.find(element => element > currentMastery);
			let masteryChanceKeep = 1-masteryChance(currentMastery,chanceToKeep);
			let masteryChanceBonus = 1+masteryChance(currentMastery,chanceToBonus);
			let expectedXP = Math.round(resources/masteryChanceKeep);
			let expectedRes = Math.round(expectedXP*masteryChanceBonus);
			let xpToLimit = currentMasteryLim - currentMastery
			if (xpToLimit > expectedXP) {
				xpFinalResult += expectedXP;
				resFinalResult += expectedRes;
				resources -= resources;
			} else {
				xpFinalResult += xpToLimit;
				resFinalResult += Math.round(xpToLimit*masteryChanceBonus);
				resources -= Math.round(xpToLimit*masteryChanceKeep);
			}
			currentMastery = currentMasteryLim;
		}
        return {"xpFinalResult" : xpFinalResult, "resFinalResult" : resFinalResult};
	}
	var expectedActionsRef = expectedActionsFunc(recordCraft);
	var expectedActions = expectedActionsRef.xpFinalResult;
	//var expectedResources = expectedActionsRef.resFinalResult;
	var expectedActionsOffline = Math.floor(recordCraft/(1-masteryChance(skillMastery,chanceToKeep)));
	//var expectedResourcesOffline = Math.floor(expectedActionsOffline*(1+masteryChance(skillMastery,chanceToBonus)));

	// WORK IN PROGRESS
	// Potion Bonuses
	// function potionBonuses(actions) {
		// let producePotionBonuses = null;
		// // // Get potion values
		// let potionAmount = getQtyUnformat(herbloreBonuses[skillBonusesID].itemID);
		// let potionCharges = items[herbloreBonuses[skillBonusesID].itemID].potionCharges;
		// let currentCharges = herbloreBonuses[skillBonusesID].charges;
		// var totalPotionActions = (potionAmount*potionCharges)+currentCharges;
		// console.log("totalPotionActions: "+totalPotionActions)
		// if(totalPotionActions > expectedActions) {
		// totalPotionActions = expectedActions;
		// console.log(totalPotionActions);
		// }
		// // Seeing Gold Potion
		// if (item === 133) {
			// console.log("item: "+item)
			// let qty = Math.floor(totalPotionActions*herbloreBonuses[skillBonusesID].bonus[1]/100);
			// producePotionBonuses = {id: 58, qty: qty};
			// return producePotionBonuses
			// console.log(producePotionBonuses);
			// console.log("Smithing Silver");
		// }
	// }


    //Time left if online (with Mastery progression)
    var timeLeft = expectedActions*skillInterval/1000;
    //Time left if offline (no Mastery progression)
	var timeLeftOffline = expectedActionsOffline*skillInterval/1000;
	//Global variables to keep track of when a craft is complete
	window.timeLeftLast = window.timeLeftGlobal;
	window.timeLeftGlobal = timeLeft;
    //Inject timeLeft HTML
    let timeLeftElement = document.getElementById(timeLeftID);
	if(timeLeftElement !== null) {
		if (timeLeft !== 0) {
			let finishedTime = AddSecondsToDate(now,timeLeft);
			let finishedTimeOffline = AddSecondsToDate(now,timeLeftOffline);
				timeLeftElement.innerHTML = "Will take: " + secondsToHms(timeLeft) + "<br>Expected finished: " + DateFormat(finishedTime,timeLeft);
				// Tooltip with time left if offline
				$('#'+timeLeftID).attr('data-original-title', 'Offline: '+secondsToHms(timeLeftOffline) + '<br>Expected Finished: ' + DateFormat(finishedTimeOffline,timeLeftOffline));
				// Refreshes tooltip if hovering
				if ($('#'+timeLeftID).attr('aria-describedby') !== undefined) {
					$('#'+timeLeftID).tooltip('show');
				}
				// Add margin to element
				timeLeftElement.style.marginBottom = "6px";
		} else {
		// empty and reset if no time
			timeLeftElement.innerHTML = "";
			$('#'+timeLeftID).attr('data-original-title', '');
			timeLeftElement.style.marginBottom = "0px";
		}
	}

    // //Inject itemProduce HTML
    // let itemProduceElement = document.getElementById(itemProduceID);
	// if(itemProduceElement !== null) {
		// if (timeLeft !== 0) {
				// itemProduceElement.innerHTML = 'Expected Result: ' + expectedResources + ' ' + createImg(item);
				// // let expectedTokens = Math.floor(expectedActions/tokenChance);
				// // console.log(expectedTokens);
				// // if (expectedTokens > 0){
					// // console.log('More than 0 tokens');
					// // itemProduceElement.innerHTML += ' ' + expectedTokens + ' ' + createImg(eval("CONSTANTS.item.Mastery_Token_".concat(currentSkill)));
				// // }
				// // //WORK IN PROGRESS
				// // if (potionBonuses(expectedActions) !== null) {
					// // //let producePotionBonuses = potionBonuses(expectedActions);
					// // //itemProduceElement.innerHTML += ' ' + producePotionBonuses.qty + ' ' + createImg(producePotionBonuses.id);
					// // console.log("TEST");
				// // }
				// // Tooltip with items produced if offline
				// $('#'+itemProduceID).attr('data-original-title', 'Offline: ' + expectedResourcesOffline + ' ' + createImg(item)  );
				// // Refreshes tooltip if hovering
				// if ($('#'+itemProduceID).attr('aria-describedby') !== undefined) {
					// $('#'+itemProduceID).tooltip('show');
				// }
				// // Add margin to element
				// itemProduceElement.style.marginBottom = "6px";
		// } else {
		// // empty and reset if no time
			// itemProduceElement.innerHTML = '';
			// $('#'+itemProduceID).attr('data-original-title', '');
			// itemProduceElement.style.marginBottom = "0px";
		// }
	// }
}

// ## SMITHING ##
var selectSmithRef = selectSmith;
window.selectSmith = function(...args) {
    selectSmithRef(...args);
    timeRemaining(smithingItems[selectedSmith].itemID,"Smithing");
};
var startSmithingRef = startSmithing;
window.startSmithing = function(...args) {
    startSmithingRef(...args);
    timeRemaining(smithingItems[selectedSmith].itemID,"Smithing");
    taskComplete();
};

// ## FLETCHING ##
var selectFletchRef = selectFletch;
window.selectFletch = function(...args) {
    selectFletchRef(...args);
	timeRemaining(fletchingItems[selectedFletch].itemID,"Fletching");
};
var startFletchingRef = startFletching;
window.startFletching = function(...args) {
    startFletchingRef(...args);
    timeRemaining(fletchingItems[selectedFletch].itemID,"Fletching");
    taskComplete();
};

// ## RUNECRAFTING ##
var selectRunecraftRef = selectRunecraft;
window.selectRunecraft = function(...args) {
    selectRunecraftRef(...args);
    timeRemaining(runecraftingItems[selectedRunecraft].itemID,"Runecrafting");
};
var startRunecraftingRef = startRunecrafting;
window.startRunecrafting = function(...args) {
    startRunecraftingRef(...args);
    timeRemaining(runecraftingItems[selectedRunecraft].itemID,"Runecrafting");
    taskComplete();
};

// ## CRAFTING ##
var selectCraftRef = selectCraft;
window.selectCraft = function(...args) {
    selectCraftRef(...args);
    timeRemaining(craftingItems[selectedCraft].itemID,"Crafting");
};
var startCraftingRef = startCrafting;
window.startCrafting = function(...args) {
    startCraftingRef(...args);
    timeRemaining(craftingItems[selectedCraft].itemID,"Crafting");
    taskComplete();
};

// ## HERBLORE ##
var selectHerbloreRef = selectHerblore;
window.selectHerblore = function(...args) {
    selectHerbloreRef(...args);
    timeRemaining(herbloreItemData[selectedHerblore].itemID[getHerbloreTier(selectedHerblore)],"Herblore");
};
var startHerbloreRef = startHerblore;
window.startHerblore = function(...args) {
    startHerbloreRef(...args);
    timeRemaining(herbloreItemData[selectedHerblore].itemID[getHerbloreTier(selectedHerblore)],"Herblore");
    taskComplete();
};

// ## COOKING ##
var selectFoodRef = selectFood;
window.selectFood = function(...args) {
    selectFoodRef(...args);
    timeRemaining(selectedFood,"Cooking");
};
var startCookingRef = startCooking;
window.startCooking = function(...args) {
    startCookingRef(...args);
    timeRemaining(selectedFood,"Cooking");
    taskComplete();
};

// ## FIREMAKING ##
var selectLogRef = selectLog;
window.selectLog = function(...args) {
    selectLogRef(...args);
    timeRemaining(selectedLog,"Firemaking");
};
var burnLogRef = burnLog;
window.burnLog = function(...args) {
    burnLogRef(...args);
    timeRemaining(selectedLog,"Firemaking");
    taskComplete();
};

//fix scrunch ugliness
$("#firemaking").find(".col-8.offset-2").attr('id','firemaking-log-display');
$("#firemaking-log-display").removeClass();

$("#cooking").find(".col-8.offset-2").attr('id','cooking-item-display');
$("#cooking-item-display").removeClass();

});