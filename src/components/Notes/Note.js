import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  max-width: var(--measure);
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0 0 2rem;
  font-size: clamp(2rem, 5vw, 2.75rem);
  line-height: 1.15;
`

const TableOfContents = styled.details`
  margin-bottom: 2.5rem;
  padding: 1rem 1.25rem;
  background: var(--surface);
  border-radius: 6px;
  font-size: 0.95rem;

  summary {
    cursor: pointer;
    font-weight: 600;
  }

  ul {
    margin: 0.5rem 0 0;
    padding-left: 1.1rem;
  }

  ul ul {
    margin: 0.15rem 0 0.35rem;
  }

  li {
    margin: 0.2rem 0;
  }

  p {
    margin: 0;
  }

  a {
    color: var(--muted);

    &:hover {
      color: var(--accent);
    }
  }
`

export default function Note( { post, html, tableOfContents } ) {
  return (
    <Article>
      <Title>{ post.title }</Title>
      { tableOfContents && (
        <TableOfContents open>
          <summary>Contents</summary>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ '__html': tableOfContents }}
          />
        </TableOfContents>
      ) }
      <div
        className="prose"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ '__html': html }}
      />
    </Article>
  )
}
