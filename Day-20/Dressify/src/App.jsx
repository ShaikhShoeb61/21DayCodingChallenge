import React from "react";
import { theme } from "./Components/Styled_Components/Theme.style";
import { GlobalStyles } from "./Components/Styled_Components/Global.style";
import styled, { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router.jsx";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <RouterProvider router={Router} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 0rem 5rem;
  padding-bottom: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 4.125rem;
  overflow: hidden;

  @media (max-width: 665px) {
    padding: 0rem 2rem;
  }

  @media (max-width: 458px) {
    padding: 0rem 1rem;
  }
`;
