import styled from "styled-components";

export const ArticleSection = styled.section`
    margin-top: 136px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin-top: 90px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 56px;
    }
`;

export const YearBlock = styled.div`
    margin: 16px 0;
`;

export const YearHeader = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        gap: 15px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 13px;
    }
`;

export const Year = styled.h2`
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 18px;
        margin-bottom: 12px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;

export const StyledLine = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.page.text};
`;

export const List = styled.div`
    display: grid;
    gap: 18px;

    @media(min-width: ${({ theme }) => theme.breakpoints.largeDesktopMin}px) {
        gap: 22px;
    }
`;