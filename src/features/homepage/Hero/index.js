import { applicationForm } from "../../../core/App/externalLinks";
import { ButtonLink, Header, Paragraph, Wrapper } from "./styled";

export const Hero = () => (
    <Wrapper>
        <Header>
            A Community of Rust Enthusiasts
        </Header>
        <Paragraph>
            Join us to share knowledge, grow your skills, and collaborate on Rust projects.
            We create a welcoming and inclusive space for everyone – no matter your level of experience.
        </Paragraph>
        <ButtonLink target="_blank" rel="noreferrer noopener" href={applicationForm()}>
            Join as a speaker!
        </ButtonLink>
    </Wrapper>
);