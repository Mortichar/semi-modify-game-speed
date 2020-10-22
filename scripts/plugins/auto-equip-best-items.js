(() => {
  const id = 'auto-equip-best-item';
  const title = 'AutoEquipBestItem (Beta)';
  const desc =
    'Automatically determines the item that is best for your current situation, such as xp items, or increased drops. This script is in beta, it may not include every item.';
  const imgSrc = 'assets/media/main/milestones_header.svg';

  const skillChangeHandler = (prevSkillId, currentSkillId) => {
    if (!Boolean(SEMI.getItem(`${id}-status`))) {
      return;
    }

    const currentSkillName = SEMI.currentSkillName();
    const currentCombatSkill = SEMI.currentCombatSkillName();

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
    equipRingSlot(currentSkillId, currentSkillName, currentCombatSkill);

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

  SEMI.EventBus.RegisterSkillChangeHandler({ HandleSkillChange: skillChangeHandler });
  SEMI.add(id, { title, desc, imgSrc, pluginType: SEMI.PLUGIN_TYPE.TWEAK });
})();
