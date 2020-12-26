
let initialState = {
    items: [
        {itemName: 'Шорты мужские серые', brans: 'Love&Live', initialPrice: 700, priceOnSales: 500},
        {itemName: 'Шорты мужские чорные', brans: 'Love&Live', initialPrice: 600, priceOnSales: 400},
        {itemName: 'Футболка мужская чорная', brans: 'Love&Live', initialPrice: 350, priceOnSales: 100},
        {itemName: 'Футболка мужская синяя', brans: 'Love&Live', initialPrice: 900, priceOnSales: 800},
        {itemName: 'Штаны синие мужские', brans: 'Love&Live', initialPrice: 1100, priceOnSales: 600},
    ]
}

const itemsReducer = (state=initialState, action) => {
    switch (action.type){

        default:
            return state;
    }
}

export default itemsReducer;