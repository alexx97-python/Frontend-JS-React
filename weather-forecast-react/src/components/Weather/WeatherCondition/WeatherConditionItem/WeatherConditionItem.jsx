import React from 'react';
import classes from './WeatherConditionItem.module.css';

const WeatherConditionItem = props => {
    
    return (
        <div className={classes.WeatherConditionItem}>
            <div className={classes.Date}>
                <p>THU</p>
                <p>1/21</p>
            </div>
            <div>
                <i>Icon</i>
            </div>
            <div>
                <p>2 <span>/-2</span></p>
            </div>
            <div>
                20%
            </div>
        </div>
    )
}

export default WeatherConditionItem;