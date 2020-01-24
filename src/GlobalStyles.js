
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${p => p.theme.fontFamily};
  }
  h1 {
    font-size: ${p => p.theme.fontSize.headerOne};
  }
  h2 {
    font-size: ${p => p.theme.fontSize.headerTwo};
  }
  h3 {
    font-size: ${p => p.theme.fontSize.headerThree};
  }
  h4 {
    font-size: ${p => p.theme.fontSize.headerFour};
  }
  h1,
  h2 {
    font-weight: 700;
  }
`