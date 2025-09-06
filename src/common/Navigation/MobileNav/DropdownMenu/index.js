import { useDispatch, useSelector } from "react-redux";
import { becomeSpeaker, meetup } from "../../../../core/App/externalLinks";
import { toArticles, toHomepage } from "../../../../core/App/routes";
import { Item, List, MenuLink, StyledNavLink, MobileMenu, CloseMenuIcon, StyledLogo, MenuList, CloseMenuButton, LogoLink } from "./syled";
import { selectIsDropdownMenuOpen, toggleDropdownMenu } from "../mobileNavSlice";

export const DropdownMenu = () => {
    const dispatch = useDispatch();
    const isDropdownMenuOpen = useSelector(selectIsDropdownMenuOpen);

    return (
        <MobileMenu $isOpen={isDropdownMenuOpen} aria-label="Mobile menu">
            <MenuList>
                <CloseMenuButton>
                    <CloseMenuIcon
                        onClick={() => dispatch(toggleDropdownMenu())}
                        aria-label="Close mobile menu"
                    />
                </CloseMenuButton>
                <List>
                    <Item>
                        <MenuLink
                            href={meetup()}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => dispatch(toggleDropdownMenu())}
                        >
                            Meetup
                        </MenuLink>
                    </Item>
                    <Item>
                        <StyledNavLink
                            to={toArticles()}
                            onClick={() => dispatch(toggleDropdownMenu())}
                        >
                            Articles
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <MenuLink
                            href={becomeSpeaker()}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => dispatch(toggleDropdownMenu())}
                        >
                            Become a Speaker!
                        </MenuLink>
                    </Item>
                    <Item>
                        <MenuLink
                            href="#footer"
                            onClick={() => dispatch(toggleDropdownMenu())}
                        >
                            Contact Us
                        </MenuLink>
                    </Item>
                </List>
            </MenuList>
            <LogoLink
                to={toHomepage()}
                aria-label="Go to homepage"
                onClick={() => dispatch(toggleDropdownMenu())}
            >
                <StyledLogo />
            </LogoLink>
        </MobileMenu>
    );
}