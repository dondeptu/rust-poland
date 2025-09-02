import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../logo.svg";
import { NavLink } from "react-router";

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
`;

export const LogoNavLink = styled(NavLink)`
    display: flex;
    align-items: flex-end;
    gap: 14px;
    text-decoration: none;
`;

export const StyledLogo = styled(Logo)`
    width: 76px;
`;

export const Title = styled.span`
    font-family: ${({ theme }) => theme.fonts.logo};
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.page.text};
    padding-bottom: 12px;

    &:active {
        color: ${({ theme }) => theme.navigation.active};
    }
`;

export const List = styled.ul`
    display: flex;
    align-items: flex-end;
    gap: 40px;
    padding-left: 0;
    padding-bottom: 12px;
    margin: 0;
`;

export const Item = styled.li`
    list-style-type: none;
`;

const navBarLinksStyles = css`
    font-family: ${({ theme }) => theme.fonts.headers};
    color: ${({ theme }) => theme.page.text};
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;
    transition: color 0.1s;

    &:active,
    &.active {
        color: ${({ theme }) => theme.navigation.active};
    }
`;

export const StyledNavLink = styled(NavLink)`
    ${navBarLinksStyles}
`;

export const MenuLink = styled.a`
    ${navBarLinksStyles}
`;