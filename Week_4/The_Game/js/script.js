/*  Olaf Schouten 99039378
    Week 4 - The Game*/

var score;  //Een item dat de score bijhoud//
score = 0;  //De score begint op 0//
alert('Haal 6 punten om de quiz te winnen')

var vraag1
vraag1 = prompt('Wat is de hoofdstad van Nederland?')   //Prompt met de vraag//
if (vraag1 == "Amsterdam" || vraag1 == "amsterdam") {  //Als de vraag goed is moet hij vooldoen aan (Amsterdam). Dan krijg je er één punt bij//
    score++;    //Dit zorgt ervoor dat er één cijfer bij de score komt//
    console.log('1e vraag is goed!')
    alert('Correct! je score is nu: ' + score)    //Vervolgens krijg je een alert waar je je score in kan zien//
} else {
    console.log('1e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}   //Als het fout is, krijg je een melding waarin staat dat het fout is met de score//

var vraag2
vraag2 = prompt('Wat is de hoofdstad van Spanje?')
if (vraag2 == "Madrid") {
    score++;
    console.log('2e vraag is goed!')
    alert('Correct! je score is nu: ' + score)
} else {
    console.log('2e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}

var vraag3
vraag3 = prompt('Welke kleur heeft een wortel?')
if (vraag3 == "oranje") {
    score++;
    console.log('3e vraag is goed!')
    alert('Correct! je score is nu: ' + score)
} else {
    console.log('3e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}

var vraag4
vraag4 = prompt('Wat voor kleur is een kraai?')
if (vraag4 == "zwart") {
    score++;
    console.log('4e vraag is goed!')
    alert('Correct! je score is nu: ' + score)
} else {
    console.log('4e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}

var vraag5
vraag5 = prompt('Wie is de eigenaar van Windows?')
if (vraag5 == "Bill Gates") {
    score++;
    console.log('5e vraag is goed!')
    alert('Correct! je score is nu: ' + score)
} else {
    console.log('5e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}

var vraag6
vraag6 = prompt('Door welk bedrijf is de playstation gemaakt?')
if (vraag6 == "Sony") {
    score++;
    console.log('6e vraag is goed!')
    alert('Correct! je score is nu: ' + score)
} else {
    console.log('6e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}

var vraag7
vraag7 = prompt('Wie is nintendo hun bekenste karakter?')
if (vraag7 == "Mario") {
    score++;
    console.log('7e vraag is goed!')
    alert('Correct! je score is nu: ' + score)
} else {
    console.log('7e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}

var vraag8
vraag8 = prompt('Welke kleur heeft een robijn?')
if (vraag8 == "rood") {
    score++;
    console.log('8e vraag is goed!')
    alert('Correct! je score is nu: ' + score)
} else {
    console.log('8e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}

var vraag9
vraag9 = prompt('Welke kleur krijg je als je rood met blauw mengt?')
if (vraag9 == "paars") {
    score++;
    console.log('9e vraag is goed!')
    alert('Correct! je score is nu: ' + score)
} else {
    console.log('9e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}

var vraag10
vraag10 = prompt('Hoe wordt de telefoon van Apple genoemd?')
if (vraag10 == "iphone") {
    score++;
    console.log('10e vraag is goed!')
    alert('Correct! je score is nu: ' + score)
} else {
    console.log('10e vraag is fout!')
    alert('Fout! je score is nu: ' + score)
}

if (score >= 6) {
    console.log('Gewonnen!')
    alert('Je score is: ' + score + ' je hebt gewonnen!')
    document.write('Gehaalt')
} else if (score < 8) { alert('Je score is: ' + score + ' je hebt verloren') }