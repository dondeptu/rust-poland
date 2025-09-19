import { NavLink } from "react-router";
import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "./arrow.svg";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px 14px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const Box = styled.article`
    background: ${({ theme }) => theme.box.background};
    border-radius: 5px;
    padding: 30px;
    display: grid;
    gap: 18px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        padding: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 16px 8px;
        gap: 10px;
    }
`;

export const ArticleDate = styled.span`
    color: ${({ theme }) => theme.box.dateHeader};
    line-height: 1.0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.15;
    }
`;

export const Line = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.box.dateHeader};
`;

export const ArticleHeader = styled.h3`
    margin: 0;
`;

export const ArticleLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.page.text};
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }

    &:hover {
        border-bottom: 1px solid currentColor;
    }
`;

export const Paragraph = styled.p`
    line-height: 1.4;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.2;
        letter-spacing: 0.01em;
    }
`;

export const LinkButton = styled(NavLink)`
    color: ${({ theme }) => theme.page.text};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.1em;
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
    margin: 52px 0 46px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 24px 0;
        font-size: 16px;
    }
`;

export const ArrowIcon = styled(ArrowSvg)`
    width: 22px;
`;