import React from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <MainContainer>
        <HeroSection>
          <Title>Products Gallery</Title>
          <Description>
            Explore Our Unique Collection for a Memorable Experience
          </Description>
        </HeroSection>
        <ProductNavigation>
          <ItemBox>
            <NavLinkStyled to="professional">
              <ItemIcon src="./Icons/tie_icon.png" alt="tie icon" />
              <ItemText>Professional</ItemText>
            </NavLinkStyled>
          </ItemBox>
          <ItemBox>
            <NavLinkStyled to="wardrobe-essentials">
              <ItemIcon src="./Icons/hanger_icon.png" alt="tie icon" />
              <ItemText>Wardrobe Essentials</ItemText>{" "}
            </NavLinkStyled>
          </ItemBox>
          <ItemBox>
            <NavLinkStyled to="education">
              <ItemIcon src="./Icons/education_hat_icon.png" alt="tie icon" />{" "}
              <ItemText>Education</ItemText>
            </NavLinkStyled>
          </ItemBox>
          <ItemBox>
            <NavLinkStyled to="apparel-&-style">
              <ItemIcon src="./Icons/tshirt_icon.png" alt="tie icon" />{" "}
              <ItemText>Apparel & Style</ItemText>
            </NavLinkStyled>
          </ItemBox>
        </ProductNavigation>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  padding: 0.3125rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 2.6875rem;
  padding-bottom: 2rem;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 2.125rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Description = styled.p`
  color: ${(props) => props.theme.grey};
  font-size: 0.875rem;
  font-weight: 400;
`;

const ProductNavigation = styled.div`
  display: flex;
  width: 100%;
  height: 3.75rem;
  padding: 1.3125rem 5rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.7px solid ${(props) => props.theme.grey};

  @media (max-width: 458px) {
    padding: 1.3125rem 3rem;
  }
  @media (max-width: 246px) {
    padding: 1.3125rem 1rem;
  }
`;

const ItemBox = styled.div`
  display: flex;
  height: 3.75rem;
  align-items: center;
  gap: 0.3125rem;
  flex-shrink: 0;
`;
const ItemIcon = styled.img``;
const ItemText = styled.span`
  color: ${(props) => props.theme.black};
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: 937px) {
    display: none;
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  height: inherit;
  gap: 0.31rem;
  &.active {
    border-bottom: 2px solid ${(props) => props.theme.lightGreen};
  }
`;
