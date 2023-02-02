import React from 'react'
import BasePage from '../../components/Base/BasePage'
import { graphql } from 'gatsby'

const CoursePage = ({ data }) => {
    let chapters = data.allMarkdownRemark.edges.map( e => e.node.frontmatter)
    console.log(chapters)

    return (
    <BasePage>
        
        <h3>Chapters</h3>
        {chapters.map(c => 
            <p>{c.title}</p>
        )}    
        
    </BasePage>
  )
}

export default CoursePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/content/tutorials/js-basics/**"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          html
          frontmatter {
            title
            metadata
          }
        }
      }
    }
  }
`

