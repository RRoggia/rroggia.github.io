import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
	flex: none;
	font-weight: 500;
`

const Input = styled.input`
	flex: 1;
	min-width: 0;
	border: 0;
	background: transparent;
	color: inherit;
	font: inherit;

	&:focus {
		outline: none;
	}
`
const Div = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	max-width: 28rem;
	margin: 0 0 2.5rem;
	padding: 0.6rem 0.9rem;
	border: 1px solid var(--rule);
	border-radius: 6px;

	&:focus-within {
		border-color: var(--accent);
	}
`

export default function SearchReadingContent() {
    const [ readingContentNameFilter, setReadingContentNameFilter ] = useState()

	return [
		readingContentNameFilter,
		function filterByName () {
      return (
			<Div>
				<Label htmlFor="readingContentFilter">Filter</Label>
				<Input
					id="readingContentFilter"
					key="readingContentFilter"
					type="search"
					onChange={ ( { 'target': { value } } ) => {
						setReadingContentNameFilter( value )
					} }
					placeholder="Search by title, e.g. Agile"
				/>
			</Div>
      )
    }
	]
}
