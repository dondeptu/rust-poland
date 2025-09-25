import { toArticle } from "../../../../core/App/routes";
import { ArticleDate, ArticleLink, Parahraph, StyledLine, Subheader, Wrapper } from "./styled";

export const ArticleBox = ({ id, releaseDate, title, abstact }) => (
    <Wrapper>
        <ArticleDate>{releaseDate}</ArticleDate>
        <StyledLine />
        <div>
            <Subheader>
                <ArticleLink to={toArticle({ id })}>{title}</ArticleLink>
            </Subheader>
            <Parahraph>{abstact}</Parahraph>
        </div>
    </Wrapper>
);