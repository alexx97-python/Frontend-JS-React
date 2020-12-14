// Declaring variables
let amount = 18;

// Declaring constant variables
const cookiePrice = 7;
const candyPrice = 8;

// Amount after purchasing
amount = amount - cookiePrice


// if-else circle

if (amount >= candyPrice) {
    document.write('I have enough money')
} else {
    document.write('I do not have enough money')
}

// Comment for more than one row /*....*/     Command Alt+Shift+A   The same command to uncomment 


/* if (amount >= candyPrice) {
    document.write('I have enough money')
} else {
    document.write('I do not have enough money')
} */

const x = 10;

console.log(x);

//
const type = typeof x;
console.log(type)

function printRectanglInfo(a, b) {
    const perimeter = 2 * a + 2 * b;
    const square = a * b;

    console.log('Rechtangle', a, 'x', b);
    console.log('Perimeter is', perimeter);
    console.log('Square is ', square);
    console.log('-------------------')
}

printRectanglInfo(3, 5)
printRectanglInfo(4, 7)

function buildHouse(numberOfFloors, color) {
    const house = `${numberOfFloors}-floors house and of ${color} color.`

    return house;
}

const smallHouse = buildHouse(2, 'red');
const bigHouse = buildHouse(9, 'white');

console.log(smallHouse);
console.log(bigHouse);


function sum(a, b = 0 ) {
    console.log(a, b);

    return a + b;
}

const result = sum(3);

console.log(result);


// Function expression (In this case, we can use both before and after declaration)
function isEven(x) {
    return (x % 2) === 0;
}

console.log(
    isEven(3),
    isEven(4),
    isEven(5)
);

// function Declaration (In this case, we can use just after declaration, not before!!!!)
const isEven2 = function(x) {
    return (x % 2) === 0;
}

console.log(isEven2(4));

// 4 ways of Declaring function

function getCircleSquarel(r) {
    return Math.PI * r * r;
}

const getCircleSquarel2 = function(r) {
    return Math.PI * r * r;
}

const getCircleSquarel3 = (r) => {
    return Math.PI * r * r;
}

const getCircleSquarel4 = (r) => Math.PI * r * r;

const getCircleSquarel5 = r => Math.PI * r * r;

const square = getCircleSquarel4(1);
console.log(square)


// if-else construction

const age = 1;

if (age > 18) {
    console.log('Adult');
} else if (age > 7) {
    console.log('Child');
} else if (age > 3) {
    console.log('Todler');
} else {
    console.log('Baby');
}

if (age > 18) console.log('Adult');
else console.log('Child');


// The way of declaring variables without if-else circle

/* if (age > 18) {
    message = 'Adult';
} else {
    message = 'Child';
} */

// The same 

let message = (age > 18) ? 'Adult' : 'Child';


// Switch construction

const count = 3;

if (count === 1) {
    console.log('One');
} else if (count === 2) {
    console.log('Two');
} else {
    console.log('Many');
}

// This can be replaced with Switch 

switch (count) {
    case 1:
        console.log('One');
        break;

    case 2:
        console.log('Two');
        break;

    default:
        console.log('Many');
}


// Switch with return statement

const primaryColor = 'red'; // red, green or blue
let secondaryColor = getSecondaryColor(primaryColor);

function getSecondaryColor(primaryColor) {
    switch (primaryColor) {
    case 'red':
        return 'magenta';

    case 'green':
        return 'yellow';

    case 'blue':
        return 'cyan';

    default:
        return 'white';
  }
}

console.log(secondaryColor)

// Swithc case сравнивает выражение в скобках с результатом в каждом кейсе
const value = 3;

switch (true) {
    case (value < 5):
        console.log('A few');
        break;

    case (value > 10):
        console.log('Many');
        break;

    default:
        console.log('Some')
}


// For circle

for (let i = 0; i < 3; i++) {
    console.log(i);
    console.log('Ok!');
}

console.log('--- DONE ---');


//In this case, we can use variable, outside the circle;
let n = 0


for (; n < 4; n++) {
    console.log(n);
    console.log('Ok!')
}

console.log('___Done' + n)

// The while circle
let g = 1240;
let counts = 0;


while (g % 2 === 0) {
    g = g / 2;

    console.log(g);

    counts++;

}

console.log(counts);

// This structure works the same way
/* do {
    g = g / 2;
    console.log(g)

    counts++;
} while (n % 2 === 0) */


