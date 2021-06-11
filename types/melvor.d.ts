declare function CompileErrorReport(error: PlayFabModule.IPlayFabError): string;
/** The string representation of a number, or the number itself */
declare type NumberString = string | number;
declare type SkillID = number;
/** An index of items */
declare type ItemID = number;
declare type PetID = number;
declare type BankID = number;
declare type SpellID = number;
declare type AncientID = number;
declare type CurseID = number;
declare type AuroraID = number;
declare type AltmagicID = number;
declare type MonsterID = number;
declare type CharacterID = number;
declare type EquipSetID = 0 | 1 | 2 | 3;
declare type EquippedFoodID = 0 | 1 | 2 | 3;
declare type EquipSlotID = number;
declare type AttackStyleID = number;
declare type CombatAreaID = number;
declare type SlayerAreaID = number;
/** The type of a combat area. 0 for normal, 1 for slayer, 2 for dungeons */
declare type AreaType = 0 | 1 | 2;
declare type DungeonID = number;
declare type LootID = number;
declare type PrayerID = number;
/** An index of playerSpecialAttacks */
declare type PlayerSpecialID = number;
declare type EnemySpecialID = number;
declare type SlayerTier = number;
declare type SaveString = string;
declare type TimeoutID = number;
declare type BankTabID = number;
declare type ObjectKey = string | number | symbol;
declare type FarmingAreaID = number;
declare type FiremakingID = number;
/** An index of fishingItems or fishing mastery */
declare type FishingID = number;
/** An index of FishingAreas */
declare type FishingAreaID = number;
/** An index of FishingAreas[i].fish */
declare type FishID = number;
/** An index of fletchingItems */
declare type FletchingID = number;
declare type FletchLog = number;
declare type FletchingCategory = 0 | 1 | 2 | 3 | 4 | 5;
/** An index of herbloreItemData */
declare type HerbloreItemID = number;
declare type HerbloreCategory = 0 | 1 | 2;
declare type HerbloreTier = 0 | 1 | 2 | 3;
declare type AmmoType = 0 | 1 | 2 | 3;
declare type PageID = number;
declare type NotificationType = 'success' | 'info' | 'danger';
/** Index of glovesTracker, gloveID,glovesCost,glovesActions */
declare type GloveID = number;
/** Index of thievingNPC */
declare type ThievingID = number;
/** Index of tutorialTips */
declare type TutorialtipID = number;
/** Index of agilityObstacles */
declare type ObstacleID = number;
/** Index of passive pillars */
declare type PillarID = number;
/** Categories of agility obstacles */
declare type ObstacleCategories = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/** Current gamemode, 0 is normal, 1 is hardcore, 2 is adventure, 3 is CHAOS */
declare type GameMode = 0 | 1 | 2 | 3;
/** Index of rockData,oreTypes */
declare type MiningID = number;
interface ReqCheck {
    reqID: number;
    bankID: number;
    check: number;
}
interface QtyReqCheck extends ReqCheck {
    qty: number;
    itemID?: ItemID;
}
/** Generic Interface for storing itemID quantity pairs */
interface ItemQuantity {
    id: ItemID;
    qty: number;
}
interface BankItem {
    id: ItemID;
    qty: number;
    tab: BankTabID;
    sellsFor: number;
    stackValue?: number;
    locked?: boolean;
}
interface BankDefaultItem {
    itemID: ItemID;
    tab: BankTabID;
}
interface BankSearch {
    id: ItemID;
    qty: number;
    name: string;
    category: string;
    type: string;
    tab: BankTabID;
}
interface EnemySpecialAttack {
    /** Index of enemySpecialAttacks */
    id: number;
    /** Displayed name */
    name: string;
    /** Displayed description */
    description: string;
    /** Base chance of attack to trigger in % */
    chance: number;
    /** Number of attacks to perform */
    attackCount: number;
    /** Time between attacks in ms */
    attackInterval: number;
    /** Attack always hits */
    forceHit: boolean;
    /** Attack deals damage equal to this multiplied by numberMultiplier */
    setDamage: null | number;
    /** Unused */
    setDOTDamage: null | number;
    /** Attack heals this % of enemy max HP */
    setDOTHeal?: null | number;
    /** Equivalent to attackInterval when setDOTDamage or setDOTHeal are present */
    DOTInterval: null | number;
    /** Equivalent to attackCount when  setDOTDamage or setDOTHeal are present*/
    DOTMaxProcs: null | number;
    /** Attack can apply stun to player on a hit */
    canStun: boolean;
    /** Number of turns attack stuns player for */
    stunTurns: null | number;
    /** Attack can apply active buffs to enemy */
    activeBuffs?: boolean;
    /** Number of enemy turns active buffs last */
    activeBuffTurns?: number;
    /** % Increase to enemy Melee evasion from active buff*/
    increasedMeleeEvasion?: number | null;
    /** % Increase to enemy Ranged evasion from active buff*/
    increasedRangedEvasion?: number | null;
    /** % Increase to enemy Magic evasion from active buff*/
    increasedMagicEvasion?: number | null;
    /** Flat increase to damage reduction from active buff */
    increasedDamageReduction?: null | number;
    /** Damage dealt to player equal to this times numberMultiplier on a player hit, from active buff*/
    reflectMelee?: number | null;
    /** Unused/No Effect */
    reflectRanged?: null;
    /** Unused/No Effect */
    reflectMagic?: null;
    /** Decrease to enemy attack interval in % from active buff */
    increasedAttackSpeed?: number;
    /** Unused */
    attackSpeedSlow?: null;
    /** Unused */
    attackSpeedSlowTurns?: null;
    /** Player attack interval is decreased by this % */
    attackSpeedDebuff?: number;
    /** Number of turns player attack interval is decreased for */
    attackSpeedDebuffTurns?: number | null;
    /** Attack applies burn debuff dealing this % of player max HP every 500ms */
    burnDebuff?: number;
    /** Attack can apply sleep to player on a hit */
    canSleep?: boolean;
    /** Number of turns attack sleeps player for */
    sleepTurns?: number;
    /** Attack damage is multiplied by this if the player is sleeping */
    sleepDamageMultiplier?: number;
    /** Attack deals damage equal to this % of the current enemy hitpoints */
    setHPDamage?: number;
    /** Attack heals the enemy based on damage dealt */
    lifesteal?: boolean;
    /** Enemy heals equal to damage dealt multiplied by this */
    lifestealMultiplier?: number;
    /** Attack can apply debuffs to player */
    applyDebuffs?: boolean;
    /** Number of player turns debuffs are applied for */
    applyDebuffTurns?: number;
    /** Player melee evasion is decreased by this % while debuffed */
    meleeEvasionDebuff?: null | number;
    /** Player ranged evasion is decreased by this % while debuffed */
    rangedEvasionDebuff?: null | number;
    /** Player magic evasion is decreased by this % while debuffed */
    magicEvasionDebuff?: number;
    /** Attack deals damage equal to this % of the players max hit */
    customDamageModifier?: number;
    /** Attack applies markOfDeath to player */
    markOfDeath?: boolean;
    /** Attack permanently decreases player accuracy by this % */
    decreasePlayerAccuracy?: number;
    /** Decrease in player accuracy can stack multiple times */
    decreasePlayerAccuracyStack?: boolean;
    /** Maximum % attack can decrease player accuracy by */
    decreasePlayerAccuracyLimit?: number;
    /** Attack temporarily increases enemy damage reduction by 10% per attack, while attacking */
    intoTheMist?: boolean;
    modifiers?: ModifierData;
}
interface PlayerSpecialAttack {
    /** Index of playerSpecialAttacks */
    id: number;
    /** Display name */
    name: string;
    /** Display description */
    description: string;
    /** Chance this attack happens in % */
    chance: number;
    /** Number of times this attack hits */
    attackCount: number;
    /** Interval between multiple hits */
    attackInterval: number;
    /** Special attack always hits, if ancient spell also requires accuracy above 20k */
    forceHit: boolean;
    /** Attack deals random damage based on current hitpoints */
    setHPDamage?: number;
    /** New Prop for Sandstorm Ring? */
    setHPDamageMinimum?: number;
    /** Attack deals this % of max hit */
    customDamageModifier?: number;
    /** Attack deals this amount of damage * numberMultiplier */
    setDamage?: number | null;
    extraDamage?: number;
    /** Attack deals fixed damage based on magic level */
    stormsnap?: boolean;
    /** Attack has this % chance to stun enemy on hit */
    stunChance?: number;
    /** Attack always stuns enemy on hit */
    canStun?: boolean;
    /** Number of turns the attack stuns the enemy for */
    stunTurns?: number | null;
    /** Attack deals fixed damage equal to play maxHit */
    maxHit?: boolean;
    /** Attack can apply bleed */
    canBleed?: boolean;
    /** Chance to apply bleed on hit in %, if not present defaults to 100% */
    bleedChance?: number;
    /** Interval between bleed procs in [ms] */
    bleedInterval?: number;
    /** Total number of bleed procs */
    bleedCount?: number;
    /** Total bleed damage is totalBleedHP*attackDamage */
    totalBleedHP?: number;
    /** Total bleed damage is this % of enemy max HP */
    totalBleedHPPercent?: number;
    /** Total bleed damage is instead random between [0,totalBleedHP*attackDamage) */
    totalBleedHPCustom?: 1;
    /** Adds value*numberMultiplier to total bleed damage */
    extraBleedDmg?: number;
    /** Enemy sleeps on hit */
    canSleep?: boolean;
    /** Number of turns enemy sleeps for */
    sleepTurns?: number;
    /** Attack permanently decreases enemy ranged evasion by %*/
    decreasedRangedEvasion?: number;
    /** Attack permanently decreases enemy melee evasion by %*/
    decreasedMeleeEvasion?: number;
    /** Attack permanently decreases enemy magic evasion by %*/
    decreasedMagicEvasion?: number;
    /** Attack permanently decreases enemy accuracy by %*/
    decreasedAccuracy?: number;
    /** Damage is always multiplied by this */
    damageMultiplier: number;
    /** Fraction of damage dealt this attack heals player for */
    healsFor?: number;
    /** On hit, decreased enemy attack speed by this % */
    attackSpeedDebuff?: number;
    /** Turns attackSpeedDebuff lasts */
    attackSpeedDebuffTurns?: number;
    /** Unused */
    setDOTDamage?: null;
    /** Unused */
    DOTInterval?: null;
    /** Unused */
    DOTMaxProcs?: null;
    /** Unused */
    activeBuffs?: boolean;
    /** Unused */
    burnDebuff?: number;
    modifiers?: ModifierData;
}
interface PlayerEnemyObject<Player, Enemy> {
    player: Player;
    enemy: Enemy;
}
declare type CombatData = PlayerEnemyObject<PlayerCombatData, EnemyCombatData>;
declare type SpecialAttackData = {
    isActive?: boolean;
    turnsLeft?: number;
};
interface EnemyCombatData extends EnemyModifierData {
    /** 1: LEMONG GANG 2: Some carrot people or whatever */
    gang?: number;
    /** Monster ID */
    id: null | MonsterID;
    /** Current HP of enemy */
    hitpoints: number;
    /** Maximum HP of enemy */
    maxHitpoints?: number;
    /** Attack Skill Level */
    attackLevel?: number;
    /** Strength Skill Level */
    strengthLevel?: number;
    /** Defence Skill Level */
    defenceLevel?: number;
    /** Ranged Skill Level */
    rangedLevel?: number;
    /** Magic Skill Level */
    magicLevel?: number;
    /** Level used to calculate Accuracy Rating */
    effectiveAttackLevel: number;
    /** Melee Attack Bonus (used to calculate Accuracy) */
    attackBonus?: number;
    /** Ranged Attack Bonus (used to Calculate Accuracy) */
    attackBonusRanged?: number;
    /** Magic Attack Bonus (used to Calculate Accuracy) */
    attackBonusMagic?: number;
    /** Current Accuracy Rating of enemy */
    maximumAttackRoll: number;
    /** Level used to calculate enemy max hit */
    effectiveStrengthLevel: number;
    /** Melee Strength Bonus (used to calculate Max Hit for Melee) */
    strengthBonus?: number;
    /** Ranged Strength Bonus (used to calcualte Max Hit for Ranged) */
    strengthBonusRanged?: number;
    /** Magic % Damage Bonus (used to calculate Max Hit for Magic) */
    damageBonusMagic?: number;
    /** Magic Strength Bonus (Golbin Raid Exclusive, used to calculate Max Hit) */
    magicStrengthBonus?: number;
    /** Current Max Hit of enemy */
    maximumStrengthRoll: number;
    /** Level used to calculate melee evasion */
    effectiveDefenceLevel: number;
    /** Level used to calculate ranged evasion */
    effectiveRangedDefenceLevel?: number;
    /** Level used to calculate magic evasion */
    effectiveMagicDefenceLevel?: number;
    /** Melee Defence Bonus (used to calculate melee evasion) */
    defenceBonus?: number;
    /** Ranged Defence Bonus (used to calculate ranged evasion) */
    defenceBonusRanged?: number;
    /** Magic Defence Bonus (used to calculate magic evasion) */
    defenceBonusMagic?: number;
    /** Current Melee Evasion */
    maximumDefenceRoll: number;
    /** Current Ranged Evasion */
    maximumRangedDefenceRoll?: number;
    /** Current Magic Evasion */
    maximumMagicDefenceRoll?: number;
    /** Base attack speed of enemy before any modifiers [ms] */
    baseAttackSpeed?: number;
    /** Current Attack Interval of Enemy [ms] */
    attackSpeed?: number;
    /** If enemy has special attack */
    hasSpecialAttack?: boolean;
    /** Indices of enemySpecialAttacks */
    specialAttackID?: number[];
    /** % Chance for each specialAttackID */
    specialAttackChances?: number[];
    /** Base damage reduction of enemy before any modifiers [%]*/
    baseDamageReduction?: number;
    /** Current damage reduction of enemy [%] */
    damageReduction?: number;
    /** If Enemy has buffs from special attack active */
    activeBuffs: boolean;
    /** enemyTimers Left until buffs run out */
    buffTurns: number;
    /** Enemy reflects this amount*numberMultiplier damage upon being hit */
    reflectMelee: null | number;
    /** @deprecated Unused property (has no effect) */
    reflectRanged: null | number;
    /** @deprecated Unused property (has no effect) */
    reflectMagic: null | number;
    /** enemyTimers left until slow runs out */
    attackSpeedDebuffTurns: number;
    /** Enemy is afflicted by player curse */
    isCursed: boolean;
    /** Index of CURSES enemy is afflicted by */
    curseID?: CurseID;
    /** enemyTimers left until curse runs out */
    curseTurnsLeft: number;
    /** Damage multplier from Anguish Curse (additive with other % damage bonuses) */
    extraDamageMultiplier: number;
    /** % decrease to maximumAttackRoll from player special attacks (multiplicative) */
    decreasedAccuracy?: number;
    /** Enemy is under the effect of a bleed DOT */
    isBleeding?: boolean;
    /** Interval between bleed ticks [ms] */
    bleedInterval?: number;
    /** Number of bleed ticks before removing DOT*/
    bleedCount?: number;
    /** Property used to calculate bleedHPPerProc */
    totalBleedHP?: number;
    /** Enemy is under the stun effect */
    stunned?: boolean;
    /** enemyTimers left until stun wears off */
    stunTurns?: number;
    /** Enemy is under the sleep effect */
    sleep?: boolean;
    /** enemyTimers left until sleep wears off */
    sleepTurns?: number;
    /** Enemy has one or more passive modifiers active */
    hasPassive?: boolean;
    /** Indices of combatPassive to apply to enemy stats */
    passiveID?: number[];
    /** Enemy is using the Into the Mist special attack */
    intoTheMist?: boolean;
    /** Enemy attack type
     * 0: Melee
     * 1: Ranged
     * 2: Magic
     */
    attackType?: number;
    /** Enemy is dead */
    isDead?: boolean;
    /** @deprecated Unused property (has no effect) */
    lifesteal?: number;
    burnDebuff?: number;
    isBurning?: boolean;
}
interface PlayerCombatData {
    /** Current HP of player */
    hitpoints: number;
    /** Player is stunned and can't attack */
    stunned: boolean;
    /** Number of playerTimers left till stun wears off*/
    stunTurns: number;
    /** Base attack speed of player [ms] before attackSpeedDebuff/attackSpeedBuff */
    baseAttackSpeed: number;
    /** % decrease to baseAttackSpeed (multiplicative with other speed bonuses) */
    attackSpeedDebuff: number;
    /** Number of playerTimers left until slow wears off */
    attackSpeedDebuffTurns: number;
    /** @deprecated Unused Property */
    increasedDamageReduction: number;
    /** Player is sleeping and can't attack */
    sleep?: boolean;
    /** Number of playerTimers left till sleep wears off */
    sleepTurns?: number;
    /** Player has burn debuff active */
    isBurning?: boolean;
    /** Total % of player maxHitpoints that burn debuff takes */
    burnDebuff?: number;
    /** Player is under the effects of an enemy special stat debuff */
    activeDebuffs?: boolean;
    /** Number of enemyTimers left till attack debuff wears off */
    debuffTurns?: number;
    /** % decrease to player melee evasion from enemy spec (multiplicative with other decreases) */
    meleeEvasionDebuff?: number;
    /** % decrease to player ranged evasion from enemy spec (multiplicative with other decreases) */
    rangedEvasionDebuff?: number;
    /** % decrease to player magic evasion from enemy spec (multiplicative with other decreases) */
    magicEvasionDebuff?: number;
    /** % decrease to maximumAttackRoll from enemy spec (additive with other decreases) */
    decreasedAccuracy?: number;
    /** Number of affliction debuffs stacked on player */
    afflictedStacks?: number;
    /** Player has special attack */
    hasSpecialAttack?: boolean;
    /** Array of special attack IDs the player has */
    specialAttackID?: PlayerSpecialID[];
    /** Increased minimum hit from Charged Aurora */
    increasedMinHit?: number;
    /** Player has Mark of Death debuff active removePlayerMarkOfDeath, applyMarkOfDeathToPlayer are relevant*/
    markOfDeath?: boolean;
    /** Number of Mark of Death debuff stacks player has. */
    markOfDeathStacks?: number;
    /** @deprecated This seems to not actually do anything */
    markOfDeathTurns?: number;
    /** % Healing from damage from Fervor Aurora (additive with other increases) */
    lifesteal?: number;
    /** decrease to playerAttackSpeed in [ms] from Surge Aurora (applies after all other bonuses) */
    attackSpeedBuff?: number;
    /** % increase to maximumRangedDefenceRoll from Surge Aurora (multiplicative with other increases) */
    rangedEvasionBuff?: number;
    /** Flat increase to baseMaxHit from Fury Aurora (applies before bonuses from modifiers) */
    increasedMaxHit?: number;
    /** % increase to Magic Evasion from Fury Aurora (multiplicative with other increases) */
    magicEvasionBuff?: number;
    /** % increase to Melee Evasion from Fervor Aurora (multiplicative with other increases) */
    meleeEvasionBuff?: number;
    /** @deprecated Unused property, use playerModifiers instead */
    slayerAreaEffectNegationPercent?: number;
    /** @deprecated Unused property, use playerModifiers instead */
    slayerAreaEffectNegationFlat?: number;
    /**
     * Combat levels used to compute player stats
     * 0: Attack
     * 1: Strength
     * 2: Defence
     * 3: Hitpoints
     * 4: Ranged
     * 5: Magic
     * 6: Prayer
     */
    combatLevels?: number[];
    /** Stats from players Equipment */
    baseStats?: PlayerBaseStats;
    /**
     * Bonuses from combat potions
     * 0: Melee Accuracy
     * 1: Melee Evasion
     * 2: Melee Max Hit
     * 3: Ranged Evasion, Ranged Accuracy
     * 4: Ranged Max Hit
     * 5: Magic Evasion, Magic Accuracy
     * 6: Magic Max Hit
     * 7: Regeneration (but this value isn't used)
     * 8: Damage Reduction
     */
    herbloreBonus?: number[];
    /** Free skill levels used to compute maximumAttackRoll from combat style */
    attackStyleBonusAccuracy?: number;
    /** Free skill levels used to compute baseMaxHit from combat style */
    attackStyleBonusStrength?: number;
    maximumDefenceRoll?: number;
    maximumRangedDefenceRoll?: number;
    maximumMagicDefenceRoll?: number;
}
declare type PlayerBaseStats = {
    /** Melee Attack Bonus [stab,slash,defend] */
    attackBonus: [number, number, number];
    /** Melee Defence Bonus */
    defenceBonus: number;
    /** Melee Strength Bonus */
    strengthBonus: number;
    /** % Damage Reduction */
    damageReduction: number;
    /** Ranged Attack Bonus */
    attackBonusRanged: number;
    /** Ranged Defence Bonus */
    defenceBonusRanged: number;
    /** Ranged Strength Bonus */
    strengthBonusRanged: number;
    /** Magic Attack Bonus */
    attackBonusMagic: number;
    /** Magic Defence Bonus */
    defenceBonusMagic: number;
    /** % Bonus to Magic Max Hit */
    damageBonusMagic: number;
};
interface EquipmentSet {
    equipment: number[];
    ammo: number;
    summonAmmo: [number, number];
}
interface ItemQuantity2 {
    itemID: ItemID;
    qty: number;
}
interface MonsterStat {
    monsterID: MonsterID;
    stats: number[];
}
interface SlayerTask {
    monsterID: MonsterID;
    count: number;
    tier: SlayerTier;
    extended: boolean;
}
interface CookingItem {
    itemID: ItemID;
    cookingID: number;
    cookingLevel: number;
}
interface LogsForFire {
    itemID: ItemID;
    firemakingID: number;
}
interface CraftingItem {
    itemID: ItemID;
    craftingLevel: number;
    craftingID: number;
}
interface Seed {
    itemID: ItemID;
    level: number;
}
interface FarmingPatch {
    type: string;
    seedID: ItemID;
    compost: number;
    timePlanted: number;
    setInterval: number;
    timeout: null | TimeoutID;
    hasGrown: boolean;
    unlocked: boolean;
    gloop: boolean;
    level: number;
    cost: number;
}
interface FarmingArea {
    id: number;
    areaName: string;
    patches: FarmingPatch[];
}
interface FishingItem {
    itemID: ItemID;
    fishingLevel: number;
    fishingID: FishingID;
}
declare type Loot = [ItemID, number];
declare type LootTable = Loot[];
interface FletchingItem {
    itemID: ItemID;
    fletchingLevel: number;
    fletchingID: FletchingID;
    fletchingCategory: FletchingCategory;
}
interface RaidHistory {
    skillLevels: number[];
    equipment: number[];
    ammo: number;
    inventory: ItemQuantity[];
    food: ItemQuantity2;
    wave: number;
    kills: number;
    timestamp: number;
    raidCoinsEarned: number;
}
interface HerbloreItem {
    id: HerbloreItemID;
    name: string;
    itemID: ItemID[];
    category: HerbloreCategory;
    herbloreLevel: number;
    herbloreXP: number;
}
interface HerbloreBonus {
    itemID: ItemID;
    bonus: [null | PotionBonusID, null | number];
    charges: number;
}
declare type HerbloreBonuses = NumberDictionary<HerbloreBonus>;
declare type PotionBonusID = number;
interface BaseSpell {
    name: string;
    media: string;
    magicLevelRequired: number;
    runesRequired: ItemQuantity[];
    runesRequiredAlt?: ItemQuantity[];
}
interface Spell extends BaseSpell {
    maxHit: number;
    spellType: number;
}
interface Curse extends BaseSpell {
    description: string;
    chance: number;
    effectValue: number | number[];
}
interface BaseAurora extends BaseSpell {
    description: string;
    effectValue: number | number[];
    requiredItem: ItemID | -1;
}
interface Ancient extends BaseSpell {
    description: string;
    specID: PlayerSpecialID;
    maxHit: number;
    requiredDungeonCompletion: [DungeonID, number];
}
interface Altmagic extends BaseSpell {
    description: string;
    /**
     * -1: Do not need to select item
     * 0: Need to select a Bar item
     * 1: Need to select an item from the bank (may be a subset)
     */
    selectItem: number;
    /** If present, spell produces this item */
    convertTo?: ItemID;
    /** If present, spell produces this quantity of item */
    convertToQty?: number;
    magicXP: number;
    /** If present, spell ignores coal costs */
    ignoreCoal?: boolean;
    /** Alchemy value multiplier */
    effectValue?: number;
    /** Spell is item alchemy */
    isAlch?: boolean;
    /** Spell converts junk*/
    isJunk?: boolean;
    /** Spell converts coal */
    needCoal?: boolean;
}
interface ItemStat {
    /**
     * 0: timesFound
     * 1: timesSold
     * 2: gpFromSale
     * 3: deathCount
     * 4: damageTaken
     * 5: damageDealt
     * 6: missedAttacks
     * 7: timesEaten
     * 8: healedFor
     * 9: totalAttacks
     * 10: amountUsedInCombat
     * 11: timeWaited
     * 12: timesDied
     * 13: timesGrown
     * 14: harvestAmount
     * 15: enemiesKilled
     * 16: timesOpened
     */
    stats: number[];
    itemID: ItemID;
}
interface OfflineBase {
    skill: SkillID;
    timestamp: number;
}
/** Used for woodcutting */
interface OfflineWoodcut extends OfflineBase {
    action: number[];
}
/** Used for woodcutting */
interface OfflineMagic extends OfflineBase {
    action: [number, [number, number, number]];
}
interface OfflineUnset {
    skill: null;
    action: null;
    timestamp: null;
}
/** Used for all other skills */
interface OfflineSkill extends OfflineBase {
    action: number;
}
/** Used for fishing, fletching, alt magic */
interface OfflineTuple extends OfflineBase {
    action: [number, number];
}
declare type Offline = OfflineWoodcut | OfflineTuple | OfflineUnset | OfflineSkill | OfflineMagic;
declare type TippyTooltip = import("tippy.js").Instance<import("tippy.js").Props>;
declare type TooltipInstances = {
    bank: TippyTooltip[];
    spellbook: TippyTooltip[];
    equipment: TippyTooltip[];
    minibar: TippyTooltip[];
    combatInfo: TippyTooltip[];
    specialAttack: TippyTooltip[];
    equipmentSets: TippyTooltip[];
    masteryModal: TippyTooltip[];
    combatXP: TippyTooltip[];
    autoEat: TippyTooltip[];
    fletching?: TippyTooltip[];
    herblore?: TippyTooltip[];
    smithing?: TippyTooltip[];
    enemyAttackType?: TippyTooltip[];
    loot?: TippyTooltip[];
    crafting?: TippyTooltip[];
    prayerMenu?: TippyTooltip[];
    craftingRecipe?: TippyTooltip[];
    herbloreRecipe?: TippyTooltip[];
    selectMagic?: TippyTooltip[];
    selectItemForMagic?: TippyTooltip[];
    runecrafting?: TippyTooltip[];
    runecraftingRecipe?: TippyTooltip[];
    fletchingRecipe?: TippyTooltip[];
    smithingRecipe?: TippyTooltip[];
    itemLog?: TippyTooltip[];
    monsterLog?: TippyTooltip[];
    petLog?: TippyTooltip[];
    agilityItemCosts?: TippyTooltip[];
    summoningSynergy?: TippyTooltip[];
    summoningRecipe?: TippyTooltip[];
    summoning?: TippyTooltip[];
};
declare type SumFunction = (arr: number[]) => number;
declare type OldMasteryArray = {
    mastery: number;
    masteryXP: number;
}[];
declare type MasteryCheckPoint = number;
declare type Mastery = NumberDictionary<MasteryData>;
interface MasteryData {
    pool: number;
    xp: number[];
}
interface Monster {
    id?: MonsterID;
    name: string;
    hitpoints: number;
    attackLevel: number;
    strengthLevel: number;
    defenceLevel: number;
    rangedLevel: number;
    magicLevel: number;
    attackBonus: number;
    attackBonusRanged?: number;
    strengthBonus: number;
    defenceBonus: number;
    defenceBonusRanged: number;
    defenceBonusMagic: number;
    attackSpeed: number;
    attackType: number;
    dropCoins: [number, number];
    lootTable?: [ItemID, number, number][];
    lootChance?: number;
    media: string;
    bones?: number | null;
    canSlayer?: boolean;
    strengthBonusRanged?: number;
    slayerXP?: number;
    attackBonusMagic?: number;
    damageBonusMagic?: number;
    selectedSpell?: SpellID;
    lootQty?: [number];
    foundIn?: 1;
    description?: string;
    isBoss?: boolean;
    hasSpecialAttack?: boolean;
    specialAttackID?: number[];
    setMaxHit?: number | null;
    boneQty?: number;
    overrideSpecialChances?: number[];
    hasPassive?: boolean;
    passiveID?: number[];
    damageReduction?: number;
    ignoreCompletion?: boolean;
    hasAnimation?: boolean;
    mediaAnimation?: string;
}
interface Pet {
    name: string;
    description: string;
    media: string;
    acquiredBy: string;
    skill: SkillID;
    chance?: number;
    killCount?: number;
    ignoreCompletion?: boolean;
    modifiers?: ModifierData;
    obtained?: {
        dungeonCompletion: [DungeonID, number][];
    };
    activeInRaid: boolean;
}
interface RockData {
    maxHP: number;
    damage: number;
    depleted: boolean;
    respawnTimer: null | TimeoutID;
}
/** Mastery ID for runecrafting */
declare type RunecraftingID = number;
declare type RunecraftingCategory = 0 | 1 | 2 | 3 | 4 | 5 | 6;
interface RunecraftingItem {
    itemID: ItemID;
    runecraftingLevel: number;
    runecraftingID: RunecraftingID;
    runecraftingCategory: RunecraftingCategory;
}
interface SaveGame {
    firstTime: typeof firstTime;
    username: typeof username;
    nameChanges: typeof nameChanges;
    gp: typeof gp;
    currentBankUpgrade: typeof currentBankUpgrade;
    skillXP: typeof skillXP;
    /** Redundant, can be reproduced on load */
    skillLevel: typeof skillLevel;
    /** Redundant, can be reproduced on load */
    nextLevelProgress: typeof nextLevelProgress;
    treeMasteryData: typeof treeMasteryData;
    currentAxe: typeof currentAxe;
    treeCutLimit: typeof treeCutLimit;
    /** Contains redundant data, can be reduced in size */
    bank: typeof bank;
    bankMax: typeof bankMax;
    ignoreBankFull: typeof ignoreBankFull;
    /** Contains redundant data, can be reduced in size */
    statsGeneral: typeof statsGeneral;
    /** Contains redundant data, can be reduced in size */
    statsWoodcutting: typeof statsWoodcutting;
    logsMastery: typeof logsMastery;
    /** Contains redundant data, can be reduced in size */
    statsFiremaking: typeof statsFiremaking;
    fishMastery: typeof fishMastery;
    currentRod: typeof currentRod;
    /** Contains redundant data, can be reduced in size */
    statsFishing: typeof statsFishing;
    cookingMastery: typeof cookingMastery;
    upgradedToRange: typeof upgradedToRange;
    /** Contains redundant data, can be reduced in size */
    statsCooking: typeof statsCooking;
    defaultPageOnLoad: typeof defaultPageOnLoad;
    miningOreMastery: typeof miningOreMastery;
    /** Contains redundant data, can be reduced in size */
    statsMining: typeof statsMining;
    currentPickaxe: typeof currentPickaxe;
    /** Contains redundant data, can be reduced in size */
    statsSmithing: typeof statsSmithing;
    levelUpScreen: typeof levelUpScreen;
    gameUpdateNotification: typeof gameUpdateNotification;
    /** Redundant, can be reproduced on load */
    equippedItems: typeof equippedItems;
    attackStyle: typeof attackStyle;
    /** Contains redundant data, can be reduced in size */
    combatData: typeof combatData;
    currentCombatFood: typeof currentCombatFood;
    /** Can be reduced in size by changing to array */
    equippedFood: typeof equippedFood;
    smithingMastery: typeof smithingMastery;
    /** Contains redundant data, can be reduced in size */
    statsCombat: typeof statsCombat;
    continueThievingOnStun: typeof continueThievingOnStun;
    thievingMastery: typeof thievingMastery;
    farmingMastery: typeof farmingMastery;
    showItemNotify: typeof showItemNotify;
    /** Contains redundant data, can be reduced in size */
    glovesTracker: typeof glovesTracker;
    currentCookingFire: typeof currentCookingFire;
    /** Contains redundant data, can be reduced in size */
    rockData: typeof rockData;
    fletchingMastery: typeof fletchingMastery;
    craftingMastery: typeof craftingMastery;
    /** Redundant, can be reproduced on load*/
    ammo: typeof ammo;
    myBankVersion: typeof myBankVersion;
    /** Contains redundant data, can be reduced in size */
    statsThieving: typeof statsThieving;
    /** Contains redundant data, can be reduced in size */
    statsFarming: typeof statsFarming;
    /** Contains redundant data, can be reduced in size */
    statsFletching: typeof statsFletching;
    /** Contains redundant data, can be reduced in size */
    statsCrafting: typeof statsCrafting;
    autoRestartDungeon: typeof autoRestartDungeon;
    autoSaveCloud: typeof autoSaveCloud;
    selectedSpell: typeof selectedSpell;
    runecraftingMastery: typeof runecraftingMastery;
    darkMode: typeof darkMode;
    buyQty: typeof buyQty;
    itemLog: typeof itemLog;
    dungeonCompleteCount: typeof dungeonCompleteCount;
    sellQty: typeof sellQty;
    /** Contains redundant data, can be reduced in size */
    statsRunecrafting: typeof statsRunecrafting;
    showGPNotify: typeof showGPNotify;
    enableAccessibility: typeof enableAccessibility;
    /** Old save variable that can be deleted */
    showSkillNav: boolean;
    accountGameVersion: typeof accountGameVersion;
    prayerPoints: typeof prayerPoints;
    slayerCoins: typeof slayerCoins;
    /** Can be serialized to reduce size */
    slayerTask: typeof slayerTask;
    showEnemySkillLevels: typeof showEnemySkillLevels;
    monsterStats: typeof monsterStats;
    itemStats: typeof itemStats;
    confirmationOnClose: typeof confirmationOnClose;
    herbloreMastery: typeof herbloreMastery;
    /** Contains redundant data, can be reduced in size */
    newFarmingAreas: typeof newFarmingAreas;
    equipmentSets: typeof equipmentSets;
    selectedEquipmentSet: typeof selectedEquipmentSet;
    currentAutoEat: typeof currentAutoEat;
    equipmentSetsPurchased: typeof equipmentSetsPurchased;
    /** Contains redundant data, can be reduced in size */
    herbloreBonuses: typeof herbloreBonuses;
    autoPotion: typeof autoPotion;
    autoUseSpecialAttack: typeof autoUseSpecialAttack;
    showHPNotify: typeof showHPNotify;
    /** Contains redundant data, can be reduced in size */
    statsHerblore: typeof statsHerblore;
    offline: typeof offline;
    selectedAttackStyle: typeof selectedAttackStyle;
    showCommas: typeof showCommas;
    showVirtualLevels: typeof showVirtualLevels;
    formatNumberSetting: typeof formatNumberSetting;
    /** Can be converted to array to reduce size */
    tutorialTips: typeof tutorialTips;
    saveTimestamp: typeof saveTimestamp;
    secretAreaUnlocked: typeof secretAreaUnlocked;
    equipmentSwapPurchased: typeof equipmentSwapPurchased;
    godUpgrade: typeof godUpgrade;
    lockedItems: typeof lockedItems;
    showSaleNotifications: typeof showSaleNotifications;
    showShopNotifications: typeof showShopNotifications;
    pauseOfflineActions: typeof pauseOfflineActions;
    showCombatMinibar: typeof showCombatMinibar;
    showCombatMinibarCombat: typeof showCombatMinibarCombat;
    activeAurora: typeof activeAurora;
    currentGamemode: typeof currentGamemode;
    petUnlocked: typeof petUnlocked;
    showSkillMinibar: typeof showSkillMinibar;
    saveStateBeforeRaid: typeof saveStateBeforeRaid;
    golbinRaidHistory: typeof golbinRaidHistory;
    golbinRaidStats: typeof golbinRaidStats;
    raidCoins: typeof raidCoins;
    disableAds: typeof disableAds;
    /** Can be serialized to reduce size */
    SETTINGS: typeof SETTINGS;
    /** Can be serialized to reduce size */
    MASTERY: typeof MASTERY;
    useCombinationRunes: typeof useCombinationRunes;
    firstTimeLoad: typeof firstTimeLoad;
    slayerTaskCompletion: typeof slayerTaskCompletion;
    autoSlayerUnlocked: typeof autoSlayerUnlocked;
    autoSlayer: typeof autoSlayer;
    /** Redundant, can be reproduced on load */
    itemsAlreadyFound: typeof itemsAlreadyFound;
    xmasPresents: number;
    /** Can be massively reduced in size */
    shopItemsPurchased: typeof shopItemsPurchased;
    titleNewsID: typeof titleNewsID;
    chosenAgilityObstacles: typeof chosenAgilityObstacles;
    skillsUnlocked: typeof skillsUnlocked;
    agilityObstacleBuildCount: typeof agilityObstacleBuildCount;
    agilityPassivePillarActive: typeof agilityPassivePillarActive;
    scheduledPushNotifications: typeof scheduledPushNotifications;
    randomModifiers: typeof randomModifiers;
    summoningData: typeof summoningData;
}
declare type SaveKey = keyof SaveGame;
interface SmithingItem {
    itemID: ItemID;
    smithingLevel: number;
    smithingID: number;
    name: string;
    category: SmithingCategory;
}
/** Index of smithingItems */
declare type SmithingID = number;
declare type SmithingCategory = number;
interface GameStat {
    stat: string;
    id: string;
    count: number;
}
/** Index of trees */
declare type WoodcuttingID = number;
interface BankSearchOpts {
    shouldSort: true;
    tokenize: true;
    matchAllTokens: true;
    findAllMatches: true;
    threshold: 0.1;
    location: 0;
    distance: 100;
    maxPatternLength: 32;
    minMatchCharLength: 1;
    keys: ['name', 'category', 'id', 'type'];
}
interface StandardModifierObject<Standard> {
    /** Increases maximumAttackRoll by %: Implemented */
    increasedGlobalAccuracy: Standard;
    /** Decreases maximumAttackRoll by %: Implemented */
    decreasedGlobalAccuracy: Standard;
    /** Increases maximumAttackRoll by % when using Melee: Implemented */
    increasedMeleeAccuracyBonus: Standard;
    /** Decreases maximumAttackRoll by % when using Melee: Implemented */
    decreasedMeleeAccuracyBonus: Standard;
    /** Increases baseMaxHit by % when using Melee: Implemented */
    increasedMeleeStrengthBonus: Standard;
    /** Decreases baseMaxHit by % when using Melee: Implemented */
    decreasedMeleeStrengthBonus: Standard;
    /** Increases maximumDefenceRoll by %: Implemented */
    increasedMeleeEvasion: Standard;
    /** Decreases maximumDefenceRoll by %: Implemented */
    decreasedMeleeEvasion: Standard;
    /** Increases maximumAttackRoll by % when using Ranged: Implemented */
    increasedRangedAccuracyBonus: Standard;
    /** Decreases maximumAttackRoll by % when using Ranged: Implemented */
    decreasedRangedAccuracyBonus: Standard;
    /** Increases baseMaxHit by % when using Ranged: Implemented */
    increasedRangedStrengthBonus: Standard;
    /** Decreases baseMaxHit by % when using Ranged: Implemented */
    decreasedRangedStrengthBonus: Standard;
    /** Increases maximumRangedDefenceRoll by %: Implemented */
    increasedRangedEvasion: Standard;
    /** Decreases maximumRangedDefenceRoll by %: Implemented */
    decreasedRangedEvasion: Standard;
    /** Increases maximumAttackRoll by % when using Magic: Implemented */
    increasedMagicAccuracyBonus: Standard;
    /** Decreases maximumAttackRoll by % when using Magic: Implemented */
    decreasedMagicAccuracyBonus: Standard;
    /** Increases baseMaxHit by % when using Magic: Implemented */
    increasedMagicDamageBonus: Standard;
    /** Decreases baseMaxHit by % when using Magic: Implemented */
    decreasedMagicDamageBonus: Standard;
    /** Increases maximumMagicDefenceRoll by %: Implemented */
    increasedMagicEvasion: Standard;
    /** Decreases maximumMagicDefenceRoll by %: Implemented */
    decreasedMagicEvasion: Standard;
    /** Increases baseMaxHit by value*numberMultiplier after other bonuses: Implemented */
    increasedMaxHitFlat: Standard;
    /** Decreases baseMaxHit by value*numberMultiplier after other bonuses: Implemented */
    decreasedMaxHitFlat: Standard;
    /** Increases baseMaxHit by %: Implemnted */
    increasedMaxHitPercent: Standard;
    /** Decreases baseMaxHit by %: Implemented */
    decreasedMaxHitPercent: Standard;
    /** Increases damageReduction by value: Implemented */
    increasedDamageReduction: Standard;
    /** Decreases damageReduction by value: Implemented */
    decreasedDamageReduction: Standard;
    /** Increases chance to double bones and item drops by value: Implemented
     * Appears to be referenced in calculateChanceToDouble but it is never used in the context of combat */
    increasedChanceToDoubleLootCombat: Standard;
    /** Decreases chance to double bones and item drops by value: Implemented */
    decreasedChanceToDoubleLootCombat: Standard;
    /** Increases slayer coin gains by %: Implemented */
    increasedSlayerCoins: Standard;
    /** Decreases slayer coin gains by %: Implemented */
    decreasedSlayerCoins: Standard;
    /** Increases base HP regen by value*numberMultiplier: Implemented */
    increasedHPRegenFlat: Standard;
    /** Decreases base HP regen by value*numberMultiplier: Implemented */
    decreasedHPRegenFlat: Standard;
    /** Increases GP gain by % from all sources except selling items: Implemented  */
    increasedGPGlobal: Standard;
    /** Decreases GP gain by % from all sources except selling items: Implemented  */
    decreasedGPGlobal: Standard;
    /** Increases GP gain by % from monster drops and confetti crossbow: Implemented */
    increasedGPFromMonsters: Standard;
    /** Decreases GP gain by % from monster drops and confetti crossbow: Implemented */
    decreasedGPFromMonsters: Standard;
    /** Increases GP gain by value from monster drops before % bonuses: Implemented */
    increasedGPFromMonstersFlat: Standard;
    /** Decreases GP gain by value from monster drops before % bonuses: Implemented */
    decreasedGPFromMonstersFlat: Standard;
    /** Increases GP gain by % from thieving: Implemented */
    increasedGPFromThieving: Standard;
    /** Decreases GP gain by % from thieving: Implemented */
    decreasedGPFromThieving: Standard;
    /** Increases GP gain by value from thieving before % bonuses: Implemented */
    increasedGPFromThievingFlat: Standard;
    /** Decreases GP gain by value from thieving before % bonuses: Implemented */
    decreasedGPFromThievingFlat: Standard;
    /** Increases damage dealt to boss monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    increasedDamageToBosses: Standard;
    /** Decreases damage dealt to boss monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    decreasedDamageToBosses: Standard;
    /** Increases damage dealt to slayer task monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    increasedDamageToSlayerTasks: Standard;
    /** Decreases damage dealt to slayer task monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    decreasedDamageToSlayerTasks: Standard;
    /** Increases damage dealt to slayer area monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    increasedDamageToSlayerAreaMonsters: Standard;
    /** Decreases damage dealt to slayer area monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    decreasedDamageToSlayerAreaMonsters: Standard;
    /** Increases damage dealt to combat area monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    increasedDamageToCombatAreaMonsters: Standard;
    /** Decreases damage dealt to combat area monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    decreasedDamageToCombatAreaMonsters: Standard;
    /** Increases damage dealt to dungeon monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    increasedDamageToDungeonMonsters: Standard;
    /** Decreases damage dealt to dungeon monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    decreasedDamageToDungeonMonsters: Standard;
    /** Increases damage dealt to monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    increasedDamageToAllMonsters: Standard;
    /** Decreases damage dealt to monsters by %: Implemented (only on attack damage, excludes ancient magicks) */
    decreasedDamageToAllMonsters: Standard;
    /** Increases the % efficiency of auto-eat by value: Implemented */
    increasedAutoEatEfficiency: Standard;
    /** Decreases the % efficiency of auto-eat by value: Implemented */
    decreasedAutoEatEfficiency: Standard;
    /** Increases the threshold % of maxHitpoints that will trigger auto-eat by value: Implemented */
    increasedAutoEatThreshold: Standard;
    /** Decreases the threshold % of maxHitpoints that will trigger auto-eat by value: Implemented */
    decreasedAutoEatThreshold: Standard;
    /** Increases the % of maxHitpoints that auto-eat heals to by value: Implemented */
    increasedAutoEatHPLimit: Standard;
    /** Decreases the % of maxHitpoints that auto-eat heals to by value: Implemented */
    decreasedAutoEatHPLimit: Standard;
    /** Increases the base healing value of food by %: Implemented */
    increasedFoodHealingValue: Standard;
    /** Decreases the base healing value of food by %: Implemented */
    decreasedFoodHealingValue: Standard;
    /** Increases the % chance to preserve prayerpoints by value: Implemented */
    increasedChanceToPreservePrayerPoints: Standard;
    /** Decreases the % chance to preserve prayerpoints by value: Implemented */
    decreasedChanceToPreservePrayerPoints: Standard;
    /** Decreases the quantity of prayerpoints consumed by a prayer by value: Implemented */
    increasedFlatPrayerCostReduction: Standard;
    /** Increases the quantity of prayerpoints consumed by a prayer by value: Implemented */
    decreasedFlatPrayerCostReduction: Standard;
    /** Increases minHitIncrease by value*numberMultiplier when using Air spells: Implemented */
    increasedMinAirSpellDmg: Standard;
    /** Decreases minHitIncrease by value*numberMultiplier when using Air spells: Implemented */
    decreasedMinAirSpellDmg: Standard;
    /** Increases minHitIncrease by value*numberMultiplier when using Water spells: Implemented */
    increasedMinWaterSpellDmg: Standard;
    /** Decreases minHitIncrease by value*numberMultiplier when using Water spells: Implemented */
    decreasedMinWaterSpellDmg: Standard;
    /** Increases minHitIncrease by value*numberMultiplier when using Earth spells: Implemented */
    increasedMinEarthSpellDmg: Standard;
    /** Decreases minHitIncrease by value*numberMultiplier when using Earth spells: Implemented */
    decreasedMinEarthSpellDmg: Standard;
    /** Increases minHitIncrease by value*numberMultiplier when using Fire spells: Implemented */
    increasedMinFireSpellDmg: Standard;
    /** Decreases minHitIncrease by value*numberMultiplier when using Fire spells: Implemented */
    decreasedMinFireSpellDmg: Standard;
    /** Increases the % chance to preserve ranged ammo by value: Implemented */
    increasedAmmoPreservation: Standard;
    /** Decreases the % chance to preserve ranged ammo by value: Implemented */
    decreasedAmmoPreservation: Standard;
    /** Increases the % chance to preserve runes by value: Implemented, but is messy */
    increasedRunePreservation: Standard;
    /** Decreases the % chance to preserve runes by value: Implemented, but is messy */
    decreasedRunePreservation: Standard;
    /** Decreases playerAttackSpeed by value [ms] before % bonuses: Implemented */
    decreasedPlayerAttackSpeed: Standard;
    /** Increases playerAttackSpeed by value [ms] before % bonuses: Implemented */
    increasedPlayerAttackSpeed: Standard;
    /** Decreases playerAttackSpeed by %: Implemented */
    decreasedPlayerAttackSpeedPercent: Standard;
    /** Increases playerAttackSpeed by %: Implemented */
    increasedPlayerAttackSpeedPercent: Standard;
    /** Increases slayer area effect % values by value: Implemented */
    increasedSlayerAreaEffectNegationFlat: Standard;
    /** Decreases slayer area effect % values by value: Implemented */
    decreasedSlayerAreaEffectNegationFlat: Standard;
    /** Decreases enemySpawnTimer by value [ms]: Implemented */
    decreasedMonsterRespawnTimer: Standard;
    /** Increases enemySpawnTimer by value [ms]: Implemented */
    increasedMonsterRespawnTimer: Standard;
    /** Increases the GP gained from item sales by %: Implemented, but not used. */
    increasedGPFromSales: Standard;
    /** Decreases the GP gained from item sales by %: Implemented, but not used. */
    decreasedGPFromSales: Standard;
    /** Increases maximum bank space by value: Implemented */
    increasedBankSpace: Standard;
    /** Decreases maximum bank space by value: Implemented */
    decreasedBankSpace: Standard;
    /** Increases maximum bank space by value, and increases bank upgrade cost via getBankUpgradeCost: Implemented */
    increasedBankSpaceShop: Standard;
    /** Decreases maximum bank space by value, and decreases bank upgrade cost via getBankUpgradeCost: Implemented */
    decreasedBankSpaceShop: Standard;
    /** Increases % chance to preserve potion charges by value: Implemented */
    increasedChanceToPreservePotionCharge: Standard;
    /** Decreases % chance to preserve potion charges by value: Implemented */
    decreasedChanceToPreservePotionCharge: Standard;
    /** Not implemented, Not Used
     * @deprecated Use increasedChanceToDoubleItemsSkill instead
     */
    increasedChanceToDoubleLootThieving: Standard;
    /** Not implemented, Not Used.
     * @deprecated Use decreasedChanceToDoubleItemsSkill instead
     */
    decreasedChanceToDoubleLootThieving: Standard;
    /** Increases % chance to preserve resources in all skills by value: Implemented via calculateSkillPreservationChance*/
    increasedGlobalPreservationChance: Standard;
    /** Decreases % chance to preserve resources in all skills by value: Implemented via calculateSkillPreservationChance*/
    decreasedGlobalPreservationChance: Standard;
    /** @deprecated Unimplemented and Used. Holdover from when agility had stamina */
    increasedStaminaPreservationChance: Standard;
    /** @deprecated Unimplemented and Used. Holdover from when agility had stamina */
    decreasedStaminaPreservationChance: Standard;
    /** Increases mastery xp earned from all skills by %: Implemented in getMasteryXpToAdd */
    increasedGlobalMasteryXP: Standard;
    /** Decreases mastery xp earned from all skills by %: Implemented in getMasteryXpToAdd */
    decreasedGlobalMasteryXP: Standard;
    /** Increases xp earned from all skills by %: Implemented in addXPBonuses */
    increasedGlobalSkillXP: Standard;
    /** Decreases xp earned from all skills by %: Implemented in addXPBonuses */
    decreasedGlobalSkillXP: Standard;
    /** @deprecated Unimplemented and Unused. Holdover from when agility had stamina */
    increasedMaxStamina: Standard;
    /** @deprecated Unimplemented and Unused. Holdover from when agility had stamina */
    decreasedMaxStamina: Standard;
    /** Increases maxRockHP by value: Implemented*/
    increasedMiningNodeHP: Standard;
    /** Decreases maxRockHP by value: Implemented*/
    decreasedMiningNodeHP: Standard;
    /** Allows swapping equipment/equipment sets/food in dungeons: Implemented */
    dungeonEquipmentSwapping: Standard;
    /** Increases available equipment sets by value: Implemented */
    increasedEquipmentSets: Standard;
    /** Allows usage of autoslayer: Implemented */
    autoSlayerUnlocked: Standard;
    /** Increases the number of trees that can be cut by value: Implemented */
    increasedTreeCutLimit: Standard;
    /** Increases the % chance to double items from all skills by value: Implemented */
    increasedChanceToDoubleItemsGlobal: Standard;
    /** Decreases the % chance to double items from all skills by value: Implemented */
    decreasedChanceToDoubleItemsGlobal: Standard;
    /** Increases the harvest quantity of farming by %: Implemented */
    increasedFarmingYield: Standard;
    /** Decreases the harvest quantity of farming by %: Implemented */
    decreasedFarmingYield: Standard;
    /** Increases maxHitpoints by value*numberMultiplier: Implemented */
    increasedMaxHitpoints: Standard;
    /** Decreases maxHitpoints by value*numberMultiplier: Implemented */
    decreasedMaxHitpoints: Standard;
    /** @deprecated Unused and Unimplented, Holdover from when agility had stamina */
    increasedStaminaPerObstacle: Standard;
    /** @deprecated Unused and Unimplented, Holdover from when agility had stamina */
    decreasedStaminaPerObstacle: Standard;
    /** Increases slayer task length by %: Implemented */
    increasedSlayerTaskLength: Standard;
    /** Decreases slayer task length by %: Implemented */
    decreasedSlayerTaskLength: Standard;
    /** @deprecated Unused and Unimplented, Holdover from when agility had stamina */
    increasedStaminaCost: Standard;
    /** @deprecated Unused and Unimplented, Holdover from when agility had stamina */
    decreasedStaminaCost: Standard;
    /** Increases the % of attack damage the player is healed for by value: Implemented */
    increasedLifesteal: Standard;
    /** Decreases the % of attack damage the player is healed for by value: Implemented */
    decreasedLifesteal: Standard;
    /** Unused and Unimplemented */
    increasedReflectDamage: Standard;
    /** Unused and Unimplemented */
    decreasedReflectDamage: Standard;
    /** Increases the GP from agility by %: Implemented in getAgilityGPMultiplier */
    increasedGPFromAgility: Standard;
    /** Decreases the GP from agility by %: Implemented in getAgilityGPMultiplier */
    decreasedGPFromAgility: Standard;
    /** Increases the % chance to double Ores from mining by value: Implemented */
    increasedChanceToDoubleOres: Standard;
    /** Decreases the % chance to double Ores from mining by value: Implemented */
    decreasedChanceToDoubleOres: Standard;
    /** Increases HP regeneration by %: Implemented */
    increasedHitpointRegeneration: Standard;
    /** Decreases HP regeneration by %: Implemented */
    decreasedHitpointRegeneration: Standard;
    /** Decreases golbin raid skip cost by %: Implemented */
    golbinRaidWaveSkipCostReduction: Standard;
    /** Increase the quantity of food from golbin raid by value: Implemented, possibly bugged as it just increases the amount, not just the min */
    golbinRaidIncreasedMinimumFood: Standard;
    /** Increases the maximum ammo quantity from goblin raid by %: Implemented */
    golbinRaidIncreasedMaximumAmmo: Standard;
    /** Increases the maximum rune quantity from goblin raid by %: Implemented */
    golbinRaidIncreasedMaximumRunes: Standard;
    /** Unlocks prayer in golbin raid: Implemented */
    golbinRaidPrayerUnlocked: Standard;
    /** Increases the prayer level in golbin raid by value: Implemented, I don't think this one displays anywhere though */
    golbinRaidIncreasedPrayerLevel: Standard;
    /** Increases the quantity of prayer points started with in golbin raid by value: Implemented */
    golbinRaidIncreasedPrayerPointsStart: Standard;
    /** Increases the quantity of prayer points recieved per wave in golbin raid by value: Implemented. Golbin raid could have issues with the PP being effected by other modifiers though */
    golbinRaidIncreasedPrayerPointsWave: Standard;
    /** Unlocks passive slot selection on tenth wave of golbin raid: Implemented */
    golbinRaidPassiveSlotUnlocked: Standard;
    /** Increases the quantity of runes started with in golbin raid by value: Implemented */
    golbinRaidIncreasedStartingRuneCount: Standard;
    /** Changes the itemID of the starting weapon in golbin raid to value: Implemented */
    golbinRaidStartingWeapon: Standard;
    /** Increases minHitIncrease by floor(baseMaxHit*value/100): Implemented */
    increasedMinHitBasedOnMaxHit: Standard;
    /** Decreases minHitIncrease by floor(baseMaxHit*value/100): Implemented */
    decreasedMinHitBasedOnMaxHit: Standard;
    /** Increases the charges of potions by value: Implemented */
    increasedPotionChargesFlat: Standard;
    /** Decreases the charges of potions by value: Implemented */
    decreasedPotionChargesFlat: Standard;
    /** Increases the % chance to recieve bird's nests from Woodcutting by value: Implemented*/
    increasedBirdNestDropRate: Standard;
    /** Decreases the % chance to recieve bird's nests from Woodcutting by value: Implemented*/
    decreasedBirdNestDropRate: Standard;
    /** Increases the % chance to not use rockHP when mining by value: Implemented */
    increasedChanceNoDamageMining: Standard;
    /** Decreases the % chance to not use rockHP when mining by value: Implemented */
    decreasedChanceNoDamageMining: Standard;
    /** Increases the % chance to recieve a gold bar when smelting silver bars by value: Implemented */
    increasedSeeingGoldChance: Standard;
    /** Decreases the % chance to recieve a gold bar when smelting silver bars by value: Implemented */
    decreasedSeeingGoldChance: Standard;
    /** Increases the % chance to double crops from farming by value: Implemented via calculateChanceToDouble*/
    increasedChanceDoubleHarvest: Standard;
    /** Decreases the % chance to double crops from farming by value: Implemented via calculateChanceToDouble*/
    decreasedChanceDoubleHarvest: Standard;
    /** Increases the % chance to recieve bonus elemental runes from runecrafting by value: Implemented */
    increasedChanceForElementalRune: Standard;
    /** Decreases the % chance to recieve bonus elemental runes from runecrafting by value: Implemented */
    decreasedChanceForElementalRune: Standard;
    /** Increases the quantity of bonus elemental runes from runecrafting by value: Implemented */
    increasedElementalRuneGain: Standard;
    /** Decreases the quantity of bonus elemental runes from runecrafting by value: Implemented */
    decreasedElementalRuneGain: Standard;
    /** Increases the % chance that a random tier of potion is recieved from herblore by value: Implemented */
    increasedChanceRandomPotionHerblore: Standard;
    /** Decreases the % chance that a random tier of potion is recieved from herblore by value: Implemented */
    decreasedChanceRandomPotionHerblore: Standard;
    /** Increases the number of times the player rolls to hit an enemy by value: Implemented */
    increasedAttackRolls: Standard;
    /** Decreases the number of times the player rolls to hit an enemy by value: Implemented */
    decreasedAttackRolls: Standard;
    /** Effect of Bonfire Potions: Implemented */
    freeBonfires: Standard;
    /** Increases the Magic XP gained from alt magic by %: Implemented */
    increasedAltMagicSkillXP: Standard;
    /** Decreases the Magic XP gained from alt magic by %: Implemented */
    decreasedAltMagicSkillXP: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedMovementSpeed: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedMovementSpeed: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedTeleportCost: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedTeleportCost: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedUpdateDelay: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedUpdateDelay: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedLemonGang: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedLemonGang: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsIncreasedCarrotGang: Standard;
    /** ??? It's a Mystery ??? */
    aprilFoolsDecreasedCarrotGang: Standard;
    increasedGPOnEnemyHit: Standard;
    decreasedGPOnEnemyHit: Standard;
    decreasedEnemyMeleeEvasion: Standard;
    increasedEnemyMeleeEvasion: Standard;
    decreasedEnemyRangedEvasion: Standard;
    increasedEnemyRangedEvasion: Standard;
    decreasedEnemyMagicEvasion: Standard;
    increasedEnemyMagicEvasion: Standard;
    decreasedEnemyAccuracy: Standard;
    increasedEnemyAccuracy: Standard;
    increasedAdditionalRunecraftCountRunes: Standard;
    decreasedAdditionalRunecraftCountRunes: Standard;
    summoningSynergy_0_1: Standard;
    summoningSynergy_0_6: Standard;
    summoningSynergy_0_7: Standard;
    summoningSynergy_0_8: Standard;
    summoningSynergy_0_12: Standard;
    summoningSynergy_0_13: Standard;
    summoningSynergy_0_14: Standard;
    summoningSynergy_0_15: Standard;
    summoningSynergy_1_2: Standard;
    summoningSynergy_1_8: Standard;
    summoningSynergy_1_12: Standard;
    summoningSynergy_1_13: Standard;
    summoningSynergy_1_14: Standard;
    summoningSynergy_1_15: Standard;
    summoningSynergy_2_6: Standard;
    summoningSynergy_2_7: Standard;
    summoningSynergy_2_8: Standard;
    summoningSynergy_2_12: Standard;
    summoningSynergy_2_13: Standard;
    summoningSynergy_2_14: Standard;
    summoningSynergy_2_15: Standard;
    summoningSynergy_3_4: Standard;
    summoningSynergy_3_5: Standard;
    summoningSynergy_3_9: Standard;
    summoningSynergy_3_10: Standard;
    summoningSynergy_3_11: Standard;
    summoningSynergy_3_16: Standard;
    summoningSynergy_3_17: Standard;
    summoningSynergy_3_18: Standard;
    summoningSynergy_3_19: Standard;
    summoningSynergy_4_5: Standard;
    summoningSynergy_4_9: Standard;
    summoningSynergy_4_10: Standard;
    summoningSynergy_4_11: Standard;
    summoningSynergy_4_16: Standard;
    summoningSynergy_4_17: Standard;
    summoningSynergy_4_18: Standard;
    summoningSynergy_4_19: Standard;
    summoningSynergy_5_9: Standard;
    summoningSynergy_5_10: Standard;
    summoningSynergy_5_11: Standard;
    summoningSynergy_5_16: Standard;
    summoningSynergy_5_17: Standard;
    summoningSynergy_5_18: Standard;
    summoningSynergy_6_7: Standard;
    summoningSynergy_6_8: Standard;
    summoningSynergy_6_12: Standard;
    summoningSynergy_6_13: Standard;
    summoningSynergy_6_14: Standard;
    summoningSynergy_6_15: Standard;
    summoningSynergy_7_8: Standard;
    summoningSynergy_7_12: Standard;
    summoningSynergy_7_13: Standard;
    summoningSynergy_7_14: Standard;
    summoningSynergy_7_15: Standard;
    summoningSynergy_8_12: Standard;
    summoningSynergy_8_13: Standard;
    summoningSynergy_8_14: Standard;
    summoningSynergy_9_10: Standard;
    summoningSynergy_9_11: Standard;
    summoningSynergy_9_16: Standard;
    summoningSynergy_9_17: Standard;
    summoningSynergy_9_18: Standard;
    summoningSynergy_9_19: Standard;
    summoningSynergy_10_11: Standard;
    summoningSynergy_10_16: Standard;
    summoningSynergy_10_18: Standard;
    summoningSynergy_10_19: Standard;
    summoningSynergy_11_16: Standard;
    summoningSynergy_11_17: Standard;
    summoningSynergy_11_18: Standard;
    summoningSynergy_11_19: Standard;
    summoningSynergy_12_13: Standard;
    summoningSynergy_12_14: Standard;
    summoningSynergy_12_15: Standard;
    summoningSynergy_13_14: Standard;
    summoningSynergy_13_15: Standard;
    summoningSynergy_14_15: Standard;
    summoningSynergy_16_17: Standard;
    summoningSynergy_16_18: Standard;
    summoningSynergy_16_19: Standard;
    summoningSynergy_17_18: Standard;
    summoningSynergy_17_19: Standard;
    summoningSynergy_18_19: Standard;
    increasedSummoningChargePreservation: Standard;
    decreasedSummoningChargePreservation: Standard;
    increasedSummoningCreationCharges: Standard;
    decreasedSummoningCreationCharges: Standard;
    increasedChanceToApplyBurn: Standard;
    decreasedChanceToApplyBurn: Standard;
    decreasedSummoningShardCost: Standard;
    increasedSummoningShardCost: Standard;
}
interface SkillModifierObject<Skill> {
    /** Increases the skill level used to compute combat stats by value: Implemented */
    increasedHiddenSkillLevel: Skill;
    /** Decreases the skill level used to compute combat stats by value: Implemented */
    decreasedHiddenSkillLevel: Skill;
    /** Decreases skill interval by value [ms] before % bonuses: Implemented via getTotalFromModifierArray in calculateSkillInterval */
    decreasedSkillInterval: Skill;
    /** Increases skill interval by value [ms] before % bonuses: Implemented via getTotalFromModifierArray in calculateSkillInterval */
    increasedSkillInterval: Skill;
    /** Decreases skill interval by %: Implemented via getTotalFromModifierArray in calculateSkillInterval */
    decreasedSkillIntervalPercent: Skill;
    /** Increases skill interval by %: Implemented via getTotalFromModifierArray in calculateSkillInterval */
    increasedSkillIntervalPercent: Skill;
    /** Increases % chance to preserve resources in skill by value: Implemented via getTotalFromModifierArray in calculateSkillPreservationChance */
    increasedSkillPreservationChance: Skill;
    /** Decreases % chance to preserve resources in skill by value: Implemented via getTotalFromModifierArray in calculateSkillPreservationChance */
    decreasedSkillPreservationChance: Skill;
    /** Increases mastery xp earned for skill by %: Implemented via getTotalFromModifierArray in getMasteryXpToAdd */
    increasedMasteryXP: Skill;
    /** Decreases mastery xp earned for skill by %: Implemented via getTotalFromModifierArray in getMasteryXpToAdd */
    decreasedMasteryXP: Skill;
    /** Increases xp earned from skill by %: Implemented via getTotalFromModifierArray in addXPBonuses */
    increasedSkillXP: Skill;
    /** Decreases xp earned from skill by %: Implemented via getTotalFromModifierArray in addXPBonuses */
    decreasedSkillXP: Skill;
    /** Increases the % chance to double items from a skill by value: Partially Implemented. */
    increasedChanceToDoubleItemsSkill: Skill;
    /** Decreases the % chance to double items from a skill by value: Partially Implemented. */
    decreasedChanceToDoubleItemsSkill: Skill;
    increasedChanceAdditionalSkillResource: Skill;
    decreasedChanceAdditionalSkillResource: Skill;
}
declare type ModifierObject<Skill, Standard> = StandardModifierObject<Standard> & SkillModifierObject<Skill>;
declare type SkillModifierData = [SkillID, number];
declare type SkillModifierActive = {
    id: SkillID;
    value: number;
};
declare type ModifierData = Partial<ModifierObject<SkillModifierData[], number>>;
declare type ModifierActive = Partial<ModifierObject<SkillModifierActive[], number>>;
declare type ModifierKeys = keyof ModifierObject<any, any>;
declare type SkillModifierKeys = keyof SkillModifierObject<any>;
declare type StandardModifierKeys = keyof StandardModifierObject<any>;
declare type SkillEntry<T> = [SkillModifierKeys, T];
declare type StandardEntry<T> = [StandardModifierKeys, T];
declare type ModifierEntry<Skill, Standard> = SkillEntry<Skill> | StandardEntry<Standard>;
declare type ModifierDataEntry = ModifierEntry<SkillModifierData[], number>;
declare type ModifierActiveEntry = ModifierEntry<SkillModifierActive[], number>;
/** Generic base for all item like arrays */
interface GenericItem extends BaseItem {
    /** Item has an animated image */
    hasAnimation?: boolean;
    /** Link to animate image source */
    mediaAnimation?: string;
    /** Item can be upgraded */
    canUpgrade?: boolean;
    /** Item to upgrade to */
    trimmedItemID?: number;
    /** Items required to upgrade */
    itemsRequired?: number[][];
    /** GP cost to upgrades */
    trimmedGPCost?: number;
    /** Multiple of the item can be upgraded at once */
    canMultiUpgrade?: boolean;
    /** Item can be opened (e.g. is a chest) */
    canOpen?: boolean;
    /** ItemIDs and weights of drops */
    dropTable?: LootTable;
    /** Quantities of drops */
    dropQty?: number[];
    /** Used to create SHOP variable, but otherwise do not use */
    buysFor?: number;
    /** @deprecated Data is stored in SHOP */
    buysForLeather?: number;
    /** @deprecated Data is now stored in SHOP*/
    slayerCost?: number;
    /** @deprecated Data is now stored in SHOP*/
    slayerTaskRequirement?: [SlayerTier, number];
    /** @deprecated Data is now stored in SHOP */
    buysForItems?: [ItemID, number][];
    /** Unused flag for bones, game uses prayerPoints prop instead */
    isBones?: boolean;
    /** Designates item as bone. Value is base pp given on burying */
    prayerPoints?: number;
    /** Designates item as food */
    canEat?: boolean;
    /** value*numberMultiplier is base hp of food. */
    healsFor?: number;
    /** Item can be read from bank */
    canRead?: boolean;
    /** When read, sets title of Swal */
    readTitle?: string;
    /** When read, sets html of Swal */
    readText?: string;
    /** @deprecated ID for birthday event cluescrolls. No longer in use. */
    clueID?: 0 | 1 | 2 | 3;
    /** Item can be claimed as token in bank */
    isToken?: boolean;
    /** Flags token as mastery token, and is the Skill to give masteryxp to */
    skill?: SkillID;
    /** Flags token as bank token */
    isBankToken?: boolean;
    /** [SkillID,MasteryID] of producing the item*/
    masteryID?: [SkillID, number];
    /** MasteryID for item for Firemaking */
    firemakingID?: number;
    /** @deprecated Unused category for cooking */
    cookingCategory?: number;
    /** Identifies item as able to be cooked. Also MasteryID for cooking */
    cookingID?: number;
    /** Cooking level required to cook item */
    cookingLevel?: number;
    /** Cooking xp for cooking item */
    cookingXP?: number;
    /** ItemID to give when item cooked */
    cookedItemID?: ItemID;
    /** ItemID to give when item burned */
    burntItemID?: ItemID;
    /** Identifies item as fish, should also be identical to MasteryID for it */
    fishingID?: number;
    /** Fishing level required to catch item */
    fishingLevel?: number;
    /** Fishing XP for catching item */
    fishingXP?: number;
    /** Min interval [ms] to catch item */
    minFishingInterval?: number;
    /** Max interval [ms] to catch item */
    maxFishingInterval?: number;
    /** If present fish gives strength xp when caught */
    strengthXP?: number;
    /** Identifies item as specialItems and indicates weight in loot-table */
    fishingCatchWeight?: number;
    /** @deprecated Unused property */
    miningID?: number;
    /** @deprecated Unused property */
    miningLevel?: number;
    /** Experience earned for Mining item */
    miningXP?: number;
    /** @deprecated Unused property */
    miningRespawnInterval?: number;
    /** @deprecated Unused property */
    maxMiningRespawnInterval?: number;
    /** @deprecated Unused property */
    smithingID?: number;
    /** Smithing level required to make item */
    smithingLevel?: number;
    /** Smithing xp for making item */
    smithingXP?: number;
    /** Items required to smith item */
    smithReq?: ItemQuantity[];
    /** For seeds, identifies crop type. For smithing identifies metal. */
    tier?: string;
    /** If present, sets smithed quantity to value, else it is 1 */
    smithingQty?: number;
    /** Farming level required to grow seed */
    farmingLevel?: number;
    /** Farming XP given when planting, and xp per harvest qty when harvesting */
    farmingXP?: number;
    /** Quantity of seeds required to plant */
    seedsRequired?: number;
    /** Time to grow seed in [s] */
    timeToGrow?: number;
    /** ItemID given when harvesting seed */
    grownItemID?: ItemID;
    /** @deprecated Unused property */
    farmingMasteryID?: number;
    /** @deprecated Unused property */
    fletchingID?: FletchingID;
    /** Items required to fletch item */
    fletchReq?: ItemQuantity[];
    /** Base quantity given when fletched */
    fletchQty?: number;
    /** Fletching level required to fletch */
    fletchingLevel?: number;
    /** Base Fletching xp given when fletched */
    fletchingXP?: number;
    /** Tab of fletching page:
     * 0: Arrows
     * 1: Shortbows
     * 2: Longbows
     * 3: Gem-Tipped Bolts
     * 4: Crossbows
     * 5: Javelins
     */
    fletchingCategory?: FletchingCategory;
    /** @deprecated Unused property */
    craftingID?: number;
    /** Items required to craft */
    craftReq?: ItemQuantity[];
    /** Base quantity made when crafting */
    craftQty?: number;
    /** Crafting level required to make */
    craftingLevel?: number;
    /** Base Crafting XP per craft  */
    craftingXP?: number;
    /** Runecrafting level required to make */
    runecraftingLevel?: number;
    /** Base Runecrafting xp per runecraft */
    runecraftingXP?: number;
    /** Items required to runecraft */
    runecraftReq?: ItemQuantity[];
    /** Base quantity made when runecrafting */
    runecraftQty?: number;
    /** Runecrafting MasteryID of item */
    runecraftingID?: number;
    /** Tab of Runecrafting page:
     * 0: Standard Runes
     * 1: Combination Runes
     * 2: Staves & Wands
     * 3: Air Magic Gear
     * 4: Water Magic Gear
     * 5: Earth Magic Gear
     * 6: Fire Magic Gear
     */
    runecraftingCategory?: RunecraftingCategory;
    /** Item has stats that are viewable from Runecrafting page */
    hasStats?: boolean;
    /** @deprecated Unused property */
    herbloreMasteryID?: HerbloreItemID;
    /** Items required to brew potion */
    herbloreReq?: ItemQuantity[];
    /** Flags item as potion */
    isPotion?: boolean;
    /** Skill that potion applies to, used for herblore display */
    potionSkill?: SkillID;
    /** Value of potion's effect */
    potionBonus?: number;
    /** ID used to distinguish the effects of combat potions */
    potionBonusID?: PotionBonusID;
    /** Base charges of potion */
    potionCharges?: number;
    /** Page potion can be used on */
    potionPage?: PageID;
    /** Tier of potion */
    potionTier?: HerbloreTier;
    /** @deprecated Unused property */
    canEquip?: boolean;
    /** Flags item as equipment, and determines slot it equips to */
    equipmentSlot?: EquipSlotID;
    /** Melee attack bonuses [stab,slash,defend]*/
    attackBonus?: [number, number, number];
    /** Melee strength bonus */
    strengthBonus?: number;
    /** Melee defence bonus */
    defenceBonus?: number;
    /** Attack level required to equip item */
    attackLevelRequired?: number;
    /** Defence level required to equip item */
    defenceLevelRequired?: number;
    /** Ranged attack bonus */
    rangedAttackBonus?: number;
    /** Magic attack bonus */
    magicAttackBonus?: number;
    /** Ranged defence bonus */
    rangedDefenceBonus?: number;
    /** Magic defence bonus */
    magicDefenceBonus?: number;
    /** Damage reduction [%] */
    damageReduction?: number;
    /** Ranged strength bonus */
    rangedStrengthBonus?: number;
    /** Ranged level required to equip item */
    rangedLevelRequired?: number;
    /** @deprecated Unused property */
    prayerBonus?: number;
    /** @deprecated Unused property, used modifiers instead */
    ammoPreservation?: number;
    /** Magic level required to equip item */
    magicLevelRequired?: number;
    /** % bonus to magic maxHit */
    magicDamageBonus?: number;
    /** @deprecated Unused property, use modifiers instead */
    increasedMinAirSpellDmg?: number;
    /** @deprecated Unused property, use modifiers instead */
    increasedMinWaterSpellDmg?: number;
    /** @deprecated Unused property, use modifiers instead */
    increasedMinEarthSpellDmg?: number;
    /** @deprecated Unused property, used modifiers instead */
    increasedMinFireSpellDmg?: number;
    /** @deprecated Unused property, slayer level requirements are baked into SHOP now */
    slayerLevelRequired?: number;
    /** @deprecated Will display when viewing item stats, but actual value is in modifiers */
    slayerBonusXP?: number;
    /** @deprecated Game still calculates this value, but actual value is in modifiers */
    slayerAreaEffectNegationPercent?: number;
    /** @deprecated Use modifiers instead */
    chanceToDoubleLoot?: number;
    /** @deprecated Use modifiers instead */
    increasedMaxHitpoints?: number;
    /** @deprecated Use modifiers instead */
    decreasedAttackSpeed?: number;
    /** @deprecated Game still calculates this value, but actual value is in modifiers */
    slayerAreaEffectNegationFlat?: number;
    /** Unused flag for ranged weapons */
    isRanged?: boolean;
    /** Flags item as skill glove, and identifies index in data arrays */
    gloveID?: GloveID;
    /** Ammunition type:
     * 0: Arrows
     * 1: Bolts
     * 2: Javelins
     * 3: Throwing Knives
     */
    ammoType?: AmmoType;
    /** Flags item as Javelin or Throwing knife */
    isAmmo?: boolean;
    /** Flags item as equipable in passive slot */
    isPassiveItem?: boolean;
    /** Allows non-magic weapons to use curses and auroras */
    canUseMagic?: boolean;
    /** Attack speed of weapon in [ms] */
    attackSpeed?: number;
    /** Weapon blocks the use of shield slot */
    isTwoHanded?: boolean;
    /** Weapon allows the use of spells */
    isMagic?: boolean;
    /** Ammunition type required to use ranged weapon:
     * 0: Arrows
     * 1: Bolts
     * 2: Javelins
     * 3: Throwing Knives
     */
    ammoTypeRequired?: AmmoType;
    /** Item has special attack */
    hasSpecialAttack?: true;
    /** Index of playerSpecialAttacks that weapon has */
    specialAttackID?: PlayerSpecialID;
    /** Item provides free runes for spells */
    providesRune?: ItemID[];
    /** Quantity of runes set by providesRune */
    providesRuneQty?: number;
    /** @deprecated Unused property, use modifiers instead */
    increasedGP?: number;
    /** Increased thieving successrate of Gloves of Silence */
    increasedSuccessRate?: number;
    /** @deprecated Unused property, use modifiers instead */
    increasedHPRegen?: number;
    /** Lifesteal % of Elder crown */
    lifesteal?: number;
    /** Reflect damage % of Recoil Shield */
    reflectDamage?: number;
    /** @deprecated Unused property, use modifiers instead */
    increasedAutoEat?: number;
    /** @deprecated Unused property, use modifiers instead */
    decreasedAutoEatEfficiency?: number;
    /** @deprecated Unused property, use modifiers instead */
    prayerCostReduction?: number;
    /** @deprecated Unused property, use modifiers instead */
    bonusMasteryXP?: number;
    /** Drop rate of Mysterious Stone */
    dropRate?: number;
    /** Melee strength bonus multiplier of Big Ol Ron */
    bossStrengthMultiplier?: number;
    /** Maximum GP multiplier of Confetti Crossbow */
    gpMultiplierCap?: number;
    /** Minimum GP multiplier of Confetti Crossbow */
    gpMultiplierMin?: number;
    /** Ranged strength bonus multiplier of Slayer Crossbow */
    slayerStrengthMultiplier?: number;
    /** Max Hit bonus of Cloudburst Staff */
    increasedWaterSpellDamage?: number;
    /** Base drop rate of Crown of Rhaelyx components */
    baseDropRate?: number;
    /** Max drop rate of Crown of Rhaelyx components */
    maxDropRate?: number;
    /** Resource preservation chance of Crown of Rhaelyx when charges in bank */
    chanceToPreserve?: number;
    /** Resource preservation chance of Crown of Rhaelyx when no charges in bank */
    baseChanceToPreserve?: number;
    /** @deprecated Unused property, use modifiers instead */
    bonusSkillXP?: number;
    /** % increase to Off Items of Clue Chaser's Insignia */
    increasedItemChance?: number;
    /** % chance to crit with Deadeye amulet */
    chanceToCrit?: number;
    /** Multiplier to damage on crit with Deadeye amulet */
    critDamage?: number;
    /** % lifesteal for magic provided by Warlock Amulet */
    spellHeal?: number;
    /** @deprecated Unused property, use modifiers instead */
    hpRegenBonus?: number;
    /** @deprecated Unused property, use modifiers instead */
    fishingSpeedBonus?: number;
    /** increasedFarmingYield for Weird Gloop */
    harvestBonus?: number;
    /** @deprecated Unused property */
    isStreamer?: boolean;
    /** @deprecated Unused property, use modifiers instead */
    gpMultiplier?: number;
    /** @deprecated Unused propery, use modifiers instead */
    chanceToDoubleResources?: number;
    /** Modifiers provided when item is equipped. Also contains modifiers for potions that are WIP */
    modifiers?: ModifierData;
    smithingBar?: ItemID;
    summoningDescription?: string;
    summoningID?: number;
    summoningReq?: ItemQuantity[][];
    summoningQty?: number;
    summoningLevel?: number;
    summoningXP?: number;
    summoningTier?: number;
    summoningSkills?: SkillID[];
    summoningMaxHit?: number;
    summoningCategory?: number;
}
interface FindEnemyAreaFcn {
    (enemy: MonsterID, name?: true): string;
    (enemy: MonsterID, name: false): [number, number];
}
/** Item with universal Properties */
interface BaseItem {
    /** Categorization tag */
    category: string;
    /** Second Categorization tag */
    type: string;
    /** Display name of item. May contain html portions that must be replaced/filtered*/
    name: string;
    /** Base sale price of item */
    sellsFor: number;
    /** Local path to item image */
    media: string;
    /** @deprecated Unused variable that references the item index */
    id?: ItemID;
    /** Optional description of item */
    description?: string;
    /** Optional flag that indicates item should not count for Item Completion % */
    ignoreCompletion?: boolean;
}
declare type Shop = typeof SHOP;
interface Array<T> {
    sum: (prop: keyof T) => number;
}
declare type AgilityPillar = {
    name: string;
    description: string;
    cost: ObstacleCost;
    modifiers: ModifierData;
};
interface AgilityObstacle extends AgilityPillar {
    media: string;
    category: ObstacleCategories;
    interval: number;
    requirements: UnlockRequirement;
    completionBonuses: {
        stamina: number;
        xp: number;
        gp: number;
        slayerCoins: number;
        items: number[][];
    };
}
declare type ObstacleCost = {
    gp: number;
    slayerCoins: number;
    items: number[][];
};
declare type BankCache = NumberDictionary<number>;
declare type MasteryCache = NumberDictionary<NumberDictionary<number>>;
declare type MasteryLevelCache = NumberDictionary<{
    levels: number[];
}>;
interface PlayFabEventBody {
    [key: string]: any;
}
interface StringDictionary<T> {
    [index: string]: T;
}
interface NumberDictionary<T> {
    [index: number]: T;
}
declare type SweetAlertOptions = import("sweetalert2").SweetAlertOptions<*>;
declare type ShopCategory = 'General' | 'SkillUpgrades' | 'Slayer' | 'Gloves' | 'Skillcapes' | 'Materials' | 'GolbinRaid';
declare type ShopCostTypes = 'gp' | 'slayerCoins' | 'items' | 'raidCoins';
declare type ShopCategoryData = {
    name: string;
    description: string;
    media: string;
    contains: {
        modifiers?: ModifierData;
        items?: [ItemID, number][];
        pet?: PetID;
    };
    cost: {
        gp: number;
        slayerCoins: number;
        items: [ItemID, number][];
        raidCoins?: number;
    };
    hasQty?: boolean;
    charges?: number;
    unlockRequirements: UnlockRequirement;
    buyLimit: [number, number, number, number];
    showBuyLimit?: boolean;
};
declare type UnlockRequirement = {
    customDescription?: string;
    shopItemPurchased?: [ShopCategory, number][];
    skillLevel?: [SkillID, number][];
    slayerTaskCompletion?: [SlayerTier, number][];
    dungeonCompletion?: [DungeonID, number][];
    completionPercentage?: number;
};
declare type SpellCost = {
    id: number;
    qty: number;
    hasRune: boolean;
    bankID: number | null;
};
declare type Prayer = {
    name: string;
    description: string;
    prayerLevel: number;
    media: string;
    pointsPerPlayer: number;
    pointsPerEnemy: number;
    pointsPerRegen: number;
    modifiers: Partial<StandardModifierObject<number>>;
    vars?: string[];
    values?: number[];
};
/** Base for Dungeons, slayer areas, and combat areas */
interface BaseArea {
    /** URL to display image */
    media: string;
    /** @deprecated Old property for old area display system */
    type?: string;
    /** Monsters contained in area */
    monsters: MonsterID[];
    /**
     * 0: Very Easy
     * 1: Easy
     * 2: Medium
     * 3: Hard:
     * 4: Very Hard
     */
    difficulty: number[];
    /** If not 0, Item required to do damage to monsters in area */
    slayerItem: ItemID;
}
interface CombatArea extends BaseArea {
    /** Display name HTML */
    areaName: string;
}
interface SlayerArea extends BaseArea {
    /** Display name HTML */
    areaName: string;
    /** Slayer level required to enter area */
    slayerLevel: number;
    /** Dungeon required to complete to enter area */
    dungeonCompleted: DungeonID;
    /** Area has modifiers to apply to player */
    areaEffect?: true;
    /** Description of modifiers */
    areaEffectDescription?: string;
    /** Value of modifier to apply to player */
    areaEffectValue?: number;
}
interface Dungeon extends BaseArea {
    /** Display name HTML */
    name: string;
    /** @deprecated Old property for old dungeon display system */
    recommendedStats?: [number, number, number];
    /** @deprecated Unused property */
    rewardCount: number;
    /** @deprecated Old property for old dungeon display system */
    rewards: ItemID[];
    /** ID of boss pet rolled on completion of dungeon */
    petID: PetID;
    /** Dungeon required to enter dungeon */
    requiresCompletion?: DungeonID;
    /** Number of times requiresCompletion must be finished to enter (if not present once) */
    requiresCompletionCount?: number;
    /** Slayer level required to enter dungeon */
    slayerLevel?: number;
}
declare type SlayerTaskData = {
    /** Display name of task difficulty */
    display: string;
    /** Cost to reroll/change to task */
    cost: number;
    /** Minimum combat level of monster for task */
    minLevel: number;
    /** Maximum combat level of monster for task (-1 is uncapped (6969 lol)) */
    maxLevel: number;
    /** Slayer level required to recieve task */
    slayerLevel: number;
};
declare type Slayer = {
    task: {
        Easy: SlayerTaskData;
        Normal: SlayerTaskData;
        Hard: SlayerTaskData;
        Elite: SlayerTaskData;
        Master: SlayerTaskData;
    };
};
/** These are applied to combatData.enemy as properties */
interface EnemyModifierObject<T> {
    /** % Increase to Melee Evasion */
    increasedMeleeEvasion: T;
    /** % Decrease to Melee Evasion */
    decreasedMeleeEvasion: T;
    /** % Increase to Ranged Evasion */
    increasedRangedEvasion: T;
    /** % Decrease to Ranged Evasion */
    decreasedRangedEvasion: T;
    /** % Increase to Magic Evasion */
    increasedMagicEvasion: T;
    /** % Decrease to Magic Evasion */
    decreasedMagicEvasion: T;
    /** % Increase to Max Hit */
    increasedMaxHitPercent: T;
    /** % Decrease to Max Hit */
    decreasedMaxHitPercent: T;
    /** % Increase to Max HP */
    increasedMaxHitpointsPercent: T;
    /** % Decrease to Max HP */
    decreasedMaxHitpointsPercent: T;
    /** % Increase to Accuracy Rating */
    increasedGlobalAccuracy: T;
    /** % Decrease to Accuracy Rating */
    decreasedGlobalAccuracy: T;
    /** % Decrease to attack interval */
    increasedAttackSpeed: T;
    /** % Increase to attack interval */
    attackSpeedDebuff: T;
    /** % of damage taken to reflect to player */
    increasedReflectDamagePercent: T;
    /** Flat increase to damageReduction */
    increasedDamageReduction: T;
    /** % of HP to heal every 10 seconds */
    increasedHitpointRegeneration: T;
    /** % of all damage to player to heal from */
    increasedLifesteal: T;
    /** Cannot be stunned */
    stunImmunity: T;
    /** Cannot be stunned */
    freezeImmunity: T;
}
declare type EnemyModifierData = Partial<EnemyModifierObject<number>>;
declare type EnemyModiferKey = keyof EnemyModifierObject<any>;
declare type CombatPassive = {
    /** Index of passive in combatPassive */
    id: number;
    /** Display name of passive */
    name: string;
    /** Description of passive */
    description: string;
    /** Chance for passive to occur */
    chance: number;
    /** Modifiers to apply to monster */
    modifiers?: EnemyModifierData;
};
declare type SkillData = {
    /** Display name of skill */
    name: string;
    /** Image URL of skill icon */
    media: string;
    /** Skill has mastery levels */
    hasMastery: boolean;
    /** Unused: Maximum level of skill */
    maxLevel: number;
    masteryTokenID?: ItemID;
};
declare type MasteryMedia = {
    /** Image URL of mastery item */
    media: string;
};
declare type MasteryUnlock = {
    /** Mastery level for unlock */
    level: number;
    /** Description of unlock */
    unlock: string;
};
declare type MasteryPoolBonus = {
    /** Description of pool bonus */
    bonuses: string[];
};
interface SkillObject<T> {
    Woodcutting: T;
    Fishing: T;
    Firemaking: T;
    Cooking: T;
    Mining: T;
    Smithing: T;
    Attack: T;
    Strength: T;
    Defence: T;
    Hitpoints: T;
    Thieving: T;
    Farming: T;
    Ranged: T;
    Fletching: T;
    Crafting: T;
    Runecrafting: T;
    Magic: T;
    Prayer: T;
    Slayer: T;
    Herblore: T;
    Agility: T;
    Summoning: T;
}
declare type SkillName = keyof SkillObject<any>;
declare type Milestone = {
    /** Unlock level of milestone */
    level: number;
    /** Display name of milestone */
    name: string;
    /** URL of milestone image */
    media: string;
    /** @deprecated Unused property */
    alwaysShow?: boolean;
};
interface NumberSaveGame {
    firstTime: number;
    nameChanges: number;
    gp: number;
    defaultPageOnLoad: number;
    levelUpScreen: number;
    attackStyle: number;
    currentCombatFood: number;
    showItemNotify: number;
    myBankVersion: number;
    selectedSpell: number;
    buyQty: number;
    sellQty: number;
    accountGameVersion: number;
    prayerPoints: number;
    slayerCoins: number;
    selectedEquipmentSet: number;
    formatNumberSetting: number;
    saveTimestamp: number;
    activeAurora: number;
    currentGamemode: number;
    raidCoins: number;
    agilityPassivePillarActive: number;
}
declare type NumberKey = keyof NumberSaveGame;
interface BoolSaveGame {
    ignoreBankFull: boolean;
    continueThievingOnStun: boolean;
    autoRestartDungeon: boolean;
    autoSaveCloud: boolean;
    darkMode: boolean;
    showGPNotify: boolean;
    enableAccessibility: boolean;
    showEnemySkillLevels: boolean;
    confirmationOnClose: boolean;
    autoPotion: boolean;
    showCommas: boolean;
    showVirtualLevels: boolean;
    secretAreaUnlocked: boolean;
    showSaleNotifications: boolean;
    showShopNotifications: boolean;
    pauseOfflineActions: boolean;
    showCombatMinibar: boolean;
    showCombatMinibarCombat: boolean;
    showSkillMinibar: boolean;
    disableAds: boolean;
    useCombinationRunes: boolean;
    firstTimeLoad: boolean;
    autoSlayer: boolean;
}
declare type BoolKey = keyof BoolSaveGame;
interface SerializableSaveGame {
    bank: BankItem[];
    statsGeneral: GameStat[];
    statsWoodcutting: GameStat[];
    statsFiremaking: GameStat[];
    statsFishing: GameStat[];
    statsCooking: GameStat[];
    statsMining: GameStat[];
    statsSmithing: GameStat[];
    statsCombat: GameStat[];
    statsThieving: GameStat[];
    statsFarming: GameStat[];
    statsFletching: GameStat[];
    statsCrafting: GameStat[];
    statsRunecrafting: GameStat[];
    statsHerblore: GameStat[];
    glovesTracker: typeof glovesTracker;
    rockData: RockData[];
    herbloreBonuses: HerbloreBonus[];
    tutorialTips: typeof tutorialTips;
    shopItemsPurchased: [ShopCategory, number][];
    combatData: MinCombatData;
    equippedFood: ItemQuantity2[];
    SETTINGS: typeof SETTINGS;
    monsterStats: MonsterStat[];
    petUnlocked: boolean[];
    skillsUnlocked: boolean[];
    equipmentSets: EquipmentSet[];
    skillXP: number[];
    dungeonCompleteCount: number[];
    selectedAttackStyle: number[];
    lockedItems: number[];
    golbinRaidStats: number[];
    slayerTask: SlayerTask[];
    slayerTaskCompletion: number[];
    chosenAgilityObstacles: number[];
    agilityObstacleBuildCount: number[];
    itemsAlreadyFound: number[];
    saveStateBeforeRaid: number[];
}
declare type SerialKey = keyof SerializableSaveGame;
interface NestedSerializeableSaveGame {
    newFarmingAreas: FarmingArea[];
    MASTERY: Mastery;
    golbinRaidHistory: RaidHistory[];
    itemStats: ItemStat[];
}
declare type NestedKey = keyof NestedSerializeableSaveGame;
interface OtherSaveGame {
    offline: Offline;
    titleNewsID: string[];
    scheduledPushNotifications: StringDictionary<string>;
    username: string;
    gameUpdateNotification: string;
    randomModifiers: typeof randomModifiers;
    summoningData: typeof summoningData;
}
declare type OtherKey = keyof OtherSaveGame;
interface ReconstructedSaveGame {
    skillLevel: number[];
    nextLevelProgress: number[];
    equippedItems: number[];
    ammo: number;
}
declare type ReconKey = keyof ReconstructedSaveGame;
declare type NewSaveGame = NumberSaveGame & BoolSaveGame & SerializableSaveGame & NestedSerializeableSaveGame & OtherSaveGame & ReconstructedSaveGame;
interface Serializer<T> {
    (saveVar: T): number[];
}
interface NestedSerializer<T> {
    (saveVar: T): number[][];
}
interface Deserializer<T> {
    (sData: number[], version: number): T;
}
interface NestedDeserializer<T> {
    (sData: number[][], version: number): T;
}
declare type StatsData = {
    stats: number[];
    items: number[];
};
declare type MinCombatData = {
    player: {
        hitpoints: number;
    };
    enemy: {};
};
declare type SerializerVar<T, U> = {
    saveKey: U;
    serialize: Serializer<T>;
    deserialize: Deserializer<T>;
};
declare type NestedSerializerVar<T, U> = {
    saveKey: U;
    serialize: NestedSerializer<T>;
    deserialize: NestedDeserializer<T>;
};
declare type MapToSerializer<Type> = {
    [Property in keyof Type]: SerializerVar<Type[Property], Property>;
};
declare type MapToNested<Type> = {
    [Property in keyof Type]: NestedSerializerVar<Type[Property], Property>;
};
declare type PackagedSave = {
    v: number;
    n: number[];
    b: number[];
    s: number[][];
    ns: number[][][];
    o: string[];
};
declare type GamemodeData = {
    name: string;
    media: string;
    description: string;
    rules: string[];
    textClass: string;
    btnClass: string;
    isPermaDeath: boolean;
    isEvent: boolean;
    endDate: number;
    combatTriangle: number;
    numberMultiplier: number;
};
declare type RandomModifier = {
    modifier: ModifierKeys;
    value: number | number[][];
};
declare type SummoningData = {
    Settings: SummoningSettings;
    Marks: SummoningMarks;
    Synergies: SummoningSynergies;
};
declare type SummoningSettings = {
    recipeGPCost: number;
};
declare type SummoningMarks = {
    Levels: number[];
};
declare type SummoningSynergies = NumberDictionary<NumberDictionary<SynergyData>>;
declare type SynergyData = {
    description: string;
    modifiers: ModifierData;
};
declare type PlayerSummoningData = {
    MarksDiscovered?: NumberDictionary<number>;
    defaultRecipe?: number[];
};
declare type SummoningItem = {
    itemID: ItemID;
    summoningLevel: number;
    summoningID: number;
    summoningCategory: number;
};
declare type SummoningSearch = {
    description: string;
    name1: string;
    name2: string;
    summon1: number;
    summon2: number;
};
interface FindEnemyAreaFcn {
    (enemy: MonsterID, name: true): string;
    (enemy: MonsterID, name: false): [number, number];
}
declare const enum SettingID {
    IgnoreBankFull = 1,
    DefaultPageOnLoad = 2,
    LevelUpScreen = 3,
    ContinueThievingOnStun = 4,
    ShowItemNotify = 5,
    AutoRestartDungeon = 6,
    AutoSaveCloud = 7,
    DarkMode = 8,
    ShowGPNotify = 9,
    ShowEnemySkillLevels = 12,
    ConfirmationOnClose = 13,
    EnableAccessibility = 14,
    AutoPotion = 15,
    AutoUseSpecialAttack = 16,
    ShowHPNotify = 17,
    AutoSlayerTask = 18,
    ShowCommas = 19,
    ShowVirtualLevels = 20,
    FormatNumberSetting = 21,
    PauseOfflineActions = 22,
    ShowSaleNotifications = 23,
    ShowShopNotifications = 24,
    ShowCombatMinibar = 25,
    ShowCombatMinibarCombat = 26,
    UseCombinationRunes = 27,
    ShowSkillMinibar = 28,
    DisableAds = 29,
    CurrentEquipDefault = 30,
    HideMaxLevel = 31,
    AutoSlayer = 32,
    ConfirmationCheckpoint = 33
}
declare type NumBool = 0 | 1;
interface ChangeSettingsFcn {
    (s: SettingID.IgnoreBankFull, t: boolean, i?: boolean): void;
    (s: SettingID.DefaultPageOnLoad, t: PageID, i?: boolean): void;
    (s: SettingID.LevelUpScreen, t: NumBool, i?: boolean): void;
    (s: SettingID.ContinueThievingOnStun, t: boolean, i?: boolean): void;
    (s: SettingID.ShowItemNotify, t: NumBool, i?: boolean): void;
    (s: SettingID.AutoRestartDungeon, t: boolean, i?: boolean): void;
    (s: SettingID.AutoSaveCloud, t: boolean, i?: boolean): void;
    (s: SettingID.DarkMode, t: boolean, i?: boolean): void;
    (s: SettingID.ShowGPNotify, t: boolean, i?: boolean): void;
    (s: SettingID.ShowEnemySkillLevels, t: boolean, i?: boolean): void;
    (s: SettingID.ConfirmationOnClose, t: boolean, i?: boolean): void;
    (s: SettingID.EnableAccessibility, t: boolean, i?: boolean): void;
    (s: SettingID.AutoPotion, t: boolean, i?: boolean): void;
    (s: SettingID.ShowHPNotify, t: boolean, i?: boolean): void;
    (s: SettingID.AutoSlayerTask, t: true, i?: boolean): void;
    (s: SettingID.ShowCommas, t: boolean, i?: boolean): void;
    (s: SettingID.ShowVirtualLevels, t: boolean, i?: boolean): void;
    (s: SettingID.FormatNumberSetting, t: NumBool, i?: boolean): void;
    (s: SettingID.PauseOfflineActions, t: boolean, i?: boolean): void;
    (s: SettingID.ShowSaleNotifications, t: boolean, i?: boolean): void;
    (s: SettingID.ShowShopNotifications, t: boolean, i?: boolean): void;
    (s: SettingID.ShowCombatMinibar, t: boolean, i?: boolean): void;
    (s: SettingID.ShowCombatMinibarCombat, t: boolean, i?: boolean): void;
    (s: SettingID.ShowSkillMinibar, t: boolean, i?: boolean): void;
    (s: SettingID.DisableAds, t: boolean, i?: boolean): void;
    (s: SettingID.CurrentEquipDefault, t: boolean, i?: boolean): void;
    (s: SettingID.HideMaxLevel, t: boolean, i?: boolean): void;
    (s: SettingID.ConfirmationCheckpoint, t: boolean, i?: boolean): void;
}
declare type ValFcnForInput = (() => string) & ((value: string) => void);
interface JQueryStatic {
    (selector: '#username-set-main'): JQueryInputElement;
    (selector: '#username-set'): JQueryInputElement;
    (selector: '#searchTextbox'): JQueryInputElement;
    (selector: '#dropdown-content-custom-amount'): JQueryInputElement;
    (selector: '#dropdown-content-custom-amount-1'): JQueryInputElement;
    (selector: '#import-save-character-selection'): JQueryInputElement;
}
interface JQueryInputElement extends Omit<JQuery<HTMLElement>, 'val'> {
    val: ValFcnForInput;
}
interface Document {
    getElementById(elementID: 'username-change'): HTMLInputElement;
    getElementById(elementID: 'game-broke-error-msg'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveField'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveField2'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveFieldUpdate'): HTMLTextAreaElement;
    getElementById(elementID: 'exportSaveFieldUpdate2'): HTMLTextAreaElement;
    getElementById(elementID: 'importSaveField'): HTMLTextAreaElement;
}
interface ObjectConstructor {
    keys(obj: Partial<StandardModifierObject<number>>): StandardModifierKeys[];
    keys(obj: ModifierData): ModifierKeys[];
    keys(obj: ModifierActive): ModifierKeys[];
    keys(obj: Shop): ShopCategory[];
    keys(obj: EnemyModifierData): EnemyModiferKey[];
    entries(obj: ModifierActive): ModifierActiveEntry[];
    entries(obj: ModifierData): ModifierDataEntry[];
}
/** onClick callback function */
declare function setAccount(forceReload?: boolean): void;
/**
 *
 * @param {GameMode} gamemode
 */
declare function setupGamemode(gamemode: GameMode): void;
/** onClick callback function (that is being used as href) */
declare function showUsernameChange(): void;
/** onclick callback function */
declare function changeName(): void;
declare function accountDeletion(confirmation?: boolean, characterID?: number, characterName?: string): void;
declare function gameUpdate(): void;
/** Save game variable */
declare var firstTime: number;
/** Save game variable */
declare var nameChanges: number;
/** Save game variable */
declare var username: string;
declare const gameVersion: "Alpha v0.20";
declare const previousGameVersion: "Alpha v0.19.2";
declare const characterSelectAnnouncementVersion: 2;
/** Save game variable */
declare var gameUpdateNotification: string;
/** Save game variable */
declare var accountGameVersion: number;
/** @type {NumberDictionary<GamemodeData>} */
declare const GAMEMODES: NumberDictionary<GamemodeData>;
/** @type {(keyof SaveGame)[]} */
declare var allVars: (keyof SaveGame)[];
/** @type {(keyof SaveGame)[]} */
declare const importantSaveVars: (keyof SaveGame)[];
declare namespace CONSTANTS {
    const skill: SkillObject<number>;
    namespace shop {
        namespace general {
            const Extra_Bank_Slot: number;
            const Auto_Eat_Tier_I: number;
            const Auto_Eat_Tier_II: number;
            const Auto_Eat_Tier_III: number;
            const Extra_Equipment_Set_I: number;
            const Extra_Equipment_Set_II: number;
            const Dungeon_Equipment_Swapping: number;
            const Multi_Tree: number;
        }
        namespace skillUpgrades {
            const Iron_Axe: number;
            const Steel_Axe: number;
            const Black_Axe: number;
            const Mithril_Axe: number;
            const Adamant_Axe: number;
            const Rune_Axe: number;
            const Dragon_Axe: number;
            const Iron_Fishing_Rod: number;
            const Steel_Fishing_Rod: number;
            const Black_Fishing_Rod: number;
            const Mithril_Fishing_Rod: number;
            const Adamant_Fishing_Rod: number;
            const Rune_Fishing_Rod: number;
            const Dragon_Fishing_Rod: number;
            const Iron_Pickaxe: number;
            const Steel_Pickaxe: number;
            const Black_Pickaxe: number;
            const Mithril_Pickaxe: number;
            const Adamant_Pickaxe: number;
            const Rune_Pickaxe: number;
            const Dragon_Pickaxe: number;
            const Normal_Cooking_Fire: number;
            const Oak_Cooking_Fire: number;
            const Willow_Cooking_Fire: number;
            const Teak_Cooking_Fire: number;
            const Maple_Cooking_Fire: number;
            const Mahogany_Cooking_Fire: number;
            const Yew_Cooking_Fire: number;
            const Magic_Cooking_Fire: number;
            const Redwood_Cooking_Fire: number;
            const Perpetual_Haste: number;
            const Expanded_Knowledge: number;
            const Master_of_Nature: number;
            const Art_of_Control: number;
        }
        namespace slayer {
            const Auto_Slayer: number;
            const Basic_Resupply: number;
            const Standard_Resupply: number;
            const Generous_Resupply: number;
            const Mirror_Shield: number;
            const Magical_Ring: number;
            const Desert_Hat: number;
            const Blazing_Lantern: number;
            const Climbing_Boots: number;
            const Confetti_Crossbow: number;
            const Skull_Cape: number;
            const Green_Party_Hat: number;
            const Slayer_Helmet_Basic: number;
            const Slayer_Platebody_Basic: number;
            const Slayer_Cowl_Basic: number;
            const Slayer_Leather_Body_Basic: number;
            const Slayer_Wizard_Hat_Basic: number;
            const Slayer_Wizard_Robes_Basic: number;
            const Slayer_Upgrade_Kit_Strong: number;
            const Slayer_Upgrade_Kit_Elite: number;
            const Slayer_Upgrade_Kit_Master: number;
        }
        namespace gloves {
            const Cooking_Gloves: number;
            const Mining_Gloves: number;
            const Gem_Gloves: number;
            const Smithing_Gloves: number;
            const Thieving_Gloves: number;
        }
        namespace skillcapes {
            const Max_Skillcape: number;
            const Agility_Skillcape: number;
            const Attack_Skillcape: number;
            const Cooking_Skillcape: number;
            const Crafting_Skillcape: number;
            const Defence_Skillcape: number;
            const Farming_Skillcape: number;
            const Firemaking_Skillcape: number;
            const Fishing_Skillcape: number;
            const Fletching_Skillcape: number;
            const Herblore_Skillcape: number;
            const Hitpoints_Skillcape: number;
            const Magic_Skillcape: number;
            const Mining_Skillcape: number;
            const Prayer_Skillcape: number;
            const Ranged_Skillcape: number;
            const Runecrafting_Skillcape: number;
            const Slayer_Skillcape: number;
            const Smithing_Skillcape: number;
            const Strength_Skillcape: number;
            const Thieving_Skillcape: number;
            const Woodcutting_Skillcape: number;
        }
        namespace materials {
            const Feathers: number;
            const Compost: number;
            const Weird_Gloop: number;
            const Bowstring: number;
            const Leather: number;
            const Green_Dragonhide: number;
            const Blue_Dragonhide: number;
            const Red_Dragonhide: number;
            const Red_Party_Hat: number;
        }
    }
    namespace mastery {
        const Smithing: NumberDictionary<string>;
    }
    namespace attackType {
        const Melee: number;
        const Ranged: number;
        const Magic: number;
    }
    namespace attackStyle {
        export const Stab: number;
        export const Slash: number;
        export const Block: number;
        export const Accurate: number;
        export const Rapid: number;
        export const Longrange: number;
        const Magic_1: number;
        export { Magic_1 as Magic };
        export const Defensive: number;
    }
    namespace equipmentSlot {
        const Helmet: number;
        const Platebody: number;
        const Platelegs: number;
        const Boots: number;
        const Weapon: number;
        const Shield: number;
        const Amulet: number;
        const Ring: number;
        const Gloves: number;
        const Quiver: number;
        const Cape: number;
        const Passive: number;
        const Summon: number;
    }
    namespace axe {
        const Bronze: number;
        const Iron: number;
        const Steel: number;
        const Black: number;
        const Mithril: number;
        const Adamant: number;
        const Rune: number;
        const Dragon: number;
    }
    namespace fishingRod {
        const Bronze_1: number;
        export { Bronze_1 as Bronze };
        const Iron_1: number;
        export { Iron_1 as Iron };
        const Steel_1: number;
        export { Steel_1 as Steel };
        const Black_1: number;
        export { Black_1 as Black };
        const Mithril_1: number;
        export { Mithril_1 as Mithril };
        const Adamant_1: number;
        export { Adamant_1 as Adamant };
        const Rune_1: number;
        export { Rune_1 as Rune };
        const Dragon_1: number;
        export { Dragon_1 as Dragon };
    }
    namespace pickaxe {
        const Bronze_2: number;
        export { Bronze_2 as Bronze };
        const Iron_2: number;
        export { Iron_2 as Iron };
        const Steel_2: number;
        export { Steel_2 as Steel };
        const Black_2: number;
        export { Black_2 as Black };
        const Mithril_2: number;
        export { Mithril_2 as Mithril };
        const Adamant_2: number;
        export { Adamant_2 as Adamant };
        const Rune_2: number;
        export { Rune_2 as Rune };
        const Dragon_2: number;
        export { Dragon_2 as Dragon };
    }
    namespace combatArea {
        const Farmlands: number;
        const Dragon_Valley: number;
        const Wet_Forest: number;
        const Wizard_Tower: number;
        const Castle_of_Kings: number;
        const Bandit_Hideout: number;
        const Giant_Dungeon: number;
        const Sandy_Shores: number;
        const Icy_Hills: number;
        const Goblin_Village: number;
        const Graveyard: number;
    }
    namespace slayerArea {
        const Penumbra: number;
        const Strange_Cave: number;
        const High_Lands: number;
        const Holy_Isles: number;
        const Forest_of_Goo: number;
        const Desolate_Plains: number;
        const Runic_Ruins: number;
        const Arid_Plains: number;
        const Shrouded_Badlands: number;
        const Perilous_Peaks: number;
        const Dark_Waters: number;
    }
    namespace dungeon {
        const Chicken_Coop: number;
        const Undead_Graveyard: number;
        const Spider_Forest: number;
        const Frozen_Cove: number;
        const Deep_Sea_Ship: number;
        const Volcanic_Cave: number;
        const Bandit_Base: number;
        const Hall_of_Wizards: number;
        const Air_God_Dungeon: number;
        const Water_God_Dungeon: number;
        const Earth_God_Dungeon: number;
        const Fire_God_Dungeon: number;
        const Dragons_Den: number;
        const Miolite_Caves: number;
        const Infernal_Stronghold: number;
        const Into_the_Mist: number;
    }
    namespace spellType {
        const Air: number;
        const Water: number;
        const Earth: number;
        const Fire: number;
    }
    namespace specialEvent {
        const aprilFools2020: number;
        const easter2020: number;
        const christmas2020: number;
    }
    namespace bones {
        const Bones: number;
        const Dragon_Bones: number;
        const Magic_Bones: number;
    }
    namespace spell {
        const Wind_Strike: number;
        const Water_Strike: number;
        const Earth_Strike: number;
        const Fire_Strike: number;
        const Wind_Bolt: number;
        const Water_Bolt: number;
        const Earth_Bolt: number;
        const Fire_Bolt: number;
        const Wind_Blast: number;
        const Water_Blast: number;
        const Earth_Blast: number;
        const Fire_Blast: number;
        const Wind_Wave: number;
        const Water_Wave: number;
        const Earth_Wave: number;
        const Fire_Wave: number;
        const Wind_Surge: number;
        const Water_Surge: number;
        const Earth_Surge: number;
        const Fire_Surge: number;
    }
    namespace curse {
        const Blinding_I: number;
        const Soul_Split_I: number;
        const Weakening_I: number;
        const Anguish_I: number;
        const Blinding_II: number;
        const Soul_Split_II: number;
        const Weakening_II: number;
        const Confusion: number;
        const Anguish_II: number;
        const Blinding_III: number;
        const Soul_Split_III: number;
        const Weakening_III: number;
        const Anguish_III: number;
        const Decay: number;
    }
    namespace aurora {
        const Surge_I: number;
        const Fury_I: number;
        const Fervor_I: number;
        const Surge_II: number;
        const Charged_I: number;
        const Fury_II: number;
        const Fervor_II: number;
        const Surge_III: number;
        const Charged_II: number;
        const Fury_III: number;
        const Fervor_III: number;
        const Charged_III: number;
    }
    namespace prayer {
        const Thick_Skin: number;
        const Burst_of_Strength: number;
        const Clarity_of_Thought: number;
        const Sharp_Eye: number;
        const Mystic_Will: number;
        const Rock_Skin: number;
        const Superhuman_Strength: number;
        const Improved_Reflexes: number;
        const Rapid_Heal: number;
        const Protect_Item: number;
        const Hawk_Eye: number;
        const Mystic_Lore: number;
        const Steel_Skin: number;
        const Ultimate_Strength: number;
        const Incredible_Reflexes: number;
        const Protect_from_Magic: number;
        const Protect_from_Ranged: number;
        const Protect_from_Melee: number;
        const Eagle_Eye: number;
        const Mystic_Might: number;
        const Redemption: number;
        const Chivalry: number;
        const Piety: number;
        const Rigour: number;
        const Augury: number;
    }
    namespace slayerTier {
        const Easy: number;
        const Normal: number;
        const Hard: number;
        const Elite: number;
        const Master: number;
    }
    namespace gamemode {
        const Standard: number;
        const Hardcore: number;
        const Adventure: number;
        const Chaos: number;
    }
    namespace item {
        export const Normal_Logs: number;
        export const Oak_Logs: number;
        export const Willow_Logs: number;
        export const Teak_Logs: number;
        export const Maple_Logs: number;
        export const Mahogany_Logs: number;
        export const Yew_Logs: number;
        export const Magic_Logs: number;
        export const Redwood_Logs: number;
        export const Raw_Shrimp: number;
        export const Raw_Sardine: number;
        export const Raw_Herring: number;
        export const Raw_Trout: number;
        export const Raw_Salmon: number;
        export const Raw_Lobster: number;
        export const Raw_Swordfish: number;
        export const Raw_Crab: number;
        export const Raw_Shark: number;
        export const Raw_Cave_Fish: number;
        export const Raw_Manta_Ray: number;
        export const Raw_Whale: number;
        export const Shrimp: number;
        export const Sardine: number;
        export const Herring: number;
        export const Trout: number;
        export const Salmon: number;
        export const Lobster: number;
        export const Swordfish: number;
        export const Crab: number;
        export const Shark: number;
        export const Cave_Fish: number;
        export const Manta_Ray: number;
        export const Whale: number;
        export const Burnt_Shrimp: number;
        export const Burnt_Sardine: number;
        export const Burnt_Herring: number;
        export const Burnt_Trout: number;
        export const Burnt_Salmon: number;
        export const Burnt_Lobster: number;
        export const Burnt_Swordfish: number;
        export const Burnt_Crab: number;
        export const Burnt_Shark: number;
        export const Burnt_Cave_Fish: number;
        export const Burnt_Manta_Ray: number;
        export const Burnt_Whale: number;
        export const Copper_Ore: number;
        export const Tin_Ore: number;
        export const Iron_Ore: number;
        export const Coal_Ore: number;
        export const Silver_Ore: number;
        export const Gold_Ore: number;
        export const Mithril_Ore: number;
        export const Adamantite_Ore: number;
        export const Runite_Ore: number;
        export const Dragonite_Ore: number;
        export const Bronze_Bar: number;
        export const Iron_Bar: number;
        export const Steel_Bar: number;
        export const Gold_Bar: number;
        export const Mithril_Bar: number;
        export const Adamantite_Bar: number;
        export const Runite_Bar: number;
        export const Dragonite_Bar: number;
        export const Bronze_Dagger: number;
        export const Bronze_Sword: number;
        export const Bronze_Battleaxe: number;
        export const Bronze_2H_Sword: number;
        export const Bronze_Helmet: number;
        export const Bronze_Boots: number;
        export const Bronze_Platelegs: number;
        export const Bronze_Platebody: number;
        export const Iron_Dagger: number;
        export const Iron_Sword: number;
        export const Iron_Battleaxe: number;
        export const Iron_2H_Sword: number;
        export const Iron_Helmet: number;
        export const Iron_Boots: number;
        export const Iron_Platelegs: number;
        export const Iron_Platebody: number;
        export const Steel_Dagger: number;
        export const Steel_Sword: number;
        export const Steel_Battleaxe: number;
        export const Steel_2H_Sword: number;
        export const Steel_Helmet: number;
        export const Steel_Boots: number;
        export const Steel_Platelegs: number;
        export const Steel_Platebody: number;
        export const Mithril_Dagger: number;
        export const Mithril_Sword: number;
        export const Mithril_Battleaxe: number;
        export const Mithril_2H_Sword: number;
        export const Mithril_Helmet: number;
        export const Mithril_Boots: number;
        export const Mithril_Platelegs: number;
        export const Mithril_Platebody: number;
        export const Adamant_Dagger: number;
        export const Adamant_Sword: number;
        export const Adamant_Battleaxe: number;
        export const Adamant_2H_Sword: number;
        export const Adamant_Helmet: number;
        export const Adamant_Boots: number;
        export const Adamant_Platelegs: number;
        export const Adamant_Platebody: number;
        export const Rune_Dagger: number;
        export const Rune_Sword: number;
        export const Rune_Battleaxe: number;
        export const Rune_2H_Sword: number;
        export const Rune_Helmet: number;
        export const Rune_Boots: number;
        export const Rune_Platelegs: number;
        export const Rune_Platebody: number;
        export const Dragon_Dagger: number;
        export const Dragon_Sword: number;
        export const Dragon_Battleaxe: number;
        export const Dragon_2H_Sword: number;
        export const Dragon_Helmet: number;
        export const Dragon_Boots: number;
        export const Dragon_Platelegs: number;
        export const Dragon_Platebody: number;
        export const Bird_Nest: number;
        export const Treasure_Chest: number;
        export const Bronze_Shield: number;
        export const Iron_Shield: number;
        export const Steel_Shield: number;
        export const Mithril_Shield: number;
        export const Adamant_Shield: number;
        export const Rune_Shield: number;
        export const Dragon_Shield: number;
        export const Topaz: number;
        export const Sapphire: number;
        export const Ruby: number;
        export const Emerald: number;
        export const Diamond: number;
        export const Silver_Bar: number;
        export const Black_Dagger: number;
        export const Black_Sword: number;
        export const Black_Battleaxe: number;
        export const Black_2H_Sword: number;
        export const Black_Helmet: number;
        export const Black_Boots: number;
        export const Black_Platelegs: number;
        export const Black_Platebody: number;
        export const Black_Shield: number;
        export const Potato_Seed: number;
        export const Onion_Seed: number;
        export const Cabbage_Seed: number;
        export const Tomato_Seed: number;
        export const Sweetcorn_Seed: number;
        export const Strawberry_Seed: number;
        export const Watermelon_Seed: number;
        export const Snape_Grass_Seed: number;
        export const Potatoes: number;
        export const Onions: number;
        export const Cabbage: number;
        export const Tomatoes: number;
        export const Sweetcorn: number;
        export const Strawberries: number;
        export const Watermelon: number;
        export const Snape_Grass: number;
        const Compost_1: number;
        export { Compost_1 as Compost };
        export const Oak_Tree_Seed: number;
        export const Willow_Tree_Seed: number;
        export const Maple_Tree_Seed: number;
        export const Yew_Tree_Seed: number;
        export const Magic_Tree_Seed: number;
        export const Bronze_Helmet_T_S: number;
        export const Bronze_Boots_T_S: number;
        export const Bronze_Platelegs_T_S: number;
        export const Bronze_Platebody_T_S: number;
        export const Bronze_Shield_T_S: number;
        export const Iron_Helmet_T_S: number;
        export const Iron_Boots_T_S: number;
        export const Iron_Platelegs_T_S: number;
        export const Iron_Platebody_T_S: number;
        export const Iron_Shield_T_S: number;
        export const Steel_Helmet_T_S: number;
        export const Steel_Boots_T_S: number;
        export const Steel_Platelegs_T_S: number;
        export const Steel_Platebody_T_S: number;
        export const Steel_Shield_T_S: number;
        export const Black_Helmet_T_S: number;
        export const Black_Boots_T_S: number;
        export const Black_Platelegs_T_S: number;
        export const Black_Platebody_T_S: number;
        export const Black_Shield_T_S: number;
        export const Mithril_Helmet_T_S: number;
        export const Mithril_Boots_T_S: number;
        export const Mithril_Platelegs_T_S: number;
        export const Mithril_Platebody_T_S: number;
        export const Mithril_Shield_T_S: number;
        export const Adamant_Helmet_T_S: number;
        export const Adamant_Boots_T_S: number;
        export const Adamant_Platelegs_T_S: number;
        export const Adamant_Platebody_T_S: number;
        export const Adamant_Shield_T_S: number;
        export const Rune_Helmet_T_S: number;
        export const Rune_Boots_T_S: number;
        export const Rune_Platelegs_T_S: number;
        export const Rune_Platebody_T_S: number;
        export const Rune_Shield_T_S: number;
        export const Dragon_Helmet_T_S: number;
        export const Dragon_Boots_T_S: number;
        export const Dragon_Platelegs_T_S: number;
        export const Dragon_Platebody_T_S: number;
        export const Dragon_Shield_T_S: number;
        export const Bronze_Helmet_T_G: number;
        export const Bronze_Boots_T_G: number;
        export const Bronze_Platelegs_T_G: number;
        export const Bronze_Platebody_T_G: number;
        export const Bronze_Shield_T_G: number;
        export const Iron_Helmet_T_G: number;
        export const Iron_Boots_T_G: number;
        export const Iron_Platelegs_T_G: number;
        export const Iron_Platebody_T_G: number;
        export const Iron_Shield_T_G: number;
        export const Steel_Helmet_T_G: number;
        export const Steel_Boots_T_G: number;
        export const Steel_Platelegs_T_G: number;
        export const Steel_Platebody_T_G: number;
        export const Steel_Shield_T_G: number;
        export const Black_Helmet_T_G: number;
        export const Black_Boots_T_G: number;
        export const Black_Platelegs_T_G: number;
        export const Black_Platebody_T_G: number;
        export const Black_Shield_T_G: number;
        export const Mithril_Helmet_T_G: number;
        export const Mithril_Boots_T_G: number;
        export const Mithril_Platelegs_T_G: number;
        export const Mithril_Platebody_T_G: number;
        export const Mithril_Shield_T_G: number;
        export const Adamant_Helmet_T_G: number;
        export const Adamant_Boots_T_G: number;
        export const Adamant_Platelegs_T_G: number;
        export const Adamant_Platebody_T_G: number;
        export const Adamant_Shield_T_G: number;
        export const Rune_Helmet_T_G: number;
        export const Rune_Boots_T_G: number;
        export const Rune_Platelegs_T_G: number;
        export const Rune_Platebody_T_G: number;
        export const Rune_Shield_T_G: number;
        export const Dragon_Helmet_T_G: number;
        export const Dragon_Boots_T_G: number;
        export const Dragon_Platelegs_T_G: number;
        export const Dragon_Platebody_T_G: number;
        export const Dragon_Shield_T_G: number;
        export const Amulet_of_Fishing: number;
        export const Amulet_of_Strength: number;
        export const Amulet_of_Accuracy: number;
        export const Amulet_of_Defence: number;
        export const Amulet_of_Glory: number;
        export const Normal_Shortbow: number;
        export const Oak_Shortbow: number;
        export const Willow_Shortbow: number;
        export const Maple_Shortbow: number;
        export const Yew_Shortbow: number;
        export const Magic_Shortbow: number;
        export const Normal_Longbow: number;
        export const Oak_Longbow: number;
        export const Willow_Longbow: number;
        export const Maple_Longbow: number;
        export const Yew_Longbow: number;
        export const Magic_Longbow: number;
        export const Bronze_Arrows: number;
        export const Iron_Arrows: number;
        export const Steel_Arrows: number;
        export const Mithril_Arrows: number;
        export const Adamant_Arrows: number;
        export const Rune_Arrows: number;
        export const Dragon_Arrows: number;
        export const Bronze_Arrowtips: number;
        export const Iron_Arrowtips: number;
        export const Steel_Arrowtips: number;
        export const Mithril_Arrowtips: number;
        export const Adamant_Arrowtips: number;
        export const Rune_Arrowtips: number;
        export const Dragon_Arrowtips: number;
        export const Arrow_Shafts: number;
        export const Headless_Arrows: number;
        const Feathers_1: number;
        export { Feathers_1 as Feathers };
        export const Normal_Shortbow_U: number;
        export const Oak_Shortbow_U: number;
        export const Willow_Shortbow_U: number;
        export const Maple_Shortbow_U: number;
        export const Yew_Shortbow_U: number;
        export const Magic_Shortbow_U: number;
        export const Normal_Longbow_U: number;
        export const Oak_Longbow_U: number;
        export const Willow_Longbow_U: number;
        export const Maple_Longbow_U: number;
        export const Yew_Longbow_U: number;
        export const Magic_Longbow_U: number;
        const Bowstring_1: number;
        export { Bowstring_1 as Bowstring };
        const Leather_1: number;
        export { Leather_1 as Leather };
        const Green_Dragonhide_1: number;
        export { Green_Dragonhide_1 as Green_Dragonhide };
        const Blue_Dragonhide_1: number;
        export { Blue_Dragonhide_1 as Blue_Dragonhide };
        const Red_Dragonhide_1: number;
        export { Red_Dragonhide_1 as Red_Dragonhide };
        export const Black_Dragonhide: number;
        export const Leather_Gloves: number;
        export const Leather_Boots: number;
        export const Leather_Cowl: number;
        export const Leather_Vambraces: number;
        export const Leather_Body: number;
        export const Leather_Chaps: number;
        export const Green_Dhide_Vambraces: number;
        export const Green_Dhide_Chaps: number;
        export const Green_Dhide_Body: number;
        export const Blue_Dhide_Vambraces: number;
        export const Blue_Dhide_Chaps: number;
        export const Blue_Dhide_Body: number;
        export const Red_Dhide_Vambraces: number;
        export const Red_Dhide_Chaps: number;
        export const Red_Dhide_Body: number;
        export const Black_Dhide_Vambraces: number;
        export const Black_Dhide_Chaps: number;
        export const Black_Dhide_Body: number;
        export const Silver_Topaz_Ring: number;
        export const Silver_Sapphire_Ring: number;
        export const Silver_Ruby_Ring: number;
        export const Silver_Emerald_Ring: number;
        export const Silver_Diamond_Ring: number;
        export const Gold_Topaz_Ring: number;
        export const Gold_Sapphire_Ring: number;
        export const Gold_Ruby_Ring: number;
        export const Gold_Emerald_Ring: number;
        export const Gold_Diamond_Ring: number;
        export const Silver_Topaz_Necklace: number;
        export const Silver_Sapphire_Necklace: number;
        export const Silver_Ruby_Necklace: number;
        export const Silver_Emerald_Necklace: number;
        export const Silver_Diamond_Necklace: number;
        export const Gold_Topaz_Necklace: number;
        export const Gold_Sapphire_Necklace: number;
        export const Gold_Ruby_Necklace: number;
        export const Gold_Emerald_Necklace: number;
        export const Gold_Diamond_Necklace: number;
        const Cooking_Gloves_1: number;
        export { Cooking_Gloves_1 as Cooking_Gloves };
        const Mining_Gloves_1: number;
        export { Mining_Gloves_1 as Mining_Gloves };
        const Smithing_Gloves_1: number;
        export { Smithing_Gloves_1 as Smithing_Gloves };
        const Thieving_Gloves_1: number;
        export { Thieving_Gloves_1 as Thieving_Gloves };
        const Gem_Gloves_1: number;
        export { Gem_Gloves_1 as Gem_Gloves };
        export const Cape_Of_Prat: number;
        export const Obsidian_Cape: number;
        export const Elite_Amulet_of_Strength: number;
        export const Elite_Amulet_of_Accuracy: number;
        export const Elite_Amulet_of_Defence: number;
        export const Elite_Amulet_of_Glory: number;
        export const Egg_Chest: number;
        export const Ancient_Sword: number;
        export const Ancient_Helmet: number;
        export const Ancient_Platelegs: number;
        export const Ancient_Platebody: number;
        export const Ancient_Shield: number;
        export const Ancient_Helmet_T_S: number;
        export const Ancient_Platelegs_T_S: number;
        export const Ancient_Platebody_T_S: number;
        export const Ancient_Shield_T_S: number;
        export const Ancient_Helmet_T_G: number;
        export const Ancient_Platelegs_T_G: number;
        export const Ancient_Platebody_T_G: number;
        export const Ancient_Shield_T_G: number;
        export const Pirate_Booty: number;
        export const Fire_Cape: number;
        export const Elite_Chest: number;
        export const Spider_Chest: number;
        export const Rangers_Hat: number;
        export const Ranger_Boots: number;
        export const Amulet_of_Fury: number;
        export const Amulet_of_Torture: number;
        export const Amulet_of_Ranged: number;
        export const Ice_Dagger: number;
        export const Ice_Sword: number;
        export const Ice_Battleaxe: number;
        export const Ice_2h_Sword: number;
        export const Ice_Helmet: number;
        export const Ice_Boots: number;
        export const Ice_Platelegs: number;
        export const Ice_Platebody: number;
        export const Ice_Shield: number;
        export const Ice_Arrows: number;
        export const Ice_Shortbow: number;
        export const Ice_Longbow: number;
        export const Frozen_Chest: number;
        export const Standard_Chest: number;
        export const Amulet_of_Looting: number;
        export const Redwood_Shortbow_U: number;
        export const Redwood_Shortbow: number;
        export const Redwood_Longbow_U: number;
        export const Redwood_Longbow: number;
        export const Rune_Essence: number;
        export const Air_Rune: number;
        export const Mind_Rune: number;
        export const Water_Rune: number;
        export const Earth_Rune: number;
        export const Fire_Rune: number;
        export const Body_Rune: number;
        export const Chaos_Rune: number;
        export const Death_Rune: number;
        export const Blood_Rune: number;
        export const Ancient_Rune: number;
        export const Staff_of_Air: number;
        export const Staff_of_Water: number;
        export const Staff_of_Earth: number;
        export const Staff_of_Fire: number;
        export const Air_Battlestaff: number;
        export const Water_Battlestaff: number;
        export const Earth_Battlestaff: number;
        export const Fire_Battlestaff: number;
        export const Mystic_Air_Staff: number;
        export const Mystic_Water_Staff: number;
        export const Mystic_Earth_Staff: number;
        export const Mystic_Fire_Staff: number;
        export const Green_Wizard_Hat: number;
        export const Green_Wizard_Robes: number;
        export const Green_Wizard_Bottoms: number;
        export const Green_Wizard_Boots: number;
        export const Blue_Wizard_Hat: number;
        export const Blue_Wizard_Robes: number;
        export const Blue_Wizard_Bottoms: number;
        export const Blue_Wizard_Boots: number;
        export const Red_Wizard_Hat: number;
        export const Red_Wizard_Robes: number;
        export const Red_Wizard_Bottoms: number;
        export const Red_Wizard_Boots: number;
        export const Black_Wizard_Hat: number;
        export const Black_Wizard_Robes: number;
        export const Black_Wizard_Bottoms: number;
        export const Black_Wizard_Boots: number;
        export const Ancient_Wizard_Hat: number;
        export const Ancient_Wizard_Robes: number;
        export const Ancient_Wizard_Bottoms: number;
        export const Ancient_Wizard_Boots: number;
        export const Bronze_Scimitar: number;
        export const Iron_Scimitar: number;
        export const Steel_Scimitar: number;
        export const Black_Scimitar: number;
        export const Mithril_Scimitar: number;
        export const Adamant_Scimitar: number;
        export const Rune_Scimitar: number;
        export const Dragon_Scimitar: number;
        const Bones_1: number;
        export { Bones_1 as Bones };
        const Dragon_Bones_1: number;
        export { Dragon_Bones_1 as Dragon_Bones };
        const Magic_Bones_1: number;
        export { Magic_Bones_1 as Magic_Bones };
        export const Bandit_Chest: number;
        export const Ancient_Longbow: number;
        const Attack_Skillcape_1: number;
        export { Attack_Skillcape_1 as Attack_Skillcape };
        const Cooking_Skillcape_1: number;
        export { Cooking_Skillcape_1 as Cooking_Skillcape };
        const Crafting_Skillcape_1: number;
        export { Crafting_Skillcape_1 as Crafting_Skillcape };
        const Defence_Skillcape_1: number;
        export { Defence_Skillcape_1 as Defence_Skillcape };
        const Farming_Skillcape_1: number;
        export { Farming_Skillcape_1 as Farming_Skillcape };
        const Firemaking_Skillcape_1: number;
        export { Firemaking_Skillcape_1 as Firemaking_Skillcape };
        const Fishing_Skillcape_1: number;
        export { Fishing_Skillcape_1 as Fishing_Skillcape };
        const Fletching_Skillcape_1: number;
        export { Fletching_Skillcape_1 as Fletching_Skillcape };
        const Hitpoints_Skillcape_1: number;
        export { Hitpoints_Skillcape_1 as Hitpoints_Skillcape };
        const Magic_Skillcape_1: number;
        export { Magic_Skillcape_1 as Magic_Skillcape };
        const Mining_Skillcape_1: number;
        export { Mining_Skillcape_1 as Mining_Skillcape };
        const Ranged_Skillcape_1: number;
        export { Ranged_Skillcape_1 as Ranged_Skillcape };
        const Runecrafting_Skillcape_1: number;
        export { Runecrafting_Skillcape_1 as Runecrafting_Skillcape };
        const Smithing_Skillcape_1: number;
        export { Smithing_Skillcape_1 as Smithing_Skillcape };
        const Strength_Skillcape_1: number;
        export { Strength_Skillcape_1 as Strength_Skillcape };
        const Thieving_Skillcape_1: number;
        export { Thieving_Skillcape_1 as Thieving_Skillcape };
        const Woodcutting_Skillcape_1: number;
        export { Woodcutting_Skillcape_1 as Woodcutting_Skillcape };
        export const Magic_Chest: number;
        export const Bronze_Gloves: number;
        export const Iron_Gloves: number;
        export const Steel_Gloves: number;
        export const Mithril_Gloves: number;
        export const Adamant_Gloves: number;
        export const Rune_Gloves: number;
        export const Dragon_Gloves: number;
        export const Carrot_Seeds: number;
        export const Carrot: number;
        export const Mastery_Token_Cooking: number;
        export const Mastery_Token_Crafting: number;
        export const Mastery_Token_Farming: number;
        export const Mastery_Token_Firemaking: number;
        export const Mastery_Token_Fishing: number;
        export const Mastery_Token_Fletching: number;
        export const Mastery_Token_Mining: number;
        export const Mastery_Token_Runecrafting: number;
        export const Mastery_Token_Smithing: number;
        export const Mastery_Token_Thieving: number;
        export const Mastery_Token_Woodcutting: number;
        export const Bobbys_Pocket: number;
        const Prayer_Skillcape_1: number;
        export { Prayer_Skillcape_1 as Prayer_Skillcape };
        const Slayer_Helmet_Basic_1: number;
        export { Slayer_Helmet_Basic_1 as Slayer_Helmet_Basic };
        const Slayer_Platebody_Basic_1: number;
        export { Slayer_Platebody_Basic_1 as Slayer_Platebody_Basic };
        export const Slayer_Helmet_Strong: number;
        export const Slayer_Platebody_Strong: number;
        export const Slayer_Helmet_Elite: number;
        export const Slayer_Platebody_Elite: number;
        export const Magic_Wand_Basic: number;
        export const Magic_Wand_Powerful: number;
        export const Magic_Wand_Elite: number;
        export const Book_of_Eli: number;
        const Mirror_Shield_1: number;
        export { Mirror_Shield_1 as Mirror_Shield };
        export const Eyeball: number;
        export const Dragon_Claw_Fragment: number;
        export const Dragon_Claw: number;
        export const Ancient_Claw_Fragment: number;
        export const Ancient_Claw: number;
        export const Holy_Dust: number;
        export const Cape_of_Arrow_Preservation: number;
        const Magical_Ring_1: number;
        export { Magical_Ring_1 as Magical_Ring };
        export const Ancient_Arrow: number;
        export const Ancient_2H_Sword: number;
        const Slayer_Skillcape_1: number;
        export { Slayer_Skillcape_1 as Slayer_Skillcape };
        export const Big_Bones: number;
        const Slayer_Wizard_Hat_Basic_1: number;
        export { Slayer_Wizard_Hat_Basic_1 as Slayer_Wizard_Hat_Basic };
        const Slayer_Wizard_Robes_Basic_1: number;
        export { Slayer_Wizard_Robes_Basic_1 as Slayer_Wizard_Robes_Basic };
        export const Slayer_Wizard_Hat_Strong: number;
        export const Slayer_Wizard_Robes_Strong: number;
        export const Slayer_Wizard_Hat_Elite: number;
        export const Slayer_Wizard_Robes_Elite: number;
        const Slayer_Cowl_Basic_1: number;
        export { Slayer_Cowl_Basic_1 as Slayer_Cowl_Basic };
        const Slayer_Leather_Body_Basic_1: number;
        export { Slayer_Leather_Body_Basic_1 as Slayer_Leather_Body_Basic };
        export const Slayer_Cowl_Strong: number;
        export const Slayer_Leather_Body_Strong: number;
        export const Slayer_Cowl_Elite: number;
        export const Slayer_Leather_Body_Elite: number;
        export const Garum_Herb: number;
        export const Sourweed_Herb: number;
        export const Mantalyme_Herb: number;
        export const Lemontyle_Herb: number;
        export const Oxilyme_Herb: number;
        export const Poraxx_Herb: number;
        export const Pigtayle_Herb: number;
        export const Barrentoe_Herb: number;
        export const Garum_Seed: number;
        export const Sourweed_Seed: number;
        export const Mantalyme_Seed: number;
        export const Lemontyle_Seed: number;
        export const Oxilyme_Seed: number;
        export const Poraxx_Seed: number;
        export const Pigtayle_Seed: number;
        export const Barrentoe_Seed: number;
        export const Melee_Accuracy_Potion_I: number;
        export const Melee_Accuracy_Potion_II: number;
        export const Melee_Accuracy_Potion_III: number;
        export const Melee_Accuracy_Potion_IV: number;
        export const Melee_Strength_Potion_I: number;
        export const Melee_Strength_Potion_II: number;
        export const Melee_Strength_Potion_III: number;
        export const Melee_Strength_Potion_IV: number;
        export const Melee_Evasion_Potion_I: number;
        export const Melee_Evasion_Potion_II: number;
        export const Melee_Evasion_Potion_III: number;
        export const Melee_Evasion_Potion_IV: number;
        export const Ranged_Assistance_Potion_I: number;
        export const Ranged_Assistance_Potion_II: number;
        export const Ranged_Assistance_Potion_III: number;
        export const Ranged_Assistance_Potion_IV: number;
        export const Magic_Assistance_Potion_I: number;
        export const Magic_Assistance_Potion_II: number;
        export const Magic_Assistance_Potion_III: number;
        export const Magic_Assistance_Potion_IV: number;
        export const Regeneration_Potion_I: number;
        export const Regeneration_Potion_II: number;
        export const Regeneration_Potion_III: number;
        export const Regeneration_Potion_IV: number;
        export const Damage_Reduction_Potion_I: number;
        export const Damage_Reduction_Potion_II: number;
        export const Damage_Reduction_Potion_III: number;
        export const Damage_Reduction_Potion_IV: number;
        export const Bird_Nest_Potion_I: number;
        export const Bird_Nest_Potion_II: number;
        export const Bird_Nest_Potion_III: number;
        export const Bird_Nest_Potion_IV: number;
        export const Fishermans_Potion_I: number;
        export const Fishermans_Potion_II: number;
        export const Fishermans_Potion_III: number;
        export const Fishermans_Potion_IV: number;
        export const Controlled_Heat_Potion_I: number;
        export const Controlled_Heat_Potion_II: number;
        export const Controlled_Heat_Potion_III: number;
        export const Controlled_Heat_Potion_IV: number;
        export const Generous_Cook_Potion_I: number;
        export const Generous_Cook_Potion_II: number;
        export const Generous_Cook_Potion_III: number;
        export const Generous_Cook_Potion_IV: number;
        export const Perfect_Swing_Potion_I: number;
        export const Perfect_Swing_Potion_II: number;
        export const Perfect_Swing_Potion_III: number;
        export const Perfect_Swing_Potion_IV: number;
        export const Seeing_Gold_Potion_I: number;
        export const Seeing_Gold_Potion_II: number;
        export const Seeing_Gold_Potion_III: number;
        export const Seeing_Gold_Potion_IV: number;
        export const Gentle_Hands_Potion_I: number;
        export const Gentle_Hands_Potion_II: number;
        export const Gentle_Hands_Potion_III: number;
        export const Gentle_Hands_Potion_IV: number;
        export const Farming_Potion_I: number;
        export const Farming_Potion_II: number;
        export const Farming_Potion_III: number;
        export const Farming_Potion_IV: number;
        export const Fletching_Potion_I: number;
        export const Fletching_Potion_II: number;
        export const Fletching_Potion_III: number;
        export const Fletching_Potion_IV: number;
        export const Crafting_Potion_I: number;
        export const Crafting_Potion_II: number;
        export const Crafting_Potion_III: number;
        export const Crafting_Potion_IV: number;
        export const Elemental_Potion_I: number;
        export const Elemental_Potion_II: number;
        export const Elemental_Potion_III: number;
        export const Elemental_Potion_IV: number;
        export const Herblore_Potion_I: number;
        export const Herblore_Potion_II: number;
        export const Herblore_Potion_III: number;
        export const Herblore_Potion_IV: number;
        export const Ranged_Strength_Potion_I: number;
        export const Ranged_Strength_Potion_II: number;
        export const Ranged_Strength_Potion_III: number;
        export const Ranged_Strength_Potion_IV: number;
        export const Magic_Damage_Potion_I: number;
        export const Magic_Damage_Potion_II: number;
        export const Magic_Damage_Potion_III: number;
        export const Magic_Damage_Potion_IV: number;
        export const Large_Horn: number;
        export const Herb_Sack: number;
        export const Sunset_Rapier: number;
        export const Chest_of_Witwix: number;
        export const Amulet_of_Calculated_Promotion: number;
        export const Hard_Leather_Gloves: number;
        export const Hard_Leather_Boots: number;
        export const Hard_Leather_Cowl: number;
        export const Hard_Leather_Vambraces: number;
        export const Hard_Leather_Body: number;
        export const Hard_Leather_Chaps: number;
        export const Chapeau_Noir: number;
        export const Mastery_Token_Herblore: number;
        const Herblore_Skillcape_1: number;
        export { Herblore_Skillcape_1 as Herblore_Skillcape };
        export const Diamond_Luck_Potion_I: number;
        export const Diamond_Luck_Potion_II: number;
        export const Diamond_Luck_Potion_III: number;
        export const Diamond_Luck_Potion_IV: number;
        export const Divine_Potion_I: number;
        export const Divine_Potion_II: number;
        export const Divine_Potion_III: number;
        export const Divine_Potion_IV: number;
        export const Lucky_Herb_Potion_I: number;
        export const Lucky_Herb_Potion_II: number;
        export const Lucky_Herb_Potion_III: number;
        export const Lucky_Herb_Potion_IV: number;
        export const Signet_Ring_Half_A: number;
        export const Signet_Ring_Half_B: number;
        export const Aorpheats_Signet_Ring: number;
        export const Old_Boot: number;
        export const Old_Hat: number;
        export const Seaweed: number;
        export const Rusty_Key: number;
        export const Shell: number;
        export const Rope: number;
        export const Glass_Bottle: number;
        export const Rubber_Ducky: number;
        export const Raw_Blowfish: number;
        export const Raw_Poison_Fish: number;
        export const Leaping_Trout: number;
        export const Leaping_Salmon: number;
        export const Leaping_Broad_Fish: number;
        export const Raw_Magic_Fish: number;
        export const Raw_Anglerfish: number;
        export const Raw_Fanfish: number;
        export const Raw_Seahorse: number;
        export const Raw_Carp: number;
        export const Raw_Skeleton_Fish: number;
        export const Pirates_Lost_Ring: number;
        export const Message_In_A_Bottle: number;
        export const Barbarian_Gloves: number;
        export const Ancient_Ring_Of_Skills: number;
        export const Anglerfish: number;
        export const Fanfish: number;
        export const Seahorse: number;
        export const Carp: number;
        export const Burnt_Anglerfish: number;
        export const Burnt_Fanfish: number;
        export const Burnt_Seahorse: number;
        export const Burnt_Carp: number;
        const Weird_Gloop_1: number;
        export { Weird_Gloop_1 as Weird_Gloop };
        export const Clue_Chasers_Insignia: number;
        export const Lemon: number;
        export const Lemons: number;
        export const Lemonade: number;
        export const Topaz_Bolts: number;
        export const Sapphire_Bolts: number;
        export const Ruby_Bolts: number;
        export const Emerald_Bolts: number;
        export const Diamond_Bolts: number;
        export const Bronze_Crossbow: number;
        export const Iron_Crossbow: number;
        export const Steel_Crossbow: number;
        export const Mithril_Crossbow: number;
        export const Adamant_Crossbow: number;
        export const Rune_Crossbow: number;
        export const Dragon_Crossbow: number;
        export const Ancient_Crossbow: number;
        export const Bronze_Javelin: number;
        export const Iron_Javelin: number;
        export const Steel_Javelin: number;
        export const Mithril_Javelin: number;
        export const Adamant_Javelin: number;
        export const Rune_Javelin: number;
        export const Dragon_Javelin: number;
        export const Ancient_Javelin: number;
        export const Bronze_Throwing_Knife: number;
        export const Iron_Throwing_Knife: number;
        export const Steel_Throwing_Knife: number;
        export const Mithril_Throwing_Knife: number;
        export const Adamant_Throwing_Knife: number;
        export const Rune_Throwing_Knife: number;
        export const Dragon_Throwing_Knife: number;
        export const Ancient_Throwing_Knife: number;
        export const Aeris_God_Helmet: number;
        export const Aeris_God_Platelegs: number;
        export const Aeris_God_Platebody: number;
        export const Aeris_God_Boots: number;
        export const Aeris_God_Gloves: number;
        export const Glacia_God_Helmet: number;
        export const Glacia_God_Platelegs: number;
        export const Glacia_God_Platebody: number;
        export const Glacia_God_Boots: number;
        export const Glacia_God_Gloves: number;
        export const Headless_Bolts: number;
        export const Bronze_Crossbow_Head: number;
        export const Iron_Crossbow_Head: number;
        export const Steel_Crossbow_Head: number;
        export const Mithril_Crossbow_Head: number;
        export const Adamant_Crossbow_Head: number;
        export const Rune_Crossbow_Head: number;
        export const Dragon_Crossbow_Head: number;
        export const Bronze_Javelin_Heads: number;
        export const Iron_Javelin_Heads: number;
        export const Steel_Javelin_Heads: number;
        export const Mithril_Javelin_Heads: number;
        export const Adamant_Javelin_Heads: number;
        export const Rune_Javelin_Heads: number;
        export const Dragon_Javelin_Heads: number;
        export const Green_Dhide_Vambraces_U: number;
        export const Green_Dhide_Chaps_U: number;
        export const Green_Dhide_Body_U: number;
        export const Blue_Dhide_Vambraces_U: number;
        export const Blue_Dhide_Chaps_U: number;
        export const Blue_Dhide_Body_U: number;
        export const Red_Dhide_Vambraces_U: number;
        export const Red_Dhide_Chaps_U: number;
        export const Red_Dhide_Body_U: number;
        export const Black_Dhide_Vambraces_U: number;
        export const Black_Dhide_Chaps_U: number;
        export const Black_Dhide_Body_U: number;
        export const Ancient_Dhide_Vambraces: number;
        export const Ancient_Dhide_Chaps: number;
        export const Ancient_Dhide_Body: number;
        export const Ancient_Dhide_Vambraces_U: number;
        export const Ancient_Dhide_Chaps_U: number;
        export const Ancient_Dhide_Body_U: number;
        export const Elite_Amulet_of_Ranged: number;
        export const Elder_Dragonhide: number;
        export const Green_Dhide_Shield: number;
        export const Blue_Dhide_Shield: number;
        export const Red_Dhide_Shield: number;
        export const Black_Dhide_Shield: number;
        export const Ancient_Dhide_Shield: number;
        export const Green_Dhide_Shield_U: number;
        export const Blue_Dhide_Shield_U: number;
        export const Red_Dhide_Shield_U: number;
        export const Black_Dhide_Shield_U: number;
        export const Ancient_Dhide_Shield_U: number;
        export const Air_Shard: number;
        export const Water_Shard: number;
        export const Earth_Shard: number;
        export const Fire_Shard: number;
        export const Air_Chest: number;
        export const Water_Chest: number;
        export const Earth_Chest: number;
        export const Fire_Chest: number;
        export const Terran_God_Helmet: number;
        export const Terran_God_Platelegs: number;
        export const Terran_God_Platebody: number;
        export const Terran_God_Boots: number;
        export const Terran_God_Gloves: number;
        export const Ragnar_God_Helmet: number;
        export const Ragnar_God_Platelegs: number;
        export const Ragnar_God_Platebody: number;
        export const Ragnar_God_Boots: number;
        export const Ragnar_God_Gloves: number;
        export const Deadeye_Ring: number;
        export const Deadeye_Amulet: number;
        export const Scroll_of_Aeris: number;
        export const Scroll_of_Glacia: number;
        export const Scroll_of_Terran: number;
        export const Scroll_of_Ragnar: number;
        export const Warlock_Ring: number;
        export const Warlock_Amulet: number;
        export const Guardian_Ring: number;
        export const Guardian_Amulet: number;
        export const Fighter_Ring: number;
        export const Fighter_Amulet: number;
        export const Aeris_Godsword: number;
        export const Glacia_Godsword: number;
        export const Terran_Godsword: number;
        export const Ragnar_Godsword: number;
        export const Bank_Slot_Token: number;
        export const Stormsnap: number;
        export const Big_Ron: number;
        const Confetti_Crossbow_1: number;
        export { Confetti_Crossbow_1 as Confetti_Crossbow };
        export const Slayer_Crossbow: number;
        export const Slayer_Crossbow_Head: number;
        export const Eight: number;
        export const Twin_Exiles: number;
        const Max_Skillcape_1: number;
        export { Max_Skillcape_1 as Max_Skillcape };
        export const Bobs_Rake: number;
        export const Earth_Layered_Shield: number;
        export const Elder_Chest: number;
        export const Cloudburst_Staff: number;
        export const Amulet_of_Magic: number;
        export const Elite_Amulet_of_Magic: number;
        export const Bone_Necklace: number;
        const Skull_Cape_1: number;
        export { Skull_Cape_1 as Skull_Cape };
        export const Fury_of_the_Elemental_Zodiac: number;
        export const Light_Rune: number;
        export const Nature_Rune: number;
        export const Havoc_Rune: number;
        export const Spirit_Rune: number;
        export const Mist_Rune: number;
        export const Dust_Rune: number;
        export const Mud_Rune: number;
        export const Smoke_Rune: number;
        export const Steam_Rune: number;
        export const Lava_Rune: number;
        export const Air_Acolyte_Wizard_Hat: number;
        export const Air_Acolyte_Wizard_Robes: number;
        export const Air_Acolyte_Wizard_Bottoms: number;
        export const Air_Acolyte_Wizard_Boots: number;
        export const Water_Acolyte_Wizard_Hat: number;
        export const Water_Acolyte_Wizard_Robes: number;
        export const Water_Acolyte_Wizard_Bottoms: number;
        export const Water_Acolyte_Wizard_Boots: number;
        export const Earth_Acolyte_Wizard_Hat: number;
        export const Earth_Acolyte_Wizard_Robes: number;
        export const Earth_Acolyte_Wizard_Bottoms: number;
        export const Earth_Acolyte_Wizard_Boots: number;
        export const Fire_Acolyte_Wizard_Hat: number;
        export const Fire_Acolyte_Wizard_Robes: number;
        export const Fire_Acolyte_Wizard_Bottoms: number;
        export const Fire_Acolyte_Wizard_Boots: number;
        export const Air_Adept_Wizard_Hat: number;
        export const Air_Adept_Wizard_Robes: number;
        export const Air_Adept_Wizard_Bottoms: number;
        export const Air_Adept_Wizard_Boots: number;
        export const Water_Adept_Wizard_Hat: number;
        export const Water_Adept_Wizard_Robes: number;
        export const Water_Adept_Wizard_Bottoms: number;
        export const Water_Adept_Wizard_Boots: number;
        export const Earth_Adept_Wizard_Hat: number;
        export const Earth_Adept_Wizard_Robes: number;
        export const Earth_Adept_Wizard_Bottoms: number;
        export const Earth_Adept_Wizard_Boots: number;
        export const Fire_Adept_Wizard_Hat: number;
        export const Fire_Adept_Wizard_Robes: number;
        export const Fire_Adept_Wizard_Bottoms: number;
        export const Fire_Adept_Wizard_Boots: number;
        export const Air_Expert_Wizard_Hat: number;
        export const Air_Expert_Wizard_Robes: number;
        export const Air_Expert_Wizard_Bottoms: number;
        export const Air_Expert_Wizard_Boots: number;
        export const Water_Expert_Wizard_Hat: number;
        export const Water_Expert_Wizard_Robes: number;
        export const Water_Expert_Wizard_Bottoms: number;
        export const Water_Expert_Wizard_Boots: number;
        export const Earth_Expert_Wizard_Hat: number;
        export const Earth_Expert_Wizard_Robes: number;
        export const Earth_Expert_Wizard_Bottoms: number;
        export const Earth_Expert_Wizard_Boots: number;
        export const Fire_Expert_Wizard_Hat: number;
        export const Fire_Expert_Wizard_Robes: number;
        export const Fire_Expert_Wizard_Bottoms: number;
        export const Fire_Expert_Wizard_Boots: number;
        export const Air_Imbued_Wand: number;
        export const Water_Imbued_Wand: number;
        export const Earth_Imbued_Wand: number;
        export const Fire_Imbued_Wand: number;
        const Red_Party_Hat_1: number;
        export { Red_Party_Hat_1 as Red_Party_Hat };
        export const Dragonfire_Shield: number;
        export const Circlet_of_Rhaelyx: number;
        export const Jewel_of_Rhaelyx: number;
        export const Charge_Stone_of_Rhaelyx: number;
        export const Crown_of_Rhaelyx: number;
        export const Enchanted_Cape: number;
        export const Enchanted_Shield: number;
        export const Mysterious_Stone: number;
        export const Event_Clue_1: number;
        export const Event_Clue_2: number;
        export const Event_Clue_3: number;
        export const Event_Clue_4: number;
        export const Cake_Base: number;
        export const Candle: number;
        export const Magical_Icing: number;
        export const Magical_Flavouring: number;
        export const Birthday_Cake: number;
        export const Birthday_Token: number;
        export const Purple_Party_Hat: number;
        export const Ancient_Ring_Of_Mastery: number;
        export const Cape_of_Completion: number;
        const Desert_Hat_1: number;
        export { Desert_Hat_1 as Desert_Hat };
        const Blazing_Lantern_1: number;
        export { Blazing_Lantern_1 as Blazing_Lantern };
        const Climbing_Boots_1: number;
        export { Climbing_Boots_1 as Climbing_Boots };
        export const Miolite_Helmet: number;
        export const Miolite_Boots: number;
        export const Miolite_Platelegs: number;
        export const Miolite_Platebody: number;
        export const Miolite_Shield: number;
        export const Miolite_Sceptre: number;
        export const Thief_Gloves: number;
        export const Shaman_Ring: number;
        export const Book_of_Occults: number;
        export const Elementalist_Gloves: number;
        export const Sand_Treaders: number;
        export const Desert_Wrappings: number;
        export const Desert_Sabre: number;
        export const Desert_Shortbow: number;
        export const Sandstorm_Ring: number;
        export const Darksteel_Dagger: number;
        export const Elder_Crown: number;
        export const Tormented_Ring: number;
        export const Sanguine_Blade: number;
        export const Recoil_Shield: number;
        export const Wasteful_Ring: number;
        export const Infernal_Claw: number;
        export const Tidal_Edge_Fragment: number;
        export const Tidal_Edge: number;
        export const Ocean_Song_Fragment: number;
        export const Ocean_Song: number;
        export const Shockwave_Fragment: number;
        export const Shockwave: number;
        export const Jadestone_Bolts: number;
        export const Paladin_Gloves: number;
        export const Priest_Hat: number;
        export const Almighty_Lute: number;
        export const Miolite_Chest: number;
        export const Infernal_Core: number;
        export const Infernal_Cape: number;
        export const Slayer_Helmet_Master: number;
        export const Slayer_Platebody_Master: number;
        export const Slayer_Cowl_Master: number;
        export const Slayer_Leather_Body_Master: number;
        export const Slayer_Wizard_Hat_Master: number;
        export const Slayer_Wizard_Robes_Master: number;
        const Green_Party_Hat_1: number;
        export { Green_Party_Hat_1 as Green_Party_Hat };
        export const Hunters_Ring: number;
        export const Futures_Prophecy: number;
        export const Unknown_Evil: number;
        export const New_Dawn: number;
        const Slayer_Upgrade_Kit_Strong_1: number;
        export { Slayer_Upgrade_Kit_Strong_1 as Slayer_Upgrade_Kit_Strong };
        const Slayer_Upgrade_Kit_Elite_1: number;
        export { Slayer_Upgrade_Kit_Elite_1 as Slayer_Upgrade_Kit_Elite };
        const Slayer_Upgrade_Kit_Master_1: number;
        export { Slayer_Upgrade_Kit_Master_1 as Slayer_Upgrade_Kit_Master };
        export const Santa_Hat: number;
        export const Christmas_Cracker: number;
        export const Friendship_Bracelet: number;
        export const Candy_Cane: number;
        export const Christmas_Coal: number;
        export const Christmas_Sweater: number;
        export const Christmas_Wreath: number;
        export const Yellow_Party_Hat: number;
        export const Mastery_Token_Agility: number;
        const Agility_Skillcape_1: number;
        export { Agility_Skillcape_1 as Agility_Skillcape };
        export const Performance_Enhancing_Potion_I: number;
        export const Performance_Enhancing_Potion_II: number;
        export const Performance_Enhancing_Potion_III: number;
        export const Performance_Enhancing_Potion_IV: number;
        export const Easter_Egg: number;
        export const Summoning_Shard_Red: number;
        export const Summoning_Shard_Green: number;
        export const Summoning_Shard_Blue: number;
        export const Summoning_Shard_Silver: number;
        export const Summoning_Shard_Gold: number;
        export const Summoning_Shard_Black: number;
        export const Summoning_Familiar_Golbin_Thief: number;
        export const Summoning_Familiar_Occultist: number;
        export const Summoning_Familiar_Wolf: number;
        export const Summoning_Familiar_Ent: number;
        export const Summoning_Familiar_Mole: number;
        export const Summoning_Familiar_Octopus: number;
        export const Summoning_Familiar_Minotaur: number;
        export const Summoning_Familiar_Centaur: number;
        export const Summoning_Familiar_Witch: number;
        export const Summoning_Familiar_Pig: number;
        export const Summoning_Familiar_Crow: number;
        export const Summoning_Familiar_Leprechaun: number;
        export const Summoning_Familiar_Cyclops: number;
        export const Summoning_Familiar_Yak: number;
        export const Summoning_Familiar_Unicorn: number;
        export const Summoning_Familiar_Dragon: number;
        export const Summoning_Familiar_Monkey: number;
        export const Summoning_Familiar_Salamander: number;
        export const Summoning_Familiar_Bear: number;
        export const Summoning_Familiar_Devil: number;
        export const Mastery_Token_Summoning: number;
        export const Summoning_Skillcape: number;
        export const Abnormal_Log: number;
        export const Red_Herring: number;
        export const Necromancer_Potion_I: number;
        export const Necromancer_Potion_II: number;
        export const Necromancer_Potion_III: number;
        export const Necromancer_Potion_IV: number;
        export const Necromancer_Hat: number;
        export const Necromancer_Robes: number;
        export const Necromancer_Bottoms: number;
        export const Necromancer_Boots: number;
    }
}
declare const defaultBankSort: number[];
type general = number;
type skillUpgrades = number;
type slayer = number;
type skillcapes = number;
type materials = number;
declare function loadAgility(forceRestart?: boolean): void;
declare function createAgilityContainer(): void;
declare function startAgility(obstacle?: number, clear?: boolean, keepGoing?: boolean): void;
declare function getAgilityGPMultiplier(): number;
/**
 *
 * @param {ObstacleID} obstacleID
 * @param {boolean} [offline=false]
 */
declare function provideAgilityCompletionBonuses(obstacleID: ObstacleID, offline?: boolean): {
    gp: number;
    items: ItemQuantity2[];
};
declare function updateAgilityIntervals(): void;
/**
 *
 * @param {number} obstacleID
 * @param {AgilityPillar[]} agilityArray
 */
declare function displayPassiveBonuses(obstacleID: number, agilityArray?: AgilityPillar[]): string;
declare function createAgilityProgress(): void;
/**
 *
 * @param {ObstacleID} id
 */
declare function createObstacleBuilderElement(id: ObstacleID): string;
declare function createPassivePillarBuilderElement(): string;
/**
 *
 * @param {ObstacleID} obstacleID
 */
declare function updateChosenAgilityObstaclePassiveBonuses(obstacleID: ObstacleID): void;
/**
 *
 * @param {ObstacleID} obstacleID
 * @param {boolean} [obstacleActive=true]
 */
declare function createChosenAgilityObstacleElement(obstacleID: ObstacleID, obstacleActive?: boolean): string;
/**
 *
 * @param {ObstacleID} obstacleID
 */
declare function createSelectAgilityObstacleElement(obstacleID: ObstacleID): string;
/**
 *
 * @param {PillarID} pillarID
 */
declare function createSelectPassivePillarElement(pillarID: PillarID): string;
/**
 *
 * @param {PillarID} pillarID
 * @param {boolean} isActive
 */
declare function createChosenPassivePillarElement(pillarID: PillarID, isActive: boolean): string;
/**
 *
 * @param {ObstacleID} obstacleID
 * @param {boolean} [showMasteryLevelSeparate=false]
 * @param {boolean} [showCostReduction=false]
 */
declare function createSelectAgilityObstacleDescription(obstacleID: ObstacleID, showMasteryLevelSeparate?: boolean, showCostReduction?: boolean): string;
/**
 *
 * @param {ObstacleID} obstacleID
 * @returns {string}
 */
declare function getAgilityObstacleCostReductionElement(obstacleID: ObstacleID): string;
/**
 *
 * @param {ObstacleID} obstacleID
 */
declare function getSelectAgilityObstacleBenefits(obstacleID: ObstacleID): string;
/**
 *
 * @param {ObstacleID} obstacleID
 * @returns {string}
 */
declare function getAgilityObstacleGPBonus(obstacleID: ObstacleID): string;
/**
 *
 * @param {ObstacleID} obstacleID
 */
declare function updateAgilityObstacleGPBonus(obstacleID: ObstacleID): void;
/**
 *
 * @param {ObstacleID} obstacleID
 * @returns {string}
 */
declare function getAgilityObstacleXPBonus(obstacleID: ObstacleID): string;
/**
 *
 * @param {ObstacleID} obstacleID
 */
declare function updateAgilityObstacleXPBonus(obstacleID: ObstacleID): void;
/**
 *
 * @param {ObstacleID} obstacleID
 * @returns
 */
declare function getAgilityObstacleSlayerCoinsBonus(obstacleID: ObstacleID): string;
/**
 *
 * @param {ObstacleID} obstacleID
 */
declare function updateAgilityObstacleSlayerCoinsBonus(obstacleID: ObstacleID): void;
declare function updateAllAgilityBonusesPerObstacle(): void;
/**
 *
 * @param {ObstacleID} obstacleID
 */
declare function getSelectAgilityObstacleRequirements(obstacleID: ObstacleID): string;
/**
 *
 * @param {ObstacleID} obstacleID
 * @returns {number}
 */
declare function getAgilityObstacleCostReduction(obstacleID: ObstacleID): number;
/**
 *
 * @param {ObstacleID} obstacleID
 * @returns {number}
 */
declare function getAgilityObstacleItemCostReduction(obstacleID: ObstacleID): number;
/**
 *
 * @param {number} obstacleID
 * @param {AgilityPillar[]} agilityArray
 * @param {boolean} [reduceCosts=true]
 */
declare function getSelectAgilityObstacleCost(obstacleID: number, agilityArray?: AgilityPillar[], reduceCosts?: boolean): string;
/**
 * onClick callback function
 * @param {ObstacleCategories} category
 */
declare function displaySelectAgilityObstacle(category: ObstacleCategories): void;
/**
 * onClick callback function
 */
declare function displaySelectPassivePillar(): void;
/**
 * onClick callback function
 * @param {ObstacleCategories} category
 * @param {boolean} [confirmed=false]
 */
declare function destroyAgilityObstacle(category: ObstacleCategories, confirmed?: boolean): void;
/**
 * onClick callback function
 * @param {boolean} [confirmed=false]
 */
declare function destroyAgilityPassivePillar(confirmed?: boolean): void;
/**
 * onClick callback function
 * @param {ObstacleID} obstacleID
 * @param {boolean} [confirmed=false]
 */
declare function buildAgilityObstacle(obstacleID: ObstacleID, confirmed?: boolean): void;
/**
 * onClick callback function
 * @param {PillarID} pillarID
 * @param {boolean} [confirmed=false]
 */
declare function buildAgilityPassivePillar(pillarID: PillarID, confirmed?: boolean): void;
/**
 *
 * @param {ObstacleCost} definedCosts
 * @param {ObstacleID} obstacleID
 * @param {number} qty
 * @param {boolean} [reduceCosts=true]
 */
declare function applyCostsToPlayer(definedCosts: ObstacleCost, obstacleID: ObstacleID, qty?: number, reduceCosts?: boolean): void;
/**
 *
 * @param {ObstacleCost} definedCosts
 * @param {UnlockRequirement} definedRequirements
 * @param {ObstacleID} obstacleID
 * @param {boolean} [reduceCosts=true]
 */
declare function canIAffordThis(definedCosts: ObstacleCost, definedRequirements: UnlockRequirement, obstacleID: ObstacleID, reduceCosts?: boolean): boolean;
/**
 *
 * @param {UnlockRequirement} definedRequirements
 */
declare function checkUnlockRequirements(definedRequirements: UnlockRequirement): boolean;
declare function updateAgilityBreakdown(): void;
/**
 * onClick callback function
 */
declare function showAllAgilityPassives(): void;
/**
 * @template {number|SkillModifierData} T
 * @param {ObstacleID} obstacleID
 * @param {ModifierKeys} key
 * @param {T} value
 * @returns {T}
 */
declare function getAgilityModifierValue<T extends number | SkillModifierData>(obstacleID: ObstacleID, key: ModifierKeys, value: T): T;
/** @type {AgilityObstacle[]} */
declare const agilityObstacles: AgilityObstacle[];
/** @type {AgilityPillar[]} */
declare const agilityPassivePillars: AgilityPillar[];
/** Save game variable */
declare var agilityPassivePillarActive: number;
/** @type {ModifierActive} */
declare var agilityPassiveBonuses: ModifierActive;
/**
 * Save game variable
 * @type {ObstacleID[]} */
declare var chosenAgilityObstacles: ObstacleID[];
/**
 * Save game variable
 * @type {number[]} */
declare var agilityObstacleBuildCount: number[];
declare var isAgility: boolean;
declare var currentObstacle: number;
/** @type {TimeoutID} */
declare var agilityTimer: TimeoutID;
declare function loadItemsAlreadyFound(): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function checkBrandNewItem(itemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateBrandNewItem(itemID: ItemID): void;
/**
 *
 * @param {string} search
 */
declare function updateBankSearch(search: string): void;
/**
 * Initial loading of the bank. Used to refresh entire bank as well.
 */
declare function loadBank(): void;
/**
 * onClick callback function
 */
declare function clearBankSearch(): void;
declare function updateBank(): void;
declare function getBankValue(): void;
/**
 * Update an existing item in the bank. It only runs if the condition that executes this finds the same item in the bank already.
 * @param {BankID|false} bankID
 * @param {ItemID} itemID
 * @param {number} quantity
 * @param {boolean} [ignoreAdd=false]
 * @param {boolean} [ignoreUpdate=false]
 */
declare function updateItemInBank(bankID: BankID | false, itemID: ItemID, quantity: number, ignoreAdd?: boolean, ignoreUpdate?: boolean): void;
/**
 * onClick callback function
 */
declare function sortBank(): void;
/**
 * Remove an item from the bank when qty = 0
 * Assumes itemID exists in bank
 * @param {ItemID} itemID
 */
declare function removeItemFromBank(itemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function checkBankForItem(itemID: ItemID): boolean;
/**
 *
 * @param {ItemID} itemID
 */
declare function getBankId(itemID: ItemID): number;
/**
 *
 * @param {ItemID} itemID
 * @returns {number}
 */
declare function getBankQty(itemID: ItemID): number;
/**
 *
 * @param {number} currentBankSpace
 */
declare function checkAddItemToBank(currentBankSpace: number): boolean;
/**
 * Add a new item to the bank.
 * @param {ItemID} itemID
 * @param {number} quantity
 * @param {boolean} [found=true]
 * @param {boolean} [showNotification=true]
 * @param {boolean} [ignoreBankSpace=false]
 */
declare function addItemToBank(itemID: ItemID, quantity: number, found?: boolean, showNotification?: boolean, ignoreBankSpace?: boolean): boolean;
declare function getMaxBankSpace(): number;
/**
 * creation of a bank item
 * @param {ItemID} bankItemID
 * @param {BankID} [bankButtonID=0]
 * @returns {[number,string]}
 */
declare function createBankItem(bankItemID: ItemID, bankButtonID?: BankID): [number, string];
/**
 *
 * @param {ItemID} bankItemID
 */
declare function createBankItemEvents(bankItemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 * @param {boolean} [showStats=false]
 * @returns {string}
 */
declare function createItemInformationTooltip(itemID: ItemID, showStats?: boolean): string;
/**
 *
 * @param {ItemID} itemID
 * @returns {string}
 */
declare function getItemSpecialAttackInformation(itemID: ItemID): string;
/**
 *
 * @param {ItemID} itemID
 * @returns {string}
 */
declare function getItemBaseStatsBreakdown(itemID: ItemID): string;
/**
 *
 * @param {ItemID} itemID
 */
declare function getItemSalePrice(itemID: ItemID): number;
/**
 *
 * @param {ItemID} item
 * @param {boolean} [toggleSidebar=true]
 */
declare function selectBankItem(item: ItemID, toggleSidebar?: boolean): void;
declare function updateBankItemSettings(): void;
declare function getTotalGPSaleMode(): number;
declare function getTotalCountSaleMode(): number;
declare function updateSelectedBankItemQty(): void;
/**
 * onClick callback function
 * @param {boolean} [confirmed=false]
 */
declare function confirmSellModeSelection(confirmed?: boolean): void;
/**
 * onClick callback function
 */
declare function confirmMoveModeSelection(): void;
/**
 * onClick callback function
 */
declare function sellItem(): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} qty
 * @param {number} [saleModifier=1]
 */
declare function processItemSale(itemID: ItemID, qty: number, saleModifier?: number): void;
declare function createVirtualBank(): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} qty
 */
declare function addItemToVirtualBank(itemID: ItemID, qty: number): boolean;
/**
 * onClick callback function
 */
declare function openBankItem(): void;
/**
 * onClick callback function
 * @param {ItemID} [itemID=-1]
 */
declare function viewItemContents(itemID?: ItemID): void;
/**
 * onClick callback function
 * @param {MonsterID} monsterID
 */
declare function viewMonsterDrops(monsterID: MonsterID): void;
/**
 * onClick callback function
 * @param {ItemID} itemID
 * @param {boolean} [showAll=false]
 */
declare function viewItemStats(itemID: ItemID, showAll?: boolean): void;
/**
 * onClick callback function
 */
declare function upgradeItem(): void;
/**
 * onClick callback function
 * @param {ItemID} itemID
 * @param {ItemID} upgradeItemID
 */
declare function confirmUpgradeItemAll(itemID: ItemID, upgradeItemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 * @param {ItemID} upgradeItemID
 * @param {number} [qty=1]
 */
declare function confirmUpgradeItem(itemID: ItemID, upgradeItemID: ItemID, qty?: number): void;
/**
 * onClick callback function
 * @param {0|1} option
 */
declare function updateSellQty(option: 0 | 1): void;
declare function claimToken(forceItem?: number, forceQty?: number, updateSpendXP?: boolean): void;
/**
 * onClick callback function
 */
declare function buryItem(): void;
/**
 * onClick callback function
 */
declare function findAFriend(): void;
/**
 * onClick callback function
 * @param {ItemID} itemID
 */
declare function readItem(itemID: ItemID): void;
/**
 * onClick callback function
 */
declare function claimBankToken(): void;
/**
 * onClick callback function
 */
declare function lockItem(): void;
declare function updateLockedItemIcon(): void;
/**
 * onClick callback function
 */
declare function useEight(): void;
/**
 * onClick callback function
 */
declare function toggleBankBorders(): void;
/**
 *
 * @param {ItemID} itemID
 * @param {boolean} [format=true]
 */
declare function getItemQty(itemID: ItemID, format?: boolean): string | number;
/**
 *
 * @param {ItemID} itemID
 * @param {number} [qty=null]
 */
declare function updateSellRangeSlider(itemID: ItemID, qty?: number): void;
/**
 *
 * @param {number} from
 * @param {number} max
 */
declare function checkSaleButtons(from: number, max: number): void;
/**
 *
 * @param {ItemID} itemID
 * @param {boolean} [ignoreSetting=false]
 */
declare function updateEquipItemContainer(itemID: ItemID, ignoreSetting?: boolean): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateEquipItemQuantitySlider(itemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateEquipFoodSlider(itemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateOpenItemSlider(itemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateBuryItemSlider(itemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateClaimTokenSlider(itemID: ItemID): void;
declare function deselectBankItem(): void;
/**
 *
 * @param {EquipSetID} set
 * @param {boolean} [updateEquip=true]
 */
declare function changeEquipToSet(set: EquipSetID, updateEquip?: boolean): void;
/**
 * onClick callback function
 * @param {BankTabID} tab
 */
declare function showBankTab(tab: BankTabID): void;
/**
 * ondragover callback function
 * @param {BankTabID} tab
 */
declare function setTabToDrag(tab: BankTabID): void;
/**
 * ondragleave callback function
 * @param {BankTabID} tab
 */
declare function unsetTabToDrag(tab: BankTabID): void;
/**
 * ondrop callback function
 * @param {BankTabID} tab
 */
declare function dropItemNewTab(tab: BankTabID): void;
declare function sortBankByTabs(): void;
/**
 *
 * @param {number} index
 */
declare function getNewBankIndex(index: number): number;
/**
 *
 * @param {number} currentIndex
 * @param {BankTabID} tab
 */
declare function getIndexOfItem(currentIndex: number, tab: BankTabID): number;
/**
 *
 * @param {BankTabID} tab
 * @param {boolean} [returnSrc=false]
 */
declare function updateBankTabImage(tab: BankTabID, returnSrc?: boolean): string;
declare function updateBankTabImages(): void;
/**
 * onclick callback function
 */
declare function openDefaultBankTabDropdown(): void;
declare function createSortableInstances(): void;
/**
 *
 * @param {number} newIndex
 * @param {number} oldIndex
 * @param {BankTabID} tab
 */
declare function fireOnEnd(newIndex: number, oldIndex: number, tab: BankTabID): void;
/**
 * @template T
 * @template {keyof T} K
 * @param {T[]} array
 * @param {number[]} order
 * @param {K} key
 */
declare function mapOrder<T, K extends keyof T>(array: T[], order: number[], key: K): T[];
declare function toggleSellItemMode(): void;
declare function updateSellItemMode(): void;
/**
 *
 * @param {ItemID} item
 */
declare function addItemToItemSaleArray(item: ItemID): void;
/**
 *
 * @param {ItemID} item
 */
declare function addItemToItemMoveArray(item: ItemID): void;
/**
 *
 * @param {ItemID} item
 */
declare function updateItemToSellBorder(item: ItemID): void;
declare function updateItemToSellSummary(): void;
declare function updateItemToMoveSummary(): void;
/**
 *
 * @param {ItemID} item
 */
declare function updateItemToMoveBorder(item: ItemID): void;
declare function removeSellItemBorders(): void;
declare function removeMoveItemBorders(): void;
declare function toggleMoveItemMode(): void;
declare function updateMoveItemMode(): void;
/**
 * onclick callback function
 * @param {0|1|2|3|4} sort
 */
declare function setDefaultBankSorting(sort: 0 | 1 | 2 | 3 | 4): void;
declare function fixBankArray(): void;
declare function createBankStackValue(): void;
/**
 *
 * @param {BankID} bankID
 */
declare function updateBankStackValue(bankID: BankID): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function assignDefaultItemTab(itemID: ItemID): number;
/**
 *
 * @param {BankTabID} tab
 * @param {ItemID} itemID
 */
declare function setDefaultItemTab(tab: BankTabID, itemID: ItemID): void;
/**
 * onClick callback function
 * @param {BankTabID} tab
 */
declare function setMoveItemTab(tab: BankTabID): void;
/**
 *
 * @param {string} message
 */
declare function logConsole(message: string): void;
/** @type {BankItem[]} */
declare var bank: BankItem[];
/**
 * @deprecated Old save variable.
 * This is probably what should have been used for the shop upgrade conversion
*/
declare var currentBankUpgrade: number;
declare const baseBankMax: 12;
declare const maxTabs: 10;
/** @deprecated Old Save Variable */
declare var bankMax: number;
/** Save game variable */
declare var myBankVersion: number;
/** Save game variable */
declare var sellQty: number;
/** @type {ItemID|null} */
declare var selectedBankItem: ItemID | null;
/** @type {null|TimeoutID} */
declare var addItemUpdateTimer: null | TimeoutID;
/** @type {number[]} */
declare var nextItem: number[];
/** @type {ItemQuantity[]} */
declare var vBank: ItemQuantity[];
/** @type {BankID|null} */
declare var itemInViewPos: BankID | null;
/**
 * Save game variable
 * @type {ItemID[]} */
declare var lockedItems: ItemID[];
declare var allButOne: boolean;
/** @type {ItemID|null} */
declare var bankItemSelected: ItemID | null;
declare var openItemQty: number;
declare var claimTokenQty: number;
declare var buryItemQty: number;
/** @type {EquipSetID} */
declare var equipToSet: EquipSetID;
/** @type {BankTabID} */
declare var selectedBankTab: BankTabID;
declare var newTabSelected: boolean;
/** @type {null|BankTabID} */
declare var newTabToDrag: null | BankTabID;
declare var itemBeingDragged: number;
declare let sellItemMode: boolean;
/** @type {ItemID[]} */
declare let itemsToSell: ItemID[];
declare let moveItemMode: boolean;
/** @type {ItemID[]} */
declare let itemsToMove: ItemID[];
/** @type {BankTabID} */
declare let moveItemModeTab: BankTabID;
declare var equipFoodQty: number;
/** @type {ItemID[]} */
declare var itemsAlreadyFound: ItemID[];
/** @type {null|TimeoutID} */
declare let updateSalePriceTimer: null | TimeoutID;
/** @type {BankCache} */
declare var bankCache: BankCache;
/** @type {null|TimeoutID} */
declare var getBankValueTimer: null | TimeoutID;
declare function updateBankSearchArray(): void;
/** @type {BankSearch[]} */
declare var bankSearch: BankSearch[];
declare function updateMbucks(): void;
declare function begParentsForMBucksBecauseImBrokeAndCantAffordToBuyItInTheP2WShopEvenThoughIShouldProbablyMakeDragonJavsForMoneyOhWaitLol(): void;
declare function viewItemsAcquired(): void;
/**
 *
 * @param {number} qty
 */
declare function buyMbucks(qty: number): void;
declare var mbucks: number;
declare var caseInventory: any[];
declare var totalMbucksSpent: number;
/**
 * onClick callback function
 * @param {boolean} [confirmed=false]
 */
declare function loadCloudSave(confirmed?: boolean): void;
declare function startCloudSync(init?: boolean): void;
declare function getCloudCharacters(): void;
declare function checkConnectionToCloud(forceLoad?: boolean, accessCheck?: boolean): void;
declare function deleteCloudSave(): void;
declare function forceSync(closeAfter?: boolean, ignorePlayFab?: boolean): void;
declare function forceSyncCooldown(): void;
declare function checkGameVersion(): void;
declare function checkPatreon(): void;
/**
 * onClick callback function
 */
declare function disconnectPatreon(): void;
/**
 *
 * @param {boolean} isCloud
 */
declare function loadCloudOptions(isCloud: boolean): void;
declare function checkTestAccess(): void;
declare function checkTestAccessInit(forceLoad?: boolean, accessCheck?: boolean): void;
declare function checkTestAccessPatreon(forceLoad?: boolean, accessCheck?: boolean): void;
declare function confirmTestAccess(): void;
declare function killPage(): void;
declare function connectToPlayfabOffline(): void;
declare function generatePlayfabOfflineID(): void;
/**
 *
 * @param {string} playFabID
 * @param {boolean} [offlineID=false]
 */
declare function playFabLoginWithCustomID(playFabID: string, offlineID?: boolean): void;
declare function getPlayFabSave(): void;
/** @type {PlayFabModule.ApiCallback<PlayFabClientModels.GetUserDataResult>} */
declare function loadCallback(result: PlayFabModule.SuccessContainer<PlayFabClientModels.GetUserDataResult>, error: PlayFabModule.IPlayFabError): void;
declare function playFabSaveData(forceSave?: boolean, closeAfterSave?: boolean): void;
/** @type {PlayFabModule.ApiCallback<PlayFabClientModels.UpdateUserDataResult>} */
declare function saveCallback(result: PlayFabModule.SuccessContainer<PlayFabClientModels.UpdateUserDataResult>, error: PlayFabModule.IPlayFabError, forceSave?: boolean): void;
/**
 *
 * @param {CharacterID} char
 */
declare function createPlayFabSaves(char: CharacterID): string;
declare function enableCloudCharacterButton(): void;
declare function deletePlayFabSave(characterID?: number): void;
/**
 *
 * @param {string} eventName
 * @param {PlayFabEventBody} args
 */
declare function sendPlayFabEvent(eventName: string, args: PlayFabEventBody): void;
/**
 * @deprecated Unused but commented out
 * @type {PlayFabModule.ApiCallback<PlayFabClientModels.WriteEventResponse>} */
declare function sendPlayFabEventCallback(result: PlayFabModule.SuccessContainer<PlayFabClientModels.WriteEventResponse>, error: PlayFabModule.IPlayFabError): void;
/**
 *
 * @param {string} eventName
 * @param {PlayFabEventBody} args
 */
declare function queuePlayFabEvents(eventName: string, args: PlayFabEventBody): void;
declare function submitQueuedPlayFabEvents(): void;
declare function fetchLatestTitleNews(): void;
/** @type {PlayFabModule.ApiCallback<PlayFabClientModels.GetTitleNewsResult>} */
declare function displayLatestTitleNews(result: PlayFabModule.SuccessContainer<PlayFabClientModels.GetTitleNewsResult>, error: PlayFabModule.IPlayFabError): void;
/**
 *
 * @param {string} timestamp
 * @param {string} title
 * @param {string} body
 * @param {string} newsId
 */
declare function createTitleNewsElement(timestamp: string, title: string, body: string, newsId: string): string;
/**
 * onClick callback function
 */
declare function readPlayFabNews(): void;
/**
 * onClick callback function
 */
declare function loginToMelvorCloud(): void;
/**
 * onClick callback function
 */
declare function registerToMelvorCloud(): void;
/**
 * onClick callback function
 */
declare function logoutMelvorCloud(): void;
/**
 * onClick callback function
 */
declare function forgotPasswordMelvorCloud(): void;
declare function disableLoginForm(): void;
declare function enableLoginForm(): void;
declare function disableRegisterForm(): void;
declare function enableRegisterForm(): void;
declare function disableForgotForm(): void;
declare function enableForgotForm(): void;
declare function disableChangeEmailForm(): void;
declare function enableChangeEmailForm(): void;
declare function disableChangePasswordForm(): void;
declare function enableChangePasswordForm(): void;
/**
 * onClick callback function
 */
declare function updateEmailMelvorCloud(): void;
/**
 * onClick callback function
 */
declare function updatePasswordMelvorCloud(): void;
/**
 * Mobile/Steam specific function
 */
declare function cloudSaveAndExit(): void;
declare function updateLastCloudSaveTimestamp(): void;
/** @type {TimeoutID|null} */
declare var cloudSaveTimer: TimeoutID | null;
/** @type {SaveString|null} */
declare var cloudSave: SaveString | null;
declare var forceSaveCooldown: boolean;
/** @type {TimeoutID|null} */
declare var forceSyncCooldownTimer: TimeoutID | null;
declare var connectedToCloud: boolean;
declare var connectedToPlayFab: boolean;
declare var connectedToPlayFabOffline: boolean;
/** @type {string[]} */
declare var storedCloudSaves: string[];
/** @type {(null|SaveString)[]} */
declare var playFabSaves: (null | SaveString)[];
declare var playFabLoginTimestamp: number;
declare let forceSave: boolean;
/** @type {Date|number} */
declare var lastSaveTimestamp: Date | number;
declare var saveAndClose: boolean;
/** @type {TimeoutID|null} */
declare var forceSyncSpamPrevention: TimeoutID | null;
declare var connectingToCloud: boolean;
/** @type {PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>} */
declare const playFabLoginCallback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>;
/** @type {PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>} */
declare const playFabLoginCallbackOffline: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>;
declare function regenerateHitpoints(): void;
/**
 * Starts combat
 * @param {0|1|2} timer 0 starts player and enemy, 1 starts player, 2 starts enemy
 * @param {boolean} [eat=false] Was started by manual eating
 */
declare function startCombat(timer?: 0 | 1 | 2, eat?: boolean): void;
declare function startSummonAttackTimer(): void;
declare function updateCombat(): void;
declare function calculatePlayerChanceToHitEnemy(): number;
/**
 *
 * @param {boolean} [playerSpec=false] Attack is Special
 * @param {PlayerSpecialID|false} [specID=false]
 * @param {boolean} [canAncientAttack=true]
 * @param {boolean} [useAncientRunes=true]
 */
declare function attackEnemy(playerSpec?: boolean, specID?: PlayerSpecialID | false, canAncientAttack?: boolean, useAncientRunes?: boolean): void;
/**
 *
 * @param {CurseID} curse
 * @param {number} [forceTurns=3]
 * @param {boolean} [forceApply=false]
 */
declare function applyCurseToEnemy(curse: CurseID, forceTurns?: number, forceApply?: boolean): void;
declare function resetEnemyCurse(): void;
/**
 *
 * @param {AuroraID} aurora
 */
declare function activatePlayerAurora(aurora: AuroraID): void;
/**
 *
 * @param {boolean} [useRunes=true]
 */
declare function updatePlayerAurora(useRunes?: boolean): void;
/**
 *
 * @param {boolean} [update=true]
 */
declare function disablePlayerAurora(update?: boolean): void;
declare function activateEnemyBuffs(): void;
declare function removeEnemyBuffs(): void;
declare function removePlayerDebuffsfromSpec(): void;
declare function removePlayerMarkOfDeath(): void;
/**
 *
 * @param {number} [stacks=1]
 */
declare function applyMarkOfDeathToPlayer(stacks?: number): void;
/**
 *
 * @param {MonsterID} [enemy=enemyInCombat]
 */
declare function calculateEnemyAccuracy(enemy?: MonsterID): void;
/**
 *
 * @param {MonsterID} [enemy=enemyInCombat]
 */
declare function calculateEnemyStrength(enemy?: MonsterID): void;
/**
 *
 * @param {MonsterID} [enemy=enemyInCombat]
 */
declare function calculateEnemyDefence(enemy?: MonsterID): void;
declare function updateEnemyValues(): void;
declare function updateEnemyDebuffs(): void;
declare function updatePlayerDebuffs(): void;
declare function applyBurnToPlayer(): void;
declare function applyBurnToEnemy(): void;
declare function removeEnemyBurnDebuff(): void;
/**
 *
 * @param {number} bleedHPPerProc Damage to do per bleed proc
 * @param {number} interval Interval between bleed procs in [ms]
 * @param {number} bleedCount Total number of bleed procs
 */
declare function applyBleedToEnemy(bleedHPPerProc: number, interval: number, bleedCount: number): void;
declare function removeEnemyBleedDebuff(): void;
/**
 *
 * @param {0|1} debuffID
 */
declare function removePlayerDebuffs(debuffID: 0 | 1): void;
/**
 *
 * @param {boolean} enemySpec
 * @param {number|false} [specID=false]
 */
declare function attackPlayer(enemySpec?: boolean, specID?: number | false): void;
declare function applyPlayerDamageModifiers(): number;
/**
 *
 * @param {number} dmg
 * @param {boolean} [playerHit=false]
 * @returns
 */
declare function damageEnemy(dmg: number, playerHit?: boolean): number;
/**
 *
 * @param {number} dmg
 */
declare function damagePlayer(dmg: number): void;
declare function resetPlayerAttackBarStyle(): void;
declare function resetPlayerSummonBar(): void;
declare function resetPlayerAttackBar(): void;
/**
 *
 * @param {boolean} [eat=false]
 */
declare function resetPlayerAttack(eat?: boolean): void;
declare function resetEnemyAttackBar(): void;
declare function resetPlayerCombatData(): void;
declare function removePlayerAffliction(): void;
/**
 *
 * @param {boolean} [death=false]
 * @param {boolean} [stopDungeon=false]
 * @param {boolean} [runAway=false]
 */
declare function stopCombat(death?: boolean, stopDungeon?: boolean, runAway?: boolean): void;
declare function applyDeathPenalty(): void;
/**
 * Checks if enemy or player is dead
 * @param {0|1} check 0: Check player, 1: Check enemy
 */
declare function checkCombatStatus(check: 0 | 1): boolean;
/**
 *
 * @param {boolean|number} heal Useless input that does nothing
 */
declare function updateHitpoints(heal?: boolean | number): void;
declare function updateEnemyHitpointsValue(): void;
declare function updateHitpointVisuals(): void;
declare function resetEnemyScreen(): void;
declare function findEnemy(): void;
/**
 *
 * @param {MonsterID} m
 * @param {boolean} [continueDungeon=false]
 */
declare function selectMonster(m: MonsterID, continueDungeon?: boolean): void;
declare function loadNewEnemy(): void;
/**
 *
 * @param {MonsterID} enemy
 * @param {boolean} [loadPassives=false]
 */
declare function loadEnemySpecialAttacks(enemy: MonsterID, loadPassives?: boolean): void;
/**
 *
 * @param {EnemySpecialID} specID
 * @param {number} chance
 * @returns
 */
declare function getEnemySpecialAttackDescriptions(specID: EnemySpecialID, chance: number): string;
declare function pauseDungeon(): void;
/**
 * onClick callback function
 */
declare function resumeDungeon(): void;
declare function updatePlayerSpecialWeapon(): void;
declare function updateEnemyChanceToHit(): void;
declare function updatePlayerChanceToHit(): void;
declare function updateEnemyMaxHit(): void;
declare function updateNav(): void;
/**
 * onClick callback function
 * @param {0|1|2|3} spellbook
 */
declare function selectSpellbook(spellbook: 0 | 1 | 2 | 3): void;
declare function createRuneCountContainer(): void;
/**
 *
 * @param {boolean} [isOffline=false]
 */
declare function updateRuneCount(isOffline?: boolean): void;
declare function updateRunesCurrentlyUsed(): void;
declare function updateSpellbook(): void;
/**
 *
 * @param {SpellID} spell
 */
declare function selectSpell(spell: SpellID): void;
/**
 *
 * @param {CurseID} curse
 */
declare function selectCurse(curse: CurseID): void;
/**
 * onClick callback function
 * @param {AuroraID} aurora
 */
declare function selectAurora(aurora: AuroraID): void;
/**
 * onClick callback function
 * @param {AncientID} ancient
 */
declare function selectAncient(ancient: AncientID): void;
/**
 *
 * @param {boolean} [refresh=false]
 */
declare function loadCombatGear(refresh?: boolean): void;
declare function loadEquipmentSets(): void;
declare function updateEquipmentSetTooltips(): void;
/**
 *
 * @param {ItemID} item
 * @param {number} qty
 * @param {EquipSetID} equipmentSet
 * @param {boolean} [bypass=false]
 * @param {boolean} [isPassive=false]
 * @param {false|number} [forceSlot=false]
 */
declare function equipItem(item: ItemID, qty: number, equipmentSet: EquipSetID, bypass?: boolean, isPassive?: boolean, forceSlot?: false | number): void;
/**
 *
 * @param {EquipSlotID} equipmentSlot
 * @param {EquipSetID|null} [equipmentSet=null]
 * @param {boolean} [bypass=false]
 */
declare function unequipItem(equipmentSlot: EquipSlotID, equipmentSet?: EquipSetID | null, bypass?: boolean): boolean;
declare function updateEquipTooltips(): void;
declare function updateEnemyAttackSpeed(): void;
declare function updatePlayerAttackSpeed(): void;
declare function updatePlayerStats(): void;
declare function getSummonMaxHit(): number;
declare function updatePlayerCombatLevels(): void;
declare function resetPlayerBaseStats(): void;
declare function updatePlayerBaseStats(): void;
declare function applyCombatTriangleModifiers(): void;
declare function calculatePlayerDamageReduction(): number;
declare function calculatePlayerAccuracyRating(): void;
/**
 *
 * @param {SkillID} skill
 */
declare function getSkillHiddenLevels(skill: SkillID): number;
declare function calculatePlayerEvasionRating(): void;
declare function calculatePlayerMaxHit(): void;
declare function calculatePlayerAttackSpeed(): void;
/**
 *
 * @param {number} value
 */
declare function calculateAreaEffectValue(value: number): number;
declare function updateAutoEatData(): void;
declare function updateMaxHitpoints(): void;
/**
 *
 * @param {PlayerSpecialID[]} overrideSpecialAttacks
 */
declare function updatePlayerSpecialAttack(overrideSpecialAttacks?: PlayerSpecialID[]): void;
/**
 * Gets the current combat triangle damage multiplier
 * @returns {number} Note: This could return false, but in theory is never called when it can be
 */
declare function setCombatDamageAdjustment(): number;
declare function updateAmmo(): void;
/**
 *
 * @param {AttackStyleID} [style=attackStyle]
 */
declare function setAttackStyle(style?: AttackStyleID): void;
declare function updateAttackStyleOptions(): void;
/**
 *
 * @param {boolean} [jumpToTop=true]
 */
declare function showMap(jumpToTop?: boolean): void;
/**
 * The only part of this function that does anything in it's current usage is the last 2 lines
 * @param {null} combatArea This function seems to only ever be called with null
 */
declare function selectCombatArea(combatArea: null): void;
declare function loadEquippedFood(): void;
/**
 *
 * @param {0|1|2|3} food
 * @param {boolean} [bypass=false]
 */
declare function selectEquippedFood(food: 0 | 1 | 2 | 3, bypass?: boolean): void;
declare function updateEquippedFoodQty(): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function getFoodHealValue(itemID: ItemID): number;
/**
 *
 * @param {number} [efficiency=100]
 * @param {boolean} [autoEat=false]
 */
declare function eatFood(efficiency?: number, autoEat?: boolean): void;
/**
 * onClick callback function
 */
declare function equipFood(): void;
/**
 * onClick callback function
 */
declare function unequipFood(): void;
/** Updates the Loot to Collect on the combat page */
declare function loadLoot(): void;
/**
 *
 * @param {MonsterID} enemy
 */
declare function dropBones(enemy: MonsterID): void;
/**
 *
 * @param {MonsterID} enemy
 */
declare function dropLoot(enemy: MonsterID): void;
/**
 * onClick callback function
 * @param {LootID} lootID
 * @param {ItemID} itemID
 * @param {number} qty
 */
declare function collectLoot(lootID: LootID, itemID: ItemID, qty: number): void;
declare function clearLoot(): void;
declare function lootAll(): void;
/**
 *
 * @param {DungeonID} dungeon
 * @param {boolean} [forceStart=false]
 */
declare function selectDungeon(dungeon: DungeonID, forceStart?: boolean): void;
declare function updateDungeonEnemyCount(): void;
/**
 *
 * @param {0|1|2|3|4} spellbook
 * @param {SpellID|CurseID|AuroraID|AncientID|AltmagicID} spell
 * @param {boolean} [useRunes=true]
 * @param {boolean} [isOffline=false]
 */
declare function checkRuneCount(spellbook: 0 | 1 | 2 | 3 | 4, spell: SpellID | CurseID | AuroraID | AncientID | AltmagicID, useRunes?: boolean, isOffline?: boolean): boolean;
/**
 *
 * @param {MonsterID|null} [monster=null]
 */
declare function updateKillCount(monster?: MonsterID | null): void;
/**
 *
 * @param {DungeonID|null} [dungeon=null]
 */
declare function updateDungeonCount(dungeon?: DungeonID | null): void;
declare function updateGameTitle(): void;
/**
 * onClick callback function
 * @param {0|1|2} areaType
 * @param {CombatAreaID|SlayerAreaID|DungeonID} areaID
 */
declare function viewMonsters(areaType: 0 | 1 | 2, areaID: CombatAreaID | SlayerAreaID | DungeonID): void;
declare function loadAreas(): void;
/**
 *
 * @param {string} text
 */
declare function createLockedDungeon(text: string): string;
declare function updateSlayerAreaRequirements(): void;
/**
 * Callback for toggling the display of an area types monsters/dungeons
 * When called with AreaType, toggles opening and closing the area.
 * When called with null, and area is open, closes the open area
 * @param {AreaType|null} areaID
 */
declare function showCombatArea(areaID: AreaType | null): void;
/**
 *
 * @param {0|1|2|3|4|5} menu
 */
declare function changeCombatMenu(menu: 0 | 1 | 2 | 3 | 4 | 5): void;
declare function updatePrayerMenu(forceUpdate?: boolean): void;
declare function loadPrayer(): void;
/**
 *
 * @param {PrayerID} prayer
 */
declare function togglePrayer(prayer: PrayerID): void;
declare function updatePrayerPassiveBonuses(): void;
/**
 *
 * @param {number} qty
 * @param {boolean} [bury=false]
 */
declare function updatePrayerPoints(qty?: number, bury?: boolean): void;
/**
 *
 * @param {number} qty
 * @returns {number}
 */
declare function applyModifiersToPrayerCost(qty: number): number;
/**
 *
 * @param {MonsterID} enemy
 */
declare function updateSlayer(enemy: MonsterID): void;
/**
 *
 * @param {number} [qty=0]
 */
declare function updateSlayerCoins(qty?: number): void;
/**
 *
 * @param {number} qty
 */
declare function updateSlayerTask(qty: number): void;
/**
 *
 * @param {SlayerTier} tier
 */
declare function getSlayerTier(tier: SlayerTier): "Easy" | "Normal" | "Hard" | "Elite" | "Master";
declare function displaySlayerTask(): void;
/**
 *
 * @param {MonsterID} monster
 * @param {SlayerTier} [tier=0]
 */
declare function getSlayerTask(monster: MonsterID, tier?: SlayerTier): void;
/**
 *
 * @param {SlayerTier} tier
 */
declare function getSlayerCount(tier: SlayerTier): number;
declare function getSlayerTaskExtensionCost(): number;
/**
 * onClick callback function
 */
declare function extendSlayerTask(): void;
/**
 *
 * @param {'player'} [id]
 */
declare function updateCombatLevel(id?: 'player'): void;
declare function getPlayerCombatLevel(): number;
/**
 *
 * @param {MonsterID} monster
 * @param {boolean} [setData=false]
 */
declare function getMonsterCombatLevel(monster: MonsterID, setData?: boolean): number;
/**
 *
 * @param {MonsterID} monster
 * @param {SlayerTier} tier
 */
declare function newSlayerTask(monster: MonsterID, tier?: SlayerTier): void;
/**
 * onClick callback function
 */
declare function showSlayerTaskSelection(): void;
/**
 * onClick callback function
 */
declare function hideSlayerTaskSelection(): void;
declare function showNewSlayerTaskButton(): void;
declare function showCancelSlayerTaskSelection(): void;
declare function createSlayerTaskSelection(): void;
/**
 *
 * @param {SlayerTier} tier
 * @param {boolean} [cost=true]
 */
declare function selectNewSlayerTask(tier: SlayerTier, cost?: boolean): void;
declare function getSlayerCost(): number;
/**
 * @template {true|false} T
 * @param {MonsterID} enemy
 * @param {T} [name=true]
 * @returns {T extends true ? string : [number, number]}
 */
declare function findEnemyArea<T extends boolean>(enemy: MonsterID, name?: T): T extends true ? string : [number, number];
/**
 *
 * @param {MonsterID} enemy
 */
declare function jumpToEnemy(enemy: MonsterID): void;
declare function updateEquipmentHeader(): void;
/**
 *
 * @param {number} qty
 */
declare function updatePlayerHitpoints(qty: number): void;
/**
 *
 * @param {number} qty
 */
declare function updateEnemyHitpoints(qty: number): void;
/**
 *
 * @param {EquipSetID} set
 * @param {boolean} [bypass=false]
 */
declare function setEquipmentSet(set: EquipSetID, bypass?: boolean): void;
/**
 * Mobile/Steam specific function
 */
declare function togglePlayerContainer(): void;
declare function updatePlayerSpecialAttackIcon(): void;
declare function updateCombatInfoIcons(): void;
declare function disableActivePrayers(): void;
declare function updateEnemyPassive(): void;
declare function buildActiveSpecialAttacks(): void;
declare function resetActiveEnemySpecialAttacks(): void;
declare function resetActivePlayerSpecialAttacks(): void;
/**
 *
 * @param {MonsterID} enemy
 * @returns {boolean}
 */
declare function isEnemySlayerTask(enemy: MonsterID): boolean;
declare function showStunnedNotification(): void;
declare function showSleepNotification(): void;
/** @type {CombatArea[]} */
declare const combatAreas: CombatArea[];
/** @type {SlayerArea[]} */
declare const slayerAreas: SlayerArea[];
/** @type {Dungeon[]} */
declare const DUNGEONS: Dungeon[];
declare const combatAreaDisplayOrder: number[];
declare const slayerAreaDisplayOrder: number[];
declare const dungeonAreaDisplayOrder: number[];
declare const godDungeonID: number[];
declare var dungeonPaused: boolean;
/** @type {Slayer} */
declare const SLAYER: Slayer;
/** Save game variable */
declare var slayerTaskCompletion: number[];
/** @type {CombatPassive[]} */
declare const combatPassive: CombatPassive[];
/** @type {EnemySpecialAttack[]} */
declare const enemySpecialAttacks: EnemySpecialAttack[];
/** @type {PlayerSpecialAttack[]} */
declare var playerSpecialAttacks: PlayerSpecialAttack[];
declare const totalEquipmentSets: 3;
declare var combatLevel: number;
declare var isInCombat: boolean;
/** @type {TimeoutID|null} */
declare var enemyFinder: TimeoutID | null;
declare var playerAttackSpeed: number;
declare const enemySpawnTimer: 3000;
/**
 * Save game variable
 * @type {EquippedFoodID} */
declare var currentCombatFood: EquippedFoodID;
/** @type {MonsterID|null} */
declare var forcedEnemy: MonsterID | null;
declare var itemLost: number;
/** Save game variable */
declare var selectedSpell: number;
/** @type {CurseID|null} */
declare var selectedCurse: CurseID | null;
/**
 * Save game variable
 * @type {MonsterStat[]} */
declare var monsterStats: MonsterStat[];
/**
 * Save game variable
 * @type {number[]} */
declare var dungeonCompleteCount: number[];
declare const me: "w";
declare const itemDropMax: 16;
declare const combatMenuCount: 6;
/**
 * Save game variable
 * @type {SlayerTask[]} */
declare var slayerTask: SlayerTask[];
/**
 * Seems to be bugged and always null
 * @type {null}
 */
declare var slayerLockedItem: null;
declare var isCurrentlyEquipping: boolean;
declare var isCurrentlyUnequipping: boolean;
/** @type {EquipSlotID|null} */
declare var currentlyEquipping: EquipSlotID | null;
/** @type {EquipSlotID|null} */
declare var currentlyUnequipping: EquipSlotID | null;
/** @type {MonsterID} */
declare var enemyInCombat: MonsterID;
/** @type {TimeoutID} */
declare var playerTimer: TimeoutID;
/** @type {TimeoutID} */
declare var summonTimer: TimeoutID;
/** @type {TimeoutID} */
declare var enemyTimer: TimeoutID;
/** @type {string|null} */
declare var selectedCombatArea: string | null;
declare var isDungeon: boolean;
/** @type {DungeonID|null|false} */
declare var selectedDungeon: DungeonID | null | false;
/** @type {number|null} */
declare var dungeonCount: number | null;
/** @type {number} */
declare var effectiveAttackLevel: number;
/** @type {number} */
declare var maximumAttackRoll: number;
/** @type {number} */
declare var effectiveStrengthLevel: number;
/** @type {number} Player max hit, with combat triangle factored in*/
declare var baseMaxHit: number;
/** @type {number} */
declare var summoningMaxHit: number;
/** @type {number} */
declare var effectiveDefenceLevel: number;
/** @type {number} */
declare var maximumDefenceRoll: number;
/** @type {number} */
declare var effectiveRangedDefenceLevel: number;
/** @type {number} */
declare var maximumRangedDefenceRoll: number;
/** @type {number} */
declare var effectiveMagicDefenceLevel: number;
/** @type {number} */
declare var maximumMagicDefenceRoll: number;
declare var damageReduction: number;
declare var isPrayer: boolean;
declare var prayerLoaded: boolean;
/** @type {boolean[]} */
declare var activePrayer: boolean[];
declare var prayerBonusProtectItem: number;
/** @deprecated Bonus for rapid heal, but does nothing since it is hardcoded */
declare var prayerBonusHitpoints: number;
declare var prayerBonusProtectFromMelee: number;
declare var prayerBonusProtectFromRanged: number;
declare var prayerBonusProtectFromMagic: number;
declare var prayerBonusHitpointHeal: number;
declare var newEnemyLoading: boolean;
/** @type {TimeoutID|null} */
declare var enemyAttackTimer: TimeoutID | null;
/** @type {TimeoutID|null} */
declare var updateHitpointTimer: TimeoutID | null;
/** @type {TimeoutID|null} */
declare var burnInterval: TimeoutID | null;
/** @type {TimeoutID|null} */
declare var enemyBurnInterval: TimeoutID | null;
/** @type {TimeoutID|null} */
declare var enemyBleedInterval: TimeoutID | null;
/** @type {TimeoutID|null} */
declare var reflectDamageTimer: TimeoutID | null;
declare var reflectCooldown: boolean;
declare const protectFromValue: 15;
declare var attackCount: number;
/** @type {TimeoutID|null} */
declare var attackTimer: TimeoutID | null;
/** @type {TimeoutID|null} */
declare var enemyDamageTimer: TimeoutID | null;
/** @type {TimeoutID|null} */
declare var playerDamageTimer: TimeoutID | null;
declare var increasedMinSpellDmg: number[];
/**
 * Save game variable
 * @type {AuroraID|null} */
declare var activeAurora: AuroraID | null;
/** @type {AncientID|null} */
declare var selectedAncient: AncientID | null;
declare var isSpellAncient: boolean;
/** @type {AreaType|null} */
declare var selectedCombatAreaID: AreaType | null;
/** Save game variable */
declare var equippedItems: number[];
/**
 * Save game variable
 * @type {EquipmentSet[]} */
declare var equipmentSets: EquipmentSet[];
/**
 * Save game variable
 * @type {EquipSetID} */
declare var selectedEquipmentSet: EquipSetID;
declare const emptyGear: string[];
declare const emptyGearName: string[];
/** Save game variable */
declare var equippedFood: {
    itemID: number;
    qty: number;
}[];
/** @type {ItemQuantity2[]} */
declare var droppedLoot: ItemQuantity2[];
/** Save game variable */
declare var ammo: number;
declare var summonAmmo: number[];
/** Save game variable */
declare var prayerPoints: number;
/** @type {TimeoutID|null} */
declare var loadLootTimer: TimeoutID | null;
declare var selectedSpellbook: number;
declare var playerIsAttacking: boolean;
declare var enemyIsAttacking: boolean;
/** @type {Partial<StandardModifierObject<number>>} */
declare var prayerModifiers: Partial<StandardModifierObject<number>>;
/** @type {TimeoutID|null} */
declare var autoEatTooltipUpdateTimer: TimeoutID | null;
/**
 * Save game variable
 * @type {CombatData} */
declare var combatData: CombatData;
/** Save game variable */
declare var attackStyle: number;
declare const attackStyleSkills: number[];
/** Save game variable */
declare var selectedAttackStyle: number[];
declare const hitpointRegenInterval: 10000;
/** @type {TimeoutID} */
declare var hitpointRegen: TimeoutID;
declare var maxHitpoints: number;
declare var gameVersionChecker: number;
declare var desktopAutoSave: number;
/** @type {PlayerEnemyObject<NumberDictionary<SpecialAttackData>,NumberDictionary<SpecialAttackData>>} */
declare var specialAttackData: PlayerEnemyObject<NumberDictionary<SpecialAttackData>, NumberDictionary<SpecialAttackData>>;
/**
 * Contains arrays of player and enemy special attack ids
 * @type {PlayerEnemyObject<number[],number[]>} */
declare var activeSpecialAttacks: PlayerEnemyObject<number[], number[]>;
/**
 *
 * @param {0|1} qty Unused
 * @param {boolean} [ignore=true]
 */
declare function startCooking(qty: 0 | 1, ignore?: boolean): void;
declare function updateCookingFire(): void;
declare function updateAvailableFood(): void;
/**
 *
 * @param {ItemID} id
 */
declare function selectFood(id: ItemID): void;
/**
 *
 * @param {ItemID} food
 */
declare function checkFoodExists(food: ItemID): boolean;
declare function loadCooking(): void;
/** @type {CookingItem[]} */
declare var cookingItems: CookingItem[];
declare var isCooking: boolean;
/** @type {TimeoutID|null} */
declare var currentlyCooking: TimeoutID | null;
/** @type {ItemID|null} */
declare var selectedFood: ItemID | null;
/** @type {BankItem} */
declare var foodCache: BankItem;
/** @type {BankID} */
declare var foodCacheID: BankID;
/** @deprecated Old save variable */
declare var upgradedToRange: boolean;
declare function startCrafting(clicked?: boolean): void;
/**
 *
 * @param {number} craftingID
 * @param {boolean} [update=false]
 */
declare function selectCraft(craftingID: number, update?: boolean): void;
declare function loadCrafting(): void;
declare function updateCrafting(): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} recipeIndex
 * @param {boolean} [useCharge=false]
 * @returns {number}
 */
declare function getCraftingRecipeQty(itemID: ItemID, recipeIndex: number, useCharge?: boolean): number;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateCraftQty(itemID: ItemID): void;
/**
 * onClick callback function (using href)
 * @param {0|1|2|3} cat
 */
declare function craftCategory(cat: 0 | 1 | 2 | 3): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function checkCraftingReq(itemID: ItemID): boolean;
/** @type {CraftingItem[]} */
declare var craftingItems: CraftingItem[];
/** @type {number|null} */
declare var currentCraft: number | null;
declare var isCrafting: boolean;
/** @type {TimeoutID|null} */
declare var craftingTimeout: TimeoutID | null;
/** @type {number|numberMultiplier} */
declare var selectedCraft: number | number;
/** @type {QtyReqCheck[]} */
declare var craftReqCheck: QtyReqCheck[];
declare const er: "i";
declare var craftInterval: number;
/** @type {ItemID[]} */
declare var craftingJewelleryIDs: ItemID[];
/**
 *
 * @param {0|1|2|3} eventID
 * @param {null|MonsterID|string} [enemyThatKilledYou=null]
 */
declare function sendDiscordEvent(eventID: 0 | 1 | 2 | 3, enemyThatKilledYou?: null | MonsterID | string): void;
/** @type {PlayFabModule.ApiCallback<PlayFabClientModels.ExecuteCloudScriptResult>} */
declare function OnCloudDiscordEvent(result: PlayFabModule.SuccessContainer<PlayFabClientModels.ExecuteCloudScriptResult>): void;
/** I'm pretty sure this function is effectively useless and only feeds through to the callback as result.customData */
declare function OnErrorShared(error: any): void;
/**
 *
 * @param {FarmingAreaID} areaID
 */
declare function loadFarmingArea(areaID: FarmingAreaID): void;
/**
 * onClick callback function
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 */
declare function unlockPlot(areaID: FarmingAreaID, patchID: number): void;
/**
 *
 * @param {FarmingAreaID} areaID
 */
declare function updateTimeRemaining(areaID: FarmingAreaID): void;
declare function showFarmingAreas(): void;
declare function loadSeeds(): void;
/**
 * onClick callback function
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 * @param {boolean} [plantAll=false]
 */
declare function showSeeds(areaID: FarmingAreaID, patchID: number, plantAll?: boolean): void;
/**
 * onClick callback function
 * @param {ItemID} itemID
 * @param {boolean} [plantAll=false]
 */
declare function selectSeed(itemID: ItemID, plantAll?: boolean): void;
/**
 * onClick callback function
 * @param {boolean} [plantAll=false]
 */
declare function plantSeed(plantAll?: boolean): void;
/**
 * onClick callback function
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 */
declare function removeSeed(areaID: FarmingAreaID, patchID: number): void;
/**
 *
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 * @param {boolean} [all=true]
 */
declare function harvestSeed(areaID: FarmingAreaID, patchID: number, all?: boolean): void;
/**
 *
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 * @param {boolean} [initialise=false]
 */
declare function startSeedTimer(areaID: FarmingAreaID, patchID: number, initialise?: boolean): void;
/**
 *
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 */
declare function getPlantInterval(areaID: FarmingAreaID, patchID: number): number;
/**
 *
 * @param {ItemID} seedID
 */
declare function getSeedGrowTime(seedID: ItemID): number;
/**
 *
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 */
declare function setPlantInterval(areaID: FarmingAreaID, patchID: number): number;
declare function notifyPlayerHarvestReady(): void;
/**
 *
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 */
declare function growCrops(areaID: FarmingAreaID, patchID: number): void;
/**
 *
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 * @param {number} [qty=1]
 */
declare function addCompost(areaID: FarmingAreaID, patchID: number, qty?: number): void;
/**
 *
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 */
declare function addGloop(areaID: FarmingAreaID, patchID: number): void;
/**
 *
 * @param {FarmingAreaID} areaID
 * @param {number} patchID
 */
declare function resetFarmingPatch(areaID: FarmingAreaID, patchID: number): void;
declare function checkReadyToHarvest(): void;
declare function showHarvestReady(ready?: boolean): void;
/**
 * onClick callback function
 */
declare function harvestAll(): void;
/**
 * onClick callback function
 */
declare function compostAll(): void;
/**
 * onClick callback function
 */
declare function gloopAll(): void;
declare function updateCompostQty(): void;
/**
 * Save game variable
 * @type {FarmingArea[]} */
declare var newFarmingAreas: FarmingArea[];
/** @type {Seed[]} */
declare var allotmentSeeds: Seed[];
/** @type {Seed[]} */
declare var herbSeeds: Seed[];
/** @type {Seed[]} */
declare var treeSeeds: Seed[];
/** @type {ItemID} */
declare var selectedSeed: ItemID;
/** @type {[FarmingAreaID,number]|[]} */
declare var selectedPatch: [FarmingAreaID, number] | [];
/** @type {FarmingAreaID|null} */
declare var currentFarmingArea: FarmingAreaID | null;
/** @type {TimeoutID|null} */
declare var farmingGlower: TimeoutID | null;
declare const harvestAllCost: 2000;
declare const compostAllCost: 2000;
declare const plantAllCost: 5000;
/** @type {TimeoutID|null} */
declare var harvestReadyTimer: TimeoutID | null;
/**
 * @deprecated Unused variable?
 * @type {null}
 */
declare var sendFarmingNotificationTimer: null;
declare function burnLog(ignore?: boolean): void;
/**
 * onClick callback function
 * @param {boolean} [potion=false]
 */
declare function lightBonfire(potion?: boolean): void;
/**
 *
 * @param {FiremakingID} log FiremakingID of log
 */
declare function checkLogExists(log: FiremakingID): boolean;
declare function updateAvailableLogs(skill?: number): void;
/**
 *
 * @param {FiremakingID} id
 * @param {SkillID} skill
 */
declare function selectLog(id: FiremakingID, skill?: SkillID): void;
declare const logsData: {
    type: string;
    level: number;
    interval: number;
    bonfireInterval: number;
    bonfireBonus: number;
    xp: number;
}[];
/** @type {FiremakingID|null} */
declare var selectedLog: FiremakingID | null;
declare var isBurning: boolean;
/** @type {TimeoutID|null} */
declare var currentlyBurning: TimeoutID | null;
/** @type {TimeoutID|null} */
declare var currentBonfireHandler: TimeoutID | null;
declare var bonfireBonus: number;
/** @type {BankItem} */
declare var logCache: BankItem;
/** @type {BankID} */
declare var logCacheID: BankID;
/**
 *
 * @param {FishingAreaID} areaID
 * @param {FishID} fishID
 * @param {boolean} [clicked=false]
 */
declare function startFishing(areaID: FishingAreaID, fishID: FishID, clicked?: boolean): void;
declare function loadFishing(): void;
declare function setupFishingAreas(): void;
/**
 *
 * @param {FishingAreaID} areaID
 * @param {FishID} fishID
 */
declare function selectFish(areaID: FishingAreaID, fishID: FishID): void;
/**
 *
 * @param {FishingAreaID} areaID
 * @param {FishID} fishID
 */
declare function updateFishingAreaWeights(areaID: FishingAreaID, fishID: FishID): void;
declare function updateAvailableFish(): void;
/**
 *
 * @param {FishingAreaID} areaID
 * @param {FishID} fishID
 */
declare function updateFishingMastery(areaID: FishingAreaID, fishID: FishID): void;
declare function updateFishing(): void;
declare function secretAreaCheck(): void;
declare function barbarianAreaCheck(): void;
declare const fishingAreas: ({
    name: string;
    fishChance: number;
    junkChance: number;
    specialChance: number;
    fish: number[];
    description?: undefined;
} | {
    name: string;
    description: string;
    fishChance: number;
    junkChance: number;
    specialChance: number;
    fish: number[];
})[];
/** @type {FishingItem[]} */
declare var fishingItems: FishingItem[];
/** @type {ItemID[]} */
declare var junkItems: ItemID[];
/** @type {LootTable} */
declare var specialItems: LootTable;
declare var isFishing: boolean;
/** @type {FishingAreaID|null} */
declare var currentFishingArea: FishingAreaID | null;
/** @type {(null|FishingID)[]} */
declare var selectedFish: (null | FishingID)[];
/** @type {TimeoutID|null} */
declare var fishingTimeout: TimeoutID | null;
/** Save game variable */
declare var secretAreaUnlocked: boolean;
/**
 *
 * @param {boolean} [clicked=false]
 */
declare function startFletching(clicked?: boolean): void;
/**
 *
 * @param {FletchingID} fletchingID
 * @param {FletchLog} [log=0]
 * @param {boolean} [update=false]
 */
declare function selectFletch(fletchingID: FletchingID, log?: FletchLog, update?: boolean): void;
declare function loadFletching(): void;
declare function updateFletching(): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} recipeIndex
 * @returns
 */
declare function getFletchingRecipeQty(itemID: ItemID, recipeIndex: number): number;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateQty(itemID: ItemID): void;
/**
 * onClick callback function (using href)
 * @param {FletchingCategory} cat
 */
declare function fletchCategory(cat: FletchingCategory): void;
/**
 *
 * @param {ItemID} itemID
 * @param {FletchLog} [fletchLog=0]
 * @param {boolean} [offline=false]
 */
declare function checkFletchingReq(itemID: ItemID, fletchLog?: FletchLog, offline?: boolean): boolean;
/** @type {FletchingItem[]} */
declare var fletchingItems: FletchingItem[];
/** @type {FletchingID|null} */
declare var currentFletch: FletchingID | null;
declare var isFletching: boolean;
/** @type {TimeoutID|null} */
declare var fletchingTimeout: TimeoutID | null;
/** @type {QtyReqCheck[]} */
declare var fletchReqCheck: QtyReqCheck[];
/** @type {FletchingID|null} */
declare var selectedFletch: FletchingID | null;
/** @type {FletchLog} */
declare var selectedFletchLog: FletchLog;
declare var fletchInterval: number;
/**
 * onClick callback function
 * @param {number} [modifier=2]
 */
declare function startGolbinRaid(modifier?: number): void;
declare function stopGolbinRaid(gameLoading?: boolean, death?: boolean): void;
declare function updateRaidCoins(qty?: number): void;
declare function getPrayerPointsToAdd(): number;
declare function isPrayerUnlockedGolbinRaid(): boolean;
declare function getGolbinWaveSkipCost(): number;
/**
 * onclick callback function
 */
declare function skipGolbinWave(): void;
declare function resetGolbinEquipment(): void;
declare function resetGolbinFood(): void;
declare function setBaseGolbinEquipment(): void;
declare function getGolbinLevel(hitpoints?: boolean): number;
declare function getGolbinBonuses(): number;
declare function updateGolbinRaid(waveSkip?: boolean): void;
declare function buildGolbinItemSelection(): void;
declare function showEquipmentSelection(init?: boolean, category?: number, forceItemID?: number, forceQty?: number): void;
declare function getRandomAmmoRoll(): number;
declare function getRandomFoodRoll(): number;
declare function getRandomRuneRoll(): number;
declare function continueGolbinRaid(): void;
/**
 * onClick callback function
 * @param {ItemID} itemID
 * @param {number} qty
 */
declare function selectGolbinFood(itemID: ItemID, qty: number): void;
declare function reinstatePreviousPlayerData(): void;
declare function updatePlayerGolbinStats(): void;
/**
 * onClick callback function
 * @param {ItemID} itemID
 * @param {number} qty
 */
declare function addItemToGolbinInventory(itemID: ItemID, qty: number): void;
declare function updateGolbinRaidHistory(raidCoinsEarned?: number): void;
declare function loadGolbinRaidHistory(): void;
/**
 *
 * @param {number} historyID
 * @returns {string}
 */
declare function getGolbinRaidHistory(historyID: number): string;
declare function getGolbinName(): string;
declare const golbinItemSelectionCount: number[];
/** @type {ItemQuantity[]} */
declare var golbinInventory: ItemQuantity[];
declare var isGolbinRaid: boolean;
declare var golbinSkillLevels: number[];
declare var golbinWave: number;
declare var golbinEnemyCount: number;
/** @type {ItemQuantity[]} */
declare var golbinFood: ItemQuantity[];
/** @type {{itemID: ItemID}[][]} */
declare var golbinItemSelection: {
    itemID: ItemID;
}[][];
/**
 * Save game variable
 * @type {[number,EquipSetID,EquippedFoodID]|[]} */
declare var saveStateBeforeRaid: [number, EquipSetID, EquippedFoodID] | [];
/**
 * Save game variable
 * @type {RaidHistory[]} */
declare var golbinRaidHistory: RaidHistory[];
declare var golbinTimestamp: number[];
declare var golbinKillCount: number;
declare var golbinModifier: number;
/** Save game variable */
declare var raidCoins: number;
/** Save game variable */
declare var golbinRaidStats: number[];
declare var golbinSelectionInProgress: boolean;
/** @type {ItemID[]} */
declare var specialWeaponsForRaid: ItemID[];
declare var golbinRaidPrayerPoints: number;
declare const bannedGolbinRaidItems: number[];
declare const golbinNames: string[];
declare const golbinTraits: string[];
declare function startHerblore(clicked?: boolean): void;
declare function loadHerblore(update?: boolean): void;
/**
 *
 * @param {HerbloreItemID} herbloreID
 * @param {boolean} [update=false]
 */
declare function selectHerblore(herbloreID: HerbloreItemID, update?: boolean): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} recipeIndex
 * @returns
 */
declare function getHerbloreRecipeQty(itemID: ItemID, recipeIndex: number): number;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateHerbloreQty(itemID: ItemID): void;
/**
 *
 * @param {HerbloreItemID} id
 */
declare function getHerbloreTier(id: HerbloreItemID): number;
/**
 *
 * @param {ItemID} itemID
 */
declare function checkHerbloreReq(itemID: ItemID): boolean;
/**
 * onClick callback function (uses href)
 * @param {HerbloreCategory} cat
 */
declare function herbloreCategory(cat: HerbloreCategory): void;
/**
 * onClick callback function
 */
declare function loadPotions(): void;
/**
 *
 * @param {ItemID} itemID
 * @param {boolean} [isOffline=false]
 */
declare function usePotion(itemID: ItemID, isOffline?: boolean): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} [qty=-1]
 * @param {boolean} [use=false]
 * @param {boolean} [isOffline=false]
 */
declare function updateHerbloreBonuses(itemID: ItemID, qty?: number, use?: boolean, isOffline?: boolean): void;
/**
 *
 * @param {ItemID} itemID
 * @returns {number}
 */
declare function getPotionCharges(itemID: ItemID): number;
declare function updatePotionHeader(): void;
/** @type {HerbloreItem[]} */
declare const herbloreItemData: HerbloreItem[];
/** @type {typeof herbloreItemData} */
declare var herbloreItems: typeof herbloreItemData;
declare var isHerblore: boolean;
/** @type {TimeoutID|null} */
declare var herbloreTimeout: TimeoutID | null;
/** @type {QtyReqCheck[]} */
declare var herbloreReqCheck: QtyReqCheck[];
/** @type {HerbloreItemID|null} */
declare var selectedHerblore: HerbloreItemID | null;
/** @type {HerbloreItemID|null} */
declare var currentHerblore: HerbloreItemID | null;
declare var herbloreInterval: number;
declare const masteryTiers: number[];
/**
 * Save game variable
 * @type {HerbloreBonus[]} */
declare var herbloreBonuses: HerbloreBonus[];
/** @type {GenericItem[]} */
declare const items: GenericItem[];
declare function castMagic(clicked?: boolean, offlineIsPaused?: boolean): void;
/**
 *
 * @param {AltmagicID} altMagicID
 * @param {boolean} [update=false]
 */
declare function selectMagic(altMagicID: AltmagicID, update?: boolean): void;
/**
 *
 * @param {ItemID} id
 * @param {ItemID} selectedItem
 * @param {boolean} [select=true]
 */
declare function selectItemForMagic(id: ItemID, selectedItem?: ItemID, select?: boolean): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function setMagicItemImg(itemID: ItemID): void;
/** @type {Spell[]} */
declare const SPELLS: Spell[];
/** @type {Curse[]} */
declare const CURSES: Curse[];
/** @type {BaseAurora[]} */
declare const AURORAS: BaseAurora[];
/** @type {Ancient[]} */
declare const ANCIENT: Ancient[];
/** @type {Altmagic[]} */
declare const ALTMAGIC: Altmagic[];
declare var isMagic: boolean;
/** @type {AltmagicID|null} */
declare var selectedAltMagic: AltmagicID | null;
/** @type {AltmagicID|null} */
declare var currentMagicSpell: AltmagicID | null;
/** @type {[ItemID|null,ItemID|null,ItemID|null]} */
declare var selectedMagicItem: [ItemID | null, ItemID | null, ItemID | null];
declare var magicInterval: number;
/** @type {TimeoutID|null} */
declare var magicTimeout: TimeoutID | null;
declare function updateWindow(cloudSave?: boolean): void;
declare function updateGP(value?: number, disableDOMChanges?: boolean): void;
/**
 *
 * @param {SkillID} currentSkill
 */
declare function idleChecker(currentSkill: SkillID): boolean;
/**
 *
 * @param {SkillID} skill
 * @param {string} extraID
 */
declare function updateSkillVisuals(skill: SkillID, extraID?: string): void;
/**
 *
 * @param {SkillID} skill
 */
declare function updateSkillWindow(skill: SkillID): void;
/**
 *
 * @param {SkillID} skill
 */
declare function updateLevelProgress(skill: SkillID): void;
/**
 *
 * @param {SkillID} skill
 * @param {boolean} [offline=false]
 */
declare function levelUp(skill: SkillID, offline?: boolean): void;
declare function Exp(): void;
declare class Exp {
    /**
     *
     * @param {number} xp
     */
    equate: (xp: number) => number;
    /**
     *
     * @param {number} level
     */
    level_to_xp: (level: number) => number;
    /**
     *
     * @param {number} xp
     * @param {number} level
     * @returns {number}
     */
    xp_to_level: (xp: number, level?: number) => number;
}
/**
 *
 * @param {number} currentGP
 */
declare function convertGP(currentGP: number): string;
/**
 *
 * @param {number|string} number
 */
declare function formatNumber(number: number | string): string;
/**
 *
 * @param {number|string} x
 * @returns {string}
 */
declare function numberWithCommas(x: number | string): string;
/**
 *
 * @param {SkillID} skill
 */
declare function unlockSkill(skill: SkillID): void;
declare function getPriceToUnlockSkill(): number;
/**
 *
 * @param {PageID} page
 * @param {boolean} [gameLoading=false]
 * @param {boolean} [toggleSidebar=true]
 * @param {boolean} [showRaidShop=false]
 * @param {SkillID} [skillID=-1]
 */
declare function changePage(page: PageID, gameLoading?: boolean, toggleSidebar?: boolean, showRaidShop?: boolean, skillID?: SkillID): void;
/**
 *
 * @param {string} string
 */
declare function setToUppercase(string: string): string;
/**
 *
 * @param {string} string
 */
declare function setToLowercase(string: string): string;
declare function updateTooltips(): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} qty
 */
declare function itemNotify(itemID: ItemID, qty: number): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} qty
 */
declare function processItemNotify(itemID: ItemID, qty: number): void;
/**
 *
 * @param {number} qty
 */
declare function gpNotify(qty: number): void;
/**
 *
 * @param {number} damage
 */
declare function stunNotify(damage: number): void;
declare function bankFullNotify(): void;
/**
 *
 * @param {SkillID} skill
 */
declare function levelUpNotify(skill: SkillID): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} oldLevel
 * @param {number} newLevel
 */
