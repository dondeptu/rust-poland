import { NavLink } from "react-router";
import styled, { css } from "styled-components";
import { ReactComponent as CloseIcon } from "./close-menu.svg";
import { ReactComponent as Logo } from "../../logo.svg";

export const MobileMenu = styled.nav`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.page.background};
    display: flex;
    flex-direction: column;
    padding-top: 52px;
    padding-bottom: 46px;
    justify-content: space-between;
`;

export const CloseMenuIcon = styled(CloseIcon)`
    width: 27px;
    align-self: flex-end;
    margin-right: 9px;
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const List = styled.ul`
    padding: 0;
    margin: 10px 0;
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

export const StyledLogo = styled(Logo)`
    width: 41px;
    height: 44px;
    align-self: center;
`;