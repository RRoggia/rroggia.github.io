import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import createNotePath from '../components/Notes/notePath'
import BasePage from '../components/Base/BasePage'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function nodeToNotes(node) {
  return {
    ...node.node.frontmatter,
    'url': createNotePath(node.node.frontmatter.title)
  }
}

const BookCover = styled(GatsbyImage)`
  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`
function getCoverImage( covers, title, emptyCover ) {
  console.log(covers)
  const coverNode = covers.find( cover => {
    return cover.node.name === title
  } )
  if ( !coverNode ) {
    return emptyCover
  }
  return coverNode.node
}

export default function BooksTimeline({ data }) {
  const {
    'allMarkdownRemark': { edges },
    'allFile': { 'edges': covers },
    'file': emptyCover
  } = data
  const notes = edges
    .map(nodeToNotes)
    .filter(n => n.publishDate)

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
            <p>Language: {n.language}</p>
            <p>ISBN: {n.id}</p>
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
            language
            coverPath
            status
            date
            publishDate
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