declare function createNewMilestoneModal(skill: SkillID, oldLevel: number, newLevel: number): string;
/**
 *
 * @param {SkillID} skill
 */
declare function showNewMilstones(skill: SkillID): void;
/**
 *
 * @param {SkillID} skill
 * @param {string} message
 * @param {NotificationType} type
 */
declare function notifyPlayer(skill: SkillID, message: string, type?: NotificationType): void;
/**
 *
 * @param {SkillID} skill
 */
declare function notifyGloves(skill: SkillID): void;
/**
 *
 * @param {number|string} qty
 * @param {NotificationType} type
 */
declare function notifySlayer(qty: number | string, type?: NotificationType): void;
/**
 * Shows up as unused, but is in HTML
 * @param {SkillID} skill
 */
declare function updateMilestoneTab(skill: SkillID): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function selectFromDropTable(itemID: ItemID): number;
/**
 *
 * @param {SkillID} skill
 * @param {MonsterID|ThievingID} id
 */
declare function selectFromLootTable(skill: SkillID, id: MonsterID | ThievingID): number;
/**
 *
 * @param {GloveID} gloves
 * @param {SkillID} skill
 */
declare function updateGloves(gloves: GloveID, skill: SkillID): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} xp
 * @param {boolean} [forceSkill=false] Seems to do nothing
 * @param {boolean} [dropRares=true] Drop mastery tokens and rhaelyx parts
 * @param {boolean} [offline=false]
 */
