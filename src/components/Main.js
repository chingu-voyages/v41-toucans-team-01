import { useState, useEffect } from "react";
import PrimaryNav from "./navigations/PrimaryNav";
import SecondaryNav from "./navigations/SecondaryNav";
import weatherApi from "../apis/openweathermap";
import fetchUserCity from "../apis/ipapi";
import "./Main.css";

const Main = () => {
  // Variable to hold/set data in state
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Function so that weatherApi method can be called async because
    // useEffect callback can not be async
    const getData = async (city) => {
      const data = await weatherApi.loadWeather(city);
      console.log(data);
      setWeatherData(data);
    };
    //get user's city with ipapi and fetch user data with city value
    const getCity = async () => {
      const cityData = await fetchUserCity();
      getData(cityData.city);
    };
    getCity();
  }, []);

  return (
    <>
      <PrimaryNav />
      <main className="content-container">{JSON.stringify(weatherData)}</main>
      <SecondaryNav />
    </>
  );
};

export default Main;
