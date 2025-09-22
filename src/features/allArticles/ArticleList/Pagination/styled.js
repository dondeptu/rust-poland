import styled from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 52px 0;
    gap: 20px;
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
`;

export const PaginationButton = styled(PageButton)`
    width: 30px;
    height: 30px;
    margin: 0 4px;
`;

export const NextArrow = styled(Arrow)`
    width: 30px;
    height: 30px;
`;

export const PrevArrow = styled(NextArrow)`
    transform: scaleX(-1);
`;

export const Separator = styled.span`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.01em;
`;