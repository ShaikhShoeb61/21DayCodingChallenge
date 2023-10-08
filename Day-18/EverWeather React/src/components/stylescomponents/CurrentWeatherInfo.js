import styled from "styled-components";


export const WeatherInfo = styled.div`
display: flex;
min-width: 20.125rem;
max-width: 24.125rem;
align-items: flex-start;
gap: 2.25rem 4.4375rem;
flex-direction: column;
justify-content: flex-start;

  @media screen and (min-width: 50px) and (max-width: 900px) {
    width: 35.875rem;
    margin-right: 10rem;
  }

  

`;

export const SectionOne = styled.div`
display: flex;
align-items: center;
gap: 2rem;
`;

export const Tempreture = styled.h1`
color: #fff;;
font-size: 7.5rem;
font-weight: 400;
line-height: 100%;
`;

export const ConditionIcon = styled.div`
max-width: 5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`;

export const Icon = styled.img`
width: 4rem;
height: 4rem;
`;

export const Text = styled.span`
color: #fff;
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;

`;

export const SectionTwo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 1rem;
`;

export const City = styled.h3`
color: #fff;
font-size: 5.125rem;
font-weight: 400;
line-height: 100%; 
`;

export const CurrentDate = styled.span`
color: #fff;
font-size: 1.375rem;
font-weight: 400;
line-height: normal;
`;




