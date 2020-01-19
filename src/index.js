import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { themes } from './themes';

import Header from './components/Header/Header'

class HelloMessage extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themes.eggplore}>
        <GlobalStyles />
        <div>
          <Header/>
          <div className="container">
            <h1>Hello {this.props.name}</h1>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Carrie" />, App);