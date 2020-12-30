class HAMBURGER {
    constructor(size, ingredient, ...spices){
        this.size = size,
        this.ingredient = ingredient,
        this.spices = spices
    }

    calcCalories () {
        return HamburgerOptions.size[this.size].calories
        + HamburgerOptions.addIngredients[this.ingredient].calories
        + HamburgerOptions.addition[this.spices].calories
    }

    calcPrice () {
        return HamburgerOptions.size[this.size].price
        + HamburgerOptions.addIngredients[this.ingredient].price
        + HamburgerOptions.addition[this.spices].price
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
    'addIngredients': {
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


let myHamburger = new HAMBURGER('small', 'chesee', 'seasoning');

console.log(myHamburger);
console.log(myHamburger.calcCalories());
console.log(myHamburger.calcPrice())