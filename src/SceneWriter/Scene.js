import { Card, CardContent, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { pipe, path, tap } from 'ramda';
import EditIcon from '@material-ui/icons/Edit';

/**
 * @typedef SceneProps
 * @param {string} name 
 */

/**
 * @function
 * @name SceneFn
 * @param {SceneProps} props
 */
function SceneFn(props) {
	const [ name, setName ] = useState('');
	const editName = pipe(
		path([ 'target', 'value' ]),
		tap(console.log),
		setName
	);

	const cardOnClick = tap(console.log);

	return <Card raised={true}>
		<CardContent>
			<TextField label="Scene Name" onChange={editName} defaultValue={props.name} />
			<EditIcon onClick={cardOnClick} />
		</CardContent>
	</Card>
}

export default SceneFn;