import React from 'react'
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
function getCoverImage(covers, title, emptyCover) {
  const coverNode = covers.find(cover => {
    return cover.node.name === title
  })
  if (!coverNode) {
    return emptyCover
  }
  return coverNode.node
}

export default function BooksTimeline({ data }) {
  const {
    'allFile': { 'edges': covers },
    'file': emptyCover
  } = data

  const notes = allMarkdownRemarkToNotes(data)
    .filter(n => n.publishDate)
    .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate))

  console.log(notes)

  return (
    <BasePage>
      <VerticalTimeline>
        {notes && notes.map(n =>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date={n.publishDate}
            key={n.id}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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