import { useState, useEffect } from "react";
import PrimaryNav from "./navigations/PrimaryNav";
import SecondaryNav from "./navigations/SecondaryNav";
import weatherApi from "../apis/openweathermap";
import fetchUserCity from "../apis/ipapi";
import loadAirQuality from "../apis/waqi";
import WeatherCard from "./weather/WeatherCard";
import WeatherSearchBar from "./search/WeatherSearchBar";
import Loader from "./loader/Loader";
import "./Main.css";

const Main = () => {
  // Variable to hold/set data in state
  const [weatherData, setWeatherData] = useState({});
  const [airData, setAirData] = useState({ quality: 0, description: "Good" });
  const [forecast, setForecast] = useState({});

  // Function so that weatherApi method can be called async because
  // useEffect callback can not be async
  const getData = async (city) => {
    const data = await weatherApi.loadWeather(city);
    setWeatherData(data);
    getForecast(data.coord.lat, data.coord.lon);
  };

  const getForecast = async (lat, lon) => {
    const data = await weatherApi.loadForecast(lat, lon);
    // console.log(data);
    setForecast(data);
  };

  //get air quality from api with user location
  const getAirQuality = async (city) => {
    const airData = await loadAirQuality(city);
    setAirData(() => {
      let desc;
      if (airData.aqi >= 0 && airData.aqi <= 50) {
        desc = "Good";
      } else if (airData.aqi > 50 && airData.aqi <= 100) {
        desc = "Moderate";
      } else if (airData.aqi > 100 && airData.aqi <= 150) {
        desc = "Sensitive";
      } else if (airData.aqi > 150 && airData.aqi <= 200) {
        desc = "Unhealthy";
      } else if (airData.aqi > 200 && airData.aqi <= 300) {
        desc = "Very Unhealthy";
      } else if (airData.aqi > 300) {
        desc = "Hazardous";
      }
      return { quality: airData.aqi, description: desc };
    });
  };

  //function to fetch all data from the different api calls
  //this is so that we can implement a search function to call all
  //the different apis and render the value to the page.
  const fetchWeatherData = (city) => {
    getData(city);
    getAirQuality(city);
  };

  useEffect(() => {
    //get user's city with ipapi and fetch user data with city value
    const getCity = async () => {
      const cityData = await fetchUserCity();
      fetchWeatherData(cityData.city);
    };
    getCity();
  }, []);

  return (
    <>
      <PrimaryNav />
      <main className="content-container">
        <WeatherSearchBar fetchWeatherData={fetchWeatherData} />
        {weatherData.main && forecast.hourly ? (
          <WeatherCard
            weatherData={weatherData}
            airData={airData}
            hourlyForecast={forecast.hourly}
          />
        ) : (
          <Loader />
        )}
      </main>
      <SecondaryNav />
    </>
  );
};

export default Main;
