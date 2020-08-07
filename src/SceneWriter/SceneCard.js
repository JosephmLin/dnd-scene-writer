import { Card, CardContent, TextField } from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { pipe, path } from 'ramda';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import SaveDialog from '../components/SaveDialog';
import SceneSetup from './SceneDefinition/SceneSetup';
import ClearIcon from '@material-ui/icons/Clear';
import sceneHOC, { storePropKey } from './hoc/sceneCardHOC';
import { TYPES } from './constants/DraggableTypes';
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
function SceneCard({
  [storePropKey]: SCENE,
  updateScene,
  removeScene,
  moveScene,
  addScene,
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
    updateScene({
      id,
      name,
      data,
    });
    closeDialog();
  };

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: TYPES.SCENE_CARD,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex !== hoverIndex) {
        moveScene(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  // useDrag will be responsible for making an element draggable. It also exposes "isDragging" method to add any styles while dragging
  const [{ isDragging }, drag] = useDrag({
    item: { type: TYPES.SCENE_CARD, id: id, index: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Card ref={ref} className="SceneCard" raised={true}>
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
          <AddIcon className="AddScene" onClick={addScene} />
        </span>
        <SaveDialog
          // title="Set up a Scene!"
          // close={closeDialog}
          // save={saveAndClose}
          open={open}
        >
          <SceneSetup save={saveAndClose} close={closeDialog} />
        </SaveDialog>
      </CardContent>
    </Card>
  );
}

export default sceneHOC(SceneCard);
