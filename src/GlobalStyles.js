import { createGlobalStyle } from "styled-components";
import InterThin from "./fonts/Inter-Thin.ttf";
import InterLight from "./fonts/Inter-Light.ttf";
import InterRegular from "./fonts/Inter-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face{
  font-family: "Inter";
  src: local("Inter"), url(${InterLight}) format("truetype");
  font-weight: 100;
}
@font-face{
  font-family: "Inter";
  src: local("Inter"), url(${InterThin}) format("truetype");
  font-weight: 200;
}
@font-face{
  font-family: "Inter";
  src: local("Inter"), url(${InterRegular}) format("truetype");
  font-weight: 300;
}

*, ::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Inter';
    overflow-x: hidden;
    color: #fff;
}

:root{
  
}
`;
