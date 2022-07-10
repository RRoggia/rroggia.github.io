import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
  font-size:1.2rem;
  position: absolute;
  transform: rotate(45deg);
  z-index: 1;
  width: 100px;
  margin-top: 11%;
  margin-left: 48%;
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

export default function ReadingContentCard( { title, status, coverPath, language, date, covers, emptyCover } ) {
  return (
    <NoteCard >
      <h3> { title } </h3>
      <RibbonKiller>
        <Ribbon status={ status }>{ status }</Ribbon>
        <BookCover
          image={ getImage( getCoverImage( covers, `${coverPath}`, emptyCover ) ) }
          alt={ title }
        />
      </RibbonKiller>
      <p>Language: { language }</p>
      <p>Date: { date }</p>
    </NoteCard>
  )
}
