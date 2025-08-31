import styled from "styled-components";

export const Wrapper = styled.header`
    max-width: 75%;
    margin: 138px 0;
`;

export const Header = styled.h1`
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 70px;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 24px;
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.15;
    color: ${({ theme }) => theme.headerParagraph};
    margin-bottom: 46px;
`;

export const ButtonLink = styled.a`
    display: inline-block;
    background-color: ${({ theme }) => theme.buttons.button};
    color: ${({ theme }) => theme.page.text};
    text-decoration: none;
    border-radius: 30px;
    padding: 20px 74px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: background 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.buttons.hover};
    }

    &:active {
        background-color: ${({ theme }) => theme.buttons.active};
    }
`;