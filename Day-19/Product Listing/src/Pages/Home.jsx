import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Main />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.White}f;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 7.25rem;
  overflow: hidden;
`;
