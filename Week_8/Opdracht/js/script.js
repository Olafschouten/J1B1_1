/*  Olaf Schouten
    Week 8 De Opdracht
    21 - 10 - 2018 */

const fris = 2.50;  //Een const voor de prijzen van de drankjes en snacks.
const bier = 3.00;
const wijn = 3.50;
const snack8 = 5;
const snack16 = 7;

var aantalFris = 0; //Vars het ingevoerde aantal te kunnen onthouden en te schrijven.
var aantalBier = 0;
var aantalWijn = 0;
var aantalSnack = 0;
var aantalSchalen = 0;

var totaalFris = 0; //Vars het ingevoerde aantal te kunnen onthouden en te schrijven.
var totaalBier = 0;
var totaalWijn = 0;
var totaalSnack = 0;
var totaalSnackSchaal = 0;


function addToOrder() {
    while (keuze != "stop") {
    var keuze = prompt("fris, bier, wijn of snacks"); //Prompt met de vraag wat je wilt hebben.
    if (keuze == "fris") {  //Is de keuze fris?!
        aantalFris = aantalFris + parseInt(prompt('Voer het aantal fris in dat je wilt bestellen.'));    //Hoeveel fris drankjes wil je.

        document.getElementById("prijsVoorFris").innerHTML = ("Prijs fris €: " + aantalFris * fris + "<br>");   //Totaale prijs voor fris laten zien.
        document.getElementById("aantalGlazenFris").innerHTML = ("<hr>" + "Aantal fris: " + aantalFris + "<br>"); //Aantal glazen Fris.
        totaalFris = aantalFris * fris; //Berekeing voor de laatste function (rekening).

        // addToOrder();   //Als je klaar bent met het in vullen van de prompt begint hij weer opnieuw.
    }
    else if (keuze == "bier") {
        aantalBier = aantalBier + parseInt(prompt('Voer het aantal bier in dat je wilt bestellen.'));

        document.getElementById("prijsVoorBier").innerHTML = ("Prijs bier €: " + aantalBier * bier + "<br>");
        document.getElementById("aantalGlazenBier").innerHTML = ("Aantal bier: " + aantalBier + "<br>");
        totaalBier = aantalBier * bier;

        // addToOrder();
    }
    else if (keuze == "wijn") {
        aantalWijn = aantalWijn + parseInt(prompt('Voer het aantal wijn in dat je wilt bestellen.'));

        document.getElementById("prijsVoorWijn").innerHTML = ("Prijs wijn €: " + aantalWijn * wijn + "<br>" + "<hr>");
        document.getElementById("aantalGlazenWijn").innerHTML = ("Aantal wijn: " + aantalWijn + "<br>");
        totaalWijn = aantalWijn * wijn;

        // addToOrder();
    }
    else if (keuze == "snacks") {   //Als je snacks invult ga je door met de function snack.
        snack();
    }
    else if (keuze == "stop" || keuze == "nee") {   //Hier kan je 'stop' of 'nee' in typen om te stoppen.
        rekening();
    }
    else {
        alert("Uw kan dit niet bestellen.");
        // addToOrder();
    }
}
}

function snack() {
    var keuzeSnack = parseInt(prompt('8 of 16 snacks?'));
    if (keuzeSnack == "8") {
        aantalSchalen = parseInt(prompt("Aantal stalen?"));

        document.getElementById("aantalSnacks").innerHTML = ("Aantal snacks: " + keuzeSnack + "<br>" + "Aantal schalen: " + aantalSchalen + "<br>");
        totaalSnackSchaal = keuzeSnack * aantalSchalen;
        document.getElementById("aantalSnackSchalen").innerHTML = ("<br>" + "Totaal snacks: " + totaalSnackSchaal);
        totaalPrijsSnack = aantalSchalen * snack8;
        document.getElementById("totaalSnackprijs").innerHTML = ("<br>" + "Totaal kosten schalen € " + aantalSchalen * snack8 + "<br>" + "<hr>");

        snack();
    }
    else if (keuzeSnack == "16") {
        aantalSchalen = parseInt(prompt("Aantal stalen?"));

        document.getElementById("aantalSnacks").innerHTML = ("Aantal snacks: " + keuzeSnack + "<br>" + "Aantal schalen: " + aantalSchalen + "<br>");
        totaalSnackSchaal = keuzeSnack * aantalSchalen;
        document.getElementById("aantalSnackSchalen").innerHTML = ("<br>" + "Totaal snacks: " + totaalSnackSchaal);
        totaalPrijsSnack = aantalSchalen * snack16;
        document.getElementById("totaalSnackprijs").innerHTML = ("<br>" + "Totaal kosten schalen € " + aantalSchalen * snack16 + "<br>" + "<hr>");

        snack();
    }
    else if (keuze == "stop" || keuze == "nee") {
        document.getElementById("rekeningOpvragen").innerHTML = rekening();
    }
    else if (keuze == "drank") {
        addToOrder();
    }
    else {
        alert("Uw kun alleen 8 of 16 kiezen.");
        snack();
    }
}

function rekening() {
    totaalPrice = totaalFris + totaalBier + totaalWijn + totaalPrijsSnack;
    document.getElementById("totaleKosten").innerHTML = ("Totaale kosten € " + totaalPrice);
}
addToOrder();