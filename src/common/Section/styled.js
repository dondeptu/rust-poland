import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 136px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin-top: 90px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 56px;
    }
`;

export const Header = styled.h2`
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 18px;
        margin-bottom: 12px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 8px;
    }
`;