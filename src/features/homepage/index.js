import { ContactUs } from "../../common/ContactUs";
import { AboutUs } from "./AboutUs";
import { Hero } from "./Hero";
import { News } from "./News";
import { Sponsors } from "./Sponsors";

export const Homepage = () => (
    <main>
        <Hero />
        <Sponsors />
        <AboutUs />
        <News />
        <ContactUs />
    </main>
);