import React from 'react'
import BaseLayout from '../components/BaseLayout'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BooksPage = ( { children } ) => {
  return (
    <BaseLayout>
      <Header />
        { children }
      <Footer/>
    </BaseLayout>
  )
}

export default BooksPage