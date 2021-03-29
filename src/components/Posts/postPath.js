export default function createPostPath( title ) {
  return `/posts/${title.toLowerCase().replace( /\s/ug, '-' )}`
}
