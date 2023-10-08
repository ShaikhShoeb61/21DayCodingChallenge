import React from "react";
import { format } from "date-fns";
import {
  City,
  ConditionIcon,
  CurrentDate,
  Icon,
  SectionOne,
  SectionTwo,
  Tempreture,
  Text,
  WeatherInfo,
} from "./stylescomponents/CurrentWeatherInfo";

const CurrentWeatherInfo = (props) => {

  if (!props.data) {
    return null;
  }

  const locationName = props.data.location.name;
  const tempreture = props.data.current.temp_c;
  const icon = props.data.current.condition.icon;
  const text = props.data.current.condition.text;
  const localTime = props.data.location.localtime;

  const date = new Date(localTime);
  const newDate = format(date, "hh:mm EEEE, d MMM yyyy");

  return (
    <WeatherInfo>
      <SectionOne>
        <Tempreture>{Math.floor(tempreture)}°</Tempreture>
        <ConditionIcon>
          <Icon src={icon} alt="condition" />
          <Text>{text}</Text>
        </ConditionIcon>
      </SectionOne>
      <SectionTwo>
        <City>{locationName}</City>
        <CurrentDate>{newDate}</CurrentDate>
      </SectionTwo>
    </WeatherInfo>
  );
};

export default CurrentWeatherInfo;
