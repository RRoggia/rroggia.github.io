export default function createPostPath( title ) {
  return `/notes/${title.toLowerCase().replace( /\s/ug, '-' )}`
}
