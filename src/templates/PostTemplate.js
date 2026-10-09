import React from 'react'
import { graphql } from 'gatsby'
import BasePage from '../components/Base/BasePage'
import Post from '../components/Posts/Post'
import SEO from '../components/Base/SEO'

export default function PostTemplate( { data } ) {
  const { 'markdownRemark': { 'frontmatter': post, html, timeToRead } } = data
  return (
    <BasePage>
      <Post
        { ...{ post, html, timeToRead } }
      />
    </BasePage>
  )
}

export function Head( { data } ) {
  const { 'markdownRemark': { 'frontmatter': post, excerpt } } = data
  return (
    <SEO
      title={ post.title }
      description={ excerpt }
    />
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
      excerpt(pruneLength: 160)
      timeToRead
      html
    }
  }
`
