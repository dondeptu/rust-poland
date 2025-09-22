import { NavLink } from "react-router";
import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.box.background};
    border-radius: 5px;
    padding: 24px 30px;
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        padding: 20px 18px;
        gap: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        padding: 16px 8px;
        gap: 10px;
    }
`;

export const ArticleDate = styled.span`
    font-family: ${({ theme }) => theme.fonts.headers};
    line-height: 1.0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 15px;
        line-height: 1.15;
    }
`;

export const StyledLine = styled.div`
    border-left: 1px solid ${({ theme }) => theme.page.text};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        border-left: 0;
        border-bottom: 1px solid ${({ theme }) => theme.page.text};
    }
`;

export const Subheader = styled.h3`
    margin-top: 0;
    margin-bottom: 22px;
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 20px;
    letter-spacing: 0.01em;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
        margin-bottom: 11px;
    }
`;

export const ArticleLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.page.text};

    &:hover {
        border-bottom: 1px solid currentColor;
    }
`;

export const Parahraph = styled.p`
    margin: 0;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.2;
        letter-spacing: 0.01em;
    }
`;