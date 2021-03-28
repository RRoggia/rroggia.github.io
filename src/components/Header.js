import React from 'react'
import styled from 'styled-components'
import Profile from '../components/Profile'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items:center;

  @media (max-width: 600px) {
    display:block;
  }
`

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const NavigationButton = styled.a`
  padding: .3rem;
  font-size: 2rem;
  text-shadow: 3px 3px lightgray;
  text-align: center;
  width: 20rem;
  text-transform: uppercase;
  font-weight: bold;

  &: hover {
    transform: scale(1.2, 1.2);
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    width: 5rem;
  }
`
export default function Header( { mySelf } ) {
  return (
    <Grid>
      <Profile { ...mySelf } />
      <NavGrid>
        <NavigationButton href='/'>Posts</NavigationButton>
        <NavigationButton href='/books'>Books</NavigationButton>
        <NavigationButton href='/about-me'>About Me</NavigationButton>
      </NavGrid>
    </Grid>
  )
}