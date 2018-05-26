import {injectGlobal} from "styled-components";

injectGlobal`
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    margin: 0;
    background-color: #dfe6e9;
    overflow: hidden;
  }
  * {
    user-select: none;
    cursor: normal;
  }
`;