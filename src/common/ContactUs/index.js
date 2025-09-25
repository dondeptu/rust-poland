import { facebook, linkedIn } from "../../core/App/externalLinks";
import { ContactDetails, ContactLabel, ContactLink, ContactValue, FacebookIcon, Footer, Form, FormButton, FormLabel, FormWrapper, Header, Input, LinkedInIcon, Paragraph, SocialLink, Socials, TextArea, Wrapper } from "./styled";

export const ContactUs = () => (
    <Footer id="footer">
        <Wrapper>
            <Header>Contact Us</Header>
            <Paragraph>
                Masz pytania, pomysły lub po prostu chcesz dowiedzieć się więcej o Rust Gdańsk? Skontaktuj się z nami – z przyjemnością porozmawiamy!
            </Paragraph>
            <ContactDetails>
                <div>
                    <ContactLabel>Mail</ContactLabel>
                    <ContactValue>
                        <ContactLink href="mailto:contact@rustgdansk.pl">
                            contact@rustgdansk.pl
                        </ContactLink>
                    </ContactValue>
                </div>
                <div>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactValue>
                        <ContactLink href="tel:+48123456789">
                            +48 123 456 789
                        </ContactLink>
                    </ContactValue>
                </div>
            </ContactDetails>
            <Socials>
                <SocialLink href={facebook()} target="_blank" rel="noopener noreferrer" aria-label="Go to Facebook">
                    <FacebookIcon />
                </SocialLink>
                <SocialLink href={linkedIn()} target="_blank" rel="noopener noreferrer" aria-label="Go to LinkedIn">
                    <LinkedInIcon />
                </SocialLink>
            </Socials>
        </Wrapper>
        <Form>
            <FormWrapper>
                <FormLabel>
                    Your Name
                    <Input type="text" name="postName" required />
                </FormLabel>
                <FormLabel>
                    Your E-mail
                    <Input type="email" name="postEmail" required />
                </FormLabel>
                <FormLabel>
                    Your Message
                    <TextArea name="postContent" required />
                </FormLabel>
            </FormWrapper>
            <FormButton>Send</FormButton>
        </Form>
    </Footer>
);