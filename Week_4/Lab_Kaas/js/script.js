var vraag = prompt('is de kaas geel?');
var gaten;
var schimmels;

if(vraag == 'ja'){
    console.log('De kaas is geel')
    gaten = prompt('zitten er gaten in?')
}   else if(vraag == 'nee'){
    console.log('De kaas is niet geel')
    schimmels = prompt('Heeft de kaas blauwe schimmels?')
}
var korst1;
var korst2;

if(schimmels == 'ja'){
    console.log('De kaas heeft blauwe schimmels')
    korst2 = prompt('Heeft de kaas een korst?')
}   else if(schimmels == 'nee'){
    console.log('De kaas heeft geen blauwe schimmels')
    korst1 = prompt('Heeft de kaas een korst?')
}
var camembert;
var mozzarella;

if(korst1 == 'ja'){
    console.log('De kaas heeft een korst')
    camembert = document.write('camembert')
    console.log('Het is camembert')
}   else if(korst1 == 'nee'){
    mozzarella = document.write('mozzarella')
    console.log('Het is mozzarella')
}
var bleuderochbaron;
var founmedambert;

if(korst2 == 'ja'){
    console.log('De kaas heeft een korst')
    bleuderochbaron = document.write('bleuderochbaron')
    console.log('Het is bleuderochbaron')
}   else if(korst2 == 'nee'){
    console.log('De kaas heeft geen korst')
    founmedambert = document.write('founmedambert')
    console.log('Het is founmedambert')
}
var duur;
var steen;

if(gaten == 'ja'){
    console.log('Er zitten gaten in')
    duur = prompt('Is de kaas belachelijk duur?')
}   else if(gaten == 'nee'){
    console.log('Er zitten geen gaten in')
    steen = prompt('Is de kaas hard als steen?')
}
var panmigianoreggiano;
var goudsekaas;

if(steen == 'ja'){
    console.log('De kaas is hard als steen')
    panmigianoreggiano = document.write('Panmigiano Reggiano')
    console.log('Het is Panmigiano Reggiano')
}   else if(steen == 'nee'){
    console.log('De kaas is niet zo hard als steen')
    goudsekaas = document.write('Goudse kaas')
    console.log('Het is Goudse kaas')
}
var emmenthaler;
var leerdammer;

if(duur == 'ja'){
    console.log('De kaas is belachelijk duur')
    emmenthaler = document.write('Emmenthaler')
    console.log('Het is Emmenthaler')
}   else if(duur == 'nee'){
    console.log('De kaas is niet belachelijk duur')
    leerdammer = document.write('Leerdammer')
    console.log('Het is Leerdammer')
}