const transform = require('./src/fileSystemToGraph')

/* eslint-disable no-use-before-define */
function createPath( pathPrefix, title ) {
  return `${pathPrefix}/${title.toLowerCase().replace( /\s/ug, '-' )}`
}

exports.createPages = async( { actions, graphql, reporter } ) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve( './src/templates/PostTemplate.js' )
  const noteTemplate = require.resolve( './src/templates/NoteTemplate.js' )
  const folderTemplate = require.resolve( './src/templates/FolderTemplate.js' )
  const fileTemplate = require.resolve( './src/templates/FileTemplate.js' )

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
      notes: allMarkdownRemark( filter: {fileAbsolutePath: {glob: "**/reading-content/**"}}, sort: { order: DESC, fields: [frontmatter___date] } ) {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
      diary: allMarkdownRemark( filter: {fileAbsolutePath: {glob: "**/engineer-diary/**"}}, sort: {order: DESC, fields: [frontmatter___date] } ) {
        edges {
          node {
            fileAbsolutePath
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
      const { 'frontmatter': { title }, html } = node

      if ( !title || html === '' ) {
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

  if( false ) {
    const diaryGraph = transform.fileSystemToGraph(result.data.diary.edges)
    createTemplatePagesForDiary( diaryGraph.root, "")
  }

  function createTemplatePagesForDiary( element, previousPath ) {
    if (diaryGraph[element].isFile){
      const path = `${previousPath}/${diaryGraph[element].fileName.split(".md")[0].toLowerCase()}`
      console.log(`Creating file page ${path}`)
      createPage( {
        path,
        'component': fileTemplate,
        'context': {
          parentPath: path,
          ...diaryGraph[element]
        }
      } )
    } else {
      const path = `${previousPath}/${element.toLowerCase()}`
      console.log(`Creating folder page ${path}`)
      createPage( {
        path,
        'component': folderTemplate,
        'context': {
          parentPath: path,
          files: diaryGraph[element].files,
          folders: diaryGraph[element].folders,
        }
      } )

      diaryGraph[element].folders.forEach( e => createTemplatePagesForDiary(e, path) )
      diaryGraph[element].files.forEach( e => createTemplatePagesForDiary(e, path) )
    }   
  }
}
