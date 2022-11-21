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

  ::-webkit-scrollbar-track {
    border: 5px solid #68c6e5;
    background-color: #68c6e5;
  }

  ::-webkit-scrollbar {
    width: 15px;
    background-color: black;
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }

  html, body, #root {
    height: 100%;
  }
`;