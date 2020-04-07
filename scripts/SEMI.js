// Scripting Engine for Melvor Idle v0.3.3 by aldousWatts on GitLab | Built for Melvor Idle alpha v0.14.1
// Currently developing on Waterfox 2020.02 KDE Plasma Edition (56.3) and Latest Ubuntu & Android Firefox.
// As always, use and modify at your own risk. But hey, contribute and share!
// This code is open source and shared freely under MPL/GNUv3/creative commons licenses.

//Injecting Script... updated to work better with web-ext inspired by CoolRox95

var isChrome = navigator.userAgent.match("Chrome");
var isFirefox = navigator.userAgent.match("Firefox");

var getURL = (name) => (isChrome ? chrome : browser).runtime.getURL(name)

// Check if script already exists, if so delete it
function removeIfExists(scriptID) {
    const el = document.getElementById(scriptID);
    if (document.contains(el)) { el.remove(); }
};

// Inject script
function addScript(name, scriptID) {
    const script = document.createElement('script');
    script.src = getURL(name);
    script.setAttribute('id', scriptID);
    document.body.appendChild(script);
    return script;
}

function removeAndAddScript(name, scriptID) {
    removeIfExists(scriptID);
    addScript(name, scriptID);
}

function addPlugin(name) { removeAndAddScript(`scripts/plugins/${name}.js`, `SEMI-${name}`) }

// Create image element
function createImage(name, imgId, height = 32, width = 32) {
    const img = document.createElement('img');
    img.src = getURL(name);
    img.id = imgId;
    img.height = height;
    img.width = width;
    return img;
}

var autoNames = ['arch', 'bonfire', 'combat', 'cook', 'eat', 'fish', 'loot', 'mine', 'replant', 'sell-gems', 'slayer', 'smith'];
var pluginNames = ['menus', ...autoNames.map((name) => `auto-${name}`), 'barf', 'calc-to-level', 'destroy-crops', 'katorone','thief-calc', 'xp-per-hour'];


function main() {
    // Only support firefox and chrome
    if(!isChrome && !isFirefox) {
        alert("SEMI is only officially supported on Firefox and Chrome. To try on another browser, you must modify the main() function in SEMI.js. The addon will not load otherwise.");
        return;
    }

    pluginNames.forEach(addPlugin);
    removeAndAddScript('scripts/utils.js', 'semi-inject-utils');

    // not sure how to get the icon otherwise. need to leave the heading addition here, could probably just copy the rest to a big injection.
    if (document.contains(document.getElementById('modal-semi-set-menu')) ) { return; }
    const navbar = document.getElementsByClassName("nav-main")[0];
    const clnheading = document.getElementsByClassName("nav-main-heading")[1].cloneNode(true); // //in MIv0.13 pulls up the main nav version header. used to use two lines, used to be heading then clnheading
    navbar.appendChild(clnheading);
    clnheading.style = "font-size: 12pt; color: gold;";
    clnheading.childNodes[0].textContent = " SEMI v0.3.3";
    clnheading.title = "Scripting Engine for Melvor Idle";
    clnheading.id = "semiHeading";
    const iconImg = createImage("icons/border-48.png", 'iconImg');
    clnheading.insertBefore(iconImg, clnheading.childNodes[0]);
}

main();
//And everything else is probably easiest with jquery in inject.js. Whee!
