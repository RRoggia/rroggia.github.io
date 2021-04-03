import React from 'react'
import { graphql } from 'gatsby'
import BasePage from '../components/Base/BasePage'
import Note from '../components/Notes/Note'

export default function NoteTemplate( { data } ) {
  const { 'markdownRemark': { 'frontmatter': post, html, tableOfContents } } = data
  return (
    <BasePage>
      <Note { ...{ post, html, tableOfContents } } />
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
      tableOfContents
      html
    }
  }
`
