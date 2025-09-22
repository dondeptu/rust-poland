import styled from "styled-components";

export const YearHeader = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        gap: 15px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 13px;
    }
`;

export const StyledLine = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.page.text};
`;