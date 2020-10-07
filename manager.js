var Met = 0;
    var Mer = 75;
var Vt = 0;
    var Vr = 140;
var Mat = 0;
    var Mar = 300;
var Et = 0;
    var Er = 200;
    var mt = 0;
//var abt = 0;
    //var astBelt = $('#astBelt')
var Jt = 0;
    var Jr = 550;

var sunX = 100;
var sunY = 250;


//planetary orbit functions
function MercuryGo() {
    Met += 0.01;
    $('#MeRing').fadeIn(1000);
    $('#flatMercury').fadeIn(1000);
    var MenewLeft = Math.floor(sunX + (Mer * Math.cos(Met)));
    var MenewTop = Math.floor(sunY + (Mer * Math.sin(Met)));
    $('#flatMercury').animate({
        top: MenewTop,
        left: MenewLeft,
    }, 1, function() {
        MercuryGo();
    });
}

function VenusGo() {
    Vt += 0.005;
    $('#VRing').fadeIn(1000);
    $('#flatVenus').fadeIn(1000);
    var VnewLeft = Math.floor(sunX + (Vr * Math.cos(Vt)));
    var VnewTop = Math.floor(sunY + (Vr * Math.sin(Vt)));
    $('#flatVenus').animate({
        top: VnewTop,
        left: VnewLeft,
    }, 1, function() {
        VenusGo();
    });
}

function EarthGo() {
    Et += 0.005;
    $('#ERing').fadeIn(1000);
    $('#flatEarth').fadeIn(1000);
    var EcurrTop = parseInt($('#flatEarth').css("top"));
    var EcurrLeft = parseInt($('#flatEarth').css("left"));
    var EnewLeft = Math.floor(sunX + (Er * Math.cos(Et)));
    var EnewTop = Math.floor(sunY + (Er * Math.sin(Et)));
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

function MarsGo() {
    Mat += 0.00375;
    $('#MaRing').fadeIn(1000);
    $('#flatMars').fadeIn(1000);
    var ManewLeft = Math.floor(sunX + (Mar * Math.cos(Mat)));
    var ManewTop = Math.floor(sunY + (Mar * Math.sin(Mat)));
    $('#flatMars').animate({
        top: ManewTop,
        left: ManewLeft,
    }, 1, function() {
        MarsGo();
    });
}

function astGo() {
    //abt += 0.002;
    $('#astBelt').fadeIn(1000);
    //var abnewDeg = (getRotationDegrees(astBelt) + abt) + "deg";
    //console.log(abnewDeg);
    $('#astBelt').transition({
        rotate: '+=0.005'
    }, 1, function() {
        astGo();
    });
}

function JupiterGo() {
    Jt += 0.0021925;
    $('#JRing').fadeIn(1000);
    $('#flatJupiter').fadeIn(1000);
    var JnewLeft = Math.floor(sunX + (Jr * Math.cos(Jt)));
    var JnewTop = Math.floor(sunY + (Jr * Math.sin(Jt)));
    $('#flatJupiter').animate({
        top: JnewTop,
        left: JnewLeft,
    }, 1, function() {
        JupiterGo();
    });
}







//call function once page is ready
$(document).ready(function() {
    $('#flatSun').fadeIn(1000);
    setTimeout(MercuryGo, 500);
    setTimeout(VenusGo, 825);
    setTimeout(EarthGo, 1250);
    setTimeout(MarsGo, 1575);
    setTimeout(astGo, 1900);
    setTimeout(JupiterGo, 2225);
    
});