/* eslint-disable react/jsx-max-props-per-line */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import emailLogo from '../../images/email.svg'
import logos from '../../images/logos'

const ContactWrapper = styled.div`
  text-align: center;
`

const ContactImage = styled.img`
  margin-right: 0.5rem;
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;

  @media (max-width: 600px) {
    margin-right: 1.3rem;
  }
`

export default function ContactMe() {
  const data = useStaticQuery( graphql`
    query Contact{
      site {
        siteMetadata {
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
  const { 'site': { 'siteMetadata': { 'contactMe': { email, socialNetworks } } } } = data

  return (
    <ContactWrapper>
      <p>Did you like my work? Contact me at:</p>
      <a href={ `mailto:${email}` }>
        <ContactImage
          src={ emailLogo }
          alt="email"
        />
      </a>
      { socialNetworks.map( sn => (
        <a
          key={ sn.url }
          href={ sn.url }
          target="_blank"
        >
          <ContactImage
            key={ sn.url }
            src={ logos[ sn.name ] }
            alt={ sn.name }
          />
        </a>
      ) ) }
    </ContactWrapper>
  )
}
