// Task 1
let sum = 0;
let start = 2;
let end = 250;
let numbersArray = []
main: for (start; start <= end; start++){
    if (start === 2) {
        sum += start;
        numbersArray.push(start);
        continue main;
    }
    inner: for(let i = 2; i < start; i++ ){
        if (start % i === 0){
            continue main;
        }
    }
    numbersArray.push(start);
    sum += start;
}
console.log(sum);
console.log(numbersArray);



// Task 2
/* 
let n = 0;
let fibonacci = [0, 1];
do {
    n = +prompt('Please, enter the number of items of Fibonacci Sequence you want to be displayed:');
    console.log(n);
} while (isNaN(n) || n === 0 ); // request the number untill the moment the valid one is entered;

if (n === 1) { // if user entered 1
    document.write('You requested just the first element of sequence: ');
    document.write(fibonacci[n]);
} else if (n === 2) { // if user entered 2
    document.write('You requested just the first two elements of sequence: ');
    document.write(fibonacci.slice(1,3));
} else {
    for (let i=0; i < n-2; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i+1]); 
    }
    document.write('The array of Fibonacci Squence that you requested: ');
    document.write('</br>');
    document.write(fibonacci);
    document.write('</br>');
    document.write('Fibonacci Sequence length: ');
    document.write(fibonacci.length);
} */



// Task 3
/* 
let a, b, step;
let numbers = [];
let factorials = [];
let sumOfNumbersFactorial = 0;
let breakLine = '</br>';

do {
    a = +prompt('Please enter first number(a): ');
} while (isNaN(a) || a == 0 );
do {
    b = +prompt('Please enter second number(b) => required condition(a < b): ');
} while (isNaN(b) || b == 0 || a >= b);
do {
    step = +prompt('Please enter the step with which you want to iterate through numbers: ');
} while (isNaN(step) || step == 0);

for (let i = a; i <= b; i= i + step){
    numbers.push(i);
    let sum = 1;
    for(let j = 1; j <= i; j++) {
        sum *= j;
    }
    sumOfNumbersFactorial += sum;
    factorials.push(sum);
}


document.write(`this is a=${a}, this is b=${b}, this is step=${step}`);
document.write(breakLine);
document.write(`Array of factorials ${factorials}`);
document.write(breakLine);
document.write(`This is final sum of number's fuctorials: ${sumOfNumbersFactorial}`);


 */