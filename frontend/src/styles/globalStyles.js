import { createGlobalStyle } from 'styled-components'
import './addFont.css'
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    overflow-x: hidden;
  }

  .useIsuzuFont {
    font-family: Usuzi;
  }

`

export default GlobalStyle
