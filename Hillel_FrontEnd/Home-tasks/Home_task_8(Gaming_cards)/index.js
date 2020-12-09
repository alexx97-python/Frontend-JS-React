const cards = [2,3,4,5,6,7,8,9,10, 'jack', 'queen', 'king', 'T'];
const cardSuits = ['clubs', 'spades', 'diamonds', 'hearts'];
const cardsWithIcons = ['jack', 'queen', 'king'];

createTableWithCards();

function createTableWithCards(){
    let flexContainer = document.createElement('div');
    flexContainer.id = 'flex-cards';
    body.append(flexContainer);

    let cardsToDisplay = cards
        .map(card => {
            let cards = [];
            for (let i=0; i<cardSuits.length;i++){
                cards.push(renderCard(card, cardSuits[i]))
            }
        return cards.join('');
    })
    console.log(cardsToDisplay.join(''))

    flexContainer.innerHTML = cardsToDisplay.join('')
}

function renderCard (card, cardSuit) {
    // returns html layout for each card
    return (
        `<div class='card ${card} ${cardSuit}'>
        <div>
            <span>
                ${typeof card === 'string'
                ? card.charAt(0).toUpperCase()
                :card} 
                <img src="./img/${cardSuit}.svg" />
            </span>
        </div>
        ${(cardsWithIcons.includes(card))
            ? `<div> <img src="./img/${card}.svg" /> </div>`
            : ('T' === card)
            ? `<div> <img src="./img/${cardSuit}.svg" /> </div>`
            :`<div></div>`}
        <div>
            <span>
                ${typeof card === 'string'
                ? card.charAt(0).toUpperCase()
                :card}
                <img src="./img/${cardSuit}.svg" />
            </span>
        </div>
    </div>`)
}




