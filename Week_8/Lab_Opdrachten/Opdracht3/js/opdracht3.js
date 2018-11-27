function naampje() {
    var naam = prompt('naam');
    if (naam != 'stop') {
        var leeftijd = prompt('leeftijd');
        document.write('Hallo ' + naam + ', je leeftijd is ' + leeftijd + ' jaar.' + ' <br>');
        naampje();
    }
}

naampje();