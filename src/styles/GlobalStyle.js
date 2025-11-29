import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "EB Garamond", serif;
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.color};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }

  #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

`;

export default GlobalStyle;