// This is my first JavaScript code!

console.log('Hello world');

let name = 'Alex';
console.log(name);

// let variables can be reasigned

// Names of keyword can't be a reserved keywoed;
// Should be meaningful
// Can't start with a number
// Can't contain a space or hyphen(-)
// should be according camel notation
// variables are case-sensitive


const interestRate = 0.3

// const variables can't be reasigned

// declaring object, name and age are properties of the object;
let person = {
    name: 'Alex',
    age: 30
};

// Changing and acsesing properties of object
// Dot Notation
person.name = 'Mosh';

// Bracket Notation
person['name'] = 'Marry';


console.log(person.name);

// Arrays

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;

// Different type of elements can be stored in the similar array
console.log(selectedColors);

// Functions

function greet () {
    console.log('Hello World');
}

greet();