import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BasePage from '../components/Base/BasePage'
import SEO from '../components/Base/SEO'

const Message = styled.p`
  max-width: 36rem;
  color: var(--muted);
  font-size: 1.1rem;

  a {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
`

const NotFoundPage = () => {
  return (
    <BasePage>
      <h1>Page not found</h1>
      <Message>
        This address doesn't match any page on the site. Go back to the <Link to="/">latest writing</Link> or
        browse the <Link to="/engineer-diary">engineer's diary</Link>.
      </Message>
    </BasePage>
  )
}

export default NotFoundPage

export const Head = () => <SEO title="Page not found" />
