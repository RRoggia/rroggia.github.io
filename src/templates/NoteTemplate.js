import React from 'react'
import { graphql } from 'gatsby'
import BasePage from '../components/Base/BasePage'

export default function NoteTemplate( { data } ) {
  const { 'markdownRemark': { 'frontmatter': post, html } } = data
  return (
    <BasePage>
      <h1>
        { post.title}
      </h1>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ '__html': html }}
      />
    </BasePage>
  )
}

export const pageQuery = graphql`
  query Note( $title: String) {
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
