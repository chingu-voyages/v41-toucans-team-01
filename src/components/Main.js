import { useState, useEffect } from "react";
import PrimaryNav from "./navigations/PrimaryNav";
import SecondaryNav from "./navigations/SecondaryNav";
import weatherApi from "../apis/openweathermap";

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

    // Dependency array, empty if you only want to run on mount
  }, []);

  return (
    <main>
      <PrimaryNav />
      <SecondaryNav />
      {JSON.stringify(weatherData)}
    </main>
  );
};

export default Main;
