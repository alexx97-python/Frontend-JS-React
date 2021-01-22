import axios from 'axios';


export function getClientsLocation(){
    if(!navigator.geolocation) {
        console.log('not allowed')
      } else {
        navigator.geolocation.getCurrentPosition( async position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAwOaXbKZ9VVT7udXISArQML4EckXY1PWY`)
            .then(response => {
                return response;
            })
        })
      }
}


