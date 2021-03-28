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
  const notes = edges.map( nodeToNotes )

  return (
    <BasePage>
      <Notes notes={ notes } />
    </BasePage>
  )
}

export default NotesPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/notes/**"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
            language
            coverPath
            status
            date(fromNow:true)
          }
        }
      }
    }
  }
`

