class Hamburger {
    constructor(size, addIngredient, addition=[]){
        this.size = size,
        this.addIngredient = addIngredient,
        this.addition = addition,
        this.ingredients = [size, addIngredient, [addition]];
    }

    setOption = (type, option) => {
        if(Array.isArray(this[type])){
            this[type].push(option);
        } else {
            this[type] = option;
        }
    }

    getBurgerCalories = () => {
        let calories = 0;
        for (let key in this.ingredients){
            console.log(this.getProductCalories(this.ingredients[key]));
        }

        return calories;

    }

    getProductCalories(product) {
        return HAMBURGER[product].calories
    }

    getPrice () {
        return HamburgerOptions.size[this.size].price
        + HamburgerOptions.addIngredient[this.addIngredient].price
        + HamburgerOptions.addition[this.addition].price
    }
}


const HAMBURGER = {
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

let myHamburger = new Hamburger('big', 'chesee', 'mayonnaise');
/* 
myHamburger.setOption('size', 'small');
myHamburger.setOption('addIngredient', 'salad');
myHamburger.setOption('addition', 'seasoning'); */

console.log(myHamburger);

console.log(myHamburger.getBurgerCalories());