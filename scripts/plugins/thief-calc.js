//:: Scavenging the Thieving calculator from Melvor Idle Helper by RedSparr0w on GitLab: https://github.com/RedSparr0w/Melvor-Idle-Helper
setTimeout( () => { //setup thieving calcs after 10sec, plenty delay for page load... should it be interval or timeout? timeout works fine, no need to repeat.
    thievingCalc();
    $('.js-popover').popover({ // Enable the popovers
        container: 'body',
        animation: false,
        trigger: 'hover focus',
    }); 
}, 10000); //give it a nice long time to load. this one can throw errors.
//Consider moving this to SEMIsetup.

const addCalcToEl = (el, data = []) => {
    if (!el || !el.appendChild) return;    
    const helper_container = document.createElement('div'); // create our helper elements
    helper_container.className = 'font-size-sm font-w600 text-right text-uppercase text-muted';
    helper_container.style = 'position: absolute; right: 6px; top: 8px;';
    data.forEach((dat, i)=>{
        // Add line break if not first element
        if (i > 0) helper_container.appendChild(document.createElement('br'));
        const el = document.createElement('small');
        el.innerText = dat;
        helper_container.appendChild(el);
    });
    el.classList.add('ribbon', 'ribbon-light', 'ribbon-bookmark', 'ribbon-left'); // Needs these classes for the text to show correctly
    el.appendChild(helper_container);
}

const thievingCalc = () => { //this is freshhh - Thieving Calc & Item Popup! SO Handy!
    const seconds = baseThievingInterval / 1000; // Always takes the same amount of time
    thievingNPC.forEach((npc, id) => {
        const xp_ps = +(npc.xp / seconds).toFixed(1);
        // Get the loottable text
        let popoutText = [`<img src='assets/media/main/coins.svg' height='20px'> ${npc.maxCoins} coins (max)`];
        const totalWeight = npc.lootTable.reduce((a,b)=>a + b[1], 0);
        npc.lootTable.forEach(loot => {
            const item = items[loot[0]];
            popoutText.push(`<img src='${item.media}' height='20px'> ${item.name} - ${((loot[1] / totalWeight) * 100).toFixed(1)}%`);
        });
        const npc_el = document.getElementById(`thieving-npc-${id}`).getElementsByClassName('block-content')[0];
        addCalcToEl(npc_el, [xp_ps + ' XP/s']); // Add the xp/s amounts
        npc_el.classList.add('js-popover'); // Add the popovers for the loot
        const npc_el_data = npc_el.dataset;
        npc_el_data.toggle = 'popover';
        npc_el_data.html = 'true';
        npc_el_data.placement = 'bottom';
        npc_el_data.content = popoutText.join('<br/>');
    });
}
//:: end of import of scraps from Melvor Idle Helper
