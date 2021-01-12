class Aircraft{
    constructor(name, sidewind, visibility){
        this.name = name,
        this.sidewind = sidewind,
        this.visibility = visibility
    }
}

class Crew{
    constructor(name, surname, visibility){
        this.name = name,
        this.surname = surname,
        this.visibility = visibility
    }
}

class Airfield{
    constructor(abbr, name, field, visibility){
        this.abbr = abbr;
        this.name = name;
        this.field = field;
        this.visibility = visibility;
    }

    render (plane, runaway=[]) {
        // method that render air field
        let length = runaway.length === 0 ? this.field[2] : runaway[2];
        let width = runaway.length === 0 ? this.field[3] : runaway[3];
        let firstRoad = runaway.length === 0 ? this.field[0] : runaway[0];
        let secondRoad = runaway.length === 0 ? this.field[1] : runaway[1];

        let runawayLines = `<div class="runaway__lines"><span></span><span></span><span></span><span></span></div>`;


        document.write(`
        <div class="runaway">
            <span class="runaway__size">${length}x${width}</span>
            <img class="plane" src="images/${plane.name}.svg" alt="airbus-320">
            ${runawayLines}
            <span class="runaway__number">${firstRoad}</span>

            <span class="runaway__number">${secondRoad}</span>
            ${runawayLines}
        </div>
        `)
    }

    getRunaways(plane){
        let airfield = this;

        let severalRunaways = airfield.field.some(function(runaway){
            return Array.isArray(runaway);
        })

        if(severalRunaways){
            airfield.field.forEach (function(runaway){
                airfield.render(plane, runaway);
            })
        } else {
            airfield.render(plane);
        }
    }
};

class RunwayCondition{
	static renderTable(airfield, plane, pilot){
		airfield.getRunaways(plane);

		let metar = METAR[airfield.abbr];

		let weather = metar.split(' ');

		let visibility = +weather[3];
		let wind = +weather[2].slice(0,3);
		let windMPS = +weather[2].slice(3,5);

		let cloudData = Cloudiness[weather[4].slice(0,3)];
		let edge = +weather[4].slice(3)*10;

		let runawayData = weather[7].slice(4);
		let runawayER = ER[runawayData[0]];
		let runawayCR = CR[runawayData[1]];
		let runawayeReR = eReR[runawayData.slice(2,4)];
		let runawayBRBR = runawayData.slice(4)/100;

		let visibilityCheck = (plane.visibility>visibility) || (pilot.visibility>visibility) || (airfield.visibility>visibility) ? 'disallowed' : 'allowed';
		let windSpeedCheck = windMPS>plane.sidewind ? 'disallowed' : 'allowed';
		let BRBRCheck = runawayBRBR<BRBR ? 'disallowed' : 'allowed';

		let planeGo =  visibilityCheck!=='disallowed' && windSpeedCheck!=='disallowed' && BRBRCheck!=='disallowed' ? 'go' : 'stop';

		let runawayDIV = document.querySelector('.runaway');
		runawayDIV.classList.add(planeGo);

		let planeImg = document.querySelector('.plane');

		let numberOfRunaway = weather[7].slice(1,3);

		if(numberOfRunaway === airfield.field[1]){
			planeImg.classList.add('planeRight');
        }

        // table that display data of weather conditions
		let table = `
		<table class="data">
			<thead>
				<tr>
					<th>Parameters</th>
					<th>Aircraft</th>
					<th>Crew</th>
					<th>Airfield</th>
					<th>Runway condition</th>
				</tr>
				<tr>
					<th></th>
					<th>${plane.name}</th>
					<th>${pilot.name} ${pilot.surname}</th>
					<th>${airfield.abbr} ${airfield.name}</th>
					<th>${metar}</th>
				</tr>
			</thead>
			<tbody>
				<tr class="${visibilityCheck}">
					<td>Горизонтальная видимость:</td>
					<td>${plane.visibility} m</td>
					<td>${pilot.visibility} m</td>
					<td>${airfield.visibility} m</td>
					<td>${visibility} m</td>
				</tr>
				<tr>
					<td>Направление ветра:</td>
					<td colspan="3"></td>
					<td>${wind}°</td>
				</tr>
				<tr class="${windSpeedCheck}">
					<td>Скорость ветра:</td>
					<td>${plane.sidewind}</td>
					<td colspan="2"></td>
					<td>${windMPS}</td>
				</tr>
				<tr>
					<td>Облачность:</td>
					<td colspan="3"></td>
					<td>${cloudData}, ${edge}</td>
				</tr>
				<tr>
					<td>Er (характеристика условия покрытия):</td>
					<td colspan="3"></td>
					<td>${runawayER}</td>
				</tr>
				<tr>
					<td>CR (степень покрытия ВПП):</td>
					<td colspan="3"></td>
					<td>${runawayCR}</td>
				</tr>
				<tr>
					<td>eReR (толщина покрытия ВПП):</td>
					<td colspan="3"></td>
					<td>${runawayeReR}</td>
				</tr>
				<tr class="${BRBRCheck}">
					<td>BRBR (коэффициент сцепления или эффективности торможения):</td>
					<td colspan="2"></td>
					<td>${BRBR}</td>
					<td>${runawayBRBR}</td>
				</tr>
			</tbody>
		</table>`;

		document.write(table);
	};
}




