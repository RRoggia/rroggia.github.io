import React from 'react'
import styled from 'styled-components'

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

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
    font-size: 1rem;
    width:100%;
  }
`

const NavImage = styled.img`
  width:25px;
  height:25px;
  display: block;
  margin-left: 100%;
  margin-right: 100%;
`
export default function NavigationMenu() {
  return (
    <NavGrid>
        <NavigationButton href="/">Posts</NavigationButton>
      <NavigationButton href="/bookshelf">Bookshelf</NavigationButton>
      <NavigationButton href="/notes">Notes</NavigationButton>
      <NavigationButton href="/about-me">About Me</NavigationButton>
    </NavGrid>
  )
}