declare function addXP(skill: SkillID, xp: number, forceSkill?: boolean, dropRares?: boolean, offline?: boolean): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} xp
 * @param {boolean} [forceSkill=false]
 * @returns {number}
 */
declare function getSkillXPToAdd(skill: SkillID, xp: number, forceSkill?: boolean): number;
/**
 *
 * @param {SkillID} skill
 * @param {boolean} [offline=false]
 */
declare function getMasteryToken(skill: SkillID, offline?: boolean): number;
declare function gloveCheck(): void;
/**
 * Shows as unused, but is in HTML
 * @param {0|1} menu
 */
declare function toggleMenu(menu: 0 | 1): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} totalBaseActions
 * @param {PetID} petID
 * @param {number} interval
 * @param {ItemID} tokenID
 * @param {number} levelReq
 */
declare function rollForGeneralRareItems(skill: SkillID, totalBaseActions: number, petID: PetID, interval: number, tokenID: ItemID, levelReq: number): {
    itemsGained: number;
    actions: number;
}[];
declare function updateOffline(continueAction?: boolean): void;
declare function clearOffline(): void;
declare function offlineCatchup(): void;
/**
 * Onclick Callback function
 */
declare function toggleCombatSkillMenu(): void;
/**
 *
 * @param {number} levelReq
 * @param {boolean} [offline=false]
 */
