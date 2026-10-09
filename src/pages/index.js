import React from 'react'
import BasePage from '../components/Base/BasePage'
import SEO from '../components/Base/SEO'
import Profile from '../components/Header/Profile'
import Posts from '../components/Posts/Posts'
import { graphql } from 'gatsby'
import { allMarkdownRemarkToPost } from '../allMarkdownRemarkTransformation'

const IndexPage = ({ data }) => {
  // Posts without a title have no page (see gatsby-node.js), so they can't be linked.
  const posts = allMarkdownRemarkToPost(data).filter(post => post.title)

  return (
    <BasePage>
      <Profile />
      <Posts posts={posts} />
    </BasePage>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/posts/**"}}, sort: {frontmatter: {date: DESC}}) {
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

export const Head = () => <SEO />
