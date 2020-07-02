import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

const CustomParagraph = styled.p`
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
    ${({ fontSize }) => `font-size: ${fontSize || '18px'};`}
    ${({ color }) => `color: ${color || COLORS.orange};`}
    ${({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ margin }) => margin && `margin: ${margin};`}
`;
export { CustomParagraph };
