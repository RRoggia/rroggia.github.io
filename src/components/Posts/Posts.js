/* eslint-disable id-length */
import React from 'react'
import styled from 'styled-components'
import PostPreview from './PostPreview.js'

const Heading = styled.h2`
  margin: 2rem 0 0.5rem;
  font-size: 1rem;
  color: var(--muted);
  font-weight: 500;
  letter-spacing: 0;
`

const List = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`

export default function Posts( { posts } ) {
  return (
    <section>
      <Heading>Writing</Heading>
      { !posts || posts.length === 0
        ? <p>No posts published yet.</p>
        : (
          <List>
            { posts.map( p => (
              <PostPreview
                key={ p.url }
                { ...p }
              /> ) ) }
          </List>
        ) }
    </section>
  )
}
