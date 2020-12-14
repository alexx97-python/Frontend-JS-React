'use strict'

let isAlive = true;
let isMArried = false;

let isDead = !isAlive;

console.log(
    2 === 2,
    2 >= 2,
    2 <= 2
);

console.log(
    2 != 2,
    2 > 2,
    2 < 2
);



let cashWallet = 30;
let age = 25

const price = 40;
const ageLimit = 18;

const isAllowed = age >= ageLimit;
const hasEnoughMoney = cashWallet >= price;


// Operator AND = &&, Operator OR = || 
const canBuy = isAllowed && hasEnoughMoney;

console.log(canBuy)


// Numbers in JavaScript

let x1 = 42


console.log(
    10 + 8, // 18
    10 - 8, // 2
    10 * 8, // 80
    10 / 8, // 1.25
    10 % 8, // 2
    10 ** 8  // 100000000
)

const name  =  'Oleksii'
const surname  =  'Sheiko'
const fullname  =  `${name} ${surname} Andreevich`
// result 'Oleksii Sheiko Andreevich

// shows additional menue to debug in console
debugger;