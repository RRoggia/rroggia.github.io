import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function SEO( { 'title': pageTitle, 'description': pageDescription } ) {
  const data = useStaticQuery( graphql`
    query SEO{
      site {
        siteMetadata {
          title
          siteUrl
          description
          mySelf {
            image
          }
        }
      }
    }
  ` )
  const { 'site': { 'siteMetadata': { 'title': siteTitle, siteUrl, 'description': siteDescription, 'mySelf': { image } } } } = data
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : `${siteTitle} | Software Engineer`
  const description = pageDescription || siteDescription

  return (
    <>
      <title>{ title }</title>
      <meta
        name="title"
        content={ title }
      />
      <meta
        name="description"
        content={ description }
      />

      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content={ siteUrl }
      />
      <meta
        property="og:title"
        content={ title }
      />
      <meta
        property="og:description"
        content={ description }
      />
      <meta
        property="og:image"
        content={ image }
      />

      <meta
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:url"
        content={ siteUrl }
      />
      <meta
        property="twitter:title"
        content={ title }
      />
      <meta
        property="twitter:description"
        content={ description }
      />
      <meta
        property="twitter:image"
        content={ image }
      />
    </>
  )
}
