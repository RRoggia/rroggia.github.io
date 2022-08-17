/* eslint-disable id-length */
import React, { useState } from 'react'
import BasePage from '../components/Base/BasePage'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import createNotePath from '../components/Notes/notePath'
import ReadingContentCard from '../components/ReadingContentCard'
import useSearchReadingContent from '../components/SearchReadingContent'

const Grid = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;

  @media (max-width: 600px) {
    display: block;
  }
`
const WhitinGrid = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-items:center;
    overflow-y:scroll;
    & > div{
      padding: 0px 100px 0 30px ;
    }
  }
`

function nodeToNotes( node ) {
  return {
    ...node.node.frontmatter,
    'url': createNotePath( node.node.frontmatter.title )
  }
}

export default function Bookshelf( { data } ) {
  const [ readingContentNameFilter, filterByName ] = useSearchReadingContent()
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
      <h2>Bookshelf</h2>
      {filterByName()}
      <Grid>
        { [ 'Backlog', 'Planning', 'Reading', 'Read' ].map( status => {
          return (
            <div>
              <h2>
                { `${status} (${!notesByStatus[ status ] ? 0 : notesByStatus[ status ]
                  .filter( b => readingContentNameFilter ? b.title.toLowerCase().includes( readingContentNameFilter.toLowerCase() ) : true )
                  .length})` }
              </h2>
              <WhitinGrid key={ status }>
              {
                !notesByStatus[ status ] ?
                  <p>Empty</p> :
                  notesByStatus[ status ]
                    .filter( b => readingContentNameFilter ? b.title.toLowerCase().includes( readingContentNameFilter.toLowerCase() ) : true )
                    .map( b => {
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
            </WhitinGrid>
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
            date
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
