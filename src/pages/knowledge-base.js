import React from 'react'
import BasePage from '../components/Base/BasePage'
import styled from 'styled-components'

const Section = styled.section`
  margin: 1.5rem;
  padding: 1.5rem;
  border: 1px black solid;
`
const data = [
  {
    href: "/notes",
    title: "Notes",
    description: "When I'm reading books, articles, or technical stuff I like to highlight the text and summarize what I read, then I can have access to the information without a big effort.",
  },
  {
    href: "/bookshelf",
    title: "Bookshelf",
    description: "I try to track what I'm reading and I usually fail. This is one attempt. It's probably outdated.",
  },
  {
    href: "/engineer-diary",
    title: "Engineer's Diary",
    description: "Structured information that was promoted from my private notes.",
  },
  {
    href: "/book-dependencies",
    title: "Book's dependencies",
    description: "An attempt to visualize my books and its dependencies on other bookes. But I'm lazy and didn't finished it.",
  },
]
const KnowledgeBase = () => {
  return (
    <BasePage>
      {data && data.map(d => (
        <a href={d.href}>
          <Section>
            <h2>{d.title}</h2>
            <p>{d.description}</p>
          </Section>
        </a>
      ))}
    </BasePage>
  )
}

export default KnowledgeBase
