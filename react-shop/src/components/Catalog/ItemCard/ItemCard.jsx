import React from 'react';
import './style/item_card.scss';

const ItemCard = (props) => {
    return (
        <div className="item__card__wrapper">
            <img src="https://cdn.retailrocket.net/api/1.0/partner/5ae722e297a525d9b4ed7422/item/195029141/picture/?format=png&width=200&height=256&scale=both" alt="Item photo"/>
            <p>Шорты мужские серые</p>
            <p>Love&Live</p>
            <span className="final__price">500 грн.</span>
            <span className="initial__price">700 грн.</span>
            <a href="#" className="js_favourite_add"></a>
            <div className="more_information_section">
                <span> Подробнее </span>
            </div>
        </div>
    )
}

export default ItemCard;