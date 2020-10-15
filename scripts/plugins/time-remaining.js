// ==UserScript==
// @name         Melvor TimeRemaining
// @namespace    http://tampermonkey.net/
// @version      0.4.2
// @description  Shows time remaining for completing a task with your current resources. Takes into account Mastery Levels and other bonuses.
// @author       Breindahl#2660
// @match        https://*.melvoridle.com/*
// @grant        none
// ==/UserScript==
/* jshint esversion: 9 */

// Note that this script is made for MelvorIdle version 0.16.3
// Later versions might break parts of this script
// Big thanks to Xhaf#6478 and Visua#9999 for helping with parts of the code and troubleshooting


(function () { return; //temporary disable: 0.17 breakage
	function injectScript(main) {
		// SEMI override killswitch
		if (SEMI.getItem('etc-GUI-toggles') !== null) {
			const toggle = SEMI.getItem('etc-GUI-toggles').timeRemaining;
			if (toggle !== undefined && !toggle) return;
		}

		var script = document.createElement('script');
		script.textContent = `try {(${main})();} catch (e) {console.log(e);}`;
		document.body.appendChild(script).parentNode.removeChild(script);
	}

	function script() {
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
				ding.volume=0.1;
				ding.play();
			}
		}

		// Make images
		function createImg(itemID) {
			return '<img class="skill-icon-xs mr-2" src="' + items[itemID].media + '" />';
		}

		// Create timeLeft containers
		let TempContainer = ['<div class="font-size-sm font-w600 text-uppercase text-center text-muted"><small id ="','" class="js-tooltip-enabled mr-2" style="display:block;clear:both" data-toggle="tooltip" data-placement="top" data-html="true" title="" data-original-title=""></small></div>'];

		$("#smith-item-have").after(TempContainer[0] + "timeLeftSmithing" + TempContainer[1]);
		$("#fletch-item-have").after(TempContainer[0] + "timeLeftFletching" + TempContainer[1]);
		$("#runecraft-item-have").after(TempContainer[0] + "timeLeftRunecrafting" + TempContainer[1]);
		$("#craft-item-have").after(TempContainer[0] + "timeLeftCrafting" + TempContainer[1]);
		$("#herblore-item-have").after(TempContainer[0] + "timeLeftHerblore" + TempContainer[1]);
		$("#skill-cooking-food-selected-qty").after(TempContainer[0] + "timeLeftCooking" + TempContainer[1]);
		$("#skill-fm-logs-selected-qty").after(TempContainer[0] + "timeLeftFiremaking" + TempContainer[1]);
		$("#magic-item-have-and-div").after(TempContainer[0] + "timeLeftAltMagic" + TempContainer[1]);


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
			let days = Math.floor(time / 86400);
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
			if(level === Infinity) { return Infinity; }
			let xp = 0;
			if (level === 1) {return xp;}
			for (var i = 1; i < level; i++) {
				xp += Math.floor(i +300*Math.pow(2,i/7) )/48;
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
			var masteryLimLevel = Array.from({ length: 98 }, (_, i) => i + 2);
			masteryLimLevel.push(Infinity);
			var chanceToKeep = Array.from({ length: 99 }, (_, i) => i *0.002);
			var itemCraft = []; // Amount of items craftable for each resource requirement
			var recordCraft = Infinity; // Amount of craftable items for limiting resource
			var now = new Date(); // Current time and day
			var skillBonusesID = null;
			var masteryLim = [];
			var rhaelyxCharge = 0;
			var chargeUses = 0;
			var chargeUsesOffline = 0;
			// var tokenChance = 0;
			// var chanceToBonus = [];
			// for (let i = 0; i < masteryLimLevel.length; i++) {
				// chanceToBonus[i] = 0;
			// }

			// Set current skill and pull match variables from game with script
			if (currentSkill == "Smithing") {
				skillInterval = 2000;
				if (godUpgrade[3]) skillInterval *= 0.8;
				skillID = smithingItems[selectedSmith].smithingID;
				skillMastery = smithingMastery[skillID].masteryXP;
				for (let i of items[item].smithReq) {
					skillReq.push(i);
				}
				masteryLimLevel = [10,20,30,40,50,60,70,80,90,Infinity]; // Smithing Mastery Limits
				chanceToKeep = [0,0,0.05,0.05,0.10,0.10,0.15,0.15,0.20,0.20]; //Smithing Mastery bonus percentages
				if(petUnlocked[5]) chanceToKeep = chanceToKeep.map(n => n + PETS[5].chance/100); // Add Pet Bonus
				// chanceToBonus = [0,0.1,0.1,0.2,0.2,0.3,0.3,0.4,0.4,0.5]; //Smithing Mastery bonus percentages
				// tokenChance = 300;
				// skillBonusesID = 11;
			}
			if (currentSkill == "Fletching") {
				skillInterval = 2000;
				if (godUpgrade[0]) skillInterval *= 0.8;
				if (petUnlocked[8]) skillInterval -= 200;
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
				// tokenChance = 550;
			}
			if (currentSkill == "Runecrafting") {
				skillInterval = 2000;
				if (godUpgrade[1]) skillInterval *= 0.8;
				skillID = runecraftingItems[selectedRunecraft].runecraftingID;
				skillMastery = runecraftingMastery[skillID].masteryXP;
				for (let i of items[item].runecraftReq) {
					skillReq.push(i);
				}
				//masteryLimLevel = [10,20,30,40,50,60,70,80,90,Infinity]; // Runecrafting Mastery Limits
				masteryLimLevel = [Infinity]; // Runecrafting Mastery Limits
				chanceToKeep = [];
				for (let i = 0; i < masteryLimLevel.length; i++) {
					chanceToKeep[i] = 0;
					if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Runecrafting_Skillcape || equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Max_Skillcape) chanceToKeep[i] += 0.35;
					if (petUnlocked[10]) chanceToKeep[i] += PETS[10].chance/100;
				}
				// chanceToBonus = [0,1,2,3,4,5,6,7,8,9];
				// tokenChance = 1000;
			}
			if (currentSkill == "Crafting") {
				skillInterval = 3000;
				if (godUpgrade[0]) skillInterval *= 0.8;
				if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Crafting_Skillcape || equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Max_Skillcape) skillInterval = skillInterval / 2;
				if (petUnlocked[9]) skillInterval -= 300;
				skillID = craftingItems[selectedCraft].craftingID;
				skillMastery = craftingMastery[skillID].masteryXP;
				for (let i of items[item].craftReq) {
					skillReq.push(i);
				}
				// tokenChance = 400;
			}
			if (currentSkill == "Herblore") {
				skillInterval = 2000;
				if (godUpgrade[1]) skillInterval *= 0.8;
				skillID = herbloreItems[selectedHerblore].id;
				skillMastery = herbloreMastery[skillID].masteryXP;
				for (let i of items[item].herbloreReq) {
					skillReq.push(i);
				}
				// tokenChance = 400;
			}
			if (currentSkill == "Cooking") {
				skillInterval = 3000;
				if (godUpgrade[3]) skillInterval *= 0.8;
				skillID = items[selectedFood].cookingID;
				skillMastery = cookingMastery[skillID].masteryXP;
				skillReq = [{id: item, qty: 1}];
				masteryLimLevel = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,Infinity]; // This array contain the thresholds at which a new chanceToKeep comes into effect
				for (let i = 0; i < masteryLimLevel.length; i++) {
					chanceToKeep[i] = 0;
				}
				// for (let i = 0; i < masteryLimLevel.length; i++) {
					// let chanceToBonusTemp = (-((0.3-((i+1)*0.006))*0.99));
					// if (chanceToBonusTemp > -0.01) { chanceToBonusTemp = -0.01; }
					// chanceToBonus[i] = parseFloat(chanceToBonusTemp.toFixed(4));
				// }
				// tokenChance = 1000;
			}
			if (currentSkill == "Firemaking") {
				skillInterval = logsData[item].interval;
				if (godUpgrade[3]) skillInterval *= 0.8;
				skillID = items[selectedLog].firemakingID;
				skillMastery = logsMastery[skillID].masteryXP;
				skillReq = [{id: item, qty: 1}];
				masteryLimLevel = [Infinity]; //Cooking has no Mastery bonus for time
				chanceToKeep = [0]; //Thus gives no extra items
				// chanceToBonus = [0];
				// tokenChance = 1000;
			}

			if (currentSkill == "AltMagic") {
				skillInterval = 2000;
				//Runes
				altMagicID = selectedAltMagic;
					if (ALTMAGIC[altMagicID].runesRequiredAlt !== undefined && useCombinationRunes) {
						for (let i of ALTMAGIC[altMagicID].runesRequiredAlt) {
							skillReq.push({...i});
						}
					}
					else {
						for (let i of ALTMAGIC[altMagicID].runesRequired) {
							skillReq.push({...i});
						}
					}

					// Rune Discount
					for (let i = 0; i < skillReq.length; i++) {
						if (equippedItems.includes(CONSTANTS.item.Magic_Skillcape) || equippedItems.includes(CONSTANTS.item.Max_Skillcape)) {
							if (items[CONSTANTS.item.Magic_Skillcape].providesRune.includes(skillReq[i].id)) {
								skillReq[i].qty -= items[CONSTANTS.item.Magic_Skillcape].providesRuneQty;
							}
						}
						else if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].providesRune !== undefined) {
							if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].providesRune.includes(skillReq[i].id)) {
								skillReq[i].qty -= items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].providesRuneQty;
							}
						}
					}
				skillReq = skillReq.filter(item => item.qty > 0); // Remove all runes with 0 cost

				//Other items
				if (ALTMAGIC[selectedAltMagic].selectItem == 1 && selectedMagicItem[1] !== null) { // Spells that just use 1 item
					skillReq.push({id: selectedMagicItem[1], qty: 1});
				}
				if (ALTMAGIC[selectedAltMagic].selectItem == -1) { // Spells that dont require you to select an item
					if (ALTMAGIC[selectedAltMagic].needCoal) { // Rags to Riches II
						skillReq.push({id: 48, qty: 1});
					}
				}
				if (selectedMagicItem[0] !== null && ALTMAGIC[selectedAltMagic].selectItem == 0) { // SUPERHEAT
					for (let i of items[selectedMagicItem[0]].smithReq) {
						skillReq.push({...i});
					}
					if (ALTMAGIC[selectedAltMagic].ignoreCoal) {
						skillReq = skillReq.filter(item => item.id !== 48);
					}
				}
				skillMastery = 0;
				masteryLimLevel = [Infinity]; //AltMagic has no Mastery bonus
				chanceToKeep = [0]; //Thus gives no extra items
			}

			// Copy chanceToKeep into chanceToKeepOffline
			var chanceToKeepOffline = [...chanceToKeep];

			// Populate masteryLim from masteryLimLevel
			for (let i = 0; i < masteryLimLevel.length; i++) {
					masteryLim[i] = xpToLvlRef(masteryLimLevel[i]);
			}

			// Check for Crown of Rhaelyx
			if (equippedItems.includes(CONSTANTS.item.Crown_of_Rhaelyx) && currentSkill != "AltMagic") {
				for (let i = 0; i < masteryLimLevel.length; i++) {
					chanceToKeep[i] += 0.10;
					if (currentSkill == "Runecrafting") { // Crown only works with RC for Offline Currently
						chanceToKeepOffline[i] += 0.10;
					}
				}
				rhaelyxCharge = getQtyUnformat(CONSTANTS.item.Charge_Stone_of_Rhaelyx);
				chargeUses = rhaelyxCharge * 1000;
				if (currentSkill == "Runecrafting") { // Crown only works with RC for Offline Currently
					chargeUsesOffline = chargeUses;
				}
			}
			var RhaelyxChance = 0.15;

			// Get Item Requirements and Current Requirements
			for (let i = 0; i < skillReq.length; i++) {
				let	itemReq = skillReq[i].qty;
				//Check how many of required resourse in Bank
				let itemQty = getQtyUnformat(skillReq[i].id);
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
				// let resFinalResult = 0;
				let currentMastery = skillMastery;
				while (resources > 0) {
					let currentMasteryLim = masteryLim.find(element => element > currentMastery);
					let totalChanceToUse = 1-masteryChance(currentMastery,chanceToKeep);
					// let masteryChanceBonus = 1+masteryChance(currentMastery,chanceToBonus);
					let xpToLimit = currentMasteryLim - currentMastery;
					let expectedXP;
					if (chargeUses >= xpToLimit || chargeUses >= resources/(totalChanceToUse-RhaelyxChance)){
						totalChanceToUse -= RhaelyxChance; //if we have excess uses, then we simply use better chance to keep and move on as usual
					} else {
						totalChanceToUse = resources / (chargeUses/(totalChanceToUse-RhaelyxChance) + (resources-chargeUses)/totalChanceToUse); //the denominator is the "real" expectedXP with Rhaelyx, so the "real" chanceToKeep is essentially found through resources/(resources/chanceToKeep)
					}
					expectedXP = Math.round(resources/totalChanceToUse);
					// let expectedRes = Math.round(expectedXP*masteryChanceBonus);

					if (xpToLimit > expectedXP) {
						xpFinalResult += expectedXP;
						// resFinalResult += expectedRes;
						resources -= resources;
					} else {
						xpFinalResult += xpToLimit;
						// resFinalResult += Math.round(xpToLimit*masteryChanceBonus);
						resources -= Math.round(xpToLimit*totalChanceToUse);
						chargeUses -= xpToLimit;
						if (chargeUses < 0) chargeUses = 0;
					}
					currentMastery = currentMasteryLim;
				}
				return {"xpFinalResult" : xpFinalResult};
				// return {"xpFinalResult" : xpFinalResult, "resFinalResult" : resFinalResult};
			}
			var expectedActionsRef = expectedActionsFunc(recordCraft);
			var expectedActions = expectedActionsRef.xpFinalResult;
			//var expectedResources = expectedActionsRef.resFinalResult;

			// A bunch of shenanigans just so that we can calculate the offline actions accounting for Crown Actions
			let totalChanceToUseOffline = 1-masteryChance(skillMastery,chanceToKeepOffline);
			if (chargeUsesOffline >= recordCraft || chargeUsesOffline >= recordCraft/(totalChanceToUseOffline-RhaelyxChance)){
				totalChanceToUseOffline -= RhaelyxChance;
			} else {
				totalChanceToUseOffline = recordCraft / (chargeUsesOffline/(totalChanceToUseOffline-RhaelyxChance) + (recordCraft-chargeUsesOffline)/totalChanceToUseOffline);
			}
			var expectedActionsOffline = Math.floor(recordCraft / totalChanceToUseOffline);

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
			//console.log("timeLeft: "+timeLeft)
			//Time left if offline (no Mastery progression)
			var timeLeftOffline = expectedActionsOffline*skillInterval/1000;
			//console.log("timeLeftOffline: "+timeLeftOffline)
			//Global variables to keep track of when a craft is complete
			window.timeLeftLast = window.timeLeftGlobal;
			window.timeLeftGlobal = timeLeft;
			//Inject timeLeft HTML
			let timeLeftElement = document.getElementById(timeLeftID);
			if(timeLeftElement !== null) {
				if (timeLeft !== 0) {
					let finishedTime = AddSecondsToDate(now,timeLeft);
					let finishedTimeOffline = AddSecondsToDate(now,timeLeftOffline);
						// timeLeftElement.innerHTML = "Will take: " + secondsToHms(timeLeft) + "<br>Expected finished: " + DateFormat(finishedTime,timeLeft);
						$("#"+timeLeftID).text("Will take: " + secondsToHms(timeLeft) + "\nExpected finished: " + DateFormat(finishedTime,timeLeft));
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
						// $('#'+itemProduceID).attr('data-original-title', 'Offline: ' + expectedResourcesOffline + ' ' + createImg(item));
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

		// ## ALT MAGIC ##
		var selectMagicRef = selectMagic;
		window.selectMagic = function(...args) {
			selectMagicRef(...args);
			timeRemaining(selectedAltMagic,"AltMagic");
		};
		var selectItemForMagicRef = selectItemForMagic;
		window.selectItemForMagic = function(...args) {
			selectItemForMagicRef(...args);
			timeRemaining(selectedAltMagic,"AltMagic");
		};
		var castMagicRef = castMagic;
		window.castMagic = function(...args) {
			castMagicRef(...args);
			timeRemaining(selectedAltMagic,"AltMagic");
			taskComplete();
		};
	}

	function loadScript() {
		if (window.isLoaded || (typeof unsafeWindow !== 'undefined' && unsafeWindow.isLoaded)) {
			clearInterval(scriptLoader);
			injectScript(script);
		}
	}

	const scriptLoader = setInterval(loadScript, 200);
})();