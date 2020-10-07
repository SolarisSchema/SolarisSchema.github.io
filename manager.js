var t = 0;

function EarthGo() {
    t += 0.005;
    $('#flatEarth').fadeIn(1000);
    var r = 100;
    var xcenter = 100;
    var ycenter = 100;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));
    $('#flatEarth').animate({
        top: newTop,
        left: newLeft,
    }, 1, function() {
        EarthGo();
    });
}









//call function once page is ready
$(document).ready(function() {
    EarthGo();
});