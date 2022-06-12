var nameInput = document.getElementById("name");
var from = document.getElementById("from");
var result = document.getElementById("result");

// let keys = [
//     "/asshole/",
//     "/awesome/",
//     "/back/",
//     "/bag/",
//     "/bday/",
//     "/because/",
//     "/blackadder/",
//     "/bm/",
//     "/bucket/",
//     "/bus/",
//     "/bye/",
//     "/caniuse/tool/",
//     "/chainsaw/",
//     "/cocksplat/",
//     "/cool/",
//     "/cup/",
//     "/dalton/",
//     "/dense/",
//     "/deraadt/",
//     "/diabetes/",
//     "/donut/",
//     "/dosomething/do/something/",
//     "/dumbledore/",
//     "/equity/",
//     "/even/",
//     "/everyone/",
//     "/everything/",
//     "/family/",
//     "/fascinating/",
//     "/fewer/",
//     "/field/",
//     "/flying/",
//     "/ftfy/",
//     "/fts/",
//     "/fyyff/",
//     "/gfy/",
//     "/give/",
//     "/greed/noun/",
//     "/holygrail/",
//     "/horse/",
//     "/idea/",
//     "/immensity/",
//     "/ing/",
//     "/jinglebells/",
//     "/keep/",
//     "/keepcalm/reaction/",
//     "/king/",
//     "/legend/",
//     "/life/",
//     "/linus/",
//     "/logs/",
//     "/look/",
//     "/looking/",
//     "/lowpoly/",
//     "/madison/",
//     "/maybe/",
//     "/me/",
//     "/mornin/",
//     "/no/",
//     "/nugget/",
//     "/off/",
//     "/off-with/behavior/",
//     "/outside/",
//     "/particular/thing/",
//     "/pink/",
//     "/problem/",
//     "/programmer/",
//     "/pulp/language/",
//     "/question/",
//     "/ratsarse/",
//     "/retard/",
//     "/ridiculous/",
//     "/rockstar/",
//     "/rtfm/",
//     "/sake/",
//     "/shakespeare/",
//     "/shit/",
//     "/shutup/",
//     "/single/",
//     "/thanks/",
//     "/that/",
//     "/think/",
//     "/thinking/",
//     "/this/",
//     "/thumbs/",
//     "/too/",
//     "/tucker/",
//     "/understand/",
//     "/waste/",
//     "/what/",
//     "/xmas/",
//     "/yeah/",
//     "/yoda/",
//     "/you/",
//     "/zayn/",
//     "/zero/"
// ];

var create = document.getElementById("create");
create.addEventListener("click", getfuckof2);

var tell;
var httprequest; //ajax
var httprequest2;

function getfuckof(operations) {
    httprequest = new XMLHttpRequest(); //objeto (podemos dizer que é o ajax)
    httprequest.onreadystatechange = checkrequest;
    httprequest.open('GET', 'https://foaas.com' + operations);
    httprequest.send();
}

function getfuckof2() {
    httprequest2 = new XMLHttpRequest();
    httprequest2.onreadystatechange = checkrequest2;
    httprequest2.open('GET', 'https://foaas.com/operations' )
    httprequest2.send();
}

// if (httprequest2.status == 200) {
//     tell2 = httprequest2.responseText;
//     var obj = JSON.parse(tell2)
// }

function checkrequest2() {
    if (httprequest2.readyState == 4) {
        if (httprequest2.status == 200) {
            let obj = JSON.parse(httprequest2.responseText)
            var indice = Math.floor(Math.random() * 100)
            if (obj[indice].url.includes(":company")) {
                obj[indice].url = obj[indice].url.replace(":company", "you idiots")
            }
            if (obj[indice].url.includes(":name")) {
                obj[indice].url = obj[indice].url.replace(":name", nameInput.value)
            }
            if (obj[indice].url.includes(":from")) {
                obj[indice].url = obj[indice].url.replace(":from", from.value)
            } getfuckof(obj[indice].url);
        }
    } 
}

function checkrequest() {
    if (httprequest.readyState == 4) {
        if (httprequest.status == 200) {
            tell = httprequest.responseText;
            result.innerHTML = tell
        }
    }
}

