(() => {
    // Scripting Engine for Melvor Idle by aldousWatts on GitLab
    // Major code & script contributions by DanielRX & many community code contributors!
    // As always, use and modify at your own risk. But hey, contribute and share!
    // This code is open source and shared freely under MPL/GNUv3/creative commons licenses.

    //Browser detection cases
    const isChrome = navigator.userAgent.match('Chrome');
    const isFirefox = navigator.userAgent.match('Firefox');

    // Only support Firefox and Chrome. To allow loading on other browsers, delete this entire if statement including brackets & contents {}.
    if(!isChrome && !isFirefox) {
        return alert('SEMI is only officially supported on Firefox and Chrome. To try on another browser, you must modify the main function in SEMI.js. The addon will not load otherwise.');
    }

    /**
     * Get extension resource URL
     * @param {string} name
     */
    const getURL = (name) => (isChrome ? chrome : browser).runtime.getURL(name);

    /**
     * Check if an element exists
     * @param {string} id
     */
    const exists = (id) => document.contains(document.getElementById(id));

    /**
     * Inject a script into the page
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
     * Inject a short script that creates a global constant with SEMI's current version
     * @param {string} version
     */
    const addSemiVersion = (version) => {
        const script = document.createElement('script');
        script.setAttribute('id', 'semiVersion');
        script.innerText = `const SEMI_VERSION='${version}';`;
        document.body.prepend(script);
    };

    /**
     * Inject a script, removing and replacing it if it already existed on the page
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
     * Create and return image element with height & width of 32px
     * @param {string} url
     * @param {string} imgId
     */
    const createImage = (url, imgId) => {
        const img = document.createElement('img');
        img.src = getURL(url);
        img.id = imgId;
        img.height = 32;
        img.width = 32;
        return img;
    };

    //Check if SEMI is already loaded, and if so, let user know and stop trying to load.
    if (exists('semiVersion')) {
        return alert('SEMI just tried to load, but found that SEMI already exists on the page. This may mean your browser automatically updated the extension and you need to refresh to finish the update!');
    }

    //game version compatibility check
    // const melvorVersion = document.title.match(/v(?:\d\.?)+/)[0];
    // console.log(melvorVersion);
    // if (document.getElementById('m-page-loader-test').className == 'show') return;
    // if (melvorVersion !== 'v0.17.1') {
    //     const response = window.confirm('SEMI no compatible! Load anyways?');
    //     if (!response) return;
    // }

    //Mapping script names for later injection
    const autoNames = [ 'bonfire', 'cook', 'mine', 'sell-gems', 'smith', 'eat', 'slayer', 'sell', 'open', 'bury', 'equip', 'run', 'loot', 'slayer-skip', 'farm', 'equip-best-items'];
    const pluginNames = [...autoNames.map((name) => `auto-${name}`), 'mastery-enhancements', 'time-remaining', 'ore-in-bank', 'barf', 'calc-to-level', 'destroy-crops', 'katorone', 'thief-calc', 'xp-per-hour'];
    const libNames = ['fold-menus', 'drag-menus', 'menus'];
    const preloadedNames = ['event-bus', 'settings-migrator', 'injections'];
    const preloadedPlugins = ['offline-time-limit'];


    //Load and inject SEMI
    const semiVersion = (isChrome ? chrome : browser).runtime.getManifest().version;
    addSemiVersion(semiVersion);
    const navbar = document.getElementsByClassName('nav-main')[0];
    const semiHeading = document.createElement('li');
    semiHeading.className = 'nav-main-heading';
    navbar.appendChild(semiHeading);
    semiHeading.style = 'font-size: 12pt; color: white; text-transform: none;';
    semiHeading.textContent = ` SEMI v${semiVersion}`;
    semiHeading.title = 'Scripting Engine for Melvor Idle';
    semiHeading.id = 'SEMI-heading';
    semiHeading.insertBefore(createImage('icons/border-48.png', 'SEMI-menu-icon'), semiHeading.childNodes[0]);

    replaceScript('scripts/core.js', 'semi-inject-core');
    replaceScript('scripts/utils.js', 'semi-inject-utils');

    // These items need to load with Melvor, not SEMI, but require Core functionality.
    preloadedNames.forEach(addSemiLib);

    // Plugins that need to load with Melvor
    preloadedPlugins.forEach(addPlugin);

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
