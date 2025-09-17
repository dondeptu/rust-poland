import styled from "styled-components";

export const Header = styled.h2`
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 16px;
`;