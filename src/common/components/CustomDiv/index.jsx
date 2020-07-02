import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

const CustomDiv = styled.div`
    ${({ height }) => height && `height: ${height};`}
    ${({ width }) => width && `width: ${width};`}
    ${({ margin }) => margin && `margin: ${margin};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ border }) => border && `border: ${border};`}
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
    ${({ borderColor }) => `border-color: ${borderColor || COLORS.orange};`}
    ${({ display }) => display && `display: ${display};`}
    ${({ background }) => background && `background: ${background};`}
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
    ${({ color }) => color && `color: ${color};`}
    ${({ cursor }) => cursor && `cursor: ${cursor};`}
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ justifyContent }) =>
      justifyContent && `justify-content: ${justifyContent};`}
    ${({ textAlignLast }) =>
      textAlignLast && `text-align-last: ${textAlignLast};`}
    ${({ wordBreak }) => wordBreak && `word-break: ${wordBreak};`}
    ${({ agrouped }) => agrouped && `margin: 0 0 10px 0`}
`;
export { CustomDiv };
