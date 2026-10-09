import React from 'react'
import { Link } from 'gatsby'
import createNotePath from '../Notes/notePath'

export default function NoteLink( { title, children, className } ) {
  return (
    <Link
      to={ createNotePath( title ) }
      className={ className }
    >
      {children}
    </Link>
  )
}
