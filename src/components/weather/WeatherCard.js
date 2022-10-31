import CurrentWeather from "./CurrentWeather";
import WeatherProperty from "./WeatherProperty";
import Hour from "../forecast/Hour";
import "./WeatherCard.css";

import fetchDate from "../helpers/fetchDate";

const WeatherCard = ({ weatherData, airData, hourlyForecast }) => {
  const currentDate = fetchDate(weatherData.dt);

  const renderHourlyForecast = hourlyForecast.map((hour) => {
    let currentDate = fetchDate(hourlyForecast[0].dt);
    let hourDate = fetchDate(hour.dt);
    if (hourDate.date === currentDate.date) {
      return (
        <Hour
          key={hourDate.time.hours}
          time={
            hourDate.time.hours === currentDate.time.hours
              ? "Now"
              : `${hourDate.time.hours}:${hourDate.time.minutes}0`
          }
          temp={`${hour.temp}°`}
          icon={hour.weather[0].icon}
        />
      );
    }
    return "";
  });

  return (
    <div className="weather-card">
      <div className="current-date">
        {currentDate.weekday}, {currentDate.date} {currentDate.month}
      </div>
      <CurrentWeather
        city={weatherData.name}
        country={weatherData.sys.country}
        temp={weatherData.main.temp}
        desc={weatherData.weather[0].description}
        temp_max={weatherData.main.temp_max}
        temp_min={weatherData.main.temp_min}
        icon={weatherData.weather[0].icon}
      />
      <div className="hourly-forecast">{renderHourlyForecast}</div>
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
