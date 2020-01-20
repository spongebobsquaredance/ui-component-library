
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${p => p.theme.fontFamily};
  }
  h1,
  h2 {
    font-weight: 700;
  }
`