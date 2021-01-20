//window.onload

// let element = document.querySelector('#hello');
// console.dir(element);

// let link = document.querySelector('a');
// console.dir(link);

//null

// let table = document.querySelector('#table');
// console.dir(table);

// let tableTDs = document.querySelectorAll('#table > tbody > tr > td');
// console.dir(tableTDs);

// tableTDs.forEach(function(td){
// 	// console.dir(td);
// 	// console.log(td.children.length)
// 	if(td.children.length>0){
// 		let innerTable = td.children[0];
// 		let tdLast = innerTable.querySelector('tr:first-of-type td:last-of-type');
// 		tdLast.classList.add('blue','green');
// 	}
// })

// function addClass(level){}
// addClass(3);

// let levelCount = document.querySelector('#levelCount');
// console.log(levelCount.value);

// let example = document.querySelector('#example');
// console.dir(example);

// example.setAttribute('data-name','Alina');
// //example.removeAttribute('data-id');


// //setAttribute(name,value);
// //removeAttribute(name);

// //data-attr (dataset.name)

// example.dataset.hello = 'privetik';

// for(let key in example.dataset){
// 	console.log(key);
// }

// let body = document.querySelector('body'),
// 	example = document.querySelector('#example');

// setTimeout(function(){
// 	example.remove();

// 	console.dir(example);
// 	body.prepend(example);

// },1500);

//remove()

// let dog = document.querySelector('#dog');

// setTimeout(function(){
// 	dog.src = 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
// 	dog.classList.add('newImage');
// },1500)

// let newImages = [
// 	{
// 		src: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg',
// 		alt: 'Anna'
// 	},
// 	{
// 		src: 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0',
// 		alt: 'Ivan'
// 	},
// 	{
// 		src: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
// 		alt: 'Oleg'
// 	}
// ]

// let images = document.querySelectorAll('.images img');
// console.dir(images);

// setTimeout(function(){
// 	images.forEach(function(img, index){
// 		//console.dir(img);
// 		img.src = newImages[index].src;
// 		img.alt = newImages[index].alt;
// 		img.dataset.id = `dog-${index+1}`;
// 	})
// },2000)

// let dogsImages = images.children;
// console.dir(dogsImages);

//Events

// let block = document.querySelector('.block');
// console.dir(block);

// block.onmouseenter = handler;
// block.onmouseleave = handler;
//block.onmousedown = handler;
//block.onmouseup = handler
// block.ondblclick = handler;
// block.oncontextmenu = handler;
// block.onclick = handler;
//block.onmousemove = handler;

// block.onclick = function(){
// 	f1();
// 	f2();
// }

// function handler(event){
// 	console.log(event, event.type);

// 	let code = event.keyCode;

// 	if(code === 38){
// 		alert(event.key);
// 	}

// 	if(code === 1080){
// 		console.log('here');
// 		console.dir(this);
// 		console.dir(this.value);
// 	}
// }

// document.onclick = function(){
// 	console.log('hello');
// }

// onmouseover
// onmouseout
// onmousemove

// onmouseenter
// onmouseleave

// ondblclick
// oncontextmenu

// let inputElement = document.querySelector('#inputElement');

// inputElement.onkeypress = handler;
// inputElement.onkeydown = handler;

class superMath{
	constructor(x,y,znak){
		this.x = x;
		this.y = y;
		this.znak = znak;

		this.operation = {
			'+': function(a,b){return a+b},
			'-': function(a,b){return a-b}
		}
	}

	check(){
		let userChoice = confirm(`Would you like to make operation ${this.znak} with x=${this.x} and y=${this.y}`);
		console.log(userChoice);

		if(userChoice){
			this.makeOperation();
		} else{
			this.input();
		}
	}

	makeOperation(){
		let currentZnak = this.znak;
		console.log(currentZnak);

		if(this.operation[currentZnak]){
			console.log( this.operation[currentZnak](this.x, this.y) );
		}else{

		}
	}


	input(){
		//enter new data
	}
}

let obj = new superMath(10,20,'/');
console.log(obj);

obj.check();

