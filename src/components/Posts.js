/* eslint-disable id-length */
import React from 'react'
import styled from 'styled-components'
import PostPreview from './PostPreview.js'

const Wrapper = styled.div`
  width: 85%;
  margin: 2rem auto;
`

export default function Posts( { posts } ) {
  return (
    <Wrapper>
      <h2>Dear diary ...</h2>
      { !posts
        ? <p>No post was found.</p>
        : posts.map( p => (
          <PostPreview
            key={ p.title }
            { ...p }
          /> ) ) }
    </Wrapper>
  )
}

