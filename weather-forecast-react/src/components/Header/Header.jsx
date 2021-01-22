import React from 'react';
import classes from './Header.module.css';



const Header = props => {
    return (
        <div className={classes.Header}>
            <div>
                <p>
                    <span>WeatherForecast</span>
                    {props.city},
                    {props.country}
                    temperature
                    icon
                </p>
                <div className={classes.SearchBtn}>
                    <button onClick={props.btnSearchHandler}>Search another city</button>
                </div>
            </div>
        </div>
    )
}

export default Header;