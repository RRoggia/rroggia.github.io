import React from 'react'
import BasePage from '../components/Base/BasePage'

export default function TutorialFileTemplate( { pageContext } ) {
  const {  title, html } = pageContext

  return (
    <BasePage>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ '__html': html }}/>
      </div>

    </BasePage>
  )
}

