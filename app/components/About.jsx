var React = require('react')

var About = (props) => {
  return(
    <div>
      <h1 className='text-center'>About</h1>
      <p>This is a weather application build on React framework.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          Meteo conditions kindly provided by&nbsp;
          <a href='https://openweathermap.org/'>OpenWeatherMap</a>.
        </li>
        <li>
          <a href='https://facebook.github.io/react/'>React</a>
          , a javascript library for building user interfaces.
        </li>
        <li>
          See this project on&nbsp;
          <a href='https://github.com/DavOnGit/ReactWeather'>GitHub</a>.
        </li>
      </ul>
    </div>
    
  )
}

module.exports = About
