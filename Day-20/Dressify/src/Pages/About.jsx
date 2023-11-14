import React from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <MainContainer>
        <ContentContainer>
          <ImageSectionOne src="./images/about_page/image1.png" />
          <ContentBox>
            <Title>About Us</Title>
            <Description>
              At Dressify, we're passionate about delivering top quality
              products that enhance your life. We curate professional,
              educational, and apparel items with care and dedication.
            </Description>
          </ContentBox>
          <ImageSectionTwo src="./images/about_page/image2.png" />
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default About;

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: self-start;
  margin-top: 6rem;
`;

const ImageSectionOne = styled.img`
  max-width: 28.75rem;
  height: 10.9375rem;
`;
const ImageSectionTwo = styled.img`
  max-width: 28.75rem;
  height: 10.9375rem;
`;

const ContentBox = styled.div`
  display: flex;
  width: 28.75rem;
  height: 10.9375rem;
  padding: 1.5625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background: ${(props) => props.theme.white};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
`;

const Description = styled.p`
  color: ${(props) => props.theme.grey};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 160%;
`;
