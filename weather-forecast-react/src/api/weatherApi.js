import * as axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://api.weatherbit.io/v2.0/',
})

export const WeatherAPI = {
    getWeather(city = 'kharkiv', country = 'UA') {
        return instance.get(`/forecast/daily?city=${city}&country=${country}&key=eb7f6fad275b45cbae2ebed8bf63e34a`)
            .then(response => {
                return response['data'];
            })
    },

    getCityCountry(latitude, longitude){
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAwOaXbKZ9VVT7udXISArQML4EckXY1PWY`)
            .then(response => {
                    const city = response.data.results[3].address_components[2].short_name;
                    const country = response.data.results[3].address_components[3].short_name;
                    return [city, country];
            })
        }
}