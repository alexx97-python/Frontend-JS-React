const sports = [
    ['1F93A', 'fencing'],
    ['26F8', 'figure skating'],
    ['26F7', 'skier'],
    ['1F3C2', 'snowboarder'],
    ['1F3CC', 'golfing'],
    ['1F6A3', 'rowing boat'],
    ['1F3CA', 'swimming'],
    ['1F938', 'gymnastics'],
    ['1F93E', 'handball']
];

const winners = [
    ['fencing', 'gold', 'fr'],
    ['fencing', 'silver', 'it'],
    ['fencing', 'bronze', 'us'],


    ['figure skating', 'gold', 'ca'],
    ['figure skating', 'silver', 'ru'],
    ['figure skating', 'bronze', 'us'],


    ['skier', 'gold', 'no'],
    ['skier', 'silver', 'ru'],
    ['skier', 'bronze', 'fr'],


    ['snowboarder', 'gold', 'us'],
    ['snowboarder', 'silver', 'jp'],
    ['snowboarder', 'bronze', 'au'],


    ['golfing', 'gold', 'gb'],
    ['golfing', 'silver', 'se'],
    ['golfing', 'bronze', 'us'],


    ['rowing boat', 'gold', 'us'],
    ['rowing boat', 'silver', 'gb'],
    ['rowing boat', 'bronze', 'ro'],


    ['swimming', 'gold', 'us'],
    ['swimming', 'silver', 'gb'],
    ['swimming', 'bronze', 'au'],


    ['gymnastics', 'gold', 'ru'],
    ['gymnastics', 'silver', 'ru'],
    ['gymnastics', 'bronze', 'ua'],


    ['handball', 'gold', 'dk'],
    ['handball', 'silver', 'fr'],
    ['handball', 'bronze', 'de'],
];

const olympic = ['1F535', '26AB', '1F534', '1F7E1', '1F7E2'];

const medals = [
    ['1F947', 'gold'],
    ['1F948', 'silver'],
    ['1F949', 'bronze'],
];

const continents = [
    ['fr', 'Europe'],
    ['it', 'Europe'],
    ['us', 'The Americas'],
    ['ca', 'The Americas'],
    ['ru', 'Europe'],
    ['no', 'Europe'],
    ['jp', 'Asia'],
    ['au', 'Oceania'],
    ['gb', 'Europe'],
    ['se', 'Europe'],
    ['ro', 'Europe'],
    ['ua', 'Europe'],
    ['dk', 'Europe'],
    ['de', 'Europe']
];

// 2 Version
const table = createEmptyTable(sports, olympic);

fillTbaleWithData(winners);


function fillTbaleWithData(winners){
    // iterate through winners and place them in right td 
    for (let i = 0; i < winners.length; i++) {
        // calculate valid id
        let validId = `${findValidTrId(winners[i])} ${findValidThId(winners[i])}`;
        let td = document.getElementById(validId);
        console.log(td);

        let p = document.createElement('p');
        p.innerHTML = `${getMedalIcon(winners[i][1])} - ${getCountryIcon(winners[i][2])}`;

        // finds right class to add for background colour
        if(winners[i][1] === 'gold'){
            p.classList.add('gold');
        } else if (winners[i][1] === 'silver'){
            p.classList.add('silver');
        } else {
            p.classList.add('bronze');
        }

        td.append(p);
    }
}


function getCountryIcon(element){
    // converts chrcode into icon
    return element.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397));
}


function getMedalIcon(element){
    let medalUnicode = getMedalUnicode(element);

    return convertFromUnicode(medalUnicode);

function getMedalUnicode(medal){
        // returns right unicode for medal
    if( medal=== 'gold'){
        return medals[0][0];
    } else if ( medal === 'silver'){
        return medals [1][0];
    } else {
        return medals [2][0];
    }}
}


function convertFromUnicode(unicode){
    // converts unicode into icon
    return String.fromCodePoint(parseInt(unicode, 16));
}

function findValidTrId(element) {
    // return valid id for tr element
    return `tr-${element[0]}`;
}

