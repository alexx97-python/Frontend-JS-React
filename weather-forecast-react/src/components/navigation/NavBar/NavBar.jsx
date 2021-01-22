import React from 'react';
import classes from './NavBar.module.css';

const NavBar = props => {
    const options = ['Today', 'Tomorrow', '3 Days', '1 Week', '2 Weeks']
    return (
        <div className={classes.NavBar}>
            {options.map((option, index) => {
                return (
                    <button
                      key={option+index}
                      onClick={props.onOptionChange}
                      value={option}
                    > {option} </button>
                )
            })}
        </div>
    )
}

export default NavBar;