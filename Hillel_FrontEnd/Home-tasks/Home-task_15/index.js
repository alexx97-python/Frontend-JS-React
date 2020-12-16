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

// Creating prototype objects
let kitchen = {category: 'kitchen'};
let devices = {category: 'devices'};
let cosmetics = {category: 'cosmetics'};

// Adding prototype to relative objects
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


// Creates block for each category
function createCategoriesBlock (products) {
    let categoryContainer = document.createElement('div');
    categoryContainer.classList.add('good-category');
    categoryContainer.id = products[0].category;
    let header = document.createElement('h3');
    header.innerHTML = `Category ${products[0].category}`;
    categoryContainer.append(header);
    body.append(categoryContainer);
}

// Create a block for each product of category and add it inside the block of relative category
function createProductBlock(goods){
    let categoryContainer = document.getElementById(`${goods[0].category}`);
    let wrapper = document.createElement('div');
    wrapper.classList.add('goods-wraper')
    goods.forEach((good) => {
        let div = document.createElement('div');
        div.classList.add('category-item');
        div.innerHTML = (`
                    <img src="./img/${good.category}/${good.type}.svg"/>
                    <p> Name: <span>${good.type.charAt(0).toUpperCase() + good.type.slice(1)} </span> </p>
                    <p> Price: <span>$${
                    Array.isArray(good.price)
                    ? good.price.join('-')
                    : good.price
                    } </span></p>
        `);
        wrapper.append(div);
        categoryContainer.append(wrapper);
    })
    
}
