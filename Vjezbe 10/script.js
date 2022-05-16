const BASE_URL = "https://ptf-web-dizajn-2022.azurewebsites.net/";

let foods = [];

fetch(`${BASE_URL}/api/Food`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        foods = data;
        renderFoods(data);
    });

const renderFoods = (foods) => {
    const foodsRow = document.getElementById('foods-row');

    let resultFoodsHtml = '';

    foods.forEach(food => {
        resultFoodsHtml += `
        <div class="card mx-2 my-2" style="width: 18rem;">
            <img src="${food.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.name}</h5>
                <p class="card-text">${food.price}KM</p>
                <button type="button" onclick="fillEditData(${food.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
            </div>
        </div>
        `;
    });

    foodsRow.innerHTML = resultFoodsHtml;
}

const fillEditData = (foodId) => {
    const food = foods.find(food => food.id === foodId);
    const foodFormId = document.getElementById('food-id');
    const foodFormName = document.getElementById('food-name');
    const foodFormImage = document.getElementById('food-image');
    const foodFormPrice = document.getElementById('food-price');

    foodFormId.value = food.id;
    foodFormName.value = food.name;
    foodFormImage.value = food.imageUrl;
    foodFormPrice.value = food.price;
}

const editFood = () => { 
    const foodFormId = document.getElementById('food-id').value;
    const foodFormName = document.getElementById('food-name').value;
    const foodFormImage = document.getElementById('food-image').value;
    const foodFormPrice = document.getElementById('food-price').value;

    fetch(`${BASE_URL}/api/Food`, {
        method: 'PUT', 
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            id: foodFormId,
            name: foodFormName,
            imageUrl: foodFormImage,
            price: foodFormPrice
        })
    })
    .then(res => {
        if(!res.ok)
        {
            alert('Error');
        }
    })
}