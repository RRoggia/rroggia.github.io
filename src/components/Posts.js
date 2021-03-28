import React from 'react'
import styled from 'styled-components'
import PostPreview from './PostPreview.js'

const Wrapper = styled.div`
  width: 85%;
  margin: 0px auto;
`

export default function Posts( { posts } ) {
  return (
    <Wrapper>
      <h1>Dear diary ...</h1>
      { !posts ? <p>No post was found.</p> : posts.map( p => <PostPreview key={p.title} {...p} />) }
    </Wrapper>
  )
}

