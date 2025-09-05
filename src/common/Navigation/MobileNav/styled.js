import styled from "styled-components";
import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as BurgerMenuIcon } from "./burger-menu.svg";
import { NavLink } from "react-router";

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const LogoNavLink = styled(NavLink)`
    display: flex;
    align-items: flex-end;
    gap: 16px;
    text-decoration: none;
`;

export const StyledLogo = styled(Logo)`
    width: 41px;
    height: 44px;
`;

export const Title = styled.span`
    font-family: ${({ theme }) => theme.fonts.logo};
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.page.text};

    &:active {
        color: ${({ theme }) => theme.navigation.active};
    }
`;

export const BurgerMenu = styled(BurgerMenuIcon)`
    width: 27px;
`;