import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    
  }

  body {
    font-family: 'Inter', sans-serif;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    background-attachment: fixed;
    object-fit: cover;
    transition: 2s ease-in-out;
    opacity: 1;
    user-select: none;
  }


  @media (min-width: 1920px) {
  html{
    font-size: 20px;
  }
}

  @media (max-width: 1662px) {
  html{
    font-size: 14px;
  }
}
  @media (max-width: 1572px) {
  html{
    font-size: 13px;
  }
}

  @media (max-width: 1454px) {
  html{
    font-size: 12px;
  }
}

  @media (max-width: 1297px) {
  html{
    font-size: 11px;
  }
}

  @media (max-width: 475px) {
  html{
    font-size: 10px;
  }


  @media screen and (min-width: 50px) and (max-width: 320px) {
    html{
    font-size: 7px;
  }
  
  }

}
`;
