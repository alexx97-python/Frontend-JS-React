import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
      <div>
        <header>
          <div className="flex-element">
              <img src="./img/logo-englishdom.png" alt="logo" />
          </div>
          <div className="flex-element">
              <a href="#"> 0 800 33 00 66 </a> 
              <a href="#"> <i className="fas fa-headset"></i>Контакты </a> 
              <a href="#"> RU <i className="fas fa-angle-up"></i> </a>
              <a href="#"> <i className="fas fa-sign-in-alt"></i> Войти </a>
          </div>
        </header>
      </div>
    );
}

export default Navbar;