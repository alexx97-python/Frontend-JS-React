// Variables
let myBurger;



// buttons
const getToBurgerCreatorButton = document.querySelector('.to_burger_creator');
const createBurgerButton = document.querySelector('.create_burger');

// EventListners
const renderBurgerCreator = getToBurgerCreatorButton.addEventListener('click', renderBurgerMenue);
const createBurger = createBurgerButton.addEventListener('submit', createBurgerInstance);


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

//Functions For EventListeners

function renderBurgerMenue (){
    document.write(
        
    );
}



function createBurgerInstance () {
    let size = document.querySelector('input[name="size"]').value,
        addIngredient = document.querySelector('input[name="add_ingredient"]').value,
        addition = document.querySelector('input[name="addition_ingredient"]').value;

    myBurger = new HAMBURGER(size, addIngredient, addition);
    console.log(myBurger);
    myBurger.calcPrice();
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