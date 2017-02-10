var React = require('react')

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <p>It's {temp}°C in {location}.</p>
    </div>
  )
  
}

module.exports = WeatherMessage
