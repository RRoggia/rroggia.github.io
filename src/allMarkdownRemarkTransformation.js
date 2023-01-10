import createPostPath from './components/Posts/postPath'
import createNotePath from './components/Notes/notePath'

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

export function allMarkdownRemarkToNotes(data) {
  const { 'allMarkdownRemark': { edges } } = data
  return edges.map((node) => ({
    ...node.node.frontmatter,
    'url': createNotePath(node.node.frontmatter.title)
  }))
}

export function transformNotesByReadingStatus(byStatus, note) {
  if (!byStatus[note.status]) {
    byStatus[note.status] = []
  }
  byStatus[note.status].push(note)
  return byStatus
}