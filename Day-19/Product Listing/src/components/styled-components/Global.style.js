import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  
  }
body{
  height: 100vh;
}

a{
  text-decoration: none!important;
    color: #000;
}


@media (max-width: 320px) {
html{
  font-size: 14px;
}
}
  `;


