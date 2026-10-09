import React from 'react'
import { Link } from 'gatsby'
import BasePage from '../components/Base/BasePage'
import SEO from '../components/Base/SEO'
import styled from 'styled-components'

const Intro = styled.p`
  max-width: 40rem;
  margin: 0 0 2.5rem;
  color: var(--muted);
  font-size: 1.1rem;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  border-bottom: 1px solid var(--rule);

  &:first-child {
    border-top: 1px solid var(--rule);
  }

  a {
    display: grid;
    grid-template-columns: 14rem 1fr;
    gap: 2rem;
    padding: 1.5rem 0;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 0.35rem;
    }
  }

  a:hover h2 {
    color: var(--accent);
  }

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    max-width: var(--measure);
    color: var(--muted);
  }
`

const data = [
  {
    href: "/notes",
    title: "Reading notes",
    description: "Highlights and summaries from the books and articles I read, organized so I can come back to the key ideas quickly.",
  },
  {
    href: "/bookshelf",
    title: "Bookshelf",
    description: "What I have read, what I am reading now and what is next on the list.",
  },
  {
    href: "/books-timeline",
    title: "Books timeline",
    description: "My books arranged by publication date.",
  },
  {
    href: "/book-dependencies",
    title: "Book dependencies",
    description: "An experimental graph of my books and the books they build on. Work in progress.",
  },
]
const Books = () => {
  return (
    <BasePage>
      <h1>Books</h1>
      <Intro>What I read, what I took from it and how the books connect.</Intro>
      <List>
        {data.map(d => (
          <Item key={d.href}>
            <Link to={d.href}>
              <h2>{d.title}</h2>
              <p>{d.description}</p>
            </Link>
          </Item>
        ))}
      </List>
    </BasePage>
  )
}

export default Books

export const Head = () => <SEO title="Books" description="Reading notes, a bookshelf, a timeline of the books I read and how they build on each other." />
