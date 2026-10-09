import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const FooterWrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem 2rem;
  padding: 2rem 0 3rem;
  border-top: 1px solid var(--rule);
  color: var(--muted);
  font-size: 0.9rem;

  p {
    margin: 0;
  }
`

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;

  a:hover {
    color: var(--ink);
  }
`

const socialNetworkLabels = {
  'linkedin': 'LinkedIn',
  'github': 'GitHub',
}

export default function Footer() {
  const data = useStaticQuery( graphql`
    query Contact{
      site {
        siteMetadata {
          mySelf {
            name
          }
          contactMe {
            email
            socialNetworks {
              name
              url
            }
          }
        }
      }
    }
  ` )
  const { 'site': { 'siteMetadata': { 'mySelf': { name }, 'contactMe': { email, socialNetworks } } } } = data

  return (
    <FooterWrapper>
      <p>{ `© ${new Date().getFullYear()} ${name}` }</p>
      <Links>
        <li><a href={ `mailto:${email}` }>Email</a></li>
        { socialNetworks.map( sn => (
          <li key={ sn.url }>
            <a
              href={ sn.url }
              target="_blank"
              rel="noopener noreferrer"
            >
              { socialNetworkLabels[ sn.name ] || sn.name }
            </a>
          </li>
        ) ) }
      </Links>
    </FooterWrapper>
  )
}
