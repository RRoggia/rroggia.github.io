import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import createNotePath from './notePath'

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

const NoteCard = styled.div`
  display: inline;
`

function getCoverImage( covers, title, emptyCover ) {
  const coverNode = covers.find( cover => {
    return cover.node.name === title
  } )
  if ( !coverNode ) {
    return emptyCover
  }
  return coverNode.node
}

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
      <Title>My notes ...</Title>
      <Grid>
        { notes && notes.map( n => (
          <a
            href={ createNotePath( n.title ) }
            key={ n.title }
          >
            <NoteCard >
              <h3> { n.title } </h3>
              <GatsbyImage
                image={ getImage( getCoverImage( covers, `${n.coverPath}`, emptyCover ) ) }
                alt={ n.title }
              />
            </NoteCard>
          </a> 
        ) )}
      </Grid>
    </>
  )
}
