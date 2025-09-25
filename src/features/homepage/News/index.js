import { Section } from "../../../common/Section";
import { ArrowIcon, ArticleDate, ArticleHeader, ArticleLink, Box, Line, LinkButton, Paragraph, Wrapper } from "./styled";
import { toArticle, toArticles } from "../../../core/App/routes";

export const News = () => (
    <Section
        header={"News"}
        content={
            <Wrapper>
                {Array.from({ length: 6 }).map((_, i) => (
                    <Box key={i}>
                        <ArticleDate>13 January 2025</ArticleDate>
                        <Line />
                        <ArticleHeader>
                            <ArticleLink to={toArticle({ id: i })}>Rust Gdansk is online!</ArticleLink>
                        </ArticleHeader>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus neque elit, et mattis dui auctor a. Integer eget sem finibus, ullamcorper leo at, ullamcorper felis. Donec condimentum elit libero, consequat pellentesque nibh porta in.
                        </Paragraph>
                    </Box>
                ))}
            </Wrapper>
        }
        additionalContent={
            <LinkButton to={toArticles()}>
                All Articles
                <ArrowIcon />
            </LinkButton>
        }
    />
);