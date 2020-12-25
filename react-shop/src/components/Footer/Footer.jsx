import React from 'react';
import './style/footer.scss';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="section__1">
                    <h3>О НАС</h3>
                    <ul>
                        <li>Об интернет магазине</li>
                        <li>Оптовым покупателям</li>
                        <li>Социальная ответственность</li>
                        <li>Блог</li>
                        <li>Инвестиции</li>
                        <li>Политика конфиденциальности</li>
                        <li>Публичная оферта</li>
                        <li>Карта сайта</li>
                    </ul>
                </div>
                <div className="section__2">
                    <h3>ПОМОЩЬ</h3>
                        <ul>
                            <li>Центр поддержки L&L</li>
                            <li>Оплата</li>
                            <li>Доставка</li>
                            <li>Возврат и обмен</li>
                            <li>Часто задаваемые вопросы</li>
                            <li>Как выбрать размер</li>
                            <li>Регестрация</li>
                            <li>Личный кабинет</li>
                            <li>Контакты</li>
                        </ul>
                </div>
                <div className="section__3">
                    <h3>ЖЕНСКАЯ ОДЕЖДА</h3>
                        <ul>
                            <li>Платья</li>
                            <li>Обувь</li>
                            <li>Верхняя Одежда</li>
                            <li>Свитшоты и худи</li>
                            <li>Футболки</li>
                            <li>Нижнее белье</li>
                            <li>Аксуссуары</li>
                        </ul>
                </div>
                <div className="section__4">
                    <h3>МУЖСКАЯ ОДЕЖДА</h3>
                        <ul>
                            <li>Футболки и поло</li>
                            <li>Свитшоты</li>
                            <li>Брюки</li>
                        </ul>
                </div>
            </div>


        </div>
    )
}

export default Footer;