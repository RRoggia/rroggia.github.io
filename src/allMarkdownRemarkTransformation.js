import createPostPath from './components/Posts/postPath'

export function allMarkdownRemarkToPost(data) {
  const { 'allMarkdownRemark': { edges } } = data
  return edges.map((node) => (
    {
      ...node.node.frontmatter,
      'excerpt': node.node.excerpt,
      'timeToRead': node.node.timeToRead,
      'url': createPostPath(node.node.frontmatter.title)
    }
  ))
}