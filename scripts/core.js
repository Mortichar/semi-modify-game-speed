var SEMI = (() => {
    /**
     * @typedef {{enable: () => void, disable: () => void, onDisable: () => void, onEnable: () => void, onLoop: () => void, updateStatus: () => void, onToggle: () => void}} PluginFunctions
     * @typedef {{imgSrc: string, desc: string, title: string, skill: string, pluginType: *}} PluginMeta
     * @typedef {PluginFunctions & PluginMeta & {f: string, enabled: boolean, interval: number | null, ms: number}} Plugin
     * @typedef {ID: string, Title: string, Header: string} SidebarHeader
     */

    // Global Constants
    const ROOT_ID = 'SEMI-menu';
    const LOCAL_SETTINGS_PREFIX = 'SEMI';
    const SUPPORTED_GAME_VERSION = 'Alpha v0.17';

    // Enums
    /**
     * @type {{[sidebarHeaderName: string]: SidebarHeader}}
     */
    const SIDEBAR_MENUS = {
        TWEAK: {
            ID: 'tweaks',
            Title: 'Quality of Life Improvements that do not automate any game play',
            Header: 'Tweaks',
        },
        AUTO_COMBAT: {
            ID: 'auto-combat',
            Title: undefined,
            Header: 'Auto Combat',
        },
        AUTO_SKILL: {
            ID: 'auto-skills',
            Title:
                'One at a time, please! Mixing any two idle skill automations will cause problems as you can only idle one thing at once. Mixing these skill automations with combat is impossible, except for AutoReplant.',
            Header: 'Auto Skills',
        },
    };

    const PLUGIN_TYPE = {
        AUTO_SKILL: SIDEBAR_MENUS.AUTO_SKILL.ID,
        AUTO_COMBAT: SIDEBAR_MENUS.AUTO_COMBAT.ID,
        TWEAK: SIDEBAR_MENUS.TWEAK.ID,
    };

    /**
     * @param {string} id
     * @param {*} value
     */
    const setItem = (id, value, charID = -1) => {
        if (charID == -1) {
            charID = currentCharacter;
        }
        localStorage.setItem(`${LOCAL_SETTINGS_PREFIX}-Char${charID}-${id}`, JSON.stringify(value));
    };

    /**
     * @param {string} id
     * @param {*} value
     */
    const setGlobalItem = (id, value) => {
        localStorage.setItem(`${LOCAL_SETTINGS_PREFIX}-${id}`, JSON.stringify(value));
    };

    /** @param {string} id */
    const getItem = (id, charID = -1) => {
        if (charID == -1) {
            charID = currentCharacter;
        }
        return JSON.parse(localStorage.getItem(`${LOCAL_SETTINGS_PREFIX}-Char${charID}-${id}`));
    };

    /** @param {string} id */
    const getGlobalItem = (id) => {
        return JSON.parse(localStorage.getItem(`${LOCAL_SETTINGS_PREFIX}-${id}`));
    };

    /** @param {string} id */
    const removeItem = (id, charID = -1) => {
        if (charID == -1) {
            charID = currentCharacter;
        }
        localStorage.removeItem(`${LOCAL_SETTINGS_PREFIX}-Char${charID}-${id}`);
    };

    /** @param {string} id */
    const removeGlobalItem = (id) => {
        localStorage.removeItem(`${LOCAL_SETTINGS_PREFIX}-${id}`);
    };

    const getSemiData = () => {
        const backupKeyData = {};
        for (let storageKey in localStorage) {
            if (storageKey.startsWith(`${LOCAL_SETTINGS_PREFIX}-`)) {
                backupKeyData[storageKey] = JSON.parse(localStorage.getItem(storageKey));
            }
        }

        return backupKeyData;
    };

    const getSemiCharacterData = (charID = -1) => {
        if (charID == -1) {
            charID = currentCharacter;
        }

        const backupKeyData = {};
        for (let storageKey in localStorage) {
            if (storageKey.startsWith(`${LOCAL_SETTINGS_PREFIX}-Char${charID}`)) {
                backupKeyData[storageKey] = JSON.parse(localStorage.getItem(storageKey));
            }
        }

        return backupKeyData;
    };

    // TODO Make another GUI for player specific backups?
    const backupSEMI = () => {
        const backupKeyData = getSemiData();
        $('#exportSEMISettings').text(JSON.stringify(backupKeyData));
        const copyText = document.getElementById('exportSEMISettings');
        copyText.select();
        copyText.setSelectionRange(0, 999969); /*For mobile devices*/
        document.execCommand('copy');
        SEMI.customNotify(
            'assets/media/main/settings_header.svg',
            'SEMI configs exported to textarea and copied to clipboard!',
            10000
        );
    };

    const restoreSEMI = () => {
        if ($('#importSEMISettings')[0].value == '') return;
        const restoredConfig = JSON.parse($('#importSEMISettings')[0].value);
        if (restoredConfig == null || typeof restoredConfig !== 'object') return;
        for (let storageKey in restoredConfig) {
            if (storageKey.startsWith(`${LOCAL_SETTINGS_PREFIX}-`) && storageKey !== restoredConfig[storageKey]) {
                localStorage.setItem(storageKey, JSON.stringify(restoredConfig[storageKey]));
            }
        }
        loadKatSets();
        SEMI.customNotify(
            'assets/media/main/settings_header.svg',
            'SEMI configs restored from your import! Refresh to complete the import process.',
            10000
        );
    };

    const resetSEMI = () => {
        for (key in localStorage) {
            if (key.startsWith(`${LOCAL_SETTINGS_PREFIX}-`)) {
                localStorage.removeItem(key);
            }
        }
        katoroneOn = false;
        SEMI.customNotify(
            'assets/media/main/settings_header.svg',
            'SEMI configs erased from your local storage! Refresh to complete the reset process.',
            10000
        );
    };

    const mergeOnto = (x, y) => {
        Object.keys(y).forEach((key) => {
            x[key] = y[key];
        });
    };

    /**
     * @param {string} name the type of HTML element to create. Ex: 'img', 'span', etc
     * @param {{ [x: string]: any; src?: any; id?: string; innerHTML?: any; href?: string; title?: any; }} options
     */
    const createElement = (name, options = {}, children = []) => {
        const x = document.createElement(name);
        x.setAttribute('class', options.class || '');
        mergeOnto(x, options);
        children.forEach((child) => x.appendChild(child));
        return x;
    };

    /**
     * Creation template for SEMI plugin menu items.
     * @param {string} desc Tooltip text contents
     * @param {string} imgSrc Image source for the button icon
     * @param {string} fName Function called when the button is clicked
     * @param {string} title The name displayed on the button for the plugin
     * @param {string} name Name of the plugin used for id assignment
     * @param {string} rootId Root ID to differentiate between types of plugins
     * @param {boolean} hasConfig Whether or not to include a config button
     * @param {string} configMenu HTML for insertion into the tippy config menu
     */
    const makeMenuItem = (
        desc,
        imgSrc,
        fName,
        title,
        name,
        rootId,
        hasConfig = false,
        configMenu,
        configMenuOnShown = undefined
    ) => {
        const imgEl = createElement('img', { src: imgSrc, id: `${name}-img`, class: 'nav-img' });
        const textEl = createElement('span', { innerHTML: title, class: 'nav-main-link-name' });
        const statusEl = createElement('i', {
            id: `${name}-status`,
            class: 'fas fa-times text-danger',
            style: 'width: 15px;',
        });
        if (hasConfig) {
            const configBtnEl = createElement('i', {
                id: `${name}-config-btn`,
                class: `fas fa-cog`,
                style: `padding: 13px 0 13px 13px;`,
            });
            const configMenuEl = tippy(configBtnEl, {
                content: `<div id="${name}-config-menu">
                    ${configMenu}
                </div>
                <button type="button" id="${name}-config-save-btn" class="btn btn-sm btn-primary" onclick="SEMI.saveConfigFromMenu('${name}');">
                    <i class="fa fa-check mr-1"></i>Save
                </button>`,
                allowHTML: true,
                interactive: true,
                appendTo: document.body,
                interactiveBorder: 30,
                trigger: 'click',
                zIndex: 9999,
                placement: 'right',
                onShown: configMenuOnShown,
                maxWidth: 'none',
            });
            configBtnEl.addEventListener('click', (event) => {
                SEMI.updateConfig(name);
                event.preventDefault();
            });
            const buttonEl = createElement(
                'a',
                {
                    href: `javascript:${fName};`,
                    id: `${name}-button`,
                    class: 'nav-main-link nav-compact',
                    style: `padding-left: 5px; padding-right: 10px;`,
                },
                [statusEl, imgEl, textEl, configBtnEl]
            );
            const mainEl = createElement(
                'li',
                { title: desc, id: rootId + '-skill-' + name, class: `nav-main-item ${ROOT_ID}-button` },
                [buttonEl]
            );
            return mainEl;
        } else {
            const buttonEl = createElement(
                'a',
                {
                    href: `javascript:${fName};`,
                    id: `${name}-button`,
                    class: 'nav-main-link nav-compact',
                    style: `padding-left: 5px;`,
                },
                [statusEl, imgEl, textEl]
            );
            const mainEl = createElement(
                'li',
                { title: desc, id: rootId + '-skill-' + name, class: `nav-main-item ${ROOT_ID}-button` },
                [buttonEl]
            );
            return mainEl;
        }
    };

    /**
     * @type {{[pluginName: string]: Plugin}}
     */
    const plugins = {};
    /**
     * @type {string[]}
     */
    const pluginNames = [];

    /**
     * @type {{[pluginName: string]: pluginData}} data - Data of Plugins, not limited to one.
     */
    const data = {};

    /**
     * @param {string} name the plugin ID
     * @param {*} options Options such as onLoop, injectGUI, etc
     */
    const add = (name, options = {}) => {
        const defaults = {
            onLoop: () => {},
            injectGUI: () => {},
            removeGUI: () => {},
            onToggle: () => {},
            onEnable: () => {},
            onDisable: () => {},
            ms: 1000,
            skill: '',
            statusId: `${name}-status`,
            title: '',
            desc: '',
            imgSrc: '',
            f: `SEMI.toggle('${name}')`,
            pluginType: PLUGIN_TYPE.AUTO_SKILL,
            config: {},
            hasConfig: false,
            configMenu: '<div>This is a default config menu!</div>',
            saveConfig: () => {},
            updateConfig: () => {},
            onConfigMenuShown: () => {},
        };
        const opts = { ...defaults, ...options };
        // Register the name and add ms
        data[name] = {};
        setValues(name, opts.config);

        opts.imgSrc = opts.imgSrc === '' && opts.skill !== '' ? SEMI.skillImg(opts.skill) : opts.imgSrc;
        pluginNames.push(name);

        const addToMenu = () => {
            const plugin = plugins[name];
            if (plugin.imgSrc === '') {
                return;
            }
            let menuRootId = `${ROOT_ID}-${plugin.pluginType}`;
            const pluginEl = makeMenuItem(
                plugin.desc,
                plugin.imgSrc,
                plugin.f,
                plugin.title,
                name,
                menuRootId,
                plugin.hasConfig,
                plugin.configMenu,
                plugin.onConfigMenuShown
            );
            $(`#${menuRootId}-section-unsorted`).append(pluginEl);
        };

        const removeFromMenu = () => {
            // const plugin = plugins[name];
            // if(plugin.imgSrc === '') { return; }
            // let el = $('#SEMI-menu-skills-section-unsorted');
            // if(plugin.isCombat) { el = $('#SEMI-menu-combat-section-unsorted'); }
            // const pluginEl = makeMenuItem(plugin.desc, plugin.imgSrc, plugin.f, plugin.title, name, plugin.isCombat);
            // el.append(pluginEl);
        };

        const disable = () => {
            const plugin = plugins[name];
            plugin.enabled = false;
            plugin.onDisable();
            console.log(`${name} Disabled!`);
            if (plugin.imgSrc !== '') {
                SEMI.customNotify(plugin.imgSrc, `${plugin.title} Disabled!`, 1000);
            }
            if (plugin.ms !== 0 && plugin.interval) {
                clearInterval(plugin.interval);
            }
            plugin.updateStatus();
            plugin.removeGUI();
        };

        const enable = () => {
            const plugin = plugins[name];
            plugin.enabled = true;
            if (plugin.onEnable() === false) {
                console.log(`${plugin.title} failed to start!`);
                return false;
            }
            console.log(`${name} Enabled!`);
            if (plugin.skill !== '') {
                SEMI.changePage(plugin.skill);
            }
            if (plugin.imgSrc !== '') {
                SEMI.customNotify(plugin.imgSrc, `${plugin.title} Enabled!`, 1000);
            }
            if (plugin.ms !== 0) {
                plugin.interval = setInterval(plugin.onLoop, plugin.ms);
            }
            plugin.onLoop();
            plugin.updateStatus();
        };

        const toggle = () => {
            const plugin = plugins[name];
            plugin.enabled = !plugin.enabled;
            plugin.onToggle();
            plugin.updateStatus();
            if (plugin.enabled) {
                return plugin.enable();
            }
            return plugin.disable();
        };

        const updateStatus = () => {
            setItem(`${name}-status`, plugins[name].enabled);
            const alternateStatusPlugins = ['auto-sell', 'auto-open', 'auto-bury', 'auto-slayer-skip'];
            if (alternateStatusPlugins.includes(name)) {
                const updater = () => {
                    $(`#${name}-status`).text(plugins[name].enabled ? 'Enabled' : 'Disabled');
                    $(`#${name}-menu-status`).attr(
                        'class',
                        plugins[name].enabled ? 'fas fa-check text-success' : 'fas fa-times text-danger'
                    );
                };
                // return $(`#${name}-status`).text(plugins[name].enabled ? 'Enabled' : 'Disabled');
                return updater();
            }
            if ($(`#${name}-status`) !== null) {
                $(`#${name}-status`).attr(
                    'class',
                    plugins[name].enabled ? 'fas fa-check text-success' : 'fas fa-times text-danger'
                );
            }
        };

        const injectGUI = () => {
            addToMenu();
            opts.injectGUI();
        };

        const removeGUI = () => {
            removeFromMenu();
            opts.removeGUI();
        };

        const useSaved = Boolean(getItem('remember-state'));
        const wasEnabled = Boolean(getItem(`${name}-status`));
        const enabled = wasEnabled && useSaved;
        if (enabled && name !== 'katorone') {
            if (name == 'auto-cook') {
                setTimeout(enable, 5000);
            } else {
                setTimeout(enable, 1000);
            }
        }
        if (SEMI.getItem(`${name}-config`) !== null) {
            SEMI.setValues(name, SEMI.getItem(`${name}-config`));
        }
        const plugin = {
            ...opts,
            toggle,
            interval: null,
            enable,
            disable,
            updateStatus,
            injectGUI,
            removeGUI,
            enabled,
        };
        plugins[name] = plugin;
    };

    /**
     * @param {string} name
     */
    const injectGUI = (name) => {
        plugins[name].injectGUI();
    };
    /**
     * @param {string} name
     */
    const removeGUI = (name) => {
        plugins[name].removeGUI();
    };

    /**
     * @param {string} name
     */
    const toggle = (name) => {
        plugins[name].toggle();
    };
    /**
     * @param {string} name
     */
    const enable = (name) => {
        plugins[name].enable();
    };
    /**
     * @param {string} name
     */
    const disable = (name) => {
        plugins[name].disable();
    };
    /**
     * @param {string} name
     */
    const isEnabled = (name) => {
        if (name in plugins) {
            return plugins[name].enabled;
        }
        console.warn(`Attempted to check 'isEnabled' of ${name}`);
    };

    /**
     * @param {string} name
     */
    const saveConfigFromMenu = (name) => {
        plugins[name].saveConfig();
    };
    /**
     * @param {string} name
     */
    const updateConfig = (name) => {
        plugins[name].updateConfig();
    };

    //AuroraKy Core Config Functions
    /**
     * Sets value at given name in key, name has to be registered with add first.
     * @param {string} name
     * @param {string} key
     * @param {*} value
     */
    const setValue = (name, key, value) => {
        // // Changed main interval time
        // if(key === 'ms') {
        //     if(value <= 0) return;
        //     const plugin = plugins[name];
        //     if(plugin.interval) {
        //         clearInterval(plugin.interval);
        //         plugin.interval = setInterval(plugin.onLoop, getValue(name,'ms'));
        //     }
        // }
        data[name][key] = value;
    };

    /**
     * @param {string} name
     * @param {string} key
     * @returns {*} value at given name in key, name has to be registered with add first.
     */
    const getValue = (name, key) => data[name][key];

    /**
     * @param {string} name Name of plugin to get data from
     * @returns {pluginData} Data stored under the name of plugin
     */
    const getValues = (name) => data[name];

    /**
     * @param {string} name
     * @param {pluginData} data - Data for the plugin with the given name.
     * Sets all values with given name and keys to values of those keys, name has to be registered with add first.
     */
    const setValues = (name, data) => {
        Object.keys(data).forEach((key) => SEMI.setValue(name, key, data[key]));
    };

    return {
        add,
        toggle,
        enable,
        disable,
        isEnabled,
        saveConfigFromMenu,
        updateConfig,
        // data, //to maintain encapsulation, use the getters & setters
        setValue,
        getValue,
        setValues,
        getValues,
        injectGUI,
        removeGUI,
        pluginNames,
        createElement,
        setItem,
        getItem,
        removeItem,
        backupSEMI,
        restoreSEMI,
        resetSEMI,
        ROOT_ID,
        PLUGIN_TYPE,
        SUPPORTED_GAME_VERSION,
        LOCAL_SETTINGS_PREFIX,
        SIDEBAR_MENUS,
        utilsReady: false,
        getSemiData,
        getGlobalItem,
        setGlobalItem,
        removeGlobalItem,
        getSemiCharacterData,
    };
})();
