import { toHomepage } from "../../../core/App/routes";
import { LogoLink, StyledLogo, Title } from "./styled";

export const LogoNavLink = ({ variant }) => (
    <LogoLink $variant={variant} to={toHomepage()} aria-label="Go to homepage">
        <StyledLogo $variant={variant} alt="Logo" />
        <Title $variant={variant}>Rust Poland</Title>
    </LogoLink>
);