import { createGlobalStyle } from "styled-components";
import "font-awesome/css/font-awesome.css";

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

   * {
     padding: 0;
     margin: 0;
     outline: 0;
     box-sizing: border-box;
  }

  body {
    background: #353940;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  input, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
