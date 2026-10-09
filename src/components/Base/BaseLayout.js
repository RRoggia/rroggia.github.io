import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: var(--wide);
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`
const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #ffffff;
    --surface: #f4f6f7;
    --ink: #1a1d21;
    --muted: #5d6670;
    --rule: #e2e6ea;
    --accent: #0e6b58;
    --highlight: #fdf3d8;

    --font-sans: 'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
    --font-serif: 'Source Serif Pro', Georgia, 'Times New Roman', serif;
    --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

    --measure: 68ch;
    --wide: 1080px;
    color-scheme: light;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #14171a;
      --surface: #1d2125;
      --ink: #e6e9ec;
      --muted: #9aa4ae;
      --rule: #2c3137;
      --accent: #5cc7ad;
      --highlight: #3a3324;
      color-scheme: dark;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--ink);
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-sans);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: 2.25rem;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:focus-visible, input:focus-visible, select:focus-visible, summary:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 2px;
  }

  img {
    max-width: 100%;
  }

  ::selection {
    background: var(--highlight);
    color: var(--ink);
  }

  .prose {
    max-width: var(--measure);
    font-family: var(--font-serif);
    font-size: 1.125rem;
    line-height: 1.75;
    overflow-wrap: break-word;

    h1, h2, h3, h4 {
      margin: 2.25rem 0 0.75rem;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 1.15rem;
    }

    h4 {
      font-size: 1rem;
    }

    p, ul, ol, blockquote, table {
      margin: 0 0 1.25rem;
    }

    ul, ol {
      padding-left: 1.4em;
    }

    li {
      margin-bottom: 0.35rem;
    }

    li > ul, li > ol {
      margin: 0.35rem 0 0;
    }

    a {
      color: var(--accent);
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.2em;

      &:hover {
        text-decoration-thickness: 2px;
      }
    }

    strong {
      font-weight: 600;
    }

    code {
      font-family: var(--font-mono);
      font-size: 0.85em;
      background: var(--surface);
      border: 1px solid var(--rule);
      border-radius: 4px;
      padding: 0.1em 0.35em;
    }

    pre {
      overflow-x: auto;
      background: var(--surface);
      border: 1px solid var(--rule);
      border-radius: 6px;
      padding: 1rem;
      line-height: 1.5;

      code {
        background: none;
        border: 0;
        padding: 0;
      }
    }

    deckgo-highlight-code {
      --deckgo-highlight-code-font-family: var(--font-mono);
      --deckgo-highlight-code-font-size: 0.875rem;
      margin: 1.5rem 0;
    }

    blockquote {
      margin-left: 0;
      margin-right: 0;
      padding: 0.75rem 1.25rem;
      background: var(--highlight);
      border-left: 3px solid var(--accent);
      border-radius: 0 4px 4px 0;

      p:last-child {
        margin-bottom: 0;
      }
    }

    img {
      display: block;
      height: auto;
      margin: 1.5rem auto;
      border-radius: 4px;
    }

    table {
      display: block;
      overflow-x: auto;
      border-collapse: collapse;
      font-family: var(--font-sans);
      font-size: 0.95rem;
    }

    th, td {
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid var(--rule);
      text-align: left;
      vertical-align: top;
    }

    th {
      font-weight: 600;
    }

    hr {
      border: 0;
      border-top: 1px solid var(--rule);
      margin: 2.5rem 0;
    }

    @media (max-width: 600px) {
      font-size: 1.0625rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
    }
  }
`

export default function BaseLayout( { children } ) {
  return (
    <Wrapper>
      <GlobalStyle />
      {children}
    </Wrapper>
  )
}