function findValidThId(element) {
    // return valid id for th element
    let result = defineValidRingColor(findContinent(element));
    
    function defineValidRingColor(continent) {
        // based on continent value returns the unicode of ring it belongs to
    switch (continent) {
        case 'Europe':
            return '1F535';
        case 'The Americas':
            return '1F534';
        case 'Asia':
            return '1F7E1';
        case 'Oceania':
            return '1F7E2';
        case 'Africa':
            return '26AB';
        default:
            return '26AB';
        }
    }

    function findContinent(element) {
        // based on country value returns valid continent
        for (let i = 0; i < continents.length; i++) {
            if (element[2] === continents[i][0]) {
                return continents[i][1];
            }
        }
    }

    return `th-${result}`;
}



function createEmptyTable(rowsIcons, columnsIcons) {
    // based on values for first row and column, creates layout for table
    // returns table with empty cells;
    let table = document.getElementById('olympic-table');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    tr.append(th);
    table.append(tr);
    for (let i = 0; i < columnsIcons.length; i++) {
        th = document.createElement('th');
        th.innerHTML = String.fromCodePoint(parseInt(columnsIcons[i], 16));
        th.id = `th-${columnsIcons[i]}`;
        tr.append(th);
    }
    for (let i = 0; i < rowsIcons.length; i++) {
        tr = document.createElement('tr');
        tr.innerHTML = String.fromCodePoint(parseInt(rowsIcons[i][0], 16));
        tr.id = `tr-${rowsIcons[i][1]}`;
        for (let j = 0; j < columnsIcons.length; j++) {
            let td = document.createElement('td');
            td.innerHTML = '';
            td.id = `${tr.id} th-${columnsIcons[j]}`;
            tr.append(td);
        }
        table.append(tr);
    }
    return table;
}


// 1 Version
/*
let ringsWithCountries = [...continents];

for (let i = 0; i < ringsWithCountries.length; i++) {
    if (ringsWithCountries[i][1] === 'Europe') {
        ringsWithCountries[i].push(olympic[0]);
    } else if (ringsWithCountries[i][1] === 'The Americas') {
        ringsWithCountries[i].push(olympic[2]);
    } else if (ringsWithCountries[i][1] === 'Asia') {
        ringsWithCountries[i].push(olympic[3]);
    } else if (ringsWithCountries[i][1] === 'Oceania') {
        ringsWithCountries[i].push(olympic[4]);
    } else {
        ringsWithCountries[i].push(olympic[1]);
    }
}


console.log(ringsWithCountries);

let finalArray = [];


for (let i = 0; i < sports.length; i++) {
    for (let j = 0; j < winners.length; j++) {
        for (let x = 0; x < ringsWithCountries.length; x++) {
            for (let y = 0; y < olympic.length; y++) {
                if (winners[j][0] === sports[i][1] &&
                    winners[j][2] === ringsWithCountries[x][0] &&
                    olympic[y] === ringsWithCountries[x][2]) {
                    finalArray.push([sports[i], winners[j], ringsWithCountries[x]]);
                }
            }
        }
    }
}


let table = document.getElementById('olympic-table');

let tr = document.createElement('tr');
let td = document.createElement('td');
tr.append(td);
table.append(tr);

for(let i=0; i<olympic.length; i++){
    let td = document.createElement('td');
    td.innerHTML = String.fromCodePoint(parseInt(olympic[i], 16));
    tr.append(td);
}

  for(let i=0; i<sports.length; i++){
      //debugger;
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = String.fromCodePoint(parseInt(sports[i][0], 16));
    tr.append(td);
    table.append(tr);
    for(let j=0; j<finalArray.length; j++){
        debugger;
        if(sports[i][1] === finalArray[j][1][0]){
            for(let x=0;x<olympic.length;x++){
                let td = document.createElement('td');
                td.id = `tr-${j+1} td-${x+1}`;
                tr.append(td);
            }
             for(let y = 0; y<olympic.length; y++){
                let td = document.createElement('td');
                tr.append(td);
                if(olympic[y]===finalArray[j][2][2]){
                    td.innerHTML = `${finalArray[j][1][1]} - ${finalArray[j][1][2]}`;
                }
            }
        }
    }
}
 */