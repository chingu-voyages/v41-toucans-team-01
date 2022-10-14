import axios from "axios";

const OPENWEATHER_API_KEY = "5c707c30b19b0381825e0aaea1f88a5e";

const openweathermap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    APPID: OPENWEATHER_API_KEY,
  },
});

//function to load current weather
const loadWeather = async (location) => {
  const response = await openweathermap.get("/weather", {
    params: {
      q: location,
    },
  });
  return response.data;
};

//function to load weather forecast
const loadForecast = async (location) => {
  const response = await openweathermap.get("/forecast", {
    params: {
      q: location,
    },
  });
  return response.data;
};

const weatherApi = {
  loadWeather,
  loadForecast,
};

export default weatherApi;
