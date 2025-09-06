import { useDispatch, useSelector } from "react-redux";
import { LogoNavLink } from "../LogoNavLink";
import { DropdownMenu } from "./DropdownMenu";
import { BurgerIcon, MenuButton, NavBar } from "./styled";
import { selectIsDropdownMenuOpen, toggleDropdownMenu } from "./mobileNavSlice";

export const MobileNav = () => {
    const dispatch = useDispatch();
    const isDropdownMenuOpen = useSelector(selectIsDropdownMenuOpen);

    return (
        <>
            <NavBar aria-label="Main navigation">
                <LogoNavLink variant={"mobile"} />
                <MenuButton
                    onClick={() => dispatch(toggleDropdownMenu())}
                    aria-label="Open mobile menu"
                    aria-controls="mobile-menu"
                    aria-expanded={isDropdownMenuOpen ? "true" : "false"}
                >
                    <BurgerIcon />
                </MenuButton>
            </NavBar>
            <DropdownMenu id="mobile-menu" />
        </>
    );
};