import styled from "styled-components";

export const WeatherStatsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.12rem;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

export const StatsBox = styled.div`
  width: 35.875rem;
  height: 22.5625rem;
  background: ${(props) => props.$backgroundcolor};
  border: 0.5px solid rgba(255, 255, 255, 0.25);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0.3rem;
`;

export const CloudyBox = styled.div`
  display: flex;
  padding: 0rem 0.11844rem 0rem 0.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.776rem;
`;

export const HumidityBox = styled.div`
  display: flex;
  padding: 0rem 0.11844rem 0rem 0.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.776rem;
`;

export const WindBox = styled.div`
  display: flex;
  padding: 0rem 0.11844rem 0rem 0.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.776rem;
`;

export const RainBox = styled.div`
  display: flex;
  height: 6.56931rem;
  padding-left: 0px;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const Icon = styled.img`
  width: 4rem;
`;

export const Text = styled.span`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 0.87175rem; 
  text-transform: capitalize;
`;

export const Condition = styled.h5`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 100%;
  text-transform: lowercase;
`;
