let gender = ['man','woman'],
	ethnicity = ['white','black','latino','asian','other'],
	age = [[18,29],[30,44],[45,64],[65,100]],
	education = ['college graduate','no college degree'],
    params = ['gender','ethnicity','age','education'];

let electors = generateRandomElectors();
renderUsers(electors);

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