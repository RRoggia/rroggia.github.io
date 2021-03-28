import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import myPhoto from '../images/my-photo.jpg'

const PersonalInfoWrapper = styled.div`
  padding: 1rem;
  text-align:center;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items:center;
  }
`
const RoundedAuthorPhoto = styled.img`
  border-radius: 100%;
  max-width: 150px;
  max-height: 150px;
  border: 1px solid black;
  &:hover {
    border: 2px solid black;
  }

  @media (max-width: 600px) {
    max-width: 75px;
    max-height: 75px;
  }
`
const Name = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
`

export default function MenuBar() {
  const data = useStaticQuery( graphql`
    query Profile{
      site {
        siteMetadata {
          mySelf {
            name
            description
          }
        }
      }
    }
  ` )
  const { site: { siteMetadata: { mySelf: { name, description } } } } = data
  return (
    <PersonalInfoWrapper>
      <RoundedAuthorPhoto src={myPhoto} alt={ `${ name }'s photo` }></RoundedAuthorPhoto>
      <div>
        <Name>{ name }</Name>
        <p>{ description }</p>
      </div>
    </PersonalInfoWrapper>
  )
}