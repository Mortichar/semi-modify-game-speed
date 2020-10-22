SEMI.Injections = (() => {
    const doInjections = () => {
        // getSave for adding our data to a player save
        injectGetSave();
    }

    const injectGetSave = () => {
        if (typeof getSave === "undefined") {
            console.error("GetSave cannot be found!")
            return;
        }

        console.log("Attempting to modify Save.js getSave");
        
        var getSaveNew = getSave.toString();
        getSaveNew = getSaveNew.replace("let toSave = {};", "let toSave = SEMI.Injections.semiGetSave();");

        if (getSaveNew == getSave.toString()) {
            console.error("Failed to find injection point");
            return;
        }

        getSave = eval("(" + getSaveNew + ")");

        console.log("Successfully injected into getSave");
    }

    const semiGetSave = () => {
        if (!SEMI.getItem("sync-settings-to-cloud")) {
            return {}; // Return an empty object, as if we were not injected
        }

        return SEMI.getSemiData();
    }

    doInjections();

    return {semiGetSave};
})();