/* eslint-disable id-length */
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

const NoteLink = styled.a`
  margin-bottom: 3rem;
`

const Title = styled.h2`
`

const NoteCard = styled.div`
  display: inline;
`
const BookCover = styled( GatsbyImage )`
  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`

const Ribbon = styled.div`
  color: white;
  background-color: ${( note ) => {
    switch ( note.status ) {
      case 'Read':
        return 'green'
      case 'Notes':
        return 'orange'
      default:
        return 'red'
    }
  }};
  position: absolute;
  transform: rotate(45deg);
  z-index: 1;
  width: 80px;
  margin-top: 10%;
  margin-left: 58%;

`
const RibbonKiller = styled.div`
  overflow: hidden;
  display: block;
  width: 150px;
  position: relative;
  margin: auto;
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
      <p>When I'm reading books, articles, or technical stuff I like to highlight the text and summarize what I read, then I can have access to the information without a big effort.</p>
      <Grid>
        { notes && notes.map( n => (
          <NoteLink
            href={ createNotePath( n.title ) }
            key={ n.title }
          >
            <NoteCard >
              <h3> { n.title } </h3>
              <RibbonKiller>
                <Ribbon status={ n.status }>{ n.status }</Ribbon>
                <BookCover
                  image={ getImage( getCoverImage( covers, `${n.coverPath}`, emptyCover ) ) }
                  alt={ n.title }
                />
              </RibbonKiller>
            </NoteCard>
          </NoteLink>
        ) )}
      </Grid>
    </>
  )
}
