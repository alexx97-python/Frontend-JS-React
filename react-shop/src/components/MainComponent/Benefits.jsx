import React from 'react';
import './style/main_component.scss';

const Benefits = (props) => {
    return (
        <div className="benefits">
            <div className="benefits__wrapper">
                <div className="benefits__delivery">
                    <img src="https://img.loveandlive.ua/files/1/3916/4648780/original/free-delivery.png" alt=""/>
                    <div className="delivery__info">
                        <h3>FREE DELIVERY</h3>
                        <p>FOR ORDERS FROM 750 UAH</p>
                    </div>
                </div>
                <div className="benefits__brands">
                    <img src="https://img.loveandlive.ua/files/1/3919/4648783/original/brands.png" alt=""/>
                    <div className="brands__info">
                        <h3> THE BEST UKRAINIAN BRANDS </h3>
                        <p> NEW PRODUCTS EVERY WEEK </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;