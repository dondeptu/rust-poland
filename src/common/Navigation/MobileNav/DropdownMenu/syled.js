import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as CloseIcon } from "./close-menu.svg";
import { ReactComponent as Logo } from "../../logo.svg";

export const MobileMenu = styled.nav`
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.page.background};
    display: flex;
    flex-direction: column;
    padding-top: 52px;
    padding-bottom: 46px;
    justify-content: space-between;
    transform: translateX(100%);
    transition: transform 0.2s ease-in-out;

    ${({ $isOpen }) => $isOpen && css`
        transform: translateX(0);
    `}
`;

export const CloseMenuButton = styled.button`
    width: 27px;
    height: 28px;
    padding: 0;
    border: 0;
    align-self: flex-end;
    margin-right: 9px;
`;

export const CloseMenuIcon = styled(CloseIcon)`
    width: 100%;
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

export const LogoLink = styled(NavLink)`
    align-self: center;
    height: 44px;
`;

export const StyledLogo = styled(Logo)`
    width: 41px;
    height: 100%;
`;