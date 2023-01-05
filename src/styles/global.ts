import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        body, input, textarea, button {
            color: ${(props) => props.theme["base-text"]};
            -webkit-font-smoothing: antialiased;
            font: 400 1rem Nunito, sans-serif;
        }

    } `;
