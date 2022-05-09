const BASE_URL = "http://localhost:24677"; // BACKEND -> PROPERTIES -> LAUNCHSETTINGS.JSON -> IISSETTINGS -> APPLICATIONURL (HTTP)

fetch(`${BASE_URL}/api/todos`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        renderTodos(data);
    })

const renderTodos = (todos) => {
    const todosRow = document.getElementById('todos-row');

    let resultHtml = '';

    todos.forEach(todo => {
        resultHtml += `
        <div class="card col-4 mx-2 my-2" style="width: 18rem;">
            <img src="https://cdn.pixabay.com/photo/2016/09/04/11/51/checklist-1643781_960_720.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${todo.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-primary" onclick="completeTodo(${todo.id})">Complete</button>
                <button type="button" class="btn btn-danger" onclick="deleteTodo(${todo.id})">Delete</button>
                <span class="badge bg-${todo.isCompleted ? 'success' : 'danger'}">${todo.isCompleted ? 'Completed' : 'Active'}</span>
            </div>
        </div>`;
    });

    todosRow.innerHTML = resultHtml;
}

const completeTodo = (id) => {
    fetch(`${BASE_URL}/api/todos/${id}/complete`, {
        method: 'PUT'
    })
    .then(res => {
        console.log(res);
    })
}

const addTodo = () => {
    const todoName = document.getElementById('todo-name').value;
    
    fetch(`${BASE_URL}/api/todos/new`, {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            name: todoName
        })
    })
    .then(res => {
        console.log(res);
    })
}

const deleteTodo = (id) => {
    fetch(`${BASE_URL}/api/todos/${id}`, {
        method: 'DELETE'
    })
    .then(res => {
        console.log(res);
    })
}