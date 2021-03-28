import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: white; 
    color: black;
    font-family: 'Roboto',  'Times new Roman';
  }
  a {
    text-decoration: none;
    color: black;
    &:visited {
      color: none;
    }
  }
`

export default function BaseLayout( { children } ) {
  return (
    <React.Fragment>
      <GlobalStyle />
        {children}
    </React.Fragment>
  )
}