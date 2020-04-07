//:: simply rewritten autoBonfire by Dream below
function autoBonfire() { if ( $.trim($('#skill-fm-bonfire-status').text()) == 'Inactive') lightBonfire(); } //really
//:: end autoBonfire, adding Auto-Bonfire tog, * button included in setupSEMI() *
var autoBonOn = false;
var bonLoop;
function toggleAutoBonfire() {
    autoBonOn = !autoBonOn;
    $("#auto-bonfire-button-status").text( (autoBonOn) ? 'Enabled' : 'Disabled');
    $("#auto-bonfire-button-status").css('color', (autoBonOn) ? 'red' : '');
    if (autoBonOn) { 
        bonLoop = setInterval( () => { autoBonfire(); }, 500);
        changePage(8);
        customNotify('assets/media/skills/firemaking/bonfire_active.svg','AutoBonfire initiated. Select your Logs to begin.', 5000);
    } else { clearInterval(bonLoop); }
}