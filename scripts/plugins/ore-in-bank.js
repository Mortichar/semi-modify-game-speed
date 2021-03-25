// Leave it in its own scope.
(function () {
    /**
		Information:
		Name: Show ore Amount in Mining Tab
		Description: Shows the amount of ore in the bank over the image of the ore
		Game: melvoridle.com
		Game Version: v0.15.3

		Used Game variables:
			miningData (array[Object])
			items (array[Object])
		Used Game functions:
			formatNumber(number) (function(number))

		@version 1.2.1
		Changelog:
			1.0: First version
			1.1: Changed how the functions are overwritten, the new way should work even if the functions are changed.
			1.2: Format the number using the Games formatNumber function.
			1.2.1: Changed to fit SEMI, removing overwritten functions. Timer style. Simpler. Added ability to hide/unhide. SEMI integration.
		@date 2020.06.25
		@author Aurora
	*/

    // Variables
    const name = 'ore-in-bank';
    const title = 'Show Ore in Bank';
    const desc =
        'Shows the amount of ore you have in the bank on the Mining page on each of the ore/rock buttons. WARNING: Redundant with ETA.';
    const imgSrc = 'assets/media/bank/ore_dragonite.svg';

    const GUI = {
        className: 'SEMI-ore-amount',
        idName: 'SEMI-ore-amount-',
        prefix: 'You have: ',
    };
    // Functions

    /**
		Injects HTML into the mining page to show the current Amount of Ore in bank, if it finds it already injected it doesn't attempt to inject it again.
		Calls updateOreAmount() to finish.
	*/
    function injectOreAmount() {
        let len = miningData.length;
        for (let i = 0; i < len; i++) {
            let rock = miningData[i];
            let image = '';
            if (rock !== undefined) {
                let item = items[rock.ore];
                image = `<img src="${item.media}" data-toggle="tooltip" data-placement="top" data-original-title="${item.name}" class="skill-icon-xs mr-2 js-tooltip-enabled"></img>`;
            }
            if (document.getElementById(`${GUI.idName}${i}`) === null) {
                $('#mining-rates-' + i).after(
                    `<span class="${GUI.className}"><br><small id="${GUI.idName}${i}">${GUI.prefix}</small>${image}</span>`
                );
            }
        }
        // Update Ore amount once
        updateOreAmount();
    }

    /**
		Updates the Amount of Ore in bank shown in the Mining tab.
	*/
    function updateOreAmount() {
        let len = miningData.length;
        for (let i = 0; i < len; i++) {
            let elementToChange = document.getElementById(`${GUI.idName}${i}`);
            if (elementToChange !== null) {
                // Changing inner html
                $(`#${GUI.idName}${i}`).text(`${GUI.prefix}${formatNumber(SEMIUtils.getBankQty(miningData[i].ore))}`);
            }
        }
    }

    /**
     * 	Adds a class to all spans with the given class name if they do not have that class yet, removes the class if they do have it.
     *  The class should hide the element.
     */
    function toggleOreAmount() {
        $(`.${GUI.className}`).toggleClass('d-none');
    }

    // Add to SEMI
    SEMI.add(name, {
        onLoop: updateOreAmount,
        onEnable: injectOreAmount,
        onToggle: toggleOreAmount,
        title,
        desc,
        imgSrc,
        pluginType: SEMI.PLUGIN_TYPE.TWEAK,
        skill: 'Mining',
    });
})();
