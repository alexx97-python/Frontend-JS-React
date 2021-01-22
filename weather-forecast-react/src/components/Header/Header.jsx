import React from 'react';
import Button from '../common/Button/Button';
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
                    <Button type="submit" onClick={props.onShowMenue}>Show search menu</Button>
                </div>
                <div className={classes.SearchForm} id='search-from'>
                    <form action="">
                        <label htmlFor="city">City</label>
                        <input type="text" name='city' placeholder='Kiev' id='city'/>
                        <label htmlFor="country" >Country</label>
                        <input type="text" name='country' placeholder='UA' id='country'/>
                        <Button type="submit" onClick={props.btnSearchHandler}>Search</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;