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

        @media(min-width: ${({ theme }) => theme.breakpoints.largeDesktopMin}px) {
            width: 100%;
            max-width: 1440px;
            margin: 34px auto 88px;
        }

        @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
            font-size: 16px;
            margin-left: 32px;
            margin-right: 32px;
        }

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            font-size: 16px;
            margin: 33px 9px 46px;
        }  
    }
`;