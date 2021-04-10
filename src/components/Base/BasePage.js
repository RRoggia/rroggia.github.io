/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import BaseLayout from './BaseLayout'
import SEO from './SEO'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const BasePage = ( { children } ) => {
  return (
    <BaseLayout>
      <SEO />
      <Header />
      { children }
      <Footer />
    </BaseLayout>
  )
}

export default BasePage
