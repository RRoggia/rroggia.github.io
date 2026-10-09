/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import styled from 'styled-components'
import BaseLayout from './BaseLayout'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

const Main = styled.main`
  flex: 1;
  padding: 3rem 0 4rem;

  @media (max-width: 600px) {
    padding: 2rem 0 3rem;
  }
`

const BasePage = ( { children } ) => {
  deckDeckGoHighlightElement();
  return (
    <BaseLayout>
      <Header />
      <Main>
        { children }
      </Main>
      <Footer />
    </BaseLayout>
  )
}

export default BasePage
