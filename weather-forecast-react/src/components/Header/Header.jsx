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
                    <button >Search another city</button>
                </div>
                <div className={classes.SearchForm}>
                    <form action="">
                        <label htmlFor="city">City</label>
                        <input type="text" name='city' placeholder='Kiev' id='city'/>
                        <label htmlFor="country" >Country</label>
                        <input type="text" name='country' placeholder='UA' id='country'/>
                        <button type="submit" onClick={props.btnSearchHandler}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;