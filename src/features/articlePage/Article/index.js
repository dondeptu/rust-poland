import { ArticleImage, ArticleParagraph, ImageWrapper, ReleaseDate, Subtitle, Title, Wrapper } from "./styled";
import articleImage from "../example.jpg";

export const Article = ({ id, releaseDate, title, content }) => (
    <Wrapper>
        <Title>Rust Poland is online!</Title>
        <ArticleParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dolor vel leo vehicula ultricies at in turpis. Sed id nibh erat. In ultrices porttitor consectetur. Etiam sapien felis, pharetra eget nulla vel, placerat malesuada elit. In lobortis orci vitae lorem ornare pulvinar. Vestibulum tincidunt est et tellus vestibulum, id scelerisque velit tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan interdum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in rhoncus arcu.
        </ArticleParagraph>
        <ArticleParagraph>
            Nullam ligula nulla, ullamcorper in leo id, congue suscipit augue. Vestibulum nec euismod nulla, sit amet laoreet turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ornare magna, at aliquam augue. Mauris ac gravida mi, vitae iaculis ipsum. Duis fermentum felis eget arcu accumsan, vel hendrerit orci condimentum. Etiam at faucibus eros. Vivamus efficitur magna sit amet ex egestas, non dignissim diam aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </ArticleParagraph>
        <ImageWrapper>
            <ArticleImage src={articleImage} alt="Article image" loading="lazy" />
        </ImageWrapper>
        <ArticleParagraph>
            Donec eu lectus vel orci ultrices aliquet ut vitae dui. Maecenas suscipit tortor at nibh vehicula lacinia. Duis sodales metus tincidunt nisl suscipit mollis. Aliquam molestie porta nisl, eu rhoncus mauris eleifend et. Nam blandit imperdiet aliquet. Fusce mi augue, pellentesque vel leo et, tincidunt commodo erat. Duis vulputate erat et quam suscipit eleifend ac vitae nisi. Integer in urna sed elit tristique pharetra id vel urna. Integer tortor est, imperdiet malesuada laoreet sit amet, sodales vitae urna.
        </ArticleParagraph>
        <ArticleParagraph>
            Integer vestibulum pharetra velit in convallis. Cras sollicitudin sed purus sed volutpat. Cras non mauris non lorem placerat tristique at vitae nisi. Vestibulum pulvinar nisi efficitur dolor vulputate venenatis. Aliquam quis massa vitae quam euismod posuere. Nunc rutrum augue nec dolor interdum posuere. Praesent varius, est vel aliquet accumsan, mi ante dictum lacus, a consequat ligula erat tempus risus. Fusce vitae eros libero.
        </ArticleParagraph>
        <ArticleParagraph>
            Curabitur faucibus dolor a tellus dapibus consectetur. Mauris tempus sem a elementum euismod. Aliquam vitae blandit mi. Nullam pharetra libero ac enim consectetur, suscipit cursus ante bibendum. Donec tempor augue diam, vitae commodo tellus blandit a. Sed molestie lorem at mi egestas, et fermentum elit faucibus. Pellentesque pharetra ultrices sapien id mollis.
        </ArticleParagraph>
        <Subtitle>Lorem ipsum dolor sit amet</Subtitle>
        <ArticleParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lorem consectetur, eleifend augue eget, efficitur mi. Sed volutpat dignissim velit sit amet vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ipsum non tincidunt porttitor. Ut id urna sed ligula placerat tincidunt et nec orci. Duis at tincidunt felis, eleifend mattis ipsum. Mauris eget felis non purus pulvinar ornare sed id velit. In rhoncus nunc vel sapien volutpat congue. Praesent euismod a purus fringilla finibus.
        </ArticleParagraph>
        <ArticleParagraph>
            Vestibulum vitae mi et est interdum consectetur non quis leo. Etiam risus metus, blandit vitae cursus a, interdum sed metus. Phasellus tempor finibus suscipit. Suspendisse finibus molestie imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar venenatis tortor, ut pharetra nisl lacinia eu. Aliquam eu velit dapibus, rhoncus neque et, pretium sem.
        </ArticleParagraph>
        <ReleaseDate>13 January 2025</ReleaseDate>
    </Wrapper>
);