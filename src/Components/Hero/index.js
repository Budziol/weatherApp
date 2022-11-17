import React, { useEffect, useState } from "react";
import CurrentWeather from "../CurrentWeather";
import { StyledMain } from "./HeroElements";
import Forecast from "../Forecast";
import { AnimatePresence } from "framer-motion";
import Search from "../Search";

function Hero({
  data,
  forecastData,
  setCityName,
  setCountryCode,
  setStateCode,
  cityName,
  setIconReload,
  iconReload,
}) {
  const [bgColor, setBgColor] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [currentDayNoon, setCurrentDayNoon] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

  useEffect(() => {
    //here im changing UTC time to GMT by substracting timezoneoffset and next im adding timezone for city from api data
    const date = new Date();
    const gmtTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
    const currentDateForCity = new Date(gmtTime + data.timezone * 1000);
    setCurrentDate(currentDateForCity);
    //and here im getting sunrise and sunset for location to later use it for background change
    setSunrise(new Date(data.sys.sunrise * 1000));
    setSunset(new Date(data.sys.sunset * 1000));
  }, [data]);

  //here im getting local noon time
  useEffect(() => {
    if (currentDate !== undefined) {
      const todaysNoon = currentDate.setHours(12, 0, 0);
      const todaysDateNoon = new Date(todaysNoon);
      setCurrentDayNoon(todaysDateNoon);
    }
  }, [currentDate]);

  //background color change
  useEffect(() => {
    if (currentDate >= sunrise && currentDate <= currentDayNoon) {
      setBgColor(
        "linear-gradient(45deg, rgba(255,150,150,1) 0%, rgba(140,107,174,1) 100%)"
      );
    } else if (currentDate >= currentDayNoon && currentDate <= sunset) {
      setBgColor(
        "linear-gradient(45deg, rgba(168,200,237,1) 0%, rgba(118,115,220,1) 100%)"
      );
    } else {
      setBgColor(
        "linear-gradient(45deg, rgba(72,53,91,1) 0%, rgba(140,110,171,1) 100%)"
      );
    }
  }, [currentDate, currentDayNoon, sunrise, sunset]);

  return (
    <AnimatePresence>
      <StyledMain
        key="main"
        initial={{
          backgroundColor: bgColor,
        }}
        animate={{
          background: bgColor,
          transition: { duration: 2 },
        }}
      >
        <Search
          cityName={cityName}
          setCityName={setCityName}
          setStateCode={setStateCode}
          setCountryCode={setCountryCode}
          setIconReload={setIconReload}
        />
        <CurrentWeather
          currentDate={currentDate}
          currentDayNoon={currentDayNoon}
          data={data}
          forecastData={forecastData}
          iconReload={iconReload}
        />
        <Forecast forecastData={forecastData} iconReload={iconReload} />
      </StyledMain>
    </AnimatePresence>
  );
}

export default Hero;
