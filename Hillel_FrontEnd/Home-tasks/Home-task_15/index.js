let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

/* allCategories = [kitchenProducts, devicesProducts, cosmeticsProducts];

allCategories.forEach((arr) => {

}) */

let kitchen = {category: 'kitchen'};
let devices = {category: 'devices'};
let cosmetics = {category: 'cosmetics'};

let newKitchen = kitchenProducts.map((element) => {
    let good = Object.create(kitchen);
    good.type = element['type'];
    good.price = element['price'];
    return good
});

let newDevices = devicesProducts.map((element) => {
    let good = Object.create(devices);
    good.type = element['type'];
    good.price = element['price'];
    return good;
});

let newCosmetics = cosmeticsProducts.map((element) => {
    let good = Object.create(cosmetics);
    good.type = element['type'];
    good.price = element['price'];
    return good;
});

let productCards = [newKitchen, newDevices, newCosmetics];

productCards.forEach((arr) => {
    createCategoriesBlock(arr);
    createProductBlock(arr);
});

function createCategoriesBlock (products) {
    let categoryContainer = document.createElement('div');
    categoryContainer.classList.add('good-category');
    categoryContainer.id = products[0].category;
    let header = document.createElement('h3');
    header.innerHTML = `Category ${products[0].category}`;
    categoryContainer.append(header);
    body.append(categoryContainer);
}

function createProductBlock(goods){
    goods.forEach((good) => {
        let categoryContainer = document.getElementById(`${good.category}`);
        let div = document.createElement('div');
        div.innerHTML = (`
                    <div class="good-box">
                    <img src="./img/${good.category}/${good.type}.svg" style="width:40px; height:40px"/>
                    <p> Name: ${good.type} </p>
                    <p> Price: $${
                    Array.isArray(good.price)
                    ? good.price.join('-')
                    : good.price
                    } </p>
                    </div>
        `);
        categoryContainer.append(div);
    })
    
}
