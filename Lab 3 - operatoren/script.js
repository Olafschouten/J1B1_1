//Olaf Schouten
//Bol4 AO

//Opdracht 1
//Hier kan je de tafel mee aanpassen met hoeveel je het wil vermenigvuldigen.
var x = 4;//Opdracht 2
var getal = 12;

//De tafel voor de formules.
var een = 1;
var twee = 2;
var drie = 3;
var vier = 4;
var vijf = 5;
var zes = 6;
var zeven = 7;
var acht = 8;
var negen = 9;
var tien = 10;

//De formule en weergaven op de site.
document.write('<br>1 x ' + x + ' = ' + een * x)
document.write('<br>2 x ' + x + ' = ' + twee * x)
document.write('<br>3 x ' + x + ' = ' + drie * x)
document.write('<br>4 x ' + x + ' = ' + vier * x)
document.write('<br>5 x ' + x + ' = ' + vijf * x)
document.write('<br>6 x ' + x + ' = ' + zes * x)
document.write('<br>7 x ' + x + ' = ' + zeven * x)
document.write('<br>8 x ' + x + ' = ' + acht * x)
document.write('<br>9 x ' + x + ' = ' + negen * x)
document.write('<br>10 x ' + x + ' = ' + tien * x + '<br>')

//Opdracht3
//Hier is een formule met het begin cijfer al 12.
var som1 = getal + zes;
var som2 = som1 * tien;
var som3 = som2 / vijf;
var som4 = som3 - getal;
document.write('<br>' + getal + ' + ' + zes + ' = ' + som1 + '<br>')
document.write(som1 + ' * ' + tien + ' = ' +som2  + '<br>')
document.write(som2 + ' / ' + vijf + ' = ' + som3 + '<br>')
document.write(som3 + ' - ' + getal + ' = ' + som4 + '<br>')

//Opdracht4
//Hier wordt er via een prompt een getal gevraagt dat toegepast wordt in de formule.
var input = Number(prompt('kies een getal'));

//Hier is een formule met een getal dat gevraagt word.
var som1 = input + zes;
var som2 = som1 * tien;
var som3 = som2 / vijf;
var som4 = som3 - getal;
document.write('<br>' + input + ' + ' + zes + ' = ' + som1 + '<br>')
document.write(som1 + ' * ' + tien + ' = ' +som2  + '<br>')
document.write(som2 + ' / ' + vijf + ' = ' + som3 + '<br>')
document.write(som3 + ' - ' + getal + ' = ' + som4 + '<br>')