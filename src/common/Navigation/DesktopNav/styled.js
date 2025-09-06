import styled, { css } from "styled-components";
import { NavLink } from "react-router";

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
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