import React from 'react'
import { graphql } from 'gatsby'
import BasePage from '../components/BasePage'

export default function PostTemplate( { data } ) {
  const { markdownRemark: { frontmatter: post, html } } = data
  return (
    <BasePage>
      <div>
        <h1>
          {post.title}
        </h1>
        <h2>{ new Date( post.date ).toLocaleDateString() }</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
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