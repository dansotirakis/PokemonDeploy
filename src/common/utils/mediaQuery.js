import { css } from 'styled-components';
import { BREAKPOINTS } from '../constants/screen';

const mediaQuery = type =>
  Object.keys(BREAKPOINTS).reduce((acc, label) => {
    acc[label] = (literals, ...placeholders) => css`
      @media (${type}-width: ${BREAKPOINTS[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
    return acc;
  }, {});

export const mediaMin = mediaQuery('min');
export const mediaMax = mediaQuery('max');
