import React from 'react';
import Button from '../common/Button/Button';
import classes from './Header.module.css';



const Header = props => {
    const temperature = props.weatherToday[0].app_max_temp;
    const icon = props.weatherToday[0].weather.icon;
    return (
        <div className={classes.Header}>
            <div>
                <p className={classes.Title}>
                    <i className="fas fa-sun"></i>
                    <span>WeatherForecast</span>
                    <span>{props.city}</span>
                    <span>{props.country}</span>
                    <span>{temperature ? temperature : 0}°c</span>
                    <span><img src="" alt=""/> {icon}</span>
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