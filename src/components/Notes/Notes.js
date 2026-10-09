/* eslint-disable id-length */
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import ReadingContentCard from '../ReadingContentCard/index'
import NoteLink from '../NoteLink/index'

const Intro = styled.p`
  max-width: 40rem;
  margin: 0 0 2.5rem;
  color: var(--muted);
  font-size: 1.1rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2.5rem 2rem;

  & > a:hover h3 {
    color: var(--accent);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
  }
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
      <h1>Reading notes</h1>
      <Intro>Highlights and summaries from the books and articles I have read.</Intro>
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
