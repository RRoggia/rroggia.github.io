import { Placeholder } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
	padding: 0 15px  0  0;
  font-weight: bold;
	width:20%;
`

const Input = styled.input`
	all: unset;
	border-bottom: 1px solid black;
	width:80%;
`
const Div = styled.div`
	background: lightpurple;
	box-shadow: 5px 5px 5px 2px lightgray;
	border-radius: 5px;
	width:95%;
	margin: 30px 1%;
	padding: 10px;
`

export default function SearchReadingContent() {
    const [ readingContentNameFilter, setReadingContentNameFilter ] = useState()

	return [
		readingContentNameFilter,
		()=> (
			<Div>
				<Label for="readingContentFilter">Filter</Label>
				<Input 
					key="readingContentFilter"
					onChange={ ( { 'target': { value } } ) => {
						setReadingContentNameFilter( value )
					} }
					placeholder="e.g. Agile"
				/>
			</Div>
		)
	]
}
