import React from 'react';
import classes from './WeatherConditionItem.module.css';

// object with days name values
const days = {
    '0': 'SUNDAY',
    '1': 'MONDAY',
    '2': 'TUESDAY',
    '3': 'WEDNESDAY',
    '4': 'THURSDAY',
    '5': 'FRIDAY',
    '6': 'SATURDAY'
}

const WeatherConditionItem = props => {
    const dayName = days[new Date(props.datetime).getDay()].slice(0,3);

    return (
        <div className={classes.WeatherConditionItem}>
            <div className={classes.Date}>
                <p>{dayName}</p>
                <p>{+props.month}/{+props.day}</p>
            </div>
            <div className={classes.WeatherIcon}>
                <img src={`.././icons/${props.icon}.png`} alt="weather-icon"/>
            </div>
            <div className={classes.Temperature}>
                <p>{props.maxTemp}°<span>/{props.minTemp}°</span></p>
            </div>
            <div className={classes.Description}>
                <p>
                    {props.weatherDescription}
                </p>
            </div>
            <div className={classes.Humidity}>
                <i className={"fas fa-tint"}></i>
                {props.precipitationChance}%
            </div>
        </div>
    )
}

export default WeatherConditionItem;