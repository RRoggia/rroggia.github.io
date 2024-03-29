/* eslint-disable id-length */
import React from 'react'
import BasePage from '../components/Base/BasePage'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import ReadingContentCard from '../components/ReadingContentCard'
import useSearchReadingContent from '../components/SearchReadingContent'
import { allMarkdownRemarkToNotes, transformNotesByReadingStatus } from '../allMarkdownRemarkTransformation'
import NoteLink from '../components/NoteLink'

const Grid = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;

  @media (max-width: 600px) {
    display: block;
  }
`
const WhitinGrid = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-items:center;
    overflow-y:scroll;
    & > div{
      padding: 0px 100px 0 30px ;
    }
  }
`

const CheckNotesAction = styled.p`
  background: #0000000d;
  width: 50%;
  text-align: center;
  display: inline;
  padding: 0.3rem;
  border-radius: 0.3rem;
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
      <h2>Bookshelf</h2>
      {filterByName()}
      <Grid>
        {['Backlog', 'Planning', 'Reading', 'Read'].map(status => {
          return (
            <div key={status}>
              <h2>
                {`${status} (${!notesByStatus[status] ? 0 : notesByStatus[status]
                  .filter(filterByTitle)
                  .length})`}
              </h2>
              <WhitinGrid key={status}>
                {
                  !notesByStatus[status] ?
                    <p>Empty</p> :
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
                            {b.html ? <NoteLink title={b.title}><CheckNotesAction>Check my notes</CheckNotesAction></NoteLink> : <></>}
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
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/reading-content/**"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
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
