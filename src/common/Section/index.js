import { Header } from "./styled";

export const Section = ({ header, content }) => (
    <section>
        <Header>{header}</Header>
        <div>{content}</div>
    </section>
);