import styled from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.box.background};
    border-radius: 3px;
    margin: 68px 0 136px;
    padding: 92px 0 34px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin-top: 60px;
        padding-top: 70px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 50px 0 68px;
        padding: 26px 0;
    }
`;

export const Title = styled.h1`
    margin: 0 92px 92px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 48px;
    line-height: 1;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin: 0 28px 70px;
        font-size: 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 0 8px 36px;
        font-size: 26px;
        line-height: 1.1;
        text-align: left;
    }
`;

export const Subtitle = styled.h2`
    margin: 60px 92px 42px;
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 20px;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin: 50px 28px 30px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 60px 8px 22px;
        font-size: 17px;
        letter-spacing: 0.01em;
    }
`;

export const ArticleParagraph = styled.p`
    margin: 24px 92px;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin: 20px 28px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 18px 8px;
        line-height: 1.2;
        letter-spacing: 0.01em;
    }
`;

export const ImageWrapper = styled.div`
    margin: 42px 0;
    aspect-ratio: 16 / 9;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin: 30px 0;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 20px 0;
    }
`;

export const ArticleImage = styled.img`
    width: 100%;
    object-fit: contain;
`;

export const ReleaseDate = styled.p`
    color: ${({ theme }) => theme.box.dateHeader};
    line-height: 1;
    margin: 40px 36px 0;
    text-align: right;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin: 34px 28px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 26px 8px 0;
        left: 1.15;
        text-align: left;
    }
`;