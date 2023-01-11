/* eslint-disable id-length */
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import ReadingContentCard from '../ReadingContentCard/index'
import NoteLink from '../NoteLink/index'

const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  @media (max-width: 600px) {
    display: block;
    & > h2 {
      text-align: left;
    }
  }
`

const Title = styled.h2`
`

export default function Notes( { notes } ) {
  const data = useStaticQuery( graphql`
    query Covers {
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
  ` )
  const { 'allFile': { 'edges': covers } } = data
  const { 'file': emptyCover } = data
  return (
    <>
      <Title>Notes</Title>
      <Grid>
        { notes && notes.map( n => (
          <NoteLink
            title={ n.title }
            key={ n.title }
          >
            <ReadingContentCard
              title={ n.title }
              subtitle={ n.subtitle }
              status={ n.status }
              coverPath={ n.coverPath }
              language={ n.language }
              date={ n.date }
              covers={ covers }
              emptyCover={ emptyCover }
            />
          </NoteLink>
        ) )}
      </Grid>
    </>
  )
}
