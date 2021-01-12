
//Classes
class HAMBURGER {
    constructor(size, addIngredient, addition){
        this.size = size,
        this.addIngredient = addIngredient,
        this.addition = addition
    }

    calcCalories () {
        return HamburgerOptions.size[this.size].calories
        + HamburgerOptions.addIngredient[this.addIngredient].calories
        + HamburgerOptions.addition[this.addition].calories
    }

    calcPrice () {
        return HamburgerOptions.size[this.size].price
        + HamburgerOptions.addIngredient[this.addIngredient].price
        + HamburgerOptions.addition[this.addition].price
    }
}


const HamburgerOptions = {
    'size': {
        'small': {
            'price': 5,
            'calories': 20
        },
        'big': {
            'price': 10,
            'calories': 40
        }
    },
    'addIngredient': {
        'chesee': {
            'price': 1,
            'calories': 20
        },
        'salad': {
            'price': 2,
            'calories': 5
        },
        'potatoe': {
            'price': 1.5,
            'calories': 10
        }
    },
    'addition': {
        'seasoning': {
            'price': 1.5,
            'calories': 0
        },
        'mayonnaise': {
            'price': 2,
            'calories': 5
        }
    }
}

let myHamburger = new HAMBURGER('big', 'chesee', 'mayonnaise');

console.log(myHamburger);

console.log(myHamburger.calcCalories());
console.log(myHamburger.calcPrice());