// ==UserScript==
// @name        Melvor Idle - Mastery Enhancements
// @description Colors buttons to spend pool xp depending on current xp and adds progress bars for pools to skills in the menu
// @version     1.1
// @namespace   Visua
// @match       https://melvoridle.com/*
// @match       https://www.melvoridle.com/*
// @grant       none
// ==/UserScript==
/* jshint esversion: 6 */

// Code by Acrone#1563, Aurora Aquir#4272, Breindahl#2660, NotCorgan#1234 and Visua#9999

// ((main) => {
//     var script = document.createElement('script');
//     script.textContent = `try { (${main})(); } catch (e) { console.log(e); }`;
//     document.body.appendChild(script).parentNode.removeChild(script);
// })

// slightly modified for SEMI
(() => {
    if (SEMI.getItem('etc-GUI-toggles') !== null) {
        const toggle = SEMI.getItem('etc-GUI-toggles').masteryEnhancements;
        if (toggle !== undefined && !toggle) return;
    }
    ('use strict');

    function addProgressBars() {
        setInterval(() => {
            for (const id in SKILLS) {
                if (SKILLS[id].hasMastery) {
                    if ($(`#skill-nav-mastery-${id} .progress-bar`)[0]) {
                        $(`#skill-nav-mastery-${id} .progress-bar`)[0].style.width =
                            (MASTERY[id].pool / getMasteryPoolTotalXP(id)) * 100 + '%';
                        const tip = $(`#skill-nav-mastery-${id}`)[0]._tippy;
                        tip.setContent(((MASTERY[id].pool / getMasteryPoolTotalXP(id)) * 100).toFixed(2) + '%');
                    } else {
                        const skillItem = $(`.skill-nav-name-${id}`)[0].parentNode;
                        skillItem.style.flexWrap = 'wrap';
                        skillItem.style.setProperty('padding-top', '.25rem', 'important');
                        const progress = document.createElement('div');
                        const progressBar = document.createElement('div');
                        progress.id = `skill-nav-mastery-${id}`;
                        progress.className = 'progress active pointer-enabled';
                        progress.style.height = '6px';
                        progress.style.width = '100%';
                        progress.style.margin = '.25rem 0rem';
                        progress.style.setProperty('background', 'rgb(76,80,84)', 'important');
                        progressBar.className = 'progress-bar bg-warning';
                        progressBar.style.width = (MASTERY[id].pool / getMasteryPoolTotalXP(id)) * 100 + '%';
                        progress.appendChild(progressBar);
                        skillItem.appendChild(progress);
                        tippy($(`#skill-nav-mastery-${id}`)[0], {
                            placement: 'right',
                            content: ((MASTERY[id].pool / getMasteryPoolTotalXP(id)) * 100).toFixed(2) + '%',
                        });
                    }
                }
            }
        }, 10000);
    }

    function loadScript() {
        console.log(typeof confirmedLoaded);
        console.log(confirmedLoaded);
        console.log(!currentlyCatchingUp);
        if (typeof confirmedLoaded !== 'undefined' && confirmedLoaded && !currentlyCatchingUp) {
            clearInterval(interval);
            console.log('Loading Mastery Enhancements');
            addProgressBars();
        }
    }

    const interval = setInterval(loadScript, 500);
})();
