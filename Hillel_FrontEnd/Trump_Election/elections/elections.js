// Lesson code

let gender = ['man','woman'],
	ethnicity = ['white','black','latino','asian','other'],
	age = [[18,29],[30,44],[45,64],[65,100]],
	education = ['college graduate','no college degree'],
	params = ['gender','ethnicity','age','education'];

function generateUsers(n=10){
	let electors = [];
	for(let i=0; i<n; i++){
		let elector = [
			gender[getRandomInt(0,gender.length)],
			ethnicity[getRandomInt(0,ethnicity.length)],
			age[getRandomInt(0,age.length)],
			education[getRandomInt(0,education.length)]
		];
		electors.push(elector)
	}
	console.log(electors);
	return electors;
}

function renderUsers(electors){
	let usersTR = electors
		.map(function(elector){
			let electorTD = elector
				.map(function(electorData, index){
					return index == 2 ? `<td>${electorData.join('-')}</td>` : `<td>${electorData}</td>`;
				})
				.join('');

			let tr = `<tr>${electorTD}</tr>`;
			return tr;
		})
		.join('');
	
	document.write(`
		<table class="electors">
			${renderThead(params)}
			<tbody>${usersTR}</tbody>
		</table>`);
}

function renderThead(params){
	let ths = params
		.map(function(param){
			return `<th>${param}</th>`
		})
		.join('');
	return `<thead><tr>${ths}</tr></thead>`
}

function getRandomInt(min=0, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getPresident(electors){
	electors
		.forEach(function(elector, index){
			console.log(elector);
			elector.push([]);

			if(elector[0] == 'woman'){
				elector[elector.length-1].push('clinton');
			} else{
				elector[elector.length-1].push('trump');
			}

			if(elector[1] == 'white' || elector[1] == 'black' || elector[1] == 'latino'){
				elector[elector.length-1].push('trump');
			} else{
				elector[elector.length-1].push('clinton');
			}

			if(elector[2][0] == age[2][0]){
				elector[elector.length-1].push('trump');
			} else{
				elector[elector.length-1].push('clinton');
			}

			if(elector[3] == 'college graduate'){
				elector[elector.length-1].push('clinton');
			} else{
				elector[elector.length-1].push('trump');
			}

			let electorPresident = getElectorPresident(elector[elector.length-1]);
			let currentTr = document.querySelector(`.electors tbody tr:nth-child(${index+1})`);
			currentTr.classList.add(electorPresident);

			elector.push(electorPresident);
		})

	let electorsPresident = electors
		.map(function(elector){
			return elector[elector.length-1];
		})

	console.log(electorsPresident);

	let presidentName = getElectorPresident(electorsPresident);
	console.log(presidentName);

	let presidentImg = document.querySelector('.battle');
	presidentImg.src = `images/${presidentName}.png`;

	return presidentName;
}

function getElectorPresident(electorPresidents){	
	let trumpVoices = electorPresidents
		.filter(function(presidentName){
			return presidentName == 'trump'
		})
		.length;

	let clintonVoices = electorPresidents
		.filter(function(presidentName){
			return presidentName == 'clinton'
		})
		.length;

	if(trumpVoices>clintonVoices){
		return 'trump';
	} else if(trumpVoices<clintonVoices){
		return 'clinton';
	} else if(trumpVoices == clintonVoices){
		return 'other'
	}
}

let electors = generateUsers();
renderUsers(electors);

getPresident(electors);