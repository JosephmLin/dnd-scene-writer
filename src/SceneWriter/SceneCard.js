import { Card, CardContent, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { pipe, path } from 'ramda';
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
 * @name SceneCard
 * @param {SceneProps} props
 */
export default function SceneCard(props) {
	const [ name, setName ] = useState('');

	const [ open, setOpen ] = useState(false);

	const editName = pipe(
		path([ 'target', 'value' ]),
		setName
	);

	const closeDialog = () => setOpen(false);
	const openDialog = () => setOpen(true);
	const removeObject = () => props.removeObject();
	const saveAndClose = () => {
		closeDialog();
	}

	return <Card className="SceneCard" raised={true}>
		<CardContent className="SceneCardContent">
			<TextField className="SceneName" label="Scene Name" onChange={editName} defaultValue={props.name} />
			<span className="SceneCardActions">
				<EditIcon className="SceneEdit" onClick={openDialog} />
				<ClearIcon className="SceneDelete" onClick={removeObject} />
			</span>
			<SaveDialog open={open}>
				{/* I need to rethink how we're saving and closing here */}
				<SceneSetup save={saveAndClose} close={closeDialog} />
			</SaveDialog>
		</CardContent>
	</Card>
}
