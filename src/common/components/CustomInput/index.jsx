import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

const CustomInput = styled.input`
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ fontWeight }) => `font-weight: ${fontWeight || '200'};`}
    ${({ fontSize }) => `font-size: ${fontSize || '18px'};`}
    ${({ backgroundColor }) =>
      backgroundColor && `background-color: ${backgroundColor};`}
    ${({ boxSizing }) => boxSizing && `box-sizing: ${boxSizing};`}
    ${({ border }) => `border: ${border || 'solid 2px'};`}
    ${({ borderRadius }) => `border-radius: ${borderRadius || '5px'};`}
    ${({ borderColor }) => `border-color: ${borderColor || COLORS.orange};`}
    ${({ color }) => `color: ${color || COLORS.blue500};`}
    ${({ cursor }) => cursor && `cursor: ${cursor};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ outline }) => outline && `outline: ${outline};`}
    ${({ margin }) => margin && `margin: ${margin};`}
    ${({ width }) => width && `width: ${width};`}
    ${({ display }) => display && `display: ${display};`}
    
    &:hover {
      border: solid 2px ${COLORS.orange100};
    };
    
    &:focus {
      background: ${COLORS.orange100};
      outline: none;
    };
    
`;

export { CustomInput };
