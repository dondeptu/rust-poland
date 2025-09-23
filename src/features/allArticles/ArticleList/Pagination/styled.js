import styled from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 52px 0;
    gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin-top: 46px;
        margin-bottom: 46px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 24px;
        margin-bottom: 24px;
    }
`;

export const PageButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: ${({ active, theme: { pagination } }) => (active ? pagination.active : pagination.color)};
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.01em;

    &:disabled {
        color: ${({ theme }) => theme.pagination.disabled};
        cursor: not-allowed;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
`;

export const PaginationButton = styled(PageButton)`
    width: 30px;
    height: 30px;
    margin: 0 4px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 22px;
        height: 22px;
        margin-left: 3px;
        margin-right: 3px;
    }
`;

export const NextArrow = styled(Arrow)`
    width: 30px;
    height: 30px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 22px;
        height: 22px;
    }
`;

export const PrevArrow = styled(NextArrow)`
    transform: scaleX(-1);
`;

export const Separator = styled.span`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.01em;
`;