import React from 'react'
import BaseLayout from './BaseLayout'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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
