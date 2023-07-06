const Weather = ({ weather }) => {
  if (weather) {
    console.log(weather);
    return (
      <div>
        <h2>Weather in {weather.location.name}</h2>
        <p>Temperature: {weather.current.temp_c} Celsius</p>
        <img src={weather.current.condition.icon} alt={`weather icon: ${weather.current.condition.text}`}/>
        <p>Wind: {(weather.current.wind_kph / 3.6).toFixed(2)} m/s</p>
      </div>
    );
  } else {
    return;
  }
};

export default Weather;
