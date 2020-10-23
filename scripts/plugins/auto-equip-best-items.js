SEMI.AutoEquipBestItems = (() => {
  const id = 'auto-equip-best-item';
  const title = 'AutoEquipBestItem (Beta)';
  const desc =
    'Automatically determines the item that is best for your current situation, such as xp items, or increased drops. This script is in beta, it may not include every item.';
  const imgSrc = 'assets/media/main/milestones_header.svg';

  const slotsWeWant = [0, 6, CONSTANTS.equipmentSlot.Ring, 8, 10];
  const slotsWeWantImg = {
    0: "assets/media/bank/armour_helmet.svg",  
    6: "assets/media/bank/misc_amulet.svg",
    7: "assets/media/bank/misc_ring.svg",
    8: "assets/media/bank/armour_gloves.svg",
    10: "assets/media/bank/armour_cape.svg"
  }
  let itemsBySlotConfig = {};

  // Default sorting to set our suggestions
  // Items missing from the list are appended to the end
  const itemsBySlotConfigDefault = {
    0: [],
    6: [],
    7: [CONSTANTS.item.Pirates_Lost_Ring, CONSTANTS.item.Ancient_Ring_Of_Skills, CONSTANTS.item.Aorpheats_Signet_Ring, CONSTANTS.item.Gold_Topaz_Ring, CONSTANTS.item.Gold_Emerald_Ring],
    8: [],
    10: []
  }

  const gatherItemData = () => {
    const itemsBySlot = {};
    for (var slot of slotsWeWant) {
      itemsBySlot[slot] = [];
    }

    let itemId = 0;
    for (var item of items) {
      if (Number.isInteger(item.equipmentSlot) && slotsWeWant.includes(item.equipmentSlot))
      {
        item.id = itemId;
        itemsBySlot[item.equipmentSlot].push(item);
      }
      itemId++;
    }

    loadConfig(itemsBySlot)
  }

  const loadConfig = (itemsBySlot) => {
    itemsBySlotConfig = SEMI.getItem(`${name}-config`);
    if (!itemsBySlotConfig) {
      itemsBySlotConfig = itemsBySlotConfigDefault;

      for (var slot of slotsWeWant) {
        for (var item of itemsBySlot[slot]) {
          if (!itemsBySlotConfig[slot].includes(item.id)) {
            itemsBySlotConfig[slot].push(item.id);
          }
        }
      }
      
    }
  }

  const getConfigMenu = () => {
    let configMenu = `<div id="auto-equip-best-item-tabs"><ul style="list-style-type: none;display:grid;grid-template-columns: repeat(${slotsWeWant.length}, 1fr);padding: 0rem;margin-bottom: 0rem;">`;
    
    for (var slot of slotsWeWant) {
      configMenu += getTabHeader(slot);
    }

    configMenu += `</ul>`;

    for (var slot of slotsWeWant) {
      configMenu += `<ul id="auto-equip-best-item-${slot}-list" style="list-style-type: none;display:grid;grid-template-columns: repeat(6, 1fr);padding: 1rem;border-color: #5179d6;border-radius: 0.25rem;border: 1px solid;margin-bottom: 1rem;">`;
      for (var itemId of itemsBySlotConfig[slot]) {
        configMenu += getItemButton(items[itemId]);
      }
      configMenu += `</ul>`;
    }
  
    return `${configMenu}</div>`;
  }

  const getTabHeader = (slot) => {
    return `<li><button type="button" id="auto-equip-best-item-tab-${slot}" class="btn btn-outline-primary" style="margin-bottom: 0;border-bottom: none;border-radius: .25rem .25rem 0 0;border-color: white;" onclick="SEMI.AutoEquipBestItems.swapTabs(${slot});"><img class="skill-icon-sm m-0" src="${slotsWeWantImg[slot]}"></button></li>`
  }

  const swapTabs = (slot) => {
    for (var s of slotsWeWant) {
      document.getElementById(`auto-equip-best-item-tab-${s}`).style['border-color'] = "white";
      $(`#auto-equip-best-item-${s}-list`).hide();
    }

    const btn = document.getElementById(`auto-equip-best-item-tab-${slot}`);
    if (btn) {
      btn.style['border-color'] = "#5179d6";
      $(`#auto-equip-best-item-${slot}-list`).show();
    } else {
      console.error("Invalid tab", slot);
    }
  }

  const getItemButton = (item) => {
    return `<li class="ui-state-default" data-id="${item.id}"><button type="button" id="auto-equip-best-item-id-${item.id}" class="btn btn-outline-primary m-1" onclick=""><img class="skill-icon-sm m-0" src="${item.media}"></button></li>`;
  }

  const onConfigMenuShown = (instance) => {
    for (var slot of slotsWeWant) {
      const element = document.getElementById(`auto-equip-best-item-${slot}-list`);
      if (element)
        Sortable.create(element);
    }

    swapTabs(7);
  }

  const saveConfig = () => {
    for (var slot of slotsWeWant) {
      const list = document.getElementById(`auto-equip-best-item-${slot}-list`);
      if (list) {
        itemsBySlotConfig[slot] = [];
        for (var element of list.children) {
          console.log(element);
          console.log(element.dataset.id);

          itemsBySlotConfig[slot].push(element.dataset.id);
        }
      }
    }
  }

  const skillChangeHandler = (prevSkillId, currentSkillId) => {
    if (!Boolean(SEMI.getItem(`${id}-status`))) {
      return;
    }

    const currentSkillName = SEMI.currentSkillName();
    const currentCombatSkill = SEMI.currentCombatSkillName();
    const isSkillMaxLevel = SEMI.isMaxLevel(currentSkillName);
    const isCombatMaxLevel = SEMI.isMaxLevel(currentCombatSkill) && SEMI.isMaxLevel('Hitpoints');

    console.log(prevSkillId, currentSkillId, currentSkillName, currentCombatSkill);
    // Cape Slot
    if (!SEMI.hasMaxCapeOn()) {
      if (SEMI.ownsMaxCape()) {
        SEMI.equipMaxCape();
      } else if (isInCombat) {
        if (SEMI.isMaxLevel(currentCombatSkill) && SEMI.isMaxLevel('Hitpoints')) {
          if (!SEMI.hasCapeOn(currentCombatSkill) && SEMI.ownsCape(currentCombatSkill)) {
            SEMI.equipFromBank(CONSTANTS.item[`${currentCombatSkill}`]);
          } else if (
            !SEMI.hasCapeOn(currentCombatSkill) &&
            !SEMI.hasCapeOn('Hitpoints') &&
            SEMI.ownsCape('Hitpoints')
          ) {
            SEMI.equipFromBank(CONSTANTS.item[`Hitpoints`]);
          }
        } else {
          if (!SEMI.hasCapeOn('Firemaking') && SEMI.ownsCape('Firemaking')) {
            SEMI.equipFromBank(CONSTANTS.item[`Firemaking_Skillcape`]);
          }
        }
      } else if (!SEMI.isMaxLevel(currentSkillName)) {
        if (!SEMI.hasCapeOn('Firemaking') && SEMI.ownsCape('Firemaking')) {
          SEMI.equipFromBank(CONSTANTS.item[`Firemaking_Skillcape`]);
        }
      } else {
        if (!SEMI.hasCapeOn(currentSkillName) && SEMI.ownsCape(currentSkillName)) {
          SEMI.equipFromBank(CONSTANTS.item[`${currentSkillName}_Skillcape`]);
        }
      }
    }

    // Hat Slot
    equipHatSlot(currentSkillId, currentSkillName, currentCombatSkill);
    // Gloves Slot
    equipGloves(currentSkillId, currentSkillName, currentCombatSkill);
    // Ring Slot
    // equipRingSlot(currentSkillId, currentSkillName, currentCombatSkill);
    for (var itemId of itemsBySlotConfig[CONSTANTS.equipmentSlot.Ring]) {
      if (canEquipRing(currentSkillId, itemId, isSkillMaxLevel)) {
        equipItem(itemId)
        break;
      }
    }
    

    // Necklace Slot
    if (isInCombat) {
      if (!equipItem(CONSTANTS.item.Amulet_of_Looting)) {
        equipItem(CONSTANTS.item.Clue_Chasers_Insignia);
      }
    } else {
      if (currentSkillName == 'Fishing') {
        if (!equipItem(CONSTANTS.item.Amulet_of_Fishing)) {
          equipItem(CONSTANTS.item.Clue_Chasers_Insignia);
        }
      } else {
        equipItem(CONSTANTS.item.Clue_Chasers_Insignia);
      }
    }
  };

  const equipGloves = (currentSkill, currentSkillName, currentCombatSkill) => {
    if (currentSkillName == 'Cooking') return equipItem(CONSTANTS.item.Cooking_Gloves);
    if (currentSkillName == 'Mining')
      return equipItem(CONSTANTS.item.Gem_Gloves) || equipItem(CONSTANTS.item.Mining_Gloves);
    if (currentSkillName == 'Smithing') return equipItem(CONSTANTS.item.Smithing_Gloves);
    if (currentSkillName == 'Thieving') return equipItem(CONSTANTS.item.Thieving_Gloves);
  };

  const equipHatSlot = (currentSkill, currentSkillName, currentCombatSkill) => {
    if (isInCombat) return;

    if (currentSkillName == 'Thieving' && equipItem(CONSTANTS.item.Chapeau_Noir)) return;

    equipItem(CONSTANTS.item.Crown_of_Rhaelyx);
  };

  const equipRingSlot = (currentSkill, currentSkillName, currentCombatSkill) => {
    if (isInCombat) {
      if (hasAorpRing(true)) {
        return equipItem(CONSTANTS.item.Aorpheats_Signet_Ring) || equipItem(CONSTANTS.item.Gold_Emerald_Ring);
      } else {
        return equipItem(CONSTANTS.item.Gold_Topaz_Ring) || equipItem(CONSTANTS.item.Gold_Emerald_Ring);
      }
    } else {
      if (
        !SEMI.isMaxLevel(currentSkillName) &&
        ((currentSkillName == 'Fishing' && equipItem(CONSTANTS.item.Pirates_Lost_Ring)) ||
          equipItem(CONSTANTS.item.Ancient_Ring_Of_Skills))
      ) {
        return;
      }
      if (hasAorpRing()) {
        return equipItem(CONSTANTS.item.Aorpheats_Signet_Ring) || equipItem(CONSTANTS.item.Gold_Emerald_Ring);
      }
    }
  };

  const canEquipRing = (currentSkill, itemId, isSkillMaxLevel) => {
    if (
      !checkBankForItem(itemId) && !equippedItems.includes(itemId)
    ) {
      return false;
    }

    switch (itemId) {
      case CONSTANTS.item.Pirates_Lost_Ring:
        return !isSkillMaxLevel && currentSkill == CONSTANTS.skill.Fishing;
      case CONSTANTS.item.Ancient_Ring_Of_Skills:
        return !isInCombat && !isSkillMaxLevel;
    }

    return true;
  };

  const equipItem = (itemId) => {
    if (equippedItems.includes(itemId)) {
      return true;
    }

    return SEMI.equipFromBank(itemId);
  };

  const hasAorpRing = (combat = false) => {
    if (
      checkBankForItem(CONSTANTS.item.Aorpheats_Signet_Ring) ||
      equippedItems.includes(CONSTANTS.item.Aorpheats_Signet_Ring)
    ) {
      return true;
    }

    if (combat) {
      return checkBankForItem(CONSTANTS.item.Signet_Ring_Half_B);
    }

    return checkBankForItem(CONSTANTS.item.Signet_Ring_Half_A);
  };

  gatherItemData();
  SEMI.EventBus.RegisterSkillChangeHandler({ HandleSkillChange: skillChangeHandler });
  SEMI.add(id, { title, desc, imgSrc, pluginType: SEMI.PLUGIN_TYPE.TWEAK, hasConfig: true, configMenu: getConfigMenu(), onConfigMenuShown, saveConfig });

  return {swapTabs}
})();
