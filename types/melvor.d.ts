/**
 * @param {boolean} confirmation defaults to false
 */
declare function accountDeletion(confirmation?: boolean): void;

declare var accountGameVersion: number;

declare function activateEnemyBuffs(): void;

/**
 * @param {any} aurora
 */
declare function activatePlayerAurora(aurora: any): void;

/**
 * @param {any} tipID
 */
declare function activateTutorialTip(tipID: any): void;

declare var activeAurora: any;

declare var activePrayer: boolean[];

/**
 * @param {any} areaID
 * @param {any} patchID
 * @param {number} qty defaults to 1
 */
declare function addCompost(areaID: any, patchID: any, qty?: number): void;

/**
 * @param {any} areaID
 * @param {any} patchID
 */
declare function addGloop(areaID: any, patchID: any): void;

/**
 * @param {any} itemID
 * @param {any} quantity
 * @param {boolean} found defaults to true
 * @param {boolean} showNotification defaults to true
 * @param {boolean} ignoreBankSpace defaults to false
 */
declare function addItemToBank(
    itemID: any,
    quantity: any,
    found?: boolean,
    showNotification?: boolean,
    ignoreBankSpace?: boolean
): any;

/**
 * @param {any} itemID
 * @param {any} qty
 */
declare function addItemToGolbinInventory(itemID: any, qty: any): void;

/**
 * @param {any} itemID
 * @param {any} qty
 */
declare function addItemToVirtualBank(itemID: any, qty: any): any;

declare var addItemUpdateTimer: number;

/**
 * @param {any} skill
 * @param {any} masteryID
 * @param {number} qty defaults to 1
 */
declare function addMasteryXP(skill: any, masteryID: any, qty?: number): void;

/**
 * @param {any} skill
 * @param {any} xp
 */
declare function addXP(skill: any, xp: any): void;

/**
 * @param {any} skill
 * @param {any} xp
 */
declare function addXPBonuses(skill: any, xp: any): any;

declare var allButOne: boolean;

declare var allotmentSeeds: {
    itemID: number;
    level: number;
}[];

declare var allVars: string[];

declare var ALTMAGIC: {
    convertTo: number;
    convertToQty: number;
    description: string;
    effectValue?: number;
    ignoreCoal?: boolean;
    isAlch?: boolean;
    isJunk?: boolean;
    magicLevelRequired: number;
    magicXP: number;
    media: string;
    name: string;
    needCoal?: boolean;
    runesRequired: {
        id: number;
        qty: number;
    }[];
    runesRequiredAlt: {
        id: number;
        qty: number;
    }[];
    selectItem: number;
}[];

declare var ammo: number;

declare var ammoPreservation: number;

declare var announcementID: string;

/**
 * @param {any} bleedHPPerProc
 * @param {any} interval
 * @param {any} bleedCount
 */
declare function applyBleedToEnemy(bleedHPPerProc: any, interval: any, bleedCount: any): void;

declare function applyBurnToPlayer(): void;

/**
 * @param {any} curse
 * @param {number} forceTurns defaults to 3
 * @param {boolean} forceApply defaults to false
 */
declare function applyCurseToEnemy(curse: any, forceTurns?: number, forceApply?: boolean): void;

declare function applyDeathPenalty(): void;

declare var attackCount: number;

/**
 * @param {boolean} playerSpec defaults to false
 * @param {boolean} specID defaults to false
 * @param {boolean} canAncientAttack defaults to true
 * @param {boolean} useAncientRunes defaults to true
 */
declare function attackEnemy(
    playerSpec?: boolean,
    specID?: boolean,
    canAncientAttack?: boolean,
    useAncientRunes?: boolean
): void;

/**
 * @param {boolean} enemySpec defaults to false
 * @param {boolean} specID defaults to false
 */
declare function attackPlayer(enemySpec?: boolean, specID?: boolean): void;

declare var attackStyle: number;

declare var attackTimer: any;

declare var autoEatNotify: boolean;

declare var autoEatTier: number;

declare var autoPotion: boolean;

declare var autoRestartDungeon: boolean;

declare var autoSave: boolean;

declare var autoSaveCloud: boolean;

declare var autoSlayerTask: boolean;

declare var autoUseSpecialAttack: boolean;

declare var axeBonusSpeed: number[];

declare var backupSave: any;

declare var bank: {
    category: string;
    id: number;
    locked?: boolean;
    name: string;
    qty: number;
    type: string;
}[];

declare var bankBorder: number;

declare function bankFullNotify(): void;

declare var bankMax: number;

declare namespace bankUpgradeCost {
    /**
     * @param {any} gp
     */
    function equate(gp: any): any;

    /**
     * @param {any} gp
     */
    function gp_to_level(gp: any): any;

    /**
     * @param {any} level
     */
    function level_to_gp(level: any): any;
}

declare function barbarianAreaCheck(): void;

declare var baseBankMax: number;

declare var baseMaxHit: number;

declare var baseThievingInterval: number;

declare function begParentsForMBucksBecauseImBrokeAndCantAffordToBuyItInTheP2WShopEvenThoughIShouldProbablyMakeDragonJavsForMoneyOhWaitLol(): void;

declare var birthday: boolean;

declare var bleedMultiplier: number;

declare var bonfireBonus: number;

declare function buildGolbinItemSelection(): void;

declare var burnInterval: any;

/**
 * @param {boolean} ignore defaults to true
 */
declare function burnLog(ignore?: boolean): any;

/**
 * @param {any} bankID
 * @param {any} itemID
 * @param {any} qty
 */
