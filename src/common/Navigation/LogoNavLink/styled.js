import styled from "styled-components";
import { ReactComponent as Logo } from "../logo.svg";
import { NavLink } from "react-router";

export const LogoLink = styled(NavLink)`
    display: flex;
    align-items: flex-end;
    gap: ${({ $variant }) => $variant === "mobile" ? "16px" : "14px"};
    text-decoration: none;
`;

export const StyledLogo = styled(Logo)`
    width: ${({ $variant }) => $variant === "mobile" ? "41px" : "76px"};
    height: ${({ $variant }) => $variant === "mobile" ? "44px" : "auto"};

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 64px;
    }
`;

export const Title = styled.span`
    font-family: ${({ theme }) => theme.fonts.logo};
    font-weight: 700;
    font-size: ${({ $variant }) => $variant === "mobile" ? "18px" : "20px"};
    color: ${({ theme }) => theme.page.text};
    padding-bottom: ${({ $variant }) => $variant === "mobile" ? "0" : "12px"};

    &:active {
        color: ${({ theme }) => theme.navigation.active};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 16px;
    }
`;