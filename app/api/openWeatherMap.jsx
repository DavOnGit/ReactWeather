var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=26f421f3ec1ab6f5004da3323ed722fe&units=metric'

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
    
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){alert('FKK!')
        throw res.response.data.message
      } else {
        return res.data.main.temp
      }
    }, function(res){//console.log(res)
      throw new Error(res)
    })
  }
}
