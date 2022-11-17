import { useEffect, useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import axios from "axios";
import Hero from "./Components/Hero";

function App() {
  const [data, setData] = useState();
  const [forecastData, setForecastData] = useState();
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("Warsaw");
  const [stateCode, setStateCode] = useState("Masovian Voivodeship");
  const [countryCode, setCountryCode] = useState("PL");
  const [iconReload, setIconReload] = useState(false);

  useEffect(() => {
    const weatherApiCall = () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${countryCode}&appid=8d1c8d95c761fd37fdb1d1e1d20882ed&units=metric`
        )
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const forecastApiCall = () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateCode},${countryCode}&appid=8d1c8d95c761fd37fdb1d1e1d20882ed&units=metric`
        )
        .then(function (response) {
          setForecastData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    weatherApiCall();
    forecastApiCall();
  }, [cityName, countryCode, stateCode]);

  useEffect(() => {
    if (data !== undefined && forecastData !== undefined) {
      setLoading(false);
      setIconReload(false);
    } else {
      setLoading(true);
    }
  }, [data, forecastData]);

  return (
    <>
      <GlobalStyles />
      {!loading && (
        <Hero
          data={data}
          forecastData={forecastData}
          setCityName={setCityName}
          setStateCode={setStateCode}
          setCountryCode={setCountryCode}
          loading={loading}
          setLoading={setLoading}
          cityName={cityName}
          setIconReload={setIconReload}
          iconReload={iconReload}
        />
      )}
    </>
  );
}

export default App;
