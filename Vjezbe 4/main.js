console.log("%cCode review", "color: blue; background: yellow; font-size: 30px");

var d=new Date();
const date = new Date();

var dan=1000*3600*24;
const day = 1000 * 3600 * 24;

const number = 10;
if (number === 10) {
    console.log('Equal!');
}

const name = "John Doe";
const otherName = 'Namir Neymar';

const foo = (numberOne, numberTwo) => {
    if (numberOne === numberTwo) {
        return 'Equal numbers';
    } else {
        return 'Not equal numbers';
    }
}

console.log(foo(10, 10));
console.log(foo(10, 15));

const betterFoo = (numberOne, numberTwo) => {
    if (numberOne === numberTwo) {
        return 'Equal numbers';
    }

    return 'Not equal numbers';
}

console.log(betterFoo(10, 10));
console.log(betterFoo(10, 15));

const month = 5;
month <= 6 ? 'First part of the year' : 'Second part of the year';

month <= 6
    ? 'First part of the year'
    : 'Second part of the year';

// ---------------------------------------------------------------------------------------------------------------------
console.log("%cArrays", "color: blue; background: yellow; font-size: 30px");

let cars = ['Ferrari', 'BMW', 'Volvo', 'Mini'];

const car1 = 'Ferrari';
const car2 = 'BMW';

for (let i = 0; i < cars.length; ++i) {
    console.log(cars[i]);
}

cars[2] = 'Zastava';

const logArray = array => {
    console.log('%c--- Cars ---', 'color: red');
    array.forEach(element => {
        console.log(element);
    });
}

logArray(cars);

cars.push('Bentley');
logArray(cars);

// cars.unshift('Audi');
cars = ['Audi', ...cars];

logArray(cars);

cars.pop();
logArray(cars);

cars.shift();
logArray(cars);

const searchTerm = 'Ferrari';
if (cars.includes(searchTerm)) {
    console.log('Available');
}

const carNameLenghts = cars.map(item => {
    return item.length;
});

logArray(carNameLenghts);

const carNameLenghtsWithIndex = cars.map((item, index) => {
    return item.length + index;
});

logArray(carNameLenghtsWithIndex);

const carsWithMoreThan5LettersInName = cars.filter(item => {
    if (item.length > 5) {
        return true;
    }

    return false;
});

console.log(carsWithMoreThan5LettersInName);

const writeCars = cars.reduce((previousValue, currentValue) => {
    return previousValue += ' ' + currentValue;
});

console.log(writeCars);

// ---------------------------------------------------------------------------------------------------------------------
console.log("%cObjects", "color: blue; background: yellow; font-size: 30px");

const car = {
    type: 'Ferrari',
    model: 'Enzo',
    color: 'Red'
};

console.log(car);
console.log(typeof(car));
console.log(car.toString());

console.log(`Car: ${car.type} ${car.model}, color: ${car.color}`);
console.log(car.maxSpeed);
car['maxSpeed'] = 320;
car.secondsTo100Kph = 2.7;

console.log(car.maxSpeed, car['secondsTo100Kph']);

// https://my-api-server/coutry/1
// JSON.parse
const country = {
    name: 'Bosnia and Herzegovina',
    population: 3800000,
    code: 'BA',
    languages: [
        'Bosnian',
        'Croatian',
        'Serbian'
    ],
    currency: 'BAM',
    cities: [
        {
            name: 'Sarajevo',
            population: 300000,
            isCapital: true,
            postalCode: 71000
        },
        {
            name: 'Zenica',
            population: 120000,
            postalCode: 72000
        },
        {
            name: 'Mostar',
            population: 100000,
            postalCode: 88000
        }
    ]
};

country.cities.forEach(city => {
    console.log(`${city.isCapital ? '[CAPITAL]' : ''} ${city.name}`);
});

// const copy = country;
// copy.name = 'Croatia';

// console.log(copy);
// console.log(JSON.stringify(country));

const countryCopy = JSON.parse(JSON.stringify(country));
countryCopy.name = 'BiH';

console.log(country);
console.log(countryCopy);

localStorage.setItem('country', JSON.stringify(country));
const localStorageObject = JSON.parse(localStorage.getItem('country'));
console.log(localStorageObject);

