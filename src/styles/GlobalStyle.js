import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 5.269vw;
    background-color: ${props => props.theme.dark10};
  }

  h1, h2, h3, span {
    font-family: ${props => props.theme.lexendDeca};
  }

  p, a, time, small {
    font-family: ${props => props.theme.inter};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.brandColor};
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.dark20};
  }

  @media screen and (max-width: 482px) {
    ::-webkit-scrollbar {
      width: 4px;
    }
  }

  /* Para navegadores baseados no motor Gecko (Firefox) */
  scrollbar {
    width: 8px;
  }

  thumb {
    background-color: ${props => props.theme.brandColor};
  }

  track {
    background-color: ${props => props.theme.dark20};
  }

  @media screen and (max-width: 482px) {
    scrollbar {
      width: 4px;
    }
  }
`