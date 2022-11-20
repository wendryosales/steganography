import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    --webkit-font-smoothing: antialiased;
    font-size: 14px;
    background: #36D1DC;
  }

  html, body, #root {
    height: 100%;
  }
`;