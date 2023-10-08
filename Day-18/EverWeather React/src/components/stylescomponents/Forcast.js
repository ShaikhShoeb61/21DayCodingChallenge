import styled from "styled-components";

export const ForcastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ForecastBox = styled.div`
  width: 5.625rem;
  height: 6.875rem;
  padding: 0.5rem;
  background: ${(props) => props.$backgroundcolor};
  border: 0.5px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 0.2rem;

  @media (max-width: 900px) {
    width: 10rem;
    height: 12rem;
  }
`;

export const Day = styled.span`
  color: #fff;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 900px) and (max-width: 1920px) {
    font-size: 13px;
  }
`;

export const Icon = styled.img`
  @media (max-width: 900px) {
    width: 3.8rem;
  }
  @media screen and (min-width: 900px) and (max-width: 1920px) {
    width: 2.8rem;
  }
`;

export const Temperature = styled.span`
  color: #fff;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 900px) and (max-width: 1920px) {
    font-size: 13px;
  }

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;
