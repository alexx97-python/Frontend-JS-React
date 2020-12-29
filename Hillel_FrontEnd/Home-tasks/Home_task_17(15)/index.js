let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000],
		brands: ['hp','huawei']
	},
	{
		type: 'laptop',
		price: [50,1500],
		brands: ['hp','huawei','lenovo']
	},
	{
		type: 'smartphone',
		price: [80,2000],
		brands: ['hp','lenovo']
	},
	{
		type: 'tablet',
		price: [20,1300],
		brands: ['lenovo']
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100,
		colors: ['#c62828','#ce93d8']
	},
	{
		type: 'eyeshadow',
		price: 50,
		colors: ['#ff8a80','#f50057','#c62828']
	},
	{
		type: 'lipstick',
		price: 80,
		colors: ['#f50057','#c62828']
	},
	{
		type: 'nail-polish',
		price: 200,
		colors: ['#c62828','#ce93d8']
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let kitchenProducts = [
	{
		type: 'grater',
		price: 10,
		ingredients: [
			{
				name: 'Butter',
				count: '100 g'
			},
			{
				name: 'Bread',
				count: '200 g'
			},
			{
				name: 'Cheese',
				count: '500 g'
			}
		]},
	{
		type: 'pastry-bag',
		price: 25,
		ingredients: [
			{
				name: 'Powdered sugar',
				count: '210 g'
			},
			{
				name: 'Almond flour',
				count: '1 cup'
			},
			{
				name: 'Salt',
				count: '1 teaspoon'
			},
			{
				name: 'Egg whites',
				count: '3'
			},
			{
				name: 'Granulated sugar',
				count: '50 g'
			},
			{
				name: 'Pink gel food coloring',
				count: '2 drops'
			}
		]},
	{
		type: 'scale',
		price: 5,
		ingredients: [
			{
				name: 'Active dry yeast',
				count: '1 tablespoon'
			},
			{
				name: 'Sugar',
				count: '1 tablespoon'
			},
			{
				name: 'Salt',
				count: '1 tablespoon'
			},
			{
				name: 'Warm water',
				count: '2 cups'
			}
		]},
	{
		type: 'whisk',
		price: 15,
		ingredients: [
			{
				name: 'Freshly squeezed lemon juice',
				count: '2 tablespoon'
			},
			{
				name: 'Baking apples like Golden Delicious, Cortland, or Mutsu',
				count: '3 pounds'
			},
			{
				name: 'Sugar, plus more for sprinkling on the pie',
				count: '2/3 cup'
			},
			{
				name: 'Unsalted butter',
				count: '1/4 cup'
			},
			{
				name: 'Ground cinnamon',
				count: '1/4 teaspoon'
			},
			{
				name: 'large egg, lightly beaten',
				count: '1'
			},
		]}];

// Creating prototype objects
let kitchen = {category: 'kitchen', render: renderKitchenIngredients};
let devices = {category: 'devices', render: renderDevicesBrands};
let cosmetics = {category: 'cosmetics', render: renderCosmeticsColors};

function renderKitchenIngredients() {
	
	return (this.ingredients)
	?`<div class="${this.category}-add-info">
	<h4> Ingredients </h4>
	<img src="./img/${this.category}/ingredients/${this.type}.svg"/>
	<ul>
		${this.ingredients.map((element) => {
			return `<li> ${element.name}: ${element.count} </li>`
		}).join('')}
	</ul>
	</div>`
	: `<div class="${this.category}-add-info"></div>`
}

// Callbacks to add as render method ob prototype
function renderDevicesBrands() {
	
		return (this.brands)
		? `<div class="${this.category}-add-info">
			${this.brands.map((element) => {
			return `<img src="./img/${this.category}/brands/${element}.svg"/>`
		}).join('')}
		</div>`
		: `<div class="${this.category}-add-info"></div>`
	
}

function renderCosmeticsColors() {
		return (this.colors)
		?`<div class="${this.category}-add-info">
				${this.colors.map((element) => {
					return `<div class="color" style="background:${element}"></div>`
				}).join('')}
			</div>`
		:`<div class="${this.category}-add-info"></div>`
}

// Adding prototype to relative objects

let newKitchen = kitchenProducts.map((element) => {
    let good = Object.create(kitchen);
    good.type = element['type'];
	good.price = element['price'];
	good.ingredients = element['ingredients'];
    return good
});

let newDevices = devicesProducts.map((element) => {
    let good = Object.create(devices);
    good.type = element['type'];
	good.price = element['price'];
	good.brands = element['brands'];
    return good;
});

let newCosmetics = cosmeticsProducts.map((element) => {
    let good = Object.create(cosmetics);
    good.type = element['type'];
	good.price = element['price'];
	good.colors = element['colors'];
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
    header.innerHTML = `Category: ${products[0].category}`;
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
					<div class="item-general-info">
						<img src="./img/${good.category}/${good.type}.svg"/>
						<p> Name: <span>${good.type.charAt(0).toUpperCase() + good.type.slice(1)} </span> </p>
						<p> Price: <span>$${
						Array.isArray(good.price)
						? good.price.join('-')
						: good.price
						} </span></p>
					</div>
					${good.render()}
		`);
        wrapper.append(div);
        categoryContainer.append(wrapper);
    })
}
