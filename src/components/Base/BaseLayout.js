import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const Wrapper = styled.div`
  margin: auto 10%;

  @media (max-width: 600px) {
    margin: auto 5%;
  }
`
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
  .content img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    max-width: 400px;
  }
`

export default function BaseLayout( { children } ) {
  return (
    <Wrapper>
      <GlobalStyle />
      {children}
    </Wrapper>
  )
}
