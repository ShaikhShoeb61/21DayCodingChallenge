import React from "react";
import {
  Day,
  ForcastContainer,
  ForecastBox,
  Icon,
  Temperature,
} from "./stylescomponents/Forcast";
import { format } from "date-fns";

const Forcast = ({ data, bgColor }) => {
  const forecastArray = data.forecast.forecastday.slice(1, 4);

  return (
    <ForcastContainer>
      {forecastArray.map((elem, index) => {
        const localTime = elem.date;
        const date = new Date(localTime);
        const day = format(date, "E");
        const temperature = Math.floor(elem.day.avgtemp_c);
        const icon = elem.day.condition.icon;

        return (
          <ForecastBox key={index} $backgroundcolor={bgColor}>
            <Day>{day}</Day>
            <Icon src={icon} alt="icon" />
            <Temperature>{temperature}°</Temperature>{" "}
          </ForecastBox>
        );
      })}
    </ForcastContainer>
  );
};

export default Forcast;