// <!DOCTYPE html> <html> <head> <title>FOAAS - Fuck you, asshole. - :luiz</title> <meta charset="utf-8"> <meta property="og:title" content="Fuck you, asshole. - :luiz"> <meta property="og:description" content="Fuck you, asshole. - :luiz"> <meta name.value="twitter:card" content="summary" /> <meta name.value="twitter:site" content="@foaas" /> <meta name.value="twitter:title" content="FOAAS: Fuck Off As A Service" /> <meta name.value="twitter:description" content="Fuck you, asshole. - :luiz" /> <meta name.value="viewport" content="width=device-width, initial-scale=1"> <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet"> <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143325008-1"></script> <script>   window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-143325008-1'); </script> </head> <body style="margin-top:40px;"> <div class="container"> <div id="view-10"> <div class="hero-unit"> <h1>Fuck you, asshole.</h1> <p><em>- :luiz</em></p> </div> </div> <p style="text-align: center"><a href="https://foaas.com">foaas.com</a></p> </div> </body> </html>

// let keys = [
//     "/asshole/" + ,
//     "/awesome/" + ,
//     "/back/" +  + "/" + ,
//     "/bag/" + ,
//     "/bday/" +  + "/" + ,
//     "/because/" + ,
//     "/blackadder/" +  + "/" + ,
//     "/bm/" +  + "/" + ,
//     "/bucket/" + ,
//     "/bus/" +  + "/" + ,
//     "/bye/" + ,
//     "/caniuse/tool/" + ,
//     "/chainsaw/" +  + "/" + ,
//     "/cocksplat/" +  + "/" + ,
//     "/cool/" + ,
//     "/cup/" + ,
//     "/dalton/" +  + "/" + ,
//     "/dense/" + ,
//     "/deraadt/" +  + "/" + ,
//     "/diabetes/" + ,
//     "/donut/" +  + "/" + ,
//     "/dosomething/do/something/" + ,
//     "/dumbledore/" + ,
//     "/equity/" +  + "/" + ,
//     "/even/" + ,
//     "/everyone/" + ,
//     "/everything/" + ,
//     "/family/" + ,
//     "/fascinating/" + ,
//     "/fewer/" +  + "/" + ,
//     "/field/" +  + "/" + ,
//     "/flying/" + ,
//     "/ftfy/" + ,
//     "/fts/" +  + "/" + ,
//     "/fyyff/" + ,
//     "/gfy/" +  + "/" + ,
//     "/give/" + ,
//     "/greed/noun/" + ,
//     "/holygrail/" + ,
//     "/horse/" + ,
//     "/idea/" + ,
//     "/immensity/" + ,
//     "/ing/" +  + "/" + ,
//     "/jinglebells/" + ,
//     "/keep/" +  + "/" + ,
//     "/keepcalm/reaction/" + ,
//     "/king/" +  + "/" + ,
//     "/legend/" +  + "/" + ,
//     "/life/" + ,
//     "/linus/" +  + "/" + ,
//     "/logs/" + ,
//     "/look/" +  + "/" + ,
//     "/looking/" + ,
//     "/lowpoly/" + ,
//     "/madison/" +  + "/" + ,
//     "/maybe/" + ,
//     "/me/" + ,
//     "/mornin/" + ,
//     "/no/" + ,
//     "/nugget/" +  + "/" + ,
//     "/off/" +  + "/" + ,
//     "/off-with/behavior/" + ,
//     "/outside/" +  + "/" + ,
//     "/particular/thing/" + ,
//     "/pink/" + ,
//     "/problem/" +  + "/" + ,
//     "/programmer/" + ,
//     "/pulp/language/" + ,
//     "/question/" + ,
//     "/ratsarse/" + ,
//     "/retard/" + ,
//     "/ridiculous/" + ,
//     "/rockstar/" +  + "/" + ,
//     "/rtfm/" + ,
//     "/sake/" + ,
//     "/shakespeare/" +  + "/" + ,
//     "/shit/" + ,
//     "/shutup/" +  + "/" + ,
//     "/single/" + ,
//     "/thanks/" + ,
//     "/that/" + ,
//     "/think/" +  + "/" + ,
//     "/thinking/" +  + "/" + ,
//     "/this/" + ,
//     "/thumbs/" +  + "/" + ,
//     "/too/" + ,
//     "/tucker/" + ,
//     "/understand/" +  + "/" + ,
//     "/waste/" +  + "/" + ,
//     "/what/" + ,
//     "/xmas/" +  + "/" + ,
//     "/yeah/" + ,
//     "/yoda/" +  + "/" + ,
//     "/you/" +  + "/" + ,
//     "/zayn/" + ,
//     "/zero/" + 
// ];