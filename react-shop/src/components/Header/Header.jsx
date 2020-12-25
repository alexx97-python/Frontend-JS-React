import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/header.scss'

const Header = (props) => {
    return (
        <header className="wrapper__header">
            <div className="header__top__wrapper">
                <nav className="header__top">
                    <div className="language__selector">
                    <a href="#">УКР</a>
                                /
                    <a href="#">ENG</a>
                    </div>
                    <div className="header__img">
                        <NavLink  to="/home">
                            <img src="https://assets3.insales.ru/assets/1/1090/1483842/1608218146/logo.png" alt=""/>
                        </NavLink>
                    </div>
                    <div className="header__profile">
                        <div className="header__search">
                            <form action="">
                                <input type="text" placeholder="Search"/>
                                <button>SR</button>
                            </form>
                        </div>
                        <div className="header__account">
                            <button>AC</button>
                        </div>
                        <div className="header__whishlist">
                            <a href="">WS</a>
                        </div>
                        <div className="shopping__cart">
                            <button>SC</button>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="heder__menue__wrapper">
                <nav className="header__menue">
                    <NavLink to="/catalog"><a href="#">СКИДКИ</a></NavLink>
                    <NavLink to="/catalog"><a href="#">ОН</a></NavLink>
                    <NavLink to="/catalog"><a href="#">ОНА</a></NavLink>
                    <NavLink to="/catalog"><a href="#">ДЕТИ</a></NavLink>
                    <NavLink to="/catalog"><a href="#">НОВИНКИ</a></NavLink>
                    <NavLink to="/catalog"><a href="#">ПОДАРКИ</a></NavLink>
                    <NavLink to="/catalog"><a href="#">БРЕНДЫ</a></NavLink>
                    <NavLink to="/catalog"><a href="#">ВДОХНОВЕНИЕ</a></NavLink>
                </nav>
            </div>
            <div className="header__slider">
                
            </div>
        </header> 
        );
}

export default Header;