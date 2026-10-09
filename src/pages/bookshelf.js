/* eslint-disable id-length */
import React from 'react'
import BasePage from '../components/Base/BasePage'
import SEO from '../components/Base/SEO'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import ReadingContentCard from '../components/ReadingContentCard'
import useSearchReadingContent from '../components/SearchReadingContent'
import { allMarkdownRemarkToNotes, transformNotesByReadingStatus } from '../allMarkdownRemarkTransformation'
import NoteLink from '../components/NoteLink'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

const ColumnTitle = styled.h2`
  margin: 0 0 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--rule);
  font-size: 1.1rem;

  span {
    color: var(--muted);
    font-weight: 400;
  }
`

const WhitinGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  @media (max-width: 900px) {
    flex-direction: row;
    gap: 1.5rem;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
`

const Empty = styled.p`
  margin: 0;
  color: var(--muted);
`

const CheckNotesAction = styled( NoteLink )`
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

export default function Bookshelf({ data }) {
  const [readingContentNameFilter, filterByName] = useSearchReadingContent()
  const {
    'allFile': { 'edges': covers },
    'file': emptyCover
  } = data

  const notesByStatus = allMarkdownRemarkToNotes(data)
    .reduce(transformNotesByReadingStatus, {})

  const filterByTitle = b => readingContentNameFilter ? b.title.toLowerCase().includes(readingContentNameFilter.toLowerCase()) : true

  return (
    <BasePage>
      <h1>Bookshelf</h1>
      {filterByName()}
      <Grid>
        {['Backlog', 'Planning', 'Reading', 'Read'].map(status => {
          return (
            <div key={status}>
              <ColumnTitle>
                {status} <span>{!notesByStatus[status] ? 0 : notesByStatus[status]
                  .filter(filterByTitle)
                  .length}</span>
              </ColumnTitle>
              <WhitinGrid key={status}>
                {
                  !notesByStatus[status] ?
                    <Empty>Nothing here yet.</Empty> :
                    notesByStatus[status]
                      .filter(filterByTitle)
                      .map(b => {
                        return (
                          <div key={b.title}>
                            <ReadingContentCard
                              key={b.title}
                              title={b.title}
                              subtitle={b.subtitle}
                              status={b.status}
                              coverPath={b.coverPath}
                              language={b.language}
                              date={b.date}
                              covers={covers}
                              emptyCover={emptyCover}
                              hasRibbon={false}
                            />
                            {b.html ? <CheckNotesAction title={b.title}>Read my notes</CheckNotesAction> : <></>}
                          </div>
                        )
                      })
                }
              </WhitinGrid>
            </div>
          )
        })}
      </Grid>
    </BasePage>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/reading-content/**"}}, sort: {frontmatter: { date: DESC }}) {
      edges {
        node {
          html
          frontmatter {
            title
            subtitle
            language
            coverPath
            status
            date
          }
        }
      }
    }
    allFile(filter: { extension : {in: ["jpg", "png"]}, absolutePath: { glob:"**/covers/**"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData( width: 150 ) 
          }
          name
        }
      }
    }
    file(name: {eq: "empty"}) {
      name
      childImageSharp {
        gatsbyImageData( width: 150 )
      }
    }
  }
`

export const Head = () => <SEO title="Bookshelf" />
