import React from 'react'
import './footer.css'

const Footer = (props) => {
    return (
        <div className='footer-container'>
            <div className="first-container">
                <div className="header">
                    <p>КОНТАКТЫ</p>
                    <div className="info-wrapper-links">
                        <button id="call-me-back-btn">ПЕРЕЗВОНИТЕ МНЕ</button>
                        <a>0 800 33 00 66</a>
                        <a>info@englishdom.com</a>
                        <a>м.Київ, вул.Радищева, буд 10/14, офіс 507.</a>
                    </div>
                </div>
                <div className="header">
                    <p>АНГЛИЙСКИЙ ПО СКАЙПУ</p>
                    <div className="info-wrapper-links">
                        <a >Личный кабинет</a>
                        <a >Курсы английского</a>
                        <a >Преподаватели</a>
                        <a >Процесс обучения</a>
                        <a >Цены</a>
                    </div>
                </div>
                <div className="header">
                    <p>НАША КОМАНДА</p>
                    <div className="info-wrapper-links">
                        <a >Отзывы</a>
                        <a >Пресс-кит</a>
                        <a >Контакты</a>
                    </div>
                </div>
                <div className="header">
                    <p>ENGLISHDOM</p>
                    <div className="info-wrapper-links">
                        <a>Активация промокода</a>
                        <a>Подарок другу</a>
                        <a>Партнерскя программа</a>
                        <a>Карьера</a>
                        <a>Академия преподавателей</a>
                        <a>Работа для преподавателей</a>
                        <a>Тест по английскому</a>
                        <a>EnglishDom Translator</a>
                        <a>Обучающая рассылка</a>
                    </div>
                </div>
            </div>
            <div className="second-container">
                <div className="second-containe-btns">
                    <button>EnglishDom Courses</button>
                    <button>EnglishDom Words</button>
                </div>
                <div className="second-container-icons">
                        <a><i class="fab fa-facebook"></i></a>
                        <a><i class="fab fa-vk"></i></a>
                        <a><i class="fab fa-telegram-plane"></i></a>
                        <a><i class="fab fa-viber"></i></a>
                        <a><i class="fab fa-tiktok"></i></a>
                        <a><i class="fab fa-instagram"></i></a>
                        <a><i class="fab fa-youtube"></i></a>
                        <a><i class="fab fa-blogger-b"></i></a>
                        <a><i class="fas fa-microphone-alt"></i></a>
                </div>
            </div>
            <div className="third-container">
                <div className="copyright">
                    @2010-2020
                </div>
                <div className="agreement">
                    <a href="#">Договор-оферта</a> |
                    <a href="#">Политика конфиденциальности</a> |
                    <a href="#">Использование cookies</a>
                </div>
                <div className="payments-system">
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-mastercard"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer;