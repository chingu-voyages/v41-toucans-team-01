import "./CurrentWeatherCard.css";

const CurrentWeather = (props) => {
  return (
    <div className="current-weather-card">
      <div className="weather-location">
        <img
          src="./icons/location-icon.png"
          alt="location-icon"
          className="location-icon"
        />
        <h1 className="location-title">
          {props.city}, <span className="country">{props.country}</span>
        </h1>
      </div>
      <div className="current-temperature-details">
        <div className="current-temperature">
          <h1>{props.temp}°</h1>
          <div className="current-weather-range">
            <span>L: {props.temp_min}°</span>
            <span>H: {props.temp_max}°</span>
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
