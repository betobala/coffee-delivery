import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #fff;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        line-height: 130%;
    }
`
