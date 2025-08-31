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
        font-size: 18;
        font-weight: 400;
        word-break: break-word;
    }
`;