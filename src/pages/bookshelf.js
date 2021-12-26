/* eslint-disable id-length */
import React from 'react'
import BasePage from '../components/Base/BasePage'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import createNotePath from '../components/Notes/notePath'
import ReadingContentCard from '../components/ReadingContentCard'
const Grid = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
`

function nodeToNotes( node ) {
  return {
    ...node.node.frontmatter,
    'url': createNotePath( node.node.frontmatter.title )
  }
}

export default function Bookshelf( { data } ) {
  const {
    'allMarkdownRemark': { edges },
    'allFile': { 'edges': covers },
    'file': emptyCover
  } = data
  const notes = edges.map( nodeToNotes )
  const notesByStatus = notes
    .reduce( ( byStatus, note ) => {
      if ( !byStatus[ note.status ] ) {
        byStatus[ note.status ] = []
      }
      byStatus[ note.status ].push( note )
      return byStatus
    }, {} )

  return (
    <BasePage>
      <Grid>
        { [ 'Backlog', 'Planning', 'Reading', 'Read' ].map( status => {
          return (
            <div key={ status }>
              <h2>{ `${status} (${!notesByStatus[ status ] ? 0 : notesByStatus[ status ].length})` }</h2>
              {
                !notesByStatus[ status ] ?
                  <p>Empty</p> :
                  notesByStatus[ status ].map( b => {
                    return (
                      <div key={ b.title }>
                        <ReadingContentCard
                          key={ b.title }
                          title={ b.title }
                          status={ b.status }
                          coverPath={ b.coverPath }
                          language={ b.language }
                          date={ b.date }
                          covers={ covers }
                          emptyCover={ emptyCover }
                        />
                      </div>
                    )
                  } )
              }
            </div>
          )
        } ) }
      </Grid>
    </BasePage>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/reading-content/**"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
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
    allFile(filter: { extension : {in: ["jpg", "png"]}, absolutePath: { glob:"**/covers/**"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData( width: 150 ) 
          }
          name
        }
      }
    }
    file(name: {eq: "empty"}) {
      name
      childImageSharp {
        gatsbyImageData( width: 150 )
      }
    }
  }
`
