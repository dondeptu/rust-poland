import { ArticleDate, ArticleLink, Parahraph, StyledLine, Subheader, Wrapper } from "./styled";

export const ArticleBox = ({ releaseDate, title, abstact }) => (
    <Wrapper>
        <ArticleDate>{releaseDate}</ArticleDate>
        <StyledLine />
        <div>
            <Subheader>
                <ArticleLink to={"/"}>{title}</ArticleLink>
            </Subheader>
            <Parahraph>{abstact}</Parahraph>
        </div>
    </Wrapper>
);