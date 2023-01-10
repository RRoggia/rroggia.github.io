import React from 'react'
import BasePage from '../components/Base/BasePage'
import Posts from '../components/Posts/Posts'
import { graphql } from 'gatsby'
import { allMarkdownRemarkToPost } from '../allMarkdownRemarkTransformation'

const IndexPage = ({ data }) => {
  const posts = allMarkdownRemarkToPost(data)

  return (
    <BasePage>
      <Posts posts={posts} />
    </BasePage>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/posts/**"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        frontmatter {
          title
          date
        }
        excerpt
        timeToRead
      }
    }
  }
}`

