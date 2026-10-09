import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.75rem;
`

const NavigationLink = styled( Link )`
  color: var(--muted);
  font-size: 0.95rem;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;

  &:hover {
    color: var(--ink);
  }

  &[aria-current] {
    color: var(--ink);
    border-bottom-color: var(--accent);
  }
`

// A section is active on its own URL and on any URL under one of its prefixes.
const items = [
  { 'to': '/', 'label': 'Writing', 'sections': [ '/posts' ] },
  { 'to': '/engineer-diary', 'label': 'Engineer\'s diary', 'sections': [ '/engineer-diary' ] },
  { 'to': '/books', 'label': 'Books', 'sections': [ '/books', '/bookshelf', '/books-timeline', '/book-dependencies', '/notes' ] },
  { 'to': '/about-me', 'label': 'About', 'sections': [ '/about-me' ] },
]

function isInSection( pathname, { to, sections } ) {
  const path = pathname.replace( /\/+$/u, '' ) || '/'
  return path === to || sections.some( prefix => path === prefix || path.startsWith( `${prefix}/` ) )
}

export default function NavigationMenu() {
  return (
    <Nav aria-label="Main">
      { items.map( item => (
        <NavigationLink
          key={ item.to }
          to={ item.to }
          getProps={ ( { location } ) => isInSection( location.pathname, item ) ? { 'aria-current': 'page' } : {} }
        >
          { item.label }
        </NavigationLink>
      ) ) }
    </Nav>
  )
}
