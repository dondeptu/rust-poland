import { ArticleDate, ArticleLink, Parahraph, StyledLine, Subheader, Wrapper } from "./styled";

export const ArticleBox = () => (
    <Wrapper>
        <ArticleDate>13 January</ArticleDate>
        <StyledLine />
        <div>
            <Subheader>
                <ArticleLink to={"/"}>Rust Gdansk is online!</ArticleLink>
            </Subheader>
            <Parahraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus neque elit, et mattis dui auctor a. Integer eget sem finibus, ullamcorper leo at, ullamcorper felis. Donec condimentum elit libero, consequat pellentesque nibh porta in.
            </Parahraph>
        </div>
    </Wrapper>
);