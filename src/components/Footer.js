import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import emailLogo from '../images/email.svg'
import logos from '../images/logos'


const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items:center;
  border-top: 1px solid black;
  padding: 3rem;
  text-transform: uppercase;
  margin-top: 3rem;

  @media (max-width: 600px) {
    display:block;
  }

`

const ContactWrapper = styled.div`
  text-align: center;
`

const AdditionalInfoWrapper = styled.div`
  font-size: 0.7rem;

  @media (max-width: 600px) {
    margin-top: 1.3rem;
  }
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

export default function Footer() {
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
  const { site: { siteMetadata: { contactMe: { email, socialNetworks } } } } = data

  return (
    <FooterWrapper>
      <ContactWrapper>
        <p>Did you like my work? Contact me at:</p>
        <a href={ `mailto:${ email }` }>
          <ContactImage src={ emailLogo }/>
        </a>
        { socialNetworks.map( sn => (
          <a key={sn.url} href={ sn.url} target="_blank">
            <ContactImage key={sn.url} src ={ logos[ sn.name ] }/> 
          </a> 
        ) )
        }
      </ContactWrapper>
      <div></div>
      <AdditionalInfoWrapper>
        <p>This blog was created by Renan Roggia using gatsby.</p>
        <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </AdditionalInfoWrapper>
    </FooterWrapper>
  )
}