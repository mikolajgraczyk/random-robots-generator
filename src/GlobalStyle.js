import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body{
    margin: 0;
    font-family: 'Roboto Flex', sans-serif;
    background: rgb(0,10,187);
    background: linear-gradient(27deg, rgba(0,10,187,1) 0%, rgba(210,0,1,1) 100%);
    background-attachment: fixed;
    background-size: cover;
    }
`;
