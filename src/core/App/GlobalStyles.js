import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize};

    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.text};
        background-color: ${({ theme }) => theme.page.background};
        color: ${({ theme }) => theme.page.text};
        font-size: 18px;
        font-weight: 400;
        word-break: break-word;
        margin: 28px 180px 72px;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            font-size: 16px;
            margin: 33px 9px 46px;
        }
    }
`;