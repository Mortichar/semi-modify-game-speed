SEMI.SettingsMigrator = (() => {
  const migrateSettings = () => {
    let currentSettingsVersion = SEMI.getGlobalItem("settings-version");
    if (!currentSettingsVersion) {
      currentSettingsVersion = 0;
    }

    // V2 Settings Migration
    if (currentSettingsVersion < 2) {
      // This item holds their last known player with the current settings
      // We no longer set this, so its valid until we delete it
      // Migrate all their base settings to this character
      let charID = SEMI.getGlobalItem("previous-character");
      if (!charID) {
        charID = currentCharacter;
      }

      for (let storageKey in SEMI.getSemiData()) {
        if (
          storageKey != `${SEMI.LOCAL_SETTINGS_PREFIX}-previous-character` &&
          storageKey != `${SEMI.LOCAL_SETTINGS_PREFIX}-settings-version` &&
          !storageKey.startsWith(`${SEMI.LOCAL_SETTINGS_PREFIX}-Char`)
        ) {
          console.log(storageKey.substr(SEMI.LOCAL_SETTINGS_PREFIX.length + 1));
          SEMI.setItem(
            // This will remove 1 additional character from the prefix to account for the -
            // It is not missing the -1 on length
            storageKey.substr(SEMI.LOCAL_SETTINGS_PREFIX.length + 1),
            SEMI.getGlobalItem(
              storageKey.substr(SEMI.LOCAL_SETTINGS_PREFIX.length + 1)
            )
          );

          SEMI.removeGlobalItem(
            storageKey.substr(SEMI.LOCAL_SETTINGS_PREFIX.length + 1)
          );
        }
      }

      SEMI.removeGlobalItem("previous-character");
      SEMI.setGlobalItem("settings-version", 2);
    }
  };

  // We want to load this before the user selects a save.
  migrateSettings();
})();
