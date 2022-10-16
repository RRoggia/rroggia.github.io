import React from 'react'
import BasePage from '../components/Base/BasePage'

export default function EngineerDiary( { pageContext } ) {
    const { 'frontmatter': post, html, tableOfContents } = pageContext


  return (
    <BasePage>
      <div>
        {post.title}
      </div>
    </BasePage>
  )
}

