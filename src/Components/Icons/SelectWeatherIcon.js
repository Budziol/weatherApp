import React from "react";
import {
  SunIcon,
  MoonIcon,
  FewCloudsDay,
  FewCloudsNight,
  ScatteredClouds,
  BrokenClouds,
  ShowerRain,
  Rain,
  Thunderstorm,
  Snow,
  Mist,
} from "../Icons/Icons";

function SelectWeatherIcon({ icon }) {
  return (
    <>
      {icon === "01d" && <SunIcon />}
      {icon === "01n" && <MoonIcon />}
      {icon === "02d" && <FewCloudsDay />}
      {icon === "02n" && <FewCloudsNight />}
      {(icon === "03n" || icon === "03d") && <ScatteredClouds />}
      {(icon === "04n" || icon === "04d") && <BrokenClouds />}
      {(icon === "09d" || icon === "09n") && <ShowerRain />}
      {(icon === "10d" || icon === "10n") && <Rain />}
      {(icon === "11d" || icon === "11n") && <Thunderstorm />}
      {(icon === "13d" || icon === "13n") && <Snow />}
      {(icon === "50d" || icon === "50n") && <Mist />}
    </>
  );
}

export default SelectWeatherIcon;
