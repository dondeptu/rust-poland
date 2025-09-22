import { Section } from "../../../common/Section";
import { ArticleBox } from "./ArticleBox";
import { YearHeader, StyledLine } from "./styled";

export const ArticleList = () => (
    <Section
        header={
            <YearHeader>
                2025
                <StyledLine />
            </YearHeader>
        }
        content={
            <ArticleBox
                releaseDate={"13 January"}
                title={"Rust Poland is online!"}
                abstact={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus neque elit, et mattis dui auctor a. Integer eget sem finibus, ullamcorper leo at, ullamcorper felis. Donec condimentum elit libero, consequat pellentesque nibh porta in."
                }
            />
        }
    />
);