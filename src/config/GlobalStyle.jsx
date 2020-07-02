import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { COLORS } from '../common/utils/colors';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    box-sizing: border-box;
    font-family: Montserrat,serif;
    font-size: 13px;
  }
  body {
    font-family: Montserrat,serif;
    background-color: ${COLORS.appBackground};
    height: 100vh;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
  a[disabled] {
    pointer-events: none;
  }
`;
