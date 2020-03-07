// Scripting Engine for Melvor Idle v0.2.3 by aldousWatts on GitLab | Built for Melvor Idle alpha v0.13
// Currently developing on Waterfox 2020.02 KDE Plasma Edition (56.3). I'm guessing it's roughly equivalent to slightly-old firefox, probably v56.3.
// As always, use and modify at your own risk. But hey, contribute and share!
// This code is open source and shared freely under MPL/GNUv3/creative commons licenses.
    
//Injecting Script
var script = document.createElement('script');
if(navigator.userAgent.match("Chrome")){
    script.src = chrome.runtime.getURL("inject.js");
} else if(navigator.userAgent.match("Firefox")){
    script.src = browser.runtime.getURL("inject.js");
}
document.body.appendChild(script); //appending to body because that's where all the other page scripts are at. head's probably ok too

// not sure how to get the icon otherwise. need to leave the heading addition here, could probably just copy the rest to a big injection.
const navbar = document.getElementsByClassName("nav-main")[0];
const clnheading = document.getElementsByClassName("nav-main-heading")[1].cloneNode(true); // //in MIv0.12.2 pulls up the main nav version header. used to use two lines, used to be heading then clnheading
navbar.appendChild(clnheading); 
clnheading.style = "font-size: 12pt; color: gold;";
clnheading.childNodes[0].textContent = " SEMI v0.2.3";
clnheading.title = "Scripting Engine for Melvor Idle";
clnheading.id = "semiHeading";
const iconImg = document.createElement('img');
if(navigator.userAgent.match("Chrome")){
    iconImg.src = chrome.runtime.getURL("icons/border-48.png");
} else if(navigator.userAgent.match("Firefox")){
	iconImg.src = browser.runtime.getURL("icons/border-48.png");
} 
iconImg.height = 32;
iconImg.width = 32;
iconImg.id = "iconImg";
clnheading.insertBefore(iconImg, clnheading.childNodes[0]);

//And everything else is probably easiest with jquery in inject.js. Whee!
