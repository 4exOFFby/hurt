import { createGlobalStyle } from 'styled-components';
import Neucha from '../fonts/Neucha-Regular.woff2';
import Lobster from '../fonts/Lobster-Regular.woff2';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Neucha';
        src: local('Neucha'), url(${Neucha}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Lobster';
        src: local('Lobster'), url(${Lobster}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    body {
      margin: 0;
      background-color: black;
    }
`;

const theme = {
    buttonColorAccept: 'gold',
    buttonColorReset: 'gray',
    backgroundColorDark: 'black',
    backgroundColorLight: 'white',
    basicFont: '"Neucha", "Arial", sans-serif',
    titleFont: '"Lobster", "Arial", sans-serif',
    colorDark: 'white',
    colorLight: 'black',
}

export {theme, GlobalStyles};