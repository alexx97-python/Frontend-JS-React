import React from 'react';
import classes from './WeatherCondition.module.css';
import WeatherConditionItem from './WeatherConditionItem/WeatherConditionItem';

const WeatherCondition = props => {

    const weatherConditionItems = props.weatherData.map((data, index) => {
        console.log(data)
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
    console.log(weatherConditionItems);

    return(
        <div>
            WeatherCondition Container
            {weatherConditionItems}

        </div>
    )
}

export default WeatherCondition;