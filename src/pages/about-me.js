import React from 'react'
import BaseLayout from '../components/BaseLayout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import myPhoto from '../images/my-photo.jpg'
import { linkedin, github } from '../images/logos'

const BooksPage = ( ) => {
  const mySelf = {
    myPhoto,
    name: 'Renan Roggia',
    description: 'I consider myself a tech problem solver.'
  }

  const contactMe = {
    email: 'renanzr@gmail.com',
    socialNetworks : [
      {
        url: 'https://www.linkedin.com/in/renanroggia/',
        logo: linkedin
      },
      {
        url: 'https://github.com/rroggia',
        logo: github
      }
    ]
  }

  return (
    <BaseLayout>
      <Header mySelf={ mySelf } />
      <div>
        <p>In progress</p>
      </div>
      <Footer contactMe={ contactMe } />
    </BaseLayout>
  )
}

export default BooksPage