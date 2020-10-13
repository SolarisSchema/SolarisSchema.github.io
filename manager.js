var panelT = 0;
var shown = false;
var load = false;
var loadFact = false
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
    shown = false;
    load = false;
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
        $('#startingPanels').fadeIn(100);
        setTimeout(panelZoom, 100);
    }, 3500);
    setTimeout(function () {
        $("#flatSun").prepend('#solarOverview').fadeIn(1000);
    }, 325);
}

function panelZoom() {
    var zoom = parseInt($('#startingPanels').css('width'));
    console.log(zoom)
    $('#startingPanels').css({left: "100%"})
    .transition({
        x: -zoom}, 500, 'ease'
    );
}

function statPage(body, orbtBody) {
    if (shown == false) {
        $('.page1').fadeOut(1000);
        $('.page2').fadeOut(1000);
        $('.btn').remove();
        $('.btn2').remove();
        shown = true;
    } else {
        return;
    }
    $('<div class="btn3" id="infoSub" onclick="panelGen(\'info\')"></div>').appendTo('body');
    $('<p class="btn3 btnTxt" id="infoText"><b>&gt INFO &lt</b></p>').appendTo('#infoSub');
    var Moons = body.moons;
    var Dia = body.diameter;
    var Mass = body.mass;
    var Orbit = body.orbit;
    var SArea = body.surfaceArea;
    var Dist = body.distance;
    var Img = body.img;
    var Hrings = body.Hrings;
    var distFrom = orbtBody;
    var hstSpltChk = "";
    var funFact = body.FunFact;
    //debug check
    console.log(body + ", " + orbtBody);
    //console.log(Moons + ", " + Dia + ", " + Mass + ", " + Orbit + ", " + SArea + ", " + Dist);
    setTimeout(function () {
        if (Hrings == true ) {
            $('<img class="statPage" src="images/' + Img + '" type="image/png" id="bodyImage" style="left:0%; height:60%; top:20%">').appendTo("body").fadeIn(1000);
        } else {
            $('<img class="statPage" src="images/' + Img + '" type="image/png" onError="this.onerror=null;this.src=\'images/notAvail.png\';" id="bodyImage" style="left:15%; height:80%; top:10%">').appendTo("body").fadeIn(1000);
        }
        $('<div class="statPage" id="statsDiv"></div>').appendTo("body").fadeIn(1000);
        $('<p class="statPage" id="inputStats1"><b>' + Moons + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="inputStats2"><b>' + Dia + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="inputStats3"><b>' + Mass + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="inputStats4"><b>' + Orbit + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="inputStats5"><b>' + SArea + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="inputStats6"><b>' + Dist + '</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="labelText1"><b>MOONS:</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="labelText2"><b>DIAMETER:</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="labelText3"><b>MASS:</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="labelText4"><b>ORBITAL PERIOD:</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('<p class="statPage" id="labelText5"><b>SURFACE AREA:</b></p>').appendTo("#statsDiv").fadeIn(1000);
        $('.btn3').fadeIn(1000);
        $('<div class="btn4" id="factSub" onclick="addFact(' + funFact + ')"></div>').appendTo('body');
        $('<p class="btn4 btnTxt" id="factText"><b>&gt GENERATE A FACT &lt</b></p>').appendTo('#factSub');
        if (distFrom.indexOf(' ') >= 0) {
            console.log("true")
            hstSpltChk = orbtBody.split(" ");
            $('<p class="statPage" id="labelText6"><b>DISTANCE FROM ' + hstSpltChk[0] + '</br>' + hstSpltChk[1] + ':</b></p>').appendTo("#statsDiv").fadeIn(1000);
        } else {
            $('<p class="statPage" id="labelText6"><b>DISTANCE FROM ' + distFrom + ':</b></p>').appendTo("#statsDiv").fadeIn(1000);
        }
        $('<a class="statPage" href="https://solarisschema.github.io" id="returnLink">&gt RETURN TO OVERVIEW &lt</a>').appendTo("#statsDiv").fadeIn(1000);
        $('<div class="statPage" id="textShift"></div>').prependTo("#statsDiv").fadeIn(1000);
    }, 1500);
}

function addFact(list) {
    console.log(list)
    if (shown == true) {
        if (loadFact == true) {
            $('#fact').remove()
            loadFact = false;
        } 
        var currFact = list[Math.floor(Math.random() * list.length)];
        $('<p class="statPage" id="fact" style="color: rgb(237, 229, 187); position: absolute; font-family: 'Dosis', sans-serif; left:10%; top:40%; padding:2%;"><b>' + currFact + '</b></p>').appendTo('#statsDiv').fadeIn(1000);
    } else {
        return;
    }
}

function panelGen(topic, host) {
    console.log(topic, host);
    var list = 0;
    var listTop = 5;
    var key = '';
    if (topic == 'planet' && shown == false) {
        $('.btn').remove();
        $('.page2').remove();
        list = Object.keys(dataSet.planets);
        key = 'dataSet.planets';
    
        $('<div class="page2" id="dropDown" style="z-index:-1; display:none;"></div>').appendTo("body").fadeIn(500);
        for(let i = 0; i < list.length; i++){ 
            var currBody = list[i];
            var currHost = "'SUN'"
            listTop += 7 * i;
            //console.log("'" + currBody + ", " + list[i] + "'");

            $('<p class="page2 dropText" id="' + list[i] + '" onclick="statPage(' + key + '.' + currBody + ', ' + currHost + ')" style="z-index:-1; display:none; top:' + listTop + '%"><b>' + list[i] + '</b></p>').appendTo("#dropDown").fadeIn(750);
            $("#" + list[i] + "").hover(function() {$(this).css({color:'rgb(147, 207, 225)'});},function() {$(this).css({color:'rgb(237, 229, 187)'});});
            console.log(key + '.' + currBody);
        }
    } else if (topic == 'moon' && shown == false) {
        $('.btn').remove();
        $('.page2').remove();
        list = Object.keys(dataSet.moons);
        key = 'moon2';
    
        $('<div class="page2" id="dropDown" style="z-index:-1; display:none;"></div>').appendTo("body").fadeIn(500);
        for(let i = 0; i < list.length; i++){ 
            var currBody = list[i];
            listTop += 7 * i;
            //console.log("'" + currBody + ", " + list[i] + "'");

            $('<p class="page2 dropText" id="' + list[i] + '" onclick="panelGen(\'moon2\', \'' + currBody + '\')" style="z-index:-1; display:none; top:' + listTop + '%"><b>' + list[i] + '</b></p>').appendTo("#dropDown").fadeIn(750);
            $(".dropText").hover(function() {$(this).css({color:'rgb(147, 207, 225)'});},function() {$(this).css({color:'rgb(237, 229, 187)'});});
        }
    } else if (topic == "moon2" && shown == false) {
        $('.btn').remove();
        $('.page2').remove();
        list = (Object.keys(dataSet.moons[host])).sort();
        key = 'dataSet.moons[\'' + host + '\']';
    
        $('<div class="page2" id="dropDown" style="z-index:-1; display:none; overflow-y:auto;"></div>').appendTo("body").fadeIn(500);
        for(let i = 0; i < list.length; i++){ 
            var currBody = list[i];
            var currHost = "'" + host.toUpperCase() + "'";
            listTop += 7 * i;
            //console.log("'" + currBody + ", " + list[i] + "'");
            $('<p class="page2 dropText" id="' + host + i + '" onclick="statPage(' + key + '[\'' + currBody + '\'] , ' + currHost + ')" style="z-index:-1; display:none; top:' + listTop + '%"><b>' + currBody + '</b></p>').appendTo("#dropDown").fadeIn(750);
            $(".dropText").hover(function() {$(this).css({color:'rgb(147, 207, 225)'});},function() {$(this).css({color:'rgb(237, 229, 187)'});});
            //console.log(key + '.' + currBody);
        }
    } else if (topic == 'dwarfPlanets' && shown == false) {
        $('.btn').remove();
        $('.page2').remove();
        list = Object.keys(dataSet.dwarfPlanets);
        key = 'dataSet.dwarfPlanets';
    
        $('<div class="page2" id="dropDown" style="z-index:-1; display:none;"></div>').appendTo("body").fadeIn(500);
        for(let i = 0; i < list.length; i++){ 
            var currBody = list[i];
            var currHost = "'SUN'"
            listTop += 7 * i;
            //console.log("'" + currBody + ", " + list[i] + "'");

            $('<p class="page2 dropText" id="' + list[i] + '" onclick="statPage(' + key + '[\'' + currBody + '\'], ' + currHost + ')" style="z-index:-1; display:none; top:' + listTop + '%"><b>' + list[i] + '</b></p>').appendTo("#dropDown").fadeIn(750);
            $(".dropText").hover(function() {$(this).css({color:'rgb(147, 207, 225)'});},function() {$(this).css({color:'rgb(237, 229, 187)'});});
            console.log(key + '[\'' + currBody + '\']');
        }
    } else if (topic == 'source' && shown == false) {
        //console.log("clicked");
        $('<div class="source" id="dropDown2" style="display:none;"></div>').appendTo("body").fadeIn(500);
        $('<a class="source dropText" id="kepLink" href="https://www.astronomynotes.com/history/s7.htm"><b>Kepler\'s Laws</b></a>').appendTo('#dropDown2');
        $('<a class="source dropText" id="imgLink" href="https://www.nasa.gov/multimedia/imagegallery/index.html"></br><b>NASA Image Bank</b></a>').appendTo('#dropDown2');
        $('<a class="source dropText" id="dataLink1" href="https://www.google.com/books/edition/Fundamentals_of_Astrodynamics/UtJK8cetqGkC?hl=en&gbpv=0"></br><b>Main Planets Data</b></a>').appendTo('#dropDown2');
        $('<a class="source dropText" id="dataLink2" href="https://solarsystem.nasa.gov/"></br><b>Additional Data</b></a>').appendTo('#dropDown2');
        $('#dropDown2').hover(function () {}, function () { $('.source').fadeOut(500); setTimeout(function () { $('.source').remove(); }, 600) });
    } else if (topic == 'info' && shown == true) {
        //console.log("clicked");
        $('<div class="info" id="dropDown2" style="display:none; height:50%; width:20%; line-Height:2;"></div>').appendTo("body").fadeIn(500);
        $('<a class="info dropText" id="infoTxt1"><b>Distance is equivalent to the semi-major axis of an orbit.</b></a>').appendTo('#dropDown2');
        $('<a class="info dropText" id="infoTxt2"></br><b>1 AU = 149,598,023 km</b></a>').appendTo('#dropDown2');
        $('<a class="info dropText" id="infoTxt3"></br><b>1 AU is also the semi-major axis of the Earth\'s orbit.</b></a>').appendTo('#dropDown2');
        $('<a class="info dropText" id="infoTxt4"></br><b>Many images either are not publically available, or had to be slightly altered for better viewing by a developer.</b></a>').appendTo('#dropDown2');
        $('#dropDown2').hover(function () {}, function () { $('.info').fadeOut(500); setTimeout(function () { $('.info').remove(); }, 600) });
    }
    if (topic !== 'source' && topic !== 'info' && shown == false) {
        $('<div class="page2" id="dropPlace" style="height:15%; display:none; z-index:-1;"></div>').appendTo("#dropDown").fadeIn(750);
        $('<div class="btn" id="closeSub" onclick="panelDel()"></div>').appendTo('body').fadeIn(1000);
        $('<p class="btn btnTxt" id="closeText"><b>&gt CLOSE &lt</b></p>').appendTo('#closeSub').fadeIn(1000);
    }
}

function panelDel() {
    $('.btn').remove();
    $('.page2').remove();
    //console.log('ran');
}



//call function once page is ready
$(document).ready(function() {
    $('<div class="btn2" id="sourceSub" onclick="panelGen(\'source\')"></div>').appendTo('body').fadeIn(1000);
    $('<p class="btn2 btnTxt" id="sourceText"><b>&gt SOURCES &lt</b></p>').appendTo('#sourceSub').fadeIn(1000);
    page1Start();
});
