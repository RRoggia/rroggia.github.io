import React from 'react'
import styled from 'styled-components'
import createNotePath from '../Notes/notePath'

const WrappedA = styled.a`
  margin-bottom: 3rem;
`

export default function NoteLink( { title, children } ) {
  return (
    <WrappedA href={ createNotePath( title ) }>
      {children}
    </WrappedA>
  )
}
