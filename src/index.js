import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { themes } from './themes';

import Header from './components/Header/Header'
import OnboardingStats from './img/onboarding-stats.png'

class MainPage extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themes.eggplore}>
        <GlobalStyles />
        <Header />
        <img src={OnboardingStats} alt="Onboarding illustration" />
      </ThemeProvider>
    )
  }
}

let App = document.getElementById("root");

ReactDOM.render(<MainPage />, App);