import { Card, CardContent, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { pipe, path } from 'ramda';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '../components/common/Dialog';
import SceneSetup from './SceneDefinition/SceneSetup';
import ClearIcon from '@material-ui/icons/Clear';
import sceneCardHOC, { storePropKey } from './hoc/sceneCardHOC';
import './SceneCard.css';
import { Draggable } from 'react-beautiful-dnd';
/**
 * @typedef SceneProps
 * @param {string} name
 */

/**
 * @function
 * @name SceneCard
 * @param {SceneProps} props
 */
function SceneCard({
  [storePropKey]: SCENE,
  updateOrAddScene,
  removeScene,
  appendNewScene,
  id,
  index,
}) {
  const [name, setName] = useState(SCENE.name ? SCENE.name : '');

  const [open, setOpen] = useState(false);

  const editName = pipe(path(['target', 'value']), setName);

  const closeDialog = () => setOpen(false);
  const openDialog = () => setOpen(true);
  const removeObject = () => removeScene({ id });
  const saveAndClose = ({ ...data }) => {
    updateOrAddScene({
      id,
      name,
      data,
    });
    closeDialog();
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            margin: '1em',
            border: '1px solid lightgrey',
            borderRadius: '2px',
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.5 : 1,
          }}
          className="SceneCard"
          raised={true}
        >
          <CardContent className="SceneCardContent">
            <TextField
              className="SceneName"
              label="Scene Name"
              onChange={editName}
              defaultValue={name}
            />
            <span className="SceneCardActions">
              <EditIcon className="SceneEdit" onClick={openDialog} />
              <ClearIcon className="SceneDelete" onClick={removeObject} />
              <AddIcon className="AddScene" onClick={appendNewScene} />
            </span>
            <Dialog open={open}>
              <SceneSetup save={saveAndClose} close={closeDialog} />
            </Dialog>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}

export default sceneCardHOC(SceneCard);
