import React from 'react'
import styled from 'styled-components'

const TableOfContents = styled.div`
  font-size: 0.8rem;
  margin: 0;
`

const NoteContainer = styled.div`
  font-size: 1.2rem;
  text-align: justify;
  padding: .1rem;

  ul, ol {
    text-align: left;
  }

  h1 {
    margin-left: 1rem;
    text-align: left;
  }  
  h2 {
    margin-left: 1.5rem;
    text-align: left;
  }
  h3 {
    margin-left: 2rem;
    text-align: left;    
  }
  h4 {
    margin-left: 2.5rem;
    text-align: left;
  }

  blockquote {
    background: #FCEFE3;
    padding: .2rem;
    border-radius: 3px;
    margin: 1rem;

    & > p {
      margin: .5rem;
    }
  }

  @media(max-width: 600px) {
    font-size: 1rem;
  }
`

export default function Note( { post, html, tableOfContents } ) {
  return (
    <>
      <h1>
        { post.title}
      </h1>
      <h2>
        Table Of Contents
      </h2>
      <TableOfContents
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ '__html': tableOfContents }}
      />
      <h2>
        The notes
      </h2>
      <NoteContainer
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ '__html': html }}
      />
    </>
  )
}
