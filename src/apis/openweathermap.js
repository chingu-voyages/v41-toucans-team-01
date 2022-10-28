import axios from "axios";

const OPENWEATHER_API_KEY = "e84d18c71cb5b54949ced42ad1229ccd";

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
const loadForecast = async (lat, lon) => {
  const response = await openweathermap.get("/onecall", {
    params: {
      lat: lat,
      lon: lon,
    },
  });
  return response.data;
};

const weatherApi = {
  loadWeather,
  loadForecast,
};

export default weatherApi;
