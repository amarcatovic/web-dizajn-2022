// Varijable
console.log('%cVarijable', 'color: blue; background: yellow; font-size: 30px');

var automobil = "Ferrari";
console.log(automobil);

var kako_imenovati_varijable = "?"; // ovo će raditi, ali nije po konvenciji
var varijablaPoKonvenciji = '!';

varijablaBezVarKljucneRijeci = "Hoš radit ovako?";
console.log(varijablaBezVarKljucneRijeci);

var varijablaKojaNijeInicijalizirana;
console.log(varijablaKojaNijeInicijalizirana);

let drugiAutomobil = 'BMW';
{
    let blokVarijabla = 'blok';
}

console.log(drugiAutomobil, /* blokVarijabla - kompajler će baciti grešku*/);

const pi = 3.1415;
console.log(pi);

let brojGodina = 24;
console.log('Ja imam ' + brojGodina + ' godine');
console.log(`Ja imam ${brojGodina} godine`);

// Operacije ------------------------------------------------------------------------------------
console.log('%cOperacije', 'color: blue; background: yellow; font-size: 30px');

console.log(10 + 6);
let cijena = 50;
let pdv = 0.17;
const pdvUmnozak = 1 + pdv;

console.log(`Cijena za platiti je: ${cijena * pdvUmnozak}`);

console.log(0.1 + 0.2);
console.log(Number.EPSILON);

let zbir = 0.1 + 0.2;
let rezultat = 0.3;

console.log(Math.abs(zbir - rezultat));
console.log(Math.abs(zbir - rezultat) < Number.EPSILON);

// Flow ------------------------------------------------------------------------------------
console.log('%cFlow', 'color: blue; background: yellow; font-size: 30px');

if (brojGodina > 23) {
    console.log('Ostario si!');
} else {
    console.log('Ma dobar si ti još!');
}

brojGodina >= 18 ? console.log('Punoljetan!') : console.warn('Maloljetan!');

const x = 5; 
const y = '5';

console.log(x == y);
console.log(x === y);

if (/*confirm('Are you sure?')*/true) {
    console.log('Izabrali ste OK!');
} else {
    console.log('Izabrali ste Cancel!');
}

// Petlje ------------------------------------------------------------------------------------
console.log('%cPetlje', 'color: blue; background: yellow; font-size: 30px');

// for
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

// while
let i = 0;
while (i < 10) {
    console.log(i + 1);
    ++i;
}

// do while
i = 0;
do {
    console.log(i + 1);
    ++i;
} while (i < 10);

let granica = 10; /* window.prompt('Unesite granicu: '); */

for (let i = 1; i <= granica; ++i) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// funkcije ------------------------------------------------------------------------------------
console.log('%cFunkcije', 'color: blue; background: yellow; font-size: 30px');

function saberi(x, y) {
    return x + y;
}

console.log(saberi(5, 5));

const saberi2 = (x, y) => {
    return x + y;
}

console.log(saberi2(5, 5));

let main = {
    grad: 'Zenica',
    arrow: () => {
        console.log('Grad ' + this.grad);
    },
    func() {
        console.log('Grad ' + this.grad);
    }
};

main.arrow();
main.func();

// datumi --------------------------------------------------------------------------------------------------------------
console.log('%cDatumi', 'color: blue; background: yellow; font-size: 30px');

const datum = new Date();
console.log(datum);
console.log(datum.getDate());
console.log(datum.getMonth() + 1);
console.log(datum.getFullYear());

console.log(`Dan: ${datum.getDate()}, Mjesec: ${datum.getMonth() + 1},
    Godina: ${datum.getFullYear()}`);

console.log(datum.toISOString());
console.log(datum.toLocaleDateString());

const datumRokaPredajeSeminarskih = new Date('5/22/2022');
console.log(datumRokaPredajeSeminarskih);

if (datum < datumRokaPredajeSeminarskih) {
    console.log('Ima još vremena za predati seminarski!');
}

const razlikaDatuma = (datumRokaPredajeSeminarskih - datum) / (1000 * 3600 * 24);
console.log(`Ostalo je još ${razlikaDatuma} dana`);