import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weatherData, setWeatherData] = useState(null);
  const weather_api_key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => 
  {  
    if (capital) {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?q=${capital.toLowerCase()}&key=${weather_api_key}
        `
      )
      .then((result) => {
        setWeatherData(result.data);
      })
      .catch((error) => {
        setWeatherData(null)
      })

  } else {
    setWeatherData(null);
  }}, [])

  console.log(weatherData)


  if (weatherData) {
    return (
      <section className="weather">
        <h2>Weather in {capital}</h2>
        <ul>
          <li>Temperature {weatherData.current.temp_c} Celsius</li>
          <li><figure><img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text}></img></figure></li>
          <li>Wind: {(weatherData.current.wind_kph * 1000 / 3600).toFixed(2)} m/s</li>
        </ul>
      </section>
    );
  }

  else {
    return null;
  }
};
export default Weather;
