import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #F5F6FA;
        color: #02303F;
        font-size: 16px;
        margin: 0;
        box-sizing:border-box;
        
    }

    ::selection {
    color: #fff;
    background: #1DB5E4;
}

::-moz-selection {
    color: #fff;
    background: #1DB5E4;
}
`;
