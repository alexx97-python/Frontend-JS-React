// Variables
const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonDevide = document.getElementById('buttonDevide');



// Event Listneres
buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);

// it was function just to check if addEventListner works
/* function checkOperator () {
    console.log('You clicked on an operator')
} */

function onButtonPlusClick() {
    let input_1 = Number(document.getElementById('number1').value);
    let input_2 = Number(document.getElementById('number2').value);
 
    let result = input_1 + input_2;
    window.alert(`The result is ${result}`);
}
function onButtonMinusClick() {
    let input_1 = Number(document.getElementById('number1').value);
    let input_2 = Number(document.getElementById('number2').value);
 
    let result = input_1 - input_2;
    window.alert(`The result is ${result}`);
}
function onButtonMultiplyClick() {
    let input_1 = Number(document.getElementById('number1').value);
    let input_2 = Number(document.getElementById('number2').value);
 
    let result = input_1 * input_2;
    window.alert(`The result is ${result}`);
}
function onButtonDevideClick() {
    let input_1 = Number(document.getElementById('number1').value);
    let input_2 = Number(document.getElementById('number2').value);
 
    let result = input_1 / input_2;
    window.alert(`The result is ${result}`);
}