function getDrinks(guests) {
    // write code here
    let number = 0
    for (let i = 0; i < guests + 1; i++) {
      number = number + i
    }
  
    return number;
  }

console.log(getDrinks(5));


function getYears(amount, percent, expectedLimit) {
    // write code here

    let amountOfCredit = amount * (1 + percent / 100);
    let numberOfYears = 0;

    while (amountOfCredit <= expectedLimit) {
      amountOfCredit = amountOfCredit * (1 + percent / 100);
      numberOfYears += 1;
    }

    return numberOfYears;
}

console.log(getYears(1800, 11, 1998));


// Значения которые переобразовываються в False (false, 0, NaN, 0n, '', null, undefined )
// !! - двойное отрицание, перевод в булиан значения (явное)
// !!12 это true;


// Conver nnumber from string to number
// two ways

const val = '12';

console.log(Number(val), 'Number');
console.log(+val, '+')

// parseFloat and parseInt convert the string into number till 
// the moment they can't (face alphabet character or another symbol);
const numbers = '100as';

console.log(parseFloat(numbers), 'parseFloat');
console.log(parseInt(numbers), 'parseInt');

// convert number to String (4 ways)

const z = 12345;

console.log(String(z), z.toString(), '' + z, `${z}`);

// строгое сравнение (===) - берет во внимание тип значения 
// нестрогое сравнение (==) - при сравнение преобразовывает значение к одному типу;
//              true         true
console.log(2.0 == 2.0, 2.0 === 2.0);
//              false          true
console.log(2.0 === '2.0', 2.0 == '2.0');


// Logical operators (|| OR, && AND)
// проверка в OR идет следущим образом, если первый операнд true то возвращает его,
// иначе возвращает другое значение


console.log(
    true || true, // true
    true || false, // true
    false || true, // true
    false || false  //false
)


function canTheyBook(adultsCount, childrenCount) {
    // write code here
  
    if (childrenCount / adultsCount > 2 || childrenCount + adultsCount > 8
     || adultsCount === 0) {
      return false;
    } else if (childrenCount + adultsCount < 9 && adultsCount + 0 < 9) {
      return true;
    }
  
    return false;
  }

console.log(canTheyBook(2));

// Number rounding 

let r = 12.123

console.log(r)

console.log('Math.floor(r)', Math.floor(r)); // целое <= r;
console.log('Math.ceil(r)', Math.ceil(r)); // целое >= r;
console.log('Math.round(r)', Math.round(r)); // ближайшое целое;
console.log('Math.trunc(r)', Math.trunc(r)); // без дробной части;

console.log('r.toFixed(x)', r.toFixed(0)); // оставляет х знаков после комы и преобразовывает в строку

// Working with strings

// String length

const variable = 'Mike';

console.log(variable.length);

// getting specific symbols from string

console.log(
    variable[0], // еслм взят индекс выше максимально - undefined
    variable.charAt(2)  // в этом случае вернет пустую строку
);

// iteration over string

for (let i=0; i < variable.length; i++) {
    console.log(variable.charAt(i))
}

for (let letter of variable) {
    console.log(letter)
}

// find a substring

const main = 'abcdebc';
const part = 'bc';

console.log(
    main.includes(part, 3),
    main.indexOf(part, 3),
    main.lastIndexOf(part),
    main.startsWith(part),
    main.endsWith(part)
)

const messages = '0123456789';

console.log(
    messages.substr(3, 5), // 34567
    messages.substring(3, 5), // 34
    messages.slice(3, 5) // 34
);

// get rif of tabulation or spaces that we entered by users
// Use trim, trimLeft ot trimRight

const phrase = '   First   Last   ';

const trimmed = phrase.trim();
const trimmedLeft = phrase.trimLeft();
const trimmedRight = phrase.trimRight();

console.log(`---${trimmed}---`);
console.log(`---${trimmedLeft}---`);
console.log(`---${trimmedRight}---`);

// padStart and padEnd

const cardNumber = '2597 5269 7640 6966';

const resultNumber = cardNumber.slice(-4);

console.log(resultNumber.padStart(19, '**** '));
console.log(resultNumber.padEnd(19, ' ****'));

const divider = '-'.repeat(15);
console.log(divider);

const replacePhrase = 'what time is it';

const repalcedPhrase = replacePhrase.replace('is', 'was');

console.log(replacePhrase);
console.log(repalcedPhrase);

const repalcedPhraseT = replacePhrase.replace(/ /g, '-');

console.log(repalcedPhraseT);