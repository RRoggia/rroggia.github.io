exports.createPages = async ( { actions, graphql, reporter } ) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve( './src/templates/PostTemplate.js' )

  const result = await graphql(`
    {
      allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date] } ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach( ( { node } ) => {
    const { title } = node.frontmatter
    const path = title.toLowerCase().replace( /\s/g, '-' )
    createPage( {
      path: `posts/${ path }`,
      component: blogPostTemplate,
      context: {
        title: title,
      },
    } )
  } )
}