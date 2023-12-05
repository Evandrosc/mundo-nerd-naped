import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1119px;
    margin: 0 auto;
    background-color: ${props => props.theme.dark10};
  }

  h1, h2, h3, span {
    font-family: ${props => props.theme.lexendDeca};
  }
`