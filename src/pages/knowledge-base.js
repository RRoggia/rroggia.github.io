import React from 'react'
import BasePage from '../components/Base/BasePage'
import styled from 'styled-components'

const Section = styled.section`
  margin: 1.5rem;
  padding: 1.5rem;
  border: 1px black solid;
`
const KnowledgeBase = () => {
  return (
    <BasePage>
      <div>
          <a href="/notes">
            <Section>
              <h2>Notes</h2>
              <p>When I'm reading books, articles, or technical stuff I like to highlight the text and summarize what I read, then I can have access to the information without a big effort.</p>
            </Section>
          </a>
          <a href="/bookshelf">
            <Section>
              <h2>Bookshelf</h2>
              <p>I try to track what I'm reading and I usually fail. This is one attempt. It's probably outdated.</p>
            </Section>
          </a>
          {false &&
          <a href="/engineer-diary">
            <Section>
              <h2>Engineer's Diary</h2>
              <p>Structured information that was promoted from my private notes.</p>
            </Section>
          </a>
          }
      </div>
    </BasePage>
  )
}

export default KnowledgeBase
