import { LogoNavLink } from "../LogoNavLink";
import { DropdownMenu } from "./DropdownMenu";
import { BurgerMenu, NavBar } from "./styled";

export const MobileNav = () => (
    <>
        <NavBar>
            <LogoNavLink variant={"mobile"} />
            <BurgerMenu />
        </NavBar>
        <DropdownMenu />
    </>
);