

// Variables
/* const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonDevide = document.getElementById('buttonDevide');
 */

let arrayOfButtons = document.getElementsByClassName('operation-button');

// this function take event as argument and depend on it, makes decisions
function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operator = clickedElement.innerHTML;
    makeOperation(operator)
}

function addCommonEventListener(i) {
    arrayOfButtons[i].addEventListener('click', onOperationButtonClick);
}


// Event Listneres
for (let i = 0; i < arrayOfButtons.length; i++) {
    addCommonEventListener(i)
}

// it was function just to check if addEventListner works
/* function checkOperator () {
    console.log('You clicked on an operator')
} */
let input_1 = document.getElementById('number1')
let input_2 = document.getElementById('number2')


function makeOperation(operator) {
    number1 = Number(input_1.value);
    number2 = Number(input_2.value);

    if (operator === '+'){
        let result = number1 + number2;
        window.alert(`The result is ${result}`);
    } else if (operator === '-') {
        let result = number1 - number2;
        window.alert(`The result is ${result}`);
    } else if (operator === '*') {
        let result = number1 * number2;
        window.alert(`The result is ${result}`);
    } else {
        let result = number1 / number2;
        window.alert(`The result is ${result}`);
    }
}
