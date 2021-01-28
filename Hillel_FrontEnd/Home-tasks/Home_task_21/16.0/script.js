// let block = document.querySelector('.block');

// const ArrowRight = 39,
// 	ArrowLeft = 37,
// 	movingDistance = 50;

// let knopochki = {
// 	39: function(){
// 		block.style.left = `${blockLeft+movingDistance}px`;
// 	},
// 	50: function(){

// 	}
// }

// document.onkeydown = function(e){
// 	console.log(e);
// 	let key = e.keyCode;
// 	let bodyWidth = e.target.clientWidth;
// 	let blockLeftPosition = block.offsetLeft;

// 	//console.log(`bodyWidth: ${bodyWidth}`);
// 	//console.dir(block);

// 	let blockNextPoint = blockLeftPosition+movingDistance+block.clientWidth;
// 	//console.log(`blockNextPoint: ${blockNextPoint}`);

// 	let blockLeft = block.style.left === '' ? 0 : parseInt(block.style.left);

// 	//knopochki[key] && knopochki[key]();

// 	if(key === ArrowRight && blockNextPoint<=bodyWidth){
// 		block.style.left = `${blockLeft+movingDistance}px`;
// 	} else{
// 		block.classList.add('error');
// 	}

// 	if(key === ArrowLeft){
// 		block.classList.remove('error');
// 		block.style.left = `${blockLeft-movingDistance}px`;
// 	}
// }

// document.onkeydown = handler; // отслеживание сервисных кнопок
// document.onkeypress = handler;

// function handler(e){
// 	console.log(e, e.type);
// }

//oninput

let userName = document.querySelector('#userName');

// userName.onkeypress = function(e){
// 	console.log(e);
// 	console.log(e.target.value);
// }

// userName.oninput = function(e){
// 	console.log(e, e.type);
	
// 	let currentValue = this.value;
// 	console.log(currentValue, currentValue.length);

// 	if(e.data === 'D'){
// 		let arrString = currentValue.split('');
// 		console.log(arrString);
// 		arrString.pop();

// 		this.classList.add('error');

// 		setTimeout(
// 			function(){
// 				e.target.value = arrString.join('');
// 				e.target.classList.remove('error');
// 			},1000)
// 	}
// }

//onchange
// userName.onchange = function(e){
// 	let currentValue = this.value;
// 	console.log(currentValue);


// 	if(currentValue.indexOf('@')===-1){
// 		console.log('error');
// 	}

// 	console.log(`last element: ${currentValue[currentValue.length-1]}`);
// 	if(currentValue[currentValue.length-1]==='.'){
// 		console.log('error');
// 	}
// }

let userLogin = document.querySelector('#userLogin'),
	inputUserLogin = userLogin.querySelectorAll('input'),
	labalesUserLogin = userLogin.querySelectorAll('label');

userLogin.onsubmit = function(event){
	event.preventDefault();

	let selectedColor = this.querySelector('input[name=color]:checked'),
		parentLabel = selectedColor.parentElement;

	console.dir(selectedColor);
	console.dir(parentLabel);
	// console.log(selectedColor.value);

	emptyLabels(labalesUserLogin);
	parentLabel.style.backgroundColor = selectedColor.value;

	console.log(event, event.target);
}

function emptyLabels(labels){
	labels.forEach(function(label){
		label.style.backgroundColor = null;
	})
}


let link = document.querySelector('a');
link.onclick = function(e){
	e.preventDefault();
	let link = this.dataset.href;
	window.open(link, '_blank');
}

//console.log(inputUserLogin);

inputUserLogin.forEach(function(input){
	input.onfocus = function(){
		this.classList.add('focus');
	}
})

//onsubmit
//onfocus

//preventDefault
