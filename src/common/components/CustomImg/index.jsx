import styled from 'styled-components';

const CustomImg = styled.img`
    ${({ width }) => width && `width: ${width};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ border }) => border && `border: ${border};`}
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
    ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
`;
export { CustomImg };
