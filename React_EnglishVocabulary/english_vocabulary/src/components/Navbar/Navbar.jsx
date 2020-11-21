import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
      <div>
        <header>
          <div class="flex-element">
              <img src="./img/logo-englishdom.png" alt="logo" />
          </div>
          <div class="flex-element">
              <a href="#"> 0 800 33 00 66 </a> 
              <a href="#"> <i class="fas fa-headset"></i>Контакты </a> 
              <a href="#"> RU <i class="fas fa-angle-up"></i> </a>
              <a href="#"> <i class="fas fa-sign-in-alt"></i> Войти </a>
          </div>
        </header>
      </div>
    );
}

export default Navbar;