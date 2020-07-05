import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

const CustomButton = styled.button`
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ fontWeight }) => `font-weight: ${fontWeight || '200'};`}
    ${({ fontSize }) => `font-size: ${fontSize || '18px'};`}
    ${({ backgroundColor }) =>
      `background-color: ${backgroundColor || COLORS.white100};`}
    ${({ boxSizing }) => boxSizing && `box-sizing: ${boxSizing};`}
    ${({ border }) => `border: ${border || 'solid 2px'};`}
    ${({ borderRadius }) => `border-radius: ${borderRadius || '5px'};`}
    ${({ borderColor }) => `border-color: ${borderColor || COLORS.orange};`}
    ${({ color }) => `color: ${color || COLORS.blue500};`}
    ${({ cursor }) => cursor && `cursor: ${cursor};`}
    ${({ padding }) => `padding: ${padding || '10px'};`}
    ${({ outline }) => outline && `outline: ${outline};`}
    ${({ margin }) => `margin: ${margin || '10px'};`}
    ${({ width }) => width && `width: ${width};`}
    
    &:hover {
      color: ${COLORS.black};
      border: solid 2px ${COLORS.orange100};
    };
    
    &:focus {
      background: ${COLORS.orange100};
      color: ${COLORS.black};
      outline: none;
    };
`;

export { CustomButton };
