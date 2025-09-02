import { toArticles, toHomepage } from "../../../core/App/routes";
import { becomeSpeaker, meetup } from "../../../core/App/externalLinks";
import { List, StyledLogo, NavBar, StyledNavLink, Title, LogoNavLink, Item, MenuLink } from "./styled";

export const DesktopNav = () => (
    <NavBar>
        <LogoNavLink to={toHomepage()}>
            <StyledLogo alt="Logo" />
            <Title>Rust Poland</Title>
        </LogoNavLink>
        <List>
            <Item>
                <MenuLink href={meetup()} target="_blank" rel="noopener noreferrer">Meetup</MenuLink>
            </Item>
            <Item>
                <StyledNavLink to={toArticles()}>Articles</StyledNavLink>
            </Item>
            <Item>
                <MenuLink href={becomeSpeaker()} target="_blank" rel="noopener noreferrer">Become a Speaker!</MenuLink>
            </Item>
            <Item>
                <MenuLink href="#footer">Contact Us</MenuLink>
            </Item>
        </List>
    </NavBar>
);