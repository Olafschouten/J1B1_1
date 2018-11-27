//Olaf Schouten
//Da Vinci College Bol4 AO

//Prompt/popup waar je in kan vullen hoeveel pizza's je wilt hebben in verschillende maten.
const small = prompt('aantal kleine pizzas'); 
const medium = prompt('aantal middel pizzas');
const large = prompt('aantal groote pizzas');

const smallprize = 3.95;
const mediumprize = 7.95;
const largelprize = 12.95;

//Berekening hoeveel de aantal pizza grotes bij elkaar kosten.
const totalsmall = small * smallprize;
const totalmedium = medium * mediumprize;
const totallarge = large * largelprize;

//Totaal van alle pizza's bij elkaar
const totalprize = totalsmall + totalmedium + totallarge;

//De totale prijzen van elke pizza soort.
document.write('Kleine pizza prijs: \u20ac ' +smallprize * small + '<br>');
document.write('Normaale pizza prijs: \u20ac ' +mediumprize * medium + '<br>');
document.write('Groote pizza prijs: \u20ac ' +largelprize * large + '<br>');

//De aantal ingevoerde pizza's in de verschillende maten, met tekst erbij.
document.write('<br> Aantal kleine pizzas ' + small + '<br> Aantal Normaale pizzas ' + medium + '<br> Aantal Groote pizzas ' + large + '<br>'); 

//Totaale prijs van alle pizza's bij elkaar.
document.write('<br> Totaal prijs: \u20ac ' + totalprize);