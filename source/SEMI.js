// Scripting Engine for Melvor Idle v0.3.2 by aldousWatts on GitLab | Built for Melvor Idle alpha v0.13
// Currently developing on Waterfox 2020.02 KDE Plasma Edition (56.3) and Latest Ubuntu & Android Firefox.
// As always, use and modify at your own risk. But hey, contribute and share!
// This code is open source and shared freely under MPL/GNUv3/creative commons licenses.

//Injecting Script... updated to work better with web-ext inspired by CoolRox95

var isChrome = navigator.userAgent.match("Chrome");
var isFirefox = navigator.userAgent.match("Firefox");

var runtime = (isChrome ? chrome : browser).runtime

// Check if script already exists, if so delete it
function removeIfExists(scriptID) {
    const el = document.getElementById(scriptID);
    if (document.contains(el)) { el.remove(); }
};

// Inject script
function addScript(name, scriptID) {
    const script = document.createElement('script');
    script.src = runtime.getURL(name);
    script.setAttribute('id', scriptID);
    document.body.appendChild(script);
    return script;
}

// Create image element
function createImage(name, imgId, height = 32, width = 32) {
    const img = document.createElement('img');
    img.src = runtime.getURL(name);
    img.id = imgId;
    img.height = height;
    img.width = width;
    return img;
}

function main() {
    // Only support firefox and chrome
    if(!isChrome && !isFirefox) { 
        return; 
        alert("SEMI is only officially supported on Firefox and Chrome. To try on another browser, delete lines 39-42 of the main() function in SEMI.js. The addon will not load otherwise."
    } 
    
    const scriptID = 'inject-semi';
    removeIfExists(scriptID);
    addScript('inject.js', 'inject-semi');

    // not sure how to get the icon otherwise. need to leave the heading addition here, could probably just copy the rest to a big injection.
    if (document.contains(document.getElementById('modal-semi-set-menu')) ) { return; }
    const navbar = document.getElementsByClassName("nav-main")[0];
    const clnheading = document.getElementsByClassName("nav-main-heading")[1].cloneNode(true); // //in MIv0.13 pulls up the main nav version header. used to use two lines, used to be heading then clnheading
    navbar.appendChild(clnheading);
    clnheading.style = "font-size: 12pt; color: gold;";
    clnheading.childNodes[0].textContent = " SEMI v0.3.2";
    clnheading.title = "Scripting Engine for Melvor Idle";
    clnheading.id = "semiHeading";
    const iconImg = createImage("icons/border-48.png", 'iconImg');
    clnheading.insertBefore(iconImg, clnheading.childNodes[0]);
}

main();
//And everything else is probably easiest with jquery in inject.js. Whee!
