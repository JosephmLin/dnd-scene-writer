import { Card, CardContent, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { pipe, path } from 'ramda';
import EditIcon from '@material-ui/icons/Edit';
import SaveDialog from '../common/SaveDialog';
import SceneSetup from './SceneSetup';
import ClearIcon from '@material-ui/icons/Clear';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './constants';

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

	const [ { isDragging }, drag ] = useDrag({
		item: { type: ItemTypes.SCENE },
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	})

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

	return <Card className="Card" style={{ opacity: isDragging ? 0.5 : 1 }} raised={true}>
		<CardContent className="CardContent">
			<TextField className="SceneName" label="Scene Name" onChange={editName} defaultValue={props.name} />
			<span className="CardActions">
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
