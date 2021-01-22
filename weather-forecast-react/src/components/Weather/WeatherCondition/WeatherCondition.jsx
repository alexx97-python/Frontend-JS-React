import React from 'react';
import classes from './WeatherCondition.module.css';
import WeatherConditionItem from './WeatherConditionItem/WeatherConditionItem';

const WeatherCondition = props => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const currentDay = props.weatherData[0].datetime.slice(-2);
    const currentMonth = monthNames[props.weatherData[0].datetime.slice(-5,-3) - 1];
    const lastDay = props.weatherData[props.weatherData.length-1].datetime.slice(-2);
    const lastDayMonth = monthNames[props.weatherData[props.weatherData.length-1].datetime.slice(-5,-3) - 1];

    const weatherConditionItems = props.weatherData.map((data, index) => {
        return (
        <WeatherConditionItem 
            key={index}
            maxTemp = {data['max_temp']}
            minTemp = {data['min_temp']}
            weatherDescription = {data.weather['description']}
            precipitationChance = {data['pop']}
            icon = {data.weather['icon']}
            day = {data.datetime.slice(-2)}
            month = {data.datetime.slice(-5,-3)}
            datetime = {data.datetime}
            />
    )});

    return(
        <div className={classes.WeatherCondition}>
            <p>{currentMonth.toUpperCase()} {currentDay} - {lastDayMonth.toUpperCase()} {lastDay}</p>
            {weatherConditionItems}

        </div>
    )
}

export default WeatherCondition;