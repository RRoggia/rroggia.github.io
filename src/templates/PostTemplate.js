import React from 'react'
import { graphql } from 'gatsby'
import BaseLayout from '../components/BaseLayout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { linkedin, github } from '../images/logos'
import myPhoto from '../images/my-photo.jpg'



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

export default function PostTemplate( { data } ) {
  const { markdownRemark: { frontmatter: post, html } } = data
  const { site: { siteMetadata: { mySelf } } } = data
  console.log( data )
  console.log( mySelf )
  mySelf.myPhoto = myPhoto
  return (
    <BaseLayout>
      <Header mySelf={ mySelf } />
      <div>
        <h1>
          {post.title}
        </h1>
        <h2>{ new Date( post.date ).toLocaleDateString() }</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Footer contactMe={ contactMe } />
    </BaseLayout>
  )
}

export const pageQuery = graphql`
  query Post( $title: String) {
    markdownRemark( frontmatter: {title: { eq: $title} } ) {
      frontmatter {
        title
        date
        published
        tags
      }
      html
    }
    site {
      siteMetadata {
        mySelf {
          name
          description
        }
      }
    }

  }
`