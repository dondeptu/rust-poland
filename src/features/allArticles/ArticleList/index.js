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
            <ArticleBox />
        }
    />
);