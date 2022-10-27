import CurrentWeather from "./CurrentWeather";
import WeatherProperty from "./WeatherProperty";
import Hour from "../forecast/Hour";
import "./WeatherCard.css";

import fetchDate from "../helpers/fetchDate";

const WeatherCard = ({ weatherData, airData }) => {
  const currentDate = fetchDate(weatherData.dt);

  return (
    <div className="weather-card">
      <div className="current-date">
        {currentDate.weekday}, {currentDate.date} {currentDate.month}
      </div>
      <CurrentWeather
        city={weatherData.name}
        country={weatherData.sys.country}
        temp={weatherData.main.temp}
        temp_max={weatherData.main.temp_max}
        temp_min={weatherData.main.temp_min}
      />
      <div className="hourly-forecast">
        <Hour temp="12°" id="Now" icon="sunny.png" />
      </div>
      <div className="weather-properties">
        <WeatherProperty
          title="humidity"
          value={`${weatherData.main.humidity}%`}
          icon="humidity.png"
        />
        <WeatherProperty
          title="wind"
          value={`${weatherData.wind.speed} m/s`}
          icon="wind.png"
        />
        <WeatherProperty
          title="feels like"
          value={`${weatherData.main.feels_like}°`}
          icon="feels-like.png"
        />
        <WeatherProperty
          title="air quality"
          value={`${airData.quality} ${airData.description}`}
          icon="air-quality.png"
        />
      </div>
    </div>
  );
};

export default WeatherCard;
