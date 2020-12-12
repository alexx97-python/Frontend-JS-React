let gender = ['man','woman'],
	ethnicity = ['white','black','latino','asian','other'],
	age = [[18,29],[30,44],[45,64],[65,100]],
	education = ['college graduate','no college degree'],
    params = ['gender','ethnicity','age','education'];

let electors = generateRandomElectors();
renderUsers(electors);

getPresident(electors);

function generateRandomElectors(n=10){
    let electors = []
    for(let i=0;i<n;i++){
        let elector = [
            gender[getRandomInteger(0, gender.length)],
            ethnicity[getRandomInteger(0, ethnicity.length)],
            age[getRandomInteger(0, age.length)],
            education[getRandomInteger(0, education.length)],
        ]
        electors.push(elector);
    }
    return electors;
}

function renderUsers (electors) {
    let usersTr = electors
        .map((elector) => {
            let electorTD = elector
                .map((electorData, index) => {
                    return index === 2
                    ? `<td> ${electorData.join('-')} </td>`
                    : `<td> ${electorData} </td>`
                }).join('')
            let tr = `<tr> ${electorTD} </tr>`;
            return tr;
        }).join('');

    document.write(`
        <table class="electors">
            ${renderThead(params)}
            <tbody>${usersTr}</tbody>
        </table>
    `)
}

function renderThead(params){
    let ths = params
        .map(function(param){
            return `<th>${param}</th>`
        })
        .join('');
    return `<thead><tr>${ths}</tr></thead>`
}


function getRandomInteger (min=0, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

function getPresident(electors) {
    electors.forEach( (elector, index) => {
        elector.push([]);
            // check gender param
        if (elector[0] === 'woman'){
            elector[elector.length-1].push('clinton');
        } else {
            elector[elector.length-1].push('trump');
        }
            // check ethnicity param
        if (elector[1] === 'white' ||
            elector[1] === 'black' ||
            elector[1] == 'latino') {
                elector[elector.length-1].push('trump');
            } else {
                elector[elector.length-1].push('clinton');
            }
            // check age param
        if (elector[2][0] == age[2][0]) {
            elector[elector.length-1].push('trump');
        } else {
            elector[elector.length-1].push('clinton');
        }

            // check graduation parameter
        if (elector[3] === 'college graduate') {
            elector[elector.length-1].push('clinton');
        } else {
            elector[elector.length-1].push('trump');
        }
            // find out the choice of each selector and add specifi class to the row
        let electorPresident = getElectorPresident(elector[elector.length-1]);
        let currentTr = document.querySelector(`.electors tbody tr:nth-child(${index+1})`);
        currentTr.classList.add(electorPresident);

        elector.push(electorPresident);
    })

    let electorsPresident = electors
        .map((elector) => {
            return elector[elector.length-1];
        })

    let presidentName = getElectorPresident(electorsPresident);
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