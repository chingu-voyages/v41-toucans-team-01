import axios from "axios";

const KEY = "";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    APPID: KEY,
  },
});
