import React from 'react'
import styled from 'styled-components'
import formatDate from './formatDate'

const Article = styled.article`
  max-width: var(--measure);
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 2.75rem);
  line-height: 1.15;
`

const Meta = styled.p`
  margin: 0 0 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--rule);
  color: var(--muted);
  font-size: 0.95rem;
`

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 3rem 0 0;
  padding: 1.5rem 0 0;
  border-top: 1px solid var(--rule);
  list-style: none;

  li {
    padding: 0.15rem 0.6rem;
    background: var(--surface);
    border-radius: 4px;
    color: var(--muted);
    font-size: 0.85rem;
  }
`

export default function Post( { post, html, timeToRead } ) {
  const publishedDate = formatDate( post.date )
  return (
    <Article>
      <header>
        <Title>{ post.title }</Title>
        <Meta>
          { publishedDate && <time dateTime={ post.date }>{ publishedDate }</time> }
          { publishedDate && timeToRead ? ', ' : '' }
          { timeToRead ? `${timeToRead} min read` : '' }
        </Meta>
      </header>
      <div
        className="prose"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ '__html': html }}
      />
      { post.tags && post.tags.length > 0 && (
        <Tags aria-label="Tags">
          { post.tags.map( tag => <li key={ tag }>{ tag }</li> ) }
        </Tags>
      ) }
    </Article>
  )
}
