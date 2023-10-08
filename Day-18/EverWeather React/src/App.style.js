import styled from "styled-components";

export const MainContainer = styled.main`
 min-height: calc(100vh - 8.123rem);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 8rem;

  @media screen and (min-width: 50px) and (max-width: 1050px) {
    margin: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }



`;

export const WeatherStatsSection = styled.div`
  display: flex;
  align-items: end;
  gap: 2.81rem;

  @media (max-width: 900px) {
    flex-direction: column;
    max-width: 35.875rem;
  }
`;
