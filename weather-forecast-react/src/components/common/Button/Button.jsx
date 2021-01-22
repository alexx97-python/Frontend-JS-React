import React from 'react';
import classes from './Button.module.css';

const Button = props => {

    return (
        <React.Fragment>
            <button
              type = {props.type}
              onClick = {props.onClick}
              className={classes.Button}
              >
                {props.children}
            </button>
        </React.Fragment>
    )
}

export default Button;