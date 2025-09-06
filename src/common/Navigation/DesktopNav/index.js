import { toArticles } from "../../../core/App/routes";
import { becomeSpeaker, meetup } from "../../../core/App/externalLinks";
import { LogoNavLink } from "../LogoNavLink";
import { List, NavBar, StyledNavLink, Item, MenuLink } from "./styled";

export const DesktopNav = () => (
    <NavBar>
        <LogoNavLink variant={"desktop"} />
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