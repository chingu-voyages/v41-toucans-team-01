import "./CurrentWeatherCard.css";

const CurrentWeather = () => {
  return (
    <div className="current-weather-card">
      <div className="weather-location">
        <img
          src="./icons/location-icon.png"
          alt="location-icon"
          className="location-icon"
        />
        <h1 className="location-title">
          London, <span className="country">UK</span>
        </h1>
      </div>
      <div className="current-temperature-details">
        <div className="current-temperature">
          <h1>12°</h1>
          <div className="current-weather-range">
            <span>L: 8°</span>
            <span>H: 15°</span>
          </div>
        </div>
        <div className="current-temperature-icon">
          <img src="./icons/sunny.png" alt="temp-icon" />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
