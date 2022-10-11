import axios from "axios";

const OPENWEATHER_API_KEY = "";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    APPID: OPENWEATHER_API_KEY,
  },
});
