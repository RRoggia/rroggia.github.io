/* eslint-disable react/jsx-max-props-per-line */
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const AdditionalInfoWrapper = styled.div`
  font-size: 0.7rem;

  @media (max-width: 600px) {
    margin-top: 1.3rem;
    text-align: center;
  }
`

export default function AdditionalInformation() {
  const data = useStaticQuery( graphql`
    query Name{
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
    <AdditionalInfoWrapper>
      <p>{`This blog was created by ${name} using gatsby.`}</p>
      <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
    </AdditionalInfoWrapper>
  )
}
