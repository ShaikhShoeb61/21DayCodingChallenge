import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  
  }
body{
width: 100%;
user-select: none;
}

a{
  text-decoration: none!important;
    color: #000;
}
`