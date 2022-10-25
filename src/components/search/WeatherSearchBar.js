import { useState } from "react";
import "./WeatherSearchBar.css";

const WeatherSearchBar = ({ fetchWeatherData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData(searchTerm);
    setSearchTerm("");
  };

  return (
    <form className="weather-search" onSubmit={handleSubmit}>
      <input
        placeholder="Enter a city"
        className="weather-search-input"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default WeatherSearchBar;
