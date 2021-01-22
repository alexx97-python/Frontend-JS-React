import * as axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://api.weatherbit.io/v2.0/',
})

export const WeatherAPI = {
    getWeather(city = 'Kharkiv', country = 'UA') {
        return instance.get(`/forecast/daily?city=${city}&country=${country}&key=eb7f6fad275b45cbae2ebed8bf63e34a`)
            .then(response => {
                return response['data'];
            })
    }
}