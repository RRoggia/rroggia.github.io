import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import BasePage from '../components/Base/BasePage'
import SEO from '../components/Base/SEO'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { allMarkdownRemarkToNotes } from '../allMarkdownRemarkTransformation'

const BookCover = styled(GatsbyImage)`
  background: #ffffff;

  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`
const SelectYear = styled.select`
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: var(--bg);
  color: inherit;
  font: inherit;
`

const TimelineTheme = styled.div`
  .vertical-timeline::before {
    background: var(--rule);
  }

  .vertical-timeline-element-content {
    background: var(--surface);
    color: var(--ink);
    box-shadow: none;
    border: 1px solid var(--rule);
  }

  .vertical-timeline-element-content-arrow {
    display: none;
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px var(--bg);
  }
`

const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 2rem;
`

function getCoverImage(covers, title, emptyCover) {
  const coverNode = covers.find(cover => {
    return cover.node.name === title
  })
  if (!coverNode) {
    return emptyCover
  }
  return coverNode.node
}

const EMPTY = "All years"
export default function BooksTimeline({ data }) {
  const [notes, setNotes] = useState([])
  const [selectedYear, setSelectedYear] = useState(EMPTY)
  const [yearOptions, setYearOptions] = useState([])
  const [backgrounds, setBackgrounds] = useState({})

  useEffect(() => {
    const initialState = allMarkdownRemarkToNotes(data)
      .filter(n => n.publishDate)
      .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate))
    setNotes(initialState)

    const initialYearOptions = [EMPTY, ...Array.from(initialState.reduce((years, element) => {
      const date = new Date(element.publishDate)
      years.add(date.getFullYear())
      return years
    }, new Set()))]
    setYearOptions(initialYearOptions)

    setBackgrounds(initialYearOptions.reduce((bg, y) => {
      bg[y] = `rgb(${Math.ceil(Math.random() * 256)}, ${Math.ceil(Math.random() * 256)}, ${Math.ceil(Math.random() * 256)})`
      return bg
    }, backgrounds))
  }, [])

  const {
    'allFile': { 'edges': covers },
    'file': emptyCover
  } = data

  return (
    <BasePage>
      <h1>Books timeline</h1>
      <SelectDiv>
        <label htmlFor="timelineYear">Publication year</label>
        <SelectYear id="timelineYear" onChange={(e) => { setSelectedYear(e.target.value) }}>
          {yearOptions && yearOptions.map(y => {
            return (
              <option value={y} key={y}>{y}</option>
            )
          })}
        </SelectYear>
      </SelectDiv>
      <TimelineTheme>
      <VerticalTimeline>

        {notes && notes
          .filter(n => selectedYear === EMPTY || new Date(n.publishDate).getFullYear() === parseInt(selectedYear))
          .map(n =>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date={n.publishDate}
              key={n.id}
              iconStyle={{ background: backgrounds[new Date(n.publishDate).getFullYear()], color: '#fff' }}
            >
              <BookCover
                image={getImage(getCoverImage(covers, n.coverPath, emptyCover))}
                alt={n.title}
              />
              <h3 className="vertical-timeline-element-title">{n.title}</h3>
              {n.subtitle ? <h4 className="vertical-timeline-element-subtitle">{n.subtitle}</h4> : <></>}
              <p>ISBN: {n.id}</p>
              <p>Edition: {n.edition}</p>
              <p>Authors: {n?.authors?.toString().replace(/,/g, ', ')}</p>
              {n.translations ? <p>Translations: {n?.translations}</p> : <></>}
              <p>Language: {n.language}</p>
            </VerticalTimelineElement>
          )}
      </VerticalTimeline>
      </TimelineTheme>
    </BasePage>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/reading-content/**"}}, sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          frontmatter {
            id
            title
            subtitle
            language
            coverPath
            date
            edition
            publishDate
            authors
            translations
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

export const Head = () => <SEO title="Books timeline" />
