import useWindowWidth from "./useWindowWidth";
import { theme } from "../../core/App/theme";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navigation = () => {
    const windowWidth = useWindowWidth();
    const mobileWidth = theme.breakpoints.mobileMax;

    return (
        windowWidth > mobileWidth
            ? <DesktopNav />
            : <MobileNav />
    );
};