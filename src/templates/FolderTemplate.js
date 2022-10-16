import React from 'react'
import BasePage from '../components/Base/BasePage'
import styled from 'styled-components'


const Section = styled.section`
  display: inline-grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width:100%;
`

const Card = styled.div`
  margin: 1rem 0.5rem;
  border: 1px black solid;
  text-align:center;
  align-items: center;
  @media (min-width: 600px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`

export default function EngineerDiary({ pageContext }) {
  const { folders, files, path, parentPath } = pageContext
  console.log(pageContext)
  return (
    <BasePage>
      <h1>Engineer's Diary</h1>
      {folders && folders.length > 0 &&
        (<div>
          <h2>Folders</h2>
          <Section>
            {folders.map(f => {
              return (
                <a href={`${parentPath}/${f}`}>
                  <Card>
                    <h3>{f}</h3>
                  </Card>
                </a>
              )
            })}
          </Section>
        </div>
        )
      }
      {files && files.length > 0 && (
        <div>
          <h2>Content</h2>
          <Section>
            {files.map(f => {
              return (
                <a href={`${parentPath}/${f.fileName}`}>
                  <Card>
                    <h3>{f.frontmatter.title}</h3>
                  </Card>
                </a>
              )
            })}
          </Section>
        </div>
      )
      }
    </BasePage>
  )
}