declare function dropRingHalfA(levelReq: number, offline?: boolean): number;
/**
 *
 * @param {TutorialtipID} tipID
 */
declare function activateTutorialTip(tipID: TutorialtipID): void;
declare function updateSaveFileChanges(): void;
/**
 *
 * @param {SkillID} skill
 */
declare function pauseOfflineAction(skill: SkillID): void;
declare function initMinibar(): void;
/**
 *
 * @param {string} pageName
 */
declare function updateMinibar(pageName: string): void;
/** Onclick callback function */
declare function toggleSkillMinibar(): void;
/**
 * Onclick callback function
 * @param {SkillID} skill
 */
declare function quickEquipSkillcape(skill: SkillID): void;
/**
 * Onclick callback function
 * @param {ItemID} item
 * @param {SkillID} skill
 */
declare function quickEquipItem(item: ItemID, skill: SkillID): void;
/**
 *
 * @param {GameMode} gamemode
 */
declare function setGamemode(gamemode: GameMode): void;
declare function loadCharacterSelection(returnToGame?: boolean): void;
/**
 *
 * @param {boolean} cloudSave
 * @param {string} keySuffix
 * @param {GameMode} gamemode
 * @param {string} timestamp
 * @param {SaveString} save
 * @param {CharacterID} characterID
 */
