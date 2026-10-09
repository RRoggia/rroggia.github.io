import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import formatDate from './formatDate'

const Item = styled.li`
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: 2rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--rule);

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.35rem;
    padding: 1.5rem 0;
  }
`

const PublishedDate = styled.time`
  padding-top: 0.2rem;
  color: var(--muted);
  font-size: 0.9rem;
  font-variant-numeric: tabular-nums;
`

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  line-height: 1.3;

  a:hover {
    color: var(--accent);
  }
`

const Excerpt = styled.p`
  margin: 0 0 0.5rem;
  max-width: var(--measure);
  color: var(--muted);
  font-family: var(--font-serif);
  font-size: 1.05rem;
  line-height: 1.6;
`

const ReadingTime = styled.span`
  color: var(--muted);
  font-size: 0.85rem;
`

export default function PostPreview( { title, excerpt, timeToRead, url, date } ) {
  return (
    <Item>
      <PublishedDate dateTime={ date }>{ formatDate( date, { 'short': true } ) }</PublishedDate>
      <div>
        <Title><Link to={ url }>{ title }</Link></Title>
        <Excerpt>{ excerpt }</Excerpt>
        <ReadingTime>{ `${timeToRead} min read` }</ReadingTime>
      </div>
    </Item>
  )
}
