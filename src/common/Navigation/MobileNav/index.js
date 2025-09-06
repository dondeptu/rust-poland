import { LogoNavLink } from "../LogoNavLink";
import { BurgerMenu, NavBar } from "./styled";

export const MobileNav = () => (
    <NavBar>
        <LogoNavLink variant={"mobile"} />
        <BurgerMenu />
    </NavBar>
);