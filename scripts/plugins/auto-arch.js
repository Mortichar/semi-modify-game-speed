/* april fools!
function autoArch() {
    if (currentPage !== 20) changePage(20);
    let brush = document.createElement('img');
    brush.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAABVlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////LFJkRAAAAcHRSTlMAAQIDBAUGBwgJCgwNDxARFBUWFxgeHyEkJSYoKywtLi8yNDU2Ojw+RUxNU1tcZmtsbXR1eoSKi4yZnJ2goqeoqa+ytre4ub/AwsPIzc7P0dPU19jZ2tvc3d7f4OXn6+zt7vDx8vP09fb3+Pr7/P3+y6o2NAAAA4dJREFUeAHt2/9TG1UUBfDjgqUoMdCgpiltMXyhwShYBRXFaJpSTBW/IGCbBiNLN4kQe/7/n8xM0rBvd7MyL2/vm87k8xdcmJ3M7r3nQFtuyed9iFuk4jaklakoQ1qDilNIa1HRhDQGIEmZvcMiVAUGrEFVPNzLwIx0jV0bUFQY8B0UG+yqpTG66Sp7NuHnMsCF3yZ7qtMYjbPNgQeBZzDmKXzAgW0HI1ijXwZXOgzo4Eom/HRomWpScYGBOwyZx8AFFc0paMky6BivbTHkIV47ZlAWOpYZso8+jyEv0bfPkGXoyDNsB0Cu9MJjBK9eygHYYVgeOmYZYfeozRjto11GSEPLMxpyAD1rNGQFelI0JAVNT2nEU+haoBF3oesGjbgBbd/QgB3oe4cGzEKf0+HI/nWgz2lwZL+9hWvLLufT8JlwaYA7AZ90fjmLIabYdbCSQt+kSyPcSfS9V3jGrrcRrcmePxZuKn+/of/B9Ee/s6f+/z/9j+Ycx6UxndTkB4945R4iOFRcNpggB2HbFPQFQqYp6iaCqhRVRUCawlJQ1SisBkWG4jLw26O4PfgdUtwh/IoUV4Rig8I2ELBJUR8jZJ2CVhEhc0EhFzOIdkwRxxhqnwJ+RIwdJu4JYu0yYb8g3hETdoJ4bSbMQ6w8EzeHOCUm7kvEqTNxLxDHY+JeYaj5LY8Cmg/nEbJeOWt1KKbTPKsU0He7fNqiFa1GeRHI0aoclmjVkv0BxgOMBxgPMB5gPMAcrcoB96t//0MrWqflRfR98lj2haTlVgoImf/8nAK8rTsY6pKJ82y/ltcR53smroQ4WSYuD7tfJm3EO7H9eV5lwsqCCxKNS+4+aW9JZH9NN3NOIecziLBqeVVbkF9W21/X2z9Y2D/Z2D9a2T/b2T9c2j/d2j9e2z/fWw8wCEQ4GpdUOIhwP7kQi+s4t37glXtWYjxTd39mTz0uyPQ8ySBTauVADTKFo1yzwlEugTBbw7Ec5+s49gON9iOd9kOtdmO9C3hTg83Wo90rtsPtz2nIr9CSZoTySZsxvD+fMELaaMUjX6p7jPCq/vUtAN8yLC9RcmkaL7nYrvmEi07nmkWnl+8aqnrNXLfq9SH91k2V3VavX3Zb58D2hKm6XxF+Zww4g99nat1PovBYgeIrdtVSgpXPAlSf8qcMksQA27XfFqT9RUUD0h5TUbZffhc3Z6b+/x+23mUFpRRI3wAAAABJRU5ErkJggg==";
    let count = 0;
    let county = 0;
    var offsetx;
    var offsety;
    var ctx = $(".sc__canvas")[0].getContext('2d');
    for (i=0; i<9; i++) { 
        setTimeout( () => {
            var offset = $(".sc__canvas").offset();
            offsetx = offset["top"];
            offsety = offset["left"];
            
            $(".sc__canvas")[0].getContext('2d').globalCompositeOperation = 'destination-out';
            if (count>2) {county = 1;}
            if (count>5) {county = 2;}
            $(".sc__canvas")[0].getContext('2d').drawImage(brush, 5 + (100*(count % 3)), 5 + (100*county));
            if (count == 3) { 
                ctx.font = "50px Arial";
                ctx.fillText("69 69 69 69", 69, 222); 
            }
            if (count == 8) { 
                setTimeout( () => {
                    var targetNode = $(".sc__canvas")[0];
                    if (targetNode) {
                        //--- Simulate a natural mouse-click sequence.
                        triggerMouseEvent (targetNode, "mouseover");
                        triggerMouseEvent (targetNode, "mousedown");
                        triggerMouseEvent (targetNode, "mousemove"); //aw: added for this, needs movement too
                        triggerMouseEvent (targetNode, "mouseup");
                        triggerMouseEvent (targetNode, "click");
                    }
                    else console.log ("*** Target node not found!");
                    
                    function triggerMouseEvent (node, eventType) {
                        var clickEvent = document.createEvent ('MouseEvents');
                        clickEvent.initEvent (eventType, true, true);
                        node.dispatchEvent (clickEvent);
                    }
                }, 100);
            }
            count++;
        }, 100*i);
    }
}

var autoArchOn = false;
var autoArchLoop;
function toggleAutoArch() {
    autoArchOn = !autoArchOn;
    $("#autoArchStatus").text( (autoArchOn) ? 'Enabled' : 'Disabled' );
    if (autoArchOn) {
        autoArch();
        autoArchLoop = setInterval( () => { autoArch() }, 3000);
    } else { clearInterval (autoArchLoop); }
    
}
*/