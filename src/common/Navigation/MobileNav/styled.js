import styled from "styled-components";
import { ReactComponent as BurgerMenuIcon } from "./burger-menu.svg";

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const MenuButton = styled.button`
    padding: 0;
    border: 0;
    width: 27px;
    height: 25px;
`;

export const BurgerIcon = styled(BurgerMenuIcon)`
    width: 100%;
`;