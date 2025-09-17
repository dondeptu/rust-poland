import { Section } from "../../../common/Section";
import { NoImage, Paragraph, StyledImageIcon } from "./styled";

export const AboutUs = () => (
    <Section
        variant={"aboutUs"}
        header={"About Us"}
        content={
            <Paragraph>
                Rust Gdansk group is a vibrant gathering of Rust programming enthusiasts in the Gdańsk area. Our mission is to foster a welcoming and inclusive environment where individuals at all levels of expertise can come together to share knowledge, learn, and collaborate on Rust-related projects.
            </Paragraph>
        }
        additionalContent={
            <NoImage>
                <StyledImageIcon />
            </NoImage>
        }
    />
);