import React from 'react'
import { graphql } from 'gatsby'
import BasePage from '../components/Base/BasePage'
import Posts from '../components/Posts'
import createPostPath from '../navigation/postPath'

function nodeToPost( node ) {
  return {
    ...node.node.frontmatter,
    'excerpt': node.node.excerpt,
    'timeToRead': node.node.timeToRead,
    'url': createPostPath( node.node.frontmatter.title )
  }
}

const IndexPage = ( { data } ) => {
  const { 'allMarkdownRemark': { edges } } = data
  const posts = edges.map( nodeToPost )

  return (
    <BasePage>
      <Posts posts={ posts } />
    </BasePage>
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

