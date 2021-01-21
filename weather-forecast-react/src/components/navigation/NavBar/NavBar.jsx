import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = props => {
    return (
        <div className={classes.NavBar}>
            <NavLink to='/today'> Today </NavLink>
            <NavLink to='/today'> Tomorrow </NavLink>
            <NavLink to='/today'> 3 Days </NavLink>
            <NavLink to='/today'> 1 Week </NavLink>
            <NavLink to='/today'> 2 Weeks </NavLink>
        </div>
    )
}

export default NavBar;