(function () {
    const name = 'offline-time-limit';
    const title = 'Remove 12 hour offline limit';
    const desc = 'Removes the 12 hour time limit when processing offline time';
    const imgSrc = 'assets/media/main/milestones_header.svg';

    const origUpdateOffline = updateOffline;

    // We can load before everything else so we verify which character id to use
    function getCharacterId() {
        if (localStorage.getItem('MI-forceReload-')) {
            return localStorage.getItem('MI-forceReload-');
        }
        return currentCharacter;
    }

    /**
		Alters the updateOffline function if this plugin is enabled
	*/
    function injectSelf() {
        if (!Boolean(SEMI.getItem(`${name}-status`, getCharacterId()))) {
            updateOffline = origUpdateOffline;
            return;
        }

        if (typeof updateOffline === 'undefined') {
            return;
        }

        console.log('Attempting to modify Main.js updateOffline');
        var UpdateOfflineNew = updateOffline.toString();

        UpdateOfflineNew = UpdateOfflineNew.replace(
            'if (timeDiff > 43200000) timeDiff = 43200000;',
            'let hoursGone = (timeDiff / 1000 / 60 / 60);'
        );

        if (UpdateOfflineNew == updateOffline.toString()) {
            console.error('Failed to find 12 hour limit');
            return;
        }

        UpdateOfflineNew = UpdateOfflineNew.replace(/if \(timeGone >= 12\) goneFor \+= .+?\r\n/i, '');
        UpdateOfflineNew = UpdateOfflineNew.replace(/if \(timeGone >= 12\) goneFor \+= .+?\n/i, '');

        if (UpdateOfflineNew == updateOffline.toString()) {
            console.error('Failed to find 12 hour message for removal.');
        }

        UpdateOfflineNew = UpdateOfflineNew.replace(
            'Loading your offline progress.',
            'Loading \' + ((hoursGone > 1) ? (Math.floor(hoursGone) + " hours") : Math.floor(hoursGone * 60) + " minutes") + \' of offline progress.'
        );
        if (UpdateOfflineNew == updateOffline.toString()) {
            console.error('Failed to find 12 hour message for removal.');
        }

        // updateOffline = eval('(' + UpdateOfflineNew + ')');
        SEMI.replaceGameFunc('updateOffline', UpdateOfflineNew);

        console.log('Successfully removed 12 hour limit.');

        if (!Boolean(SEMI.getItem('remember-state'))) {
            SEMIUtils.customNotify(
                imgSrc,
                'You enabled the 12 hour time limit remover, but do not have plugins auto-enable when SEMI loads. We suggest enabling that in the SEMI settings for this script to be useful.',
                5000
            );
        }
    }

    // We load before SEMI is ready, we have to wait to add the plugin in otherwise currentCharacter is not valid.
    const addSelfToSemi = () => {
        if (typeof SEMIUtils === 'undefined' || !SEMIUtils.utilsReady()) {
            return;
        }

        clearInterval(semiLoader);
        // Add to SEMI
        SEMI.add(name, {
            title,
            desc,
            imgSrc,
            pluginType: SEMI.PLUGIN_TYPE.TWEAK,
            onEnable: injectSelf,
            onDisable: injectSelf,
        });
    };

    function waitForLoad() {
        if (!SEMI) return;
        clearInterval(semiLoaderInject);

        injectSelf();
    }

    const semiLoaderInject = setInterval(waitForLoad, 50);
    const semiLoader = setInterval(addSelfToSemi, 200);
})();
