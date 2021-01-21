import React from 'react';
import classes from './WeatherCondition.module.css';
import WeatherConditionItem from './WeatherConditionItem/WeatherConditionItem';

const WeatherCondition = props => {
    return(
        <div>
            WeatherCondition Container
            <WeatherConditionItem />
            <WeatherConditionItem />
            <WeatherConditionItem />
            <WeatherConditionItem />

        </div>
    )
}

export default WeatherCondition;