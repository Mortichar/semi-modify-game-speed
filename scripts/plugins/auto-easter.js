//source: https://discordapp.com/channels/625838709203271680/664637399028072470/698012931379691620
var lazy = function()
{
    if(currentPage != 21)
    {
        window.clearInterval(lazyInterval)
        return
    }
    if(death)
    {
        lazyI = 0
        jump()
        return
    }

    if(birdY > height - 158) jump() // prevents us from crashing into the ground
    v = width - dist + lazyI * 220
    if(v < 160) lazyI++
    if(birdY > pipes[lazyI] + 110) jump()
    if(lazyI>499) jump()
}

var lazyInterval;
var lazying = false;
function toggleLazy() {
    lazying = !lazying;
    $("#lazy-status").text( (lazying) ? 'Enabled' : 'Disabled');
    if (lazying) { lazyInterval = setInterval( () => { lazy() }, 10); }
    else { clearInterval(lazyInterval) }
}