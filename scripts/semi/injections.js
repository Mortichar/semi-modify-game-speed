SEMI.Injections = (() => {
  const doInjections = () => {
    // getSave for adding our data to a player save
    injectGetSave();
    injectLoadGameRaw();
  };

  const injectLoadGameRaw = () => {
    if (typeof loadGameRaw === "undefined") {
      console.error("loadGameRaw cannot be found!");
      return;
    }

    const orgLoadGameRaw = loadGameRaw;
    loadGameRaw = (save) => {
      let savegame = getSaveJSON(save);
      let semiKeys = 0;
      for (let storageKey in savegame) {
        if (
          storageKey.startsWith(`${SEMI.LOCAL_SETTINGS_PREFIX}-`) &&
          storageKey !== savegame[storageKey]
        ) {
          semiKeys++;
          localStorage.setItem(
            storageKey,
            JSON.stringify(savegame[storageKey])
          );
        }
      }

      console.log(`Loaded SEMI Data from Cloud Save. Found ${semiKeys} items.`);

      orgLoadGameRaw(save);
    };
  };

  const injectGetSave = () => {
    if (typeof getSave === "undefined") {
      console.error("GetSave cannot be found!");
      return;
    }

    console.log("Attempting to modify Save.js getSave");

    var getSaveNew = getSave.toString();
    getSaveNew = getSaveNew.replace(
      "let toSave = {};",
      "let toSave = SEMI.Injections.semiGetSave();"
    );

    if (getSaveNew == getSave.toString()) {
      console.error("Failed to find injection point");
      return;
    }

    getSave = eval("(" + getSaveNew + ")");

    console.log("Successfully injected into getSave");
  };

  const semiGetSave = () => {
    if (!SEMI.getItem("sync-settings-to-cloud")) {
      return {}; // Return an empty object, as if we were not injected
    }

    return SEMI.getSemiCharacterData();
  };

  doInjections();

  return { semiGetSave };
})();
