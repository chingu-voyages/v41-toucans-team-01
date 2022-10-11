import "./App.css";
import Main from "./Main";
import openweathermap from "../apis/openweathermap";

const App = () => {
  //function to load current weather
  const loadWeather = async (location) => {
    const response = await openweathermap.get("/weather", {
      params: {
        q: location,
      },
    });
    console.log(response.data);
  };

  //function to load weather forecast
  const loadForecast = async (location) => {
    const response = await openweathermap.get("/forecast", {
      params: {
        q: location,
      },
    });
    console.log(response.data);
  };
  return (
    <>
      <Main />
    </>
  );
};

export default App;
