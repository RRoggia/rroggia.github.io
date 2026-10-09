import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const NoteCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 150px;
  text-align: left;
`

// Covers stay on white so transparent placeholder art remains visible in dark mode.
const BookCover = styled(GatsbyImage)`
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);
`

const Title = styled.h3`
  margin: 0.85rem 0 0.25rem;
  font-size: 0.95rem;
  line-height: 1.3;
`

const Subtitle = styled.p`
  margin: 0 0 0.25rem;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.35;
`

const Meta = styled.p`
  margin: 0.25rem 0 0;
  color: var(--muted);
  font-size: 0.8rem;
`

const Status = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  background: var(--surface);
  color: ${(note) => note.status === 'Read' ? 'var(--accent)' : 'var(--muted)'};
  font-size: 0.75rem;
  font-weight: 500;
`

function getCoverImage(covers, title, emptyCover) {
  const coverNode = covers.find(cover => {
    return cover.node.name === title
  })
  if (!coverNode) {
    return emptyCover
  }
  return coverNode.node
}

export default function ReadingContentCard({ title, subtitle, status, coverPath, language, date, covers, emptyCover, hasRibbon = true }) {
  return (
    <NoteCard>
      <BookCover
        image={getImage(getCoverImage(covers, `${coverPath}`, emptyCover))}
        alt={title}
      />
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : <></>}
      <Meta>{[language, date].filter(Boolean).join(', ')}</Meta>
      {hasRibbon && status ? <Status status={status}>{status}</Status> : <></>}
    </NoteCard>
  )
}
