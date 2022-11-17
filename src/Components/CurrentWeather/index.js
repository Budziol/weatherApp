import React, { useEffect } from "react";
import { useState } from "react";
import {
  DetailsItemWrapper,
  FlexContainer,
  StyledDateP,
  StyledDetailsP,
  StyledLine,
  StyledParagraph,
  StyledSection,
  StyledSpan,
  TempCounterContainer,
} from "./HeroElements";
import { TiLocationArrowOutline } from "react-icons/ti";
import { BiDroplet } from "react-icons/bi";
import { TbCloud, TbCloudRain, TbSnowflake } from "react-icons/tb";
import SelectWeatherIcon from "../Icons/SelectWeatherIcon";
import Counter from "../Counter";

function CurrentWeather({ data, currentDate, iconReload }) {
  const [temp, setTemp] = useState();
  const [windSpd, setWindSpd] = useState();
  const [humidity, setHumidity] = useState();
  const [cloudsVol, setCloudsVol] = useState();
  const [rainVol, setRainVol] = useState();
  const [snowVol, setSnowVol] = useState();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [weekday, setWeekday] = useState();
  const [time, setTime] = useState();
  const [suffix, setSuffix] = useState();
  const [formatedDate, setFormatedDate] = useState();

  useEffect(() => {
    setTemp(Math.floor(data.main.temp));
    setWindSpd(Math.floor(data.wind.speed));
    setHumidity(data.main.humidity);
    setCloudsVol(data.clouds.all);
    if (data.hasOwnProperty("rain")) {
      setRainVol(data.rain["1h"]);
    }
    if (data.hasOwnProperty("snow")) {
      setSnowVol(data.snow["1h"]);
    }
  }, [data]);

  useEffect(() => {
    if (currentDate !== undefined) {
      setYear(
        currentDate.toLocaleDateString("en-us", {
          year: "2-digit",
        })
      );

      setMonth(
        currentDate.toLocaleDateString("en-us", {
          month: "short",
        })
      );

      setDay(
        currentDate.toLocaleDateString("en-us", {
          day: "numeric",
        })
      );

      setWeekday(
        currentDate.toLocaleDateString("en-us", {
          weekday: "long",
        })
      );

      setTime(
        currentDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }
  }, [currentDate]);

  useEffect(() => {
    if (day) {
      if (day.slice(-1) === 1) {
        setSuffix("st");
      } else if (day.slice(-1) === 2) {
        setSuffix("nd");
      } else if (day.slice(-1) === 3) {
        setSuffix("rd");
      } else {
        setSuffix("th");
      }
    }
  }, [day]);

  useEffect(() => {
    setFormatedDate(`${day}${suffix} ${month} '${year}`);
  }, [day, suffix, month, year]);

  // const [icon, setIcon] = useState(data.weather[0].icon);

  // prettier-ignore
  return (
    <StyledSection
      onClick={() => console.log(data)}
    >
    {!iconReload ? 
      <SelectWeatherIcon icon={data.weather[0].icon} /> : <div style={{height: "152px"}}>a</div>
    }
      <TempCounterContainer>
      <Counter temp={temp} /> 
      <StyledSpan>&#8451;</StyledSpan>
      </TempCounterContainer>
      <StyledDateP initial={{x: "-20vw", opacity: 0}} animate={{x: 0, opacity: 1, transition: { duration: 2}}}>{formatedDate}</StyledDateP>
      <FlexContainer initial={{x: "20vw", opacity: 0}} animate={{x: 0, opacity: 1, transition: { delay: 1, duration: 2}}}>
        <StyledParagraph>{weekday}</StyledParagraph>
        <StyledLine />
        <StyledParagraph>{time}</StyledParagraph>
      </FlexContainer>
      <FlexContainer margin={"1.25rem 0 0 0"} initial={{ opacity: 0}} animate={{opacity: 1, transition: { delay: 2, duration: 2}}}>
        <DetailsItemWrapper>
          <TiLocationArrowOutline style={{ minWidth: "23px", minHeight: "23px" }} />
          <StyledDetailsP>Wind {windSpd}m/s</StyledDetailsP>
        </DetailsItemWrapper>
        <StyledLine />
        <DetailsItemWrapper>
          <BiDroplet style={{ minWidth: "23px", minHeight: "23px" }} />
          <StyledDetailsP>Hum {humidity}%</StyledDetailsP>
        </DetailsItemWrapper>
        <StyledLine />
        <DetailsItemWrapper>
          <TbCloud style={{ minWidth: "23px", minHeight: "23px" }} />
          <StyledDetailsP>Clouds {cloudsVol}%</StyledDetailsP>
        </DetailsItemWrapper>
        {data.hasOwnProperty("rain") && (
          <>
            <StyledLine />
            <DetailsItemWrapper>
              <TbCloudRain style={{ minWidth: "23px", minHeight: "23px" }} />
              <StyledDetailsP>Rain {rainVol}mm</StyledDetailsP>
            </DetailsItemWrapper>
            <StyledLine />
          </>
        )}
        {data.hasOwnProperty("snow") && (
          <>
            <StyledLine />
            <DetailsItemWrapper>
              <TbSnowflake style={{ minWidth: "23px", minHeight: "23px" }} />
              <StyledDetailsP>Snow {snowVol}mm</StyledDetailsP>
            </DetailsItemWrapper>
            <StyledLine />
          </>
        )}
      </FlexContainer>
      
    </StyledSection>
  );
}

export default CurrentWeather;
