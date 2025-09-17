import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    max-width: 75%;
    margin: 138px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin: 90px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 100%;
        margin-top: 60px;
        margin-bottom: 56px;
    }
`;

export const Header = styled.h1`
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 70px;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 64px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 28px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.15;
    color: ${({ theme }) => theme.headerParagraph};
    margin: 0 0 46px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 28px;
    }
`;

export const ButtonLink = styled.a`
    align-self: flex-start;
    background-color: ${({ theme }) => theme.buttons.button};
    color: ${({ theme }) => theme.page.text};
    text-decoration: none;
    border-radius: 30px;
    padding: 20px 74px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: background 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 16px;
        padding: 18px 66px;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        align-self: center;
        padding: 14px 24px;
        font-size: 14px;   
    }

    &:hover {
        background-color: ${({ theme }) => theme.buttons.hover};
    }

    &:active {
        background-color: ${({ theme }) => theme.buttons.active};
    }
`;