import React from 'react'
import styled from 'styled-components'
import email from '../images/email.svg'

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items:center;
  border-top: 1px solid black;
  padding: 3rem;
  text-transform: uppercase;
  margin-top 3rem;
`

const ContactWrapper = styled.div`
  text-align: center;
`

const AdditionalInfoWrapper = styled.div`
  font-size: 0.7rem;
`

const ContactImage = styled.img`
  margin-right: 0.5rem;
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;
`

export default function Footer( { contactMe } ) {
  return (
    <FooterWrapper>
      <ContactWrapper>
        <p>Did you like my work? Contact me at:</p>
        <a href={ `mailto:${ contactMe.email }` }>
          <ContactImage src={ email }/>
        </a>
        { contactMe.socialNetworks.map( sn => (
          <a href={ sn.url} target="_blank">
            <ContactImage key={sn.url} src ={ sn.logo }/> 
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