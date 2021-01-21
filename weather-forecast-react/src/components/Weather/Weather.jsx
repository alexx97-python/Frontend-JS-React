import React, {Component} from 'react';
import { WeatherAPI } from '../../api/weatherApi';
import Preloader from '../common/Preloader/Preloader';
import Header from '../Header/Header';
import NavBar from '../navigation/NavBar/NavBar';
import classes from './Weather.module.css';
import WeatherCondition from './WeatherCondition/WeatherCondition';

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            weatherData: []
        }
    }

    setWeatherData(data){
        this.setState({
            weatherData: {...data},
            isLoaded: true
        })
    }

    componentDidMount(){
        WeatherAPI.getWeather()
        .then(data => {
            this.setWeatherData(data)
        })
    }

    render(){
        if (this.state.isLoaded) {
            return (
                <div className={classes.Weather}>
                    <Header
                    city = {this.state.weatherData.city_name}
                    temperature = {(this.state.weatherData.data)} />
                    <NavBar />
                    <WeatherCondition />
                </div>
            )
        }

        return (
            <div className={classes.Weather}>
                 <Preloader />
            </div>
        )
    }
}

export default Weather;