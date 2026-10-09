import React from 'react'
import { graphql } from 'gatsby'
import BasePage from '../components/Base/BasePage'
import Note from '../components/Notes/Note'
import SEO from '../components/Base/SEO'

export default function NoteTemplate( { data } ) {
  const { 'markdownRemark': { 'frontmatter': post, html, tableOfContents } } = data
  return (
    <BasePage>
      <Note { ...{ post, html, tableOfContents } } />
    </BasePage>
  )
}

export function Head( { data } ) {
  return <SEO title={ data.markdownRemark.frontmatter.title } />
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
