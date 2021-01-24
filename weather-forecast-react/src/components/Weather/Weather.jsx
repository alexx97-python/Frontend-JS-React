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
            navigatorAllowed: true,
            isLoaded: false,
            mainWeatherData: [],
            weatherData: []
        }
    }

    setWeatherData(data){
        this.setState({
            mainWeatherData: {...data},
            weatherData: {...data},
            isLoaded: true
        })
    }


    btnSearchHandler = async (e) => {
        e.preventDefault();
        this.setState({
            isLoaded: false
        })

        const city = document.getElementById('city').value || 'Kiev';
        const country = document.getElementById('country').value || 'UA';
        let dateNow = Date.now();
        let dateOnLastUpdate = Date.parse(JSON.parse(localStorage[city]).data[0]['valid_date']);
        if (localStorage[city] && dateNow-dateOnLastUpdate<86400000 ){
            let data = JSON.parse(localStorage[city]);
            setTimeout(() => {
                this.setWeatherData(data)
            }, 1000)
        } else {
            await WeatherAPI.getWeather(city, country)
            .then(data => {
                setTimeout(() => {
                    this.setWeatherData(data)
            }, 1000)})
        }
        
    }


    onOptionChange = (event) => {
        let option = event.target.value;
        switch(option){
            case 'Today':
                this.setState({
                    weatherData: {
                        data: [this.state.mainWeatherData.data[0]]
                    }
                })
                break;
            case 'Tomorrow':
                this.setState({
                    weatherData: {
                        data: [this.state.mainWeatherData.data[1]]
                    }
                })
                break;
            case '3 Days':
                this.setState({
                    weatherData: {
                        data: [...this.state.mainWeatherData.data.slice(0,3)]
                    }
                })
                break;
            case '1 Week':
                this.setState({
                    weatherData: {
                        data: [...this.state.mainWeatherData.data.slice(0,7)]
                    }
                })
                break;
            case '2 Weeks':
                this.setState({
                    weatherData: {
                        data: [...this.state.mainWeatherData.data.slice(0,14)]
                    }
                })
                break;
        }
    }

    onShowMenue = () => {
        const searchForm = document.body.querySelector('#search-from');
        searchForm.style.display = (searchForm.style.display ==='flex') ? null : 'flex';
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
                    let dateNow = Date.now();
                    let dateOnLastUpdate = Date.parse(JSON.parse(localStorage[response[0]]).data[0]['valid_date']);
                    if (localStorage[response[0]] && dateNow-dateOnLastUpdate<86400000){
                        let data = JSON.parse(localStorage[response[0]]);
                        setTimeout(() => {
                            this.setWeatherData(data)
                        }, 1000)} else {
                            WeatherAPI.getWeather(response[0], response[1])
                                .then(data => {
                                    console.log(data)
                                    this.setWeatherData(data)
                        })
                     }
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
                        city = {this.state.mainWeatherData.city_name}
                        country = {this.state.mainWeatherData.country_code}
                        weatherToday = {this.state.mainWeatherData.data}
                        btnSearchHandler = {this.btnSearchHandler}
                        onShowMenue = {this.onShowMenue}
                        />
                        <NavBar
                          onOptionChange = {this.onOptionChange}
                        />
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