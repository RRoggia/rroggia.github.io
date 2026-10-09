import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import NavigationMenu from './NavigationMenu'

const Bar = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem 2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--rule);
`

const Wordmark = styled( Link )`
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`

export default function Header() {
  const data = useStaticQuery( graphql`
    query HeaderName {
      site {
        siteMetadata {
          mySelf {
            name
          }
        }
      }
    }
  ` )
  const { 'site': { 'siteMetadata': { 'mySelf': { name } } } } = data

  return (
    <Bar>
      <Wordmark to="/">{ name }</Wordmark>
      <NavigationMenu />
    </Bar>
  )
}
