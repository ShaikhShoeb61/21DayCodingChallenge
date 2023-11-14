import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <NavBar>
      <Logo>Dressfiy</Logo>
      <NavItems>
        <NavLinkStyled to="/" exact="true">
          <Item>Gallery</Item>
        </NavLinkStyled>
        <NavLinkStyled to="/about">
          <Item>About</Item>
        </NavLinkStyled>
      </NavItems>
    </NavBar>
  );
};

export default Navigation;

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 3.75rem;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
  color: ${(props) => props.theme.lightGreen};
  font-family: Pacifico;
  font-size: 1.25rem;
  font-weight: 400;
`;

const NavItems = styled.div`
  display: flex;
  height: 2rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Item = styled.li`
  color: ${(props) => props.theme.black};
  height: 2rem;
  font-size: 0.875rem;
  font-weight: 400;
  list-style: none;
  align-items: center;
  justify-content: center;
  display: flex;


`

const NavLinkStyled = styled(NavLink)`
  &.active {
    border-bottom: 2px solid ${(props) => props.theme.lightGreen};
  }
`

