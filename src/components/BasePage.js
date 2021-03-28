import React from 'react'
import BaseLayout from '../components/BaseLayout'
import Header from './Header/Header'
import Footer from '../components/Footer'

const BasePage = ( { children } ) => {
  return (
    <BaseLayout>
      <Header />
      { children }
      <Footer />
    </BaseLayout>
  )
}

export default BasePage
