import styled from 'styled-components';

const CustomLabel = styled.label`
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
    ${({ backgroundColor }) =>
      backgroundColor && `background-color: ${backgroundColor};`}
    ${({ boxSizing }) => boxSizing && `box-sizing: ${boxSizing};`}
    ${({ border }) => border && `border: ${border};`}
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
    ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
    ${({ color }) => color && `color: ${color};`}
    ${({ cursor }) => cursor && `cursor: ${cursor};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ margin }) => margin && `margin: ${margin};`}
    ${({ width }) => width && `width: ${width};`}
    &:hover {
      ${({ hoverColor }) => hoverColor && `color: ${hoverColor};`}
    }
`;

export { CustomLabel };