let An24 = new Aircraft('АН-24',12,200),
	Tu154 = new Aircraft('Ту-154',17,300),
	Tu134 = new Aircraft('Ту-134',20,400),
	SukhoiSuperjet100 = new Aircraft('Sukhoi Superjet 100',18,300),
	Boeing737 = new Aircraft('Boeing 737',18,100),
	Airbus320 = new Aircraft('Airbus 320',6,200);

let Ivanov = new Crew('Ivan','Ivanov',500),
	Petrov = new Crew('Petr','Petrov',1000);

let UKKK = new Airfield('UKKK','Kiev Zhuliany',['08','26',2310,45],1500),
	UKLI = new Airfield('UKLI','Ivano-Frankivsk International Airport',['10','28',2507,44],1000),
	UKBB = new Airfield('UKBB','Kyiv Boryspil',[['18L','36R',4000,60],['18R','36L',3500,63]],1200);

// Er – характеристика условия покрытия
const ER = {
	0: 'чисто и сухо (dry and clear)',
	1: 'влажно (damp)',
	2: 'мокрая ли вода местами (wet or water patches)',
	3: 'иней или изморозь (rime or frost)',
	4: 'сухой снег (dry snow)',
	5: 'мокрый снег (wet snow)',
	6: 'слякоть (slush)',
	7: 'лед (ice)',
	8: 'уплотненный или укатанный снег (compacted or rolled snow)',
	9: 'замерзшая или не ровная поверхность (frozen ruts or ridges)',
	'/': 'тип отложений не указываются (type of deposit not reported)'
}

// CR — степень покрытия ВПП (contamination)
const CR = {
	1: 'менее 10% ВПП покрыто',
	2: 'от 11% до 25%',
	5: 'от 26% до 50%',
	9: 'от 51% до 100%',
	'/': 'нет данных'
}

// eReR — толщина покрытия ВПП
const eReR = {
	'00': 'менее 1мм',
	'01': '1мм',
	'02': '2мм',
	'90': '90мм',
	'91': 'в коде не применяется',
	'92': '10см',
	'93': '15см',
	'94': '20см и т.д.',
	'98': '40см',
	'99': 'ВПП не работает',
	'//': 'нет измерений или толщина покрытия незначительна'
}

// BRBR — коэффициент сцепления или эффективности торможения (braking action or friction coefficient).
const BRBR = 0.29;

// Облачность. Примеры: OVC006; SCT023CB; BKN080; VV001
const Cloudiness = {
	'FEW': 'несколько, незначительно, мало, 1-2 октанта',
	'SCT': 'scattered — рассеянные, разбросанные облака, 3-4 октанта',
	'BKN': 'broken — разорванная, значительная облачность, 5-7 октантов',
	'OVC': 'overcast — сплошная облачность, 8 октантов'
}

let METAR = {
	'UKKK': `UKKK 301600Z 13005MPS 1500 OVC003 08/08 Q1011 R08/290156`,
	'UKBB': `UKBB 301600Z 13004MPS 6000 SCT002 06/06 Q1011 R18L/290050`,
	'UKLI': `UKLI 301600Z 01520MPS 9999 BKN056 05/02 Q1005 R10/099870`
}

RunwayCondition.renderTable(UKLI, Boeing737, Ivanov);
RunwayCondition.renderTable(UKKK, SukhoiSuperjet100, Ivanov);
RunwayCondition.renderTable(UKBB, An24, Ivanov);