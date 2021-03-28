import React from 'react'
import { graphql } from 'gatsby'
import BaseLayout from '../components/BaseLayout'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import myPhoto from '../images/my-photo.jpg'
import createPostPath from '../navigation/postPath'
import { linkedin, github } from '../images/logos'

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

const IndexPage = ( { data } ) => {
  const { allMarkdownRemark: { edges } } = data
  const posts = edges.map( nodeToPost )

  return (
    <BaseLayout>
      <Header mySelf={ mySelf } />
      <Posts posts={ posts } />
      <Footer contactMe={ contactMe } />
    </BaseLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
            date(fromNow:true)
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
function nodeToPost( node ) {
  return {
    ...node.node.frontmatter,
    excerpt: node.node.excerpt,
    timeToRead: node.node.timeToRead,
    url: createPostPath( node.node.frontmatter.title )
  }
}