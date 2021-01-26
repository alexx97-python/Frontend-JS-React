class HumbergerMethods {

    setOption (type, option) {
        if(Array.isArray(this[type])){
            if (!this[type].includes(option)){
                this[type].push(option);
            } else {
                console.log('You have already added this option in your burger')
            }
            
        } else {
            this[type] = option;
        }
    }

    getBurgerCalories () {
        let calories = 0;
        for (let key in this){
                if(Array.isArray(this[key])){
                    this[key].forEach(element => {
                        calories += HAMBURGER[key][element].calories;
                    });
                } else {
                    calories += HAMBURGER[key][this[key]].calories;
                }
        }
        console.log(`This burger contains value of ${calories} calories.`)
    }


    getBurgerPrice () {
        let price = 0;
        for (let key in this){
                if(Array.isArray(this[key])){
                    this[key].forEach(element => {
                        price += HAMBURGER[key][element].price;
                    });
                } else {
                    price += HAMBURGER[key][this[key]].price;
                }

        }
        console.log(`This burger cost is ${price}$.`)
    }
}

class Hamburger extends HumbergerMethods {
    constructor(size, addIngredient, addition){
        super(constructor);
        this.size = size,
        this.addIngredient = addIngredient,
        this.addition = [addition]
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

myHamburger.setOption('size', 'small');
myHamburger.setOption('addIngredient', 'salad');
myHamburger.setOption('addition', 'seasoning'); 
myHamburger.setOption('addition', 'seasoning'); 



console.log(myHamburger);

myHamburger.getBurgerCalories();
myHamburger.getBurgerPrice();
