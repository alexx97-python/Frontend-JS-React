import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.designevo.com/res/templates/thumb_small/blue-and-yellow-mansion.png' /> 
            <div className={s.login_block}>
                {props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header >
    );
}

export default Header;