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
            setTimeout(() => {
                this.setWeatherData(data)
        }, 1000)})
    }

    onShowMenue = () => {
        console.log('Clicked', this)

        const searchForm = document.body.querySelector('#search-from');
        searchForm.style.display = 'flex';
    }

    componentDidMount(){
        if(!navigator.geolocation) {
            console.log('not allowed')
          } else {
            navigator.geolocation.getCurrentPosition( position => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                WeatherAPI.getCityCountry(latitude, longitude)
                .then(response => {
                    WeatherAPI.getWeather(response[0], response[1])
                    .then(data => {
                        this.setWeatherData(data)
                    })
                });
            });
        }
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
                        onShowMenue = {this.onShowMenue}
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