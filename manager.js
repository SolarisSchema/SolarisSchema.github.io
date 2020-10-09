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
var St = 0;
    var Sr = 725;
var Ut = 0;
    var Ur = 875;
var Nt = 0;
    var Nr = 1025;

var sunX = 100;
var sunY = 250;

//panel buttons
var sunBtn = $("#sunPanel");


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

function SaturnGo() {
    St += 0.001625;
    $('#SRing').fadeIn(1000);
    $('#flatSaturn').fadeIn(1000);
    var SnewLeft = Math.floor(sunX + (Sr * Math.cos(St)));
    var SnewTop = Math.floor(sunY + (Sr * Math.sin(St)));
    $('#flatSaturn').animate({
        top: SnewTop,
        left: SnewLeft,
    }, 1, function() {
        SaturnGo();
    });
}

function UranusGo() {
    Ut += 0.00114286;
    $('#URing').fadeIn(1000);
    $('#flatUranus').fadeIn(1000);
    var UnewLeft = Math.floor(sunX + (Ur * Math.cos(Ut)));
    var UnewTop = Math.floor(sunY + (Ur * Math.sin(Ut)));
    $('#flatUranus').animate({
        top: UnewTop,
        left: UnewLeft,
    }, 1, function() {
        UranusGo();
    });
}

function NeptuneGo() {
    Nt += 0.00091186;
    $('#NRing').fadeIn(1000);
    $('#flatNeptune').fadeIn(1000);
    var NnewLeft = Math.floor(sunX + (Nr * Math.cos(Nt)));
    var NnewTop = Math.floor(sunY + (Nr * Math.sin(Nt)));
    $('#flatNeptune').animate({
        top: NnewTop,
        left: NnewLeft,
    }, 1, function() {
        NeptuneGo();
    });
}

//panel functions

//sun panel hover button
function mouseOverBtn1() {
    var currW = parseInt($('#flatSun').css('width'));
    var currH = parseInt($('#flatSun').css('height'));
    var newW = currW + 10 + 'px';
    var newH = currH + 10 + 'px';
    var currL = parseInt($('#flatSun').css('left'));
    var currT = parseInt($('#flatSun').css('top'));
    var newL = currL - 5 + 'px';
    var newT = currT - 5 + 'px';
    $('#flatSun').animate({
        width: newW,
        height: newH,
        left: newL,
        top: newT,
    }, 1, function() {
    });
}

function mouseLeaveBtn1() {
    var currW = parseInt($('#flatSun').css('width'));
    var currH = parseInt($('#flatSun').css('height'));
    var newW = currW - 10 + 'px';
    var newH = currH - 10 + 'px';
    var currL = parseInt($('#flatSun').css('left'));
    var currT = parseInt($('#flatSun').css('top'));
    var newL = currL + 5 + 'px';
    var newT = currT + 5 + 'px';
    $('#flatSun').animate({
        width: newW,
        height: newH,
        left: newL,
        top: newT,
    }, 1, function() {
    });
}

function page1Start() {
    $("#sunPanel").hover(mouseOverBtn1, mouseLeaveBtn1);

    $('#flatSun').fadeIn(1000);
    setTimeout(MercuryGo, 500);
    setTimeout(VenusGo, 825);
    setTimeout(EarthGo, 1250);
    setTimeout(MarsGo, 1575);
    setTimeout(astGo, 1900);
    setTimeout(JupiterGo, 2225);
    setTimeout(SaturnGo, 2550);
    setTimeout(UranusGo, 2875);
    setTimeout(NeptuneGo, 3200);
    setTimeout(function () {
        $('#startingPanels').fadeIn(1500);
    }, 3500);
}

function statPage(body) {
    $('.page1').fadeOut(1000);
    var Moons = body.moons;
    var Dia = body.diameter;
    var Mass = body.mass;
    var Orbit = body.orbit;
    var SArea = body.surfaceArea;
    var Dist = body.distance;
    var Img = body.img;
    //debug check
    //console.log(Moons + ", " + Dia + ", " + Mass + ", " + Orbit + ", " + SArea + ", " + Dist);
    $('<img src="images/' + Img + '" type="image/png" id="bodyImage">').appendTo("body").fadeIn(1000);
    $('<div id="statsDiv"></div>').appendTo("body").fadeIn(1000);
    $('<p id="inputStats1"><b>' + Moons + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="inputStats2"><b>' + Dia + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="inputStats3"><b>' + Mass + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="inputStats4"><b>' + Orbit + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="inputStats5"><b>' + SArea + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="inputStats6"><b>' + Dist + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="labelText1"><b>MOONS:</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="labelText2"><b>DIAMETER:</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="labelText3"><b>MASS:</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="labelText4"><b>ORBITAL PERIOD:</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="labelText5"><b>SURFACE AREA:</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<p id="labelText6"><b>DISTANCE FROM SUN:</b></p>').appendTo("#statsDiv").fadeIn(1000);
    $('<a href="https://solarisschema.github.io" id="returnLink">&gt RETURN TO OVERVIEW &lt</a>').appendTo("#statsDiv").fadeIn(1000);
}




//call function once page is ready
$(document).ready(function() {
    page1Start();
});