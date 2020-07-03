import { Card, CardContent, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { pipe, path, tap } from 'ramda';
import EditIcon from '@material-ui/icons/Edit';
import SaveDialog from '../common/SaveDialog';
import SceneSetup from './SceneSetup';
import './SceneCard.css';

/**
 * @typedef SceneProps
 * @param {string} name 
 */

/**
 * @function
 * @name SceneFn
 * @param {SceneProps} props
 */
export default function SceneFn(props) {
	const [ name, setName ] = useState('');

	const [ open, setOpen ] = useState(false);

	const editName = pipe(
		path([ 'target', 'value' ]),
		tap(console.log),
		setName
	);

	return <Card className="Card" raised={true}>
		<CardContent>
			<TextField label="Scene Name" onChange={editName} defaultValue={props.name} />
			<EditIcon onClick={() => setOpen(true)} />
			<SaveDialog open={open}>
				<SceneSetup />
			</SaveDialog>
		</CardContent>
	</Card>
}
