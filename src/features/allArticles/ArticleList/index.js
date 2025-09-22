import { ArticleBox } from "./ArticleBox";
import { YearHeader, StyledLine, List, ArticleSection, Year, YearBlock } from "./styled";

export const ArticleList = () => (
    // NOTE: Currently the year header is static.
    // In the future, we should render a new YearBlock
    // each time the articles list contains a different year.
    <ArticleSection>
        <YearBlock>
            <YearHeader>
                <Year>{"2025"}</Year>
                <StyledLine />
            </YearHeader>
            <List>
                {Array.from({ length: 4 }).map((_, i) => (
                    <ArticleBox key={i}
                        releaseDate={"13 January"}
                        title={"Rust Poland is online!"}
                        abstact={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus neque elit, et mattis dui auctor a. Integer eget sem finibus, ullamcorper leo at, ullamcorper felis. Donec condimentum elit libero, consequat pellentesque nibh porta in."
                        }
                    />
                ))}
            </List>
        </YearBlock>

        <YearBlock>
            <YearHeader>
                <Year>{"2024"}</Year>
                <StyledLine />
            </YearHeader>
            <List>
                {Array.from({ length: 5 }).map((_, i) => (
                    <ArticleBox key={i}
                        releaseDate={"13 January"}
                        title={"Rust Poland is online!"}
                        abstact={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus neque elit, et mattis dui auctor a. Integer eget sem finibus, ullamcorper leo at, ullamcorper felis. Donec condimentum elit libero, consequat pellentesque nibh porta in."
                        }
                    />
                ))}
            </List>
        </YearBlock>
    </ArticleSection>
);