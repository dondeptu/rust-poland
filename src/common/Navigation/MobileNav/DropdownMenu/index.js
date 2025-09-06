import { becomeSpeaker, meetup } from "../../../../core/App/externalLinks";
import { toArticles } from "../../../../core/App/routes";
import { Item, List, MenuLink, StyledNavLink, MobileMenu, CloseMenuIcon, StyledLogo, MenuList } from "./syled";

export const DropdownMenu = () => {
    return (
        <MobileMenu aria-label="Mobile menu">
            <MenuList>
                <CloseMenuIcon />
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
            </MenuList>
            <StyledLogo />
        </MobileMenu>
    );
}