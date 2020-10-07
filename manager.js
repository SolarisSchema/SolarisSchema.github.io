var Et = 0;
var mt = 0;
var timedEntry = "";


function EarthGo() {
    Et += 0.005;
    $('#flatEarth').fadeIn(1000);
    var Er = 200;
    var Excenter = 100;
    var Eycenter = 250;
    var EcurrTop = parseInt($('#flatEarth').css("top"));
    var EcurrLeft = parseInt($('#flatEarth').css("left"));
    var EnewLeft = Math.floor(Excenter + (Er * Math.cos(Et)));
    var EnewTop = Math.floor(Eycenter + (Er * Math.sin(Et)));
    $('#flatEarth').animate({
        top: EnewTop,
        left: EnewLeft,
    }, 1, function() {
        
        MoonGo(EcurrLeft, EcurrTop, EnewLeft, EnewTop);
    });

    function MoonGo(x1, y1, x2, y2) {
        var xcenter = ((x2 + x1) / 2) + 7;
        var ycenter = ((y2 + y1) / 2) + 7;
        mt += 0.5
        $('#flatMoon').fadeIn(1000);
        var mr = 20;
        var newLeft = Math.floor(xcenter + (mr * Math.cos(mt)));
        var newTop = Math.floor(ycenter + (mr * Math.sin(mt)));
        $('#flatMoon').animate({
            top: newTop,
            left: newLeft,
        }, 1, function() {
            EarthGo();
        });
    }
}









//call function once page is ready
$(document).ready(function() {
    $('#flatSun').fadeIn(1000);
    timedEntry = setTimeout(EarthGo, 1250);
    
});