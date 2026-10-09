import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Intro = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
  padding-bottom: 3rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--rule);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding-bottom: 2rem;
  }
`

const Photo = styled.img`
  display: block;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`

const Name = styled.h1`
  margin: 0 0 0.75rem;
  font-size: clamp(2.5rem, 7vw, 4rem);
  line-height: 1;
  letter-spacing: -0.035em;
`

const Description = styled.p`
  margin: 0;
  max-width: 34rem;
  color: var(--muted);
  font-size: 1.15rem;
  line-height: 1.5;
`

export default function Profile() {
  const data = useStaticQuery( graphql`
    query Profile{
      site {
        siteMetadata {
          mySelf {
            name
            description
            image
          }
        }
      }
    }
  ` )
  const { 'site': { 'siteMetadata': { 'mySelf': { name, description, image } } } } = data
  return (
    <Intro>
      <Photo
        src={ image }
        alt={ name }
      />
      <div>
        <Name>{ name }</Name>
        <Description>{ description }</Description>
      </div>
    </Intro>
  )
}
