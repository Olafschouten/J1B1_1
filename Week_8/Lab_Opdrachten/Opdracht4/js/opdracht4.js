var tafel = prompt('Kies een tafel')

function tafels() {
    for (var i = 0; i < tafel; i++) {
        for (var b = 1; b <= 10; b++) {
            document.write(b + ' x ' + tafel + ' = ' + tafel * b + '<br>')
        }
        document.write('<br>')
        tafel--
        tafels();
    }
}
tafels();