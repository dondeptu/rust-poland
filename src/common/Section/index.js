import { Header, Wrapper } from "./styled";

export const Section = ({ variant, header, content, additionalContent }) => (
    <Wrapper $variant={variant}>
        <Header>{header}</Header>
        {content}
        {additionalContent}
    </Wrapper>
);