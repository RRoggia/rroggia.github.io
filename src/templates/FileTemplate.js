import React from 'react'
import BasePage from '../components/Base/BasePage'

export default function EngineerDiary( { pageContext } ) {
    const { 'frontmatter': post, html, tableOfContents } = pageContext


  return (
    <BasePage>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ '__html': html }}/>
      </div>

    </BasePage>
  )
}

