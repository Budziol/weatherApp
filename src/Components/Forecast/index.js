import React, { useState, useEffect } from "react";
import {
  ForecastCard,
  ForecastCardContainer,
  ForecastCardDay,
  ForecastCardTemp,
  ForecastSection,
} from "./ForecastElements";

import SelectWeatherIcon from "../Icons/SelectWeatherIcon";

function Forecast({ forecastData, iconReload }) {
  const [forecastListDate, setForecastListDate] = useState([]);

  //in this useEffect im creating new Date format so later i would be able to get specific hour forecast
  useEffect(() => {
    setForecastListDate(
      forecastData.list.map((item) => {
        return {
          clouds: item.clouds,
          dt: item.dt,
          dt_txt: new Date(item.dt_txt),
          main: item.main,
          pop: item.pop,
          sys: item.sys,
          visibility: item.visibility,
          weather: item.weather,
          wind: item.wind,
        };
      })
    );
  }, [forecastData]);

  return (
    <ForecastSection>
      <ForecastCardContainer>
        {/* here im searching forecast for specific hour and mapping through filtered elements  */}
        {forecastListDate
          .filter((item) => item.dt_txt.getHours() === 12)
          .map((item, i) => {
            return (
              <ForecastCard key={i}>
                <ForecastCardTemp>
                  {item.main.temp.toFixed()}
                  <span>&#8451;</span>
                </ForecastCardTemp>
                {!iconReload ? (
                  <SelectWeatherIcon icon={item.weather[0].icon} />
                ) : (
                  <div style={{ height: "152px", width: "143px" }}>a</div>
                )}
                <ForecastCardDay>
                  {item.dt_txt.toLocaleDateString("en-us", {
                    weekday: "short",
                  })}
                </ForecastCardDay>
              </ForecastCard>
            );
          })}
      </ForecastCardContainer>
    </ForecastSection>
  );
}

export default Forecast;
