import { toHomepage } from "../../../core/App/routes";
import { BurgerMenu, LogoNavLink, NavBar, StyledLogo, Title } from "./styled";

export const MobileNav = () => (
    <NavBar>
        <LogoNavLink to={toHomepage()}>
            <StyledLogo alt="Logo" />
            <Title>Rust Poland</Title>
        </LogoNavLink>
        <BurgerMenu />
    </NavBar>
);