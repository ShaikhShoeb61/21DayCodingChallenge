import {
  CloudyBox,
  Condition,
  HumidityBox,
  Icon,
  IconSection,
  RainBox,
  StatsBox,
  Text,
  Title,
  WeatherStatsBox,
  WindBox,
} from "./stylescomponents/WeatherStats";

const WeatherStats = ({ data, bgColor }) => {
  const cloud = data.current.cloud;
  const humidity = data.current.humidity;
  const wind = Math.floor(data.current.wind_kph);
  const rain = data.current.precip_mm;

  return (
    <WeatherStatsBox>
      <Title>Today's Weather</Title>
      <StatsBox $backgroundcolor={bgColor}>
        <CloudyBox>
          <IconSection>
            <Icon src="./WeatherIcons/cloudy.png" alt="cloudy" />
            <Text>Cloudy</Text>
          </IconSection>
          <Condition>{cloud}%</Condition>
        </CloudyBox>
        <HumidityBox>
          <IconSection>
            <Icon src="./WeatherIcons/humidity.png" alt="humidity" />
            <Text>Humidity</Text>
          </IconSection>
          <Condition>{humidity}%</Condition>
        </HumidityBox>
        <WindBox>
          <IconSection>
            <Icon src="./WeatherIcons/wind.png" alt="wind" />
            <Text>Wind</Text>
          </IconSection>
          <Condition>{wind}km/h</Condition>
        </WindBox>
        <RainBox>
          <IconSection>
            <Icon src="./WeatherIcons/rain.png" alt="humidity" />
            <Text>Rain</Text>
          </IconSection>
          <Condition>{rain}mm</Condition>
        </RainBox>
      </StatsBox>
    </WeatherStatsBox>
  );
};

export default WeatherStats;
