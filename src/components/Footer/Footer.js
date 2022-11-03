import React from 'react'
import styled from 'styled-components'
import ContactMe from './ContactMe'
import AdditionalInformation from './AdditionalInformation'

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items:center;
  border-top: 1px solid black;
	border-color: #d0d7de;
  padding: 3rem;
  text-transform: uppercase;
  margin-top: 3rem;

  @media (max-width: 600px) {
    display:block;
  }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <ContactMe />
      <div />
      <AdditionalInformation />
    </FooterWrapper>
  )
}
