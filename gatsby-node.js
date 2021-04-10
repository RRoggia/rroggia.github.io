/* eslint-disable no-use-before-define */
function createPath( pathPrefix, title ) {
  return `${pathPrefix}/${title.toLowerCase().replace( /\s/ug, '-' )}`
}

exports.createPages = async( { actions, graphql, reporter } ) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve( './src/templates/PostTemplate.js' )
  const noteTemplate = require.resolve( './src/templates/NoteTemplate.js' )

  const result = await graphql( `
    {
      posts: allMarkdownRemark( filter: {fileAbsolutePath: {glob: "**/posts/**"}}, sort: { order: DESC, fields: [frontmatter___date] } ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
      notes: allMarkdownRemark( filter: {fileAbsolutePath: {glob: "**/notes/**"}}, sort: { order: DESC, fields: [frontmatter___date] } ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  ` )

  if ( result.errors ) {
    reporter.panicOnBuild( `Error while running GraphQL query.` )
    return
  }

  result.data.posts.edges.forEach( createTemplatePages( 'posts', blogPostTemplate ) )
  result.data.notes.edges.forEach( createTemplatePages( 'notes', noteTemplate ) )

  function createTemplatePages( pathPrefix, template ) {
    return ( { node } ) => {
      const { title } = node.frontmatter

      if ( !title ) {
        return
      }

      const path = createPath( pathPrefix, title )
      createPage( {
        path,
        'component': template,
        'context': {
          title,
        },
      } )
    }
  }
}
