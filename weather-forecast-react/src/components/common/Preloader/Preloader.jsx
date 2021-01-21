import React from 'react';
import classes from './preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={classes.ldsRoller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Preloader;