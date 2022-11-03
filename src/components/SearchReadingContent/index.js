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
	width:80%;
`
const Div = styled.div`
	background: lightpurple;
	border: 1px solid;
	border-color: #d0d7de;
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
