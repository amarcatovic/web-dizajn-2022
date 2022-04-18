
// const boolValue = false;

// let promise = new Promise((resolve, reject) => {
//     if(boolValue){
//         resolve('Success');
//     }
//     reject('Failed');
// })

// promise
//     .then(val => {
//         console.log(val)
//     })
//     .catch(err => {
//         console.log(err)
//     })


// GET
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => {
//         if(!res.ok){
//             throw Error('ovo je error');
//         }
//         return res.json()
//     })
//     .then(data => {
//         const todoList = document.getElementById('todo-list');
//         let todos = '';

//         data.forEach(element => {
//             todos += `<li> <p>${element.title}</p> <h1>${element.completed}</h1></li>`
//         });

//         todoList.innerHTML = todos
//     })
//     .catch(err => {
//         console.log(err)
//     })

// POST
// fetch('https://reqres.in/api/register', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         email: 'eve.holt@reqres.in',
//         password: 'pistol' 
//     })
//     })
//     .then(res => {
//         if(!res.ok){
//             throw Error('ovo je error');
//         }
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })