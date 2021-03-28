import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  margin-bottom: 1.5rem;
  padding: 2rem;
  border-radius: 0.3rem;
  border: 0.5px black solid;
  align:center;

  &:hover {
    transform: scale(1.005, 1.005);
    box-shadow: 10px 10px lightgray;
  }

  @media (max-width: 600px) {
    &:hover, &:active {
      transform: scale(1.005, 1.005);
      box-shadow: 10px 10px lightgray;        
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

const Title = styled.h2`
  display: inline;
  margin-right: 1rem; 
`

const TextAlignRight = styled.p`
  text-align: right;
  font-size: 0.8rem;
`

const SpanAlignRight = styled.span`
  margin: auto;
  margin-right: 0px;
  align-item: center;
  text-align: right;
  font-size: 0.8rem;
`

export default function PostPreview( { title, image, excerpt, timeToRead, url, date } ) {
  return (
    <a href={url}>
      <Card>
        <Grid>
          <Title>{title}</Title><SpanAlignRight>{ timeToRead } minutes</SpanAlignRight>
        </Grid>
        <img src={image}></img>
        <p>{excerpt}</p>
        <TextAlignRight>{ `Published ${ date}` }</TextAlignRight>
      </Card>
    </a>
  )
}