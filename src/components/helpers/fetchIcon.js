const fetchIcon = (icon) => {
  let iconDescription = "";

  if (icon === "01d" || icon === "01n") {
    iconDescription = "clear sky";
  } else if (icon === "02d" || icon === "02n") {
    iconDescription = "few clouds";
  } else if (icon === "03d" || icon === "03n") {
    iconDescription = "scattered clouds";
  } else if (icon === "04d" || icon === "04n") {
    iconDescription = "broken clouds";
  } else if (icon === "09d" || icon === "09n") {
    iconDescription = "shower rain";
  } else if (icon === "10d" || icon === "10n") {
    iconDescription = "rain";
  } else if (icon === "11d" || icon === "11n") {
    iconDescription = "thunderstorm";
  } else if (icon === "13d" || icon === "13n") {
    iconDescription = "snow";
  } else if (icon === "50d" || icon === "50n") {
    iconDescription = "mist";
  }

  return iconDescription;
};

export default fetchIcon;