declare function createCharacterSelectionBox(cloudSave: boolean, keySuffix: string, gamemode: GameMode, timestamp: string, save: SaveString, characterID: CharacterID): string;
declare function createNewCharacterElement(characterID?: number): string;
declare function compareSaveTimestamps(): {
    local: number;
    cloud: number;
}[];
declare function displaySaveTimestampComparison(): void;
declare function processLocalCharacters(): void;
/**
 *
 * @param {CharacterID} charID
 * @param {SaveString} save
 */
declare function processCloudCharacters(charID: CharacterID, save: SaveString): void;
/**
 *
 * @param {CharacterID} charID
 */
declare function resetCharacterSelection(charID: CharacterID): void;
/**
 * onClick callback function
 */
declare function toggleCharacterSelectionView(): void;
/**
 *
 * @param {CharacterID} char
 * @param {boolean} [confirmed=false]
 */
declare function selectCharacter(char: CharacterID, confirmed?: boolean): void;
declare function resetAccountData(): void;
/**
 *
 * @param {SkillID} skill
 * @param {boolean} [offline=false]
 */
declare function rollForRhaelyx(skill: SkillID, offline?: boolean): number | false;
declare function checkRhaelyx(isOffline?: boolean, useCharge?: boolean): boolean;
/**
 *
 * @param {boolean} [isOffline=false]
 */
