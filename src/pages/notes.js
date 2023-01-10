import React from 'react'
import BasePage from '../components/Base/BasePage'
import Notes from '../components/Notes/Notes'
import { graphql } from 'gatsby'
import { allMarkdownRemarkToNotes } from '../allMarkdownRemarkTransformation'

const NotesPage = ({ data }) => {
  const notes = allMarkdownRemarkToNotes(data)
    .filter(node => node && node.html !== '')

  return (
    <BasePage>
      <Notes notes={notes} />
    </BasePage>
  )
}

export default NotesPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/reading-content/**"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          html
          frontmatter {
            title
            language
            coverPath
            status
            date
          }
        }
      }
    }
  }
`

