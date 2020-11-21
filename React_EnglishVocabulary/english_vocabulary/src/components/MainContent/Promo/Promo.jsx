import React from 'react';
import './Promo.css';

const Promo = (props) => {
    return (
        <div className="promo">
        <div className="promo-container">
            <div className="buttons-switch">
                <div className="wrapper-button-switch">
                    <button> <i className="fas fa-user-alt"></i> Индивидуально </button>
                    <button> <i className="fas fa-gamepad"></i> Для детей </button>
                    <button> <i className="fas fa-briefcase"></i> Для компаний </button>
                </div>
            </div>
            <div className="promo-header">
                <h1>Онлайн школа английского</h1>
            </div>
            <p id="eng-thesis"> Занимайся английским через скайп</p>
            <div className="promo-poster-and-form">
                <div className="promo-form-with-bonus">
                    
                    <div className="promo-form">
                        <div className="form-bonus">
                            <img src="https://cdn-englishdom.gcdn.co/dsd/img/gift-perspective.png" />
                            Дарим до 3 уроков новым студентам
                        </div>
                        <span id="free-lessson-span"> БЕСПЛАТНЫЙ ПРОБНЫЙ УРОК </span>
                        <input id="name-rqst" type="text" placeholder= "Имя" />
                        <input type="email" placeholder="email" />
                        <input type="number" placeholder="+3 80 XX XXX XXXX" />
                        <button id="free-lesson-btn">ЗАПИСАТЬСЯ</button>
                        <span id="conditions-of-agreement"> Нажимая, ты принимаешь <a href="https://www.englishdom.com/info/terms/terms-of-use/" id="agreement">соглашение</a> </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Promo;