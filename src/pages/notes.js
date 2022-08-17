import React from 'react'
import BasePage from '../components/Base/BasePage'
import Notes from '../components/Notes/Notes'
import createNotePath from '../components/Notes/notePath'

import { graphql } from 'gatsby'

function nodeToNotes( node ) {
  return {
    ...node.node.frontmatter,
    'url': createNotePath( node.node.frontmatter.title )
  }
}

const NotesPage = ( { data } ) => {
  const { 'allMarkdownRemark': { edges } } = data
  const notes = edges
    .filter( edge => edge.node.html !== '' )
    .map( nodeToNotes )

  return (
    <BasePage>
      <Notes notes={ notes } />
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

