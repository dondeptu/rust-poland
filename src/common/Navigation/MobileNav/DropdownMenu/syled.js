import { NavLink } from "react-router";
import styled, { css } from "styled-components";

export const MenuList = styled.ul`
    position: fixed;
    z-index: 10;
    top: 93px;
    left: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 18px;
`;

export const Item = styled.li`
    list-style-type: none;
    padding: 15px 21px;
    background-color: ${({ theme }) => theme.navigation.dropdownMenu.background};
    border-bottom: 1px solid ${({ theme }) => theme.navigation.dropdownMenu.active};
    display: flex;
    transition: color 0.1s;

    &:active {
        background-color: ${({ theme }) => theme.navigation.dropdownMenu.active};
    }
`;

const navBarLinksStyles = css`
    color: ${({ theme }) => theme.page.text};
    text-decoration: none;
    min-width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
    ${navBarLinksStyles}
`;

export const MenuLink = styled.a`
    ${navBarLinksStyles}
`;