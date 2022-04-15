import React from 'react'
import BasePage from '../components/Base/BasePage'
import Graph from 'react-graph-vis'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'


const BookDependencies = ( { data } ) => {
  const {
    'allMarkdownRemark': { edges },
    'allFile': { 'edges': fallbackCovers },
    'allImageSharp': { 'edges': covers },
    'file': emptyCover
  } = data

  const nodes = edges.map( ( { 'node': { 'frontmatter': { title, coverPath, references, id } } }, index ) => {
    const coverReference2 = covers.find( cover => {
      const [ imageName ] = cover.node.fixed.originalName.split( '.' )
      return imageName === coverPath
    } )
    const image = coverReference2 ? coverReference2.node.fixed.src : getImage( emptyCover ).images.fallback.src

    const coverReference = fallbackCovers.find( cover => cover.node.name === coverPath )
    const coverNode = getImage( coverReference ? coverReference.node : emptyCover )
    const fallbackImage = coverNode.images.fallback.src

    return ( {
      'id': id ? id : index,
      title,
      'label': title,
      'shape': 'image',
      image,
      'brokenImage': fallbackImage,
      'size': 50,
      references
    } )
  } )

  const graphEdges = nodes.flatMap( node => {
    return node.references?.map( ref => ( {
      'from': node.id,
      'to': ref
    } ) )
  } ).filter( node => node )

  const graph = {
    nodes,
    'edges': graphEdges
  }

  const options = {
    'edges': {
      'color': '#000000',
      'length': 300,
    },
    'height': '1000px',
    'physics': {
      'barnesHut': {
        'centralGravity': 0
      }
    }
  }

  return (
    <BasePage>
      <div>
        <h1>Book's dependencies</h1>
        <Graph
          graph={ graph }
          options={ options }
        />
      </div>
    </BasePage>
  )
}

export default BookDependencies

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
            date(fromNow:true)
            references
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
    allImageSharp {
      edges {
        node {
          fixed {
            originalName
            src
          }
        }
      }
    }    
  }
`
