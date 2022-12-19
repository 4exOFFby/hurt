import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Notation } from './Notation/Notation';
import { MainScreen } from './MainScreen/MainScreen';
import { FormQuastions } from './FormQuastions/FormQuastions';
import { LightTheme, DarkTheme } from '../assets/Themes';
import { GlobalStyles } from '../assets/GlobalStyles';
import { ResultScreen } from './ResultScreen/ResultScreen';


export function App () {
  const [visible, setVisible] = useState(1);
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => theme === 'dark' ? setTheme('light') : setTheme('dark');


    if (visible === 1) {
      return (
        <ThemeProvider theme={theme === 'dark' ? LightTheme : DarkTheme}>
          <GlobalStyles />
          <MainScreen  setVisible={setVisible} onClick={themeToggler} theme={theme} />
        </ ThemeProvider>
      )
    }
  
    if (visible === 2) {
      return (
        <ThemeProvider theme={theme === 'dark' ? LightTheme : DarkTheme}>
          <GlobalStyles />
          <FormQuastions setVisible={setVisible} />
        </ ThemeProvider>
      )
    }
  
    if (visible === 3) {
      return (
        <ThemeProvider theme={theme === 'dark' ? LightTheme : DarkTheme}>
          <GlobalStyles />
          <ResultScreen setVisible={setVisible} themeToggler={themeToggler} />
        </ ThemeProvider>
      )
    }
  
    if (visible === 4) {
      return (
        <ThemeProvider theme={theme === 'dark' ? LightTheme : DarkTheme}>
          <GlobalStyles />
          <Notation setVisible={setVisible} themeToggler={themeToggler} />
        </ ThemeProvider>
      )
    }
};