declare function removeChargeRhaelyx(isOffline?: boolean): void;
declare function initTooltips(): void;
declare function finaliseLoad(): void;
declare function setupNewCharacter(): void;
/**
 *
 * @param {string} mediaQuery
 */
declare function checkMediaQuery(mediaQuery: string): boolean;
/**
 * onClick callback function
 */
declare function viewGameGuide(): void;
/**
 *
 * @param {number} $mean
 * @param {number} $stdDev
 */
declare function generateGaussianNumber($mean: number, $stdDev: number): number;
/**
 *
 * @param {number} numActions
 * @param {number} probability
 */
declare function getMean(numActions: number, probability: number): number;
/**
 *
 * @param {number} numActions
 * @param {number} probability
 */
declare function getStdDev(numActions: number, probability: number): number;
/**
 *
 * @param {SkillID} skill
 */
declare function getMasteryTokenChance(skill: SkillID): number;
/**
 *
 * @param {number} levelReq
 */
declare function dropRingHalfAChance(levelReq: number): number;
declare function getRhaelyxChance(): number;
declare function getRhaelyxStoneChance(): 0 | 0.0001;
/**
 *
 * @param {SkillID} skill
 */
declare function getRhaelyxPiece(skill: SkillID): number;
/**
 *
 * @param {PetID} petID
 * @param {number} timePerAction
 * @param {false|SkillID} [forceSkill=false]
 */
