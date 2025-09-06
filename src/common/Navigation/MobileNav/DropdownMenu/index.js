import { becomeSpeaker, meetup } from "../../../../core/App/externalLinks";
import { toArticles } from "../../../../core/App/routes";
import { Item, MenuList, MenuLink, StyledNavLink } from "./syled";

export const DropdownMenu = () => {
    return (
        <MenuList>
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
        </MenuList>
    );
}