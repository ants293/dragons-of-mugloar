import { createGlobalStyle } from "styled-components";
import mainBgImage from "../assets/images/main-bg.jpg";

export const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%
  }
  body {
    background-image: url(${mainBgImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