declare function getPetChance(petID: PetID, timePerAction: number, forceSkill?: false | SkillID): number;
declare function openNextModal(): void;
/**
 *
 * @param {SweetAlertOptions} modal
 */
declare function addModalToQueue(modal: SweetAlertOptions): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function getItemMedia(itemID: ItemID): string;
/**
 *
 * @param {MonsterID} monsterID
 */
declare function getMonsterMedia(monsterID: MonsterID): string;
/**
 * Mobile/Steam Specific function
 * @param {string} localURL
 */
declare function getMiscMedia(localURL: string): string;
declare function initSteam(): void;
declare function checkForSteamAchievements(): void;
/**
 *
 * @param {string} achievementName
 * @param {number} i
 */
declare function unlockSteamAchievement(achievementName: string, i: number): void;
/**
 * Steam specific function
 */
declare function resetSteamAchievements(): void;
declare function cleanSaveFile(): void;
/**
 * Mobile/steam specific function
 * @param {0} noticeID
 */
declare function agreeToNotice(noticeID: 0): void;
declare function checkForItemsToAddToBank(): void;
declare function checkCompletionCapeRequirements(): boolean;
declare function checkMaxCapeRequirements(): boolean;
/**
 *
 * @param {string} div
 * @param {number} interval
 * @param {boolean} [stayFull=true]
 */
declare function animateProgress(div: string, interval: number, stayFull?: boolean): void;
/**
 *
 * @param {string} div
 */
declare function resetProgressAnimation(div: string): void;
/**
 * Rolls a percentage chance
 * @param {number} chance
 */
declare function rollPercentage(chance: number): boolean;
declare function updateAllPlayerModifiers(): void;
declare function calculateSummoningSynergyModifiers(): void;
declare function calculateRandomModifiers(): void;
declare function calculateEnemySpecialAttackModifiers(): void;
declare function calculatePlayerSpecialAttackModifiers(): void;
declare function calculatePotionModifiers(): void;
declare function calculateMiscModifiers(): void;
declare function calculateMiscSummoningModifiers(): void;
declare function calculateShopModifiers(): void;
declare function calculateAgilityModifiers(): void;
declare function calculatePrayerModifiers(): void;
declare function calculateEquippedItemModifiers(): void;
declare function calculatePetModifiers(): void;
declare function calculateCombatAreaEffectModifiers(): void;
/**
 * Modifies baseStat by modifier
 * @param {number} baseStat
 * @param {number} modifier
 * @param {0|1|2} type 0 applies a percentage bonus, 1 applies an additive bonus, 2: applies a negative additive bonus
 */
declare function applyModifier(baseStat: number, modifier: number, type?: 0 | 1 | 2): number;
/**
 * Best description is likely 2 functions with overrides, or by manually inserting some type gaurds into this
 * the value.length typeguards to array[key] being SkillModifierActive
 * @param {ModifierActive} array Nvm this can be an object and not an array, think this is typically a modifier object
 * @param {ModifierKeys} key Potential key of the object "array"
 * @param {SkillModifierData|number} value
 */
declare function updateKeyValuePair(array: ModifierActive, key: ModifierKeys, value: SkillModifierData | number): void;
/**
 *
 * @param {SkillModifierKeys} key
 * @param {SkillID} id
 */
declare function getTotalFromModifierArray(key: SkillModifierKeys, id: SkillID): number;
/**
 *
 * @param {number} n Pos Integer, number of trials
 * @param {number} p Float [0,1], probability
 * @param {number} epsilon Cutoff
 */
declare function binomial_distribution(n: number, p: number, epsilon?: number): number[];
/**
 *
 * @param {number} numberTrials
 * @param {number} chance
 */
declare function sample_from_binomial(numberTrials: number, chance: number): number;
/**
 *
 * @param {SkillID} skillID
 * @param {number} baseInterval
 * @param {number} action
 * @param {boolean} [useCharge=true]
 * @returns {number}
 */
declare function calculateSkillInterval(skillID: SkillID, baseInterval: number, action?: number, useCharge?: boolean): number;
/**
 *
 * @param {SkillID} skillID
 * @param {number} action
 * @param {ItemID} itemID
 * @param {boolean} [useCharges=true]
 * @param {number} [interval=1000]
 * @returns {number}
 */
declare function calculateSkillPreservationChance(skillID: SkillID, action?: number, itemID?: ItemID, useCharges?: boolean, interval?: number): number;
/**
 *
 * @param {SkillID} skill
 * @param {boolean} [isCombat=false]
 * @param {number} [baseChance=0]
 * @param {number} [action=0]
 */
declare function calculateChanceToDouble(skill: SkillID, isCombat?: boolean, baseChance?: number, action?: number, itemID?: number, useCharge?: boolean, interval?: number): number;
/**
 * @template {ModifierKeys} T
 * @param {T} modifier
 * @param {ModifierObject<SkillModifierData,number>[T]} value
 * @returns {[string,string]}
 */
declare function printPlayerModifier<T extends keyof SkillModifierObject<any> | keyof StandardModifierObject<any>>(modifier: T, value: ModifierObject<SkillModifierData, number>[T]): [string, string];
/**
 *
 * @param {number} value
 * @returns {number}
 */
declare function getNumberMultiplierValue(value: number): number;
declare function createGamemodeSelectionElements(): string;
/**
 *
 * @param {GameMode} gamemode
 * @returns {string}
 */
declare function getGamemodeSelectionRules(gamemode: GameMode): string;
/**
 *
 * @param {GameMode} gamemode
 * @returns {string}
 */
declare function getGamemodeSafety(gamemode: GameMode): string;
/**
 *
 * @param {GameMode} gamemode
 * @returns {string}
 */
declare function getGamemodeDescription(gamemode: GameMode): string;
/**
 *
 * @param {GameMode} gamemode
 * @returns {string}
 */
declare function getGamemodeEventStatus(gamemode: GameMode): string;
/**
 *
 * @param {GameMode} gamemode
 * @returns {string}
 */
declare function getGamemodeName(gamemode: GameMode): string;
/**
 *
 * @param {number} count
 * @param {keyof randomModifiers} key
 * @param {EquipSlotID} equipmentSlot
 * @returns {RandomModifier[]}
 */
declare function rollRandomModifiers(count: number, key: keyof {
    equipment: NumberDictionary<ModifierData>;
    player: NumberDictionary<ModifierData>;
}, equipmentSlot?: EquipSlotID): RandomModifier[];
/**
 *
 * @param {EquipSlotID} equipmentSlot
 */
declare function getEquipmentCorruption(equipmentSlot: EquipSlotID): void;
declare function loadCorruption(): void;
/**
 *
 * @param {EquipSlotID} equipmentSlot
 * @param {RandomModifier[]} mods
 */
declare function updateHTMLRandomMod(equipmentSlot: EquipSlotID, mods: RandomModifier[]): void;
/**
 *
 * @param {number} tier
 * @returns {number}
 */
declare function getRandomModifiersDestroyChance(tier: number): number;
/**
 *
 * @param {number} tier
 * @returns {number}
 */
declare function getRandomModifierMaxValue(tier: number): number;
/**
 *
 * @param {EquipSlotID} equipmentSlot
 * @returns {number}
 */
declare function getRandomModifierCost(equipmentSlot: EquipSlotID): number;
/**
 *
 * @param {EquipSlotID} equipmentSlot
 * @returns {number}
 */
declare function getRandomModifierTier(equipmentSlot: EquipSlotID): number;
/**
 *
 * @param {EquipSlotID} equipmentSlot
 */
declare function updateRandomModifierInfo(equipmentSlot: EquipSlotID): void;
/**
 *
 * @param {ItemID} itemID
 * @returns
 */
declare function getItemQtyRandomModifier(itemID: ItemID): number[];
/**
 *
 * @param {*} object
 */
declare function deleteKeysFromObject(object: any): void;
declare function activateChaosMode(): void;
/**
 *
 * @param {number[]} elements
 * @returns {number}
 */
declare function getAverage(elements?: number[]): number;
declare function buildDataFromItemsArray(): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number|string} [qty=0]
 * @param {string} [elementID='']
 * @param {string} [qtyStyle='bg-secondary']
 * @returns
 */
declare function createItemRecipeElement(itemID: ItemID, qty?: number | string, elementID?: string, qtyStyle?: string): string;
/**
 *
 * @param {ItemID} itemID
 * @param {string} [qtyStyle='bg-secondary']
 * @param {string|-1} [itemMedia=-1]
 * @param {boolean} [showQty=true]
 * @returns {string}
 */
declare function createSummonSynergySearchElement(itemID: ItemID, qtyStyle?: string, itemMedia?: string | -1, showQty?: boolean): string;
/**
 *
 * @param {string} qtyStyle
 * @returns {string}
 */
declare function getItemRecipeBorder(qtyStyle: string): string;
/**
 *
 * @param {string} elementID
 * @param {boolean} [isInvalid=false]
 */
declare function updateItemRecipeBorder(elementID: string, isInvalid?: boolean): void;
declare function getCloudSaveHeartbeatInterval(): number;
/**
 *
 * @param {number} interval
 */
declare function startProgressBarTimer(interval: number): void;
declare const useCDN: true;
declare const CDNVersion: "v018";
declare const CDNEndpoint: "https://cdn.melvor.net/core";
declare const DEBUGENABLED: false;
declare var CDNDIR: string;
/** @type {NumberDictionary<SkillData>} */
declare const SKILLS: NumberDictionary<SkillData>;
declare const pages: string[];
declare const specialEvents: {
    active: boolean;
}[];
declare const gameTitle: "Melvor Idle :: Alpha v0.20";
/**
 * Save game variable
 * @type {string[]} */
declare var titleNewsID: string[];
/** @type {string[]} */
declare var currentTitleNewsID: string[];
/** @type {{eventName: string;args: PlayFabEventBody}[]} */
declare var playFabEventQueue: {
    eventName: string;
    args: PlayFabEventBody;
}[];
declare var exp: Exp;
/** Save game variable */
declare var gp: number;
/** Save game variable */
declare var slayerCoins: number;
declare var currentPage: number;
declare const us: "w";
declare const p: 848;
/** Save game variable */
declare var saveTimestamp: number;
/**
 * @deprecated Old save game variable
 * @type {boolean[]} */
declare var itemLog: boolean[];
/**
 * Save game variable
 * @type {ItemStat[]} */
declare var itemStats: ItemStat[];
/** @type {MonsterStat[]} */
declare var monsterStats: MonsterStat[];
declare var isLoaded: boolean;
declare let confirmedLoaded: boolean;
declare var currentlyCatchingUp: boolean;
/** @type {number[]} */
declare var killCount: number[];
declare const tutorialT: 168;
declare const ar: number[];
/**
 * Save game variable
 * @type {Offline} */
declare var offline: Offline;
declare const IItemID: number;
declare var skillsMenu: boolean;
declare var combatMenu: boolean;
declare var easterLoaded: boolean;
declare var offlinePause: boolean;
/**
 * Save game variable
 * @type {GameMode} */
declare var currentGamemode: GameMode;
/** @type {number[]} */
declare var steamAchievements: number[];
declare var connectedToSteam: boolean;
/** @type {TimeoutID|null} */
declare var offlineProgressTimer: TimeoutID | null;
/** @type {TimeoutID|null} */
declare var updateTooltipsTimer: TimeoutID | null;
/** @type {ItemQuantity2[]} */
declare var itemNotifyToProcess: ItemQuantity2[];
/** @type {TimeoutID|null} */
declare var itemNotifyTimer: TimeoutID | null;
declare var offlineActionIsPaused: boolean;
declare var tutorialTipData: {
    id: number;
    title: string;
    titleImg: string;
    description: string;
}[];
/** Save game variable */
declare var tutorialTips: {
    activated: boolean;
}[];
/** @type {TooltipInstances} */
declare var tooltipInstances: TooltipInstances;
/** @type {SumFunction} */
declare const arrSum: SumFunction;
declare var eightSeconds: boolean;
declare var currentView: number;
declare var lolYouDiedGetRekt: boolean;
declare let characterLoading: boolean;
/** Save game variable */
declare var firstTimeLoad: boolean;
declare var skillName: string[];
/** Savegame variable. Stores skill experience. */
declare var skillXP: number[];
/** Savegame variable. Stores skill level. */
declare var skillLevel: number[];
/** Savegame variable */
declare var nextLevelProgress: number[];
/**
 * Save Game Variable
 * @type {boolean[]} */
declare var skillsUnlocked: boolean[];
declare var priceToUnlockSkill: number[];
declare var currentSkillLevel: number;
declare var numberMultiplier: number;
/** @type {ModifierActive} */
declare var playerModifiers: ModifierActive;
declare var inCharacterSelection: boolean;
declare var returnToGameAfterSubmission: boolean;
/** @type {SweetAlertOptions[]} */
declare var modalQueue: SweetAlertOptions[];
declare var cloudSaveHeartbeatLevel: number;
declare var loadingOfflineProgress: boolean;
declare var modalIsOpen: boolean;
/** @type {string} */
declare var offlineProgressCache: string;
declare var marksFoundOffline: number;
/** @type {{equipment: NumberDictionary<ModifierData>,player: NumberDictionary<ModifierData>}} */
declare var randomModifiers: {
    equipment: NumberDictionary<ModifierData>;
    player: NumberDictionary<ModifierData>;
};
/** @type {number} */
declare var progressBarTimer: number;
declare function MasteryExp(): void;
declare class MasteryExp {
    /**
     *
     * @param {number} xp
     */
    equate: (xp: number) => number;
    /**
     *
     * @param {number} level
     */
    level_to_xp: (level: number) => number;
    /**
     *
     * @param {number} xp
     * @param {number} level
     */
    xp_to_level: (xp: number, level?: number) => number;
}
declare function loadMasteryTab(): void;
/**
 *
 * @param {SkillID} skill
 */
declare function updateTotalMastery(skill: SkillID): void;
/**
 * onclick callback function (used in href)
 * handle the display of mastery progress
 * @param {SkillID} skill
 */
declare function showMasteryUnlocks(skill: SkillID): void;
/** @type {number[]} */
declare var currentMastery: number[];
/** @type {number[]} */
declare var totalMastery: number[];
declare const na: "t";
declare var masteryExp: MasteryExp;
/** @type {NumberDictionary<MasteryUnlock[]>} */
declare var masteryUnlocks: NumberDictionary<MasteryUnlock[]>;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var treeMasteryData: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var fishMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var logsMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var cookingMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var miningOreMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var smithingMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var thievingMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var farmingMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var fletchingMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var craftingMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var runecraftingMastery: OldMasteryArray;
/**
 * @deprecated Old save variable
 * @type {OldMasteryArray} */
declare var herbloreMastery: OldMasteryArray;
declare function populateMasteryObject(): void;
declare function createMasteryPoolElements(): void;
/**
 *
 * @param {SkillID} skill
 * @param {boolean} [mainButtons=true]
 */
declare function getMasteryPoolElement(skill: SkillID, mainButtons?: boolean): string;
/**
 *
 * @param {SkillID} skill
 * @param {number} id
 */
declare function createVisualMasteryElement(skill: SkillID, id: number): string;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function getMasteryLevel(skill: SkillID, masteryID: number): number;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function getMasteryProgressXP(skill: SkillID, masteryID: number): string;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function updateMasteryLevel(skill: SkillID, masteryID: number): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function updateMasteryProgress(skill: SkillID, masteryID: number): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function processUpdateMasteryProgress(skill: SkillID, masteryID: number): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function getMasteryProgress(skill: SkillID, masteryID: number): number;
/**
 *
 * @param {SkillID} skill
 */
declare function getMasteryPoolProgress(skill: SkillID): number;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 * @param {number} timePerAction
 */
declare function getMasteryXpToAdd(skill: SkillID, masteryID: number, timePerAction: number): number;
/**
 *
 * @param {SkillID} skill
 */
declare function getTotalUnlockedItems(skill: SkillID): number;
/**
 *
 * @param {SkillID} skill
 */
declare function getCurrentTotalMasteryLevelForSkill(skill: SkillID): number;
/**
 *
 * @param {SkillID} skill
 */
declare function getTotalMasteryLevelForSkill(skill: SkillID): number;
/**
 *
 * @param {SkillID} skill
 */
declare function getTotalItemsInSkill(skill: SkillID): number;
/**
 *
 * @param {SkillID} skill
 * @param {number} defaultTime
 * @param {number} [masteryID=0]
 */
declare function getTimePerActionModifierMastery(skill: SkillID, defaultTime: number, masteryID?: number): number;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 * @param {number} timePerAction
 * @param {boolean} [spendingXP=false]
 * @param {number} xp
 * @param {boolean} [addToPool=true]
 * @param {boolean} [offline=false]
 */
declare function addMasteryXP(skill: SkillID, masteryID: number, timePerAction: number, spendingXP?: boolean, xp?: number, addToPool?: boolean, offline?: boolean): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 * @param {boolean} [offline=false]
 */
declare function notifyMasteryLevelUp(skill: SkillID, masteryID: number, offline?: boolean): void;
/**
 *
 * @param {SkillID} skill
 */
declare function getMasteryPoolTotalXP(skill: SkillID): number;
/**
 *
 * @param {SkillID} skill
 * @param {number} xp
 * @param {boolean} token
 * @returns {number}
 */
declare function getMasteryXpToAddToPool(skill: SkillID, xp: number, token: boolean): number;
/**
 *
 * @param {SkillID} skill
 * @param {number} xp
 * @param {boolean} [offline=false]
 * @param {boolean} [token=false]
 */
declare function addMasteryXPToPool(skill: SkillID, xp: number, offline?: boolean, token?: boolean): void;
/**
 *
 * @param {SkillID} skill
 */
declare function updateMasteryPoolProgress(skill: SkillID): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function getMasteryImage(skill: SkillID, masteryID: number): string;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function getMasteryName(skill: SkillID, masteryID: number): string;
/**
 *
 * @param {SkillID} skill
 */
declare function showSpendMasteryXP(skill: SkillID): void;
/**
 * onClick callback function
 * @param {SkillID} skill
 * @param {number} level
 */
declare function setMasteryPoolLevelUp(skill: SkillID, level: number): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function updateSpendMasteryScreen(skill: SkillID, masteryID: number): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function getMasteryXpForNextLevel(skill: SkillID, masteryID: number): number;
/**
 * onClick callback function
 * @param {SkillID} skill
 * @param {number} masteryID
 * @param {boolean} [confirmation=false]
 */
declare function levelUpMasteryWithPool(skill: SkillID, masteryID: number, confirmation?: boolean): void;
/**
 * onClick callback function
 * @param {SkillID} skill
 */
declare function viewMasteryCheckpoints(skill: SkillID): void;
/**
 *
 * @param {SkillID} skill
 * @param {MasteryCheckPoint} checkpoint
 */
declare function getMasteryCheckpointBonusStatus(skill: SkillID, checkpoint: MasteryCheckPoint): string;
/**
 *
 * @param {SkillID} skill
 * @param {MasteryCheckPoint} checkpoint
 */
declare function getCheckpointBonusClass(skill: SkillID, checkpoint: MasteryCheckPoint): string;
/**
 * onClick callback function
 * @param {SkillID} skill
 */
declare function toggleHideMaxLevel(skill: SkillID): void;
/**
 *
 * @param {SkillID} skill
 */
declare function sortMasteryView(skill: SkillID): void;
/**
 *
 * @param {SkillID} skill
 * @param {number} masteryID
 */
declare function updateMasteryLevelCache(skill: SkillID, masteryID: number): void;
declare function populateMasteryLevelCache(): void;
/**
 * Save game variable
 * @type {Mastery} */
declare var MASTERY: Mastery;
/** @type {MasteryLevelCache} */
declare var masteryLevelCache: MasteryLevelCache;
/** @type {TimeoutID} */
declare let masteryUpdateTimer: TimeoutID;
/** @type {NumberDictionary<MasteryPoolBonus>} */
declare const masteryCheckpointBonuses: NumberDictionary<MasteryPoolBonus>;
declare let masteryPoolLevelUp: number;
declare const masteryCheckpoints: number[];
/** @type {NumberDictionary<number[]>} */
declare var masterySorted: NumberDictionary<number[]>;
/**
 * @type {MasteryCache}
 */
declare var masteryCache: MasteryCache;
/**
 * @type {{skill: SkillID, masteryID: number}[]}
 */
declare var masteryUpdatesToProcess: {
    skill: SkillID;
    masteryID: number;
}[];
/** @type {SkillObject<Milestone[]>} */
declare const MILESTONES: SkillObject<Milestone[]>;
/** @type {Monster[]} */
declare const MONSTERS: Monster[];
declare function loadPets(): void;
/**
 *
 * @param {PetID} petID
 * @param {boolean} [gameLoading=false]
 */
declare function updatePet(petID: PetID, gameLoading?: boolean): void;
/**
 *
 * @param {PetID} petID
 * @param {number} timePerAction
 * @param {boolean} [offline=false]
 * @param {false|SkillID} [forceSkill=false]
 */
declare function rollForPet(petID: PetID, timePerAction?: number, offline?: boolean, forceSkill?: false | SkillID): boolean;
/**
 *
 * @param {PetID} petID
 * @param {boolean} [offline=false]
 */
declare function unlockPet(petID: PetID, offline?: boolean): void;
/**
 *
 * @param {PetID} petID
 */
declare function getPetUnlockModal(petID: PetID): {
    title: string;
    html: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    imageAlt: string;
};
/**
 * onClick callback function
 * @param {PetID} petID
 */
declare function petPet(petID: PetID): void;
/**
 *
 * @param {PetID} petID
 * @param {DungeonID} dungeonID
 */
declare function rollForPetDungeonPet(petID: PetID, dungeonID: DungeonID): void;
/** @type {Pet[]} */
declare const PETS: Pet[];
/**
 * Save game variable
 * @type {boolean[]} */
declare var petUnlocked: boolean[];
declare var petXPToLevel: number;
/** @type {Prayer[]} */
declare const PRAYER: Prayer[];
/**
 *
 * @param {MiningID} ore
 * @param {boolean} [clicked=false]
 * @param {boolean} [ignoreDepletion=false]
 */
declare function mineRock(ore: MiningID, clicked?: boolean, ignoreDepletion?: boolean): void;
declare function loadMiningOres(): void;
declare function updateMiningOres(): void;
declare function updateOreLevelRequirements(): void;
/**
 *
 * @param {number} ore
 * @returns {number}
 */
declare function calculateIncreasedMiningMaxHP(ore: number): number;
/**
 *
 * @param {MiningID} ore
 * @param {boolean} [initialise=false]
 */
declare function updateRockHP(ore: MiningID, initialise?: boolean): void;
/**
 *
 * @param {MiningID} ore
 */
declare function rockReset(ore: MiningID): void;
declare function canMineDragonite(): boolean;
declare function collectGem(offline?: boolean, rollDouble?: boolean): number;
declare function updateMiningRates(): void;
declare const miningData: {
    level: number;
    respawnInterval: number;
    ore: number;
    masteryID: number;
}[];
/**
 * Save game variable
 * @type {RockData[]} */
declare var rockData: RockData[];
declare const oreTypes: string[];
declare var isMining: boolean;
/** @type {MiningID|null} */
declare var currentRock: MiningID | null;
/** @type {TimeoutID|null} */
declare var miningTimeout: TimeoutID | null;
declare const baseMiningInterval: 3000;
declare const baseRockHP: 5;
declare function startRunecrafting(clicked?: boolean): void;
/**
 *
 * @param {RunecraftingID} runecraftingID
 * @param {boolean} [update=false]
 */
declare function selectRunecraft(runecraftingID: RunecraftingID, update?: boolean): void;
declare function loadRunecrafting(): void;
declare function updateRunecrafting(): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} recipeIndex
 * @returns
 */
