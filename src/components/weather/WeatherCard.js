import CurrentWeather from "./CurrentWeather";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weather-card">
      <CurrentWeather
        city={weatherData.name}
        country={weatherData.sys.country}
        temp={weatherData.main.temp}
        temp_max={weatherData.main.temp_max}
        temp_min={weatherData.main.temp_min}
      />
    </div>
  );
};

export default WeatherCard;
