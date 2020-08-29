var SEMI =  (() => {
    /**
    * @typedef {{enable: () => void, disable: () => void, onDisable: () => void, onEnable: () => void, onLoop: () => void, updateStatus: () => void, onToggle: () => void}} PluginFunctions
    * @typedef {{imgSrc: string, desc: string, title: string, skill: string, isCombat: boolean}} PluginMeta
    * @typedef {PluginFunctions & PluginMeta & {f: string, enabled: boolean, interval: number | null, ms: number}} Plugin
    */

    /**
    * @param {string} x
    * @param {*} y
    */
    const setItem = (x, y, silent=false) => {
        if (!silent) console.log("setItem -> x, y", x, y);
        localStorage.setItem(`SEMI-${x}`, JSON.stringify(y));
    }

    /** @param {string} x */
    const getItem = (x) => {
        const y = JSON.parse(localStorage.getItem(`SEMI-${x}`));
        console.log("getItem -> x, y", x, y);
        return y;
    }

    const backupSEMI = () => {
        //getItem(all)
            //for each var of allSEMIVars
            //getItem()
        //json.stringify
        //print to modal text box or something
    }

    const restoreSEMI = () => {
        //text input
        //json.parse
        //setItem(all)
    }

    const mergeOnto = (x, y) => {
        Object.keys(y).forEach((key) => { x[key] = y[key]; });
    };

    /**
    * @param {string} name
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
    * @param {string} desc
    * @param {string} imgSrc
    * @param {string} fName
    * @param {string} title
    * @param {string} name
    * @param {boolean} isCombat
    */
    const makeMenuItem = (desc, imgSrc, fName, title, name, isCombat) => {
        const imgEl =  createElement('img', {src: imgSrc, id: `${name}-img`, class: 'nav-img'});
        const textEl = createElement('span', {innerHTML: title, class: 'nav-main-link-name'});
        const statusEl = createElement('small', {id: `${name}-status`, innerHTML: 'Disabled'});
        const buttonEl = createElement('a', {href:`javascript:${fName};`, id: `${name}-button`, class: 'nav-main-link nav-compact'}, [imgEl, textEl, statusEl]);
        const rootId = 'SEMI-menu-' + (isCombat ? 'combat' : 'skills');
        const mainEl = createElement('li', {title: desc, id: rootId + '-skill-' + name, class: 'nav-main-item SEMI-menu-button'}, [buttonEl]);
        return mainEl;
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
    * @param {string} name
    */
    const add = (name, options = {}) => {
        const defaults = {onLoop: () => {}, injectGUI: () => {}, onToggle: () => {}, onEnable: () => {}, onDisable: () => {}, ms: 1000, skill: '', statusId: `${name}-status`, title: '', desc: '', imgSrc: '', f: `SEMI.toggle('${name}')`, isCombat: false};
        const opts = {...defaults, ...options};
        opts.imgSrc = (opts.imgSrc === '' && opts.skill !== '') ? SEMI.skillImg(opts.skill) : opts.imgSrc;
        pluginNames.push(name);

        const addToMenu = () => {
            const plugin = plugins[name];
            if(plugin.imgSrc === '') { return; }
            let el = $('#SEMI-menu-skills-section-unsorted');
            if(plugin.isCombat) { el = $('#SEMI-menu-combat-section-unsorted'); }
            const pluginEl = makeMenuItem(plugin.desc, plugin.imgSrc, plugin.f, plugin.title, name, plugin.isCombat);
            el.append(pluginEl);
        };

        const disable = () => {
            const plugin = plugins[name];
            plugin.enabled = false;
            plugin.onDisable();
            console.log(`${name} Disabled!`);
            if(plugin.imgSrc !== '') { SEMI.customNotify(plugin.imgSrc, `${plugin.title} Disabled!`, 1000); }
            if(plugin.ms !== 0 && plugin.interval) {  clearInterval(plugin.interval); }
            plugin.updateStatus();
        };

        const enable = () => {
            const plugin = plugins[name];
            plugin.enabled = true;
            if(plugin.onEnable() === false) { console.log(`${plugin.title} failed to start!`); return false; };
            console.log(`${name} Enabled!`);
            if(plugin.skill !== '') { SEMI.changePage(plugin.skill); }
            if(plugin.imgSrc !== '') { SEMI.customNotify(plugin.imgSrc, `${plugin.title} Enabled!`, 1000); }
            if(plugin.ms !== 0) { plugin.interval = setInterval(plugin.onLoop, plugin.ms); }
            plugin.onLoop();
            plugin.updateStatus();
        };

        const toggle = () => {
            const plugin = plugins[name];
            plugin.enabled = !plugin.enabled;
            plugin.onToggle();
            plugin.updateStatus();
            if (plugin.enabled) { return plugin.enable(); }
            return plugin.disable();
        };

        const updateStatus = () => {
            setItem(`${name}-status`, plugins[name].enabled);
            if($(`#${name}-status`) !== null) { $(`#${name}-status`).text(plugins[name].enabled ? 'Enabled' : 'Disabled'); }
        };

        const injectGUI = () => {
            addToMenu();
            opts.injectGUI();
        };

        const useSaved = Boolean(getItem('remember-state'));
        const wasEnabled = Boolean(getItem(`${name}-status`));
        const enabled = wasEnabled && useSaved;
        if(enabled) {
            setTimeout(enable, 1000);
        }
        const plugin = {...opts, toggle, interval: null, enable, disable, updateStatus, injectGUI, enabled};
        plugins[name] = plugin;
    };

    /**
    * @param {string} name
    */
    const injectGUI = (name) => { plugins[name].injectGUI(); };

    /**
    * @param {string} name
    */
    const toggle = (name) => { plugins[name].toggle(); };
    /**
    * @param {string} name
    */
    const enable = (name) => { plugins[name].enable(); };
    /**
    * @param {string} name
    */
    const disable = (name) => { plugins[name].disable(); };
    /**
    * @param {string} name
    */
    const isEnabled = (name) => { if(name in plugins) { return plugins[name].enabled; } console.warn(`Attempted to check 'isEnabled' of ${name}`); };

    return {add, toggle, enable, disable, isEnabled, injectGUI, pluginNames, createElement, setItem, getItem, backupSEMI, restoreSEMI, utilsReady: false};
})();