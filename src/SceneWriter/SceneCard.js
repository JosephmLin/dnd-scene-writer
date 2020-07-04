import { Card, CardContent, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { pipe, path, tap } from 'ramda';
import EditIcon from '@material-ui/icons/Edit';
import SaveDialog from '../common/SaveDialog';
import SceneSetup from './SceneSetup';
import ClearIcon from '@material-ui/icons/Clear';
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
		setName
	);

	const closeDialog = () => setOpen(false);
	const openDialog = () => setOpen(true);
	const removeObject = () => props.removeObject();
	const saveAndClose = () => pipe(

	)

	return <Card className="Card" raised={true}>
		<CardContent className="CardContent">
			<TextField className="SceneName" label="Scene Name" onChange={editName} defaultValue={props.name} />
			<span className="CardActions">
				<EditIcon className="SceneEdit" onClick={openDialog} />
				<ClearIcon className="SceneDelete" onClick={removeObject} />
			</span>
			<SaveDialog open={open}>
				<SceneSetup saveAndClose={} close={closeDialog} />
			</SaveDialog>
		</CardContent>
	</Card>
}
