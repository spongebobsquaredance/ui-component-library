import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/GlobalStyles';
import { themes } from '../src/themes';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={themes.vintage}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator