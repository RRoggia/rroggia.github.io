import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import NavigationMenu from './NavigationMenu'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items:center;
  padding-bottom: 30px;
  marging-bottom: 30px;
  border-bottom: 1px solid black;


  @media (max-width: 600px) {
    display:block;
  }
`

export default function Header() {
  return (
    <Grid>
      <Profile />
      <NavigationMenu />
    </Grid>
  )
}

