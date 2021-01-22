import React from 'react';
import classes from './NavBar.module.css';

const NavBar = props => {
    return (
        <div className={classes.NavBar}>
            <button> Today </button>
            <button> Tomorrow </button>
            <button> 3 Days </button>
            <button> 1 Week </button>
            <button> 2 Weeks </button>
        </div>
    )
}

export default NavBar;