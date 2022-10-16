import React from 'react'
import BasePage from '../components/Base/BasePage'

export default function EngineerDiary( { pageContext } ) {
  const { folders, files } = pageContext

  return (
    <BasePage>
      <h2>Folders</h2>
      {folders && folders.map( f => {
        return (
          <div>
            {f}
          </div>
        )
      })}
      <h2>Content</h2>
      {files && files.map( f => {
        return (
          <div>
            {f}
          </div>
        )
      })}
    </BasePage>
  )
}