declare function getRunecraftingRecipeQty(itemID: ItemID, recipeIndex: number): number;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateRunecraftQty(itemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function checkRunecraftingReq(itemID: ItemID): boolean;
/**
 * onClick callback function
 * @param {RunecraftingCategory} cat
 */
declare function runecraftingCategory(cat: RunecraftingCategory): void;
/** @type {RunecraftingItem[]} */
declare var runecraftingItems: RunecraftingItem[];
/** @type {RunecraftingID|null} */
declare var currentRunecraft: RunecraftingID | null;
declare var isRunecrafting: boolean;
/** @type {TimeoutID|null} */
declare var runecraftingTimeout: TimeoutID | null;
/** @type {RunecraftingID|null} */
declare var selectedRunecraft: RunecraftingID | null;
/** @type {QtyReqCheck[]} */
declare var runecraftReqCheck: QtyReqCheck[];
declare var runecraftInterval: number;
/** @type {RunecraftingItem[]} */
declare var runecraftingSorted: RunecraftingItem[];
declare const elementals: number[];
declare const combinations: number[];
declare function disableSidebarSwipeTimer(): void;
declare function updateKeys(): void;
declare function getKeysForCharacter(charID?: number): string;
/**
 *
 * @param {string} key
 * @param {*} value
 */
declare function setItem(key: string, value: any): void;
/**
 *
 * @param {string} key
 */
declare function getItem(key: string): any;
/**
 *
 * @param {string} key
 */
declare function removeItem(key: string): void;
/**
 *
 * @param {'all'|'offline'|true} vars
 */
declare function saveData(vars?: 'all' | 'offline' | true): void;
declare function loadData(update?: boolean): void;
declare function deleteData(characterID?: number): void;
/**
 * onClick callback function
 * @param {boolean} [update=false]
 */
declare function exportSave(update?: boolean): void;
/**
 *
 * @param {SaveString|false} [forceSaveToImport=false]
 * @param {CharacterID} characterID
 */
declare function importSave(forceSaveToImport?: SaveString | false, characterID?: CharacterID): boolean;
/**
 * onClick callback function
 * @param {CharacterID} characterID
 */
declare function openImportSave(characterID?: CharacterID): void;
/**
 * onClick callback function
 * @param {CharacterID} characterID
 */
declare function openExportSave(characterID: CharacterID): void;
/**
 * onClick callback function
 * @param {CharacterID} characterID
 */
declare function openDownloadSave(characterID: CharacterID): void;
/**
 * onClick callback function
 * @param {CharacterID} [characterID=0]
 * @param {string} [characterName='']
 */
declare function openCharacterSelectionSettings(characterID?: CharacterID, characterName?: string): void;
declare function loadGame(update?: boolean): void;
/**
 *
 * @param {boolean|string} [customKey=false]
 * @param {CharacterID} char
 * @returns {SaveString}
 */
declare function getSave(customKey?: boolean | string, char?: CharacterID): SaveString;
/**
 *
 * @param {string|boolean} [customKey=false]
 * @param {CharacterID} [char=0]
 * @returns
 */
declare function getSaveImportant(customKey?: string | boolean, char?: CharacterID): string;
declare function downloadSave(backup?: boolean, save?: number): boolean;
/**
 *
 * @param {SaveString} save
 */
declare function loadGameRaw(save: SaveString): void;
/**
 *
 * @param {SaveString} save
 * @returns {SaveGame}
 */
declare function getSaveJSON(save: SaveString): SaveGame;
/** onClick callback function */
declare function confirmLoadLocalSave(): void;
/**
 * onClick callback function
 * @param {boolean} [confirmed=false]
 */
declare function fixMySave(confirmed?: boolean): void;
/**
 *
 * @param {SaveString} save
 */
declare function setBackupSaveDetails(save: SaveString): void;
/**
 * @template {keyof SaveGame} K
 * @param {SaveString} save
 * @param {K} item
 */
declare function getItemFromSave<K extends keyof SaveGame>(save: SaveString, item: K): SaveGame[K];
/**
 *
 * @param {CharacterID} character
 * @param {boolean} [reloadNow=false]
 */
declare function setForceReload(character: CharacterID, reloadNow?: boolean): void;
declare function removeForceReload(): void;
declare function onloadEvent(accessCheck?: boolean, resetPage?: boolean): void;
declare function resetEntirePage(accessCheck?: boolean): void;
declare function handleBankSidebarScroll(): void;
/**
 *
 * @param {PageID} page
 */
declare function changePageCharacterSelection(page: PageID): void;
/**
 * onClick callback function
 * @param {GameMode} gamemode
 */
declare function setStartingGamemode(gamemode: GameMode): void;
declare function resetVariablesToDefault(): void;
declare var isTest: boolean;
/** @type {CharacterID} */
declare var currentCharacter: CharacterID;
declare var characterSelected: boolean;
/** @type {SaveString|null} */
declare var backupSave: SaveString | null;
declare var dataDeleted: boolean;
declare var keyVersion: string;
declare var keyTest: string;
declare var key: string;
declare var disableSidebarSwipe: boolean;
declare var currentStartPage: number;
/** @type {TimeoutID|null} */
declare var sidebarSwipeTimer: TimeoutID | null;
declare var startingGamemode: number;
declare var panVal: number;
/**
 * Determines if an object is empty
 * @param {Record<string,unknown>} obj
 * @returns {obj is Record<string,never>}
 */
declare function isEmptyObject(obj: Record<string, unknown>): obj is Record<string, never>;
/**
 * Fixes the damagetaken stat on armour being applied to damagedealt
 * @param {ItemStat[]} stats
 */
declare function fixStats(stats: ItemStat[]): void;
/**
 *
 * @param {(item: GenericItem) => boolean} predicate
 * @returns {(idList: number[], item: GenericItem, id: number) => number[]}
 */
declare function reduceToID(predicate: (item: GenericItem) => boolean): (idList: number[], item: GenericItem, id: number) => number[];
/**
 *
 * @param {StatsData} portion
 * @param {ItemStat[]} stats
 * @returns {number[]}
 */
declare function serializeStatPortion(portion: StatsData, stats: ItemStat[]): number[];
/**
 *
 * @param {StatsData} portion
 * @param {number[]} subData
 * @param {ItemStat[]} stats
 */
declare function deserializeItemStatsPortion(portion: StatsData, subData: number[], stats: ItemStat[]): void;
/**
 * Returns a deserializer for a GameStat object
 * @param {GameStat[]} statVar
 * @returns {Deserializer<GameStat[]>}
 */
declare function deserializeStats(statVar: GameStat[]): Deserializer<GameStat[]>;
/**
 * Returns a deserializer for glovesTracker
 * @returns {Deserializer<typeof glovesTracker>}
 */
declare function deserializeGlovesTracker(): Deserializer<typeof glovesTracker>;
/**
 * Returns a deserializer for newFarmingAreas
 * @returns {NestedDeserializer<FarmingArea[]>}
 */
declare function deserializeFarmingAreas(): NestedDeserializer<FarmingArea[]>;
/**
 *
 * @param {SerializableSaveGame} saveGame
 * @returns {number[][]}
 */
declare function serializeVars(saveGame: SerializableSaveGame): number[][];
/**
 *
 * @param {NestedSerializeableSaveGame} saveGame
 * @returns {number[][][]}
 */
declare function serializeNestedVars(saveGame: NestedSerializeableSaveGame): number[][][];
/** Returns a packaged savefile ready for compression and encoding
 * @param {NewSaveGame} saveGame
 * @returns {PackagedSave}
 */
declare function packageSave(saveGame: NewSaveGame): PackagedSave;
/** Gets a compressed save file from current global values
 * @returns {string}
 */
declare function getCompressedSaveString(): string;
/** Decodes and decompresses a save string
 * @param {string} saveString
 * @returns {PackagedSave}
 */
declare function decompressSaveString(saveString: string): PackagedSave;
/** Gets a savegame object from a save string
 * @param {string} saveString
 * @returns {NewSaveGame}
 */
declare function getSaveFromString(saveString: string): NewSaveGame;
/** Reconstructs variables that did not need to be saved (and performs some post processing for others)
 * @param {NewSaveGame} saveGame
 */
declare function constructRedundantVars(saveGame: NewSaveGame): void;
/** This is just a utility function for testing
 * @param {NewSaveGame} saveGame
 * @returns {StringDictionary<string>}
 */
declare function snapShotAllVars(saveGame: NewSaveGame): StringDictionary<string>;
/** Gets a savegame object from the current global values
 * @returns {NewSaveGame}
 */
declare function getSaveGameFromWindow(): NewSaveGame;
/** Tests the old/new save compression methods */
declare function testSaveMethods(): void;
/** Compares the length between the old/new save compression methods */
declare function testLength(): void;
declare const reconstructedVars: string[];
declare const currentSaveVersion: 1;
/** Variables that store a number
 * @type {NumberDictionary<NumberKey[]>}
*/
declare const numberVars: NumberDictionary<NumberKey[]>;
/** Variables that store a boolean
 * @type {NumberDictionary<BoolKey[]>}
 */
declare const boolVars: NumberDictionary<BoolKey[]>;
/**  Old variables that should not be stored
 * @type {SaveKey[]}
 */
declare const oldVars: SaveKey[];
/** Variables with other types that are too mishapen or not fit for serialization
 * @type {NumberDictionary<OtherKey[]>}
 */
declare const otherVars: NumberDictionary<OtherKey[]>;
/** Varialbes that are serializable
 * @type {NumberDictionary<SerialKey[]>}
 */
declare const serialVars: NumberDictionary<SerialKey[]>;
/**
 * Variables that are nested serializable
 * @type {NumberDictionary<NestedKey[]>} */
declare const nestedVars: NumberDictionary<NestedKey[]>;
/** @type {Serializer<number[]>} */
declare const serializeItemsFound: Serializer<number[]>;
/** @type {Serializer<number[]>} */
declare const serializeNumberArray: Serializer<number[]>;
/** @type {Deserializer<number[]>} */
declare const deserializeNumberArray: Deserializer<number[]>;
/** @type {NestedSerializer<RaidHistory[]>} */
declare const serializeRaidHistory: NestedSerializer<RaidHistory[]>;
/** @type {NestedDeserializer<RaidHistory[]>} */
declare const deserializeRaidHistory: NestedDeserializer<RaidHistory[]>;
/** @type {NestedSerializer<Mastery>} */
declare const serializeMastery: NestedSerializer<Mastery>;
/** @type {NestedDeserializer<Mastery>} */
declare const deserializeMastery: NestedDeserializer<Mastery>;
/** @type {Serializer<EquipmentSet[]>} */
declare const serializeEquipment: Serializer<EquipmentSet[]>;
/** @type {Deserializer<EquipmentSet[]>} */
declare const deserializeEquipment: Deserializer<EquipmentSet[]>;
/** @type {Serializer<boolean[]>} */
declare const serializeBoolArray: Serializer<boolean[]>;
/** @type {Deserializer<boolean[]>} */
declare const deserializeBoolArray: Deserializer<boolean[]>;
/** @type {Serializer<MonsterStat[]>} */
declare const serializeMonsterStats: Serializer<MonsterStat[]>;
/** @type {Deserializer<MonsterStat[]>} */
declare const deserializeMonsterStats: Deserializer<MonsterStat[]>;
/** @type {NumberDictionary<string>&StringDictionary<number>} */
declare var Stats: NumberDictionary<string> & StringDictionary<number>;
declare namespace itemStatsData {
    namespace all {
        const stats: number[];
        const items: number[];
    }
    namespace weapon {
        const stats_1: number[];
        export { stats_1 as stats };
        const items_1: number[];
        export { items_1 as items };
    }
    namespace quiver {
        const stats_2: number[];
        export { stats_2 as stats };
        const items_2: number[];
        export { items_2 as items };
    }
    namespace armour {
        const stats_3: number[];
        export { stats_3 as stats };
        const items_3: number[];
        export { items_3 as items };
    }
    namespace chests {
        const stats_4: number[];
        export { stats_4 as stats };
        const items_4: number[];
        export { items_4 as items };
    }
    namespace seeds {
        const stats_5: number[];
        export { stats_5 as stats };
        const items_5: number[];
        export { items_5 as items };
    }
    namespace harvest {
        const stats_6: number[];
        export { stats_6 as stats };
        const items_6: any[];
        export { items_6 as items };
    }
    namespace food {
        const stats_7: number[];
        export { stats_7 as stats };
        const items_7: number[];
        export { items_7 as items };
    }
    namespace rune {
        const stats_8: number[];
        export { stats_8 as stats };
        const items_8: number[];
        export { items_8 as items };
    }
}
/** @type {(keyof typeof itemStatsData)[]} */
declare const itemStatTypes: (keyof typeof itemStatsData)[];
/** @type {NestedSerializer<ItemStat[]>} */
declare const serializeItemStats: NestedSerializer<ItemStat[]>;
/** @type {NestedDeserializer<ItemStat[]>} */
declare const deserializeItemStats: NestedDeserializer<ItemStat[]>;
declare const settingsMap: string[][];
/** @type {Serializer<typeof SETTINGS>} */
declare const serializeSettings: Serializer<typeof SETTINGS>;
/** @type {Deserializer<typeof SETTINGS>} */
declare const deserializeSettings: Deserializer<typeof SETTINGS>;
/** @type {Serializer<BankDefaultItem[]>} */
declare const serializeDefaultItemTabs: Serializer<BankDefaultItem[]>;
/** @type {Deserializer<BankDefaultItem[]>} */
declare const deserializeDefaultItemTabs: Deserializer<BankDefaultItem[]>;
/** @type {Serializer<NumberKey[]>} */
declare const serializeNumbers: Serializer<NumberKey[]>;
/** @type {Serializer<BoolKey[]>} */
declare const serializeBools: Serializer<BoolKey[]>;
/** @type {Serializer<BankItem[]>} */
declare const serializeBank: Serializer<BankItem[]>;
/** @type {Deserializer<BankItem[]>} */
declare const deserializeBank: Deserializer<BankItem[]>;
/** @type {Serializer<GameStat[]>} */
declare const serializeStats: Serializer<GameStat[]>;
/** @type {Serializer<typeof glovesTracker>} */
declare const serializeGlovesTracker: Serializer<typeof glovesTracker>;
/** @type {Serializer<RockData[]>} */
declare const serializeRockData: Serializer<RockData[]>;
/** @type {Deserializer<RockData[]>} */
declare const deserializeRockData: Deserializer<RockData[]>;
/** @type {Serializer<SlayerTask[]>} */
declare const serializeSlayerTask: Serializer<SlayerTask[]>;
/** @type {Deserializer<SlayerTask[]>} */
declare const deserializeSlayerTask: Deserializer<SlayerTask[]>;
/** @type {NestedSerializer<FarmingArea[]>} */
declare const serializeFarmingAreas: NestedSerializer<FarmingArea[]>;
/** @type {Serializer<HerbloreBonus[]>} */
declare const serializeHerbloreBonuses: Serializer<HerbloreBonus[]>;
/** @type {Deserializer<HerbloreBonus[]>} */
declare const deserializeHerbloreBonuses: Deserializer<HerbloreBonus[]>;
/** @type {Serializer<typeof tutorialTips>} */
declare const serializeTutorialTips: Serializer<typeof tutorialTips>;
/** @type {Deserializer<typeof tutorialTips>} */
declare const deserializeTutorialTips: Deserializer<typeof tutorialTips>;
/** @type {Serializer<typeof shopItemsPurchased>} */
declare const serializeShopItems: Serializer<typeof shopItemsPurchased>;
/** @type {Deserializer<typeof shopItemsPurchased>} */
declare const deserializeShopItems: Deserializer<typeof shopItemsPurchased>;
/** @type {Serializer<MinCombatData>} */
declare const serializeCombatData: Serializer<MinCombatData>;
/** @type {Deserializer<MinCombatData>} */
declare const deserializeCombatData: Deserializer<MinCombatData>;
/** @type {Serializer<typeof equippedFood>} */
declare const serailizeFood: Serializer<typeof equippedFood>;
/** @type {Deserializer<typeof equippedFood>} */
declare const deserializeFood: Deserializer<typeof equippedFood>;
/** Contains the methods for variables that serialize to number[]
 * @type {MapToSerializer<SerializableSaveGame>}
 */
declare const serializers: MapToSerializer<SerializableSaveGame>;
/** Contains the methods for varialbes that serialize to number[][]
 * @type {MapToNested<NestedSerializeableSaveGame>}
 */
declare const nestedSerializers: MapToNested<NestedSerializeableSaveGame>;
/** @type {(keyof NewSaveGame)[]} */
declare const newAllVars: (keyof NewSaveGame)[];
/**
 * Mobile/Steam Specific Function
 * @param {number} zoomLevel
 */
declare function adjustZoom(zoomLevel: number): void;
/**
 * onClick callback function
 * @param {27|32} setting
 * @param {boolean} [ignore=false]
 */
declare function toggleSetting(setting: 27 | 32, ignore?: boolean): void;
/**
 *
 * @param {1|2|3|4|5|6|7|8|9|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|28|29|30|31|33|34|35} setting
 * @param {boolean|number} value
 * @param {boolean} [ignore=false]
 */
declare function changeSetting(setting: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 28 | 29 | 30 | 31 | 33 | 34 | 35, value: boolean | number, ignore?: boolean): void;
declare function loadCurrentSettings(): void;
declare function toggleAutoPotion(update?: boolean): void;
declare function setDefaultSettings(): void;
declare namespace SETTINGS {
    namespace bank {
        const bankBorder: number;
        const currentEquipDefault: boolean;
        const defaultBankSort: number;
        const defaultItemTab: BankDefaultItem[];
    }
    namespace mastery {
        const hideMaxLevel: boolean;
        const confirmationCheckpoint: boolean;
    }
    namespace general {
        const pushNotificationOffline: boolean;
        const pushNotificationFarming: boolean;
    }
    namespace notifications {
        const combatStunned: boolean;
        const combatSleep: boolean;
    }
}
/** Save game variable */
declare var ignoreBankFull: boolean;
/** Save game variable */
declare var defaultPageOnLoad: number;
/** Save game variable */
declare var levelUpScreen: number;
/** Save game variable */
declare var continueThievingOnStun: boolean;
/** Save game variable */
declare var showItemNotify: number;
/** Save game variable */
declare var showGPNotify: boolean;
/** Save game variable */
declare var autoRestartDungeon: boolean;
/** Save game variable */
declare var autoSaveCloud: boolean;
/** Save game variable */
declare var darkMode: boolean;
/** Save game variable */
declare var showEnemySkillLevels: boolean;
/** Save game variable */
declare var confirmationOnClose: boolean;
/** Save game variable */
declare var enableAccessibility: boolean;
/** Save game variable */
declare var autoPotion: boolean;
/** @deprecated Old save variable */
declare var autoUseSpecialAttack: boolean;
/** @deprecated Old save variable */
declare var showHPNotify: boolean;
declare const autoSlayerTask: true;
/** Save game variable */
declare var showCommas: boolean;
/** Save game variable */
declare var showVirtualLevels: boolean;
/** Save game variable */
declare var formatNumberSetting: number;
/** Save game variable */
declare var pauseOfflineActions: boolean;
/** Save game variable */
declare var showSaleNotifications: boolean;
/** Save game variable */
declare var showShopNotifications: boolean;
/** Save game variable */
declare var showCombatMinibar: boolean;
/** Save game variable */
declare var showCombatMinibarCombat: boolean;
/** Save game variable */
declare var useCombinationRunes: boolean;
/** Save game variable */
declare var showSkillMinibar: boolean;
/** Save game variable */
declare var disableAds: boolean;
declare function BankUpgradeCost(): void;
declare class BankUpgradeCost {
    /**
     *
     * @param {number} gp
     */
    equate: (gp: number) => number;
    /**
     *
     * @param {number} level
     */
    level_to_gp: (level: number) => number;
    /**
     *
     * @param {number} gp
     */
    gp_to_level: (gp: number) => number;
}
declare function NewNewBankUpgradeCost(): void;
declare class NewNewBankUpgradeCost {
    /**
     *
     * @param {number} level
     */
    equate: (level: number) => number;
    /**
     *
     * @param {number} level
     */
    level_to_gp: (level: number) => number;
}
declare function NewBankUpgradeCost(): void;
declare class NewBankUpgradeCost {
    /**
     *
     * @param {number} gp
     */
    equate: (gp: number) => number;
    /**
     *
     * @param {number} level
     */
    level_to_gp: (level: number) => number;
    /**
     *
     * @param {number} gp
     */
    gp_to_level: (gp: number) => number;
}
declare function getBankUpgradeCost(): number;
/**
 *
 * @param {'axe'|'all'|'gloves'|'godUpgrades'|'autoeat'|'skillcapes'|'autoSlayer'|'pickaxe'|'multitree'|'cookingFire'|'equipmentSet'|'rod'|'bank'|'cookingRange'|'compost'|'feathers'} identifier
 */
declare function updateShop(identifier: 'axe' | 'all' | 'gloves' | 'godUpgrades' | 'autoeat' | 'skillcapes' | 'autoSlayer' | 'pickaxe' | 'multitree' | 'cookingFire' | 'equipmentSet' | 'rod' | 'bank' | 'cookingRange' | 'compost' | 'feathers'): void;
declare function getCurrentPickaxe(): string;
declare function getCurrentFishingRod(): string;
declare function getCurrentPickaxeDescription(): string;
declare function getCurrentFishingRodDescription(): string;
declare function getCurrentAxe(): string;
declare function getCurrentAxeDescription(): string;
declare function updateAutoEatTooltip(): void;
/**
 *
 * @param {string} qty
 */
declare function updateBuyQty(qty: string): void;
/**
 * Maybe not deprecated? used in buyShopItem
 * @param {GloveID} gloves
 */
declare function buyGloves(gloves: GloveID): void;
/**
 *
 * @param {keyof Shop} category
 * @param {number} id
 * @param {boolean} [confirmed=false]
 */
declare function buyShopItem(category: keyof Shop, id: number, confirmed?: boolean): void;
declare function updateShopCosts(): void;
/**
 *
 * @param {keyof Shop} category
 * @param {number} id
 */
declare function checkShopUnlockRequirements(category: keyof Shop, id: number): boolean;
/**
 *
 * @param {ShopCategory} category
 * @param {number} id
 * @param {string} [textClass="text-danger"]
 */
declare function printShopUnlockRequirements(category: ShopCategory, id: number, textClass?: string): string;
/**
 *
 * @param {ShopCategory} category
 * @param {number} id
 * @returns {boolean}
 */
declare function checkShopItemPurchased(category: ShopCategory, id: number): boolean;
/**
 *
 * @param {ShopCostTypes} type
 * @param {number} amount
 * @param {ItemID} [itemID=0]
 * @param {boolean} [hasQty=false]
 */
declare function getShopCostClass(type: ShopCostTypes, amount: number, itemID?: ItemID, hasQty?: boolean): string;
/**
 *
 * @param {ShopCategory} category
 * @param {number} id
 */
declare function checkShopBuyLimit(category: ShopCategory, id: number): boolean;
/**
 *
 * @param {ShopCategory} category
 * @param {number} id
 */
declare function printShopCost(category: ShopCategory, id: number): string;
/**
 *
 * @param {ShopCategory} category
 * @param {number} id
 * @param {string} media
 * @param {ShopCostTypes} type
 * @param {number} cost
 * @param {ItemID} itemID
 * @param {boolean} hasQty
 */
declare function createShopCostElement(category: ShopCategory, id: number, media: string, type: ShopCostTypes, cost: number, itemID: ItemID, hasQty: boolean): string;
/**
 *
 * @param {ShopCategory} category
 * @param {number} id
 */
declare function determineShopCost(category: ShopCategory, id: number): string;
declare function createShop(): void;
/**
 *
 * @param {ShopCategory} category
 * @param {number} i
 */
declare function createShopCategory(category: ShopCategory, i: number): string;
/**
 * onclick callback
 * @param {0|1|2|4} menu
 */
declare function toggleShopMenu(menu: 0 | 1 | 2 | 4): void;
/**
 *
 * @param {0|1|2|3|4|5|6} cat
 */
declare function shopCategory(cat?: 0 | 1 | 2 | 3 | 4 | 5 | 6): void;
declare function checkForDuplicateShopPurchases(): void;
/** @type {Record<ShopCategory,ShopCategoryData[]>} */
declare const SHOP: Record<ShopCategory, ShopCategoryData[]>;
/**
 * Save game variable
 * @type {[ShopCategory,number][]}
 */
declare var shopItemsPurchased: [ShopCategory, number][];
/** @deprecated Old Save Variable */
declare var currentAxe: number;
/** @deprecated Old Save Variable */
declare var currentRod: number;
/** @deprecated Old Save Variable */
declare var currentPickaxe: number;
/** @deprecated Old Save Variable */
declare var currentCookingFire: number;
/** @deprecated Old Save Variable */
declare var currentAutoEat: number;
/** Save game variable */
declare var buyQty: number;
/** @deprecated Old Save variable */
declare var autoSlayerUnlocked: boolean;
/** Save game variable */
declare var autoSlayer: boolean;
declare var bankUpgradeCost: BankUpgradeCost;
declare var newBankUpgradeCost: NewBankUpgradeCost;
declare var newNewBankUpgradeCost: NewNewBankUpgradeCost;
declare const autoEatData: {
    title: string;
    eatAt: number;
    maxHP: number;
    efficiency: number;
    cost: number;
}[];
/** @deprecated Old save game variable */
declare var equipmentSetsPurchased: boolean[];
/** @deprecated Old save game variable */
declare var equipmentSwapPurchased: boolean;
/** The only part that is used is the media for the normal fire
 * This var could be cleaned up with a little bit of effort
*/
declare const cookingFireData: {
    tier: string;
    fmLevel: number;
    costGP: number;
    costLogs: number[];
    bonusXP: number;
    media: string;
}[];
declare const skillcapeItems: number[];
declare const glovesCost: number[];
declare const glovesActions: number[];
declare const gloveID: number[];
/** Save game variable */
declare var glovesTracker: {
    name: string;
    isActive: boolean;
    remainingActions: number;
}[];
declare const godUpgradeData: {
    name: string;
    description: string;
    cost: number;
    dungeonID: number;
    media: string;
}[];
/**
 * @deprecated Use shopItemsPurchased instead
 */
declare var godUpgrade: boolean[];
declare function startSmithing(clicked?: boolean): void;
/**
 *
 * @param {number} smithingID
 * @param {boolean} [update=false]
 */
declare function selectSmith(smithingID: number, update?: boolean): void;
declare function loadSmithing(): void;
declare function updateSmithing(): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateSmithQty(itemID: ItemID): void;
/**
 * onClick callback function (being used as href)
 * @param {SmithingCategory} cat
 */
declare function smithCategory(cat: SmithingCategory): void;
/**
 *
 * @param {ItemID} itemID
 * @param {number} recipeIndex
 * @param {boolean} [useCharges=true]
 * @returns {number}
 */
declare function getSmithingRecipeQty(itemID: ItemID, recipeIndex: number, useCharges?: boolean): number;
/**
 *
 * @param {ItemID} itemID
 * @param {boolean} [ignoreCoal=false]
 */
declare function checkSmithingReq(itemID: ItemID, ignoreCoal?: boolean): boolean;
/** @type {SmithingItem[]} */
declare var smithingItems: SmithingItem[];
/** @type {SmithingItem[]} */
declare var smithingSorted: SmithingItem[];
/** @type {SmithingID|null} */
declare var currentSmith: SmithingID | null;
declare var isSmithing: boolean;
/** @type {TimeoutID|null} */
declare var smithingTimeout: TimeoutID | null;
/**  @type {QtyReqCheck[]} */
declare var smithReqCheck: QtyReqCheck[];
/** @type {SmithingID|null} */
declare var selectedSmith: SmithingID | null;
declare var smithInterval: number;
/**
 *
 * @param {string} key
 * @param {string} [text='']
 * @param {number} [sendAfter=0]
 */
declare function sendPushNotification(key: string, text?: string, sendAfter?: number): void;
/**
 *
 * @param {string} key
 * @param {string} pushID
 */
declare function storeScheduledPushNotification(key: string, pushID: string): void;
/**
 *
 * @param {string} key
 */
declare function deleteScheduledPushNotification(key: string): void;
/**
 *
 * @param {string} key
 * @returns {boolean}
 */
declare function checkForExistingScheduledPushNotification(key: string): boolean;
declare function connectDevicePushNotifications(): void;
declare function disconnectDevicePushNotifications(): void;
declare function getConnectedPushNotificationDevice(): void;
declare function getPushNotificationPlatform(): string;
/**
 *
 * @returns {Promise<string>}
 */
declare function getPushNotificationToken(): Promise<string>;
/**
 *
 * @param {string} token
 */
declare function storePushNotificationToken(token: string): void;
/**
 *
 * @param {string} platform
 */
declare function storePushNotificationPlatform(platform: string): void;
/**
 * Save game variable
 * @type {StringDictionary<string>} */
declare var scheduledPushNotifications: StringDictionary<string>;
/** @type {StringDictionary<string>} */
declare var storedPushNotificationData: StringDictionary<string>;
/**
 *
 * @param {null|'general'|'woodcutting'|'fishing'|'firemaking'|'cooking'|'mining'|'smithing'|'combat'|'thieving'|'farming'|'fletching'|'crafting'|'runecrafting'|'herblore'|'summoning'} skill
 */
declare function updateStats(skill?: null | 'general' | 'woodcutting' | 'fishing' | 'firemaking' | 'cooking' | 'mining' | 'smithing' | 'combat' | 'thieving' | 'farming' | 'fletching' | 'crafting' | 'runecrafting' | 'herblore' | 'summoning'): void;
declare function convertItemLog(): void;
declare function convertMonsterLog(): void;
/**
 *
 * @param {null|ItemID} item
 * @param {number} [quantity=0]
 */
declare function updateItemLog(item?: null | ItemID, quantity?: number): void;
/**
 * onClick callback function
 */
declare function openItemLog(): void;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateBankItemStats(itemID: ItemID): void;
/**
 * onClick callback function
 */
declare function openMonsterLog(): void;
/**
 * onClick callback function
 */
declare function openPetLog(): void;
declare function updateCompletionLog(): void;
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsGeneral: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsCombat: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsWoodcutting: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsFishing: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsFiremaking: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsCooking: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsMining: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsSmithing: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsThieving: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsFarming: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsFletching: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsCrafting: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsRunecrafting: GameStat[];
/**
 * Save game variable
 * @type {GameStat[]} */
declare var statsHerblore: GameStat[];
declare var completionStats: number;
/**
 *
 * @param {boolean} [clicked=false]
 */
declare function createSummon(clicked?: boolean): void;
declare function getSummoningSynergyStatus(): string;
declare function updateCombatSummonSynergyTooltip(): void;
declare function loadSummoning(): void;
declare function updateSummoning(): void;
/**
 *
 * @param {number} summonID
 * @param {number} [recipe=-1]
 * @param {boolean} [update=false]
 */
declare function selectSummon(summonID: number, recipe?: number, update?: boolean): void;
/**
 *
 * @param {ItemID} itemID
 * @returns {number}
 */
declare function getSummoningCreationQty(itemID: ItemID): number;
/**
 *
 * @param {ItemID} itemID
 * @returns {boolean}
 */
declare function updateSummonRecipeSelection(itemID: ItemID): boolean;
/**
 *
 * @param {ItemID} itemID
 * @param {number} recipeID
 * @param {number} recipeItemIndex
 * @returns {number}
 */
declare function getSummoningRecipeQty(itemID: ItemID, recipeID: number, recipeItemIndex: number): number;
/**
 *
 * @param {ItemID} itemID
 */
declare function updateSummoningQty(itemID: ItemID): void;
/**
 *
 * @param {ItemID} itemID
 * @returns {boolean}
 */
declare function checkSummoningReq(itemID: ItemID): boolean;
/**
 *
 * @returns {string}
 */
declare function getSummonSynergy(): string;
/**
 *
 * @param {string} synergy
 * @returns {string}
 */
declare function formatSynergyHTML(synergy: string): string;
/**
 *
 * @param {number} summon1
 * @param {number} summon2
 * @returns {0|1}
 */
declare function isSynergyUnlocked(summon1: number, summon2: number): 0 | 1;
/**
 *
 * @param {number} summon1
 * @param {number} summon2
 * @returns {ModifierData}
 */
declare function getSummonSynergyModifiers(summon1: number, summon2: number): ModifierData;
/**
 *
 * @param {number} summonID
 * @param {number} interval
 * @param {SkillID} skill
 * @param {number} masteryID
 * @returns {number}
 */
declare function getChanceForMark(summonID: number, interval: number, skill: SkillID, masteryID: number): number;
/**
 *
 * @param {SkillID} skill
 * @param {number} summonID
 * @param {number} baseInterval
 * @param {number} interval
 * @param {number} masteryID
 * @returns {boolean}
 */
declare function rollForSummoningMark(skill: SkillID, summonID: number, baseInterval: number, interval: number, masteryID: number): boolean;
/**
 *
 * @param {SkillID} skill
 * @param {number} baseInterval
 * @param {number} interval
 * @param {number} masteryID
 * @returns {boolean}
 */
declare function rollAllPossibleSummoningMarks(skill: SkillID, baseInterval: number, interval: number, masteryID?: number, useCharge?: boolean): boolean;
/**
 *
 * @param {number} summon1
 * @param {number} summon2
 * @param {boolean} [useCharge=true]
 * @param {number} interval
 * @returns {boolean}
 */
declare function checkSummoningSynergyActive(summon1: number, summon2: number, useCharge?: boolean, interval?: number): boolean;
/**
 *
 * @param {number} summonID
 * @param {number} [chargesUsed=1]
 * @param {number} [interval=1000]
 */
declare function useSummonCharge(summonID: number, chargesUsed?: number, interval?: number): void;
/**
 *
 * @param {number} summonID
 * @param {boolean} [useCharge=false]
 * @param {number} [interval=1000]
 * @returns {number}
 */
declare function getBaseSummoningXP(summonID: number, useCharge?: boolean, interval?: number): number;
/**
 *
 * @param {number} summonID
 */
declare function discoverMark(summonID: number): void;
/**
 *
 * @param {number} summonID
 * @returns {SweetAlertOptions}
 */
declare function getMarkDiscoveredModal(summonID: number): SweetAlertOptions;
/**
 *
 * @param {number} summonID
 * @returns {SweetAlertOptions}
 */
declare function getMarkLevelUpModal(summonID: number): SweetAlertOptions;
/**
 *
 * @returns {string}
 */
declare function createMarkDiscoveryElements(): string;
/**
 *
 * @param {number} summonID
 * @returns {string}
 */
declare function getMarkDiscoveryElement(summonID: number): string;
/**
 *
 * @param {number} summonID
 */
declare function updateMarkDiscoveryElement(summonID: number): void;
/**
 *
 * @param {number} summonID
 * @returns {string}
 */
declare function createMarkDiscoveryProgressElement(summonID: number): string;
/**
 *
 * @param {number} summonID
 * @returns {string}
 */
declare function getSummoningMarkImg(summonID: number): string;
/**
 *
 * @param {number} summonID
 * @returns {string}
 */
declare function getSummoningMarkStatus(summonID: number): string;
/**
 *
 * @param {number} summonID
 * @returns {string}
 */
declare function getSummoningMarkStatusClass(summonID: number): string;
/**
 *
 * @param {number} summonID
 * @returns {string}
 */
declare function getSummoningMarkName(summonID: number): string;
/**
 *
 * @param {number} summonID
 * @returns {string}
 */
declare function getSummoningFamiliarName(summonID: number): string;
/**
 *
 * @param {number} summonID
 * @returns {number}
 */
declare function getSummoningMarkProgress(summonID: number): number;
/**
 *
 * @param {number} summonID
 */
declare function updateSummoningMarkProgress(summonID: number): void;
/**
 *
 * @param {number} summonID
 * @returns {0|1|2|3|4}
 */
declare function getSummoningMarkLevel(summonID: number): 0 | 1 | 2 | 3 | 4;
/**
 *
 * @param {number} summonID
 * @returns {string}
 */
declare function getSummoningMarkSkills(summonID: number): string;
/**
 *
 * @param {0|1|2} cat
 */
declare function summoningCategory(cat: 0 | 1 | 2): void;
/**
 *
 * @returns {string}
 */
declare function createSynergiesBreakdown(): string;
declare function updateSynergyFamiliarFilter(): void;
/**
 *
 * @param {number} summonID
 */
declare function filterSynergyFamiliar(summonID: number): void;
/**
 *
 * @param {number} summon1
 * @param {number} summon2
 */
declare function quickEquipSynergy(summon1: number, summon2: number): void;
/**
 *
 * @param {number} summonID
 * @param {number} otherSummonID
 * @returns {string}
 */
declare function getSynergiesBreakdown(summonID: number, otherSummonID: number): string;
/**
 *
 * @param {number} summonID
 */
declare function updateSynergiesBreakdown(summonID: number): void;
declare function openSynergiesBreakdown(): void;
/**
 *
 * @param {string} search
 */
declare function updateSummoningSynergySearch(search: string): void;
declare function updateSummoningSynergySearchArray(): void;
declare function checkForSummoningPet(): void;
/** @type {SummoningData} */
declare const SUMMONING: SummoningData;
/** @type {PlayerSummoningData} */
declare var summoningData: PlayerSummoningData;
/** @type {NumberDictionary<number[]>} */
declare var summoningMarkSkills: NumberDictionary<number[]>;
/** @type {SummoningItem[]} */
declare var summoningItems: SummoningItem[];
/** @type {number|null} */
declare var selectedSummon: number | null;
/** @type {QtyReqCheck[]} */
declare var summoningReqCheck: QtyReqCheck[];
declare var isSummoning: boolean;
/** @type {number|null} */
declare var currentSummon: number | null;
/** @type {TimeoutID|null} */
declare var summoningTimeout: TimeoutID | null;
/** @type {SummoningSearch[]} */
declare var summoningSynergySearch: SummoningSearch[];
/** @type {[number,number]} */
declare var chargesUsedOffline: [number, number];
/** @type {TimeoutID|null} */
declare var updateSummoningTimer: TimeoutID | null;
declare function resetAllPlayerModifiers(): void;
/** @type {ModifierObject<number[]|number[][],number>} */
declare const playerModifiersTemplate: ModifierObject<number[] | number[][], number>;
/**
 *
 * @param {ThievingID} npc
 * @param {boolean} [clicked=true]
 */
declare function pickpocket(npc: ThievingID, clicked?: boolean): void;
declare function updateVisualSuccess(): void;
declare function loadThieving(): void;
declare function updateThieving(): void;
/**
 *
 * @param {ThievingID} npcID
 * @param {boolean} [useGloves=true]
 * @param {boolean} [offline=false]
 */
declare function getSuccessRate(npcID: ThievingID, useGloves?: boolean, offline?: boolean): number;
/**
 *
 * @param {number} npcID
 * @param {number} [masteryLevel=-1]
 * @param {number} [interval=1000]
 * @returns {number}
 */
declare function calculateThievingGP(npcID: number, masteryLevel?: number, interval?: number): number;
declare const thievingNPC: {
    name: string;
    level: number;
    xp: number;
    maxHit: number;
    baseSuccess: number;
    maxSuccess: number;
    maxCoins: number;
    lootTable: number[][];
    media: string;
}[];
declare const baseThievingInterval: 3000;
declare var isThieving: boolean;
/** @type {ThievingID|null} */
declare var npcID: ThievingID | null;
/** @type {TimeoutID|null} */
declare var thievingTimer: TimeoutID | null;
declare var isStunned: boolean;
declare function getWoodcuttingInterval(): number;
declare function getBaseWoodcuttingInterval(): number;
/**
 *
 * @param {number} tree
 * @returns {number}
 */
declare function getWoodcuttingMultiplier(tree: number): number;
/**
 *
 * @param {number} cutInterval
 */
declare function getWoodcuttingGrants(cutInterval: number): void;
/**
 *
 * @param {WoodcuttingID} treeID
 * @param {number|boolean} [ignore=0]
 */
declare function cutTree(treeID: WoodcuttingID, ignore?: number | boolean): void;
/**
 *
 * @param {number} [notify] Unused Parameter
 */
declare function updateWCMilestone(notify?: number): void;
declare function updateWCRates(): void;
declare const trees: {
    type: string;
    level: number;
    interval: number;
    xp: number;
    media: string;
}[];
declare var currentlyCutting: number;
declare const baseCutLimit: 1;
/** @type {WoodcuttingID[]} */
declare var currentTrees: WoodcuttingID[];
/** @type {(TimeoutID|null)[]} */
declare var treeCuttingHandler: (TimeoutID | null)[];
/** @type {TimeoutID|null} */
declare var newTreeCuttingHandler: TimeoutID | null;
/** @deprecated Old Save Variable */
declare var treeCutLimit: number;
