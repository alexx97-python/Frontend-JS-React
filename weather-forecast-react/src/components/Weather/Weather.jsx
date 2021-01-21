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

    async componentDidMount(){
        this.setState({
            isLoaded: false
        })
        await WeatherAPI.getWeather()//city=, country=
        .then(data => {
            this.setWeatherData(data)
        })

    }

    render(){
        console.log(this.state)
            return (
                <div className={classes.Weather}>
                    {!this.state.isLoaded ? 
                    <div className={classes.Preloader}>
                        <Preloader />
                    </div>
                    :
                    <React.Fragment>
                        <Header
                        city = {this.state.weatherData.city_name}
                        country = {this.state.weatherData.country_code}
                        temperature = {(this.state.weatherData.data)}
                        />
                        <NavBar />
                        <WeatherCondition
                        weatherData = {this.state.weatherData.data}
                        />
                    </React.Fragment>
                     }
                </div>
            )
        }

}

export default Weather;