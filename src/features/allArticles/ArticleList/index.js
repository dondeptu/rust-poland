import { ArticleBox } from "./ArticleBox";
import { YearHeader, StyledLine, List, ArticleSection, Year, ArticlesOfYear } from "./styled";

export const ArticleList = () => (
    <ArticleSection>
        <ArticlesOfYear>
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
        </ArticlesOfYear>

        <ArticlesOfYear>
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
        </ArticlesOfYear>
    </ArticleSection>
);