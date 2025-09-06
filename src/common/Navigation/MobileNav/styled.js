import styled from "styled-components";
import { ReactComponent as BurgerMenuIcon } from "./burger-menu.svg";

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const BurgerMenu = styled(BurgerMenuIcon)`
    width: 27px;
`;