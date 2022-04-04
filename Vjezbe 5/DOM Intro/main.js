document.getElementById('hello-world').innerHTML = 'Hello World';

let countElements = document.getElementsByClassName('count');
console.log(countElements);
countElements = [...countElements];
console.log(countElements);

countElements.forEach((element, index) => {
    if (index % 2 === 0) {
        element.style.color = 'red';
    }

    element.innerHTML = `${index + 1}. element`;
});

for (let i = 0; i < 20; ++i) {
    const div = document.createElement('div');
    div.innerHTML = `Element ${i + 1}`;
    div.classList.add('new');
    const wrapper = document.getElementById('wrapper');
    wrapper.appendChild(div);
}

const elements = [...document.getElementsByClassName('new')];
const colors = ['red', 'blue', 'yellow', 'black', 'green', 'silver'];
let index = 0;

elements.forEach(element => {
    element.style.color = colors[index++];
    if (index === colors.length) {
        index = 0;
    }
});

// set interval & set timeout
// setTimeout(() => alert('Reklama!'), 3000);

let number = 0;
const interval = setInterval(() => console.log(number++), 1000);
setTimeout(() => clearInterval(interval), 5000);