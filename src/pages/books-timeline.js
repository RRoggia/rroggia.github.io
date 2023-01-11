import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import BasePage from '../components/Base/BasePage'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { allMarkdownRemarkToNotes } from '../allMarkdownRemarkTransformation'

const BookCover = styled(GatsbyImage)`
  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`
const SelectYear = styled.select`
  width: 100px;
  height: 50px;
  font-size: 1.3rem;
  text-align: center;
  border:none;
  border-radius:0.3rem;
  margin-left: 10px;
  appearance: none;
  background: #0000000d;
`

const SelectDiv = styled.div`
  display: flex;
  margin: 15px;
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

const EMPTY = "------"
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
      <SelectDiv>
        <p>Year:</p>
        <SelectYear onChange={(e) => { setSelectedYear(e.target.value) }}>
          {yearOptions && yearOptions.map(y => {
            return (
              <option value={y} key={y}>{y}</option>
            )
          })}
        </SelectYear>
      </SelectDiv>
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
    </BasePage>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/reading-content/**"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
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