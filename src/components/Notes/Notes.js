import React from 'react'

export default function Notes( { notes } ) {
  return (
    <div>
      { notes && notes.map( n => <p key={ n.title }> { n.title } </p> ) }
    </div>
  )
}
