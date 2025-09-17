import styled from "styled-components";

export const Box = styled.div`
    background: ${({ theme }) => theme.box.background};
    border-radius: 5px;
    padding: 32px 90px;
    opacity: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        padding: 30px 62px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        padding: 14px 42px;
        row-gap: 24px;
    }
    
`;

export const Company = styled.div`
    font-size: 23px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;