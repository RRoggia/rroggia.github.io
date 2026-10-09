import React from 'react'
import styled from 'styled-components'
import BasePage from '../components/Base/BasePage'
import SEO from '../components/Base/SEO'

const Title = styled.h1`
  margin: 0 0 0.5rem;
`

const Path = styled.p`
  margin: 0 0 2.5rem;
  color: var(--muted);
`

const SectionTitle = styled.h2`
  margin: 2rem 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--muted);
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Entry = styled.a`
  display: block;
  height: 100%;
  padding: 1rem 1.25rem;
  border: 1px solid var(--rule);
  border-radius: 6px;
  font-weight: 500;
  text-transform: ${props => props.$folder ? 'capitalize' : 'none'};

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`

function formatPath( path ) {
  return ( path || '' )
    .split( '/' )
    .filter( Boolean )
    .slice( 1 )
    .map( segment => segment.replace( /-/gu, ' ' ).replace( /^\w/u, letter => letter.toUpperCase() ) )
    .join( ' / ' )
}

export default function EngineerDiary({ pageContext }) {
  const { folders, files, parentPath } = pageContext
  const location = formatPath( parentPath )
  return (
    <BasePage>
      <Title>Engineer's diary</Title>
      <Path>{ location || 'Structured notes on cloud platforms, tooling and infrastructure.' }</Path>
      {folders && folders.length > 0 &&
        (<section>
          <SectionTitle>Topics</SectionTitle>
          <Grid>
            {folders.map(f => (
              <li key={f}>
                <Entry
                  href={`${parentPath}/${f}`}
                  $folder
                >
                  {f.replace( /-/gu, ' ' )}
                </Entry>
              </li>
            ))}
          </Grid>
        </section>
        )
      }
      {files && files.length > 0 && (
        <section>
          <SectionTitle>Pages</SectionTitle>
          <Grid>
            {files.map(f => (
              <li key={f.fileName}>
                <Entry href={`${parentPath}/${f.fileName}`}>
                  {f.frontmatter.title}
                </Entry>
              </li>
            ))}
          </Grid>
        </section>
      )
      }
    </BasePage>
  )
}

export function Head( { pageContext } ) {
  const location = formatPath( pageContext.parentPath )
  return <SEO title={ location ? `${location} | Engineer's diary` : `Engineer's diary` } />
}
