import React from 'react'
import styled from 'styled-components'
import BasePage from '../components/Base/BasePage'
import SEO from '../components/Base/SEO'

const Article = styled.article`
  max-width: var(--measure);
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0 0 2rem;
  font-size: clamp(2rem, 5vw, 2.75rem);
  line-height: 1.15;
`

export default function EngineerDiary( { pageContext } ) {
  const { 'frontmatter': post, html } = pageContext

  return (
    <BasePage>
      <Article>
        <Title>{ post.title }</Title>
        <div
          className="prose"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ '__html': html }}
        />
      </Article>
    </BasePage>
  )
}

export function Head( { pageContext } ) {
  return <SEO title={ pageContext.frontmatter.title } />
}
