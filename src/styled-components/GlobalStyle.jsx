import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    margin: 0px;
  }
  
  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
  }
  
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    object-fit: cover;
  }
  
  main {
    width: 86%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
      width: 94%;
    }
  }
`
