(() => {
    // Scripting Engine for Melvor Idle by aldousWatts on GitLab
    // Major code & script contributions by DanielRX & many community code contributors!
    // As always, use and modify at your own risk. But hey, contribute and share!
    // This code is open source and shared freely under MPL/GNUv3/creative commons licenses.

    // Injecting Scripts
    const isChrome = navigator.userAgent.match('Chrome');
    const isFirefox = navigator.userAgent.match('Firefox');

    /** @param {string} name */
    const getURL = (name) => (isChrome ? chrome : browser).runtime.getURL(name);

    /** @param {string} id */
    const exists = (id) => document.contains(document.getElementById(id))

    /**
     * @param {string} name
     * @param {string} scriptID
     */
    const addScript = (name, scriptID, async = false) => {
        const script = document.createElement('script');
        script.src = getURL(name);
        script.setAttribute('id', scriptID);

        if (async) {
            script.setAttribute('async', true);
        }
        
        document.body.appendChild(script);
    };

    /**
     * @param {string} version
     */
    const addSemiVersion = (semiVersion) => {
        const script = document.createElement('script');
        script.setAttribute('id', 'semiVersion');
        script.innerText = `SEMI_VERSION='${semiVersion}';`
        document.body.prepend(script);
    };

    /**
     * @param {string} name
     * @param {string} scriptID
     */
    const replaceScript = (name, scriptID, async = false) => {
        const el = document.getElementById(scriptID);
        if (exists(scriptID)) { el.remove(); }
        addScript(name, scriptID, async);
    };

    /** @param {string} name */
    const addPlugin = async (name) => { replaceScript(`scripts/plugins/${name}.js`, `SEMI-${name}`, true); };

    /** @param {string} name */
    const addSemiLib = (name) => { replaceScript(`scripts/semi/${name}.js`, `SEMI-${name}`); };

    /**
     * Create image element
     * @param {string} name
     * @param {string} imgId
     * @param {number} height
     * @param {number} width
     */
    const createImage = (name, imgId) => {
        const img = document.createElement('img');
        img.src = getURL(name);
        img.id = imgId;
        img.height = 32;
        img.width = 32;
        return img;
    };

    const autoNames = [ 'bonfire', 'cook', 'mine', 'sell-gems', 'smith', 'eat', 'slayer', 'sell', 'open', 'bury', 'equip', 'run', 'loot', 'slayer-skip', 'farm'];
    const pluginNames = [...autoNames.map((name) => `auto-${name}`), 'time-remaining', 'ore-in-bank', 'barf', 'calc-to-level', 'destroy-crops', 'katorone', 'thief-calc', 'xp-per-hour'];
    const libNames = ['fold-menus', 'drag-menus', 'menus'];

    // Only support firefox and chrome. To allow loading on other browsers, delete this entire if statement including brackets & contents {}.
    if(!isChrome && !isFirefox) {
        alert('SEMI is only officially supported on Firefox and Chrome. To try on another browser, you must modify the main function in SEMI.js. The addon will not load otherwise.');
        return;
    }

    // not sure how to get the icon otherwise. need to leave the heading addition here, could probably just copy the rest to a big injection.
    if (exists('modal-semi-set-menu')) { return; }
    const semiVersion = (isChrome ? chrome : browser).runtime.getManifest().version;
    addSemiVersion(semiVersion);

    const navbar = document.getElementsByClassName('nav-main')[0];
    const semiHeading = document.createElement('li');
    semiHeading.className = "nav-main-heading";
    navbar.appendChild(semiHeading);
    semiHeading.style = 'font-size: 12pt; color: white; text-transform: none;';
    semiHeading.textContent = ` SEMI v${semiVersion}`;
    semiHeading.title = 'Scripting Engine for Melvor Idle';
    semiHeading.id = 'SEMI-heading';
    semiHeading.insertBefore(createImage('icons/border-48.png', 'SEMI-menu-icon'), semiHeading.childNodes[0]);

    replaceScript('scripts/core.js', 'semi-inject-core');
    replaceScript('scripts/utils.js', 'semi-inject-utils');

    const loadPlugins = () => {
        if(!exists('SEMI-canary')) { return; }
        clearInterval(pluginLoader);

        // Load Libs first synchronously so that they can depend on each other.
        libNames.forEach(addSemiLib);

        // Load Plugins async
        pluginNames.forEach(addPlugin);
    };
    const pluginLoader = setInterval(loadPlugins, 50);

})();
