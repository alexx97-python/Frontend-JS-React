import React from 'react';
import styles from './preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={styles.ldsRoller}>
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