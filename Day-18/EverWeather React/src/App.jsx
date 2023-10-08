import Header from "./components/Header";
import CurrentWeatherInfo from "./components/CurrentWeatherInfo";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global.style";
import { theme } from "./Theme.style";
import { MainContainer } from "./App.style";
import { WeatherStatsSection } from "./App.style";
import WeatherStats from "./components/WeatherStats";
import Forcast from "./components/Forcast";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [data, setData] = useState();
  const [bgColor, setbgColor] = useState(theme.bgSummerDayColor);
  let [loading, setLoading] = useState(false);

  const fetchWeatherData = async (city, City = "Mumbai") => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = "https://api.weatherapi.com/v1/forecast.json?key=";

    try {
      const response = await fetch(
        `${url}${apiKey} &q=${city ? city : City}&days=4&aqi=no&alerts=no`
      );

      if (!response.ok) {
        errorMessage("Location not found.");
        return; 
      }

      const newData = await response.json();
      setData(newData);

      const isDay = newData.current.is_day === 1;
      const conditionText = newData.current.condition.text.toLowerCase();

      handleBackgroundImages(isDay, conditionText);
    } catch (error) {
      errorMessage("Cannot Fetch Try After some time");
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const errorMessage = (text) => {
    toast.error(`${text}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleBackgroundImages = (isDay, conditionText) => {
    let backgroundImage = "";
    let bgColor = "";

    if (conditionText.includes("rain")) {
      backgroundImage = isDay ? theme.bgRainDay : theme.bgRainNight;
      bgColor = isDay ? theme.bgRainDayColor : theme.bgRainNightColor;
    } else if (conditionText.includes("snow")) {
      backgroundImage = isDay ? theme.bgSnowDay : theme.bgSnowNight;
      bgColor = isDay ? theme.bgRainDayColor : theme.bgRainNightColor;
    } else if (
      conditionText.includes("cool") ||
      conditionText.includes("cold")
    ) {
      backgroundImage = isDay ? theme.bgWinterDay : theme.bgWinterNight;
      bgColor = isDay ? theme.bgWinterDayColor : theme.bgWinterNightColor;
    } else if (
      conditionText.includes("cloudy") ||
      conditionText.includes("sunny")
    ) {
      backgroundImage = isDay ? theme.bgSummerDay : theme.bgSummerNight;
      bgColor = isDay ? theme.bgSummerDayColor : theme.bgSummerNightColor;
    } else {
      backgroundImage = isDay ? theme.bgSummerDay : theme.bgSummerNight;
      bgColor = isDay ? theme.bgSummerDayColor : theme.bgSummerNightColor;
    }

    document.body.style.backgroundImage = backgroundImage;
    setbgColor(bgColor);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Header fetchWeatherData={fetchWeatherData} setLoading={setLoading} />
        <MainContainer loading={loading.toString()}>
          {loading ? (
            <ClipLoader color={theme.primaryColor} />
          ) : (
            <>
              {data && <CurrentWeatherInfo data={data} />}
              <WeatherStatsSection>
                {data && <Forcast data={data} bgColor={bgColor} />}
                {data && <WeatherStats data={data} bgColor={bgColor} />}
              </WeatherStatsSection>
            </>
          )}
        </MainContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
