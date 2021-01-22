import React, {Component} from 'react';
import { WeatherAPI } from '../../api/weatherApi';
import axios from 'axios';
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

    btnSearchHandler = async (e) => {
        e.preventDefault();
        this.setState({
            isLoaded: false
        })

        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        await WeatherAPI.getWeather(city, country)
        .then(data => {
            this.setWeatherData(data)
        })
    }

    componentDidMount(){
        this.setState({
            isLoaded: false
        })
        if(!navigator.geolocation) {
            console.log('not allowed')
          } else {
            navigator.geolocation.getCurrentPosition( async position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
    
                await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAwOaXbKZ9VVT7udXISArQML4EckXY1PWY`)
                .then(response => {
                    const city = response.data.results[3].address_components[2].short_name;
                    const country = response.data.results[3].address_components[4].short_name;

                    WeatherAPI.getWeather(city, country)
                        .then(data => {
                            this.setWeatherData(data)
                    })
                })
            })}
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
                        temperature = {this.state.weatherData.data}
                        btnSearchHandler = {this.btnSearchHandler}
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