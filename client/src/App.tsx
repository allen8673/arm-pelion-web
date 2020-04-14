import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import './App.sass';
import GlobalStyles from './GlobalStyles';
import { Router } from './router/router';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
