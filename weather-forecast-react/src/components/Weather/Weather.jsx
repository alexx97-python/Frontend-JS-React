import React, {Component} from 'react';
import { WeatherAPI } from '../../api/weatherApi';
import classes from './Weather.module.css';

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            weatherData: []
        }
    }

    setWeatherData(data){
        this.setState({
            weatherData: {...data}
        })
    }

    componentDidMount(){
        WeatherAPI.getWeather()
        .then(data => {
            this.setWeatherData(data)
        })
    }

    render(){
        console.log(this.state.weatherData)
        return (
            <div className={classes.Weather}>
                {this.state.weatherData.city_name}
            </div>
        )
    }
}

export default Weather;