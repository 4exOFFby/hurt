import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles, theme } from './assets/GlobalStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);