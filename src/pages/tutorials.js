import React from 'react'
import styled from 'styled-components'
import BasePage from '../components/Base/BasePage'
import { graphql } from 'gatsby'

const Card = styled.div`
  margin: 1rem 0.5rem;
  border: 1px black solid;
  border-color: #d0d7de;
  text-align:center;
  align-items: center;
  @media (min-width: 600px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`
const TutorialsPage = () => {

    const tutorials = [
        {
            path: '/tutorials/js-basics',
            title: 'Javascript Basics',
            description: 'Learning how to program with Javascript'
        }
    ]
  
    return (
    <BasePage>
        
        {tutorials.map( t => 
            <a href={t.path}>
                <Card>
                    <h3>{t.title}</h3>
                    <p>{t.description}</p>
                </Card>
            </a>
        )}

    </BasePage>
  )
}

export default TutorialsPage


