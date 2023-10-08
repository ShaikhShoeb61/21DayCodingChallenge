import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  height: 8.125rem;
  align-items: flex-end;
  justify-content: center;
`;

export const NavItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 8rem;

  @media screen and (min-width: 50px) and (max-width: 1050px) {
    margin: 0;
  }

  @media (max-width: 420px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.img`
  @media screen and (min-width: 50px) and (max-width: 1400px) {
    width: 13.5rem;
  }

  @media screen and (min-width: 50px) and (max-width: 900px) {
    width: 10rem;
  }


`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34.375rem;
  height: 4rem;
  border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  margin-left: 17rem;

  @media screen and (min-width: 50px) and (max-width: 900px) {
    margin-left: 0rem !important;
  }

  @media (max-width: 708px) {
    width: 22rem;
  }

  @media (max-width: 420px) {
    width: 15rem;
  }
`;

export const Input = styled.input`
  min-width: 30.84rem;
  height: 100%;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  border: none;
  outline: none;
  background: none;
  color: ${(props) => props.theme.primaryColor};

  &::placeholder {
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.primaryColor};
  }

  @media (max-width: 708px) {
    width: 100%rem;
    min-width: 0rem;
  }
  @media (max-width: 420px) {
    min-width: 12rem;
  }
`;

export const SearchIcon = styled.div`
  .ri-search-line {
    font-size: 1.6rem;
    color: ${(props) => props.theme.primaryColor};

    &:hover {
      cursor: pointer;
    }
  }
`;
