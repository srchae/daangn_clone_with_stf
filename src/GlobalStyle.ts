import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Regular.subset.woff2") format("woff2");
    font-weight: 400;
  }

  body {
    font-family: "Pretendard", sans-serif;
    margin: 0 auto;
    padding: 0;
    max-width: 500px;
    height: 100dvh;
  }
`;

export default GlobalStyle;
