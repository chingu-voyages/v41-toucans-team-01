import CurrentWeather from "./CurrentWeather";
import WeatherProperty from "./WeatherProperty";
import "./WeatherCard.css";

const WeatherCard = ({ weatherData, airData }) => {
  return (
    <div className="weather-card">
      <CurrentWeather
        city={weatherData.name}
        country={weatherData.sys.country}
        temp={weatherData.main.temp}
        temp_max={weatherData.main.temp_max}
        temp_min={weatherData.main.temp_min}
      />
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
