import React from 'react'

export default function Post( { post, html } ) {
  return (
    <div>
      <h1>
        {post.title}
      </h1>
      <h2>{ new Date( post.date ).toLocaleDateString() }</h2>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ '__html': html }}
      />
    </div>
  )
}
