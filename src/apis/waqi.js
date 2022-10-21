import axios from "axios";

const WAQI_API_KEY = "fd1eb45958c52fdbacbe6440c958378e3685e939";

const waqi = axios.create({
  baseURL: "https://api.waqi.info/feed",
  params: {
    token: WAQI_API_KEY,
  },
});

//function to load air quality
const loadAirQuality = async (location) => {
  const response = await waqi.get(`/${location}`);
  return response.data.data;
};

export default loadAirQuality;
