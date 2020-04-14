const SEMI = {
    plugins: {},
    add: (name, options = {}) => {
        const defaults = {onLoop: () => {}, onToggle: () => {}, onEnable: () => {}, onDisable: () => {}, ms: 1000, id: ''};
        const optionsWithDefaults = {...defaults, ...options};
        const {id, ms} = optionsWithDefaults;
        const disable = () => {
            SEMI.plugins[name].enabled = false;
            optionsWithDefaults.onDisable();
            setTimeout(function() { console.log(`${name} Disabled!`);  }, 100);
            if(ms !== 0) {  clearInterval(SEMI.plugins[name].interval); }
        }

        const enable = () => {
            SEMI.plugins[name].enabled = true;
            optionsWithDefaults.onEnable();
            setTimeout(function() { console.log(`${name} Enabled!`);  }, 100);
            if(ms !== 0) { SEMI.plugins[name].interval = setInterval(optionsWithDefaults.onLoop, optionsWithDefaults.ms); }
        }

        const toggle = () => {
            SEMI.plugins[name].enabled = !SEMI.plugins[name].enabled;
            optionsWithDefaults.onToggle();
            if(id !== '' && $(`#${id}`) !== null) { $(`#${id}`).text(SEMI.plugins[name].enabled ? 'Enabled' : 'Disabled'); }

            if (SEMI.plugins[name].enabled) { return SEMI.plugins[name].enable(); }
            return SEMI.plugins[name].disable();
        }
        const plugin = {enabled: false, ...optionsWithDefaults, toggle, interval: null, enable, disable};
        SEMI.plugins[name] = plugin;
    },
    toggle: (name) => { SEMI.plugins[name].toggle(); },
    enable: (name) => { SEMI.plugins[name].enable(); },
    disable: (name) => { SEMI.plugins[name].disable(); },
    isEnabled: (name) => SEMI.plugins[name].enabled,
}
