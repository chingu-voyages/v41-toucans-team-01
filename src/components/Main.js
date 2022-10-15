import { useState, useEffect } from "react";
import PrimaryNav from "./navigations/PrimaryNav";
import SecondaryNav from "./navigations/SecondaryNav";
import weatherApi from "../apis/openweathermap";
import "./Main.css";

const Main = () => {
  // Variable to hold/set data in state
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Function so that weatherApi method can be called async because
    // useEffect callback can not be async
    const getData = async () => {
      const data = await weatherApi.loadWeather("London, Uk");
      console.log(data);
      setWeatherData(data);
    };
    getData();
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
