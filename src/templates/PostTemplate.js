import React from 'react'
import { graphql } from 'gatsby'
import BasePage from '../components/Base/BasePage'
import Post from '../components/Post'

export default function PostTemplate( { data } ) {
  const { 'markdownRemark': { 'frontmatter': post, html } } = data
  return (
    <BasePage>
      <Post
        { ...{ post, html } }
      />
    </BasePage>
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
  }
`
