import styled from "styled-components";

export const Wrapper = styled.header`
    text-align: center;
`;

export const Title = styled.h1`
    margin: 160px 0 136px;
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 60px;
    line-height: 1.1;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin-top: 120px;
        margin-bottom: 110px;
        font-size: 52px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 62px;
        margin-bottom: 56px;
        font-size: 26px;
    }
`;