declare function buryItem(bankID: any, itemID: any, qty: any): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function buyBowstring(confirmed?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function buyCompost(confirmed?: boolean): void;

/**
 * @param {any} dhide
 * @param {boolean} confirmed defaults to false
 */
declare function buyDhide(dhide: any, confirmed?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function buyFeathers(confirmed?: boolean): void;

/**
 * @param {any} gloves
 * @param {boolean} confirmed defaults to false
 */
declare function buyGloves(gloves: any, confirmed?: boolean): void;

/**
 * @param {any} id
 * @param {boolean} confirmed defaults to false
 */
declare function buyGodUpgrade(id: any, confirmed?: boolean): void;

/**
 * @param {any} itemID
 * @param {boolean} confirmed defaults to false
 */
declare function buyItem(itemID: any, confirmed?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function buyLeather(confirmed?: boolean): void;

/**
 * @param {any} qty
 */
declare function buyMbucks(qty: any): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function buyPartyHat(confirmed?: boolean): void;

declare var buyQty: number;

/**
 * @param {any} cape
 * @param {boolean} confirmed defaults to false
 */
declare function buySkillcape(cape: any, confirmed?: boolean): void;

/**
 * @param {any} itemID
 * @param {boolean} confirmed defaults to false
 */
declare function buySlayerItem(itemID: any, confirmed?: boolean): void;

/**
 * @param {string} enemy defaults to enemyInCombat
 */
declare function calculateEnemyAccuracy(enemy?: string): void;

/**
 * @param {string} enemy defaults to enemyInCombat
 */
declare function calculateEnemyDefence(enemy?: string): void;

/**
 * @param {string} enemy defaults to enemyInCombat
 */
declare function calculateEnemyStrength(enemy?: string): void;

declare function canMineDragonite(): any;

declare var caseInventory: any[];

/**
 * @param {boolean} clicked defaults to false
 */
declare function castMagic(clicked?: boolean): void;

declare var chanceToDoubleLoot: number;

/**
 * @param {any} menu
 */
declare function changeCombatMenu(menu: any): void;

declare function changeName(): void;

/**
 * @param {any} page
 * @param {boolean} gameLoading defaults to false
 * @param {boolean} toggleSidebar defaults to true
 */
declare function changePage(page: any, gameLoading?: boolean, toggleSidebar?: boolean): void;

/**
 * @param {any} setting
 * @param {any} value
 * @param {boolean} ignore defaults to false
 */
declare function changeSetting(setting: any, value: any, ignore?: boolean): void;

declare var characterLoading: boolean;

declare var characterSelected: boolean;

/**
 * @param {any} itemID
 */
declare function checkBankForItem(itemID: any): any;

/**
 * @param {any} check
 */
declare function checkCombatStatus(check: any): any;

declare function checkConnectionToCloud(): void;

/**
 * @param {any} itemID
 */
declare function checkCraftingReq(itemID: any): any;

/**
 * @param {any} itemID
 * @param {number} fletchLog defaults to 0
 * @param {boolean} offline defaults to false
 */
declare function checkFletchingReq(itemID: any, fletchLog?: number, offline?: boolean): any;

/**
 * @param {any} food
 */
declare function checkFoodExists(food: any): any;

declare function checkGameVersion(): void;

/**
 * @param {any} itemID
 */
declare function checkHerbloreReq(itemID: any): any;

/**
 * @param {any} log
 */
declare function checkLogExists(log: any): any;

declare function checkPatreon(): void;

declare function checkReadyToHarvest(): void;

declare function checkRhaelyx(): any;

/**
 * @param {any} spellbook
 * @param {any} spell
 * @param {boolean} useRunes defaults to true
 */
declare function checkRuneCount(spellbook: any, spell: any, useRunes?: boolean): any;

/**
 * @param {any} itemID
 */
declare function checkRunecraftingReq(itemID: any): any;

/**
 * @param {any} save
 */
declare function checkSaveBackupVersion(save: any): any;

/**
 * @param {any} itemID
 * @param {boolean} ignoreCoal defaults to false
 */
declare function checkSmithingReq(itemID: any, ignoreCoal?: boolean): any;

declare function checkTestAccess(): void;

declare function checkTestAccessPatreon(): any;

/**
 * @param {any} bankID
 * @param {any} itemID
 */
declare function claimBankToken(bankID: any, itemID: any): void;

declare function claimBirthdayToken(): void;

/**
 * @param {any} bankID
 * @param {any} itemID
 * @param {boolean} all defaults to false
 */
declare function claimToken(bankID: any, itemID: any, all?: boolean): void;

declare function clearBankSearch(): void;

declare function clearItemInView(): void;

declare function clearLoot(): void;

declare function clearOffline(): void;

declare var cloudCheck: boolean;

declare var cloudSave: any;

declare var cloudSaveTimer: any;

declare var cloudSync: any;

declare var clueHuntStarted: boolean;

declare var clueProgress: number[];

declare var cluesCompleted: boolean[];

/**
 * @param {boolean} offline defaults to false
 */
declare function collectGem(offline?: boolean): any;

/**
 * @param {any} lootID
 * @param {any} itemID
 * @param {any} qty
 */
declare function collectLoot(lootID: any, itemID: any, qty: any): void;

declare var combatAreas: {
    areaName: string;
    difficulty: number[];
    media: string;
    monsters: number[];
    slayerItem: number;
    type: string;
}[];

declare var combatData: {
    enemy: {
        activeBuffs: boolean;
        attackBonus: number;
        attackLevel: number;
        attackSpeed: number;
        attackSpeedDebuff: number;
        attackSpeedDebuffTurns: number;
        attackType: number;
        baseAttackSpeed: number;
        buffTurns: number;
        curseTurnsLeft: number;
        damageReduction: number;
        decreasedRangedEvasion: number;
        defenceBonus: number;
        defenceBonusMagic: number;
        defenceBonusRanged: number;
        defenceLevel: number;
        effectiveAttackLevel: number;
        effectiveDefenceLevel: number;
        effectiveMagicDefenceLevel: number;
        effectiveRangedDefenceLevel: number;
        effectiveStrengthLevel: number;
        extraDamageMultiplier: number;
        hasSpecialAttack: boolean;
        hitpoints: number;
        id: number;
        increasedMagicEvasion: any;
        increasedMeleeEvasion: any;
        increasedRangedEvasion: any;
        isBleeding: boolean;
        isCursed: boolean;
        magicLevel: number;
        maxHitpoints: number;
        maximumAttackRoll: number;
        maximumDefenceRoll: number;
        maximumMagicDefenceRoll: number;
        maximumRangedDefenceRoll: number;
        maximumStrengthRoll: number;
        rangedLevel: number;
        reflectMagic: any;
        reflectMelee: any;
        reflectRanged: any;
        specialAttackChances: any[];
        specialAttackID: any;
        strengthBonus: number;
        strengthLevel: number;
        stunTurns: number;
        stunned: boolean;
    };
    player: {
        attackSpeedDebuff: number;
        attackSpeedDebuffTurns: number;
        baseAttackSpeed: number;
        burnDebuff: number;
        hitpoints: number;
        increasedDamageReduction: number;
        isBurning: boolean;
        stunTurns: number;
        stunned: boolean;
    };
};

declare var combatLevel: number;

declare var combatMenu: boolean;

declare function compostAll(): void;

declare var confirmationOnClose: boolean;

declare function confirmLoadLocalSave(): void;

/**
 * @param {any} itemID
 * @param {any} upgradeItemID
 * @param {number} qty defaults to 1
 */
declare function confirmUpgradeItem(itemID: any, upgradeItemID: any, qty?: number): void;

/**
 * @param {any} itemID
 * @param {any} upgradeItemID
 */
declare function confirmUpgradeItemAll(itemID: any, upgradeItemID: any): void;

declare var connectedToCloud: boolean;

declare var connectedToPlayFab: boolean;

declare var CONSTANTS: {
    attackStyle: {
        Accurate: number;
        Block: number;
        Defensive: number;
        Longrange: number;
        Magic: number;
        Rapid: number;
        Slash: number;
        Stab: number;
    };
    attackType: {
        Magic: number;
        Melee: number;
        Ranged: number;
    };
    aurora: {
        Charged_I: number;
        Charged_II: number;
        Charged_III: number;
        Fervor_I: number;
        Fervor_II: number;
        Fervor_III: number;
        Fury_I: number;
        Fury_II: number;
        Fury_III: number;
        Surge_I: number;
        Surge_II: number;
        Surge_III: number;
    };
    axe: {
        Adamant: number;
        Black: number;
        Bronze: number;
        Dragon: number;
        Iron: number;
        Mithril: number;
        Rune: number;
        Steel: number;
    };
    bones: {
        Bones: number;
        Dragon_Bones: number;
        Magic_Bones: number;
    };
    combatArea: {
        Bandit_Hideout: number;
        Castle_of_Kings: number;
        Dragon_Valley: number;
        Farmlands: number;
        Giant_Dungeon: number;
        Goblin_Village: number;
        Graveyard: number;
        Icy_Hills: number;
        Sandy_Shores: number;
        Wet_Forest: number;
        Wizard_Tower: number;
    };
    curse: {
        Anguish_I: number;
        Anguish_II: number;
        Anguish_III: number;
        Blinding_I: number;
        Blinding_II: number;
        Blinding_III: number;
        Confusion: number;
        Decay: number;
        Soul_Split_I: number;
        Soul_Split_II: number;
        Soul_Split_III: number;
        Weakening_I: number;
        Weakening_II: number;
        Weakening_III: number;
    };
    dungeon: {
        Air_God_Dungeon: number;
        Bandit_Base: number;
        Chicken_Coop: number;
        Deep_Sea_Ship: number;
        Dragons_Den: number;
        Earth_God_Dungeon: number;
        Fire_God_Dungeon: number;
        Frozen_Cove: number;
        Hall_of_Wizards: number;
        Spider_Forest: number;
        Trial_of_Destiny: number;
        Undead_Graveyard: number;
        Volcanic_Cave: number;
        Water_God_Dungeon: number;
    };
    equipmentSlot: {
        Amulet: number;
        Boots: number;
        Cape: number;
        Gloves: number;
        Helmet: number;
        Platebody: number;
        Platelegs: number;
        Quiver: number;
        Ring: number;
        Shield: number;
        Weapon: number;
    };
    fishingRod: {
        Adamant: number;
        Black: number;
        Bronze: number;
        Dragon: number;
        Iron: number;
        Mithril: number;
        Rune: number;
        Steel: number;
    };
    item: {
        Adamant_2H_Sword: number;
        Adamant_Arrows: number;
        Adamant_Arrowtips: number;
        Adamant_Battleaxe: number;
        Adamant_Boots: number;
        Adamant_Boots_T_G: number;
        Adamant_Boots_T_S: number;
        Adamant_Crossbow: number;
        Adamant_Crossbow_Head: number;
        Adamant_Dagger: number;
        Adamant_Gloves: number;
        Adamant_Helmet: number;
        Adamant_Helmet_T_G: number;
        Adamant_Helmet_T_S: number;
        Adamant_Javelin: number;
        Adamant_Javelin_Heads: number;
        Adamant_Platebody: number;
        Adamant_Platebody_T_G: number;
        Adamant_Platebody_T_S: number;
        Adamant_Platelegs: number;
        Adamant_Platelegs_T_G: number;
        Adamant_Platelegs_T_S: number;
        Adamant_Scimitar: number;
        Adamant_Shield: number;
        Adamant_Shield_T_G: number;
        Adamant_Shield_T_S: number;
        Adamant_Sword: number;
        Adamant_Throwing_Knife: number;
        Adamantite_Bar: number;
        Adamantite_Ore: number;
        Aeris_God_Boots: number;
        Aeris_God_Gloves: number;
        Aeris_God_Helmet: number;
        Aeris_God_Platebody: number;
        Aeris_God_Platelegs: number;
        Aeris_Godsword: number;
        Air_Acolyte_Wizard_Boots: number;
        Air_Acolyte_Wizard_Bottoms: number;
        Air_Acolyte_Wizard_Hat: number;
        Air_Acolyte_Wizard_Robes: number;
        Air_Adept_Wizard_Boots: number;
        Air_Adept_Wizard_Bottoms: number;
        Air_Adept_Wizard_Hat: number;
        Air_Adept_Wizard_Robes: number;
        Air_Battlestaff: number;
        Air_Chest: number;
        Air_Expert_Wizard_Boots: number;
        Air_Expert_Wizard_Bottoms: number;
        Air_Expert_Wizard_Hat: number;
        Air_Expert_Wizard_Robes: number;
        Air_Imbued_Wand: number;
        Air_Rune: number;
        Air_Shard: number;
        Amulet_of_Accuracy: number;
        Amulet_of_Calculated_Promotion: number;
        Amulet_of_Defence: number;
        Amulet_of_Fishing: number;
        Amulet_of_Fury: number;
        Amulet_of_Glory: number;
        Amulet_of_Looting: number;
        Amulet_of_Magic: number;
        Amulet_of_Ranged: number;
        Amulet_of_Strength: number;
        Amulet_of_Torture: number;
        Ancient_2H_Sword: number;
        Ancient_Arrow: number;
        Ancient_Claw: number;
        Ancient_Claw_Fragment: number;
        Ancient_Crossbow: number;
        Ancient_Dhide_Body: number;
        Ancient_Dhide_Body_U: number;
        Ancient_Dhide_Chaps: number;
        Ancient_Dhide_Chaps_U: number;
        Ancient_Dhide_Shield: number;
        Ancient_Dhide_Shield_U: number;
        Ancient_Dhide_Vambraces: number;
        Ancient_Dhide_Vambraces_U: number;
        Ancient_Helmet: number;
        Ancient_Helmet_T_G: number;
        Ancient_Helmet_T_S: number;
        Ancient_Javelin: number;
        Ancient_Longbow: number;
        Ancient_Platebody: number;
        Ancient_Platebody_T_G: number;
        Ancient_Platebody_T_S: number;
        Ancient_Platelegs: number;
        Ancient_Platelegs_T_G: number;
        Ancient_Platelegs_T_S: number;
        Ancient_Ring_Of_Skills: number;
        Ancient_Rune: number;
        Ancient_Shield: number;
        Ancient_Shield_T_G: number;
        Ancient_Shield_T_S: number;
        Ancient_Sword: number;
        Ancient_Throwing_Knife: number;
        Ancient_Wizard_Boots: number;
        Ancient_Wizard_Bottoms: number;
        Ancient_Wizard_Hat: number;
        Ancient_Wizard_Robes: number;
        Anglerfish: number;
        Aorpheats_Signet_Ring: number;
        Arrow_Shafts: number;
        Attack_Skillcape: number;
        Bandit_Chest: number;
        Bank_Slot_Token: number;
        Barbarian_Gloves: number;
        Barrentoe_Herb: number;
        Barrentoe_Seed: number;
        Big_Bones: number;
        Big_Ron: number;
        Bird_Nest: number;
        Bird_Nest_Potion_I: number;
        Bird_Nest_Potion_II: number;
        Bird_Nest_Potion_III: number;
        Bird_Nest_Potion_IV: number;
        Birthday_Cake: number;
        Birthday_Token: number;
        Black_2H_Sword: number;
        Black_Battleaxe: number;
        Black_Boots: number;
        Black_Boots_T_G: number;
        Black_Boots_T_S: number;
        Black_Dagger: number;
        Black_Dhide_Body: number;
        Black_Dhide_Body_U: number;
        Black_Dhide_Chaps: number;
        Black_Dhide_Chaps_U: number;
        Black_Dhide_Shield: number;
        Black_Dhide_Shield_U: number;
        Black_Dhide_Vambraces: number;
        Black_Dhide_Vambraces_U: number;
        Black_Dragonhide: number;
        Black_Helmet: number;
        Black_Helmet_T_G: number;
        Black_Helmet_T_S: number;
        Black_Platebody: number;
        Black_Platebody_T_G: number;
        Black_Platebody_T_S: number;
        Black_Platelegs: number;
        Black_Platelegs_T_G: number;
        Black_Platelegs_T_S: number;
        Black_Scimitar: number;
        Black_Shield: number;
        Black_Shield_T_G: number;
        Black_Shield_T_S: number;
        Black_Sword: number;
        Black_Wizard_Boots: number;
        Black_Wizard_Bottoms: number;
        Black_Wizard_Hat: number;
        Black_Wizard_Robes: number;
        Blazing_Lantern: number;
        Blood_Rune: number;
        Blue_Dhide_Body: number;
        Blue_Dhide_Body_U: number;
        Blue_Dhide_Chaps: number;
        Blue_Dhide_Chaps_U: number;
        Blue_Dhide_Shield: number;
        Blue_Dhide_Shield_U: number;
        Blue_Dhide_Vambraces: number;
        Blue_Dhide_Vambraces_U: number;
        Blue_Dragonhide: number;
        Blue_Wizard_Boots: number;
        Blue_Wizard_Bottoms: number;
        Blue_Wizard_Hat: number;
        Blue_Wizard_Robes: number;
        Bobbys_Pocket: number;
        Bobs_Rake: number;
        Body_Rune: number;
        Bone_Necklace: number;
        Bones: number;
        Book_of_Eli: number;
        Bowstring: number;
        Bronze_2H_Sword: number;
        Bronze_Arrows: number;
        Bronze_Arrowtips: number;
        Bronze_Bar: number;
        Bronze_Battleaxe: number;
        Bronze_Boots: number;
        Bronze_Boots_T_G: number;
        Bronze_Boots_T_S: number;
        Bronze_Crossbow: number;
        Bronze_Crossbow_Head: number;
        Bronze_Dagger: number;
        Bronze_Gloves: number;
        Bronze_Helmet: number;
        Bronze_Helmet_T_G: number;
        Bronze_Helmet_T_S: number;
        Bronze_Javelin: number;
        Bronze_Javelin_Heads: number;
        Bronze_Platebody: number;
        Bronze_Platebody_T_G: number;
        Bronze_Platebody_T_S: number;
        Bronze_Platelegs: number;
        Bronze_Platelegs_T_G: number;
        Bronze_Platelegs_T_S: number;
        Bronze_Scimitar: number;
        Bronze_Shield: number;
        Bronze_Shield_T_G: number;
        Bronze_Shield_T_S: number;
        Bronze_Sword: number;
        Bronze_Throwing_Knife: number;
        Burnt_Anglerfish: number;
        Burnt_Carp: number;
        Burnt_Cave_Fish: number;
        Burnt_Crab: number;
        Burnt_Fanfish: number;
        Burnt_Herring: number;
        Burnt_Lobster: number;
        Burnt_Manta_Ray: number;
        Burnt_Salmon: number;
        Burnt_Sardine: number;
        Burnt_Seahorse: number;
        Burnt_Shark: number;
        Burnt_Shrimp: number;
        Burnt_Swordfish: number;
        Burnt_Trout: number;
        Burnt_Whale: number;
        Cabbage: number;
        Cabbage_Seed: number;
        Cake_Base: number;
        Candle: number;
        Cape_Of_Prat: number;
        Cape_of_Arrow_Preservation: number;
        Carp: number;
        Carrot: number;
        Carrot_Seeds: number;
        Cave_Fish: number;
        Chaos_Rune: number;
        Chapeau_Noir: number;
        Charge_Stone_of_Rhaelyx: number;
        Chest_of_Witwix: number;
        Circlet_of_Rhaelyx: number;
        Climbing_Boots: number;
        Cloudburst_Staff: number;
        Clue_Chasers_Insignia: number;
        Coal_Ore: number;
        Compost: number;
        Confetti_Crossbow: number;
        Controlled_Heat_Potion_I: number;
        Controlled_Heat_Potion_II: number;
        Controlled_Heat_Potion_III: number;
        Controlled_Heat_Potion_IV: number;
        Cooking_Gloves: number;
        Cooking_Skillcape: number;
        Copper_Ore: number;
        Crab: number;
        Crafting_Potion_I: number;
        Crafting_Potion_II: number;
        Crafting_Potion_III: number;
        Crafting_Potion_IV: number;
        Crafting_Skillcape: number;
        Crown_of_Rhaelyx: number;
        Damage_Reduction_Potion_I: number;
        Damage_Reduction_Potion_II: number;
        Damage_Reduction_Potion_III: number;
        Damage_Reduction_Potion_IV: number;
        Deadeye_Amulet: number;
        Deadeye_Ring: number;
        Death_Rune: number;
        Defence_Skillcape: number;
        Desert_Hat: number;
        Diamond: number;
        Diamond_Bolts: number;
        Diamond_Luck_Potion_I: number;
        Diamond_Luck_Potion_II: number;
        Diamond_Luck_Potion_III: number;
        Diamond_Luck_Potion_IV: number;
        Divine_Potion_I: number;
        Divine_Potion_II: number;
        Divine_Potion_III: number;
        Divine_Potion_IV: number;
        Dragon_2H_Sword: number;
        Dragon_Arrows: number;
        Dragon_Arrowtips: number;
        Dragon_Battleaxe: number;
        Dragon_Bones: number;
        Dragon_Boots: number;
        Dragon_Boots_T_G: number;
        Dragon_Boots_T_S: number;
        Dragon_Claw: number;
        Dragon_Claw_Fragment: number;
        Dragon_Crossbow: number;
        Dragon_Crossbow_Head: number;
        Dragon_Dagger: number;
        Dragon_Gloves: number;
        Dragon_Helmet: number;
        Dragon_Helmet_T_G: number;
        Dragon_Helmet_T_S: number;
        Dragon_Javelin: number;
        Dragon_Javelin_Heads: number;
        Dragon_Platebody: number;
        Dragon_Platebody_T_G: number;
        Dragon_Platebody_T_S: number;
        Dragon_Platelegs: number;
        Dragon_Platelegs_T_G: number;
        Dragon_Platelegs_T_S: number;
        Dragon_Scimitar: number;
        Dragon_Shield: number;
        Dragon_Shield_T_G: number;
        Dragon_Shield_T_S: number;
        Dragon_Sword: number;
        Dragon_Throwing_Knife: number;
        Dragonfire_Shield: number;
        Dragonite_Bar: number;
        Dragonite_Ore: number;
        Dust_Rune: number;
        Earth_Acolyte_Wizard_Boots: number;
        Earth_Acolyte_Wizard_Bottoms: number;
        Earth_Acolyte_Wizard_Hat: number;
        Earth_Acolyte_Wizard_Robes: number;
        Earth_Adept_Wizard_Boots: number;
        Earth_Adept_Wizard_Bottoms: number;
        Earth_Adept_Wizard_Hat: number;
        Earth_Adept_Wizard_Robes: number;
        Earth_Battlestaff: number;
        Earth_Chest: number;
        Earth_Expert_Wizard_Boots: number;
        Earth_Expert_Wizard_Bottoms: number;
        Earth_Expert_Wizard_Hat: number;
        Earth_Expert_Wizard_Robes: number;
        Earth_Imbued_Wand: number;
        Earth_Layered_Shield: number;
        Earth_Rune: number;
        Earth_Shard: number;
        Egg_Chest: number;
        Eight: number;
        Elder_Chest: number;
        Elder_Dragonhide: number;
        Elemental_Potion_I: number;
        Elemental_Potion_II: number;
        Elemental_Potion_III: number;
        Elemental_Potion_IV: number;
        Elite_Amulet_of_Accuracy: number;
        Elite_Amulet_of_Defence: number;
        Elite_Amulet_of_Glory: number;
        Elite_Amulet_of_Magic: number;
        Elite_Amulet_of_Ranged: number;
        Elite_Amulet_of_Strength: number;
        Elite_Chest: number;
        Emerald: number;
        Emerald_Bolts: number;
        Enchanted_Cape: number;
        Enchanted_Shield: number;
        Event_Clue_1: number;
        Event_Clue_2: number;
        Event_Clue_3: number;
        Event_Clue_4: number;
        Eyeball: number;
        Fanfish: number;
        Farming_Potion_I: number;
        Farming_Potion_II: number;
        Farming_Potion_III: number;
        Farming_Potion_IV: number;
        Farming_Skillcape: number;
        Feathers: number;
        Fighter_Amulet: number;
        Fighter_Ring: number;
        Fire_Acolyte_Wizard_Boots: number;
        Fire_Acolyte_Wizard_Bottoms: number;
        Fire_Acolyte_Wizard_Hat: number;
        Fire_Acolyte_Wizard_Robes: number;
        Fire_Adept_Wizard_Boots: number;
        Fire_Adept_Wizard_Bottoms: number;
        Fire_Adept_Wizard_Hat: number;
        Fire_Adept_Wizard_Robes: number;
        Fire_Battlestaff: number;
        Fire_Cape: number;
        Fire_Chest: number;
        Fire_Expert_Wizard_Boots: number;
        Fire_Expert_Wizard_Bottoms: number;
        Fire_Expert_Wizard_Hat: number;
        Fire_Expert_Wizard_Robes: number;
        Fire_Imbued_Wand: number;
        Fire_Rune: number;
        Fire_Shard: number;
        Firemaking_Skillcape: number;
        Fishermans_Potion_I: number;
        Fishermans_Potion_II: number;
        Fishermans_Potion_III: number;
        Fishermans_Potion_IV: number;
        Fishing_Skillcape: number;
        Fletching_Potion_I: number;
        Fletching_Potion_II: number;
        Fletching_Potion_III: number;
        Fletching_Potion_IV: number;
        Fletching_Skillcape: number;
        Frozen_Chest: number;
        Fury_of_the_Elemental_Zodiac: number;
        Garum_Herb: number;
        Garum_Seed: number;
        Gem_Gloves: number;
        Generous_Cook_Potion_I: number;
        Generous_Cook_Potion_II: number;
        Generous_Cook_Potion_III: number;
        Generous_Cook_Potion_IV: number;
        Gentle_Hands_Potion_I: number;
        Gentle_Hands_Potion_II: number;
        Gentle_Hands_Potion_III: number;
        Gentle_Hands_Potion_IV: number;
        Glacia_God_Boots: number;
        Glacia_God_Gloves: number;
        Glacia_God_Helmet: number;
        Glacia_God_Platebody: number;
        Glacia_God_Platelegs: number;
        Glacia_Godsword: number;
        Glass_Bottle: number;
        Gold_Bar: number;
        Gold_Diamond_Necklace: number;
        Gold_Diamond_Ring: number;
        Gold_Emerald_Necklace: number;
        Gold_Emerald_Ring: number;
        Gold_Ore: number;
        Gold_Ruby_Necklace: number;
        Gold_Ruby_Ring: number;
        Gold_Sapphire_Necklace: number;
        Gold_Sapphire_Ring: number;
        Gold_Topaz_Necklace: number;
        Gold_Topaz_Ring: number;
        Green_Dhide_Body: number;
        Green_Dhide_Body_U: number;
        Green_Dhide_Chaps: number;
        Green_Dhide_Chaps_U: number;
        Green_Dhide_Shield: number;
        Green_Dhide_Shield_U: number;
        Green_Dhide_Vambraces: number;
        Green_Dhide_Vambraces_U: number;
        Green_Dragonhide: number;
        Green_Wizard_Boots: number;
        Green_Wizard_Bottoms: number;
        Green_Wizard_Hat: number;
        Green_Wizard_Robes: number;
        Guardian_Amulet: number;
        Guardian_Ring: number;
        Hard_Leather_Body: number;
        Hard_Leather_Boots: number;
        Hard_Leather_Chaps: number;
        Hard_Leather_Cowl: number;
        Hard_Leather_Gloves: number;
        Hard_Leather_Vambraces: number;
        Havoc_Rune: number;
        Headless_Arrows: number;
        Headless_Bolts: number;
        Herb_Sack: number;
        Herblore_Potion_I: number;
        Herblore_Potion_II: number;
        Herblore_Potion_III: number;
        Herblore_Potion_IV: number;
        Herblore_Skillcape: number;
        Herring: number;
        Hitpoints_Skillcape: number;
        Holy_Dust: number;
        Ice_2h_Sword: number;
        Ice_Arrows: number;
        Ice_Battleaxe: number;
        Ice_Boots: number;
        Ice_Dagger: number;
        Ice_Helmet: number;
        Ice_Longbow: number;
        Ice_Platebody: number;
        Ice_Platelegs: number;
        Ice_Shield: number;
        Ice_Shortbow: number;
        Ice_Sword: number;
        Iron_2H_Sword: number;
        Iron_Arrows: number;
        Iron_Arrowtips: number;
        Iron_Bar: number;
        Iron_Battleaxe: number;
        Iron_Boots: number;
        Iron_Boots_T_G: number;
        Iron_Boots_T_S: number;
        Iron_Crossbow: number;
        Iron_Crossbow_Head: number;
        Iron_Dagger: number;
        Iron_Gloves: number;
        Iron_Helmet: number;
        Iron_Helmet_T_G: number;
        Iron_Helmet_T_S: number;
        Iron_Javelin: number;
        Iron_Javelin_Heads: number;
        Iron_Ore: number;
        Iron_Platebody: number;
        Iron_Platebody_T_G: number;
        Iron_Platebody_T_S: number;
        Iron_Platelegs: number;
        Iron_Platelegs_T_G: number;
        Iron_Platelegs_T_S: number;
        Iron_Scimitar: number;
        Iron_Shield: number;
        Iron_Shield_T_G: number;
        Iron_Shield_T_S: number;
        Iron_Sword: number;
        Iron_Throwing_Knife: number;
        Jewel_of_Rhaelyx: number;
        Large_Horn: number;
        Lava_Rune: number;
        Leaping_Broad_Fish: number;
        Leaping_Salmon: number;
        Leaping_Trout: number;
        Leather: number;
        Leather_Body: number;
        Leather_Boots: number;
        Leather_Chaps: number;
        Leather_Cowl: number;
        Leather_Gloves: number;
        Leather_Vambraces: number;
        Lemon: number;
        Lemonade: number;
        Lemons: number;
        Lemontyle_Herb: number;
        Lemontyle_Seed: number;
        Light_Rune: number;
        Lobster: number;
        Lucky_Herb_Potion_I: number;
        Lucky_Herb_Potion_II: number;
        Lucky_Herb_Potion_III: number;
        Lucky_Herb_Potion_IV: number;
        Magic_Assistance_Potion_I: number;
        Magic_Assistance_Potion_II: number;
        Magic_Assistance_Potion_III: number;
        Magic_Assistance_Potion_IV: number;
        Magic_Bones: number;
        Magic_Chest: number;
        Magic_Damage_Potion_I: number;
        Magic_Damage_Potion_II: number;
        Magic_Damage_Potion_III: number;
        Magic_Damage_Potion_IV: number;
        Magic_Logs: number;
        Magic_Longbow: number;
        Magic_Longbow_U: number;
        Magic_Shortbow: number;
        Magic_Shortbow_U: number;
        Magic_Skillcape: number;
        Magic_Tree_Seed: number;
        Magic_Wand_Basic: number;
        Magic_Wand_Elite: number;
        Magic_Wand_Powerful: number;
        Magical_Flavouring: number;
        Magical_Icing: number;
        Magical_Ring: number;
        Mahogany_Logs: number;
        Manta_Ray: number;
        Mantalyme_Herb: number;
        Mantalyme_Seed: number;
        Maple_Logs: number;
        Maple_Longbow: number;
        Maple_Longbow_U: number;
        Maple_Shortbow: number;
        Maple_Shortbow_U: number;
        Maple_Tree_Seed: number;
        Mastery_Token_Cooking: number;
        Mastery_Token_Crafting: number;
        Mastery_Token_Farming: number;
        Mastery_Token_Firemaking: number;
        Mastery_Token_Fishing: number;
        Mastery_Token_Fletching: number;
        Mastery_Token_Herblore: number;
        Mastery_Token_Mining: number;
        Mastery_Token_Runecrafting: number;
        Mastery_Token_Smithing: number;
        Mastery_Token_Thieving: number;
        Mastery_Token_Woodcutting: number;
        Max_Skillcape: number;
        Melee_Accuracy_Potion_I: number;
        Melee_Accuracy_Potion_II: number;
        Melee_Accuracy_Potion_III: number;
        Melee_Accuracy_Potion_IV: number;
        Melee_Evasion_Potion_I: number;
        Melee_Evasion_Potion_II: number;
        Melee_Evasion_Potion_III: number;
        Melee_Evasion_Potion_IV: number;
        Melee_Strength_Potion_I: number;
        Melee_Strength_Potion_II: number;
        Melee_Strength_Potion_III: number;
        Melee_Strength_Potion_IV: number;
        Message_In_A_Bottle: number;
        Mind_Rune: number;
        Mining_Gloves: number;
        Mining_Skillcape: number;
        Mirror_Shield: number;
        Mist_Rune: number;
        Mithril_2H_Sword: number;
        Mithril_Arrows: number;
        Mithril_Arrowtips: number;
        Mithril_Bar: number;
        Mithril_Battleaxe: number;
        Mithril_Boots: number;
        Mithril_Boots_T_G: number;
        Mithril_Boots_T_S: number;
        Mithril_Crossbow: number;
        Mithril_Crossbow_Head: number;
        Mithril_Dagger: number;
        Mithril_Gloves: number;
        Mithril_Helmet: number;
        Mithril_Helmet_T_G: number;
        Mithril_Helmet_T_S: number;
        Mithril_Javelin: number;
        Mithril_Javelin_Heads: number;
        Mithril_Ore: number;
        Mithril_Platebody: number;
        Mithril_Platebody_T_G: number;
        Mithril_Platebody_T_S: number;
        Mithril_Platelegs: number;
        Mithril_Platelegs_T_G: number;
        Mithril_Platelegs_T_S: number;
        Mithril_Scimitar: number;
        Mithril_Shield: number;
        Mithril_Shield_T_G: number;
        Mithril_Shield_T_S: number;
        Mithril_Sword: number;
        Mithril_Throwing_Knife: number;
        Mud_Rune: number;
        Mysterious_Stone: number;
        Mystic_Air_Staff: number;
        Mystic_Earth_Staff: number;
        Mystic_Fire_Staff: number;
        Mystic_Water_Staff: number;
        Nature_Rune: number;
        Normal_Logs: number;
        Normal_Longbow: number;
        Normal_Longbow_U: number;
        Normal_Shortbow: number;
        Normal_Shortbow_U: number;
        Oak_Logs: number;
        Oak_Longbow: number;
        Oak_Longbow_U: number;
        Oak_Shortbow: number;
        Oak_Shortbow_U: number;
        Oak_Tree_Seed: number;
        Obsidian_Cape: number;
        Old_Boot: number;
        Old_Hat: number;
        Onion_Seed: number;
        Onions: number;
        Oxilyme_Herb: number;
        Oxilyme_Seed: number;
        Perfect_Swing_Potion_I: number;
        Perfect_Swing_Potion_II: number;
        Perfect_Swing_Potion_III: number;
        Perfect_Swing_Potion_IV: number;
        Pigtayle_Herb: number;
        Pigtayle_Seed: number;
        Pirate_Booty: number;
        Pirates_Lost_Ring: number;
        Poraxx_Herb: number;
        Poraxx_Seed: number;
        Potato_Seed: number;
        Potatoes: number;
        Prayer_Skillcape: number;
        Purple_Party_Hat: number;
        Ragnar_God_Boots: number;
        Ragnar_God_Gloves: number;
        Ragnar_God_Helmet: number;
        Ragnar_God_Platebody: number;
        Ragnar_God_Platelegs: number;
        Ragnar_Godsword: number;
        Ranged_Assistance_Potion_I: number;
        Ranged_Assistance_Potion_II: number;
        Ranged_Assistance_Potion_III: number;
        Ranged_Assistance_Potion_IV: number;
        Ranged_Skillcape: number;
        Ranged_Strength_Potion_I: number;
        Ranged_Strength_Potion_II: number;
        Ranged_Strength_Potion_III: number;
        Ranged_Strength_Potion_IV: number;
        Ranger_Boots: number;
        Rangers_Hat: number;
        Raw_Anglerfish: number;
        Raw_Blowfish: number;
        Raw_Carp: number;
        Raw_Cave_Fish: number;
        Raw_Crab: number;
        Raw_Fanfish: number;
        Raw_Herring: number;
        Raw_Lobster: number;
        Raw_Magic_Fish: number;
        Raw_Manta_Ray: number;
        Raw_Poison_Fish: number;
        Raw_Salmon: number;
        Raw_Sardine: number;
        Raw_Seahorse: number;
        Raw_Shark: number;
        Raw_Shrimp: number;
        Raw_Skeleton_Fish: number;
        Raw_Swordfish: number;
        Raw_Trout: number;
        Raw_Whale: number;
        Red_Dhide_Body: number;
        Red_Dhide_Body_U: number;
        Red_Dhide_Chaps: number;
        Red_Dhide_Chaps_U: number;
        Red_Dhide_Shield: number;
        Red_Dhide_Shield_U: number;
        Red_Dhide_Vambraces: number;
        Red_Dhide_Vambraces_U: number;
        Red_Dragonhide: number;
        Red_Party_Hat: number;
        Red_Wizard_Boots: number;
        Red_Wizard_Bottoms: number;
        Red_Wizard_Hat: number;
        Red_Wizard_Robes: number;
        Redwood_Logs: number;
        Redwood_Longbow: number;
        Redwood_Longbow_U: number;
        Redwood_Shortbow: number;
        Redwood_Shortbow_U: number;
        Regeneration_Potion_I: number;
        Regeneration_Potion_II: number;
        Regeneration_Potion_III: number;
        Regeneration_Potion_IV: number;
        Rope: number;
        Rubber_Ducky: number;
        Ruby: number;
        Ruby_Bolts: number;
        Rune_2H_Sword: number;
        Rune_Arrows: number;
        Rune_Arrowtips: number;
        Rune_Battleaxe: number;
        Rune_Boots: number;
        Rune_Boots_T_G: number;
        Rune_Boots_T_S: number;
        Rune_Crossbow: number;
        Rune_Crossbow_Head: number;
        Rune_Dagger: number;
        Rune_Essence: number;
        Rune_Gloves: number;
        Rune_Helmet: number;
        Rune_Helmet_T_G: number;
        Rune_Helmet_T_S: number;
        Rune_Javelin: number;
        Rune_Javelin_Heads: number;
        Rune_Platebody: number;
        Rune_Platebody_T_G: number;
        Rune_Platebody_T_S: number;
        Rune_Platelegs: number;
        Rune_Platelegs_T_G: number;
        Rune_Platelegs_T_S: number;
        Rune_Scimitar: number;
        Rune_Shield: number;
        Rune_Shield_T_G: number;
        Rune_Shield_T_S: number;
        Rune_Sword: number;
        Rune_Throwing_Knife: number;
        Runecrafting_Skillcape: number;
        Runite_Bar: number;
        Runite_Ore: number;
        Rusty_Key: number;
        Salmon: number;
        Sapphire: number;
        Sapphire_Bolts: number;
        Sardine: number;
        Scroll_of_Aeris: number;
        Scroll_of_Glacia: number;
        Scroll_of_Ragnar: number;
        Scroll_of_Terran: number;
        Seahorse: number;
        Seaweed: number;
        Seeing_Gold_Potion_I: number;
        Seeing_Gold_Potion_II: number;
        Seeing_Gold_Potion_III: number;
        Seeing_Gold_Potion_IV: number;
        Shark: number;
        Shell: number;
        Shrimp: number;
        Signet_Ring_Half_A: number;
        Signet_Ring_Half_B: number;
        Silver_Bar: number;
        Silver_Diamond_Necklace: number;
        Silver_Diamond_Ring: number;
        Silver_Emerald_Necklace: number;
        Silver_Emerald_Ring: number;
        Silver_Ore: number;
        Silver_Ruby_Necklace: number;
        Silver_Ruby_Ring: number;
        Silver_Sapphire_Necklace: number;
        Silver_Sapphire_Ring: number;
        Silver_Topaz_Necklace: number;
        Silver_Topaz_Ring: number;
        Skull_Cape: number;
        Slayer_Cowl_Basic: number;
        Slayer_Cowl_Elite: number;
        Slayer_Cowl_Strong: number;
        Slayer_Crossbow: number;
        Slayer_Crossbow_Head: number;
        Slayer_Helmet_Basic: number;
        Slayer_Helmet_Elite: number;
        Slayer_Helmet_Strong: number;
        Slayer_Leather_Body_Basic: number;
        Slayer_Leather_Body_Elite: number;
        Slayer_Leather_Body_Strong: number;
        Slayer_Platebody_Basic: number;
        Slayer_Platebody_Elite: number;
        Slayer_Platebody_Strong: number;
        Slayer_Skillcape: number;
        Slayer_Wizard_Hat_Basic: number;
        Slayer_Wizard_Hat_Elite: number;
        Slayer_Wizard_Hat_Strong: number;
        Slayer_Wizard_Robes_Basic: number;
        Slayer_Wizard_Robes_Elite: number;
        Slayer_Wizard_Robes_Strong: number;
        Smithing_Gloves: number;
        Smithing_Skillcape: number;
        Smoke_Rune: number;
        Snape_Grass: number;
        Snape_Grass_Seed: number;
        Sourweed_Herb: number;
        Sourweed_Seed: number;
        Spider_Chest: number;
        Spirit_Rune: number;
        Staff_of_Air: number;
        Staff_of_Earth: number;
        Staff_of_Fire: number;
        Staff_of_Water: number;
        Standard_Chest: number;
        Steam_Rune: number;
        Steel_2H_Sword: number;
        Steel_Arrows: number;
        Steel_Arrowtips: number;
        Steel_Bar: number;
        Steel_Battleaxe: number;
        Steel_Boots: number;
        Steel_Boots_T_G: number;
        Steel_Boots_T_S: number;
        Steel_Crossbow: number;
        Steel_Crossbow_Head: number;
        Steel_Dagger: number;
        Steel_Gloves: number;
        Steel_Helmet: number;
        Steel_Helmet_T_G: number;
        Steel_Helmet_T_S: number;
        Steel_Javelin: number;
        Steel_Javelin_Heads: number;
        Steel_Platebody: number;
        Steel_Platebody_T_G: number;
        Steel_Platebody_T_S: number;
        Steel_Platelegs: number;
        Steel_Platelegs_T_G: number;
        Steel_Platelegs_T_S: number;
        Steel_Scimitar: number;
        Steel_Shield: number;
        Steel_Shield_T_G: number;
        Steel_Shield_T_S: number;
        Steel_Sword: number;
        Steel_Throwing_Knife: number;
        Stormsnap: number;
        Strawberries: number;
        Strawberry_Seed: number;
        Strength_Skillcape: number;
        Sunset_Rapier: number;
        Sweetcorn: number;
        Sweetcorn_Seed: number;
        Swordfish: number;
        Teak_Logs: number;
        Terran_God_Boots: number;
        Terran_God_Gloves: number;
        Terran_God_Helmet: number;
        Terran_God_Platebody: number;
        Terran_God_Platelegs: number;
        Terran_Godsword: number;
        Thieving_Gloves: number;
        Thieving_Skillcape: number;
        Tin_Ore: number;
        Tomato_Seed: number;
        Tomatoes: number;
        Topaz: number;
        Topaz_Bolts: number;
        Treasure_Chest: number;
        Trout: number;
        Twin_Exiles: number;
        Warlock_Amulet: number;
        Warlock_Ring: number;
        Water_Acolyte_Wizard_Boots: number;
        Water_Acolyte_Wizard_Bottoms: number;
        Water_Acolyte_Wizard_Hat: number;
        Water_Acolyte_Wizard_Robes: number;
        Water_Adept_Wizard_Boots: number;
        Water_Adept_Wizard_Bottoms: number;
        Water_Adept_Wizard_Hat: number;
        Water_Adept_Wizard_Robes: number;
        Water_Battlestaff: number;
        Water_Chest: number;
        Water_Expert_Wizard_Boots: number;
        Water_Expert_Wizard_Bottoms: number;
        Water_Expert_Wizard_Hat: number;
        Water_Expert_Wizard_Robes: number;
        Water_Imbued_Wand: number;
        Water_Rune: number;
        Water_Shard: number;
        Watermelon: number;
        Watermelon_Seed: number;
        Weird_Gloop: number;
        Whale: number;
        Willow_Logs: number;
        Willow_Longbow: number;
        Willow_Longbow_U: number;
        Willow_Shortbow: number;
        Willow_Shortbow_U: number;
        Willow_Tree_Seed: number;
        Woodcutting_Skillcape: number;
        Yew_Logs: number;
        Yew_Longbow: number;
        Yew_Longbow_U: number;
        Yew_Shortbow: number;
        Yew_Shortbow_U: number;
        Yew_Tree_Seed: number;
    };
    mastery: {
        Smithing: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
        };
    };
    pickaxe: {
        Adamant: number;
        Black: number;
        Bronze: number;
        Dragon: number;
        Iron: number;
        Mithril: number;
        Rune: number;
        Steel: number;
    };
    prayer: {
        Augury: number;
        Burst_of_Strength: number;
        Chivalry: number;
        Clarity_of_Thought: number;
        Eagle_Eye: number;
        Hawk_Eye: number;
        Improved_Reflexes: number;
        Incredible_Reflexes: number;
        Mystic_Lore: number;
        Mystic_Might: number;
        Mystic_Will: number;
        Piety: number;
        Protect_Item: number;
        Protect_from_Magic: number;
        Protect_from_Melee: number;
        Protect_from_Ranged: number;
        Rapid_Heal: number;
        Redemption: number;
        Rigour: number;
        Rock_Skin: number;
        Sharp_Eye: number;
        Steel_Skin: number;
        Superhuman_Strength: number;
        Thick_Skin: number;
        Ultimate_Strength: number;
    };
    shop: {
        gloves: {
            Cooking: number;
            Gems: number;
            Mining: number;
            Smithing: number;
            Thieving: number;
        };
    };
    skill: {
        Attack: number;
        Cooking: number;
        Crafting: number;
        Defence: number;
        Farming: number;
        Firemaking: number;
        Fishing: number;
        Fletching: number;
        Herblore: number;
        Hitpoints: number;
        Magic: number;
        Mining: number;
        Prayer: number;
        Ranged: number;
        Runecrafting: number;
        Slayer: number;
        Smithing: number;
        Strength: number;
        Thieving: number;
        Woodcutting: number;
    };
    slayerArea: {
        Desolate_Plains: number;
        Forest_of_Goo: number;
        High_Lands: number;
        Holy_Isles: number;
        Penumbra: number;
        Strange_Cave: number;
    };
    specialEvent: {
        aprilFools2020: number;
        easter2020: number;
    };
    spell: {
        Earth_Blast: number;
        Earth_Bolt: number;
        Earth_Strike: number;
        Earth_Surge: number;
        Earth_Wave: number;
        Fire_Blast: number;
        Fire_Bolt: number;
        Fire_Strike: number;
        Fire_Surge: number;
        Fire_Wave: number;
        Water_Blast: number;
        Water_Bolt: number;
        Water_Strike: number;
        Water_Surge: number;
        Water_Wave: number;
        Wind_Blast: number;
        Wind_Bolt: number;
        Wind_Strike: number;
        Wind_Surge: number;
        Wind_Wave: number;
    };
    spellType: {
        Air: number;
        Earth: number;
        Fire: number;
        Water: number;
    };
};

declare function continueGolbinRaid(): void;

declare var continueThievingOnStun: boolean;

/**
 * @param {any} currentGP
 */
declare function convertGP(currentGP: any): any;

declare var cookCount: number;

declare var cookingCache: any;

declare var cookingCount: any;

declare var cookingFireActive: boolean;

declare var cookingFireHandler: any;

declare var cookingItems: {
    cookingID: number;
    cookingLevel: number;
    itemID: number;
}[];

declare var cookingMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare var cookingRangeCost: number;

/**
 * @param {any} cat
 */
declare function craftCategory(cat: any): void;

declare var craftingItems: {
    craftingID: number;
    craftingLevel: number;
    itemID: number;
}[];

declare var craftingMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare var craftingReqCheck: any[];

declare var craftingTimeout: any;

declare var craftInterval: number;

declare var craftReqCheck: any[];

/**
 * @param {any} bankItemID
 * @param {number} bankButtonID defaults to 0
 */
declare function createBankItem(bankItemID: any, bankButtonID?: number): void;

declare function createChangelog(): void;

/**
 * @param {any} char
 */
declare function createPlayFabSaves(char: any): any;

declare function createRuneCountContainer(): void;

declare function createVirtualBank(): void;

declare var currentAutoEat: number;

declare var currentAxe: number;

declare var currentBank: number;

declare var currentBankUpgrade: number;

declare var currentBonfireHandler: any;

declare var currentCharacter: number;

declare var currentCombatFood: number;

declare var currentCookingFire: number;

declare var currentCraft: any;

declare var currentFarmingArea: any;

declare var currentFishingArea: any;

declare var currentFletch: any;

declare var currentGamemode: number;

declare var currentHerblore: any;

declare var currentlyBurning: any;

declare var currentlyCatchingUp: boolean;

declare var currentlyCooking: any;

declare var currentlyCutting: number;

declare var currentlyEquipping: any;

declare var currentlyUnequipping: any;

declare var currentMagicSpell: number;

declare var currentMastery: number[];

declare var currentPage: number;

declare var currentPickaxe: number;

declare var currentRock: any;

declare var currentRod: number;

declare var currentRunecraft: any;

declare var currentSmith: any;

declare var currentTrees: number[];

declare var currentView: number;

/**
 * @param {any} treeID
 * @param {any} ignore
 */
declare function cutTree(treeID: any, ignore: any): any;

/**
 * @param {any} dmg
 */
declare function damageEnemy(dmg: any): void;

declare var damageMultiplier: number;

/**
 * @param {any} dmg
 */
declare function damagePlayer(dmg: any): void;

declare var damageReduction: number;

declare var darkMode: boolean;

declare var dataDeleted: boolean;

declare var defaultPageOnLoad: number;

declare function deleteCloudSave(): void;

declare function deleteData(): void;

declare function deletePlayFabSave(): void;

declare function disableActivePrayers(): void;

declare var disableAds: boolean;

/**
 * @param {boolean} update defaults to true
 */
declare function disablePlayerAurora(update?: boolean): void;

declare function disconnectPatreon(): void;

/**
 * @param {boolean} backup defaults to false
 */
declare function downloadSave(backup?: boolean): void;

/**
 * @param {any} enemy
 */
declare function dropBones(enemy: any): void;

/**
 * @param {any} enemy
 */
declare function dropLoot(enemy: any): void;

declare var droppedLoot: any[];

/**
 * @param {any} levelReq
 * @param {boolean} offline defaults to false
 */
declare function dropRingHalfA(levelReq: any, offline?: boolean): any;

declare var dungeonCompleteCount: number[];

declare var dungeonCount: any;

declare var easterLoaded: boolean;

/**
 * @param {number} efficiency defaults to 100
 * @param {boolean} autoEat defaults to false
 */
declare function eatFood(efficiency?: number, autoEat?: boolean): void;

declare var effectiveAttackLevel: number;

declare var effectiveDefenceLevel: number;

declare var effectiveMagicDefenceLevel: number;

declare var effectiveRangedDefenceLevel: number;

declare var effectiveStrengthLevel: any;

declare var eightSeconds: boolean;

declare var el: HTMLElement;

declare var enableAccessibility: boolean;

declare function enableCloudCharacterButton(): void;

declare var enemyAttackSpeedMultiplier: number;

declare var enemyAttackTimer: any;

declare var enemyBleeding: boolean;

declare var enemyBleedInterval: any;

declare var enemyDamageTimer: any;

declare var enemyFinder: any;

declare var enemyInCombat: any;

declare var enemySlowTimer: any;

declare var enemySpecialAttacks: {
    DOTInterval: any;
    DOTMaxProcs: any;
    activeBuffTurns?: number;
    activeBuffs: boolean;
    attackCount: number;
    attackInterval: number;
    attackSpeedDebuff?: number;
    attackSpeedDebuffTurns?: number;
    attackSpeedSlow?: any;
    attackSpeedSlowTurns?: any;
    burnDebuff?: number;
    canStun: boolean;
    chance: number;
    description: string;
    forceHit: boolean;
    id: number;
    increasedDamageReduction?: any;
    increasedMagicEvasion?: number;
    increasedMeleeEvasion?: number;
    increasedRangedEvasion?: number;
    name: string;
    reflectMagic?: any;
    reflectMelee?: number;
    reflectRanged?: any;
    setDOTDamage: any;
    setDamage: any;
    stunDamageMultiplier: number;
    stunTurns: any;
}[];

declare var enemyTimer: any;

/**
 * @param {any} bankID
 * @param {any} itemID
 * @param {any} qty
 */
declare function equipFood(bankID: any, itemID: any, qty: any): void;

/**
 * @param {any} bankItemID
 * @param {any} item
 * @param {number} qty defaults to 1
 * @param {any} equipmentSet
 * @param {boolean} bypass defaults to false
 */
declare function equipItem(bankItemID: any, item: any, qty?: number, equipmentSet?: any, bypass?: boolean): void;

declare var equipmentSetCount: number;

declare var equipmentSets: {
    ammo: number;
    equipment: number[];
}[];

declare var equipmentSetsPurchased: boolean[];

declare var equipmentSwapPurchased: boolean;

declare var equippedFood: {
    itemID: number;
    qty: number;
}[];

declare var equippedItems: number[];

declare namespace exp {
    /**
     * @param {any} xp
     */
    function equate(xp: any): any;

    /**
     * @param {any} level
     */
    function level_to_xp(level: any): any;

    /**
     * @param {any} xp
     */
    function xp_to_level(xp: any): any;
}

/**
 * @param {boolean} update defaults to false
 */
declare function exportSave(update?: boolean): void;

declare var farmingGlower: number;

declare var farmingMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare function finaliseLoad(): void;

declare function findEnemy(): void;

/**
 * @param {any} enemy
 */
declare function findEnemyArea(enemy: any): any;

declare var firstTime: number;

declare var fishingItems: {
    fishingID: number;
    fishingLevel: number;
    itemID: number;
}[];

declare var fishingTimeout: any;

declare var fishMastery: {
    mastery: number;
    masteryXP: number;
}[];

/**
 * @param {boolean} confirmed defaults to false
 */
declare function fixMySave(confirmed?: boolean): void;

/**
 * @param {any} cat
 */
declare function fletchCategory(cat: any): void;

declare var fletchingItems: {
    fletchingID: number;
    fletchingLevel: number;
    itemID: number;
}[];

declare var fletchingMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare var fletchingTimeout: any;

declare var fletchInterval: number;

declare var fletchReqCheck: any[];

declare var foodCache: any;

declare var foodCacheID: any;

declare var forcedEnemy: any;

declare var forceSaveCooldown: boolean;

declare function forceSync(): void;

declare function forceSyncCooldown(): void;

declare var forceSyncCooldownTimer: any;

/**
 * @param {any} number
 */
declare function formatNumber(number: any): any;

declare var formatNumberSetting: number;

declare var gameSaved: boolean;

declare function gameUpdate(): void;

declare var gameUpdateNotification: string;

declare var gameVersion: string;

declare var gameVersionChecker: number;

/**
 * @param {any} itemID
 */
declare function getBankId(itemID: any): any;

declare function getBankValue(): void;

declare function getCloudCharacters(): void;

/**
 * @param {any} itemID
 */
declare function getCraftQty(itemID: any): any;

declare function getGolbinBonuses(): any;

/**
 * @param {boolean} hitpoints defaults to false
 */
declare function getGolbinLevel(hitpoints?: boolean): any;

/**
 * @param {any} itemID
 * @param {any} tier
 */
declare function getHerbloreMasteryID(itemID: any, tier: any): any;

/**
 * @param {any} itemID
 */
declare function getHerbloreQty(itemID: any): any;

/**
 * @param {any} id
 */
declare function getHerbloreTier(id: any): any;

/**
 * @param {any} key
 */
declare function getItem(key: any): any;

/**
 * @param {any} save
 * @param {any} item
 */
declare function getItemFromSave(save: any, item: any): any;

/**
 * @param {any} itemID
 */
declare function getItemMedia(itemID: any): any;

/**
 * @param {any} itemID
 * @param {boolean} format defaults to true
 */
declare function getItemQty(itemID: any, format?: boolean): any;

/**
 * @param {any} masteryID
 * @param {any} skill
 */
declare function getMasteryMedia(masteryID: any, skill: any): any;

/**
 * @param {any} masteryID
 * @param {any} masteryArray
 */
declare function getMasteryProgress(masteryID: any, masteryArray: any): any;

/**
 * @param {any} skill
 * @param {boolean} offline defaults to false
 */
declare function getMasteryToken(skill: any, offline?: boolean): any;

/**
 * @param {any} monster
 * @param {boolean} setData defaults to false
 */
declare function getMonsterCombatLevel(monster: any, setData?: boolean): any;

/**
 * @param {any} monster
 */
declare function getMonsterMedia(monster: any): any;

declare function getPlayFabSave(): void;

/**
 * @param {any} itemID
 */
declare function getQty(itemID: any): any;

/**
 * @param {any} itemID
 */
declare function getRunecraftQty(itemID: any): any;

/**
 * @param {boolean} customKey defaults to false
 * @param {number} char defaults to 0
 */
declare function getSave(customKey?: boolean, char?: number): any;

/**
 * @param {any} save
 */
declare function getSaveDetails(save: any): any;

/**
 * @param {any} save
 */
declare function getSaveJSON(save: any): any;

declare function getSaveRaw(): any;

/**
 * @param {any} save
 */
declare function getSaveTimestamp(save: any): any;

/**
 * @param {any} save
 */
declare function getSaveTotalXP(save: any): any;

declare function getSlayerCost(): any;

declare function getSlayerCount(): any;

declare function getSlayerTask(): void;

/**
 * @param {any} itemID
 */
declare function getSmithQty(itemID: any): any;

declare function getSync(): void;

declare function gloopAll(): void;

declare function gloveCheck(): void;

declare var glovesCost: number[];

declare var glovesTracker: {
    isActive: boolean;
    name: string;
    remainingActions: number;
}[];

declare var godDungeonID: number[];

declare var godUpgrade: boolean[];

declare var golbinEnemyCount: number;

declare var golbinFood: any[];

declare var golbinInventory: any[];

declare var golbinItemSelection: any[];

declare var golbinKillCount: number;

declare var golbinModifier: number;

declare var golbinRaidHistory: any[];

declare var golbinRaidStats: number[];

declare var golbinSelectionInProgress: boolean;

declare var golbinSkillLevels: number[];

declare var golbinTimestamp: number[];

declare var golbinWave: number;

declare var goldDeductionTracker: number;

declare var gp: number;

/**
 * @param {any} qty
 */
declare function gpNotify(qty: any): void;

/**
 * @param {any} areaID
 * @param {any} patchID
 */
declare function growCrops(areaID: any, patchID: any): void;

declare function harvestAll(): void;

declare var harvestReadyTimer: any;

/**
 * @param {any} areaID
 * @param {any} patchID
 * @param {boolean} all defaults to true
 */
declare function harvestSeed(areaID: any, patchID: any, all?: boolean): void;

declare var herbloreBonuses: {
    bonus: any[];
    charges: number;
    itemID: number;
}[];

/**
 * @param {any} cat
 */
declare function herbloreCategory(cat: any): void;

declare var herbloreInterval: number;

declare var herbloreItemData: {
    category: number;
    herbloreLevel: number;
    herbloreXP: number;
    id: number;
    itemID: number[];
    name: string;
}[];

declare var herbloreItems: {
    category: number;
    herbloreLevel: number;
    herbloreXP: number;
    id: number;
    itemID: number[];
    name: string;
}[];

declare var herbloreMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare var herbloreReqCheck: any[];

declare var herbloreTimeout: any;

declare var herbSeeds: {
    itemID: number;
    level: number;
}[];

declare var hitpointRegen: number;

declare function httpsCheck(): void;

declare var i: number;

/**
 * @param {any} currentSkill
 */
declare function idleChecker(currentSkill: any): any;

declare var ignoreBankFull: boolean;

declare function importSave(): void;

declare var increasedMinSpellDmg: number[];

declare function initiateLoad(): void;

declare function initMinibar(): void;

declare function initTooltips(): void;

/**
 * @param {any} func
 * @param {any} primaryKey
 * @param {any} secondaryKey
 * @param {any} inject
 * @param {any} err
 */
declare function injectIntoFunction(func: any, primaryKey: any, secondaryKey: any, inject: any, err: any): any;

declare var isBurning: boolean;

declare var isCooking: boolean;

declare var isCrafting: boolean;

declare var isCurrentlyEquipping: boolean;

declare var isCurrentlyUnequipping: boolean;

declare var isDungeon: boolean;

declare var isFireBurning: boolean;

declare var isFishing: boolean;

declare var isFletching: boolean;

declare var isGolbinRaid: boolean;

declare var isHerblore: boolean;

declare var isInCombat: boolean;

declare var isLoaded: boolean;

declare var isMagic: boolean;

declare var isMining: boolean;

declare var isPatreon: boolean;

declare var isPrayer: boolean;

declare var isRunecrafting: boolean;

declare var isSmithing: boolean;

declare var isSpellAncient: boolean;

declare var isStunned: boolean;

declare var isTest: boolean;

declare var isThieving: boolean;

declare var itemInView: any;

declare var itemInViewPos: any;

declare var itemLog: any[];

declare var itemLogBuilt: boolean;

declare var itemLost: number;

/**
 * @param {any} itemID
 * @param {any} qty
 */
declare function itemNotify(itemID: any, qty: any): void;

declare var itemQty: string;

declare var itemQtyCurrent: string;

declare var items: {
    ammoPreservation?: number;
    ammoType?: number;
    ammoTypeRequired?: number;
    attackBonus?: number[];
    attackLevelRequired?: number;
    attackSpeed?: number;
    baseChanceToPreserve?: number;
    baseDropRate?: number;
    bonusSkillXP?: number;
    bossStrengthMultiplier?: number;
    burntItemID?: number;
    buysFor?: number;
    buysForItems?: number[][];
    buysForLeather?: number;
    canEat?: boolean;
    canEquip?: boolean;
    canMultiUpgrade?: boolean;
    canOpen?: boolean;
    canRead?: boolean;
    canUpgrade?: boolean;
    canUpgrde?: boolean;
    category: string;
    chanceToCrit?: number;
    chanceToDoubleLoot?: number;
    chanceToDoubleResources?: number;
    chanceToPreserve?: number;
    clueID?: number;
    cookedItemID?: number;
    cookingCategory?: number;
    cookingID?: number;
    cookingLevel?: number;
    cookingXP?: number;
    craftQty?: number;
    craftReq?: {
        id: number;
        qty: number;
    }[];
    craftingID?: number;
    craftingLevel?: number;
    craftingXP?: number;
    critDamage?: number;
    damageReduction?: number;
    defenceBonus?: number;
    defenceLevelRequired?: number;
    description?: string;
    dropQty?: number[];
    dropRate?: number;
    dropTable?: number[][];
    equipmentSlot?: number;
    farmingLevel?: number;
    farmingXP?: number;
    firemakingID: number;
    fishingBonusXP?: number;
    fishingCatchWeight?: number;
    fishingID?: number;
    fishingLevel?: number;
    fishingSpeedBonus?: number;
    fishingXP?: number;
    fletchQty?: number;
    fletchReq?: {
        id: number;
        qty: number;
    }[];
    fletchingID?: number;
    fletchingLevel?: number;
    fletchingXP?: number;
    gloveID?: number;
    gpMultiplier?: number;
    gpMultiplierCap?: number;
    gpMultiplierMin?: number;
    grownItemID?: number;
    harvestBonus?: number;
    hasSpecialAttack?: boolean;
    hasStats?: boolean;
    healsFor?: number;
    herbloreMasteryID?: number;
    herbloreReq?: {
        id: number;
        qty: number;
    }[];
    hpRegenBonus?: number;
    id: number;
    increasedEarthFireSpellDmg?: number;
    increasedItemChance?: number;
    increasedMaxHitpoints?: number;
    increasedMinAirSpellDmg?: number;
    increasedMinEarthSpellDmg?: number;
    increasedMinFireSpellDmg?: number;
    increasedMinWaterSpellDmg?: number;
    increasedWaterAirSpellDmg?: number;
    increasedWaterSpellDamage?: number;
    isAmmo?: boolean;
    isBankToken?: boolean;
    isBones?: boolean;
    isMagic?: boolean;
    isPotion?: boolean;
    isStreamer?: boolean;
    isToken?: boolean;
    isTwoHanded?: boolean;
    itemsRequired?: number[][];
    magicAttackBonus?: number;
    magicDamageBonus?: number;
    magicDefenceBonus?: number;
    magicLevelRequired?: number;
    masteryID: number[];
    maxDropRate?: number;
    maxFishingInterval?: number;
    maxMiningRespawnInterval?: number;
    media: string;
    minFishingInterval?: number;
    miningID?: number;
    miningLevel?: number;
    miningRespawnInterval?: number;
    miningXP?: number;
    name: string;
    potionBonus?: number;
    potionBonusID?: number;
    potionCharges?: number;
    potionPage?: number;
    potionSkill?: number;
    potionTier?: number;
    prayerBonus?: number;
    prayerPoints?: number;
    providesRune?: number[];
    providesRuneQty?: number;
    rangedAttackBonus?: number;
    rangedDefenceBonus?: number;
    rangedLevelRequired?: number;
    rangedStrengthBonus?: number;
    readText?: string;
    readTitle?: string;
    runecraftQty?: number;
    runecraftReq?: {
        id: number;
        qty: number;
    }[];
    runecraftingCategory?: number;
    runecraftingID?: number;
    runecraftingLevel?: number;
    runecraftingXP?: number;
    seedsRequired?: number;
    sellsFor: number;
    skill?: number;
    slayerBonusXP?: number;
    slayerCost?: number;
    slayerLevelRequired?: number;
    slayerStrengthMultiplier?: number;
    smithReq?: {
        id: number;
        qty: number;
    }[];
    smithingID?: number;
    smithingLevel?: number;
    smithingQty?: number;
    smithingXP?: number;
    specialAttackID?: number;
    spellHeal?: number;
    strengthBonus?: number;
    strengthXP?: number;
    tier?: string;
    timeToGrow?: number;
    trimmedGPCost?: number;
    trimmedItemID?: number;
    type: string;
}[];

declare var itemStats: {
    amountUsedInCombat: number;
    damageDealt: number;
    damageTaken: number;
    deathCount: number;
    enemiesKilled: number;
    gpFromSale: number;
    harvestAmount: number;
    healedFor: number;
    itemID: number;
    missedAttacks: number;
    timeWaited: number;
    timesDied: number;
    timesEaten: number;
    timesFound: number;
    timesGrown: number;
    timesOpened: number;
    timesSold: number;
    totalAttacks: number;
}[];

declare var itemToGive: any;

/**
 * @param {any} enemy
 */
declare function jumpToEnemy(enemy: any): void;

declare var junkItems: number[];

declare var key: string;

/**
 * @param {any} a
 * @param {any} b
 */
declare function keySorter(a: any, b: any): any;

declare var keyTest: string;

declare var keyVersion: string;

declare var killCount: any[];

declare function killPage(): void;

/**
 * @param {any} skill
 */
declare function levelUp(skill: any): void;

/**
 * @param {any} skill
 * @param {any} id
 * @param {any} masteryArray
 * @param {boolean} token defaults to false
 * @param {boolean} notify defaults to true
 */
declare function levelUpMastery(skill: any, id: any, masteryArray: any, token?: boolean, notify?: boolean): void;

/**
 * @param {any} skill
 */
declare function levelUpNotify(skill: any): void;

declare var levelUpScreen: number;

/**
 * @param {boolean} potion defaults to false
 */
declare function lightBonfire(potion?: boolean): void;

/**
 * @param {boolean} upgradeToFire defaults to false
 */
declare function lightCookingFire(upgradeToFire?: boolean): any;

/**
 * @param {any} bankID
 */
declare function listener(bankID: any): void;

declare var listView: boolean;

declare function loadAreas(): void;

declare function loadBank(): void;

/**
 * @param {any} result
 * @param {any} error
 */
declare function loadCallback(result: any, error: any): void;

declare function loadCharacterSelection(): void;

/**
 * @param {any} isCloud
 */
declare function loadCloudOptions(isCloud: any): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function loadCloudSave(confirmed?: boolean): void;

declare function loadCombatAreas(): void;

/**
 * @param {boolean} refresh defaults to false
 */
declare function loadCombatGear(refresh?: boolean): void;

declare function loadCooking(): any;

declare function loadCrafting(): any;

declare function loadCurrentSettings(): void;

/**
 * @param {boolean} update defaults to false
 */
declare function loadData(update?: boolean): void;

declare function loadDungeons(): void;

declare function loadEquipmentSets(): void;

declare function loadEquippedFood(): void;

/**
 * @param {any} areaID
 */
declare function loadFarmingArea(areaID: any): void;

declare function loadFishing(): any;

declare function loadFletching(): any;

/**
 * @param {boolean} update defaults to false
 */
declare function loadGame(update?: boolean): void;

/**
 * @param {any} save
 */
declare function loadGameRaw(save: any): void;

declare function loadGolbinRaidHistory(): void;

/**
 * @param {boolean} update defaults to false
 */
declare function loadHerblore(update?: boolean): any;

declare function loadLoot(): void;

declare var loadLootTimer: any;

declare function loadMasteryTab(): void;

declare function loadMiningOres(): void;

declare function loadNewEnemy(): void;

declare function loadPets(): void;

declare function loadPotions(): void;

declare function loadPrayer(): void;

declare function loadProfile(): void;

declare function loadRunecrafting(): any;

declare function loadSeeds(): any;

declare function loadSlayerShop(): void;

declare function loadSmithing(): any;

declare function loadThieving(): void;

declare var lockedItems: number[];

/**
 * @param {any} bankID
 */
declare function lockItem(bankID: any): void;

declare var logCache: any;

declare var logCacheID: any;

declare var logsData: {
    bonfireBonus: number;
    bonfireInterval: number;
    interval: number;
    level: number;
    type: string;
    xp: number;
}[];

declare var logsForFire: any[];

declare var logsMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare var lolYouDiedGetRekt: boolean;

declare function lootAll(): void;

declare var magicInterval: number;

declare var magicTimeout: number;

declare var mapLoaded: boolean;

/**
 * @param {any} array
 * @param {any} order
 * @param {any} key
 */
declare function mapOrder(array: any, order: any, key: any): any;

declare namespace masteryExp {
    /**
     * @param {any} xp
     */
    function equate(xp: any): any;

    /**
     * @param {any} level
     */
    function level_to_xp(level: any): any;

    /**
     * @param {any} xp
     */
    function xp_to_level(xp: any): any;
}

declare var masteryMedia: {
    '0': {
        media: string;
    }[];
    '1': {
        media: string;
    }[];
    '10': {
        media: string;
    }[];
    '11': {
        media: string;
    }[];
    '2': {
        media: string;
    }[];
    '3': {
        media: string;
    }[];
    '4': {
        media: string;
    }[];
    '5': {
        media: string;
    }[];
};

/**
 * @param {any} mastery
 * @param {any} skill
 * @param {any} level
 */
declare function masteryNotify(mastery: any, skill: any, level: any): void;

declare var masteryUnlocks: {
    '0': {
        level: number;
        unlock: string;
    }[];
    '1': {
        level: number;
        unlock: string;
    }[];
    '10': {
        level: number;
        unlock: string;
    }[];
    '11': {
        level: number;
        unlock: string;
    }[];
    '13': {
        level: number;
        unlock: string;
    }[];
    '14': {
        level: number;
        unlock: string;
    }[];
    '15': {
        level: number;
        unlock: string;
    }[];
    '19': {
        level: number;
        unlock: string;
    }[];
    '2': {
        level: number;
        unlock: string;
    }[];
    '3': {
        level: number;
        unlock: string;
    }[];
    '4': {
        level: number;
        unlock: string;
    }[];
    '5': {
        level: number;
        unlock: string;
    }[];
};

declare var maxHitpoints: number;

declare var maximumAttackRoll: number;

declare var maximumDefenceRoll: number;

declare var maximumMagicDefenceRoll: number;

declare var maximumRangedDefenceRoll: number;

declare var mbucks: number;

declare var milestoneMessage: string;

/**
 * @param {any} ore
 * @param {boolean} clicked defaults to false
 * @param {boolean} ignoreDepletion defaults to false
 */
declare function mineRock(ore: any, clicked?: boolean, ignoreDepletion?: boolean): void;

declare var miningData: {
    level: number;
    masteryID: number;
    ore: number;
    respawnInterval: number;
}[];

declare var miningItemID: any[];

declare var miningOreMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare var miningTimeout: any;

declare var MONSTERS: {
    attackBonus: number;
    attackBonusMagic?: number;
    attackBonusRanged: number;
    attackLevel: number;
    attackSpeed: number;
    attackType: number;
    boneQty?: number;
    bones: number;
    canSlayer: boolean;
    damageBonusMagic?: number;
    defenceBonus: number;
    defenceBonusMagic: number;
    defenceBonusRanged: number;
    defenceLevel: number;
    description?: string;
    dropCoins: number[];
    foundIn?: number;
    hasSpecialAttack?: boolean;
    hitpoints: number;
    id: number;
    isBoss?: boolean;
    lootChance: number;
    lootQty?: number[];
    lootTable: number[][];
    magicLevel: number;
    media: string;
    name: string;
    overrideSpecialChances?: number[];
    rangedLevel: number;
    selectedSpell?: number;
    setMaxHit?: number;
    slayerXP?: number;
    specialAttackID?: number[];
    strengthBonus: number;
    strengthBonusRanged?: number;
    strengthLevel: number;
}[];

declare var monsterStats: {
    damageDealtToPlayer: number;
    damageTakenFromPlayer: number;
    enemyMissed: number;
    hitsFromPlayer: number;
    hitsToPlayer: number;
    killedByPlayer: number;
    killedPlayer: number;
    monsterID: number;
    playerMissed: number;
    ranAway: number;
    seen: number;
}[];

declare var myBankVersion: number;

declare var nameChanges: number;

declare namespace newBankUpgradeCost {
    /**
     * @param {any} gp
     */
    function equate(gp: any): any;

    /**
     * @param {any} gp
     */
    function gp_to_level(gp: any): any;

    /**
     * @param {any} level
     */
    function level_to_gp(level: any): any;
}

declare var newEnemyLoading: boolean;

declare var newFarmingAreas: {
    areaName: string;
    id: number;
    patches: {
        compost: number;
        cost: number;
        gloop: boolean;
        hasGrown: boolean;
        level: number;
        seedID: number;
        timePlanted: number;
        timeout: number;
        type: string;
        unlocked: boolean;
    }[];
}[];

declare namespace newNewBankUpgradeCost {
    /**
     * @param {any} level
     */
    function equate(level: any): any;

    /**
     * @param {any} level
     */
    function level_to_gp(level: any): any;
}

declare function newSlayerTask(): void;

declare var nextItem: any[];

declare var nextLevelProgress: number[];

declare var nextMilestone: number;

/**
 * @param {any} message
 * @param {any} type
 */
declare function notifyBirdNest(message: any, type: any): void;

/**
 * @param {any} message
 */
declare function notifyGemRock(message: any): void;

/**
 * @param {any} skill
 */
declare function notifyGloves(skill: any): void;

/**
 * @param {any} skill
 * @param {any} args
 */
declare function notifyPlayer(skill: any, args: any): void;

declare function notifyPlayerHarvestReady(): void;

/**
 * @param {any} qty
 * @param {string} type defaults to "success"
 */
declare function notifySlayer(qty: any, type?: string): void;

declare var npcID: any;

declare var numberMultiplier: number;

/**
 * @param {any} x
 */
declare function numberWithCommas(x: any): any;

declare var offline: {
    action: any;
    skill: any;
    timestamp: any;
};

declare function offlineCatchup(): void;

declare var offlinePause: boolean;

declare namespace One {
    /**
     * @param {any} e
     * @param {any} a
     */
    function block(e: any, a: any): void;

    /**
     * @param {any} e
     */
    function helpers(e: any, ...args: any[]): void;

    function init(): void;

    /**
     * @param {any} e
     */
    function layout(e: any): void;

    /**
     * @param {any} e
     * @param {any} a
     */
    function loader(e: any, a: any): void;
}

/**
 * @param {any} bankID
 * @param {any} itemID
 * @param {boolean} openAll defaults to false
 */
declare function openBankItem(bankID: any, itemID: any, openAll?: boolean): void;

declare function openItemLog(): void;

declare function openMonsterLog(): void;

declare function openPetLog(): void;

declare var pages: string[];

/**
 * @param {any} skill
 */
declare function pauseOfflineAction(skill: any): void;

declare var pauseOfflineActions: boolean;

declare var PETS: {
    acquiredBy: string;
    chance: number;
    description: string;
    killCount?: number;
    media: string;
    name: string;
    skill: number;
}[];

declare var petUnlocked: boolean[];

/**
 * @param {any} npc
 * @param {boolean} clicked defaults to true
 */
declare function pickpocket(npc: any, clicked?: boolean): void;

/**
 * @param {boolean} plantAll defaults to false
 */
declare function plantSeed(plantAll?: boolean): void;

declare var playerAttackSpeed: number;

declare var playerDamageTimer: any;

declare var playerSpecialAttacks: {
    attackCount: number;
    attackInterval: number;
    attackSpeedDebuff?: number;
    attackSpeedDebuffTurns?: number;
    bleedChance?: number;
    bleedCount?: number;
    bleedInterval?: number;
    canBleed?: boolean;
    canStun?: boolean;
    chance: number;
    damageMultiplier: number;
    decreasedRangedEvasion?: number;
    description: string;
    forceHit: boolean;
    healsFor: number;
    id: number;
    maxHit?: boolean;
    name: string;
    setDamage?: number;
    stormsnap?: boolean;
    stunChance?: number;
    stunDamageMultiplier?: number;
    stunTurns?: number;
    totalBleedHP?: number;
}[];

declare var playerTimer: any;

declare var playFabCounter: number;

declare var playFabLoginTimestamp: number;

/**
 * @param {any} playFabID
 */
declare function playFabLoginWithCustomID(playFabID: any): void;

/**
 * @param {boolean} forceSave defaults to false
 */
declare function playFabSaveData(forceSave?: boolean): void;

declare var playFabSaves: any[];

declare var prayerBonusAttack: number;

declare var prayerBonusAttackMagic: number;

declare var prayerBonusAttackRanged: number;

declare var prayerBonusDamageMagic: number;

declare var prayerBonusDamageReduction: number;

declare var prayerBonusDefence: number;

declare var prayerBonusDefenceMagic: number;

declare var prayerBonusDefenceRanged: number;

declare var prayerBonusHitpointHeal: number;

declare var prayerBonusHitpoints: number;

declare var prayerBonusProtectFromMagic: number;

declare var prayerBonusProtectFromMelee: number;

declare var prayerBonusProtectFromRanged: number;

declare var prayerBonusProtectItem: number;

declare var prayerBonusStrength: number;

declare var prayerBonusStrengthRanged: number;

declare var prayerLoaded: boolean;

declare var prayerPoints: number;

declare var previousSlayerTask: any;

/**
 * @param {any} charID
 * @param {any} save
 */
declare function processCloudCharacters(charID: any, save: any): void;

/**
 * @param {any} itemID
 * @param {any} qty
 */
declare function processItemSale(itemID: any, qty: any): void;

declare function processLocalCharacters(): void;

/**
 * @param {any} item
 * @param {any} skill
 */
declare function quickEquipItem(item: any, skill: any): void;

/**
 * @param {any} skill
 */
declare function quickEquipSkillcape(skill: any): void;

declare var raidCoins: number;

/**
 * @param {any} clue
 */
declare function readClue(clue: any): void;

/**
 * @param {any} bankID
 * @param {any} itemID
 */
declare function readItem(bankID: any, itemID: any): void;

declare var reflectCooldown: boolean;

declare var reflectDamageTimer: any;

declare function regenerateHitpoints(): void;

declare function reinstatePreviousPlayerData(): void;

declare function removeChargeRhaelyx(): void;

declare function removeEnemyBleedDebuff(): void;

declare function removeEnemyBuffs(): void;

declare function removeForceReload(): void;

/**
 * @param {any} key
 */
declare function removeItem(key: any): void;

/**
 * @param {any} itemID
 * @param {boolean} offlineUpdate defaults to false
 */
declare function removeItemFromBank(itemID: any, offlineUpdate?: boolean): void;

/**
 * @param {any} debuffID
 */
declare function removePlayerDebuffs(debuffID: any): void;

/**
 * @param {any} areaID
 * @param {any} patchID
 */
declare function removeSeed(areaID: any, patchID: any): void;

declare function repairMastery(): void;

/**
 * @param {any} func
 * @param {any} find
 * @param {any} replace
 * @param {any} err
 */
declare function replaceInFunction(func: any, find: any, replace: any, err: any): any;

declare function resetAccountData(): void;

/**
 * @param {any} charID
 */
declare function resetCharacterSelection(charID: any): void;

declare function resetEnemyAttackBar(): void;

declare function resetEnemyCurse(): void;

declare function resetEnemyScreen(): void;

/**
 * @param {any} areaID
 * @param {any} patchID
 */
declare function resetFarmingPatch(areaID: any, patchID: any): void;

declare function resetGolbinEquipment(): void;

declare function resetGolbinFood(): void;

/**
 * @param {boolean} eat defaults to false
 */
declare function resetPlayerAttack(eat?: boolean): void;

declare function resetPlayerAttackBar(): void;

declare function resetPlayerAttackBarStyle(): void;

declare function resetPlayerCombatData(): void;

declare function resetTutotialTips(): void;

declare var rockData: {
    damage: number;
    depleted: boolean;
    maxHP: number;
    respawnTimer: any;
}[];

/**
 * @param {any} ore
 */
declare function rockReset(ore: any): any;

/**
 * @param {any} petID
 * @param {any} timePerAction
 * @param {boolean} offline defaults to false
 */
declare function rollForPet(petID: any, timePerAction: any, offline?: boolean): any;

/**
 * @param {any} skill
 * @param {boolean} offline defaults to false
 */
declare function rollForRhaelyx(skill: any, offline?: boolean): any;

declare var runeCheck: any[];

/**
 * @param {any} cat
 */
declare function runecraftingCategory(cat: any): void;

declare var runecraftingItems: {
    itemID: number;
    runecraftingCategory: number;
    runecraftingID: number;
    runecraftingLevel: number;
}[];

declare var runecraftingMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare var runecraftingReqCheck: any[];

declare var runecraftingSorted: {
    itemID: number;
    runecraftingCategory: number;
    runecraftingID: number;
    runecraftingLevel: number;
}[];

declare var runecraftingTimeout: any;

declare var runecraftInterval: number;

declare var runecraftReqCheck: any[];

/**
 * @param {any} save
 */
declare function saveBackup(save: any): void;

/**
 * @param {any} result
 * @param {any} error
 * @param {boolean} forceSave defaults to false
 */
declare function saveCallback(result: any, error: any, forceSave?: boolean): void;

/**
 * @param {string} vars defaults to 'all'
 */
declare function saveData(vars?: string): void;

declare var saveStateBeforeRaid: any[];

declare var saveTimestamp: number;

declare function secretAreaCheck(): void;

declare var secretAreaUnlocked: boolean;

declare var seedContainer: any;

/**
 * @param {any} ancient
 */
declare function selectAncient(ancient: any): void;

/**
 * @param {any} aurora
 */
declare function selectAurora(aurora: any): void;

/**
 * @param {any} item
 * @param {any} id
 */
declare function selectBankItem(item: any, id: any): void;

/**
 * @param {any} char
 * @param {boolean} confirmed defaults to false
 */
declare function selectCharacter(char: any, confirmed?: boolean): void;

/**
 * @param {any} combatArea
 */
declare function selectCombatArea(combatArea: any): void;

/**
 * @param {any} craftingID
 * @param {boolean} update defaults to false
 */
declare function selectCraft(craftingID: any, update?: boolean): void;

/**
 * @param {any} curse
 */
declare function selectCurse(curse: any): void;

/**
 * @param {any} dungeon
 * @param {boolean} forceStart defaults to false
 */
declare function selectDungeon(dungeon: any, forceStart?: boolean): void;

declare var selectedAltMagic: number;

declare var selectedAncient: any;

declare var selectedAttackStyle: number[];

declare var selectedBankItem: any;

declare var selectedCombatArea: any;

declare var selectedCraft: any;

declare var selectedCurse: any;

declare var selectedDungeon: any;

declare var selectedEquipmentSet: number;

declare var selectedFish: any[];

declare var selectedFletch: any;

declare var selectedFletchLog: number;

declare var selectedFood: any;

declare var selectedHerblore: any;

declare var selectedLog: any;

declare var selectedMagicItem: any[];

declare var selectedPatch: any[];

declare var selectedRunecraft: any;

declare var selectedSeed: number;

declare var selectedSmith: any;

declare var selectedSpell: number;

declare var selectedSpellbook: number;

/**
 * @param {any} food
 * @param {boolean} bypass defaults to false
 */
declare function selectEquippedFood(food: any, bypass?: boolean): void;

/**
 * @param {any} areaID
 * @param {any} fishID
 */
declare function selectFish(areaID: any, fishID: any): void;

/**
 * @param {any} fletchingID
 * @param {number} log defaults to 0
 * @param {boolean} update defaults to false
 */
declare function selectFletch(fletchingID: any, log?: number, update?: boolean): void;

/**
 * @param {any} id
 */
declare function selectFood(id: any): void;

/**
 * @param {any} itemID
 */
declare function selectFromDropTable(itemID: any): any;

/**
 * @param {any} skill
 * @param {any} id
 */
declare function selectFromLootTable(skill: any, id: any): any;

/**
 * @param {any} itemID
 * @param {any} qty
 */
declare function selectGolbinFood(itemID: any, qty: any): void;

/**
 * @param {any} herbloreID
 * @param {boolean} update defaults to false
 */
declare function selectHerblore(herbloreID: any, update?: boolean): void;

/**
 * @param {any} id
 * @param {string} selectedItem defaults to selectedMagicItem[id]
 * @param {boolean} select defaults to true
 */
declare function selectItemForMagic(id: any, selectedItem?: string, select?: boolean): void;

/**
 * @param {any} id
 * @param {number} skill defaults to CONSTANTS.skill.Firemaking
 */
declare function selectLog(id: any, skill?: number): void;

/**
 * @param {any} altMagicID
 * @param {boolean} update defaults to false
 */
declare function selectMagic(altMagicID: any, update?: boolean): void;

/**
 * @param {any} m
 * @param {boolean} continueDungeon defaults to false
 */
declare function selectMonster(m: any, continueDungeon?: boolean): void;

/**
 * @param {any} runecraftingID
 * @param {boolean} update defaults to false
 */
declare function selectRunecraft(runecraftingID: any, update?: boolean): void;

/**
 * @param {any} itemID
 * @param {boolean} plantAll defaults to false
 */
declare function selectSeed(itemID: any, plantAll?: boolean): void;

/**
 * @param {any} smithingID
 */
declare function selectSmith(smithingID: any): void;

/**
 * @param {any} spell
 */
declare function selectSpell(spell: any): void;

/**
 * @param {any} spellbook
 */
declare function selectSpellbook(spellbook: any): void;

/**
 * @param {any} itemID
 * @param {number} qty defaults to sellQty
 */
declare function sellItem(itemID: any, qty?: number): void;

declare var sellQty: number;

declare var SEMI_VERSION: string;

/**
 * @param {boolean} forceReload defaults to false
 */
declare function setAccount(forceReload?: boolean): void;

/**
 * @param {number} style defaults to attackStyle
 */
declare function setAttackStyle(style?: number): void;

declare function setBackupSave(): void;

/**
 * @param {any} save
 */
declare function setBackupSaveDetails(save: any): void;

declare function setBaseGolbinEquipment(): void;

declare function setCombatDamageAdjustment(): any;

/**
 * @param {any} set
 * @param {boolean} bypass defaults to false
 */
declare function setEquipmentSet(set: any, bypass?: boolean): void;

/**
 * @param {any} character
 * @param {boolean} reloadNow defaults to false
 */
declare function setForceReload(character: any, reloadNow?: boolean): void;

/**
 * @param {any} gamemode
 */
declare function setGamemode(gamemode: any): void;

/**
 * @param {any} key
 * @param {any} value
 */
declare function setItem(key: any, value: any): void;

/**
 * @param {any} itemID
 */
declare function setMagicItemImg(itemID: any): void;

/**
 * @param {any} string
 */
declare function setToLowercase(string: any): any;

/**
 * @param {any} string
 */
declare function setToUppercase(string: any): any;

declare function setupFishingAreas(): void;

declare function setupNewCharacter(): void;

/**
 * @param {string} cat defaults to null
 */
declare function shopCategory(cat?: string): void;

/**
 * @param {any} areaID
 */
declare function showCombatArea(areaID: any): void;

declare var showCombatMinibar: boolean;

declare var showCombatMinibarCombat: boolean;

declare var showCommas: boolean;

declare var showEnemySkillLevels: boolean;

/**
 * @param {boolean} init defaults to true
 * @param {number} category defaults to 0
 */
declare function showEquipmentSelection(init?: boolean, category?: number): void;

declare function showFarmingAreas(): void;

/**
 * @param {any} id
 */
declare function showForm(id: any): void;

declare var showGPNotify: boolean;

/**
 * @param {boolean} ready defaults to true
 */
declare function showHarvestReady(ready?: boolean): void;

declare var showHPNotify: boolean;

declare var showItemNotify: number;

/**
 * @param {boolean} jumpToTop defaults to true
 */
declare function showMap(jumpToTop?: boolean): void;

/**
 * @param {any} skill
 * @param {any} masteryArray
 */
declare function showMasteryProgress(skill: any, masteryArray: any): void;

/**
 * @param {any} skill
 */
declare function showMasteryUnlocks(skill: any): void;

declare var showSaleNotifications: boolean;

/**
 * @param {any} areaID
 * @param {any} patchID
 * @param {boolean} plantAll defaults to false
 */
declare function showSeeds(areaID: any, patchID: any, plantAll?: boolean): void;

declare var showShopNotifications: boolean;

declare var showSkillMinibar: boolean;

declare function showUsernameChange(): void;

declare var showVirtualLevels: boolean;

/**
 * @param {any} petID
 * @param {any} timePerAction
 * @param {any} qty
 * @param {any} chanceValue
 */
declare function simulateRollForPet(petID: any, timePerAction: any, qty: any, chanceValue: any): void;

declare var skillLevel: number[];

declare var skillName: string[];

declare var SKILLS: {
    '0': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '1': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '10': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '11': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '12': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '13': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '14': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '15': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '16': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '17': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '18': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '19': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '2': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '3': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '4': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '5': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '6': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '7': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '8': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
    '9': {
        hasMastery: boolean;
        maxLevel: number;
        media: string;
        name: string;
    };
};

declare var skillsMenu: boolean;

declare var skillXP: number[];

declare var slayerAreas: {
    areaName: string;
    difficulty: number[];
    media: string;
    monsters: number[];
    slayerItem: number;
    slayerLevel: number;
    type: string;
}[];

declare var slayerCoins: number;

declare var slayerLockedItem: any;

declare var slayerTask: {
    count: number;
    monsterID: number;
}[];

/**
 * @param {any} cat
 */
declare function smithCategory(cat: any): void;

declare var smithingItems: {
    category: number;
    itemID: number;
    name: string;
    smithingID: number;
    smithingLevel: number;
}[];

declare var smithingMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare var smithingReqCheck: any[];

declare var smithingSorted: {
    category: number;
    itemID: number;
    name: string;
    smithingID: number;
    smithingLevel: number;
}[];

declare var smithingTimeout: any;

declare var smithInterval: number;

declare var smithReqCheck: {
    bankID: number;
    check: number;
    reqID: number;
}[];

declare namespace sortable {
    /**
     * @param {any} t
     */
    function addAnimationState(t: any): void;

    /**
     * @param {any} t
     * @param {any} e
     * @param {any} n
     * @param {any} o
     */
    function animate(t: any, e: any, n: any, o: any): void;

    /**
     * @param {any} t
     */
    function animateAll(t: any): any;

    function captureAnimationState(): void;

    /**
     * @param {any} t
     * @param {any} e
     */
    function closest(t: any, e: any): any;

    function destroy(): void;

    /**
     * @param {any} t
     */
    function handleEvent(t: any): void;

    /**
     * @param {any} t
     * @param {any} e
     */
    function option(t: any, e: any): any;

    /**
     * @param {any} t
     */
    function removeAnimationState(t: any): any;

    function save(): void;

    /**
     * @param {any} t
     */
    function sort(t: any): void;

    function toArray(): any;

    namespace multiDrag {
        /**
         * @param {any} t
         */
        function clone(t: any): void;

        function delayEnded(): void;

        /**
         * @param {any} t
         */
        function delayStartGlobal(t: any): void;

        function destroyGlobal(): void;

        /**
         * @param {any} t
         */
        function dragOver(t: any): void;

        /**
         * @param {any} t
         */
        function dragOverAnimationCapture(t: any): void;

        function dragOverAnimationComplete(): void;

        /**
         * @param {any} t
         */
        function dragOverCompleted(t: any): void;

        /**
         * @param {any} t
         */
        function dragStartGlobal(t: any): any;

        /**
         * @param {any} t
         */
        function dragStarted(t: any): void;

        /**
         * @param {any} t
         */
        function drop(t: any): void;

        /**
         * @param {any} t
         */
        function hideClone(t: any): void;

        function nullingGlobal(): void;

        /**
         * @param {any} t
         */
        function revert(t: any): void;

        /**
         * @param {any} t
         */
        function setupClone(t: any): void;

        /**
         * @param {any} t
         */
        function showClone(t: any): void;

        namespace defaults {
            /**
             * @param {any} t
             * @param {any} e
             */
            function setData(t: any, e: any): void;

            var multiDragKey: any;

            var selectedClass: string;
        }

        namespace options {
            function direction(): any;

            /**
             * @param {any} evt
             */
            function onChoose(evt: any): void;

            /**
             * @param {any} evt
             */
            function onEnd(evt: any): void;

            function onMove(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function setData(t: any, e: any): void;

            namespace group {
                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPull(t: any, e: any, n: any, o: any): any;

                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPut(t: any, e: any, n: any, o: any): any;

                var name: any;

                var revertClone: any;
            }

            var animation: number;

            var bubbleScroll: boolean;

            var chosenClass: string;

            var dataIdAttr: string;

            var delay: number;

            var delayOnTouchOnly: boolean;

            var disabled: boolean;

            var dragClass: string;

            var draggable: string;

            var dragoverBubble: boolean;

            var dropBubble: boolean;

            var easing: any;

            var emptyInsertThreshold: number;

            var fallbackClass: string;

            var fallbackOffset: {
                x: number;
                y: number;
            };

            var fallbackOnBody: boolean;

            var fallbackTolerance: number;

            var filter: any;

            var forceFallback: boolean;

            var ghostClass: string;

            var handle: any;

            var ignore: string;

            var invertSwap: boolean;

            var invertedSwapThreshold: any;

            var multiDragKey: any;

            var preventOnFilter: boolean;

            var removeCloneOnHide: boolean;

            var scroll: boolean;

            var scrollSensitivity: number;

            var scrollSpeed: number;

            var selectedClass: string;

            var sort: boolean;

            var store: any;

            var supportPointer: boolean;

            var swapClass: string;

            var swapThreshold: number;

            var touchStartThreshold: number;
        }

        namespace sortable {
            /**
             * @param {any} t
             */
            function addAnimationState(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             * @param {any} n
             * @param {any} o
             */
            function animate(t: any, e: any, n: any, o: any): void;

            /**
             * @param {any} t
             */
            function animateAll(t: any): any;

            function captureAnimationState(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function closest(t: any, e: any): any;

            function destroy(): void;

            /**
             * @param {any} t
             */
            function handleEvent(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function option(t: any, e: any): any;

            /**
             * @param {any} t
             */
            function removeAnimationState(t: any): any;

            function save(): void;

            /**
             * @param {any} t
             */
            function sort(t: any): void;

            function toArray(): any;

            namespace multiDrag {
                /**
                 * @param {any} t
                 */
                function clone(t: any): void;

                function delayEnded(): void;

                /**
                 * @param {any} t
                 */
                function delayStartGlobal(t: any): void;

                function destroyGlobal(): void;

                /**
                 * @param {any} t
                 */
                function dragOver(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragOverAnimationCapture(t: any): void;

                function dragOverAnimationComplete(): void;

                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStartGlobal(t: any): any;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function hideClone(t: any): void;

                function nullingGlobal(): void;

                /**
                 * @param {any} t
                 */
                function revert(t: any): void;

                /**
                 * @param {any} t
                 */
                function setupClone(t: any): void;

                /**
                 * @param {any} t
                 */
                function showClone(t: any): void;

                namespace defaults {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.defaults
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.defaults
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.defaults
                    var setData: any;
                }

                namespace options {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.multiDrag.sortable
                    var toArray: any;
                }

                var isMultiDrag: boolean;

                var multiDragKeyDown: boolean;
            }

            namespace options {
                function direction(): any;

                /**
                 * @param {any} evt
                 */
                function onChoose(evt: any): void;

                /**
                 * @param {any} evt
                 */
                function onEnd(evt: any): void;

                function onMove(): void;

                /**
                 * @param {any} t
                 * @param {any} e
                 */
                function setData(t: any, e: any): void;

                namespace group {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.options.group
                    var checkPull: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.options.group
                    var checkPut: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.options.group
                    var name: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.options.group
                    var revertClone: any;
                }

                var animation: number;

                var bubbleScroll: boolean;

                var chosenClass: string;

                var dataIdAttr: string;

                var delay: number;

                var delayOnTouchOnly: boolean;

                var disabled: boolean;

                var dragClass: string;

                var draggable: string;

                var dragoverBubble: boolean;

                var dropBubble: boolean;

                var easing: any;

                var emptyInsertThreshold: number;

                var fallbackClass: string;

                var fallbackOffset: {
                    x: number;
                    y: number;
                };

                var fallbackOnBody: boolean;

                var fallbackTolerance: number;

                var filter: any;

                var forceFallback: boolean;

                var ghostClass: string;

                var handle: any;

                var ignore: string;

                var invertSwap: boolean;

                var invertedSwapThreshold: any;

                var multiDragKey: any;

                var preventOnFilter: boolean;

                var removeCloneOnHide: boolean;

                var scroll: boolean;

                var scrollSensitivity: number;

                var scrollSpeed: number;

                var selectedClass: string;

                var sort: boolean;

                var store: any;

                var supportPointer: boolean;

                var swapClass: string;

                var swapThreshold: number;

                var touchStartThreshold: number;
            }

            namespace removeOnSpill {
                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.removeOnSpill.sortable
                    var toArray: any;
                }
            }

            namespace revertOnSpill {
                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.revertOnSpill.sortable
                    var toArray: any;
                }

                var startIndex: any;
            }

            namespace scroll {
                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                function drop(): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.scroll.sortable
                    var toArray: any;
                }

                var defaults: {
                    bubbleScroll: boolean;
                    scroll: boolean;
                    scrollSensitivity: number;
                    scrollSpeed: number;
                };
            }

            namespace swap {
                /**
                 * @param {any} t
                 */
                function dragOverValid(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.multiDrag.sortable.swap.sortable
                    var toArray: any;
                }

                var defaults: {
                    swapClass: string;
                };
            }

            var el: HTMLElement;

            var nativeDraggable: boolean;
        }

        var isMultiDrag: boolean;

        var multiDragKeyDown: boolean;
    }

    namespace options {
        function direction(): any;

        /**
         * @param {any} evt
         */
        function onChoose(evt: any): void;

        /**
         * @param {any} evt
         */
        function onEnd(evt: any): void;

        function onMove(): void;

        /**
         * @param {any} t
         * @param {any} e
         */
        function setData(t: any, e: any): void;

        namespace group {
            /**
             * @param {any} t
             * @param {any} e
             * @param {any} n
             * @param {any} o
             */
            function checkPull(t: any, e: any, n: any, o: any): any;

            /**
             * @param {any} t
             * @param {any} e
             * @param {any} n
             * @param {any} o
             */
            function checkPut(t: any, e: any, n: any, o: any): any;

            var name: any;

            var revertClone: any;
        }

        var animation: number;

        var bubbleScroll: boolean;

        var chosenClass: string;

        var dataIdAttr: string;

        var delay: number;

        var delayOnTouchOnly: boolean;

        var disabled: boolean;

        var dragClass: string;

        var draggable: string;

        var dragoverBubble: boolean;

        var dropBubble: boolean;

        var easing: any;

        var emptyInsertThreshold: number;

        var fallbackClass: string;

        var fallbackOffset: {
            x: number;
            y: number;
        };

        var fallbackOnBody: boolean;

        var fallbackTolerance: number;

        var filter: any;

        var forceFallback: boolean;

        var ghostClass: string;

        var handle: any;

        var ignore: string;

        var invertSwap: boolean;

        var invertedSwapThreshold: any;

        var multiDragKey: any;

        var preventOnFilter: boolean;

        var removeCloneOnHide: boolean;

        var scroll: boolean;

        var scrollSensitivity: number;

        var scrollSpeed: number;

        var selectedClass: string;

        var sort: boolean;

        var store: any;

        var supportPointer: boolean;

        var swapClass: string;

        var swapThreshold: number;

        var touchStartThreshold: number;
    }

    namespace removeOnSpill {
        /**
         * @param {any} t
         */
        function drop(t: any): void;

        /**
         * @param {any} t
         */
        function onSpill(t: any): void;

        namespace options {
            function direction(): any;

            /**
             * @param {any} evt
             */
            function onChoose(evt: any): void;

            /**
             * @param {any} evt
             */
            function onEnd(evt: any): void;

            function onMove(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function setData(t: any, e: any): void;

            namespace group {
                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPull(t: any, e: any, n: any, o: any): any;

                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPut(t: any, e: any, n: any, o: any): any;

                var name: any;

                var revertClone: any;
            }

            var animation: number;

            var bubbleScroll: boolean;

            var chosenClass: string;

            var dataIdAttr: string;

            var delay: number;

            var delayOnTouchOnly: boolean;

            var disabled: boolean;

            var dragClass: string;

            var draggable: string;

            var dragoverBubble: boolean;

            var dropBubble: boolean;

            var easing: any;

            var emptyInsertThreshold: number;

            var fallbackClass: string;

            var fallbackOffset: {
                x: number;
                y: number;
            };

            var fallbackOnBody: boolean;

            var fallbackTolerance: number;

            var filter: any;

            var forceFallback: boolean;

            var ghostClass: string;

            var handle: any;

            var ignore: string;

            var invertSwap: boolean;

            var invertedSwapThreshold: any;

            var multiDragKey: any;

            var preventOnFilter: boolean;

            var removeCloneOnHide: boolean;

            var scroll: boolean;

            var scrollSensitivity: number;

            var scrollSpeed: number;

            var selectedClass: string;

            var sort: boolean;

            var store: any;

            var supportPointer: boolean;

            var swapClass: string;

            var swapThreshold: number;

            var touchStartThreshold: number;
        }

        namespace sortable {
            /**
             * @param {any} t
             */
            function addAnimationState(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             * @param {any} n
             * @param {any} o
             */
            function animate(t: any, e: any, n: any, o: any): void;

            /**
             * @param {any} t
             */
            function animateAll(t: any): any;

            function captureAnimationState(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function closest(t: any, e: any): any;

            function destroy(): void;

            /**
             * @param {any} t
             */
            function handleEvent(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function option(t: any, e: any): any;

            /**
             * @param {any} t
             */
            function removeAnimationState(t: any): any;

            function save(): void;

            /**
             * @param {any} t
             */
            function sort(t: any): void;

            function toArray(): any;

            namespace multiDrag {
                /**
                 * @param {any} t
                 */
                function clone(t: any): void;

                function delayEnded(): void;

                /**
                 * @param {any} t
                 */
                function delayStartGlobal(t: any): void;

                function destroyGlobal(): void;

                /**
                 * @param {any} t
                 */
                function dragOver(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragOverAnimationCapture(t: any): void;

                function dragOverAnimationComplete(): void;

                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStartGlobal(t: any): any;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function hideClone(t: any): void;

                function nullingGlobal(): void;

                /**
                 * @param {any} t
                 */
                function revert(t: any): void;

                /**
                 * @param {any} t
                 */
                function setupClone(t: any): void;

                /**
                 * @param {any} t
                 */
                function showClone(t: any): void;

                namespace defaults {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.defaults
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.defaults
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.defaults
                    var setData: any;
                }

                namespace options {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.multiDrag.sortable
                    var toArray: any;
                }

                var isMultiDrag: boolean;

                var multiDragKeyDown: boolean;
            }

            namespace options {
                function direction(): any;

                /**
                 * @param {any} evt
                 */
                function onChoose(evt: any): void;

                /**
                 * @param {any} evt
                 */
                function onEnd(evt: any): void;

                function onMove(): void;

                /**
                 * @param {any} t
                 * @param {any} e
                 */
                function setData(t: any, e: any): void;

                namespace group {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.options.group
                    var checkPull: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.options.group
                    var checkPut: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.options.group
                    var name: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.options.group
                    var revertClone: any;
                }

                var animation: number;

                var bubbleScroll: boolean;

                var chosenClass: string;

                var dataIdAttr: string;

                var delay: number;

                var delayOnTouchOnly: boolean;

                var disabled: boolean;

                var dragClass: string;

                var draggable: string;

                var dragoverBubble: boolean;

                var dropBubble: boolean;

                var easing: any;

                var emptyInsertThreshold: number;

                var fallbackClass: string;

                var fallbackOffset: {
                    x: number;
                    y: number;
                };

                var fallbackOnBody: boolean;

                var fallbackTolerance: number;

                var filter: any;

                var forceFallback: boolean;

                var ghostClass: string;

                var handle: any;

                var ignore: string;

                var invertSwap: boolean;

                var invertedSwapThreshold: any;

                var multiDragKey: any;

                var preventOnFilter: boolean;

                var removeCloneOnHide: boolean;

                var scroll: boolean;

                var scrollSensitivity: number;

                var scrollSpeed: number;

                var selectedClass: string;

                var sort: boolean;

                var store: any;

                var supportPointer: boolean;

                var swapClass: string;

                var swapThreshold: number;

                var touchStartThreshold: number;
            }

            namespace removeOnSpill {
                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.removeOnSpill.sortable
                    var toArray: any;
                }
            }

            namespace revertOnSpill {
                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.revertOnSpill.sortable
                    var toArray: any;
                }

                var startIndex: any;
            }

            namespace scroll {
                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                function drop(): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.scroll.sortable
                    var toArray: any;
                }

                var defaults: {
                    bubbleScroll: boolean;
                    scroll: boolean;
                    scrollSensitivity: number;
                    scrollSpeed: number;
                };
            }

            namespace swap {
                /**
                 * @param {any} t
                 */
                function dragOverValid(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.removeOnSpill.sortable.swap.sortable
                    var toArray: any;
                }

                var defaults: {
                    swapClass: string;
                };
            }

            var el: HTMLElement;

            var nativeDraggable: boolean;
        }
    }

    namespace revertOnSpill {
        /**
         * @param {any} t
         */
        function dragStart(t: any): void;

        /**
         * @param {any} t
         */
        function drop(t: any): void;

        /**
         * @param {any} t
         */
        function onSpill(t: any): void;

        namespace options {
            function direction(): any;

            /**
             * @param {any} evt
             */
            function onChoose(evt: any): void;

            /**
             * @param {any} evt
             */
            function onEnd(evt: any): void;

            function onMove(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function setData(t: any, e: any): void;

            namespace group {
                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPull(t: any, e: any, n: any, o: any): any;

                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPut(t: any, e: any, n: any, o: any): any;

                var name: any;

                var revertClone: any;
            }

            var animation: number;

            var bubbleScroll: boolean;

            var chosenClass: string;

            var dataIdAttr: string;

            var delay: number;

            var delayOnTouchOnly: boolean;

            var disabled: boolean;

            var dragClass: string;

            var draggable: string;

            var dragoverBubble: boolean;

            var dropBubble: boolean;

            var easing: any;

            var emptyInsertThreshold: number;

            var fallbackClass: string;

            var fallbackOffset: {
                x: number;
                y: number;
            };

            var fallbackOnBody: boolean;

            var fallbackTolerance: number;

            var filter: any;

            var forceFallback: boolean;

            var ghostClass: string;

            var handle: any;

            var ignore: string;

            var invertSwap: boolean;

            var invertedSwapThreshold: any;

            var multiDragKey: any;

            var preventOnFilter: boolean;

            var removeCloneOnHide: boolean;

            var scroll: boolean;

            var scrollSensitivity: number;

            var scrollSpeed: number;

            var selectedClass: string;

            var sort: boolean;

            var store: any;

            var supportPointer: boolean;

            var swapClass: string;

            var swapThreshold: number;

            var touchStartThreshold: number;
        }

        namespace sortable {
            /**
             * @param {any} t
             */
            function addAnimationState(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             * @param {any} n
             * @param {any} o
             */
            function animate(t: any, e: any, n: any, o: any): void;

            /**
             * @param {any} t
             */
            function animateAll(t: any): any;

            function captureAnimationState(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function closest(t: any, e: any): any;

            function destroy(): void;

            /**
             * @param {any} t
             */
            function handleEvent(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function option(t: any, e: any): any;

            /**
             * @param {any} t
             */
            function removeAnimationState(t: any): any;

            function save(): void;

            /**
             * @param {any} t
             */
            function sort(t: any): void;

            function toArray(): any;

            namespace multiDrag {
                /**
                 * @param {any} t
                 */
                function clone(t: any): void;

                function delayEnded(): void;

                /**
                 * @param {any} t
                 */
                function delayStartGlobal(t: any): void;

                function destroyGlobal(): void;

                /**
                 * @param {any} t
                 */
                function dragOver(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragOverAnimationCapture(t: any): void;

                function dragOverAnimationComplete(): void;

                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStartGlobal(t: any): any;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function hideClone(t: any): void;

                function nullingGlobal(): void;

                /**
                 * @param {any} t
                 */
                function revert(t: any): void;

                /**
                 * @param {any} t
                 */
                function setupClone(t: any): void;

                /**
                 * @param {any} t
                 */
                function showClone(t: any): void;

                namespace defaults {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.defaults
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.defaults
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.defaults
                    var setData: any;
                }

                namespace options {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.multiDrag.sortable
                    var toArray: any;
                }

                var isMultiDrag: boolean;

                var multiDragKeyDown: boolean;
            }

            namespace options {
                function direction(): any;

                /**
                 * @param {any} evt
                 */
                function onChoose(evt: any): void;

                /**
                 * @param {any} evt
                 */
                function onEnd(evt: any): void;

                function onMove(): void;

                /**
                 * @param {any} t
                 * @param {any} e
                 */
                function setData(t: any, e: any): void;

                namespace group {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.options.group
                    var checkPull: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.options.group
                    var checkPut: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.options.group
                    var name: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.options.group
                    var revertClone: any;
                }

                var animation: number;

                var bubbleScroll: boolean;

                var chosenClass: string;

                var dataIdAttr: string;

                var delay: number;

                var delayOnTouchOnly: boolean;

                var disabled: boolean;

                var dragClass: string;

                var draggable: string;

                var dragoverBubble: boolean;

                var dropBubble: boolean;

                var easing: any;

                var emptyInsertThreshold: number;

                var fallbackClass: string;

                var fallbackOffset: {
                    x: number;
                    y: number;
                };

                var fallbackOnBody: boolean;

                var fallbackTolerance: number;

                var filter: any;

                var forceFallback: boolean;

                var ghostClass: string;

                var handle: any;

                var ignore: string;

                var invertSwap: boolean;

                var invertedSwapThreshold: any;

                var multiDragKey: any;

                var preventOnFilter: boolean;

                var removeCloneOnHide: boolean;

                var scroll: boolean;

                var scrollSensitivity: number;

                var scrollSpeed: number;

                var selectedClass: string;

                var sort: boolean;

                var store: any;

                var supportPointer: boolean;

                var swapClass: string;

                var swapThreshold: number;

                var touchStartThreshold: number;
            }

            namespace removeOnSpill {
                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.removeOnSpill.sortable
                    var toArray: any;
                }
            }

            namespace revertOnSpill {
                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.revertOnSpill.sortable
                    var toArray: any;
                }

                var startIndex: any;
            }

            namespace scroll {
                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                function drop(): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.scroll.sortable
                    var toArray: any;
                }

                var defaults: {
                    bubbleScroll: boolean;
                    scroll: boolean;
                    scrollSensitivity: number;
                    scrollSpeed: number;
                };
            }

            namespace swap {
                /**
                 * @param {any} t
                 */
                function dragOverValid(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.revertOnSpill.sortable.swap.sortable
                    var toArray: any;
                }

                var defaults: {
                    swapClass: string;
                };
            }

            var el: HTMLElement;

            var nativeDraggable: boolean;
        }

        var startIndex: any;
    }

    namespace scroll {
        /**
         * @param {any} t
         */
        function dragOverCompleted(t: any): void;

        /**
         * @param {any} t
         */
        function dragStarted(t: any): void;

        function drop(): void;

        function nulling(): void;

        namespace options {
            function direction(): any;

            /**
             * @param {any} evt
             */
            function onChoose(evt: any): void;

            /**
             * @param {any} evt
             */
            function onEnd(evt: any): void;

            function onMove(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function setData(t: any, e: any): void;

            namespace group {
                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPull(t: any, e: any, n: any, o: any): any;

                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPut(t: any, e: any, n: any, o: any): any;

                var name: any;

                var revertClone: any;
            }

            var animation: number;

            var bubbleScroll: boolean;

            var chosenClass: string;

            var dataIdAttr: string;

            var delay: number;

            var delayOnTouchOnly: boolean;

            var disabled: boolean;

            var dragClass: string;

            var draggable: string;

            var dragoverBubble: boolean;

            var dropBubble: boolean;

            var easing: any;

            var emptyInsertThreshold: number;

            var fallbackClass: string;

            var fallbackOffset: {
                x: number;
                y: number;
            };

            var fallbackOnBody: boolean;

            var fallbackTolerance: number;

            var filter: any;

            var forceFallback: boolean;

            var ghostClass: string;

            var handle: any;

            var ignore: string;

            var invertSwap: boolean;

            var invertedSwapThreshold: any;

            var multiDragKey: any;

            var preventOnFilter: boolean;

            var removeCloneOnHide: boolean;

            var scroll: boolean;

            var scrollSensitivity: number;

            var scrollSpeed: number;

            var selectedClass: string;

            var sort: boolean;

            var store: any;

            var supportPointer: boolean;

            var swapClass: string;

            var swapThreshold: number;

            var touchStartThreshold: number;
        }

        namespace sortable {
            /**
             * @param {any} t
             */
            function addAnimationState(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             * @param {any} n
             * @param {any} o
             */
            function animate(t: any, e: any, n: any, o: any): void;

            /**
             * @param {any} t
             */
            function animateAll(t: any): any;

            function captureAnimationState(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function closest(t: any, e: any): any;

            function destroy(): void;

            /**
             * @param {any} t
             */
            function handleEvent(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function option(t: any, e: any): any;

            /**
             * @param {any} t
             */
            function removeAnimationState(t: any): any;

            function save(): void;

            /**
             * @param {any} t
             */
            function sort(t: any): void;

            function toArray(): any;

            namespace multiDrag {
                /**
                 * @param {any} t
                 */
                function clone(t: any): void;

                function delayEnded(): void;

                /**
                 * @param {any} t
                 */
                function delayStartGlobal(t: any): void;

                function destroyGlobal(): void;

                /**
                 * @param {any} t
                 */
                function dragOver(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragOverAnimationCapture(t: any): void;

                function dragOverAnimationComplete(): void;

                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStartGlobal(t: any): any;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function hideClone(t: any): void;

                function nullingGlobal(): void;

                /**
                 * @param {any} t
                 */
                function revert(t: any): void;

                /**
                 * @param {any} t
                 */
                function setupClone(t: any): void;

                /**
                 * @param {any} t
                 */
                function showClone(t: any): void;

                namespace defaults {
                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.defaults
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.defaults
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.defaults
                    var setData: any;
                }

                namespace options {
                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.multiDrag.sortable
                    var toArray: any;
                }

                var isMultiDrag: boolean;

                var multiDragKeyDown: boolean;
            }

            namespace options {
                function direction(): any;

                /**
                 * @param {any} evt
                 */
                function onChoose(evt: any): void;

                /**
                 * @param {any} evt
                 */
                function onEnd(evt: any): void;

                function onMove(): void;

                /**
                 * @param {any} t
                 * @param {any} e
                 */
                function setData(t: any, e: any): void;

                namespace group {
                    // Too-deep object hierarchy from sortable.scroll.sortable.options.group
                    var checkPull: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.options.group
                    var checkPut: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.options.group
                    var name: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.options.group
                    var revertClone: any;
                }

                var animation: number;

                var bubbleScroll: boolean;

                var chosenClass: string;

                var dataIdAttr: string;

                var delay: number;

                var delayOnTouchOnly: boolean;

                var disabled: boolean;

                var dragClass: string;

                var draggable: string;

                var dragoverBubble: boolean;

                var dropBubble: boolean;

                var easing: any;

                var emptyInsertThreshold: number;

                var fallbackClass: string;

                var fallbackOffset: {
                    x: number;
                    y: number;
                };

                var fallbackOnBody: boolean;

                var fallbackTolerance: number;

                var filter: any;

                var forceFallback: boolean;

                var ghostClass: string;

                var handle: any;

                var ignore: string;

                var invertSwap: boolean;

                var invertedSwapThreshold: any;

                var multiDragKey: any;

                var preventOnFilter: boolean;

                var removeCloneOnHide: boolean;

                var scroll: boolean;

                var scrollSensitivity: number;

                var scrollSpeed: number;

                var selectedClass: string;

                var sort: boolean;

                var store: any;

                var supportPointer: boolean;

                var swapClass: string;

                var swapThreshold: number;

                var touchStartThreshold: number;
            }

            namespace removeOnSpill {
                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.removeOnSpill.sortable
                    var toArray: any;
                }
            }

            namespace revertOnSpill {
                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.revertOnSpill.sortable
                    var toArray: any;
                }

                var startIndex: any;
            }

            namespace scroll {
                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                function drop(): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.scroll.sortable
                    var toArray: any;
                }

                var defaults: {
                    bubbleScroll: boolean;
                    scroll: boolean;
                    scrollSensitivity: number;
                    scrollSpeed: number;
                };
            }

            namespace swap {
                /**
                 * @param {any} t
                 */
                function dragOverValid(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.scroll.sortable.swap.sortable
                    var toArray: any;
                }

                var defaults: {
                    swapClass: string;
                };
            }

            var el: HTMLElement;

            var nativeDraggable: boolean;
        }

        var defaults: {
            bubbleScroll: boolean;
            scroll: boolean;
            scrollSensitivity: number;
            scrollSpeed: number;
        };
    }

    namespace swap {
        /**
         * @param {any} t
         */
        function dragOverValid(t: any): void;

        /**
         * @param {any} t
         */
        function dragStart(t: any): void;

        /**
         * @param {any} t
         */
        function drop(t: any): void;

        function nulling(): void;

        namespace options {
            function direction(): any;

            /**
             * @param {any} evt
             */
            function onChoose(evt: any): void;

            /**
             * @param {any} evt
             */
            function onEnd(evt: any): void;

            function onMove(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function setData(t: any, e: any): void;

            namespace group {
                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPull(t: any, e: any, n: any, o: any): any;

                /**
                 * @param {any} t
                 * @param {any} e
                 * @param {any} n
                 * @param {any} o
                 */
                function checkPut(t: any, e: any, n: any, o: any): any;

                var name: any;

                var revertClone: any;
            }

            var animation: number;

            var bubbleScroll: boolean;

            var chosenClass: string;

            var dataIdAttr: string;

            var delay: number;

            var delayOnTouchOnly: boolean;

            var disabled: boolean;

            var dragClass: string;

            var draggable: string;

            var dragoverBubble: boolean;

            var dropBubble: boolean;

            var easing: any;

            var emptyInsertThreshold: number;

            var fallbackClass: string;

            var fallbackOffset: {
                x: number;
                y: number;
            };

            var fallbackOnBody: boolean;

            var fallbackTolerance: number;

            var filter: any;

            var forceFallback: boolean;

            var ghostClass: string;

            var handle: any;

            var ignore: string;

            var invertSwap: boolean;

            var invertedSwapThreshold: any;

            var multiDragKey: any;

            var preventOnFilter: boolean;

            var removeCloneOnHide: boolean;

            var scroll: boolean;

            var scrollSensitivity: number;

            var scrollSpeed: number;

            var selectedClass: string;

            var sort: boolean;

            var store: any;

            var supportPointer: boolean;

            var swapClass: string;

            var swapThreshold: number;

            var touchStartThreshold: number;
        }

        namespace sortable {
            /**
             * @param {any} t
             */
            function addAnimationState(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             * @param {any} n
             * @param {any} o
             */
            function animate(t: any, e: any, n: any, o: any): void;

            /**
             * @param {any} t
             */
            function animateAll(t: any): any;

            function captureAnimationState(): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function closest(t: any, e: any): any;

            function destroy(): void;

            /**
             * @param {any} t
             */
            function handleEvent(t: any): void;

            /**
             * @param {any} t
             * @param {any} e
             */
            function option(t: any, e: any): any;

            /**
             * @param {any} t
             */
            function removeAnimationState(t: any): any;

            function save(): void;

            /**
             * @param {any} t
             */
            function sort(t: any): void;

            function toArray(): any;

            namespace multiDrag {
                /**
                 * @param {any} t
                 */
                function clone(t: any): void;

                function delayEnded(): void;

                /**
                 * @param {any} t
                 */
                function delayStartGlobal(t: any): void;

                function destroyGlobal(): void;

                /**
                 * @param {any} t
                 */
                function dragOver(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragOverAnimationCapture(t: any): void;

                function dragOverAnimationComplete(): void;

                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStartGlobal(t: any): any;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function hideClone(t: any): void;

                function nullingGlobal(): void;

                /**
                 * @param {any} t
                 */
                function revert(t: any): void;

                /**
                 * @param {any} t
                 */
                function setupClone(t: any): void;

                /**
                 * @param {any} t
                 */
                function showClone(t: any): void;

                namespace defaults {
                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.defaults
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.defaults
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.defaults
                    var setData: any;
                }

                namespace options {
                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.multiDrag.sortable
                    var toArray: any;
                }

                var isMultiDrag: boolean;

                var multiDragKeyDown: boolean;
            }

            namespace options {
                function direction(): any;

                /**
                 * @param {any} evt
                 */
                function onChoose(evt: any): void;

                /**
                 * @param {any} evt
                 */
                function onEnd(evt: any): void;

                function onMove(): void;

                /**
                 * @param {any} t
                 * @param {any} e
                 */
                function setData(t: any, e: any): void;

                namespace group {
                    // Too-deep object hierarchy from sortable.swap.sortable.options.group
                    var checkPull: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.options.group
                    var checkPut: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.options.group
                    var name: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.options.group
                    var revertClone: any;
                }

                var animation: number;

                var bubbleScroll: boolean;

                var chosenClass: string;

                var dataIdAttr: string;

                var delay: number;

                var delayOnTouchOnly: boolean;

                var disabled: boolean;

                var dragClass: string;

                var draggable: string;

                var dragoverBubble: boolean;

                var dropBubble: boolean;

                var easing: any;

                var emptyInsertThreshold: number;

                var fallbackClass: string;

                var fallbackOffset: {
                    x: number;
                    y: number;
                };

                var fallbackOnBody: boolean;

                var fallbackTolerance: number;

                var filter: any;

                var forceFallback: boolean;

                var ghostClass: string;

                var handle: any;

                var ignore: string;

                var invertSwap: boolean;

                var invertedSwapThreshold: any;

                var multiDragKey: any;

                var preventOnFilter: boolean;

                var removeCloneOnHide: boolean;

                var scroll: boolean;

                var scrollSensitivity: number;

                var scrollSpeed: number;

                var selectedClass: string;

                var sort: boolean;

                var store: any;

                var supportPointer: boolean;

                var swapClass: string;

                var swapThreshold: number;

                var touchStartThreshold: number;
            }

            namespace removeOnSpill {
                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.removeOnSpill.sortable
                    var toArray: any;
                }
            }

            namespace revertOnSpill {
                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                /**
                 * @param {any} t
                 */
                function onSpill(t: any): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.revertOnSpill.sortable
                    var toArray: any;
                }

                var startIndex: any;
            }

            namespace scroll {
                /**
                 * @param {any} t
                 */
                function dragOverCompleted(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStarted(t: any): void;

                function drop(): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.scroll.sortable
                    var toArray: any;
                }

                var defaults: {
                    bubbleScroll: boolean;
                    scroll: boolean;
                    scrollSensitivity: number;
                    scrollSpeed: number;
                };
            }

            namespace swap {
                /**
                 * @param {any} t
                 */
                function dragOverValid(t: any): void;

                /**
                 * @param {any} t
                 */
                function dragStart(t: any): void;

                /**
                 * @param {any} t
                 */
                function drop(t: any): void;

                function nulling(): void;

                namespace options {
                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var animation: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var bubbleScroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var chosenClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var dataIdAttr: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var delay: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var delayOnTouchOnly: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var direction: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var disabled: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var dragClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var draggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var dragoverBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var dropBubble: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var easing: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var emptyInsertThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var fallbackClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var fallbackOffset: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var fallbackOnBody: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var fallbackTolerance: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var filter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var forceFallback: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var ghostClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var group: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var handle: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var ignore: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var invertSwap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var invertedSwapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var multiDragKey: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var onChoose: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var onEnd: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var onMove: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var preventOnFilter: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var removeCloneOnHide: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var scrollSensitivity: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var scrollSpeed: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var selectedClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var setData: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var store: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var supportPointer: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var swapClass: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var swapThreshold: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.options
                    var touchStartThreshold: any;
                }

                namespace sortable {
                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var addAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var animate: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var animateAll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var captureAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var closest: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var destroy: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var el: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var handleEvent: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var multiDrag: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var nativeDraggable: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var option: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var options: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var removeAnimationState: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var removeOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var revertOnSpill: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var save: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var scroll: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var sort: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var swap: any;

                    // Too-deep object hierarchy from sortable.swap.sortable.swap.sortable
                    var toArray: any;
                }

                var defaults: {
                    swapClass: string;
                };
            }

            var el: HTMLElement;

            var nativeDraggable: boolean;
        }

        var defaults: {
            swapClass: string;
        };
    }

    var el: HTMLElement;

    var nativeDraggable: boolean;
}

declare class Sortable {
    constructor(t: any, e: any);

    /**
     * @param {any} t
     * @param {any} e
     */
    closest(t: any, e: any): any;

    destroy(): void;

    /**
     * @param {any} t
     */
    handleEvent(t: any): void;

    /**
     * @param {any} t
     * @param {any} e
     */
    option(t: any, e: any): any;

    save(): void;

    /**
     * @param {any} t
     */
    sort(t: any): void;

    toArray(): any;

    static create(t: any, e: any): any;

    static get(t: any): any;

    static mount(...args: any[]): void;
}

declare namespace Sortable {
    namespace utils {
        /**
         * @param {any} t
         */
        function cancelNextTick(t: any): any;

        /**
         * @param {any} t
         */
        function clone(t: any): any;

        /**
         * @param {any} t
         * @param {any} e
         * @param {any} n
         * @param {any} o
         */
        function closest(t: any, e: any, n: any, o: any): any;

        /**
         * @param {any} t
         * @param {any} e
         * @param {any} n
         */
        function css(t: any, e: any, n: any): any;

        /**
         * @param {any} t
         */
        function deselect(t: any): void;

        /**
         * @param {any} t
         * @param {any} e
         */
        function detectDirection(t: any, e: any): any;

        /**
         * @param {any} t
         * @param {any} e
         */
        function extend(t: any, e: any): any;

        /**
         * @param {any} t
         * @param {any} e
         * @param {any} n
         */
        function find(t: any, e: any, n: any): any;

        /**
         * @param {any} t
         * @param {any} e
         * @param {any} n
         */
        function getChild(t: any, e: any, n: any): any;

        /**
         * @param {any} t
         * @param {any} e
         */
        function index(t: any, e: any): any;

        /**
         * @param {any} t
         * @param {any} e
         */
        function is(t: any, e: any): any;

        /**
         * @param {any} t
         */
        function nextTick(t: any): any;

        /**
         * @param {any} t
         * @param {any} e
         * @param {any} n
         */
        function off(t: any, e: any, n: any): void;

        /**
         * @param {any} t
         * @param {any} e
         * @param {any} n
         */
        function on(t: any, e: any, n: any): void;

        /**
         * @param {any} t
         */
        function select(t: any): void;

        /**
         * @param {any} e
         * @param {any} n
         */
        function throttle(e: any, n: any, ...args: any[]): any;

        /**
         * @param {any} t
         * @param {any} e
         * @param {any} n
         */
        function toggleClass(t: any, e: any, n: any): void;
    }

    var eventCanceled: boolean;

    var version: string;
}

declare function sortBank(): void;

declare var specialItems: number[][];

declare function startCloudSync(): void;

declare function startClueHunt(): void;

/**
 * @param {number} timer defaults to 0
 * @param {boolean} eat defaults to false
 */
declare function startCombat(timer?: number, eat?: boolean): void;

/**
 * @param {any} qty
 * @param {boolean} ignore defaults to true
 */
declare function startCooking(qty: any, ignore?: boolean): any;

/**
 * @param {boolean} clicked defaults to false
 */
declare function startCrafting(clicked?: boolean): void;

/**
 * @param {any} areaID
 * @param {any} fishID
 * @param {boolean} clicked defaults to false
 */
declare function startFishing(areaID: any, fishID: any, clicked?: boolean): void;

/**
 * @param {boolean} clicked defaults to false
 */
declare function startFletching(clicked?: boolean): void;

/**
 * @param {number} modifier defaults to 2
 */
declare function startGolbinRaid(modifier?: number): void;

/**
 * @param {boolean} clicked defaults to false
 */
declare function startHerblore(clicked?: boolean): void;

/**
 * @param {boolean} clicked defaults to false
 */
declare function startRunecrafting(clicked?: boolean): void;

/**
 * @param {any} areaID
 * @param {any} patchID
 * @param {boolean} initialise defaults to false
 */
declare function startSeedTimer(areaID: any, patchID: any, initialise?: boolean): void;

/**
 * @param {boolean} clicked defaults to false
 */
declare function startSmithing(clicked?: boolean): void;

declare var statsCombat: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsCooking: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsCrafting: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsFarming: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsFiremaking: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsFishing: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsFletching: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsGeneral: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsHerblore: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsMining: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsRunecrafting: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsSmithing: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsThieving: {
    count: number;
    id: string;
    stat: string;
}[];

declare var statsWoodcutting: {
    count: number;
    id: string;
    stat: string;
}[];

/**
 * @param {boolean} death defaults to false
 * @param {boolean} stopDungeon defaults to false
 * @param {boolean} runAway defaults to false
 */
declare function stopCombat(death?: boolean, stopDungeon?: boolean, runAway?: boolean): void;

/**
 * @param {boolean} gameLoading defaults to false
 */
declare function stopGolbinRaid(gameLoading?: boolean): void;

declare var storedCloudSaves: any[];

/**
 * @param {any} damage
 */
declare function stunNotify(damage: any): void;

declare function switchView(): void;

declare function syncSave(): void;

declare var thievingMastery: {
    mastery: number;
    masteryXP: number;
}[];

declare var thievingNPC: {
    baseSuccess: number;
    level: number;
    lootTable: any[];
    maxCoins: number;
    maxHit: number;
    maxSuccess: number;
    media: string;
    name: string;
    xp: number;
}[];

declare var thievingTimer: any;

/**
 * @param {any} achievement
 * @param {string} skill defaults to null
 * @param {string} itemID defaults to null
 */
declare function timestamp(achievement: any, skill?: string, itemID?: string): void;

/**
 * @param {any} t
 * @param {any} e
 */
declare function tippy(t: any, e: any): any;

declare namespace tippy {
    /**
     * @param {any} t
     * @param {any} e
     */
    function createSingleton(t: any, e: any): any;

    /**
     * @param {any} t
     * @param {any} e
     */
    function delegate(t: any, e: any): any;

    /**
     * @param {any} t
     */
    function hideAll(t: any): void;

    /**
     * @param {any} t
     */
    function setDefaultProps(t: any): void;

    namespace defaultProps {
        function appendTo(): any;

        function onAfterUpdate(): void;

        function onBeforeUpdate(): void;

        function onClickOutside(): void;

        function onCreate(): void;

        function onDestroy(): void;

        function onHidden(): void;

        function onHide(): void;

        function onMount(): void;

        function onShow(): void;

        function onShown(): void;

        function onTrigger(): void;

        function onUntrigger(): void;

        /**
         * @param {any} t
         */
        function render(t: any): any;

        namespace render {
            var $$tippy: boolean;
        }

        var allowHTML: boolean;

        var animateFill: boolean;

        var animation: string;

        var aria: {
            content: string;
            expanded: string;
        };

        var arrow: boolean;

        var content: string;

        var delay: number;

        var duration: number[];

        var followCursor: boolean;

        var getReferenceClientRect: any;

        var hideOnClick: boolean;

        var ignoreAttributes: boolean;

        var inertia: boolean;

        var inlinePositioning: boolean;

        var interactive: boolean;

        var interactiveBorder: number;

        var interactiveDebounce: number;

        var maxWidth: number;

        var moveTransition: string;

        var offset: number[];

        var placement: string;

        var plugins: {
            defaultValue: boolean;
            fn: any;
            name: string;
        }[];

        var popperOptions: {};

        var role: string;

        var showOnCreate: boolean;

        var sticky: boolean;

        var theme: string;

        var touch: boolean;

        var trigger: string;

        var triggerTarget: any;

        var zIndex: number;
    }

    var currentInput: {
        isTouch: boolean;
    };

    var roundArrow: string;
}

declare class Toastify {
    constructor(t: any);

    buildToast(): any;

    hideToast(): void;

    /**
     * @param {any} t
     */
    init(t: any): any;

    /**
     * @param {any} t
     */
    removeElement(t: any): void;

    showToast(): any;

    static reposition(): any;
}

declare namespace Toastify {
    namespace lib {
        class init {
            constructor(t: any);

            buildToast(): any;

            hideToast(): void;

            /**
             * @param {any} t
             */
            init(t: any): any;

            /**
             * @param {any} t
             */
            removeElement(t: any): void;

            showToast(): any;
        }

        function buildToast(): any;

        function hideToast(): void;

        /**
         * @param {any} t
         */
        function removeElement(t: any): void;

        function showToast(): any;

        var toastify: string;
    }
}

/**
 * @param {boolean} update defaults to false
 */
declare function toggleAutoPotion(update?: boolean): void;

declare function toggleBankBorders(): void;

declare function toggleCharacterSelectionView(): void;

declare function toggleCombatSkillMenu(): void;

/**
 * @param {any} menu
 */
declare function toggleMenu(menu: any): void;

declare function togglePlayerContainer(): void;

/**
 * @param {any} prayer
 */
declare function togglePrayer(prayer: any): void;

/**
 * @param {any} setting
 * @param {boolean} ignore defaults to false
 */
declare function toggleSetting(setting: any, ignore?: boolean): void;

/**
 * @param {any} menu
 */
declare function toggleShopMenu(menu: any): void;

declare function toggleSkillMinibar(): void;

declare var tokenInterval: any;

declare var toolsVersion: string;

declare var tooltip: string;

declare var tooltipInstances: {
    bank: {
        clearDelayTimeouts: any;
        destroy: any;
        disable: any;
        enable: any;
        hide: any;
        hideWithInteractivity: any;
        id: number;
        plugins: {
            defaultValue: boolean;
            fn: any;
            name: string;
        }[];
        popper: HTMLElement;
        popperInstance: any;
        props: {
            allowHTML: boolean;
            animateFill: boolean;
            animation: boolean;
            appendTo: any;
            aria: {
                content: string;
                expanded: boolean;
            };
            arrow: boolean;
            content: string;
            delay: number;
            duration: number[];
            followCursor: boolean;
            getReferenceClientRect: any;
            hideOnClick: boolean;
            ignoreAttributes: boolean;
            inertia: boolean;
            inlinePositioning: boolean;
            interactive: boolean;
            interactiveBorder: number;
            interactiveDebounce: number;
            maxWidth: number;
            moveTransition: string;
            offset: number[];
            onAfterUpdate: any;
            onBeforeUpdate: any;
            onClickOutside: any;
            onCreate: any;
            onDestroy: any;
            onHidden: any;
            onHide: any;
            onMount: any;
            onShow: any;
            onShown: any;
            onTrigger: any;
            onUntrigger: any;
            placement: string;
            plugins: {
                defaultValue: boolean;
                fn: any;
                name: string;
            }[];
            popperOptions: {
                modifiers: {
                    enabled: boolean;
                    fn: any;
                    name: string;
                    phase: string;
                }[];
            };
            render: any;
            role: string;
            showOnCreate: boolean;
            sticky: boolean;
            theme: string;
            touch: string;
            trigger: string;
            triggerTarget: any;
            zIndex: number;
        };
        reference: HTMLElement;
        setContent: any;
        setProps: any;
        show: any;
        state: {
            isDestroyed: boolean;
            isEnabled: boolean;
            isMounted: boolean;
            isShown: boolean;
            isVisible: boolean;
        };
        unmount: any;
    }[];
    combatInfo: any[];
    equipment: {
        clearDelayTimeouts: any;
        destroy: any;
        disable: any;
        enable: any;
        hide: any;
        hideWithInteractivity: any;
        id: number;
        plugins: {
            defaultValue: boolean;
            fn: any;
            name: string;
        }[];
        popper: HTMLElement;
        popperInstance: any;
        props: {
            allowHTML: boolean;
            animateFill: boolean;
            animation: boolean;
            appendTo: any;
            aria: {
                content: string;
                expanded: boolean;
            };
            arrow: boolean;
            content: string;
            delay: number;
            duration: number[];
            followCursor: boolean;
            getReferenceClientRect: any;
            hideOnClick: boolean;
            ignoreAttributes: boolean;
            inertia: boolean;
            inlinePositioning: boolean;
            interactive: boolean;
            interactiveBorder: number;
            interactiveDebounce: number;
            maxWidth: number;
            moveTransition: string;
            offset: number[];
            onAfterUpdate: any;
            onBeforeUpdate: any;
            onClickOutside: any;
            onCreate: any;
            onDestroy: any;
            onHidden: any;
            onHide: any;
            onMount: any;
            onShow: any;
            onShown: any;
            onTrigger: any;
            onUntrigger: any;
            placement: string;
            plugins: {
                defaultValue: boolean;
                fn: any;
                name: string;
            }[];
            popperOptions: {
                modifiers: {
                    enabled: boolean;
                    fn: any;
                    name: string;
                    phase: string;
                }[];
            };
            render: any;
            role: string;
            showOnCreate: boolean;
            sticky: boolean;
            theme: string;
            touch: boolean;
            trigger: string;
            triggerTarget: any;
            zIndex: number;
        };
        reference: HTMLElement;
        setContent: any;
        setProps: any;
        show: any;
        state: {
            isDestroyed: boolean;
            isEnabled: boolean;
            isMounted: boolean;
            isShown: boolean;
            isVisible: boolean;
        };
        unmount: any;
    }[];
    equipmentSets: {
        clearDelayTimeouts: any;
        destroy: any;
        disable: any;
        enable: any;
        hide: any;
        hideWithInteractivity: any;
        id: number;
        plugins: {
            defaultValue: boolean;
            fn: any;
            name: string;
        }[];
        popper: HTMLElement;
        popperInstance: any;
        props: {
            allowHTML: boolean;
            animateFill: boolean;
            animation: boolean;
            appendTo: any;
            aria: {
                content: string;
                expanded: boolean;
            };
            arrow: boolean;
            content: string;
            delay: number;
            duration: number[];
            followCursor: boolean;
            getReferenceClientRect: any;
            hideOnClick: boolean;
            ignoreAttributes: boolean;
            inertia: boolean;
            inlinePositioning: boolean;
            interactive: boolean;
            interactiveBorder: number;
            interactiveDebounce: number;
            maxWidth: number;
            moveTransition: string;
            offset: number[];
            onAfterUpdate: any;
            onBeforeUpdate: any;
            onClickOutside: any;
            onCreate: any;
            onDestroy: any;
            onHidden: any;
            onHide: any;
            onMount: any;
            onShow: any;
            onShown: any;
            onTrigger: any;
            onUntrigger: any;
            placement: string;
            plugins: {
                defaultValue: boolean;
                fn: any;
                name: string;
            }[];
            popperOptions: {
                modifiers: {
                    enabled: boolean;
                    fn: any;
                    name: string;
                    phase: string;
                }[];
            };
            render: any;
            role: string;
            showOnCreate: boolean;
            sticky: boolean;
            theme: string;
            touch: boolean;
            trigger: string;
            triggerTarget: any;
            zIndex: number;
        };
        reference: HTMLElement;
        setContent: any;
        setProps: any;
        show: any;
        state: {
            isDestroyed: boolean;
            isEnabled: boolean;
            isMounted: boolean;
            isShown: boolean;
            isVisible: boolean;
        };
        unmount: any;
    }[];
    minibar: {
        clearDelayTimeouts: any;
        destroy: any;
        disable: any;
        enable: any;
        hide: any;
        hideWithInteractivity: any;
        id: number;
        plugins: {
            defaultValue: boolean;
            fn: any;
            name: string;
        }[];
        popper: HTMLElement;
        popperInstance: any;
        props: {
            allowHTML: boolean;
            animateFill: boolean;
            animation: boolean;
            appendTo: any;
            aria: {
                content: string;
                expanded: boolean;
            };
            arrow: boolean;
            content: string;
            delay: number;
            duration: number[];
            followCursor: boolean;
            getReferenceClientRect: any;
            hideOnClick: boolean;
            ignoreAttributes: boolean;
            inertia: boolean;
            inlinePositioning: boolean;
            interactive: boolean;
            interactiveBorder: number;
            interactiveDebounce: number;
            maxWidth: number;
            moveTransition: string;
            offset: number[];
            onAfterUpdate: any;
            onBeforeUpdate: any;
            onClickOutside: any;
            onCreate: any;
            onDestroy: any;
            onHidden: any;
            onHide: any;
            onMount: any;
            onShow: any;
            onShown: any;
            onTrigger: any;
            onUntrigger: any;
            placement: string;
            plugins: {
                defaultValue: boolean;
                fn: any;
                name: string;
            }[];
            popperOptions: {
                modifiers: {
                    enabled: boolean;
                    fn: any;
                    name: string;
                    phase: string;
                }[];
            };
            render: any;
            role: string;
            showOnCreate: boolean;
            sticky: boolean;
            theme: string;
            touch: boolean;
            trigger: string;
            triggerTarget: any;
            zIndex: number;
        };
        reference: HTMLElement;
        setContent: any;
        setProps: any;
        show: any;
        state: {
            isDestroyed: boolean;
            isEnabled: boolean;
            isMounted: boolean;
            isShown: boolean;
            isVisible: boolean;
        };
        unmount: any;
    }[];
    specialAttack: any[];
    spellbook: {
        clearDelayTimeouts: any;
        destroy: any;
        disable: any;
        enable: any;
        hide: any;
        hideWithInteractivity: any;
        id: number;
        plugins: {
            defaultValue: boolean;
            fn: any;
            name: string;
        }[];
        popper: HTMLElement;
        popperInstance: any;
        props: {
            allowHTML: boolean;
            animateFill: boolean;
            animation: boolean;
            appendTo: any;
            aria: {
                content: string;
                expanded: boolean;
            };
            arrow: boolean;
            content: string;
            delay: number;
            duration: number[];
            followCursor: boolean;
            getReferenceClientRect: any;
            hideOnClick: boolean;
            ignoreAttributes: boolean;
            inertia: boolean;
            inlinePositioning: boolean;
            interactive: boolean;
            interactiveBorder: number;
            interactiveDebounce: number;
            maxWidth: number;
            moveTransition: string;
            offset: number[];
            onAfterUpdate: any;
            onBeforeUpdate: any;
            onClickOutside: any;
            onCreate: any;
            onDestroy: any;
            onHidden: any;
            onHide: any;
            onMount: any;
            onShow: any;
            onShown: any;
            onTrigger: any;
            onUntrigger: any;
            placement: string;
            plugins: {
                defaultValue: boolean;
                fn: any;
                name: string;
            }[];
            popperOptions: {
                modifiers: {
                    enabled: boolean;
                    fn: any;
                    name: string;
                    phase: string;
                }[];
            };
            render: any;
            role: string;
            showOnCreate: boolean;
            sticky: boolean;
            theme: string;
            touch: boolean;
            trigger: string;
            triggerTarget: any;
            zIndex: number;
        };
        reference: HTMLElement;
        setContent: any;
        setProps: any;
        show: any;
        state: {
            isDestroyed: boolean;
            isEnabled: boolean;
            isMounted: boolean;
            isShown: boolean;
            isVisible: boolean;
        };
        unmount: any;
    }[];
};

declare var totalMastery: number[];

declare var totalMbucksSpent: number;

declare var treeAutoHandler: boolean[];

declare var treeCutLimit: number;

declare var treeCuttingHandler: any[];

declare var treeMasteryData: {
    mastery: number;
    masteryXP: number;
}[];

declare var treeSeeds: {
    itemID: number;
    level: number;
}[];

declare var tutorialTipData: {
    description: string;
    id: number;
    title: string;
    titleImg: string;
}[];

declare var tutorialTips: {
    activated: boolean;
}[];

declare function unequipFood(): void;

/**
 * @param {any} equipmentSlot
 * @param {string} equipmentSet defaults to null
 * @param {boolean} bypass defaults to false
 */
declare function unequipItem(equipmentSlot: any, equipmentSet?: string, bypass?: boolean): any;

/**
 * @param {any} petID
 */
declare function unlockPet(petID: any): void;

/**
 * @param {any} areaID
 * @param {any} patchID
 */
declare function unlockPlot(areaID: any, patchID: any): void;

declare function updateAmmo(): void;

declare function updateAttackStyleOptions(): void;

declare function updateAvailableFish(): void;

declare function updateAvailableFood(): void;

/**
 * @param {number} skill defaults to CONSTANTS.skill.Firemaking
 */
declare function updateAvailableLogs(skill?: number): void;

declare function updateBank(): void;

/**
 * @param {any} search
 */
declare function updateBankSearch(search: any): void;

/**
 * @param {any} qty
 */
declare function updateBuyQty(qty: any): void;

/**
 * @param {any} clue
 * @param {any} progress
 */
declare function updateClueProgress(clue: any, progress: any): void;

declare function updateCombat(): void;

declare function updateCombatInfoIcons(): void;

/**
 * @param {string} id defaults to "player"
 */
declare function updateCombatLevel(id?: string): void;

declare function updateCompletionLog(): void;

declare function updateCompostQty(): void;

declare function updateCookingFire(): void;

declare function updateCrafting(): void;

/**
 * @param {any} itemID
 */
declare function updateCraftQty(itemID: any): void;

/**
 * @param {any} skill
 * @param {any} masteryArray
 */
declare function updateCurrentMastery(skill: any, masteryArray: any): void;

declare function updateDebuffs(): void;

/**
 * @param {string} dungeon defaults to null
 */
declare function updateDungeonCount(dungeon?: string): void;

declare function updateDungeonEnemyCount(): void;

declare function updateEnemyAttackSpeed(): void;

declare function updateEnemyChanceToHit(): void;

declare function updateEnemyDebuffs(): void;

declare function updateEnemyMaxHit(): void;

declare function updateEnemyValues(): void;

declare function updateEquipmentHeader(): void;

declare function updateEquipmentSetTooltips(): void;

declare function updateEquippedFoodQty(): void;

declare function updateEquipTooltips(): void;

declare function updateFishing(): void;

/**
 * @param {any} areaID
 * @param {any} fishID
 */
declare function updateFishingAreaWeights(areaID: any, fishID: any): void;

/**
 * @param {any} areaID
 * @param {any} fishID
 */
declare function updateFishingMastery(areaID: any, fishID: any): void;

declare function updateFishingMasteryArray(): void;

declare function updateFletching(): void;

declare function updateGameTitle(): void;

/**
 * @param {any} gloves
 * @param {any} skill
 */
declare function updateGloves(gloves: any, skill: any): void;

declare function updateGolbinRaid(): void;

declare function updateGolbinRaidHistory(): void;

declare function updateGP(): void;

/**
 * @param {any} itemID
 * @param {number} qty defaults to -1
 * @param {boolean} use defaults to false
 */
declare function updateHerbloreBonuses(itemID: any, qty?: number, use?: boolean): void;

/**
 * @param {any} itemID
 */
declare function updateHerbloreQty(itemID: any): void;

/**
 * @param {boolean} heal defaults to false
 */
declare function updateHitpoints(heal?: boolean): void;

declare var updateHitpointTimer: number;

declare function updateHitpointVisuals(): void;

/**
 * @param {any} bankID
 * @param {any} itemID
 * @param {any} quantity
 * @param {boolean} ignoreAdd defaults to false
 * @param {boolean} offlineUpdate defaults to false
 */
declare function updateItemInBank(
    bankID: any,
    itemID: any,
    quantity: any,
    ignoreAdd?: boolean,
    offlineUpdate?: boolean
): void;

/**
 * @param {string} item defaults to null
 * @param {number} quantity defaults to 0
 */
declare function updateItemLog(item?: string, quantity?: number): void;

declare function updateKeys(): void;

/**
 * @param {string} monster defaults to null
 */
declare function updateKillCount(monster?: string): void;

/**
 * @param {any} skill
 */
declare function updateLevelProgress(skill: any): void;

declare function updateMasteryArrays(): void;

/**
 * @param {any} skill
 * @param {any} id
 * @param {any} masteryArray
 */
declare function updateMasteryLevel(skill: any, id: any, masteryArray: any): void;

/**
 * @param {any} skill
 * @param {any} masteryID
 * @param {any} masteryArray
 */
declare function updateMasteryProgress(skill: any, masteryID: any, masteryArray: any): void;

declare function updateMasteryTokensClaimAll(): void;

declare function updateMbucks(): void;

/**
 * @param {any} skill
 */
declare function updateMilestoneTab(skill: any): void;

/**
 * @param {any} pageName
 */
declare function updateMinibar(pageName: any): void;

declare function updateMiningOres(): void;

declare function updateMiningRates(): void;

declare function updateNav(): void;

/**
 * @param {boolean} continueAction defaults to true
 */
declare function updateOffline(continueAction?: boolean): void;

/**
 * @param {any} petID
 * @param {boolean} gameLoading defaults to false
 */
declare function updatePet(petID: any, gameLoading?: boolean): void;

declare function updatePetSidebar(): void;

declare function updatePlayerAttackSpeed(): void;

/**
 * @param {boolean} useRunes defaults to true
 */
declare function updatePlayerAurora(useRunes?: boolean): void;

declare function updatePlayerChanceToHit(): void;

declare function updatePlayerDebuffs(): void;

declare function updatePlayerGolbinStats(): void;

/**
 * @param {any} qty
 * @param {boolean} notify defaults to true
 */
declare function updatePlayerHitpoints(qty: any, notify?: boolean): void;

declare function updatePlayerSpecialAttackIcon(): void;

declare function updatePlayerSpecialWeapon(): void;

declare function updatePlayerStats(): void;

declare function updatePlayerValues(): void;

declare function updatePotionHeader(): void;

declare function updatePrayerMenu(): void;

/**
 * @param {number} qty defaults to 0
 * @param {boolean} bury defaults to false
 */
declare function updatePrayerPoints(qty?: number, bury?: boolean): void;

/**
 * @param {any} itemID
 */
declare function updateQty(itemID: any): void;

/**
 * @param {any} ore
 * @param {boolean} initialise defaults to false
 */
declare function updateRockHP(ore: any, initialise?: boolean): void;

declare function updateRuneCount(): void;

declare function updateRunecrafting(): void;

/**
 * @param {any} itemID
 */
declare function updateRunecraftQty(itemID: any): void;

declare function updateRunes(): void;

declare function updateRunesCurrentlyUsed(): void;

declare function updateSalePrice(): void;

declare function updateSaveFileChanges(): void;

/**
 * @param {any} qty
 * @param {boolean} butOne defaults to false
 * @param {string} bankID defaults to null
 */
declare function updateSellQty(qty: any, butOne?: boolean, bankID?: string): void;

/**
 * @param {any} identifier
 */
declare function updateShop(identifier: any): void;

declare function updateShopPrices(): void;

/**
 * @param {any} skill
 */
declare function updateSkillWindow(skill: any): void;

/**
 * @param {any} enemy
 */
declare function updateSlayer(enemy: any): void;

declare function updateSlayerAreaRequirements(): void;

/**
 * @param {number} qty defaults to 0
 */
declare function updateSlayerCoins(qty?: number): void;

/**
 * @param {any} qty
 */
declare function updateSlayerTask(qty: any): void;

declare function updateSmithing(): void;

/**
 * @param {any} itemID
 */
declare function updateSmithQty(itemID: any): void;

declare function updateSpellbook(): void;

/**
 * @param {string} skill defaults to null
 */
declare function updateStats(skill?: string): void;

declare function updateThieving(): void;

/**
 * @param {any} areaID
 */
declare function updateTimeRemaining(areaID: any): void;

declare function updateTooltips(): void;

declare function updateVisualSuccess(): void;

/**
 * @param {any} notify
 */
declare function updateWCMilestone(notify: any): void;

declare function updateWCRates(): void;

/**
 * @param {boolean} cloudSave defaults to false
 */
declare function updateWindow(cloudSave?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function upgradeAutoEat(confirmed?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function upgradeAxe(confirmed?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function upgradeBank(confirmed?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function upgradeCookingFire(confirmed?: boolean): void;

declare var upgradedToFire: boolean;

declare var upgradedToRange: boolean;

/**
 * @param {any} set
 * @param {boolean} confirmed defaults to false
 */
declare function upgradeEquipmentSet(set: any, confirmed?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function upgradeEquipmentSwap(confirmed?: boolean): void;

/**
 * @param {any} bankID
 * @param {any} itemID
 */
declare function upgradeItem(bankID: any, itemID: any): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function upgradeMultiTree(confirmed?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function upgradePickaxe(confirmed?: boolean): void;

/**
 * @param {boolean} confirmed defaults to false
 */
declare function upgradeRod(confirmed?: boolean): void;

declare var useCombinationRunes: boolean;

/**
 * @param {any} bankID
 */
declare function useEight(bankID: any): void;

/**
 * @param {any} itemID
 */
declare function usePotion(itemID: any): void;

declare var username: string;

declare var useSpecialAttack: boolean;

declare var vBank: any[];

/**
 * @param {any} combatArea
 */
declare function viewCombatDetails(combatArea: any): void;

/**
 * @param {any} dungeon
 */
declare function viewDungeonDetails(dungeon: any): void;

/**
 * @param {any} itemID
 */
declare function viewItemContents(itemID: any): any;

declare function viewItemsAcquired(): void;

/**
 * @param {any} bankID
 * @param {any} itemID
 * @param {boolean} showAll defaults to false
 */
declare function viewItemStats(bankID: any, itemID: any, showAll?: boolean): void;

/**
 * @param {any} monsterID
 */
declare function viewMonsterDrops(monsterID: any): any;

/**
 * @param {any} areaType
 * @param {any} areaID
 */
declare function viewMonsters(areaType: any, areaID: any): void;

declare function checkCompletionCapeRequirements(): boolean;

declare function checkMaxCapeRequirements(): boolean;
